/**
 * @file 黄金船 - 招募
 * @author 雞雞
 */
const era = require('#/era-electron');

const CustomizedRecruit = require('#/event/rec/rec-common');

const chara_color = require('#/data/chara-colors').chara_colors[7];
const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_trainer_title } = require('#/data/info-generator');

const { __ } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit(stage) {
    let chara_name = era.get('callname:7:-2');
    chara_name = __(`name.${chara_name}`, chara_name);
    const your_name = era.get('callname:0:-2');
    if (stage === event_hooks.recruit) {
      await era.printAndWait(
        `这个早晨朗日清天，${your_name} 穿着一身凛然的训练员装束来到了训练场。`,
      );
      await era.printAndWait(
        `身为${get_trainer_title().full()}，${your_name} 的职责就是指导年青有为的赛马娘们更上一层楼`,
      );
      await era.printAndWait(
        `突然，${your_name} 注意到了一位穿着运动服，身材高挑的银发赛马娘。她的脸上宛如裹上冰霜般毫无表情，也就是所谓的扑克脸。这个赛马娘还戴着一顶……类似耳机与帽子混合体一样的东西，但 ${your_name} 通过经验知道这是一种赛马娘的传统饰物。${your_name} 眯起眼睛细细观察，她似乎正在为接下来的选拔赛作准备热身的样子。她的身姿很柔软，轻而易举地做到了下腰、屈伸等拉筋动作。`,
      );
      await era.printAndWait(
        `胸前的两球柔软半化冰淇淋也适时地随着银发美人的动作摇摇晃晃，而她那被运动裤包裹下不可视的健康紧实臀部以及阴影里的神秘花园又牢牢地吸引着 ${your_name} 仔细端详。赛马娘少女已经初见成熟的玉体无时无刻都在吸引着 ${your_name} 的眼球……醒醒，${your_name} 可是专业的训练员。`,
      );
      await era.printAndWait(
        `但是她的大腿好圆润好圆润啊！圆润的脂肪下隐约的肌肉曲线又让 ${your_name} 好想现在就去触摸、品尝那柔软下的结实感觉。`,
      );
      await era.printAndWait(
        `这时候银发的赛马娘似乎感觉到 ${your_name} 的视线，看了过来。${your_name} 马上努力地把这种不良念头抛诸脑后，低头端详起平板来。`,
      );

      era.printButton('（嗯……这位是……）', 1);
      await era.input();
      await era.printAndWait(
        `像这样的银色毛发，在分类中属于芦毛。${your_name} 翻阅公用平板电脑上的资料库，很快就通过毛色分类找到了这位学生的名字。`,
      );

      era.printButton('（黄金……船……什么嘛，明明是银色的。）', 1);
      await era.input();
      await era.printAndWait(
        `银色的 ${chara_name}，这个笑话让 ${your_name} 不禁笑了出声。`,
      );
      await era.printAndWait(
        `此时一阵寒意忽地爬上 ${your_name} 的项背，${your_name} 那低下的头颅不敢郁动分毫。只有眼睛，只有那双该死的眼睛非要好奇地往上那么一瞟。`,
      );
      await era.printAndWait(`${chara_name}「……」`, {
        color: chara_color[0],
      });
      await era.printAndWait(
        `${your_name} 的视线越过了平板，看见了一张庞大又精致的美妙面容。面容的主人歪着头瞪大双眼与 ${your_name} 对上视线，但又仿佛没有看向 ${your_name}。她的眼神是失焦的，${your_name} 无法分辨眼前的美人到底在看 ${your_name}，抑或在看 ${your_name} 的身后、在看 ${your_name} 的深处、在看 ${your_name} 的脑海、在看 ${your_name} 的灵魂。`,
      );
      await era.printAndWait(
        `${your_name} 不敢眨巴一下眼睛，任由她刺针一般的视线插入眼中，直到眼睛开始干涩才出于自然反应合上了眼帘。仅仅是一瞬之间，${your_name} 重新张开稍微湿润的眼睛，却发现那个马娘已经回到了原位。她已经没有在看着 ${your_name}，但那像是脑袋里被她搅动的怪异感觉仍然久久未能散去。`,
      );

      era.printButton('（这到底是……）', 1);
      await era.input();
      await era.printAndWait(
        `选拔赛结束了。${chara_name} 以破纪录的成绩拿下第一名。${your_name} 听到周遭的其他训练员都在议论纷纷，显然已经准备去争夺招募这个好苗子了。`,
      );
      era.printButton(`靠近前去，尝试加入招募 ${chara_name} 的人群中。`, 1);
      era.printButton('「我有个不祥的预感……」', 2);
      await era.input();
      await era.printAndWait(
        `${chara_name} 从人群中一眼看到了${your_name}——或者说从一开始她就没有把其他热切招募的训练员放在眼里？她用力地挤开簇拥的人群，仿似看见猎物的豹子一样露出了狰狞的笑容，朝着${your_name}的方向先是小跑……然后加速、再加速！`,
      );
      await era.printAndWait(
        `${chara_name}「发现野生的训练员啦啊啊啊啊啊——！」`,
        {
          color: chara_color[1],
        },
      );
      await era.printAndWait(`这是 ${your_name} 在昏过去前听到的最后一句话。`);

      era.println();
      await era.printAndWait(`成功被 ${chara_name} 招募了！`);
      era.set(`cflag:7:招募状态`, recruit_flags.yes);
      return true;
    }
    return false;
  }
};
