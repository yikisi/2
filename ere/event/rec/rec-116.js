const era = require('#/era-electron');

const CustomizedRecruit = require('#/event/rec/rec-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');

module.exports = class extends CustomizedRecruit {
  /**
   * @param {CharaTalk} donna
   * @param {CharaTalk} me
   */
  async footprint(donna, me) {
    const verxina = get_chara_talk(90);
    await print_event_name('蹄印', donna);
    era.drawLine({ content: `${me.name} 的视角` });
    await era.printAndWait('冀望之物锱两可数，过眼烟云恒如河沙。');
    await era.printAndWait([
      '选拔赛，一天十二场、从早到晚，间歇安排，越受期待的',
      donna.get_uma_sex_title(),
      '普遍在更靠后的比赛中出现。',
    ]);
    await era.printAndWait(
      '特雷森完全是按商业性正规比赛的规矩举行选拔赛，也就意味着——',
    );
    await me.say_and_wait('连选拔赛都这么规矩，真是要把人急死了', true);
    await era.printAndWait(
      [{ content: '"12R 15:30"', fontSize: '1.5rem', fontWeight: 'bold' }],
      { align: 'center', isParagraph: true },
    );
    await era.printAndWait('LED刷新的一瞬，我立即冲揭示板血淋淋地钉死眼睛。');
    era.println();
    await me.say_and_wait('从前往后第五排的、方位上最方便观察的位置', true);
    era.println();
    await era.printAndWait(
      '为了不被碍事者占掉这块位置，我放弃了多余的步骤，早饭、没吃，午饭、没吃。',
    );
    await era.printAndWait([
      '矿泉水早就喝干了，这是自己的软弱招致的报应，没能忍心拒绝某名讨水的',
      donna.get_uma_sex_title(),
      '的结果，但我也百分之五十地认为——那是必须做的。毕竟要是',
      donna.sex,
      '讨来一瓶来自陌生人的饮用水后，我又怎知道里头有什么被',
      donna.sex,
      '喝下去呢？',
    ]);
    await era.printAndWait(
      '从早十到现在，我滴水未进。半小时前更淅沥沥下了场中雨，整个场地状态糟糕的像我一样，可它却水分充足，真令我羡煞。',
    );
    era.println();
    await me.say_and_wait('但是，没有关系，全都可以忍受。');
    era.println();
    await era.printAndWait('因为我知道自己想要什么。');
    console.log(verxina);
  }

  /**
   * @param {CharaTalk} donna
   * @param {CharaTalk} me
   * @param {EventObject} event_object
   */
  async good_news(donna, me, event_object) {
    console.log(donna, me, event_object);
  }

  async recruit(stage, event_object) {
    const donna = get_chara_talk(116),
      me = get_chara_talk(0);
    if (stage === event_hooks.recruit) {
      await this.footprint(donna, me);
    } else {
      await this.good_news(donna, me, event_object);
    }
  }
};
