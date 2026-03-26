const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,{wait_flag:boolean},EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[95 + 15] = async (urara, me, in_urara, callname, _, flags) => {
    await print_event_name('后援会•暴走！', urara);
    await in_urara.say_as_unknown_and_wait([
      '您说过，您一定会保护乌拉拉的对吧？不用担心，我不是在怀疑训练员',
      me.adult_sex_title,
      '（您）',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '只是有些时候，就算能将身体挡在',
      urara.sex,
      '的前面，您又要怎么修补受伤的内心呢？',
    ]);
    era.drawLine();
    await era.printAndWait([
      '看着商店街的各位递来的传单，',
      me.get_colored_name(),
      ' 几乎是两眼一黑。',
    ]);

    era.printButton('「这个，难道就是大家想出来的方法吗？」', 1);
    await era.input();

    await era.printAndWait([
      '商店街的人「嗯？怎么了训练员',
      me.sex_code - 1 ? '小妹' : '小哥',
      '，这有什么问题吗？就连乌拉拉自己也在发哦？」',
    ]);
    await era.printAndWait([
      '颤抖地攥着手中薄薄的纸张，',
      me.get_colored_name(),
      ' 极力的抑制着自己想要当场发作的心情。',
    ]);
    await era.printAndWait([
      '传单上印的是「请为 ',
      urara.get_colored_name(),
      ' 的有马投票」，而作为训练员的 ',
      me.get_colored_name(),
      ' 心情也几乎和突发的头痛一样炸裂了。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 知道这是大家出于善意的举动所以不好说什么，',
      me.get_colored_name(),
      ' 也清楚被拉来的 ',
      urara.get_colored_name(),
      ' 大概根本不明白状况。',
    ]);
    await era.printAndWait([
      '但是说到底，即使并非不允许，用这样几乎是在否认其他',
      urara.uma_sex_title,
      '的努力的方式毫无疑问是错误的。',
    ]);

    const race_history = RaceHistory.get(52);
    if (race_history.get_result(47 + 48)?.race === race_enum.arim_kin) {
      await era.printAndWait([
        '话说他们上次难道也用了这样的方式？而且这次还把 ',
        urara.get_colored_name(),
        ' 也叫来一起做这样的事？',
      ]);
      await era.printAndWait([
        '大叔大婶们啊，',
        urara.get_colored_name(),
        ' 的训练员不是不理解 ',
        me.get_colored_name(),
        ' 们的良苦用心，但这不是促销活动那么单纯的事啊……',
      ]);
    }
    era.printButton('「……乌拉拉现在在什么地方？」', 1);
    await era.input();

    await era.printAndWait([
      '商店街的人「嗯？好像沿街找找应该就能看到吧……等一下，',
      me.sex_code - 1 ? '小妹' : '小哥',
      '这是急着去哪啊？」',
    ]);

    era.printButton(
      '「抱歉！我突然想起了点急事，东西先放在这里，我回来的时候在拿！」',
      1,
    );
    await era.input();

    await era.printAndWait([
      '将刚买的果蔬与手中的传单一起扔下，',
      me.get_colored_name(),
      ' 在匆匆告别了店主后立刻挤进了商店街活动日的人潮。',
    ]);
    await era.printAndWait([
      '随着 ',
      urara.get_colored_name(),
      ' 的奔跑逐渐起色，这条街也摆脱了过去的萧条，但如今这样的繁荣却意外的给 ',
      me.get_colored_name(),
      ' 带来了不小的麻烦。',
    ]);
    await era.printAndWait([
      '最终在一圈人群最密集的地方，',
      me.get_colored_name(),
      ' 远远的发现了一团被路过的人流团团包围的樱粉色。',
    ]);
    await era.printAndWait([
      '但安心感一刻都没有停留，',
      me.get_colored_name(),
      ' 便在人群中看到了逐渐靠近的另外一人，稳下的心也随之摔到了谷底。',
    ]);
    await era.printAndWait([
      '那是曾与 ',
      urara.get_colored_name(),
      ' 一起在「',
      race_infos[race_enum.febr_sta].get_colored_name(),
      '」中竞技的好友，但如今的',
      urara.sex,
      '的双腿却缠满了沉重的绷带。',
    ]);
    await era.printAndWait([
      '仿佛被所有人都忽视了一般，面色阴沉的',
      urara.sex,
      '拖着伤痕累累的双腿，竟然十分轻巧的绕过了人群。',
    ]);
    await era.printAndWait([
      '而站定在 ',
      urara.get_colored_name(),
      ' 面前的',
      urara.sex,
      '，无力地垂在身侧的手中，还抓着一份皱巴巴的宣传单……',
    ]);
    await era.printAndWait([
      '意识到即将发生什么 ',
      me.get_colored_name(),
      ' 急忙发力想要冲进包围 ',
      urara.get_colored_name(),
      ' 的人群，但却反被生冷的人潮裹挟着越推越远。',
    ]);
    await me.say_and_wait('等下，先别说话，不该是这样，就算不可避免也先等等——');
    await urara.say_and_wait(
      '——啊，好久不见！乌拉拉好像好久没在学校里看到你了，最近在忙什么呢？',
    );
    await urara.say_and_wait('啊，还有你的腿……受伤了吗？到底是什么时候……');
    await era.printAndWait([
      urara.uma_sex_title,
      'A「……没关系的，其实也没什么，不过乌拉拉这又是什么……是为了参加『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』吗？」',
    ]);
    await era.printAndWait([
      '生冷的打断乌拉拉的热情，神情复杂的好友将宣传单摆在了小',
      urara.uma_sex_title,
      '的面前。',
    ]);
    await urara.say_and_wait([
      '嗯？是这样吗？不过大家都说这是和乌拉拉的 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      ' 有关，所以乌拉拉来帮忙了！',
    ]);
    await era.printAndWait([
      urara.uma_sex_title,
      'A「',
      urara.get_colored_actual_name(),
      '，你果然不知道自己在做什么？开什么玩笑啊……」',
    ]);
    await urara.say_and_wait(
      '这个嘛，虽然我也不太懂，乌拉拉应该是在帮大家发传单吧？',
    );
    await urara.say_and_wait('诶？怎么了？你真的没关系吗？你的脸色好差……');
    await era.printAndWait([
      '从失望到绝望再到崩溃只在几秒之间，任由负面情绪爆发的',
      urara.teen_sex_title,
      '一把推开了想要靠近的好友。',
    ]);
    await era.printAndWait(
      '随后而至的，便是一声响亮的耳光，以及失控到仿佛是歇斯底里的斥责声。',
    );
    await era.printAndWait([
      urara.uma_sex_title,
      'A「别开玩笑了！拜托乌拉拉你别再这么幼稚了！仔细看看这张纸！你知道你在做什么吗？！」',
    ]);
    await era.printAndWait([
      '被好友突然的施以暴力，',
      urara.get_colored_name(),
      ' 与手中被打翻的纸张一同散乱的跌坐在地上。',
    ]);
    await era.printAndWait([
      '不可置信地捂住红肿灼热的脸颊，茫然无助的泪水也委屈的蓄满了小',
      urara.uma_sex_title,
      '的眼眶。',
    ]);
    await era.printAndWait([
      '但就算还不明白自己究竟做错了什么，决堤的情绪也不会给短暂失语的',
      urara.sex,
      '一点辩解的余地。',
    ]);
    await era.printAndWait([
      urara.uma_sex_title,
      'A「大家都正在为了想参加的比赛……为了想获胜的比赛而努力！甚至赌上了一切！」',
    ]);
    await era.printAndWait([
      '在哭泣中呐喊着，',
      urara.teen_sex_title,
      '因失意与不甘而积压在心底的声音倾泻而出。',
    ]);
    await era.printAndWait([
      urara.uma_sex_title,
      'A「但现在，乌拉拉你居然……居然真的想要利用别人轻易地实现梦想……」',
    ]);
    await era.printAndWait([
      urara.uma_sex_title,
      'A「你当然可以说不知道，但这样的话……燃烧自己的大家又都算是什么啊！」',
    ]);
    await era.printAndWait([
      urara.uma_sex_title,
      'A「反正乌拉拉为了自己能够连骗子都当……既然这样那就干脆不要再参加比赛好了！」',
    ]);
    await urara.say_and_wait('……我不是……乌拉拉不是的……对不起……但是……');
    await era.printAndWait([
      '压抑的呜咽在好友的声讨中逐渐转为低声的啜泣，小',
      urara.uma_sex_title,
      '本就不设防的内心再也抑制不住眼角的泪水。',
    ]);
    await era.printAndWait([
      '但就算 ',
      urara.get_colored_name(),
      ' 想要为自己辩解，因精神受到冲击而变得嘶哑的喉咙也挤不出一句完整的话语。',
    ]);
    await era.printAndWait([
      '而在令人绝望的僵持中，受伤的',
      urara.teen_sex_title,
      '还是率先一把抹掉眼泪，沉默地向 ',
      urara.get_colored_name(),
      ' 踏出一步……',
    ]);
    await era.printAndWait([
      '终于冲出了因事出突然而无人敢上前阻拦的旁观者们，',
      me.get_colored_name(),
      ' 抓住了那只伸向小',
      urara.uma_sex_title,
      '的手腕。',
    ]);
    await era.printAndWait([
      '被 ',
      me.get_colored_name(),
      ' 的突然行动所吓到，逐渐恢复理智的',
      urara.uma_sex_title,
      '内疚地将手抽回，拖动着笨拙的伤腿挪回了原来的位置。',
    ]);
    await era.printAndWait([
      urara.uma_sex_title,
      'A「对不起，你是乌拉拉的训练员吗？我只是想拉',
      urara.sex,
      '起来……」',
    ]);

    era.printButton(
      '「冷静下来了就好好想想吧，现在的你对乌拉拉来说就和周围只会围观的人一样恐怖啊。」',
      1,
    );
    await era.input();

    await era.printAndWait([
      '竭力抑制着自己的怒气，',
      me.get_colored_name(),
      ' 用身体半挡在两人中间，并将手向后伸到了瑟瑟发抖的 ',
      urara.get_colored_name(),
      ' 面前。',
    ]);

    era.printButton(
      '「这位同学，你的情绪我并非不能理解，但是你以为现在伤害好友的你又算什么？」',
      1,
    );
    await era.input();
    era.printButton(
      `「向毫无关联的朋友泄愤的你没资格指责${urara.sex}，现在请跟乌拉拉保持距离！」（好感+20）`,
      1,
    );
    era.printButton(
      `「别以为${urara.sex}能包容你就可以发泄在${urara.sex}身上，闹够了就现在离乌拉拉远点！」（爱慕+10）`,
      2,
    );
    const ret = await era.input();

    await era.printAndWait(
      '似乎是被面前的大人那没能完全抑制住的怒气所震慑，又或者是听到了商店街的人们赶来的脚步。',
    );
    await era.printAndWait([
      '面对因自己的冲动而破碎也已然无法挽回的友谊，失落的',
      urara.teen_sex_title,
      '终于沙哑地说出了本来的目的。',
    ]);
    await era.printAndWait([
      urara.uma_sex_title,
      'A「……对不起，我本来只是想在离开特雷森前来看看乌拉拉的，但结果却变成这样……」',
    ]);
    await era.printAndWait([
      urara.uma_sex_title,
      'A「我本来是想说些开心的事、好好道别的，真的很对不起……」',
    ]);
    await era.printAndWait([
      '说完这些，',
      urara.teen_sex_title,
      '便拖着沉重的身体转身离去，一瘸一拐的背影慢慢消失了在逐渐被疏散的人群当中。',
    ]);
    await era.printAndWait([
      '而无力地借着 ',
      me.get_colored_name(),
      ' 的臂膀靠在身边，小小的',
      urara.uma_sex_title,
      '此刻既无法去追赶背影，也想不出该挽留。',
    ]);
    await urara.say_and_wait([
      callname,
      '，',
      urara.sex,
      '……',
      urara.sex,
      '难道是……',
    ]);
    await era.printAndWait([
      '只是虽然还组织不出像样语言，但 ',
      urara.get_colored_name(),
      ' 还是努力地发出着声音，向 ',
      me.get_colored_name(),
      ' 确认着好友离开前的话语。',
    ]);

    era.printButton(
      `「……嗯，${urara.sex}的腿已经没法再奔跑了，${urara.sex}已经……没有能实现梦想的下一次了。」`,
      1,
    );
    await era.input();

    await era.printAndWait([
      '很遗憾，这次的「再也不见」并非讨厌的玩笑，而 ',
      me.get_colored_name(),
      ' 也做不到真相摆在眼前还能编造不切实际的希望。',
    ]);

    if (race_history.get_result(95 + 7)?.race === race_enum.febr_sta) {
      if (race_history.get_result(95 + 7)?.rank === 1) {
        await urara.say_and_wait([
          '那……',
          callname,
          '，是乌拉拉……夺走了',
          urara.sex,
          '的……是乌拉拉……',
        ]);
        await urara.say_and_wait([
          '抢走了朋友的笑容的人……是乌拉拉亲手……抢走了',
          urara.sex,
          '的幸福……',
        ]);
      } else {
        await urara.say_and_wait([callname, '……是乌拉拉吗……刚才是乌拉拉……']);
        await urara.say_and_wait([
          '是乌拉拉……糟蹋了朋友的笑容……一直以来，到底在……',
        ]);
      }
    }
    era.printButton('「乌拉拉，别说了，这不是你的错！」', 1);
    await era.input();

    await urara.say_and_wait([
      '但是就算这样……那',
      urara.sex,
      '的笑容、',
      urara.sex,
      '的幸福……为什么',
      urara.sex,
      '会遇上这样的事……',
    ]);
    await urara.say_and_wait(
      '乌拉拉所做的一切……都是错的吗……到底要怎样，大家才能……',
    );
    await urara.say_and_wait('这样的话……乌拉拉的奔跑……我……比赛也……');
    await era.printAndWait([
      '几乎是呕血一般，',
      urara.get_colored_name(),
      ' 如今所说出的每一个词仿佛都是在对自己鞭挞般的否定。',
    ]);
    await era.printAndWait([
      '因此变得鲜血淋漓的，也并非 ',
      urara.get_colored_name(),
      ' 一人，',
      me.get_colored_name(),
      ' 与在场为 ',
      urara.get_colored_name(),
      ' 而来的每个人，都在小',
      urara.uma_sex_title,
      '破碎的声音中几近窒息。',
    ]);
    await era.printAndWait([
      '大家都清楚这并非',
      urara.sex,
      '的错，想要给别人带来希望的春风也绝不会想要伤害任何人。',
    ]);
    await era.printAndWait([
      '但现在 ',
      me.get_colored_name(),
      ' 唯一能做的，也只有让 ',
      urara.get_colored_name(),
      ' 躲在自己的怀中，暂时毫无顾虑地释放自己的悲伤了。',
    ]);
    await era.printAndWait([
      '尽管这股因他人而起的悲伤，从一开始就不应属于善良的',
      urara.sex,
      '，而是自私地将所谓的「善意」强硬推给',
      urara.sex,
      '的大人们。',
    ]);
    await era.printAndWait([
      '商店街的人「',
      me.sex_code - 1 ? '小妹' : '小哥',
      '，现在要怎么办……」',
    ]);

    era.printButton(
      '「……总之，不管刚才在做什么、做了什么，现在全都停下吧……」',
      1,
    );
    await era.input();

    await era.printAndWait([
      '抱紧怀中还在释放着悲伤的担当，',
      me.get_colored_name(),
      ' 也自责的闭上了眼睛。',
    ]);
    await era.printAndWait([
      '如果当时能来得再早一点的话，或许 ',
      urara.get_colored_name(),
      ' 就能……',
    ]);
    era.drawLine();
    await era.printAndWait([
      '商店街的 ',
      urara.get_colored_name(),
      ' 有马宣传的活动在当天就宣布中止，',
      me.get_colored_name(),
      ' 也带着 ',
      urara.get_colored_name(),
      ' 回到了特雷森。',
    ]);
    await era.printAndWait([
      '只是就算尽全力去安抚 ',
      urara.get_colored_name(),
      '，小',
      urara.uma_sex_title,
      '那心碎的表情还是深深地印在了每个人的心里。',
    ]);
    await era.printAndWait([
      '之前的 ',
      me.get_colored_name(),
      ' 为了让 ',
      urara.get_colored_name(),
      ' 避开「危险」想过无数种可能性，但这场无妄之灾还是降临在了',
      urara.sex,
      '的身上。',
    ]);
    await era.printAndWait([
      '为什么一定要是 ',
      urara.get_colored_name(),
      '？',
      urara.get_colored_name(),
      ' 的内心会因此留下什么？',
      urara.sex,
      '又做错了什么……',
    ]);
    await era.printAndWait([
      '在找到填补小',
      urara.uma_sex_title,
      '心伤的办法之前，恐怕很多人都会难以入眠吧……',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait(
      '……看吧，又一个人的希望破碎了，在执意改变之前，乌拉拉并没有想过这些吧？',
    );
    await in_urara.say_as_unknown_and_wait([
      '不过',
      urara.sex,
      '大概又会勉强自己和平常一样吧，因为',
      urara.sex,
      '是乌拉拉，',
      urara.sex,
      '不愿意给别人太多负担。',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '所以在故事结束前，也只能尝试慢慢修好',
      urara.sex,
      '的心了，除此之外别无它法……',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '但故事不会就这么结束，请务必要撑到最后……',
    );
    era.println();
    flags.wait_flag = get_attr_and_print_in_event(
      52,
      [0, 5, 0, 5, 0],
      0,
      undefined,
      true,
    );
    flags.wait_flag =
      sys_like_chara(52, 0, 20 * (ret === 1), true, 10 * (ret === 2)) ||
      flags.wait_flag;
  };

  handlers.food = async (urara, me, _, callname, __, flags) => {
    await print_event_name('鲷鱼烧与挑食对策', urara);
    await era.printAndWait([
      '在某日外出训练的闲暇之余，',
      me.get_colored_name(),
      ' 与 ',
      urara.get_colored_name(),
      ' 一同如临大敌的站在鲷鱼烧摊铺面前。',
    ]);
    await urara.say_and_wait([
      callname,
      '，准备好了吗？今天可是说好的要一起吃的哦？',
    ]);

    era.printButton(
      '「我是没什么问题，主要是乌拉拉你啊……不好意思，两个随机口味的鲷鱼烧。」',
      1,
    );
    await era.input();

    await era.printAndWait([
      '瞥了眼一侧跃跃欲试的 ',
      urara.get_colored_name(),
      '，',
      me.get_colored_name(),
      ' 无奈地向店员点了两份「隐藏菜单」。',
    ]);
    await urara.say_and_wait(
      '没关系的！就算是抽到了不喜欢的口味，乌拉拉也一定会好好吃完的！',
    );
    await urara.say_and_wait([
      '那么 ',
      callname,
      '，要一起咬下去了哦……呜啊……是、是芥末的……！',
    ]);
    await era.printAndWait([
      '结果还没将身下的长椅焐热，小',
      urara.uma_sex_title,
      '就像是被自己手中的那块点心反咬一口般弹了起来。',
    ]);
    await era.printAndWait([
      '而身为大人，',
      me.get_colored_name(),
      ' 冷静的注视着辣得满脸通红的 ',
      urara.get_colored_name(),
      '，一边吃掉了自己手中那块青椒馅的怪味点心。',
    ]);

    era.printButton(
      '「乌拉拉，没事吧？受不了的话那块给我解决掉也没关系哦？」',
      1,
    );
    await era.input();

    await urara.say_and_wait(
      '呜～不要紧的！乌拉拉可以独自吃完！要上了……呜啊……',
    );
    await era.printAndWait([
      '看着虽然满脸通红但依旧干劲满满小担当，',
      me.get_colored_name(),
      ' 默默地去不远处给',
      urara.sex,
      '买了两杯偏甜的饮料……',
    ]);
    await era.printAndWait([
      '总之，虽然吃到了整蛊般的点心，但在 ',
      me.get_colored_name(),
      ' 的鼓励下，',
      urara.get_colored_name(),
      ' 的干劲反而提升了。',
    ]);
    era.println();
    flags.wait_flag = sys_change_motivation(52, 1);
  };
};
