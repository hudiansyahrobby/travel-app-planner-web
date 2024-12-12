import Link from "next/link";

import { routes } from "@/constants/link";

import { Button } from "@/components/ui/button";

import { menuItems } from "../config";
import { DesktopHeaderMenu, DesktopHeaderSubMenu } from "./DesktopHeaderMenu";
import HeaderLogo from "./HeaderLogo";

const DesktopHeader = () => {
  return (
    <nav className="hidden justify-between lg:flex">
      <div className="flex items-center gap-6">
        <HeaderLogo />
        <div className="flex items-center">
          {menuItems?.map((item) => {
            if (!item.children) {
              return <DesktopHeaderMenu item={item} key={item.title} />;
            } else {
              return <DesktopHeaderSubMenu item={item} key={item.title} />;
            }
          })}
        </div>
      </div>
      <div className="flex gap-2">
        <Link href={routes.auth.login}>
          <Button variant={"outline"}>Log in</Button>
        </Link>
        <Link href={routes.auth.signup}>
          <Button>Sign up</Button>
        </Link>
      </div>
    </nav>
  );
};

export default DesktopHeader;
