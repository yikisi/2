/**
 * @file 爱丽速子 - 招募
 * @author 幽白書
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} tachyon
   * @param {CharaTalk} you
   */
  async rec_start(tachyon, you) {
    era.print(
      `${you.name} 在今天的选拔赛看到了难忘的一幕，一位有着绝代跑姿的${tachyon.uma_sex_title}`,
    );
    era.print(
      `${tachyon.sex}起跑的瞬间，${tachyon.sex}冲刺的瞬间，${tachyon.sex}冲线的瞬间`,
    );
    era.print('如光一般快速，如光一般闪耀，如光一般……虚幻');
    await era.printAndWait(
      `可惜的是，人潮阻拦了 ${you.name} 的脚步，${you.name} 并没有和${tachyon.sex}搭话的机会`,
    );
    era.println();

    era.print(
      `${you.name} 有种急迫感，想要再次看到那名${tachyon.uma_sex_title}，看见那道光`,
    );
    await era.printAndWait(
      `${you.name} 也不知道为什么会有最后那个想法，仿佛虚幻这个词忽然出现在 ${you.name} 的脑海中一般……`,
    );
  },
  /**
   * @param {CharaTalk} tachyon
   * @param {CharaTalk} you
   */
  async rec_final(tachyon, you) {
    era.print(`${you.name} 依旧忘不了几天前在这里看见的那副跑姿`);
    era.print(
      `${you.name} 找遍了一般未出道${tachyon.uma_sex_title}会出没的地方，训练场、模拟赛场、健身房、食堂`,
    );
    await era.printAndWait(
      `这几天，${you.name} 再没见过那名${tachyon.uma_sex_title}的身影，仿佛凭空消失了一般`,
    );
    era.println();

    era.print(`${you.name} 靠在赛场边的围栏，忍不住叹了口气`);
    await era.printAndWait(
      `此时，${you.name} 的耳朵捕捉到了一些断断续续的话语`,
    );
    era.println();

    await era.printAndWait([
      `？？？「……是啊，要是再没有训练员的话恐怕只能……可惜了，明明有着那么优秀的资质……`,
      tachyon.get_colored_name(),
      `」`,
    ]);
    era.println();

    await era.printAndWait([
      `${you.name} 没有精力去关注对方是谁，`,
      tachyon.get_colored_name(),
      `，${you.name} 在心中咀嚼着这个名字，不知为何，${you.name} 在听见这个名字时内心猛地一震，${you.name} 有种直觉，这就是 ${you.name} 在寻找的${tachyon.uma_sex_title}${tachyon.sex}的名字`,
    ]);
    era.println();

    era.print(`速子（Tachyon），目前已知的最快粒子`);
    era.print(`和如光一般奔跑的${tachyon.sex}，这不是最为贴切的名字吗`);
    era.print(
      `${you.name} 不禁感到兴奋，但此时，${you.name} 才想到刚才学生说的话`,
    );
    era.print(`（没有训练员……恐怕只能……）`);
    await era.printAndWait(`${you.name} 急切的冲了出去`);
    era.println();

    era.print(`寻找${tachyon.sex}的过程，意外的容易`);
    era.print([`提到`, tachyon.get_colored_name(), `，似乎许多学生都有印象`]);
    era.print(`？？？「上课从来不出现」`);
    era.print(`？？？「随便占据了空教室当成自己的实验室」`);
    era.print(`？？？「常常给看见的${tachyon.uma_sex_title}塞奇怪的药剂」`);
    era.print(`？？？「速子前辈的药甜甜的，很好喝哦」`);
    await era.printAndWait(
      `各种奇怪的传闻，却没能传入 ${you.name} 的心里，${you.name} 只是一个劲的想要找到${tachyon.sex}`,
    );
    era.println();

    await era.printAndWait(`${you.name} 站到了传闻中的实验室门前，敲响了门`);
    era.println();

    tachyon.say(`请进～～`);
    await era.printAndWait(`里面传来了一阵懒散的声音`);
    era.println();

    era.print(`然而，${you.name} 忽然有些胆怯了`);
    era.print(`不是因为那些传闻，而是一种近似于粉丝即将见到偶像的感觉`);
    era.print(
      `门后就要见到，那名使自己这三天来茶不思饭不想，宛若疯魔的${tachyon.sex}了`,
    );
    await era.printAndWait(
      `或许是等待的太久，在 ${you.name} 下定决心前，门先打开了`,
    );
    era.println();

    era.print(
      `门后出现的，是一名穿着白大褂的${tachyon.uma_sex_title}，栗色的发梢，干净利落的短发${tachyon.sex_code - 1 ? '，胸前的挺拔哪怕是白大褂都无法盖住' : ''}`,
    );
    era.print(
      `然后，${tachyon.sex}的腿……意外的纤细，哪怕穿着裤子也能看出，虽然大多的${tachyon.uma_sex_title}都是身体纤细却有着无法想象的巨大怪力，但${tachyon.sex}的腿，明显也比其他${tachyon.uma_sex_title}纤细许多`,
    );
    era.print(`这就是那天 ${you.name} 会感到虚幻的原因`);
    era.print(`但是，比腿还更使人震撼的，是${tachyon.sex}的双眼`);
    era.print('如百叶窗一般，空虚的红色双眼');
    await era.printAndWait('明明盯着自己，却仿佛空无一物');
    era.println();

    await era.printAndWait(
      `${you.name}不由得感到紧张，原本准备好的招募用台词都化为乌有，${you.name} 只能结结巴巴的表达出自己想要招募对方的意愿`,
    );
    era.println();

    await era.printAndWait(
      `${tachyon.sex}盯着 ${you.name} 的眼睛良久，然后露出笑容`,
    );
    era.println();

    await era.printAndWait(
      `随后，${you.name} 在${tachyon.sex}的指示下签下了一连串的不平等条约，包括必须帮助${tachyon.sex}试药、训练或比赛随${tachyon.sex}的心情决定是否参加等等`,
    );
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      ' 和 ',
      tachyon.get_colored_name(),
      ' 的三年开始了……',
    ]);
  },
};
