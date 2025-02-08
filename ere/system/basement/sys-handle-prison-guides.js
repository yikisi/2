/**
 * @file 地下室教学
 * @author 雞雞
 * @author 无名黑奴
 */
const era = require('#/era-electron');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

async function sys_handle_prison_guides() {
  const my_name = get_chara_talk(0).get_colored_name();
  let flag = true;
  const action_list = [
    {
      async h() {
        await say_by_passer_by_and_wait('兵法有言', '兵贵胜，不贵久。');
        await era.printAndWait([
          my_name,
          ' 可以尝试以现有手段直接脱困，但当《地下室主人》回来的时候只能暂且作罢，要是时运不佳被那个人撞见的话恐怕甚至会遭到报复……',
        ]);
      },
      n: '尝试脱困',
    },
    {
      async h() {
        await say_by_passer_by_and_wait('兵法有言', '胜可知，而不可为。');
        await era.printAndWait([
          '在没有逃脱之机时，',
          my_name,
          ' 可以尝试静坐养神、思考对策。',
        ]);
        await say_by_passer_by_and_wait(
          '？？？',
          '这样还能防止错过《地下室主人》刚回来和醒来的时机。',
        );
      },
      n: '只是静坐',
    },
    {
      async h() {
        await say_by_passer_by_and_wait('兵法有言', '谨养而勿劳，并气积力。');
        await era.printAndWait([
          '在疲劳之时，',
          my_name,
          ' 最好直接睡下补充体力与精力。',
        ]);
      },
      n: '小睡片刻',
    },
    {
      async h() {
        await say_by_passer_by_and_wait('兵法有言', '军无粮食则亡。');
        await era.printAndWait([
          '为了应付长期战，',
          my_name,
          ' 需要进食来维持身体的消耗。一次进食可带来长时间内的体力恢复效果。',
        ]);
        await say_by_passer_by_and_wait(
          '？？？',
          '但是要小心主人在里面加一些料……如果TA太警惕的话。',
        );
      },
      n: '略微进食',
    },
    {
      async h() {
        await say_by_passer_by_and_wait('兵法有言', '上兵伐谋，其次伐交。');
        await era.printAndWait([
          '与地下室主人打好关系，对 ',
          my_name,
          ' 绝无坏处。',
        ]);
        await say_by_passer_by_and_wait(
          '？？？',
          '这样也许能让地下室主人降低警惕。',
        );
      },
      n: '虚与委蛇',
    },
    {
      async h() {
        await say_by_passer_by_and_wait(
          '兵法有言',
          '善动敌者，予之，敌必取之。',
        );
        await era.printAndWait(
          '向地下室主人献上肉体，说不定就能从中寻得逆转之机。',
        );
      },
      n: '邀请上床',
    },
    {
      async h() {
        await say_by_passer_by_and_wait(
          '兵法有言',
          '善出奇者，无穷如天地，不竭如江海。',
        );
        await era.printAndWait([
          '假如 ',
          my_name,
          ' 对自己的力量与智力足够自信，不妨尝试奇袭地下室主人，寻觅出路。只是一旦失败，下场可以想像。',
        ]);
      },
      n: '背面偷袭',
    },
    {
      async h() {
        await say_by_passer_by_and_wait('兵法有言', '凡战者，以正合，以奇胜。');
        await era.printAndWait(
          '如果对力量足够自信，正面反抗总是有效的手段，特别是在机关被解除殆尽的时候。',
        );
        await era.printAndWait(
          '但是一旦没能解除机关，让主人有机会回过神来，下场也是可以想象的……',
        );
      },
      n: '正面反抗',
    },
    {
      async h() {
        await say_by_passer_by_and_wait('兵法有言', '上兵伐谋，其次伐交。');
        await era.printAndWait([
          '若然地下室主人已然在 ',
          my_name,
          ' 身上索取所需，说不定就会同意释放的请求。',
        ]);
      },
      n: '请求释放',
    },
  ];
  const lines = era.getLineCount();
  while (flag) {
    era.printMultiColumns([
      { type: 'divider' },
      {
        content: [
          my_name,
          ' 看来是被',
          { content: '【什么人】', fontWeight: 'bold' },
          '绑架到这个地下室来了。',
          { isBr: true },
          '在这个不见天日的地方甚至',
          { content: '【无法精确感受到时间】', fontWeight: 'bold' },
          '，接下来的日子恐怕会很难熬。',
          { isBr: true },
          '有什么需要帮助的？',
        ],
        type: 'text',
      },
      ...action_list.map((e, i) => ({
        accelerator: i + 1,
        config: { width: 6 },
        content: e.n,
        type: 'button',
      })),
      { content: [], type: 'text' },
      {
        accelerator: 99,
        config: { width: 6 },
        content: '返回',
        type: 'button',
      },
    ]);
    const ret = await era.input({ hideInput: true });
    if (ret === 99) {
      flag = false;
    } else {
      era.drawLine({ content: action_list[ret - 1].n });
      await action_list[ret - 1].h();
    }
    if (flag) {
      await era.clear(era.getLineCount() - lines);
    }
  }
}

module.exports = sys_handle_prison_guides;
