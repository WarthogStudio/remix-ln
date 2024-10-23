import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import bcrypt from 'bcryptjs';
// import bcrypt from 'bcrypt';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility function to capitalize the first letter of a string
export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

//hashPassword with bcryptjs
export async function hashSaltPassword(password: string): Promise<string> {
  const salt = 10;
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}
//hashPassword with bcrypt
// export async function hashSaltPassword(password: string): Promise<string> {
//   const salt = 10;
//   const hashedPassword = await bcrypt.hash(password, salt);
//   return hashedPassword;
// }
