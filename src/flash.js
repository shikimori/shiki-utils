import Toastify from 'toastify-js';

const defaults = {
  duration: 3000,
  newWindow: true,
  close: true,
  gravity: 'top',
  position: 'right',
  stopOnFocus: true
};

function error(text, options = {}) {
  if (text) {
    Toastify({
      ...defaults,
      ...options,
      className: 'error',
      text
    }).showToast();
  }
}

function info(text, options = {}) {
  if (text) {
    Toastify({
      ...defaults,
      ...options,
      className: 'info',
      text
    }).showToast();
  }
}

function notice(text, options = {}) {
  if (text) {
    Toastify({
      ...defaults,
      ...options,
      className: 'notice',
      text
    }).showToast();
  }
}

export default {
  flash(options) {
    if ('alert' in options || 'error' in options) {
      error(options.alert || options.error);
    } else if ('info' in options) {
      info(options.info);
    } else {
      notice(options.notice);
    }
  },
  notice,
  info,
  error
};
