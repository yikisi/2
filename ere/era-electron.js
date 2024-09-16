const era = {
  /**
   * DANGER add a variable by name
   * @param {string} varName REQUIRED the name of variable, String, like 'callname:1:2'
   * @param {any} val REQUIRED the value to be added
   * @returns {any|undefined} the new value of the variable, or undefined if failed
   */
  // eslint-disable-next-line no-unused-vars
  add(varName, val) {},
  /**
   * add some characters
   * @param {number | number[]} charaId REQUIRED id of the character defined in chara*.csv
   *     <br>if it is an array, is means add the character charaId[0] with the data of the character charaId[1]
   * @returns {boolean | boolean[]}
   */
  // eslint-disable-next-line no-unused-vars
  addCharacter(...charaId) {},
  /**
   * initialize data of some characters for training
   * @param {...number} charaId REQUIRED ids of the characters defined in chara*.csv
   * @returns {void} */
  // eslint-disable-next-line no-unused-vars
  addCharacterForTrain(...charaId) {},
  /**
   * initialize training and character data
   * @param {...number} charaId REQUIRED ids of the characters defined in chara*.csv
   */
  // eslint-disable-next-line no-unused-vars
  beginTrain(...charaId) {},
  /**
   * check if a or some images are loaded
   * @param name the name of the image
   * @returns {boolean|boolean[]}
   */
  // eslint-disable-next-line no-unused-vars
  checkImage(...name) {},
  /**
   * clear printed lines
   * @param {number} [lineCount] how many lines to be cleared, leave undefined to clear all
   * @returns {Promise<number>} new line count
   */
  // eslint-disable-next-line no-unused-vars
  async clear(lineCount) {},
  /**
   * make the current function to wait for some time
   * @param delay time to delay, ms
   * @return {Promise<unknown>}
   */
  async delay(delay) {
    return new Promise((resolve) => setTimeout(() => resolve(), delay));
  },
  /**
   * draw a divider to separate lines. the divider is also a line
   * @param {{[content]: string, [position]: 'left'|'center'|'right', [isSolid]: boolean, [width]: number}} [config] config of the line
   * @returns {number} line number of the printed
   */
  // eslint-disable-next-line no-unused-vars
  drawLine(config) {},
  /**
   * end training and destroy temporary data
   */
  endTrain() {},
  /**
   * get a variable by name
   * @param {string} varName REQUIRED the name of variable, String, like 'callname:1:2'
   * @returns {any|undefined} the variable, or undefined if failed
   */
  // eslint-disable-next-line no-unused-vars
  get(varName) {},
  /**
   * get all added characters
   * @returns {array<number>} the list of added characters' ids
   */
  getAddedCharacters() {},
  /**
   * get all characters
   * @returns {array<number>} the list of all characters' ids
   */
  getAllCharacters() {},
  /**
   * get characters added in train
   * @returns {number[]} ids of characters in train
   */
  getCharactersInTrain() {},
  /**
   * get the number of current lines
   * @returns {number} the number of current lines
   */
  getLineCount() {},
  /**
   * wait for use's input, the engine will try to return number
   * @param {{[disableBefore]:boolean,[rule]:string,[useRule]:boolean,[hideInput]:boolean}} [config] config of input, like rule
   * @returns {Promise<any>} a promise of the user input, please use await
   */
  // eslint-disable-next-line no-unused-vars
  async input(config) {},
  /**
   * check if is debug mode
   * @returns {boolean} if is in debug mode
   */
  isDebug() {},
  isEra: true,
  /**
   * load a save file
   * @param {number} savIndex REQUIRED the index of the save file
   * @returns {Promise<boolean>} if the loading succeeds
   */
  // eslint-disable-next-line no-unused-vars
  async loadData(savIndex) {},
  /**
   * load global variables from save file
   * @returns {boolean} if the loading succeeds
   */
  loadGlobal() {},
  /**
   * to log something into program logs
   * @param {any} msg
   */
  // eslint-disable-next-line no-unused-vars
  log(msg) {},
  /**
   * to log save data and global data into program logs
   */
  logData() {},
  /**
   * to log static data and field name data (from .csv) into program logs
   */
  logStatic() {},
  logger: {
    /**
     * to log something into program logs as debug level
     * @param {any} msg
     */
    debug(msg) {
      return era.logger.debug(msg);
    },
    /**
     * to log something into program logs as error level
     * @param {any} msg
     * @param {any} [stack]
     */
    error(msg, stack) {
      return era.logger.error(msg, stack);
    },
    /**
     * to log something into program logs
     * @param {any} msg
     */
    info(msg) {
      return era.logger.info(msg);
    },
  },
  /**
   * print some text
   * @param {string|({[color]:string,content:string,[fontSize]:string,[fontStyle]:string,[fontWeight]:string,[url]:string}|{isBlank:boolean}|{isBr:boolean}|{isDivider:boolean}|string)[]} content REQUIRED the text to be printed
   * @param {{[align]:'left'|'center'|'right',[color]:string,[fontSize]:string,[isList]:boolean,[isParagraph]:boolean,[offset]:number,[width]:number}} [config] config of the printed line
   * @returns {number} line number of the printed
   */
  // eslint-disable-next-line no-unused-vars
  print(content, config) {},
  /**
   * print some text and wait any key from user
   * @param {string|({[color]:string,content:string,[fontSize]:string,[fontStyle]:string,[fontWeight]:string,[url]:string}|{isBlank:boolean}|{isBr:boolean}|{isDivider:boolean}|string)[]} content REQUIRED the text to be printed
   * @param {{[align]:'left'|'center'|'right',[color]:string,[fontSize]:string,[isList]:boolean,[isParagraph]:boolean,[offset]:number,[width]:number}} [config] config of the printed line   * @returns {Promise<number>} line number of the printed
   */
  // eslint-disable-next-line no-unused-vars
  async printAndWait(content, config) {},
  /**
   * print a button
   * @param {string} content REQUIRED the text of the button
   * @param {number} accelerator REQUIRED the accelerator key of the button used in the input
   * @param {{[align]:'left'|'center'|'right',[badge]:'dot'|string,[buttonType]:'primary'|'success'|'warning'|'danger'|'info'|'',[disabled]:boolean,[disableWarning]:boolean,[inTextAlign]:'left'|'center'|'right',[isButton]:boolean,[offset]:number,[showAcc]:boolean,[width]:number}} [config] config of the printed button
   * @returns {number} line number of the printed
   */
  // eslint-disable-next-line no-unused-vars
  printButton(content, accelerator, config) {},
  /**
   *
   * @param content
   * @param [config]
   * @param [style]
   * @returns {number} line number of the printed
   */
  // eslint-disable-next-line no-unused-vars
  printDynamicText(content, config, style) {},
  /**
   * print images that must be declared in csv files in #/resources
   * @param {string} names REQUIRED image names
   * @returns {number} line number of the printed
   */
  // eslint-disable-next-line no-unused-vars
  printImage(...names) {},
  /**
   *
   * @param {...{columns: [{type: 'button'|'divider'|'image'|'image.whole'|'progress'|'text', [config]: {}}], [config]: {}}|[{type: 'button'|'divider'|'image'|'image.whole'|'progress'|'text', [config]: {}}]} columnObjects
   * @returns {number} line number of the printed
   */
  // eslint-disable-next-line no-unused-vars
  printInColRows(...columnObjects) {},
  /**
   * print a line chart by chart.js
   * <br/> see: chart.js, chartjs-plugin-annotation, vue-chartjs
   * <br/> note: options.scales.x.ticks.callback and options.scales.y.ticks.callback cannot be serialized, uses options.scales.x.ticks.step and options.scales.y.ticks.step to replace them
   * @param {*} config
   */
  // eslint-disable-next-line no-unused-vars
  printLineChart(config) {},
  /**
   * print multiple columns into a row, excluding inputs
   * @param {{type:'button'|'divider'|'image'|'image.whole'|'progress'|'text',[config]:{}}[]} columnObjects the array of settings of columns, like print, printButton, printImage and printProgress
   * @param {{[gutter]:number,[horizontalAlign]:'start'|'center'|'end'|'space-between'|'space-around'|'space-evenly',[offset]:number,[verticalAlign]:'top'|'middle'|'bottom',[width]:number}} [config] config of the row
   * @returns {number} line number of the printed
   * @see print
   * @see printButton
   * @see printImage
   * @see printProgress
   */
  // eslint-disable-next-line no-unused-vars
  printMultiColumns(columnObjects, config) {},
  /**
   * print a progress bar
   * @param {number} percentage REQUIRED the percentage of the progress bar, float, 0-100
   * @param {string} inContent REQUIRED the text shown in the progress bar
   * @param {string} outContent REQUIRED the text shown next to the progress bar
   * @param {{[align]: 'left'|'center'|'right', [barWidth]: number, [color]: string, [fontColor]: string, [height]: number, [offset]: number, [width]: number}} [config] config of the printed progress
   * @returns {number} line number of the printed
   */
  // eslint-disable-next-line no-unused-vars
  printProgress(percentage, inContent, outContent, config) {},
  /**
   * print the whole image
   * @param {string} name REQUIRED
   * @param {{[fit]: 'fill'|'contain'|'cover'|'none'|'scale-down'|'unset', [offset]: number, [textAlign]: 'left'|'center'|'right', [width]: number}} [config]
   * @returns {number} line number of the printed
   */
  // eslint-disable-next-line no-unused-vars
  printWholeImage(name, config) {},
  /**
   * print a line break, if just used to print enter at the end of a line, please use print('***\n') to replace
   * @returns {number} line number of the printed
   */
  println() {},
  /** DANGER exit the application and close the window */
  quit() {},
  /**
   * DANGER replace the line just printed with a new in-col-row line
   * @param {...{columns: [{type: 'button'|'divider'|'image'|'image.whole'|'progress'|'text', [config]: {}}], [config]: {}}|[{type: 'button'|'divider'|'image'|'image.whole'|'progress'|'text', [config]: {}}]} columnObjects
   * @returns {number} line number of the printed
   */
  // eslint-disable-next-line no-unused-vars
  replaceInColRows(...columnObjects) {},
  /**
   * DANGER replace the line just printed with a new text line
   * @param {string|({[color]:string,content:string,[fontSize]:string,[fontStyle]:string,[fontWeight]:string,[url]:string}|{isBr:boolean}|{isDivider:boolean}|string)[]} content REQUIRED the text to be printed
   * @param {{[align]:'left'|'center'|'right',[color]:string,[fontSize]:string,[isList]:boolean,[isParagraph]:boolean,[offset]:number,[width]:number}} [config] config of the printed line
   * @returns {number} line number of the printed
   */
  // eslint-disable-next-line no-unused-vars
  replaceText(content, config) {},
  /**
   * reset all variables except global variables
   * @returns {boolean}
   */
  resetAllExceptGlobal() {},
  /**
   * reset the data of a character
   * @param {number | number[]} charaId REQUIRED id of the character defined in chara*.csv
   *     <br>if it is an array, is means reset the character charaId[0] with the data of the character charaId[1]
   * @returns {void}
   */
  // eslint-disable-next-line no-unused-vars
  resetCharacter(...charaId) {},
  /**
   * reset all data of the save
   * @returns {void}
   */
  resetData() {},
  /**
   * reset global variables
   * @returns {void}
   */
  resetGlobal() {},
  /**
   * remove a data file
   * @param {number} savIndex REQUIRED the index of the save file
   * @returns {boolean} if the removing succeeds
   */
  // eslint-disable-next-line no-unused-vars
  rmData(savIndex) {},
  /**
   * save data into a save file
   * @param {number} savIndex REQUIRED the index of the save file
   * @param {string} [comment] the comment of the save
   * @returns {Promise<boolean>} if the saving succeeds
   */
  // eslint-disable-next-line no-unused-vars
  async saveData(savIndex, comment) {},
  /**
   * save global variables into save file
   * @returns {boolean} if the saving succeeds
   */
  saveGlobal() {},
  /**
   * set a variable by name
   * @param {string} varName REQUIRED the name of variable, String, like 'callname:1:2'
   * @param {any} val REQUIRED the new value of the variable
   * @returns {any|undefined} the new value of the variable, or undefined if failed
   */
  // eslint-disable-next-line no-unused-vars
  set(varName, val) {},
  /**
   * set default text-align
   * @param {string} textAlign REQUIRED the text-align, center, left or right used in usual
   * @returns {void}
   */
  // eslint-disable-next-line no-unused-vars
  setAlign(textAlign) {},
  /**
   * set style of dynamic text
   * @param lineNumber
   * @param style
   * @returns {void}
   */
  // eslint-disable-next-line no-unused-vars
  setDynamicStyle(lineNumber, style) {},
  /**
   * set default horizontal align of inColRows
   * @param {string} align REQUIRED the vertical align, start, end, center, space-around, space-between or space-evenly
   * @returns {void}
   */
  // eslint-disable-next-line no-unused-vars
  setHorizontalAlign(align) {},
  /**
   * set default offset
   * @param {number} offset REQUIRED an integer between 0 and 23
   * @returns {void}
   */
  // eslint-disable-next-line no-unused-vars
  setOffset(offset) {},
  /**
   * set the title of the window
   * @param {string} title REQUIRED
   * @returns {void}
   */
  // eslint-disable-next-line no-unused-vars
  setTitle(title) {},
  /** print an empty block and make the following lines shown in the bottom */
  setToBottom() {},
  /**
   * set default vertical align of inColRows
   * @param {string} align REQUIRED the vertical align, top, middle or bottom used in usual
   * @returns {void}
   */
  // eslint-disable-next-line no-unused-vars
  setVerticalAlign(align) {},
  /**
   * set default width
   * @param {number} width REQUIRED an integer between 1 and 24
   * @returns {void}
   */
  // eslint-disable-next-line no-unused-vars
  setWidth(width) {},
  /**
   * toggle debug status
   * @returns {boolean} if debug
   */
  toggleDebug() {},
  version: { sdk: '2.0.0', engine: undefined },
  /**
   * wait any key from user
   * @returns {Promise<void>} a promise of nothing, please use await
   */
  async waitAnyKey() {},
};

Object.keys(era).forEach((key) => {
  if (era[key] instanceof Function && key !== 'delay') {
    era[key] = (...args) => {
      if (!era[key]._s) {
        era.logger.error(
          `unsupported api! please check the version of the engine! current version: sdk=${
            era.version.sdk
          }, engine=${era.version.engine}`,
        );
      }
      return era[key](...args);
    };
  }
});

module.exports = era;
