'use client';

import Image from "next/image";

const Logo = () => {

  return ( 
    <Image
      className="hidden md:block cursor-pointer w-24" 
      priority
      src="/images/logo.png" 
      height="100" 
      width="100" 
      alt="Logo" 
    />
   );
}
 
export default Logo;
