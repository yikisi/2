/**
 * @file 卓芙 - 日常
 * @author 梦露
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /** @param {CharaTalk} treve 卓芙 */
  good_morning(treve) {
    const buffer = [
      () => treve.say('那么接下来，要玩什么呢？'),
      () => treve.say('因为我现在很有精神，精力余裕得有点困扰呢。'),
    ];
    if (era.get('love:205') >= 50) {
      buffer.push(
        () => treve.say('你太宠着我了吧……有点溺爱了？'),
        () =>
          treve.say('从清晨到傍晚，我每分每秒都惦记着你，无时无刻不思念着你。'),
      );
    }
    if (era.get('love:205') >= 75) {
      buffer.push(
        () => treve.say('我以为我会是个专一的人，在遇到你之前。'),
        () => treve.say('我朝你走过去的时候，感觉心脏像情窦初开一样砰砰直跳。'),
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} treve 卓芙
   * @param {string} callname 卓芙对玩家的称呼
   */
  select(treve, callname) {
    const buffer = [() => treve.say(`Bonjour～有指示吗 ${callname}？`)];
    if (era.get('love:205') >= 50) {
      buffer.push(() => treve.say('叫我的时候不准戳这种地方啦。'));
    }
    if (era.get('love:205') >= 75) {
      buffer.push(() => treve.say('呵呵，可以哦。'));
    }
    get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve 卓芙 */
  async office_study(treve) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '奇怪，你学法语时候也这么磕磕绊绊吗？没有……可恶的天才。',
        ),
      () => treve.say_and_wait('总觉的有你在身边会跳的更好……怎么样，不错吧？'),
      () => treve.say_and_wait('快住手，你是变态也不能这么指导！'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} treve 卓芙
   * @param {string} callname 卓芙对玩家的称呼
   */
  async office_prepare(treve, callname) {
    const buffer = [
      () => treve.say_and_wait('请让我为你献上最好的礼物。'),
      () => treve.say_and_wait(`今日的胜利，将由我拿下，为了 ${callname}。`),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve 卓芙 */
  async talk(treve) {
    const buffer = [];
    if (era.get('base:205:体力') < 0.3 * era.get('maxbase:205:体力')) {
      buffer.push(
        () => treve.say_and_wait('把你的胸膛借给我，好吗？'),
        () => treve.say_and_wait('我现在连走路都不行啦～'),
      );
    } else {
      switch (era.get('cflag:205:干劲')) {
        case 2:
          buffer.push(() =>
            treve.say_and_wait('刚刚是我自己在训练，是训练哦。'),
          );
          era
            .getAddedCharacters()
            .some((cid) => cid !== 205 && era.get(`love:${cid}`) >= 50) &&
            buffer.push(() =>
              treve.say_and_wait(
                `不能给我讲讲你和${treve.couple_title}是怎么相识的吗？`,
              ),
            );
          era.get('love:205') >= 50 &&
            buffer.push(() =>
              treve.say_and_wait('能对你说『我的爱人』，这种感觉真好。'),
            );
          break;
        case 1:
          buffer.push(
            () => treve.say_and_wait('每个人的故事都不一样，我特别喜欢听。'),
            () => treve.say_and_wait('我想让你继续照顾我。'),
          );
          break;
        case 0:
          buffer.push(
            () => treve.say_and_wait('等到你可真是太不容易了。'),
            () => treve.say_and_wait('我还是来给『新手』训练员做个示范吧。'),
          );
          break;
        case -1:
          buffer.push(
            () =>
              treve.say_and_wait(
                '如果您能抱抱我的话，说不定我的情况能有所好转。',
              ),
            () => treve.say_and_wait('我的热情，无影无踪，无声无息……'),
          );
          break;
        case -2:
          buffer.push(
            () => treve.say_and_wait('你要是能送我去休息就再好不过了。'),
            () => treve.say_and_wait('死亡，就是生活的赋税……'),
            () => treve.say_and_wait('你不仅仅是训练员，你还是情场浪子……'),
          );
      }
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve 卓芙 */
  async office_gift(treve) {
    const buffer = [
      () => treve.say_and_wait('世事变迁，唯爱永痕。'),
      () => treve.say_and_wait('我可以把这当成爱吗？'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve 卓芙 */
  async office_cook(treve) {
    const buffer = [
      () => treve.say_and_wait('法国的料理怎么说呢……啊哈哈哈，不聊这个先。'),
      () => treve.say_and_wait('呜，胃要被坏人给抓住啦。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve 卓芙 */
  async office_rest(treve) {
    const buffer = [
      () => treve.say_and_wait('不知道以后会咋样。'),
      () => treve.say_and_wait('和我一起休息开心吗？'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} treve 卓芙
   * @param {string} callname 卓芙对玩家的称呼
   */
  async office_game(treve, callname) {
    const buffer = [
      () =>
        treve.say_and_wait(`${callname}！为什么有人会把 Umaisoft 叫育婊啊？`),
      () =>
        treve.say_and_wait(
          '《〇客信条：特雷森》……从各个方面来说都是对系列所有前作进行的一次全面超越——',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve 卓芙 */
  async s_a_tree_hollow(treve) {
    const buffer = [
      () => treve.say_and_wait('远方我的吻，苦涩伤感。'),
      () => treve.say_and_wait('我们的命运艰难曲折。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve 卓芙 */
  async s_a_dating(treve) {
    const buffer = [
      () => treve.say_and_wait('熟练得可怕……这才是你的老本行吗难道！'),
      () => treve.say_and_wait('和现在比，以前的生活只能说是『等死』呢。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve 卓芙 */
  async s_r_lunch(treve) {
    const buffer = [
      () => treve.say_and_wait('锵锵！今天的品质还算蛮在线的。'),
      () =>
        treve.say_and_wait(
          '龙虾大虾烤虾青口贝和烤鱿鱼，配菜是薯条和海鲜泡饭，请好好补补身体。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} treve 卓芙
   * @param {CharaTalk} you 玩家
   */
  async o_r_fishing(treve, you) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '大鱼终于上钩了……你前不久也钓到了一条品种不错的？骗人，我都没看到。',
        ),
    ];
    if (you.sex_code === 1 && treve.sex_code !== 1) {
      buffer.push(() =>
        treve.say_and_wait(
          `钓不上来啦……哼，谢 ${you.actual_name}爷 打赏小女。`,
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve 卓芙 */
  async o_r_walking(treve) {
    const buffer = [
      () => treve.say_and_wait('请放心牵起我的手，哪怕要远走高飞都行哦。'),
      () => treve.say_and_wait('咕……要被你这种浪漫过敏的直男气死了啦。'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} treve 卓芙
   * @param {CharaTalk} you 玩家
   * @param {string} callname 卓芙对玩家的称呼
   * @param {PrintedSpan|false} call_target 卓芙对看到的公仔原型的称呼，如果队内没有其他马娘时为 false
   */
  async o_s_arcade(treve, you, callname, call_target) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '知道吗？法国的游戏厅除了小情侣，还经常能看到很多小小青梅竹马的。',
        ),
      () =>
        treve.say_and_wait([
          '嗯，输了输了……',
          you.get_colored_actual_name(),
          '，我们去那边的【挥拳测力机】再战吧。',
        ]),
    ];
    if (call_target) {
      buffer.push(() =>
        treve.say_and_wait([
          callname,
          '！是 ',
          call_target,
          ' 的公仔诶！我可以夹一个吗？',
        ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} treve 卓芙
   * @param {string} callname 卓芙对玩家的称呼
   */
  async o_s_drawing(treve, callname) {
    const buffer = [
      () => treve.say_and_wait(`哇哇哇……${callname}！请预支我零花钱。`),
      () => treve.say_and_wait('巴黎 5 天 4 晚豪华游……真抽到了我们怎么安排？'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve 卓芙 */
  async o_s_ktv(treve) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '你歌唱的可真迷人，或许你该学学《远去的列车》、《玫瑰人生》什么的……',
        ),
      () => treve.say_and_wait('先说好，我喉咙很累了，更不可能在这里和你……'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve 卓芙 */
  async o_s_movie(treve) {
    const buffer = [
      () =>
        treve.say_and_wait('非常有沉浸感的佳作，impeccable a tous les sens'),
    ];
    if (treve.sex_code !== 1 && era.get('cflag:0:性别') === 1) {
      buffer.push(() =>
        treve.say_and_wait(
          '师傅说有部老电影很适合我们，叫《Un homme et une femme》——一个男人和一个女人，好奇怪啊，哈哈哈……',
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} treve 卓芙
   * @param {CharaTalk} you 玩家
   * @param {string} callname 卓芙对玩家的称呼
   * @param {number} dice 祈祷掷骰结果，0-1 之间的小数，越小越好
   */
  async o_c_pray(treve, you, callname, dice) {
    await era.printAndWait([
      you.get_colored_name(),
      ` 邀请 ${treve.name} 去附近的神社，${treve.sex}开心地答应了。`,
    ]);
    await treve.say_and_wait('你在想什么呢，看上去心不在焉的。');
    await treve.say_and_wait('我先去抽签啦！');
    if (dice < 0.5) {
      await treve.say_and_wait(
        `【大吉】诶，能再来一次吗？这个我想送给 ${callname}`,
      );
    } else {
      await treve.say_and_wait('呜哦哦，这种事，体验一次就够了……');
    }
  },
  /** @param {CharaTalk} treve 卓芙 */
  async o_s_restaurant(treve) {
    const buffer = [
      () => treve.say_and_wait('这种餐厅，像小情侣约会来的……'),
      () =>
        treve.say_and_wait(
          '这种好地方你怎么找到的！？便宜分量大，根本吃不完！',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve 卓芙 */
  async o_s_dating(treve) {
    const buffer = [
      () => treve.say_and_wait('我得好好看看你平时是怎么度过一天的。'),
      () => treve.say_and_wait('怎么不送我花呢？我也喜欢花啊。'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} treve 卓芙
   * @param {string} callname 卓芙对玩家的称呼
   */
  async o_s_shopping(treve, callname) {
    const buffer = [
      () =>
        treve.say_and_wait(
          `西瓜……好贵！？而且按块卖的，这合理吗 ${callname}？`,
        ),
      () => treve.say_and_wait('我，各种东西都不太会挑…'),
      () => treve.say_and_wait('今天竟然有优惠诶，chanceux～'),
    ];
    await get_random_entry(buffer)();
  },
  basement_end: (() => {
    const title = '情爱囹圄';
    /**
     * @param {CharaTalk} treve 卓芙
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 卓芙对玩家的称呼
     */
    const f = async (treve, you, callname) => {
      await era.printAndWait('某一天，在巴黎的街道上。');
      await treve.say_and_wait([callname, '！']);
      await era.printAndWait(
        `听惯了的那个声音，${you.name} 回头一看，${treve.name} 跑了过来。`,
      );
      await era.printAndWait(
        `稚嫩可爱的${treve.sex}，用清澈的像大海一样的眼睛，抬眼凝视着 ${you.name}。`,
      );
      await era.printAndWait('被风吹摇晃的头发散发出淡淡的洗发水的味道。');
      await era.printAndWait(`${treve.name}「嗨！」地向 ${you.name} 挥手。`);
      await treve.say_and_wait('真是奇遇啊。');
      await era.printAndWait(`这么说着，${treve.name} 不知为何眼睛闪闪发光。`);
      await treve.say_and_wait('我带你观光吧！');
      await era.printAndWait(`${treve.name} 挺起胸膛。`);
      era.printButton('「可以吗？」', 1);
      await era.input();
      await era.printAndWait(`姑且问了一下，${treve.name} 精神饱满地点头。`);
      await treve.say_and_wait('那么首先，那里有好吃的店，我们进去吧。');
      await era.printAndWait(
        `说着，${treve.name} 拉着 ${you.name} 的手的瞬间，一张纸从${treve.sex}的口袋里随风飘落下来。`,
      );
      await era.printAndWait(
        `捡起掉下来的纸，${treve.name} 的表情一下子变得模糊了。`,
      );
      await treve.say_and_wait('——啊！');
      await era.printAndWait(`把它捡起来的瞬间——${treve.name} 马上伸手去抢。`);
      await era.printAndWait(
        `从雪白的一面翻回正面之后，${you.name} 看那里映出了的照片禁不住漏出了声音。`,
      );
      await era.printAndWait(
        `但是那张照片一瞬间就被夺走了，${treve.name} 马上把它放进口袋里眯起了眼睛。`,
      );
      await treve.say_and_wait('看到了……？');
      await era.printAndWait(
        `对于 ${treve.name} 的提问，${you.name} 下意识地摇了摇头。`,
      );
      await era.printAndWait(
        `${treve.sex}马上微笑着说『那就好！』拉起 ${you.name} 的手，跑了起来。`,
      );
      await era.printAndWait(
        `${you.name} 的脑海里一直萦绕着 ${treve.name} 想藏起来的照片。虽然只是一瞬间，但没错。`,
      );
      await era.printAndWait(`——映在那里的是 ${you.name}。`);
      await era.printAndWait('这天没什么事，不知不觉天空被染成了红色。');
      await era.printAndWait(
        `在 ${treve.name} 的带领下，游览了法国的名胜，吃了美味的食物。`,
      );
      await era.printAndWait(`和 ${treve.name} 的对话也很起劲，很开心。`);
      await era.printAndWait('但是，只有那张照片怎么也离不开脑海。');
      await era.printAndWait(
        `那不是 ${you.name} 面对相机拍摄的，没有拍过的记忆。`,
      );
      await era.printAndWait(
        `那是从暗处偷偷拍的照片，但问题是 ${treve.name} 为什么要这么做。`,
      );
      await era.printAndWait(
        '是偶然捡到了那样的照片？即使是那样也很可怕。是跟踪狂吗？',
      );
      await era.printAndWait(`不过如果是 ${treve.name} 的话就没问题的吧。`);
      await era.printAndWait(`总之，那个以后问问${treve.sex}本人就可以了。`);
      await era.printAndWait(`${treve.name} 低下头，然后抬头看 ${you.name}。`);
      await era.printAndWait(
        `虽然那表情中透露出一丝悲哀的神色，但${treve.sex}的脸上却表现出了强烈的觉悟。`,
      );
      await treve.say_and_wait(['我，对 ', callname, ' 的事——']);
      await era.printAndWait('瞬间——肌肤被冰冷的感觉淋湿了。');
      await era.printAndWait(
        '紧接着，覆盖天空的天盖一下子流出了雨点，人们一齐仰望天空。',
      );
      await treve.say_and_wait([callname, '，这边！']);
      await era.printAndWait(
        `在漫天细雨中，${treve.name} 慌忙拉着 ${you.name} 的手。`,
      );
      await era.printAndWait(
        `被 ${treve.name} 牵着手专心地跑了出去，在积存的水坑里扩大波纹，注意到的时候已经被带到了某个房间的前面。`,
      );
      era.printButton('「卓芙，这里是？」', 1);
      await era.input();
      await era.printAndWait(
        `不是很熟悉的路，但 ${you.name} 能理解这里是哪里——公寓，但是完全不知道被带到了谁的房间。`,
      );
      await era.printAndWait(
        `把目光转向旁边，盯着 ${treve.name}，${treve.sex}马上移开视线。`,
      );
      await era.printAndWait(
        `因为突然下雨，${you.name} 和 ${treve.name} 都湿透了。`,
      );
      await era.printAndWait(`${treve.name} 的衣服虽然不少，但很透明。`);
      era.printButton('「这是谁的房间？」', 1);
      await era.input();
      await treve.say_and_wait('是我的房间。请稍等。');
      await era.printAndWait(
        `${treve.name} 笑着这么说。然后打开房间的门，把一条毛巾交给 ${you.name}，气势汹汹地关上了门。房间里传来狂暴的声音。${you.name} 用递过来的毛巾擦着脸等着，过了几分钟，${treve.name} 从门缝露出了脸。`,
      );
      await treve.say_and_wait(['请进，', callname, '，请进。']);
      await treve.say_and_wait('虽然有点乱。');
      await era.printAndWait(
        `被催促着，${you.name} 走进了 ${treve.name} 的房间。`,
      );
      await era.printAndWait(
        `${treve.name} 刚准备走向浴室，但是马上回来，用手指着壁橱。`,
      );
      await treve.say_and_wait('请绝对不要打开那个壁橱。');
      era.printButton('「嗯，嗯，知道了。」', 1);
      await era.input();
      await treve.say_and_wait('——绝对！');
      await era.printAndWait(`${you.name} 困惑地点头。`);
      await era.printAndWait(
        '但是，从壁橱下面的缝隙里掉下来了什么像照片一样的东西。',
      );
      await you.say_and_wait('这是什么？');
      await era.printAndWait(
        `壁橱没打开，还好吧。抱着这样轻松的心情，${you.name} 拿起从缝隙中看到的照片，脊梁冻住了。`,
      );
      await era.printAndWait(`手开始微微颤抖，那正是偷拍 ${you.name} 的照片。`);
      await you.say_and_wait('咦，为什么……');
      await era.printAndWait(`而且，这与 ${treve.name} 拥有的是不同的。`);
      await era.printAndWait(
        `${you.name} 猛地打开了那个壁橱——一瞬间，${you.name} 被其中蔓延的情景惊得呼吸骤停。`,
      );
      await you.say_and_wait('为什么，这里……全部都是我……？');
      await era.printAndWait(
        `在壁橱的一面墙壁上贴满的照片，都是拍的 ${you.name}。`,
      );
      await era.printAndWait(
        `也无法讨论是在哪里拍的。但是，${you.name} 不由得感到恐怖。`,
      );
      await era.printAndWait(
        '咽下口水，被那情景所压倒，视线落下，有腰那么高的衣柜，那里放着日记本。',
      );
      await era.printAndWait(
        `用颤抖的手打开那个，随便翻看里面的内容，是用可爱又漂亮的法语详细记录的每一天——全部都是 ${you.name} 的事。从 ${you.name} 遇到 ${treve.name} 的那天开始，每天都是这样。`,
      );
      await treve.used_to_say_and_wait(
        '从日本来的训练员。是个非常帅气、温柔、笑容非常可爱的人。无论是努力的姿势，还是生硬的法语，我都喜欢上了。',
      );
      await treve.used_to_say_and_wait(
        '训练员好像喜欢栗毛，因为和我在一起所以很开心。',
      );
      await treve.used_to_say_and_wait(
        '训练员住的酒店是○○的酒店。我不能也一起住吗？',
      );
      await treve.used_to_say_and_wait([
        '今天被 ',
        callname,
        ' 搭话了！听到了很多事情很开心。希望那个时间能一直持续下去。',
      ]);
      await treve.used_to_say_and_wait(
        '喜欢。非常喜欢。最喜欢了。喜欢到想吃的程度，喜欢喜欢喜欢喜欢喜欢喜欢——',
      );
      await era.printAndWait(`${you.name} 不由得合上日记本，抑制住了嘴巴。`);
      await era.printAndWait(
        '感觉到自身的危险，回头想逃离这个地方的瞬间——头上传来像被钝器殴打一样的冲击，随后视野摇晃，无力地倒下了。',
      );
      await era.printAndWait(`最后听到的是 ${treve.name} 落下的声色。`);
      await treve.say_and_wait('你看到了啊……');
      await era.printAndWait(`然后，${you.name} 的意识消失了。`);
      era.drawLine();
      await era.printAndWait(
        `在朦胧的感觉中醒来，${you.name} 在某个床上睡着了。`,
      );
      await era.printAndWait(
        '头痛。不知道发生了什么，姑且凝视着天花板上淡淡的光，搜寻记忆。',
      );
      era.printButton(`「我来到 ${treve.name} 的房间，然后……」`, 1);
      await era.input();
      await era.printAndWait(`${you.name} 在那里想起来了。`);
      await era.printAndWait(
        `${treve.name} 的异常性，让 ${you.name} 的意识一下子觉醒。`,
      );
      await era.printAndWait(
        `瞬间，${you.name} 发现自己的手脚被手铐锁在床上。`,
      );
      era.printButton('「这是什么？为什么……？」', 1);
      await era.input();
      await era.printAndWait(
        `无论怎么努力，手脚也只感到疼痛。当 ${you.name} 环视周围想要求救的时候，从旁边传来了熟悉的声音。`,
      );
      await treve.say_and_wait(['起床了啊，', callname, '。']);
      await era.printAndWait(`${treve.name}。`);
      await era.printAndWait(
        `${treve.sex}站在床的旁边，用那染黑的深海般的眼睛俯视着 ${you.name}。`,
      );
      era.printButton('「卓芙，为什么！？」', 1);
      await era.input();
      await treve.say_and_wait(['我说了不要看……是 ', callname, ' 不好啊？']);
      await era.printAndWait(
        `${treve.name} 把手指缠在不能动弹的 ${you.name} 的手上。然后慢慢地靠近 ${you.name} 的脸，在近得让人喘不过气来的距离凝视着 ${you.name}。`,
      );
      await treve.say_and_wait([
        '我对 ',
        callname,
        ' 一见钟情。从那以后，我一直只想着 ',
        callname,
        '，心里一直很难受，非常喜欢 ',
        callname,
        '。',
      ]);
      await era.printAndWait(
        `跨过 ${you.name} 的 ${treve.name}，把手放在 ${you.name} 的胸前。`,
      );
      await era.printAndWait(
        `本能喊着这样下去会很危险，但是不管怎么挣扎，手铐也不会脱落。更不可能用力量战胜${treve.uma_sex_title}。`,
      );
      await treve.say_and_wait([
        callname,
        '，你已经不是日本的东西了……一直都是我的东西，你会成为只为我而活的人吧……？',
      ]);
      await era.printAndWait(
        `${treve.name} 露出无敌的笑容，带着妖艳的眼神，脸颊微微变红，靠近 ${you.name} 的脸。然后${treve.sex}用连呼吸都挡不住的距离低声私语。`,
      );
      await treve.say_and_wait([
        '都是 ',
        callname,
        ' 的错哦？是把我变成这样的 ',
        callname,
        ' 的不好。',
      ]);
      await era.printAndWait(
        `虽然想把脸移开，但被 ${treve.name} 的手压制住了。然后 ${treve.name} 不容分说，把嘴唇重叠在 ${you.name} 身上。柔软的触感堵塞嘴唇，温暖的感觉支配大脑。${treve.name} 的舌头强行撬开 ${you.name} 紧逼的嘴唇，缠在 ${you.name} 的舌头上。`,
      );
      await treve.say_and_wait(['嗯，嗯……', callname, '……']);
      await era.printAndWait(
        `水声在口中回响。为了细细品味，${treve.name} 一直用嘴唇追求着 ${you.name}。`,
      );
      await era.printAndWait(
        `然后等呼吸逐渐困难的时候，${treve.sex}终于离开了。`,
      );
      await treve.say_and_wait(`啊，啊，${treve.name}……已经——`);
      await era.printAndWait(
        `思考停止，在想说出口的瞬间，${treve.name} 又把嘴唇重叠起来挡住了 ${you.name} 的话。`,
      );
      await era.printAndWait(
        `呼吸困难。不管怎么想逃跑，${treve.name} 都不会放过 ${you.name}。`,
      );
      await era.printAndWait(
        `一直，一直，一直，${treve.name} 的爱不知道限制，嘴唇重叠，舌头缠绕，寻求爱。`,
      );
      await era.printAndWait(
        `${treve.name} 离开，咽下了从距离很远的舌头上拉线的唾液，笑了。`,
      );
      await treve.say_and_wait([
        callname,
        ' 是我的。除了我以外谁都不能看。也不让你回日本。一直，一直，我会一直爱你的。',
      ]);
      await era.printAndWait(
        `${treve.name} 把手放在 ${you.name} 的脸颊上，抑制不住激动的情绪又把嘴唇重叠起来。`,
      );
      era.drawLine();
      await era.printAndWait('几天后，在寂静的房间里设置的电视发出声音。');
      await you.say_as_unknown_and_wait(
        '——访问法国的日本训练员失踪了。正在与当地警察合作寻找其行踪，但至今仍没有取得成果，搜查极其困难。',
      );
      await treve.say_as_unknown_and_wait('呵呵……');
    };
    f.title = title;
    return f;
  })(),
};
