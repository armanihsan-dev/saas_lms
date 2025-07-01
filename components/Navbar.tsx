import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href={"/"}>
        <div className={"flex items-center gap-2 cursor-pointer"}>
          <Image src={"/images/logo.svg"} width={46} height={44} alt={"logo"} />
        </div>
      </Link>{" "}
      <div className={"flex gap-8 items-center"}>
        <NavItems />
        <p>Sign in</p>
      </div>
    </nav>
  );
};
export default Navbar;
