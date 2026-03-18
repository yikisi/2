const {
  get_expansion,
  get_penis_size,
} = require('#/system/ero/sys-calc-ero-status');
const { add_juel } = require('#/system/ero/sys-calc-juel');

const { base_emotion_juel } = require('#/data/ero/juel-const');
const { part_enum } = require('#/data/ero/part-const');

/**
 * @param {number} penis_owner
 * @param {number} virgin_owner
 */
function handle_lost_virginity(penis_owner, virgin_owner) {
  const expansion = get_expansion(
    get_penis_size(penis_owner),
    virgin_owner,
    part_enum.virgin,
  );
  add_juel(virgin_owner, 11, base_emotion_juel * (0.4 * expansion + 1.6));
}

module.exports = handle_lost_virginity;
