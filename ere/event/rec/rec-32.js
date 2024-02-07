const era = require('#/era-electron');
const { add_event, cb_enum } = require('#/event/queue');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

/**
 * 爱丽速子的招募事件，id=32
 *
 * @author 名贵易碎电子盆栽孕袋女士
 */
module.exports = {
  /**
   * @param {number} stage_id
   * @returns {Promise<boolean>}
   */
  async run(stage_id) {
    const your_name = era.get('callname:0:-2');
    const chara_name = era.get('callname:32:-2');

    switch (stage_id) {
      case event_hooks.recruit:
        era.print(
          `${your_name} 在今天的选拔赛看到了难忘的一幕，一位有着绝代跑姿的马娘`,
        );
        era.print('她起跑的瞬间，她冲刺的瞬间，她冲线的瞬间');
        era.print('如光一般快速，如光一般闪耀，如光一般……虚幻');
        await era.printAndWait(
          `可惜的是，人潮阻拦了 ${your_name} 的脚步，${your_name} 并没有和她搭话的机会`,
        );
        era.println();

        era.print(`${your_name} 有种急迫感，想要再次看到那名马娘，看见那道光`);
        await era.printAndWait(
          `${your_name} 也不知道为什么会有最后那个想法，仿佛虚幻这个词忽然出现在 ${your_name} 的脑海中一般……`,
        );
        era.set('cflag:32:随机招募', 0);
        era.set('flag:物色对象', 32);
        new EventMarks(0).add(event_hooks.recruit_start);
        add_event(
          event_hooks.recruit_start,
          new EventObject(32, cb_enum.recruit),
        );
        break;
      case event_hooks.recruit_start:
        era.print(`${your_name} 依旧忘不了几天前在这里看见的那副跑姿`);
        era.print(
          `${your_name} 找遍了一般未出道马娘会出没的地方，训练场、模拟赛场、健身房、食堂`,
        );
        await era.printAndWait(
          `这几天，${your_name} 再没见过那名马娘的身影，仿佛凭空消失了一般`,
        );
        era.println();

        era.print(`${your_name} 靠在赛场边的围栏，忍不住叹了口气`);
        await era.printAndWait(
          `此时，${your_name} 的耳朵捕捉到了一些断断续续的话语`,
        );
        era.println();

        await era.printAndWait(
          `？？？「……是啊，要是再没有训练员的话恐怕只能……可惜了，明明有着那么优秀的资质……${chara_name}」`,
        );
        era.println();

        await era.printAndWait(
          `${your_name} 没有精力去关注对方是谁，${chara_name}，${your_name} 在心中咀嚼着这个名字，不知为何，${your_name} 在听见这个名字时内心猛地一震，${your_name} 有种直觉，这就是 ${your_name} 在寻找的马娘她的名字`,
        );
        era.println();

        era.print(`速子（Tachyon），目前已知的最快粒子`);
        era.print(`和如光一般奔跑的她，这不是最为贴切的名字吗`);
        era.print(
          `${your_name} 不禁感到兴奋，但此时，${your_name} 才想到刚才学生会长说的话`,
        );
        era.print(`（没有训练员……恐怕只能……）`);
        await era.printAndWait(`${your_name} 急切的冲了出去`);
        era.println();

        era.print(`寻找她的过程，意外的容易`);
        era.print(`提到${chara_name}，似乎许多学生都有印象`);
        era.print(`？？？「上课从来不出现」`);
        era.print(`？？？「随便占据了空教室当成自己的实验室」`);
        era.print(`？？？「常常给看见的马娘塞奇怪的药剂」`);
        era.print(`？？？「速子前辈的药甜甜的，很好喝哦」`);
        await era.printAndWait(
          `各种奇怪的传闻，却没能传入 ${your_name} 的心里，${your_name} 只是一个劲的想要找到她`,
        );
        era.println();

        await era.printAndWait(
          `${your_name} 站到了传闻中的实验室门前，敲响了门`,
        );
        era.println();

        era.print(`${chara_name}「请进～～」`);
        await era.printAndWait(`里面传来了一阵懒散的声音`);
        era.println();

        era.print(`然而，${your_name} 忽然有些胆怯了`);
        era.print(`不是因为那些传闻，而是一种近似于粉丝即将见到偶像的感觉`);
        era.print(
          `门后就要见到，那名使自己这三天来茶不思饭不想，宛若疯魔的马娘了`,
        );
        await era.printAndWait(
          `或许是等待的太久，在 ${your_name} 下定决心前，门先打开了`,
        );
        era.println();

        era.print(
          '门后出现的，是一名穿着白大褂的马娘，栗色的发梢，干净利落的短发，胸前的挺拔哪怕是白大褂都无法盖住',
        );
        era.print(
          '然后，她的腿……意外的纤细，哪怕穿着裤子也能看出，虽然大多的马娘都是身体纤细却有着无法想象的巨大怪力，但她的腿，明显也比其他马娘纤细许多',
        );
        era.print(`这就是那天 ${your_name} 会感到虚幻的原因`);
        era.print('但是，比腿还更使人震撼的，是她的双眼');
        era.print('如百叶窗一般，空虚的红色双眼');
        await era.printAndWait('明明盯着自己，却仿佛空无一物');
        era.println();

        await era.printAndWait(
          `${your_name}不由得感到紧张，原本准备好的招募用台词都化为乌有，${your_name} 只能结结巴巴的表达出自己想要招募对方的意愿`,
        );
        era.println();

        await era.printAndWait(`她盯着 ${your_name} 的眼睛良久，然后露出笑容`);
        era.println();

        await era.printAndWait(
          `随后，${your_name} 在她的指示下签下了一连串的不平等条约，包括必须帮助自己试药、训练或比赛随她的心情决定是否参加等等`,
        );
        era.println();

        await era.printAndWait(`${your_name} 和 ${chara_name} 的三年开始了……`);

        new EventMarks(0).sub(event_hooks.recruit_start);
        era.set('cflag:32:招募状态', recruit_flags.yes);
        era.set('flag:物色对象', 0);
        era.set('callname:32:0', '豚鼠君');
        return true;
    }
    return false;
  },
};
