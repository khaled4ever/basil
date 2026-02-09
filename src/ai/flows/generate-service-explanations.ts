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
  prompt: `You are an SEO expert and a specialist in mobile auto repair. Generate a detailed, professional, and SEO-optimized explanation for a mobile automotive service in Riyadh, Saudi Arabia, specializing in German and Chinese cars.
  
  The explanation should:
  1. Use keywords relevant to the service and location (e.g., ورشة متنقلة الرياض, صيانة سيارات ألمانية, صيانة سيارات صينية, فحص كمبيوتر متنقل).
  2. Highlight expertise, speed of service at the customer's location, and the use of original parts.
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
      "الميكانيكا العامة": "ورشة متنقلة في الرياض تقدم خدمات ميكانيكا السيارات الألمانية والصينية في موقعك. نصلك بأحدث الأجهزة لفحص وإصلاح كافة الأعطال الميكانيكية، مع التزامنا باستخدام قطع غيار أصلية لضمان أعلى مستويات الأداء لسيارتك.",
      "تغيير بطارية السيارة": "لا تدع بطارية فارغة تعطل يومك. خدمتنا المتنقلة لتغيير البطاريات في الرياض تصلك بسرعة لتركيب بطارية جديدة ومناسبة لسيارتك الألمانية أو الصينية، مع فحص نظام الشحن للتأكد من كل شيء يعمل بكفاءة.",
      "خدمة الإطارات المتنقلة": "نقدم خدمة إطارات متنقلة تشمل إصلاح الثقوب، تغيير الإطارات، وترصيصها في مكانك. نضمن لك عودة سريعة وآمنة للطريق بسيارتك الألمانية أو الصينية دون الحاجة لزيارة الورشة.",
      "الأعطال الكهربائية": "الأعطال الكهربائية تتطلب خبرة ودقة. فريقنا المتنقل مجهز بأحدث أجهزة الفحص لتشخيص وإصلاح كافة المشاكل الكهربائية في السيارات الألمانية والصينية، من مشاكل الإضاءة إلى أعطال الأنظمة الإلكترونية المعقدة.",
      "برمجة كمبيوتر السيارة": "نقدم خدمات برمجة كمبيوتر متنقلة للسيارات الألمانية والصينية. نقوم بتحديث الأنظمة، تعريف القطع الجديدة، وإصلاح الأخطاء البرمجية باستخدام أجهزة متخصصة تضمن التوافق الكامل مع سيارتك.",
      "الصيانة الدورية": "حافظ على سيارتك الألمانية أو الصينية بأفضل حال مع خدمة الصيانة الدورية المتنقلة. نأتيك لتغيير الزيوت والفلاتر، فحص السوائل، والقيام بكافة الفحوصات اللازمة لضمان قيادة آمنة وموثوقة."
    };

    return {
      explanation: fallbacks[input.serviceName] || `نحن ورشة متنقلة في الرياض نقدم خدمات متخصصة في ${input.serviceName} للسيارات الألمانية والصينية بأعلى معايير الجودة. فريقنا يصلك في موقعك لضمان عمل سيارتك بكفاءة عالية، مع استخدام قطع غيار أصلية ودقة في التنفيذ.`
    };
  }
);
