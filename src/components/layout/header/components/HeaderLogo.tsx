import React from "react";

import Image from "next/image";

const HeaderLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logo.webp"
        width={32}
        height={20}
        className="w-8"
        alt="logo"
      />
      <span className="text-xl font-bold">JourneyMate</span>
    </div>
  );
};

export default HeaderLogo;
