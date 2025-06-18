const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const CharaInmon = require('#/data/ero/chara-inmon');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');

/**
 * @this CustomizedEro
 * @author 雞雞
 * @param {CharaTalk} chara
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {{father_id:number,mother_id:number}} extra
 */
async function cum_in_womb(
  chara,
  me,
  callname,
  hook,
  { father_id, mother_id },
) {
  const father = get_chara_talk(father_id);
  const mother = get_chara_talk(mother_id);
  const talent_palam =
    era.get(`talent:${mother.id}:子宫敏感`) > 0 ||
    era.get(`mark:${mother.id}:欢愉`) >= 2;
  const talent_sex =
    era.get(`talent:${mother.id}:淫乱`) > 0 ||
    era.get(`talent:${mother.id}:榨精成瘾`) > 0;
  const sex_mark = era.get(`mark:${mother.id}:淫纹`) >= 2;
  const is_awake = sys_check_awake(mother.id);
  let talent_check = talent_palam || talent_sex;
  if (sex_mark) {
    await era.printAndWait([
      '在 ',
      mother.get_colored_name(),
      ' 的小腹上，代表子宫的心形图案正在慢慢填充……',
    ]);
  }
  if (
    era.get(`status:${mother.id}:经期`) > 0 ||
    era.get(`cflag:${mother.id}:妊娠阶段`) !== 1 << pregnant_stage_enum.no ||
    era.get(`status:${mother.id}:长效避孕药`) > 0 ||
    era.get(`status:${mother.id}:短效避孕药`) > 0 ||
    CharaInmon.get(mother.id).on(plugin_enum.no_preg)
  ) {
    if (is_awake && talent_check) {
      if (talent_palam) {
        await era.printAndWait([
          father.get_colored_name(),
          ' 温热的精液正在充盈 ',
          mother.get_colored_name(),
          ' 发疼的子宫……',
        ]);
        await era.printAndWait([
          mother.get_colored_name(),
          ' 沉溺在快感之中……',
        ]);
      } else if (era.get('tflag:强奸') === father.id) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 在屈辱中感受到了身为 ',
          {
            content: era.get(`cflag:${mother.id}:性别`) ? '扶她' : '女性',
            color: buff_colors[2],
          },
          ' 的极乐……',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 欣喜地品尝着身为 ',
          {
            content: era.get(`cflag:${mother.id}:性别`) ? '扶她' : '女性',
            color: buff_colors[2],
          },
          ' 的极乐……',
        ]);
      }
    }
  } else {
    const love = era.get(`love:${mother.id || father.id}`);
    if (love < 75) {
      await era.printAndWait([
        father.get_colored_name(),
        ' 射出的大量精子正朝向 ',
        mother.get_colored_name(),
        ' 毫无防备的卵子前进……',
      ]);
      if (is_awake && !talent_check) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 惊恐地意识到自己可能会怀孕的事实……',
        ]);
      }
    } else if (love < 90) {
      await era.printAndWait([
        father.get_colored_name(),
        ' 射出的大量精子正朝向 ',
        mother.get_colored_name(),
        ' 卸下防备的卵子前进……',
      ]);
      if (is_awake && !talent_check) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 朦胧地意识到自己可能会怀孕的事实……',
        ]);
      }
    } else {
      if (
        era.get(`status:${mother.id}:反避孕套`) > 0 &&
        era.get(`tcvar:${father.id}:避孕套`) > 0 &&
        sys_check_awake(father.id)
      ) {
        await era.printAndWait([
          father.get_colored_name(),
          ' 惊恐地发现自己射出的精液畅通无阻……',
        ]);
      } else {
        await era.printAndWait([
          father.get_colored_name(),
          ' 射出的大量精子正朝向 ',
          mother.get_colored_name(),
          ' 渴望怀孕的卵子前进……',
        ]);
      }
      if (is_awake && !talent_check) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 欣喜地品味着即将成为母亲的感觉……',
        ]);
      }
    }
    if (is_awake && talent_check) {
      if (talent_palam) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 沉溺在发疼的子宫被精液充盈的快感之中，丝毫没有顾及到怀孕的可能性……',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          era.get('tflag:强奸') !== father.id
            ? ' 在屈辱中感受到了身为 '
            : ' 欣喜地品尝着身为 ',
          {
            content: era.get(`cflag:${mother.id}:性别`) > 0 ? '扶她' : '女性',
            color: buff_colors[2],
          },
          ' 的极乐……',
        ]);
      }
    }
  }
}

module.exports = cum_in_womb;
