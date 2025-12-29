const { existsSync, readFileSync, writeFileSync } = require('fs');

/**
 * @param {string} content
 * @param {string} comment_start
 * @param {string} entry
 * @returns {string}
 */
function generate_content(content, comment_start, ...entry) {
  const arr = content.split('\n').map((e) => e.replace(/\s+$/, ''));
  const start = arr.findIndex((s) =>
    s.replace(/^\s+/, '').startsWith(comment_start + ' GENERATED START'),
  );
  const end = arr.findIndex((s) =>
    s.replace(/^\s+/, '').startsWith(comment_start + ' GENERATED END'),
  );
  if (start !== -1 && end !== -1) {
    arr.splice(start + 1, end - start - 1, ...entry);
  } else {
    return `${comment_start} GENERATED START\n${entry.join('\n')}\n${comment_start} GENERATED END`;
  }
  return arr.join('\n');
}

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
  generate_content,
  /**
   * @param {string} path
   * @param {string} comment_start
   * @param {string} entry
   */
  read_and_write_generated(path, comment_start, ...entry) {
    writeFileSync(
      path,
      generate_content(
        existsSync(path) ? readFileSync(path, 'utf-8') : '',
        comment_start,
        ...entry,
      ),
    );
  },
  stringify(str) {
    if (str === undefined) {
      return 'undefined';
    }
    if (typeof str === 'string') {
      if (str.indexOf("'") !== -1) {
        return `"${str}"`;
      } else {
        return `'${str}'`;
      }
    } else {
      return JSON.stringify(str);
    }
  },
};
