/**
 * @file 爱慕地文
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

module.exports = {
  update_yes: 'Углубить отношения',
  update_no: 'Пока нет',
  49: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await chara.print_and_wait([
        'Как-то вечером ',
        chara.get_colored_name(),
        ' в жарком одиночестве, выкрикивая имя ',
        you.get_colored_name(),
        ', дошла до пика.',
      ]);
    };
    f.title = 'Вожделение';
    return f;
  })(),
  '74-1': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      const ret = [];
      await chara.print_and_wait([
        'Как-то вечером ',
        chara.get_colored_name(),
        ' начала замечать, что к ',
        you.get_colored_name(),
        ' её тянет как-то не по-товарищески.',
      ]);
      await chara.print_and_wait(
        'Но что это — первая юная влюблённость по неведению или обман чувств от привычной близости?',
      );
      era.printButton('«Кажется, я всерьёз…» (сблизиться)', 1);
      era.printButton('«Нет, я просто себя накрутила…» (пока нет)', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await chara.print_and_wait([
          chara.get_colored_name(),
          ' начала понимать, что любит ',
          you.get_colored_name(),
          '.',
        ]);
        await chara.print_and_wait([
          ' обязательно должна признаться ',
          you.get_colored_name(),
          '…',
        ]);
        await chara.print_and_wait([
          chara.get_colored_name(),
          ' приняла это решение.',
        ]);
      } else {
        await chara.say_and_wait('…', true);
        await chara.print_and_wait([
          chara.get_colored_name(),
          ' покачала головой, повернулась на другой бок и понемногу уснула…',
        ]);
      }
      return ret;
    };
    f.title = 'Влюблённость';
    return f;
  })(),
  '74-2': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      const ret = [];
      // FLAGNAME:5 = 当前互动角色
      if (era.get('flag:5') > 0) {
        await era.printAndWait([
          'Уже в тренерской ',
          chara.get_colored_name(),
          ', заметно волнуясь, попросила ',
          you.get_colored_name(),
          ' встречаться.',
        ]);
      } else {
        await era.printAndWait([
          'Уже в тренерской ',
          chara.get_colored_name(),
          ', заметно волнуясь, нашла ',
          you.get_colored_name(),
          ' и попросила встречаться.',
        ]);
      }
      era.print([
        'Как быть? Принять ухаживания ',
        chara.get_colored_name(),
        ' и стать парой — или отказать без жалости?',
      ]);
      era.printButton('Согласиться (сблизиться)', 1);
      era.printButton('Отказать (пока нет)', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait([
          'Услышав, как ',
          you.get_colored_name(),
          ' ответил(а) согласием, ',
          chara.get_colored_name(),
          ' разом отпустила напряжение в лице, и на нём проступил восторг ',
          // CFLAGNAME:6 = 身高
          ...(era.get('cflag:0:6') > era.get(`cflag:${chara.id}:6`)
            ? [' — и бросилась в объятия ', you.get_colored_name(), '.']
            : [' — и притянула ', you.get_colored_name(), ' к себе.']),
        ]);
        await era.printAndWait([
          'С этого дня вас связывает ещё кое-что: вы — пара.',
        ]);
      } else {
        await era.printAndWait([
          'Мыслей в голове тысяча, но ',
          you.get_colored_name(),
          ' всё равно считает, что вместе вам не быть.',
        ]);
        await era.printAndWait([
          chara.get_colored_name(),
          ' закусила губу и, дрожа всем телом, сдержала слёзы.',
        ]);
        await era.printAndWait([
          'Из вежливости ',
          you.get_colored_name(),
          ` как следует утешает ${chara.sex}, пока весь этот ливень горя не утихнет.`,
        ]);
      }
      return ret;
    };
    f.title = 'Порыв';
    return f;
  })(),
  '89-1': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await chara.print_and_wait([
        'Как-то вечером ',
        chara.get_colored_name(),
        ' стоит вспомнить нежные сцены с ',
        you.get_colored_name(),
        ' — и накатывает счастье.',
      ]);
      await chara.print_and_wait([
        'Может, сделать ещё шаг навстречу… ',
        chara.get_colored_name(),
        ' — вот о чём она подумала.',
      ]);
    };
    f.title = 'Рядом';
    return f;
  })(),
  '89-2': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      const ret = [];
      await era.printAndWait([
        'Однажды ',
        chara.get_colored_name(),
        ' зовёт ',
        you.get_colored_name(),
        ' на свидание.',
      ]);
      era.print([
        'После дня романтики ',
        chara.get_colored_name(),
        ' с решимостью протягивает ',
        you.get_colored_name(),
        ' обручальное кольцо.',
      ]);
      era.printButton('Согласиться (сблизиться)', 1);
      era.printButton('Отказать (пока нет)', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' берёт кольцо. После всего пройденного пора связать судьбы.',
        ]);
        await era.printAndWait([
          chara.get_colored_name(),
          ' страстно целует ',
          you.get_colored_name(),
          '. Отныне вы будете поддерживать друг друга — в бедности и богатстве, в болезни и здравии, до самой смерти…',
        ]);
      } else {
        await era.printAndWait([you.get_colored_name(), ' не берёт кольцо…']);
        await era.printAndWait([
          {
            content: 'Даже после всего, ',
          },
          you.get_colored_name(),
          ' не уверен(а), что это правильный выбор.',
        ]);
        await era.printAndWait(
          'Мораль, связи, долг… слишком многое нужно учесть — или вас сковало бы.',
        );
        era.print([
          'Но глядя на печаль ',
          chara.get_colored_name(),
          ', на её потерянный вид, ',
          you.get_colored_name(),
          ' думает: а надо ли так много думать…',
        ]);
      }
      return ret;
    };
    f.title = 'Клятва';
    return f;
  })(),
  '99-1': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await chara.print_and_wait([
        'Однажды ночью ',
        chara.get_colored_name(),
        ' ворочается и не может уснуть.',
      ]);
      await chara.print_and_wait([
        'В голове ',
        chara.get_colored_name(),
        ' крутятся сцены, где ',
        you.get_colored_name(),
        ' по разным причинам уходит от неё, и ',
        chara.sex,
        ', и от одной такой мысли ',
        chara.get_colored_name(),
        ' — и от этого становится невыносимо грустно…',
      ]);
    };
    f.title = 'Кошмар';
    return f;
  })(),
  '99-2': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        chara.get_colored_name(),
        ' первой приходит в кабинет и крепко обнимает ',
        you.get_colored_name(),
        ', не отпуская.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' не понимает, утешает, и только тогда ',
        chara.get_colored_name(),
        ' успокаивается.',
      ]);
    };
    f.title = 'Зависимость';
    return f;
  })(),
};
