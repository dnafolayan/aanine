import { useEffect } from "react";

export function useScrollReveal() {
    useEffect(() => {
        const items = Array.from(
            document.querySelectorAll<HTMLElement>(".reveal"),
        );
        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        );

        if (reducedMotion.matches || !("IntersectionObserver" in window))
            return;

        // Keep the first viewport visible before enabling the reveal styles.
        for (const item of items) {
            if (item.getBoundingClientRect().top < window.innerHeight * 0.92) {
                item.classList.add("is-visible");
            }
        }

        document.documentElement.classList.add("motion-ready");

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                }
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
        );

        const showEverythingIfReduced = () => {
            if (!reducedMotion.matches) return;

            items.forEach((item) => item.classList.add("is-visible"));
            observer.disconnect();
            document.documentElement.classList.remove("motion-ready");
        };

        reducedMotion.addEventListener("change", showEverythingIfReduced);

        items
            .filter((item) => !item.classList.contains("is-visible"))
            .forEach((item) => observer.observe(item));

        return () => {
            reducedMotion.removeEventListener(
                "change",
                showEverythingIfReduced,
            );
            observer.disconnect();
            document.documentElement.classList.remove("motion-ready");
        };
    }, []);
}
