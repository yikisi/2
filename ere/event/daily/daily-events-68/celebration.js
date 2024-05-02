const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const KitaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-68');

module.exports = async () => {
  const me = get_chara_talk(0),
    kita = get_chara_talk(68),
    weeks = (era.get('flag:当前回合数') - 1) % 48;
  switch (weeks) {
    case 5:
      await print_event_name('情人节的清香味道', kita);
      await era.printAndWait(
        '情人节，也名为圣瓦伦汀节，是互有好感的男女们互相赠送礼物的节日。',
      );
      await era.printAndWait(
        '在社会层面上，这是男女情侣们互相你侬我侬的粘稠日子。',
      );
      await era.printAndWait(
        '但是在校园里，这又是学生们展示甜品和无差别给同学们分发巧克力的日子，大家都开心快乐的吃着甜点，同时也不忘给老师一份。',
      );
      await era.printAndWait(
        `在放下七八份照顾过的学生和同事送来的巧克力之后，${me.name} 坐在办公桌后，准备工作。`,
      );
      await kita.say_and_wait(`训练员${me.get_adult_sex_title()}，在这里么？`);
      await kita.say_and_wait(
        `嘿嘿嘿～情人节快乐训练员${me.get_adult_sex_title()}！这个是小北我送 ${
          me.name
        } 的礼物哦！`,
      );
      await era.printAndWait(
        `一边说着，${kita.name}将手中的礼物递给 ${me.name}，${me.name} 拆开包装，露出里面的黑色巧克力。`,
      );
      await era.printAndWait(
        `是件很不错的礼物呢，在小北期待的目光下，${
          me.name
        } 咬了一口巧克力，轻轻拍了拍${kita.get_teen_sex_title()}的小脑袋。`,
      );
      if (era.get('cflag:68:育成回合计时') === 47 + 6) {
        new KitaEduMarks().classical_valentine++;
      }
      break;
    case 47:
      await print_event_name('圣诞节的特别菜单', kita);
      await era.printAndWait(
        `圣诞节的特雷森，就如同过去的十几年那样一如既往的吵闹。`,
      );
      await era.printAndWait(
        `此时，${me.name} 和 ${kita.name} 就像其他人一样，在食堂里欢庆着节日，享受着食堂的节假日特别菜单。`,
      );
      await kita.say_and_wait(
        `唔姆姆……两份大薯条，四份炸鸡块和鸡肉汉堡，还要两杯可乐……`,
      );
      await era.printAndWait(
        `在 ${me.name} 身边，${me.name} 的担当踮起脚尖看着柜台后的菜单，毫不顾忌地点着热量相当之高的食品。`,
      );
      await era.printAndWait(
        `看来要加大日后的训练力度了……${me.name} 在心底里的笔记本上默默记上了一笔。`,
      );
      break;
    default:
      throw new Error();
  }
  era.set('flag:68:节日事件标记', 0);
};
