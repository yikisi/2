/**
 * @file 东海帝王 - 日常
 *
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_custom_check } = require('#/event/check/check-factory');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const get_gradient_color = require('#/utils/gradient-color');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { pregnant_stage_enum } = require('#/data/ero/status-const');
const event_hooks = require('#/data/event/event-hooks');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

/** @type {Record<string,function(HookArg,*):(Promise<*>|void)>} */
const handlers = {};

handlers[event_hooks.load_talk] = async () => {
  const teio_life_marks = new LifeEventMarks(3),
    my_life_marks = new LifeEventMarks(0);
  if (
    (era.get('cflag:3:妊娠阶段') !== 1 << pregnant_stage_enum.no &&
      !teio_life_marks.report) ||
    (my_life_marks.sperm === 3 &&
      era.get('cflag:0:妊娠阶段') !== 1 << pregnant_stage_enum.no &&
      !my_life_marks.report) ||
    era.get('exp:3:生产次数') > 0 ||
    era.get('exp:3:孩子数量') > 0
  ) {
    const teio = get_chara_talk(3);
    await teio.say_and_wait('训练员……要抛弃这个孩子？为什么……');
    await era.printAndWait(
      [
        teio.get_colored_name(),
        {
          color: get_gradient_color(teio.color, '#ff0000', 0.5),
          content:
            '「为什么……为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么」',
          fontWeight: 'bold',
        },
      ],
      { fontSize: '1.5rem' },
    );
    await era.printAndWait(
      [
        teio.get_colored_name(),
        {
          color: 'red',
          content: '「为什么……为什么为——」',
          fontWeight: 'bold',
        },
      ],
      { fontSize: '3rem' },
    );
  }
};

handlers[event_hooks.select] = () => {
  if (!sys_check_awake(3)) {
    throw new Error();
  }
  get_chara_talk(3).say(
    Math.random() < 0.5
      ? `唔～叫无敌的帝王大人有什么事吗？`
      : `哼哼，我随时都准备好了！`,
  );
};

handlers[event_hooks.good_morning] = () => {
  const teio_talk = get_chara_talk(3),
    temp = get_random_value(0, 4);
  let talk_arr;
  if (temp === 0) {
    era.print([
      teio_talk.get_colored_name(),
      ` 貌似正在跟其他${teio_talk.get_uma_sex_title()}聊天，听到`,
      get_chara_talk(0).get_colored_name(),
      `叫${teio_talk.sex}的名字，便结束了对话飞奔过来。`,
    ]);
  } else if (temp === 1) {
    era.print([
      teio_talk.get_colored_name(),
      {
        color: teio_talk.color,
        content: '「啊……早上好啊训练员，什么，我昨天才没有熬夜啦」',
      },
      '（打呵欠）',
    ]);
  } else {
    talk_arr = [
      `今天的训练……有这些吗！我会好好完成的！`,
      `欸，这么快就要开始了吗！`,
      `蜂蜜喝太多了……有点不好受啊。`,
    ];
    teio_talk.say(get_random_entry(talk_arr));
  }
};

handlers[event_hooks.talk] = async () => {
  if (!sys_check_awake(3)) {
    throw new Error();
  }
  const teio_talk = get_chara_talk(3),
    me = get_chara_talk(0);
  if (era.get('base:3:体力') < era.get('maxbase:3:体力') * 0.45) {
    if (get_random_value(0, 1)) {
      await teio_talk.say_and_wait('啊……无敌的帝王大人也会有疲劳的时候呀……');
    } else {
      await era.printAndWait([
        teio_talk.get_colored_name(),
        ' 抬起头，眼神有一搭没一搭地看着 ',
        me.get_colored_name(),
        `，是时候让${teio_talk.sex}歇歇了……`,
      ]);
    }
  } else {
    let talk_arr;
    switch (era.get('cflag:3:干劲')) {
      case -2:
        talk_arr = [
          teio_talk.get_colored_name(),
          ` 焦急地跺着脚，全身毛发也变得蓬乱起来……还是不要让${teio_talk.sex}做事了`,
        ];
        break;
      case -1:
        talk_arr = [
          teio_talk.get_colored_name(),
          ' 嘴边的微笑消失了……好像有点不太对劲。',
        ];
        break;
      case 0:
        talk_arr = [
          teio_talk.get_colored_name(),
          ' 看上去不是很有精神，虽然还是朝气蓬勃但总觉得少了点什么。',
        ];
        break;
      case 1:
        talk_arr = [
          teio_talk.get_colored_name(),
          ' 自由自在地在操场上奔跑热身，看上去很有干劲。',
        ];
        break;
      case 2:
        talk_arr = [
          teio_talk.get_colored_name(),
          ' 兴奋地原地高抬腿，青春而矫健的身影仿佛在邀请着 ',
          me.get_colored_name(),
          '。',
        ];
    }
    await era.printAndWait(talk_arr);
  }
};

handlers[event_hooks.office_gift] = async () => {
  await get_chara_talk(3).say_and_wait(
    '诶！这是，训练员给我的礼物吗！我可以现在就打开吗？唔……等到回去吗。好吧，不过还是非常感谢！',
  );
};

handlers[event_hooks.out_church] = async () => {
  const relation = era.get(`relation:3:0`),
    teio_talk = get_chara_talk(3),
    me = get_chara_talk(0);
  await teio_talk.say_and_wait('训练员～快点快点，一起来抽一次吧！');
  await era.printAndWait(
    `小${teio_talk.get_uma_sex_title()}拉起 ${me.name} 的手，向神龛跑去，${
      me.name
    } 赶忙迈起大步跟着跑。不一会到达了目的地，${me.name} 已经满身是汗了……`,
  );
  await era.printAndWait(
    `细嫩的触感从手中抽离出去，${teio_talk.name} 举起了签筒，眯起眼笑着胡乱摇动——`,
  );
  await teio_talk.say_and_wait('嘻嘻——哈！');
  await era.printAndWait(
    `宛如小孩子一般的闹腾后，一枚竹签从容器中飞射而出，${me.name} 抬手用指间夹住，定睛一看：`,
  );
  switch (get_random_value(0, 3)) {
    case 0:
      await era.printAndWait('（小吉）');
      await era.printAndWait(
        `${me.name} 将其交予帝王，${teio_talk.sex}开心地笑了。`,
      );
      break;
    case 1:
      await era.printAndWait('（中吉）');
      await era.printAndWait(
        `${me.name} 念出了上面的字，帝王在原地挺起胸膛，双手叉腰，仿佛在炫耀自己的摇签手法。`,
      );
      break;
    case 2:
      await era.printAndWait('（大吉）');
      if (relation > 225) {
        //好感喜爱以上
        await era.printAndWait(
          `${me.name} 走上前去，对着帝王摇了摇竹签，${teio_talk.sex}将其一把夺过，然后露出惊喜的神情，欢呼着扑向 ${me.name}，抱住了 ${me.name} 的腰。`,
        );
      } else {
        await era.printAndWait(
          `${me.name} 大声宣读了抽到大吉的事实，帝王的耳朵欢快地跳了起来，${teio_talk.sex}一步闪到你面前，抓住了 ${me.name} 握着竹签的手，确认竹签上的内容之后嘻嘻地笑起来。`,
        );
      }
      break;
    case 3:
      await era.printAndWait('（凶）');
      await era.printAndWait(
        `${
          me.name
        } 犹豫了一下，没有出声，帝王察觉到了什么，有些尴尬地站在原地，然后 ${me.get_couple_title()} 两个决定将此事抛诸脑后。`,
      );
      break;
  }
};

handlers[event_hooks.out_river] = async (hook) => {
  const ret = await select_action_around_river(),
    teio_talk = get_chara_talk(3),
    me = get_chara_talk(0);
  hook.arg = !!ret;
  if (ret === 0) {
    await teio_talk.say_and_wait('训练员，来啊！');
    await era.printAndWait(
      `${teio_talk.sex}一边说着一边脱下鞋，赤脚踏进浅水里，莹润洁白的双足在水里愈发显的可爱。`,
    );
    await era.printAndWait(
      `就是可惜这么撒欢估计会把鱼赶跑，${me.name} 无奈地叹了口气，坐在${teio_talk.sex}的身旁开始做钓鱼准备。`,
    );
  } else {
    await teio_talk.say_and_wait(`在河边走～好清爽！`);
    await era.printAndWait(
      `${me.name} 的担当一边哼着歌一边摆出如跳舞一般的步伐。以后可以多来走走，${me.name} 看着${teio_talk.sex}欢快的样子想到。`,
    );
  }
};

handlers[event_hooks.out_shopping] = async (hook) => {
  const temp = await select_action_in_shopping_street(),
    relation = era.get(`relation:3:0`),
    teio = get_chara_talk(3),
    me = get_chara_talk(0);
  hook.arg = temp <= 1;
  switch (temp) {
    case 0:
      await era.printAndWait(
        `${me.name} 和 ${
          teio.name
        } 一起来到了街机厅痛快玩了一段时间，临走前，${me.get_couple_title()} 决定去娃娃机『浪费』掉多余的币。`,
      );
      await era.printAndWait(
        `不过话虽这么说，${me.get_couple_title()} 两个还是比较紧张地操纵着摇杆，再三思考后摁下按钮……`,
      );
      break;
    case 1:
      if (relation > 225) {
        await teio.say_and_wait('训练员……我就把无敌的帝王好运传给你吧！');
        await era.printAndWait(
          `${teio.sex}靠近 ${me.name} 的身体，把住了 ${me.name} 的一条胳膊，温暖而有弹性的触感和好闻的香味同时袭来，${me.name} 有些不自然地将另一只手伸进箱内……`,
        );
      } else {
        await teio.say_and_wait('嗯……无敌的帝王大人比运气也不会输的！大概吧……');
        await era.printAndWait(
          `${teio.sex}看向 ${me.name}，${me.name} 点点头，于是 ${teio.sex} 将手伸入箱中……`,
        );
      }
      break;
    case 2:
      if (relation > 225) {
        await teio.say_and_wait('训练员！我唱的如何！');
        await era.printAndWait(
          `${me.name} 赶忙把刚举到唇边的水杯放下，摆出一副沉思的姿态面对着笑容满面的担当，刚刚${teio.sex}全神贯注唱了一曲《恋はダービー☆》，现在双颊的红晕还未褪去。`,
        );
        await era.printAndWait(
          `${me.name} 搜肠刮肚找出了一堆夸赞的话语，${teio.sex}看见 ${me.name} 这副样子，笑得更开心了。`,
        );
      } else {
        await era.printAndWait(
          `不知不觉走到了一家KTV里，在${
            teio.sex
          }的强烈要求下 ${me.get_couple_title()} 进去享受了一段时光——不过主要都是${
            teio.sex
          }在唱就对了。`,
        );
      }
      break;
    case 3:
      if (relation > 225) {
        await era.printAndWait(
          `帝王搂着 ${me.name} 的左臂，踮起脚尖贴近 ${me.name} 的耳边说出了一个片名。`,
        );
        await era.printAndWait(
          `${me.name} 看了看，发现那是一部甜腻的爱情片，不由觉得有点好笑，伸出右手去摸帝王的头，却对上了${teio.sex}害羞又坚定的眼神。`,
        );
        await era.printAndWait('嗯……那就像情侣一样一起去看吧。');
      } else if (Math.random() < 0.5) {
        await era.printAndWait(
          `在帝王的强烈要求下，${me.name} 选了一部『有挑战性的恐怖刺激电影』。`,
        );
        await era.printAndWait(
          `果不其然，每到关键镜头，小${teio.get_uma_sex_title()}就受不住了，${
            me.name
          } 靠近 ${teio.sex} 的那条胳膊已经被紧抓到失去知觉……`,
        );
      } else {
        await era.printAndWait(
          `${me.name} 和帝王一起看了一部合家欢喜剧片，内容让人忍俊不禁。`,
        );
      }
  }
};

handlers[event_hooks.out_station] = async (hook) => {
  hook.arg = await select_action_in_station(3);
  const teio = get_chara_talk(3),
    me = get_chara_talk(0),
    talk_arr = [];
  switch (hook.arg) {
    case 0:
      talk_arr.push(
        `${me.name} 和往常一样，带着 ${
          teio.name
        } ${teio.get_adult_sex_title()}来到了……家庭餐厅。这里的气氛很适合 ${me.get_couple_title()} 呢。`,
        `${me.name} 问了问帝王的意见，小家伙想了好几个地方，又没能真正决定目标，最后还是拜托 ${me.name} 来选……${me.name} 便随便挑了一家口味不错的带${teio.sex}去了。`,
      );
      await era.printAndWait(get_random_entry(talk_arr));
      break;
    case 1:
      talk_arr.push(
        `${teio.name} 和 ${me.name} 非常自然地靠在一起拉着手。${me.name} 不由得想到，自己和${teio.sex}之前好像就是如此……真的能算约会吗？`,
        `缓步前行之时两人的身体不停地紧贴又分离，${
          me.name
        } 从中感受到了${teio.get_teen_sex_title()}些微的羞涩，确定了约会的真实。`,
      );
      await era.printAndWait(get_random_entry(talk_arr));
      break;
    case 2:
      await teio.say_and_wait('训练员训练员！来看这边这个！');
      await era.printAndWait(
        `${teio.get_teen_sex_title()}的呼声响起，${me.name} 今天第21次奔向${
          teio.sex
        }的位置。跟${teio.get_phy_sex_title()}逛街本来就是件费力的事，而跟这位${teio.get_uma_sex_title()}${teio.get_adult_sex_title()}一起来商场则更……${
          me.name
        } 不由得把苦笑挂在了脸上。`,
      );
      await era.printAndWait(
        `不过，就算如此，每次看到${teio.sex}欢乐阳光的模样，${me.name} 便不由自主地遗忘了所有烦累，自愿陪${teio.sex}再来逛一次。`,
      );
  }
};

handlers[event_hooks.school_atrium] = async () => {
  const temp = await select_action_in_atrium(),
    teio = get_chara_talk(3),
    me = get_chara_talk(0);
  if (!temp) {
    await teio.say_and_wait(
      era.get('status:3:腿伤')
        ? '现在的我是……哈哈，哈哈哈，呜——'
        : '可恶……我真的想赢，想赢啊！我是帝王！我是无敌的！我一定要……',
    );
  } else {
    await era.printAndWait(
      `在学校里……这样真的合适吗？${me.name} 心底涌现着疑问，不过黏在身旁的帝王虽然脸格外地红，却没有显出什么异相。`,
    );
    await era.printAndWait(
      ` 看到${teio.sex}这副模样，${me.name} 反倒松了口气，丝毫没有在意他人的目光，就如情侣一样跟${teio.sex}调笑了起来。`,
    );
  }
};

handlers[event_hooks.school_rooftop] = async () => {
  await get_chara_talk(3).say_and_wait('到这里吃饭意外地有感觉呢！');
  await era.printAndWait(
    `${
      get_chara_talk(0).name
    }们 将食盒摊放在……『天花板』上？一起享受起了美好的午饭时间。`,
  );
};

handlers[event_hooks.office_cook] = async () => {
  const teio = get_chara_talk(3),
    me = get_chara_talk(0);
  await teio.say_and_wait('无敌的帝王大人……嗯，这方面，也可以的！');
  await era.printAndWait(
    `${me.name} 看${teio.sex}不甚熟练的烹饪手法，便也一起来帮忙了，很快，一桌样子精致，香味扑鼻的饭菜就好了。`,
  );
  await era.printAndWait([
    teio.get_colored_name(),
    '/',
    me.get_colored_name(),
    '「',
    { content: '我', color: teio.color },
    '（我）',
    { content: '开动了！', color: teio.color },
    '」',
  ]);
  await era.printAndWait(
    `笑着对视了一下，${me.get_couple_title()} 便埋头开始享用亲手做出的美味。`,
  );
};

handlers[event_hooks.office_study] = async () => {
  const teio = get_chara_talk(3),
    me = get_chara_talk(0);
  await me.say('想不到帝王大人也有不懂的事啊。');
  await era.printAndWait(
    `${me.name} 调戏了${teio.sex}几句，看到${teio.sex}嘟着嘴紧盯着 ${me.name} 的模样，咳了几声便开始正常讲课了。`,
  );
};

handlers[event_hooks.office_rest] = async () => {
  const teio = get_chara_talk(3),
    me = get_chara_talk(0),
    relation = era.get(`relation:3:0`);
  if (relation > 150) {
    await me.say_and_wait(`起来吧，帝王${teio.get_adult_sex_title()}。`);
    await teio.say_and_wait(`嗯——嗯～`);
    await era.printAndWait(
      `${teio.get_teen_sex_title()}的身躯扑倒在 ${
        me.name
      } 的身上，${me.get_couple_title()} 两个陷进了沙发里。`,
    );
    await era.printAndWait(
      `吐息产生的气流搔痒着 ${me.name} 的脖颈，${
        me.name
      } 有一搭没一搭地抚摸着担当${teio.get_uma_sex_title()}的后背，不忘用一只手顺带着帮${
        teio.sex
      }梳理毛发。`,
    );
  } else {
    await era.printAndWait(
      `帝王罕见地安静了下来，${me.name} 和${teio.sex}一起坐在沙发上，分享着悠闲。`,
    );
  }
};

handlers[event_hooks.office_game] = async () => {
  const teio = get_chara_talk(3),
    me = get_chara_talk(0);
  await teio.say_and_wait('呀呀呀！无敌的帝王大人是不会输的！');
  await era.printAndWait(
    `屏幕上的角色开始鬼畜乱动，好像操纵者现在的模样一般，${
      me.name
    } 无奈地瞥了一眼旁边全身贯注的${
      teio.sex
    }，小${teio.get_uma_sex_title()}认真操纵着手柄，额头上甚至冒出了细汗，${
      me.name
    } 笑了笑，把目光转回到游戏上。`,
  );
};

handlers[event_hooks.good_night] = async (hook) => {
  if (!sys_check_awake(0) || !sys_check_awake(3)) {
    throw new Error();
  }
  const check = get_custom_check(3).is_want_make_love(),
    me = get_chara_talk(0),
    teio = get_chara_talk(3);
  era.print(`繁忙的一天结束，${me.name} 把 ${teio.name} 送到学生宿舍门口。`);
  if (check) {
    era.print(
      '正要像往常一样分别时，不知为何，两边都停止了动作，现场陷入了短暂的沉默……',
    );
    era.print([
      teio.get_colored_name(),
      '/',
      me.get_colored_name(),
      '「',
      { content: '唔，', color: teio.color },
      '嗯——」',
    ]);
    era.print(
      `沉默之后又是同时发声，气氛好像又尴尬了。不过倒是有点滑稽，${teio.get_uma_sex_title()}的眉眼露出了几分笑意，也让${
        teio.sex
      }更大胆了，先 ${me.name} 一步开口道`,
    );
    teio.say('那个，我做好了外宿申请，所以今天……');
    era.print(
      `声音逐渐微弱下去，血液涌上脸颊，${me.name} 看到${teio.sex}这副模样实在忍不住了，决定——`,
    );
    era.printMultiColumns(
      ['答应', '拒绝'].map((e, i) => {
        return {
          accelerator: i * 100,
          config: { with: 12 },
          content: e,
          type: 'button',
        };
      }),
    );
    if (await era.input()) {
      if (check === 2) {
        if (era.get('status:3:腿伤')) {
          await teio.say_and_wait('唔……这样啊。');
          await era.printAndWait([
            me.get_colored_name(),
            ' 看着犹自挺胸看着自己，眼神却黯淡下去的',
            teio.sex,
            '，不禁于心不忍，伸起一只手抚向',
            teio.sex,
            '的头。',
          ]);
          await era.printAndWait([
            '但突然之间，',
            teio.sex,
            '抬手，五根细笋般的手指稳稳扣住了 ',
            me.get_colored_name(),
            ' 的掌心，',
            me.get_colored_name(),
            ' 想发力抽回，却毫无反应——',
          ]);
          await teio.say_and_wait([sys_get_colored_callname(3, 0), '……']);
          await era.printAndWait([teio.sex, '越发靠近你了。']);
          await teio.say_and_wait('我……无论在哪些地方，都不想，也不会放手啊。');
        } else {
          await teio.say_and_wait(
            '是——这样——吗？那我们就走吧！东西和地方已经准备好了！',
          );
          await era.printAndWait([
            me.get_colored_name(),
            ' 还没来的及发布或强调任何事情，就被发挥体能优势的',
            teio.get_uma_sex_title(),
            '带着如一阵风般强行移动了……或许 ',
            me.get_colored_name(),
            ' 的意见在此时此地并不重要，',
            teio.get_colored_name(),
            ' 只是单纯地通知一下 ',
            me.get_colored_name(),
            ' 接下来会发生什么。',
          ]);
        }
        hook.arg = 2;
      } else {
        hook.arg = 0;
      }
    } else {
      hook.arg = 1;
    }
  } else {
    teio.say('明天再见了！训练员！');
    era.print(
      `虽然度过了累人的一天，不过${teio.sex}还是一如既往地元气呢。${me.name} 一边这么想着，一边与${teio.sex}挥手告别。`,
    );
  }
};

handlers[event_hooks.celebration] = async () => {
  const me = get_chara_talk(0),
    teio = get_chara_talk(3),
    weeks = (era.get('flag:当前回合数') - 1) % 48;
  let ret;
  switch (weeks) {
    case 0:
      await print_event_name('新年', teio);
      await teio.say_and_wait(
        '是新年哦！训练员，准备好了吗！我们要玩什么？今天一起彻夜狂欢吧！',
      );
      await era.printAndWait(
        `${me.name} 赶忙示意${teio.sex}小声一点，要是任凭${teio.sex}这么喊下去自己的风评恐怕就要变成勾引学生的变态教师了。这孩子可真不让人省心。`,
      );
      await era.printAndWait(
        `不过……看着担当${teio.get_uma_sex_title()}在自己身旁开心地蹦蹦跳跳，活力十足的样子，${
          me.name
        } 突然觉得，一年到头的忙碌都是值得的。`,
      );
      break;
    case 5:
      await print_event_name('情人节', teio);
      await teio.say_and_wait('蜂蜜蜂蜜～嘻嘻～');
      await era.printAndWait(
        ` ${me.name} 从桌上抬起头，看见了背手于身后，笑眯眯地看着 ${
          me.name
        } 的${teio.get_uma_sex_title()}${teio.get_teen_sex_title()}。`,
      );
      await teio.say_and_wait('训练员～这是我给你做的礼物～');
      await era.printAndWait(
        `${teio.sex}把手到前面，一个不算很精致但能看出用心包装的小盒子展现在 ${me.name} 的眼前。`,
      );
      era.print([me.get_colored_name(), '——']);
      era.printButton('接受礼物', 1);
      era.get('love:3') >= 75 && era.printButton(`连${teio.sex}一起吃掉`, 2);
      ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${me.name} 接过，道了声谢，当着${teio.sex}的小心地打开包装，把里面的巧克力吃了下去。`,
        );
        await era.printAndWait(
          `在放下七八份照顾过的学生和同事送来的巧克力之后，${me.name} 坐在办公桌后，准备工作。`,
        );
      } else {
        await era.printAndWait(
          ` ${me.name} 从${teio.sex}的手上接过礼盒，却没有急于吃掉，而是慢慢地用另一只手解开包装，同时保持握着${teio.sex}的手`,
        );
        await era.printAndWait(
          `等到${teio.sex}脸红到耳根的时候，${me.name} 突然把${teio.sex}一把揽入怀中，含着巧克力吻向${teio.sex}的唇。`,
        );
        await era.printAndWait(
          `蜂蜜与可可的香甜缠绕上了${teio.get_teen_sex_title()}的小舌……`,
        );
        await quick_into_sex(3);
      }
      break;
    case 29:
      await print_event_name('庙会', teio);
      await era.printAndWait(
        `${me.name} 发了消息邀请。很快地，${teio.name} 便回复了 ${me.name}。`,
      );
      await teio.say_and_wait(`训——练——员——`);
      await era.printAndWait(
        `${teio.get_teen_sex_title()}换上了一身将稚气全部化为可爱，又隐约带着性感与诱惑的浴衣，在 ${
          me.name
        } 面前转了个圈。`,
      );
      await teio.say_and_wait(`我这身怎么样？`);
      era.printButton('「嗯……」', 1);
      await era.input();
      await era.printAndWait(`不好回答。`);
      await era.printAndWait(`感觉在自己的内心深处，已经有什么东西绷掉了。`);
      await era.printAndWait(
        `身型娇小的${teio.get_teen_sex_title()}穿着，完美透露出了那尚未发育完全，但同样充满性吸引力的身材。`,
      );
      await era.printAndWait(
        `最上面纯白色的耳套，仿佛钦点了小${teio.get_uma_sex_title()}作为纯情学生的身份，再往下，宽松的布料并没有完全贴近身体强调曲线，而是镂空了腋下侧肋的部分。`,
      );
      await era.printAndWait(
        `平时隐藏着的，嫩滑洁白的敏感皮肤此时完全暴露在 ${me.name} 的目光里，如果 ${me.name} 想的话，甚至可以伸出手去亲自试试触感……`,
      );
      await teio.say_and_wait(`唔唔？`);
      await era.printAndWait(
        `${
          me.name
        } 沉浸在${teio.get_teen_sex_title()}绝美的样子中，一时难以自拔。`,
      );
      era.printButton('忍不住了！', 1, { disabled: era.get('love:3') < 75 });
      era.printButton('钢之意志！', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(
          ` ${
            me.name
          } 长吸一口气，迈着已变沉重的身体走到${teio.get_uma_sex_title()}身边，伸出大手——`,
        );
        await quick_into_sex(3);
      }
      break;
    case 47:
      await print_event_name('圣诞节', teio);
      await teio.say_and_wait(
        '圣诞节！嗯，训练员要么就扮圣诞老人送我礼物，要么就陪我通宵玩个痛快吧！',
      );
      await era.printAndWait(
        `${me.name} 表示抗议，不过显然，还是应付不了这位精力旺盛的担当。`,
      );
      break;
    default:
      throw new Error();
  }
  era.set('cflag:3:节日事件标记', 0);
};

module.exports = {
  /**
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise<boolean>}
   */
  async run(hook, extra_flag, event_object) {
    if (event_object || !handlers[hook.hook]) {
      throw new Error('unsupported hook!');
    }
    return !!(await handlers[hook.hook](hook, extra_flag));
  },
};
