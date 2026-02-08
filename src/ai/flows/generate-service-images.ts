'use server';

/**
 * @fileOverview AI-powered image generation for service sections.
 *
 * This file defines a Genkit flow to generate images for different service sections of the website.
 * - generateServiceImages - A function to generate images for a given service type.
 * - GenerateServiceImagesInput - The input type for the generateServiceImages function.
 * - GenerateServiceImagesOutput - The return type for the generateServiceImages function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateServiceImagesInputSchema = z.object({
  serviceType: z
    .string()
    .describe('The type of service for which to generate an image (e.g., Mechanics, Engine Repair).'),
});
export type GenerateServiceImagesInput = z.infer<typeof GenerateServiceImagesInputSchema>;

const GenerateServiceImagesOutputSchema = z.object({
  imageUrl: z
    .string()
    .describe(
      'The generated image URL as a data URI (e.g., data:image/png;base64,<encoded_data>).' + 
      'MUST include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.'      
    ),
});
export type GenerateServiceImagesOutput = z.infer<typeof GenerateServiceImagesOutputSchema>;

export async function generateServiceImages(input: GenerateServiceImagesInput): Promise<GenerateServiceImagesOutput> {
  return generateServiceImagesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateServiceImagePrompt',
  input: {schema: GenerateServiceImagesInputSchema},
  output: {schema: GenerateServiceImagesOutputSchema},
  prompt: `Generate a professional and visually appealing image suitable for the website section on "{{serviceType}}".  The image should be relevant to the service and evoke trust and expertise. The website is for a German/European auto repair shop.

It must be returned as a data URI.
`,
});

const generateServiceImagesFlow = ai.defineFlow(
  {
    name: 'generateServiceImagesFlow',
    inputSchema: GenerateServiceImagesInputSchema,
    outputSchema: GenerateServiceImagesOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      prompt: await prompt(input),
      model: 'googleai/imagen-4.0-fast-generate-001',
    });
    return {imageUrl: media.url!};
  }
);
