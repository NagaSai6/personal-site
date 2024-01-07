"use client"
import React from "react";
import Image from "next/image";
import LogoIcon from "@/public/images/nagasai_in_logo.svg";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import Link from "next/link";
export default function NavBar() {
  return (
    <header className="lg:px-8 lg:py-4 w-full flex static">
      <div className="flex w-[20%] justify-center p-2 space-x-4 content-center">
        <Image className="logo_icon" src={LogoIcon} alt="logo_icon" height={42} width={42} />
        
        <h1 className="items-center flex font-bold text-4xl font-garamond">
          <Link href={'/'}>
          Naga
          </Link>
        </h1>
      </div>
      <div className="ml-auto flex w-full  justify-center font-montserrat">
        <NavigationMenu>
          <NavigationMenuList className="space-x-8">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Topics</NavigationMenuTrigger> 
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <Link href={`/blog`}>Blog</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <Link href={`/blog`}>Work</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="text-right bg-red-200 rounded-full px-2 py-1 font-lato">
                 Development v1.3.0
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

      </div>
    </header>
  );
}
