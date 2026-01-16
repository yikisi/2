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

const basement_saying_arr = [
  '九尺二间陋室里，红唇依竹共恩情。——高杉晋作',
  '每一个被束缚的奴隶都可以靠着他自己的手脱掉锁链。——莎士比亚',
  '我已不再孤单，如今我生命中的挚爱与我如此靠近。——悲惨世界',
  '自由不是随心所欲，而是不必身不由己。——康德',
  '金钱、赛马娘、女人，男生永远搞不懂这三件事。——威尔・罗杰斯',
];

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
    saying_arr = basement_saying_arr;
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
              .filter((e) => e)
              .forEach((e) => get_custom_mec(e).set_callname());

            era.drawLine();
            era.setOffset(6);
            era.setWidth(12);
            await me.say_as_unknown_and_wait(
              '据说，人在被剥夺了自由后……才能真正了解自己。',
            );
            await me.say_as_unknown_and_wait('那么……你有多了解自己呢？');
            await me.say_as_unknown_and_wait([
              me.get_colored_actual_name(),
              '……怠惰，傲慢',
              era.get('flag:变态行为') ? '，色欲' : '',
              '……今天……你获得了新生。',
            ]);
            await me.say_as_unknown_and_wait(
              '但你很快就会明白……自由也是有代价的。',
            );
            await me.say_as_unknown_and_wait(
              '监狱将伴你同行……这具肉体将是你永恒的惩戒。',
            );
            await me.say_as_unknown_and_wait(
              '赎罪即将开始——如果不想遭受更多，就努力奔跑吧。',
            );
            await me.say_as_unknown_and_wait(
              `${me.actual_name} 小姐——自由在召唤你。`,
            );
            await me.say_as_unknown_and_wait('希望不会再见了。');
            era.setWidth(24);
            era.setOffset(0);
            era.println();
            if (era.get('cflag:0:种族')) {
              await era.printAndWait([me.get_colored_name(), ' 遭受了改造！']);
            } else {
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
              await era.printAndWait([
                me.get_colored_name(),
                ' 被转变为了马娘！',
              ]);
              await era.printAndWait([
                me.get_colored_name(),
                ' 仍然可以招募马娘，训练她们，陪伴她们奔跑，但不再享有特雷森下发的工资。',
              ]);
              await era.printAndWait([
                '相应的，',
                me.get_colored_name(),
                ' 可以进行自主训练，参与赛事，并赢取奖金和社会声望。',
              ]);
            }
            await era.printAndWait('声望再次低于零，会遭受更严厉的惩罚！');
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
            era.setOffset(6);
            era.setWidth(12);
            await era.printAndWait('性 奴 宣 言', {
              align: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              isParagraph: true,
            });
            await era.printAndWait(
              `本母马 ${me.actual_name} 自愿成为马娘大人们的奴隶，`,
            );
            await era.printAndWait(
              '将身心调整至取悦主人们的最优状态，永远放弃所有人权，',
            );
            await era.printAndWait(
              '从此接受主人们的一切调教，服从主人们的一切指令，绝不产生任何异议。',
            );
            era.setOffset(13);
            era.setWidth(5);
            era.setAlign('center');
            era.print(me.actual_name);
            era.print(`<${me.name} 的唇印>`);
            era.print(`<${me.name} 的乳头印>`);
            await era.printAndWait(`<${me.name} 的阴唇印>`);
            await era.printAndWait(date_indicator());
            era.setAlign('left');
            era.setOffset(0);
            era.setWidth(24);
            era.println();
            await era.printAndWait(
              `被自愿签署这样的宣言后，${me.name} 被改造成了马娘们的性奴！`,
            );
            await era.printAndWait(
              `${me.name} 仍然可以招募马娘，训练她们，陪伴她们奔跑，自主训练，参与赛事。`,
            );
            await era.printAndWait(
              `但 ${me.name} 更重要的职责是供她们发泄性欲！`,
            );
            await era.printAndWait(
              `${me.name} 的身体已经被调整到敏感度绝佳的状态，请继续精进自己的性能力，取悦主人们，以获取声望吧！`,
            );
            await era.printAndWait('声望再次低于零，会遭受更严厉的惩罚！');
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
            era.setOffset(6);
            era.setWidth(12);
            await me.say_as_unknown_and_wait(
              '没有想到过你竟然能堕落到这个地步。',
            );
            await me.say_as_unknown_and_wait(
              '你的手里曾经把握着从谷底攀回地面的绳索。',
            );
            await me.say_as_unknown_and_wait('但你竟将救命索弃之不顾。');
            await me.say_as_unknown_and_wait(
              '事到如今，我甚至有点怀疑你就是故意放任自流，让一切都变得无法挽回。',
            );
            await me.say_as_unknown_and_wait(
              '毕竟，我们已经给予你那么多次保留人权的机会。',
            );
            await me.say_as_unknown_and_wait('不过现在的你恐怕也听不见了吧。');
            await me.say_as_unknown_and_wait(
              `那么再见了，${me.actual_name} 小姐。`,
            );
            await me.say_as_unknown_and_wait([
              {
                color: buff_colors[3],
                content: 'GAME OVER',
                fontWeight: 'bold',
              },
            ]);
            era.setWidth(24);
            era.setOffset(0);
            era.println();
            await era.printAndWait(`繁殖用马娘，这就是 ${me.name} 的末路。`);
            await era.printAndWait(
              '过去的壮志随风飘散，曾经的理想被无情击碎。',
            );
            await era.printAndWait(
              `从今以后 ${me.name} 的职责便是用短小肉棒取悦高贵的马娘，用劣等小穴容纳神圣的因子，与她们诞下优秀的后代！`,
            );
            await era.printAndWait(
              `虽然人权已离 ${me.name} 远去，但还请作为孕袋继续精进。`,
            );
            await era.printAndWait(
              `假如足够幸运的话，也许 ${me.name} 还能凭子而贵！`,
            );
            sys_add_titles(0, { c: buff_colors[2], n: 's_p_preg' });
        }
        sys_filter_chara('cflag', '招募状态', recruit_flags.yes).forEach(
          (e) => {
            get_custom_mec(e).set_callname();
            get_custom_check(e).check_after_punish(punish_level);
          },
        );
      } else {
        era.drawLine();
        const me = get_chara_talk(0);
        if (era.get('flag:当前位置') === location_enum.basement) {
          if (
            await select_yes_or_no(
              [
                me.get_colored_name(),
                ' 在地下室中迎来了结局……',
                { isBr: true },
                '要查看地下室结局吗？',
              ],
              '直面惨淡',
              '呱我不要看',
            )
          ) {
            await get_custom_daily(basement_owners.get(0)).basement_end();
          }
          global_achievement.end_lov = 1;
          saying_arr = basement_saying_arr;
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
    era.print('GAME OVER', {
      align: 'center',
      color: buff_colors[3],
      fontSize: '3rem',
      fontWeight: 'bold',
      isParagraph: true,
    });
    await era.printAndWait(get_random_entry(saying_arr), {
      align: 'center',
    });
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

module.exports = game_over;
