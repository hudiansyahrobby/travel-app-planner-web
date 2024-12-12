import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";

import { menuItems } from "../config";

type DesktpHeaderMenuProps = {
  item: (typeof menuItems)[number];
};
export const DesktopHeaderMenu = ({ item }: DesktpHeaderMenuProps) => {
  return (
    <Link
      key={item.title}
      className={cn(
        "text-gray-500",
        navigationMenuTriggerStyle,
        buttonVariants({
          variant: "ghost",
        })
      )}
      href={item.url}
    >
      {item.title}
    </Link>
  );
};

export const DesktopHeaderSubMenu = ({ item }: DesktpHeaderMenuProps) => {
  return (
    <NavigationMenu key={item.title}>
      <NavigationMenuList>
        <NavigationMenuItem className="text-gray-500">
          <NavigationMenuTrigger>
            <span>{item.title}</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-80 p-3">
              <NavigationMenuLink>
                {item?.children?.map((child) => (
                  <li key={child.title}>
                    <Link
                      className={cn(
                        "hover:text-accent-foreground focus:text-accent-foreground flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent"
                      )}
                      href={item.url}
                    >
                      {child.icon}
                      <div>
                        <div className="text-sm font-semibold">
                          {child.title}
                        </div>
                        <p className="text-sm leading-snug text-gray-500">
                          {child.description}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
