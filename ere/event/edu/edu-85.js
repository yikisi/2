const era = require('#/era-electron');

const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');
const {
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const {
  get_chara_talk,
  say_by_passer_by,
} = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { attr_enum } = require('#/data/train-const');

/** @type {Record<string,function(HookArg,*,EventObject):Promise<*>>} */
const handlers = {};

handlers[
  event_hooks.race_start
] = require('#/event/edu/edu-events-85/race-start');

handlers[event_hooks.race_end] = require('#/event/edu/edu-events-85/race-end');

handlers[
  event_hooks.week_start
] = require('#/event/edu/edu-events-85/week-start');

handlers[
  event_hooks.crazy_fan_end
] = require('#/event/edu/edu-events-85/crazy-fan-end');

handlers[event_hooks.out_shopping] = async (hook, __, event_object) => {
  const relation = era.get('relation:85:0');
  if (era.get('flag:当前互动角色') !== 85) {
    add_event(hook.hook, event_object);
    return;
  }
  const ruby = get_chara_talk(85);
  const edu_event_marks = new EduEventMarks(85);
  if (edu_event_marks.get('shopping_together') === 1) {
    edu_event_marks.add('shopping_together');
    await print_event_name('一起去商店', ruby);
    await era.printAndWait(
      `商店的招牌都是放在屋顶上的，人们在其中进进出出，如同蜜蜂一般。`,
    );
    await era.printAndWait(
      `你牵着${ruby.name}的手，走在喧嚣的街道上，思考着应该回学校还是去酒店。`,
    );
    await era.printAndWait(`自己得不出答案，那就看爱马的意思。`);
    if (relation > 151) {
      era.printButton(`要不要抱着或背着？`, 1);
      await era.input();
      await ruby.say_and_wait(`…背我。`);
      await era.printAndWait(`你很乐意。`);
      await era.printAndWait(
        `尚未成年的，身材娇小的${ruby.name}，很轻易就背起来了。`,
      );
      await era.printAndWait(
        `${ruby.name}趴在你的背上，歪着脑袋看着你的侧脸。`,
      );
      await era.printAndWait(`没有说话。`);
      await era.printAndWait(`甚至表情也没有变化。`);
      await era.printAndWait(`只是那双美丽的眼睛里，充满无限柔情。`);
      sys_like_chara(85, 0, 50);
      sys_love_uma(85, 5) && (await era.waitAnyKey());
    } else {
      await era.printAndWait(`${ruby.name}有点心动，但最后还是表示回学校。`);
    }
  }
};

handlers[event_hooks.out_start] = async (hook, _, event_object) => {
  if (era.get('flag:当前互动角色') !== 85) {
    add_event(hook.hook, event_object);
    return;
  }
  const ruby = get_chara_talk(85);
  const event_marks = new EduEventMarks(85);
  if (event_marks.get('hot_spring_event') === 1) {
    event_marks.add('hot_spring_event');
    await print_event_name('温泉旅行', ruby);
    await era.printAndWait(`这是你和露比赢下来种种比赛的某一天——`);
    await era.printAndWait(
      `你打开笔记本确认事项时，一张有点眼熟的东西飘到了地上。`,
    );
    await era.printAndWait(`捡起一看，是温泉旅行券。`);
    await ruby.say_and_wait(`是刚迈入古典级，去商店街参加的那次抽奖抽到的吧。`);
    await era.printAndWait(
      `那时候，你说「要等自己成为像${ruby.name}一样出色的存在，再一起用这张券。」`,
    );
    await ruby.say_and_wait(
      `现在，既然它再次出现在了我们面前，也就是说是时候了。`,
    );
    await ruby.say_and_wait(`正好最近没有什么大型比赛，不如我们去旅行吧？`);
    era.printButton(`我还没完成约定哦。`, 1);
    await era.input();
    await ruby.say_and_wait(`……`);
    await ruby.say_and_wait(`失陪一下。`);
    await era.printAndWait(`露比转身掏出手机。`);
    await ruby.say_and_wait(`对，是我。请现在立刻派辆车到学校来。`);
    era.printButton(`露比？？？`, 1);
    await era.input();
    await ruby.say_and_wait(`那么——跟我来吧。`);
    await era.printAndWait(
      `${ruby.name}带你来到了能用得上那张温泉旅行券的旅馆。`,
    );
    await ruby.say_and_wait(`最近您一直在工作，没有休息。我全都看在眼里。`);
    await ruby.say_and_wait(`希望你能借此机会转换心情，养精蓄锐。`);
    await ruby.say_and_wait(`那么我就先失陪了。`);
    era.printButton(`对于一直在努力的你来说，休息是很有必要的。`, 1);
    era.printButton(`我觉得你更需要休息。`, 2);
    await era.input();
    await ruby.say_and_wait(`呼……`);
    await ruby.say_and_wait(`这次就听你的吧。`);
    era.drawLine({ content: '泡完温泉' });
    era.printButton(`话说你为什么同意留下来了呢？`, 1);
    await era.input();
    await ruby.say_and_wait(`一时兴起。`);
    era.printButton(`真的假的`, 1);
    await era.input();
    await ruby.say_and_wait(`我凭一时的兴致做出的决定，有这么不可思议吗？`);
    era.printButton(`是的。`, 1);
    await era.input();
    await ruby.say_and_wait(`我当时并没有想太多。但是，我听到您的话后…`);
    await ruby.say_and_wait(`我觉得还是留下来陪您比较好，就答应了…仅此而已。`);
    await era.printAndWait(`露比没有说下去，也不打算说下去。`);
    await era.printAndWait(`这对你来说已经很足够了。`);
    era.printButton(`谢谢你，露比。`, 1);
    await era.input();
    await ruby.say_and_wait(`我觉得我并没有做什么值得您感谢的事情。`);
    await era.printAndWait(`准备在哪里感受和${ruby.name}不可替代的羁绊？`);
    era.printButton(`你的房间`, 1);
    era.printButton(`露比的房间`, 2);
    const ret3 = await era.input();
    if (ret3 === 1) {
      await quick_into_sex(85);
    } else {
      await quick_into_sex(85);
    }
  }
  return true;
};

handlers[event_hooks.out_station] = async (hook, __, event_object) => {
  if (era.get('flag:当前互动角色') !== 85) {
    add_event(hook.hook, event_object);
    return;
  }
  const ruby = get_chara_talk(85),
    me = get_chara_talk(0);
  if (event_object?.arg === 'wait_station') {
    await print_event_name('赴约', ruby);
    await era.printAndWait(`车站前，你朝着私服打扮的少女微笑地打招呼。`);
    await era.printAndWait(
      `离约好的时间还有十几分钟，看起来${ruby.name}已经等了一段时间了。`,
    );
    await era.printAndWait(`你粗略地打量了一番。`);
    await era.printAndWait(
      `${ruby.name}穿的圆领上衣，大方地露出精致的诱人锁骨。`,
    );
    await era.printAndWait(`下半身是长裙，群腰在上衣里，整个人显得气质闲适。`);
    await era.printAndWait(`露比见你打量自己，抬手捋了下耳边的头发。`);
    await ruby.say_and_wait(`很奇怪吗？`);
    era.printButton(`当然很可爱。`, 1);
    era.printButton(`有种清新俏丽的感觉。`, 2);
    await era.printAndWait(`你和${ruby.name}引来了周围一些人的瞩目。`);
    await era.printAndWait(
      `你有点受不了那种「如同看富佬包养未成年少女」的视线，好在${ruby.name}拉着你走进了车厢。`,
    );
  } else if (event_object?.arg === 'station') {
    await print_event_name('小宝宝本铺', ruby);
    await me.say_and_wait(`那么，这里是什么地方呢。`);
    await ruby.say_and_wait(`是的，是小宝宝本铺。`);
    await era.printAndWait(`周围有肚子略胀的女性，抱着小孩走路的夫妇等。`);
    await era.printAndWait([
      '都是比 ',
      me.get_couple_title(),
      ' 更适合来这家店的客人。',
    ]);
    await era.printAndWait([
      '在这里，',
      me.get_colored_name(),
      ' 和 ',
      ruby.get_colored_name(),
      ' 的存在明显是异质的。',
    ]);
    await ruby.say_and_wait(`通过书本能获取的知识是有限的。`);
    await ruby.say_and_wait(`希望通过实地检查来加深知识。`);
    await say_by_passer_by(`路人A`, [
      '喂，那个难道不是 ',
      ruby.get_colored_name(),
      ' 吗？',
    ]);
    await say_by_passer_by(`路人B`, `真的假的……那个华丽一族为什么在这里？`);
    await say_by_passer_by(
      `路人C`,
      `旁边的是训练员吧，两个人去那家店的话，难道是这种关系？`,
    );
    await era.printAndWait([
      '果然很显眼，不用说，',
      me.get_colored_name(),
      ' 和担当的身份已经暴露了。',
    ]);
    await ruby.say_and_wait(`仅是普通地访问，果然不合时宜，请帮助我。`);
    era.printButton(`伸出手。`, 1);
    await era.input();
    await era.printAndWait([
      '就这样，',
      ruby.get_colored_name(),
      ' 紧紧地抱住了那只手。',
    ]);
    await era.printAndWait(`这样的话，待在这里也不会有不协调的感觉了。`);
    await say_by_passer_by(`路人A`, `果然两个人已经是那种关系了……`);
    await say_by_passer_by(`路人B`, [
      '真的吗？那么，难道 ',
      ruby.get_colored_name(),
      ' 的肚子已经！？',
    ]);
    await say_by_passer_by(`路人C`, `那不是犯罪吗！`);
    await era.printAndWait([
      '之后，',
      me.get_colored_name(),
      ' 和 ',
      ruby.get_colored_name(),
      ' 在周围各种声音的环绕下，在母婴店逛了一段时间。',
    ]);
  }
};
handlers[event_hooks.office_study] = async (hook, __, event_object) => {
  if (era.get('flag:当前互动角色') !== 85) {
    add_event(hook.hook, event_object);
    return;
  }
  const ruby = get_chara_talk(85);
  const edu_event_marks = new EduEventMarks(85);
  if (edu_event_marks.get('rest_day') === 1) {
    edu_event_marks.add('rest_day');
    await print_event_name(
      `即使不在赛场上，${ruby.name}的优雅氛围也不会改变`,
      ruby,
    );
    era.printButton(`露比，今天没有家族的事吗？`, 1);
    await era.input();
    await ruby.say_and_wait(`是的，难得的休息日。`);
    await ruby.say_and_wait(`什么都不做浪费时间是愚蠢的，所以在努力学习。`);
    await era.printAndWait(`不愧是${ruby.sex}……但是，你感到了一种不协调感。`);
    await era.printAndWait(
      `桌上堆叠的杂志一样的东西，很难认为是学习用的书籍。`,
    );
    await ruby.say_and_wait(`您很在意呢。`);
    await era.printAndWait(`然后，${ruby.name}把书合上，将封面展示给你看。`);
    await era.printAndWait(`《太太俱乐部》`);
    await era.printAndWait(
      `上面大张旗鼓地写着：「开始准备生育时的必读刊物！」`,
    );
    await ruby.say_and_wait(
      `除了这本，还有《母亲之友》，《妈咪宝贝》…所有的情报杂志都准备好了。`,
    );
    await era.printAndWait(`${ruby.sex}的表情略显得意。`);
    await era.printAndWait(`而且，好几本书的页面上到处都是便签。`);
    await ruby.say_and_wait(`不久，你也会有需要这些知识的那一天吧。`);
    await ruby.say_and_wait(`那么，趁早掌握一点也不坏吧？`);
    await ruby.say_and_wait(`我挑选了自认为重要的部分，先从这些看起比较好。`);
    era.printButton(`…恭敬不如从命。`, 1);
    await era.input();
  }
  return true;
};

/**
 * @param {HookArg} hook
 * @param __
 * @param {EventObject} event_object
 */
handlers[event_hooks.week_end] = async (hook, __, event_object) => {
  const edu_weeks = era.get('cflag:85:育成回合计时');
  let wait_flag = false;
  const ruby = get_chara_talk(85);
  if (edu_weeks === 47 + 32) {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:85:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(hook.hook, event_object);
      return false;
    }
    await print_event_name('海边 得到的启示', ruby);
    await ruby.say_and_wait(
      `训练员${get_chara_talk(0).get_adult_sex_title()}。`,
    );
    await ruby.say_and_wait(`你，在我的速度中，发现了光辉？`);
    era.printButton(`是啊。`, 1);
    await era.input();
    await ruby.say_and_wait(`如果善用这个武器，我也能逼近…`);
    await ruby.say_and_wait(`如果用这双脚，能展现出最耀眼的光辉的话…`);
    await ruby.say_and_wait(`和选择的路线无冠，那血脉就流淌在这个身体里。`);
    await ruby.say_and_wait(`相信只有王道路线能绽放光辉，我也不过如此而已。`);
    await ruby.say_and_wait(`但是，你可以让我在那条道路外达成使命。`);
    await ruby.say_and_wait(`以最适合我的方式。`);
    await ruby.say_and_wait(`这个月辛苦您了。`);
    await ruby.say_and_wait(`我充分认识到，没有你我是无法前进的。`);
    await ruby.say_and_wait(`首先必须向家里传达决断。`);
    await ruby.say_and_wait(`之后，还请继续多多指教。`);
    const attr_change = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (attr_change[e] = 5));
    wait_flag = get_attr_and_print_in_event(85, attr_change, 0) || wait_flag;
  } else if (edu_weeks === 95 + 32) {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:85:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(hook.hook, event_object);
      return false;
    }
    await print_event_name('海边 夏季合宿结束', ruby);
    await ruby.say_and_wait(`为了使命，应有奉献自身的觉悟。`);
    era.printButton(`奉献？`, 1);
    await era.input();
    await ruby.say_and_wait(`凯斯奇迹同学是对的，我……`);
    era.printButton(`真的是对的吗？`, 1);
    await era.input();
    await ruby.say_and_wait(`诶？`);
    era.printButton(`${ruby.name}，你觉得凯斯奇迹这样就好了吗？`, 1);
    await era.input();
    await ruby.say_and_wait(`！`);
    await ruby.say_and_wait(`……`);
    await era.printAndWait(`${ruby.name}陷入了沉思。`);
    await era.printAndWait(
      `\n晚上，先室友一步回到寝室的${ruby.name}正喃喃自语。`,
    );
    await ruby.say_and_wait(`我们，很像…`);
    await ruby.say_and_wait(`血脉、‘奇迹’，赋予了我们使命和有目共睹的才能。`);
    await ruby.say_and_wait(`但有一定的不同，那是……`);
    await ruby.say_and_wait(`奇迹同学，你的前路…`);
    await ruby.say_and_wait(`以那种脚步前进，未来只会…`);
    await ruby.say_and_wait(`奇迹同学${ruby.sex}自己，觉得这样就好了吗？`);
    await ruby.say_and_wait(`真的是对的嘛？`, true);
    await ruby.say_and_wait(`你觉得凯斯奇迹这样就好了吗？`, true);
    await ruby.say_and_wait(`不可能好。`);
    await ruby.say_and_wait(`我，不能允许…`);
    await era.printAndWait(`夏天的集训，在不安中结束了。`);
    const attr_change = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (attr_change[e] = 5));
    wait_flag = get_attr_and_print_in_event(85, attr_change, 0) || wait_flag;
  }
  wait_flag && (await era.waitAnyKey());
};

handlers[event_hooks.out_church] = async (hook, __, event_object) => {
  if (era.get('flag:当前互动角色') !== 85) {
    add_event(hook.hook, event_object);
    return;
  }
  const me = get_chara_talk(0),
    edu_weeks = era.get('cflag:85:育成回合计时');
  const ruby = get_chara_talk(85);
  if (edu_weeks === 47 + 1) {
    await print_event_name('新年参拜', ruby);
    await ruby.say_and_wait(`祝您新年快乐。`);
    era.printButton(`新年快乐。`, 1);
    await era.input();
    await ruby.say_and_wait(`多亏了训练员你，我平安地迎来了新的一年。`);
    await ruby.say_and_wait(
      `接下来，要在母亲大人胜利的和未能胜利的比赛上留下满意的结果…`,
    );
    await me.say_and_wait(`是要为母亲雪辱啊。`, true);
    await ruby.say_and_wait(`现在，可以断言脚的不安已经完全消除了。`);
    await ruby.say_and_wait(`我希望能参加一场樱花赏的前哨战，向您证明。`);
    await era.printAndWait(
      `想做的事被提前说了…不过，能和担当目标相同是件好事。`,
    );
    await ruby.say_and_wait(`今年，也请多多指教。`);
    era.printButton(`尽管交给我吧。`, 1);
    await era.input();
    await ruby.say_and_wait(`嗯。`);
    era.printButton(`不过，露比之后应该还要去和其他人打招呼吧？`, 1);
    await era.input();
    await era.printAndWait(
      `不难想象，作为财政界声名远播的一族的末裔，年初会很忙碌。`,
    );
    await ruby.say_and_wait(`不。`);
    await ruby.say_and_wait(`家族的各位已经打点完毕了。`);
    await ruby.say_and_wait(`如果真的有需要，会再联络我。`);
    await era.printAndWait(`也就是说，现在很有空。`);
    await ruby.say_and_wait(`那么，我准备进行自主练习。`);
    await ruby.say_and_wait(`已经打过招呼，我先走了。`);
    await era.printAndWait(`等等——`);
    await era.printAndWait(`新年伊始果然还是希望担当能休息片刻，你想到的是……`);
    era.printButton(`新春试笔。`, 1);
    era.printButton(`吃过年夜饭了吗？`, 2);
    era.printButton(`让我们进入派对时间！`, 3);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await era.printAndWait(
        `突然提起试笔，是因为你挺喜欢某东方古国贴春联的习俗的。`,
      );
      await ruby.say_and_wait(`意外…`);
      await era.printAndWait(`${ruby.name}的字很清秀，可以说得上漂亮。`);
      await era.printAndWait(
        `但与你师从某10亿人口国家的国家级书法家的字迹比，依旧有些相形见绌。`,
      );
      await ruby.say_and_wait(
        `训练员${get_chara_talk(0).get_adult_sex_title()}，请指导我。`,
      );
      await era.printAndWait(
        `${ruby.get_uma_sex_title()}天生的不服输精神真是哪里都看得到啊。`,
      );
      await era.printAndWait(
        `如此感慨的你，决定先从纠正握笔的姿势开始，从身后包住了${ruby.name}的小手。`,
      );
      await era.printAndWait(`你和${ruby.name}度过了饱含文化交流的愉悦午后。`);
      get_attr_and_print_in_event(85, [20, 0, 0, 0, 0], 0) &&
        (await era.waitAnyKey());
    } else if (ret1 === 2) {
      await ruby.say_and_wait(`……`);
      await ruby.say_and_wait(`晚上，家主会在第一家的宅邸设宴。`);
      await ruby.say_and_wait(`您能出席的话就再好不过了。`);
      await ruby.say_and_wait(`请安心，是华丽一族内部的晚宴。`);
      await ruby.say_and_wait(`去和母亲大人打个招呼吧？`);
      await era.printAndWait(`跟你预想的不同，享受了轻松的宴会时间。`);
      sys_change_attr_and_print(85, '体力', 200) && (await era.waitAnyKey());
    } else {
      await ruby.say_and_wait(`噗，呵呵。`);
      await ruby.say_and_wait(`只有我们两个人，也要开派对吗？`);
      await era.printAndWait(`不知为何，${ruby.name}笑的很开心。`);
      await ruby.say_and_wait(
        `好啊，遗憾的是和‘太阳’不同，我在这方面没有涉猎。`,
      );
      await ruby.say_and_wait(`就有劳您让我享受一番了？`);
      await era.printAndWait(`你和${ruby.name}度过了愉快的一天。`);
      get_attr_and_print_in_event(85, [0, 0, 0, 0, 0], 20) &&
        (await era.waitAnyKey());
    }
    era.set('cflag:85:节日事件标记', 0);
  } else if (edu_weeks === 95 + 1) {
    await print_event_name('新年参拜', ruby);
    await ruby.say_and_wait(`受到关注，并不会有问题。`);
    await era.printAndWait(
      `新年年初，${ruby.name}就来到${me.actual_name}的训练员室。`,
    );
    await era.printAndWait(
      `你本以为${ruby.sex}会更忙一些的，但心里还是很高兴。`,
    );
    await era.printAndWait(`打过招呼后，${ruby.sex}说的话果然依旧凛然。`);
    await ruby.say_and_wait(`在这段时间里，我们把该做的事做好就行了。`);
    await ruby.say_and_wait(
      `训练员${get_chara_talk(0).get_adult_sex_title()}，是怎么想的？`,
    );
    era.printButton(`要掌握速度……吧。`, 1);
    await era.input();
    await era.printAndWait(`对${ruby.sex}来说，天生就受到速度的眷顾。`);
    await era.printAndWait(
      `${ruby.sex}的脚经过磨砺后，定能绽放出光辉，成为一族最耀眼的存在。`,
    );
    await ruby.say_and_wait(`是的。我，不会再违背您的期待。`);
    await era.printAndWait(
      `又是年初就神经紧绷，你想做些什么让${ruby.name}放松一下……`,
    );
    era.printButton(`寻找新的正月料理`, 1);
    era.printButton(`在附近的神社祈祷成长`, 2);
    era.printButton(`让我们进入派对时间！Lv2！`, 3);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await ruby.say_and_wait(`哈啊…`);
      await ruby.say_and_wait(`虽然我有心里准备，还真是意义不明呢。`);
      await era.printAndWait(
        `你和${ruby.name}在训练员室尝试了各种料理，度过了充实的一天。`,
      );
      get_attr_and_print_in_event(
        85,
        [0, 0, 0, 0, 0],
        0,
        JSON.parse('{"体力":300}'),
      ) && (await era.waitAnyKey());
    } else if (ret1 === 2) {
      await ruby.say_and_wait(
        `训练员${get_chara_talk(0).get_adult_sex_title()}……`,
      );
      era.printButton(`别误会，我就是喜欢小的。`, 1);
      era.printButton(`别误会，我是说身体能力的成长。`, 2);
      const ret2 = await era.input();
      if (ret2 === 1) {
        sys_love_uma(85, 1);
        sys_like_chara(85, 0, -5) && (await era.waitAnyKey());
      } else {
        sys_like_chara(85, 0, 5) && (await era.waitAnyKey());
      }
      await ruby.say_and_wait(`……`);
      await ruby.say_and_wait(`之后在校门口集合吧，我去换身衣服。`);
      await era.printAndWait(`和服适合贫乳穿，好像是真的。`);
      await era.printAndWait(`但你确信，是${ruby.name}驾驭了这身华丽的衣装。`);
      await era.printAndWait(`头上别的山茶花很漂亮，但也不如少女自身动人。`);
      await era.printAndWait(`衣服上的是……牵牛花啊。`);
      await ruby.say_and_wait(`爱情、和你紧紧相依`, true);
      get_attr_and_print_in_event(85, [8, 8, 8, 8, 8], 0) &&
        (await era.waitAnyKey());
    } else {
      await era.printAndWait(`为什么是Lv2呢？`);
      await era.printAndWait(
        `为了不让担当失望，你特地向大拓太阳神请教了派对的技巧。`,
      );
      await ruby.say_and_wait(`吵闹过头了。`);
      await era.printAndWait(`得到了大小姐笑着给出的不留情面的评价。`);
      get_attr_and_print_in_event(85, [0, 0, 0, 0, 0], 35) &&
        (await era.waitAnyKey());
    }
    era.set('cflag:85:节日事件标记', 0);
  }
  return true;
};

/**
 * 第一红宝石的育成事件
 *
 * @author 梦露
 *
 * @param {HookArg} hook
 * @param {*} extra_flag
 * @param {EventObject} event_object
 * @returns {Promise<*>}
 */
module.exports = async (hook, extra_flag, event_object) => {
  if (!handlers[hook.hook]) {
    throw new Error();
  }
  return await handlers[hook.hook](hook, extra_flag, event_object);
};
