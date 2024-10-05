const era = require('#/era-electron');

const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const get_gradient_color = require('#/utils/gradient-color');

const { race_enum } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

/** @param {{race:number,rank:number,relation_change:number,love_change:number,attr_change:number[],pt_change:number}} extra_flag  */
function fill_common_rewards(extra_flag) {
  extra_flag.attr_change = new Array(5);
  if (extra_flag.rank === 1) {
    extra_flag.attr_change.fill(10);
    extra_flag.pt_change = 50;
    extra_flag.relation_change = 10;
    extra_flag.love_change = 1;
  } else if (extra_flag.rank === 2) {
    extra_flag.attr_change.fill(5);
    extra_flag.pt_change = 40;
    extra_flag.relation_change = 10;
  } else if (extra_flag.rank === 3) {
    extra_flag.attr_change.fill(3);
    extra_flag.pt_change = 25;
    extra_flag.relation_change = 5;
  } else if (extra_flag.rank <= 5) {
    extra_flag.attr_change.fill(1);
    extra_flag.pt_change = 10;
  }
}

/**
 * @param {HookArg} _
 * @param {{race:number,rank:number,relation_change:number,love_change:number,attr_change:number[],pt_change:number}} extra_flag
 */
module.exports = async (_, extra_flag) => {
  const teio = get_chara_talk(3),
    me = get_chara_talk(0),
    edu_weeks = era.get('cflag:3:育成回合计时');

  if (
    extra_flag.race === race_enum.begin_race &&
    edu_weeks < 48 &&
    extra_flag.rank === 1
  ) {
    //出道战
    await print_event_name('帝王，启程！', teio);

    await era.printAndWait(
      `相传，三女神赐下马魂赋予婴孩，让${teio.sex}们拥有无与伦比的身体技能用以驰骋赛场。`,
    );
    await era.printAndWait(
      `而${teio.sex}们所给予的能力，通过赛场表现而分类，大概可以分为以下几种跑法：`,
    );
    era.println();
    await era.printAndWait(
      '首先是逃马。开闸后用极快的速度拉开与对手的距离，讲求速度和高爆发力，缺点是长距离时容易因耐力不足而失速，也因为脚程和速度问题，受伤往往比其他跑法严重。',
    );
    await era.printAndWait(
      `听说有一位橘红发色，跑起来好似流线型载具的${teio.get_uma_sex_title()}便精于此道。`,
    );
    era.println();
    await era.printAndWait(
      `第二种是先行。此种跑法在开闸起跑后不急着拉开距离，反而利用自身的高耐力和速度紧咬在逃马后面，等到逃马一失速就马上反超过去，缺点是对于反超的时机不好掌握，同时对耐力和爆发力的要求颇高，也因为要瞬间加速，因此脚底和小腿更容易在比赛中受伤，且加速时的跑姿对${teio.get_uma_sex_title()}本身的柔韧度有一定的要求。`,
    );
    era.println();
    await era.printAndWait(
      `另一种叫做差行。开闸后待在马群的中间，利用高意志力潜伏在逃马和先行马后，当时机成熟后将利用自身的高爆发力和极高的速度反超杀对方个措手不及，缺点为必须承得住气，对时机的掌握非常看经验判断，且对爆发力要求非常高。听闻，有一位来自乡下的芦毛${teio.get_uma_sex_title()}便以擅长此道而出名。`,
    );
    era.println();
    await era.printAndWait(
      `最后一种为追马。开闸后潜伏在马群的最后面，利用自身的高自制力和耐力蓄势待发，等时机一到马上利用自身的高爆发力和速度反超前面的对手，缺点为反追的成功率不高，也对${teio.get_uma_sex_title()}本身的自制力要求很高。在圈子里口口相传的某个个头小，但奔跑起来如闪电追风般的${teio.get_uma_sex_title()}便是其中佼佼者。`,
    );
    era.println();
    await era.printAndWait(
      `${me.name} 看着 ${
        teio.name
      } 首次参加正式跑步的姿态，结合过往的训练表现，在心里确认了${
        teio.sex
      }的跑法，初步拟定了一个训练计划。皮下若隐若现的小腿肌腱饱满有力，几次加速的步伐展现出的柔韧性良好，对于发力时机的把控仿佛有一种天生的灵敏嗅觉——天才的先行${teio.get_uma_sex_title()}。`,
    );
    await teio.say_and_wait('训练员？怎么样！');
    await era.printAndWait(
      `${teio.sex}一边踢踏着双腿，一边向 ${me.name} 走了过来。${me.name} 一边点了点头，一边跟${teio.sex}讲明了刚刚观察所得知的信息，以及关于训练的方针。`,
    );
    era.println();
    await teio.say_and_wait('嗯……就按你说的做吧！');
    era.println();
    await era.printAndWait(
      `${me.name} 看着${teio.sex}的双腿，不禁身形下蹲，双手迅速盖于其上。`,
    );
    era.println();
    await teio.say_and_wait('欸——欸！');
    era.println();
    await era.printAndWait(
      `手指在${teio.get_uma_sex_title()}最重要的腿部上摩挲，所有信息都从触觉中反馈而来——训练员的技术。果不其然，可以确认一个事实。被 ${
        me.name
      } 的担当称作是「帝王舞步」的特殊跑法，尽管能基于${
        teio.sex
      }特殊的腿部构造最大限度发挥实力，但机遇与风险并存，${
        teio.sex
      }的腿也非常容易受伤，尤其是继续用这种跑法的话……`,
    );
    era.println();
    await teio.say_and_wait('训练员？有什么问题吗？');
    await era.printAndWait(
      `${
        me.name
      } 正在集中精神思考，被传入耳边的娇声激了一下，回归现实。看着脸微微红，偏着头看 ${
        me.name
      } 的${teio.get_uma_sex_title()}，${me.name} 一时竟然不知如何说起。`,
    );
    era.printButton('「……没事，你的身体很厉害啊。」', 1);
    await era.input();
    await teio.say_and_wait(
      '嗯？唔……没事就好。那么训练员，我们就定下契约啦，请你一直跟我跑到最后吧！',
    );
    era.println();
    await era.printAndWait(
      `一阵风吹过，${teio.sex}眯起眼睛，笑嘻嘻地伸出了手。${me.name} 也伸出自己的手，与${teio.sex}的尾指交错，拉勾约定。`,
    );
    await era.printAndWait(
      `至于腿的问题……${
        me.name
      } 想，可能不会影响生涯也说不定，毕竟${teio.get_uma_sex_title()}出现这种问题很常见，自己只要精心护理，制定合适的训练内容，就能至少让${
        teio.sex
      }在役期间不出问题。`,
    );
    await era.printAndWait(
      `如果现在强令${teio.sex}改变习惯……说不定会起反作用，而且万一导致如此天才出不了成绩……那对两个人都不好啊。`,
    );
    await era.printAndWait(`最后，${me.name} 还是选择了保持沉默。`);
    extra_flag.attr_change = [0, 0, 0, 0, 3];
    extra_flag.pt_change = 30;
    extra_flag.relation_change = 5;
    extra_flag.love_change = 1;
  } else if (extra_flag.race === race_enum.waka_sta && edu_weeks < 96) {
    // 经典年若驹S
    await print_event_name('向三冠进发！', teio);
    await era.printAndWait('漂亮。');
    await era.printAndWait(`${me.name} 不禁在内心喝起采来。`);
    await era.printAndWait(
      `一骑绝尘的狂奔，瞬间爆发的加速，姿态完美的身体——真不愧是天才的${teio.get_uma_sex_title()}。`,
    );
    await era.printAndWait('刚出道便有这等表现，真是潜力十足，未来可期。');
    await era.printAndWait(
      `${me.name} 走下看台，在出口处等着自己担当的出现，准备好好夸奖${teio.sex}一番，或许，还该奖励一下${teio.sex}？`,
    );
    era.println();

    await teio.say_and_wait('训练员。');
    era.println();

    era.printButton('「嘿，干得不错啊。」', 1);
    await era.input();

    await era.printAndWait(
      ` ${me.name} 拍了拍${
        teio.sex
      }的肩，顺手搭上去，用恰好的力道揉了揉——帮${teio.get_teen_sex_title()}缓解身体上的疲劳。`,
    );
    await era.printAndWait(
      `${teio.sex}脸颊红晕未退，一脸兴奋地看着 ${me.name}。`,
    );
    era.println();

    await teio.say_and_wait('我，想好了！');
    era.println();

    era.printButton('「怎么？」', 1);
    await era.input();

    await teio.say_and_wait('我的第一个目标——是此后无败，夺下三冠！');
    await era.printAndWait(
      `${teio.get_teen_sex_title()}激情的发言不禁让 ${
        me.name
      } 嘴角上扬，该说是初生牛犊不怕虎，还是说${
        teio.sex
      }缺乏对竞技的认知？不过，年轻人有志气又有什么不好呢？`,
    );
    era.println();

    await me.say_and_wait(
      `这可是个严峻的目标……要知道，曾经有很多出名的赛${teio.get_uma_sex_title()}，现在也有许多天才，${
        teio.sex
      }们无一不想做到这个成就，实际上能达成的凤毛麟角。`,
    );
    await me.say_and_wait(
      '不过，我既然成为了你的训练员，便会尽力辅导你，让你达成心愿的。',
    );

    await era.printAndWait(
      `${teio.get_teen_sex_title()}眨了眨眼，斗志一丝一毫都没有消失。`,
    );
    await teio.say_and_wait('我会努力让这个梦实现的！');
    era.printButton(`那么，我们一起加油吧。`, 1);
    await era.input();
    let attr_reward = 0;
    if (extra_flag.rank === 1) {
      attr_reward = 15;
      extra_flag.pt_change = 30;
      extra_flag.relation_change = 5;
      extra_flag.love_change = 1;
    } else if (extra_flag.rank === 2) {
      attr_reward = 10;
      extra_flag.pt_change = 20;
      extra_flag.relation_change = 3;
      extra_flag.love_change = 1;
    } else if (extra_flag.rank === 3) {
      attr_reward = 5;
      extra_flag.pt_change = 10;
      extra_flag.relation_change = 2;
    }
    extra_flag.attr_change = [0, 0, 0, attr_reward, 0];
  } else if (extra_flag.race === race_enum.sats_sho && extra_flag.rank <= 5) {
    // 经典年皋月赏
    await print_event_name('The First', teio);
    await era.printAndWait('真是一场出色的表演。');
    await era.printAndWait(`${me.name} 情不自禁地鼓掌叫好。`);
    await era.printAndWait(
      `这种等级的比赛——场上拼搏的${teio.get_uma_sex_title()}${teio.get_teen_sex_title()}们，挥洒着汗水与青春奔跑的身姿，实在是感动人心。而 ${
        me.name
      } 的担当，无疑是其中最好的一部分。`,
    );
    await era.printAndWait('第一步，开门红。');
    await era.printAndWait(
      `该去给${teio.sex}买杯蜂蜜特饮了，${
        me.name
      } 心想着，快步跑到了餐车，又回到场下，观赏着自家${teio.get_uma_sex_title()}的演出。`,
    );
    era.println();

    fill_common_rewards(extra_flag);
    extra_flag.attr_change[attr_enum.endurance] += 15;
    extra_flag.attr_change[attr_enum.toughness] += 5;
  } else if (extra_flag.race === race_enum.toky_yus && extra_flag.rank <= 5) {
    //经典年日本德比
    await print_event_name('The Second', teio);
    await era.printAndWait(
      `这是 ${me.name} 的担当目前参加过的最高规模的比赛。`,
    );
    await era.printAndWait(
      `但是 ${me.name} 这次的关注点……却不是${teio.sex}的成绩，而是${teio.sex}的脚部。`,
    );
    await era.printAndWait(
      '更准确的说，是被靴子包裹住的脚踝，再往上直到膝盖的部分。',
    );
    await era.printAndWait('有问题。');
    await era.printAndWait(
      '从起步时候就看出来了，后面的冲刺和加速也是，动作明显有细微的偏差。',
    );
    await era.printAndWait(
      '任何发力动作的基础，都讲究以骨而立，一定是膝软骨或胫骨那边有了毛病。',
    );
    era.println();

    await era.printAndWait(
      `比赛结束，${me.name} 迎向自己担当，简单祝贺之后便跟${teio.sex}谈了这件事情，并委婉地提示这可能是${teio.sex}一直以来仰仗，擅长的跑法导致的。`,
    );
    await era.printAndWait(`但是${teio.sex}的回答迅速而干脆。`);
    era.println();

    await teio.say_and_wait('没关系的。');
    era.printButton('「说什么呢！」', 1);
    await era.input();

    await teio.say_and_wait('没有事啦！只是最近太劳累导致的……休息休息就会好。');
    era.println();

    era.printButton('「可是……」', 1);
    await era.input();

    await teio.say_and_wait(
      '我们的梦想……还没有实现吧！我想接着跑下去，用我自己的方式，你答应过帮我的吧。',
    );
    await era.printAndWait(
      `${teio.get_teen_sex_title()}抬起眼，澄澈纯洁，又暗含执念的眼神盯着 ${
        me.name
      }，${me.name} 张口，却无言。`,
    );
    await era.printAndWait(
      `由着${teio.sex}……也不会有什么大不了吧，脑海中有个声音做出了妥协，再说，${me.name} 也需要${teio.sex}继续奔跑得到成绩，不是吗？`,
    );
    await era.printAndWait(`${me.name} 叹了口气，不了了之。`);
    era.println();
    fill_common_rewards(extra_flag);
    if (
      extra_flag.rank === 1 &&
      check_aim_race(era.get('cflag:3:育成成绩'), race_enum.sats_sho, 1, 1)
    ) {
      extra_flag.pt_change += 20;
      extra_flag.relation_change = (extra_flag.relation_change || 0) + 10;
      extra_flag.love_change = (extra_flag.love_change || 0) + 1;
    }
  } else if (extra_flag.race === race_enum.kiku_sho && extra_flag.rank === 1) {
    // 经典年菊花赏
    await print_event_name('Not the end', teio);
    await era.printAndWait('短暂的结束，要来了。');
    await era.printAndWait(
      `${
        me.name
      } 站在看台上，想着这一年来的种种经历。${teio.get_teen_sex_title()}能走到现在，离不开 ${
        me.name
      }，而 ${me.name} 也是被${teio.sex}的坚韧和执着所吸引，自愿去帮助${
        teio.sex
      }。`,
    );
    await era.printAndWait('成功就在眼前了。');
    await era.printAndWait(
      `只要拿下这场比赛，${teio.name} 就离自己的最终目标又进了一步，而以${teio.sex}目前的表现来说——尽管 ${me.name} 作为训练员不应该提前开香槟——基本上是十拿九稳。`,
    );
    await era.printAndWait(
      `脑中甚至浮现出了 ${me.name} 与${teio.sex}成为传说，名字刻在殿堂中的幻象……`,
    );
    await era.printAndWait('等等。');
    era.println();
    await era.printAndWait(`解说「${teio.name}——怎么——」`);
    era.println();
    await era.printAndWait('不对劲！');
    await era.printAndWait(
      `${me.name} 抓紧栏杆猛地探出头去，在赛场上捕捉那个属于 ${
        me.name
      } 的${teio.get_uma_sex_title()}。找到了，领头的位置——${
        teio.sex
      }的动作？！`,
    );
    await era.printAndWait(
      `${me.name} 看到帝王以一种非常不正常的姿势向外侧滑——`,
    );
    era.println();
    await era.printAndWait('解说「——失速——」');
    era.println();
    await era.printAndWait(
      `距离终点已经很近，但 ${
        me.name
      } 已经顾不上什么成绩了，疯了一样就要冲下去接自己的担当，保安将失去理智的 ${
        me.name
      } 拉住，${me.name} 看着${
        teio.sex
      }，即使相隔不近也能感受到，痛苦和不甘写满了${teio.get_teen_sex_title()}的脸庞……`,
    );
    era.println();
    era.printButton('「帝王！」', 1);
    await era.input();
    await era.printAndWait(
      `比赛后，${me.name} 一点时间也没有浪费，抱起${teio.sex}返回特雷森，冲向医务室。`,
    );
    fill_common_rewards(extra_flag);
    if (
      extra_flag.rank === 1 &&
      check_aim_race(era.get('cflag:3:育成成绩'), race_enum.sats_sho, 1, 1) &&
      check_aim_race(era.get('cflag:3:育成成绩'), race_enum.toky_yus, 1, 1)
    ) {
      extra_flag.attr_change[attr_enum.strength] += 15;
      extra_flag.pt_change += 30;
      extra_flag.relation_change = (extra_flag.relation_change || 0) + 20;
      extra_flag.love_change = (extra_flag.love_change || 0) + 2;
    }
  } else if (
    extra_flag.race === race_enum.tenn_spr &&
    edu_weeks >= 96 &&
    extra_flag.rank === 1
  ) {
    extra_flag.pt_change = 100;
  } else if (
    extra_flag.race === race_enum.japa_cup &&
    extra_flag.rank === 1 &&
    era.get('status:3:腿伤')
  ) {
    //日本杯
    await print_event_name('再起', teio);

    await era.printAndWait(
      `${me.name} 亲自将担当送到赛场上，为${teio.sex}加油之后便坐回观众席旁。`,
    );
    await era.printAndWait('旁边空荡荡的。');
    await era.printAndWait(
      `${me.name} 叹了口气，那些发布会上出现的那几个帝王的粉丝，终究还是没到场。`,
    );
    await era.printAndWait(
      `不过也没关系，${me.name} 想着，只要帝王可以实现梦想就可以了。扭头，重新将视线集中于赛场上。`,
    );
    await era.printAndWait('不过，战况仿佛并非那么理想。');
    await era.printAndWait(
      `搅成一团的${teio.get_uma_sex_title()}群，竞争激烈，帝王难以破开重围。`,
    );
    await era.printAndWait(`${me.name} 的手心里不知不觉充满了汗水。`);
    era.drawLine();
    await era.printAndWait('训练员A「——以上就是下一场比赛的出场选手。」');
    await era.printAndWait('路人A「好可惜哦……你又没能选上。」');
    await era.printAndWait('粉丝A「……啊哈哈，没关系，反正我打的很烂嘛。」');
    await era.printAndWait(
      '粉丝A（可恶……明明我也有很认真刻苦地，早起贪黑训练啊！）',
    );
    await era.printAndWait(`——${me.name} 所贩卖的是梦想。`);
    era.println();

    await era.printAndWait(
      '粉丝B「又挨骂了……明明就不是我的错啊，却又都怪到我的头上。」',
    );
    await era.printAndWait(
      '粉丝B「算了……还是打电动吧，就算是我也会有擅长的东西嘛，嘿嘿。」',
    );
    await era.printAndWait(
      `——${me.name} 所贩卖的是梦想，每个人都对这些东西若即若离，不肯承认自己需要它的同时又心驰神往。`,
    );
    era.println();

    await era.printAndWait('粉丝A「……啊啊」');
    await era.printAndWait('粉丝B「什么都没有……」');
    await era.printAndWait('——现在正是人们需要梦的时刻。');
    era.println();

    await era.printAndWait(
      '粉丝A「算了……干脆看看电视好了……今天，好像是日本杯吧……」',
    );
    await era.printAndWait('粉丝B「可恶……干脆打开电视看看赛马好了。」');
    await era.printAndWait(
      '——人们想听一切都很幸福，天道酬勤，努力会有回报，坚定信念能克服困难的故事。',
    );
    era.println();

    await era.printAndWait(`粉丝A「${teio.name}……？${teio.sex}真的去了？」`);
    await era.printAndWait(`粉丝B「${teio.sex}是……」`);
    await era.printAndWait(`——${me.name} 能写出这样的故事吗？`);
    era.drawLine();
    await era.printAndWait(`？？？「大${me.sex_code - 1 ? '姐姐' : '哥哥'}」`);
    era.println();
    await era.printAndWait(
      `${me.name} 回头看去，看到了一个女人拉着一个有点眼熟的女孩的手，向 ${me.name} 走来。`,
    );
    era.println();
    await era.printAndWait(
      `女孩「大${me.sex_code - 1 ? '姐姐' : '哥哥'}？还记得我吗？」`,
    );
    era.println();
    await era.printAndWait(
      `${me.name} 看了看，想起来了，这是当时 ${me.name} 和帝王初次碰面时见到的小孩子。互相打了打招呼，她们坐在 ${me.name} 一旁一起观赛。小女孩看上去很是兴奋，是第一次来这里吗？`,
    );
    era.println();
    await era.printAndWait(
      `女孩「大${
        me.sex_code - 1 ? '姐姐' : '哥哥'
      }，我一直想看一次帝王小姐的比赛呢……只不过之前都没机会，这一次终于可以了！我考了班级第一，妈妈说当做奖励，带我来看。帝王小姐真的好帅气啊，${
        teio.sex
      } 一定能拿第一的对吧！」`,
    );
    era.println();
    await era.printAndWait(`${me.name} 看着${teio.sex}的脸，不由得笑了。`);
    era.printButton(`「是的，${teio.sex}一定能。」`, 1);
    await era.input();
    era.drawLine();
    await teio.say_and_wait('太糟了……', true);
    await era.printAndWait(
      `自己最擅长的先行跑法完全无法发挥优势，一群${teio.get_uma_sex_title()}互相顶住道路，突破宛如天方夜谭。`,
    );
    await era.printAndWait('真的……能做到吗。');
    era.println();
    await teio.say_and_wait('我一定能！', true);
    era.println();
    await era.printAndWait(
      `奔跑着的${teio.get_uma_sex_title()}聚集又散开，一个狭窄，不易被发掘的只有半马位大小的缝隙暴露出来——`,
    );
    era.println();
    await era.printAndWait(`解说「欸，那是——${teio.name}？！」`);
    era.println();
    await era.printAndWait(
      '小腿肌肉骤然放松，然后缩紧再放！大幅度抬起脚，不管扬起的灰尘与飞溅的泥土，发力！',
    );
    await era.printAndWait(`独属于${teio.sex}的梦幻步法。`);
    await era.printAndWait(`独属于${teio.sex}的舞步。`);
    await era.printAndWait('向所有人展现风采的——帝王舞步！');
    era.println();
    await era.printAndWait(
      `解说「这可能吗——如同梦幻中的景象，${teio.name}，冲了出来，${teio.sex}要奔向第一了——」`,
    );
    era.println();
    await era.printAndWait('刹那间，局面已定。');
    extra_flag.pt_change = 20;
    extra_flag.relation_change = 12;
    extra_flag.love_change = 1;
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    extra_flag.rank === 1 &&
    edu_weeks >= 96
  ) {
    if (era.get('status:3:腿伤')) {
      await print_event_name('奇迹复活（下）', teio);

      await teio.say_and_wait('没问题的。');
      era.println();

      await era.printAndWait(
        `${teio.get_uma_sex_title()}${teio.get_teen_sex_title()}化作一道炽焰流星，最大限度地狂放燃烧着自己的体能，奔跑在赛场上。`,
      );
      era.println();

      await teio.say_and_wait('能赢。');
      era.println();

      await era.printAndWait(
        `${me.name} 从专用观赛席上站起身来，眼神紧紧盯住那道模糊的红影——${me.name} 的担当正在拼劲自己的所有，榨干全身上下每根肌肉纤维做功，来完成这次比赛。`,
      );
      await era.printAndWait(`实现 ${me.get_couple_title()} 的梦想。`);
      era.println();

      await era.printAndWait(
        `蓝天白云，红日清风，最适宜的天气，然而 ${me.name} 却完全没有享受的心思，只管全身心投入到那个小小的身影上。`,
      );
      await era.printAndWait(`${me.name} 的担当，${teio.name}。`);
      await era.printAndWait(
        `世界仿佛从 ${me.name} 眼中远去，又重新聚焦于${teio.sex}的身上。一切声音都如噪点般模糊——等等。`,
      );
      era.println();

      await era.printAndWait(`解说「——${teio.name}选手好像——」`);
      era.println();

      await era.printAndWait('有什么不对。');
      era.println();

      await era.printAndWait(`${me.name} 抓紧栏杆，向前探身，拼命呐喊着。`);
      era.println();

      await era.printAndWait(`解说「——失速！是腿疾旧伤吗——」`);
      era.println();

      await teio.say_and_wait('哈……哈……');
      era.println();

      await teio.say_and_wait('身体……不听使唤了', true);
      era.println();

      await teio.say_and_wait('呼——吸——上不来气', true);
      era.println();

      await teio.say_and_wait('肋骨和肺叶心脏……火烧起来了。', true);
      era.println();

      await teio.say_and_wait('肢体……感受不到了', true);
      era.println();

      era.printButton('「——帝——王——」', 1);
      await era.input();

      await teio.say_and_wait('那人是谁……', true);
      era.println();

      await teio.say_and_wait(
        '声音……视线……好模糊……什么都想不起来了，就这样倒下……',
        true,
      );
      era.println();

      await era.printAndWait('躯干前倾，头部下坠。');
      era.println();

      await era.printAndWait('不，等等。');
      await era.printAndWait('不应该是这种结局。');
      era.println();

      await teio.say_and_wait('不对', true);
      era.println();

      await teio.say_and_wait('我这是在干什么——', true);
      era.println();

      era.printButton(`「${teio.name}！！！」`, 1);
      await era.input();

      await teio.say_and_wait('啊啊……');
      era.println();

      await era.printAndWait(`解说「——唉！${teio.name} 追上来了？」`);
      era.println();

      await teio.say_and_wait('我似乎想起来了。');
      era.println();

      await era.printAndWait(
        `沉重的双腿，火烧的肺，酸楚的手臂——痛苦回到了名为 ${
          teio.name
        } 的${teio.get_uma_sex_title()}躯体中。`,
      );
      await era.printAndWait('但是，同样回归的，还有斗志和信念。');
      era.println();

      await teio.say_and_wait('我想起来了！');
      era.println();

      await era.printAndWait(
        `双脚与大地接触，摩擦，蹬地产生的反作用力推动已经苦痛难忍的身躯冲锋，身体倾斜，最大限度利用势能提供的正向加速度——`,
      );
      era.println();

      await era.printAndWait(
        `解说「现在的第一是——等等，那是，${teio.name} 冲上来了！是 ${teio.name}！」`,
      );
      era.println();

      await teio.say_and_wait('呼吸好痛苦', true);
      era.println();

      await teio.say_and_wait('可就算肺炸了也没有关系', true);
      era.println();

      await teio.say_and_wait('脚步好沉但还能动', true);
      era.println();

      await teio.say_and_wait('我……已经挫折了好多次', true);
      era.println();

      await teio.say_and_wait('那一次……还有那一次', true);
      era.println();

      await teio.say_and_wait('比任何人都挫折更多次', true);
      era.println();

      await teio.say_and_wait('比任何人都不甘心的是我', true);
      era.println();

      await teio.say_and_wait('比任何人都想赢的是我', true);
      era.println();

      await teio.say_and_wait('绝不退让', true);
      era.println();

      await teio.say_and_wait('一定是一定是', true);
      era.println();

      await teio.say_and_wait('一定是我！', true);
      era.println();

      await teio.say_and_wait('冲吧', true);
      era.println();

      await teio.say_and_wait('冲吧', true);
      era.println();

      await teio.say_and_wait('冲吧奔驰起来', true);
      era.println();

      await teio.say_and_wait('一决胜负吧！', true);
      era.println();

      await era.printAndWait(
        `解说「是 ${teio.name}！${teio.name} 追上来了！${teio.sex}和头马间的差距越来越小！」`,
      );
      era.println();

      await era.printAndWait('还剩不到200米');
      era.println();

      await era.printAndWait(
        `解说「时隔一年回到赛场的 ${teio.name} 能追上去吗？${
          teio.sex
        }超过去了——不，其他的${teio.get_uma_sex_title()}正在紧紧黏在${
          teio.sex
        }的身旁，正在拼命追赶 ${teio.name}！」`,
      );
      era.println();

      await era.printAndWait(
        `解说「${teio.name} 在奋力追赶！而对手毫不相让——只差一个马位！」`,
      );
      era.println();

      await era.printAndWait(
        `解说「就差一点，就差一点！${teio.name} 却不能更近一步！」`,
      );
      era.println();

      await era.printAndWait(
        '解说「展现出菊花赏记录保持者的强大就是不让步！」',
      );
      era.println();

      await era.printAndWait(
        `解说「但是——${teio.name} 接近了！重回赛场的帝王把差距越缩越小！」`,
      );
      era.println();

      await era.printAndWait('100米\n最后的拉锯战');
      era.println();

      await era.printAndWait(
        `解说「已经和先头并排了吗？${teio.name}！究竟是新一代的霸主还是旧日的没落君王登上王座——」`,
      );
      era.println();

      await era.printAndWait(
        '整片草场，仿佛在颤抖起来。中山竞马场——它是不是也期待着有马纪念的赢家呢？',
      );
      era.println();

      await teio.say_and_wait('啊啊啊啊啊啊啊啊啊啊啊！');
      era.println();

      await era.printAndWait(`解说「是 ${teio.name}！」`);
      era.println();

      await era.printAndWait(
        `解说「${teio.name} 超越了吗？${
          teio.name
        } 稍稍领先，要展现德比赛${teio.get_uma_sex_title()}的骨气了吗？！」`,
      );
      era.println();

      await era.printAndWait('解说「但是优势微弱啊，对手也咬住不放！」');
      era.println();

      await era.printAndWait('解说「是哪边，哪边？！」');
      era.println();

      await era.printAndWait(`赛${teio.get_uma_sex_title()}「是我——」`);
      era.println();

      await teio.say_and_wait('——赢了——');
      era.println();

      await era.printAndWait('一抹赤虹，冲开终线。');
      era.println();

      await era.printAndWait('全场仿佛寂静了那么一瞬，然后是排山倒海的呼声。');
      await era.printAndWait(
        '沸腾的人群们的呐喊，响彻天空，一个名字回荡其中。',
      );
      era.println();

      await era.printAndWait(`观众「${teio.name}！」`, {
        align: 'center',
        color: get_gradient_color(undefined, teio.color, 1 / 3),
        fontSize: '1.125rem',
      });
      await era.printAndWait(`观众「${teio.name}！！」`, {
        align: 'center',
        color: get_gradient_color(undefined, teio.color, 2 / 3),
        fontSize: '1.25rem',
      });
      await era.printAndWait(`观众「${teio.name}！！！」`, {
        align: 'center',
        color: teio.color,
        fontSize: '1.375rem',
      });
      era.println();

      await era.printAndWait(`解说「${teio.name}——奇迹复活！」`, {
        align: 'center',
        color: teio.color,
        fontSize: '1.5rem',
        fontWeight: 'bold',
      });
    } else {
      await print_event_name('奔跑的夙愿（下）', teio);

      await era.printAndWait('奇迹，是属于每个人的。');
      await era.printAndWait('但是在这片赛场上，只会诞生一个奇迹。');
      era.println();

      await teio.say_and_wait('呼——');
      era.println();

      await teio.say_and_wait('咬得太紧了', true);
      await teio.say_and_wait('比之前还要糟——', true);
      await teio.say_and_wait(
        '难以超越身位……不管是前方引领的逃马，还是跟我一样的先行马……又或者是虎视眈眈在后面等待机会的差行，追马……',
        true,
      );
      await teio.say_and_wait('大家……都在拼命追逐啊', true);
      era.println();

      await era.printAndWait(
        `前方的${teio.get_uma_sex_title()}如风般奔驰，飘散的银发末梢都能打到自己的鼻尖，一旁的红发${teio.get_uma_sex_title()}则如一团跳动的红色火焰紧紧黏在身上，随时要将前方的东西统统吞下。`,
      );
      await era.printAndWait(
        '最大限度发挥自己的天分，努力训练，带着绝不认输的觉悟奔赴赛场——如果只是这样，还真是令人恼火。',
      );
      await era.printAndWait(
        `因为这些，只不过是踏上这个舞台所必须的，毫不稀奇的东西罢了。`,
      );
      era.println();

      await teio.say_and_wait('可恶……', true);
      await teio.say_and_wait(
        `或许训练员以前说的没错……这世上有过，并且一直存在很多比我更强的${teio.get_uma_sex_title()}`,
        true,
      );
      await teio.say_and_wait(
        '但是今天……我是真的不想，也不会，不能输啊！',
        true,
      );
      era.println();

      await era.printAndWait(
        '大口呼吸，贪婪地吸纳着氧气，将其转化为所需的能量，超越极限。',
      );
      era.println();

      await teio.say_and_wait('大家的辉煌……都是在什么时候呢？', true);
      await teio.say_and_wait('我的话……就是现在吧！', true);
      era.println();

      era.printButton('「帝王！」', 1);
      await era.input();
      await era.printAndWait(`解说「——是 ${teio.name}——」`);
      era.println();
      await era.printAndWait(
        `${teio.get_teen_sex_title()}俯身，发起最后的冲锋。`,
      );
    }
    extra_flag.relation_change = 20;
    extra_flag.love_change = 2;
  } else if (extra_flag.rank === 1) {
    await print_event_name('竞赛获胜', teio);
    await era.printAndWait(`${me.name} 兴奋地走下看台，迎接凯旋归来的帝王。`);
    await era.printAndWait(
      `${teio.sex}也同样兴高采烈，满脸红光地向 ${me.name} 冲了过来，与 ${
        me.name
      } 击掌庆贺。${me.get_couple_title()} 一起好好享受了一番胜利的滋味。`,
    );
  } else if (extra_flag.rank <= 5) {
    //通用比赛入着
    await print_event_name('竞赛上榜', teio);
    await era.printAndWait('虽然遗憾，但也不错。');
    await era.printAndWait(
      `${teio.name} 看着有点不服气的帝王蹭着步子踱出场外的样子，自己本想严肃的脸不知为何流露出了笑意。`,
    );
    await era.printAndWait(`也算是努力了，好好安慰${teio.sex}一番吧。`);
  } else {
    await print_event_name('竞赛败北', teio);
    if (era.get('status:3:腿伤')) {
      await era.printAndWait(
        `${me.name} 看着在披头散发，落寞缓步的自家担当，不由得感觉心在滴血。`,
      );
      await era.printAndWait('可恶，只差一步……要不是因为腿疾……');
      await era.printAndWait(
        `就连解说在台上也为 ${me.get_couple_title()} 感到可惜。`,
      );
      await era.printAndWait(
        `${me.name} 沉默地迎向帝王，用自己的身子支撑起了${teio.sex}。`,
      );
      await era.printAndWait(
        `${teio.sex}轻轻抖动了一下，又强行站稳。是伤痛，还是不想在 ${me.name} 面前露出软弱一面？`,
      );
      await era.printAndWait(
        `${
          me.name
        } 不知道，也不想管，就这样，${me.get_couple_title()} 两个互相搀扶着，一齐离场……`,
      );
    } else {
      await era.printAndWait(`${me.name} 眉头紧锁，怎么会这样？`);
      await era.printAndWait(
        `黑板上刺眼的红色名次是那么醒目，无时无刻不在提醒 ${me.name} 这次惨痛失败的真实性。`,
      );
      await era.printAndWait(
        `${me.name} 看着灰头土脸，耳朵和尾巴都无精打采下垂，拖着身子走向 ${
          me.name
        } 的担当${teio.get_uma_sex_title()}，内心也是五味杂陈。`,
      );
      await teio.say_and_wait(`……`);
      era.printButton(
        '「没关系，挺起身来，我们再加把劲，成功在等着我们。」',
        1,
      );
      era.printButton('「这次……我们要好好反思。帝王，下次不该这样了。」', 2);
      await era.input();
    }
  }
};
