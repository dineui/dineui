import sharp from 'sharp'

export default async function (req, res) {
  const result = await sharp(
    Buffer.from(
      `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="1200" height="630" fill="white"/><text x="464" y="357.8088437242516" width="271.8181818181818" height="154.9090909090909" font-weight="normal" font-style="normal" font-size="128" font-family="serif" fill="black">Dine</text></svg>`,
    ),
  )
    .png()
    .toBuffer()

  res.end(result)
}
