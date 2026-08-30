import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nama', type: 'string' }),
    defineField({ name: 'title', title: 'Titel / Posisi', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline (hero)', type: 'text', rows: 3 }),
    defineField({ name: 'openToWork', title: 'Open to work?', type: 'boolean',
      initialValue: true }),
    defineField({ name: 'location', title: 'Lokasi', type: 'string' }),
    defineField({ name: 'photo', title: 'Foto', type: 'image',
      options: { hotspot: true } }),
    defineField({ name: 'aboutIntro', title: 'About — paragraf pembuka',
      type: 'text', rows: 4 }),
    defineField({ name: 'aboutPull', title: 'About — kutipan menonjol',
      type: 'text', rows: 2 }),
    defineField({ name: 'aboutOutro', title: 'About — paragraf penutup',
      type: 'text', rows: 4 }),
    defineField({
      name: 'skills', title: 'Skills', type: 'array',
      of: [{
        type: 'object',
        name: 'skillGroup',
        title: 'Skill Group',
        fields: [
          { name: 'heading', title: 'Kelompok', type: 'string' },
          { name: 'items', title: 'Item', type: 'array',
            of: [{ type: 'string' }], options: { layout: 'tags' } },
        ],
        preview: { select: { title: 'heading' } },
      }],
    }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'github', title: 'GitHub URL', type: 'url' }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
  ],
  preview: { select: { title: 'name', subtitle: 'title' } },
})