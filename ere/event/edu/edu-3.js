const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_love_uma,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { buff_colors } = require('#/data/color-const');
const TeioEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-3');
const event_hooks = require('#/data/event/event-hooks');
const { attr_enum, fumble_result } = require('#/data/train-const');
const { race_infos, race_enum } = require('#/data/race/race-const');

/** @type {Record<string,function(HookArg,*,EventObject):Promise>} */
const handlers = {};

/**
 * @param {HookArg} hook
 * @param {{args:*,fumble:boolean,stamina_ratio:number,train:number}} extra_flag
 */
handlers[event_hooks.train_fail] = async (hook, extra_flag) => {
  const teio = get_chara_talk(3),
    me = get_chara_talk(0);
  extra_flag.args = extra_flag.fumble
    ? fumble_result.fumble
    : fumble_result.fail;
  if (extra_flag.train === attr_enum.intelligence) {
    await teio.say_and_wait('看来帝王的传说……不得不在此处稍作休止了……');
    await era.printAndWait(`${teio.sex}趴在桌面上，失去了学习动力。`);
    await me.say_and_wait('果然有些事情不会骗人，不会就是不会。', true);
  } else if (era.get('status:3:腿伤')) {
    await teio.say_and_wait('啊！唔……');
    await era.printAndWait(
      `平时充满活力带着几分娇气的音色在痛苦的影响下扭曲成尖锐的叫声，直扎 ${me.name} 的耳膜和心房，${me.name} 三步并作两步飞奔过去，小心翼翼地安抚着${teio.sex}，仔细检查身体，同时轻揉患处。`,
    );
    hook.arg = 0;
  } else {
    await teio.say_and_wait('咿——');
    await era.printAndWait(
      `伴随着一声长音，${me.name} 的${teio.get_uma_sex_title()}不小心摔倒了。${
        me.name
      } 赶忙过去查看情况。`,
    );
    hook.arg = 0;
  }
};

handlers[
  event_hooks.week_start
] = require('#/event/edu/edu-events-3/week-start');

handlers[
  event_hooks.school_atrium
] = require('#/event/edu/edu-events-3/school-atrium');

handlers[event_hooks.out_start] = require('#/event/edu/edu-events-3/out-start');

/**
 * @param _
 * @param {{race:number,rank:number,relation_change:number,attr_change:number[],pt_change:number,love_change:number}} extra_flag
 */
handlers[event_hooks.race_start] = async (_, extra_flag) => {
  const teio = get_chara_talk(3),
    relation = era.get(`relation:3:0`),
    edu_weeks = era.get('cflag:3:育成回合计时'),
    me = get_chara_talk(0);
  if (extra_flag.race === race_enum.arim_kin && edu_weeks >= 96) {
    if (era.get('status:3:腿伤')) {
      await print_event_name('奇迹复活（上）', teio);

      era.printButton('「准备好了吗」', 1);
      await era.input();

      await teio.say_and_wait('我希望……我能够真的拥有这一切。');
      era.println();

      await teio.say_and_wait(
        '能在这个地方写下属于你我，以及所有支持我们的人们的，帝王的传说。',
      );
      era.println();

      await teio.say_and_wait(
        '我想……这是如同做梦一样的事情。但是光会做梦对于我们来说又有什么用呢？',
      );
      era.println();
      era.printButton(`「没什么用（笑），不过我们还是走到了这一步。」`, 1);
      await era.input();

      await teio.say_and_wait('是啊，我们即将得到这一切了。');
      era.println();

      era.printButton(`「好了，你看起来像是准备好了。」`, 1);
      await era.input();

      await teio.say_and_wait(
        '这一年来，我们失去了一切，只是抱着一点希望和执念不断地继续奔跑——',
      );
      era.println();

      era.printButton(
        '「正因如此，我们已经有了必需的东西，除了继续奔跑下去还有什么选择呢？」',
        1,
      );
      await era.input();

      await era.printAndWait(
        `${teio.get_teen_sex_title()}嘴角翘起，抬头与 ${me.name} 对视——`,
      );
      if (relation > 150) {
        await era.printAndWait(
          `${teio.sex}伸出双手，置于 ${me.name} 张开的掌心上，${
            me.name
          } 轻轻捏住担当的手，温热的触感传来，指尖感受到${teio.get_teen_sex_title()}健康而有弹性的肌肤，还有下面跳动着的，有些加速的脉搏。`,
        );
        await era.printAndWait(
          ` ${me.name} 望向${
            teio.sex
          }如蓝宝石一般晶莹清澈的，${teio.get_teen_sex_title()}的坚韧，信念，希冀，折射进 ${
            me.name
          } 的瞳孔。${me.name} 也笑了起来，却感觉，眼眶有些湿润。`,
        );
        era.println();

        era.printButton('「去吧，让你的名字响彻云霄。」', 1);
        await era.input();

        await teio.say_and_wait('一定。');
        era.println();

        await era.printAndWait(
          `踏地的足音回荡在小房间里，${teio.get_teen_sex_title()}潇洒地一转身，挥了挥手，坚定地迈步向前。`,
        );
      } else {
        await era.printAndWait(
          `${me.get_couple_title()} 二人默契地伸出惯用手，松握成拳，相碰。`,
        );
        await era.printAndWait(
          `小小躯体中蕴藏的力量，以及如太阳般的温暖从触碰的表面传来。${me.get_couple_title()} 看着对方，不禁都笑出了声。`,
        );
        era.println();

        era.printButton('「祝你武运昌隆」', 1);
        await era.input();

        await teio.say_and_wait('好好看着吧，我的奔跑。');
        await era.printAndWait(
          `${teio.sex}收回手臂，干净利落地一转身，走进阳光里。`,
        );
      }
    } else {
      await print_event_name('奔跑的夙愿（上）', teio);

      await teio.say_and_wait(
        '训练员，你还记得吗，我们初次比赛之后……你说，要跟我一起跑下去。',
      );
      era.println();

      await era.printAndWait(
        `阳光从入口处洒入，将${teio.sex}的全身笼罩在一片金光中，${teio.sex}回头微笑着，对 ${me.name} 诉说。`,
      );
      era.println();

      await teio.say_and_wait(
        '我可是很认真的哦……现在，我再问你一次，你会跟我一起跑吗？',
      );
      era.println();

      era.printButton('「会的，一定会……一直会的！」', 1);
      await era.input();
      await era.printAndWait(
        `${teio.get_teen_sex_title()}轻点下颌，转身，大幅度地挥舞起手臂，披风刷地摆起，如同一团升腾的火焰，踏步入场，融入前方的光明。`,
      );
    }
  } else {
    throw new Error('unsupported');
  }
};

handlers[event_hooks.race_end] = require('#/event/edu/edu-events-3/race-end');

/**
 * @param {HookArg} hook
 * @param _
 * @param {EventObject} event_object
 */
handlers[event_hooks.office_prepare] = async (hook, _, event_object) => {
  if (era.get('flag:当前互动角色') !== 3) {
    add_event(hook.hook, event_object);
    return;
  }
  const teio = get_chara_talk(3),
    me = get_chara_talk(0),
    event_marks = new TeioEduMarks();
  let wait_flag = false;
  if (event_marks.rehabilitation === 1) {
    event_marks.rehabilitation++;
    await print_event_name('康复训练', teio);
    await era.printAndWait(
      `木制的大桶里盛满温热的水，${me.name} 抓住爱马赤裸的双足，将其慢慢浸入水中。`,
    );
    await era.printAndWait(
      `对准穴道，捏捏抓抓。晶莹白润的腿脚被刺激，充血变红，${me.name} 埋头干着例行的公事。`,
    );
    await era.printAndWait(
      '和医生讨论出的一套帮助帝王恢复双腿的计划，每天都要严格执行，现在做的是每晚最后一步。',
    );
    await era.printAndWait(
      `看着${teio.get_teen_sex_title()}外表完美的双腿，${
        me.name
      } 还是心疼了起来。内里的伤，恐怕很难痊愈了吧。`,
    );
    await era.printAndWait(
      '说到底，自己的努力，真的有意义吗，还是说只不过是对双方的心理安慰？',
    );
    era.println();

    await era.printAndWait(
      `${
        me.name
      } 想起医生私下跟自己说的一些类似病症的${teio.get_uma_sex_title()}们，${
        teio.sex
      }们无一例外没能再次康复，选择了退役。那么帝王……`,
    );
    era.println();

    await teio.say_and_wait('训练员。');
    era.println();

    await era.printAndWait(
      `比平常低声的话语音冲开升腾的热气，飘进 ${me.name} 的耳朵。`,
    );
    era.println();

    await teio.say_and_wait(
      `我……虽然我知道这个问题很蠢，但我还是想听到 ${me.name} 亲口告诉我……我们现在做的这些，真的有用吗？`,
    );

    era.printButton(
      `${
        me.name
      } 低下头去，不愿或者不敢搭话，只顾对${teio.get_uma_sex_title()}的腿部进行护理`,
      1,
    );
    era.printButton('「我们的信念一定会得到回应。」', 2);
    const ret = await era.input(),
      time_change = get_random_value(0, 50);
    era.println();
    if (ret === 1) {
      wait_flag =
        get_attr_and_print_in_event(
          3,
          [0, 15, 0, 15, 15],
          0,
          JSON.parse(`{"精力":${time_change}}`),
        ) || wait_flag;
    } else {
      wait_flag =
        get_attr_and_print_in_event(
          3,
          [15, 0, 15, 0, 0],
          0,
          JSON.parse(`{"精力":${time_change}}`),
        ) || wait_flag;
      wait_flag = sys_like_chara(3, 0, 5) || wait_flag;
      wait_flag = sys_change_motivation(3, 1) || wait_flag;
    }
  }
  wait_flag && (await era.waitAnyKey());
  return true;
};

/**
 * @param {HookArg} hook
 * @param _
 * @param {EventObject} event_object
 */
handlers[event_hooks.school_rooftop] = async (hook, _, event_object) => {
  if (era.get('flag:当前互动角色') !== 3) {
    add_event(hook.hook, event_object);
    return;
  }
  const teio = get_chara_talk(3),
    me = get_chara_talk(0),
    edu_event_marks = new TeioEduMarks();
  let wait_flag = false;
  if (edu_event_marks.wing_and_sky === 1) {
    edu_event_marks.wing_and_sky++;
    await print_event_name('身负双翼，触及青天', teio);

    await me.say_and_wait('天台啊，真是有点久违。', true);
    await era.printAndWait(`${me.name} 带着食盒，走到门外。`);
    await era.printAndWait(
      `门已经大开，在 ${me.name} 眼前的，是 ${me.name} 的爱马，${teio.name}。`,
    );
    era.println();

    await teio.say_and_wait(`果然还是这里舒服啊～在高处真自在。`);
    era.println();

    await me.say_and_wait('你开心就好咯。');
    era.println();

    await era.printAndWait(
      `说着，${me.name} 放下食盒，开始整理。${me.name} 的担当又不知起了什么兴致，拉 ${me.name} 到天台上开什么二人下午茶会，${me.name} 只好带了些点心，自己泡了壶果茶，跟着${teio.sex}来了。`,
    );
    era.println();

    await teio.say_and_wait('我说啊——');
    era.println();

    await era.printAndWait(
      `一阵轻风拂过，${
        me.name
      } 昂首，看到${teio.get_uma_sex_title()}脚步一拧，双手略扬，转了个身，眼神与 ${
        me.name
      } 对视，说道`,
    );
    era.println();

    await teio.say_and_wait(
      '训练员你是知道的吧，我那攀到高处的梦想。现在，经我们二人之手，虚幻的念想已经逐渐变成现实的阶梯，送我们向上，接下来……',
    );
    era.println();

    era.print(`${me.name} 回答道——`);
    era.printButton('「我一直都会是你的助力」', 1);
    era.printButton('「祝成功，等到圆梦之后，我们再回到这里聚一下吧」', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(
        `${teio.get_teen_sex_title()}躬身，冲 ${me.name} 灿烂一笑。`,
      );
      era.println();
      wait_flag = sys_love_uma(3, 1) || wait_flag;
      wait_flag =
        get_attr_and_print_in_event(
          3,
          [20, 20, 0, 0, 20],
          0,
          JSON.parse('{"体力":200}'),
        ) || wait_flag;
    } else {
      await teio.say_and_wait('又是一个约定，记好了哦～');
      era.println();
      wait_flag = sys_like_chara(3, 0, 5) || wait_flag;
      wait_flag =
        get_attr_and_print_in_event(3, [15, 0, 20, 20, 0], 0) || wait_flag;
    }
    wait_flag && (await era.waitAnyKey());
    return true;
  }
};

/**
 * @param {HookArg} hook
 * @param _
 * @param {EventObject} event_object
 */
handlers[event_hooks.office_rest] = async (hook, _, event_object) => {
  if (era.get('flag:当前互动角色') !== 3) {
    add_event(hook.hook, event_object);
    return;
  }
  const teio = get_chara_talk(3),
    me = get_chara_talk(0),
    edu_weeks = era.get('cflag:3:育成回合计时');
  let wait_flag = false;
  if (edu_weeks === 47 + 25) {
    await print_event_name('定时刷新的小兽', teio);
    await teio.say_and_wait('呜啊。');
    era.println();

    await era.printAndWait(
      `${me.name} 缓慢地，恰到好处地抚摸着趴在 ${
        me.name
      } 大腿上，整个人蜷缩起来的担当${teio.get_uma_sex_title()}。`,
    );
    await era.printAndWait(
      `自从有次 ${me.name} 帮${teio.sex}按摩之后，${teio.sex}便食髓知味，不仅要求 ${me.name} 帮忙梳理毛发（倒也合理），还会偷偷溜进 ${me.name} 的办公室里，不管 ${me.name} 在不在工作，一定要往 ${me.name} 身上蹭，要求 ${me.name} 缓解${teio.sex}的身体疲劳。`,
    );
    await era.printAndWait(
      `${me.name} 心不在焉地挠了挠${teio.sex}的下巴，${teio.sex}发出一阵满足的咕噜声，眯起了眼睛。`,
    );
    await me.say_and_wait('你是猫吗', true);
    await era.printAndWait(
      `${
        me.name
      } 不禁在心里吐槽起来，腿上的${teio.get_teen_sex_title()}好像真把 ${
        me.name
      } 这地方当成自己的窝了。`,
    );
    era.println();

    era.print(`${me.name} 接下来要怎样对${teio.sex}呢——`);
    era.printButton('缓慢地，从发根轻柔地往下抚摸，直至尾稍末端', 1);
    era.printButton(
      `因为太累……不知不觉中 ${me.name} 和${teio.sex}都睡着了。`,
      2,
    );
    if (era.get('love:3') >= 50) {
      era.printButton(
        ` ${me.name} 起了坏心眼，先挠了挠${
          teio.sex
        }的耳根和尻里（控制尾巴的内侧无毛处），小${teio.get_uma_sex_title()}浑身颤抖时 ${
          me.name
        } 又改变了策略，用按摩手法捏遍${teio.sex}的全身……`,
        3,
      );
    }
    const ret = await era.input();
    const time_change = get_random_value(0, 50);
    if (ret === 1) {
      await era.printAndWait(
        `${me.name} 五指并作掌，用刚好的力度从头到尾顺了一遍毛，掌间传来一阵松软，让 ${me.name} 的心情也愉快了起来。`,
      );
      era.println();
      wait_flag = sys_like_chara(3, 0, 5) || wait_flag;
      wait_flag =
        get_attr_and_print_in_event(
          3,
          undefined,
          30,
          JSON.parse(
            `{"体力":${get_random_value(50, 100)},"精力":${time_change}}`,
          ),
        ) || wait_flag;
    } else if (ret === 2) {
      era.println();
      wait_flag =
        get_attr_and_print_in_event(
          3,
          [0, 20, 0, 20, 0],
          30,
          JSON.parse(`{"精力":${time_change}}`),
        ) || wait_flag;
    } else {
      era.println();
      wait_flag = sys_love_uma(3, 1) || wait_flag;
      wait_flag =
        get_attr_and_print_in_event(
          3,
          [20, 0, 20, 0, 20],
          0,
          JSON.parse(`{"精力":${time_change}}`),
        ) || wait_flag;
    }
    wait_flag && (await era.waitAnyKey());
  }
  return true;
};

/**
 * @param {HookArg} hook
 * @param _
 * @param {EventObject} event_object
 */
handlers[event_hooks.out_shopping] = async (hook, _, event_object) => {
  if (era.get('flag:当前互动角色') !== 3) {
    add_event(hook.hook, event_object);
    return;
  }
  const teio = get_chara_talk(3),
    me = get_chara_talk(0),
    event_marks = new TeioEduMarks(),
    love = era.get('love:3');
  let wait_flag = false;
  if (event_marks.honey_power === 1) {
    event_marks.honey_power++;
    await print_event_name('蜂蜜的力量', teio);

    await era.printAndWait(
      `总感觉跟${teio.sex}一起外出时候总会碰到什么事，${me.name} 一边想着，一边看着在旁边挽着 ${me.name} 胳膊的担当。`,
    );
    await era.printAndWait(
      `或者说，拽着 ${me.name} 更为确切。有时候 ${
        me.name
      } 也很好奇自己是怎么在保持思考的状态下跟上活蹦乱跳的${teio.get_uma_sex_title()}${teio.get_teen_sex_title()}的步伐的，或许是 ${
        me.name
      } 在相处之中也耳濡目染会了些帝王舞步的技巧。`,
    );
    await era.printAndWait(
      '相处之中，很多事情都会潜移默化地互相影响啊……比如说口味。',
    );
    era.println();

    await era.printAndWait(
      `${me.name} 的担当带 ${me.name} 到了长椅下，开始大口啜饮一刻钟前在常去的饮品摊位前买的特制蜂蜜特饮。`,
    );
    await era.printAndWait(
      `浓浆从${teio.sex}的喉咙处吞入，滑过脖颈形成小小的曲线，阳光照向${teio.sex}的一侧，让粉白的皮肤更添一层质感，同时凸出了肌肉在吞咽时每一个细小的动作……`,
    );
    await era.printAndWait(
      `刚刚买的时候 ${me.name} 并无什么想法，现在却感口舌干燥，也想喝点什么润润。`,
    );
    era.println();

    await teio.say_and_wait('训练员？');
    era.println();

    await era.printAndWait(`${me.name} 赶忙应声。`);
    era.println();

    await teio.say_and_wait(
      `训练员？感觉 ${me.name} 也很渴吧，要不要喝点东西呢？`,
    );
    await era.printAndWait(
      `${teio.sex}嘻嘻笑着，把还剩半杯的蜂蜜特饮举到 ${me.name} 的眼前，仿佛是在邀请 ${me.name}。`,
    );

    await era.printAndWait(`${me.name} 会——`);
    era.printButton('再买一杯', 1);
    era.printButton('「其实我比较喜欢喝无糖无味的茶水……」', 2);
    if (love > 50) {
      era.printButton(
        `接过${teio.sex}手中的杯子，用上面的吸管品尝完后再还给${teio.sex}`,
        3,
      );
    }
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(
        `${me.name} 笑着摸了摸${
          teio.sex
        }的头，转身去给自己买了一杯。举起蜂蜜特饮放在唇边，指间残留着的${teio.get_uma_sex_title()}发香和甜美的蜂蜜味道混在一起，让人陶醉……`,
      );
      era.println();
      wait_flag = sys_like_chara(3, 0, 5) || wait_flag;
      wait_flag =
        get_attr_and_print_in_event(3, [0, 0, 0, 0, 20], 0) || wait_flag;
    } else if (ret === 2) {
      await era.printAndWait(
        `${me.name} 略显尴尬地清了清嗓子，婉言拒绝了自家担当的邀请。${teio.sex}眯起眼睛，似乎笑得更愉快了。`,
      );
      era.println();
      wait_flag =
        get_attr_and_print_in_event(3, [0, 15, 0, 15, 0], 0) || wait_flag;
    } else {
      await teio.say_and_wait('///////');
      era.println();

      await era.printAndWait(
        `${me.name} 不由得起了坏心眼，将${teio.sex}手上的杯子拿了过来，顺势痛饮一大口，再跟无事发生一样把杯子放回宕机的${teio.sex}的手里。`,
      );
      era.println();

      await teio.say_and_wait('唔嗯嗯——');
      era.println();

      await era.printAndWait('……好像玩大了。');
      await era.printAndWait(
        `后来好好道歉了十分钟，红透了脸的${teio.sex}才停止了唔唔，起身靠到 ${me.name} 旁边。`,
      );
      await era.printAndWait(
        `继续行走之前，${me.name} 注意到${teio.sex}似乎刻意规避 ${me.name} 的视线，小心地又用吸管喝了几口饮料……`,
      );
      era.println();
      wait_flag = sys_love_uma(3, 1) || wait_flag;
      wait_flag =
        get_attr_and_print_in_event(
          3,
          [15, 0, 15, 0, 0],
          0,
          JSON.parse('{"体力":150}'),
        ) || wait_flag;
    }
  } else if (event_marks.uma_shopping === 1) {
    event_marks.uma_shopping++;
    await print_event_name(`${teio.get_uma_sex_title()}的……血拼！`, teio);
    await era.printAndWait('陪女人逛街，辛苦。');
    await era.printAndWait('陪女人进商业中心，疲惫。');
    await era.printAndWait(`陪${teio.get_uma_sex_title()}买东西，累麻了。`);
    await era.printAndWait(`很不幸，${me.name} 现在就在这第三个层级。`);
    await era.printAndWait(
      `推着购物车——速度比起${teio.sex}来说简直不是一个级别——一边对照列的清单一边查点货架上的东西。光是如此倒也不失为一种悠闲。`,
    );
    await era.printAndWait(
      `不过，${me.name} 看着一眨眼就被不知道从哪来的东西填满的购物车，和耳边不停的穿梭气流声，不由自主地叹起气来。`,
    );
    era.println();
    await teio.say_and_wait(
      '训练员，快一点！还有要买的东西，我一个人拿不了那么多，需要你帮忙装啊！再不来，就要被抢光了！',
    );
    await era.printAndWait(
      ` ${me.name} 仰天长啸，算是认了命，催动双腿向声音来源处靠拢——`,
    );
    era.printButton('拼命跟上帝王的节奏', 1);
    era.printButton(
      '按照事先划好的路线，先一步到达目标位置，等待帝王出现，装好东西后再来一轮',
      2,
    );
    const ret = await era.input();
    if (ret === 1) {
      wait_flag = sys_like_chara(3, 0, 10) || wait_flag;
      wait_flag =
        get_attr_and_print_in_event(
          3,
          [20, 0, 20, 20, 0],
          0,
          JSON.parse('{"体力":200}'),
        ) || wait_flag;
    } else {
      wait_flag = sys_like_chara(3, 0, 5) || wait_flag;
      wait_flag =
        get_attr_and_print_in_event(3, [0, 20, 0, 0, 30], 0) || wait_flag;
    }
  }
  wait_flag && (await era.waitAnyKey());
  return true;
};

handlers[event_hooks.back_school] = async () => {
  const teio = get_chara_talk(3),
    me = get_chara_talk(0),
    edu_weeks = era.get('cflag:3:育成回合计时');
  if (edu_weeks === race_infos[race_enum.tenn_spr].date + 95) {
    await print_event_name('折翼', teio);
    await era.printAndWait(
      `医生的存在就是为了救死扶伤，我心爱的人一定会好起来的——不错，人们站在病房的门口，往往就会这么想。可是，这种想法，到底有几分真实，几分自我安慰呢？如果能够挽救的话，那么即使有医生的存在，这个世界依然无法避免伤亡的出现，难道是因为医生不够活跃？不够尽心？不……或者只是因为自己运气不好罢了。`,
    );
    era.println();
    await era.printAndWait(
      `如此想着，${me.name} 不自觉拿惯用手扶了扶额，呆呆地望着面前穿着白色大褂的中年男人。他的嘴唇在翕动——说话？他有在说什么吗？闲置的手处传来毛发的触感，不，不似以往，精心打理的柔顺马尾仿佛受惊一般，从内部炸开，掌心处传来一阵瘙痒。${me.name} 有点想笑，这孩子，怎么跑个步把自己搞成这样，一会得好好——`,
    );
    await era.printAndWait(
      `${me.name} 转头，努力微笑着看向自家担当，随后看到了那双无神的双眸，将 ${me.name} 的思想吸回现实。`,
    );
    era.println();
    await era.printAndWait(
      `主治医「${teio.name}${teio.get_adult_sex_title()}，以及 ${
        me.actual_name
      }${me.get_adult_sex_title()}，${
        teio.sex
      }的训练员，我必须再次强调一遍，要做好此生放弃赛跑的准备。」`,
    );
    era.println();
    await era.printAndWait(
      '——任何逃避的想法，终究抵挡不住现实的车轮。现实就在眼前，除了接受之外别无二选。',
    );
    era.println();
    await era.printAndWait(
      `${me.name} 看着主治医生拿出一根金属小杖，再度在屏幕显示的照片上指点起来。之前不愿接受而自主屏蔽的回忆与现在的影像重叠，${me.name} 完全知道他都说了些什么。“髌骨脱位”“习惯性骨折”“裂纹”“小腿”……不错，所有地方 ${me.name} 都知道，所有情况 ${me.name} 都清楚。`,
    );
    era.println();
    await era.printAndWait(
      `可是这种事情依然发生了。${me.name} 忍住了情绪，尽力将自己压在原地。`,
    );
    await era.printAndWait('马尾在动，似要抽离。');
    await me.say_and_wait(
      '对我感到失望了吗，也没关系，是我作为训练员的失职',
      true,
    );
    await era.printAndWait(
      `${me.name} 这么想着，主动将手往回缩了一点……但失败了。`,
    );
    era.println();
    await era.printAndWait(
      `一只与蕴含力量不相称的小手放在了 ${me.name} 的掌面上，接着是从下方握住的另一只。一阵温暖传来，而同时，${me.name} 又感觉到了一股轻颤，如孩童扯住亲密的人衣角一般，${teio.name} 拉着 ${me.name} 的手。${me.name} 长叹一声，回握住${teio.sex}，再未松开。`,
    );
    era.println();
    sys_like_chara(3, 0, 10, true, 1);
    get_attr_and_print_in_event(
      3,
      new Array(3).fill(-50),
      0,
      JSON.parse(
        `{"体力":${
          100 *
            (era.get('cflag:3:育成成绩')[
              race_infos[race_enum.tenn_spr].date + 95
            ].rank ===
              1) -
          200
        },"精力":-200}`,
      ),
    );
    era.set('talent:3:自信程度', 1);
    era.set('talent:3:淫乱', 1);
    era.set('talent:3:身体素质', 0);
    era.set('status:3:腿伤', 1);
    era.printMultiColumns([
      { content: [teio.get_colored_name(), ' 不再 [体壮] 了！'], type: 'text' },
      {
        content: [
          teio.get_colored_name(),
          ' 变得 [自卑] 与 ',
          {
            color: buff_colors[2],
            content: '[淫乱]',
          },
          ' 了！',
        ],
        type: 'text',
      },
      {
        content: [
          teio.get_colored_name(),
          ' 罹患了 ',
          {
            color: buff_colors[3],
            content: '[腿伤]',
          },
          '！',
        ],
        type: 'text',
      },
    ]);
    await era.waitAnyKey();
  }
};

handlers[event_hooks.week_end] = require('#/event/edu/edu-events-3/week-end');

handlers[
  event_hooks.crazy_fan_end
] = require('#/event/edu/edu-events-3/crazy-fan-end');

/**
 * 东海帝王 - 育成
 *
 * @author 天马闪光蹄
 *
 * @param {HookArg} hook
 * @param {*} extra_flag
 * @param {EventObject} event_object
 * @returns {Promise<*>}
 */
module.exports = async (hook, extra_flag, event_object) => {
  if (!handlers[hook.hook]) {
    throw new Error('unsupported stage!');
  }
  return await handlers[hook.hook](hook, extra_flag, event_object);
};
