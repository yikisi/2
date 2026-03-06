const { track_enum } = require('#/data/race/model/race-info');

const { __, i18n } = require('#/i18n/selector');

/**
 * @param {number} track
 * @returns {string}
 */
function get_track_name(track) {
  const key = Object.entries(track_enum).find((t) => t[1] === track)[0];
  return __(`race.t_${key}`);
}

module.exports = {
  get_track_full_name(track) {
    if (track >= 0) {
      return i18n().race.track_name_template.replace(
        '%NAME%',
        get_track_name(track),
      );
    }
    return i18n().race.t_playground;
  },
  get_track_name,
};
