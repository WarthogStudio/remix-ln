import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '~components/ui/form';
import { Input } from '~/components/ui/input';
import { useActionData } from '@remix-run/react';
import { LoginFormFields } from '~/data/forms/loginFormData';
import { twMerge } from 'tailwind-merge';

interface Props extends React.HTMLAttributes<HTMLUnknownElement> {
  label?: string;
  type: 'email' | 'password';
  placeholder?: string;
  // errors: FieldErrors | undefined;
  message: string | undefined;
}

export default function FormFieldInput({
  className,
  label,
  type,
  placeholder = 'tyler@example.com',
  message,
}: Props) {
  const actionData = useActionData<LoginFormFields>();
  console.log('ActionData:', actionData);
  const hasError = actionData;
  console.log('HasError:', hasError);

  return (
    <FormField
      name={type}
      render={({ field }) => (
        <FormItem className="relative flex flex-col">
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              // type={type}
              type="text"
              placeholder={placeholder}
              autoComplete={type !== 'password' ? type : 'new-password'}
              className={twMerge(
                `h-10 bg-[#DDEAF814] text-base font-normal ${message && message ? 'border border-red-600 ring-red-600' : 'ring-sky-500'}`,
                className
              )}
              {...field}
            />
          </FormControl>
          <FormDescription className="sr-only">
            {`${label}`} Input
          </FormDescription>
          {message && <FormMessage>{message}</FormMessage>}
          {hasError && <FormMessage>{hasError[type]}</FormMessage>}
        </FormItem>
      )}
    />
  );
}
