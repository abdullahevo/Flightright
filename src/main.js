import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/en.json'

///vee-validate
Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule],
        message: messages[rule]
    })
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('required', value => {
    if (value.length > 0) {
        return true
    }
    return '  this  {_field_}  field is required'
})
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')