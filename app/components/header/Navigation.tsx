import { NavLink, useLocation } from '@remix-run/react';
import { navigationData } from '~/data/navigationData';
import SubNavigation from './SubNavigation';
import { ChevronDown } from 'lucide-react';

export default function Navigation() {
  const { pathname } = useLocation();

  return (
    <nav className="h-20 w-full">
      <ul className="flex h-full w-full flex-row items-center justify-end gap-x-8">
        {navigationData.map(({ title, href, subItems }) => (
          <li key={title} className="group relative font-semibold">
            <NavLink
              to={href}
              className={`${
                pathname === href || pathname.startsWith(`${href}/`)
                  ? 'text-sky-500'
                  : ''
              } group flex items-end hover:text-sky-500`}
            >
              {title}
              {subItems ? (
                <ChevronDown
                  size={20}
                  className="transform duration-300 animate-out group-hover:-rotate-180"
                />
              ) : null}
            </NavLink>
            {subItems && subItems.length > 0 && (
              <SubNavigation subItems={subItems} pathname={pathname} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
