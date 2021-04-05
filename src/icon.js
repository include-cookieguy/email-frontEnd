import Vue from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faEdit, faAdd} from '@fortawesome/free-solid-svg-icons'

library.add(faEdit)

Vue.component('fa-icon', FontAwesomeIcon)