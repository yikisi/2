/**
 * @file H事件 - 孕袋职责之惩戒
 * @author 幽白書
 */
const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const sys_filter_chara = require('#/system/sys-filter-chara');

const { run_custom_ero } = require('#/event/ero/ero-factory');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha, get_random_entry, sort_list } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { buff_colors } = require('#/data/color-const');
const EroParticipant = require('#/data/ero/ero-participant');
const { item_enum } = require('#/data/ero/item-const');
const { part_enum } = require('#/data/ero/part-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const { ero_hooks } = require('#/data/event/ero-hooks');
const recruit_flags = require('#/data/event/recruit-flags');

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
    if (my_marks.not_pregnant >= get_random_value(1, 3)) {
      const cache = era.get('status:0:马跳S');
      era.set('status:0:马跳S', 1);
      const uma_sex_title = era.get('flag:角色性别') === 1 ? '马郎' : '马娘';
      era.drawLine();
      await print_event_name(
        [{ content: '孕袋职责之惩戒', color: buff_colors[3] }],
        me,
      );
      if (!my_marks.p_slave_punish) {
        my_marks.p_slave_punish = 1;
        const yayoi = get_chara_talk(302),
          tazuna = get_chara_talk(301);
        // 次数=1
        await me.say_and_wait(['唔……咕……呜……']);
        era.println();
        await era.printAndWait(['特雷森学园内，有个平时总无人造访的地方。']);
        await era.printAndWait(['堆满了干草堆，被栅栏围住的某个角落，']);
        await era.printAndWait([
          '看起来像是用来养什么动物的地方，却又从来没看这边有过生物活动的痕迹。',
        ]);
        await era.printAndWait(['这里是用来做什么的呢？']);
        await era.printAndWait([me.get_colored_name(), ' 也曾感到疑惑，']);
        era.println();
        await era.printAndWait([
          '如今，',
          me.get_colored_name(),
          ' 终于知道这个地方是用来做什么的了。',
        ]);
        era.println();
        await yayoi.say_as_unknown_and_wait([
          '惩处！身为孕袋逃避职责，必须严厉责罚！',
        ]);
        await tazuna.say_as_unknown_and_wait([
          '本来，作为孕袋就已经是最严厉的惩罚了……原本是希望在为特雷森及',
          uma_sex_title,
          '未来贡献心力的同时，训练员小姐能够好好反省自己的过错，但看来，似乎还是缺了剂猛药呢。',
        ]);
        era.println();
        await era.printAndWait(['随着两人的话语落下，']);
        await era.printAndWait([
          me.get_colored_name(),
          ' 那已经被两人先行使用，白浆还在涓涓流出的红肿小穴，迎来了新的客人。',
        ]);
        await era.printAndWait([
          '被戴上眼罩和口球的 ',
          me.get_colored_name(),
          '，不知道来人是谁，',
        ]);
        await era.printAndWait([
          '哪怕想要从声音来听，但被降噪耳机盖住的双耳，哪怕是',
          uma_sex_title,
          '那卓越的听力，也只能听清在体内发出的声音。',
        ]);
        era.println();
        await era.printAndWait(['啾啪……啾啪……']);
        era.println();
        await era.printAndWait(['缠绵的肉体碰撞声，']);
        await era.printAndWait([
          '以及仿佛舍不得让身后肉棒离开的，来自阴道口的亲吻声，',
        ]);
        await era.printAndWait([
          '那啾的吻声大的让 ',
          me.get_colored_name(),
          ' 几乎以为，这根肉棒才是自己身体的支配者———倒也不足为奇，这样的想法，今晚的每根肉棒进入 ',
          me.get_colored_name(),
          ' 身体时 ',
          me.get_colored_name(),
          ' 都曾经想过。',
        ]);
        era.println();
        await era.printAndWait(['咕啪……咕啪……']);
        era.println();
        await era.printAndWait(['所有的防御，都会迎来被破坏的一天，']);
        await era.printAndWait([
          '既然如此，防御就是为了被破坏这条等式大抵是成立的。',
        ]);
        await era.printAndWait([
          '因此，那假装矜持的窄小穴道肯定，是为了让',
          uma_sex_title,
          '大人雄壮的肉棒能有征服感，才会总装着冷漠，却在肉棒大人触碰到的瞬间便缠绕而上，完美的达成从烈女到荡妇的转变，那缠绕时发出的声音，同样也代表着身体主人的态度。',
        ]);
        await era.printAndWait([
          '明明想怀孕，想的不得了，明明装作正经训练员的模样，就是为了让',
          uma_sex_title,
          '大人在享用自己时能够享受到更多情绪上的满足，',
        ]);
        await era.printAndWait([
          '结果却因此而丧失了被',
          uma_sex_title,
          '大人的精子侵犯，让',
          uma_sex_title,
          '大人教会自己，自己是多么可悲下贱的雌性的机会，这是何等的得不偿失啊。',
        ]);
        era.println();
        await era.printAndWait([
          '幸好，仁慈的',
          uma_sex_title,
          '大人会给予愚笨的孕袋机会。',
        ]);
        era.println();
        await era.printAndWait(['咚叩……咚叩……']);
        era.println();
        await era.printAndWait([
          '礼貌敲打着子宫颈口的肉棒，在等待关口的不战而溃，',
        ]);
        await era.printAndWait([
          '全身上下的每个器官，每个组织，每个细胞都已经彻底臣服，',
        ]);
        await era.printAndWait([
          '现在的撞击声，与其说是对最后防线的冲击，不如说只是形式上的敲门而已，',
        ]);
        await era.printAndWait([
          '抵抗？孕袋的身体，怎么可能对',
          uma_sex_title,
          '大人的侵犯做出抵抗呢？这是被刻在基因深层的根本逻辑。',
        ]);
        era.println();
        await era.printAndWait(['最后，最期待的声音。']);
        await era.printAndWait([
          '啊啊，',
          me.get_colored_name(),
          ' 不由得将腿张的更开，',
        ]);
        await era.printAndWait([
          '不知何时，将 ',
          me.get_colored_name(),
          ' 束缚在拟牝台上的皮带已经松绑，',
        ]);
        await era.printAndWait(['本来这条皮带就没有任何必要，']);
        await era.printAndWait([
          '毕竟哪有孕袋会反抗',
          uma_sex_title,
          '大人的肉棒呢？',
        ]);
        await era.printAndWait([
          '哪有孕袋会拒绝',
          uma_sex_title,
          '大人的赏赐呢？',
        ]);
        era.println();
        await era.printAndWait([
          '终于，比跑步更加令人心跳加速，比初恋更让人心生荡漾，',
        ]);
        await era.printAndWait([uma_sex_title, '大人的侵犯，来到了尾声。']);
        era.println();
        await era.printAndWait(['咻………咻噜噜噜噜……']);
        era.println();
        await era.printAndWait(['来了。']);
        await era.printAndWait(['就是这个。']);
        await era.printAndWait([me.get_colored_name(), ' 的心中十分确定，']);
        await era.printAndWait(['这就是，会进入自己的子宫，']);
        await era.printAndWait(['让原本贵为此处主人的卵子彻底臣服，']);
        await era.printAndWait([
          '土下座，舔脚，贡献出母体的一切也要讨好的，',
          uma_sex_title,
          '大人高贵的种付精液。',
        ]);
        await era.printAndWait(['精子不断的喷涌而出，']);
        await era.printAndWait([
          '蹂躏，侵犯着 ',
          me.get_colored_name(),
          ' 身体的每个角落，',
        ]);
        await era.printAndWait(['这就是，身为孕袋的幸福啊。']);
        era.println();
        era.println();
        await era.printAndWait(['——————']);
        era.println();
        await era.printAndWait(['可惜，欢乐的时光不会永远持续，']);
        await era.printAndWait(['再漫长的射精也有结束的时候，']);
        await era.printAndWait([
          '比起仍沉浸于高潮受孕喜悦的废物孕袋大脑，直接与肉棒大人接触的阴道更加急迫的缠绕着柱身，想要恳求对方留下。',
        ]);
        await era.printAndWait(['或者至少……记住对方的形状，']);
        await era.printAndWait([
          '…………哪怕，那只是在五秒后，下一根肉棒插入进来时便会遗忘的记忆。',
        ]);
        let rape_list = [
          301,
          302,
          ...gacha(
            sys_filter_chara('cflag', '招募状态', recruit_flags.no).filter(
              (e) =>
                ((e > 0 && e < 200) || (e >= 301 && e <= 306) || e === 400) &&
                e !== src_chara &&
                era.get(`cflag:${e}:成长阶段`) >= 2 &&
                era.get(`cflag:${e}:种族`) > 0,
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
      } else {
        let base_list = sys_filter_chara(
          'cflag',
          '招募状态',
          recruit_flags.yes,
        ).filter(
          (e) =>
            ((e > 0 && e < 200) || e === 400) &&
            era.get(`cflag:${e}:成长阶段`) >= 2 &&
            era.get(`cflag:${e}:种族`) > 0,
        );
        const is_teammate = base_list.length > 0;
        if (!is_teammate) {
          base_list = sys_filter_chara(
            'cflag',
            '招募状态',
            recruit_flags.no,
          ).filter(
            (e) =>
              ((e > 0 && e < 200) || e === 400) &&
              e !== src_chara &&
              era.get(`cflag:${e}:成长阶段`) >= 2 &&
              era.get(`cflag:${e}:种族`) > 0,
          );
        }
        await era.printAndWait(['啾啪……啾啪……']);
        era.println();
        await era.printAndWait(['又一个夜晚，回到了熟悉的地点，']);
        await era.printAndWait([
          me.get_colored_name(),
          ' 再度将面罩和口球戴上，熟悉的夜晚再度开演。',
        ]);
        await era.printAndWait([
          '明明知道，要是一直不履行身为孕袋的义务及责任，会再度来到这里，',
        ]);
        await era.printAndWait([
          '明明无论是自己的担当，学园里的学生及老师，都会很乐意的帮 ',
          me.get_colored_name(),
          ' 这个「举手之劳」，',
        ]);
        await era.printAndWait([
          '明明如果停留在那一步，还可以自己选择孩子的父亲是谁，',
        ]);
        await era.printAndWait([
          '所以，故意走到这一步的 ',
          me.get_colored_name(),
          '，目的也很明白了吧。',
        ]);
        await era.printAndWait([
          '忘不了那天的欢爱，忘不了自己的一切都被他人掌控的快感，',
        ]);
        await era.printAndWait(['忘不了纯粹被当成性处理工具的感觉。']);
        era.println();
        await era.printAndWait(['咕扭']);
        await era.printAndWait([
          '一下重辗，将痛觉和更多的快感从乳头传达到 ',
          me.get_colored_name(),
          ' 的大脑，不好，怎么能在侍奉中分神呢？',
        ]);
        if (is_teammate) {
          await era.printAndWait([
            '然而，身后',
            uma_sex_title,
            '大人的肉棒却让 ',
            me.get_colored_name(),
            ' 有些熟悉的感觉，',
          ]);
          await era.printAndWait([
            '一般来讲，应该不是什么问题，毕竟身为孕袋，全学园的',
            uma_sex_title,
            '应该都使用过自己，',
          ]);
          await era.printAndWait(['但是……这种熟悉的感觉，']);
          await era.printAndWait([
            '难道说，身后的',
            uma_sex_title,
            '是自己的担当？',
          ]);
          await era.printAndWait(['在隐藏身份的情况下，被担当使用，']);
          await era.printAndWait([
            '不知为何，',
            me.get_colored_name(),
            ' 产生了一种仿佛被捉奸在床一般的紧张……及兴奋。',
          ]);
          await era.printAndWait(['一定很生气，一定很愤怒吧，']);
          await era.printAndWait(['自己的训练员，自己的性奴，自己的孕袋，']);
          await era.printAndWait([
            '却不肯怀上自己的孩子，甚至宁愿被不知道身份的人轮奸。',
          ]);
        } else {
          await era.printAndWait([
            '然而，身后',
            uma_sex_title,
            '大人的肉棒却不知为何，显得尤其急躁。',
          ]);
          await era.printAndWait([
            '一般来讲，应该不是什么问题，毕竟身为孕袋，身为泄欲的工具，怎么粗暴的使用自己都是理所当然的。',
          ]);
          await era.printAndWait(['但是……如此急切，甚至愤怒的感觉，']);
          await era.printAndWait([
            '难道说，身后的',
            uma_sex_title,
            '是自己的粉丝？',
          ]);
          await era.printAndWait(['在隐藏身份的情况下，被粉丝使用着，']);
          await era.printAndWait([
            '不知为何，',
            me.get_colored_name(),
            ' 产生了一种仿佛被捉奸在床一般的紧张……及兴奋。',
          ]);
          await era.printAndWait(['一定很生气，一定很愤怒吧。']);
          await era.printAndWait(['崇拜的训练员，憧憬的对象，']);
          await era.printAndWait([
            '却以如此下贱的姿态，践踏小',
            uma_sex_title,
            '纯真的恋心。',
          ]);
        }
        era.println();
        await era.printAndWait(['很愤怒吧，很生气吧。']);
        await era.printAndWait([
          '所以，要把这个人尽可夫的母猪，狠狠的在里面播种，',
        ]);
        await era.printAndWait([
          '要干烂这个母猪的骚穴，要让她怀孕，怀孕，怀孕，',
        ]);
        await era.printAndWait(['让她彻底变成自己肉棒的隶属。']);
        era.println();
        if (is_teammate) {
          await era.printAndWait([
            '想到这，',
            me.get_colored_name(),
            ' 的腰扭的更加欢腾了。',
          ]);
          await era.printAndWait([
            '没过多久，那根肉棒停滞了一会后，射出了 ',
            me.get_colored_name(),
            ' 最期待的白浆，',
          ]);
          await era.printAndWait(['啊啊……真是可惜，']);
          await era.printAndWait([
            '某种落空的预感在 ',
            me.get_colored_name(),
            ' 心中浮现，',
          ]);
          await era.printAndWait([
            '然而，下一根熟悉的肉棒触感又再次将 ',
            me.get_colored_name(),
            ' 操到无力思考那些多余的事。',
          ]);
          era.println();
          await era.printAndWait([
            '下一胎，还是让自己心爱的担当',
            uma_sex_title,
            '来吧，',
          ]);
          await era.printAndWait([
            '恍惚间，',
            me.get_colored_name(),
            ' 下定了不知会不会遵守的决心。',
          ]);
        } else {
          await era.printAndWait([
            '想到这，',
            me.get_colored_name(),
            ' 的腰扭的更加欢腾了。',
          ]);
          await era.printAndWait(['然而，或许是猛于进攻而疏忽了防守，']);
          await era.printAndWait(['也或许只是时间正凑巧，']);
          await era.printAndWait([
            '正要认真起来的时候，身后的硬直抖了抖，却在穴内泄出了大片的白浆。',
          ]);
          await era.printAndWait(['啊啊……真是可惜，']);
          await era.printAndWait([
            '某种空虚的失落感在 ',
            me.get_colored_name(),
            ' 心中浮现。',
          ]);
          await era.printAndWait([
            '然而，下一根熟悉的肉棒触感又再次将 ',
            me.get_colored_name(),
            ' 操到无力思考那些多余的事。',
          ]);
          era.println();
          await era.printAndWait(['下一次，要更努力哦。']);
          await era.printAndWait([
            '感受着对方射入的精子被更勇猛的肉棒从穴内挖出的感觉，',
            me.get_colored_name(),
            ' 送上了无声的祝福。',
          ]);
          let rape_list = gacha(base_list, get_random_value(6, 8));
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
        }
      }
      era.set('status:0:马跳S', cache);
      era.drawLine();
    }
  }
}

module.exports = punish_pregnant_slave;
