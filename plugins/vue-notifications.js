import Vue from 'vue'
import VueNotifications from 'vue-notifications'
import miniTostr from 'mini-toastr'

const toastTypes = {
  success: 'success',
  error: 'error',
  info: 'info',
  warn: 'warn'
}

miniTostr.init({ types: toastTypes })

function toast ({ title, message, type, timeout, cb }) {
  return miniTostr[type](message, title, timeout, cb)
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

Vue.use(VueNotifications, options)
