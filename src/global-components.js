import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMoon)

Vue.component('font-awesome-icon', FontAwesomeIcon)