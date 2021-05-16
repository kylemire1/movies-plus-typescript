import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  StarIcon,
  FilmIcon,
  VideoCameraIcon,
} from '@heroicons/react/solid';
import FadeOverlay from './FadeOverlay';
import NavItem from './NavItem';

const Nav = () => {
  return (
    <div className="hidden md:block relative overflow-hidden px-6">
      <nav className="flex flex-nowrap items-center h-full m-0 p-2 ml-6 text-white w-auto overflow-scroll scrollbar-hide">
        <NavItem Icon={HomeIcon} text="Home" href="/" />
        <NavItem Icon={SearchIcon} text="Search" href="/#" />
        <NavItem Icon={PlusIcon} text="Watchlist" href="/#" />
        <NavItem Icon={StarIcon} text="Originals" href="/#" />
        <NavItem Icon={FilmIcon} text="Movies" href="/#" />
        <NavItem Icon={VideoCameraIcon} text="Series" href="/#" />
      </nav>
      <FadeOverlay position="left" />
      <FadeOverlay position="right" />
    </div>
  );
};

export default Nav;
