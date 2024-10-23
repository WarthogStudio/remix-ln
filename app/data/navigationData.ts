export type NavigationItem = {
  title: string;
  href: string;
  subItems?: NavigationItem[];
};

export const navigationData: NavigationItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Services',
    href: '/services',
    subItems: [
      {
        title: 'Residential Roofing',
        href: '/services/residential-roofing',
      },
      {
        title: 'Roof Installation',
        href: '/services/roof-installation',
        subItems: [
          {
            title: 'Flat-Roof-Installation',
            href: '/services/roof-installation/flat-roof-installation',
          },
          {
            title: 'Slate-Roof-Installation',
            href: '/services/roof-installation/slate-roof-installation',
          },
          {
            title: 'Metal-Roof-Installation',
            href: '/services/roof-installation/metal-roof-installation',
          },
          {
            title: 'Shake-Roof-Installation',
            href: '/services/roof-installation/shake-roof-installation',
          },
        ],
      },
    ],
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
  {
    title: 'Products',
    href: '/products',
    subItems: [
      {
        title: 'Product',
        href: '/products/product',
      },
    ],
  },
  {
    title: 'Blog',
    href: '/blog',
  },
];
