/**
 * @file 东海帝王 - 调教
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const NormalCommandLines = require('#/event/ero/common-lines/normal/normal-common');
const CustomizedEro = require('#/event/ero/ero-common');
const TeioNormalCommunications = require('#/event/ero/ero-lines-3/normal-communications');
const TeioNormalMakingOuts = require('#/event/ero/ero-lines-3/normal-making-outs');

class TeioNormalLines extends NormalCommandLines {
  constructor(root) {
    super(root, { communications: true, making_outs: true });
    this.communications = new TeioNormalCommunications(this);
    this.making_outs = new TeioNormalMakingOuts(this);
  }
}

module.exports = class extends CustomizedEro {
  constructor(chara_id) {
    super(chara_id, { normal: true });
    this.normal = new TeioNormalLines(this);
  }

  async report_pregnant_between_weeks(teio, me, callname, hook, extra_flag) {
    if (extra_flag.mother_id !== 3) {
      return await super.report_pregnant_between_weeks(
        teio,
        me,
        callname,
        hook,
        extra_flag,
      );
    }
    if (era.get('status:3:腿伤') > 0) {
      await era.printAndWait([
        me.get_colored_name(),
        ' 低头看着手里的报告，接受了里面显示的信息，抬头望向坐在窗前的担当。',
      ]);
      await era.printAndWait([
        '夕阳斜照入室，照在',
        teio.sex,
        '抚摸着自己小腹的手上，又打在',
        teio.sex,
        '轻轻摆动，略显无力的小腿上。',
      ]);
      await teio.say_and_wait(['训练员……训练员啊。']);
      await era.printAndWait([
        teio.sex,
        '笑了笑，指了指自己的肚子，对 ',
        me.get_colored_name(),
        ' 招招手。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 下定了决心，踩着影子走了过去。',
      ]);
      await era.printAndWait([me.get_couple_title(), '，是一家人。']);
    } else {
      await teio.say_and_wait(['训练员训练员——']);
      await era.printAndWait([
        me.get_colored_name(),
        ' 还没反应过来发生了什么，就下意识张开双臂抱住了惊慌失措跑过来的自家担当，愣了一会才看懂',
        teio.sex,
        '捧在手里的那份文件。',
      ]);
      await era.printAndWait(['是这样吗……']);
      await era.printAndWait([
        me.get_colored_name(),
        ' 目光下移，盯着',
        teio.sex,
        '的小腹。',
      ]);
      await me.say_and_wait(['那里就是，', teio.sex, '和我的……'], true);
      await era.printAndWait([
        me.get_colored_name(),
        ' 怀里的东西抽动了一下，',
        me.get_colored_name(),
        ' 回过神来，对上了自家担当那双眼睛。',
        teio.sex,
        '也回望着 ',
        me.get_colored_name(),
        '，神色逐渐温和成熟起来。',
      ]);
      await era.printAndWait([
        '好吧，',
        me.get_colored_name(),
        ' 想，以后要做的计划不止包括训练了。',
      ]);
    }
  }
};
