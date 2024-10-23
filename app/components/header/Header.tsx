import BrandLogo from '~components/brand/BrandLogo';
import Navigation from '~components/header/Navigation';

export default function Header() {
  return (
    <header className="fixed z-50 grid h-20 w-full grid-cols-[0.5fr_1fr_0.2fr] grid-rows-1 bg-stone-950 px-4 pl-20">
      <div className="col-start-1">
        <BrandLogo />
      </div>
      <div className="col-start-2">
        <Navigation />
      </div>
    </header>
  );
}
