import { z, ZodType } from 'zod';

export type loginFormSchema = {
  email: string;
  password: string;
};

const passwordRegex =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&()*+,\-./:;<=>?@[\\\]^_`{|}~])/;
export const loginSchema: ZodType<loginFormSchema> = z.object({
  email: z
    .string()
    .trim()
    .min(8, { message: 'Email must contain at least 7 characters' })
    .email({
      message:
        'Invalid email. Please enter a valid email such as taylor@example.com',
    }),
  password: z.string().trim().regex(passwordRegex, {
    message:
      'Invalid password. Password must contain one uppercase letter, one number, one special symbol, and be at least 8 characters long',
  }),
});
