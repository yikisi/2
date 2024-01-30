const slavery_enum = {
  milk: 0,
  pregnant: 0,
  worker: 0,
  inherit: 0,
  furniture: 0,
};
Object.keys(slavery_enum).forEach((e, i) => (slavery_enum[e] = i + 1));

const slavery_titles = {};
slavery_titles[slavery_enum.milk] = '榨乳用母马';
slavery_titles[slavery_enum.pregnant] = '繁殖用母马';
slavery_titles[slavery_enum.worker] = '献金用母马';
slavery_titles[slavery_enum.inherit] = '继承用母马';
slavery_titles[slavery_enum.furniture] = '抱枕用母马';

module.exports = { slavery_enum, slavery_titles };
