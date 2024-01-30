const era = require('#/era-electron');

const recruit_flags = require('#/data/event/recruit-flags');

/**
 * 金星公园 - 招募
 * TODO
 */
module.exports = {
  async run() {
    await era.printAndWait(
      `就这样，和 ${era.get('callname:205:-2')} 的搭档生活，拉开了序幕。`,
    );
    era.set('cflag:205:招募状态', recruit_flags.yes);
    return false;
  },
};
