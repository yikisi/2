const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/zh-CN/kojo/1000-Player/entry') {
  daily = proxy_kojo_js(require('#/i18n/xx-XX/kojo/1000-Player/daily-0'));
  edu = proxy_kojo_js(require('#/i18n/xx-XX/kojo/1000-Player/edu-0'));
  ero = proxy_kojo_js(require('#/i18n/xx-XX/kojo/1000-Player/ero-0'));

  akuochi = '恶堕';
  akuochi_desc = '只要享受就好了。';

  b_l_time = '昏昏欲睡';
  b_l_time_desc = '精神疲惫，心神涣散，随时可能昏睡过去！';

  b_l_stamina = '疲惫不堪';
  b_l_stamina_desc = '筋疲力尽，难以为继，精力消耗大幅提高！';

  pn_1 = '比赛用母马';
  pn_1_desc =
    '现役马娘，但是只能参加资深年比赛；没有工资，参赛时赏金分成+400%。';
  pn_2_desc =
    '现役性奴，只能参加资深年比赛；没有工资，参赛时赏金分成+400%，性侍奉时获得声望。';
  pn_3_desc =
    '现役孕袋，只能参加资深年比赛；没有工资，参赛时赏金分成+400%，和马娘性爱、生下孩子时获得声望，子代参赛声望奖励+100%。';

  rape = '恶行易施';
  rape_desc = '「Dirty Deeds Done Dirt Cheap……」去强奸吧，去蹂躏吧，去征服吧！';
};
