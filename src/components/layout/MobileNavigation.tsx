"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface MobileNavigationProps {
  open: boolean;
  onClose: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

export default function MobileNavigation({
  open,
  onClose,
  isAuthenticated,
  isAdmin,
}: MobileNavigationProps) {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({
      redirect: false,
    });

    router.refresh();
    onClose();
  };

  if (!open) {
    return null;
  }

  return (
    
    <>
      {/* Backdrop */}
      
      <div
        onClick={onClose}
        className="
          fixed
          inset-0
          z-50  
          bg-black/40
        
        "
      />

      {/* Mobile Drawer */}
      <div
        className="
          fixed
          right-0
          top-2  
          z-[60]
          w-[200px]
          overflow-y-auto
          bg-white
          shadow-2xl
          rounded
        "
      >
        {/* Header */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            px-4
            py-3
            
          "
        >
          <div>
            <h2 className="font-bold text-[#0F2747]">
              Industrial Automation
            </h2>

            <p className="text-xs text-slate-500">
              Solutions
            </p>
          </div>

          <button
            onClick={onClose}
            className="
              rounded-lg
              p-2 
              transition
              hover:bg-slate-100
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* Public Navigation */}
        <div className="border-b p-5 pt-2">
          <nav >
            <Link
              href="/"
              onClick={onClose}
              className="block font-medium text-slate-700"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={onClose}
              className="block font-medium text-slate-700"
            >
              About
            </Link>

            <Link
              href="/products"
              onClick={onClose}
              className="block font-medium text-slate-700"
            >
              Products
            </Link>

            {/* <Link
              href="/projects"
              onClick={onClose}
              className="block font-medium text-slate-700"
            >
              Projects
            </Link> */}

            <Link
              href="/contact"
              onClick={onClose}
              className="block font-medium text-slate-700"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* WhatsApp CTA */}
        <div className="border-b p-5">
          <a
            href="https://wa.me/917057748540?text=Hello,%20I%20am%20interested%20in%20your%20Industrial%20Automation%20Solutions.%20Please%20share%20product%20catalog,%20pricing%20and%20technical%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
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
            
          </a>
        </div>

      </div>
    </>
  );
}