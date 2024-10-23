import { Link } from '@remix-run/react';
import { PiggyBank } from 'lucide-react';
import { brand } from '~data/brand/brandData';

type Props = {
  size?: number;
};
export default function BrandLogo({ size = 75 }: Props) {
  return (
    <section className="flex h-auto w-full flex-row">
      <Link to="/" className="flex items-center gap-x-4">
        <PiggyBank size={size} />
        <p className="text-3xl font-semibold">{brand.toUpperCase()}</p>
      </Link>
    </section>
  );
}
