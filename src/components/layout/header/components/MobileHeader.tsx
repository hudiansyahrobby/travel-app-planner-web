import Link from "next/link";

import { Menu } from "lucide-react";

import { routes } from "@/constants/link";

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { menuItems } from "../config";
import HeaderLogo from "./HeaderLogo";
import { MobileHeaderMenu, MobileHeaderSubMenu } from "./MobileHeaderMenu";

const MobileHeader = () => {
  return (
    <div className="block lg:hidden">
      <div className="flex items-center justify-between">
        <HeaderLogo />

        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"outline"} size={"icon"}>
              <Menu className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle>
                <HeaderLogo />
              </SheetTitle>
            </SheetHeader>
            <Accordion type="single" collapsible className="w-full">
              <div className="my-8 flex flex-col gap-4">
                {menuItems?.map((item) => {
                  if (!item.children) {
                    return <MobileHeaderMenu key={item.title} item={item} />;
                  } else {
                    return <MobileHeaderSubMenu key={item.title} item={item} />;
                  }
                })}
              </div>
            </Accordion>

            <div className="border-t pt-4">
              <div className="mt-2 flex flex-col gap-3">
                <Link href={routes.auth.login}>
                  <Button variant={"outline"}>Log in</Button>
                </Link>
                <Link href={routes.auth.signup}>
                  <Button>Sign up</Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileHeader;
