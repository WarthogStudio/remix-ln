import { zodResolver } from '@hookform/resolvers/zod';
import { Form, Link } from '@remix-run/react';
import { FormProvider, useForm } from 'react-hook-form';
import FormFieldInput from '~/components/forms/fields/FormFieldInput';
import { Button } from '~/components/ui/button';
import {
  newsletterSchema,
  NewsletterSchema,
} from '~/data/forms/newsletterSchema';
import AgreementsLegal from '~components/legal/Agreements';

export default function Newsletter() {
  const form = useForm<NewsletterSchema>({
    resolver: zodResolver(newsletterSchema),
    // mode: 'onSubmit',
    defaultValues: {
      email: 'newsletter@example.com',
    },
  });
  const {
    handleSubmit,
    formState: { errors },
  } = form;
  return (
    <FormProvider {...form}>
      <Form
        method="post"
        className="flex w-auto flex-col items-start justify-center"
      >
        <h1 className="text-2xl">Signup for a free newsletter</h1>
        <fieldset className="flex w-full items-start justify-start text-primary">
          <legend className="sr-only">Newsletter Form</legend>
          <div className="flex h-20 w-full flex-row items-center justify-center">
            <FormFieldInput type="email" message="" className="rounded-none" />
            <Button
              type="submit"
              variant="default"
              size="lg"
              className="flex-0.5 rounded-none bg-sky-500 font-bold text-primary hover:bg-sky-600"
            >
              Subscribe
            </Button>
          </div>
        </fieldset>
        <AgreementsLegal />
      </Form>
    </FormProvider>
  );
}
