import { Link } from '@remix-run/react';
import { SectionArray } from '~/data/footer/footerSectionData';

type Props = {
  showTitle?: boolean;
  sectionTitle?: string;
  sectionArray: SectionArray[];
};

export default function FooterSection({
  showTitle = false,
  sectionTitle = 'Footer Section',
  sectionArray,
}: Props) {
  return (
    <section className="flex h-auto flex-col items-center justify-center">
      {showTitle && <h1>{sectionTitle}</h1>}
      <ul className="flex flex-col items-start justify-center gap-y-4">
        {sectionArray.map(({ title, href }) => (
          <li
            key={title}
            className="text-xs font-semibold tracking-widest hover:text-sky-500"
          >
            <Link to={href}>{title.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
