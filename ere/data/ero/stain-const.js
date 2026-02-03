const stain_enum = {
  // 唾液
  saliva: 0,
  // 巧克力
  chocolate: 0,
  // 母乳
  milk: 0,
  // 润滑液
  lubricant: 0,
  // 精液
  semen: 0,
  // 破瓜血
  virgin: 0,
  // 撕裂伤
  wound: 0,
  // 爱液
  secretion: 0,
  // 肠液
  anal: 0,
  // 污垢
  dirt: 0,
};
Object.keys(stain_enum).forEach((k, i) => (stain_enum[k] = i));

module.exports = { stain_enum, stain_count: Object.keys(stain_enum).length };
