// Stateful in-memory stand-in for the engine SDK (`#/era-electron`).
//
// `ere/**` talks to the engine through `era.get/set/add`, where a variable name
// looks like `namespace:id:field` (e.g. `base:1:5`, `cflag:2:干劲`, `flag:0`).
// This mock keeps them in a Map so tests can seed a save state and assert on the
// resulting mutations. Unset variables read as 0, matching the engine.
//
// Tests import this file directly (same resolved path as the redirected
// `#/era-electron`), so `era.seed(...)` / `era.reset()` affect the modules under
// test.
const store = new Map();

const noop = () => {};
const async_noop = async () => {};

const era = {
  store,
  version: { sdk: 'test-sdk', engine: 'test-engine' },
  isEra: true,

  // --- stateful variable access ---
  get(name) {
    return store.has(name) ? store.get(name) : 0;
  },
  set(name, val) {
    store.set(name, val);
    return val;
  },
  add(name, val) {
    const next = (store.get(name) || 0) + val;
    store.set(name, next);
    return next;
  },
  getAddedCharacters() {
    return store.get('__added') ?? [];
  },
  getCharactersInTrain() {
    return store.get('__members') ?? [];
  },

  // --- engine / UI surface (inert) ---
  addCharacter: noop,
  addCharacterForTrain: noop,
  beginTrain: noop,
  checkImage: (...names) => names.map(() => true),
  clear: async_noop,
  delay: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
  drawLine: noop,
  endTrain: noop,
  getAllCharacters: () => [],
  getLineCount: () => 0,
  input: async_noop,
  isDebug: () => false,
  isLandscape: async () => true,
  loadData: async () => true,
  loadGlobal: async () => true,
  nextTurnInTrain: noop,
  notify: noop,
  playMusic: () => true,
  print: noop,
  printAndWait: async_noop,
  printButton: noop,
  printImage: noop,
  printInColRows: noop,
  printLineChart: noop,
  printMultiColumns: noop,
  printProgress: noop,
  printWholeImage: noop,
  println: noop,
  quit: noop,
  removeCharacter: noop,
  replaceInColRows: noop,
  replaceText: noop,
  resetCharacter: noop,
  resetData: noop,
  resetGlobal: async () => true,
  resumeMusic: noop,
  rmData: async () => true,
  saveData: async () => true,
  saveGlobal: async () => true,
  setAlign: noop,
  setBack: noop,
  setColor: noop,
  setHorizontalAlign: noop,
  setMask: noop,
  setOffset: noop,
  setOverlay: noop,
  setTitle: noop,
  setToBottom: noop,
  setVerticalAlign: noop,
  setWidth: noop,
  stopMusic: noop,
  toggleDebug: () => false,
  waitAnyKey: async_noop,

  logger: {
    assert: noop,
    debug: noop,
    error: noop,
    info: noop,
    warn: noop,
  },

  // --- test helpers ---
  reset() {
    store.clear();
  },
  seed(vars) {
    for (const key of Object.keys(vars)) {
      store.set(key, vars[key]);
    }
  },
};

module.exports = era;
