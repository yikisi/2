/**
 * @file 卓芙 - 日常
 * @author 梦露
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const sys_filter_chara = require('#/system/sys-filter-chara');

const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedDaily {
  select() {
    if (!sys_check_awake(205)) {
      return super.select();
    }
    const arr = [`Bonjour～有指示吗 ${sys_get_callname(205, 0)}？`];
    if (era.get('love:205') >= 50) {
      arr.push('叫我的时候不准戳这种地方啦。');
    }
    if (era.get('love:205') >= 75) {
      arr.push('呵呵，可以哦。');
    }
    get_chara_talk(205).say(get_random_entry(arr));
  }

  good_morning() {
    const arr = [
      '那么接下来，要玩什么呢？',
      '因为我现在很有精神，精力余裕得有点困扰呢。',
    ];
    if (era.get('love:205') >= 50) {
      arr.push(
        '你太宠着我了吧……有点溺爱了？',
        '从清晨到傍晚，我每分每秒都惦记着你，无时无刻不思念着你。',
      );
    }
    if (era.get('love:205') >= 75) {
      arr.push(
        '我以为我会是个专一的人，在遇到你之前。',
        '我朝你走过去的时候，感觉心脏像情窦初开一样砰砰直跳。',
      );
    }
    get_chara_talk(205).say(get_random_entry(arr));
  }

  async talk() {
    if (!sys_check_awake(205)) {
      return await super.talk();
    }
    const vp = get_chara_talk(205);
    if (era.get('base:205:体力') < 0.3 * era.get('maxbase:205:体力')) {
      await vp.say_and_wait(
        get_random_entry([
          '把你的胸膛借给我，好吗？',
          '我现在连走路都不行啦～',
        ]),
      );
    } else {
      const arr = [];
      switch (era.get('cflag:205:干劲')) {
        case 2:
          arr.push('刚刚是我自己在训练，是训练哦。');
          era
            .getAddedCharacters()
            .findIndex((e) => e !== 205 && era.get(`love:${e}`) >= 50) !== -1 &&
            arr.push(`不能给我讲讲你和${vp.sex}们是怎么相识的吗？`);
          era.get('love:205') >= 50 &&
            arr.push('能对你说『我的爱人』，这种感觉真好。');
          break;
        case 1:
          arr.push(
            '每个人的故事都不一样，我特别喜欢听。',
            '我想让你继续照顾我。',
          );
          break;
        case 0:
          arr.push(
            '等到你可真是太不容易了。',
            '我还是来给『新手』训练员做个示范吧。',
          );
          break;
        case -1:
          arr.push(
            '如果您能抱抱我的话，说不定我的情况能有所好转。',
            '我的热情，无影无踪，无声无息……',
          );
          break;
        case -2:
          arr.push(
            '你要是能送我去休息就再好不过了。',
            '死亡，就是生活的赋税……',
            '你不仅仅是训练员，你还是情场浪子……',
          );
      }
      await vp.say_and_wait(get_random_entry(arr));
    }
  }

  office_gift() {
    return get_chara_talk(205).say_and_wait(
      get_random_entry(['世事变迁，唯爱永痕。', '我可以把这当成爱吗？']),
    );
  }

  office_study() {
    return get_chara_talk(205).say_and_wait(
      get_random_entry([
        '奇怪，你学法语时候也这么磕磕绊绊吗？没有……可恶的天才。',
        '总觉的有你在身边会跳的更好……怎么样，不错吧？',
        '快住手，你是变态也不能这么指导！',
      ]),
    );
  }

  office_cook() {
    return get_chara_talk(205).say_and_wait(
      get_random_entry([
        '法国的料理怎么说呢……啊哈哈哈，不聊这个先。',
        '呜，胃要被坏人给抓住啦。',
      ]),
    );
  }

  office_rest() {
    return get_chara_talk(205).say_and_wait(
      get_random_entry(['不知道以后会咋样。', '和我一起休息开心吗？']),
    );
  }

  office_prepare() {
    return get_chara_talk(205).say_and_wait(
      get_random_entry([
        '请让我为你献上最好的礼物。',
        `今日的胜利，将由我拿下，为了 ${sys_get_callname(205, 0)}。`,
      ]),
    );
  }

  office_game() {
    return get_chara_talk(205).say_and_wait(
      get_random_entry([
        `${sys_get_callname(205, 0)}！为什么有人会把Umaisoft叫育婊啊？`,
        '《刺客信条：特雷森》……从各个方面来说都是对系列所有前作进行的一次全面超越——',
      ]),
    );
  }

  async school_atrium(hook) {
    const vp = get_chara_talk(205);
    hook.arg = (await select_action_in_atrium()) === 0;
    if (hook.arg) {
      await vp.say_and_wait(
        get_random_entry(['远方我的吻，苦涩伤感。', '我们的命运艰难曲折。']),
      );
    } else {
      await vp.say_and_wait(
        get_random_entry([
          '熟练得可怕……这才是你的老本行吗难道！',
          '和现在比，以前的生活只能说是『等死』呢。',
        ]),
      );
    }
  }

  school_rooftop() {
    return get_chara_talk(205).say_and_wait(
      get_random_entry([
        '锵锵！今天的品质还算蛮在线的。',
        '龙虾大虾烤虾青口贝和烤鱿鱼，配菜是薯条和海鲜泡饭，请好好补补身体。',
      ]),
    );
  }

  async out_river(hook) {
    if ((hook.arg = (await select_action_around_river()) > 0)) {
      await get_chara_talk(205).say_and_wait(
        get_random_entry([
          '请放心牵起我的手，哪怕要远走高飞都行哦。',
          '咕……要被你这种浪漫过敏的直男气死了啦。',
        ]),
      );
    } else {
      await get_chara_talk(205).say_and_wait(
        get_random_entry([
          `钓不上来啦……哼，谢 ${get_chara_talk(0).actual_name} 爷打赏小女。`,
          '大鱼终于上钩了……你前不久也钓到了一条品种不错的？骗人，我都没看到。',
        ]),
      );
    }
  }

  async out_shopping(hook) {
    let temp = await select_action_in_shopping_street();
    hook.arg = temp <= 1;
    switch (temp) {
      case 0:
        temp = get_random_entry(
          sys_filter_chara('cflag', '招募状态', recruit_flags.yes).filter(
            (e) => e !== 205 && era.get(`cflag:${e}:种族`),
          ),
        );
        temp = temp
          ? [
              [
                sys_get_callname(205, 0),
                '！是 ',
                sys_get_colored_callname(205, temp),
                ' 的公仔诶！我可以夹一个吗？',
              ],
            ]
          : [];
        temp.push(
          '知道吗？法国的游戏厅除了小情侣，还经常能看到很多小小青梅竹马的。',
          [
            '嗯，输了输了……',
            get_chara_talk(0).get_colored_actual_name(),
            '，我们去那边的【挥拳测力机】再战吧。',
          ],
        );
        await get_chara_talk(205).say_and_wait(get_random_entry(temp));
        break;
      case 1:
        await get_chara_talk(205).say_and_wait(
          get_random_entry([
            `哇哇哇……${sys_get_callname(205, 0)}！请预支我零花钱。`,
            '巴黎5天4晚豪华游……真抽到了我们怎么安排？',
          ]),
        );
        break;
      case 2:
        await get_chara_talk(205).say_and_wait(
          get_random_entry([
            '你歌唱的可真迷人，或许你该学学《远去的列车》、《玫瑰人生》什么的……',
            '先说好，我喉咙很累了，更不可能在这里和你……',
          ]),
        );
        break;
      case 3:
        await get_chara_talk(205).say_and_wait(
          get_random_entry([
            '非常有沉浸感的佳作，impeccable a tous les sens',
            '师傅说有部老电影很适合我们，叫《Un homme et une femme》——一个男人和一个女人，好奇怪啊，哈哈哈……',
          ]),
        );
    }
  }

  async out_church() {
    const me = get_chara_talk(0),
      vp = get_chara_talk(205);
    await era.printAndWait([
      me.get_colored_name(),
      ' 邀请 ',
      sys_get_colored_callname(0, 205),
      `去附近的神社，${vp.sex}开心地答应了。`,
    ]);
    await vp.say_and_wait('你在想什么呢，看上去心不在焉的。');
    await vp.say_and_wait('我先去抽签啦！');
    await vp.say_and_wait(
      Math.random() < 0.5
        ? `【大吉】诶，能再来一次吗？这个我想送给 ${sys_get_callname(205, 0)}`
        : '呜哦哦，这种事，体验一次就够了……',
    );
  }

  async out_station(hook) {
    hook.arg = await select_action_in_station(205);
    switch (hook.arg) {
      case 0:
        await get_chara_talk(205).say_and_wait(
          get_random_entry([
            '这种餐厅，像小情侣约会来的……',
            '这种好地方你怎么找到的！？便宜分量大，根本吃不完！',
          ]),
        );
        break;
      case 1:
        await get_chara_talk(205).say_and_wait(
          get_random_entry([
            '我得好好看看你平时是怎么度过一天的。',
            '怎么不送我花呢？我也喜欢花啊。',
          ]),
        );
        break;
      case 2:
        await get_chara_talk(205).say_and_wait(
          get_random_entry([
            `西瓜……好贵！？而且按块卖的，这合理吗 ${sys_get_callname(205, 0)}？`,
            '我，各种东西都不太会挑…',
            '今天竟然有优惠诶，chanceux～',
          ]),
        );
    }
  }

  async basement_end() {
    const me = get_chara_talk(0);
    const vp = get_chara_talk(205);
    const callname = sys_get_colored_callname(205, 0);
    await era.printAndWait('某一天，在巴黎的街道上。');
    await vp.say_and_wait([callname, '！']);
    await era.printAndWait(
      `听惯了的那个声音，${me.name} 回头一看，${vp.name} 跑了过来。`,
    );
    await era.printAndWait(
      `稚嫩可爱的${vp.sex}，用清澈的像大海一样的眼睛，抬眼凝视着 ${me.name}。`,
    );
    await era.printAndWait('被风吹摇晃的头发散发出淡淡的洗发水的味道。');
    await era.printAndWait(`${vp.name}「嗨！」地向 ${me.name} 挥手。`);
    await vp.say_and_wait('真是奇遇啊。');
    await era.printAndWait(`这么说着，${vp.name} 不知为何眼睛闪闪发光。`);
    await vp.say_and_wait('我带你观光吧！');
    await era.printAndWait(`${vp.name} 挺起胸膛。`);
    era.printButton('「可以吗？」', 1);
    await era.input();
    await era.printAndWait(`姑且问了一下，${vp.name} 精神饱满地点头。`);
    await vp.say_and_wait('那么首先，那里有好吃的店，我们进去吧。');
    await era.printAndWait(
      `说着，${vp.name} 拉着 ${me.name} 的手的瞬间，一张纸从${vp.sex}的口袋里随风飘落下来。`,
    );
    await era.printAndWait(
      `捡起掉下来的纸，${vp.name} 的表情一下子变得模糊了。`,
    );
    await vp.say_and_wait('——啊！');
    await era.printAndWait(`把它捡起来的瞬间——${vp.name} 马上伸手去抢。`);
    await era.printAndWait(
      `从雪白的一面翻回正面之后，${me.name} 看那里映出了的照片禁不住漏出了声音。`,
    );
    await era.printAndWait(
      `但是那张照片一瞬间就被夺走了，${vp.name} 马上把它放进口袋里眯起了眼睛。`,
    );
    await vp.say_and_wait('看到了……？');
    await era.printAndWait(
      `对于 ${vp.name} 的提问，${me.name} 下意识地摇了摇头。`,
    );
    await era.printAndWait(
      `${vp.sex}马上微笑着说『那就好！』拉起 ${me.name} 的手，跑了起来。`,
    );
    await era.printAndWait(
      `${me.name} 的脑海里一直萦绕着 ${vp.name} 想藏起来的照片。虽然只是一瞬间，但没错。`,
    );
    await era.printAndWait(`——映在那里的是 ${me.name}。`);
    await era.printAndWait('这天没什么事，不知不觉天空被染成了红色。');
    await era.printAndWait(
      `在 ${vp.name} 的带领下，游览了法国的名胜，吃了美味的食物。`,
    );
    await era.printAndWait(`和 ${vp.name} 的对话也很起劲，很开心。`);
    await era.printAndWait('但是，只有那张照片怎么也离不开脑海。');
    await era.printAndWait(
      `那不是 ${me.name} 面对相机拍摄的，没有拍过的记忆。`,
    );
    await era.printAndWait(
      `那是从暗处偷偷拍的照片，但问题是 ${vp.name} 为什么要这么做。`,
    );
    await era.printAndWait(
      '是偶然捡到了那样的照片？即使是那样也很可怕。是跟踪狂吗？',
    );
    await era.printAndWait(`不过如果是 ${vp.name} 的话就没问题的吧。`);
    await era.printAndWait(`总之，那个以后问问${vp.sex}本人就可以了。`);
    await era.printAndWait(`${vp.name} 低下头，然后抬头看 ${me.name}。`);
    await era.printAndWait(
      `虽然那表情中透露出一丝悲哀的神色，但${vp.sex}的脸上却表现出了强烈的觉悟。`,
    );
    await vp.say_and_wait(['我，对 ', callname, ' 的事——']);
    await era.printAndWait('瞬间——肌肤被冰冷的感觉淋湿了。');
    await era.printAndWait(
      '紧接着，覆盖天空的天盖一下子流出了雨点，人们一齐仰望天空。',
    );
    await vp.say_and_wait([callname, '，这边！']);
    await era.printAndWait(
      `在漫天细雨中，${vp.name} 慌忙拉着 ${me.name} 的手。`,
    );
    await era.printAndWait(
      `被 ${vp.name} 牵着手专心地跑了出去，在积存的水坑里扩大波纹，注意到的时候已经被带到了某个房间的前面。`,
    );
    era.printButton(`「${sys_get_callname(0, 205)}，这里是？」`, 1);
    await era.input();
    await era.printAndWait(
      `不是很熟悉的路，但 ${me.name} 能理解这里是哪里——公寓，但是完全不知道被带到了谁的房间。`,
    );
    await era.printAndWait(
      `把目光转向旁边，盯着 ${vp.name}，${vp.sex}马上移开视线。`,
    );
    await era.printAndWait(`因为突然下雨，${me.name} 和 ${vp.name} 都湿透了。`);
    await era.printAndWait(`${vp.name} 的衣服虽然不少，但很透明。`);
    era.printButton('「这是谁的房间？」', 1);
    await era.input();
    await vp.say_and_wait('是我的房间。请稍等。');
    await era.printAndWait(
      `${vp.name} 笑着这么说。然后打开房间的门，把一条毛巾交给 ${me.name}，气势汹汹地关上了门。房间里传来狂暴的声音。${me.name} 用递过来的毛巾擦着脸等着，过了几分钟，${vp.name} 从门缝露出了脸。`,
    );
    await vp.say_and_wait(['请进，', callname, '，请进。']);
    await vp.say_and_wait('虽然有点乱。');
    await era.printAndWait(`被催促着，${me.name} 走进了 ${vp.name} 的房间。`);
    await era.printAndWait(
      `${vp.name} 刚准备走向浴室，但是马上回来，用手指着壁橱。`,
    );
    await vp.say_and_wait('请绝对不要打开那个壁橱。');
    era.printButton('「嗯，嗯，知道了。」', 1);
    await era.input();
    await vp.say_and_wait('——绝对！');
    await era.printAndWait(`${me.name} 困惑地点头。`);
    await era.printAndWait(
      '但是，从壁橱下面的缝隙里掉下来了什么像照片一样的东西。',
    );
    await me.say_and_wait('这是什么？');
    await era.printAndWait(
      `壁橱没打开，还好吧。抱着这样轻松的心情，${me.name} 拿起从缝隙中看到的照片，脊梁冻住了。`,
    );
    await era.printAndWait(`手开始微微颤抖，那正是偷拍 ${me.name} 的照片。`);
    await me.say_and_wait('咦，为什么……');
    await era.printAndWait(`而且，这与 ${vp.name} 拥有的是不同的。`);
    await era.printAndWait(
      `${me.name} 猛地打开了那个壁橱——一瞬间，${me.name} 被其中蔓延的情景惊得呼吸骤停。`,
    );
    await me.say_and_wait('为什么，这里……全部都是我……？');
    await era.printAndWait(
      `在壁橱的一面墙壁上贴满的照片，都是拍的 ${me.name}。`,
    );
    await era.printAndWait(
      `也无法讨论是在哪里拍的。但是，${me.name} 不由得感到恐怖。`,
    );
    await era.printAndWait(
      '咽下口水，被那情景所压倒，视线落下，有腰那么高的衣柜，那里放着日记本。',
    );
    await era.printAndWait(
      `用颤抖的手打开那个，随便翻看里面的内容，是用可爱又漂亮的法语详细记录的每一天——全部都是 ${me.name} 的事。从 ${me.name} 遇到 ${vp.name} 的那天开始，每天都是这样。`,
    );
    await vp.used_to_say_and_wait(
      '从日本来的训练员。是个非常帅气、温柔、笑容非常可爱的人。无论是努力的姿势，还是生硬的法语，我都喜欢上了。',
    );
    await vp.used_to_say_and_wait(
      '训练员好像喜欢栗毛，因为和我在一起所以很开心。',
    );
    await vp.used_to_say_and_wait(
      '训练员住的酒店是○○的酒店。我不能也一起住吗？',
    );
    await vp.used_to_say_and_wait([
      '今天被 ',
      callname,
      ' 搭话了！听到了很多事情很开心。希望那个时间能一直持续下去。',
    ]);
    await vp.used_to_say_and_wait(
      '喜欢。非常喜欢。最喜欢了。喜欢到想吃的程度，喜欢喜欢喜欢喜欢喜欢喜欢——',
    );
    await era.printAndWait(`${me.name} 不由得合上日记本，抑制住了嘴巴。`);
    await era.printAndWait(
      '感觉到自身的危险，回头想逃离这个地方的瞬间——头上传来像被钝器殴打一样的冲击，随后视野摇晃，无力地倒下了。',
    );
    await era.printAndWait(`最后听到的是 ${vp.name} 落下的声色。`);
    await vp.say_and_wait('你看到了啊……');
    await era.printAndWait(`然后，${me.name} 的意识消失了。`);
    era.drawLine();
    await era.printAndWait(`在朦胧的感觉中醒来，${me.name} 在某个床上睡着了。`);
    await era.printAndWait(
      '头痛。不知道发生了什么，姑且凝视着天花板上淡淡的光，搜寻记忆。',
    );
    era.printButton(`「我来到 ${vp.name} 的房间，然后……」`, 1);
    await era.input();
    await era.printAndWait(`${me.name} 在那里想起来了。`);
    await era.printAndWait(
      `${vp.name} 的异常性，让 ${me.name} 的意识一下子觉醒。`,
    );
    await era.printAndWait(`瞬间，${me.name} 发现自己的手脚被手铐锁在床上。`);
    era.printButton('「这是什么？为什么……？」', 1);
    await era.input();
    await era.printAndWait(
      `无论怎么努力，手脚也只感到疼痛。当 ${me.name} 环视周围想要求救的时候，从旁边传来了熟悉的声音。`,
    );
    await vp.say_and_wait(['起床了啊，', callname, '。']);
    await era.printAndWait(`${vp.name}。`);
    await era.printAndWait(
      `${vp.sex}站在床的旁边，用那染黑的深海般的眼睛俯视着 ${me.name}。`,
    );
    era.printButton(`「${sys_get_callname(0, 205)}，为什么！？」`, 1);
    await era.input();
    await vp.say_and_wait(
      `我说了不要看……是 ${sys_get_callname(205, 0)} 不好啊？`,
    );
    await era.printAndWait(
      `${vp.name} 把手指缠在不能动弹的 ${me.name} 的手上。然后慢慢地靠近 ${me.name} 的脸，在近得让人喘不过气来的距离凝视着 ${me.name}。`,
    );
    await vp.say_and_wait([
      '我对 ',
      callname,
      ' 一见钟情。从那以后，我一直只想着 ',
      callname,
      '，心里一直很难受，非常喜欢 ',
      callname,
      '。',
    ]);
    await era.printAndWait(
      `跨过 ${me.name} 的 ${vp.name}，把手放在 ${me.name} 的胸前。`,
    );
    await era.printAndWait(
      `本能喊着这样下去会很危险，但是不管怎么挣扎，手铐也不会脱落。更不可能用力量战胜${vp.get_uma_sex_title()}。`,
    );
    await vp.say_and_wait([
      callname,
      '，你已经不是日本的东西了……一直都是我的东西，你会成为只为我而活的人吧……？',
    ]);
    await era.printAndWait(
      `${vp.name} 露出无敌的笑容，带着妖艳的眼神，脸颊微微变红，靠近 ${me.name} 的脸。然后${vp.sex}用连呼吸都挡不住的距离低声私语。`,
    );
    await vp.say_and_wait([
      '都是 ',
      callname,
      ' 的错哦？是把我变成这样的 ',
      callname,
      ' 的不好。',
    ]);
    await era.printAndWait(
      `虽然想把脸移开，但被 ${vp.name} 的手压制住了。然后 ${vp.name} 不容分说，把嘴唇重叠在 ${me.name} 身上。柔软的触感堵塞嘴唇，温暖的感觉支配大脑。${vp.name} 的舌头强行撬开 ${me.name} 紧逼的嘴唇，缠在 ${me.name} 的舌头上。`,
    );
    await vp.say_and_wait(['嗯，嗯……', callname, '……']);
    await era.printAndWait(
      `水声在口中回响。为了细细品味，${vp.name} 一直用嘴唇追求着 ${me.name}。`,
    );
    await era.printAndWait(`然后等呼吸逐渐困难的时候，${vp.sex}终于离开了。`);
    await vp.say_and_wait(`啊，啊，${vp.name}……已经——`);
    await era.printAndWait(
      `思考停止，在想说出口的瞬间，${vp.name} 又把嘴唇重叠起来挡住了 ${me.name} 的话。`,
    );
    await era.printAndWait(
      `呼吸困难。不管怎么想逃跑，${vp.name} 都不会放过 ${me.name}。`,
    );
    await era.printAndWait(
      `一直，一直，一直，${vp.name} 的爱不知道限制，嘴唇重叠，舌头缠绕，寻求爱。`,
    );
    await era.printAndWait(
      `${vp.name} 离开，咽下了从距离很远的舌头上拉线的唾液，笑了。`,
    );
    await vp.say_and_wait([
      callname,
      ' 是我的。除了我以外谁都不能看。也不让你回日本。一直，一直，我会一直爱你的。',
    ]);
    await era.printAndWait(
      `${vp.name} 把手放在 ${me.name} 的脸颊上，抑制不住激动的情绪又把嘴唇重叠起来。`,
    );
    era.drawLine();
    await era.printAndWait('几天后，在寂静的房间里设置的电视发出声音。');
    await me.say_as_unknown_and_wait(
      '——访问法国的日本训练员失踪了。正在与当地警察合作寻找其行踪，但至今仍没有取得成果，搜查极其困难。',
    );
    await vp.say_as_unknown_and_wait('呵呵……');
  }
};
