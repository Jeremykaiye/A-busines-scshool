
import { GoogleGenAI, Type } from "@google/genai";
import type { BusinessIdea } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateBusinessIdeas = async (niche: string): Promise<BusinessIdea[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Based on the niche "${niche}", generate 3 innovative online business ideas. For each idea, provide a title, a short description (2-3 sentences), and a list of 2-3 specific AI tools that could be used to create and market the digital assets for that business. Focus on creating digital products or services.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: {
                type: Type.STRING,
                description: 'The catchy title of the business idea.',
              },
              description: {
                type: Type.STRING,
                description: 'A brief explanation of the business concept.',
              },
              ai_tools: {
                type: Type.ARRAY,
                items: {
                  type: Type.STRING,
                },
                description: 'A list of AI tools relevant to the business idea.',
              },
            },
            required: ["title", "description", "ai_tools"],
          },
        },
      },
    });

    const jsonText = response.text.trim();
    const ideas = JSON.parse(jsonText);
    return ideas as BusinessIdea[];

  } catch (error) {
    console.error("Error generating business ideas:", error);
    throw new Error("Failed to generate ideas. Please check your API key and try again.");
  }
};
