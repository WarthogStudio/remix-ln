import React from 'react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '~ui/breadcrumb';
import { Link, useLocation } from '@remix-run/react';
import { capitalizeFirstLetter } from '~/utils/utils';

export default function Crumbs() {
  const { pathname } = useLocation();

  // Split pathname into segments
  const splitPathname = pathname.split('/');

  // Filter out empty segments, and handle the case when it's the root "/"
  const filteredPaths =
    pathname === '/' ? [] : splitPathname.filter((path) => path !== '');

  // Prepare array of full paths with capitalized path names
  const breadcrumbPaths = filteredPaths.map((path, index) => {
    const fullPath = `/${filteredPaths.slice(0, index + 1).join('/')}`;
    const capitalizedPath = capitalizeFirstLetter(path);
    return { path: capitalizedPath, fullPath };
  });

  return (
    <Breadcrumb className="flex w-full flex-row gap-x-2 p-4">
      {/* Show breadcrumbs only when not on home "/" */}
      {pathname !== '/' && (
        <BreadcrumbList>
          {/* Always show "Home" as the first breadcrumb */}
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/" className="text-primary hover:text-sky-500">
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {/* Add separator after "Home" if there are other paths */}
          {breadcrumbPaths.length > 0 && <BreadcrumbSeparator />}
          {/* Loop through breadcrumb paths */}
          {breadcrumbPaths.map((breadcrumb, index) => (
            <React.Fragment key={breadcrumb.path}>
              <BreadcrumbItem>
                {index === breadcrumbPaths.length - 1 ? (
                  <BreadcrumbPage className="text-sky-500">
                    {breadcrumb.path}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link
                      to={breadcrumb.fullPath}
                      className="text-primary hover:text-sky-500"
                    >
                      {breadcrumb.path}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {/* Add separator except after the last item */}
              {index !== breadcrumbPaths.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      )}
    </Breadcrumb>
  );
}
