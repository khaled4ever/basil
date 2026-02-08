'use server';

/**
 * @fileOverview Generates explanatory text for each service section using AI.
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
  prompt: `You are an expert in automotive services, skilled at explaining complex topics in a clear and engaging way.
  Generate a concise and informative explanation for the following service, suitable for a website.
  The explanation must be in Arabic as the target audience is in Saudi Arabia.
  
  Service Name: {{{serviceName}}}
  Explanation:`,
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
      if (output) {
        return output;
      }
    } catch (error) {
      // Log the error for visibility but don't crash the flow
      console.error('AI Explanation generation failed (likely quota limit):', error);
    }

    // Fallback to a professional generic explanation in Arabic if AI generation fails
    return {
      explanation: `نحن نقدم خدمات متخصصة في ${input.serviceName} بأعلى معايير الجودة والاحترافية. فريقنا من المهندسين الخبراء يستخدمون أحدث التقنيات لضمان أداء سيارتك الأوروبية بكفاءة عالية، مع الالتزام التام بقطع الغيار الأصلية ودقة التنفيذ.`
    };
  }
);
