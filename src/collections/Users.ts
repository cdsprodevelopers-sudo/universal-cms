
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',

  admin: {
    useAsTitle: 'email',
  },

  auth: true,

  fields: [
    {
      name: 'platformRole',
      type: 'select',
      label: 'Platform Role',
      defaultValue: 'user',
      required: true,
      options: [
        {
          label: 'Super Admin',
          value: 'super-admin',
        },
        {
          label: 'Platform User',
          value: 'user',
        },
      ],
    },
  ],
}
