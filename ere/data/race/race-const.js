const { bonus_params, id2bonus } = require('#/data/race/race-attr-bonus');
const { lane_params, slope_params } = require('#/data/race/race-params');
const race_rewards = require('#/data/race/race-rewards');

// GENERATED START
const race_enum = {
  // 出道战
  begin_race: 0,
  // 少年杯
  juni_cup: 1,
  // 京都金杯
  kyot_kim: 2,
  // 中山金杯
  naka_kim: 3,
  // 仙女锦标
  fair_sta: 4,
  // 新山纪念
  shin_kin: 5,
  // 爱知杯
  aich_hai: 6,
  // 蓝鸟杯
  blue_cup: 7,
  // 京成杯
  keis_hai: 8,
  // 日经新春杯
  nikk_hai: 9,
  // 青年骏马锦标
  waka_sta: 10,
  // 丝绸之路锦标
  silk_sta: 11,
  // 根岸锦标
  negi_sta: 12,
  // 东海锦标
  toka_sta: 13,
  // 美国赛马会杯
  amer_cup: 14,
  // 如月赏
  kisa_sho: 15,
  // 川崎纪念赛
  kawa_kin: 16,
  // 东京报杯
  toky_hai: 17,
  // 女王杯
  quee_cup: 18,
  // 共同通信杯
  kyod_hai: 19,
  // 京都纪念
  kyot_kin: 20,
  // 云取赏
  kumo_sho: 21,
  // 风信子锦标
  hyac_sta: 22,
  // 二月锦标
  febr_sta: 23,
  // 京都皇冠锦标
  kyo_sta: 24,
  // 小仓大赏典
  koku_dai: 25,
  // 钻石锦标
  diam_sta: 26,
  // 堇锦标
  viol_sta: 27,
  // 中山纪念
  naka_kin: 28,
  // 阪急杯
  hank_hai: 29,
  // 郁金香赏
  tuli_sho: 30,
  // 弥生赏
  hoch_sho: 31,
  // 海洋锦标
  ocae_sta: 32,
  // 报知杯皇冠赛
  hoch_rev: 33,
  // 金鯱赏
  kink_sho: 34,
  // 中山赛皇冠锦标
  irc_sho: 35,
  // 京浜杯
  keii_hai: 36,
  // 春季锦标
  sprg_sta: 37,
  // 猎鹰锦标
  falc_sta: 38,
  // 百花杯
  flow_cup: 39,
  // 卧龙锦标
  huku_sta: 40,
  // 大尾光纪念赛
  dio_kin: 41,
  // 阪神大赏典
  hans_dai: 42,
  // 东京短途锦标
  toky_spr: 43,
  // 每日杯
  main_hai: 44,
  // 高松宫纪念
  takm_kin: 45,
  // 日经赏
  nikk_sho: 46,
  // 三月锦标
  marc_sta: 47,
  // 大阪杯
  sank_hai: 48,
  // 德比伯爵挑战杯
  lord_tro: 49,
  // 樱花赏
  oka_sho: 50,
  // 新西兰优胜杯
  new_tro: 51,
  // 海洋杯
  mari_cup: 52,
  // 阪神皇冠锦标
  hans_sta: 53,
  // 皋月赏
  sats_sho: 54,
  // 阿灵顿杯
  arli_cup: 55,
  // 天蝎锦标
  anta_sta: 56,
  // 芙罗拉锦标
  flor_sta: 57,
  // 青叶赏
  aoba_sho: 58,
  // 春季天皇赏
  tenn_spr: 59,
  // 英里赛马杯
  mile_cup: 60,
  // 福岛皇冠锦标
  fuku_sta: 61,
  // NHK英里杯
  nhk_cup: 62,
  // 肯塔基德比
  kent_der: 63,
  // 京都新闻杯
  kyot_hai: 64,
  // 柏市纪念赛
  kash_kin: 65,
  // 新潟大賞典
  niig_dai: 66,
  // 羽田杯
  hane_hai: 67,
  // 蓝鹦鹉赏
  prix_prb: 68,
  // 京王杯春季杯
  keio_cup: 69,
  // 日本橡树大赛
  yush_him: 70,
  // 凤雏锦标
  hous_sta: 71,
  // 维多利亚英里赛
  vict_mile: 72,
  // 平安锦标
  heia_sta: 73,
  // 日本德比
  toky_yus: 74,
  // 葵锦标
  aoi_sta: 75,
  // 目黑纪念
  megu_kin: 76,
  // 普瑞克尼斯锦标赛
  prea_sta: 77,
  // 东京德比
  toky_der: 78,
  // 安田纪念
  yasu_kin: 79,
  // 鸣尾纪念
  naru_kin: 80,
  // 函馆短程锦标
  haks_sta: 81,
  // 叶森赏
  epso_cup: 82,
  // 戴安娜锦标
  prix_dia: 83,
  // 独角兽锦标
  unic_sta: 84,
  // 人鱼锦标
  merm_sta: 85,
  // 宝冢纪念
  takz_kin: 86,
  // 帝王赏
  teio_sho: 87,
  // 贝蒙锦标
  belm_sta: 88,
  // 日经广播赏
  radi_shi: 89,
  // CBC赏
  cbc_sho: 90,
  // 日本泥地德比
  japa_dir: 91,
  // 南河三锦标
  proc_sta: 92,
  // 七夕赏
  tana_sho: 93,
  // 函馆少年锦标
  hak2_sta: 94,
  // 函馆纪念
  hako_kin: 95,
  // 朱鹮夏季短跑赛
  ibis_das: 96,
  // 中京纪念
  toyo_kin: 97,
  // 女皇锦标
  quee_sta: 98,
  // 花豹锦标
  leop_sta: 99,
  // 榆树锦标赛
  elm_sta: 100,
  // 关屋纪念
  seki_kin: 101,
  // 北九州纪念
  kita_kin: 102,
  // 小仓纪念
  koku_kin: 103,
  // 新潟少年锦标
  niig_sta: 104,
  // 札幌纪念
  sapp_kin: 105,
  // 基兰杯
  keen_cup: 106,
  // 小仓少年锦标
  koku_sta: 107,
  // 札幌少年锦标
  sapp_sta: 108,
  // 新潟纪念
  niig_kin: 109,
  // 紫苑锦标
  shio_sta: 110,
  // 人马锦标
  cent_sta: 111,
  // 京城杯秋季让磅赛
  keis_han: 112,
  // 玫瑰锦标
  rose_sta: 113,
  // 圣烈特纪念赛
  stli_kin: 114,
  // 神户新闻杯
  kobe_hai: 115,
  // 产经赏开放赛
  all_com: 116,
  // 短途马锦标
  sprt_sta: 117,
  // 凯旋门赏
  prix_lat: 118,
  // 天狼星锦标
  siri_sta: 119,
  // 英里冠军赛南部杯
  mile_nbh: 120,
  // 沙特阿拉伯皇家杯
  saud_cup: 121,
  // 府中皇冠锦标
  fuch_sta: 122,
  // 每日王冠
  main_oka: 123,
  // 京都大赏典
  kyot_dai: 124,
  // 秋华赏
  shuk_sho: 125,
  // 富士锦标
  fuji_sta: 126,
  // 阿尔忒弥斯锦标
  arte_sta: 127,
  // 菊花赏
  kiku_sho: 128,
  // 秋季天皇赏
  tenn_sho: 129,
  // 天鹅锦标
  swan_sta: 130,
  // 京王杯少年锦标
  keio_sta: 131,
  // 幻想锦标
  fant_sta: 132,
  // 日本育马场杯短途赛
  jbc_spr: 133,
  // 日本育马场杯皇冠经典赛
  jbc_lad: 134,
  // 日本育马场经典赛
  jbc_cls: 135,
  // 阿根廷共和国杯
  copa_arg: 136,
  // 京城锦标
  miya_sta: 137,
  // 和谐锦标
  chn_frt: 138,
  // 每日杯少年锦标
  dail_sta: 139,
  // 伊丽莎白二世女皇杯
  eliz_cup: 140,
  // 武藏野锦标
  musa_sta: 141,
  // 福岛纪念
  fuku_kin: 142,
  // 东京体育杯少年锦标
  toky_sta: 143,
  // 英里冠军赛
  mile_cha: 144,
  // 京都少年锦标
  kyot_sta: 145,
  // 日本杯
  japa_cup: 146,
  // 京阪杯
  keih_hai: 147,
  // 冠军杯
  cham_cup: 148,
  // 长途锦标
  stay_sta: 149,
  // 挑战杯
  asah_cup: 150,
  // 全日本少年优骏
  zeni_you: 151,
  // 阪神皇冠大赛
  hans_fil: 152,
  // 香港短途锦标
  hk_spr: 153,
  // 香港英里锦标
  hk_mil: 154,
  // 香港杯
  hk_cup: 155,
  // 香港瓶
  hk_vas: 156,
  // 五车二锦标
  cape_sta: 157,
  // 中日报杯
  chun_hai: 158,
  // 朝日杯未来锦标
  asah_sta: 159,
  // 绿松石锦标
  turq_sta: 160,
  // 希望锦标
  hope_sta: 161,
  // 东京大赏典
  toky_dai: 162,
  // 有马纪念
  arim_kin: 163,
  // 美国橡树大赛
  usa_oks: 164,
  // 阪神杯
  hans_cup: 165,
  // 迪拜世界杯
  duba_cup: 166,
  // 迪拜金莎轩锦标
  duba_sha: 167,
  // 迪拜司马经典赛
  duba_cls: 168,
  // 迪拜草地大赛
  duba_tur: 169,
  // 阿乔斯短途锦标
  alqu_spr: 170,
  // 芙蓉锦标
  fuyo_sta: 171,
  // 育马者杯草地短途赛
  bc_tsp: 172,
  // 育马者杯英里赛
  bc_mil: 173,
  // 育马者杯皇冠草地赛
  bc_fmt: 174,
  // 育马者杯草地赛
  bc_tur: 175,
  // 育马者杯短途赛
  bc_spr: 176,
  // 育马者杯皇冠短途赛
  bc_fms: 177,
  // 育马者杯泥地英里赛
  bc_dml: 178,
  // 育马者杯皇冠泥地赛
  bc_dis: 179,
  // 育马者杯经典赛
  bc_cls: 180,
  // 香豌豆锦标
  swep_sta: 181,
};

const current = new Date().getTime();

/** @type {RaceInfo[]} */
const race_infos = [];
race_infos[race_enum.juni_cup] = require('#/data/race/op/race-juni-cup');
race_infos[race_enum.kyot_kim] = require('#/data/race/g3/race-kyot-kim');
race_infos[race_enum.naka_kim] = require('#/data/race/g3/race-naka-kim');
race_infos[race_enum.fair_sta] = require('#/data/race/g3/race-fair-sta');
race_infos[race_enum.shin_kin] = require('#/data/race/g3/race-shin-kin');
race_infos[race_enum.aich_hai] = require('#/data/race/g3/race-aich-hai');
race_infos[race_enum.blue_cup] = require('#/data/race/g3/race-blue-cup');
race_infos[race_enum.keis_hai] = require('#/data/race/g3/race-keis-hai');
race_infos[race_enum.nikk_hai] = require('#/data/race/g2/race-nikk-hai');
race_infos[race_enum.waka_sta] = require('#/data/race/op/race-waka-sta');
race_infos[race_enum.silk_sta] = require('#/data/race/g2/race-silk-sta');
race_infos[race_enum.negi_sta] = require('#/data/race/g2/race-negi-sta');
race_infos[race_enum.toka_sta] = require('#/data/race/g2/race-toka-sta');
race_infos[race_enum.amer_cup] = require('#/data/race/g2/race-amer-cup');
race_infos[race_enum.kisa_sho] = require('#/data/race/g3/race-kisa-sho');
race_infos[race_enum.kawa_kin] = require('#/data/race/g1/race-kawa-kin');
race_infos[race_enum.toky_hai] = require('#/data/race/g3/race-toky-hai');
race_infos[race_enum.quee_cup] = require('#/data/race/g3/race-quee-cup');
race_infos[race_enum.kyod_hai] = require('#/data/race/g3/race-kyod-hai');
race_infos[race_enum.kyot_kin] = require('#/data/race/g2/race-kyot-kin');
race_infos[race_enum.kumo_sho] = require('#/data/race/g3/race-kumo-sho');
race_infos[race_enum.hyac_sta] = require('#/data/race/op/race-hyac-sta');
race_infos[race_enum.febr_sta] = require('#/data/race/g1/race-febr-sta');
race_infos[race_enum.kyo_sta] = require('#/data/race/g3/race-kyo-sta');
race_infos[race_enum.koku_dai] = require('#/data/race/g3/race-koku-dai');
race_infos[race_enum.diam_sta] = require('#/data/race/g3/race-diam-sta');
race_infos[race_enum.viol_sta] = require('#/data/race/op/race-viol-sta');
race_infos[race_enum.naka_kin] = require('#/data/race/g2/race-naka-kin');
race_infos[race_enum.hank_hai] = require('#/data/race/g3/race-hank-hai');
race_infos[race_enum.tuli_sho] = require('#/data/race/g2/race-tuli-sho');
race_infos[race_enum.hoch_sho] = require('#/data/race/g2/race-hoch-sho');
race_infos[race_enum.ocae_sta] = require('#/data/race/g3/race-ocae-sta');
race_infos[race_enum.hoch_rev] = require('#/data/race/g2/race-hoch-rev');
race_infos[race_enum.kink_sho] = require('#/data/race/g2/race-kink-sho');
race_infos[race_enum.irc_sho] = require('#/data/race/g3/race-irc.-sho');
race_infos[race_enum.keii_hai] = require('#/data/race/g2/race-keii-hai');
race_infos[race_enum.sprg_sta] = require('#/data/race/g2/race-sprg-sta');
race_infos[race_enum.falc_sta] = require('#/data/race/g3/race-falc-sta');
race_infos[race_enum.flow_cup] = require('#/data/race/g3/race-flow-cup');
race_infos[race_enum.huku_sta] = require('#/data/race/op/race-huku-sta');
race_infos[race_enum.dio_kin] = require('#/data/race/g2/race-dio-kin');
race_infos[race_enum.hans_dai] = require('#/data/race/g2/race-hans-dai');
race_infos[race_enum.toky_spr] = require('#/data/race/g3/race-toky-spr');
race_infos[race_enum.main_hai] = require('#/data/race/g3/race-main-hai');
race_infos[race_enum.takm_kin] = require('#/data/race/g1/race-takm-kin');
race_infos[race_enum.nikk_sho] = require('#/data/race/g2/race-nikk-sho');
race_infos[race_enum.marc_sta] = require('#/data/race/g3/race-marc-sta');
race_infos[race_enum.sank_hai] = require('#/data/race/g1/race-sank-hai');
race_infos[race_enum.lord_tro] = require('#/data/race/g3/race-lord-tro');
race_infos[race_enum.oka_sho] = require('#/data/race/g1/race-oka-sho');
race_infos[race_enum.new_tro] = require('#/data/race/g2/race-new-tro');
race_infos[race_enum.mari_cup] = require('#/data/race/g3/race-mari-cup');
race_infos[race_enum.hans_sta] = require('#/data/race/g2/race-hans-sta');
race_infos[race_enum.sats_sho] = require('#/data/race/g1/race-sats-sho');
race_infos[race_enum.arli_cup] = require('#/data/race/g3/race-arli-cup');
race_infos[race_enum.anta_sta] = require('#/data/race/g3/race-anta-sta');
race_infos[race_enum.flor_sta] = require('#/data/race/g2/race-flor-sta');
race_infos[race_enum.aoba_sho] = require('#/data/race/g2/race-aoba-sho');
race_infos[race_enum.tenn_spr] = require('#/data/race/g1/race-tenn-spr');
race_infos[race_enum.mile_cup] = require('#/data/race/g2/race-mile-cup');
race_infos[race_enum.fuku_sta] = require('#/data/race/g3/race-fuku-sta');
race_infos[race_enum.nhk_cup] = require('#/data/race/g1/race-nhk-cup');
race_infos[race_enum.kent_der] = require('#/data/race/g1/race-kent-der');
race_infos[race_enum.kyot_hai] = require('#/data/race/g2/race-kyot-hai');
race_infos[race_enum.kash_kin] = require('#/data/race/g1/race-kash-kin');
race_infos[race_enum.niig_dai] = require('#/data/race/g3/race-niig-dai');
race_infos[race_enum.hane_hai] = require('#/data/race/g1/race-hane-hai');
race_infos[race_enum.prix_prb] = require('#/data/race/op/race-prix-prb');
race_infos[race_enum.keio_cup] = require('#/data/race/g2/race-keio-cup');
race_infos[race_enum.yush_him] = require('#/data/race/g1/race-yush-him');
race_infos[race_enum.hous_sta] = require('#/data/race/op/race-hous-sta');
race_infos[race_enum.vict_mile] = require('#/data/race/g1/race-vict-mile');
race_infos[race_enum.heia_sta] = require('#/data/race/g3/race-heia-sta');
race_infos[race_enum.toky_yus] = require('#/data/race/g1/race-toky-yus');
race_infos[race_enum.aoi_sta] = require('#/data/race/g3/race-aoi-sta');
race_infos[race_enum.megu_kin] = require('#/data/race/g2/race-megu-kin');
race_infos[race_enum.prea_sta] = require('#/data/race/g1/race-prea-sta');
race_infos[race_enum.toky_der] = require('#/data/race/g1/race-toky-der');
race_infos[race_enum.yasu_kin] = require('#/data/race/g1/race-yasu-kin');
race_infos[race_enum.naru_kin] = require('#/data/race/g3/race-naru-kin');
race_infos[race_enum.haks_sta] = require('#/data/race/g3/race-haks-sta');
race_infos[race_enum.epso_cup] = require('#/data/race/g3/race-epso-cup');
race_infos[race_enum.prix_dia] = require('#/data/race/g1/race-prix-dia');
race_infos[race_enum.unic_sta] = require('#/data/race/g3/race-unic-sta');
race_infos[race_enum.merm_sta] = require('#/data/race/g3/race-merm-sta');
race_infos[race_enum.takz_kin] = require('#/data/race/g1/race-takz-kin');
race_infos[race_enum.teio_sho] = require('#/data/race/g1/race-teio-sho');
race_infos[race_enum.belm_sta] = require('#/data/race/g1/race-belm-sta');
race_infos[race_enum.radi_shi] = require('#/data/race/g3/race-radi-shi');
race_infos[race_enum.cbc_sho] = require('#/data/race/g3/race-cbc-sho');
race_infos[race_enum.japa_dir] = require('#/data/race/g1/race-japa-dir');
race_infos[race_enum.proc_sta] = require('#/data/race/g3/race-proc-sta');
race_infos[race_enum.tana_sho] = require('#/data/race/g3/race-tana-sho');
race_infos[race_enum.hak2_sta] = require('#/data/race/g3/race-hak2-sta');
race_infos[race_enum.hako_kin] = require('#/data/race/g3/race-hako-kin');
race_infos[race_enum.ibis_das] = require('#/data/race/g3/race-ibis-das');
race_infos[race_enum.toyo_kin] = require('#/data/race/g3/race-toyo-kin');
race_infos[race_enum.quee_sta] = require('#/data/race/g3/race-quee-sta');
race_infos[race_enum.leop_sta] = require('#/data/race/g3/race-leop-sta');
race_infos[race_enum.elm_sta] = require('#/data/race/g3/race-elm-sta');
race_infos[race_enum.seki_kin] = require('#/data/race/g3/race-seki-kin');
race_infos[race_enum.kita_kin] = require('#/data/race/g3/race-kita-kin');
race_infos[race_enum.koku_kin] = require('#/data/race/g3/race-koku-kin');
race_infos[race_enum.niig_sta] = require('#/data/race/g3/race-niig-sta');
race_infos[race_enum.sapp_kin] = require('#/data/race/g2/race-sapp-kin');
race_infos[race_enum.keen_cup] = require('#/data/race/g3/race-keen-cup');
race_infos[race_enum.koku_sta] = require('#/data/race/g3/race-koku-sta');
race_infos[race_enum.sapp_sta] = require('#/data/race/g3/race-sapp-sta');
race_infos[race_enum.niig_kin] = require('#/data/race/g3/race-niig-kin');
race_infos[race_enum.shio_sta] = require('#/data/race/g3/race-shio-sta');
race_infos[race_enum.cent_sta] = require('#/data/race/g2/race-cent-sta');
race_infos[race_enum.keis_han] = require('#/data/race/g3/race-keis-han');
race_infos[race_enum.rose_sta] = require('#/data/race/g2/race-rose-sta');
race_infos[race_enum.stli_kin] = require('#/data/race/g2/race-stli-kin');
race_infos[race_enum.kobe_hai] = require('#/data/race/g2/race-kobe-hai');
race_infos[race_enum.all_com] = require('#/data/race/g2/race-all-com');
race_infos[race_enum.sprt_sta] = require('#/data/race/g1/race-sprt-sta');
race_infos[race_enum.prix_lat] = require('#/data/race/g1/race-prix-lat');
race_infos[race_enum.siri_sta] = require('#/data/race/g3/race-siri-sta');
race_infos[race_enum.mile_nbh] = require('#/data/race/g1/race-mile-nbh');
race_infos[race_enum.saud_cup] = require('#/data/race/g3/race-saud-cup');
race_infos[race_enum.fuch_sta] = require('#/data/race/g2/race-fuch-sta');
race_infos[race_enum.main_oka] = require('#/data/race/g2/race-main-oka');
race_infos[race_enum.kyot_dai] = require('#/data/race/g2/race-kyot-dai');
race_infos[race_enum.shuk_sho] = require('#/data/race/g1/race-shuk-sho');
race_infos[race_enum.fuji_sta] = require('#/data/race/g2/race-fuji-sta');
race_infos[race_enum.arte_sta] = require('#/data/race/g3/race-arte-sta');
race_infos[race_enum.kiku_sho] = require('#/data/race/g1/race-kiku-sho');
race_infos[race_enum.tenn_sho] = require('#/data/race/g1/race-tenn-sho');
race_infos[race_enum.swan_sta] = require('#/data/race/g2/race-swan-sta');
race_infos[race_enum.keio_sta] = require('#/data/race/g2/race-keio-sta');
race_infos[race_enum.fant_sta] = require('#/data/race/g3/race-fant-sta');
race_infos[race_enum.jbc_spr] = require('#/data/race/g1/race-jbc-spr');
race_infos[race_enum.jbc_lad] = require('#/data/race/g1/race-jbc-lad');
race_infos[race_enum.jbc_cls] = require('#/data/race/g1/race-jbc-cls');
race_infos[race_enum.copa_arg] = require('#/data/race/g2/race-copa-arg');
race_infos[race_enum.miya_sta] = require('#/data/race/g3/race-miya-sta');
race_infos[race_enum.chn_frt] = require('#/data/race/g1/race-chn-frt');
race_infos[race_enum.dail_sta] = require('#/data/race/g2/race-dail-sta');
race_infos[race_enum.eliz_cup] = require('#/data/race/g1/race-eliz-cup');
race_infos[race_enum.musa_sta] = require('#/data/race/g3/race-musa-sta');
race_infos[race_enum.fuku_kin] = require('#/data/race/g3/race-fuku-kin');
race_infos[race_enum.toky_sta] = require('#/data/race/g2/race-toky-sta');
race_infos[race_enum.mile_cha] = require('#/data/race/g1/race-mile-cha');
race_infos[race_enum.kyot_sta] = require('#/data/race/g3/race-kyot-sta');
race_infos[race_enum.japa_cup] = require('#/data/race/g1/race-japa-cup');
race_infos[race_enum.keih_hai] = require('#/data/race/g3/race-keih-hai');
race_infos[race_enum.cham_cup] = require('#/data/race/g1/race-cham-cup');
race_infos[race_enum.stay_sta] = require('#/data/race/g2/race-stay-sta');
race_infos[race_enum.asah_cup] = require('#/data/race/g3/race-asah-cup');
race_infos[race_enum.zeni_you] = require('#/data/race/g1/race-zeni-you');
race_infos[race_enum.hans_fil] = require('#/data/race/g1/race-hans-fil');
race_infos[race_enum.hk_spr] = require('#/data/race/g1/race-hk-spr');
race_infos[race_enum.hk_mil] = require('#/data/race/g1/race-hk-mil');
race_infos[race_enum.hk_cup] = require('#/data/race/g1/race-hk-cup');
race_infos[race_enum.hk_vas] = require('#/data/race/g1/race-hk-vas');
race_infos[race_enum.cape_sta] = require('#/data/race/g3/race-cape-sta');
race_infos[race_enum.chun_hai] = require('#/data/race/g3/race-chun-hai');
race_infos[race_enum.asah_sta] = require('#/data/race/g1/race-asah-sta');
race_infos[race_enum.turq_sta] = require('#/data/race/g3/race-turq-sta');
race_infos[race_enum.hope_sta] = require('#/data/race/g1/race-hope-sta');
race_infos[race_enum.toky_dai] = require('#/data/race/g1/race-toky-dai');
race_infos[race_enum.arim_kin] = require('#/data/race/g1/race-arim-kin');
race_infos[race_enum.usa_oks] = require('#/data/race/g1/race-usa-oks');
race_infos[race_enum.hans_cup] = require('#/data/race/g2/race-hans-cup');
race_infos[race_enum.duba_cup] = require('#/data/race/g1/race-duba-cup');
race_infos[race_enum.duba_sha] = require('#/data/race/g1/race-duba-sha');
race_infos[race_enum.duba_cls] = require('#/data/race/g1/race-duba-cls');
race_infos[race_enum.duba_tur] = require('#/data/race/g1/race-duba-tur');
race_infos[race_enum.alqu_spr] = require('#/data/race/g1/race-alqu-spr');
race_infos[race_enum.fuyo_sta] = require('#/data/race/op/race-fuyo-sta');
race_infos[race_enum.bc_tsp] = require('#/data/race/g1/race-bc-tsp');
race_infos[race_enum.bc_mil] = require('#/data/race/g1/race-bc-mil');
race_infos[race_enum.bc_fmt] = require('#/data/race/g1/race-bc-fmt');
race_infos[race_enum.bc_tur] = require('#/data/race/g1/race-bc-tur');
race_infos[race_enum.bc_spr] = require('#/data/race/g1/race-bc-spr');
race_infos[race_enum.bc_fms] = require('#/data/race/g1/race-bc-fms');
race_infos[race_enum.bc_dml] = require('#/data/race/g1/race-bc-dml');
race_infos[race_enum.bc_dis] = require('#/data/race/g1/race-bc-dis');
race_infos[race_enum.bc_cls] = require('#/data/race/g1/race-bc-cls');
race_infos[race_enum.swep_sta] = require('#/data/race/op/race-swep-sta');
// GENERATED END

race_infos.forEach((e) => {
  const param_id = e.param_id;
  e.attr_bonus = bonus_params[id2bonus[param_id]] || [];
  e.lanes = lane_params[param_id];
  e.slopes = slope_params[param_id];
  e.phases = [
    Math.ceil((e.span * 4) / 24),
    Math.ceil((e.span * 16) / 24),
    Math.ceil((e.span * 20) / 24),
  ];
});

race_infos[race_enum.begin_race] = require('#/data/race/race-begin-race');

console.log(
  '比赛信息注册完毕!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

module.exports = {
  race_enum,
  race_infos,
  race_rewards,
  race_difficulty: {
    easy: -20,
    hard: 10,
    normal: 0,
  },
};
