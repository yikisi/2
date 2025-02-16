const slavery_enum = {
  milk: 0,
  pregnant: 0,
  worker: 0,
  inherit: 0,
  furniture: 0,
  assistant: 0,
};
Object.keys(slavery_enum).forEach((e, i) => (slavery_enum[e] = i + 1));

const slavery_titles = {};
slavery_titles[0] = '泄欲用母马';
slavery_titles[slavery_enum.milk] = '榨乳用母马';
slavery_titles[slavery_enum.pregnant] = '繁殖用母马';
slavery_titles[slavery_enum.worker] = '献金用母马';
slavery_titles[slavery_enum.inherit] = '继承用母马';
slavery_titles[slavery_enum.furniture] = '抱枕用母马';
slavery_titles[slavery_enum.assistant] = '陪床用母马';

const mark_enum = { pleasure: 0, ero: 1, meek: 2, pain: 3, shame: 4, hate: 5 };

module.exports = { slavery_enum, slavery_titles, mark_enum };
