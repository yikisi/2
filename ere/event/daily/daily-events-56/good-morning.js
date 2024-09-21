const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

module.exports = () => {
  const message = [],
    kitaru = get_chara_talk(56),
    me = get_chara_talk(0),
    sex_mark = era.get('mark:56:淫纹'),
    sex_happy = era.get('mark:56:欢愉'),
    relation = era.get('relation:56:0'),
    love = era.get('love:56'),
    callname = sys_get_callname(56, 0);
  if (era.get('base:56:体力') <= era.get('maxbase:56:体力') / 3) {
    message.push(
      () => {
        kitaru.say('今日的运势……好累啊');
        era.print([
          me.get_colored_name(),
          '来到训练场的时候，看见 ',
          kitaru.get_colored_name(),
          ' 已经躺在了草地上。',
        ]);
      },
      () => {
        kitaru.say('无所谓了……只要是命定之人的要求，我会尽力去做的。');
        era.print([
          kitaru.get_colored_name(),
          ' 笑着对 ',
          me.get_colored_name(),
          ' 挥了挥手，但是尾巴却明显的垂在了双腿间。',
        ]);
      },
    );
  } else if (era.get('cflag:56:干劲') < 0) {
    message.push(
      () => {
        kitaru.say('唔……');
        era.print([
          '趴在栏杆上的 ',
          kitaru.get_colored_name(),
          ' 在看到 ',
          me.get_colored_name(),
          ' 的时候象征性摆了摆耳朵。',
        ]);
      },
      () => {
        kitaru.say(['早……', callname, '。']);
        era.print([kitaru.get_colored_name(), ' 的心情看起来不是很好的样子。']);
      },
    );
  } else {
    if (sex_happy || sex_mark === 1) {
      message.push(() => {
        kitaru.say(['唔！早晨的 ', callname, ' 也很精神呢！']);
        kitaru.say(['只是被 ', callname, ' 这么盯着就有些兴奋起来了呢……']);
      });
    } else if (sex_happy || sex_mark === 2) {
      message.push(() => {
        kitaru.say('哈……哈啊！');
        kitaru.say(['双腿有些发软……只是被 ', callname, ' 盯着就这样了……']);
      });
    } else if (sex_happy || sex_mark === 3) {
      message.push(() => {
        kitaru.say(['想要……', callname, '……']);
        era.print([
          '这样说着，带着晨跑完略高体温的',
          kitaru.get_teen_sex_title(),
          '抱住了 ',
          me.get_colored_name(),
          '。',
        ]);
      });
    }
    if (love > 75 && relation > 400) {
      message.push(
        () => {
          kitaru.say('哈啊……起的稍稍有点早呢！');
          era.print([
            '在 ',
            me.get_colored_name(),
            ' 面前伸了一个懒腰，',
            kitaru.sex,
            '运动外套下的胸部像是被重点突出一般强调着自己的存在。',
          ]);
        },
        () => {
          kitaru.say('果然！每天只有看见命定之人才能安心呢');
          kitaru.say([callname, ' 也是这么想的吗？']);
          era.print([
            '挽住了 ',
            me.get_colored_name(),
            ' 的手臂，',
            kitaru.sex,
            '栗色的细长马耳敲打着 ',
            me.get_colored_name(),
            ' 的肩膀。',
          ]);
        },
        () => {
          kitaru.say(['占卜出来 ', callname, ' 今天会有桃花运呢！']);
          kitaru.say('你看，我不是出现在你身边了吗？');
          era.print([
            '踮起脚尖，',
            kitaru.sex,
            '呼出的气流拍打在 ',
            me.get_colored_name(),
            ' 的脖颈上。',
          ]);
        },
        () => {
          kitaru.say(['今天 ', callname, ' 不能离开我身边哦！']);
          kitaru.say('因为！占卜出来今天的开运道具就是小福我哦！');
        },
        () => {
          era.print([
            kitaru.get_colored_name(),
            ' 靠在栏杆上背对着 ',
            me.get_colored_name(),
            '……丝毫没有注意到自己的校服裙子在栏杆上卷起来了。',
          ]);
          kitaru.say(['欸嘿，被 ', callname, ' 看见了吗？']);
          era.print([
            '露出如狐狸般魅惑的笑容，',
            kitaru.get_teen_sex_title(),
            '不慌不忙的整理起自己的裙摆，被白色内裤包裹的臀部清晰可见。',
          ]);
        },
      );

      if (love > 89 && relation > 400) {
        const common = () => {
          era.print([
            kitaru.get_colored_name(),
            ' 靠在栏杆上背对着 ',
            me.get_colored_name(),
            '……丝毫没有注意到自己的校服裙子在栏杆上卷起来了。',
          ]);
          kitaru.say(['那个……', callname, ' 喜欢吗？']);
        };
        message.push(
          () => {
            common();
            era.print([
              '伴随着如妖狐般的魅惑笑容，',
              kitaru.get_teen_sex_title(),
              '甚至稍稍提起了裙摆，半包着福来安产形臀部白色蕾丝内裤透出其下的肉色。',
            ]);
          },
          () => {
            common();
            era.print([
              '伴随着如妖狐般的魅惑笑容，',
              kitaru.get_teen_sex_title(),
              '甚至稍稍提起了裙摆，明显略紧的黑色内裤在福来的安产臀部上勒出诱惑的沟壑。',
            ]);
          },
          () => {
            common();
            era.print([
              '伴随着如妖狐般的魅惑笑容，',
              kitaru.get_teen_sex_title(),
              '甚至稍稍提起了裙摆，由几根修长布料组成的情趣内裤近乎完全露出了 ',
              kitaru.get_colored_name(),
              ' 的臀肉。',
            ]);
          },
          () => {
            era.print([
              kitaru.get_colored_name(),
              ' 靠在栏杆上背对着 ',
              me.get_colored_name(),
              '……丝毫没有注意到自己的校服裙子在栏杆上卷起来了。',
            ]);
            kitaru.say('咿呀！！！');
            era.print([
              '趁着 ',
              kitaru.get_colored_name(),
              ' 还没发现 ',
              me.get_colored_name(),
              ' 使坏般的拍了一下，让',
              kitaru.get_teen_sex_title(),
              '抑制不住地发出了可爱的叫声。',
            ]);
          },
        );
      }
    }

    if (love >= 50 && relation >= 226) {
      message.push(
        () => {
          kitaru.say('我的命定之人！今天的训练计划是什么呢？');
          era.print([
            '这样说着，',
            kitaru.sex,
            '的尾巴缠在了 ',
            me.get_colored_name(),
            ' 的腿上。',
          ]);
        },
        () => {
          kitaru.say('话说！训练结束之后可以和我一起去摆摊吗？');
          kitaru.say([
            '恰好 ',
            sys_get_colored_callname(56, 58),
            ' 今天没空呢！',
          ]);
        },
        () => {
          kitaru.say([
            callname,
            ' 如果需要改运的话，我应该还是比 ',
            sys_get_colored_callname(56, 98),
            ' 擅长一点的！',
          ]);
          era.print([
            kitaru.get_colored_name(),
            ' 有些气鼓鼓的对最近的流言做出了回应。',
          ]);
        },
        () => {
          kitaru.say(['今天试着给 ', callname, ' 做了早餐哦！']);
          kitaru.say('虽然味道可能没那么好就是啦。');
          era.print([
            kitaru.get_colored_name(),
            ' 冲 ',
            me.get_colored_name(),
            ' 举起了手中提着的餐盒。',
          ]);
        },
        () => {
          kitaru.say(['那个，', callname, '！']);
          kitaru.say('结束后一起去商店街吃晚饭怎么样？');
        },
        () => {
          era.print([
            kitaru.get_colored_name(),
            ' 靠在栏杆上背对着 ',
            me.get_colored_name(),
            '……丝毫没有注意到自己的校服裙子在栏杆上卷起来了。',
          ]);
          kitaru.say(['欸！色狼 ', callname, '！']);
          era.print([
            '在出言提醒之前，',
            me.get_colored_name(),
            ' 还是由于脚步声被发现了，脸上泛着红晕的',
            kitaru.get_teen_sex_title(),
            '，意外冷静的整理起自己的裙摆。',
          ]);
        },
      );
    } else if (love < 50 || relation < 226) {
      message.push(
        () => kitaru.say('唔……需要我来占卜一下去哪里训练比较好吗？'),
        () => kitaru.say(['早上好！', callname, '，今天的训练计划是什么呢？']),
        () => kitaru.say([callname, '！今天的运势需要我占卜一下吗？']),
      );
    }
    if (relation >= 226) {
      message.push(
        () => {
          kitaru.say('今天运势很不错呢！那么……');
          kitaru.say(['……烦请 ', callname, ' 尽情使驭我吧！']);
          era.print([
            '模仿着电视里学到的样子，',
            kitaru.sex,
            '向 ',
            me.get_colored_name(),
            ' 行了一个不算太标准的鞠躬礼。',
          ]);
        },
        () => {
          kitaru.say('达摩摩在振动，看来我今天的灵力很充裕呢！');
          era.print([
            kitaru.sex,
            '冲 ',
            me.get_colored_name(),
            ' 指了指自己左耳挂着的红色达摩。',
          ]);
        },
        () => {
          kitaru.say('我已经事先占卜过了！');
          kitaru.say([callname, ' 今天的运势是大吉哦！']);
        },
      );
    }
  }
  get_random_entry(message)();
};
