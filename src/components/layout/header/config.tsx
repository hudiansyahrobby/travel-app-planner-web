import { Book, Sunset, Trees, Zap } from "lucide-react";

import { routes } from "@/constants/link";

export const menuItems = [
  {
    title: "Home",
    url: routes.home,
  },
  {
    title: "Products",
    url: routes.products,
    children: [
      {
        title: "Blog",
        description: "The latest industry news, updates, and info",
        icon: <Book className="size-5 shrink-0" />,
      },
      {
        title: "Compnay",
        description: "Our mission is to innovate and empower the world",
        icon: <Trees className="size-5 shrink-0" />,
      },
      {
        title: "Careers",
        description: "Browse job listing and discover our workspace",
        icon: <Sunset className="size-5 shrink-0" />,
      },
      {
        title: "Support",
        description:
          "Get in touch with our support team or visit our community forums",
        icon: <Zap className="size-5 shrink-0" />,
      },
    ],
  },
  {
    title: "Pricing",
    url: routes.pricing,
  },
  {
    title: "About",
    url: routes.about,
  },
  {
    title: "Blog",
    url: routes.blog,
  },
];
