/**
 * @file 日常地文
 *
 * @author 雞雞
 * @author 无名黑奴
 */
const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { unexpected_pregnant_enum } = require('#/data/ero/status-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

module.exports = async (chara_id, _, extra_flag) => {
  const child = get_chara_talk(chara_id),
    father = get_chara_talk(era.get(`cflag:${chara_id}:父方角色`)),
    mother = get_chara_talk(era.get(`cflag:${chara_id}:母方角色`)),
    love = era.get(`love:${mother.id || father.id}`),
    stockholm = era.get(`mark:${mother.id || father.id}:同心`),
    is_pregnant_slave = !mother.id && era.get('flag:惩戒力度') === 3;
  era.drawLine();
  if (extra_flag.stage === 0) {
    // 育儿
    await print_event_name('成长', child);
    if (love >= 90) {
      await era.printAndWait([
        mother.get_colored_name(),
        ' 与 ',
        father.get_colored_name(),
        ' 一起愉快地和孩子玩，三人度过了一段快乐的亲子时光。',
      ]);
      if (
        new LifeEventMarks(chara_id).unexpected_child ===
        unexpected_pregnant_enum.father_sleep
      ) {
        await era.printAndWait([
          father.get_colored_name(),
          ' 看向与自己有点神似的 ',
          child.get_colored_name(),
          '，思考着以后的家庭生活……',
        ]);
      }
    } else {
      if (
        new LifeEventMarks(chara_id).unexpected_child ===
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
          era.get(`cflag:${father.id}:身高`) >=
          era.get(`cflag:${mother.id}:身高`) + 5
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
        if (is_pregnant_slave) {
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
        if (stockholm >= 2) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' 最后还是放下了防备，与 ',
            father.get_colored_name(),
            ' 一起跟孩子玩耍。',
          ]);
        }
      }
    }
  } else if (extra_flag.stage === 1) {
    // 本格化
    await print_event_name('本格化', child);
    new LifeEventMarks(chara_id).unexpected_child = 0;
    if (love >= 90) {
      await era.printAndWait([
        mother.get_colored_name(),
        ' 依在 ',
        father.get_colored_name(),
        ' 的肩上看着孩子一天一天成长，露出了幸福的笑容。',
      ]);
    } else {
      if (is_pregnant_slave) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 一想到与自己如此亲昵的孩子很快也会长出羽翼离开自己便感觉失落。',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 看着孩子一天一天成长，心里对 ',
          father.get_colored_name(),
          ' 的想法就越是复杂。',
        ]);
      }
      if (stockholm >= 2) {
        await era.printAndWait([
          '不过 ',
          mother.get_colored_name(),
          ' 依在 ',
          father.get_colored_name(),
          ' 的肩上看着孩子一天一天成长，还是稍微品尝到了满足感。',
        ]);
      }
    }
  } else if (extra_flag.stage === 2) {
    // 入学
    await print_event_name('入学', child);
    if (love >= 90) {
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
      if (is_pregnant_slave) {
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
      if (stockholm >= 2) {
        await era.printAndWait([
          '不过 ',
          mother.get_colored_name(),
          ' 还是把这些念头抛开，积极地为孩子准备上学需要用的东西。',
        ]);
      }
    }
  }
};
