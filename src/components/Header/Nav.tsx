import {
  HomeIcon,
  TrendingUpIcon,
  LightningBoltIcon,
  StarIcon,
  FilmIcon,
} from '@heroicons/react/solid';
import FadeOverlay from './FadeOverlay';
import NavItem from './NavItem';

const Nav = () => {
  return (
    <div className="hidden md:block relative overflow-hidden px-6">
      <nav className="flex flex-nowrap items-center h-full m-0 p-2 ml-6 text-white w-auto overflow-scroll scrollbar-hide">
        <NavItem Icon={HomeIcon} text="Home" href="/" toTop />
        <NavItem Icon={TrendingUpIcon} text="Trending" href="/#trending" />
        <NavItem Icon={LightningBoltIcon} text="Action" href="/#action" />
        <NavItem Icon={StarIcon} text="Sci-Fi" href="/#sci-fi" />
        <NavItem Icon={FilmIcon} text="Animated" href="/#animated" />
      </nav>
      <FadeOverlay position="left" />
      <FadeOverlay position="right" />
    </div>
  );
};

export default Nav;
