import { z, ZodType } from 'zod';

export type NewsletterSchema = {
  email: string;
};

export const newsletterSchema: ZodType<NewsletterSchema> = z.object({
  email: z
    .string()
    .trim()
    .min(8, { message: 'Email must contain at least 7 characters' })
    .email({
      message:
        'Invalid email. Please enter a valid email such as taylor@example.com',
    }),
});
