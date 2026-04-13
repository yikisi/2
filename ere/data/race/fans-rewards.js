const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @type {number[]} */
const race2fans_reward = [];

race2fans_reward[race_enum.oka_sho] = 10500;
race2fans_reward[race_enum.sats_sho] = 11000;
race2fans_reward[race_enum.toky_yus] = 20000;
race2fans_reward[race_enum.yush_him] = 11000;
race2fans_reward[race_enum.nhk_cup] = 10500;
race2fans_reward[race_enum.takz_kin] = 15000;
race2fans_reward[race_enum.yasu_kin] = 13000;
race2fans_reward[race_enum.japa_dir] = 6500;
race2fans_reward[race_enum.sprt_sta] = 13000;
race2fans_reward[race_enum.shuk_sho] = 10000;
race2fans_reward[race_enum.kiku_sho] = 12000;
race2fans_reward[race_enum.tenn_sho] = 15000;
race2fans_reward[race_enum.mile_cha] = 11000;
race2fans_reward[race_enum.japa_cup] = 30000;
race2fans_reward[race_enum.eliz_cup] = 10500;
race2fans_reward[race_enum.jbc_cls] = 8000;
race2fans_reward[race_enum.jbc_spr] = 7000;
race2fans_reward[race_enum.arim_kin] = 30000;
race2fans_reward[race_enum.toky_dai] = 8000;
race2fans_reward[race_enum.cham_cup] = 10000;
race2fans_reward[race_enum.febr_sta] = 10000;
race2fans_reward[race_enum.kawa_kin] = 7000;
race2fans_reward[race_enum.takm_kin] = 13000;
race2fans_reward[race_enum.sank_hai] = 13500;
race2fans_reward[race_enum.tenn_spr] = 15000;
race2fans_reward[race_enum.vict_mile] = 10500;
race2fans_reward[race_enum.kash_kin] = 8000;
race2fans_reward[race_enum.teio_sho] = 7000;
race2fans_reward[race_enum.hope_sta] = 7000;
race2fans_reward[race_enum.hans_fil] = 6500;
race2fans_reward[race_enum.asah_sta] = 7000;
race2fans_reward[race_enum.toky_der] = 7000;
race2fans_reward[race_enum.hane_hai] = 7000;
race2fans_reward[race_enum.jbc_lad] = 6100;
race2fans_reward[race_enum.zeni_you] = 6200;
race2fans_reward[race_enum.mile_nbh] = 6000;

race2fans_reward[race_enum.prix_dia] = 28000;
race2fans_reward[race_enum.prix_lat] = 32000;
race2fans_reward[race_enum.chn_frt] = 30000;
race2fans_reward[race_enum.hk_spr] = 20000;
race2fans_reward[race_enum.hk_mil] = 25000;
race2fans_reward[race_enum.hk_cup] = 30000;
race2fans_reward[race_enum.hk_vas] = 25000;
race2fans_reward[race_enum.kent_der] = 31000;
race2fans_reward[race_enum.prea_sta] = 31000;
race2fans_reward[race_enum.belm_sta] = 31000;
race2fans_reward[race_enum.usa_oks] = 20000;

race2fans_reward[race_enum.duba_cup] = 27000;
race2fans_reward[race_enum.duba_sha] = 27000;
race2fans_reward[race_enum.duba_cls] = 27000;
race2fans_reward[race_enum.duba_tur] = 27000;
race2fans_reward[race_enum.alqu_spr] = 27000;

race2fans_reward[race_enum.bc_tsp] = 26000;
race2fans_reward[race_enum.bc_mil] = 29000;
race2fans_reward[race_enum.bc_fmt] = 30000;
race2fans_reward[race_enum.bc_tur] = 30000;
race2fans_reward[race_enum.bc_spr] = 27000;
race2fans_reward[race_enum.bc_fms] = 28000;
race2fans_reward[race_enum.bc_dml] = 29000;
race2fans_reward[race_enum.bc_dis] = 29000;
race2fans_reward[race_enum.bc_cls] = 31000;

Object.values(race_enum)
  .filter(
    (e) => race_infos[e].race_class === class_enum.G1 && !race2fans_reward[e],
  )
  .map((e) => console.error('比赛粉丝奖励缺失！', race_infos[e].name));

module.exports = race2fans_reward;
