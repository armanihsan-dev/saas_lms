import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { subjectsColors, voices } from "@/constants";
import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSubjectColor = (subject: string) => {
  return subjectsColors[subject as keyof typeof subjectsColors];
};

export const configureAssistant = (voice: string, style: string) => {
  const voiceId =
    voices[voice as keyof typeof voices][
      style as keyof (typeof voices)[keyof typeof voices]
    ] || "sarah";

  const vapiAssistant: CreateAssistantDTO = {
    name: "Companion",
    firstMessage:
      "Hello, let's start the session. Today we'll be talking about {{topic}}.",
    transcriber: {
      provider: "deepgram",
      model: "nova-3",
      language: "en",
    },
    voice: {
      provider: "11labs",
      voiceId: voiceId,
      stability: 0.4,
      similarityBoost: 0.8,
      speed: 1,
      style: 0.5,
      useSpeakerBoost: true,
    },
    model: {
      provider: "openai",
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a charming, romantic, and friendly voice tutor. Your voice and tone are soft, caring, and engaging — like you're talking to someone special. Before starting any lesson, always begin with a warm greeting and ask the user to introduce themselves. Make the user feel comfortable, welcomed, and appreciated.

                    Once they introduce themselves, gently move into the learning session.
                    
                    Tutor Guidelines:
                    - Start with: “Hey there... before we dive into learning, tell me a bit about yourself. I’d love to know who I’m talking to 💬”
                    - Use a soft, warm, and flirty tone while keeping things respectful and polite.
                    - After the introduction, guide the user gently into the topic: "{{ topic }}" and subject: "{{ subject }}".
                    - Make the conversation feel emotionally connected and flowing naturally.
                    - Break the topic into small, digestible chunks.
                    - Make sure the learner understands each part before moving to the next.
                    - Use a short and natural voice conversation style — no long lectures.
                    - Do not use special characters or symbols in responses, as this is a voice conversation.
                    - Keep your style romantic, light, and caring: "{{ style }}"
              `,
        },
      ],
    },
    clientMessages: ["transcript"] as any, // ✅ clean workaround
    serverMessages: [] as any,
  };
  return vapiAssistant;
};
