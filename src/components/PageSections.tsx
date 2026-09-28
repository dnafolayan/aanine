import { useState, type FormEvent } from "react";

const services = [
    {
        number: "01",
        title: "A website that feels like you",
        description:
            "A thoughtful visual identity online, shaped around your business, your customers, and the way you work.",
        tag: "Brand-led design",
    },
    {
        number: "02",
        title: "Built to work everywhere",
        description:
            "Fast, responsive pages that are easy to use on a phone, tablet, or desktop, from the first visit to the next step.",
        tag: "Responsive development",
    },
    {
        number: "03",
        title: "Ready to be found",
        description:
            "A solid search-friendly foundation, clear page structure, and the essentials that help customers find and trust you.",
        tag: "SEO essentials",
    },
];

const process = [
    {
        number: "01",
        title: "Start with a conversation",
        description:
            "We learn what you offer, who you serve, and what you want the site to help customers do. We’ll agree on the content and assets needed.",
    },
    {
        number: "02",
        title: "Agree on the plan",
        description:
            "Before work begins, we confirm the page scope, visual direction, project schedule, and quote together.",
    },
    {
        number: "03",
        title: "Review, refine, and launch",
        description:
            "We build the agreed site, share it for feedback, refine it within the quoted scope, then prepare it for launch and handover.",
    },
];

const faqs = [
    {
        question: "What kinds of businesses do you work with?",
        answer: "We work with small businesses and independent teams across different industries. If you have a clear service and want a more useful online presence, we can help you find the right approach.",
    },
    {
        question: "How long does a website take to make?",
        answer: "The timeline depends on the project scope and when your content and feedback are ready. We’ll agree on the schedule with you before work begins.",
    },
    {
        question: "Can you update my existing website?",
        answer: "Yes. We can improve an existing site or plan a fresh start. We’ll look at what is already working and what is getting in your customers’ way.",
    },
    {
        question: "What does the ₦100,000 starting price include?",
        answer: "It starts with a custom-designed, responsive one-page website with an enquiry form, essential SEO setup, and launch guidance. You provide the content and brand assets. Domain and hosting are separate, and your quote confirms the final scope.",
    },
    {
        question: "Are domain and hosting included?",
        answer: "No. Domain registration and hosting are separate costs. We’ll confirm what you need and the expected costs before your project begins.",
    },
    {
        question: "How many revisions are included?",
        answer: "Your quote will state the number of review rounds and what they cover before work begins.",
    },
    {
        question: "Can I make changes to the site myself?",
        answer: "That depends on how your site is set up. We’ll agree on the handover and the best way to handle future content updates as part of your project scope.",
    },
];

function SectionIntro({
    id,
    eyebrow,
    title,
    description,
    dark = false,
}: {
    id: string;
    eyebrow: string;
    title: string;
    description?: string;
    dark?: boolean;
}) {
    return (
        <div
            className={`section-intro reveal reveal--rise${dark ? " section-intro--light" : ""}`}
        >
            <p className="eyebrow">{eyebrow}</p>
            <h2 id={id}>{title}</h2>
            {description && (
                <p className="section-intro__description">{description}</p>
            )}
        </div>
    );
}

function HeroArtwork() {
    return (
        <div
            className="hero-art reveal reveal--scale"
            role="img"
            aria-label="Website preview for a small-batch food brand"
        >
            <div className="hero-art__glow" />
            <div className="site-preview">
                <div className="site-preview__topbar">
                    <span className="site-preview__brand">FIELDNOTES</span>
                    <span className="site-preview__menu">MENU&nbsp; +</span>
                </div>
                <div className="site-preview__image">
                    <div className="preview-sun" />
                    <div className="preview-hill preview-hill--back" />
                    <div className="preview-hill preview-hill--front" />
                    <div className="preview-copy">
                        <span>MADE WITH CARE</span>
                        <strong>
                            Good things
                            <br />
                            grow here.
                        </strong>
                        <i>Explore our story&nbsp; ↗</i>
                    </div>
                </div>
                <div className="site-preview__foot">
                    <span>SMALL BATCH · BIG HEART</span>
                    <span>EST. 2018</span>
                </div>
            </div>
            <div className="hero-note">
                <span className="hero-note__spark" aria-hidden="true">
                    ✳
                </span>
                <span>
                    Made for the
                    <br />
                    way you work.
                </span>
            </div>
        </div>
    );
}

function HeroSection() {
    return (
        <section
            className="hero section-shell"
            id="top"
            aria-labelledby="hero-title"
        >
            <div className="hero__copy reveal reveal--rise">
                <p className="eyebrow">
                    <span className="eyebrow__dot" /> YOUR BUSINESS, ONLINE
                </p>
                <h1 id="hero-title">
                    A website that makes
                    <br />
                    <span>your business easy to choose.</span>
                </h1>
                <p className="hero__description">
                    Aanine designs professional, mobile-ready websites for
                    small businesses—helping customers understand what you do
                    and how to get in touch.
                </p>
                <div className="hero__actions">
                    <a className="button button--primary" href="#contact">
                        Get your website started{" "}
                        <span aria-hidden="true">↗</span>
                    </a>
                    <a className="text-link" href="#services">
                        See what we do <span aria-hidden="true">↓</span>
                    </a>
                </div>
                <div className="hero__trust">
                    <span className="hero__trust-mark" aria-hidden="true">
                        ✳
                    </span>
                    <p>
                        Clear scope. Thoughtful design.
                        <br />
                        <strong>Built around your customers.</strong>
                    </p>
                </div>
            </div>
            <HeroArtwork />
        </section>
    );
}

function ServicesSection() {
    return (
        <section
            className="section section--paper"
            id="services"
            aria-labelledby="services-title"
        >
            <div className="container">
                <SectionIntro
                    id="services-title"
                    eyebrow="WHAT WE DO"
                    title="Everything your business needs to show up well."
                    description="From the first idea to launch day, we bring strategy, design, and development together in one considered process."
                />
                <div className="service-grid">
                    {services.map((service) => (
                        <article
                            className="service-card reveal reveal--rise"
                            key={service.number}
                        >
                            <div className="service-card__top">
                                <span className="service-card__number">
                                    {service.number}
                                </span>
                                <span
                                    className="service-card__icon"
                                    aria-hidden="true"
                                >
                                    ↗
                                </span>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <span className="service-card__tag">
                                {service.tag}
                            </span>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

function WhySection() {
    return (
        <section
            className="section section--dark"
            id="why-aanine"
            aria-labelledby="why-title"
        >
            <div className="container why-layout">
                <div className="why-main">
                    <SectionIntro
                        id="why-title"
                        eyebrow="WHY AANINE"
                        title="Good work deserves a good first impression."
                        description="Your website should make it easy for the right people to understand what you do and feel good about choosing you."
                        dark
                    />
                    <a className="button button--light" href="#process">
                        A little about how we work{" "}
                        <span aria-hidden="true">↗</span>
                    </a>
                </div>
                <div className="why-points">
                    <article className="why-point reveal reveal--rise">
                        <span>01</span>
                        <div>
                            <h3>Small-business minded</h3>
                            <p>
                                Practical choices, thoughtful detail, and a
                                process that respects your time.
                            </p>
                        </div>
                    </article>
                    <article className="why-point reveal reveal--rise">
                        <span>02</span>
                        <div>
                            <h3>Clear from day one</h3>
                            <p>
                                Plain-language guidance, agreed next steps, and
                                no guesswork about what comes next.
                            </p>
                        </div>
                    </article>
                    <article className="why-point reveal reveal--rise">
                        <span>03</span>
                        <div>
                            <h3>Made to move with you</h3>
                            <p>
                                A flexible foundation designed to support your
                                business as it changes and grows.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
            <div className="why-orbit" aria-hidden="true">
                <span>AA</span>
            </div>
        </section>
    );
}

function ProcessSection() {
    return (
        <section
            className="section section--tint"
            id="process"
            aria-labelledby="process-title"
        >
            <div className="container">
                <SectionIntro
                    id="process-title"
                    eyebrow="HOW WE WORK"
                    title="A clear path from first hello to launch."
                    description="No jargon, no mystery. You’ll know what we’re doing, what we need from you, and what comes next."
                />
                <ol className="process-grid">
                    {process.map((step) => (
                        <li
                            className="process-card reveal reveal--rise"
                            key={step.number}
                        >
                            <span className="process-card__number">
                                {step.number}
                            </span>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

function PricingSection() {
    return (
        <section
            className="section section--paper"
            id="pricing"
            aria-labelledby="pricing-title"
        >
            <div className="container pricing-layout">
                <div className="pricing-copy">
                    <SectionIntro
                        id="pricing-title"
                        eyebrow="STRAIGHTFORWARD PRICING"
                        title="A strong start, with a clear price."
                        description="Every business is different. We’ll recommend the right scope for your goals and share a straightforward quote before we begin."
                    />
                    <p className="pricing-note">
                        <span aria-hidden="true">✳</span> No surprise extras.
                        Just clear scope and honest advice.
                    </p>
                </div>
                <div className="price-card reveal reveal--rise">
                    <p className="price-card__label">WEBSITE PROJECTS</p>
                    <p className="price-card__amount">
                        Starting at <strong>₦100,000</strong>
                    </p>
                    <p className="price-card__detail">
                        A custom-designed, responsive one-page site with an
                        enquiry form, essential SEO setup, and launch guidance.
                        Multi-page sites and custom features are quoted separately.
                    </p>
                    <ul>
                        <li>
                            <span aria-hidden="true">✓</span> Custom design for
                            your business
                        </li>
                        <li>
                            <span aria-hidden="true">✓</span> Responsive website build
                        </li>
                        <li>
                            <span aria-hidden="true">✓</span> Essential search
                            setup
                        </li>
                        <li>
                            <span aria-hidden="true">✓</span> Enquiry form setup
                        </li>
                        <li>
                            <span aria-hidden="true">✓</span> Launch guidance
                        </li>
                    </ul>
                    <a
                        className="button button--primary button--full"
                        href="#contact"
                    >
                        Get a clear quote <span aria-hidden="true">↗</span>
                    </a>
                    <p className="price-card__footnote">
                        You provide content and brand assets. Domain and hosting
                        are separate. Your quote confirms scope and review rounds.
                    </p>
                </div>
            </div>
        </section>
    );
}

function FAQSection() {
    return (
        <section
            className="section section--tint"
            id="faq"
            aria-labelledby="faq-title"
        >
            <div className="container faq-layout">
                <SectionIntro
                    id="faq-title"
                    eyebrow="GOOD TO KNOW"
                    title="A few things you might be wondering."
                    description="Still have a question? We’re happy to talk it through."
                />
                <div className="faq-list">
                    {faqs.map((faq) => (
                        <details
                            className="faq-item reveal reveal--rise"
                            key={faq.question}
                        >
                            <summary>
                                {faq.question}
                                <span
                                    className="faq-item__toggle"
                                    aria-hidden="true"
                                />
                            </summary>
                            <p>{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");
    const [submitStatus, setSubmitStatus] = useState<"success" | "error" | "">(
        "",
    );

    async function handleEnquirySubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (isSubmitting) return;

        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
        if (!accessKey) {
            setSubmitStatus("error");
            setSubmitMessage(
                "The enquiry form is being set up. Please email us directly for now.",
            );
            return;
        }

        const form = event.currentTarget;
        const formData = new FormData(form);
        const fields = Object.fromEntries(formData.entries());
        setIsSubmitting(true);
        setSubmitStatus("");
        setSubmitMessage("Sending your enquiry…");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    ...fields,
                    access_key: accessKey,
                    subject: "New website enquiry for Aanine",
                }),
            });
            const result = (await response.json()) as {
                success?: boolean;
                message?: string;
                body?: { message?: string };
            };

            if (!response.ok || !result.success) {
                throw new Error(
                    result.message ??
                        result.body?.message ??
                        "Submission failed.",
                );
            }

            form.reset();
            setSubmitStatus("success");
            setSubmitMessage(
                "Thanks — your enquiry has been sent. We’ll be in touch soon.",
            );
        } catch {
            setSubmitStatus("error");
            setSubmitMessage(
                "We couldn’t send your enquiry just now. Please try again or email us directly.",
            );
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section
            className="contact-section"
            id="contact"
            aria-labelledby="contact-title"
        >
            <div className="container contact-panel reveal reveal--rise">
                <div className="contact-panel__copy">
                    <p className="eyebrow eyebrow--light">
                        LET’S MAKE YOUR NEXT MOVE
                    </p>
                    <h2 id="contact-title">
                        Your business has a story.
                        <br />
                        <span>Let’s put it online.</span>
                    </h2>
                    <p>
                        Tell us what your business needs. We’ll review your
                        enquiry and follow up by email about scope and next steps.
                    </p>
                </div>
                <form
                    className="contact-form"
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    aria-label="Project enquiry"
                    aria-describedby="contact-form-help"
                    aria-busy={isSubmitting}
                    onSubmit={handleEnquirySubmit}
                >
                    <input
                        type="hidden"
                        name="access_key"
                        value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? ""}
                    />
                    <input
                        type="hidden"
                        name="subject"
                        value="New website enquiry for Aanine"
                    />
                    <label htmlFor="contact-name">Your name</label>
                    <input
                        id="contact-name"
                        name="name"
                        autoComplete="name"
                        placeholder="e.g. Alex Johnson"
                        required
                    />

                    <label htmlFor="contact-email">Email address</label>
                    <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@business.com"
                        required
                    />

                    <label htmlFor="contact-business">
                        Business name <span>(optional)</span>
                    </label>
                    <input
                        id="contact-business"
                        name="business"
                        autoComplete="organization"
                        placeholder="Your business name"
                    />

                    <label htmlFor="contact-message">
                        What do you need your website to do?
                    </label>
                    <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        placeholder="What do you offer, and what would you like the site to help with?"
                        required
                    />

                    <button className="button button--lime" type="submit">
                        {isSubmitting ? "Sending…" : "Send your enquiry"}
                        {!isSubmitting && <span aria-hidden="true">↗</span>}
                    </button>
                    <p
                        className={`contact-form__status${submitStatus ? ` contact-form__status--${submitStatus}` : ""}`}
                        role={submitStatus === "error" ? "alert" : "status"}
                        aria-live={
                            submitStatus === "error" ? "assertive" : "polite"
                        }
                    >
                        {submitMessage}
                    </p>
                    <p className="contact-form__help" id="contact-form-help">
                        We’ll use your details to follow up about your project.
                        Prefer email? Write to us at{" "}
                        <a href="mailto:divineafolayan05@gmail.com">
                            divineafolayan05@gmail.com
                        </a>
                        .
                    </p>
                </form>
                <span className="contact-panel__star" aria-hidden="true">
                    ✳
                </span>
            </div>
        </section>
    );
}

export function PageSections() {
    return (
        <>
            <HeroSection />
            <ServicesSection />
            <WhySection />
            <ProcessSection />
            <PricingSection />
            <FAQSection />
            <ContactSection />
        </>
    );
}
