"use client";

"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="cources">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">All Cources</HoveredLink>
            <HoveredLink href="/">Basic Music Theory</HoveredLink>
            <HoveredLink href="/">Advanced compition</HoveredLink>
            <HoveredLink href="/">Music theory</HoveredLink>
            <HoveredLink href="/">Hrzx music</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="ContactUs"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default navbar;

// in next js you cant use directly react hooks
//thats why you firstly tell the file that this file is client or server file
// for the ui
// check the classname and use what you need
// check the class property and then add in ui

// "use client";

// import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
// import { cn } from "@/lib/utils";
// import Link from "next/link";

// const Navbar = ({ className }: { className?: string }) => {
//   const [active, setActive] = useState<string | null>(null);

//   return (
//     <div
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-75",
//         className
//       )}
//       style={{ padding: "10px 0" }}
//     >
//       <div className="max-w-2xl mx-auto flex justify-around items-center">
//         <Menu setActive={setActive}>
//           <Link href="/">
//             <MenuItem setActive={setActive} active={active} item="home">
//               Home
//             </MenuItem>
//           </Link>
//           <MenuItem setActive={setActive} active={active} item="courses">
//             <div className="flex flex-col space-y-4 text-sm">
//               <HoveredLink href="/courses">All Courses</HoveredLink>
//               <HoveredLink href="/courses/basic-music-theory">
//                 Basic Music Theory
//               </HoveredLink>
//               <HoveredLink href="/courses/advanced-composition">
//                 Advanced Composition
//               </HoveredLink>
//               <HoveredLink href="/courses/music-theory">
//                 Music Theory
//               </HoveredLink>
//               <HoveredLink href="/courses/hrzx-music">Hrzx Music</HoveredLink>
//             </div>
//           </MenuItem>
//           <Link href="/contact">
//             <MenuItem setActive={setActive} active={active} item="contact-us">
//               Contact Us
//             </MenuItem>
//           </Link>
//         </Menu>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


