/**
 * @file 调教地文 - 银趴系
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');

const EroOrgy = require('#/event/ero/common/interface/ero-orgy');

const { get_random_entry } = require('#/utils/list-utils');

const { motion_enum, towards_enum } = require('#/data/ero/part-const');
const { penis_desc } = require('#/data/ero/status-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {CharaTalk} supporter
 * @param {HookArg} hook
 */
async function common_ask_spit_roast(attacker, defender, supporter, hook) {
  const part_name = hook.hook === ero_hooks.ask_spit_roast ? '小穴' : '屁穴';
  if (hook.arg) {
    const motion = era.get(`tcvar:${attacker}:体位`) === motion_enum.rev;
    const towards = era.get(`tcvar:${attacker}:朝向`) === towards_enum.right;
    await era.printAndWait([
      attacker.get_colored_name(),
      (motion ^ towards) > 0 ? ' 张开双腿' : ' 四肢着地',
      '摇晃着屁股，示意 ',
      defender.get_colored_name(),
      ' 插入自己的',
      part_name,
      '，又贪婪地把 ',
      supporter.get_colored_name(),
      ' 的肉棒含进口中……',
    ]);
  } else {
    await era.printAndWait([
      defender.get_colored_name(),
      ' 与 ',
      supporter.get_colored_name(),
      ' 一起不断进攻着 ',
      attacker.get_colored_name(),
      ' 的口穴和',
      part_name,
      '……',
    ]);
    await era.printAndWait([
      '身下的快感与口中肉棒令人窒息的冲击感觉让 ',
      attacker.get_colored_name(),
      ' 的脑中已经只剩下肉棒了……',
    ]);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {CharaTalk} supporter
 * @param {HookArg} hook
 */
async function common_spit_roast(attacker, defender, supporter, hook) {
  const part_name = hook.hook === ero_hooks.spit_roast ? '小穴' : '屁穴';
  if (hook.arg) {
    await era.printAndWait([
      defender.get_colored_name(),
      ' 被 ',
      attacker.get_colored_name(),
      ' 与 ',
      supporter.get_colored_name(),
      ' 一把按住，',
    ]);
    await era.printAndWait([
      '二人丝毫不考虑 ',
      defender.get_colored_name(),
      ' 的感受。',
    ]);
    await era.printAndWait([
      '只管一前一后地把兴奋得高高挺起的肉棒插入 ',
      defender.get_colored_name(),
      ' 的',
      part_name,
      '和口穴里用力抽插……',
    ]);
  } else {
    await era.printAndWait([
      attacker.get_colored_name(),
      ' 与 ',
      supporter.get_colored_name(),
      ' 一起不断进攻着 ',
      defender.get_colored_name(),
      ' 的',
      part_name,
      '和口穴，',
    ]);
    await era.printAndWait([
      '身下的快感与口中肉棒令人窒息的冲击感觉让 ',
      defender.get_colored_name(),
      ' 的脑中已经只剩下肉棒了……',
    ]);
  }
}

class EroNormalOrgy extends EroOrgy {
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async ask_double_blow_job(attacker, defender, supporter, hook) {
    if (hook.arg) {
      await era.printAndWait([
        attacker.get_colored_name(),
        ' 叉开腿，',
        penis_desc[get_penis_size(attacker.id)],
        ' 的肉棒昂然挺立，',
        defender.get_colored_name(),
        ' 和 ',
        supporter.get_colored_name(),
        ' 在 ',
        attacker.get_colored_name(),
        ' 的示意下张开嘴巴凑上前去……',
      ]);
    } else {
      await era.printAndWait([
        '在',
        attacker.get_colored_name(),
        ' 的示意下，',
        defender.get_colored_name(),
        ' 和 ',
        supporter.get_colored_name(),
        ' 用嘴巴交替侍奉着肉棒……',
      ]);
    }
  }

  /**
   * @author 黑奴队长
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async ask_double_fuck(attacker, defender, supporter, hook) {
    const buffer = [];
    if (hook.arg) {
      buffer.push(
        async () => {
          await era.printAndWait([
            attacker.get_colored_name(),
            ' 张开大腿，向着 ',
            defender.get_colored_name(),
            ' 与 ',
            supporter.get_colored_name(),
            ' 撑开小穴，看着二人挺立的肉棒舔着嘴唇',
          ]);
          await era.printAndWait([
            '在 ',
            attacker.get_colored_name(),
            ' 赤裸裸的邀请下，',
            defender.get_colored_name(),
            ' 与 ',
            supporter.get_colored_name(),
            ' 按捺不住，扑到 ',
            attacker.get_colored_name(),
            ' 身上交替抽插着那诱人的小穴……',
          ]);
        },
        async () => {
          const motion = era.get(`tcvar:${attacker}:体位`) === motion_enum.rev;
          const towards =
            era.get(`tcvar:${attacker}:朝向`) === towards_enum.right;
          await era.printAndWait([
            attacker.get_colored_name(),
            (motion ^ towards) > 0 ? ' 张开双腿' : ' 四肢着地',
            '摇晃着屁股，示意 ',
            defender.get_colored_name(),
            ' 与 ',
            supporter.get_colored_name(),
            ' 轮流用肉棒进入自己的深处。',
          ]);
        },
      );
    } else {
      buffer.push(
        async () => {
          const defender_penis = get_penis_size(defender.id),
            supporter_penis = get_penis_size(supporter.id);
          await era.printAndWait([
            attacker.get_colored_name(),
            ' 被夹在 ',
            defender.get_colored_name(),
            ' 与 ',
            supporter.get_colored_name(),
            ' 中间，',
            ...(defender_penis === supporter_penis
              ? ['两根 ', penis_desc[defender_penis], ' 的']
              : [
                  penis_desc[defender_penis],
                  ' 与 ',
                  penis_desc[supporter_penis],
                  ' ',
                ]),
            ' 的肉棒交替被 ',
            attacker.get_colored_name(),
            ' 淫荡的小穴吞没',
          ]);
          await era.printAndWait([
            '淫液把三人的下体附近染得一片狼藉，不时传来 ',
            attacker.get_colored_name(),
            ' 的一阵娇声……',
          ]);
        },
        async () => {
          await era.printAndWait([
            defender.get_colored_name(),
            ' 与 ',
            supporter.get_colored_name(),
            ' 不一样的肉棒与各自的插入方式，',
          ]);
          await era.printAndWait(['以及自己正在被两个人接连奸淫着的背德感，']);
          await era.printAndWait([
            '让 ',
            attacker.get_colored_name(),
            ' 每次被插入都享受到了非比寻常的快感。',
          ]);
        },
      );
    }
    await get_random_entry(buffer)();
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async ask_double_penetration(attacker, defender, supporter, hook) {
    if (hook.arg) {
      await era.printAndWait([
        attacker.get_colored_name(),
        ' 以女上位让 ',
        defender.get_colored_name(),
        ' 深入自己的小穴，然后示意 ',
        supporter.get_colored_name(),
        ' 也插入自己的屁穴里……',
      ]);
    } else {
      await era.printAndWait([
        defender.get_colored_name(),
        ' 与 ',
        supporter.get_colored_name(),
        ' 一起不断进攻着 ',
        attacker.get_colored_name(),
        ' 的前后两穴，',
      ]);
      await era.printAndWait(
        '双重的快感以及自己正在被两个人同时奸淫着的背德感，',
      );
      await era.printAndWait([
        '让 ',
        attacker.get_colored_name(),
        ' 每次被插入都不由得放声呻吟起来……',
      ]);
    }
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async ask_spit_roast(attacker, defender, supporter, hook) {
    await common_ask_spit_roast(attacker, defender, supporter, hook);
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async ask_spit_roast_anal_sex(attacker, defender, supporter, hook) {
    await common_ask_spit_roast(attacker, defender, supporter, hook);
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async fuck_69(attacker, defender, supporter, hook) {
    if (hook.arg) {
      await era.printAndWait([
        defender.get_colored_name(),
        ' 躺在床上与 ',
        supporter.get_colored_name(),
        ' 互相舔舐对方的 ',
        ['小穴', '肉棒和小穴', '小穴和肉棒', '肉棒'][
          2 * !!get_penis_size(defender.id) + !!get_penis_size(supporter.id)
        ],
        '，',
      ]);
      await era.printAndWait([
        attacker.get_colored_name(),
        ' 将兴奋至鼓胀的肉棒迫不及待地插进了 ',
        defender.get_colored_name(),
        ' 的小穴里……',
      ]);
    } else {
      await era.printAndWait([
        defender.get_colored_name(),
        ' 小穴溅出的淫水打湿了 ',
        supporter.get_colored_name(),
        ' 卖力舔舐 ',
        attacker.get_colored_name(),
        ' 肉棒抽插处的脸，',
      ]);
      await era.printAndWait([
        supporter.get_colored_name(),
        ' 也被 ',
        defender.get_colored_name(),
        ' 的嘴巴侍奉得娇喘连连……',
      ]);
    }
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async double_fuck(attacker, defender, supporter, hook) {
    if (hook.arg) {
      await era.printAndWait([
        defender.get_colored_name(),
        ' 被 ',
        attacker.get_colored_name(),
        ' 与 ',
        supporter.get_colored_name(),
        ' 一把按住，',
      ]);
      await era.printAndWait([
        '二人丝毫不考虑 ',
        defender.get_colored_name(),
        ' 的感受。',
      ]);
      await era.printAndWait([
        '只管轮流把兴奋得高高挺起的肉棒插入 ',
        defender.get_colored_name(),
        ' 的小穴里用力抽插……',
      ]);
    } else {
      await era.printAndWait([
        defender.get_colored_name(),
        ' 不断被 ',
        attacker.get_colored_name(),
        ' 与 ',
        supporter.get_colored_name(),
        ' 的肉棒轮流侵犯着。',
      ]);
      await era.printAndWait('二人的其中一方稍微觉得累了就会换人接力，');
      await era.printAndWait([
        '唯独 ',
        defender.get_colored_name(),
        ' 被奸淫得汁液四溅的小穴几乎没有一息的空闲，',
      ]);
      await era.printAndWait('连意识都仿佛快要离自己而去了……');
    }
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async double_penetration(attacker, defender, supporter, hook) {
    if (hook.arg) {
      await era.printAndWait([
        defender.get_colored_name(),
        ' 被 ',
        attacker.get_colored_name(),
        ' 拉到身上插入小穴，',
      ]);
      await era.printAndWait([
        supporter.get_colored_name(),
        ' 也同时插入 ',
        defender.get_colored_name(),
        ' 的屁穴里……',
      ]);
    } else {
      await era.printAndWait([
        attacker.get_colored_name(),
        ' 与 ',
        supporter.get_colored_name(),
        ' 一起不断进攻着 ',
        defender.get_colored_name(),
        ' 的前后两穴，',
      ]);
      await era.printAndWait(
        '双重的快感以及自己正在被两个人同时奸淫着的背德感，',
      );
      await era.printAndWait([
        '让 ',
        defender.get_colored_name(),
        ' 每次被插入都不由得放声呻吟起来……',
      ]);
    }
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async spit_roast(attacker, defender, supporter, hook) {
    await common_spit_roast(attacker, defender, supporter, hook);
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async spit_roast_anal_sex(attacker, defender, supporter, hook) {
    await common_spit_roast(attacker, defender, supporter, hook);
  }
}

module.exports = EroNormalOrgy;
