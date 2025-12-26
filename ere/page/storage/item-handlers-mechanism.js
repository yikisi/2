const era = require('#/era-electron');

const { cb_enum, count_events, get: get_queue } = require('#/event/queue');

const EventMarks = require('#/data/event/event-marks');

/** @param {Record<string,function(number):Promise>} handlers */
module.exports = (handlers) => {
  handlers[114] = async () => {
    era.println();
    await era.printAndWait('【现实穿透启动中……】');
    const events = get_queue();
    const chara_list = era.getAddedCharacters().filter((cid) => cid > 0);

    const ev_dict = {};
    // 事件标识修复
    for (const hook in events) {
      const list = events[hook];
      for (const e of list) {
        if (e.chara_id > 0) {
          const t = (ev_dict[e.chara_id] ||= {});
          t[hook] = (t[hook] || 0) + 1;
        }
      }
    }
    for (const cid of chara_list) {
      const marks = EventMarks.get(cid);
      const raw = marks.raw();
      for (const hook in raw) {
        if (!ev_dict[cid] || !ev_dict[cid][hook]) {
          marks.set(hook, 0);
        } else if (raw[hook] !== ev_dict[cid][hook]) {
          marks.set(hook, ev_dict[cid][hook]);
        }
      }
    }

    // 爱慕事件修复
    if (!era.get('flag:回合爱慕惩罚')) {
      const dict = count_events((e) => {
        const { type, arg } = e;
        return (
          type === cb_enum.love &&
          Array.isArray(arg) &&
          (arg[0] === 49 || arg[0] === 74 || arg[0] === 89 || arg[0] === 99)
        );
      });
      chara_list.forEach((cid) => {
        const love = era.get(`love:${cid}`);
        if (
          !dict[cid] &&
          (love === 49 || love === 74 || love === 89 || love === 99) &&
          era.get(`cflag:${cid}:爱慕暂拒`) !== love
        ) {
          era.set(`cflag:${cid}:爱慕暂拒`, love);
        }
      });
    }
    await era.printAndWait('【现实规律修复完毕。】');
  };
};
