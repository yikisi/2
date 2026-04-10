const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const sys_filter_chara = require('#/system/sys-filter-chara');

const { run_custom_ero } = require('#/event/ero/ero-factory');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha, get_random_entry, sort_list } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const { item_enum } = require('#/data/ero/item-const');
const { part_enum } = require('#/data/ero/part-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const { ero_hooks } = require('#/data/event/ero-hooks');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');

const { i18n } = require('#/i18n/selector');

async function punish_pregnant_slave() {
  const me = get_chara_talk(0),
    my_marks = new MyEduMarks();
  if (era.get('flag:惩戒力度') === 3) {
    if (era.get('cflag:0:妊娠阶段') === 1 << pregnant_stage_enum.no) {
      my_marks.not_pregnant++;
    } else {
      my_marks.not_pregnant = 0;
    }
    const src_chara = era.get('cflag:0:模版角色');
    if (
      era.get('cflag:0:位置') === 0 &&
      era.get('flag:当前位置') !== location_enum.basement &&
      my_marks.not_pregnant >= get_random_value(2, 6)
    ) {
      const cache = era.get('status:0:马跳S');
      era.set('status:0:马跳S', 1);
      era.drawLine();
      let rape_list;
      // 次数=1
      if (!my_marks.p_slave_punish) {
        my_marks.p_slave_punish = 1;
        await print_title_with_kojo(
          i18n().timon.pregnant_slave,
          'punish_first',
          me,
          get_chara_talk(302),
          get_chara_talk(301),
        );
        rape_list = [
          301,
          302,
          ...gacha(
            sys_filter_chara('cflag', '招募状态', recruit_flags.no).filter(
              (cid) =>
                ((cid > 0 && cid < 200) ||
                  (cid >= 301 && cid <= 306) ||
                  cid === 400) &&
                cid !== src_chara &&
                era.get(`cflag:${cid}:成长阶段`) >= 2 &&
                era.get(`cflag:${cid}:种族`) > 0 &&
                era.get(`cflag:${cid}:位置`) === 0,
            ),
            get_random_value(6, 8),
          ),
        ];
        rape_list.forEach((e) => {
          if (era.get(`cflag:${e}:性别`) === 0) {
            era.set(`status:${e}:弗隆P`, 1);
          }
        });
        begin_and_init_ero(0, ...rape_list);
        await run_custom_ero(0, ero_hooks.use_item, {
          item: item_enum.gag,
          part: part_enum.mouth,
          attacker: 302,
          defender: 0,
          shown: false,
        });
        await run_custom_ero(0, ero_hooks.use_item, {
          item: item_enum.blindfold,
          part: 99,
          attacker: 301,
          defender: 0,
          shown: false,
        });
      } else {
        let base_list = sys_filter_chara(
          'cflag',
          '招募状态',
          recruit_flags.yes,
        ).filter(
          (cid) =>
            ((cid > 0 && cid < 200) || cid === 400) &&
            era.get(`cflag:${cid}:成长阶段`) >= 2 &&
            era.get(`cflag:${cid}:种族`) > 0 &&
            era.get(`cflag:${cid}:位置`) === 0,
        );
        const is_teammate = base_list.length > 0;
        if (base_list.length < 8) {
          base_list.push(
            ...gacha(
              sys_filter_chara('cflag', '招募状态', recruit_flags.no).filter(
                (cid) =>
                  ((cid > 0 && cid < 200) || cid === 400) &&
                  cid !== src_chara &&
                  era.get(`cflag:${cid}:成长阶段`) >= 2 &&
                  era.get(`cflag:${cid}:种族`) > 0 &&
                  era.get(`cflag:${cid}:位置`) === 0,
              ),
              8 - base_list.length,
            ),
          );
        }
        await print_title_with_kojo(
          i18n().timon.pregnant_slave,
          'punish',
          me,
          era.get('flag:角色性别') === 1
            ? i18n().name.uma_boy
            : i18n().name.uma_girl,
          is_teammate,
        );
        rape_list = gacha(base_list, get_random_value(6, 8));
        rape_list.forEach((e) => {
          if (era.get(`cflag:${e}:性别`) === 0) {
            era.set(`status:${e}:弗隆P`, 1);
          }
        });
        begin_and_init_ero(0, ...rape_list);
        await run_custom_ero(0, ero_hooks.use_item, {
          item: item_enum.gag,
          part: part_enum.mouth,
          attacker: get_random_entry(rape_list),
          defender: 0,
          shown: false,
        });
        await run_custom_ero(0, ero_hooks.use_item, {
          item: item_enum.blindfold,
          part: 99,
          attacker: get_random_entry(rape_list),
          defender: 0,
          shown: false,
        });
      }
      set_palam_to_max(0, part_enum.virgin);
      while (era.get('cflag:0:妊娠阶段') === 1 << pregnant_stage_enum.no) {
        rape_list = sort_list(rape_list, Math.random);
        for (const chara_id of rape_list) {
          set_palam_to_max(chara_id, part_enum.penis);
          await quick_make_love(
            new EroParticipant(chara_id, part_enum.penis),
            new EroParticipant(0, part_enum.virgin),
            false,
          );
        }
      }
      end_ero_and_train();
      era.set('status:0:马跳S', cache);
      LifeEventMarks.get_marks(0).report = 0;
      era.drawLine();
    }
  }
}

module.exports = punish_pregnant_slave;
