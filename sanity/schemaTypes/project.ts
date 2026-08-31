import { defineType, defineField } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Judul', type: 'string',
      validation: (r) => r.required() }),
    defineField({ name: 'featured', title: 'Featured?', type: 'boolean',
      initialValue: false }),
    defineField({ name: 'order', title: 'Urutan', type: 'number' }),
    defineField({ name: 'description', title: 'Deskripsi', type: 'text', rows: 4 }),
    defineField({ name: 'usage', title: 'Baris pemakaian', type: 'string',
      description: 'contoh: In daily use · 80 households' }),
    defineField({ name: 'role', title: 'Peran saya', type: 'string' }),
    defineField({ name: 'tech', title: 'Tag teknologi', type: 'array',
      of: [{ type: 'string' }], }),
    defineField({ name: 'liveUrl', title: 'Link demo live', type: 'url' }),
    defineField({ name: 'githubUrl', title: 'Link GitHub', type: 'url' }),
    defineField({ name: 'isPrivate', title: 'Privat (tanpa demo live)?',
      type: 'boolean', initialValue: false }),
    defineField({ name: 'video', title: 'Video demo', type: 'file',
      options: { accept: 'video/*' },
      description: 'Boleh dikosongkan dulu — video menyusul' }),
  ],
  preview: { select: { title: 'title', subtitle: 'usage' } },
})