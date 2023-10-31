import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Nav = () => {
  return (
    <nav className="px-10  flexBetween max-container  relative py-5 z-30 ">
      <Link href={"/"}>
        <Image src={"/hilink-logo.svg"} alt={"logo"} width={70} height={29} />
      </Link>
      <ul className="hidden  h-full gap-12 lg:flex">
        {NAV_LINKS.map((links) => (
          <Link
            className=" regular-16 text-gray-20 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold "
            href={links.href}
            key={links.key}
          >
            {links.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          icon="/user.svg"
          type="button"
          title={"Login"}
          color={"btn_dark_green"}
        />
      </div>
      <Image
        src={"menu.svg"}
        alt={"menu"}
        width={24}
        height={24}
        className="lg:hidden cursor-pointer"
      />
    </nav>
  );
};

export default Nav;
