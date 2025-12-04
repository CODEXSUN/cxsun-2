// resources/js/components/FloatingWhatsApp.tsx

export default function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/919876543210?text=Hi%20ALTEX%2C%20I%20need%20a%20testing%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed right-6 bottom-6 z-50 flex h-16 w-16 animate-bounce items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all hover:scale-110 hover:shadow-green-500/50"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-message-circle-more-icon lucide-message-circle-more"
            >
                <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
                <path d="M8 12h.01" />
                <path d="M12 12h.01" />
                <path d="M16 12h.01" />
            </svg>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-md bg-gray-900 px-3 py-1 text-sm whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100">
                Chat on WhatsApp
            </span>
        </a>
    );
}
