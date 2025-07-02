import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
const Navbar = () => {
  return (
    <nav className="navbar backdrop-blur-2xl shadow-sm">
      <Link href={"/"}>
        <div className={"flex items-center gap-2 cursor-pointer"}>
          <Image src={"/images/logo.svg"} width={46} height={44} alt={"logo"} />
        </div>
      </Link>{" "}
      <div className="flex items-center gap-8">
        <NavItems />
        <SignedOut>
          <SignInButton>
            <button className="btn-signin">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
export default Navbar;
