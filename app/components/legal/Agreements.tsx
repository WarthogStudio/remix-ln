import { Link } from '@remix-run/react';
import React from 'react';

export default function AgreementsLegal() {
  return (
    <p className="w-full text-center text-xs font-semibold text-muted-foreground">
      By signing up, you agree to our{' '}
      <Link to="/legal/terms-of-use" className="text-sky-500 hover:underline">
        Terms of Use
      </Link>{' '}
      and{' '}
      <Link to="/legal/privacy-policy" className="text-sky-500 hover:underline">
        Privacy policy.
      </Link>
    </p>
  );
}
