import { Link } from '@remix-run/react';
import { brandCopyright, brand, brandSuffix } from '~/data/brand/brandData';

export default function SiteCopyright() {
  return (
    <section className="flex h-full w-full flex-col items-center justify-start gap-y-4">
      <p className="text-sm text-gray-400">{brandCopyright}</p>
      <div className="flex h-auto flex-col items-center justify-start">
        <p className="text-xs text-gray-400">
          {brand} logo and the {brand} are trademarks of {brand} {brandSuffix}.
        </p>
        <p className="text-xs text-gray-400">
          All other trademarks belong to their individual trademark holders.
        </p>
      </div>
      <section className="flex h-auto w-full flex-row items-center justify-center gap-x-8 text-xs">
        <Link
          to="/legal/terms-of-use"
          className="text-gray-400 underline underline-offset-4 hover:text-sky-500 hover:decoration-sky-500"
        >
          Terms of Use
        </Link>
        <Link
          to="/legal/privacy-policy"
          className="text-gray-400 underline underline-offset-4 hover:text-sky-500 hover:decoration-sky-500"
        >
          Privacy Policy
        </Link>
      </section>
    </section>
  );
}
