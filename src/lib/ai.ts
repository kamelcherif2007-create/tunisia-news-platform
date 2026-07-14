import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateNewsSummary = async (content: string): Promise<string> => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      max_tokens: 150,
      messages: [
        {
          role: 'user',
          content: `اختصر هذا النص بعبارة واحدة: ${content}`,
        },
      ],
    });
    return response.choices[0]?.message.content || '';
  } catch (error) {
    console.error('AI error:', error);
    return content.substring(0, 150);
  }
};

export const extractKeywords = async (content: string): Promise<string[]> => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      max_tokens: 100,
      messages: [
        {
          role: 'user',
          content: `استخرج 5 كلمات مفتاحية من: ${content}`,
        },
      ],
    });
    const text = response.choices[0]?.message.content || '';
    return text.split(',').map(w => w.trim()).filter(w => w.length > 0);
  } catch (error) {
    console.error('Keyword error:', error);
    return [];
  }
};
