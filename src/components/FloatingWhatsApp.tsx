import { MessageCircle } from "lucide-react";
import { contactInfo } from "@/lib/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${contactInfo.whatsapp}?text=Hi%20AMS%20Scrap%2C%20I%20would%20like%20a%20scrap%20quote.`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition hover:-translate-y-1 hover:bg-emerald-400"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
