import { Link, Outlet, useLocation } from '@remix-run/react';

export default function LegalPage() {
  const { pathname } = useLocation();
  return (
    <section>
      {pathname === '/legal' ? (
        <section>
          <Link
            to="/legal/terms-of-use"
            className="hover:text-sky-500 hover:underline"
          >
            Terms of Use
          </Link>
          <Link
            to="/legal/privacy-policy"
            className="hover:text-sky-500 hover:underline"
          >
            Privacy Policy
          </Link>
        </section>
      ) : (
        <Outlet />
      )}
    </section>
  );
}
