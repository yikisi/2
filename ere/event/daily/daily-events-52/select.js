const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const { lust_border } = require('#/data/ero/orgasm-const');

module.exports = () => {
  const call_me = sys_get_callname(52, 0),
    urara = get_chara_talk(52),
    callname = urara.get_colored_name(),
    self_call = sys_get_callname(52, 52),
    love = era.get('love:52'),
    me = get_chara_talk(0),
    talk_arr = [];
  if (sys_check_awake(52)) {
    if (era.get('base:52:体力') < 0.4 * era.get('maxbase:52:体力')) {
      talk_arr.push([
        `呜啊……${call_me}，${self_call}……动不了了……`,
        ['躺在地上，', callname, ' 几乎没办法动弹了。'],
      ]);
      if (love > 0) {
        talk_arr.push([
          `体力、体力已经飞走了……不行了……`,
          ['趴在地上的 ', callname, ' 晕晕乎乎地大喘着气。'],
        ]);
      }
      if (love >= 25) {
        talk_arr.push([
          '不能输……不能输……',
          [callname, ' 几次想要撑起自己的身体，但还是失败了。'],
        ]);
      }
      if (love >= 50) {
        talk_arr.push([
          `训、${call_me}……再拉我一把……`,
          [
            '瘫坐在地上的 ',
            callname,
            ' 面色微红的向 ',
            me.get_colored_name(),
            ' 伸出手求助着。',
          ],
        ]);
      }
      if (love >= 75) {
        talk_arr.push([
          `让我再歇一会……一会就好了哦！哈啊……`,
          ['即使累到撑坐在地上，', callname, ' 依旧尝试着再站起来。'],
        ]);
      }
      if (love >= 90) {
        talk_arr.push([
          `我、我觉得我还可以哦……`,
          [
            '用力背起耳朵，用 ',
            me.get_colored_name(),
            ' 的身体作着支撑，',
            callname,
            ' 在努力地让自己不躺倒在地。',
          ],
        ]);
      }
      if (love === 100) {
        talk_arr.push([
          `呼……呼……没问题的！只要 ${call_me} 在，就能继续加油……`,
          ['即使站都站不稳，', callname, ' 依旧努力地撑起了身体。'],
        ]);
      }
    } else if (era.get('relation:52:0') > 150) {
      talk_arr.push(
        [
          '明明是我先出门的，为什么大家却都比我先到了呢？真神奇啊！',
          ['虽然迟到了，但 ', callname, ' 依旧很开心的样子。'],
        ],
        [
          `${call_me}！我今天刚好没迟到哟！我说不定比上次跑得更快了！`,
          ['只是刚好赶到，', callname, ' 却很满足的样子。'],
        ],
        [
          `在这边哦 ${call_me}！快点过来吧！今天我也有好多好事能和 ${call_me} 分享呢！`,
          [
            '与 ',
            me.name,
            ' 一同赶到的 ',
            callname,
            ' 笑着向 ',
            me.name,
            ' 招着手。',
          ],
        ],
      );
      if (love >= 50) {
        talk_arr.push([
          `${call_me}……呜……诶？${call_me}？！今、今天也来一起加油吧！`,
          [
            callname,
            ' 似乎在悄悄地做些什么，直到 ',
            me.get_colored_name(),
            `来到${urara.sex}身后才面色羞红的反应过来。`,
          ],
        ]);
      }
      if (love >= 75) {
        talk_arr.push([
          `能看到 ${call_me} 真好呢！要是这样能一直持续下去的话……啊！${call_me}！今天要来做什么呢？`,
          ['来得意外早的 ', callname, `开心地来到 ${me.name} 的身边。`],
        ]);
      }
      if (love === 100) {
        talk_arr.push([
          `为了能够早点见到 ${call_me}，今天我也起得很早呦！看到 ${self_call}，${call_me} 会觉得幸福吗？`,
          ['等待许久的 ', callname, ' 摇着尾巴，脸上洋溢着幸福的笑容。'],
        ]);
      }
    } else {
      talk_arr.push(
        [
          `对不起哦 ${call_me}，今天 ${self_call} 又迟到了……`,
          [
            '明明没打算为迟到生气，但 ',
            callname,
            ' 面对 ',
            me.get_colored_name(),
            ' 时却缩了缩耳朵。',
          ],
        ],
        [
          `赶上了哦！啊，${call_me} 早上好……`,
          [
            '气喘吁吁赶来的 ',
            callname,
            '，在看到 ',
            me.get_colored_name(),
            ' 后不知为何又后退了一点。',
          ],
        ],
      );
      if (love >= 50) {
        talk_arr.push([
          `${call_me}！${self_call} 可以……不行，不能给 ${call_me} 添麻烦！诶……真的什么都没有哦？`,
          [
            '在背对 ',
            me.get_colored_name(),
            ' 的时候 ',
            callname,
            `似乎在做什么，但${urara.sex}却一直是不愿承认的表情。`,
          ],
        ]);
      }
      if (love >= 75) {
        talk_arr.push([
          `${self_call} 到底为什么……啊，${call_me} 就快到了，要赶紧做好准备才行……！`,
          [
            '来得很早的 ',
            callname,
            ' 在看到 ',
            me.get_colored_name(),
            ' 后赶紧站起来，打起精神向 ',
            me.get_colored_name(),
            ' 露出了笑容。',
          ],
        ]);
      }
      if (love === 100) {
        talk_arr.push([
          `${call_me}！今天、那个……可以对 ${self_call} 更温柔一点吗？只要一点点就好了！`,
          [
            '尽管还是有些畏缩的样子，但跟在 ',
            me.get_colored_name(),
            ' 身后的 ',
            callname,
            ' 还是笑着抓紧了 ',
            me.get_colored_name(),
            ' 的衣角。',
          ],
        ]);
      }
    }
  } else if (
    era.get('status:52:马跳S') ||
    era.get('status:52:马跳Z') ||
    era.get('status:52:超马跳Z') ||
    era.get('status:52:弗隆K') ||
    era.get('status:52:弗隆P') ||
    era.get('base:52:性欲') >= lust_border.absent_mind
  ) {
    talk_arr.push([
      '……呜嗯、啊……',
      ['身体焦躁却无法醒来，', callname, ' 在睡梦中面色潮红的娇喘。'],
    ]);
  } else {
    talk_arr.push(
      ['嘿嘿……胡萝卜……', ['小声说着梦话，', callname, ' 浅浅地翻了个身。']],
      [
        '……',
        ['仅仅发出着小小的呼吸声，今天熟睡的 ', callname, ' 意外的安静。'],
      ],
    );
  }
  const temp = get_random_entry(talk_arr);
  urara.say(temp[0]);
  era.print(temp[1]);
};
