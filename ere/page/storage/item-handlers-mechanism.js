const era = require('#/era-electron');
const { cb_enum, count_events } = require('#/event/queue');

/** @param {Record<string,function(number):Promise>} handlers */
module.exports = (handlers) => {
  handlers[114] = async () => {
    era.println();
    if (!era.get('flag:回合爱慕惩罚')) {
      await era.printAndWait('【现实穿透启动中……】');
      const dict = count_events((e) => {
        const { type, arg } = e;
        return (
          type === cb_enum.love &&
          arg instanceof Array &&
          (arg[0] === 49 || arg[0] === 74 || arg[0] === 89 || arg[0] === 99)
        );
      });
      era.getAddedCharacters().forEach((cid) => {
        const love = era.get(`love:${cid}`);
        if (
          !dict[cid] &&
          (love === 49 || love === 74 || love === 89 || love === 99) &&
          era.get(`cflag:${cid}:爱慕暂拒`) !== love
        ) {
          era.set(`cflag:${cid}:爱慕暂拒`, love);
        }
      });
      await era.printAndWait('【现实规律改动完毕。】');
    } else {
      await era.printAndWait('【您好像不需要穿透现实。】');
    }
  };
};
