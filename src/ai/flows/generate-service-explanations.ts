'use server';

/**
 * @fileOverview Generates SEO-optimized explanatory text for each service section using AI.
 *
 * - generateServiceExplanations - A function that generates the service explanations.
 * - GenerateServiceExplanationsInput - The input type for the generateServiceExplanations function.
 * - GenerateServiceExplanationsOutput - The return type for the generateServiceExplanations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateServiceExplanationsInputSchema = z.object({
  serviceName: z.string().describe('The name of the service to generate an explanation for.'),
});
export type GenerateServiceExplanationsInput = z.infer<typeof GenerateServiceExplanationsInputSchema>;

const GenerateServiceExplanationsOutputSchema = z.object({
  explanation: z.string().describe('The generated explanation for the service.'),
});
export type GenerateServiceExplanationsOutput = z.infer<typeof GenerateServiceExplanationsOutputSchema>;

export async function generateServiceExplanations(input: GenerateServiceExplanationsInput): Promise<GenerateServiceExplanationsOutput> {
  return generateServiceExplanationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateServiceExplanationsPrompt',
  input: {schema: GenerateServiceExplanationsInputSchema},
  output: {schema: GenerateServiceExplanationsOutputSchema},
  prompt: `You are an SEO expert and a high-end automotive industry specialist. 
  Generate a detailed, professional, and SEO-optimized explanation for an automotive service section on a high-end European car repair website in Riyadh, Saudi Arabia.
  
  The explanation should:
  1. Use keywords relevant to the service and location (e.g., مركز صيانة سيارات أوروبية الرياض, قطع غيار أصلية, فحص كمبيوتر).
  2. Highlight expertise, precision, and the use of original parts.
  3. Be written in professional, engaging Arabic that builds trust.
  4. Be approximately 3-5 comprehensive sentences long.
  
  Service Name: {{{serviceName}}}
  
  Generate the SEO-optimized explanation now:`,
});

const generateServiceExplanationsFlow = ai.defineFlow(
  {
    name: 'generateServiceExplanationsFlow',
    inputSchema: GenerateServiceExplanationsInputSchema,
    outputSchema: GenerateServiceExplanationsOutputSchema,
  },
  async input => {
    try {
      const {output} = await prompt(input);
      if (output && output.explanation) {
        return output;
      }
    } catch (error) {
      console.error('AI Explanation generation failed (likely quota limit):', error);
    }

    // Comprehensive Fallbacks for SEO and Professionalism if AI fails
    const fallbacks: Record<string, string> = {
      "الميكانيكا العامة": "نحن في مركزنا المتخصص بالرياض نقدم خدمات ميكانيكا السيارات الأوروبية بأعلى معايير الدقة. نستخدم أحدث أجهزة التشخيص والعدد التقنية لضمان إصلاح كافة الأعطال الميكانيكية، مع الالتزام التام باستخدام قطع غيار أصلية تضمن أداءً مثالياً وطول عمر لمحرك سيارتك الفاخرة.",
      "توضيب المحركات": "خدمة توضيب المحركات (Engine Overhaul) لدينا تتم تحت إشراف مهندسين خبراء متخصصين في محركات مرسيدس، بي إم دبليو، وأودي. نقوم بفك وتنظيف وتجديد كافة أجزاء المحرك بدقة متناهية، مما يعيد لسيارتك قوتها وعزمها الأصلي مع ضمان معتمد على جودة العمل والقطع.",
      "توضيب الجيربوكس": "يعتبر ناقل الحركة (الجيربوكس) قلب السيارة، لذا نوفر خدمة توضيب شاملة تستخدم تقنيات برمجية وميكانيكية متطورة. نقوم بتشخيص الأعطال بدقة وتغيير القطع التالفة بقطع غيار أصلية لضمان سلاسة التغييرات وكفاءة انتقال الطاقة في سيارتك الألمانية والأوروبية.",
      "الأعطال الكهربائية": "الأعطال الكهربائية في السيارات الأوروبية الحديثة تتطلب خبرة تقنية عالية وأجهزة فحص متطورة. فريقنا مجهز بأحدث الحواسيب والبرمجيات المتخصصة لكشف وإصلاح كافة الدوائر الكهربائية، من أنظمة التحكم في المحرك إلى أنظمة الراحة والأمان، بدقة وسرعة متناهية.",
      "برمجة كمبيوتر السيارة": "نقدم خدمات برمجة وتحديث أنظمة كمبيوتر السيارة (ECU Coding) باستخدام البرمجيات المعتمدة من الشركات المصنعة. تشمل خدماتنا إعادة الضبط المصنعي، تحديث الخرائط، وإصلاح المشاكل البرمجية المعقدة لضمان التوافق التام لكافة الأنظمة الإلكترونية في سيارتك الحديثة.",
      "الصيانة الدورية": "الصيانة الدورية هي مفتاح الحفاظ على قيمة وأداء سيارتك الأوروبية في أجواء المملكة. نوفر باقات صيانة شاملة تشمل تغيير الزيوت، الفلاتر، فحص المكابح، وتدقيق كافة أنظمة السوائل، مع تقديم تقرير فني مفصل يضمن لك قيادة آمنة ومطمئنة على الطريق."
    };

    return {
      explanation: fallbacks[input.serviceName] || `نحن في مركزنا بالرياض نقدم خدمات متخصصة في ${input.serviceName} بأعلى معايير الجودة والاحترافية. فريقنا من المهندسين الخبراء يستخدمون أحدث التقنيات لضمان أداء سيارتك الأوروبية بكفاءة عالية، مع الالتزام التام بقطع الغيار الأصلية ودقة التنفيذ لضمان رضاكم التام واستمرارية أداء سيارتكم.`
    };
  }
);
