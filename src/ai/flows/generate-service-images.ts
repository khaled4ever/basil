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
      'The generated image URL as a data URI or a fallback placeholder URL.'
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
    try {
      // Generate a professional image using Imagen 4
      const {media} = await ai.generate({
        model: 'googleai/imagen-4.0-fast-generate-001',
        prompt: `Generate a professional and visually appealing photograph suitable for the website section on "${input.serviceType}". The image should be relevant to the service and evoke trust and expertise. The website is for a high-end German/European auto repair shop. The style should be realistic, clean, and modern.`,
      });

      if (media && media.url) {
        return {imageUrl: media.url};
      }
    } catch (error) {
      // Log the error for visibility but don't crash the flow
      console.error('AI Image generation failed (likely quota limit):', error);
    }

    // Fallback to a high-quality placeholder if AI generation fails or hits quota limits
    const seed = encodeURIComponent(input.serviceType.toLowerCase().replace(/\s+/g, '-'));
    return {
      imageUrl: `https://picsum.photos/seed/${seed}/800/800`
    };
  }
);
