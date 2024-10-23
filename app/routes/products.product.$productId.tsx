import { useParams } from '@remix-run/react';

export default function ProductId() {
  const { productId } = useParams();
  return <section>ProductId: {productId}</section>;
}
