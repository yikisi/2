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

const stain_names = [];
stain_names[stain_enum.dirt] = '污垢';
stain_names[stain_enum.saliva] = '唾液';
stain_names[stain_enum.wound] = '撕裂血';
stain_names[stain_enum.virgin] = '处女血';
stain_names[stain_enum.secretion] = '爱液';
stain_names[stain_enum.anal] = '肠液';
stain_names[stain_enum.semen] = '精液';
stain_names[stain_enum.milk] = '母乳';
stain_names[stain_enum.lubricant] = '润滑液';
stain_names[stain_enum.chocolate] = '巧克力';

module.exports = { stain_enum, stain_names };
