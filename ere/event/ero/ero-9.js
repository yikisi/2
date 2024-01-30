const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { ero_hooks } = require('#/data/event/ero-hooks');
const { medicine_enum, medicine_names } = require('#/data/ero/item-const');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const handlers = {};

handlers[ero_hooks.ero_start] = async () => {
  if (
    sys_check_awake(0) &&
    sys_check_awake(9) &&
    !era.get('cflag:9:性别') &&
    era.get('love:9') >= 50 &&
    era.get('status:0:发情') &&
    era.get('exp:9:性爱次数') === 1 &&
    !era.get('status:9:弗隆K') &&
    !era.get('status:9:弗隆P') &&
    (era.get('item:弗隆K') || era.get('item:弗隆P'))
  ) {
    era.set('tcvar:9:TS大和T', 1);
    const daiwa = get_chara_talk(9),
      me = get_chara_talk(0);
    await print_event_name('训练员身体不适！？', daiwa);
    await era.printAndWait(
      '从早上开始就觉得有点热，话虽如此，也没有发烧什么的，并没有放在心上',
    );
    await era.printAndWait('心情上的问题吧');
    await era.printAndWait('——本来是这么想的');
    await me.say_and_wait('……真奇怪……明明早上还没什么问题的……');
    await era.printAndWait('身体状况突然恶化，全身发烫，心跳跳个不停');
    await era.printAndWait([
      me.get_colored_name(),
      ' 坐在训练员的沙发上，解开了胸口的扣子',
    ]);
    await era.printAndWait(
      '肚子深处传来隐隐作痛的奇怪感觉，现在甚至想脱掉全身衣服在外面乱跑，就是这么奇怪的心情',
    );
    era.println();
    await daiwa.say_and_wait(`早上好，${sys_get_callname(9, 0)}`);
    era.println();
    await era.printAndWait([
      '不知不觉，已经到了 ',
      daiwa.get_colored_name(),
      ' 会来露面的时间',
    ]);
    era.println();
    await me.say_and_wait('啊……嗯……早上好……大和……');
    await daiwa.say_and_wait('……');
    era.println();
    await era.printAndWait('扑通一下……大和的书包掉在了地上');
    await era.printAndWait('啊，这么说来，现在的打扮有点……');
    era.println();
    await daiwa.say_and_wait(`${sys_get_callname(9, 0)}……？`);
    await me.say_and_wait('啊……稍等一下……');
    era.println();
    await era.printAndWait([
      '脑子里明白自己得快点穿好衣服，但扣子却总是扣不好，经过一番千辛万苦后，',
      daiwa.get_colored_name(),
      ' 的脸出现在了面前',
    ]);
    era.println();
    await me.say_and_wait('……？怎么了？');
    await daiwa.say_and_wait('你……难道从早上开始就一直散发着这种气味吗？');
    await me.say_and_wait('……气味？');
    era.println();
    await era.printAndWait([
      '这么说来，今天好像总觉得身上飘着一股甜腻的味道，而且看着 ',
      daiwa.get_colored_name(),
      ' 的脸，不知道为什么好想摸一下',
    ]);
    era.println();
    await era.printAndWait([
      '正想着，',
      daiwa.get_colored_name(),
      ' 突然把 ',
      me.get_colored_name(),
      ' 抱了起来',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 下意识把手环抱在她脖子上，抬头一看，她的脸好像肉食动物一样，又像是发现猎物的猎人',
    ]);
    await me.say_and_wait(
      '这样的话，我就是猎物了吧，是即将被她吃掉的可怜羔羊',
      true,
    );
    await era.printAndWait([
      '但是，现在的 ',
      me.get_colored_name(),
      ' 却觉得即使是这样也无所谓',
    ]);
    era.println();

    era.set('tflag:主导权', 9);
    let item = medicine_enum.fron_k;
    if (!era.get('item:弗隆K')) {
      item = medicine_enum.fron_p;
    }
    era.add(`item:${medicine_names[item]}`, -1);
    await require('#/system/script/sys-call-ero-script')(
      9,
      ero_hooks.use_medicine,
      { item, user: 9, shown: false },
    );

    await era.printAndWait([
      me.get_colored_name(),
      ' 将脸凑到她的脖子上，擦着她的脸颊，闻着她的体香，余光扫过一个不知道为什么买来放在茶几隐秘处的小瓶子',
    ]);
    await me.say_and_wait('已经……什么都想不起来了……', true);
    await era.printAndWait(
      '从脖子传来的她的气味和比之前更强烈的甜香搔着鼻腔……',
    );
  }
};

handlers[ero_hooks.ero_end] = async () => {
  if (era.get('tcvar:9:TS大和T')) {
    const daiwa = get_chara_talk(9),
      me = get_chara_talk(0);
    await print_event_name('「身体不适」的训练员……与最喜欢的大和', daiwa);
    await era.printAndWait([
      '当 ',
      me.get_colored_name(),
      ' 醒来时，已经睡在休息室的床上了',
    ]);
    await era.printAndWait([
      '当昏昏沉沉的脑袋渐渐清醒过来后，',
      me.get_colored_name(),
      ' 感觉腰部特别的沉重，然后看到了床单被弄得乱七八糟的惨样',
    ]);
    era.println();
    await era.printAndWait([
      '看向旁边，只见 ',
      daiwa.get_colored_name(),
      ' 正捂着脸咕哝着什么',
    ]);
    await daiwa.say_and_wait(
      '该怎么办啊……和奸……没错，这就是和奸……毕竟训练员也那么兴奋……但是要是训练员休产假的话……啊……',
    );
    era.println();
    await era.printAndWait([
      '她似乎在烦恼着什么，而一直烧到中午的热度已经退了，',
      me.get_colored_name(),
      ' 慢慢回想起究竟发生了什么，以及自己被做了什么事',
    ]);
    await era.printAndWait([
      '没错，在那之后被 ',
      daiwa.get_colored_name(),
      ' 抬到了床上，变成了雌性',
    ]);
    era.println();
    await era.printAndWait(
      '往身下看，便能看到和平常一样明显的胸部以及异常隆起的肚子',
    );
    await era.printAndWait('往桌上一看，那里摆着一个空瓶子');
    era.println();
    await me.say_and_wait('……大和……');
    await daiwa.say_and_wait(
      `噫！对，对不起，${sys_get_callname(9, 0)}！我……我做的太过分了……哇噗……`,
    );
    await me.say_and_wait('好了好了，我知道了，没事没事');
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 将道歉着的 ',
      daiwa.get_colored_name(),
      ' 抱在胸前，抚摸着她的头',
    ]);
    era.println();
    await daiwa.say_and_wait('但是，但是……啊，如果有了小孩的话……');
    await me.say_and_wait('嗯，你应该只喝了一瓶吧');
    await daiwa.say_and_wait('诶，嗯嗯……');
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 下了床，确认了空瓶的标签，嗯，果然如此',
    ]);
    era.println();
    if (era.get('status:9:弗隆K')) {
      await me.say_and_wait('好的，大和，你好好的读读这里');
      await daiwa.say_and_wait('这里？');
      await me.say_and_wait(
        '不是有好好写着吗？服用这种药物产生的酷似男性生殖器的东西是不具有生殖能力的',
      );
      await daiwa.say_and_wait('……哈？诶？那，你肚子里的是什么东西？');
      await me.say_and_wait(
        '嗯——大概是精浆——吗？精液的成分不只有精子，也有精浆，精浆是透明的液体，如果有精子的话这里应该会有白色的液体才对吧？所以说大和不用担心是不会有小孩的……哇！？',
      );
      era.println();
      await era.printAndWait([
        '说到这里，大和突然把 ',
        me.get_colored_name(),
        ' 推倒了，可能是被 ',
        me.get_colored_name(),
        ' 的气味感染，毕竟她也吸了不少进去',
      ]);
      era.println();
      await daiwa.say_and_wait('是吗……也就是说就算SEX也不会有孩子对吧？');
      await me.say_and_wait('啊……嗯，是啊');
    } else {
      await me.say_and_wait('好的，大和，没事的，也不是说就一定会怀孕哦');
      await me.say_and_wait('而且，我很乐意怀上大和的孩子呢');
      await daiwa.say_and_wait(`${sys_get_callname(9, 0)}……`);
      await me.say_and_wait('所以，来吧');
      era.println();
      await era.printAndWait([me.get_colored_name(), ' 躺下，张开双臂']);
      await era.printAndWait([
        daiwa.get_colored_name(),
        ' 的脸又变成了好似肉食动物的形状',
      ]);
      era.println();
      await daiwa.say_and_wait('……');
    }
    await daiwa.say_and_wait(
      `${sys_get_callname(9, 0).substring(0, 1)}，${sys_get_callname(
        9,
        0,
      )}，现在的话就算你说不行我也停不下来了哦`,
    );
    await me.say_and_wait('……嗯，我知道了，毕竟是我最喜欢的大和');
    await daiwa.say_and_wait('～～～！');
    era.println();
    await era.printAndWait([
      '那天，',
      me.get_colored_name(),
      ' 不记得自己究竟昏了又醒几次，不过，',
      me.get_colored_name(),
      ' 记得当时唯一的感想便是中学生的性欲真可怕啊',
    ]);
    let flag_rape = true;
    const sys_handle_ero_act = require('#/system/ero/sys-handle-ero-act');
    const default_filter = new Array(5).fill(false);
    while (flag_rape) {
      await sys_handle_ero_act(ero_hooks.relax, default_filter, false);
      if (era.get('tcvar:9:脱力')) {
        flag_rape = false;
      }
    }
  }
};

handlers[ero_hooks.filter_in_rape] = () => {
  if (!era.get('tcvar:9:TS大和T')) {
    throw new Error();
  }
  return (e) => e >= ero_hooks.missionary && e <= ero_hooks.stimulate_womb;
};

/**
 * @param {HookArg} hook
 * @param extra_flag
 * @returns {Promise<*>}
 */
module.exports = async (hook, extra_flag) => {
  if (!handlers[hook.hook]) {
    throw new Error('unsupported hook!');
  }
  return await handlers[hook.hook](hook, extra_flag);
};
