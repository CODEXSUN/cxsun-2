import { useRef, useState } from 'react';

interface AccordionItem {
    question: string;
    answer: string;
}

interface AccordionProps {
    title?: string;
    items: AccordionItem[];
    type?: 'cross' | 'chevron' | 'plus';
    titleStyle?: string;
    cardStyle?: string;
}

export default function Accordion({
    title,
    items,
    type = 'cross',
    titleStyle,
    cardStyle,
}: AccordionProps) {
    const [activeAccordion, setActiveAccordion] = useState<string>('');
    const [heights, setHeights] = useState<Record<string, number>>({});
    const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

    const toggleAccordion = (id: string) => {
        const isClosing = activeAccordion === id;
        const next = isClosing ? '' : id;
        setActiveAccordion(next);

        // measure height on open (not during render)
        if (!isClosing) {
            const el = contentRefs.current[id];
            if (el) {
                setHeights((prev) => ({
                    ...prev,
                    [id]: el.scrollHeight,
                }));
            }
        }
    };

    return (
        <div>
            {title && (
                <div
                    className={`text-center font-bold text-primary-foreground ${titleStyle}`}
                >
                    {title}
                </div>
            )}

            <div
                className={`relative mx-auto w-full divide-y divide-ring/30 overflow-hidden rounded-md border border-ring/30 text-sm ${cardStyle}`}
            >
                {items.map((item, index) => {
                    const id = `accordion-${index}`;
                    const isActive = activeAccordion === id;
                    const maxHeight = isActive ? (heights[id] ?? 0) : 0;

                    return (
                        <div key={id} className="group cursor-pointer">
                            <button
                                onClick={() => toggleAccordion(id)}
                                className="flex w-full items-center justify-between p-4 text-left"
                            >
                                <span className="text-lg font-semibold text-primary-foreground">
                                    {item.question}
                                </span>

                                {type === 'chevron' && (
                                    <svg
                                        className={`h-4 w-4 transform duration-200 ${isActive ? 'rotate-180' : ''}`}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                )}

                                {type === 'plus' && (
                                    <div
                                        className={`relative flex h-2.5 w-2.5 items-center justify-center duration-300 ${
                                            isActive ? 'rotate-90' : ''
                                        }`}
                                    >
                                        <div className="absolute h-full w-0.5 rounded-full bg-white"></div>
                                        <div
                                            className={`absolute h-0.5 w-full rounded-full bg-white ${
                                                isActive ? 'rotate-90' : ''
                                            }`}
                                        ></div>
                                    </div>
                                )}

                                {type === 'cross' && (
                                    <svg
                                        className={`h-5 w-5 transform text-white duration-300 ${isActive ? 'rotate-45' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6v12m6-6H6"
                                        />
                                    </svg>
                                )}
                            </button>

                            <div
                                ref={(el) => {
                                    contentRefs.current[id] = el;
                                }}
                                style={{ maxHeight }}
                                className="overflow-hidden transition-all duration-300"
                            >
                                <div className="p-4 pt-0 text-primary-foreground opacity-80">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
