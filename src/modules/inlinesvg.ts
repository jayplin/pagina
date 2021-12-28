import InlineSvg from 'vue-inline-svg'
import VueSimpleSVG from 'vue-simple-svg'

import type { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.component('InlineSvg', InlineSvg)
  app.use(VueSimpleSVG)
}
