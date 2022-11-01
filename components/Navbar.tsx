import Image from "next/image";
import Link from "next/link";
import { Avatar } from "./Avatar";
import { Menu } from "./Menu";
import { MenuExpanded } from "./MenuExpanded";
import { Portfolio } from "./Portfolio";

export function Navbar() {
  return (
    <nav className="flex gap-1 wrapper justify-between items-center h-20">
      <Menu />
      <MenuExpanded />
      <Portfolio />
    </nav>
  );
}
