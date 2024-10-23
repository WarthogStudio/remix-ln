import { ActionFunction, ActionFunctionArgs, json } from '@remix-run/node';
import LoginForm from '~components/forms/login/LoginForm';
import { loginSchema } from '~data/forms/loginSchema';
import { hashSaltPassword } from '~/utils/utils';

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const dataObject = Object.fromEntries(formData);
  const { success, data, error } = loginSchema.safeParse(dataObject);
  if (success) {
    console.log('Success Executed', data);
    //bcrypt the password
    // const hashedPassword = await hashSaltPassword(data.password);
    // const finalData = { ...data, password: hashedPassword };
    // console.log('FinalData:', data);
    return json(data, { status: 200 });
  } else {
    const errors = error.flatten().fieldErrors;
    console.log('Errors Executed', errors);
    return json(errors, { status: 400 });
  }
}

export default function LoginPage() {
  return (
    <section>
      <h1>Login Page</h1>
      <LoginForm />
    </section>
  );
}
