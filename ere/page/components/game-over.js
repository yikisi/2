const era = require('#/era-electron');

const sys_add_titles = require('#/system/chara/sys-add-titles');
const sys_call_check = require('#/system/script/sys-call-check');
const sys_call_daily_event = require('#/system/script/sys-call-daily-script');
const sys_call_edu_event = require('#/system/script/sys-call-edu-script');
const sys_call_mec = require('#/system/script/sys-call-mec');
const { sys_get_billings } = require('#/system/sys-calc-base-cflag');
const sys_filter_chara = require('#/system/sys-filter-chara');

const print_event_name = require('#/event/snippets/print-event-name');

const CharaTalk = require('#/utils/chara-talk');
const { get_random_entry } = require('#/utils/list-utils');

const { buff_colors } = require('#/data/color-const');
const { slavery_enum } = require('#/data/ero/sex-mark-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const check_stages = require('#/data/event/check-stages');
const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');

async function game_over() {
  const game_over = era.get('flag:游戏结束');
  let end_talk = false,
    saying_arr,
    temp;
  if (game_over === 3 && era.get('flag:当前位置') === location_enum.basement) {
    era.drawLine();
    await sys_call_daily_event(
      era.get('flag:地下室之主'),
      event_hooks.basement_end,
    );
    saying_arr = [
      '九尺二间陋室里，红唇依竹共恩情。——高杉晋作',
      '每一个被束缚的奴隶都可以靠着他自己的手脱掉锁链。——莎士比亚',
      '我已不再孤单，如今我生命中的挚爱与我如此靠近。——悲惨世界',
      '自由不是随心所欲，而是不必身不由己。——康德',
      '金钱、赛马娘、女人，男生永远搞不懂这三件事。——威尔・罗杰斯',
    ];
  } else if (
    game_over >= 2 &&
    era.get('flag:当前马币') < 0 &&
    (temp = sys_get_billings()[0]).creditor
  ) {
    era.drawLine();
    await sys_call_daily_event(temp.creditor, event_hooks.slave_end);
    saying_arr = [
      '九尺二间陋室里，红唇依竹共恩情。——高杉晋作',
      '金钱、赛马娘、女人，男生永远搞不懂这三件事。——威尔・罗杰斯',
      '一文钱难倒英雄汉。——李绿园',
      '每一个被束缚的奴隶都可以靠着他自己的手脱掉锁链。——莎士比亚',
      '我已不再孤单，如今我生命中的挚爱与我如此靠近。——悲惨世界',
    ];
  } else if (
    game_over &&
    (temp = get_random_entry(
      era.set(
        'flag:极端粉丝',
        era.get('flag:极端粉丝').filter((e) => e),
      ),
    ))
  ) {
    era.drawLine();
    await sys_call_edu_event(temp, event_hooks.crazy_fan_end);
    saying_arr = [
      '日蚀当先，万物无光。——丹尼斯・奥凯利',
      '杜鹃不鸣则杀之。——织田信长',
      '探案过程中，我是最后的、最高的上诉法庭。——福尔摩斯',
      '世以成败论人物，故操得在英雄之列。——苏轼',
      '拥有一位伟大的赛马娘，就拥有了最伟大的宝座。——丘吉尔',
    ];
  } else {
    let punish_level = era.get('flag:惩戒力度');
    if (
      punish_level < 3 &&
      (era.get('flag:当前声望') < 0 || era.get('flag:彩蛋机制') === 179)
    ) {
      if (era.get('flag:声望不足替换')) {
        punish_level = era.add('flag:惩戒力度', 1);
        let jpy = era.get('flag:当前马币');
        switch (punish_level) {
          case 1:
            era.set('cflag:0:性别', 10);
            era.set('cflag:0:阴茎尺寸', 1);
            era.set('cflag:0:阴道尺寸', 1);
            era.set('cflag:0:胸围', Math.floor(era.get('cflag:0:身高') * 0.51));
            era.set('cflag:0:腰围', Math.floor(era.get('cflag:0:身高') * 0.34));
            era.set(
              'cflag:0:臀围',
              Math.floor(era.get('cflag:0:身高') * 0.542),
            );
            era.set('cflag:0:下胸围', era.get('cflag:0:胸围') - 15);
            era.set('cflag:0:种族', 1);
            era.set('maxbase:0:速度', 1200);
            era.set('maxbase:0:耐力', 1200);
            era.set('maxbase:0:力量', 1200);
            era.set('cflag:0:育成回合计时', era.get('flag:当前回合数'));
            era.set('flag:当前声望', era.get('global:初始声望增加量') + 100);
            CharaTalk.me = new CharaTalk(0);
            jpy > 0 && era.add('flag:当前马币', -Math.floor(jpy / 2));
            era
              .getAddedCharacters()
              .filter((e) => e)
              .forEach((e) =>
                sys_call_mec(e, check_stages.mec_callname_customize),
              );

            era.drawLine();
            await era.printAndWait(
              '？？？「据说，人在被剥夺了自由后……才能真正了解自己。」',
              {
                offset: 6,
                width: 12,
              },
            );
            await era.printAndWait('？？？「那么……你有多了解自己呢？」', {
              offset: 6,
              width: 12,
            });
            await era.printAndWait(
              `？？？「${CharaTalk.me.actual_name}……怠惰，傲慢${
                era.get('flag:变态行为') ? '，色欲' : ''
              }，今天……你获得了新生。」`,
              {
                offset: 6,
                width: 12,
              },
            );
            await era.printAndWait(
              '？？？「但你很快就会明白……自由也是有代价的。」',
              {
                offset: 6,
                width: 12,
              },
            );
            await era.printAndWait(
              '？？？「监狱将伴你同行……这具肉体将是你永恒的惩戒。」',
              {
                offset: 6,
                width: 12,
              },
            );
            await era.printAndWait(
              '？？？「赎罪即将开始——如果不想遭受更多，就努力奔跑吧。」',
              {
                offset: 6,
                width: 12,
              },
            );
            await era.printAndWait(
              `？？？「${CharaTalk.me.actual_name} 小姐——自由在召唤你。」`,
              {
                offset: 6,
                width: 12,
              },
            );
            await era.printAndWait('？？？「希望不会再见了。」', {
              offset: 6,
              width: 12,
            });
            era.println();
            await era.printAndWait(`${CharaTalk.me.name} 被转变为了马娘！`);
            await era.printAndWait(
              `${CharaTalk.me.name} 仍然可以招募马娘，训练她们，陪伴她们奔跑，但不再享有特雷森下发的工资。`,
            );
            await era.printAndWait(
              `相应的，${CharaTalk.me.name} 可以进行自主训练，参与赛事，并赢取奖金和社会声望。`,
            );
            await era.printAndWait('声望再次低于零，会遭受更严厉的惩罚！');
            break;
          case 2:
            new Array(3).fill(0).forEach((_, i) => {
              era.set(`talent:0:${i + 1000}`, 2);
              era.set(`talent:0:${i + 1004}`, 2);
            });
            new Array(4)
              .fill(0)
              .forEach((_, i) => era.set(`talent:0:${i + 1010}`, 1));
            era.set(`talent:0:1015`, 1);
            era.set(`talent:0:1016`, 1);
            new Array(4)
              .fill(0)
              .forEach((_, i) => era.set(`talent:0:${i + 1064}`, 1));
            era.set('talent:0:抖S', 0);
            era.set('talent:0:喜欢责骂', 1);
            era.set('talent:0:喜欢痛苦', 1);
            era.set('talent:0:乳头类型', 2);
            era.set('talent:0:泌乳', 3);
            era.set('flag:当前声望', era.get('global:初始声望增加量') + 100);
            jpy > 0 && era.set('flag:当前马币', 0);
            era.set('mark:0:淫纹', 3);

            era.drawLine();
            await era.printAndWait('性 奴 宣 言', {
              align: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              isParagraph: true,
            });
            await era.printAndWait(
              `本母马 ${CharaTalk.me.actual_name} 自愿成为马娘大人们的奴隶，`,
              {
                offset: 6,
                width: 12,
              },
            );
            await era.printAndWait(
              '将身心调整至取悦主人们的最优状态，永远放弃所有人权，',
              {
                offset: 6,
                width: 12,
              },
            );
            await era.printAndWait(
              '从此接受主人们的一切调教，服从主人们的一切指令，绝不产生任何异议。',
              {
                offset: 6,
                width: 12,
              },
            );
            era.print(CharaTalk.me.actual_name, {
              align: 'center',
              offset: 14,
              width: 4,
            });
            era.print(`<${CharaTalk.me.name} 的唇印>`, {
              align: 'center',
              offset: 14,
              width: 4,
            });
            era.print(`<${CharaTalk.me.name} 的乳头印>`, {
              align: 'center',
              offset: 14,
              width: 4,
            });
            await era.printAndWait(`<${CharaTalk.me.name} 的阴唇印>`, {
              align: 'center',
              offset: 14,
              width: 4,
            });
            await era.printAndWait(
              `${era.get('flag:当前年')} 年 ${era.get(
                'flag:当前月',
              )} 月 第 ${era.get('flag:当前周')} 周`,
              {
                align: 'center',
                offset: 14,
                width: 4,
              },
            );
            era.println();
            await era.printAndWait(
              `被自愿签署这样的宣言后，${CharaTalk.me.name} 被改造成了马娘们的性奴！`,
            );
            await era.printAndWait(
              `${CharaTalk.me.name} 仍然可以招募马娘，训练她们，陪伴她们奔跑，自主训练，参与赛事。`,
            );
            await era.printAndWait(
              `但 ${CharaTalk.me.name} 更重要的职责是供她们发泄性欲！`,
            );
            await era.printAndWait(
              `${CharaTalk.me.name} 的身体已经被调整到敏感度绝佳的状态，请继续精进自己的性能力，取悦主人们，以获取声望吧！`,
            );
            await era.printAndWait('声望再次低于零，会遭受更严厉的惩罚！');
            sys_add_titles(0, { c: buff_colors[2], n: '万人骑' });
            break;
          case 3:
            era.set('equip:0:淫纹奴役', slavery_enum.pregnant);
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
            await era.printAndWait(
              '？？？「没有想到过你竟然能堕落到这个地步。」',
              {
                offset: 6,
                width: 12,
              },
            );
            await era.printAndWait(
              '？？？「你的手里曾经把握着从谷底攀回地面的绳索。」',
              {
                offset: 6,
                width: 12,
              },
            );
            await era.printAndWait('？？？「但你竟将救命索弃之不顾。」', {
              offset: 6,
              width: 12,
            });
            await era.printAndWait(
              '？？？「事到如今，我甚至有点怀疑你就是故意放任自流，让一切都变得无法挽回。」',
              {
                offset: 6,
                width: 12,
              },
            );
            await era.printAndWait(
              '？？？「毕竟，我们已经给予你那么多次保留人权的机会。」',
              {
                offset: 6,
                width: 12,
              },
            );
            await era.printAndWait('？？？「不过现在的你恐怕也听不见了吧。」', {
              offset: 6,
              width: 12,
            });
            await era.printAndWait(
              `？？？「那么再见了，${CharaTalk.me.actual_name} 小姐。」`,
              {
                offset: 6,
                width: 12,
              },
            );
            await era.printAndWait('？？？「GAME OVER」', {
              color: buff_colors[3],
              fontWeight: 'bold',
              offset: 6,
              width: 12,
            });
            era.println();
            await era.printAndWait(
              `繁殖用马娘，这就是 ${CharaTalk.me.name} 的末路。`,
            );
            await era.printAndWait(
              '过去的壮志随风飘散，曾经的理想被无情击碎。',
            );
            await era.printAndWait(
              `从今以后 ${CharaTalk.me.name} 的职责便是用短小肉棒取悦高贵的马娘，用劣等小穴容纳神圣的因子，与她们诞下优秀的后代！`,
            );
            await era.printAndWait(
              `虽然人权已离 ${CharaTalk.me.name} 远去，但还请作为孕袋继续精进。`,
            );
            await era.printAndWait(
              `假如足够幸运的话，也许 ${CharaTalk.me.name} 还能凭子而贵！`,
            );
            sys_add_titles(0, { c: buff_colors[2], n: '孕179' });
        }
        sys_filter_chara('cflag', '招募状态', recruit_flags.yes).forEach(
          (e) => {
            sys_call_mec(e, check_stages.mec_callname_customize);
            sys_call_check(e, check_stages.after_punish, {
              level: punish_level,
            });
          },
        );
      } else {
        era.drawLine();

        if (era.get('flag:变态行为')) {
          for (const e of [
            `${CharaTalk.me.name} 忽视了成年人的社会责任，唆使负责马娘进行变态行为的事情败露，哪怕是特雷森也无法为 ${CharaTalk.me.name} 掩盖过去。`,
            `最终校方勒令 ${CharaTalk.me.name} 与负责马娘解除契约，进行移籍。`,
            `因社会评价过低而被解雇的 ${CharaTalk.me.name}，迎来了结局……`,
          ]) {
            await era.printAndWait(e, {
              offset: 6,
              width: 12,
            });
          }
          await print_event_name(
            [{ content: '身败名裂', color: buff_colors[3] }],
            CharaTalk.me,
            undefined,
            6,
          );
          saying_arr = [
            '人变得真正低劣时，除了高兴别人的不幸外，已无其他乐趣可言。——歌德',
            '自由不是随心所欲，而是不必身不由己。——康德',
            '我是自己最大的敌人。——拿破仑',
            '金钱、赛马娘、女人，男生永远搞不懂这三件事。——威尔・罗杰斯',
            '每一个被束缚的奴隶都可以靠着他自己的手脱掉锁链。——莎士比亚',
          ];
        } else {
          for (const e of [
            `${CharaTalk.me.name} 或许是你过于懈怠，又或许是负责马娘的天赋不足，胜利与你们始终遥遥无期。`,
            `${CharaTalk.me.get_couple_title()} 不管如何努力都无济于事，最终校方勒令 ${
              CharaTalk.me.name
            } 与负责马娘解除契约，进行移籍。`,
            `因社会评价过低而被解雇的 ${CharaTalk.me.name}，迎来了结局……`,
          ]) {
            await era.printAndWait(e, {
              offset: 6,
              width: 12,
            });
          }
          await print_event_name(
            [{ content: '扫地出门', color: buff_colors[3] }],
            CharaTalk.me,
            undefined,
            6,
          );
          saying_arr = [
            '金钱、赛马娘、女人，男生永远搞不懂这三件事。——威尔・罗杰斯',
            '拥有一位伟大的赛马娘，就拥有了最伟大的宝座。——丘吉尔',
            '世以成败论人物，故操得在英雄之列。——苏轼',
            '日蚀当先，万物无光。——丹尼斯・奥凯利',
            '我是自己最大的敌人。——拿破仑',
          ];
        }
        end_talk = true;
      }
    }
  }
  if (saying_arr) {
    era.print('GAME OVER', {
      align: 'center',
      color: buff_colors[3],
      fontSize: '48px',
      fontWeight: 'bold',
      isParagraph: true,
    });
    await era.printAndWait(get_random_entry(saying_arr), {
      align: 'center',
    });
    if (end_talk) {
      era.println();
      for (const chara_id of sys_filter_chara(
        'cflag',
        '招募状态',
        recruit_flags.yes,
      )) {
        chara_id &&
          (await sys_call_daily_event(chara_id, event_hooks.end_talk));
      }
    }
    return true;
  }
  era.set('flag:极端粉丝', []);
  return false;
}

module.exports = game_over;
