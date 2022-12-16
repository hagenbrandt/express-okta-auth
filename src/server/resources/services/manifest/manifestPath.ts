import path from 'path'
import fs from 'fs'

const manifest = fs.readFileSync(
  path.join(__dirname, 'static/manifest.json'),
  'utf-8'
)
const assets = JSON.parse(manifest)
const manifestPath = assets['client.js']

export default manifestPath
