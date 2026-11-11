
import { getPayload } from 'payload'
import config from '@/payload.config'

import './homepage.css'

export const dynamic = 'force-dynamic'

type SectionItem = {
  icon?: string
  title?: string
  description?: string
  linkLabel?: string
  linkURL?: string
}

type PageSection = {
  sectionKey?: string
  eyebrow?: string
  heading?: string
  headingHighlight?: string
  body?: string
  secondaryBody?: string
  imageURL?: string
  imageAlt?: string
  image?: { url?: string } | string | null
  items?: SectionItem[]
  primaryButtonLabel?: string
  primaryButtonURL?: string
  secondaryButtonLabel?: string
  secondaryButtonURL?: string
}

export default async function HomePage() {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'pages',
    where: {
      and: [
        { slug: { equals: 'home' } },
        { status: { equals: 'published' } },
      ],
    },
    limit: 1,
    depth: 1,
  })

  const page = result.docs[0]

  const sections = (page?.sections || []) as PageSection[]

  const getSection = (key: string) =>
    sections.find((section) => section.sectionKey === key)

  const hero = getSection('hero')
  const trust = getSection('trust')
  const about = getSection('about')
  const services = getSection('services')
  const contact = getSection('contact')

  const getImage = (section?: PageSection) => {
    if (section?.image && typeof section.image === 'object') {
      return section.image.url || section.imageURL || ''
    }

    return section?.imageURL || ''
  }

  const trustItems = trust?.items?.length
    ? trust.items
    : [
        { icon: 'bi-person-check', title: 'Expert Specialists' },
        { icon: 'bi-cpu', title: 'Modern Technology' },
        { icon: 'bi-heart', title: 'Patient First Care' },
        { icon: 'bi-calendar2-check', title: 'Easy Appointments' },
      ]

  const aboutItems = about?.items?.length
    ? about.items
    : [
        { icon: 'bi-patch-check-fill', title: 'Experienced Specialists' },
        { icon: 'bi-person-hearts', title: 'Personalised Attention' },
        { icon: 'bi-clipboard2-pulse', title: 'Patient-focused Diagnosis' },
        { icon: 'bi-shield-check', title: 'Compassionate Support' },
      ]

  const serviceItems = services?.items?.length
    ? services.items
    : [
        {
          icon: 'bi-brain',
          title: 'Brain Disorders',
          description: 'Evaluation and care for a range of neurological conditions.',
        },
        {
          icon: 'bi-activity',
          title: 'Spine & Nerve Care',
          description: 'Assessment of spine, nerve and related neurological concerns.',
        },
        {
          icon: 'bi-lightning-charge',
          title: 'Headaches & Migraine',
          description: 'Personalised evaluation and management of recurring headaches.',
        },
        {
          icon: 'bi-universal-access',
          title: 'Movement Disorders',
          description: 'Specialist assessment for movement and coordination concerns.',
        },
      ]

  return (
    <main className="neuro-home">

      {/* Hero Section */}
      <section className="neuro-hero">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6 hero-content" data-aos="fade-right">

              <div className="hero-eyebrow">
                <span className="eyebrow-line" />
                {hero?.eyebrow || 'ADVANCED BRAIN & NERVE CARE'}
              </div>

              <h1>
                {hero?.heading || page?.title || 'Advanced Neurological Care'}
                <span className="hero-highlight">
                  {hero?.headingHighlight || 'Your health, our priority.'}
                </span>
              </h1>

              <p className="hero-description">
                {hero?.body || 'Expert neurological care, advanced diagnosis and compassionate treatment — helping you move towards a healthier and more confident life.'}
              </p>

              <div className="hero-actions">
                <a
                  href={hero?.primaryButtonURL || '#contact'}
                  className="btn-primary-custom"
                >
                  {hero?.primaryButtonLabel || 'Book an Appointment'}
                  <i className="bi bi-arrow-up-right" />
                </a>

                <a
                  href={hero?.secondaryButtonURL || '#services'}
                  className="btn-outline-custom"
                >
                  {hero?.secondaryButtonLabel || 'Explore Our Services'}
                  <i className="bi bi-arrow-right" />
                </a>
              </div>

              <div className="hero-trust">
                <div className="trust-icon">
                  <i className="bi bi-heart-pulse" />
                </div>
                <div>
                  <strong>Care that puts patients first</strong>
                  <span>Personalised neurological attention</span>
                </div>
              </div>

            </div>

            <div className="col-lg-6 hero-visual" data-aos="fade-left">

              <div className="hero-image-frame">
                <img
                  src={
                    getImage(hero) ||
                    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1100&q=85'
                  }
                  alt={hero?.imageAlt || 'Doctor in a modern medical clinic'}
                />

                <div className="image-decoration" />
              </div>

              <div className="hero-floating-card">
                <div className="floating-icon">
                  <i className="bi bi-shield-check" />
                </div>
                <div>
                  <strong>Compassionate Care</strong>
                  <span>Expertise you can trust</span>
                </div>
              </div>

              <div className="hero-circle-decoration" />

            </div>

          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="trust-strip">
        <div className="container">
          <div className="row g-3">

            {trustItems.map((item, index) => (
              <div className="col-6 col-lg-3" key={index}>
                <div className="trust-item">
                  <i className={`bi ${item.icon || 'bi-check-circle'}`} />
                  <span>{item.title}</span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* About the Clinic */}
      <section className="about-section section-padding" id="about">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6" data-aos="fade-right">
              <div className="about-image-wrap">
                <img
                  src={
                    getImage(about) ||
                    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85'
                  }
                  alt={about?.imageAlt || 'Modern healthcare consultation'}
                  className="about-image"
                />

                <div className="about-experience-card">
                  <i className="bi bi-heart-pulse" />
                  <div>
                    <strong>Patient First</strong>
                    <span>Care with compassion</span>
                  </div>
                </div>

                <div className="about-image-accent" />
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="about-content">
                <span className="eyebrow">
                  {about?.eyebrow || 'ABOUT OUR CLINIC'}
                </span>

                <h2>
                  {about?.heading || 'Where neurological expertise meets'}
                  <span className="hero-highlight">
                    {about?.headingHighlight || ' compassionate care.'}
                  </span>
                </h2>

                <p>
                  {about?.body || 'We believe every patient deserves thoughtful attention, accurate diagnosis and a personalised approach to neurological healthcare.'}
                </p>

                {about?.secondaryBody && <p>{about.secondaryBody}</p>}

                <div className="about-features">
                  {aboutItems.map((item, index) => (
                    <div key={index}>
                      <i className={`bi ${item.icon || 'bi-patch-check-fill'}`} />
                      <span>{item.title}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={aboutItems[0]?.linkURL || '#contact'}
                  className="btn-primary-custom"
                >
                  {aboutItems[0]?.linkLabel || 'Discover Our Approach'}
                  <i className="bi bi-arrow-up-right" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding" id="services">
        <div className="container">

          <div className="section-heading" data-aos="fade-up">
            <span className="eyebrow">
              {services?.eyebrow || 'OUR EXPERTISE'}
            </span>
            <h2>
              {services?.heading || 'Comprehensive care for your'}
              <span className="hero-highlight">
                {services?.headingHighlight || ' brain and nerves.'}
              </span>
            </h2>
            <p>
              {services?.body || 'From diagnosis to treatment, discover personalised neurological care designed around your needs.'}
            </p>
          </div>

          <div className="row g-4">

            {serviceItems.map((service, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <article className="custom-card service-card" data-aos="fade-up">
                  <div className="service-icon">
                    <i className={`bi ${service.icon || 'bi-heart-pulse'}`} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a
                    href={service.linkURL || '#contact'}
                    className="service-link"
                  >
                    {service.linkLabel || 'Learn More'}
                    <i className="bi bi-arrow-up-right" />
                  </a>
                </article>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-placeholder" id="contact">
        <div className="container text-center">
          <span className="eyebrow">
            {contact?.eyebrow || 'WE ARE HERE TO HELP'}
          </span>
          <h2>
            {contact?.heading || 'Take the first step towards better brain health.'}
          </h2>
          <a
            href={contact?.primaryButtonURL || 'tel:+919876543210'}
            className="btn-primary-custom"
          >
            <i className="bi bi-telephone" />
            {contact?.primaryButtonLabel || 'Contact Our Clinic'}
          </a>
        </div>
      </section>

    </main>
  )
}
