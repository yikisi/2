const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/zh-CN/kojo/1000-Player/entry') {
  daily = proxy_kojo_js(require('#/i18n/ja-JP/kojo/1000-Player/daily-0'));
  edu = proxy_kojo_js(require('#/i18n/ja-JP/kojo/1000-Player/edu-0'));
  ero = proxy_kojo_js(require('#/i18n/ja-JP/kojo/1000-Player/ero-0'));

  akuochi = '悪堕';
  akuochi_desc = '楽しめばいい。';

  b_l_time = '眠気';
  b_l_time_desc = '頭がぼんやりして、いつ倒れてもおかしくない！';

  b_l_stamina = '疲労困憊';
  b_l_stamina_desc = 'もう動けない。気力消費が大きく上がる！';

  pn_1 = 'レース用の牝馬';
  pn_1_desc =
    '現役ウマ娘だが、シニア級のレースにしか出られない。給与はなく、出走時の賞金配分+400%。';
  pn_2_desc =
    '現役の性奴。シニア級のレースにしか出られない。給与はなく、出走時の賞金配分+400%。性奉仕で名声を得る。';
  pn_3_desc =
    '現役の孕袋。シニア級のレースにしか出られない。給与はなく、出走時の賞金配分+400%。ウマ娘との性交・出産で名声を得て、子の出走名声報酬+100%。';

  rape = '悪行容易';
  rape_desc = '「Dirty Deeds Done Dirt Cheap……」犯せ、蹂躙しろ、征服しろ！';
};
