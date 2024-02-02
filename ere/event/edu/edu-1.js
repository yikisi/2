const era = require('#/era-electron');

const { add_event } = require('#/event/queue');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EduEventMarks = require('#/data/event/edu-event-marks');
const event_hooks = require('#/data/event/event-hooks');
const print_event_name = require('#/event/snippets/print-event-name');
const { attr_names, fumble_result, attr_enum } = require('#/data/train-const');

const handlers = {};

const spe = get_chara_talk(1);
const me = get_chara_talk(0);

const { base_calc } = require('#/system/sys-calc-base-cflag');
const { relation_calc } = require('#/system/sys_calc_chara_others');

handlers[
  event_hooks.week_start
] = require('#/event/edu/edu-events-1/week-start');
handlers[
  event_hooks.race_start
] = require('#/event/edu/edu-events-1/race-start');
handlers[event_hooks.race_end] = require('#/event/edu/edu-events-1/race-end');

/**
 * @param {HookArg} hook
 * @param {{train:number,stamina_ratio:number}} extra_flag
 */
handlers[event_hooks.train_success] = async (hook, extra_flag) => {
  era.print(`${spe.name} 的 ${attr_names[extra_flag.train]} 训练顺利成功了……`);
  if (
    !era.get('status:1:摸鱼') &&
    Math.random() < 0.2 * extra_flag.stamina_ratio
  ) {
    era.println();
    await print_event_name('额外自主训练！', spe);
    await era.printAndWait('训练结束后，特别周焦急地找到了你。');
    await spe.say_and_wait('最近，我班里的同学实力都进步得很快。');
    await spe.say_and_wait('我也不能输给她们，所以今天我还想再训练一会！');
    await era.printButton('我明白了！那就训练到你满意为止', 1);
    await era.printButton('冷静点，会过度训练的哦', 2);
    const ret = await era.input();
    if (ret === 1) {
      await spe.say_and_wait('谢谢训练员！我会努力训练出成效的！');
      await era.printAndWait('在那之后，你和特别周最大限度地投入到了训练中。');
    } else {
      await spe.say_and_wait('确，确实……我可能稍微有点上头了。');
      await spe.say_and_wait(
        '得要让脑袋冷静一下才行，深呼吸，深呼吸……吸气……吸气……',
      );
      await era.printAndWait('特别周似乎冷静下来了。');
    }
  }
};

handlers[event_hooks.train_fail] = async (hook, extra_flag) => {
  extra_flag['args'] = extra_flag.fumble
    ? fumble_result.fumble
    : fumble_result.fail;
  hook.arg = 0;
  if (extra_flag.fumble) {
    await print_event_name('严禁逞强！', spe);
    await era.printAndWait('特别周在训练中受伤了，我急忙把她带到了医务室。');
    await spe.say_and_wait('对不起，训练员……我搞砸了……');
    await spe.say_and_wait(
      '可能是因为我总想着要变强，拼命训练的时候没注意周围……',
    );
    await spe.say_and_wait('是我大意了，对不起……');
    era.printButton('现在先专注于疗伤吧！', 1);
    era.printButton('今天就好好休息吧，之后再努力就好了！', 2);
    let ret = era.input();
    if (ret === 1) {
      await spe.say_and_wait('训练员，谢谢你。');
      await spe.say_and_wait('确实，妈妈也说过，这种时候最重要的是不要着急');
      await spe.say_and_wait('我会好好疗养的，然后以完美的状态回到训练中去……');
      await spe.say_and_wait('呜……明明要更加努力才行，却成了这副样子……');
      await era.printAndWait(
        '为了能重新开始训练，我决定今天让特别周好好修养。',
      );
    } else {
      await spe.say_and_wait(
        '说，说得也是！如果能马上治好的话，就能把耽误的训练补回来了！',
      );
      await spe.say_and_wait('我决定了，今天我会专心养伤！训练员，明天见！');
      if (Math.random() < extra_flag['args'].ratio.fail_again) {
        await era.printAndWait(
          '第二天，由于特别周的步伐仍有些不稳，我又让她休息了一天。',
        );
        await era.printAndWait(
          '我的本意是想让她振作起来的，但说不定反而更让她心急了。',
        );
        hook.arg = -1;
      } else {
        await era.printAndWait(
          '或许是特别周的气势起了效果，第二天她就恢复了正常的训练。',
        );
        hook.arg = 1;
      }
    }
  }
};

handlers[event_hooks.school_atrium] = async (hook, __, event_object) => {
  if (era.get('flag:当前互动角色') !== 1) {
    add_event(hook.hook, event_object);
    return;
  }
  const edu_event_marks = new EduEventMarks(1);
  if (edu_event_marks.get('borrow_money') === 1) {
    edu_event_marks.add('borrow_money');
    await print_event_name('小特在减肥？还是说……');
    await era.printAndWait('你和特别周来到天台一起享用便当。');
    await era.printAndWait(
      '通常这个时候你和特别周会漫无目的地聊一些最近发生的有趣事情，但聊着聊着，你发现今天的特别周有点奇怪。',
    );
    await era.printAndWait('其一是特别周今天显得十分心不在焉，其二则是……');
    await me.say_and_wait('小特，你今天的便当就是水煮豆芽吗？');
    await era.printAndWait(
      '色淡味寡的豆芽塞满了整个饭盒，十分不符合特别周性格的做法。',
    );
    await spe.say_and_wait(
      '呜诶？！啊，啊……那个，我最近在减肥！要控制饮食的说……',
    );
    await era.printButton('减肥啊？那好吧，不过也要注意营养搭配', 1);
    await era.printButton(
      '这个谎言未免也太拙劣了（解锁给特别周借钱的选项）',
      2,
    );
    const ret = await era.input();
    if (ret === 1) {
      await spe.say_and_wait('嗯……嗯嗯！我知道了，训练员。');
      await era.printAndWait('特别周忙不迭地点了点头。');
      await era.printAndWait(
        '你并没有把这件小插曲放在心上，不过特别周的眉头似乎仍然紧紧皱着……',
      );
      base_calc.sys_change_motivation(1, -1);
      return false;
    } else {
      await era.printAndWait(
        '被你无情揭穿的特别周愣在了当场，你决定趁热打铁。',
      );
      await me.say_and_wait('小特，难不成……你剩下的生活费只够吃这个了？');
      await spe.say_and_wait('…………');
      await spe.say_and_wait('……是的……');
      await me.say_and_wait('为什么？');
      await era.printAndWait(
        '特雷森学园会负担学生的大部分生活开支，马娘赢得比赛还会分得部分奖金。',
      );
      await era.printAndWait(
        '你属实想不明白为什么特别周会沦落到只能吃得起豆芽的地步。',
      );
      await spe.say_and_wait('因，因为……');
      await era.printAndWait('\n从她断断续续的描述中，你大致知道了原因————');
      await era.printAndWait(
        '大都市带来的超前的消费欲望，以及不知从哪里学会的购买马券的行为。',
      );
      await era.printAndWait(
        '\n你将情绪低落的特别周狠狠批评了一顿，她的眼泪不停地滴落在饭盒中。',
      );
      await era.printAndWait(
        '\n你叹了口气，毕竟没有更早注意到这些的自己也难逃其咎。',
      );
      await me.say_and_wait('那现在怎么办呢？你手头一点钱都没有了吗？');
      await spe.say_and_wait('嗯……');
      await me.say_and_wait('既然这样——');
      await era.printButton('这次就是给你的教训，好好记住吧', 1);
      await era.printButton('我借你点钱吧（解锁给特别周借钱的选项）', 2);
      const ret_borrow = await era.input();
      if (ret_borrow === 1) {
        await era.printAndWait(
          '即使嘴上这么严厉地说着，你还是将自己的便当分了一部分给特别周。',
        );
        await spe.say_and_wait('谢谢你，训练员……我以后一定不会胡乱消费了！');
        relation_calc.sys_like_chara(1, 0, 10);
        return false;
      } else {
        const cur_coin = era.get('flag:当前马币');
        const money_list = [1500, 5000, 10000, cur_coin];
        await era.printAndWait('要借多少钱？');
        if (cur_coin >= 1500) {
          await era.printButton('1500马币', 1);
        }
        if (cur_coin >= 5000) {
          await era.printButton('5000马币', 2);
        }
        if (cur_coin >= 10000) {
          await era.printButton('10000马币', 3);
        }
        await era.printButton('有多少借多少', 4);
        let amount = (await era.input()) - 1;
        amount = money_list[amount];
        era.add('flag:当前马币', -amount);
        await spe.say_and_wait('哇，谢谢训练员！');
        await me.say_and_wait(
          '这是借你的钱，不能乱花哦。也不用太焦虑，等你稍微攒下点钱再还我吧。',
        );
        await spe.say_and_wait('嗯嗯，我一定会努力攒钱的！');
        await me.say_and_wait('有这个觉悟就好，现在可以先去买点肉吃了。');
        await spe.say_and_wait('好的！');
        return amount;
        //记录特别周欠钱数额并返回
        //todo：后续事件，特别周有20%的几率还清所有钱（不计利息），80%的几率还不起钱来向你哭诉，此时可以选择债务清零/用身体偿还（解锁调教剧情）
        //该事件会在特别周首次借钱，或是还清所有欠款后再借钱的第4周触发；解锁调教剧情后，不会再触发（你借给她的钱永远打水漂了）
      }
    }
  }
};

/**
 * 特别周 - 育成
 *
 * @author wwm
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
