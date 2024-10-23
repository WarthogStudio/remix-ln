import { json, Link, useLoaderData } from '@remix-run/react';
import { LoaderFunctionArgs } from '@remix-run/node';
import { PrismaClient } from '@prisma/client';
import { requireAuthCookie } from '~/services/auth.server';

type Data = {
  id: number;
  name: string | null;
  email: string;
}[];

export async function loader({ request }: LoaderFunctionArgs) {
  //here require user to be logged in so that only authenticated users can request the endpoint
  const userId = await requireAuthCookie(request);
  console.log('userId:', userId);

  const prisma = new PrismaClient();
  const data: Data = await prisma.userTest.findMany();
  console.log('Data:', data);

  return json(data);
}

export default function Products() {
  const data = useLoaderData<Data>();
  console.log('Data:', data);

  return (
    <section>
      <h1>Products Page</h1>
      <Link to="/products/product">Product</Link>
      <ul className="flex flex-col gap-y-8 text-white">
        {data.map(({ id, name, email }) => (
          <li key={id}>
            {name} {email}
          </li>
        ))}
      </ul>
      {/* <ul>
        {data.map(({ email, name }) => (
          <li>{}</li>
        ))}
      </ul> */}
    </section>
  );
}
