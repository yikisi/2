const slavery_enum = {
  milk: 0,
  pregnant: 0,
  worker: 0,
  inherit: 0,
  furniture: 0,
  assistant: 0,
};
Object.keys(slavery_enum).forEach((e, i) => (slavery_enum[e] = i + 1));

const mark_enum = { pleasure: 0, ero: 1, meek: 2, pain: 3, shame: 4, hate: 5 };

const mark_colors = {
  [mark_enum.pleasure]: '#ee82ee',
  [mark_enum.ero]: '#ff69b4',
  [mark_enum.meek]: '#f9a048',
  [mark_enum.pain]: '#ff7373',
  [mark_enum.shame]: '#ce7cff',
  [mark_enum.hate]: '#34a5ff',
  iron: '#98ccfa',
};

module.exports = {
  inmon_limit: [0, 6, 16, 36],
  mark_enum,
  mark_colors,
  slavery_enum,
};
