const era = require('#/era-electron');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const KitaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-68');
const event_hooks = require('#/data/event/event-hooks');
const { attr_names, fumble_result, attr_enum } = require('#/data/train-const');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { buff_colors } = require('#/data/color-const');

const handlers = {};

handlers[
  event_hooks.week_start
] = require('#/event/edu/edu-events-68/week-start');

handlers[event_hooks.week_end] = require('#/event/edu/edu-events-68/week-end');

handlers[event_hooks.crazy_fan_end] = async () => {
  const kita = get_chara_talk(68),
    me = get_chara_talk(0);
  if (new KitaEduMarks().crazy_fan) {
    await kita.say_and_wait(`抱歉，训练员${me.get_adult_sex_title()}。`);
    await era.printAndWait(
      `站在返回家乡的车站，${kita.name} 对 ${me.name} 深深地鞠了一躬。`,
    );
    await era.printAndWait(
      `以往活泼的${kita.get_teen_sex_title()}此时面色苍白，眼袋肉眼可见的红肿起来，似乎是哭过的样子。`,
    );
    await era.printAndWait(
      `因为比赛失败的原因，愤怒的粉丝为此冲击了校园，希望把 ${me.name} 这个“罪魁祸首”处刑掉。`,
    );
    await era.printAndWait(
      '虽然最后这件事莫名平静了下来，但是小北已经不能够继续在特雷森学园训练了。',
    );
    era.println();
    era.printButton(`「对不起，小北。」`, 1);
    await era.input();
    await kita.say_and_wait(
      `不，应该是我对不起您才对，训练员${me.get_adult_sex_title()}是什么错也没有的。`,
    );
    await era.printAndWait(
      `露出惨淡的微笑，${kita.name} 忍不住又一次流下泪来。`,
    );
    await era.printAndWait(
      `在这短短的几天里，${kita.get_teen_sex_title()}到底哭泣过多少次了呢。`,
    );
    await kita.say_and_wait(
      `果然，小北我并不是什么能够胜利的赛${kita.get_uma_sex_title()}呢。`,
    );
    await kita.say_and_wait(
      '样貌普普通通，只有结实这一个优点，真是对不起，耽误了您这么长的时间。',
    );
    await kita.say_and_wait(
      `我会负起责任的，再见了，训练员${me.get_adult_sex_title()}。`,
    );
    await era.printAndWait(
      `登上归乡的巴士，${kita.name} 在嗡嗡作响的手机上说了一句话。`,
    );
    await era.printAndWait(`那声音被风儿吹散，未能传进 ${me.name} 的耳中。`);
    await era.printAndWait(`但在之后，有关 ${kita.name} 的热度莫名的消退。`);
    await era.printAndWait(
      `${me.name} 的训练员生涯中就像是从没有过 ${kita.name} 出现过一样，正常的继续了下去。`,
    );
    await era.printAndWait(
      `但偶尔，${
        me.name
      } 还是会想起那个${kita.get_teen_sex_title()}转身时，那脆弱而苍白的背影。`,
    );
    await print_event_name(
      [
        {
          content: `归乡的 ${kita.name}`,
          color: buff_colors[3],
        },
      ],
      kita,
    );
  } else if (era.get('love:68') < 75 && era.get('relation:68:0') > 75) {
    await era.printAndWait(`在 ${kita.name} 毕业之后过了多久呢。`);
    await era.printAndWait(
      `时间已经记得不太清了，在那位黑色的${me.get_teen_sex_title()}离开之后，${
        me.name
      } 一如既往地像个训练员一样工作。`,
    );
    await era.printAndWait(
      `成为新的孩子的训练员，用稍微有点鬼畜的手段进行训练。`,
    );
    await era.printAndWait(`最后目送着孩子们在三年后离开。`);
    await era.printAndWait(
      `有些孩子会偶尔进行通讯，有些则不会，但是每年一如既往地，${kita.name} 会在你也有时间的时候打电话给你。`,
    );
    await kita.say_and_wait(
      `训练员${me.get_adult_sex_title()}，最近过得怎么样呢？`,
    );
    await kita.say_and_wait(
      `新的担当么？会不会很累？毕竟仔细想想的话，小北我那个时候不是一般的听话呢～`,
    );
    await kita.say_and_wait(
      `我这边么？啊～我在准备演歌手的出道，诶嘿嘿～毕竟父亲大人他年纪也大了嘛。`,
    );
    await era.printAndWait(
      `就这样闲聊着彼此最近的生活，分享着有趣的故事，讨论着那三年的时光。`,
    );
    await era.printAndWait(
      `${kita.name} 嘿嘿笑着同 ${me.name} 互相道着祝贺起彼此，像是往常一样结束了通话。`,
    );
    await me.say_and_wait(`这样就好。`);
    await me.say_and_wait(`这样就可以了。`);
    await print_event_name(
      [
        {
          content: `训练员${me.get_adult_sex_title()}，最近还好么！`,
          color: buff_colors[3],
        },
      ],
      kita,
    );
  } else {
    throw new Error();
  }
};

handlers[event_hooks.race_end] = require('#/event/edu/edu-events-68/race-end');

/**
 * @param {HookArg} hook
 * @param {{train:number,stamina_ratio:number}} extra_flag
 */
handlers[event_hooks.train_success] = async (hook, extra_flag) => {
  const kita = get_chara_talk(68),
    me = get_chara_talk(0);
  era.print(`${kita.name} 的 ${attr_names[extra_flag.train]} 训练顺利成功了……`);
  if (Math.random() < 0.2 * extra_flag.stamina_ratio) {
    era.println();
    await print_event_name('额外自主训练！', kita);
    await era.printAndWait(`训练结束后，${kita.name} 似乎仍有些意犹未尽。`);
    await era.printAndWait(
      `${kita.sex}远远向天边望去，夕阳正在垂落，最后的光芒洒落大地。`,
    );
    await era.printAndWait(`天马上就要黑了，但是还不够，还没有到达极限。`);
    era.printButton('「继续训练吧！」', 1);
    era.printButton('「今天就到此为止吧。」', 2);
    hook.arg = (await era.input()) === 1;
    if (hook.arg) {
      await kita.say_and_wait(
        `明白了！那么训练员${me.get_adult_sex_title()}请看好哦！`,
      );
    } else {
      await kita.say_and_wait(`这样么，好～那么就好好休息明天再锻炼吧！`);
    }
  }
};

/**
 * @param {HookArg} hook
 * @param {{args:*,fumble:boolean,train:number}} extra_flag
 */
handlers[event_hooks.train_fail] = async (hook, extra_flag) => {
  const kita = get_chara_talk(68),
    me = get_chara_talk(0);
  if (extra_flag.train !== attr_enum.intelligence) {
    extra_flag['args'] = extra_flag.fumble
      ? fumble_result.fumble
      : fumble_result.fail;
    if (extra_flag.fumble) {
      await print_event_name('严禁逞强！', kita);
      await kita.say_and_wait(`好痛啊……这次的好像真的有点严重了……`);
      await era.printAndWait(
        `${kita.name} 坐在保健室的床上，捂住腰，露出了十分扭曲的表情。`,
      );
      await era.printAndWait(
        `看来今天只能休息了呢，${me.name} 如此告知 ${kita.name}。`,
      );
      await kita.say_and_wait(
        `诶，休息么？可是……这个时候的大家都在训练，对吧…？`,
      );
      await kita.say_and_wait(
        `让我……休息真的好么？就算是比较轻松的训练也好，我不太想要休息啊……`,
      );
      await era.printAndWait(
        `${me.name} 看向小北身上肿起的地方，不管怎么样，这都只能休息了，不如说不休息问题反而会更加严重……`,
      );
      await kita.say_and_wait(
        `说的也是……那我也只能收拾一下心情，好好的休息了……`,
      );
      await era.printAndWait(
        `${kita.name} 有些落寞地躺进被子里，呆呆的望着天花板。`,
      );
      await kita.say_and_wait(`保健室，原来是这么安静的地方啊……有点寂寞呢……`);
    } else {
      await print_event_name('保重身体！', kita);
      await kita.say_and_wait(`痛痛痛痛……扭伤了啊……`);
      await era.printAndWait(
        `坐在保健室的椅子上，${kita.name} 伸手轻轻戳着缠绕在脚腕上的膏药贴，不甘心的嘟起了嘴。`,
      );
      await era.printAndWait(
        `看来今天只能休息了呢，${me.name} 如此告知 ${kita.name}。`,
      );
      await kita.say_and_wait(`休息么……真不甘心啊……`);
      await kita.say_and_wait(
        `但是既然训练员${me.get_adult_sex_title()}这么说了，也只能这样了……`,
      );
      await era.printAndWait(
        `${kita.name} 翻身用被子包裹住了自己，闭上眼开始睡觉了。`,
      );
    }
    hook.arg = 0;
  }
};

handlers[event_hooks.back_school] = async (_, __, event_object) => {
  const cur_chara_id = era.get('flag:当前互动角色');
  if (cur_chara_id && cur_chara_id !== 68) {
    add_event(event_hooks.back_school, event_object);
    return;
  }
  const event_marks = new KitaEduMarks(),
    kita = get_chara_talk(68),
    me = get_chara_talk(0);
  if (event_marks.kitasan_touch === 1) {
    event_marks.kitasan_touch++;
    await print_event_name('紧急开店·小北按摩！', kita);

    await kita.say_and_wait(
      `训练员${me.get_adult_sex_title()}！欢迎光临小北按摩店！`,
    );
    await era.printAndWait(
      `推开训练员室的门，${me.name} 看到穿着和服的 ${kita.name} 正跪在门后，而身后的训练员室的桌子则被铺上了一块白布。`,
    );
    await era.printAndWait(
      `这是在干什么啊……${
        me.name
      } 目瞪口呆的看着今天应该没有训练任务的${kita.get_teen_sex_title()}。`,
    );
    await kita.say_and_wait(
      `嘿嘿嘿～为了感谢训练员${me.get_adult_sex_title()}对人家的照顾，也是您最近身体总是嘎吱嘎吱的响。`,
    );
    await kita.say_and_wait(
      `所以……唔，是呢，今天的小北是为您提供临时按摩服务，让训练员${me.get_adult_sex_title()}放松身体的按摩${
        kita.sex_code - 1 ? '女将' : '大将'
      }小北哦！`,
    );
    await era.printAndWait(
      '说着，小北将额头垂下紧紧贴地，三指并拢在额前，露出自己光滑而娇嫩的后背。',
    );
    await era.printAndWait(
      `${
        me.name
      } 这时才注意到小北穿的是一件近似肚兜的露背服，只要附身就能看到${kita.get_uma_sex_title()}背后外溢的春光。`,
    );
    era.printButton('「不不不这再怎么说也不对劲吧……」', 1);
    era.printButton('「那么就麻烦小北了」', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(
        `${me.name} 后腿几步想要逃离，可是嘎嘣的一声脆响和脊椎的感觉让 ${me.name} 痛苦的垂下腰。`,
      );
      await era.printAndWait(
        `……不行了，只能接受小北的服务了……不然就算小北不放过 ${me.name}，这老腰也不会放过的……`,
      );
      await era.printAndWait(`${me.name} 重新转过身，踉跄着向小北走去。`);
      era.drawLine();
      await era.printAndWait(
        '尽管身体各处传来了嘎吱嘎吱的声响，但除了偶尔的疼痛之外只有舒服的感觉。',
      );
      await era.printAndWait(
        `疲惫的身体在小北的手指下变得轻松起来，那温柔而有力的按摩仿佛将身体都治愈了，不愧是小北……带着这样的感想，昏昏欲睡的 ${me.name} 就这么睡了过去。`,
      );
    } else {
      await era.printAndWait(
        `${kita.name} 对着训练员露出温婉的微笑，仿佛母狗般四足跪爬着引导 ${me.name} 脱下衣服，趴在拼接而成的桌子上。`,
      );
      await era.printAndWait(
        `这孩子到底是和谁学的啊……？${
          me.name
        } 露出疑惑的表情，感受着${kita.get_teen_sex_title()}起身骑跨在 ${
          me.name
        } 后背上。`,
      );
      await era.printAndWait(
        `在等待了半分钟后，${kita.name} 纤细有力的手指在 ${me.name} 背后摁压起紧绷的地方。`,
      );
      await kita.say_and_wait(
        `训练员${me.get_adult_sex_title()}的身体，好紧绷呢……您和${kita.get_uma_sex_title()}不一样，身体要好好的修养哦。`,
      );
      await era.printAndWait(
        '尽管身体各处传来了嘎吱嘎吱的声响，但除了偶尔的疼痛之外只有舒服的感觉。',
      );
      await era.printAndWait(
        `疲惫的身体在小北的手指下变得轻松起来，那温柔而有力的按摩仿佛将身体都治愈了，不愧是小北……带着这样的感想，昏昏欲睡的 ${me.name} 就这么睡了过去。`,
      );
    }
    era.println();
    sys_like_chara(68, 0, 100) && (await era.waitAnyKey());
  }
};

/**
 * @param {HookArg} hook
 * @param __
 * @param {EventObject} event_object
 */
handlers[event_hooks.school_atrium] = async (hook, __, event_object) => {
  if (era.get('flag:当前互动角色') !== 68) {
    add_event(hook.hook, event_object);
    return;
  }
  const kita = get_chara_talk(68),
    me = get_chara_talk(0),
    edu_weeks = era.get('flag:当前回合数') - era.get('cflag:68:育成回合计时');
  if (edu_weeks === 42) {
    await print_event_name('悠闲的午后时光', kita);
    await era.printAndWait(
      `在没有课也没有训练计划的某个下午，${me.name} 在食堂旁的侧门处找到了小北。`,
    );
    await kita.say_and_wait(`啊～训练员${me.get_adult_sex_title()}中午好。`);
    await era.printAndWait(
      `小北搬着两箱罐装汽水，尾巴左摇右晃的向这边打了个招呼。`,
    );
    await era.printAndWait(
      `${
        me.name
      } 看到在${kita.get_teen_sex_title()}背后，食堂原本关闭的侧门正被木棍撑住，而七八箱汽水在旁边堆成了小山……这是在干什么啊。`,
    );
    await kita.say_and_wait(
      '啊，这个是食堂小卖部的阿姨搬汽水扭到了腰，所以我想帮她把箱子都搬进去。',
    );
    await kita.say_and_wait(
      `诶嘿嘿……被训练员${me.get_adult_sex_title()}看到了其他的样子，有点害羞呢……`,
    );
    await era.printAndWait(
      `看着 ${me.name} 惊讶的样子，${kita.name}害羞的嘿嘿笑着用箱子挡住了脸。`,
    );
    await kita.say_and_wait(
      `先不和训练员${me.get_adult_sex_title()}说了，我接着搬箱子了哦。`,
    );
    await era.printAndWait(
      `这么说着，小北将几个箱子叠在一块，稳稳当当地顺着侧门走了进去。`,
    );
    await era.printAndWait(
      `${me.name} 看着小北娇小而结实的背影，心里若有所思。`,
    );
    era.println();
    get_attr_and_print_in_event(68, [0, 0, 0, 0, 5], 0) &&
      (await era.waitAnyKey());
    return true;
  }
};

handlers[event_hooks.out_shopping] = async (_, __, event_object) => {
  if (era.get('flag:当前互动角色') !== 68) {
    add_event(event_hooks.out_shopping, event_object);
    return;
  }
  const kita = get_chara_talk(68),
    me = get_chara_talk(0),
    edu_weeks = era.get('flag:当前回合数') - era.get('cflag:68:育成回合计时');
  if (edu_weeks === 95 + 14) {
    await print_event_name('粉丝感谢祭！', kita);
    await era.printAndWait(
      `为了感谢粉丝们的支持，${me.name} 和小北在商店街的餐厅里举报了感谢服务。`,
    );
    await era.printAndWait(
      `站在用箱子堆叠起来的桌子后，小北握着麦克风，用欢快的嗓音唱着特雷森音头。`,
    );
    await kita.say_and_wait(`晃来晃去、飘来飘去、翩翩起舞花浴衣～`);
    await era.printAndWait(
      `摇晃着手欢快的唱着音头，${me.name} 坐在台后默默观赏着，这除 ${me.name} 之外没有任何人能够看到的身影。`,
    );
    await era.printAndWait(
      `在小北帮助过的大家的支持下，这次感谢祭就这么落入了尾声。`,
    );
    era.println();
    get_attr_and_print_in_event(68, [0, 0, 0, 0, 10], 10) &&
      (await era.waitAnyKey());
    era.set('flag:68:节日事件标记', 0);
    return true;
  }
};

/**
 * @param {HookArg} _
 * @param __
 * @param {EventObject} event_object
 */
handlers[event_hooks.out_church] = async (_, __, event_object) => {
  if (era.get('flag:当前互动角色') !== 68) {
    add_event(event_hooks.out_church, event_object);
    return;
  }
  const kita = get_chara_talk(68),
    me = get_chara_talk(0);
  let wait_flag = false;
  await print_event_name('新年的抱负', kita);
  await era.printAndWait(
    `在神社鸟居旁的角落里，${me.name} 看到了带着滚烫热情的 ${kita.name}，看样子已经等 ${me.name} 等了很久的样子。`,
  );
  await kita.say_and_wait(
    `训练员${me.get_adult_sex_title()}，新年的一年请您多多指教！诶嘿嘿～`,
  );
  await era.printAndWait(
    `${kita.name} 向 ${me.name} 打了个招呼，哒哒哒地跑了过来，小小的靴子在石板上发出了清脆的响声。`,
  );
  await era.printAndWait(
    '看来每年为了祈祷经典年能够顺利进行的祈福传统，让这只小马过于兴奋了呢。',
  );
  await kita.say_and_wait(
    '那么事不宜迟，为了今年的顺利，我们快去神社里参拜吧！',
  );
  await era.printAndWait(
    `穿着一身深色浴衣的 ${kita.name} 抖动着可爱的马耳，拉着你的衣袖笑嘻嘻的催促道。`,
  );
  await era.printAndWait(
    `${me.name} 摸了摸小北的脑袋，和 ${kita.sex} 一起聆听着神社里传来的阵阵声响，走上满是青苔的漫长台阶。`,
  );
  await era.printAndWait('哒、哒、哒……');
  await era.printAndWait(
    `聆听着两人安静而单调的脚步声，${me.name} 和 ${kita.name} 踏过八十八节略显圆滑的台阶。`,
  );
  await era.printAndWait(
    `而在追着迫不及待跑上的${kita.get_teen_sex_title()}走过最后几节台阶后，出现在 ${
      me.name
    }们 面前的是满是欢声笑语的热闹景象。`,
  );
  await kita.say_and_wait('呜哈哈～就算是东京的神社也和老家的神社差不多啊～');
  await era.printAndWait(
    `${kita.name} 穿过被张灯结彩的纸灯笼束成的小道，小跑着来到神社的赛钱箱前面，认真的拍了两次手，鞠了一躬。`,
  );
  await kita.say_and_wait(
    '唔唔唔……为了明年三月能够有足够的粉丝去比赛，请大家一定要来看我的比赛啊……',
  );
  await era.printAndWait(
    `听着赛${kita.get_uma_sex_title()}小声念叨着自己的愿望，${
      me.name
    } 也拍了拍手，开始祈祷起来。`,
  );
  era.printButton('（希望小北能跑得更快）', 1);
  era.printButton('（希望小北能应对更长的比赛）', 2);
  era.printButton('（希望小北能掌握更多技巧）', 3);
  const ret = await era.input();
  era.println();
  if (ret === 1) {
    wait_flag =
      get_attr_and_print_in_event(68, [25, 0, 0, 0, 0], 0) || wait_flag;
  } else if (ret === 2) {
    wait_flag =
      get_attr_and_print_in_event(68, [0, 20, 0, 0, 0], 0) || wait_flag;
  } else {
    wait_flag = get_attr_and_print_in_event(68, undefined, 20) || wait_flag;
  }
  wait_flag && (await era.waitAnyKey());
  return true;
};

/**
 * @param {HookArg} _
 * @param __
 * @param {EventObject} event_object
 */
handlers[event_hooks.out_start] = async function (_, __, event_object) {
  if (era.get('flag:当前互动角色') !== 68) {
    add_event(event_hooks.out_church, event_object);
    return;
  }
  const kita = get_chara_talk(68),
    me = get_chara_talk(0),
    edu_weeks = era.get('flag:当前回合数') - era.get('cflag:68:育成回合计时'),
    event_marks = new KitaEduMarks();
  if (edu_weeks === 95 + 1) {
    await print_event_name('新年拜访', kita);
    await era.printAndWait('众弟子「师父，新年快乐！！！」');
    await era.printAndWait(
      `下午三点十五分，身为训练员的 ${me.name} 听着 ${kita.name} 父亲弟子们震耳欲聋的问好声，终于松了口气。`,
    );
    await era.printAndWait(
      `${me.name} 身穿黑色和服，在榻榻米上撑起身体向一旁的男人鞠了一躬。`,
    );
    await era.printAndWait(
      `身旁小北的父亲微微颌首，此人身材高大不怒自威，让 ${me.name} 看起来像黑道们请的文化人顾问。`,
    );
    await era.printAndWait(
      `若不是同样穿着印有荷叶纹样黑色和服，满脸笑意轻松写意的小北正坐在 ${me.name} 身旁，恐怕 ${me.name} 早就起身鞠躬站到弟子的行列里了吧。`,
    );
    await kita.say_and_wait(
      `训练员${me.get_adult_sex_title()}，第一次在这么多人面前很紧张对吧～`,
    );
    await era.printAndWait(
      `合上推拉门，小北笑嘻嘻地凑在 ${me.name} 身边对 ${me.name} 说。`,
    );
    await era.printAndWait(
      `${me.name} 揉了揉担当的脑袋，在嘻嘻哈哈的轻巧吵闹声中开始享受起了新的一年。`,
    );
    era.println();
    get_attr_and_print_in_event(
      68,
      [5, 5, 5, 5, 5],
      35,
      JSON.parse('{"体力":300}'),
    ) && (await era.waitAnyKey());
  } else if (event_marks.hot_spring_event === 1) {
    event_marks.hot_spring_event++;
    await print_event_name('温泉旅行', kita);
    await era.printAndWait(`${me.name} 在训练员室里整理着文件……`);
    await kita.say_and_wait(
      `训练员${me.get_adult_sex_title()}！那个，我要和你说温泉券的声音！`,
    );
    await kita.say_and_wait(`这三年，我有好好努力对吧！`);
    await kita.say_and_wait(`是这样了吧训练员${me.get_adult_sex_title()}！`);

    await era.printAndWait(
      `突然闯进训练员室的小北，这么大声向 ${me.name} 询问道。`,
    );
    await era.printAndWait(
      `怎么突然开始说这个了？ ${
        me.name
      } 略带诧异地看着面前的${kita.get_teen_sex_title()}。`,
    );
    era.println();
    era.printButton('「嗯，有好好努力了哦。」', 1);
    await era.input();
    await era.printAndWait(`毕竟无论如何，这三年来的胜利都是有目共睹的。`);
    await era.printAndWait(
      `${kita.name} 付出的努力毫无疑问，甚至远超我个人的预计，而结果也是显而易见的。`,
    );
    await kita.say_and_wait(`谢谢你，这三年来小北我一直在压抑着自己……`);
    await kita.say_and_wait(
      `但是，现在有了训练员${me.get_adult_sex_title()}的努力，就算稍微奖励一下小北也是可以的，对吧！`,
    );
    await era.printAndWait(
      `黑发的${kita.get_teen_sex_title()}一步步地逼近，用纤细的双手压住 ${
        me.name
      } 的肩膀让 ${me.name} 无法动弹。`,
    );
    await kita.say_and_wait(
      `所以训练员${me.get_adult_sex_title()}，我们就用之前的温泉券去温泉吧！`,
    );
    era.println();
    era.printButton('「可以去！小北你松手，我们这就去！所以松手哇！」', 1);
    await era.input();
    await era.printAndWait(
      `一边这么说着，${me.name} 慌忙从抽屉里找出放好的温泉券在小北面前摇晃了起来。`,
    );
    era.drawLine({ content: '温泉旅馆' });
    await era.printAndWait(
      `为了防止过于想要奖励的小北做出什么出格的事，${me.name} 和小北一起来到了温泉旅馆。`,
    );
    await kita.say_and_wait(
      `呼啊～这里的温泉洗的好舒服啊～感觉身体心灵都洗的干干净净了～`,
    );
    await era.printAndWait(
      `用毛巾擦着白皙的后颈，${kita.name} 跪坐在柔软的垫子上，柔顺的马尾在软嫩有力的两只小脚间摇来摇去。`,
    );
    await era.printAndWait(
      `平日里紧绷的态度消失不见，看起来在泡过温泉后小北放松了不少。`,
    );
    await era.printAndWait(`挠～挠～`);
    await era.printAndWait(
      `${me.name} 打了个激灵，发现小北不知不觉转身趴在地板上，用尾巴轻轻挠着 ${me.name} 的脚心。`,
    );
    await era.printAndWait(
      `而在被 ${me.name} 发现之后，小北立刻打着滚在榻榻米上嘻嘻笑了起来。`,
    );
    await kita.say_and_wait(
      `呼呼呼～平时都一直紧绷着，放松下来后想要像小孩子一样在训练员面前撒娇玩闹了呢……哇！`,
    );
    await era.printAndWait(
      `打着滚的 ${kita.name}，不知不觉间就撞到了墙上，就这么大叫着露出了傻乎乎的笑容。`,
    );
    await era.printAndWait(
      `偶尔犯一下傻放开瞎闹似乎也挺好的呢，一边这么想着，${me.name} 开始和 ${kita.name} 在房间里就这么傻笑着打闹起来。`,
    );
    era.println();
    sys_like_chara(68, 0, 50) && (await era.waitAnyKey());
  }
  return true;
};

/**
 *
 * 北部玄驹的育成事件
 *
 * @author 小黑
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
