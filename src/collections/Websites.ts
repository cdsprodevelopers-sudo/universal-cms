
import type { CollectionConfig } from 'payload'

export const Websites: CollectionConfig = {
  slug: 'websites',

  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'domain', 'status', 'updatedAt'],
    group: 'Website Management',
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Website Name',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Website Slug',
      required: true,
      unique: true,
    },
    {
      name: 'domain',
      type: 'text',
      label: 'Website Domain',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Website Description',
    },
    {
      name: 'status',
      type: 'select',
      label: 'Website Status',
      defaultValue: 'development',
      options: [
        { label: 'Development', value: 'development' },
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
      ],
      required: true,
    },
  ],
}
