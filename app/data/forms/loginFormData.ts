import { FieldError } from 'react-hook-form';

export type FieldType = 'email' | 'password';

export type Fields = {
  label: string;
  type: FieldType;
  placeholder: string;
};

export const fields: Fields[] = [
  {
    label: 'Email',
    type: 'email',
    placeholder: 'tyler@example.com',
  },
  {
    label: 'Password',
    type: 'password',
    placeholder: '••••••••',
  },
];

export type LoginFormFields = {
  email: string;
  password: string;
  errors: FieldError;
};
