import Link from "next/link";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { cn } from "@/lib/utils";

import { menuItems } from "../config";

type MobileHeaderMenuProps = {
  item: (typeof menuItems)[number];
};

export const MobileHeaderMenu = ({ item }: MobileHeaderMenuProps) => {
  return (
    <Link href={item.url} className="block text-sm font-semibold">
      {item.title}
    </Link>
  );
};

export const MobileHeaderSubMenu = ({ item }: MobileHeaderMenuProps) => {
  return (
    <AccordionItem value={item.title} className="border-b-0">
      <AccordionTrigger className="py-0 font-semibold hover:no-underline">
        {item.title}
      </AccordionTrigger>
      <AccordionContent className="mt-2">
        {item?.children?.map((item, idx) => (
          <Link
            key={idx}
            className={cn(
              "hover:text-accent-foreground focus:text-accent-foreground flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent focus:bg-accent"
            )}
            href="#"
          >
            {item.icon}
            <div>
              <div className="text-sm font-semibold">{item.title}</div>
              <p className="text-sm leading-snug text-gray-500">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};
