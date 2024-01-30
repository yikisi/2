const { id2bonus, bonus_params } = require('#/data/race/race-attr-bonus');
const {
  lane_params,
  slope_params,
  phase_params,
} = require('#/data/race/race-params');

const race_enum = {
  // 出道战
  begin_race: 0,
  // 中山金杯
  naka_kim: 0,
  // 京都金杯
  kyot_kim: 0,
  // 仙女锦标
  fair_sta: 0,
  // 新山纪念
  shin_kin: 0,
  // 爱知杯
  aich_hai: 0,
  // 日经新春杯
  nikk_hai: 0,
  // 京成杯
  keis_hai: 0,
  // 美国赛马会杯
  amer_cup: 0,
  // 根岸锦标
  negi_sta: 0,
  // 丝绸之路锦标
  silk_sta: 0,
  // 东海锦标
  toka_sta: 0,
  // 青年骏马锦标
  waka_sta: 0,
  // 川崎纪念赛
  kawa_kin: 0,
  // 东京报杯
  toky_hai: 0,
  // 如月赏
  kisa_sho: 0,
  // 京都纪念
  kyot_kin: 0,
  // 女王杯
  quee_cup: 0,
  // 共同通信杯
  kyod_hai: 0,
  // 二月锦标
  febr_sta: 0,
  // 钻石锦标
  diam_sta: 0,
  // 京都皇冠锦标
  kyo_sta: 0,
  // 小仓大赏典
  koku_dai: 0,
  // 风信子锦标
  hyac_sta: 0,
  // 中山纪念
  naka_kin: 0,
  // 阪急杯
  hank_hai: 0,
  // 弥生赏
  hoch_sho: 0,
  // 郁金香赏
  tuli_sho: 0,
  // 海洋锦标
  ocae_sta: 0,
  // 金鯱赏
  kink_sho: 0,
  // 报知杯皇冠赛
  hoch_rev: 0,
  // 中山赛皇冠锦标
  irc_sho: 0,
  // 春季锦标
  sprg_sta: 0,
  // 阪神大赏典
  hans_dai: 0,
  // 大尾光纪念赛
  dio_kin: 0,
  // 百花杯
  flow_cup: 0,
  // 猎鹰锦标
  falc_sta: 0,
  // 高松宫纪念
  takm_kin: 0,
  // 日经赏
  nikk_sho: 0,
  // 三月锦标
  marc_sta: 0,
  // 每日杯
  main_hai: 0,
  // 大阪杯
  sank_hai: 0,
  // 德比伯爵挑战杯
  lord_tro: 0,
  // 樱花赏
  oka_sho: 0,
  // 新西兰优胜杯
  new_tro: 0,
  // 阪神皇冠锦标
  hans_sta: 0,
  // 皋月赏
  sats_sho: 0,
  // 阿灵顿杯
  arli_cup: 0,
  // 天蝎锦标
  anta_sta: 0,
  // 春季天皇赏
  tenn_spr: 0,
  // 芙罗拉锦标
  flor_sta: 0,
  // 青叶赏
  aoba_sho: 0,
  // 英里赛马杯
  mile_cup: 0,
  // 福岛皇冠锦标
  fuku_sta: 0,
  // NHK英里杯
  nhk_cup: 0,
  // 柏市纪念赛
  kash_kin: 0,
  // 京都新闻杯
  kyot_hai: 0,
  // 新潟大賞典
  niig_dai: 0,
  // 京王杯春季杯
  keio_cup: 0,
  // 蓝鹦鹉赏
  prix_prb: 0,
  // 维多利亚英里赛
  vict_mile: 0,
  // 日本橡树大赛
  yush_him: 0,
  // 平安锦标
  heia_sta: 0,
  // 日本德比
  toky_yus: 0,
  // 目黑纪念
  megu_kin: 0,
  // 葵锦标
  aoi_sta: 0,
  // 安田纪念
  yasu_kin: 0,
  // 鸣尾纪念
  naru_kin: 0,
  // 函馆短程锦标
  haks_sta: 0,
  // 叶森赏
  epso_cup: 0,
  // 戴安娜锦标
  prix_dia: 0,
  // 独角兽锦标
  unic_sta: 0,
  // 人鱼锦标
  merm_sta: 0,
  // 宝冢纪念
  takz_kin: 0,
  // 帝王赏
  teio_sho: 0,
  // 日经广播赏
  radi_shi: 0,
  // CBC赏
  cbc_sho: 0,
  // 日本泥地德比
  japa_dir: 0,
  // 七夕赏
  tana_sho: 0,
  // 南河三锦标
  proc_sta: 0,
  // 函馆少年锦标
  hak2_sta: 0,
  // 函馆纪念
  hako_kin: 0,
  // 女皇锦标
  quee_sta: 0,
  // 朱鹮夏季短跑赛
  ibis_das: 0,
  // 中京纪念
  toyo_kin: 0,
  // 榆树锦标赛
  elm_sta: 0,
  // 花豹锦标
  leop_sta: 0,
  // 关屋纪念
  seki_kin: 0,
  // 北九州纪念
  kita_kin: 0,
  // 小仓纪念
  koku_kin: 0,
  // 札幌纪念
  sapp_kin: 0,
  // 基兰杯
  keen_cup: 0,
  // 新潟2岁锦标
  niig_sta: 0,
  // 札幌2岁锦标
  sapp_sta: 0,
  // 新潟纪念
  niig_kin: 0,
  // 小仓2岁锦标
  koku_sta: 0,
  // 人马锦标
  cent_sta: 0,
  // 京城杯秋季让磅赛
  keis_han: 0,
  // 紫苑锦标
  shio_sta: 0,
  // 圣列特纪念赛
  stli_kin: 0,
  // 玫瑰锦标
  rose_sta: 0,
  // 产经赏开放赛
  all_com: 0,
  // 神户新闻杯
  kobe_hai: 0,
  // 短途马锦标
  sprt_sta: 0,
  // 凯旋门赏
  prix_lat: 0,
  // 天狼星锦标
  siri_sta: 0,
  // 每日王冠
  main_oka: 0,
  // 京都大赏典
  kyot_dai: 0,
  // 沙特阿拉伯皇家杯
  saud_cup: 0,
  // 秋华赏
  shuk_sho: 0,
  // 富士锦标
  fuji_sta: 0,
  // 府中皇冠锦标
  fuch_sta: 0,
  // 秋季天皇赏
  tenn_sho: 0,
  // 菊花赏
  kiku_sho: 0,
  // 和谐锦标
  chn_frt: 0,
  // 天鹅锦标
  swan_sta: 0,
  // 阿尔忒弥斯锦标
  arte_sta: 0,
  // 日本育马场杯短途赛
  jbc_spr: 0,
  // 日本育马场经典赛
  jbc_cls: 0,
  // 京王杯2岁锦标
  keio_sta: 0,
  // 阿根廷共和国杯
  copa_arg: 0,
  // 幻想锦标
  fant_sta: 0,
  // 京城锦标
  miya_sta: 0,
  // 伊丽莎白二世女皇杯
  eliz_cup: 0,
  // 每日杯2岁锦标
  dail_sta: 0,
  // 福岛纪念
  fuku_kin: 0,
  // 武藏野锦标
  musa_sta: 0,
  // 英里冠军赛
  mile_cha: 0,
  // 东京体育杯2岁锦标
  toky_sta: 0,
  // 日本杯
  japa_cup: 0,
  // 京阪杯
  keih_hai: 0,
  // 京都2岁锦标
  kyot_sta: 0,
  // 冠军杯
  cham_cup: 0,
  // 长途锦标
  stay_sta: 0,
  // 挑战杯
  asah_cup: 0,
  // 阪神皇冠大赛
  hans_fil: 0,
  // 香港短途锦标
  hk_spr: 0,
  // 香港英里锦标
  hk_mil: 0,
  // 香港杯
  hk_cup: 0,
  // 香港瓶
  hk_vas: 0,
  // 五车二锦标
  cape_sta: 0,
  // 中日报杯
  chun_hai: 0,
  // 朝日杯未来锦标
  asah_sta: 0,
  // 绿松石锦标
  turq_sta: 0,
  // 希望锦标
  hope_sta: 0,
  // 有马纪念
  arim_kin: 0,
  // 东京大赏典
  toky_dai: 0,
  // 阪神杯
  hans_cup: 0,
};
Object.keys(race_enum).forEach((e, i) => (race_enum[e] = i));

/** @type {RaceInfo[]} */
const race_infos = [];
race_infos[race_enum.naka_kim] = require('#/data/race/g3/race-naka-kim');
race_infos[race_enum.kyot_kim] = require('#/data/race/g3/race-kyot-kim');
race_infos[race_enum.fair_sta] = require('#/data/race/g3/race-fair-sta');
race_infos[race_enum.shin_kin] = require('#/data/race/g3/race-shin-kin');
race_infos[race_enum.aich_hai] = require('#/data/race/g3/race-aich-hai');
race_infos[race_enum.nikk_hai] = require('#/data/race/g2/race-nikk-hai');
race_infos[race_enum.keis_hai] = require('#/data/race/g3/race-keis-hai');
race_infos[race_enum.amer_cup] = require('#/data/race/g2/race-amer-cup');
race_infos[race_enum.negi_sta] = require('#/data/race/g2/race-negi-sta');
race_infos[race_enum.silk_sta] = require('#/data/race/g2/race-silk-sta');
race_infos[race_enum.toka_sta] = require('#/data/race/g2/race-toka-sta');
race_infos[race_enum.waka_sta] = require('#/data/race/op/race-waka-sta');
race_infos[race_enum.kawa_kin] = require('#/data/race/g1/race-kawa-kin');
race_infos[race_enum.toky_hai] = require('#/data/race/g3/race-toky-hai');
race_infos[race_enum.kisa_sho] = require('#/data/race/g3/race-kisa-sho');
race_infos[race_enum.kyot_kin] = require('#/data/race/g2/race-kyot-kin');
race_infos[race_enum.quee_cup] = require('#/data/race/g3/race-quee-cup');
race_infos[race_enum.kyod_hai] = require('#/data/race/g3/race-kyod-hai');
race_infos[race_enum.febr_sta] = require('#/data/race/g1/race-febr-sta');
race_infos[race_enum.diam_sta] = require('#/data/race/g3/race-diam-sta');
race_infos[race_enum.kyo_sta] = require('#/data/race/g3/race-kyo-sta');
race_infos[race_enum.koku_dai] = require('#/data/race/g3/race-koku-dai');
race_infos[race_enum.hyac_sta] = require('#/data/race/op/race-hyac-sta');
race_infos[race_enum.naka_kin] = require('#/data/race/g2/race-naka-kin');
race_infos[race_enum.hank_hai] = require('#/data/race/g3/race-hank-hai');
race_infos[race_enum.hoch_sho] = require('#/data/race/g2/race-hoch-sho');
race_infos[race_enum.tuli_sho] = require('#/data/race/g2/race-tuli-sho');
race_infos[race_enum.ocae_sta] = require('#/data/race/g3/race-ocae-sta');
race_infos[race_enum.kink_sho] = require('#/data/race/g2/race-kink-sho');
race_infos[race_enum.hoch_rev] = require('#/data/race/g2/race-hoch-rev');
race_infos[race_enum.irc_sho] = require('#/data/race/g3/race-IRC.-sho');
race_infos[race_enum.sprg_sta] = require('#/data/race/g2/race-sprg-sta');
race_infos[race_enum.hans_dai] = require('#/data/race/g2/race-hans-dai');
race_infos[race_enum.dio_kin] = require('#/data/race/g2/race-dio-kin');
race_infos[race_enum.flow_cup] = require('#/data/race/g3/race-flow-cup');
race_infos[race_enum.falc_sta] = require('#/data/race/g3/race-falc-sta');
race_infos[race_enum.takm_kin] = require('#/data/race/g1/race-takm-kin');
race_infos[race_enum.nikk_sho] = require('#/data/race/g2/race-nikk-sho');
race_infos[race_enum.marc_sta] = require('#/data/race/g3/race-marc-sta');
race_infos[race_enum.main_hai] = require('#/data/race/g3/race-main-hai');
race_infos[race_enum.sank_hai] = require('#/data/race/g1/race-sank-hai');
race_infos[race_enum.lord_tro] = require('#/data/race/g3/race-lord-tro');
race_infos[race_enum.oka_sho] = require('#/data/race/g1/race-Oka-sho');
race_infos[race_enum.new_tro] = require('#/data/race/g2/race-new-tro');
race_infos[race_enum.hans_sta] = require('#/data/race/g2/race-hans-sta');
race_infos[race_enum.sats_sho] = require('#/data/race/g1/race-sats-sho');
race_infos[race_enum.arli_cup] = require('#/data/race/g3/race-arli-cup');
race_infos[race_enum.anta_sta] = require('#/data/race/g3/race-anta-sta');
race_infos[race_enum.tenn_spr] = require('#/data/race/g1/race-tenn-spr');
race_infos[race_enum.flor_sta] = require('#/data/race/g2/race-flor-sta');
race_infos[race_enum.aoba_sho] = require('#/data/race/g2/race-aoba-sho');
race_infos[race_enum.mile_cup] = require('#/data/race/g2/race-mile-cup');
race_infos[race_enum.fuku_sta] = require('#/data/race/g3/race-fuku-sta');
race_infos[race_enum.nhk_cup] = require('#/data/race/g1/race-nhk-cup');
race_infos[race_enum.kash_kin] = require('#/data/race/g1/race-kash-kin');
race_infos[race_enum.kyot_hai] = require('#/data/race/g2/race-kyot-hai');
race_infos[race_enum.niig_dai] = require('#/data/race/g3/race-niig-dai');
race_infos[race_enum.keio_cup] = require('#/data/race/g2/race-keio-cup');
race_infos[race_enum.prix_prb] = require('#/data/race/op/race-prix-prb');
race_infos[race_enum.vict_mile] = require('#/data/race/g1/race-vict-mile');
race_infos[race_enum.yush_him] = require('#/data/race/g1/race-yush-him');
race_infos[race_enum.heia_sta] = require('#/data/race/g3/race-heia-sta');
race_infos[race_enum.toky_yus] = require('#/data/race/g1/race-toky-yus');
race_infos[race_enum.megu_kin] = require('#/data/race/g2/race-megu-kin');
race_infos[race_enum.aoi_sta] = require('#/data/race/g3/race-aoi-sta');
race_infos[race_enum.yasu_kin] = require('#/data/race/g1/race-yasu-kin');
race_infos[race_enum.naru_kin] = require('#/data/race/g3/race-naru-kin');
race_infos[race_enum.haks_sta] = require('#/data/race/g3/race-haks-sta');
race_infos[race_enum.epso_cup] = require('#/data/race/g3/race-epso-cup');
race_infos[race_enum.prix_dia] = require('#/data/race/g1/race-prix-dia');
race_infos[race_enum.unic_sta] = require('#/data/race/g3/race-unic-sta');
race_infos[race_enum.merm_sta] = require('#/data/race/g3/race-merm-sta');
race_infos[race_enum.takz_kin] = require('#/data/race/g1/race-takz-kin');
race_infos[race_enum.teio_sho] = require('#/data/race/g1/race-teio-sho');
race_infos[race_enum.radi_shi] = require('#/data/race/g3/race-radi-shi');
race_infos[race_enum.cbc_sho] = require('#/data/race/g3/race-CBC-sho');
race_infos[race_enum.japa_dir] = require('#/data/race/g1/race-japa-dir');
race_infos[race_enum.tana_sho] = require('#/data/race/g3/race-tana-sho');
race_infos[race_enum.proc_sta] = require('#/data/race/g3/race-proc-sta');
race_infos[race_enum.hak2_sta] = require('#/data/race/g3/race-hak2-sta');
race_infos[race_enum.hako_kin] = require('#/data/race/g3/race-hako-kin');
race_infos[race_enum.quee_sta] = require('#/data/race/g3/race-quee-sta');
race_infos[race_enum.ibis_das] = require('#/data/race/g3/race-Ibis-das');
race_infos[race_enum.toyo_kin] = require('#/data/race/g3/race-toyo-kin');
race_infos[race_enum.elm_sta] = require('#/data/race/g3/race-elm-sta');
race_infos[race_enum.leop_sta] = require('#/data/race/g3/race-leop-sta');
race_infos[race_enum.seki_kin] = require('#/data/race/g3/race-seki-kin');
race_infos[race_enum.kita_kin] = require('#/data/race/g3/race-kita-kin');
race_infos[race_enum.koku_kin] = require('#/data/race/g3/race-koku-kin');
race_infos[race_enum.sapp_kin] = require('#/data/race/g2/race-sapp-kin');
race_infos[race_enum.keen_cup] = require('#/data/race/g3/race-keen-cup');
race_infos[race_enum.niig_sta] = require('#/data/race/g3/race-niig-sta');
race_infos[race_enum.sapp_sta] = require('#/data/race/g3/race-sapp-sta');
race_infos[race_enum.niig_kin] = require('#/data/race/g3/race-niig-kin');
race_infos[race_enum.koku_sta] = require('#/data/race/g3/race-koku-sta');
race_infos[race_enum.cent_sta] = require('#/data/race/g2/race-cent-sta');
race_infos[race_enum.keis_han] = require('#/data/race/g3/race-keis-han');
race_infos[race_enum.shio_sta] = require('#/data/race/g3/race-shio-sta');
race_infos[race_enum.stli_kin] = require('#/data/race/g2/race-Stli-kin');
race_infos[race_enum.rose_sta] = require('#/data/race/g2/race-rose-sta');
race_infos[race_enum.all_com] = require('#/data/race/g2/race-All-com');
race_infos[race_enum.kobe_hai] = require('#/data/race/g2/race-Kobe-Hai');
race_infos[race_enum.sprt_sta] = require('#/data/race/g1/race-sprt-sta');
race_infos[race_enum.prix_lat] = require('#/data/race/g1/race-prix-lat');
race_infos[race_enum.siri_sta] = require('#/data/race/g3/race-Siri-sta');
race_infos[race_enum.main_oka] = require('#/data/race/g2/race-main-oka');
race_infos[race_enum.kyot_dai] = require('#/data/race/g2/race-kyot-dai');
race_infos[race_enum.saud_cup] = require('#/data/race/g3/race-saud-cup');
race_infos[race_enum.shuk_sho] = require('#/data/race/g1/race-shuk-sho');
race_infos[race_enum.fuji_sta] = require('#/data/race/g2/race-fuji-sta');
race_infos[race_enum.fuch_sta] = require('#/data/race/g2/race-fuch-sta');
race_infos[race_enum.tenn_sho] = require('#/data/race/g1/race-tenn-sho');
race_infos[race_enum.kiku_sho] = require('#/data/race/g1/race-kiku-sho');
race_infos[race_enum.chn_frt] = require('#/data/race/g1/race-chn-frt');
race_infos[race_enum.swan_sta] = require('#/data/race/g2/race-swan-sta');
race_infos[race_enum.arte_sta] = require('#/data/race/g3/race-arte-sta');
race_infos[race_enum.jbc_spr] = require('#/data/race/g1/race-jbc-spr');
race_infos[race_enum.jbc_cls] = require('#/data/race/g1/race-jbc-cls');
race_infos[race_enum.keio_sta] = require('#/data/race/g2/race-keio-sta');
race_infos[race_enum.copa_arg] = require('#/data/race/g2/race-copa-arg');
race_infos[race_enum.fant_sta] = require('#/data/race/g3/race-fant-sta');
race_infos[race_enum.miya_sta] = require('#/data/race/g3/race-miya-sta');
race_infos[race_enum.eliz_cup] = require('#/data/race/g1/race-eliz-cup');
race_infos[race_enum.dail_sta] = require('#/data/race/g2/race-dail-sta');
race_infos[race_enum.fuku_kin] = require('#/data/race/g3/race-fuku-kin');
race_infos[race_enum.musa_sta] = require('#/data/race/g3/race-musa-sta');
race_infos[race_enum.mile_cha] = require('#/data/race/g1/race-mile-cha');
race_infos[race_enum.toky_sta] = require('#/data/race/g2/race-toky-sta');
race_infos[race_enum.japa_cup] = require('#/data/race/g1/race-japa-cup');
race_infos[race_enum.keih_hai] = require('#/data/race/g3/race-keih-hai');
race_infos[race_enum.kyot_sta] = require('#/data/race/g3/race-kyot-sta');
race_infos[race_enum.cham_cup] = require('#/data/race/g1/race-cham-cup');
race_infos[race_enum.stay_sta] = require('#/data/race/g2/race-stay-sta');
race_infos[race_enum.asah_cup] = require('#/data/race/g3/race-asah-cup');
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
race_infos[race_enum.arim_kin] = require('#/data/race/g1/race-arim-kin');
race_infos[race_enum.toky_dai] = require('#/data/race/g1/race-toky-dai');
race_infos[race_enum.hans_cup] = require('#/data/race/g2/race-hans-cup');

race_infos.forEach((e) => {
  const param_id = e.param_id;
  e.attr_bonus = bonus_params[id2bonus[param_id]];
  e.lanes = lane_params[param_id];
  e.slopes = slope_params[param_id];
  e.phases = phase_params[e.span];
});

race_infos[race_enum.begin_race] = require('#/data/race/race-begin-race');

module.exports = {
  race_enum,
  race_infos,
  race_rewards: require('#/data/race/race-rewards'),
};
