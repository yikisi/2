const era = require('#/era-electron');

/**
 * @param {string} name
 * @param {boolean} [shown=true]
 */
function print_ero_gif(name, shown = true) {
  if (shown) {
    era.printWholeImage(name, {
      width: 8,
    });
  }
}

module.exports = print_ero_gif;
