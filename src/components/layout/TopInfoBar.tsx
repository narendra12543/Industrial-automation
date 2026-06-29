"use client";

import { Phone, Mail, BadgeCheck } from "lucide-react";

interface TopInfoBarProps {
  show: boolean;
}

export default function TopInfoBar({ show }: TopInfoBarProps) {
  return (
    <div
      className="
        mx-auto
        flex
        h-11
        max-w-7xl
        items-center
        justify-end
        gap-8
        px-4
    "
    >
      {/* GST */}

      {/* <div
        className="
      hidden
      lg:flex
      items-center
      gap-2
      text-sm
      font-medium
      text-[#0F2747]
    "
      >
        <BadgeCheck size={16} className="text-orange-500" />

        <span>GST : 12345443</span>
      </div> */}

      {/* Email */}

      <a
        href="mailto:sales@yourcompany.com"
        className="
      flex
      items-center
      gap-2
      text-sm
      font-medium
      text-[#0F2747]
      transition-all
      duration-300
      hover:text-orange-600
    "
      >
        <Mail size={16} className="text-orange-500" />

        <span className="hidden sm:block">sales@yourcompany.com</span>

        <span className="sm:hidden">Email</span>
      </a>

      {/* Phone */}

      <a
        href="tel:+917057748540"
        className="
      flex
      items-center
      gap-2
      text-sm
      font-semibold
      text-[#0F2747]
      transition-all
      duration-300
      hover:text-orange-600
    "
      >
        <Phone size={16} className="text-orange-500" />
        +91 7057748540
      </a>
    </div>
  );
}
