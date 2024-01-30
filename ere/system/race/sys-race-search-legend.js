/**
 * @param {Number} index
 * @param {Object[]} legends_data
 */
module.exports = (index, legends_data) => {
  let result = {
    id: -1,
  };
  for (item of legends_data) {
    if (item.id == index) {
      result = item;
      break;
    }
  }
  return result;
};
