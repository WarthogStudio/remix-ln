import { Separator } from '~components/ui/separator';
import SiteCopyright from '~components/brand/SiteCopyright';
import FooterSection from '~components/footer/FooterSection';
import Newsletter from '~components/newsletter/Newsletter';
import {
  sectionOne,
  sectionTwo,
  sectionThree,
} from '~/data/footer/footerSectionData';

export default function Footer() {
  return (
    <footer className="grid h-[26rem] grid-cols-1 grid-rows-[1fr_auto_0.8fr] place-items-center bg-stone-950 p-4">
      <section className="row-start-1 flex h-auto w-full flex-1 flex-row items-center justify-center gap-x-20 p-8">
        <FooterSection sectionArray={sectionOne} />
        <FooterSection sectionArray={sectionTwo} />
        <FooterSection sectionArray={sectionThree} />
        <Newsletter />
      </section>
      <div className="col-start-1 row-start-2 flex h-auto w-full items-start justify-center">
        <Separator orientation="horizontal" className="w-3/4" />
      </div>
      <section className="row-start-3 flex h-auto w-full p-8">
        <SiteCopyright />
      </section>
    </footer>
  );
}
