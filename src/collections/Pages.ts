
import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status'],
    group: 'Content',
  },

  fields: [

    {
      name: 'website',
      type: 'relationship',
      relationTo: 'websites',
      admin: {
        hidden: true,
      },
    },
    {
      name: 'content',
      type: 'richText',
      admin: {
        hidden: true,
      },
    },

    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Page Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      label: 'Page URL',
    },
    {
      name: 'pageType',
      type: 'select',
      required: true,
      options: [
        { label: 'Homepage', value: 'home' },
        { label: 'About Us', value: 'about' },
        { label: 'Contact Us', value: 'contact' },
        { label: 'Other Page', value: 'other' },
      ],
    },
    {
      name: 'sections',
      type: 'blocks',
      label: 'Page Sections',
      blocks: [
        {
          slug: 'contentSection',
          labels: {
            singular: 'Content Section',
            plural: 'Content Sections',
          },
          fields: [
            {
              name: 'sectionKey',
              type: 'text',
              label: 'Section Identifier',
            },
            {
              name: 'eyebrow',
              type: 'text',
              label: 'Small Heading',
            },
            {
              name: 'heading',
              type: 'text',
              label: 'Main Heading',
            },
            {
              name: 'headingHighlight',
              type: 'text',
              label: 'Highlighted Heading',
            },
            {
              name: 'body',
              type: 'textarea',
              label: 'Paragraph',
            },
            {
              name: 'secondaryBody',
              type: 'textarea',
              label: 'Additional Paragraph',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Section Image',
            },
            {
              name: 'imageURL',
              type: 'text',
              label: 'External Image URL',
            },
            {
              name: 'imageAlt',
              type: 'text',
              label: 'Image Alternative Text',
            },
            {
              name: 'items',
              type: 'array',
              label: 'Features, Services or Cards',
              fields: [
                {
                  name: 'icon',
                  type: 'text',
                  label: 'Icon Class',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Item Title',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Item Description',
                },
                {
                  name: 'linkLabel',
                  type: 'text',
                  label: 'Link Text',
                },
                {
                  name: 'linkURL',
                  type: 'text',
                  label: 'Link URL',
                },
              ],
            },
            {
              name: 'primaryButtonLabel',
              type: 'text',
              label: 'Primary Button Text',
            },
            {
              name: 'primaryButtonURL',
              type: 'text',
              label: 'Primary Button URL',
            },
            {
              name: 'secondaryButtonLabel',
              type: 'text',
              label: 'Secondary Button Text',
            },
            {
              name: 'secondaryButtonURL',
              type: 'text',
              label: 'Secondary Button URL',
            },
          ],
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO Settings',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'SEO Title',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
        },
        {
          name: 'canonicalURL',
          type: 'text',
          label: 'Canonical URL',
        },
        {
          name: 'noIndex',
          type: 'checkbox',
          label: 'No Index',
          defaultValue: false,
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
    },
  ],
}
