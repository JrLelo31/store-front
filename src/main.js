import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import jQuery from 'jquery';

import 'popper.js';
import 'bootstrap';
import './assets/app.scss';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCartPlus, faHome, faRectangleList, faTruckField } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faHome)
library.add(faUser)
library.add(faCartPlus)
library.add(faRectangleList)
library.add(faTruckField)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

window.$ = window.jQuery = jQuery;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');