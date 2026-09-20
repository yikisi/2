const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/105600-Matikanefukukitaru/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/105600-Matikanefukukitaru/rec-56.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/105600-Matikanefukukitaru/daily-56.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/105600-Matikanefukukitaru/edu-56.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/105600-Matikanefukukitaru/love-56.js'),
  );
  ero = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/105600-Matikanefukukitaru/ero-56.js'),
  );

  dependency = '運勢依存';
  dependency_desc = '今日の運勢は、なんだろう？';

  daikichi = '大吉';
  daikichi_desc =
    '霊力が満ちている！トレーニング成功率+10%、全トレーニング効果+5%、好感取得+10%、出走時の能力+5%';

  chuukichi = '中吉';
  chuukichi_desc =
    'いい運勢だ！トレーニング成功率+5%、全トレーニング効果+5%、出走時の能力+3%';

  shoukichi = '小吉';
  shoukichi_desc = '悪くはない！トレーニング成功率+5%、出走時の能力+1%';

  kyou = '凶';
  kyou_desc =
    'こんなときは、フクキタルを慰めてあげたら？トレーニング成功率-10%、全トレーニング効果-10%、出走時の能力-10%、好感取得+20%';

  ptsd = 'PTSD';
  ptsd_desc =
    '向き合わざるを得ない影。トレーニング成功率-10%、全トレーニング効果-10%、出走時の能力-10%、やる気上限-3';

  antei = '安定';
  antei_desc =
    'トレーナーがそばにいれば、間違いなく大吉！トレーニング成功率+10%、全トレーニング効果+5%、好感取得+10%、出走時の能力+5%';

  achieve_track_aim_template = '絶好調で出走した G2以上のレース数：%COUNT%';
};
