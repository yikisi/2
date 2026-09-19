/**
 * @file 地下室教学
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

module.exports = {
  /** @param {CharaTalk} you */
  get_intro: (you) => [
    you.get_colored_name(),
    ' был(а), судя по всему, похищен(а) ',
    { content: '【кем-то】', fontWeight: 'bold' },
    ' и заперт(а) в этом подвале.',
    { isBr: true },
    'В этом месте, куда не проникает дневной свет, даже ',
    { content: '【невозможно точно ощущать время】', fontWeight: 'bold' },
    ', и дни впереди, боюсь, будут тяжёлыми.',
    { isBr: true },
    'Чем помочь?',
  ],
  /** @param {CharaTalk} you */
  async unlock(you) {
    await you.say_as_passer_by_and_wait(
      'По учению о войне',
      'Важна победа, а не долгая война.',
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' может попытаться вырваться сразу, но когда вернётся «хозяин подвала», придётся отступить; если не повезёт и вас поймают — могут и отомстить…',
    ]);
  },
  /** @param {CharaTalk} you */
  async relax(you) {
    await you.say_as_passer_by_and_wait(
      'По учению о войне',
      'Победу можно знать, но нельзя навязать.',
    );
    await era.printAndWait([
      'Когда бежать нельзя, ',
      you.get_colored_name(),
      ' может просто сидеть, копить силы и думать.',
    ]);
    await you.say_as_passer_by_and_wait(
      '???',
      'Так ещё и не пропустите момент, когда хозяин только вернулся или проснулся.',
    );
  },
  /** @param {CharaTalk} you */
  async sleep(you) {
    await you.say_as_passer_by_and_wait(
      'По учению о войне',
      'Береги силы, не выматывайся, копи дух.',
    );
    await era.printAndWait([
      'Когда устали, ',
      you.get_colored_name(),
      ' лучше просто поспать и восстановить силы и энергию.',
    ]);
  },
  /** @param {CharaTalk} you */
  async eat(you) {
    await you.say_as_passer_by_and_wait(
      'По учению о войне',
      'Без провианта войско гибнет.',
    );
    await era.printAndWait([
      'Для долгой борьбы ',
      you.get_colored_name(),
      ' нужно есть. Один приём пищи даёт восстановление сил надолго.',
    ]);
    await you.say_as_passer_by_and_wait(
      '???',
      'Но осторожно: хозяин может что-нибудь туда подмешать… если он слишком насторожен.',
    );
  },
  /** @param {CharaTalk} you */
  async flatter(you) {
    await you.say_as_passer_by_and_wait(
      'По учению о войне',
      'Лучшая победа — замыслом, затем — союзами.',
    );
    await era.printAndWait([
      'Хорошие отношения с хозяином подвала ',
      you.get_colored_name(),
      ' только на пользу.',
    ]);
    await you.say_as_passer_by_and_wait(
      '???',
      'Так, возможно, он снизит бдительность.',
    );
  },
  /** @param {CharaTalk} you */
  async sex(you) {
    await you.say_as_passer_by_and_wait(
      'По учению о войне',
      'Кто умеет двигать врага — даёт ему то, что тот возьмёт.',
    );
    await era.printAndWait(
      'Отдать хозяину тело — и, возможно, найти шанс на переворот.',
    );
  },
  /** @param {CharaTalk} you */
  async strike(you) {
    await you.say_as_passer_by_and_wait(
      'По учению о войне',
      'Кто умеет бить неожиданно — бесконечен, как небо и море.',
    );
    await era.printAndWait([
      'Если ',
      you.get_colored_name(),
      ' уверен(а) в силе и уме, можно попытаться ударить исподтишка. Но при провале итог предсказуем.',
    ]);
    await you.say_as_passer_by_and_wait(
      '???',
      'Если секса было много, шанс попасть в слабость, возможно, выше.',
    );
  },
  /** @param {CharaTalk} you */
  async battle(you) {
    await you.say_as_passer_by_and_wait(
      'По учению о войне',
      'Сражайся прямым, побеждай неожиданным.',
    );
    await era.printAndWait(
      'Если силы хватает, открытое сопротивление работает, особенно когда ловушки почти сняты.',
    );
    await era.printAndWait(
      'Но если не успеть снять защиту и хозяин опомнится — итог тоже ясен…',
    );
    await you.say_as_passer_by_and_wait(
      '???',
      'Если секса было много, шанс попасть в слабость, возможно, выше.',
    );
  },
  /** @param {CharaTalk} you */
  async release(you) {
    await you.say_as_passer_by_and_wait(
      'По учению о войне',
      'Лучшая победа — замыслом, затем — союзами.',
    );
    await era.printAndWait([
      'Если хозяин подвала уже получил от ',
      you.get_colored_name(),
      ' всё, что ему было нужно, он, возможно, согласится на просьбу об освобождении.',
    ]);
  },
};
