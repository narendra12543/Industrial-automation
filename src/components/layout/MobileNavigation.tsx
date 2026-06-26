"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  X,
  Home,
  Info,
  Package,
  Phone,
  LogOut,
  LogIn,
} from "lucide-react";
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
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      />

      {/* Drawer */}

      <div
        className="
          fixed
          right-0
          top-1
          z-[60]
          flex
          h-90
          w-[250px]
          flex-col
          bg-white/60
          shadow-2xl
          rounded-2xl
        "
      >
       
        {/* Navigation */}

        <div className="flex-1 overflow-y-auto p-2">
          <div className="mb-0 flex justify-end">
            <button
              onClick={onClose}
              className="
                rounded-lg
                p-2
                text-slate-700
                transition
                hover:bg-slate-100
                hover:text-[#0F2747]
              "
            >
              <X size={18} />
            </button>
          </div>
          <nav className="space-y-2">
            <Link
              href="/"
              onClick={onClose}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                px-4
                py-1
                font-medium
                text-slate-700
                transition
                hover:bg-slate-100
                hover:text-[#0F2747]
              "
            >
              <Home size={18} />
              Home
            </Link>

            <Link
              href="/about"
              onClick={onClose}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                px-4
                py-1
                font-medium
                text-slate-700
                transition
                hover:bg-slate-100
                hover:text-[#0F2747]
              "
            >
              <Info size={18} />
              About
            </Link>

            <Link
              href="/products"
              onClick={onClose}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                px-4
                py-1
                font-medium
                text-slate-700
                transition
                hover:bg-slate-100
                hover:text-[#0F2747]
              "
            >
              <Package size={18} />
              Products
            </Link>

            <Link
              href="/contact"
              onClick={onClose}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                px-4
                py-1
                font-medium
                text-slate-700
                transition
                hover:bg-slate-100
                hover:text-[#0F2747]
              "
            >
              <Phone size={18} />
              Contact
            </Link>

            {isAuthenticated && (
              <>
                <div />

                {isAdmin && (
                  <Link
                    href="/admin"
                    onClick={onClose}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      px-4
                      py-1
                      font-medium
                      text-slate-700
                      transition
                      hover:bg-slate-100
                      hover:text-[#0F2747]
                    "
                  >
                    Admin Panel
                  </Link>
                )}
              </>
            )}
          </nav>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="
                flex
                w-full
                gap-2
                rounded-xl
                px-4
                py-3
                font-medium
                text-red-700
                transition
              "                                                       
            >
              <LogOut size={18} />
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              onClick={onClose}
              className="
                flex
                gap-2
                rounded-xl
                px-4
                py-3
                font-medium
                text-slate-700
                transition
               
              "
            >
              <LogIn size={18} />
              Login
            </Link>
          )}
        </div>

      </div>
    </>
  );
}