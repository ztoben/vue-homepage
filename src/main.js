import Vue from 'vue';
import App from './App.vue';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faGithub, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(faGithub, faTwitter, faLinkedin, faEnvelope);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
