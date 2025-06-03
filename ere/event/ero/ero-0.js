/**
 * @file 玩家 - 调教
 * @author 幽白書
 * @author 雞雞
 * @author 无名黑奴
 */
const era = require('#/era-electron');

const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

const common_pregnant_report_in_love = require('#/event/ero/common-lines/common-pregnant-report-in-love');
const kojo = require('#/event/ero/ero-0.kojo');
const CustomizedEro = require('#/event/ero/ero-common');
const add_juel_out_of_train = require('#/event/snippets/add-juel-out-of-train');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const { part_enum } = require('#/data/ero/part-const');
const {
  penis_desc,
  unexpected_pregnant_enum,
} = require('#/data/ero/status-const');
const { ero_hooks } = require('#/data/event/ero-hooks');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');

const stop_ex_options = {};
stop_ex_options[part_enum.virgin] = (chara_id) =>
  `射到 ${era.get(`callname:${chara_id}:-2`)} 身上！`;
stop_ex_options[part_enum.mouth] = (chara_id, is_double_blow_job) => {
  return `射到 ${era.get(`callname:${chara_id}:-2`)}${
    is_double_blow_job
      ? ` 与 ${era.get(`callname:${era.get('tflag:当前助手')}:-2`)}`
      : ''
  } 脸上！`;
};

module.exports = class extends CustomizedEro {
  /** @author 雞雞 */
  become_erect(chara, me, callname, hook, extra_flag) {
    if (extra_flag.part === part_enum.penis) {
      const last_action = era.get('tflag:前回行动');
      if (
        last_action === ero_hooks.ask_double_blow_job ||
        last_action === ero_hooks.double_blow_job ||
        last_action === ero_hooks.ask_double_tit_job ||
        last_action === ero_hooks.double_tit_job
      ) {
        era.print([
          '在 ',
          get_chara_talk(
            era.get('tcvar:0:阴茎接触部位').owner,
          ).get_colored_name(),
          ' 与 ',
          get_chara_talk(era.get('tflag:前回助手')).get_colored_name(),
          ' 的侍奉下，',
          get_chara_talk(0).get_colored_name(),
          ` ${penis_desc[get_penis_size(0)]} 的肉棒很快就一柱擎天了。`,
        ]);
        return;
      }
    }
    super.become_erect(chara, me, callname, hook, extra_flag);
  }

  /**
   * 只有醒着的主控才能寸止，所以这里必然是需要输出的
   * @author 无名黑奴
   */
  async orgasm_denial(stop_success) {
    const me = get_chara_talk(0),
      touch = era.get('tcvar:0:阴茎接触部位'),
      last_action = era.get('tflag:前回行动'),
      is_double_blow_job =
        last_action === ero_hooks.ask_double_blow_job ||
        last_action === ero_hooks.double_blow_job;
    era.printMultiColumns([
      {
        content: [me.get_colored_name(), ' 的肉棒已经达到极限……'],
        type: 'text',
      },
      ...[
        '射了！',
        '再忍一下',
        !era.get('tcvar:0:避孕套') && stop_ex_options[touch.part]
          ? stop_ex_options[touch.part](touch.owner, is_double_blow_job)
          : '',
      ]
        .filter((e) => e)
        .map((e, i, l) => ({
          accelerator: i,
          config: { align: 'center', width: 24 / l.length },
          content: e,
          type: 'button',
        })),
    ]);
    const ret = await era.input();
    if (ret) {
      // 寸止但没忍住
      if (!stop_success) {
        era.print([get_chara_talk(0).get_colored_name(), ' 的忍耐失败了！']);
      } else if (ret === 2) {
        // 忍住了且换目标
        const touched_part = era.get('tcvar:0:阴茎接触部位');
        if (touched_part !== -1) {
          const curr_supporter = era.get('tflag:当前助手');
          era.print([
            me.get_colored_name(),
            ' 拔出阴茎对准 ',
            get_chara_talk(touched_part.owner).get_colored_name(),
            ...(is_double_blow_job
              ? [' 与 ', get_chara_talk(curr_supporter).get_colored_name()]
              : []),
            ` 的 ${touch.part === part_enum.virgin ? '玉体' : '俏脸'}`,
          ]);
        }
      } else {
        // 寸止成功
        era.print([me.get_colored_name(), ' 暂时忍住了射精冲动……']);
      }
    }
    return ret;
  }

  /**
   * @author 幽白書
   * @author 雞雞
   */
  async report_pregnant_between_weeks(father, mother, callname, hook) {
    const love = era.get(`love:${mother.id || father.id}`),
      unexpected_pregnant = LifeEventMarks.get_marks(
        mother.id,
      ).unexpected_pregnant;
    era.drawLine();
    if (love >= 90) {
      await common_pregnant_report_in_love(father, mother, unexpected_pregnant);
    } else {
      const is_p_slave = era.get('flag:惩戒力度');
      await print_event_name(is_p_slave === 3 ? '职责' : '意外', mother);
      if (is_p_slave >= 2) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 盯着 ',
          {
            content: '小腹淫纹上代表怀孕的图案',
            color: buff_colors[2],
          },
          '，冲到卫生间呕吐了起来。',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 盯着 ',
          {
            content: '手上的验孕棒',
            color: buff_colors[2],
          },
          '，又一次在洗手台上吐了出来。',
        ]);
      }
      if (is_p_slave === 3) {
        hook.override = true;
        await era.printAndWait([
          '对这个打乱步调的小生命，',
          mother.get_colored_name(),
          ' 决定——',
        ]);
        era.printButton('欢喜地期待到来 (顺从因子+200 父方好感+150)', 1);
        era.printButton('无奈地接受事实 (受虐因子+200 父方好感+50)', 2);
        const ret = await era.input();
        if (ret === 1) {
          await era.printAndWait([mother.get_colored_name(), ' 欣喜地畅想着']);
          await era.printAndWait('有了孩子之后的未来、孩子出生之后的教育……');
          await era.printAndWait([
            '但是，在 ',
            mother.get_colored_name(),
            ' 心中最值得思考的，果然还是',
          ]);
          era.println();
          await era.printAndWait('孩子的父亲会是谁呢？');
          await era.printAndWait(
            `是前几天那个输掉了比赛，在自己的全身留下齿痕作为泄愤的${father.get_uma_sex_title()}？`,
          );
          await era.printAndWait(
            `还是那个赢下比赛，高兴的甚至在自己的子宫里尿出来的${father.get_uma_sex_title()}？`,
          );
          if (
            sys_filter_chara('cflag', '招募状态', recruit_flags.yes).filter(
              (e) => era.get(`cflag:${e}:育成回合计时`) < 3 * 48,
            ).length > 0
          ) {
            await era.printAndWait(
              `\n又或者，是那每天的训练时间都会先在自己的小穴内舒服的把一整天的存货灌进来，让自己夹着时不时滴落在走廊上的白浆到训练场上的负责${father.get_uma_sex_title()}？`,
            );
          }
          if (
            sys_filter_chara('cflag', '孩子母亲', 0).filter(
              (e) => era.get(`cflag:${e}:成长阶段`) >= 2,
            ).length > 0
          ) {
            await era.printAndWait(
              '\n又或者，是明明印象中还只是个孩子，却仿佛还记得怎么从妈妈的肚子里出来的一般，每次都能把没用的妈妈操成阿嘿颜母猪的贴心小棉袄？',
            );
          }
          await era.printAndWait('\n无论是谁，新生命的诞生总是令人欢喜');
          await era.printAndWait([
            '不过，最令 ',
            mother.get_colored_name(),
            ' 担心的果然还是……',
          ]);
          era.println();

          await mother.say_and_wait('孩子出生前，身为孕袋的职责……', true);

          await era.printAndWait([
            { isBr: true },
            '还没来得及完整的想完一句话，从身后传来的冲击便打断了 ',
            mother.get_colored_name(),
            ' 的思绪',
          ]);
          await era.printAndWait(
            `对方毫不在意自己的意愿，甚至连确认一下下体是否湿润都没有———当然，由于肉体改造所以也无需确认，反正二十四小时都是湿润着欢迎${father.get_uma_sex_title()}大人的使用———就直接插入`,
          );
          await era.printAndWait([
            '在猛烈的撞击，将 ',
            mother.get_colored_name(),
            ' 操到几乎失去意识后，身后的',
            father.get_uma_sex_title(),
            '才好不容易射了出来，用 ',
            mother.get_colored_name(),
            ' 的脸擦了擦肉棒后直接转身离去',
          ]);
          await era.printAndWait([
            '过程中 ',
            mother.get_colored_name(),
            ' 甚至不知道对方长什么样子',
          ]);

          await era.printAndWait('\n不说自己已经怀孕');
          await era.printAndWait(
            `哪怕自己已经大腹便便，对${father.get_uma_sex_title()}主人而言，也就是多了个可以玩弄的部位而已吧`,
          );
          await era.printAndWait([
            '领悟了这点的 ',
            mother.get_colored_name(),
            '，下体又忍不住一阵痉挛，无法控制的潮吹在阳光下竟生成了彩虹，仿佛在恭贺着自己的怀孕一般',
          ]);
        } else {
          await era.printAndWait('没有什么好意外的');
          await era.printAndWait(
            '———每天就连上个厕所都会被五六根肉棒堵在门外，最后只能自己将混杂着潮水、精液以及失禁的尿液的地板仔细舔舐干净的生活，怀孕真的有那么难以想像吗？',
          );
          await era.printAndWait('孩子的父亲是谁呢？');
          await era.printAndWait([mother.get_colored_name(), ' 又忍不住想到']);
          await era.printAndWait(
            `是昨天那对关系看起来很好，连使用孕袋都是一起用的两名${father.get_uma_sex_title()}？`,
          );
          await era.printAndWait(
            '还是那只在自己面前誓师的队伍里的谁，将自己从里到外每个洞口射满，连吐出的气息都带着浓精味……最后还必须将身上的精液一点点舔入口中和塞进小穴——说不定就是这时怀上的',
          );

          await era.printAndWait([
            { isBr: true },
            '不知不觉，',
            mother.get_colored_name(),
            ' 的心中莫名因孩子的未来感到恐惧和害怕',
          ]);
          if (
            sys_filter_chara('cflag', '孩子母亲', 0).filter(
              (e) => era.get(`cflag:${e}:成长阶段`) >= 2,
            ).length > 0
          ) {
            await era.printAndWait(
              `\n想起那孩子小时候的事，仿佛才没过去多久，${
                father.sex
              }就已经从眼神纯真的幼儿，变成会以带着性欲的目光盯着自己诞生的洞口的${
                father.sex_code - 1 ? '雌' : '雄'
              }兽`,
            );
            await era.printAndWait([
              mother.get_colored_name(),
              ` 忍不住担心起，自己是否会再度被${
                father.sex_code - 1 ? '女儿' : '儿子'
              }玩弄成无法称为人母的羞耻模样`,
            ]);
          } else {
            await era.printAndWait(
              `\n将被生下来的这孩子，会不会变得像其他${father.get_uma_sex_title()}们一样，将自己当成孕袋`,
            );
            await era.printAndWait(
              '……不行，必须要尽起职责，最起码，要好好将这孩子养育成材',
            );
          }

          await era.printAndWait(
            '\n由孕袋培养出的孩子，真的有办法正常成人吗？',
          );
          await era.printAndWait(
            `天天看着自己的妈妈被各式各样的${
              father.sex_code - 1 ? '姐姐' : '哥哥'
            }肏到涕沫横流，毫无尊严的求饶的模样`,
          );
          await era.printAndWait(
            '这样的孩子，真的有可能不屈不挠的茁壮成长吗？',
          );
          await era.printAndWait('然而，也没什么好嘲笑的');
          await era.printAndWait([
            `毕竟现在又被路过厕所的小学部${father.get_uma_sex_title()}按在地上服侍肉棒的 `,
            mother.get_colored_name(),
            '，也只能将希望放在如此微薄的光芒上了',
          ]);
        }
        era.println();
        if (ret === 1) {
          await add_juel_out_of_train(0, '顺从', 1000);
          sys_like_chara(
            father.id,
            0,
            150,
            unexpected_pregnant !== unexpected_pregnant_enum.mother_sleep,
          );
        } else {
          await add_juel_out_of_train(0, '受虐快感', 200);
          sys_like_chara(
            father.id,
            0,
            50,
            unexpected_pregnant !== unexpected_pregnant_enum.mother_sleep,
          );
        }
        await era.waitAnyKey();
      } else if (
        unexpected_pregnant === unexpected_pregnant_enum.mother_sleep
      ) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 对自己如何怀孕完全没有印象，一想到谁都有可能是犯人就让 ',
          mother.get_colored_name(),
          ' 为之胆寒……',
        ]);
        if (mother.sex_code > 0) {
          await era.printAndWait([
            '……而且明明 ',
            mother.get_colored_name(),
            ' 可以成为父亲的……',
          ]);
        }
      } else {
        await era.printAndWait([
          '在短暂的慌乱后，',
          mother.get_colored_name(),
          ' 还是决定向 ',
          father.get_colored_name(),
          ' 报告消息',
        ]);
        if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
          await era.printAndWait([
            father.get_colored_name(),
            ' 再三询问确认，还是得到了孩子是自己骨肉的回答。',
          ]);
          await era.printAndWait([
            '但 ',
            father.get_colored_name(),
            ' 对此毫无印象……',
          ]);
        } else {
          await era.printAndWait([
            ' 在同样的惊慌后，平静下来的 ',
            father.get_colored_name(),
            ' 向 ',
            mother.get_colored_name(),
            ' 承诺一定会负起父亲的责任……',
          ]);
        }
      }
    }
  }

  /**
   * @author 幽白書
   * @author 雞雞
   */
  async have_baby(father, mother) {
    const is_slave = era.get('flag:惩戒力度') === 3;
    if (
      era.get(`cflag:${father.id}:母方角色`) === 0 &&
      LifeEventMarks.get_marks(0).unexpected_pregnant !==
        unexpected_pregnant_enum.mother_sleep &&
      !is_slave
    ) {
      const dict = { id: father.id };
      dict['玩家名'] = mother.name;
      dict['角色名'] = father.name;
      await kojo['乱伦生子'](dict);
    } else if (era.get(`love:${father.id}`) < 90) {
      era.drawLine();
      await print_event_name('新生命', mother);
      await era.printAndWait([mother.get_colored_name(), ' 抱起了孩子——']);
      if (is_slave) {
        if (
          LifeEventMarks.get_marks(0).unexpected_pregnant ===
          unexpected_pregnant_enum.mother_sleep
        ) {
          era.printButton('慈爱地轻抚', 1);
          era.printButton('无声地反抗', 2);
          if ((await era.input()) === 1) {
            await era.printAndWait([
              mother.get_colored_name(),
              ' 的心中满是疼爱',
            ]);
            await era.printAndWait('孩子的父亲是谁已经不重要了');
            await era.printAndWait([
              '甚至不如说，只是进行孕袋的例行工作，就能获得如此可爱的孩子……',
              mother.get_colored_name(),
              ' 不禁在心中，对那未曾谋面的孩子父亲道了声谢',
            ]);
            await era.printAndWait('接下来，一定要好好的把这孩子养育成材……');
            await era.printAndWait([
              '不知不觉间，曾经在 ',
              mother.get_colored_name(),
              ' 心中的，身为训练员的责任感和荣誉感渐渐萌芽……',
            ]);

            era.printButton('「！」', 1);
            await era.input();

            await era.printAndWait([
              '忽然的水流，将 ',
              mother.get_colored_name(),
              ' 从幻想中沖醒',
            ]);
            await era.printAndWait(
              '被抱起的孩子朝着自己的母亲洒出了人生中的第一泡尿',
            );
            await era.printAndWait([
              '被自己的孩子当成便所，即便只是意外，这都使 ',
              mother.get_colored_name(),
              ` 感到无比的快感，仿佛自己便是为了让这孩子能够将自己当成厕所使用才将${father.sex}生下的`,
            ]);
            await era.printAndWait([
              mother.get_colored_name(),
              ' 温柔地帮孩子舔干净了尿出尿液的私处，接着将洒在自己身上的液体全部干干凈凈沾进口中，满足的舔了舔手指',
            ]);
            era.println();

            await era.printAndWait(
              '如此下贱的模样，哪怕最低等的孕袋也不过如此',
            );
            await era.printAndWait('这样的自己，怎么还有可能回到原来的生活');
            await era.printAndWait('又怎么能够忍受回到那样的生活');
            await era.printAndWait([
              mother.get_colored_name(),
              ' 温柔的看着怀中的孩子，表情依旧',
            ]);
            await era.printAndWait('但心中想的已然不同');
            await era.printAndWait(
              '————该怎么做，才能将这孩子养育成最适合调教自己的主人呢？',
            );
          } else {
            await era.printAndWait(
              '对这个孩子，理论上身为母亲应该要有的感情都变得淡漠',
            );
            await era.printAndWait('明明知道，刚出生的孩子是无罪的……');

            era.printButton('「！」', 1);
            await era.input();

            await era.printAndWait([
              '忽然，',
              mother.get_colored_name(),
              ' 发出一声惊呼',
            ]);
            await era.printAndWait([
              '孩子的第一泡尿仿佛瞄准了角度一般，顿时喷洒而出，淋了 ',
              mother.get_colored_name(),
              ' 一脸',
            ]);
            await era.printAndWait(
              '护士也发出了善意的笑声，仿佛是为了孩子的健康而喜悦',
            );
            await era.printAndWait([
              '但 ',
              mother.get_colored_name(),
              ' 的心中却毫无喜色，脑海中回想起了那些过往',
            ]);
            era.println();

            await era.printAndWait([
              '早上被迫双腿岔开蹲坐，张口为没睡醒的',
              father.get_uma_sex_title(),
              '处理晨勃，将',
              father.get_uma_sex_title(),
              '一天的初精和初尿一同吞入腹中的经验',
            ]);
            await era.printAndWait([
              '傍晚，在训练场上就被训练结束的',
              father.get_uma_sex_title(),
              '们恳求处理性欲，将那充满了一整天未能清理的汗臭和尿垢的肉棒含在口中，让',
              father.sex,
              '们将训练的辛劳全数发泄在自己嘴里',
            ]);

            const diff_mark = sys_filter_chara(
              'cflag',
              '招募状态',
              recruit_flags.yes,
            ).reduce(
              (p, c) => {
                if (c > 0 && era.get(`cflag:${c}:成长阶段`) >= 2) {
                  if (
                    era.get(`cflag:${c}:父方角色`) === 0 ||
                    era.get(`cflag:${c}:母方角色`) === 0
                  ) {
                    p.c++;
                  } else {
                    p.s++;
                  }
                }
                return p;
              },
              { c: 0, s: 0 },
            );
            if (diff_mark.s > 0 || diff_mark.c > 0) {
              await era.printAndWait([
                { isBr: true },
                mother.get_colored_name(),
                ' 悲哀的想起前几天的晚上',
              ]);
              await era.printAndWait(
                `哪怕自己的${
                  diff_mark.c > 0 ? '女儿' : `负责${father.get_uma_sex_title()}`
                }梦游到自己房中，半梦半醒间把自己的小穴灌满后再强行撑开自己正处于睡梦中的双唇进行清理，自己都没能醒过来的事`,
              );
              await era.printAndWait([
                { isBr: true },
                mother.get_colored_name(),
                ' 甚至开始怀疑，自己是不是已经习惯起这种生活……',
              ]);
              await era.printAndWait([
                '不行，不能这么想，',
                mother.get_colored_name(),
                ' 惊醒般摇了摇头',
              ]);
            }

            await era.printAndWait('\n……果然，想起的都是痛苦的回忆。但是……');
            await era.printAndWait([
              mother.get_colored_name(),
              ' 看着怀中一无所知，即便尿在自己母亲脸上也不觉得有什么，露出咯咯笑容的孩子',
            ]);
            await era.printAndWait('孩子的天性，是无关善恶的……');
            await era.printAndWait('或许，还能有机会……？');

            await era.printAndWait('\n忘却了孩子对周围行为的学习能力');
            await era.printAndWait(
              `也忘却了孕袋所要服务的对象是无关身份的「全体${father.get_uma_sex_title()}」`,
            );
            await era.printAndWait(
              '没发现一旁的护士已经忍不住想要接受孕袋的口穴侍奉',
            );
            await era.printAndWait(
              '更没发现自己在无意识中舔干净了亲生女儿尿在自己身上的尿液',
            );
            await era.printAndWait([
              mother.get_colored_name(),
              ' 抱着孩子，哪怕被强迫着吮吸护士小姐裙下粗壮的巨物，眼中的光芒也未曾消失',
            ]);
            era.add('exp:0:口交次数', 1);

            await era.printAndWait([
              { isBr: true },
              era
                .getAddedCharacters()
                .filter((e) => era.get(`cflag:${e}:母方角色`) === 0).length > 1
                ? '再一次，'
                : '',
              '怀抱着空虚的梦想，',
              mother.get_colored_name(),
              ' 下定决心这次一定要好好的养育这个孩子',
            ]);
          }
        } else {
          era.printButton('不，我自己也能照顾的来', 1);
          era.printButton('孩子必须有个爸爸', 2);
          if ((await era.input()) === 1) {
            await era.printAndWait([
              mother.get_colored_name(),
              ' 瞪着当初痛快在自己体内释放欲望，毫无责任感的在自己体内中出的 ',
              father.get_colored_name(),
            ]);
            await era.printAndWait(
              `这样的${father.sex}，怎么想也不可能会担起父亲的责任来吧`,
            );
            await era.printAndWait(
              '自己需要的是在饱受侮辱的时候可以扶持自己与孩子，保护孩子的人',
            );
            await era.printAndWait(
              '而不是在自己被当成泄欲工具时，会上来用肉棒堵住最后的发声管道的人渣',
            );

            await era.printAndWait('\n就算只有自己一人，也要照顾好这孩子');
            await era.printAndWait([
              '此刻的 ',
              mother.get_colored_name(),
              '，无疑选择了一条最为艰难的道路',
            ]);

            await era.printAndWait('\n忽然，怀中的孩子发出了哭声');
            await era.printAndWait('是肚子饿了吗？要喝奶吗？');
            await era.printAndWait('那么……现在的自己，这个饱经调教的身体');
            await era.printAndWait(
              `在被吸住乳头的时候，一定会想起对自己的乳头又咬又舔的那些${father.get_uma_sex_title()}们吧`,
            );
            await era.printAndWait(
              '在被含住乳房的瞬间，一定会因为回忆起被爱抚挤奶的那些晚上而瞬间高潮吧',
            );
            await era.printAndWait(
              '甚至，在孩子喝完奶，躺在自己胸间时……会不会想起，那和婴儿体温差不多的肉棒在自己胸前宣示主权，最后在自己口中灌入浓浓白浆的时候呢？',
            );

            await era.printAndWait(
              '\n然后，即便撑过了这些，好不容易将这孩子养育成人…………',
            );
            await era.printAndWait(
              '当孩子，将那还不懂得什么叫作爱，就已经靠着本能明白什么叫做性的眼光投向自己时',
            );
            await era.printAndWait('自己又该如何是好');

            await era.printAndWait('\n眼前的道路，仿佛一片漆黑……');
          } else {
            await era.printAndWait('……无论如何，自己或许可以一个人过');
            await era.printAndWait('但最起码，还是想让孩子有个完整的家庭');

            await era.printAndWait([
              { isBr: true },
              mother.get_colored_name(),
              ` 看向了孩子的父亲，将手上的孩子抱给${father.sex}看`,
            ]);
            await era.printAndWait(
              `希望这个孩子，能够勾起${father.sex}的责任感`,
            );
            await era.printAndWait([
              father.get_colored_name(),
              ' 紧紧地将 ',
              mother.get_colored_name(),
              ' 与孩子抱在怀中，发誓以后会好好对待 ',
              mother.get_colored_name(),
              ' 和孩子',
            ]);
            await era.printAndWait('浪子回头的父亲，以及不离不弃的母亲');
            await era.printAndWait('刚刚那一家三口的幻想，仿佛直接化作了现实');

            await era.printAndWait('\n然而……');
            await era.printAndWait([
              '身为孕袋的职业本能，让 ',
              mother.get_colored_name(),
              ' 没有错过',
            ]);
            await era.printAndWait([
              '在看见自己给婴儿喂奶时，',
              father.get_colored_name(),
              ' 胯下颤动的模样',
            ]);
            await era.printAndWait('家庭生活……真是个好理由');
            await era.printAndWait(
              '这样的话，就算在自己给孩子喂奶的同时将肉棒塞入自己口中，也可以以「补充营养」的名分一言带过吧',
            );
            await era.printAndWait([
              '作为丈夫的 ',
              father.get_colored_name(),
              ' 亲切的将抱着孩子的自己抱在怀中的画面，想必会让任何对自己家庭有疑问的人抛却疑心吧……只要他们没发现与此同时堵住自己下面流水的小穴的粗壮肉棒',
            ]);
            await era.printAndWait(
              '甚至，等到孩子长大之后……被孩子与孩子的父亲一起使用，被紧紧夹在中间，沉溺于雄性的肉棒之中……',
            );

            await era.printAndWait([
              { isBr: true },
              '想到那样的未来，',
              mother.get_colored_name(),
              ' 不由得舔了舔唇',
            ]);
            await era.printAndWait('开始期待起那样的明天');
          }
        }
      } else {
        era.printButton('无视孩子的父亲', 1);
        era.printButton(`让${father.sex}一起来看`, 2);
        if ((await era.input()) === 1) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' 看向 ',
            father.get_colored_name(),
            ' 的眼神十分空虚，却对孩子露出了关爱的神情。',
          ]);
        } else {
          await era.printAndWait([
            mother.get_colored_name(),
            ' 思前想后，还是招手让 ',
            father.get_colored_name(),
            ' 上前来。',
          ]);
          await era.printAndWait([
            father.get_colored_name(),
            ' 惊喜地环住 ',
            mother.get_colored_name(),
            '，两人一起安抚着熟睡的孩子。',
          ]);
        }
      }
      era.println();
    }
  }

  async shop_start() {}

  async shop_end() {}
};
