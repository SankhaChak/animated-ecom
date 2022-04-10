import Link from "next/link";
import { useRouter } from "next/router";
import BaseInput from "../base/BaseInput";
import BaseNavLink from "../base/BaseNavLink";
import IconwithBadge from "../base/IconwithBadge";
import { CartIcon, FavouriteIcon, Logo, UserIcon } from "../icons";

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className="py-8 px-4 md:p-8 flex items-center justify-between">
      <div className="flex items-center gap-4 md:gap-12">
        <button className="flex flex-col gap-1">
          <span className="block w-6 h-[0.2rem] bg-gray-700" />
          <span className="block w-4 h-[0.2rem] bg-gray-700" />
        </button>
        <Link href="/">
          <a>
            <Logo className="w-8" />
          </a>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <BaseNavLink href="/new" linkText="NEW" activePath={pathname} />
          <BaseNavLink href="/sale" linkText="SALE" activePath={pathname} />
          <BaseNavLink href="/man" linkText="MAN" activePath={pathname} />
          <BaseNavLink href="/" linkText="WOMEN" activePath={pathname} />
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-12">
        <button className="hidden md:block">
          <IconwithBadge
            icon={<FavouriteIcon className="w-8" />}
            badgeText="8"
          />
        </button>
        <BaseInput className="hidden md:block" placeholder="Search" />
        <button>
          <CartIcon className="w-8" />
        </button>
        <button className="hidden md:block">
          <UserIcon className="w-8" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
