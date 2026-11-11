
import type { CollectionConfig } from 'payload'

export const WebsiteMemberships: CollectionConfig = {
  slug: 'website-memberships',

  admin: {
    useAsTitle: 'role',
    defaultColumns: ['user', 'website', 'role', 'status'],
    group: 'Website Management',
  },

  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      label: 'User',
    },
    {
      name: 'website',
      type: 'relationship',
      relationTo: 'websites',
      required: true,
      label: 'Website',
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      label: 'Website Role',
      options: [
        { label: 'Administrator', value: 'administrator' },
        { label: 'Editor', value: 'editor' },
        { label: 'Author', value: 'author' },
        { label: 'Contributor', value: 'contributor' },
        { label: 'Subscriber', value: 'subscriber' },
      ],
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'invited',
      label: 'Membership Status',
      options: [
        { label: 'Invited', value: 'invited' },
        { label: 'Active', value: 'active' },
        { label: 'Suspended', value: 'suspended' },
      ],
    },
  ],
}
