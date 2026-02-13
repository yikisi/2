/**
 * @param {string} _start #aabbcc
 * @param {string} _end #aabbcc
 * @param {number} ratio 0-1
 * @returns {string}
 */
function get_gradient_color(_start, _end, ratio) {
  const start = _start || '#ffffff';
  const end = _end || '#ffffff';
  if (ratio <= 0) {
    return start;
  }
  if (ratio >= 1) {
    return end;
  }
  const start_arr = [
    start.substring(1, 3),
    start.substring(3, 5),
    start.substring(5, 7),
  ].map((v) => Number(`0x${v}`));
  const end_arr = [
    end.substring(1, 3),
    end.substring(3, 5),
    end.substring(5, 7),
  ].map((v) => Number(`0x${v}`));
  return `rgb(${start_arr
    .map((v, i) => v + Math.floor((end_arr[i] - v) * ratio))
    .join(',')})`;
}

module.exports = get_gradient_color;
