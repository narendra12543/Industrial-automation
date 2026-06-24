"use client";

import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import ProductSearchModal from "@/components/search/ProductSearchModal";

import MobileNavigation from "./MobileNavigation";
import ProfileMenu from "./ProfileMenu";


interface HeaderProps {
  isAuthenticated?: boolean;
  isAdmin?: boolean;
}

export default function Header({
  isAuthenticated = false,
  isAdmin = false,
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [searchOpen, setSearchOpen] =
    useState(false);

  return (
    <>
      <header
        className="
          sticky
          top-0
          z-50
          border-b
          border-slate-200
          bg-white/70
          backdrop-blur-md
          shadow-sm
        "
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}

            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#0F2747]
                  text-lg
                  font-bold
                  text-white
                "
              >
                IAS
              </div>

              <div>
                <p className="text-lg font-bold text-[#0F2747]">
                  Industrial Automation
                </p>

                <p className="text-xs text-slate-500">
                  Solutions
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}

           
              <nav className="hidden items-center gap-8 lg:flex">
                <Link
                  href="/"
                  className="font-medium text-slate-700 transition hover:text-[#0F2747]"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="font-medium text-slate-700 transition hover:text-[#0F2747]"
                >
                  About
                </Link>

                <Link
                  href="/products"
                  className="font-medium text-slate-700 transition hover:text-[#0F2747]"
                >
                  Products
                </Link>

                {/* <Link
                  href="/projects"
                  className="font-medium text-slate-700 transition hover:text-[#0F2747]"
                >
                  Projects
                </Link> */}

                <Link
                  href="/contact"
                  className="font-medium text-slate-700 transition hover:text-[#0F2747]"
                >
                  Contact
                </Link>
              </nav>
          
            {/* Right Side */}

            <div className="flex items-center gap-5">
              {/* Search */}
              
                <button
                  onClick={() =>
                    setSearchOpen(true)
                  }
                  className="
                    rounded-lg
                    p-2
                    text-slate-600
                    transition
                    hover:bg-slate-100
                    hover:text-[#0F2747]
                  "
                >
                  <Search size={20} />
                </button>
            
              {/* WhatsApp */}
                <a
                  href="https://wa.me/917057748540?text=Hello,%20I%20am%20interested%20in%20your%20Industrial%20Automation%20Solutions.%20Please%20share%20product%20catalog,%20pricing%20and%20technical%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    relative
                    hidden
                    lg:flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-green-500
                    text-white
                    transition-all
                    duration-300
                    animate-[pulse_3s_ease-in-out_infinite]
                    hover:animate-none
                    hover:scale-110
                    hover:bg-green-600
                  "
                >
                  <FaWhatsapp size={22} />

                  <span
                    className="
                      absolute
                      top-9
                      left-1/2
                      -translate-x-1/2
                      whitespace-nowrap
                      rounded-md
                      px-3
                      py-1
                      text-xs
                      text-black
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:opacity-100
                    "
                  >
                    WhatsApp
                  </span>
                </a>
           
              {/* Profile */}

              <ProfileMenu
                isAuthenticated={
                  isAuthenticated
                }
                isAdmin={isAdmin}
              />

              {/* Mobile Menu */}

              <button
                onClick={() =>
                  setMobileOpen(true)
                }
                className="
                  rounded-lg
                  p-2
                  text-slate-700
                  transition
                  hover:bg-slate-100
                  lg:hidden
                "
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Modal Placeholder */}

      <ProductSearchModal
        open={searchOpen}
        onClose={() =>
          setSearchOpen(false)
        }
      />

      {/* Mobile Drawer */}

      <MobileNavigation
        open={mobileOpen}
        onClose={() =>
          setMobileOpen(false)
        }
        isAuthenticated={
          isAuthenticated
        }
        isAdmin={isAdmin}
      />
    </>
  );
}