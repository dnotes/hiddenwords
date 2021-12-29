const allContent = Object.fromEntries(Object.entries(import.meta.glob('/*.md')).map(([k,item]) => [ k.toLowerCase(), item ]))

import mdPlugin from 'markdown-it'
import attrs from 'markdown-it-attrs'

const md = mdPlugin('commonmark', { typographer:true })
md.use(attrs)

export async function get({ params }) {
  const slug = params?.slug ? params.slug.toLowerCase() : 'readme'
  const item = await allContent[`/${slug}.md`]()
  if (!item) return { status:404 }
  return {
    body: {
      ...item,
      html: md.render(item?.content)
    }
  }
}
