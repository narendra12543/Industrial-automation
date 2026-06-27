"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LayoutGrid } from "lucide-react";

import ProductSearchModal from "@/components/search/ProductSearchModal";

import MobileNavigation from "./MobileNavigation";
import ProfileMenu from "./ProfileMenu";
import ProductMegaMenu from "./MegaMenu";

interface HeaderProps {
  isAuthenticated?: boolean;
  isAdmin?: boolean;

  categories: {
    id: string;
    name: string;
    products: {
      id: string;
      name: string;
      slug: string;
    }[];
  }[];
}

export default function Header({
  isAuthenticated = false,
  isAdmin = false,
  categories,
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);

  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  return (
    <>
      {megaMenuOpen && (
        <div
          onMouseEnter={() => setMegaMenuOpen(true)}
          onMouseLeave={() => setMegaMenuOpen(false)}
          className="
            fixed
            inset-x-0
            top-16
            bottom-0
            z-40
            bg-slate-900/15
            backdrop-blur-[4px]
            transition-all
            duration-300
          "
        />
      )}

      <header
        className="
          sticky
          top-0
          z-50
          border-b
          border-[#D9E3EF]
          bg-gradient-to-r
          from-[#F7F9FC]
          via-[#FFFFFF]
          to-[#EEF4FA]
          shadow-[0_8px_25px_rgba(15,39,71,0.08)]
        "
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}

            <Link href="/" className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#0F2747]
                  text-base
                  font-bold
                  text-white
                  shadow-md
                "
              >
                IAS
              </div>

              <div className="hidden sm:block">
                <p className="text-lg font-bold text-[#0F2747]">
                  Industrial Automation
                </p>

                <p className="text-xs tracking-wide text-slate-500">
                  Solutions
                </p>
              </div>

              <div className="block sm:hidden">
                <p className="text-sm font-bold leading-tight text-[#0F2747]">
                  Industrial
                  <br />
                  Automation
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}

            <nav className="hidden items-center gap-3 lg:flex">
              <Link
                href="/"
                className="
                  rounded-xl
                  px-5
                  py-2.5
                  font-medium
                  text-slate-700
                  transition-all
                  duration-300
                  hover:bg-[#0F2747]
                  hover:text-white
                  hover:shadow-md
                "
              >
                Home
              </Link>

              <ProductMegaMenu
                categories={categories}
                open={megaMenuOpen}
                setOpen={setMegaMenuOpen}
              />
              <Link
                href="/about"
                className="
                  rounded-xl
                  px-5
                  py-2.5
                  font-medium
                  text-slate-700
                  transition-all
                  duration-300
                  hover:bg-[#0F2747]
                  hover:text-white
                  hover:shadow-md
                "
              >
                About
              </Link>

              <Link
                href="/contact"
                className="
                  rounded-xl
                  px-5
                  py-2.5
                  font-medium
                  text-slate-700
                  transition-all
                  duration-300
                  hover:bg-[#0F2747]
                  hover:text-white
                  hover:shadow-md
                "
              >
                Contact
              </Link>
            </nav>
            {/* Right Side */}

            <div className="flex items-center gap-4">
              {/* Search */}

              <button
                onClick={() => setSearchOpen(true)}
                className="
                  hidden
                  lg:flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  text-slate-600
                  shadow-sm
                  transition-all
                  duration-300
                  hover:shadow-md
                "
              >
                <Search size={18} />
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
                  rounded-xl
                  bg-green-500
                  text-white
                  shadow-sm
                  transition-all
                  duration-300
                 
                   animate-[pulse_3s_ease-in-out_infinite]
                  hover:animate-none
                     hover:scale-110
                     hover:bg-green-600
                 
                  hover:shadow-lg
                "
              >
                <FaWhatsapp size={20} />

                <span
                  className="
                    pointer-events-none
                    absolute
                    top-12
                    left-1/2
                    -translate-x-1/2
                    rounded-lg
                    bg-[#0F2747]
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-white
                    opacity-0
                    shadow-lg
                    transition-all
                    duration-300
                    group-hover:opacity-100
                  "
                >
                  WhatsApp
                </span>
              </a>

              {/* Profile */}

              <div
                className="
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  p-1
                  shadow-sm
                "
              >
                <ProfileMenu
                  isAuthenticated={isAuthenticated}
                  isAdmin={isAdmin}
                />
              </div>

              {/* Mobile Menu */}

              <button
                onClick={() => setMobileOpen(true)}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  text-[#0F2747]
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-[#0F2747]
                  hover:bg-[#0F2747]
                  hover:text-white
                  lg:hidden
                "
              >
                <LayoutGrid size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <ProductSearchModal
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      <MobileNavigation
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        isAuthenticated={isAuthenticated}
        isAdmin={isAdmin}
      />
    </>
  );
}
