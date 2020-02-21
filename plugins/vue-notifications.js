import VueNotifications from 'vue-notifications'
import miniToaster from 'mini-toastr'

const toastTypes = {
  success: 'success',
  error: 'error',
  info: 'info',
  warn: 'warn'
}

miniToster.init({ types: toastTypes })

function toast ({ title, message, type, timeout, cb }) {
  return miniToaster[type](message, title, timeout, cb)
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

Vue.use(VueNotifications, options)
