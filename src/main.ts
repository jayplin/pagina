import { createWebHistory } from 'vue-router'
// register vue composition api globally
import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// your custom styles here
import './styles/main.css'
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        setTimeout(() => {
          const element = document.getElementById(to.hash.replace(/#/, ''))
          if (element && element.scrollIntoView)
            element.scrollIntoView({ block: 'start', behavior: 'smooth' })
        }, 500)

        // NOTE: This doesn't work for Vue 3
        // return {selector: to.hash}

        // This does
        return { el: to.hash }
      }
      else if (savedPosition) {
        return savedPosition
      }
      return { top: 0 }
    },
  },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
  },
)
