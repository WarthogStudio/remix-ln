import { Outlet } from '@remix-run/react';

export default function Product() {
  return (
    <section>
      <h1>Product</h1>
      <Outlet />
    </section>
  );
}
