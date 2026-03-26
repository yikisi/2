const era = require('#/era-electron');

const { get_sex_acceptable } = require('#/system/ero/sys-calc-ero-status');
const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_colored_callname,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,TachyonEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  const drug_colors = ['七彩'];

  '深/浅'
    .split('/')
    .forEach((d) =>
      '红/橙/黄/绿/蓝/靛/紫/灰/银/金'
        .split('/')
        .forEach((c) => drug_colors.push(`${d}${c}`)),
    );

  handlers.try_drug = async (tachyon, me, callname, flags) => {
    await print_event_name('试药', tachyon);
    await tachyon.say_and_wait([
      '哦呀，',
      callname,
      '，来得正好，这是今天的药',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 递了瓶呈',
      get_random_entry(drug_colors),
      '色的药水给 ',
      me.get_colored_name(),
    ]);
    era.println();
    await era.printAndWait([me.get_colored_name(), ' 二话不说喝下药水']);
    const buffer = [
      async () => {
        await era.printAndWait([
          me.get_colored_name(),
          ' 喝下药水后忽然感觉喉咙很痒',
        ]);
        await era.printAndWait('忍不住想咳嗽，没想到一咳出来的却是火星');
        era.println();
        await tachyon.say_and_wait('哦呀哦呀，看来龙息药水的效果很好啊');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 一脸高兴的记录着实验数据，却没预料到接下的后果，咳出的火星落到了',
          tachyon.sex,
          '身旁的实验纪录上',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '怎么…………有股烧焦味……………我的实验数据！！？？',
        );
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '连忙开始挽救那些还没烧着的实验纪录，',
          me.get_colored_name(),
          ' 想上前帮忙，但喉咙实在痒的不行',
        ]);
        era.println();
        await tachyon.say_and_wait('咳咳！！');
        era.println();
        await era.printAndWait([
          '在药效消失前，',
          tachyon.get_colored_name(),
          ' 只是不停的跑来跑去抢救着资料',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(32, [5, 0, 0, 0, 0], 0);
        flags.wait_flag = sys_change_motivation(32, -1) || flags.wait_flag;
      },
      async () => {
        const coffee = get_chara_talk(25);
        await era.printAndWait([
          me.get_colored_name(),
          ' 喝下药水后感觉眼睛看出去的世界忽然变得清楚了许多，',
        ]);
        await era.printAndWait([
          '但 ',
          me.get_colored_name(),
          ' 不禁开始怀疑那是不是迷幻药一类的东西，因为 ',
          me.get_colored_name(),
          ' 的眼前开始看见了一些奇怪的东西',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '哦？看来有什么效果的样子？这是我根据 ',
          sys_get_colored_callname(32, 25),
          ' 说的看见另一个世界的感觉制造出来的灵视药剂',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '到底做了什么出来！这已经跨越正常化学领域了吧！？',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '顺便，要是你现在能看见的话，帮我看看我身上吧',
        );
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          ' 听见这句话，下意识看向了 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          '随即，',
          me.get_colored_name(),
          ' 的意识瞬间停止了运作',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '昨天缠着 ',
          sys_get_colored_callname(32, 25),
          ' 的时候好像不小心把她惹毛了，从昨天回来之后就觉得身体好沉重……',
        ]);
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          ' 看见，有某个黑影用双手压在了 ',
          tachyon.get_colored_name(),
          ' 的肩上',
        ]);
        await era.printAndWait([
          '黑影似乎察觉到了 ',
          me.get_colored_name(),
          ' 的视线，伸出手指在可能是脸的部分比了一个嘘的手势',
        ]);
        await era.printAndWait([
          '接下来，',
          me.get_colored_name(),
          ' 感觉自己什么也说不出口了',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '………奇怪，真的没什么吗，为什么感觉身体这么重',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 没注意到 ',
          me.get_colored_name(),
          ' 的不对，喃喃自语说完后走出了房间',
        ]);
        await era.printAndWait([
          '此时 ',
          me.get_colored_name(),
          ' 才总算能够大口呼吸，那个黑影，到底是什么………',
        ]);
        era.println();
        await era.printAndWait([
          '顺带一提，隔天 ',
          tachyon.get_colored_name(),
          ' 就恢复正常了，看来或许只是 ',
          coffee.get_colored_name(),
          ' 的稍加惩戒而已吧',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(32, [0, 5, 0, 0, 0], 0);
      },
      async () => {
        await era.printAndWait([
          me.get_colored_name(),
          ' 喝下药后忽然感觉身体无比僵硬',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 惊恐的发现现在的自己全身上下除了嘴和脑袋其他所有地方都无法动弹了',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '哎呀………原本是想做能够增强身体抗打击力的药剂，结果变成类似石化的效果了吗………',
        );
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          ' 没有功夫理会 ',
          tachyon.get_colored_name(),
          ' 的实验后感想',
        ]);
        await era.printAndWait([me.get_colored_name(), ' 的心情十分着急']);
        await era.printAndWait('拼命想移动身体却动弹不得');
        await era.printAndWait(
          '接下来还有一场关于训练场时间分配的会议，要是今天没法出席之后一个月训练场都没得使用了',
        );
        await era.printAndWait([
          me.get_colored_name(),
          ' 将事情的严重性告诉了 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([tachyon.sex, '也感到大事不妙']);
        era.println();
        await tachyon.say_and_wait('要是没法上训练场怎么确认我药剂的效果！？');
        era.println();
        await era.printAndWait([
          '总之，姑且不论原因为何，现在的当要之急是把 ',
          me.get_colored_name(),
          ' 送到会议室去',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 努力将 ',
          me.get_colored_name(),
          ' 抬起，要送到会议室去',
        ]);
        await era.printAndWait([
          '不知为何喝下了药剂后 ',
          me.get_colored_name(),
          ' 的身子变得特别沉重，就连 ',
          tachyon.get_colored_name(),
          ' 用',
          tachyon.uma_sex_title,
          '的力气想将 ',
          me.get_colored_name(),
          ' 托起都耗费了好大一番功夫',
        ]);
        await era.printAndWait([
          '最后好不容易，总算将 ',
          me.get_colored_name(),
          ' 抬到会议室，并且为了被人发现不对，',
          tachyon.get_colored_name(),
          ' 在旁全程陪同参加会议',
        ]);
        era.println();
        await era.printAndWait([
          '在那天之后，不知为何学园里开始流传起 ',
          tachyon.get_colored_name(),
          ' 和 ',
          me.get_colored_name(),
          ' 的绯闻',
        ]);
        await say_by_passer_by_and_wait(
          `路人${tachyon.uma_sex_title}A`,
          '据说是用公主抱抱去参加会议的',
        );
        await say_by_passer_by_and_wait(
          '路人训练员A',
          '会议上也全程陪同，帮忙端茶递水，完全就是贤内助的模样',
        );
        await say_by_passer_by_and_wait(`路人${tachyon.uma_sex_title}B`, [
          '没想到那个 ',
          tachyon.get_colored_name(),
          ' 也恋爱了啊…………',
        ]);
        era.println();
        await era.printAndWait('……………为什么会产生这样的绯闻呢');
        await era.printAndWait([
          '以及，为什么听到这样的绯闻后，',
          tachyon.get_colored_name(),
          ' 的脸仿佛有点红的样子',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(32, [0, 0, 5, 0, 0], 0);
        flags.wait_flag = sys_change_motivation(32, 1) || flags.wait_flag;
      },
      async () => {
        await era.printAndWait([
          '药水在 ',
          me.get_colored_name(),
          ' 喝下之前便爆出了粉色的浓雾，将 ',
          me.get_colored_name(),
          ' 和 ',
          tachyon.get_colored_name(),
          ' 包裹在雾中',
        ]);
        era.println();
        await tachyon.say_and_wait('咳咳！怎么回事！？');
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          ' 摇头表示自己不知道，说到底连药的效果是什么都不知道的 ',
          me.get_colored_name(),
          ' 怎么可能会知道这是怎么回事',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '明明只是普通的精力药而已……算了，先把窗户跟门打开让雾气散掉',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 连忙到窗前想要开窗散气，然而',
        ]);
        era.println();
        await tachyon.say_and_wait('咕，身体提不起劲……！');
        era.println();
        await era.printAndWait([
          '这段期间，',
          me.get_colored_name(),
          ' 一直端坐在椅子上，哪都没去，这并非是因为 ',
          me.get_colored_name(),
          ' 内心的余裕，',
        ]);
        await era.printAndWait([
          '而是因为 ',
          me.get_colored_name(),
          me.sex_code - 1 ? ' 下面已经泛滥成灾' : ' 下半身的兄弟已经高高立起',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 想起了 ',
          tachyon.get_colored_name(),
          ' 说的精力药，一般而言的精力药指的……都是针对那方面的药吧',
        ]);
        await era.printAndWait([
          '为什么 ',
          tachyon.get_colored_name(),
          ' 会做那样的药，',
          me.get_colored_name(),
          ' 的内心感到疑惑，但现在不是思考这些的时候了，因为……',
        ]);
        era.println();
        await tachyon.say_and_wait([callname, '……我的身体……好热……']);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 用变成爱心状的双眼看着 ',
          me.get_colored_name(),
          '，眼中流露出一丝恐慌，以及更多的情欲',
        ]);
        await era.printAndWait([
          '看见',
          tachyon.sex,
          '的模样，',
          me.get_colored_name(),
          '……',
        ]);
        if (
          !era.get('exp:32:性爱次数') ||
          era.get('relation:32:0') <= 225 ||
          !get_sex_acceptable(32)
        ) {
          era.println();
          await era.printAndWait([
            '不行，',
            tachyon.sex,
            '是 ',
            me.get_colored_name(),
            ' 的负责',
            tachyon.uma_sex_title,
            '，',
            me.get_colored_name(),
            ' 不能做这种事',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            ' 冷静的拒绝了',
            tachyon.sex,
            '，幸好，',
            tachyon.get_colored_name(),
            ' 看上去也维持着一定的冷静',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '没事的……这个药的药效最多也就一个小时……只要撑过一个小时就……',
          );
          await era.printAndWait([
            '你们没有再多说什么，',
            me.get_colored_name(),
            ' 和瘫软着身子坐在地上的',
            tachyon.sex,
            '默默的等待时间过去',
          ]);
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            ' 拼命的忍耐着，但目光还是忍不住移向了 ',
            tachyon.get_colored_name(),
            ' 的方向',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 的全身大汗淋漓——想来 ',
            me.get_colored_name(),
            ' 也应是如此——由于白大褂遮掩的关系，衣服并未透出什么不该吐露的东西',
          ]);
          era.println();
          await era.printAndWait([
            '然而，终究百密一疏，原本大上一号的白大褂，却在汗水的湿润下呈现出了十分贴合 ',
            tachyon.get_colored_name(),
            ' 身材的曲线，',
          ]);
          tachyon.sex_code - 1 &&
            (await era.printAndWait([
              '从圆润的股丰及丰内深邃的沟槽，到胸前不算太大却十分坚挺的山峰，都清晰的描绘在 ',
              me.get_colored_name(),
              ' 的眼中',
            ]));
          era.println();
          await tachyon.say_and_wait([callname, '……']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 似乎注意到 ',
            me.get_colored_name(),
            ' 的视线了，有些责怪的喊了一声，但在情欲的感染下这一声 ',
            callname,
            ' 都带上了娇媚的色彩，',
            me.get_colored_name(),
            ' 连忙道歉了一声后收回视线',
          ]);
          era.println();
          await era.printAndWait('忍耐，忍耐，忍耐');
          await era.printAndWait([
            '总算，药效逐渐消退，',
            tachyon.get_colored_name(),
            ' 艰难的站起身来，抛了句今天就到这里后仓皇的离开了训练员室……',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            ' 晃了晃头，希望将今天发生的这些摇出脑袋，但 ',
            tachyon.get_colored_name(),
            ' 那姣好的身材依然留存于 ',
            me.get_colored_name(),
            ' 的脑海中，无法忘怀……',
          ]);
          era.println();
          await era.printAndWait([
            '顺带一提，事后 ',
            me.get_colored_name(),
            ' 问了 ',
            tachyon.get_colored_name(),
            '，得知了那种精力药是供应给校内某秘密商店的，',
          ]);
          await era.printAndWait([
            '据说这才是',
            tachyon.sex,
            '研究资金的主要来源，要是在校园里多逛逛的话说不定能找到……？',
          ]);
          flags.wait_flag = get_attr_and_print_in_event(
            32,
            [0, 0, 0, 10, 0],
            0,
          );
          flags.wait_flag =
            get_attr_and_print_in_event(
              0,
              [0, 0, 0, 10, 0],
              0,
              undefined,
              true,
            ) || flags.wait_flag;
          flags.wait_flag = sys_love_uma(32, 5) || flags.wait_flag;
        } else {
          await quick_into_sex(32);
        }
      },
      async () => {
        await era.printAndWait([
          me.get_colored_name(),
          ' 喝下药剂后，全身忽然发出了光芒，',
          me.get_colored_name(),
          ' 感到有些惊恐，却发现 ',
          tachyon.get_colored_name(),
          ' 依然一幅兴奋的样子',
        ]);
        era.println();
        await tachyon.say_and_wait('快，把衣服脱了');
        era.println();
        await era.printAndWait(['这个家伙在说什么！？']);
        await era.printAndWait(['是变态吗！？是特雷森最近流行的骚扰犯吗！？']);
        await era.printAndWait([
          me.get_colored_name(),
          ' 连忙抓紧了自己的衣服，但人类终究还是敌不过',
          tachyon.uma_sex_title,
          '的力量，在长达三秒的挣扎后，',
          me.get_colored_name(),
          ' 的衣服在拉扯间被撕了开来',
        ]);
        era.println();
        await era.printAndWait([
          '无力抵抗的 ',
          me.get_colored_name(),
          ' 闭上了双眼，无法反抗那就只能享受了，来吧，别怜惜我是朵娇花！',
        ]);
        era.println();
        await tachyon.say_and_wait('…………原来如此，原来如此');
        era.println();
        await era.printAndWait([
          '等待了许久都没有等到 ',
          me.get_colored_name(),
          ' 所期待发生的那种事，',
          me.get_colored_name(),
          ' 瞧瞧睁开了眼睛，却看到 ',
          tachyon.get_colored_name(),
          ' 正盯着 ',
          me.get_colored_name(),
          ' 的身体念念有词，一边在记录本上写着什么',
        ]);
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          ' 将视线移回自己身上，发现自己的身体确实正发着光，但发光的部位都有着一定的规律性，看上去就好像…………',
        ]);
        era.println();
        await tachyon.say_and_wait(
          era.get('cflag:0:种族')
            ? '原来具体是这样运作的……'
            : `原来人类的身体具体是这样运作的……但是……和${tachyon.uma_sex_title}之间的区别…………`,
        );
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          ' 听见 ',
          tachyon.get_colored_name(),
          ' 喃喃自语的声音后察觉，这依然是为了探讨',
          tachyon.uma_sex_title,
          '的奥秘而展开的实验',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 不禁为自己肤浅的想法感到有些不好意思',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '好，今天就先观察到这吧，我先回去做实验了，',
          callname,
          ' 你记得把衣服穿上！',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 纪录完后飞快的离开了训练员室，留下 ',
          me.get_colored_name(),
          ' 一个人在训练员室里',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 看着地上已经不能称作是衣服的那堆碎片，心想着到底是该趁着夜色漆黑跑回家，还是麻烦同事帮 ',
          me.get_colored_name(),
          ' 拿件衣服过来',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(32, [0, 0, 0, 0, 5], 0);
      },
    ];
    await get_random_entry(buffer)();
  };
};
