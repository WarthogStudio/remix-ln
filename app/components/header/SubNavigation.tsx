import { NavLink } from '@remix-run/react';
import { NavigationItem } from '~/data/navigationData';

type Props = {
  subItems: NavigationItem[];
  pathname: string;
};

export default function SubNavigation({ subItems, pathname }: Props) {
  return (
    <ul className='absolute left-0 hidden group-hover:block bg-stone-700 w-auto p-4 text-left'>
      {subItems.map(({ title: subTitle, href: subHref }) => (
        <li key={subTitle}>
          <NavLink
            to={subHref}
            className={`${
              pathname === subHref ? 'text-sky-500' : ''
            } block px-4 py-2 hover:bg-stone-900`}
          >
            {subTitle}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
