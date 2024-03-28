const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');
const { attr_enum, attr_names } = require('#/data/train-const');

/**
 * @param {HookArg} hook
 * @param {Record<string,*>} extra_flag
 */
module.exports = async (hook, extra_flag) => {
  const callname = sys_get_callname(52, 0),
    love = era.get('love:52'),
    me = get_chara_talk(0),
    urara = get_chara_talk(52);
  hook.arg = (await select_action_around_river()) > 0;
  if (hook.arg) {
    let random_range = 2;
    if (love === 100) {
      random_range = 5;
    } else if (love >= 75) {
      random_range = 4;
    } else if (love >= 5) {
      random_range = 3;
    }
    switch (get_random_value(0, random_range)) {
      case 0:
        await urara.say_and_wait([
          '今天这里的空气也很新鲜，感觉身体更轻盈了！',
          callname,
          '！我现在可以跑一跑吗？',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 同意了担当的请求，但是考虑到 ',
          urara.get_colored_name(),
          ' 摔倒的可能性，',
          me.get_colored_name(),
          ' 跟着 ',
          urara.get_colored_name(),
          ' 一起小跑起来。',
        ]);
        break;
      case 1:
        await urara.say_and_wait([
          '这附近有很多很多漂亮的小虫子呦！看我抓一些来给 ',
          callname,
          '……诶？不行？',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 很感谢担当想要分享的心意，但散步时抓虫子还是太有 ',
          urara.get_colored_name(),
          ' 的风格了……',
        ]);
        await era.printAndWait([
          '这样想着，',
          me.get_colored_name(),
          ' 往被及时叫停的担当身上喷着驱虫水。',
        ]);
        break;
      case 2:
        await urara.say_and_wait(
          '其实大家们偶尔也会来这里哦！果然和别人一起来这里才会更有趣！',
        );
        await urara.say_and_wait(
          '不要兴奋地和大家一起跳进河里……？我、我知道啦……',
        );
        await era.printAndWait([
          '虽然还是很脱线，不过 ',
          urara.get_colored_name(),
          ' 有朋友陪着的话，应该不要紧的吧。',
        ]);
        break;
      case 3:
        await urara.say_and_wait([
          '这里很少有人来吧！和 ',
          callname,
          ' 一起玩的话也不会被打扰！真是个好地方呢！',
        ]);
        await urara.say_and_wait([
          '诶嘿嘿～虽然那样做不好，但这里只有乌拉拉和 ',
          callname,
          ' 两人哦……',
        ]);
        await era.printAndWait([
          '在树林的阴影映照下，',
          urara.get_colored_name(),
          ' 微红的脸颊似乎变得有些可怕起来……',
        ]);
        break;
      case 4:
        await urara.say_and_wait([
          callname,
          '！再靠近一点吧……诶嘿嘿～总觉得像是在河边约会呢！',
          callname,
          ' 是怎么想的？',
        ]);
        await era.printAndWait([
          '似乎是期待着 ',
          me.get_colored_name(),
          ' 的回答，',
          urara.get_colored_name(),
          ' 纯洁的笑容染上了一抹害羞的红晕。',
        ]);
        break;
      case 5:
        await urara.say_and_wait([
          sys_get_colored_callname(52, 30),
          ' 的书上有很多主角在河边幽会的故事呢！在牵手之后，接下来会发生的是……',
        ]);
        await urara.say_and_wait([
          '嘿嘿～其实都是些不好懂的事呢！但是就算不那样做，我和 ',
          callname,
          ' 也会在一起哦！',
        ]);
        await era.printAndWait([
          '紧紧地牵着 ',
          me.get_colored_name(),
          ' 的手，',
          urara.get_colored_name(),
          ' 对 ',
          me.get_colored_name(),
          ' 如大人般温柔的笑着。',
        ]);
    }
  } else {
    await era.printAndWait([
      '为了今天的户外活动，',
      me.get_colored_name(),
      ' 与 ',
      urara.get_colored_name(),
      ' 带好钓鱼用具，一同来到了平常散步时会去的河边。',
    ]);
    await era.printAndWait([
      '虽然是跟 ',
      urara.get_colored_name(),
      ' 约好了今天要外出游玩，但其实 ',
      me.get_colored_name(),
      ' 也没想到会和 ',
      urara.get_colored_name(),
      ' 出来钓鱼。',
    ]);
    await era.printAndWait([
      '观察着旁边兴致勃勃的哼着Live歌曲的 ',
      urara.get_colored_name(),
      '，',
      me.get_colored_name(),
      ' 在心里默念着今天的 ',
      urara.get_colored_name(),
      ' 不要「五分钟热度」。',
    ]);
    await era.printAndWait([
      '只是话说回来，钓鱼能用作 ',
      urara.get_colored_name(),
      ' 的耐性训练吗？',
    ]);
    era.println();

    if (era.get('relation:52:0') > 150 && new UraraEduMarks().loop < 2) {
      await era.printAndWait([
        me.get_colored_name(),
        ' 本能的思考着，但一如既往的在得出答案前就被 ',
        urara.get_colored_name(),
        ' 的声音打断了。',
      ]);
      await urara.say_and_wait([
        '啊！',
        callname,
        ' 你看！水里的小鱼好像伸出手就能捉到呢！',
      ]);
      await era.printAndWait([
        '还没放下工具就蹲在了河边，',
        urara.get_colored_name(),
        ' 向 ',
        me.get_colored_name(),
        ' 兴奋地比划着手指。',
      ]);
    } else {
      await era.printAndWait([
        urara.get_colored_name(),
        ' 在 ',
        me.get_colored_name(),
        ' 旁边尽量保持着安静的样子，但在接近水边后',
        urara.sex,
        '的步伐也肉眼可见的越来越轻快起来。',
      ]);
      await urara.say_and_wait([callname, '！这里、这里就能看见哦！']);
      await era.printAndWait([
        '按捺不住自己的兴奋，小',
        urara.get_uma_sex_title(),
        '刚到水边就笑着用手指接近了水面的鱼影。',
      ]);
    }
    era.println();

    era.printButton('「不可以直接跳下河抓鱼哦？」', 1);
    await era.input();

    await urara.say_and_wait('嗯！今天的乌拉拉会用钓竿好好的钓鱼！');
    await era.printAndWait([
      '至少准确的保证一下不会跳下去啊。面对担当仅是「忍住不去」的回答，',
      me.get_colored_name(),
      ' 也只得苦笑着摇了摇头。',
    ]);
    await era.printAndWait([
      '准备万全后，',
      me.get_colored_name(),
      ' 与 ',
      urara.get_colored_name(),
      ' 一同抛出钓竿，鱼钩划出一道弧线，浮标在水面上成为一个不起眼的小点。',
    ]);
    await era.printAndWait([
      '只是话说回来，钓鱼能用作 ',
      urara.get_colored_name(),
      ' 的耐性训练吗？手中握着吊杆，',
      me.get_colored_name(),
      ' 又开始本能的思考起来。',
    ]);
    era.println();
    if ((extra_flag.jpy = get_random_value(0, 5))) {
      await urara.say_and_wait([callname, '！乌拉拉这次又抓到了！']);
      await era.printAndWait([
        '水桶随着时间的推移被逐渐装满，',
        urara.get_colored_name(),
        ' 也正将最后一条「战利品」从水中拖出来。',
      ]);
      await era.printAndWait([
        '如果 ',
        urara.get_colored_name(),
        ' 能真的在这里听话，没有亲自下水去把鱼从河里摸出来就更好了。',
      ]);
      await era.printAndWait([
        '哭笑不得的看着 ',
        urara.get_colored_name(),
        ' 沾湿大半的衣物和',
        urara.sex,
        '怀中的大鱼，',
        me.get_colored_name(),
        ' 还是一如既往的没能说出什么责备的话。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 确实很厉害啊，不过随便下水的话就算是',
        urara.get_uma_sex_title(),
        '也是很容易着凉的。',
      ]);
      await era.printAndWait([
        '收起钓竿，',
        me.get_colored_name(),
        ' 伸手擦了擦小',
        urara.get_uma_sex_title(),
        '还沾着水珠的头发，而 ',
        urara.get_colored_name(),
        ' 也在要回应时轻声打了个可爱的喷嚏。',
      ]);
      await era.printAndWait([
        '结果还是会变成这样啊。笑着将外套搭在有点愧疚的 ',
        urara.get_colored_name(),
        ' 身上，',
        me.get_colored_name(),
        ' 与担当拎着满满两桶收获踏上归路。',
      ]);
      await era.printAndWait([
        '这次就给险些着凉的小',
        urara.get_uma_sex_title(),
        '炖个鱼汤吧。',
      ]);
      const attr_change = new Array(5).fill(0),
        temp = get_random_entry(
          Object.values(attr_enum).filter(
            (e) =>
              era.get(`base:52:${attr_names[e]}`) <
              era.get(`maxbase:52:${attr_names[e]}`),
          ),
        );
      if (temp !== undefined) {
        attr_change[temp] = 5;
        get_attr_and_print_in_event(52, attr_change, 0);
      }
    } else {
      await urara.say_and_wait('嘿嘿……到底……有没有上钩呢……');
      await era.printAndWait([
        '收拾好放钓具的箱子与两只空桶，',
        me.get_colored_name(),
        ' 背起了断断续续说着梦话的担当。',
      ]);
      await era.printAndWait([
        '即使本来没什么耐性的 ',
        urara.get_colored_name(),
        ' 为了能有收获愿意等到睡着，今天的成果也是一看就知道是毫无疑问的零。',
      ]);
      await era.printAndWait([
        '难得 ',
        urara.get_colored_name(),
        ' 认真起来，一无所获确实有些可惜，但一想钓鱼本来就是这样的事，心情上就只剩下一点无奈了。',
      ]);
      await era.printAndWait([
        '不过虽然体检表上体重写的是稍微变重，但 ',
        urara.get_colored_name(),
        ' 真是意外的轻啊。',
      ]);
      await era.printAndWait([
        '想着对',
        urara.get_teen_sex_title(),
        '来说可能有些失礼的内容，',
        me.get_colored_name(),
        ' 背着熟睡的悠悠地小 ',
        urara.get_colored_name(),
        ' 走在来时的路上。',
      ]);
      await era.printAndWait([
        '只是不知道，',
        urara.get_colored_name(),
        ' 在梦里究竟能钓到多少条鱼啊……',
      ]);
    }
  }
};
