
import { GoogleGenAI } from "@google/genai";

// Use process.env.API_KEY directly as per guidelines.
export const chatWithResume = async (userMessage: string, context: string): Promise<string> => {
  try {
    // Always use the named parameter for apiKey and initialize strictly as requested.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    // Use gemini-3-flash-preview for simple text Q&A tasks.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `
          You are an interactive portfolio assistant for Janice Mo.
          Your goal is to answer questions about Janice's experience, skills, and projects based on the following context.
          Keep answers concise, professional, yet friendly and engaging.
          
          CONTEXT:
          ${context}
          
          If asked about something not in the context, politely say you don't have that information but suggest contacting Janice directly.
        `,
      }
    });

    // Directly access the .text property from the response.
    return response.text || "I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my knowledge base right now. Please try again later.";
  }
};
