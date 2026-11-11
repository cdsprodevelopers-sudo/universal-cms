
import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../payload.config'

const pages = [
  {
    title: 'Advanced Neurological Care',
    slug: 'home',
    pageType: 'home',
    status: 'published',
    sections: [
      {
        blockType: 'contentSection',
        sectionKey: 'hero',
        eyebrow: 'ADVANCED BRAIN & NERVE CARE',
        heading: 'Advanced Neurological Care',
        headingHighlight: 'Your health, our priority.',
        body: 'Expert neurological care, advanced diagnosis and compassionate treatment — helping you move towards a healthier and more confident life.',
        imageURL: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1100&q=85',
        imageAlt: 'Doctor in a modern medical clinic',
        primaryButtonLabel: 'Book an Appointment',
        primaryButtonURL: '#contact',
        secondaryButtonLabel: 'Explore Our Services',
        secondaryButtonURL: '#services',
      },
      {
        blockType: 'contentSection',
        sectionKey: 'trust',
        items: [
          { title: 'Expert Specialists' },
          { title: 'Modern Technology' },
          { title: 'Patient First Care' },
          { title: 'Easy Appointments' },
        ],
      },
      {
        blockType: 'contentSection',
        sectionKey: 'about',
        eyebrow: 'ABOUT OUR CLINIC',
        heading: 'Where neurological expertise meets compassionate care.',
        body: 'We believe every patient deserves thoughtful attention, accurate diagnosis and care that puts their needs first.',
        secondaryBody: 'Our goal is to make quality neurological care accessible, comfortable and easy to understand.',
        imageURL: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85',
        imageAlt: 'Modern healthcare consultation',
        items: [
          { title: 'Experienced Specialists' },
          { title: 'Personalised Attention' },
          { title: 'Patient-focused Diagnosis' },
          { title: 'Compassionate Support' },
        ],
        primaryButtonLabel: 'Discover Our Approach',
        primaryButtonURL: '/about',
      },
      {
        blockType: 'contentSection',
        sectionKey: 'services',
        eyebrow: 'OUR SERVICES',
        heading: 'Comprehensive care for your brain and nerves.',
        body: 'From diagnosis to treatment, discover personalised neurological care designed around your needs.',
        items: [
          {
            icon: 'bi-brain',
            title: 'Brain Disorders',
            description: 'Evaluation and care for a range of neurological conditions.',
            linkLabel: 'Learn More',
            linkURL: '#contact',
          },
          {
            icon: 'bi-activity',
            title: 'Spine & Nerve Care',
            description: 'Assessment of spine, nerve and related neurological concerns.',
            linkLabel: 'Learn More',
            linkURL: '#contact',
          },
          {
            icon: 'bi-lightning-charge',
            title: 'Headaches & Migraine',
            description: 'Personalised evaluation and management of recurring headaches.',
            linkLabel: 'Learn More',
            linkURL: '#contact',
          },
          {
            icon: 'bi-universal-access',
            title: 'Movement Disorders',
            description: 'Specialist assessment for movement and coordination concerns.',
            linkLabel: 'Learn More',
            linkURL: '#contact',
          },
        ],
      },
      {
        blockType: 'contentSection',
        sectionKey: 'contact',
        eyebrow: 'WE ARE HERE TO HELP',
        heading: 'Take the first step towards better brain health.',
        primaryButtonLabel: 'Contact Our Clinic',
        primaryButtonURL: 'tel:+919876543210',
      },
    ],
    seo: {
      metaTitle: 'Advanced Neurological Care | Neurology Clinic',
      metaDescription: 'Discover expert neurological care, advanced diagnosis and compassionate treatment at our neurology clinic.',
      noIndex: false,
    },
  },
  {
    title: 'About Us',
    slug: 'about',
    pageType: 'about',
    status: 'published',
    sections: [
      {
        blockType: 'contentSection',
        sectionKey: 'hero',
        eyebrow: 'GET TO KNOW US',
        heading: 'Advancing Neurological Care with Compassion.',
        body: 'We bring together medical expertise, thoughtful care and a patient-focused approach to support better neurological health.',
        primaryButtonLabel: 'Book an Appointment',
        primaryButtonURL: '/contact',
        secondaryButtonLabel: 'Explore Our Services',
        secondaryButtonURL: '/services',
        imageAlt: 'Neurological healthcare',
      },
      {
        blockType: 'contentSection',
        sectionKey: 'introduction',
        eyebrow: 'WHO WE ARE',
        heading: 'A More Thoughtful Approach to Brain Health',
        body: 'Neurological health deserves attention, understanding and personalised care.',
        secondaryBody: "Our approach is centred on understanding each patient's concerns, explaining care options clearly and supporting patients throughout their healthcare journey. From the first consultation to ongoing care, we aim to make every interaction informative, respectful and reassuring.",
      },
      {
        blockType: 'contentSection',
        sectionKey: 'story',
        eyebrow: 'OUR STORY',
        heading: 'Built Around Better Patient Experiences',
        body: "Every patient's journey is different. We focus on the person as a whole.",
        secondaryBody: 'Our philosophy brings together attentive consultations, thoughtful clinical decisions and meaningful communication with patients and their families.',
        imageAlt: 'Healthcare consultation',
        primaryButtonLabel: 'Connect with our team',
        primaryButtonURL: '/contact',
      },
      {
        blockType: 'contentSection',
        sectionKey: 'mission',
        eyebrow: 'OUR MISSION',
        heading: 'Making Quality Neurological Care More Approachable',
        body: 'To provide attentive, informed and compassionate neurological care while helping patients make confident decisions about their health.',
      },
      {
        blockType: 'contentSection',
        sectionKey: 'vision',
        eyebrow: 'OUR VISION',
        heading: 'A Healthier Future Through Better Understanding',
        body: 'To build a care experience where patients feel informed, respected and supported at every stage of their neurological health journey.',
      },
      {
        blockType: 'contentSection',
        sectionKey: 'values',
        eyebrow: 'OUR VALUES',
        heading: 'The Values Behind Our Care',
        body: 'The principles that shape our approach to every patient and every consultation.',
        items: [
          {
            icon: 'bi-heart-pulse',
            title: 'Patient First',
            description: 'Every care decision begins with understanding the individual patient and their needs.',
          },
          {
            icon: 'bi-award',
            title: 'Clinical Excellence',
            description: 'We strive for high standards in neurological assessment, diagnosis and treatment.',
          },
          {
            icon: 'bi-people',
            title: 'Compassionate Care',
            description: 'We believe listening, empathy and clear communication are essential to good care.',
          },
          {
            icon: 'bi-lightbulb',
            title: 'Continuous Learning',
            description: 'We value ongoing learning and evidence-informed approaches to neurological care.',
          },
        ],
      },
      {
        blockType: 'contentSection',
        sectionKey: 'cta',
        eyebrow: 'YOUR HEALTH MATTERS',
        heading: "Let's Take the Next Step Towards Better Neurological Health.",
        body: 'Have a concern or need guidance? Connect with our team to discuss your next steps.',
        primaryButtonLabel: 'Book Your Consultation',
        primaryButtonURL: '/contact',
      },
    ],
    seo: {
      metaTitle: 'About Us | Neurology Clinic',
      metaDescription: 'Learn about our approach to advanced neurological care, our values and our commitment to patients.',
      noIndex: false,
    },
  },
]

async function syncPages() {
  const payload = await getPayload({ config })

  for (const page of pages) {
    const existing = await payload.find({
      collection: 'pages',
      where: {
        slug: { equals: page.slug },
      },
      limit: 1,
      overrideAccess: true,
    })

    if (existing.docs.length > 0) {
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        data: page as any,
        overrideAccess: true,
      })

      console.log(`Updated: ${page.title}`)
    } else {
      await payload.create({
        collection: 'pages',
        data: page as any,
        overrideAccess: true,
      })

      console.log(`Created: ${page.title}`)
    }
  }

  console.log('Page content synchronization completed.')
  process.exit(0)
}

syncPages().catch((error) => {
  console.error('Page synchronization failed:', error)
  process.exit(1)
})
