const { __ } = require('#/i18n/selector');

/**
 * @param {string} name
 * @returns {string}
 */
function get_display_name(name) {
  return __(`name.${name}`, name);
}

module.exports = get_display_name;
