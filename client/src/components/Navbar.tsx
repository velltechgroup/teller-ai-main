import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import { IoAdd, IoLogOut, IoLogIn } from "react-icons/io5"; // Import relevant icons

const menuItems = [
  { name: "Home", link: "/" },
  // { name: "Stories", link: "/stories" },
  // { name: "Categories", link: "/categories" },
  // { name: "About Us", link: "#steps" },
];

export default function BarberMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with your authentication logic

  const renderMenuItems = () => {
    return menuItems.map((item, i) => (
      <NavbarItem key={i}>
        <Link
          color="foreground"
          href={item.link}
          className="text-white hover:border-solid hover:border-b hover:border-primaryColor transition-all duration-300 font-dmsans"
        >
          {item.name}
        </Link>
      </NavbarItem>
    ));
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      id="nav-menu"
      className="text-white bg-transparent"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="hover:bg-none hover:opacity-1">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {renderMenuItems()}
      </NavbarContent>

      <NavbarContent justify="end">
        {isLoggedIn && (
          <>
            <NavbarItem>
              <Link
                href="/create"
                className="flex items-center rounded-full border-2 border-solid border-gray-500 px-4 py-2 text-[#fff] text-sm hover:bg-white hover:text-black cursor-pointer transition duration-500"
              >
                <IoAdd className="mr-1" /> Create a story
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="/logout" // Replace with your logout logic
                className="flex items-center rounded-full border-2 border-solid border-white px-4 py-2 text-[#fff] text-sm hover:bg-white hover:text-black cursor-pointer transition duration-500"
              >
                <IoLogOut className="mr-1" /> Logout
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="/stories" // Link to the Stories page
                className="text-white hover:border-solid hover:border-b hover:border-primaryColor transition-all duration-300 font-dmsans"
              >
                Stories
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="/categories" // Link to the Categories page
                className="text-white hover:border-solid hover:border-b hover:border-primaryColor transition-all duration-300 font-dmsans"
              >
                Categories
              </Link>
            </NavbarItem>
          </>
        )}
        {!isLoggedIn && (
          <NavbarItem>
            <Link              href="/login" // Replace with your login page
              className="flex items-center rounded-full border-2 border-solid border-gray-500 px-4 py-2 text-[#fff] text-sm hover:bg-white hover:text-black cursor-pointer transition duration-500"
            >
              <IoLogIn className="mr-1" /> Login
            </Link>
          </NavbarItem>
        )}
        <NavbarItem>
          <Link
            href="/get-started" // Replace with your get started page
            className="flex items-center rounded-full border-2 border-solid border-white px-4 py-2 text-[#fff] text-sm hover:bg-white hover:text-black cursor-pointer transition duration-500"
          >
            <IoAdd className="mr-1" /> Get Started
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

