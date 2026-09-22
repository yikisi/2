/**
 * @file 爱丽速子 - 地下室
 * @author 幽白書
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  welcome(tachyon, callname) {
    tachyon.say(['Ах, ', callname, ', проснулся.']);
    tachyon.say(['нравится? моя новая лаборатория.']);
    tachyon.say(['…не прикидывайся? …хе-хе, тогда к делу.']);
    tachyon.say(['——', callname, ', мне давно любопытно, ']);
    tachyon.say([
      'я — самая многообещающая в твоих глазах ',
      tachyon.uma_sex_title,
      ', разве нет?',
    ]);
    tachyon.say(['мой бег ослеплял тебя, сводил с ума, разве нет?']);
    tachyon.say(['— тогда кого ты видишь сейчас?']);
    tachyon.say(['не разберу… ', callname, ', ']);
    tachyon.say(['я уже не могу выбрать возможность без тебя, ']);
    tachyon.say(['а в твоих глазах я не вижу своего отражения.']);
    tachyon.say([
      'это и есть любовь? любовь такая несправедливая? я уже не могу без тебя, а в твоих глазах меня всё ещё нет.',
    ]);
    tachyon.say([
      '…прости, ',
      callname,
      ', но этот опыт, возможно, придётся вести против твоей воли. пока я не пойму — останься здесь.',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async ask_release_agree(tachyon, you, callname) {
    await tachyon.say_and_wait(['можно.']);
    era.println();
    await era.printAndWait([
      'уже ждал(а) отказа, а ',
      tachyon.get_colored_name(),
      ' согласилась так легко.',
    ]);
    era.println();

    await tachyon.say_and_wait(['опыт… в общем, результат вроде есть, ']);
    await tachyon.say_and_wait([
      'я и не собиралась держать тебя здесь всю жизнь.',
    ]);
    await tachyon.say_and_wait([
      '— да, если уж говорить, может ещё один вопрос.',
    ]);
    era.println();

    await era.printAndWait([
      'вдруг ',
      tachyon.get_colored_name(),
      ' подходит к ',
      you.get_colored_name(),
      ' вплотную и смотрит на ',
      you.get_colored_name(),
      '.',
    ]);
    era.println();

    await tachyon.say_and_wait([
      callname,
      ', ты говорил, что в моих глазах магия, от которой сходят с ума, ',
    ]);
    await tachyon.say_and_wait([
      'тогда… сейчас ты ещё видишь в них эту магию?',
    ]);
    era.println();

    await era.printAndWait([
      tachyon.get_colored_name(),
      ' шарм глаз — от того, как ',
      tachyon.sex,
      ' гонится за мечтой, от того, как ',
      tachyon.sex,
      ' отдаётся пределу.',
    ]);
    await era.printAndWait([
      'тогда нынешняя ',
      tachyon.get_colored_name(),
      '?',
    ]);
    await era.printAndWait([
      'пьяная только тобой, жаждущая только тебя — да, это трогает, ',
    ]);
    await era.printAndWait([
      'но у нынешней ',
      tachyon.get_colored_name(),
      ' в глазах ещё есть та магия, ради которой отдашь всё?',
    ]);
    await era.printAndWait([you.get_colored_name(), ' качаешь головой.']);
    era.println();

    await tachyon.say_and_wait(['…а, вот как.']);
    await tachyon.say_and_wait(['тогда и последний вопрос получил ответ, ']);
    await tachyon.say_and_wait(['можешь уходить.']);
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      ' собираешь вещи и уже уходишь — и видишь: ',
      tachyon.get_colored_name(),
      ' сидит на краю кровати спиной.',
    ]);

    era.printButton('「Тахион?」', 1);
    era.printButton('「ты не идёшь?」', 2);
    await era.input();

    await tachyon.say_and_wait([
      '…хе-хе, после всего этого всё ещё заботишься?',
    ]);
    await tachyon.say_and_wait(['я в порядке, потом тоже уйду. просто…']);
    await tachyon.say_and_wait([
      'не хочу, чтобы ты видел мои нынешние — уродливые глаза.',
    ]);

    await era.printAndWait([you.get_colored_name(), ' уходишь из подвала, ']);
    await era.printAndWait([
      'с начала до конца ',
      tachyon.get_colored_name(),
      ' так и не обернулась.',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async ask_release_reject(tachyon, callname) {
    await tachyon.say_and_wait([
      callname,
      ', я вроде говорила: этот опыт займёт довольно долго… не говорила? тогда говорю сейчас.',
    ]);
    await tachyon.say_and_wait([
      'так и не пойму… почему ты так держишься за других ',
      tachyon.uma_sex_title,
      ', и — почему я так за это цепляюсь.',
    ]);
    await tachyon.say_and_wait([
      'поэтому, пока не пойму, извини, но отпустить не могу.',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async battle_prison(tachyon, callname) {
    await tachyon.say_and_wait(['ради свободы бьёшь свою любимую кобылку?']);
    await tachyon.say_and_wait(['или… снаружи есть кто-то важнее меня?']);
    await tachyon.say_and_wait([
      '…странное чувство: прежняя я вроде не была такой мнительной, ',
    ]);
    await tachyon.say_and_wait([
      'скажи мне? ',
      callname,
      '— какой я сейчас в твоих глазах?',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   */
  find_escape(tachyon, you) {
    tachyon.say(['хочешь наружу?']);
    era.println();

    era.print([
      tachyon.get_colored_name(),
      ' мягко берёт ',
      you.get_colored_name(),
      ' за руку на ручке двери.',
    ]);
    era.println();

    tachyon.say(['…не задержу и не помогу, ']);
    tachyon.say([
      'как я ищу ответ — свинка-кун, попробуй и ты сам вырваться из моих пут.',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   */
  async strike_success(tachyon, you) {
    await tachyon.say_and_wait(['м-м…']);
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      ' бьёшь быстро: зелье ',
      tachyon.get_colored_name(),
      ' уже дало достаточно сил, ',
    ]);
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' не успевает среагировать и падает без сознания.',
    ]);
  },
  /** @param {CharaTalk} tachyon 爱丽速子 */
  async strike_fail(tachyon) {
    await tachyon.say_and_wait([
      'не решается задача — решаем с того, кто её задал… тоже ход.',
    ]);
    await tachyon.say_and_wait(['однако ты не учёл разницу в классе…']);
    await tachyon.say_and_wait([
      'зелья дали лишнюю уверенность… или ',
      tachyon.uma_sex_title,
      ' прикидывалась безвредной — и ты решил, что одолеешь?',
    ]);
    await tachyon.say_and_wait([
      '…ладно, раз не понял — воспользуйся случаем и пойми как следует.',
    ]);
    await tachyon.say_and_wait([
      'качества ',
      tachyon.uma_sex_title,
      ', сила тела ',
      tachyon.uma_sex_title,
      ', похоть ',
      tachyon.uma_sex_title,
      ' — всё как следует выжги на себе.',
    ]);
  },
};
