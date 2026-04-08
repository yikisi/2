const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const AgEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-19');
const recruit_flags = require('#/data/event/recruit-flags');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  const digital = get_chara_talk(19);
  hook.arg = (await select_action_around_river(19)) > 0;
  if (hook.arg) {
    switch (get_random_value(0, 3)) {
      case 0:
        await digital.say_and_wait([
          sys_get_colored_callname(19, 46),
          '，是 ',
          sys_get_colored_callname(19, 46),
          ' 啊！我务必要过去那边！',
        ]);
        break;
      case 1:
        await digital.say_and_wait([
          '发现了 ',
          get_chara_talk(9).get_colored_name(),
          ' 和 ',
          get_chara_talk(8).get_colored_name(),
          '！',
          digital.sex,
          '们在那边是在干什么～呢！',
        ]);
        break;
      case 2:
        await digital.say_and_wait([
          '哇！',
          sys_get_colored_callname(19, 58),
          ' 摔倒了，要去拉一下……站起来了！呜哦，真是勤勉……',
        ]);
        break;
      case 3:
        await era.printAndWait(
          `在河边散步对于${digital.name}来说是一种朝圣行为，`,
        );
        await era.printAndWait(
          `因为各个角落，都能发现赛${digital.uma_sex_title}，`,
        );
        await era.printAndWait(
          `正在练习歌唱的小${digital.uma_sex_title}偶像，正在适应泥地的小努力家。`,
        );
        await era.printAndWait(
          `比较幸运的是这次${digital.sex}并没有尊得失魂。`,
        );
    }
  } else {
    const edu_marks = new AgEduMarks(),
      me = get_chara_talk(0);
    if (!edu_marks.catch_fish) {
      edu_marks.catch_fish = 1;
      await print_event_name('钓上大鱼了，不过鱼看起来不太友善', digital);
      await era.printAndWait(
        `去河边钓鱼是不少${digital.uma_sex_title}在空闲时间的选择，`,
      );
      await era.printAndWait([
        '但 ',
        me.get_colored_name(),
        ' 的担当',
        digital.uma_sex_title,
        ' ',
        digital.get_colored_name(),
        ' 不太一样，相比起自己钓鱼，',
        digital.sex,
        '更喜欢看别人钓鱼，',
      ]);
      await era.printAndWait(`不……应该是更喜欢看着${digital.uma_sex_title}。`);
      await era.printAndWait(
        `所以，真让${digital.sex}坐在一个小板凳上，拿着钓竿，在河边静静等待上钩，就会比较难得了。`,
      );
      await digital.say_and_wait(
        `原来如此……原来钓鱼是这样的吗，这种本应是休闲活动，怎么会如此地耗精力……`,
      );
      await digital.say_and_wait(
        `在钓鱼时的其他${digital.uma_sex_title}到底是怎么想的呢……`,
      );
      await me.say_and_wait(
        `${digital.couple_title}更多的只是享受钓鱼这种活动吧，你看一下附近？`,
      );
      await digital.say_and_wait('诶？');
      await era.printAndWait([
        digital.get_colored_name(),
        ' 张望了一下四处，在对岸上正好也有一个',
        digital.uma_sex_title,
        '正在钓鱼。',
      ]);
      await era.printAndWait(`与其说是钓鱼，不如说是睡觉。`);
      await digital.say_and_wait(
        `的确，我能感受到，${digital.sex}目前正在处于极度的放松状态，`,
      );
      await digital.say_and_wait(
        `呜哇，在钓鱼的${digital.uma_sex_title}，躺在无限静谧中，即使是鱼上钩也不能惊动${
          digital.sex
        }分毫……`,
      );
      const sky = get_chara_talk(20),
        sky_recruit_check = era.get('cflag:20:招募状态') === recruit_flags.yes;
      if (sky_recruit_check) {
        await sky.say_and_wait([
          '哦呀哦呀，没想到 ',
          sys_get_callname(20, 0),
          ' 今天有闲情跟 ',
          sys_get_callname(20, 19),
          ' 出来钓鱼啊，哟吼吼，居然不是我一起哟……哭哭',
        ]);
        await era.printAndWait([
          '从背后传来了熟悉的声音，是 ',
          sky.get_colored_name(),
          ' 啊。',
        ]);
        await era.printAndWait([
          sky.get_colored_name(),
          ' 拿起小手揉揉眼睛，流露出可怜的眼神。',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 不得不承认 ',
          sky.get_colored_name(),
          ' 的这种演技特别厉害，如果不是 ',
          me.get_colored_name(),
          ' 早就熟悉',
          digital.sex,
          '的诡计多端，或许 ',
          me.get_colored_name(),
          ' 还真被骗了。',
        ]);
        await digital.say_and_wait('哇哇哇！我不是故意的，我这就离开！');
        await era.printAndWait([
          digital.get_colored_name(),
          ' 特别慌张，摇晃着手要站起来。',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 不动声色地移到 ',
          sky.get_colored_name(),
          ' 旁边，暗中猛掐了一下 ',
          sky.get_colored_name(),
          ' 的后背，挺柔。',
        ]);
        await sky.say_and_wait('诶！我只是开个玩笑啦，开个玩笑～');
      } else {
        await sky.say_and_wait([
          '哦呀哦呀，是 ',
          sys_get_colored_callname(20, 19),
          ' 啊，居然不是在岸边看着其他',
          digital.uma_sex_title,
          '钓鱼吗？',
        ]);
        await sky.say_and_wait([
          '还有……',
          sys_get_colored_callname(20, 19),
          ' 的 ',
          sys_get_callname(20, 0),
          '，出名的家伙哟～',
        ]);
        await era.printAndWait([
          '从背后传来一个懒洋洋的声音，这个声音，',
          me.get_colored_name(),
          ' 有点熟悉。',
        ]);
        await digital.say_and_wait([sys_get_colored_callname(19, 20), '？！']);
        await era.printAndWait([
          '惊得把 ',
          digital.get_colored_name(),
          ' 拿在手里的鱼竿都掉了，砸出的水花都溅到了身上。',
        ]);
        await sky.say_and_wait('哦？居然把鱼竿都弄掉了，Sky我可是要生气了哦！');
        await digital.say_and_wait([
          '不不不，这是我的不好，我的不好！我不应该来到这边和',
          digital.uma_sex_title,
          '酱一起钓鱼的……',
        ]);
      }
      await sky.say_and_wait([
        '那么，',
        sys_get_colored_callname(20, 19),
        '，要不要来我亲手教一下你啊，诶嘿！',
      ]);
      await digital.say_and_wait('噫！');
      await era.printAndWait([
        '没几秒，',
        sky.get_colored_name(),
        ' 就迅速抓住了想要逃跑的 ',
        digital.get_colored_name(),
        '，',
        digital.get_colored_name(),
        ' 就像吃了石化术，被定住了身体。',
      ]);
      await sky.say_and_wait('咕嘿！');
      await era.printAndWait([
        '嘴角上扬一段弧度，',
        sky.get_colored_name(),
        ' 本来可以说是娇小的双手首先握住了更为小巧的 ',
        digital.get_colored_name(),
        ' 的左手。',
      ]);
      await digital.say_and_wait('啊吧啊吧……');
      await sky.say_and_wait('来吧来吧，坐到凳子上嘛～');
      await era.printAndWait([
        '一把把 ',
        digital.get_colored_name(),
        ' 拽到了凳子边，把手搭到',
        digital.sex,
        '的肩膀上……',
      ]);
      await era.printAndWait([
        '然后 ',
        digital.get_colored_name(),
        ' 就像被施展了软化术一般，像一条毛毯一般，瘫坐在了凳子上。',
      ]);
      await sky.say_and_wait('来，抓住这个鱼竿，把鱼漂移动到那边去……');
      await digital.say_and_wait('啊吧啊吧……');
      await era.printAndWait([
        '看起来，',
        digital.get_colored_name(),
        ' 的灵魂已经早就变成灰随风飘散了。',
      ]);
      era.drawLine({ content: '一段时间后' });
      await digital.say_and_wait('……！');
      await digital.say_and_wait('呜诶……不行了，真不行了……');
      await era.printAndWait([
        '脱力躺在泥土上的 ',
        digital.get_colored_name(),
        '，看起来',
        digital.sex,
        '今天是真不行了。',
      ]);
      await sky.say_and_wait('啊哈，真是个有趣的人');
      await era.printAndWait([
        '与 ',
        digital.get_colored_name(),
        ' 正成对比，',
        sky.get_colored_name(),
        ' 则是精神焕发，这难道是什么新型吸精术吗。',
      ]);
      era.println();
      let wait_flag;
      if (sky_recruit_check) {
        await sky.say_and_wait([sys_get_callname(20, 0), ' 哟！']);
        await era.printAndWait([
          sky.get_colored_name(),
          ' 转向了 ',
          me.get_colored_name(),
          '，刚刚本是大笑着的表情立刻收敛，只是看着 ',
          me.get_colored_name(),
          '。',
        ]);
        await sky.say_and_wait([
          '感觉如何？无论是你还是',
          digital.sex,
          '，感觉都要把我抛下了呢～',
        ]);
        await era.printAndWait([
          sky.get_colored_name(),
          ' ',
          digital.sex,
          '只是想套个话，是吗？',
        ]);
        await sky.say_and_wait([
          '哦呀哦呀，',
          sys_get_callname(20, 0),
          ' 居然还会吃醋的吗？该吃醋的是我吧？',
        ]);
        era.printButton('妥协（青云天空好感+40）', 1);
        era.printButton('该说正事了（爱丽数码好感+40）', 2);
        if ((await era.input()) === 1) {
          await me.say_and_wait('好好好，既然如此，那么下次我就和你来钓鱼。');
          await era.printAndWait('姑且算先敷衍过去再说吧。');
          await sky.say_and_wait(
            '诶嘿，那再帮我更新下装备吧～训练员的工资可不少吧？',
          );
          await era.printAndWait([
            sky.get_colored_name(),
            ' 把一只手摆到头顶，吐出粉嫩的舌头，让 ',
            me.get_colored_name(),
            ' 不禁想起某个表情包。',
          ]);
          await era.printAndWait(
            '伸展了一下腰骨，暗自回想了一下手机里马币的余额，更新装备应该没问题……吧？',
          );
          await era.printAndWait([
            sky.get_colored_name(),
            ' 也不客气，直接拿起一张小板凳，坐在 ',
            me.get_colored_name(),
            ' 身边，靠在了 ',
            me.get_colored_name(),
            ' 肩膀上。',
          ]);
          await era.printAndWait(
            '侧眼，青色的毛丝因汗水略微浸湿，光滑的脖子上还带着些许露珠。',
          );
          await era.printAndWait([
            sky.get_colored_name(),
            ' 拿起手机拨动，看着商品从 ',
            sky.get_colored_name(),
            ' 的手指处划过，瞄到里面的数字，',
            me.get_colored_name(),
            ' 突然感到大事不妙。',
          ]);
          await me.say_and_wait('别，先停下，停下，等下。');
          await sky.say_and_wait('欸？不明明是你说的吗～');
          await era.printAndWait(
            '看到价格，那些已经不止是高端产品了，差不多都是旗舰的价格了。',
          );
          await era.printAndWait(
            '虽然训练员的工资不低，但这种东西也不是随便能买的。',
          );
          await sky.say_and_wait('好了好了，既然玩笑开过了，那闲聊到此为止！');
          await era.printAndWait([
            '把手机收起来，',
            sky.get_colored_name(),
            ' 看起来要步入正题了。',
          ]);
          await sky.say_and_wait([
            '为 ',
            sys_get_colored_callname(20, 19),
            ' 找到奔跑的理由吧！哦哦哦！',
          ]);
          await era.printAndWait([
            '本来挺正经的，但在 ',
            sky.get_colored_name(),
            ' 口中，真的是毫无气势的大喊……',
          ]);
          await era.printAndWait([
            '瞄了眼 ',
            digital.get_colored_name(),
            '，',
            digital.sex,
            '看起来还没回过魂来。',
          ]);
          await era.printAndWait([
            sky.get_colored_name(),
            ' 在用玩笑话传达目前 ',
            me.get_colored_name(),
            ' 迫切需要做的事情……钓竿也也许是。',
          ]);
          await era.printAndWait([
            '下次给',
            digital.sex,
            '买个礼物吧，这钓竿还是算了为好……',
          ]);
          era.println();
          wait_flag = sys_like_chara(20, 0, 40);
        } else {
          await me.say_and_wait('说正事吧，我了解你');
          await era.printAndWait([
            '毕竟 ',
            sky.get_colored_name(),
            ' 总是有',
            digital.sex,
            '的打算。',
          ]);
          await era.printAndWait([
            '一个转身，',
            sky.get_colored_name(),
            ' 正对夕阳，背对着你。',
          ]);
          await sky.say_and_wait([
            '还记得 ',
            sys_get_colored_callname(20, 1),
            ' 吧？',
          ]);
          await me.say_and_wait('这话说的，什么叫记不记得？');
          await era.printAndWait(
            '是那次吧？忘记自己该做什么，有什么目标，如何去做。',
          );
          await sky.say_and_wait([
            sys_get_colored_callname(20, 1),
            ' 找到了，属于',
            digital.sex,
            '的温暖乡。',
          ]);
          await era.printAndWait([
            '这件事还传得挺火的，是很好的教育素材，幸好的是 ',
            get_chara_talk(1).get_colored_name(),
            ' 本人不在意。',
          ]);
          await era.printAndWait('憧憬本身，不能作为永远前行的目标。');
          await era.printAndWait([
            digital.get_colored_name(),
            ' ',
            digital.sex,
            '很快就会发现，',
            digital.sex,
            '会比其他人更强，',
            digital.sex,
            '会粉碎以前憧憬对象的梦想。',
          ]);
          await me.say_and_wait([
            '我会带',
            digital.sex,
            '找到的，独属于',
            digital.sex,
            '的万神殿。',
          ]);
          await sky.say_and_wait('果然还是我的训练员啊！');
          await me.say_and_wait('嗯。');
          era.println();
          wait_flag = sys_like_chara(19, 0, 40);
        }
      } else {
        await sky.say_and_wait([
          sys_get_colored_callname(20, 19),
          ' 的训练员——',
        ]);
        await era.printAndWait([
          sky.get_colored_name(),
          ' 将头转向 ',
          me.get_colored_name(),
          '。',
        ]);
        await era.printAndWait([
          '诡计多端，这是世人……至少是',
          digital.sex,
          '的同学给予',
          digital.sex,
          '的评价。',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 虽然没有过多认识 ',
          sky.get_colored_name(),
          '，但也听闻过',
          digital.sex,
          '的名气……为了比赛不择手段……吗？',
        ]);
        await era.printAndWait([
          sky.get_colored_name(),
          '，应该和',
          digital.sex,
          '的比赛是没有冲突的，那',
          digital.sex,
          '想在这里做什么？',
        ]);
        era.printButton('先聊一下吧（好感+40）', 1);
        era.printButton('尽量把数码早点带走（爱慕+5）', 2);
        if ((await era.input()) === 1) {
          await me.say_and_wait('青云天空……我认识你。');
          await sky.say_and_wait('喵哈哈，看起来我的名气还挺大的呢～');
          await era.printAndWait([
            '把手背到脑袋后去，',
            sky.get_colored_name(),
            ' 看起来还对自身名气挺自豪的。',
          ]);
          await me.say_and_wait('坐下来聊一下吧，我想你应该对数码有想法。');
          await sky.say_and_wait(
            '诶呀诶呀，我可不是什么HOMO哟，倒不如说我是那种BG的类型啦～',
          );
          await era.printAndWait('把话题转移，一贯的计谋。');
          await me.say_and_wait('……');
          await sky.say_and_wait(
            '真想听我认真说？Sky我或许会出乎你意料的想法纯粹呢？',
          );
          await era.printAndWait([
            '看了一眼旁边的 ',
            digital.get_colored_name(),
            '，',
            digital.sex,
            '还躺在岸边呈现出幸福的尊死状态。',
          ]);
          await me.say_and_wait([
            '数码',
            digital.sex,
            '还是太过纯真，还未了解到赛场上锱铢必较的那种氛围。',
          ]);
          await sky.say_and_wait([
            '对的，就像 ',
            sys_get_colored_callname(20, 1),
            ' 在有一段时间一样，',
            sys_get_colored_callname(20, 19),
            ' ',
            digital.sex,
            '缺少上战场的理由。',
          ]);
          await era.printAndWait([
            '上战场……赛场的理由，',
            digital.get_colored_name(),
            ' 之前一直说是',
            digital.uma_sex_title,
            '，',
            digital.sex,
            '……只想近距离观察',
            digital.uma_sex_title,
            '的奔跑，至少目前为止是。',
          ]);
          await me.say_and_wait([
            digital.sex,
            '会找到的，我会和',
            digital.sex,
            '一起找到那个理由。',
          ]);
          await era.printAndWait([
            '在 ',
            me.get_colored_name(),
            ' 说出这句话之前，',
            sky.get_colored_name(),
            ' 一直用深邃的目光盯着 ',
            me.get_colored_name(),
            '，听到这句话后，',
            digital.sex,
            '笑了。',
          ]);
          await sky.say_and_wait('啊哈哈，听到了有趣的回答呢！');
          await era.printAndWait([
            '也许 ',
            me.get_colored_name(),
            ' 的回答让',
            digital.sex,
            '满意了，也许是',
            digital.sex,
            '觉得也没必要说下去了。',
          ]);
          await sky.say_and_wait('那我不打扰你们了？Sky我还得钓个鱼呢。');
          await era.printAndWait([
            '洒下太多热量的太阳已经由白转红，留下了 ',
            me.get_colored_name(),
            ' 和 ',
            digital.get_colored_name(),
            ' 在河边泥滩边。',
          ]);
          await era.printAndWait('带着数码回去吧……');
          await me.say_and_wait('怎么带呢……', true);
          era.println();
          wait_flag = sys_like_chara(19, 0, 40);
        } else {
          await me.say_and_wait('青云天空，虽然我还想和你再聊一下，但是……');
          await me.say_and_wait([
            '看起来数码一时半会儿还醒不来，也不早了，我得把',
            digital.sex,
            '带回去了。',
          ]);
          await era.printAndWait([
            sky.get_colored_name(),
            ' 看着 ',
            me.get_colored_name(),
            '，然后打了个哈欠。',
          ]);
          await sky.say_and_wait('你说的也对，虽然没能钓成鱼有点可惜了。');
          await era.printAndWait([
            '向',
            digital.sex,
            '再见，但正准备背起 ',
            digital.get_colored_name(),
            ' 时候，',
            me.get_colored_name(),
            ' 感到耳边传来了气息……',
          ]);
          await sky.say_and_wait(['为', digital.sex, '找到比赛的理由吧……']);
          await era.printAndWait([
            me.get_colored_name(),
            ' 闭上眼，只能说声谢谢。',
          ]);
          era.println();
          await era.printAndWait([
            digital.get_colored_name(),
            ' 异常的娇小，但 ',
            me.get_colored_name(),
            ' 把',
            digital.sex,
            '背起来后才发现，',
            digital.sex,
            '的体重更显小了。',
          ]);
          await era.printAndWait([
            '柔软的身体，鼻息……原来会有吗？呼在 ',
            me.get_colored_name(),
            ' 脖子上，让 ',
            me.get_colored_name(),
            ' 有点痒痒的。',
          ]);
          await era.printAndWait([
            '回到之后 ',
            digital.get_colored_name(),
            ' 狠狠地向 ',
            me.get_colored_name(),
            ' 道歉了。',
          ]);
          era.println();
          wait_flag = sys_love_uma(19, 5);
        }
      }
      wait_flag = sys_like_chara(19, 20, 100) || wait_flag;
      wait_flag = sys_like_chara(20, 19, 100) || wait_flag;
      wait_flag && (await era.waitAnyKey());
      hook.override = true;
      return true;
    } else {
      switch (get_random_value(0, 2)) {
        case 0:
          await digital.say_and_wait([
            '呜哇，是……是 ',
            get_chara_talk(20).get_colored_name(),
            '，我是不是不过去那边比较好……',
          ]);
          break;
        case 1:
          await digital.say_and_wait([
            '哦哦哦，钓上来了，钓上了，要是野炊的话就可以烤着来吃了呢，',
            sys_get_callname(19, 0),
            '！',
          ]);
          break;
        case 2:
          await digital.say_and_wait(
            `别介意！胜负乃兵家常事，大侠请重新来过吧……空军也像抽卡不出的概率一样啦！`,
          );
      }
    }
  }
};
