const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const { get_chara_color } = require('#/data/chara-colors');

module.exports = () => {
  const love = era.get('love:400'),
    silence = get_chara_talk(400),
    me = get_chara_talk(0),
    buffer = [];
  buffer.push(
    () =>
      silence.say('今天的天气看起来不错，如果有什么安排的话还是趁早开始吧。'),
    () => silence.say('你是我变强的必要存在，所以没有必要顾虑我的想法。'),
    () =>
      silence.say([
        '有点怀念 ',
        sys_get_colored_callname(400, 25),
        ' 的咖啡了……为什么要这样看着我，',
        silence.sex,
        '泡的咖啡确实很好喝。',
      ]),
    () => {
      silence.say(
        '最近学校附近新开的料理店味道不错，如果训练能够取得足够的效果的话，我带你一起去尝尝怎么样？',
      );
      era.print([
        silence.get_colored_name(),
        ' 摸了摸自己的肚子，似乎还在回味料理的味道。',
      ]);
    },
    () =>
      silence.say([
        sys_get_colored_callname(400, 32),
        ' 的药剂怎么样？很多时候它确实能够帮助你解决问题，但是副作用或者说附带出现的问题，你有信心能够解决吗？',
      ]),
    () =>
      silence.say([
        '你问我的目标是什么？我想赢，站在赛',
        silence.get_uma_sex_title(),
        '的战场上一路赢下去，仅此而已。',
      ]),
    () => {
      silence.say([
        '是 ',
        {
          content: '骏川' + (era.get('flag:角色性别') === 1 ? '先生' : '小姐'),
          color: get_chara_color(301),
          fontWeight: 'bold',
        },
        ' 啊……',
        silence.sex,
        '是一个很强……不，没什么，忘了吧。',
      ]);
      era.print([silence.get_colored_name(), ' 摇了摇头，选择将话题转移。']);
    },
  );
  if (love === 100) {
    buffer.push(
      () => {
        silence.say('为什么呢？我们明明只是训练员与担当的关系……');
        silence.say('为什么我的视线已然无法离开你了呢。');
        era.print([
          '虽然 ',
          silence.get_colored_name(),
          ' 看起来是在小小声的自言自语，但是 ',
          me.get_colored_name(),
          ' 还是听到了这句话。',
        ]);
      },
      () => {
        silence.say('能帮我按摩一下脚吗？这应该也是作为训练员的职责之一吧……');
        era.print([
          silence.get_colored_name(),
          '脱下了自己的鞋子，将被袜子包裹的小脚伸了出来，',
        ]);
        era.print([
          '虽然嘴上只是说着希望 ',
          me.get_colored_name(),
          ' 帮',
          silence.sex,
          '按摩脚，但是',
          silence.sex,
          '闭上了眼睛似乎打算任由 ',
          me.get_colored_name(),
          ' 做什么都好。',
        ]);
      },
    );
  } else if (love >= 90) {
    buffer.push(
      () => {
        silence.say('如果没有额外的训练计划的话……');
        silence.say(
          '今天就和我一起去吃饭吧，不用担心时间问题，大不了我抱着你跑回来而已。',
        );
        era.print([
          silence.get_colored_name(),
          ' 比划了一下，',
          silence.sex,
          '似乎并不像是在开玩笑的样子。',
        ]);
      },
      () => {
        silence.say(
          '抱歉，有点累了，所以能扶我一下吗？果然还是你身上的味道最能让我安心了。',
        );
        era.print([
          silence.get_colored_name(),
          ' 顺势依靠在你的怀里面，似乎充分的的享受着 ',
          me.get_colored_name(),
          ' 的气味。',
        ]);
      },
    );
  } else if (love >= 75) {
    buffer.push(
      () => silence.say('今天训练结束要不要和我一起喝点什么，放心吧我请客，'),
      () =>
        silence.say('我知道有一家很不错的咖啡馆，就当是给你的额外酬劳怎么样？'),
      () =>
        silence.say(
          '能陪我去书店吗？今天好像有的新一期的杂志和漫画，我想去找个人陪我一起去买。',
        ),
    );
  }
  get_random_entry(buffer)();
};
