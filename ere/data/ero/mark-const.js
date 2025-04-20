const slavery_enum = {
  milk: 0,
  pregnant: 0,
  worker: 0,
  inherit: 0,
  furniture: 0,
  assistant: 0,
};
Object.keys(slavery_enum).forEach((e, i) => (slavery_enum[e] = i + 1));

const slavery_titles = [];
slavery_titles[0] = '泄欲用母马';
slavery_titles[slavery_enum.milk] = '榨乳用母马';
slavery_titles[slavery_enum.pregnant] = '繁殖用母马';
slavery_titles[slavery_enum.worker] = '献金用母马';
slavery_titles[slavery_enum.inherit] = '继承用母马';
slavery_titles[slavery_enum.furniture] = '抱枕用母马';
slavery_titles[slavery_enum.assistant] = '陪床用母马';

const slavery_options = [];
slavery_options[0] = '无';
slavery_options[slavery_enum.milk] = '乳奴';
slavery_options[slavery_enum.pregnant] = '孕奴';
slavery_options[slavery_enum.worker] = '金奴';
slavery_options[slavery_enum.inherit] = '珠奴';
slavery_options[slavery_enum.furniture] = '枕奴';
slavery_options[slavery_enum.assistant] = '助奴';

const slavery_descriptions = [];
slavery_descriptions[0] = '-';
slavery_descriptions[slavery_enum.milk] = '每周提供一杯乳汁';
slavery_descriptions[slavery_enum.pregnant] =
  '怀孕率+100%，怀孕速度+100%，不会有月经';
slavery_descriptions[slavery_enum.worker] = '每周提供一定马币';
slavery_descriptions[slavery_enum.inherit] = '每周提供一定继承因子';
slavery_descriptions[slavery_enum.furniture] =
  '默认床伴，提高休息的体力精力回复效果';
slavery_descriptions[slavery_enum.assistant] = '调教其他角色时的默认助手';

const mark_enum = { pleasure: 0, ero: 1, meek: 2, pain: 3, shame: 4, hate: 5 };

module.exports = {
  inmon_limit: [0, 6, 16, 36],
  mark_enum,
  slavery_enum,
  slavery_titles,
  slavery_options,
  slavery_descriptions,
};
