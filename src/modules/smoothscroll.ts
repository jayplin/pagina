import VueSmoothScroll from 'vue3-smooth-scroll'

import type { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.use(VueSmoothScroll)
}
