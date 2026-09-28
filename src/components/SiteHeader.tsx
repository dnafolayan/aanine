import { useRef, useState } from "react";

const navigation = [
    { href: "#services", label: "Services" },
    { href: "#process", label: "Our process" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQs" },
];

export function SiteHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

    return (
        <header className="site-header">
            <div className="site-header__inner">
                <a className="wordmark" href="#top" aria-label="Aanine home">
                    aanine<span aria-hidden="true">.</span>
                </a>
                <button
                    ref={menuButtonRef}
                    className={`site-header__menu-toggle${isMenuOpen ? " is-open" : ""}`}
                    type="button"
                    aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
                    aria-expanded={isMenuOpen}
                    aria-controls="site-navigation"
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    <span className="site-header__menu-icon" aria-hidden="true" />
                </button>
                <nav
                    className={`site-nav${isMenuOpen ? " is-open" : ""}`}
                    id="site-navigation"
                    aria-label="Main navigation"
                    onKeyDown={(event) => {
                        if (event.key === "Escape" && isMenuOpen) {
                            setIsMenuOpen(false);
                            menuButtonRef.current?.focus();
                        }
                    }}
                >
                    {navigation.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
                <a
                    className="button button--small button--dark site-header__cta"
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Let’s talk <span aria-hidden="true">↗</span>
                </a>
            </div>
        </header>
    );
}
