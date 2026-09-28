const footerLinks = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Our process' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQs' },
]

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <div><a className="wordmark wordmark--footer" href="#top" aria-label="Aanine home">aanine<span aria-hidden="true">.</span></a><p>Thoughtful websites for<br />businesses moving forward.</p></div>
        <nav className="footer-nav" aria-label="Footer navigation">{footerLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
      </div>
      <div className="container site-footer__bottom"><span>© {new Date().getFullYear()} Aanine Studio</span><span>Made with care for what’s next.</span></div>
      <a className="back-to-top" href="#top" aria-label="Back to top">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="m6 14 6-6 6 6" />
        </svg>
      </a>
    </footer>
  )
}
