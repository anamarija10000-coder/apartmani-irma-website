"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "385959091695";

  const message =
    "Hello! I would like more information about Apartments Irma.";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-2xl
        transition
        duration-300
        hover:scale-110
        hover:bg-[#20ba5a]
        animate-pulse
      "
    >
      <MessageCircle size={32} />
    </a>
  );
}