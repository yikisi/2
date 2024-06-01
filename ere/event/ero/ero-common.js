const era = require('#/era-electron');

const {
  get_penis_size,
  orgasm_check_list,
} = require('#/system/ero/sys-calc-ero-status');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const common_pregnant_report_in_love = require('#/event/ero/snippets/common-pregnant-report-in-love');
const get_participants_and_first_action = require('#/event/ero/snippets/get-participants-and-first-action');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const { part_enum, part_names } = require('#/data/ero/part-const');
const {
  breast_size,
  penis_desc,
  pregnant_stage_enum,
  unexpected_pregnant_enum,
} = require('#/data/ero/status-const');
const { ero_action_names, ero_hooks } = require('#/data/event/ero-hooks');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const { get_breast_cup } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');

const current = new Date().getTime();

/** @type {Record<string,function>} */
const handlers = {},
  sleep_handlers = {};

[
  require('#/event/ero/common-lines/ero-communications'),
  require('#/event/ero/common-lines/ero-pettings-1'),
  require('#/event/ero/common-lines/ero-pettings-2'),
  require('#/event/ero/common-lines/ero-pettings-3'),
  require('#/event/ero/common-lines/ero-fuckings'),
  require('#/event/ero/common-lines/ero-items'),
  require('#/event/ero/common-lines/ero-sm'),
  require('#/event/ero/common-lines/ero-orgy-pettings'),
  require('#/event/ero/common-lines/ero-orgy-fuckings'),
].forEach((f) => f(handlers));

[
  require('#/event/ero/common-lines/ero-sleeping-pettings-1'),
  require('#/event/ero/common-lines/ero-sleeping-pettings-2'),
  require('#/event/ero/common-lines/ero-sleeping-fuckings'),
].forEach((f) => f(sleep_handlers, handlers));

console.log(
  '[ero-common.js] ero common handlers init done!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

// 色色关联系
handlers[ero_hooks.ero_start] = async (chara_id) => {
  let father_id;
  if (
    era.get(`status:${chara_id}:发情`) &&
    era.get('flag:惩戒力度') === 3 &&
    (!(father_id = era.get(`cflag:${chara_id}:父方角色`)) ||
      !era.get(`cflag:${chara_id}:母方角色`))
  ) {
    await get_chara_talk(chara_id).say_and_wait(
      `哈啊……哈啊……不知道为什么看到${
        !father_id ? '爸爸' : '妈妈'
      }的时候，下面就觉得好热好难受……已经……忍不住了！`,
    );
  }
};

handlers[ero_hooks.filter_in_rape] = () => (e) =>
  (e >= ero_hooks.missionary && e <= ero_hooks.ask_stimulate_womb) ||
  (e >= ero_hooks.ask_double_suck_nipple && e <= ero_hooks.spit_roast_anal_sex);

handlers[ero_hooks.become_erect] = (chara_id, _, extra_flag) => {
  if (extra_flag.part === part_enum.penis) {
    era.print([
      get_chara_talk(chara_id).get_colored_name(),
      ` ${penis_desc[get_penis_size(chara_id)]} 的肉棒勃起了！`,
    ]);
  } else if (extra_flag.part === part_enum.breast) {
    let cup = get_breast_cup(chara_id);
    cup > 'G' && (cup = 'G');
    era.print([
      '深色的小樱桃在 ',
      get_chara_talk(chara_id).get_colored_name(),
      ` 两只 ${breast_size[cup]} 的乳房顶端探出了头……`,
    ]);
  }
};

/**
 * @param {number} chara_id
 * @param _
 * @param {{part:number}} extra_flag
 */
handlers[ero_hooks.become_lubrication] = (chara_id, _, extra_flag) => {
  if (extra_flag.part === part_enum.breast) {
    const amount = era.get(`nowex:${chara_id}:喷奶量`);
    amount &&
      era.print([
        get_chara_talk(chara_id).get_colored_name(),
        ' 的',
        { content: ' 胸部 ', color: buff_colors[2] },
        `${era.get(`ex:${chara_id}:喷奶阻碍`) ? '猛然喷出了' : '分泌了'} `,
        { content: `${amount}ml 乳汁`, color: buff_colors[2] },
        '！',
      ]);
  } else {
    era.print([
      get_chara_talk(chara_id).get_colored_name(),
      ' 的 ',
      { content: part_names[extra_flag.part], color: buff_colors[2] },
      ' 变得湿润了！',
    ]);
  }
};

/**
 * @param {number} chara_id
 * @param _
 * @param {{continue:boolean,part:number}} extra_flag
 */
handlers[ero_hooks.wound] = (chara_id, _, extra_flag) =>
  era.print(
    extra_flag.continue
      ? [
          get_chara_talk(chara_id).get_colored_name(),
          ' 的 ',
          { content: part_names[extra_flag.part], color: buff_colors[2] },
          ' 还在',
          { content: ' 流血 ', color: buff_colors[3] },
          '！',
        ]
      : [
          get_chara_talk(chara_id).get_colored_name(),
          ' 的 ',
          { content: part_names[extra_flag.part], color: buff_colors[2] },
          ' 被',
          { content: ' 撑裂 ', color: buff_colors[3] },
          '了！',
        ],
  );

/**
 * @param {number} chara_id
 * @param _
 * @param {{virgin:boolean}} extra_flag
 */
handlers[ero_hooks.lose_virginity] = (chara_id, _, extra_flag) =>
  era.print([
    get_chara_talk(chara_id).get_colored_name(),
    ' 失去了 ',
    { content: extra_flag.virgin ? '处女' : '童贞', color: buff_colors[2] },
    '！',
  ]);

/** @param {number} chara_id */
handlers[ero_hooks.orgasm] = async (chara_id) => {
  const chara = get_chara_talk(chara_id);
  let multi_orgasm = undefined;
  if (era.get(`nowex:${chara_id}:二重高潮`)) {
    multi_orgasm = '二';
  } else if (era.get(`nowex:${chara_id}:三重高潮`)) {
    multi_orgasm = '三';
  } else if (era.get(`nowex:${chara_id}:四重高潮`)) {
    multi_orgasm = '四';
  } else if (era.get(`nowex:${chara_id}:五重高潮`)) {
    multi_orgasm = '五';
  } else if (era.get(`nowex:${chara_id}:多重高潮`)) {
    multi_orgasm = '多';
  }
  multi_orgasm &&
    era.print([
      chara.get_colored_name(),
      ' 发生了',
      { content: ` ${multi_orgasm}重高潮`, color: buff_colors[2] },
      '！',
    ]);
  orgasm_check_list.forEach((part) => {
    const part_name = part_names[part];
    const times =
      era.get(`nowex:${chara_id}:${part_name}高潮`) +
      (era.get(`nowex:${chara_id}:无自觉${part_name}高潮`) || 0);
    if (part === part_enum.breast) {
      const nipple_times =
        era.get(`nowex:${chara_id}:乳头高潮`) +
        era.get(`nowex:${chara_id}:无自觉乳头高潮`);
      times &&
        era.print([
          chara.get_colored_name(),
          ' 的 ',
          { content: '胸部', color: buff_colors[2] },
          ' ',
          {
            content: times > 1 ? `发生了 ${times} 重高潮` : '高潮了',
            color: buff_colors[2],
          },
          '！',
        ]);
      nipple_times &&
        era.print([
          chara.get_colored_name(),
          ' 的 ',
          { content: '乳头', color: buff_colors[2] },
          ' ',
          {
            content: times > 1 ? `发生了 ${times} 重高潮` : '高潮了',
            color: buff_colors[2],
          },
          '！',
        ]);
    } else if (times) {
      let semen;
      switch (part) {
        case part_enum.sadism:
        case part_enum.masochism:
          era.print([
            chara.get_colored_name(),
            ' 因 ',
            { content: part_name, color: buff_colors[2] },
            ' ',
            {
              content: times > 1 ? `发生了 ${times} 重高潮` : '高潮了',
              color: buff_colors[2],
            },
            '！',
          ]);
          break;
        case part_enum.penis:
          semen = era.get(`nowex:${chara_id}:射精量`);
          era.print([
            chara.get_colored_name(),
            ' ',
            semen < 0 ? '在避孕套中' : '',
            '射出了',
            {
              content: ` ${Math.abs(semen)}ml `,
              color: buff_colors[2],
            },
            '精液！',
          ]);
          break;
        default:
          era.print([
            chara.get_colored_name(),
            ' 的 ',
            { content: part_name, color: buff_colors[2] },
            ' ',
            {
              content: times > 1 ? `发生了 ${times} 重高潮` : '高潮了',
              color: buff_colors[2],
            },
            '！',
          ]);
      }
    }
  });
};

/** @param {number} chara_id */
handlers[ero_hooks.zero_stamina] = (chara_id) =>
  era.print([
    get_chara_talk(chara_id).get_colored_name(),
    ' 因体力过分消耗陷入了昏迷……',
  ]);

/** @param {number} chara_id */
handlers[ero_hooks.lost_mind] = (chara_id) =>
  era.print([
    get_chara_talk(chara_id).get_colored_name(),
    ' 因精力过分消耗陷入了失神……',
  ]);

const hate_mark_desc = [
  '用锐利的目光瞪了过来……',
  '露出了愤怒的表情……',
  '愤怒得面容扭曲，低声咒骂着……',
];
const pain_mark_desc = [
  '面部扭曲，忍受着痛苦……',
  '发出了一阵痛苦的悲鸣……',
  '因过于痛苦而哭喊……',
];
const pleasure_mark_desc = [
  '由于强烈的快感颤抖着身体……',
  '接受着快感的余韵，面色舒缓……',
  '似乎被强烈的快乐烧灼了身心……',
];
const shame_mark_desc = [
  '羞辱地红着脸……',
  '似乎被羞辱所支配了……',
  '完全被羞辱支配了……',
];
const sex_mark_desc = [
  '淫纹显示出了卵子的活动轨迹……',
  '淫纹能随着胎儿的成长而变得更加瑰丽了……',
  '淫纹能显示出怀孕率和受孕的情况了……',
];

/**
 * @param {number} chara_id
 * @param _
 * @param {{level:number,name:string,new:boolean}} extra_flag
 */
handlers[ero_hooks.get_mark] = async (chara_id, _, extra_flag) => {
  let message = '';
  switch (extra_flag.name) {
    case '欢愉':
      message = pleasure_mark_desc[extra_flag.level - 1];
      break;
    case '同心':
      if (era.get(`love:${chara_id}`) >= 75) {
        message = ' 更加一心同体了……';
      } else {
        message = ' 更加屈服了……';
      }
      break;
    case '苦痛':
      message = pain_mark_desc[extra_flag.level - 1];
      break;
    case '羞耻':
      message = shame_mark_desc[extra_flag.level - 1];
      break;
    case '反抗':
      if (era.get(`love:${chara_id}`) >= 75) {
        await era.printAndWait('虽说是在交往，但好像做得有点过头了');
      }
      message = hate_mark_desc[extra_flag.level - 1];
      break;
    case '淫纹':
      message = `${extra_flag.new ? '小腹上出现了一个淫纹……' : '小腹上'}${
        sex_mark_desc[extra_flag.level - 1]
      }`;
  }
  await era.printAndWait([
    get_chara_talk(chara_id).get_colored_name(),
    ` ${message}`,
  ]);
};

handlers[ero_hooks.prison] = (chara_id) => {
  era.print([
    get_chara_talk(chara_id).get_colored_name(),
    ' 监禁了 ',
    get_chara_talk(0).get_colored_name(),
  ]);
  era.set('flag:当前位置', location_enum.basement);
  era.set('flag:地下室之主', chara_id);
};

/**
 * @param _
 * @param __
 * @param {{father_id:number,mother_id:number,shown:boolean}} extra_flag
 */
handlers[ero_hooks.cum_in_womb] = async (_, __, extra_flag) => {
  const father = get_chara_talk(extra_flag.father_id),
    mother = get_chara_talk(extra_flag.mother_id),
    talent_palam =
      era.get(`talent:${mother.id}:子宫敏感`) ||
      era.get(`mark:${mother.id}:欢愉`) >= 2,
    talent_sex =
      era.get(`talent:${mother.id}:淫乱`) ||
      era.get(`talent:${mother.id}:榨精成瘾`),
    sex_mark = era.get(`mark:${mother.id}:淫纹`) >= 2,
    is_awake = sys_check_awake(mother.id);
  let talent_check = talent_palam || talent_sex;
  if (sex_mark) {
    await era.printAndWait([
      '在 ',
      mother.get_colored_name(),
      ' 的小腹上，代表子宫的心形图案正在慢慢填充……',
    ]);
  }
  if (
    era.get(`status:${mother.id}:经期`) ||
    era.get(`cflag:${mother.id}:妊娠阶段`) !== 1 << pregnant_stage_enum.no ||
    era.get(`status:${mother.id}:长效避孕药`) ||
    era.get(`status:${mother.id}:短效避孕药`)
  ) {
    if (is_awake && talent_check) {
      if (talent_palam) {
        await era.printAndWait([
          father.get_colored_name(),
          ' 温热的精液正在充盈 ',
          mother.get_colored_name(),
          ' 发疼的子宫……',
        ]);
        await era.printAndWait([
          mother.get_colored_name(),
          ' 沉溺在快感之中……',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 欣喜地品尝着身为 ',
          {
            content: era.get(`cflag:${mother.id}:性别`) ? '扶她' : '女性',
            color: buff_colors[2],
          },
          ' 的极乐……',
        ]);
      }
    }
  } else {
    const love = era.get(`love:${mother.id || father.id}`);
    if (love < 75) {
      await era.printAndWait([
        father.get_colored_name(),
        ' 射出的大量精子正朝向 ',
        mother.get_colored_name(),
        ' 毫无防备的卵子前进……',
      ]);
      is_awake &&
        !talent_check &&
        (await era.printAndWait([
          mother.get_colored_name(),
          ' 惊恐地意识到自己可能会怀孕的事实……',
        ]));
    } else if (love < 90) {
      await era.printAndWait([
        father.get_colored_name(),
        ' 射出的大量精子正朝向 ',
        mother.get_colored_name(),
        ' 卸下防备的卵子前进……',
      ]);
      is_awake &&
        !talent_check &&
        (await era.printAndWait([
          mother.get_colored_name(),
          ' 朦胧地意识到自己可能会怀孕的事实……',
        ]));
    } else {
      if (
        era.get(`status:${mother.id}:反避孕套`) &&
        era.get(`tcvar:${father.id}:避孕套`) &&
        sys_check_awake(father.id)
      ) {
        await era.printAndWait([
          father.get_colored_name(),
          ' 惊恐地发现自己射出的精液畅通无阻……',
        ]);
      } else {
        await era.printAndWait([
          father.get_colored_name(),
          ' 射出的大量精子正朝向 ',
          mother.get_colored_name(),
          ' 渴望怀孕的卵子前进……',
        ]);
      }
      if (is_awake && !talent_check) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 欣喜地品味着即将成为母亲的感觉……',
        ]);
      }
    }
    if (is_awake && talent_check) {
      if (talent_palam) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 沉溺在发疼的子宫被精液充盈的快感之中，丝毫没有顾及到怀孕的可能性……',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 欣喜地品尝着身为 ',
          {
            content: era.get(`cflag:${mother.id}:性别`) ? '扶她' : '女性',
            color: buff_colors[2],
          },
          ' 的极乐……',
        ]);
      }
    }
  }
};

/**
 * @param _
 * @param __
 * @param {{father_id:number,mother_id:number,shown:boolean}} extra_flag
 */
handlers[ero_hooks.be_pregnant] = (_, __, extra_flag) => {
  if (era.get(`mark:${extra_flag.mother_id}:淫纹`) === 3) {
    era.print([
      '在 ',
      get_chara_talk(extra_flag.father_id).get_colored_name(),
      ' 射进来之后，',
      get_chara_talk(extra_flag.mother_id).get_colored_name(),
      ' 的淫纹变得有点奇怪……',
    ]);
  } else {
    era.logger.debug(`角色 ${extra_flag.mother_id} 怀孕了！`);
  }
};

/**
 * @param _
 * @param {HookArg} hook
 * @param {{father_id:number,mother_id:number}} extra_flag
 */
handlers[ero_hooks.report_pregnant_between_weeks] = async (
  _,
  hook,
  extra_flag,
) => {
  if (!extra_flag.mother_id) {
    return await require('#/event/ero/ero-0')(hook, extra_flag);
  }
  const father = get_chara_talk(extra_flag.father_id),
    mother = get_chara_talk(extra_flag.mother_id),
    love = era.get(`love:${mother.id || father.id}`),
    unexpected_pregnant = new LifeEventMarks(mother.id).unexpected_pregnant;
  era.drawLine();
  if (love >= 90) {
    await common_pregnant_report_in_love(father, mother, unexpected_pregnant);
  } else {
    await print_event_name('意外', mother);
    await era.printAndWait([
      mother.get_colored_name(),
      ' 脸色煞白地看着 ',
      ...(era.get(`mark:${mother.id}:淫纹`) === 3
        ? [
            {
              content: '小腹淫纹上代表怀孕的图案',
              color: buff_colors[2],
            },
            '，冲到卫生间呕吐了起来。',
          ]
        : [
            { content: '手上的验孕棒', color: buff_colors[2] },
            '，又一次在洗手台上吐了出来。',
          ]),
    ]);
    if (unexpected_pregnant === unexpected_pregnant_enum.mother_sleep) {
      await era.printAndWait([
        mother.get_colored_name(),
        ' 对自己如何怀孕完全没有印象，虽然难以相信犯人会是 ',
        father.get_colored_name(),
        '，但想来只有 ',
        father.get_colored_name(),
        ' 有这个可能……',
      ]);
    }
    if (era.get(`mark:${mother.id}:同心`) >= 2) {
      await era.printAndWait([
        '之后，',
        mother.get_colored_name(),
        ' 战战兢兢地向 ',
        father.get_colored_name(),
        ' 说出了怀孕的事。',
      ]);
      await era.printAndWait([
        father.get_colored_name(),
        ' 似乎看到了 ',
        mother.get_colored_name(),
        ' 的眼角泛泪……',
      ]);
      await era.printAndWait([
        mother.get_colored_name(),
        ' 胆怯地请求 ',
        father.get_colored_name(),
        ' 负起父亲的责任……',
      ]);
    } else {
      await era.printAndWait([
        '之后，',
        mother.get_colored_name(),
        ' 冷淡地向 ',
        father.get_colored_name(),
        ' 说出了怀孕的事。',
      ]);
      await era.printAndWait([
        father.get_colored_name(),
        ' 似乎看到了 ',
        mother.get_colored_name(),
        ' 的眼角泛泪……',
      ]);
      await era.printAndWait([
        mother.get_colored_name(),
        ' 愤恨地要求 ',
        father.get_colored_name(),
        ' 负起父亲的责任……',
      ]);
    }
  }
};

/**
 * @param _
 * @param {HookArg} hook
 * @param {{child_id:number}} extra_flag character id of the child
 */
handlers[ero_hooks.have_baby] = async (_, hook, extra_flag) => {
  const father = get_chara_talk(
      era.get(`cflag:${extra_flag.child_id}:父方角色`),
    ),
    mother = get_chara_talk(era.get(`cflag:${extra_flag.child_id}:母方角色`));
  if (!mother.id) {
    return await require('#/event/ero/ero-0')(hook, {
      child_id: extra_flag.child_id,
      father,
    });
  }
  if (era.get(`love:${mother.id || father.id}`) < 90) {
    era.drawLine();
    await print_event_name('新生命', mother);
    if (era.get(`mark:${mother.id}:同心`) >= 2) {
      await era.printAndWait([
        mother.get_colored_name(),
        ' 闪闪缩缩地看向 ',
        father.get_colored_name(),
        '，似乎是不知道应该怎么看待孩子的父亲。',
      ]);
    } else {
      await era.printAndWait([
        mother.get_colored_name(),
        ' 看向 ',
        father.get_colored_name(),
        ' 的眼神十分空虚，却对孩子露出了关爱的神情。',
      ]);
    }
    era.println();
  }
};

/** @param {number} chara_id */
handlers[ero_hooks.shop_start] = async (chara_id) => {
  era.drawLine();
  const chara = get_chara_talk(chara_id),
    me = get_chara_talk(0);
  if (!sys_check_awake(chara_id)) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' 沉睡着，对 ',
      me.get_colored_name(),
      ` 将要对${chara.sex}做的事情丝毫不觉……`,
    ]);
  } else if (era.get(`mark:${chara_id}:反抗刻印`)) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' 冷冷地看着 ',
      me.get_colored_name(),
      '，眼中只有愤恨……',
    ]);
  } else if (era.get('flag:惩戒力度') >= 2) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' 挑衅地看着 ',
      me.get_colored_name(),
      '，区区性奴还能搞出什么花样……',
    ]);
  } else if (
    era.get(`mark:${chara_id}:淫纹`) ||
    era.get(`mark:${chara_id}:欢愉`)
  ) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' 跃跃欲试地看着 ',
      me.get_colored_name(),
      '，等不及让自己发生什么变化……',
    ]);
  } else if (era.get(`mark:${chara_id}:同心`) >= 2) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' 怯生生地看着 ',
      me.get_colored_name(),
      '，不明白为什么要这么做……',
    ]);
  } else {
    await era.printAndWait([
      chara.get_colored_name(),
      ' 不安地看着 ',
      me.get_colored_name(),
      '，不知道接下来将会发生什么……',
    ]);
  }
};

/**
 * @param {number} chara_id
 * @param {HookArg} hook
 * @param {{hate_clear:number,mark_clear:number,pleasure_delta:number,sex_delta:number,skill:number,talent:number}} extra_flag
 */
handlers[ero_hooks.shop_end] = async (chara_id, hook, extra_flag) => {
  if (extra_flag.skill || extra_flag.talent) {
    era.drawLine();
    const chara = get_chara_talk(chara_id),
      me = get_chara_talk(0);
    if (!sys_check_awake(chara_id)) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 沉睡着，对 ',
        me.get_colored_name(),
        ` 对${chara.sex}做的事情丝毫不觉……`,
      ]);
    } else if (era.get(`mark:${chara_id}:反抗`)) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 忍受着身体的变化，对 ',
        me.get_colored_name(),
        ` 把${chara.sex}当作性玩具肆意摆弄的行为出言讥讽……`,
      ]);
      hook.arg = 1;
    } else if (
      era.get(`mark:${chara_id}:淫纹`) ||
      era.get(`mark:${chara_id}:欢愉`)
    ) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 感受着身体的变化，忍不住想和 ',
        me.get_colored_name(),
        ' 一起享受欢愉……',
      ]);
      hook.arg = 2;
    } else if (era.get(`mark:${chara_id}:同心`) >= 2) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 看着 ',
        me.get_colored_name(),
        ' 泫然欲涕，但意识总有一天会被身体潜移默化地改变……',
      ]);
      hook.arg = 3;
    } else {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 失望地看着 ',
        me.get_colored_name(),
        '，对 ',
        me.get_colored_name(),
        ` 不满意${chara.sex}身体的事实感到悲伤……`,
      ]);
      hook.arg = 4;
    }
  }
};

/**
 * @param {number} chara_id
 * @param {HookArg} hook
 * @param {{[attacker]:number,[defender]:number,[shown]:boolean}} extra_flag
 * @returns {Promise<*>}
 */
module.exports = async (chara_id, hook, extra_flag) => {
  if (ero_action_names[hook.hook]) {
    const { attacker, defender } = get_participants_and_first_action(
      chara_id,
      hook,
      extra_flag,
    );
    const aim_handler =
      (sys_check_awake(defender) ? handlers : sleep_handlers)[hook.hook] ||
      handlers[hook.hook];
    if (aim_handler) {
      await aim_handler(
        get_chara_talk(attacker),
        get_chara_talk(defender),
        hook,
        extra_flag,
      );
    } else {
      era.print([
        '【',
        get_chara_talk(attacker).get_colored_name(),
        ' 对 ',
        get_chara_talk(defender).get_colored_name(),
        hook.arg ? ' ' : ' 继续 ',
        ero_action_names[hook.hook],
        '……】',
      ]);
    }
  } else if (handlers[hook.hook]) {
    return await handlers[hook.hook](chara_id, hook, extra_flag);
  }
};
