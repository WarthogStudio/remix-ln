import { Link } from '@remix-run/react';

export default function NotFound() {
  return (
    <section className='justify-center'>
      <h1 className='text-8xl'>404 PAGE NOT FOUND</h1>
      <Link
        to='/'
        className='hover:text-sky-500 hover:underline underline-offset-4 '
      >
        {'<--'} Back to Home Page
      </Link>
    </section>
  );
}
