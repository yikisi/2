const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

/**
 * @param {CharaTalk} daiya
 * @param {CharaTalk} me
 * @param {number} edu_weeks
 * @param {{race:number,rank:number}} extra_flag
 */
async function race_end_67_common(daiya, me, edu_weeks, extra_flag) {
  if (extra_flag.rank === 1) {
    await print_event_name('竞赛获胜！', daiya);
    await daiya.say_and_wait('成功了！我成功了！你有看到我的表现吗？训练员！');
    await daiya.say_and_wait(
      '我完全发挥了现有的所有实力……我觉得我跑出了最好的表现！',
    );
    era.printButton('「真的跑出了最棒的表现哟！」', 1);
    era.printButton('「保持这个感觉继续向前进！」', 2);
    const ret = await era.input();
    if (ret === 1) {
      await daiya.say_and_wait('哇啊……！谢谢你！能听到训练员这么说，我……！');
      await daiya.say_and_wait(
        '呵呵……那我下一次一定要跑出更耀眼的表现！这是我和训练员之间的约定喔！',
      );
    } else {
      await daiya.say_and_wait('是！朝梦想直直前进……！');
      await daiya.say_and_wait(
        '呵呵，现在我有一种，好像伸手就能触及的感觉呢。',
      );
    }
  } else if (extra_flag.rank <= 5) {
    await print_event_name('竞赛上榜', daiya);
    await daiya.say_and_wait('上榜……总算是没有给里见家丢脸的成绩。');
    await daiya.say_and_wait('不过，距离获胜……还差了一步呢。');
    era.printButton('「已经是很棒的结果了」', 1);
    era.printButton('「把这次经验活用在下次比赛吧！」', 2);
    const ret = await era.input();
    if (ret === 1) {
      await daiya.say_and_wait('呵呵，谢谢夸奖♪');
      await daiya.say_and_wait(
        '可是，我的梦想不只是这样而已。我要变得更强更强……！',
      );
    } else {
      await daiya.say_and_wait('嗯！我们一起同心协力，下次一定要赢！');
      await daiya.say_and_wait(
        '回学园之后就要开始作战会议了呢！一定要彻底找出我现在的弱点！',
      );
    }
  } else if (extra_flag.rank <= 10) {
    await print_event_name('竞赛败北', daiya);
    await daiya.say_and_wait('…………这就是我现在的实力……');
    await daiya.say_and_wait('……很抱歉。我辜负了你的期望。');
    await daiya.say_and_wait(
      '实力、步调的预测都失误……看来我还有很多课题要完成呢。',
    );
    era.printButton('「我们一起解决吧」', 1);
    era.printButton('「一起朝目标重新出发吧」', 2);
    const ret = await era.input();
    if (ret === 1) {
      await daiya.say_and_wait('好的！就要再麻烦你了！训练员！');
      await daiya.say_and_wait(
        '一定要不停锻炼、不停锻炼……下一次一定要跑出最耀眼灿烂的表现！',
      );
    } else {
      await daiya.say_and_wait(
        '嗯嗯，这是当然的！我还没有丢失该实现的梦想呢。',
      );
      await daiya.say_and_wait('为了实现梦想……一定要再次精进自己！');
    }
  } else if (extra_flag.rank > 10) {
    await print_event_name('下次不会输了！', daiya);
    await daiya.say_and_wait('……没能做到。没能跑赢。我又输了……');
    await daiya.say_and_wait(
      '我辜负了好多人的期望。父亲、母亲、里见家的所有人……还有训练员也是。',
    );
    await daiya.say_and_wait(
      '……我会抱持着从零开始的心态努力的。如果之前的努力都还不够，那我就要更努力、更努力……所以──',
    );
    era.printButton('「不用这么焦急」', 1);
    era.printButton('「一起两人三脚向前冲刺！」', 1);
    const ret = await era.input();
    if (ret === 1) {
      await daiya.say_and_wait(
        '没关系的！为了下次一定能跑赢，无论是什么样的训练，我都一定能完成的……！',
      );
      era.printButton('「那就先深呼吸吧」', 1);
      await era.input();
      await daiya.say_and_wait('是！');
      await daiya.say_and_wait('吸……吐……！吸……吐……');
      era.printButton('「……冷静下来了吗？」', 1);
      await era.input();
      await daiya.say_and_wait('……啊！是、是。');
      era.printButton('「不要逞强，继续往前迈进吧」', 1);
      await era.input();
      await daiya.say_and_wait('训练员……！……嗯！');
      await daiya.say_and_wait(
        '嗯！无论多少次，我都会重新爬起来的……！我想要和你一起努力！',
      );
    } else {
      await daiya.say_and_wait('那么……总之现在需要一条可以缠脚的布呢！');
      await daiya.say_and_wait('我现在就去找！');
      await era.printAndWait(
        '……虽然『两人三脚』不过就只是比喻而已，但似乎让她打起了精神。再继续一起努力吧──',
      );
    }
  }
}

module.exports = race_end_67_common;
