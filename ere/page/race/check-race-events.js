const { add, drawLine, get, set, waitAnyKey } = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');
const { sys_check_remote } = require('#/system/sys-calc-chara-param');

const page_ero = require('#/page/page-ero');
const { get_track_full_name } = require('#/page/race/get-track-name');

const { check: check_edu_script } = require('#/event/edu/edu-factory');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const CharaInmon = require('#/data/ero/chara-inmon');
const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const EtsukoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-303');
const MayLifeMarks = require('#/data/event/life-event-marks/life-event-marks-343');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

const rec_list = {};
[race_enum.prix_lat].forEach((e) => (rec_list[e] ||= []).push(204));
[race_enum.prix_dia, race_enum.prix_lat].forEach((e) =>
  (rec_list[e] ||= []).push(205, 206),
);
[race_enum.sats_sho, race_enum.toky_yus, race_enum.kiku_sho].forEach((e) =>
  (rec_list[e] ||= []).push(346),
);
[
  race_enum.tenn_spr,
  race_enum.takz_kin,
  race_enum.prix_lat,
  race_enum.arim_kin,
].forEach((e) => (rec_list[e] ||= []).push(347));
[race_enum.sats_sho, race_enum.takz_kin, race_enum.arim_kin].forEach((e) =>
  (rec_list[e] ||= []).push(348),
);

/**
 * @param {number} race
 * @param {RaceInfo} info
 * @param {PseudoUma[]} team
 */
async function check_race_events(race, info, team) {
  const may_marks = new MayLifeMarks();
  let handler = void 0;
  const best = Math.min(...team.map((e) => e.rank.curr));
  const mvp = team.find((e) => e.rank.curr === best);
  const mvp_id = mvp.index_chara;
  const my_marks = new MyEduMarks();
  if (best === 1) {
    (rec_list[race] || []).forEach((cid) => {
      // CFLAGNAME:66 = 招募状态
      if (!get(`cflag:${cid}:66`) && get(`cflag:${cid}:67`) <= 0) {
        // CFLAGNAME:67 = 随机招募
        add(`cflag:${cid}:67`, -1);
      }
    });
  }
  if (race === race_enum.prix_lat && best === 1 && !may_marks.who_am_i) {
    may_marks.who_am_i = 1;
  }
  // FLAGNAME:31 = 初见URA颁奖
  if (get('flag:31') < 2) {
    handler = async () => {
      const etsuko = get_chara_talk(303);
      await print_title_with_kojo(i18n().kojo[303].recruit, 'rec_0', etsuko, {
        ...generate_dictionary(303, { phy: !0 }),
        CHARA_ACTUAL: etsuko.actual_name,
        TRACK: get_track_full_name(info.track),
      });
      set('flag:初见URA颁奖', 2);
      set('cflag:303:招募状态', -1);
    };
  } else if (
    !new EtsukoLifeMarks().rape &&
    get('flag:惩戒力度') === 3 &&
    get('cflag:303:招募状态') === recruit_flags.yes &&
    get('cflag:0:妊娠阶段') >> pregnant_stage_enum.fetal > 0 &&
    team.every((e) => e.index_chara > 0) &&
    get(`love:${mvp_id}`) < 75 &&
    get('love:303') < 75 &&
    best === 1 &&
    info.race_class <= class_enum.G3
  ) {
    new EtsukoLifeMarks().rape = 1;
    handler = async () => {
      const champion = get_chara_talk(mvp_id);
      await print_title_with_kojo(
        i18n().kojo[303].love,
        'rape_after_race',
        get_chara_talk(303),
        {
          ...generate_dictionary(303),
          CHAMPION: champion.name,
          C_COLOR: champion.color,
          C_SEX: champion.sex,
          UMA: champion.uma_sex_title,
        },
      );
      // STATUSNAME:36 - 37 = 弗隆K - 弗隆P
      if (get_penis_size(303) === 0) {
        set(`status:303:${get_random_value(36, 37)}`, 1);
      }
      if (get_penis_size(champion.id) === 0) {
        set(`status:${champion.id}:${get_random_value(36, 37)}`, 1);
      }
      begin_and_init_ero(0, champion.id, 303);
      set_palam_to_max(303, part_enum.penis);
      set_palam_to_max(0, part_enum.mouth);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(303, part_enum.penis),
        false,
      );
      set_palam_to_max(champion.id, part_enum.penis);
      set_palam_to_max(0, part_enum.virgin);
      await quick_make_love(
        new EroParticipant(0, part_enum.virgin),
        new EroParticipant(champion.id, part_enum.penis),
        false,
      );
      await quick_make_love(
        new EroParticipant(champion.id, part_enum.hit),
        new EroParticipant(0, part_enum.anal),
        false,
      );
      await quick_make_love(
        new EroParticipant(303, part_enum.penis),
        new EroParticipant(0, part_enum.breast),
        false,
      );
      await quick_make_love(
        new EroParticipant(champion.id, part_enum.hit),
        new EroParticipant(0, part_enum.anal),
        false,
      );
      set_palam_to_max(303, part_enum.penis);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(303, part_enum.penis),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(303, part_enum.penis),
        false,
      );
      set_palam_to_max(champion.id, part_enum.penis);
      set_palam_to_max(0, part_enum.virgin);
      await quick_make_love(
        new EroParticipant(champion.id, part_enum.penis),
        new EroParticipant(0, part_enum.virgin),
        false,
      );
      await quick_make_love(
        new EroParticipant(champion.id, part_enum.abuse),
        new EroParticipant(0, part_enum.masochism),
        false,
      );
      await quick_make_love(
        new EroParticipant(champion.id, part_enum.hit),
        new EroParticipant(0, part_enum.anal),
        false,
      );
      end_ero_and_train();
      sys_like_chara(champion.id, 0, 50) && (await waitAnyKey());
      sys_like_chara(303, 0, 200) && (await waitAnyKey());
    };
  } else if (
    get(`cflag:${mvp_id}:性别`) !== 1 &&
    !my_marks.we_are_one &&
    mvp_id > 0 &&
    !check_edu_script(mvp_id) &&
    !sys_check_remote(mvp_id) &&
    best === 1 &&
    get(`love:${mvp_id}`) >= 75 &&
    Math.random() * 100 <
      20 +
        20 * (mvp.race.conditionParams.item === 1) +
        (get(`base:${mvp_id}:性欲`) * 16) / 1000 &&
    !CharaInmon.get(mvp_id).on(plugin_enum.tuna) &&
    !CharaInmon.get(mvp_id).on(plugin_enum.meek)
  ) {
    handler = async () => {
      my_marks.we_are_one = get_random_value(4, 8);
      const ret = await print_title_with_kojo(
        i18n().timon.random_events,
        'we_are_one',
        get_chara_talk(mvp_id),
        get_chara_talk(0),
        sys_get_colored_callname(mvp_id, 0),
      );
      if (ret[0] === 1) {
        all_reward_in_event(mvp_id, { motivation: -1, relation: 50 }) &&
          (await waitAnyKey());
      } else {
        begin_and_init_ero(0, mvp_id);
        if (ret[1] === 1) {
          set('tflag:主导权', mvp_id);
        }
        const location = get('flag:当前位置');
        if (get('cflag:0:位置') > 0) {
          set('flag:当前位置', location_enum.hotel);
        } else {
          set('flag:当前位置', location_enum.restroom);
        }
        await page_ero(mvp_id, true);
        await end_ero_and_show_result(true);
        set('flag:当前位置', location);
      }
    };
  }
  if (handler) {
    drawLine();
    await handler();
  }
}

module.exports = check_race_events;
