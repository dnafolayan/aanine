import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { PageSections } from './components/PageSections'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content"><PageSections /></main>
      <SiteFooter />
    </>
  )
}
