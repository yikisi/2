/**
 * @file 日常地文 - 孩子
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { unexpected_pregnant_enum } = require('#/data/ero/status-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

module.exports = {
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   */
  select_0(child, you) {
    const talk = [
      () =>
        era.print([
          '幼小的孩子还在牙牙学语，一看到 ',
          you.get_colored_name(),
          ' 就欢快地踏着小碎步奔跑过来。',
        ]),
      () =>
        era.print([
          child.get_colored_name(),
          ' 在地上不住滚动，',
          you.get_colored_name(),
          ' 担心 ',
          child.get_colored_name(),
          ' 会不会一滚直接滚到地球的另一端。',
        ]),
    ];
    get_random_entry(talk)();
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   */
  select_1(child, you) {
    era.print([
      child.get_colored_name(),
      ' 在 ',
      you.get_colored_name(),
      ' 带领下练习奔跑，夕阳下的河边步道映照出两个长长的影子。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   * @param {CharaTalk} parent
   */
  select_2(child, you, parent) {
    era.print([
      child.get_colored_name(),
      ' 随着年龄渐长，已经出落成了如同 ',
      parent.get_colored_name(),
      ' 一样的大美人，想必在赛跑生涯上也能青出于蓝吧。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async talk_0(child, you, callname) {
    await child.say_and_wait([
      callname,
      '……！我是 ',
      child.get_colored_name(),
      ' 哦！',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async talk_1(child, you, callname) {
    await child.say_and_wait([callname, '！我饿了！']);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async talk_2(child, you, callname) {
    const temp = [];
    // TALENTNAME:35 = 腋毛成长
    if (era.get(`talent:${child.id}:35`)) {
      temp.push('腋下长出毛了……');
    }
    // TALENTNAME:36 = 阴毛成长
    if (era.get(`talent:${child.id}:36`)) {
      temp.push('下面长出毛了……');
    }
    if (child.sex_code !== 1) {
      temp.push('胸部变大了……');
      // TALENTNAME:32 = 泌乳
      if (era.get(`talent:${child.id}:32`)) {
        temp.push('流出白白的东西了……');
      }
    }
    if (child.sex_code > 0) {
      temp.push('下面变大了……');
    }
    await child.say_and_wait([
      callname,
      '……我的身体感觉有点不对劲……那个，',
      get_random_entry(temp),
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async talk_estrus(child, you, callname) {
    child.say(['哈啊……哈啊……', callname, '……我好热啊……这就是发情期……？']);
    await era.printAndWait([
      '之后，',
      you.get_colored_name(),
      ' 连忙去给 ',
      child.get_colored_name(),
      ' 买来发情抑制剂。',
    ]);
  },
  growth_0: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} child
     * @param {CharaTalk} father
     * @param {CharaTalk} mother
     */
    const f = async (child, father, mother) => {
      if (era.get(`love:${mother.id || father.id}`) >= 90) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 与 ',
          father.get_colored_name(),
          ' 一起愉快地和孩子玩，三人度过了一段快乐的亲子时光。',
        ]);
        if (
          LifeEventMarks.get_marks(child.id).unexpected_child ===
          unexpected_pregnant_enum.father_sleep
        ) {
          await era.printAndWait([
            father.get_colored_name(),
            ' 看向与自己有点神似的 ',
            child.get_colored_name(),
            '，思考着以后的家庭生活……',
          ]);
        }
      } else if (
        LifeEventMarks.get_marks(child.id).unexpected_child ===
        unexpected_pregnant_enum.father_sleep
      ) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 与 ',
          father.get_colored_name(),
          ' 一起愉快地和孩子玩，三人度过了一段快乐的亲子时光。',
        ]);
        await era.printAndWait([
          '之后，',
          mother.get_colored_name(),
          ' 对将孩子背在背上的 ',
          father.get_colored_name(),
          ' 投以抱有歉意的眼神。',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          ' 摸摸 ',
          mother.get_colored_name(),
          '的',
          // CFLAGNAME:6 = 身高
          era.get(`cflag:${father.id}:6`) >= era.get(`cflag:${mother.id}:6`) + 5
            ? '头'
            : '脸颊',
          '，表示自己并不介意。',
        ]);
        await era.printAndWait([
          '得到原谅的 ',
          mother.get_colored_name(),
          ' 再次将视线投向 ',
          child.get_colored_name(),
          ' 露出了慈爱的笑容。',
        ]);
      } else {
        if (!mother.id && era.get('flag:35') >= 2) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' 露出温暖的笑容与孩子玩耍，',
            child.get_colored_name(),
            ' 这孩子也成为了 ',
            mother.get_colored_name(),
            ' 悲惨人生中少数的慰藉。',
          ]);
        } else {
          await era.printAndWait([
            mother.get_colored_name(),
            ' 没有抗拒 ',
            father.get_colored_name(),
            ' 想要和孩子相处的举动，但对 ',
            father.get_colored_name(),
            ' 爱搭不理。',
          ]);
        }
        // MARKNAME:2 = 同心
        if (era.get(`mark:${mother.id || father.id}:2`) >= 2) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' 最后还是放下了防备，与 ',
            father.get_colored_name(),
            ' 一起跟孩子玩耍。',
          ]);
        }
      }
    };
    f.title = '成长';
    return f;
  })(),
  growth_1: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} child
     * @param {CharaTalk} father
     * @param {CharaTalk} mother
     */
    const f = async (child, father, mother) => {
      if (era.get(`love:${mother.id || father.id}`) >= 90) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 依在 ',
          father.get_colored_name(),
          ' 的肩上看着孩子一天一天成长，露出了幸福的笑容。',
        ]);
      } else {
        if (!mother.id && era.get('flag:35') >= 2) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' 看着孩子一天一天成长，心里对 ',
            father.get_colored_name(),
            ' 的想法就越是复杂。',
          ]);
        } else {
          await era.printAndWait([
            mother.get_colored_name(),
            ' 一想到与自己如此亲昵的孩子很快也会长出羽翼离开自己便感觉失落。',
          ]);
        }
        // MARKNAME:2 = 同心
        if (era.get(`mark:${mother.id || father.id}:2`) >= 2) {
          await era.printAndWait([
            '不过 ',
            mother.get_colored_name(),
            ' 依在 ',
            father.get_colored_name(),
            ' 的肩上看着孩子一天一天成长，还是稍微品尝到了满足感。',
          ]);
        }
      }
    };
    f.title = '本格化';
    return f;
  })(),
  growth_2: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} child
     * @param {CharaTalk} father
     * @param {CharaTalk} mother
     */
    const f = async (child, father, mother) => {
      if (era.get(`love:${mother.id || father.id}`) >= 90) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 与 ',
          father.get_colored_name(),
          ' 在孩子的入学同意书上各自签上了自己的名字。',
        ]);
        await era.printAndWait([
          '下完笔后，',
          mother.get_colored_name(),
          ' 便开始积极地为孩子准备上学需要用的东西。',
        ]);
      } else {
        if (!mother.id && era.get('flag:35') >= 2) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' 得知孩子也要入学特雷森学园后，突然感到背脊一阵发凉……',
          ]);
        } else {
          await era.printAndWait([
            mother.get_colored_name(),
            ' 与 ',
            father.get_colored_name(),
            ' 在孩子的入学同意书上各自签上了自己的名字。',
          ]);
          await era.printAndWait([
            '直到下完笔后，',
            mother.get_colored_name(),
            ' 仍然会感到一股非现实的虚幻感。',
          ]);
        }
        // MARKNAME:2 = 同心
        if (era.get(`mark:${mother.id || father.id}:2`) >= 2) {
          await era.printAndWait([
            '不过 ',
            mother.get_colored_name(),
            ' 还是把这些念头抛开，积极地为孩子准备上学需要用的东西。',
          ]);
        }
      }
    };
    f.title = '入学';
    return f;
  })(),
  /**
   * @param {CharaTalk} child
   * @param {PrintedSpan} callname
   * @param {PrintedSpan} call_child
   */
  async load_talk(child, callname, call_child) {
    // CFLAGNAME:65 = 成长阶段
    switch (era.get(`cflag:${child.id}:15`)) {
      case 0:
        await child.say_and_wait([
          '呜呜哇哇哇——',
          callname,
          '——我要 ',
          callname,
          '——',
        ]);
        break;
      case 1:
        await child.say_and_wait([
          callname,
          '……啊喏……能不能，不要丢下 ',
          call_child,
          '……（抽泣）',
        ]);
    }
  },
};
