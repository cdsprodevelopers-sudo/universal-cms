
import { getPayload } from 'payload'
import type { Metadata } from 'next'
import config from '@/payload.config'
import './about.css'

export const dynamic = 'force-dynamic'

async function getAboutPage() {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'pages',
    where: {
      and: [
        { slug: { equals: 'about' } },
        { status: { equals: 'published' } },
      ],
    },
    limit: 1,
  })

  return result.docs[0]
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getAboutPage()
  const seo = page?.seo

  return {
    title: seo?.metaTitle || page?.title || 'About Us',
    description: seo?.metaDescription || '',
    alternates: seo?.canonicalURL
      ? { canonical: seo.canonicalURL }
      : undefined,
    robots: seo?.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}

export default async function AboutPage() {
  const page = await getAboutPage()
  const sections = (page?.sections || []) as any[]

  const getSection = (key: string) =>
    sections.find((section) => section.sectionKey === key) || {}

  const hero = getSection('hero')
  const introduction = getSection('introduction')
  const story = getSection('story')
  const mission = getSection('mission')
  const vision = getSection('vision')
  const values = getSection('values')
  const cta = getSection('cta')

  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="eyebrow">{hero.eyebrow}</span>
              <h1>
                {hero.heading}
                <span className="hero-highlight">
                  {' '}{hero.headingHighlight}
                </span>
              </h1>
              <p>{hero.body}</p>

              <div className="hero-actions">
                <a
                  href={hero.primaryButtonURL || '/contact'}
                  className="btn-primary-custom"
                >
                  {hero.primaryButtonLabel}
                  <i className="bi bi-arrow-up-right" />
                </a>

                <a
                  href={hero.secondaryButtonURL || '/services'}
                  className="btn-outline-custom"
                >
                  {hero.secondaryButtonLabel}
                  <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-hero-visual">
                {hero.imageURL ? (
                  <img
                    src={hero.imageURL}
                    alt={hero.imageAlt || ''}
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <div className="about-image-placeholder">
                    <i className="bi bi-hospital" />
                    <p>{hero.imageAlt || 'Neurological Healthcare'}</p>
                  </div>
                )}

                <div className="about-image-label">
                  <i className="bi bi-heart-pulse" />
                  <div>
                    <strong>{hero.label || 'Patient First Care'}</strong>
                    <span>Compassionate Healthcare</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="about-intro section-padding">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9">
              <span className="eyebrow">{introduction.eyebrow}</span>
              <h2>{introduction.heading}</h2>
              <div className="about-intro-line mx-auto" />

              <p className="about-intro-large mt-4">
                {introduction.body}
              </p>

              <p>{introduction.secondaryBody}</p>
              {introduction.additionalBody && (
                <p>{introduction.additionalBody}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about-story-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="about-story-visual">
                {story.imageURL ? (
                  <img
                    src={story.imageURL}
                    alt={story.imageAlt || ''}
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <div className="about-image-placeholder">
                    <i className="bi bi-people" />
                    <p>{story.imageAlt || 'Our Story'}</p>
                  </div>
                )}
                <div className="about-story-accent" />
              </div>
            </div>

            <div className="col-lg-6">
              <span className="eyebrow">{story.eyebrow}</span>
              <h2>{story.heading}</h2>
              <p>{story.body}</p>
              <p>{story.secondaryBody}</p>

              <a
                href={story.primaryButtonURL || '/contact'}
                className="about-text-link"
              >
                {story.primaryButtonLabel || 'Connect with our team'}
                <i className="bi bi-arrow-up-right" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-purpose-card">
                <div className="about-purpose-icon">
                  <i className={`bi ${mission.icon || 'bi-bullseye'}`} />
                </div>
                <span>{mission.eyebrow || 'OUR MISSION'}</span>
                <h3>{mission.heading}</h3>
                <p>{mission.body}</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-purpose-card about-vision-card">
                <div className="about-purpose-icon">
                  <i className={`bi ${vision.icon || 'bi-eye'}`} />
                </div>
                <span>{vision.eyebrow || 'OUR VISION'}</span>
                <h3>{vision.heading}</h3>
                <p>{vision.body}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="about-values-section section-padding">
        <div className="container">
          <div className="section-heading text-center">
            <span className="eyebrow">{values.eyebrow}</span>
            <h2>{values.heading}</h2>
            <p>{values.body}</p>
          </div>

          <div className="row g-4 mt-3">
            {(values.items || []).map((item: any, index: number) => (
              <div className="col-md-6 col-lg-3" key={item.id || index}>
                <div className="about-value-card">
                  <div className="about-value-icon">
                    <i className={`bi ${item.icon || 'bi-heart'}`} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-content">
            <span className="eyebrow">{cta.eyebrow}</span>
            <h2>{cta.heading}</h2>
            <p>{cta.body}</p>

            <a
              href={cta.primaryButtonURL || '/contact'}
              className="btn-primary-custom"
            >
              {cta.primaryButtonLabel}
              <i className="bi bi-arrow-up-right" />
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
