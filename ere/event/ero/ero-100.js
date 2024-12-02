/**
 * @file 奇锐骏 - 调教
 *
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 */
const NormalCommandLines = require('#/event/ero/common-lines/normal/normal-common');
const SleepCommandLines = require('#/event/ero/common-lines/sleep/sleep-common');
const CustomizedEro = require('#/event/ero/ero-common');
const AcuteNormalCommunications = require('#/event/ero/ero-lines-100/normal-communications');
const AcuteNormalFucking = require('#/event/ero/ero-lines-100/normal-fucking');
const AcuteNormalMakingOuts = require('#/event/ero/ero-lines-100/normal-making-outs-final');
const AcuteNormalOrgy = require('#/event/ero/ero-lines-100/normal-orgy');
const AcuteNormalSm = require('#/event/ero/ero-lines-100/normal-sm');
const AcuteSleepCommunications = require('#/event/ero/ero-lines-100/sleep-communications');

class AcuteNormalLines extends NormalCommandLines {
  constructor(root) {
    super(root, {
      communications: true,
      making_outs: true,
      fucking: true,
      sm: true,
      orgy: true,
    });
    this.communications = new AcuteNormalCommunications(this);
    this.making_outs = new AcuteNormalMakingOuts(this);
    this.fucking = new AcuteNormalFucking(this);
    this.sm = new AcuteNormalSm(this);
    this.orgy = new AcuteNormalOrgy(this);
  }
}

class AcuteSleepLines extends SleepCommandLines {
  constructor(root) {
    super(root, { communications: true });
    this.communications = new AcuteSleepCommunications(this);
  }
}

module.exports = class extends CustomizedEro {
  constructor(arg) {
    super(arg, { normal: true, sleep: true });
    this.normal = new AcuteNormalLines(this);
    this.sleep = new AcuteSleepLines(this);
  }
};
