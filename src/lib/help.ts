export default Object.entries(import.meta.globEager('/src/routes/help/*.md')).map(([ filename, data ]) => {
  let anchor = filename.replace(/^.+\/(\d+-)?/,'').replace(/\..+?$/,'')
  return {
    filename,
    anchor,
    title: data?.data?.title || anchor.charAt(0).toUpperCase() + anchor.slice(1),
    html: data?.html || '',
  }
})
