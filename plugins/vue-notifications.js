<<<<<<< HEAD
import VueNotifications from 'vue-notifications'
import miniToaster from 'mini-toastr'
=======
import Vue from 'vue'
import VueNotifications from 'vue-notifications'
import miniTostr from 'mini-toastr'
>>>>>>> a1a74c62443c832db17af974b014ad568f7e6f82

const toastTypes = {
  success: 'success',
  error: 'error',
  info: 'info',
  warn: 'warn'
}

<<<<<<< HEAD
miniToster.init({ types: toastTypes })

function toast ({ title, message, type, timeout, cb }) {
  return miniToaster[type](message, title, timeout, cb)
=======
miniTostr.init({ types: toastTypes })

function toast ({ title, message, type, timeout, cb }) {
  return miniTostr[type](message, title, timeout, cb)
>>>>>>> a1a74c62443c832db17af974b014ad568f7e6f82
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

Vue.use(VueNotifications, options)
