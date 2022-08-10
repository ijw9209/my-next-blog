import navlinks from "../data/navlinks";
import Link from "next/link";
import {FaGithub, FaBlog, FaInstagram} from 'react-icons/fa';


const Nav = () => {
  return (
    <nav>
      {navlinks.map((nav) => (
        <Link href={nav.link} key={nav.title}>
          <a className={`mr-5 text-white font-normal`}>{nav.title}</a>
        </Link>
      ))}
      <Link href="https://github.com/ijw9209">
        <FaGithub className="inline cursor-pointer w-14 text-white"/>
      </Link>
      <Link href="https://ijw9209.github.io/">
        <FaBlog className="inline cursor-pointer w-14 text-white"/>
      </Link>
      <Link href="/">
        <FaInstagram className="inline cursor-pointer w-14 text-white"/>
      </Link>
    </nav>
  );
};

export default Nav;