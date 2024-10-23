import { Form, useActionData, useFormAction } from '@remix-run/react';
import { FieldErrors, FormProvider, useForm } from 'react-hook-form';
import { Button } from '~components/ui/button';
// import { Form } from '~/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '~data/forms/loginSchema';
import { fields, LoginFormFields } from '~data/forms/loginFormData';
import FormFieldInput from '~components/forms/fields/FormFieldInput';
import { useRef } from 'react';

export default function LoginForm() {
  const form = useForm<LoginFormFields>({
    resolver: zodResolver(loginSchema),
    // mode: 'onSubmit',
    defaultValues: {
      email: 'test@example.com',
      password: 'yolo2S35.',
    },
  });
  const {
    handleSubmit,
    formState: { errors },
  } = form;
  const formRef = useRef(null);
  const onSubmit = () => {};

  // console.log('formRef:', formRef.current);

  return (
    <Form
      method="post"
      noValidate
      ref={formRef}
      // onSubmit={onSubmit}
      className="flex w-96 flex-col gap-y-8 rounded-md bg-zinc-900 p-8"
    >
      <FormProvider {...form}>
        {fields.map(({ label, type, placeholder }) => (
          <FormFieldInput
            key={label}
            label={label}
            type={type}
            placeholder={placeholder}
            message={errors[type]?.message}
          />
        ))}
        <Button type="submit">Submit</Button>
      </FormProvider>
    </Form>
  );
}
