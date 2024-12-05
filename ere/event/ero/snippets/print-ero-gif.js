const era = require('#/era-electron');

/**
 * @param {string} name
 * @param {boolean|undefined} shown
 */
function print_ero_gif(name, shown) {
  shown !== false &&
    era.printWholeImage(name, {
      width: 8,
    });
}

module.exports = print_ero_gif;
