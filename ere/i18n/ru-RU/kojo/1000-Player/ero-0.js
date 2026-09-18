/**
 * @file 玩家 - 调教
 * @author 幽白書
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { unexpected_pregnant_enum } = require('#/data/ero/status-const');

module.exports = {
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} supporter
   * @param {CharaTalk} you
   * @param {string} penis_desc
   */
  become_erect(chara, supporter, you, penis_desc) {
    era.print([
      'Под ласками ',
      chara.get_colored_name(),
      ' и ',
      supporter.get_colored_name(),
      ' у ',
      you.get_colored_name(),
      ' ',
      penis_desc,
      ' член быстро встаёт колом.',
    ]);
  },
  bt_cum_in: 'Кончить!',
  bt_cum_not: 'Ещё потерпеть',
  get_cum_on_body: (target) => `Кончить на тело ${target}!`,
  get_cum_on_face: (targets) => `Кончить на лицо ${targets}!`,
  /**
   * @param {CharaTalk} you 玩家
   * @param {boolean} stop_success 是否寸止成功
   * @param {boolean} change_aim 是否选择射到其他部位
   * @param {boolean} cum_on_face 如果射到其他部位，是否是颜射：口交选择体外是颜射，性交和肛交选择体外是身体
   * @param {[]} targets
   */
  orgasm_denial(you, stop_success, change_aim, cum_on_face, targets) {
    if (!stop_success) {
      era.print([you.get_colored_name(), ' не сдержал(а) оргазм!']);
    } else if (change_aim) {
      if (cum_on_face) {
        era.print([
          you.get_colored_name(),
          ' вынимает член и целится в ',
          ...targets,
          ' личико',
        ]);
      } else {
        era.print([
          you.get_colored_name(),
          ' вынимает член и целится в ',
          ...targets,
          ' тело',
        ]);
      }
    } else {
      era.print([you.get_colored_name(), ' пока сдерживает позыв кончить…']);
    }
  },
  report_preg_not_love: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     * @param {number} unexpected_pregnant
     */
    const f = async (you, father, unexpected_pregnant) => {
      if (era.get('flag:惩戒力度') >= 2) {
        await era.printAndWait([
          you.get_colored_name(),
          ' смотрит на узор беременности на животе и бросается блевать в туалет.',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' смотрит на тест на беременность в руке и бросается блевать в туалет.',
        ]);
      }
      if (unexpected_pregnant === unexpected_pregnant_enum.mother_sleep) {
        await era.printAndWait([
          you.get_colored_name(),
          ' совсем не помнит, как забеременел(а); мысль, что виновником может быть кто угодно, у ',
          you.get_colored_name(),
          ' леденеет кровь…',
        ]);
        if (you.sex_code >= 1) {
          await era.printAndWait([
            '…и ведь ',
            you.get_colored_name(),
            ' мог(ла) бы быть отцом…',
          ]);
        }
      } else {
        await era.printAndWait([
          'После короткой паники ',
          you.get_colored_name(),
          ' всё же решает сообщить ',
          father.get_colored_name(),
          ' новость',
        ]);
        if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
          await era.printAndWait([
            father.get_colored_name(),
            ' снова и снова переспрашивает — и всё равно слышит, что ребёнок её крови.',
          ]);
          await era.printAndWait([
            'Но ',
            father.get_colored_name(),
            ' ничего этого не помнит…',
          ]);
        } else {
          await era.printAndWait([
            'После такой же паники, успокоившись, ',
            father.get_colored_name(),
            ' обещает ',
            you.get_colored_name(),
            ' непременно взять на себя долг отца…',
          ]);
        }
      }
    };
    f.title = 'Неожиданность';
    return f;
  })(),
  /**
   * @author 雞雞
   * @param {CharaTalk} you
   * @param {CharaTalk} father
   */
  async have_baby_with_child(you, father) {
    if (era.get(`love:${father.id}`) >= 90) {
      await era.printAndWait([
        you.get_colored_name(),
        ' лежит на больничной койке, смотрит на ребёнка, которого сама родила, — в голове туман, вспоминает отца этого ребёнка.',
      ]);
      await era.printAndWait([
        'Не думала, что так мало времени — ',
        father.get_colored_name(),
        ' уже выросла так быстро, что женщина (',
        you.get_colored_name(),
        ') смогла родить от неё ребёнка.',
      ]);
      await era.printAndWait([
        'Помяни чёрта — ',
        father.get_colored_name(),
        ' врывается в комнату. Когда-то сосала грудь у неё на руках — а теперь от её спины ',
        you.get_colored_name(),
        ' невольно краснеет, и сердце колотится.',
      ]);
      await era.printAndWait([
        'Вместо роли матери ',
        you.get_colored_name(),
        ' выбирает счастье быть любимой ',
        father.get_colored_name(),
        '.',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' держит ребёнка на руках, в сердце бездонная тревога. Кровосмешение с ',
        father.get_colored_name(),
        ' дало этого ребёнка, и ',
        you.get_colored_name(),
        ' боится, какая судьба его ждёт.',
      ]);
      await era.printAndWait([
        'Если бы тогда не с ',
        father.get_colored_name(),
        '…',
        you.get_colored_name(),
        ' хочется так посетовать — но язык не поворачивается.',
      ]);
      await era.printAndWait(
        'Материнская привязанность и любовь к любовнице смешались и сплавились в чувство, в котором не разберётся даже сама.',
      );
      await era.printAndWait([
        'В конце концов это вырывается капризным вскриком в опоздавшую ',
        father.get_colored_name(),
        '.',
      ]);
    }
  },
  have_baby_with_fuck_buddy: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     */
    const f = async (you, father) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' берёт ребёнка на руки——',
      ]);
      era.printButton('Игнорировать отца ребёнка', 1);
      era.printButton(`Пусть ${father.sex} тоже посмотрит`, 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' смотрит на ',
          father.get_colored_name(),
          ' пустым взглядом, а на ребёнка — с нежностью.',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' всё взвесив, всё же машет ',
          father.get_colored_name(),
          ' подойти.',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          ' радостно обнимает ',
          you.get_colored_name(),
          ', и вдвоём укачивают крепко спящего ребёнка.',
        ]);
      }
    };
    f.title = 'Новая жизнь';
    return f;
  })(),
};
