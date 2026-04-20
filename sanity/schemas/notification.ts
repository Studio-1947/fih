import { defineField, defineType } from 'sanity'

export const notificationType = defineType({
  name: 'notification',
  title: 'Notification',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required().min(3),
    }),
    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortMessage',
      title: 'Short Message',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().max(220),
    }),
  ],
})
