const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} tachyon
   * @param {string} callname
   */
  async common_future(tachyon, callname) {
    await era.printAndWait([
      '对 ',
      tachyon.get_colored_name(),
      ' 而言，会有这样的可能性吗？',
    ]);
    await era.printAndWait(['成为茶楼老板的 ', tachyon.get_colored_name()]);
    await era.printAndWait([
      '走上科研道路成为科学家的 ',
      tachyon.get_colored_name(),
    ]);
    await era.printAndWait([
      '作为普通的学生，继续升学，成为大学生而后进入社会变成上班族的 ',
      tachyon.get_colored_name(),
    ]);
    await era.printAndWait([
      tachyon.sex,
      '也会有吗，像正常人一样，离开赛场，过着自己的生活的日子',
    ]);
    era.println();
    await tachyon.say_and_wait(['……', callname, '，你愿意跟着我吗？']);
    await tachyon.say_and_wait('如果……我选择了这种可能性的话');
    era.println();
    await era.printAndWait([
      '和 ',
      tachyon.get_colored_name(),
      ' 一起，过着与比赛无关，与',
      tachyon.uma_sex_title,
      '的速度无关的平淡，祥和的日常',
    ]);
    await era.printAndWait('那样的生活，想必会十分美好吧');
    await era.printAndWait([
      '就算是平淡的生活，只要有 ',
      tachyon.get_colored_name(),
      ' 在，就绝对不会无聊',
    ]);
  },
};
