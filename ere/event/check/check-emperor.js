const CustomizedCheck = require('#/event/check/check-common');

module.exports = class extends CustomizedCheck {
  is_prison() {
    return false;
  }

  is_rape_in_sleeping() {
    return false;
  }

  is_want_make_love() {
    return 0;
  }
};
