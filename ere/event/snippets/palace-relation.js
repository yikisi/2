const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { location_enum } = require('#/data/locations');

async function palace_relation(chara, me) {
  const love = era.get(`love:${chara.id}`);
  if (love >= 50 || era.get(`relation:${chara.id}:0`) > 0) {
    era.drawLine();
    era.set('flag:当前位置', location_enum.gate);
    await print_event_name('之后，面向未来', chara);
    era.set('flag:当前位置', location_enum.office);
    await era.printAndWait([
      '时光如白驹过隙，与 ',
      chara.get_colored_name(),
      ' 相伴已逾数载，再过一段日子，',
      me.get_couple_title(),
      ' 马上就要展开新的篇章',
    ]);
    era.println();
    if (love >= 75) {
      await era.printAndWait([
        me.get_couple_title(),
        ' 在熟悉的训练员室里恩爱地亲热起来。',
      ]);
      await era.printAndWait(
        '两位小情人沉浸在幸福的二人世界，仿佛能把俗世的琐事都抛进虚空之中。',
      );
      era.println();
      await era.printAndWait('我是世界之王！——杰克·道森', { align: 'center' });
    } else if (love >= 50) {
      await era.printAndWait([
        me.get_couple_title(),
        ' 在熟悉的训练员室里热烈地拥吻。',
      ]);
      await era.printAndWait(
        '情欲的气息充斥整个房间，只有娇声与肉体碰撞的声音不住回荡。',
      );
      era.println();
      await era.printAndWait('食色，性也。——孟子', { align: 'center' });
    } else {
      await era.printAndWait([
        me.get_couple_title(),
        ' 在熟悉的训练员室里相谈甚欢，又不禁为无可避免的别离伤感。',
      ]);
      await era.printAndWait(
        '人生难得相逢，正是因为可能失去才会让珍惜眼前人如此重要。',
      );
      era.println();
      await era.printAndWait('一期一会之心，唯见茶之相中。——千利休', {
        align: 'center',
      });
    }
  }
}

module.exports = palace_relation;
