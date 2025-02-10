import { defineConfig, ProxyOptions, ViteDevServer } from 'vite'

import react from '@vitejs/plugin-react'
import express, {Request, Response} from 'express'
/* const app = express()

app.get('/api', (req: Request, res: Response) => {
  res.send('Hello world!').end()
})

const proxy: Record<string, string | ProxyOptions> = {
  '/api': {} // proxy our /api route to nowhere
}

function expressPlugin() {
  return {
    name: 'express-plugin',
    config() {
      return {
        server: { proxy },
        preview: { proxy }
      }
    },
    configureServer(server: ViteDevServer) {
      server.middlewares.use(app)
    }
  }
}
 */
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()/* , expressPlugin() */],
})
