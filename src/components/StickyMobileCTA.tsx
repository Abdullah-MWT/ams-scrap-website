import { MessageCircle, PhoneCall } from "lucide-react";
import { contactInfo } from "@/lib/site";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-background/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <a
          href={contactInfo.phoneHref}
          className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-white/10 text-sm font-semibold text-foreground"
        >
          <PhoneCall className="h-4 w-4" />
          Call Now
        </a>
        <a
          href={`https://wa.me/${contactInfo.whatsapp}`}
          className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
