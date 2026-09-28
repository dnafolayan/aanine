import { readFile, writeFile } from 'node:fs/promises'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { default as App } from '../.prerender/App.js'

const page = renderToString(createElement(App))
const outputPath = new URL('../dist/index.html', import.meta.url)
const html = await readFile(outputPath, 'utf8')
const root = '<div id="root"></div>'

if (!html.includes(root)) {
  throw new Error('Could not find the empty React root in dist/index.html')
}

await writeFile(outputPath, html.replace(root, `<div id="root">${page}</div>`))
