const era = require('#/era-electron');

const sys_add_titles = require('#/system/chara/sys-add-titles');
const global_achievement = require('#/system/global/sys-calc-achievement');
const { sys_get_billings } = require('#/system/sys-calc-base-cflag');
const sys_filter_chara = require('#/system/sys-filter-chara');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_custom_check } = require('#/event/check/check-factory');
const { get_custom_daily } = require('#/event/daily/daily-factory');
const { get_custom_edu } = require('#/event/edu/edu-factory');
const { get_custom_mec } = require('#/event/mec/mec-factory');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const { buff_colors } = require('#/data/color-const');
const date_indicator = require('#/data/date-indicator');
const CharaInmon = require('#/data/ero/chara-inmon');
const { slavery_enum } = require('#/data/ero/mark-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const basement_owners = require('#/data/event/basement-owners');
const crazy_fans = require('#/data/event/crazy-fans');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

/** @param {string[]} sayings */
async function game_over_with_saying(sayings) {
  era.print(i18n().ui_game_over, {
    align: 'center',
    color: buff_colors[3],
    fontSize: '3rem',
    fontWeight: 'bold',
    isParagraph: true,
  });
  await era.printAndWait(get_random_entry(sayings), {
    align: 'center',
  });
}

/** @param {boolean} [again] */
async function game_over(again) {
  const game_over = era.get('flag:游戏结束');
  let end_talk = 0;
  let saying_arr;
  let temp;
  if (game_over === 3 && era.get('flag:当前位置') === location_enum.basement) {
    era.drawLine();
    global_achievement.end_lov = 1;
    await get_custom_daily(basement_owners.get(0)).basement_end();
    saying_arr = di18n.timon.eds_basement;
  } else if (
    game_over >= 2 &&
    era.get('flag:当前马币') < 0 &&
    (temp = sys_get_billings()[0]).creditor
  ) {
    era.drawLine();
    global_achievement.end_mon = 1;
    await get_custom_daily(temp.creditor).slave_end();
    saying_arr = di18n.timon.eds_slave;
  } else if ((temp = crazy_fans.get()) && game_over) {
    era.drawLine();
    global_achievement.end_fan = 1;
    await get_custom_edu(temp).crazy_fan_end();
    saying_arr = di18n.timon.eds_crazy_fan;
  } else {
    let punish_level = era.get('flag:惩戒力度');
    if (
      punish_level < 3 &&
      (era.get('flag:当前声望') <= 0 ||
        (era.get('flag:彩蛋机制') === 179 && !again))
    ) {
      if (
        era.get('flag:声望不足替换') > 0 &&
        era.get('cflag:0:模版角色') === -1
      ) {
        const me = get_chara_talk(0);
        punish_level = era.add('flag:惩戒力度', 1);
        let jpy = era.get('flag:当前马币');
        const uma = get_chara_talk(3);
        switch (punish_level) {
          case 1:
            era.set('cflag:0:阴茎尺寸', 1);
            era.set('cflag:0:阴道尺寸', 1);
            if (era.get('cflag:0:性别') === 1) {
              era.set('cflag:0:胸围', era.get('cflag:0:身高') * 0.51);
              era.set('cflag:0:腰围', era.get('cflag:0:身高') * 0.34);
              era.set('cflag:0:臀围', era.get('cflag:0:身高') * 0.542);
              era.set('cflag:0:下胸围', era.get('cflag:0:胸围') - 15);
            }
            era.set('cflag:0:性别', 10);
            era.set('cflag:0:育成回合计时', 0);
            era.set('flag:当前声望', era.get('global:初始声望增加量') + 100);
            if (jpy > 0) {
              era.add('flag:当前马币', -Math.floor(jpy / 2));
            }
            era
              .getAddedCharacters()
              .filter((cid) => cid)
              .forEach((cid) => get_custom_mec(cid).set_callname());
            if (!era.get('cflag:0:种族')) {
              era.set(
                'maxbase:0:速度',
                Math.min(2000, era.get('maxbase:0:速度') + 800),
              );
              era.set(
                'maxbase:0:耐力',
                Math.min(2000, era.get('maxbase:0:耐力') + 800),
              );
              era.set(
                'maxbase:0:力量',
                Math.min(2000, era.get('maxbase:0:力量') + 800),
              );
            }

            era.drawLine();
            await i18n().timon.ending.punishment1(
              me,
              uma.uma_sex_title,
              uma.couple_title,
            );
            era.set('cflag:0:种族', 1);
            break;
          case 2:
            era.set('talent:0:调教度', 6);
            new Array(3).fill(0).forEach((_, i) => {
              era.set(`talent:0:${60 + i}`, 2);
              era.set(`talent:0:${64 + i}`, 2);
            });
            new Array(4)
              .fill(0)
              .forEach((_, i) => era.set(`talent:0:${50 + i}`, 1));
            era.set('talent:0:名穴', 1);
            era.set('talent:0:魔尻', 1);
            new Array(4)
              .fill(0)
              .forEach((_, i) => era.set(`talent:0:${74 + i}`, 1));
            era.set('talent:0:抖S', 0);
            era.set('talent:0:喜欢责骂', 1);
            era.set('talent:0:喜欢痛苦', 1);
            era.set('talent:0:乳头类型', 2);
            era.set('talent:0:泌乳', 3);
            era.set('flag:当前声望', era.get('global:初始声望增加量') + 100);
            jpy > 0 && era.set('flag:当前马币', 0);
            era.set('mark:0:淫纹', 3);

            era.drawLine();
            await i18n().timon.ending.punishment2(
              me,
              date_indicator(),
              uma.uma_sex_title,
              uma.couple_title,
            );
            sys_add_titles(0, { c: buff_colors[2], n: 's_p_slave' });
            break;
          case 3:
            CharaInmon.get(0).slave = slavery_enum.pregnant;
            era.set('status:0:发情', 1);
            if (era.get('cflag:0:妊娠阶段') === 1 << pregnant_stage_enum.no) {
              era.set('status:0:经期', 0);
              era.set('status:0:排卵期', 1);
            }
            era.set(
              'flag:当前声望',
              era.get('global:初始声望增加量') +
                100 +
                sys_filter_chara('cflag', '母方角色', 0).length * 100,
            );
            era.set('flag:当前马币', 0);

            era.drawLine();
            await i18n().timon.ending.punishment3(
              me,
              uma.uma_sex_title,
              uma.couple_title,
            );
            sys_add_titles(0, { c: buff_colors[2], n: 's_p_preg' });
        }
        sys_filter_chara('cflag', '招募状态', recruit_flags.yes)
          .filter((cid) => cid > 0)
          .forEach((cid) => {
            get_custom_mec(cid).set_callname();
            get_custom_check(cid).check_after_punish(punish_level);
          });
      } else {
        era.drawLine();
        const me = get_chara_talk(0);
        if (era.get('flag:当前位置') === location_enum.basement) {
          if (
            await select_yes_or_no(
              i18n().timon.ending.get_basement_ending_confirm(me),
              i18n().timon.ending.bt_confirm_yes,
              i18n().timon.ending.bt_confirm_no,
            )
          ) {
            await get_custom_daily(basement_owners.get(0)).basement_end();
          }
          global_achievement.end_lov = 1;
          saying_arr = di18n.timon.eds_basement;
          // FLAGNAME:36 = 变态行为
        } else if (era.get('flag:36') > 0) {
          await print_title_with_kojo.ending(i18n().timon.ending, 'hentai', me);
          saying_arr = di18n.timon.eds_hentai;
          end_talk = 2;
          global_achievement.end_hnt = 1;
        } else {
          await print_title_with_kojo.ending(i18n().timon.ending, 'loser', me);
          saying_arr = di18n.timon.eds_loser;
          end_talk = 1;
          global_achievement.end_los = 1;
        }
      }
    }
  }
  if (saying_arr) {
    await game_over_with_saying(saying_arr);
    if (end_talk > 0) {
      era.println();
      const team_list = era.getAddedCharacters().filter(
        // CFLAGNAME:66 = 招募状态
        (cid) => cid > 0 && era.get(`cflag:${cid}:66`) === recruit_flags.yes,
      );
      for (const cid of team_list) {
        await get_custom_daily(cid).end_talk(end_talk > 1);
      }
    }
    if (
      (global_achievement.end_los > 0 || global_achievement.end_hnt > 0) &&
      global_achievement.end_fan > 0 &&
      global_achievement.end_mon > 0 &&
      global_achievement.end_lov > 0
    ) {
      global_achievement.ending = 1;
    }
    return true;
  }
  return false;
}
game_over.game_over_with_saying = game_over_with_saying;

module.exports = game_over;
