/**
 * @file 东海帝王 - 育成
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  ...require('#/i18n/xx-XX/kojo/100300-Tokai-Teio/edu-3-hurt'),
  ...require('#/i18n/xx-XX/kojo/100300-Tokai-Teio/edu-3-give-up'),
  async train_fail(teio, you) {
    if (era.get('status:3:腿伤') > 0) {
      await teio.say_and_wait('啊！唔……');
      await era.printAndWait(
        `平时充满活力带着几分娇气的音色在痛苦的影响下扭曲成尖锐的叫声，直扎 ${you.name} 的耳膜和心房，${you.name} 三步并作两步飞奔过去，小心翼翼地安抚着${teio.sex}，仔细检查身体，同时轻揉患处。`,
      );
    } else {
      await teio.say_and_wait('咿——');
      await era.printAndWait([
        '伴随着一声长音，',
        you.get_colored_name(),
        ' 的担当不小心摔倒了。',
        you.get_colored_name(),
        ' 赶忙过去查看情况。',
      ]);
    }
  },
  async train_fail_intel(teio, you) {
    await teio.say_and_wait('看来帝王的传说……不得不在此处稍作休止了……');
    await era.printAndWait([
      teio.get_colored_name(),
      ' 趴在桌面上，失去了学习动力。',
    ]);
    await you.say_and_wait('果然有些事情不会骗人，不会就是不会。', true);
  },
  race_end_win: (() => {
    const title = '竞赛获胜';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `${you.name} 兴奋地走下看台，迎接凯旋归来的帝王。`,
      );
      await era.printAndWait(
        `${teio.sex}也同样兴高采烈，满脸红光地向 ${you.name} 冲了过来，与 ${
          you.name
        } 击掌庆贺。你们一起好好享受了一番胜利的滋味。`,
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = '竞赛上榜';
    /** @param {CharaTalk} teio 东海帝王 */
    const f = async (teio) => {
      await era.printAndWait('虽然遗憾，但也不错。');
      await era.printAndWait(
        `${teio.name} 看着有点不服气的帝王蹭着步子踱出场外的样子，自己本想严肃的脸不知为何流露出了笑意。`,
      );
      await era.printAndWait(`也算是努力了，好好安慰${teio.sex}一番吧。`);
    };
    f.title = title;
    return f;
  })(),
  race_end_lose: (() => {
    const title = '竞赛败北';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      if (era.get('status:3:腿伤') > 0) {
        await era.printAndWait(
          `${you.name} 看着在披头散发，落寞缓步的自家担当，不由得感觉心在滴血。`,
        );
        await era.printAndWait('可恶，只差一步……要不是因为腿疾……');
        await era.printAndWait(`就连解说在台上也为你们感到可惜。`);
        await era.printAndWait(
          `${you.name} 沉默地迎向帝王，用自己的身子支撑起了${teio.sex}。`,
        );
        await era.printAndWait(
          `${teio.sex}轻轻抖动了一下，又强行站稳。是伤痛，还是不想在 ${you.name} 面前露出软弱一面？`,
        );
        await era.printAndWait(
          `${you.name} 不知道，也不想管，就这样，你们两个互相搀扶着，一齐离场……`,
        );
      } else {
        await era.printAndWait(`${you.name} 眉头紧锁，怎么会这样？`);
        await era.printAndWait(
          `黑板上刺眼的红色名次是那么醒目，无时无刻不在提醒 ${you.name} 这次惨痛失败的真实性。`,
        );
        await era.printAndWait(
          `${you.name} 看着灰头土脸，耳朵和尾巴都无精打采下垂，拖着身子走向 ${
            you.name
          } 的担当${teio.uma_sex_title}，内心也是五味杂陈。`,
        );
        await teio.say_and_wait(`……`);
        era.printButton(
          '「没关系，挺起身来，我们再加把劲，成功在等着我们。」',
          1,
        );
        era.printButton('「这次……我们要好好反思。帝王，下次不该这样了。」', 2);
        await era.input();
      }
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '帝王，启程！';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `相传，三女神赐下马魂赋予婴孩，让${teio.couple_title}拥有无与伦比的身体技能用以驰骋赛场。`,
      );
      await era.printAndWait(
        `而${teio.couple_title}所给予的能力，通过赛场表现而分类，大概可以分为以下几种跑法：`,
      );
      era.println();
      await era.printAndWait(
        '首先是逃马。开闸后用极快的速度拉开与对手的距离，讲求速度和高爆发力，缺点是长距离时容易因耐力不足而失速，也因为脚程和速度问题，受伤往往比其他跑法严重。',
      );
      await era.printAndWait(
        `听说有一位橘红发色，跑起来好似流线型载具的${teio.uma_sex_title}便精于此道。`,
      );
      era.println();
      await era.printAndWait(
        `第二种是先行。此种跑法在开闸起跑后不急着拉开距离，反而利用自身的高耐力和速度紧咬在逃马后面，等到逃马一失速就马上反超过去，缺点是对于反超的时机不好掌握，同时对耐力和爆发力的要求颇高，也因为要瞬间加速，因此脚底和小腿更容易在比赛中受伤，且加速时的跑姿对${teio.uma_sex_title}本身的柔韧度有一定的要求。`,
      );
      era.println();
      await era.printAndWait(
        `另一种叫做差行。开闸后待在马群的中间，利用高意志力潜伏在逃马和先行马后，当时机成熟后将利用自身的高爆发力和极高的速度反超杀对方个措手不及，缺点为必须承得住气，对时机的掌握非常看经验判断，且对爆发力要求非常高。听闻，有一位来自乡下的芦毛${teio.uma_sex_title}便以擅长此道而出名。`,
      );
      era.println();
      await era.printAndWait(
        `最后一种为追马。开闸后潜伏在马群的最后面，利用自身的高自制力和耐力蓄势待发，等时机一到马上利用自身的高爆发力和速度反超前面的对手，缺点为反追的成功率不高，也对${teio.uma_sex_title}本身的自制力要求很高。在圈子里口口相传的某个个头小，但奔跑起来如闪电追风般的${teio.uma_sex_title}便是其中佼佼者。`,
      );
      era.println();
      await era.printAndWait(
        `${you.name} 看着 ${
          teio.name
        } 首次参加正式跑步的姿态，结合过往的训练表现，在心里确认了${
          teio.sex
        }的跑法，初步拟定了一个训练计划。皮下若隐若现的小腿肌腱饱满有力，几次加速的步伐展现出的柔韧性良好，对于发力时机的把控仿佛有一种天生的灵敏嗅觉——天才的先行${teio.uma_sex_title}。`,
      );
      await teio.say_and_wait('训练员？怎么样！');
      await era.printAndWait(
        `${teio.sex}一边踢踏着双腿，一边向 ${you.name} 走了过来。${you.name} 一边点了点头，一边跟${teio.sex}讲明了刚刚观察所得知的信息，以及关于训练的方针。`,
      );
      era.println();
      await teio.say_and_wait('嗯……就按你说的做吧！');
      era.println();
      await era.printAndWait(
        `${you.name} 看着${teio.sex}的双腿，不禁身形下蹲，双手迅速盖于其上。`,
      );
      era.println();
      await teio.say_and_wait('欸——欸！');
      era.println();
      await era.printAndWait(
        `手指在${teio.uma_sex_title}最重要的腿部上摩挲，所有信息都从触觉中反馈而来——训练员的技术。果不其然，可以确认一个事实。被 ${
          you.name
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
          you.name
        } 正在集中精神思考，被传入耳边的娇声激了一下，回归现实。看着脸微微红，偏着头看 ${
          you.name
        } 的${teio.uma_sex_title}，${you.name} 一时竟然不知如何说起。`,
      );
      era.printButton('「……没事，你的身体很厉害啊。」', 1);
      await era.input();
      await teio.say_and_wait(
        '嗯？唔……没事就好。那么训练员，我们就定下契约啦，请你一直跟我跑到最后吧！',
      );
      era.println();
      await era.printAndWait(
        `一阵风吹过，${teio.sex}眯起眼睛，笑嘻嘻地伸出了手。${you.name} 也伸出自己的手，与${teio.sex}的尾指交错，拉勾约定。`,
      );
      await era.printAndWait(
        `至于腿的问题……${
          you.name
        } 想，可能不会影响生涯也说不定，毕竟${teio.uma_sex_title}出现这种问题很常见，自己只要精心护理，制定合适的训练内容，就能至少让${
          teio.sex
        }在役期间不出问题。`,
      );
      await era.printAndWait(
        `如果现在强令${teio.sex}改变习惯……说不定会起反作用，而且万一导致如此天才出不了成绩……那对两个人都不好啊。`,
      );
      await era.printAndWait(`最后，${you.name} 还是选择了保持沉默。`);
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '新年的抱负';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await teio.say_and_wait(
        '训练员训练员～今天是我们这个组合，第一次跨年哦！',
      );
      era.println();

      await era.printAndWait(
        `${you.name} 看着穿着私服，在房间里兴奋地上蹿下跳的帝王，眼角抽动了几下。`,
      );
      await era.printAndWait('真是活力十足啊……自己是不是选了个小祖宗过来？');
      era.println();

      await teio.say_and_wait('呐呐！训练员怎么没什么精神啊，来陪我玩啦！');
      era.println();

      era.printButton('「来吃饭吧，先吃完再说」', 1);
      await era.input();

      await era.printAndWait(
        `${you.name} 把大锅炖菜搬到桌上，${teio.sex}一听开饭便一下子溜了过来，端坐在椅子上，顺便帮 ${you.name} 分好了餐具。`,
      );
      await era.printAndWait(
        `你们一起开心地享用了一顿新年晚宴。温馨欢乐的气氛让 ${
          you.name
        } 不禁觉得与${teio.sex}一起，就像一个小家一样。`,
      );
      era.println();

      await teio.say_and_wait(
        '训练员，我的新年愿望和我之前说的一样哦！不败三冠，我要成为传说中的帝王！',
      );
      era.println();

      await era.printAndWait(
        `${teio.teen_sex_title}的话语虽然还有点孩子气，不过可以听出${
          teio.sex
        }是认真的。`,
      );
      era.println();

      era.print(`${you.name}——`);
      era.printButton('「没错，就保持这股气势吧！」（根性+20）', 1);
      era.printButton('「嗯，让我们一起努力，迈向胜利！」（耐力+20）', 2);
      era.printButton(
        '「唔……按照你的目标，我们似乎得调整一下」（技能点数+20）',
        3,
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
  waka_sta_win: (() => {
    const title = '向三冠进发！';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait('漂亮。');
      await era.printAndWait(`${you.name} 不禁在内心喝起采来。`);
      await era.printAndWait(
        `一骑绝尘的狂奔，瞬间爆发的加速，姿态完美的身体——真不愧是天才的${teio.uma_sex_title}。`,
      );
      await era.printAndWait('刚出道便有这等表现，真是潜力十足，未来可期。');
      await era.printAndWait(
        `${you.name} 走下看台，在出口处等着自己担当的出现，准备好好夸奖${teio.sex}一番，或许，还该奖励一下${teio.sex}？`,
      );
      era.println();

      await teio.say_and_wait('训练员。');
      era.println();

      era.printButton('「嘿，干得不错啊。」', 1);
      await era.input();

      await era.printAndWait(
        ` ${you.name} 拍了拍${
          teio.sex
        }的肩，顺手搭上去，用恰好的力道揉了揉——帮${teio.teen_sex_title}缓解身体上的疲劳。`,
      );
      await era.printAndWait(
        `${teio.sex}脸颊红晕未退，一脸兴奋地看着 ${you.name}。`,
      );
      era.println();

      await teio.say_and_wait('我，想好了！');
      era.println();

      era.printButton('「怎么？」', 1);
      await era.input();

      await teio.say_and_wait('我的第一个目标——是此后无败，夺下三冠！');
      await era.printAndWait(
        `${teio.teen_sex_title}激情的发言不禁让 ${
          you.name
        } 嘴角上扬，该说是初生牛犊不怕虎，还是说${
          teio.sex
        }缺乏对竞技的认知？不过，年轻人有志气又有什么不好呢？`,
      );
      era.println();

      await you.say_and_wait(
        `这可是个严峻的目标……要知道，曾经有很多出名的赛${teio.uma_sex_title}，现在也有许多天才，${
          teio.couple_title
        }无一不想做到这个成就，实际上能达成的凤毛麟角。`,
      );
      await you.say_and_wait(
        '不过，我既然成为了你的训练员，便会尽力辅导你，让你达成心愿的。',
      );

      await era.printAndWait(
        `${teio.teen_sex_title}眨了眨眼，斗志一丝一毫都没有消失。`,
      );
      await teio.say_and_wait('我会努力让这个梦实现的！');
      era.printButton(`那么，我们一起加油吧。`, 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  sa_47_5: (() => {
    const title = '所以，衣服是怎样啦！';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        '又是一个晴朗无云的日子——特雷森这边的天气可真好啊。',
      );
      await era.printAndWait(
        `${you.name} 走在校园的中庭里，享受着早春的气候。`,
      );
      await era.printAndWait(
        `不过，今天并不是像那时一样只有 ${you.name} 一个人在这里散步。`,
      );
      era.println();

      await teio.say_and_wait('……');
      era.println();

      era.printButton('「……」', 1);
      await era.input();

      await era.printAndWait('总觉得气氛有点尴尬。');
      await era.printAndWait(
        `${
          you.name
        } 不由得用余光瞥了瞥旁边的小${teio.uma_sex_title}，裸露在外的白色肌肤，私服下藏着粉色肩带的内衣……不，实在太刺激了，再看下去恐怕有伤师德。`,
      );
      await era.printAndWait(
        `何况${teio.sex}这身还是如同彩色沙滩服一般的童装，更是让 ${you.name} 平添了一番罪恶感。`,
      );
      await era.printAndWait(
        `如此可爱的${teio.uma_sex_title}，是与 ${you.name} 签下担当契约的人……`,
      );
      era.println();

      await teio.say_and_wait('训练员？');
      era.println();

      era.printButton('「什么？」', 1);
      await era.input();
      await era.printAndWait(
        `元气的${teio.teen_sex_title}声音响起，${
          you.name
        } 迅速清空大脑放平心态，试图用最平常的样子回复。`,
      );
      await era.printAndWait('并且把目光直直，正正地放在前方道路上。');
      era.println();

      await teio.say_and_wait('你……对我的私服有什么想法吗？');
      era.println();

      era.print(`${you.name} 你马上接道——`);
      era.printButton('「嗯……蛮孩子气的」（体力+150）', 1);
      era.printButton('「可爱……」（速度+20）', 2);
      era.printButton('「很帅气啊，帝王！」（力量+20）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await teio.say_and_wait('唔嗯～我才不是小孩了！');
          era.println();

          await era.printAndWait(
            `${teio.sex}嘟起了嘴，仿佛有些闹别扭，不过更显得可爱了。`,
          );
          await era.printAndWait(
            ` ${you.name} 与${teio.sex}默默地走了一段时间。`,
          );
          break;
        case 2:
          await teio.say_and_wait('欸！');
          era.println();

          await era.printAndWait(
            ` ${you.name} 的担当叮咛一声，脸仿佛红了起来，${you.name} 顿时也感觉不好意思再看${teio.sex}，两人就这样默默的走了下去。`,
          );
          break;
        case 3:
          await teio.say_and_wait(
            `那还用说！${you.name} 果然明白帝王大人的帅气！`,
          );
          await era.printAndWait(
            `${teio.sex}看起来好像很开心。${you.name} 不禁也笑起来，跟${teio.sex}一起走了一会。`,
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_12: (() => {
    const title = '记者招待会';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `被灯光和话筒所围绕，镜头前的每个人都用混杂着好奇和饥渴的眼神注视着你们。${
          you.name
        } 看了看旁边的小${teio.uma_sex_title}，${
          teio.sex
        }显然不习惯这样的事情——无敌的帝王大人也有怯场的时候。`,
      );
      await era.printAndWait(
        `不易察觉地，${you.name} 轻轻碰了碰${teio.sex}的手，安抚一下${teio.sex}的心情，不料${teio.sex}却反手回握住 ${you.name}，微微出汗的小手掌心触感鲜明，${you.name} 稍楞了一下想抽出手来，不过还是决定换一种方式。${you.name} 略用力紧了紧${teio.sex}的手，止住${teio.sex}的颤抖。`,
      );
      era.println();
      await era.printAndWait(
        `面对摄像头和记者的提问，${you.name} 发挥超常，回答的完美又风趣。在 ${you.name} 的带动下，帝王的心态也渐渐好了起来，${teio.sex}也大方开心地分享了关于自己的事情，特别是理想。`,
      );
      await era.printAndWait(
        `${you.name} 也在众人面前，保证会帮助 ${teio.sex} 把梦想变成现实。`,
      );
      await era.printAndWait('记者会在掌声中落下帷幕。');
    };
    f.title = title;
    return f;
  })(),
  sats_sho_5: (() => {
    const title = 'The First';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait('真是一场出色的表演。');
      await era.printAndWait(`${you.name} 情不自禁地鼓掌叫好。`);
      await era.printAndWait(
        `这种等级的比赛——场上拼搏的${teio.uma_sex_title}${teio.teen_sex_title}们，挥洒着汗水与青春奔跑的身姿，实在是感动人心。而 ${
          you.name
        } 的担当，无疑是其中最好的一部分。`,
      );
      await era.printAndWait('第一步，开门红。');
      await era.printAndWait(
        `该去给${teio.sex}买杯蜂蜜特饮了，${
          you.name
        } 心想着，快步跑到了餐车，又回到场下，观赏着自家${teio.uma_sex_title}的演出。`,
      );
    };
    f.title = title;
    return f;
  })(),
  toky_yus_5: (() => {
    const title = 'The Second';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `这是 ${you.name} 的担当目前参加过的最高规模的比赛。`,
      );
      await era.printAndWait(
        `但是 ${you.name} 这次的关注点……却不是${teio.sex}的成绩，而是${teio.sex}的脚部。`,
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
        `比赛结束，${you.name} 迎向自己担当，简单祝贺之后便跟${teio.sex}谈了这件事情，并委婉地提示这可能是${teio.sex}一直以来仰仗，擅长的跑法导致的。`,
      );
      await era.printAndWait(`但是${teio.sex}的回答迅速而干脆。`);
      era.println();

      await teio.say_and_wait('没关系的。');
      era.printButton('「说什么呢！」', 1);
      await era.input();

      await teio.say_and_wait(
        '没有事啦！只是最近太劳累导致的……休息休息就会好。',
      );
      era.println();

      era.printButton('「可是……」', 1);
      await era.input();

      await teio.say_and_wait(
        '我们的梦想……还没有实现吧！我想接着跑下去，用我自己的方式，你答应过帮我的吧。',
      );
      await era.printAndWait(
        `${teio.teen_sex_title}抬起眼，澄澈纯洁，又暗含执念的眼神盯着 ${
          you.name
        }，${you.name} 张口，却无言。`,
      );
      await era.printAndWait(
        `由着${teio.sex}……也不会有什么大不了吧，脑海中有个声音做出了妥协，再说，${you.name} 也需要${teio.sex}继续奔跑得到成绩，不是吗？`,
      );
      await era.printAndWait(`${you.name} 叹了口气，不了了之。`);
    };
    f.title = title;
    return f;
  })(),
  or_47_25: (() => {
    const title = '定时刷新的小兽';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await teio.say_and_wait('呜啊。');
      era.println();
      await era.printAndWait(
        `${you.name} 缓慢地，恰到好处地抚摸着趴在 ${
          you.name
        } 大腿上，整个人蜷缩起来的担当${teio.uma_sex_title}。`,
      );
      await era.printAndWait(
        `自从有次 ${you.name} 帮${teio.sex}按摩之后，${teio.sex}便食髓知味，不仅要求 ${you.name} 帮忙梳理毛发（倒也合理），还会偷偷溜进 ${you.name} 的办公室里，不管 ${you.name} 在不在工作，一定要往 ${you.name} 身上蹭，要求 ${you.name} 缓解${teio.sex}的身体疲劳。`,
      );
      await era.printAndWait(
        `${you.name} 心不在焉地挠了挠${teio.sex}的下巴，${teio.sex}发出一阵满足的咕噜声，眯起了眼睛。`,
      );
      await you.say_and_wait('你是猫吗', true);
      await era.printAndWait(
        `${you.name} 不禁在心里吐槽起来，腿上的${teio.teen_sex_title}好像真把 ${
          you.name
        } 这地方当成自己的窝了。`,
      );
      era.println();

      era.print(`${you.name} 接下来要怎样对${teio.sex}呢——`);
      era.printButton(
        '缓慢地，从发根轻柔地往下抚摸，直至尾稍末端（技能点数+30，体力+50～100，好感+5）',
        1,
      );
      era.printButton(
        `因为太累……不知不觉中 ${you.name} 和${teio.sex}都睡着了。（耐力&根性+20）`,
        2,
      );
      if (era.get('love:3') >= 50) {
        era.printButton('坏心思的恶作剧（速度&力量&智力+20，爱慕+1）', 3);
      }
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait(
            `${you.name} 五指并作掌，用刚好的力度从头到尾顺了一遍毛，掌间传来一阵松软，让 ${you.name} 的心情也愉快了起来。`,
          );
          break;
        case 3:
          await era.printAndWait([
            you.get_colored_name(),
            ' 起了坏心眼，先挠了挠',
            teio.sex,
            '的耳根和尻里（控制尾巴的内侧无毛处），小',
            teio.uma_sex_title,
            '浑身颤抖时 ',
            you.get_colored_name(),
            ' 又改变了策略，用按摩手法捏遍',
            teio.sex,
            '的全身……',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_win: (() => {
    const title = 'Not the end';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait('短暂的结束，要来了。');
      await era.printAndWait(
        `${
          you.name
        } 站在看台上，想着这一年来的种种经历。${teio.teen_sex_title}能走到现在，离不开 ${
          you.name
        }，而 ${you.name} 也是被${teio.sex}的坚韧和执着所吸引，自愿去帮助${
          teio.sex
        }。`,
      );
      await era.printAndWait('成功就在眼前了。');
      await era.printAndWait(
        `只要拿下这场比赛，${teio.name} 就离自己的最终目标又进了一步，而以${teio.sex}目前的表现来说——尽管 ${you.name} 作为训练员不应该提前开香槟——基本上是十拿九稳。`,
      );
      await era.printAndWait(
        `脑中甚至浮现出了 ${you.name} 与${teio.sex}成为传说，名字刻在殿堂中的幻象……`,
      );
      await era.printAndWait('等等。');
      era.println();
      await era.printAndWait(`解说「${teio.name}——怎么——」`);
      era.println();
      await era.printAndWait('不对劲！');
      await era.printAndWait(
        `${you.name} 抓紧栏杆猛地探出头去，在赛场上捕捉那个属于 ${
          you.name
        } 的${teio.uma_sex_title}。找到了，领头的位置——${teio.sex}的动作？！`,
      );
      await era.printAndWait(
        `${you.name} 看到帝王以一种非常不正常的姿势向外侧滑——`,
      );
      era.println();
      await era.printAndWait('解说「——失速——」');
      era.println();
      await era.printAndWait(
        `距离终点已经很近，但 ${
          you.name
        } 已经顾不上什么成绩了，疯了一样就要冲下去接自己的担当，保安将失去理智的 ${
          you.name
        } 拉住，${you.name} 看着${
          teio.sex
        }，即使相隔不近也能感受到，痛苦和不甘写满了${teio.teen_sex_title}的脸庞……`,
      );
      era.println();
      era.printButton('「帝王！」', 1);
      await era.input();
      await era.printAndWait(
        `比赛后，${you.name} 一点时间也没有浪费，抱起${teio.sex}返回特雷森，冲向医务室。`,
      );
    };
    f.title = title;
    return f;
  })(),
  os_famous_in_famous: (() => {
    const title = '名人中的名人';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await you.say_and_wait('准备好了吗');
      era.println();

      await teio.say_and_wait('唔嗯。');
      era.println();

      await era.printAndWait(
        '耳朵掖进帽子，尾巴藏进裤子，带上墨镜和口罩，装扮好了。',
      );
      await era.printAndWait(
        `${you.name} 也穿上一件不起眼的衣服，把衣领竖起来随意遮了遮脸，再加一顶鸭舌帽，ok。`,
      );
      await era.printAndWait(
        `你们就像两个蹩脚的特工一样遮掩住了自己的身份，走上街头。`,
      );
      await era.printAndWait(
        `——完成三冠后，${teio.name} 的知名度越来越高了，当然，${
          you.name
        } 的知名度也随之水涨船高。现在如果不加以遮掩的话，你们往往出现在人流量大的地方就会被粉丝们团团包围，什么都干不成了。`,
      );
      await era.printAndWait(
        '所以，像这种前置工作，是必须的。但准备往往不能应付所有场面，比如——',
      );
      era.println();

      await era.printAndWait(
        `车轮与柏油路摩擦产生的难听刺啦声冲刺着 ${you.name} 的耳膜。`,
      );
      await era.printAndWait(
        `${you.name} 转头望去，时间仿佛在一瞬间变得缓慢。`,
      );
      await era.printAndWait(
        '一个小孩摔倒在路上，由于身高原因没有被司机注意到，等他反应过来猛踩刹车之时——悔之晚矣。',
      );
      await era.printAndWait(`但是，${you.name} 身旁突然爆发出一阵劲风。`);
      await era.printAndWait(
        `被 ${
          you.name
        } 护在内测的${teio.actual_name_with_title}，瞬间发劲，疾冲出去。`,
      );
      await era.printAndWait('司机仰背，把刹车踩到极限，绝望地闭上双眼。');
      await era.printAndWait('然后奇迹发生了。');
      await era.printAndWait(
        '呼的一声，就如魔术一般，孩子从路上消失，司机有惊无险地过了路。他睁开眼睛，还没反应过来发生了什么。',
      );
      era.println();

      await teio.say_and_wait('以后跟紧自己的家长，不要乱跑哦。');
      era.println();

      await era.printAndWait(
        `小孩「好的……谢谢${teio.uma_sex_title}${
          teio.elder_sibling_sex_title
        }？」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title}${teio.elder_sibling_sex_title}？！`,
      );
      era.println();

      await era.printAndWait(
        `${teio.name} 这才反应过来自己的帽子被带起的风吹掉了，马尾也在剧烈运动中跑了出来，${you.name} 赶忙帮${teio.sex}伪装，可惜为时已晚。`,
      );
      era.println();

      await era.printAndWait(`路人A「是 ${teio.name}！」`);
      era.println();

      await era.printAndWait('路人B「哇，传说中的帝王大人！」');
      era.println();

      await era.printAndWait(
        `路人C「看到了吗！${teio.sex}刚刚用帝王舞步救了那个孩子！」`,
      );
      era.println();

      await era.printAndWait(
        `众人的呼声一浪高过一浪，不少人闻讯而来向你们这边靠近。你们顿时觉得有些手脚无措。不过 ${
          you.name
        } 看了一眼帝王，${teio.teen_sex_title}的脸红彤彤的，但也没有明确表示出反感——看来名声总是能让人，或${teio.uma_sex_title}高兴的吧。`,
      );
      await era.printAndWait(
        `然后 ${you.name} 注意到${teio.sex}的耳朵转了一个角度，紧接着 ${you.name} 也听到了一些声音。`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title}A「唔，真帅气啊！我也想成为这样的${teio.uma_sex_title}！」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title}B「听说${
          teio.sex
        }的训练员很厉害，应该就是现在在${teio.sex}旁边的那个人。」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title}C「真的吗？我也想找${
          you.sex
        }当我的专属训练员，我现在就要找${you.sex}签订契约！」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title}D「${you.sex}的样貌和气质也好好啊，真想……」`,
      );
      era.println();

      await era.printAndWait(
        `额……这倒是意料之外的夸赞。不过，${you.name} 也欣然接受。`,
      );
      await era.printAndWait(
        `不过 ${you.name} 已不能去想后半句话的内容了，因为 ${you.name} 看到自家担当以玩味的表情看了过来。`,
      );
      era.println();

      await you.say_and_wait(`糟了……${teio.sex}什么时候学会这种东西的`, true);
      await era.printAndWait(
        `${you.name} 心叫不妙，但是${teio.sex}已经三步并作两步跨到 ${you.name} 身前，一把挽住 ${you.name} 的胳膊，说道`,
      );
      era.println();

      await teio.say_and_wait(
        `抱歉大家，我们还有事先行一步，感谢大家对我们的厚爱和支持，让我们等到赛场上再见吧。训～练～员～跟帝王${teio.adult_sex_title}出发吧？`,
      );
      era.println();

      era.print(`${you.name} 顿感有些哭笑不得，只好回复——`);
      era.printButton('「侍于无敌的帝王大人身旁，是在下的使命」（智力+30）', 1);
      era.printButton(
        `「竭尽所能，我的${teio.adult_sex_title}」（随机三项属性+15）`,
        2,
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
  ws_95_5: (() => {
    const title = '放弃';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await you.say_and_wait('帝王，我们必须严肃地谈谈这个问题');
      era.println();

      await era.printAndWait(
        `${you.name} 的手上拿着医生给的资料，以及自己收集的材料，其中无一不在说明东海帝王腿部现今的情况。`,
      );
      await era.printAndWait(
        `如果不加以修养……恐怕${teio.sex}的腿在跑完下次比赛之时，就会成为一辈子的伤痛吧。`,
      );
      era.println();

      await you.say_and_wait(
        `帝王，你的腿脚构造就算是在${teio.uma_sex_title}中，也算是与众不同的，这种结构带给你独有的跑法，但这种『帝王舞步』实际上是透支自己的身体。`,
      );
      await you.say_and_wait(
        '上次比赛的失速，上上次比赛后的伤，只不过是前兆。对你来说最重要的双腿……有可能彻底毁掉',
      );
      era.printButton(
        '「医生和我都同意……让你暂时离开赛场，修养一段时间。」',
        1,
      );
      await era.input();
      await you.say_and_wait(
        '这段时间内我们会尽全力帮助你治疗的。校方那边也已经打过招呼了，这是对你一生有益的事情。',
      );

      await era.printAndWait(
        `${you.name} 看着紧紧抿着嘴唇，低下头的自家担当，心里一阵难受，但还是咬咬牙，这是为了${teio.sex}好，${you.name} 在心底对自己说。`,
      );
      era.println();
      await teio.say_and_wait('不……');
      era.println();
      await era.printAndWait(
        `细微却坚定的声音响起，${you.name} 叹了口气，早就料想到这样不是吗。`,
      );
      era.println();
      await era.printAndWait(
        `转眼间，${teio.teen_sex_title}已经抬起来头，${
          you.name
        } 能看到有液体汇聚在眼角，让${
          teio.sex
        }本来就如蓝宝石一般的眼睛更加晶莹剔透。`,
      );
      era.println();
      await teio.say_and_wait(
        '我不能放弃春天皇赏……那样的话，就等于我自己放弃了自己的三冠梦！那么，我至今的奋斗……又是为了什么？',
      );
      era.println();
      await teio.say_and_wait(
        '再说，我天生有这样的身体，难道不是证明我一定能依靠它实现奔跑的梦想吗！我是不会认可其他结局的……我不想避战！',
      );
      era.println();
      await era.printAndWait(
        `${teio.teen_sex_title}倔强的眼神与你对视，你能看到${
          teio.sex
        }瞳孔中自己的倒影。${teio.sex}最亲密的人，如今却「背叛」了${teio.sex}……${
          you.name
        } 看着自己的镜像，不是滋味。`,
      );
      era.println();
      await teio.say_and_wait('这是我一生一次的请求……求你了');
      era.println();
      await era.printAndWait(`${you.name} 决定——`);
      era.printButton(`「我用训练员的身份要求你，放弃下次比赛。」`, 1);
      era.print('【若选择此项，东海帝王将强制避战春季天皇赏】', {
        offset: 1,
        width: 23,
      });
      era.printButton(`「你是我的担当马娘，我会一直支持你的梦想前行的。」`, 2);
      era.print(
        `【若选择此项，帝王的腿伤将不可逆转，你是否有了与${teio.sex}从一齐跌入低谷相互搀扶爬升的心理准备？】`,
        { offset: 1, width: 23, color: buff_colors[3] },
      );
      let ret = await era.input();
      if (ret === 2) {
        era.print(
          `【警告，若选择此项帝王的腿伤将不可逆转，你是否有了与${teio.sex}从一齐跌入低谷相互搀扶爬升的心理准备？】`,
          { color: buff_colors[3] },
        );
        era.printButton('还是算了', 1);
        era.printButton('准备好了！', 2);
        ret = await era.input();
      }
      if (ret === 1) {
        await era.printAndWait(
          `${teio.teen_sex_title}眼含泪光，但终究，还是被 ${
            you.name
          } 压制住了。${teio.sex}沉默地离去，夕阳在${
            teio.sex
          }身后拖出一道长长的影子。`,
        );
      } else {
        await era.printAndWait(
          `${teio.teen_sex_title}破涕为笑，握着 ${
            you.name
          } 的手，体温烘暖了接触的部位。${
            you.name
          } 紧锁眉头，不知道自己的选择是对是错。`,
        );
        await era.printAndWait(
          `但是，训练员就是为了实现${teio.uma_sex_title}梦想的职业……对吧？`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_95_25: (() => {
    const title = '春之帝王';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await you.say_and_wait('真好啊……');
      era.println();
      await era.printAndWait(
        `训练刚刚结束，${
          you.name
        } 和担当一起慢悠悠地散步在回宿舍的路上。${teio.uma_sex_title}${teio.adult_sex_title}此时正甩了甩头，激烈运动导致头发散下，几滴汗珠飞射出来，隐约能看见全身蒸腾的热气。`,
      );
      await teio.say_and_wait('嗯？训练员？你说什么？');
      era.println();

      await era.printAndWait(
        `${you.name} 猛然发现自己一不小心看${teio.sex}看入迷了还说出了心里话，连忙找补。`,
      );
      era.println();

      era.printButton('「我是说，你最近的成绩真的太出色了。」', 1);
      await era.input();

      await teio.say_and_wait('嗯～哼？真的只是这样？');
      era.println();

      await era.printAndWait(
        `${you.name} 转过头去，不予回答，顺带悄悄地立起了衣领遮住充血的脸庞。`,
      );
      era.println();

      await era.printAndWait(
        `小${teio.uma_sex_title}拿眼睛瞟了 ${
          you.name
        } 一眼，抿嘴笑了，然后又突然面色转沉。`,
      );
      era.println();

      await teio.say_and_wait('训练员……我们的旅途，还没有结束啊。');
      era.println();

      await era.printAndWait(
        `突如其来的问话让 ${you.name} 不禁回头，本想随便开开玩笑回复，但看到${teio.sex}脸上认真的神情，又哑然了。`,
      );
      await teio.say_and_wait(
        '我的过去的成绩，现在的荣耀，将来的目标，都会与你共享。所以，让我们一起，继续吧。',
      );
      await era.printAndWait(
        `${teio.teen_sex_title}一丝不苟地，向 ${you.name} 吐露出了这段心声。`,
      );
      era.println();

      era.printButton('「当然」', 1);
      await era.input();

      await era.printAndWait(`你们一同，向目标位置走去——`);
    };
    f.title = title;
    return f;
  })(),
  os_lets_go_together: (() => {
    const title = '一起走吧！';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await teio.say_and_wait('蜂蜜🎶～');
      era.println();

      await era.printAndWait(
        `身穿黄色连衣裙的小${teio.uma_sex_title}迎着阳光，在前方蹦蹦跳跳的走着，发散着自己那过剩的活力，不过或许是为了照顾 ${
          you.name
        }，${teio.sex}始终没有离开 ${you.name} 的视野范围。`,
      );
      await era.printAndWait(
        `看着${teio.sex}这么活泼自在，${you.name} 也不由得笑了起来，紧跟上${teio.sex}的步伐。`,
      );
      await era.printAndWait(
        '不一会便到了一处人工溪水旁，看样子不是给一般游客的路——',
      );
      await era.printAndWait(
        `${you.name} 刚这么想着，自家担当的凉鞋已经踏在水里露出的石头上了。${teio.sex}向 ${you.name} 伸出一只手。`,
      );
      era.println();

      await teio.say_and_wait('一起来吧，训练员！');
      await era.printAndWait(`${you.name} 决定——`);
      era.printButton('点头（耐力+15）', 1);
      era.printButton('「不，还是守规矩吧」（根性+15）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name} 也伸出了自己的手，握住了${teio.sex}，一股不符合体型的力道将 ${you.name} 拽了过去，二人踏水而行，愉快的体验。`,
        );
        await era.printAndWait('——如果没有被工作人员发现并教育的话就更好了。');
      } else {
        await era.printAndWait(
          `小${teio.uma_sex_title}看上去有点失望，不过还是退回到 ${
            you.name
          } 身边，与 ${you.name} 并肩同行在正路上走了。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_dance_or_kongfu: (() => {
    const title = '舞蹈……武道？这样能训练帝王舞步吗？';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `木制的硬地板打上蜡，在这可以映上人影的平面上，一位${teio.uma_sex_title}正穿着道服练习着抬腿和发力。`,
      );
      era.println();

      await you.say_and_wait('停，歇一下吧，感觉差不多了。');
      era.println();

      await era.printAndWait(
        `${you.name} 把一瓶自调的，比例刚好的生理盐水拧开盖子递给${teio.sex}。${teio.sex}接过，小口小口，按照一定速度吞咽下去。`,
      );
      era.println();

      await you.say_and_wait('啊……居然比想象中的有成果', true);
      era.println();

      await era.printAndWait(
        `${you.name} 家的担当不知道看了什么作品，突然跟 ${you.name} 说要试试练武，把功夫的技巧融会贯通到跑步上，特别是练习下盘的步法，希望能借此精进自己的帝王舞步。`,
      );
      era.println();

      await era.printAndWait(
        `${you.name} 拗不过${teio.sex}，只好让${teio.sex}试试，没想到还出乎意料地有成效。`,
      );
      era.println();

      await teio.say_and_wait('训练员，怎么说？');
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        ' 看着笑嘻嘻的担当，如此回复道——',
      ]);
      era.printButton('跟着感觉走（力量&根性+20，技能点数+15）', 1);
      era.printButton('修行为先（速度+30，技能点数+15，体力+200）', 2);
      era.printButton(`冷静分析（速度+15，耐力+20，智力+30，技能点数+30）`, 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await you.say_and_wait('我觉得应该先哈——地这样，然后侂阿——');
          break;
        case 2:
          await you.say_and_wait('舞就是武……就是修炼以臻极境！');
          break;
        case 3:
          await you.say_and_wait(
            '我想我们可以通过这种训练控制身体的协调性，唔，试一试改变重心位置以造成瞬间的加速度用于冲线刹那？',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_honey_power: (() => {
    const title = '蜂蜜的力量';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `总感觉跟${teio.sex}一起外出时候总会碰到什么事，${you.name} 一边想着，一边看着在旁边挽着 ${you.name} 胳膊的担当。`,
      );
      await era.printAndWait(
        `或者说，拽着 ${you.name} 更为确切。有时候 ${
          you.name
        } 也很好奇自己是怎么在保持思考的状态下跟上活蹦乱跳的${teio.uma_sex_title}${teio.teen_sex_title}的步伐的，或许是 ${
          you.name
        } 在相处之中也耳濡目染会了些帝王舞步的技巧。`,
      );
      await era.printAndWait(
        '相处之中，很多事情都会潜移默化地互相影响啊……比如说口味。',
      );
      era.println();

      await era.printAndWait(
        `${you.name} 的担当带 ${you.name} 到了长椅下，开始大口啜饮一刻钟前在常去的饮品摊位前买的特制蜂蜜特饮。`,
      );
      await era.printAndWait(
        `浓浆从${teio.sex}的喉咙处吞入，滑过脖颈形成小小的曲线，阳光照向${teio.sex}的一侧，让粉白的皮肤更添一层质感，同时凸出了肌肉在吞咽时每一个细小的动作……`,
      );
      await era.printAndWait(
        `刚刚买的时候 ${you.name} 并无什么想法，现在却感口舌干燥，也想喝点什么润润。`,
      );
      era.println();

      await teio.say_and_wait('训练员？');
      era.println();

      await era.printAndWait(`${you.name} 赶忙应声。`);
      era.println();

      await teio.say_and_wait(
        `训练员？感觉 ${you.name} 也很渴吧，要不要喝点东西呢？`,
      );
      await era.printAndWait(
        `${teio.sex}嘻嘻笑着，把还剩半杯的蜂蜜特饮举到 ${you.name} 的眼前，仿佛是在邀请 ${you.name}。`,
      );

      await era.printAndWait(`${you.name} 会——`);
      era.printButton('再买一杯（智力+20，好感+5）', 1);
      era.printButton(
        '「其实我比较喜欢喝无糖无味的茶水……」（耐力&根性+15）',
        2,
      );
      if (era.get('love:3') > 50) {
        era.printButton(
          `接过${teio.sex}手中的杯子，用上面的吸管品尝完后再还给${teio.sex}（速度&力量+15，体力+150，爱慕+1）`,
          3,
        );
      }
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait(
            `${you.name} 笑着摸了摸${
              teio.sex
            }的头，转身去给自己买了一杯。举起蜂蜜特饮放在唇边，指间残留着的${teio.uma_sex_title}发香和甜美的蜂蜜味道混在一起，让人陶醉……`,
          );
          break;
        case 2:
          await era.printAndWait(
            `${you.name} 略显尴尬地清了清嗓子，婉言拒绝了自家担当的邀请。${teio.sex}眯起眼睛，似乎笑得更愉快了。`,
          );
          break;
        case 3:
          await teio.say_and_wait('///////');
          era.println();

          await era.printAndWait(
            `${you.name} 不由得起了坏心眼，将${teio.sex}手上的杯子拿了过来，顺势痛饮一大口，再跟无事发生一样把杯子放回宕机的${teio.sex}的手里。`,
          );
          era.println();

          await teio.say_and_wait('唔嗯嗯——');
          era.println();

          await era.printAndWait('……好像玩大了。');
          await era.printAndWait(
            `后来好好道歉了十分钟，红透了脸的${teio.sex}才停止了唔唔，起身靠到 ${you.name} 旁边。`,
          );
          await era.printAndWait(
            `继续行走之前，${you.name} 注意到${teio.sex}似乎刻意规避 ${you.name} 的视线，小心地又用吸管喝了几口饮料……`,
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sr_wing_and_sky: (() => {
    const title = '身负双翼，触及青天';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await you.say_and_wait('天台啊，真是有点久违。', true);
      await era.printAndWait(`${you.name} 带着食盒，走到门外。`);
      await era.printAndWait(
        `门已经大开，在 ${you.name} 眼前的，是 ${you.name} 的爱马，${teio.name}。`,
      );
      era.println();

      await teio.say_and_wait(`果然还是这里舒服啊～在高处真自在。`);
      era.println();

      await you.say_and_wait('你开心就好咯。');
      era.println();

      await era.printAndWait(
        `说着，${you.name} 放下食盒，开始整理。${you.name} 的担当又不知起了什么兴致，拉 ${you.name} 到天台上开什么二人下午茶会，${you.name} 只好带了些点心，自己泡了壶果茶，跟着${teio.sex}来了。`,
      );
      era.println();

      await teio.say_and_wait('我说啊——');
      era.println();

      await era.printAndWait(
        `一阵轻风拂过，${
          you.name
        } 昂首，看到${teio.uma_sex_title}脚步一拧，双手略扬，转了个身，眼神与 ${
          you.name
        } 对视，说道`,
      );
      era.println();

      await teio.say_and_wait(
        '训练员你是知道的吧，我那攀到高处的梦想。现在，经我们二人之手，虚幻的念想已经逐渐变成现实的阶梯，送我们向上，接下来……',
      );
      era.println();

      era.print(`${you.name} 回答道——`);
      era.printButton(
        '「我一直都会是你的助力」（速度&耐力&智力+20，体力+200，爱慕+1）',
        1,
      );
      era.printButton(
        '「祝成功，等到圆梦之后，我们再回到这里聚一下吧」（速度+15，力量&根性+20，好感+5）',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${teio.teen_sex_title}躬身，冲 ${you.name} 灿烂一笑。`,
        );
      } else {
        await teio.say_and_wait('又是一个约定，记好了哦～');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_the_days_together: (() => {
    const title = '与你一同前行的日子';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `学校的中心，有一处喷泉，上端坐着三女神的雕塑。每天，有无数${teio.uma_sex_title}或人类在这里默默祈祷，许下愿望。`,
      );
      await era.printAndWait(
        `${you.name} 盯着上面一张有些神似自己担当的脸，手指轻触口袋里的钱包，要不要许愿呢……`,
      );
      era.println();

      await teio.say_and_wait('训练员！');
      era.println();

      await era.printAndWait(
        `${you.name} 回过头，向担当招手示意，${teio.sex}却蹦蹦跳跳地前来，旁若无人地拉起了 ${you.name} 的手。`,
      );
      await era.printAndWait(
        `${you.name} 看着${teio.sex}的脸，不得不说……真的有点像。`,
      );
      era.println();

      await teio.say_and_wait('嗯哼～和我在一起，居然在想着别的孩子？');
      era.println();

      await era.printAndWait(
        `——不是孩子啊！${you.name} 本想这么说，看到担当的表情，决定还是识相地闭上嘴巴。`,
      );
      era.println();

      await teio.say_and_wait(
        `哼……那就小小惩罚一下 ${you.name} 这花心老师，${you.name} 刚刚是想许愿吧，许什么愿？`,
      );
      era.println();

      era.printButton('「今后也请多指教」（好感+10，全属性+5）', 1);
      if (era.get('love:3') > 90) {
        era.printButton(
          '「我想，不，我会永远陪伴在你身边」（爱慕+1，干劲上升，随机两项属性+10）',
          2,
        );
      }
      const ret = await era.input();
      if (ret === 1) {
        await teio.say_and_wait('根本不是愿望吗……这什么啊。');
        era.println();

        await era.printAndWait(`但 ${you.name} 确实没想好许愿的事。`);
      } else {
        await teio.say_and_wait('……原谅你了，下不为例。');
        era.println();

        await era.printAndWait(
          `脸红到耳根的小${teio.uma_sex_title}放开了 ${you.name} 的手。`,
        );
        await era.printAndWait(
          `一段时间后，等到 ${teio.name} 离去了，${you.name} 回到这里，咧嘴一笑，把钱包里的所有硬币都倒进池中，双手合十，首次认真地许了个愿。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_uma_shopping: (() => {
    const title = (teio) => `${teio.uma_sex_title}的……血拼！`;
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait('陪女人逛街，辛苦。');
      await era.printAndWait('陪女人进商业中心，疲惫。');
      await era.printAndWait(`陪${teio.uma_sex_title}买东西，累麻了。`);
      await era.printAndWait(`很不幸，${you.name} 现在就在这第三个层级。`);
      await era.printAndWait(
        `推着购物车——速度比起${teio.sex}来说简直不是一个级别——一边对照列的清单一边查点货架上的东西。光是如此倒也不失为一种悠闲。`,
      );
      await era.printAndWait(
        `不过，${you.name} 看着一眨眼就被不知道从哪来的东西填满的购物车，和耳边不停的穿梭气流声，不由自主地叹起气来。`,
      );
      era.println();
      await teio.say_and_wait(
        '训练员，快一点！还有要买的东西，我一个人拿不了那么多，需要你帮忙装啊！再不来，就要被抢光了！',
      );
      await era.printAndWait(
        ` ${you.name} 仰天长啸，算是认了命，催动双腿向声音来源处靠拢——`,
      );
      era.printButton(
        '拼命跟上帝王的节奏（速度&力量&根性+20，体力+200，好感+10）',
        1,
      );
      era.printButton(
        '按照事先划好的路线，先一步到达目标位置，等待帝王出现，装好东西后再来一轮（耐力+20，智力+30，好感+5）',
        2,
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
};
