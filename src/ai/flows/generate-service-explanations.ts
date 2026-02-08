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
  Generate a concise and informative explanation for the following service, suitable for a website:
  
  Service Name: {{{serviceName}}}
  Explanation:`, // Removed example text and focused on the core instruction
});

const generateServiceExplanationsFlow = ai.defineFlow(
  {
    name: 'generateServiceExplanationsFlow',
    inputSchema: GenerateServiceExplanationsInputSchema,
    outputSchema: GenerateServiceExplanationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
