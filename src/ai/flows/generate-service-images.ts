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
      'The generated image URL as a data URI.'
    ),
});
export type GenerateServiceImagesOutput = z.infer<typeof GenerateServiceImagesOutputSchema>;

export async function generateServiceImages(input: GenerateServiceImagesInput): Promise<GenerateServiceImagesOutput> {
  return generateServiceImagesFlow(input);
}

const generateServiceImagesFlow = ai.defineFlow(
  {
    name: 'generateServiceImagesFlow',
    inputSchema: GenerateServiceImagesInputSchema,
    outputSchema: GenerateServiceImagesOutputSchema,
  },
  async input => {
    // Generate a professional image using Imagen 4
    // We pass a direct string prompt to the model instead of an LLM response object
    const {media} = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: `Generate a professional and visually appealing photograph suitable for the website section on "${input.serviceType}". The image should be relevant to the service and evoke trust and expertise. The website is for a high-end German/European auto repair shop. The style should be realistic, clean, and modern.`,
    });

    if (!media || !media.url) {
      throw new Error('Image generation failed: No media returned from the model.');
    }

    return {imageUrl: media.url};
  }
);
