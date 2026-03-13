const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,RaceStartParams):Promise>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.begin_race] = async (maya, me, callname) => {
    if (era.get('cflag:24:育成回合计时') > 48) {
      return true;
    }
    await print_event_name(
      ['迎向 ', race_infos[race_enum.begin_race].get_colored_name()],
      maya,
    );
    await era.printAndWait([
      '终于来到 ',
      maya.get_colored_name(),
      ' 的出道战当天了！',
    ]);
    await maya.say_and_wait(['你看你看！', callname, '！我今天不是穿运动服！']);
    await maya.say_and_wait('你知道为什么吗～？');
    era.printButton('「因为要参加出道战！」', 1);
    await era.input();
    await maya.say_and_wait('叮咚叮咚，答对了！给你拉勾和我的第一名章！');
    await maya.say_and_wait([
      '所以说……',
      callname,
      '！视线千万不能从人家身上移开哦。',
    ]);
    await maya.say_and_wait(
      '要睁大眼睛看好人家在闪耀系列赛上闪闪发亮的样子哦♪',
    );
  };

  handlers[race_enum.kiku_sho] = async (maya, me, callname) => {
    await print_event_name(
      ['迎向 ', race_infos[race_enum.kiku_sho].get_colored_name()],
      maya,
    );
    await maya.say_and_wait([
      '早安，',
      callname,
      '！准备好欣赏完美的飞行了吗？',
    ]);
    await maya.say_and_wait([
      '毕竟今天可是『',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '』！不是训练，而是正式竞赛哦☆',
    ]);
    era.printButton('「展现你至今为止的努力成果吧！」', 1);
    await era.input();
    await maya.say_and_wait('收到！');
    await maya.say_and_wait('草地上只会留下，人家那比烟雾消散还快的奔驰痕迹☆');
    await maya.say_and_wait([callname, ' 的目光和心！都会被我夺走的♪']);
  };

  handlers[race_enum.arim_kin] = async (maya, me, callname) => {
    await print_event_name(
      ['迎向 ', race_infos[race_enum.arim_kin].get_colored_name()],
      maya,
    );
    const amazon = get_chara_talk(12);
    const brian = get_chara_talk(16);
    if (era.get('cflag:24:育成回合计时') < 96) {
      await maya.say_and_wait([
        '来了，终于来了，『',
        race_infos[race_enum.arim_kin].get_colored_name(),
        '』～！！',
      ]);
      await maya.say_and_wait([
        '哼哼，',
        callname,
        '。你可要看好哦。人家在这场比赛上会──',
      ]);
      await maya.say_and_wait('唔！那两个人该不会是……');
      await amazon.say_and_wait(
        '哈！想不到今年也能和你较量呢……已经把脖子洗干净等着了吗？',
      );
      await brian.say_and_wait('……');
      await brian.say_and_wait([
        '呵……你想表达什么，我完全听不懂呢，',
        sys_get_colored_callname(16, 12),
        '。',
      ]);
      await amazon.say_and_wait(
        '啊！？我刚才那句话，是回你去年那句『准备认输吧』──',
      );
      await brian.say_and_wait('唉……我可不是要你说明意图。');
      await brian.say_and_wait('你应该已经知道了吧。想挑衅我的话──');
      await brian.say_and_wait(
        '不要靠嘴巴，而是用赛场上的表现。拿出你的真本事来打败我。',
      );
      await amazon.say_and_wait('……哦。');
      await amazon.say_and_wait([
        '那就在这场『',
        race_infos[race_enum.arim_kin].get_colored_name(),
        '』上，来个一对一对决吧。',
      ]);
      await brian.say_and_wait('哼……眼神还不错。');
      await era.printAndWait([
        '──在 ',
        maya.get_colored_name(),
        ' 的视线前方，站着「三冠赛',
        maya.uma_sex_title,
        '」',
        brian.get_colored_name(),
        '，以及「女杰」',
        amazon.get_colored_name(),
        ' 这两人。',
      ]);
      await maya.say_and_wait('…………');
      era.printButton('「摩耶重炮？」', 1);
      await era.input();
      await maya.say_and_wait('啊！');
      await maya.say_and_wait(['抱歉抱歉，', callname, '！我刚才好像恍神了！']);
      era.printButton('「这样一看特别有魄力呢」', 1);
      await era.input();
      await maya.say_and_wait('啊，讨厌讨厌！不能这么说！人家是不会输的！');
      await maya.say_and_wait('所以比赛的时候绝对要一直看着人家哦！知道吗？');
    } else {
      await maya.say_and_wait([
        '『',
        race_infos[race_enum.arim_kin].get_colored_name(),
        '』，我又来了。',
      ]);
      await maya.say_and_wait([
        '嘿嘿，',
        callname,
        '。跟去年相比，人家有成长吗？',
      ]);
      era.printButton('「成长了很多」', 1);
      await era.input();
      await maya.say_and_wait('呵呵……是吗。这样啊，这样啊☆');
      await maya.say_and_wait('不过，还是有一些地方没有变。');
      await maya.say_and_wait('人家还是想要闪闪发亮！就在这闪耀系列赛上！！');
      await maya.say_and_wait(['所以 ', callname, '，直到最后都要看着我哦☆']);
      await maya.say_and_wait('看着人家这比谁都还耀眼的样子♪');
      era.drawLine();
      await maya.say_and_wait([
        '啊，是 ',
        sys_get_colored_callname(24, 16),
        '！你好☆',
      ]);
      await brian.say_and_wait([
        '……是 ',
        sys_get_colored_callname(16, 24),
        ' 啊。',
      ]);
      await maya.say_and_wait('咦☆你记得人家的名字了吗！？哇！好开心！！');
      await brian.say_and_wait(
        '哼……跟你比了这么多场比赛，就算不想也会记住吧。',
      );
      await maya.say_and_wait(
        '嘿嘿，这样啊。那你今天得专注在要和人家比赛这件事上哦。',
      );
      await maya.say_and_wait('我会让你雀跃不已到，足以忘记郁闷和痛苦！');
      await maya.say_and_wait('我会让你的注意力都只集中在我身上！');
      await brian.say_and_wait('……！');
      await maya.say_and_wait('嘻嘻。人家的理解能力很强！');
      await maya.say_and_wait([
        '但是啊，还是会有不懂的事情。因为 ',
        sys_get_colored_callname(24, 16),
        ' 一直都很耀眼。',
      ]);
      await maya.say_and_wait([
        '所以人家会赢过 ',
        sys_get_colored_callname(24, 16),
        '。',
      ]);
      await maya.say_and_wait([
        '我会比 ',
        sys_get_colored_callname(24, 16),
        ' 更加全力以赴，去闪闪发亮的。',
      ]);
      await maya.say_and_wait('然后一定会让你感到雀跃！');
      await brian.say_and_wait('……哼。');
      await brian.say_and_wait('很好，全力以赴上吧。我会击溃你的。');
      await maya.say_and_wait('哼哼☆我会把这句话还给你♪');
      await maya.say_and_wait('因为人家是不可能输的！');
    }
  };

  handlers[race_enum.hans_dai] = async (maya, me, callname) => {
    await print_event_name(
      ['迎向 ', race_infos[race_enum.hans_dai].get_colored_name()],
      maya,
    );
    const brian = get_chara_talk(16);
    await era.printAndWait([
      '然后到了「',
      race_infos[race_enum.hans_dai].get_colored_name(),
      '」当天。',
    ]);
    await maya.say_and_wait(['…………走吧，', callname, '。']);
    await maya.say_and_wait('我已经准备好了！引擎也加满燃料咯！');
    era.printButton('「比赛加油」', 1);
    await era.input();
    await maya.say_and_wait('嗯！');
    era.drawLine();
    await brian.say_and_wait('…………');
    await maya.say_and_wait(['唔！', sys_get_colored_callname(24, 16), '。']);
    await brian.say_and_wait('……你果然来了啊。');
    await maya.say_and_wait('嗯，我来咯。');
    await maya.say_and_wait('嘻嘻，人家是遵守约定的乖孩子。');
    await brian.say_and_wait('……你是小孩子吗。');
    await maya.say_and_wait([
      '咦！？',
      sys_get_colored_callname(24, 16),
      ' 好过分！！怎么可以对人家说这种话！',
    ]);
    await brian.say_and_wait('……把自己当孩子的人就是你自己吧。哼……');
    await brian.say_and_wait('……先走了。');
    await maya.say_and_wait('啊，等等！！');
    await brian.say_and_wait('……唉，还有什么事吗？');
    await maya.say_and_wait('嗯！有！');
    await maya.say_and_wait('你今天要拿出全力哦！');
    await maya.say_and_wait([
      '不能放水哦。人家想赢过全力以赴的 ',
      sys_get_colored_callname(24, 16),
      '。',
    ]);
    await maya.say_and_wait('因为我觉得这样自己才能闪闪发亮。');
    await brian.say_and_wait('……全力吗？');
    await brian.say_and_wait('……别说笑了。');
    await maya.say_and_wait('啊！你这样太过分了吧！人家可是很认真的说──！');
  };

  handlers[race_enum.tenn_spr] = async (maya, me, callname) => {
    await print_event_name(
      ['迎向 ', race_infos[race_enum.tenn_spr].get_colored_name()],
      maya,
    );
    const teio = get_chara_talk(3);
    const amazon = get_chara_talk(12);
    const brian = get_chara_talk(16);
    await era.printAndWait([
      '然后到了「',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      '」当天──',
    ]);
    await teio.say_and_wait(['嗨♪', sys_get_colored_callname(3, 24), '！']);
    await maya.say_and_wait([
      '哇，是 ',
      sys_get_colored_callname(24, 3),
      '！你是来帮我加油的吗？',
    ]);
    await teio.say_and_wait([
      '嗯，',
      sys_get_colored_callname(3, 12),
      ' 也说',
      maya.sex,
      '事情办完后就会冲过来！',
    ]);
    await teio.say_and_wait('嘿嘿，大家好像都很期待哦！你的比赛！');
    await teio.say_and_wait('你看你看，这个！');
    await say_by_passer_by_and_wait('新闻', [
      '『',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      ' 将是两强对决！？』『',
      brian.get_colored_name(),
      ' 和 ',
      maya.get_colored_name(),
      '，谁将获胜！』',
    ]);
    await say_by_passer_by_and_wait('新闻', [
      '『经历',
      race_infos[race_enum.hans_dai].get_colored_name(),
      ' 的激战后，迎来了 ',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      '！』『闪耀的会是巨星 ',
      brian.get_colored_name(),
      '，还是新星 ',
      maya.get_colored_name(),
      ' 呢！』',
    ]);
    await maya.say_and_wait('……！');
    await teio.say_and_wait('嘻嘻，怎么样？开始紧张了吗？');
    await maya.say_and_wait('………………呵呵呵。');
    await maya.say_and_wait(
      '人家怎么可能因为这种事就害怕！已经啊～开始兴奋起来了！',
    );
    await teio.say_and_wait([
      '哇～！',
      sys_get_colored_callname(3, 24),
      ' 大人果然厉害～！太令人佩服了～！',
    ]);
    await maya.say_and_wait('哈哈哈！给我布丁我就原谅你☆');
    await maya.say_and_wait(['嘻嘻。那么 ', callname, '，我先过去了！']);
    era.printButton('「今天绝对不能输哦」', 1);
    await era.input();
    await maya.say_and_wait('嗯，我不会输的！');
    await maya.say_and_wait('我这次一定会完美赢过白仁的！');
    await maya.say_and_wait(['所以 ', callname, ' 也要好好期待哦！']);
    era.drawLine();
    await era.printAndWait([
      me.get_colored_name(),
      ' 目送 ',
      maya.get_colored_name(),
      ' 出场之后──',
    ]);
    await era.printAndWait('（叩叩）');
    await teio.say_and_wait([
      '咦，',
      sys_get_colored_callname(3, 12),
      '？',
      sys_get_colored_callname(3, 24),
      ' 已经走了哦。',
    ]);
    await amazon.say_and_wait('……我说你们，有看到那个视频吗？');
    await teio.say_and_wait([
      '咦，你是说 ',
      sys_get_colored_callname(3, 16),
      ' 的新闻吗？那个我有给 ',
      sys_get_colored_callname(3, 24),
      ' 看……',
    ]);
    await amazon.say_and_wait('不是，是刚刚才播的。');
    await amazon.say_and_wait([
      '……总之 ',
      sys_get_callname(12, 0),
      '，你先看一下吧。',
    ]);
    await era.printAndWait([
      '……',
      me.get_colored_name(),
      ' 拿到的手机上，正在播映一则新闻。',
    ]);
    await say_by_passer_by_and_wait('记者', [
      brian.get_colored_name(),
      '选手，请问这是真的吗！？跑完这次的『',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      '』之后──',
    ]);
    await brian.say_and_wait([
      '嗯，我会针对『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』进行调整。',
    ]);
    await say_by_passer_by_and_wait('记者', [
      '可、可是……',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      ' 是冬季竞赛哦！？现在就做决定会不会太快──',
    ]);
    await brian.say_and_wait('──并不会太快。');
    await brian.say_and_wait('我有事情要去确认，为此需要时间。');
    await brian.say_and_wait([
      '──我要确认我 ',
      brian.get_colored_name(),
      '，究竟能跑到什么地步……！',
    ]);
  };

  handlers[race_enum.takz_kin] = async (maya) => {
    if (era.get('cflag:24:育成回合计时') < 96) {
      return true;
    }
    await print_event_name(
      ['迎向 ', race_infos[race_enum.takz_kin].get_colored_name()],
      maya,
    );
    const brian = get_chara_talk(16),
      amazon = get_chara_talk(12);
    await era.printAndWait([
      '到了「',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '」当天。而这次──',
    ]);
    await maya.say_and_wait([
      '……',
      sys_get_colored_callname(24, 16),
      ' 不会参赛。',
    ]);
    await maya.say_and_wait('啊哈哈☆真是最棒的机会了！只有我会出赛！');
    await maya.say_and_wait('所以我是不会输的。──我会做好眼前该做的事。');
    era.printButton('「去更加成长吧！」', 1);
    await era.input();
    await maya.say_and_wait('收到☆我会听从指示，迅速进步的♪');
    era.drawLine();
    await era.printAndWait('（哇啊啊啊啊啊────！！）');
    await amazon.say_and_wait('哦，你来了啊。');
    await brian.say_and_wait('……哼，因为没有拒绝的理由。');
    await brian.say_and_wait('所以是有什么事。把我找来这么远的地方。');
    await brian.say_and_wait(
      '如果不是什么大不了的事，我之后就不会再跟你交谈了。',
    );
    await amazon.say_and_wait(
      '总之你先静下来。你直觉这么敏锐，应该察觉到了吧？',
    );
    await amazon.say_and_wait([
      '在这次的『',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '』上，『',
      sys_get_colored_callname(12, 24),
      '』会参赛。',
    ]);
    await brian.say_and_wait('……那又怎么了。');
    await amazon.say_and_wait('哼，别在那假装你不感兴趣啦。');
    await amazon.say_and_wait([
      '你对',
      maya.sex,
      '有所渴求。一个能解放你的某种东西。',
    ]);
    await brian.say_and_wait('……你早就注意到了吗？');
    await amazon.say_and_wait('我可是追着你的背影好几年了。');
    await amazon.say_and_wait('虽然我最后还是不知道你想要的究竟是什么。');
    await amazon.say_and_wait('不过至少我有发现到你在忍耐某件事情。');
    await amazon.say_and_wait('也发现继续这样下去一点意思也没有。');
    await brian.say_and_wait('哼，所以你才将希望寄托在那家伙身上？');
    await brian.say_and_wait([
      '你好像特别关注',
      maya.sex,
      '，而且还栽培',
      maya.sex,
      '啊。',
    ]);
    await amazon.say_and_wait('哦，你早就知道了？');
    await brian.say_and_wait([
      '因为',
      maya.sex,
      '那不懂得放弃的烦人跑法，跟某人还真像啊。',
    ]);
    await amazon.say_and_wait([
      '哈哈，是啊。',
      maya.sex,
      '跟你很像，都很贪心。',
    ]);
    await brian.say_and_wait('……哼。');
    await amazon.say_and_wait([
      '就顺便告诉你好了。',
      maya.sex,
      '还会继续成长。',
    ]);
    await amazon.say_and_wait([
      '对于说什么『这是最后』这种丧气话的你，',
      maya.sex,
      '一定会赏你一个大大的耳光吧。',
    ]);
    await amazon.say_and_wait('然后等你被打醒之后──');
    await amazon.say_and_wait('这次就换我来击败你了。');
    await brian.say_and_wait(
      '……哼，亚马同学也变得圆滑不少啊。居然还帮助敌人。',
    );
    await amazon.say_and_wait('你在说什么。不是敌人，而是劲敌吧？');
    await brian.say_and_wait('……呵。');
  };

  handlers[race_enum.tenn_sho] = async (maya, me, callname) => {
    if (era.get('cflag:24:育成回合计时') < 96) {
      return true;
    }
    await print_event_name(
      ['迎向 ', race_infos[race_enum.tenn_sho].get_colored_name()],
      maya,
    );
    const teio = get_chara_talk(3);
    await era.printAndWait([
      '──终于迎来了「',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '」。跨越这场比赛后，',
      maya.get_colored_name(),
      ' 将……',
    ]);
    await maya.say_and_wait(['……我要上了！', callname, '！']);
    await maya.say_and_wait([
      '我会赢得这场比赛，提升实力！一定要……参加『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』！！',
    ]);
    era.printButton('「一路顺风！」', 1);
    await era.input();
    await maya.say_and_wait('嗯！');
    await teio.say_and_wait('啊、啊啊……不好意思！');
    await maya.say_and_wait(['哇，', sys_get_colored_callname(24, 3), '！？']);
    await teio.say_and_wait('没错！答对了！');
    await teio.say_and_wait([
      '我来传话给 ',
      sys_get_colored_callname(3, 24),
      '！委托人是 ',
      sys_get_colored_callname(3, 12),
      '！',
    ]);
    await teio.say_and_wait([
      { color: get_chara_color(12), content: '『' },
      sys_get_colored_callname(12, 24),
      { color: get_chara_color(12), content: '！你从春天开始就是我的──』' },
      '……以下略过～',
    ]);
    era.printButton('「这样可以吗！？」', 1);
    await era.input();
    await teio.say_and_wait('可以啦可以啦！重要的是最后一段！');
    await teio.say_and_wait([
      {
        color: get_chara_color(12),
        content: '『我也很期待能跟变强的你比赛。我从今天起──就是你的劲敌了。』',
      },
    ]);
    await teio.say_and_wait([
      maya.sex,
      '是这么说的！我也懂',
      maya.sex,
      '的心情。因为我也很想跟你比赛！',
    ]);
    await teio.say_and_wait([
      '所以别输了！要赢哦，',
      sys_get_colored_callname(3, 24),
      '！',
    ]);
    await teio.say_and_wait('登上顶点，让大家去追你吧！');
    await maya.say_and_wait('啊哈哈，这是叫我逃给大家追吗？');
    await teio.say_and_wait([
      '哎呀呀。难道 ',
      sys_get_colored_callname(3, 24),
      ' 是只会追人的吗？',
    ]);
    await maya.say_and_wait(['呵呵～才没这种事☆对吧，', callname, '！']);
    era.printButton(`「${sys_get_callname(0, 24)} 不管什么都办得到」`, 1);
    await era.input();
    await maya.say_and_wait('嘿嘿！说得对☆');
    await maya.say_and_wait(
      '呵呵。所以人家会跑出怎样的表现，你们两个千万不能错过哦♪',
    );
  };
};
