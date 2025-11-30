// resources/js/components/FloatingWhatsApp.tsx
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/919876543210?text=Hi%20ALTEX%2C%20I%20need%20a%20testing%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all hover:scale-110 hover:shadow-green-500/50 animate-bounce"
        >
            <MessageCircle className="h-9 w-9" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-3 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
        Chat on WhatsApp
      </span>
        </a>
    );
}
