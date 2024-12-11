import Image from "next/image";
import Link from "next/link";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

import {
  facebookLink,
  instagramLink,
  linkedinLink,
  routes,
  twitterLink,
} from "@/constants/link";

import { footerSections } from "./config";

const Footer = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <footer>
          <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
            <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
              <div>
                <span className="flex items-center justify-center gap-4 lg:justify-start">
                  <Link href={routes.home}>
                    <Image
                      src="/logo.webp"
                      alt="logo"
                      width={44}
                      height={44}
                      className="h-11"
                    />
                  </Link>
                  <p className="text-3xl font-semibold">JourneyMate</p>
                </span>
                <p className="mt-6 text-sm text-gray-500">
                  A reliable companion for all your travel adventures.
                </p>
              </div>
              <ul className="flex items-center space-x-6 text-gray-500">
                <li className="font-medium hover:text-primary">
                  <a href={instagramLink} target="_blank">
                    <InstagramIcon className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href={facebookLink} target="_blank">
                    <FacebookIcon className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href={twitterLink} target="_blank">
                    <TwitterIcon className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href={linkedinLink} target="_blank">
                    <LinkedinIcon className="size-6" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6 lg:gap-20">
              {footerSections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-6 font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-sm text-gray-500">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-gray-500 lg:flex-row lg:items-center lg:text-left">
            <p>© 2024 JourneyMate. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
