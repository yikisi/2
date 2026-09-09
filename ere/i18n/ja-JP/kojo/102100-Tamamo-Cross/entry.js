module.exports = class extends (
  require('#/i18n/zh-CN/kojo/102100-Tamamo-Cross/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/102100-Tamamo-Cross/rec-21.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/102100-Tamamo-Cross/daily-21.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ja-JP/kojo/102100-Tamamo-Cross/edu-21.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/102100-Tamamo-Cross/love-21.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/ja-JP/kojo/102100-Tamamo-Cross/ero-21.kojo');

  aim_desc_1 = 'クラシック級 3月まで OP以上のレース 1着';
  aim_desc_2 = 'シニア級まで G3以上のレース 1着';

  flash = '閃光';
  flash_desc = '白い稲妻。すべてのレースに出走できる';

  lightning = '雷撃';
  lightning_desc =
    '電流が衰える。トレーニング効果-20%、体力・気力上限-200、消費+10%、ストレス取得+10%';

  thundercloud = '雷雲';
  thundercloud_desc = '山雨来たらんとす。いまはOP級のレースにしか出走できない';

  pilot = '先導';
  pilot_desc = '雷光、成り始め。いまはOP〜G3級のレースにしか出走できない';

  spartan = 'スパルタ';
  spartan_desc = 'トレーニング効果+20%、体力・気力消費+5%';

  uma_first = 'ウマ娘優先';
  uma_first_desc = '毎ターン自動でやる気が上がる。体力・気力消費-10%';

  report_tenn_spr = (tama) => [
    {
      color: tama.color,
      content: 'まさに白い稲妻が、場を照らした！誰がまだ、私を見くびれる！',
    },
    tama,
    {
      color: tama.color,
      content: '！',
    },
  ];
};
