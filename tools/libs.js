module.exports = {
  /**
   * @param {string} a
   * @param {string} b
   * @return {number}
   */
  compare_chara_id(a, b) {
    const num_a = Number(a),
      num_b = Number(b),
      nan_a = isNaN(num_a),
      nan_b = isNaN(num_b);
    if (nan_a || nan_b) {
      if (nan_a && nan_b) {
        return a > b ? 1 : -1;
      } else if (nan_a) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return num_a - num_b;
    }
  },
  /**
   * @param {string} content
   * @param {string} entry
   * @returns {string}
   */
  generate_content(content, ...entry) {
    const arr = content.split('\n').map((e) => e.replace(/\s+$/, ''));
    const start = arr.findIndex((s) => s.startsWith('// GENERATED START'));
    const end = arr.findIndex((s) => s.startsWith('// GENERATED END'));
    arr.splice(start + 1, end - start - 1, ...entry);
    return arr.join('\n');
  },
};
