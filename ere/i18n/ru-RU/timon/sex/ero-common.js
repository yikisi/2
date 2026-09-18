/**
 * @file 调教地文 - 通常
 * @author O口口口口口
 * @author 雞雞
 * @author 天马闪光蹄
 * @author 黑衣剑士-星爆气流斩准备就绪
 * @author 幽白書
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { buff_colors } = require('#/data/color-const');
const { medicine_enum } = require('#/data/ero/item-const');
const { motion_enum, towards_enum } = require('#/data/ero/part-const');

module.exports = {
  /** 沟通系 */
  /**
   * @author O口口口口口
   * @param {CharaTalk} chara 当前视角角色
   * @param {boolean} is_attacker 当前视角角色是否是攻击者
   */
  async after_refused(chara, is_attacker = true) {
    if (is_attacker) {
      await chara.say_and_wait('Всё-таки нельзя…');
      await chara.print_and_wait(
        'Пошлое, вырвавшееся по жару — и всё равно упирается в стену…',
      );
      await chara.print_and_wait(
        'Тело ещё гудит, между ног ещё мокро, а делать уже нечего. Стоп.',
      );
      await chara.print_and_wait('Но всё же…');
    } else {
      await chara.print_and_wait('Не смотри так…');
      await chara.print_and_wait(
        'Думаешь, на любую грязь я сразу раздвину ноги?!',
      );
      await chara.print_and_wait('…Ну и ну');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async kiss(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        'В такой момент иначе не выходит — хочется именно этого…',
      );
      await attacker.print_and_wait([
        'Наверное, заметила, куда смотрят глаза: ',
        a_call_d,
        ' щурится и на цыпочках сама тянется губами…',
      ]);
      await defender.say_and_wait('Чмок…❤️');
      await attacker.print_and_wait(
        'Сладко. Так, что внутри отпускает… тёплые губы, чуть влажные, и этот вкус никуда не хочется отпускать.',
      );
      await attacker.print_and_wait(
        'Выдох из носа ложится на гладкую шею напротив — тёплый, близкий — и красивые ресницы в ответ вздрагивают, моргают…',
      );
      await attacker.print_and_wait(
        '…Губы отрывать не хочется. Жадность такая: так и стоять, прижавшись, ловя чужое дыхание ртом…',
      );
    } else {
      await defender.say_and_wait('Хаа… хаа…❤️');
      await defender.print_and_wait(
        'Уже хватит бы… эти губы всё догоняют и догоняют…',
      );
      await defender.print_and_wait(
        'Нос, рот — чем дышать — наполовину занял этот жадный напротив и назло гонит в голову мутный запах, от которого чешется низ живота, влажно тянет…',
      );
      await defender.print_and_wait(
        'Нн… если потом не смогу дышать в одиночку, как раньше, без этого тепла у губ — бери ответственность…❤️',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async french_kiss(attacker, defender, is_first) {
    if (is_first) {
      await attacker.print_and_wait(
        'На одних губах останавливаться не хочется.',
      );
      await defender.say_and_wait('Нн——?');
      await attacker.print_and_wait([
        `Постепенно в поцелуе ${attacker.phy_sex_title} запирает в объятиях. `,
        defender.get_colored_name(),
        ' в панике хочет крикнуть имя ',
        attacker.get_colored_name(),
        ' — но язык уже обвился, захватнический, и из горла только глухое, сладкое, мокрое.',
      ]);
      await attacker.print_and_wait(
        'Губы к губам — ещё лицом к лицу. Потом голова всё сильнее вбок. И наконец руки кольцом за спиной: тело возлюбленной уже обмякло, её поднимаешь — и язык сверху, жадный, не даёт закрыть рот, слюна уже ниточками.',
      );
      await defender.say_and_wait('…Дышать уже нечем…', true);
    } else {
      await defender.print_and_wait('В голове плывёт… жарко, дыхание сбито…');
      await defender.print_and_wait(
        'Объятия — и долгий, такой долгий поцелуй, что не поймёшь, сколько прошло: язык лезет внутрь жадно и не отпускает…',
      );
      await defender.print_and_wait(
        'Сколько уже… Даже когда губы на миг расходятся передохнуть, их всё равно держит липкая нитка слюны, будто этим ртом с самого начала нельзя было разлучаться… лицо горит, стыдно мокро.',
      );
      await defender.print_and_wait('Но… совсем не против…');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} success 调情是否成功
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async lure(attacker, defender, success, a_call_d) {
    if (success) {
      await attacker.print_and_wait([a_call_d, ' возбудилась…']);
    } else if (era.get(`tcvar:${defender.id}:发情`)) {
      await attacker.print_and_wait([
        a_call_d,
        ' уже не может возбудиться сильнее…',
      ]);
    } else {
      await attacker.print_and_wait('Но вроде почти не сработало…');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async talk(attacker, defender, a_call_d) {
    if (
      !era.get(`cflag:${attacker.id}:种族`) &&
      era.get(`cflag:${defender.id}:种族`) > 0 &&
      Math.random() < 0.5
    ) {
      await attacker.say_and_wait([
        defender.uma_sex_title,
        ' — как уши выражают эмоции: на какое животное больше похоже.',
      ]);
      await attacker.print_and_wait('На тебя недовольно уставились.');
      await attacker.say_and_wait('…шш… например, если кошачьи уши горят…');
      attacker.print('Тебе пнули в жопу.');
    } else if (attacker.sex_code !== 1 || defender.sex_code !== 1) {
      await attacker.say_and_wait('Сколько детей потом хотелось бы…');
      await attacker.print_and_wait([
        'Глядя на низ живота ',
        a_call_d,
        ' напротив, правда сама вырвалась.',
      ]);
      await attacker.print_and_wait('…Не пнули… и ответа нет');
      attacker.print('…но лицо очень красное.');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async switch(attacker, defender, d_call_a) {
    await defender.say_and_wait('Э…?');
    await defender.print_and_wait([
      'Бывший вплотную ',
      d_call_a,
      ' вдруг отстраняется; прижатая снизу ',
      defender.get_colored_name(),
      ' моргает и не успевает среагировать.',
    ]);
    await defender.print_and_wait('А потом мир переворачивается…');
    await attacker.say_and_wait('Теперь твоё время.');
    await defender.print_and_wait([
      'Раскинувший руки ',
      d_call_a,
      ' улыбается ободряюще.',
    ]);
    attacker.say('…Делай что хочешь.');
  },
  /**
   * @author O口口口口口
   * @author 幽白書
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续反抗的初次行动
   * @param {boolean} success 反抗是否成功
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async resist(attacker, defender, is_first, success, a_call_d) {
    if (era.get('flag:惩戒力度') === 3) {
      // @author 幽白書
      if (attacker.id === 0) {
        // 孕袋反抗主人
        if (success) {
          // 反抗成功，孕袋主视角
          await attacker.print_and_wait(
            'Хотя ты беременная шлюха, всё равно хочешь захватить инициативу',
          );
          await attacker.print_and_wait(
            'Такое кощунство хозяин молча принимает',
          );
          await attacker.print_and_wait('Милость к этой похотливой скотине?');
          await attacker.print_and_wait(
            'Или… просто хочется смотреть, как ты сама насаживаешься?',
          );
        } else {
          // 反抗失败，孕袋主视角
          await attacker.print_and_wait(
            'Как беременная шлюха, подчинение и покорность выжжены в самом дне духа',
          );
          await attacker.print_and_wait(
            'Почему же всё равно пытаешься сопротивляться?',
          );
          await attacker.print_and_wait(
            'Осталась крошечная мысль не падать дальше?',
          );
          await attacker.print_and_wait(
            'Или… киска уже просит, и хочется почувствовать, как тебя ломают?',
          );
        }
        // 主人反抗孕袋
      } else if (success) {
        // 反抗成功，孕袋主视角
        await defender.print_and_wait(
          'Как ни старайся — рот сам открывается, киска уже просит',
        );
        await defender.print_and_wait(
          'Один жест хозяина — и сопротивление рушится',
        );
        await defender.print_and_wait(
          'Терпеть твою «инициативу» на деле лишь чтобы беременная шлюха поняла свою природу покорности…',
        );
      } else {
        // 反抗失败，主人主视角
        await attacker.print_and_wait([
          a_call_d,
          ' качается телом, утонув в желании и плоти',
        ]);
        await attacker.print_and_wait(
          'Трудно узнать былую сдержанность тренера',
        );
        await attacker.print_and_wait('Ещё чуть-чуть, просто чуть-чуть');
        await attacker.print_and_wait([
          'Посмотреть, до какой низости скатится ',
          a_call_d,
          ', что должна была быть наставником',
        ]);
      }
    } else {
      // @author O口口口口口
      if (is_first) {
        await defender.say_and_wait('Лучше не дёргайся.');
        await attacker.print_and_wait([
          'Сидя верхом на ',
          attacker.get_colored_name(),
          ', ',
          a_call_d,
          ' облизывает губы с непривычным выражением.',
        ]);
        await attacker.print_and_wait(
          'Но быть односторонне прижатой снизу… к такому нельзя привыкнуть просто так!',
        );
        await attacker.print_and_wait('……');
      }
      if (success) {
        await attacker.say_and_wait('Лучше не дёргайся.');
        await attacker.print_and_wait([
          'Возвращаешь те же слова ',
          a_call_d,
          ' напротив; глядя на растерянное лицо, сейчас на лице ',
          attacker.get_colored_name(),
          ' полная победная улыбка.',
        ]);
      } else {
        const a_race = era.get(`cflag:${attacker.id}:种族`);
        const d_race = era.get(`cflag:${defender.id}:种族`);
        if (a_race === 0 && d_race > 0) {
          await attacker.say_and_wait(
            ['Всё-таки человеку не тягаться с ', defender.uma_sex_title, '…'],
            true,
          );
        } else {
          await attacker.say_and_wait(
            ['Всё-таки мне не тягаться с ', a_call_d, '…'],
            true,
          );
        }
        await attacker.print_and_wait([
          'Легко снова прижат(а) снизу; в голове ',
          attacker.get_colored_name(),
          ' мелькает эта мысль.',
        ]);
        if (a_race === 0 && d_race === 0) {
          await attacker.say_and_wait(
            ['Погоди, ты же тоже не ', defender.uma_sex_title, '!'],
            true,
          );
        } else if (a_race > 0 && d_race === 0) {
          await attacker.say_and_wait(
            ['Погоди, это же я — ', attacker.uma_sex_title, '!'],
            true,
          );
        } else if (a_race > 0 && d_race > 0) {
          await attacker.say_and_wait(
            ['Погоди, я же тоже ', attacker.uma_sex_title, '!'],
            true,
          );
        }
        await attacker.say_and_wait('Гх…', true);
      }
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async gargle(attacker, defender, a_call_d, d_call_a) {
    await era.printAndWait([
      attacker.get_colored_name(),
      '/',
      defender.get_colored_name(),
      '「',
      { color: attacker.color, content: 'Чмок…' },
      { color: defender.color, content: 'Нн…!?' },
      '」',
    ]);
    await era.printAndWait(
      'В опьянении страстью двое снова тянутся губами — и на этот раз расходятся, ещё не коснувшись.',
    );
    await era.printAndWait(
      'Панически часто моргают, чешут затылок и отводят взгляд…',
    );
    await attacker.say_and_wait([a_call_d, '…']);
    await defender.say_and_wait([d_call_a, '…']);
    await era.printAndWait('Та-та-та-та…');
    await era.printAndWait('Гулк-гулк-гулк————');
    await era.printAndWait(
      'А потом — рядком у раковины, с надутыми как у хомяков щеками, краснолицые глупые любовники.',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async wipe_body(attacker, defender) {
    await defender.say_and_wait('Ещё… продолжим…?❤️');
    await attacker.print_and_wait(
      'На теле напротив, что должно быть чистым, теперь полно двусмысленных следов… не переборщили ли…',
    );
    await attacker.print_and_wait('……');
    await attacker.print_and_wait(
      '…Глядя на жалкое полотенце в руке, пропитанное грязным запахом, который сам же размазал по чужому телу, у кого есть хоть капля сочувствия, наверное, подумает сбавить…',
    );
    await attacker.print_and_wait('…правда…?');
  },
  /** 爱抚系 */
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_ear(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        defender.uma_sex_title,
        ' — уши и правда заставляют тосковать: хоть как продолжение тела, хоть как продолжение лица, хоть как… продолжение эрогенной зоны…',
      ]);
      await attacker.print_and_wait([
        `Всего лишь легко, как стрекоза, коснувшись кончиками пальцев, `,
        attacker.get_colored_name(),
        ` ещё не успевает распробовать нежную фактуру на пальцах — и длинные острые лошадиные уши стыдливо ускользают, ${attacker.phy_sex_title} из пальцев.`,
      ]);
      await attacker.say_and_wait('.');
      await defender.say_and_wait(
        'Пожалуйста… погладь ещё раз, в этот раз не убегу.',
      );
      await attacker.print_and_wait([
        'На руках ',
        a_call_d,
        ', сейчас лицо очень красное.',
      ]);
    } else {
      await attacker.print_and_wait('Фу-фу…');
      await attacker.print_and_wait(
        'В ладонях пара лошадиных ушей, что уже не убегут; густой бархат массирует подушечки… будто лечит и тело, и душу.',
      );
      await attacker.print_and_wait('Вот оно — право любовников…');
      await attacker.print_and_wait('Но сейчас немного любопытно, что там…');
      await attacker.print_and_wait([
        'Будто невидимой нитью связаны, ',
        a_call_d,
        ' — ноги стыдливо подрагивают вслед за рукой, и ',
        attacker.phy_sex_title,
        ' рукой, которую облепили лошадиные уши.',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pull_ear(attacker, defender) {
    await attacker.print_and_wait('Так нельзя…');
    await attacker.print_and_wait('…Это не то, что должны делать любовники…');
    await attacker.print_and_wait('…Но всё же');
    await attacker.print_and_wait([
      'Не довольствуясь одной нежной лаской, ',
      attacker.phy_sex_title,
      ', охваченный желанием доминировать, поднимающимся снизу, постепенно учится безопасно усиливать пальцы…',
    ]);
    await attacker.print_and_wait([
      '…Так лошадиноухий ',
      defender.phy_sex_title,
      ' снизу поймёт, откуда и когда в теле просыпается родовая память, заставляющая вилять хвостом перед человеком…',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_breast_from_back(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      'Ни жалости, ни покоя от этой хрупкой позы — ',
      a_call_d,
      ' так стоит, и этого мало. Так просто не насытиться. ',
      attacker.get_colored_name(),
      ' лезет обеими руками глубже, к этой красивой груди. Она сама тяжелеет вниз и выпирает формой.',
    ]);
    await defender.say_and_wait('Хаа…');
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      ' сжимает ещё сильнее — все пять пальцев на полной груди. Эта мягкость — её, ',
      a_call_d,
      ' сама её отдаёт, и всё равно своевольно мнут в форму, какая нравится только себе.',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_breast_first(attacker, defender, a_call_d) {
    if (era.get(`cflag:${defender.id}:成长阶段`) < 5) {
      await attacker.print_and_wait([
        defender.teen_sex_title,
        ' такая мягкая… и эта мягкость сейчас ложится в ладонь.',
      ]);
    } else {
      await attacker.print_and_wait(
        'Манящая мягкость… сейчас ложится в ладонь.',
      );
    }
    await attacker.print_and_wait(
      'Пальцы сами не держатся: хочется вмять отпечатки в эту мягкую плоть и вымять её только под себя.',
    );
    await defender.say_and_wait('Нн…');
    await attacker.print_and_wait([
      a_call_d,
      ' качается телом вслед за пальцами и постанывает… хаа, придётся признать: от этого не оторваться…',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async pet_breast(attacker, defender, a_call_d, d_call_a) {
    await defender.say_and_wait([d_call_a, '…']);
    await attacker.print_and_wait([
      'Ах, и с этой стороны уже чувствуется… ',
      a_call_d,
      ' перед тобой: от касаний тело то сжимается, то ноет от пустоты, будто мало… грудь в ладонях горячая, под пальцами влажно у ложбинки, дыхание сбивается.',
    ]);
    await defender.say_and_wait([d_call_a, '…']);
    await attacker.print_and_wait(
      'Но всё равно — ещё чуть хочется своевольничать.',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async pet_nipple(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await attacker.print_and_wait('Очень горячо…');
      await attacker.print_and_wait(
        'Хоть это лишь маленькая горошина, вдавленная в белую грудь — жар от неё совсем не шуточный, пальцу даже влажно.',
      );
      await defender.say_and_wait('Нн…');
      await attacker.print_and_wait(
        'Пальцем водишь круги по ареоле и смотришь, как розовая точка под подушечкой набухает, встаёт, набирает твёрдость — уже спорит с пальцем…',
      );
      await attacker.print_and_wait('…А потом чуть сильнее — и сминаешь её.');
      await defender.say_and_wait([d_call_a, '…']);
      await attacker.print_and_wait(
        defender.race > 0 ? 'А, тебя наказали хвостом.' : 'А, тебя ударили.',
      );
    } else {
      await attacker.print_and_wait('Может, так и молоко выдавится…');
      await attacker.print_and_wait(
        'Глядя на эти пошлые соски, затвердевшие от непрерывных ласк, мысль сама лезет… стыдно, как они блестят.',
      );
      await defender.say_and_wait('Ай——');
      await attacker.print_and_wait([
        'Пока ',
        a_call_d,
        ' опустила голову и сбилась с дыхания, пальцами пытаешься потянуть сосок вверх…',
      ]);
      await attacker.print_and_wait('Испуганный вид — очень вкусный.');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_clitoris(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'Раздвигаешь бёдра. ',
        a_call_d,
        ' раскрыта, и так прямо смотришь — ',
        defender.sex,
        ' голая между ног…',
      ]);
      await attacker.print_and_wait(
        'Обратной дороги уже нет… но от этого только горячее…',
      );
      await attacker.print_and_wait(
        'Пальцами сдвигаешь капюшон с розовой горошины и смотришь, как чувствительный клитор на воздухе из милого розового наливается густо-красным — уже совсем развратный.',
      );
      await attacker.print_and_wait('…Не бойся. С ним буду нежнее.');
    } else {
      await defender.say_and_wait('Нн…');
      await attacker.print_and_wait(
        'А-ах, незаметно уже такая: красная, опухшая, жалкая.',
      );
      await attacker.print_and_wait([
        'Простое касание и чуть терпения — и этот крошечный чувствительный бугорок делает своё: ',
        a_call_d,
        ' развратно дёргает безупречным телом…',
      ]);
      await defender.say_and_wait('Ай——');
      await attacker.print_and_wait('Посмотреть ещё раз. Последний.');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async finger_fuck(attacker, defender) {
    await defender.say_and_wait('Нн…');
    await attacker.print_and_wait(
      'Тело ещё немного скованно, но киска без труда втягивает кончик указательного пальца вместе с первым суставом… горячая, мокрая, будто сама целует.',
    );
    await attacker.print_and_wait(
      'Киска горячо целует палец. Хлюп — стенки липнут.',
    );
    await attacker.print_and_wait(
      'Крючком вверх, вниз трёшь, по ползущим, живущим стенкам — и в стороны… внутри жарко, пальцу стыдно, как легко его приняли.',
    );
    await attacker.print_and_wait(
      'Ха… если так сильно сжимаешь бёдра, дальше не получится.',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async prepare_virgin_uma(attacker, defender) {
    await attacker.print_and_wait([
      'Осторожно вводишь два пальца. Перед тобой открыто — ',
      defender.teen_sex_title,
      ': узкая киска сложена в тонкую щель, и ты разворачиваешь её.',
    ]);
    await attacker.print_and_wait('Как красиво…');
    await defender.say_and_wait('Не смотри так прямо…');
    await attacker.print_and_wait(
      'Хвост бешено мотается — вот и вся жалоба, но…',
    );
    await defender.say_and_wait('Нн——');
    await attacker.print_and_wait(
      'Фух… пальцы всё глубже раскрывают киску, и между ними вырывается жар — сжимающаяся дырка выдавливает его изнутри. Дышит щекоткой, кружит голову.',
    );
    await attacker.print_and_wait('Ещё один палец, наверное, можно.');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async stimulate_g_spot_by_finger(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'Хочется, чтобы ',
        defender.sex,
        ' чувствовала ещё сильнее, хочется, чтобы её киска стала мягче. Хочется, чтобы ',
        defender.sex,
        ' забывалась, чтобы это красивое тело от пальцев извивалось…',
      ]);
      await defender.say_and_wait('Ха… ха…');
      await attacker.print_and_wait(
        'Всего лишь пальцами водишь, а в голове желание уже несётся — и само дыхание тяжелеет.',
      );
      await attacker.print_and_wait('Где же… должно быть, уже совсем близко…');
      await attacker.print_and_wait('……');
      await defender.say_and_wait('Нн——');
      await attacker.print_and_wait([
        'Рядом стенки другие, а этот лёгкий бугорок сам тянет палец — и сразу жар, сразу липкость, такие только здесь… а ответ подсказывает ',
        a_call_d,
        ': вдруг выгибает живот и бёдрами сжимает «преступную» руку.',
      ]);
      await attacker.print_and_wait('…вот она.');
    } else {
      await attacker.print_and_wait('Сжать.');
      await attacker.print_and_wait('Растереть.');
      await attacker.print_and_wait('Ткнуть.');
      await attacker.print_and_wait('Тупым ногтем подразнить.');
      await attacker.print_and_wait([
        'Пока руки не насытятся, вовсю учишь вспотевшую, уже обмякшую как грязь ',
        defender.get_colored_name(),
        ', почему удовольствие зовут ядом.',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async pet_anal(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.say_and_wait('Нн-мм——!?');
      await attacker.print_and_wait([
        'С небольшой задержкой ',
        defender.adult_sex_title,
        ' напротив явно улавливает, чего ты хочешь от её жопы. ',
        attacker.get_colored_name(),
        ' подходит пальцем ближе — дразня, чуть шершавый, ровно так, чтобы тело насторожилось, — и водит круги вокруг маленькой дырки.',
      ]);
      await attacker.print_and_wait([
        'А эта настороженность «в самый раз»… видна в том, как ',
        a_call_d,
        ' невольно подставляет жопу пальцу…',
        defender.race > 0 ? ' и в ошарашенном лошадином хвосте…' : '',
      ]);
    } else {
      await defender.print_and_wait('Так… всё-таки собираешься лезть туда…?');
      await defender.print_and_wait([
        `Это… кажется… `,
        d_call_a,
        `… особенно любит такой ритм «то да, то нет»…`,
      ]);
      await defender.print_and_wait(
        'Уже не удержать тело в напряжении; жопа, растаявшая от этих дразнящих ласк, тихонько размякла и стала дыркой для секса — проглотит что угодно, и это уже не странно.',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async prepare_anal(attacker, defender, a_call_d) {
    await attacker.print_and_wait(
      `Ладонью ловишь дразнящий жар, что выдыхает пульсирующая дырка напротив. Четыре пальца впиваются как колья и держат ягодицы: они изо всех сил хотят сомкнуть стыдливую жопу и спрятаться — ${attacker.phy_sex_title} слишком близко.`,
    );
    await attacker.print_and_wait(
      'Только особенно длинный средний палец занят другим: слегка согнут, как хвост скорпиона, понемногу подползает к задней дырке — и медленно, но твёрдо входит.',
    );
    await attacker.print_and_wait('Сопротивление сильное.');
    await attacker.print_and_wait([
      'Стенки сами ползут, будто живые, с выдохом толкают палец ',
      attacker.get_colored_name(),
      `. Это не та похотливая плоть, что создана для секса, как соседняя киска. Но сейчас ${attacker.phy_sex_title} держит в ней палец — и жопа неожиданно жадная.`,
    ]);
    await attacker.print_and_wait('Страх… или радость…?');
    await attacker.print_and_wait([
      'Даже задыхающаяся ',
      a_call_d,
      ' сама не понимает, что значит этот ток: он выстреливает из стыдливо сжимающейся жопы вверх по позвоночнику и заставляет тело дрожать.',
    ]);
    await defender.say_and_wait('Ещё… глубже… первый сустав… уже весь…', true);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async pet_leg(attacker, defender, is_first) {
    if (is_first) {
      if (attacker.id === 0 && defender.race > 0) {
        await attacker.print_and_wait(
          'Как тренер смотреть на ноги подопечной и гладить их — уже похотью…',
        );
        await attacker.print_and_wait(
          'Даже если сказать сдержанно, что именно ты сейчас делаешь, уже знобит — такая грязь, и дрожь идёт по всему телу.',
        );
        await attacker.print_and_wait(
          'После тренировки, чтобы проверить форму, иногда ведь тоже гладишь…',
        );
        await attacker.print_and_wait(
          'Но странно: сейчас в голове эти ноги совсем не про «скачки».',
        );
      }
      await attacker.print_and_wait('Сейчас в голове только…');
      await attacker.print_and_wait(
        'Если эти ноги скрестятся и обмотают талию — будет так хорошо, что не выдержать.',
      );
    } else {
      await attacker.print_and_wait('Мягкие и упругие.');
      await attacker.print_and_wait('Изгиб изящный и длинный.');
      await attacker.print_and_wait(
        'И чувствительность такая, что от ласки пальцев уже дрожат.',
      );
      if (defender.race > 0) {
        await attacker.print_and_wait('Как зря…');
        await attacker.print_and_wait('Такие ноги — и только для скачек…');
      }
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pet_tail(attacker, defender) {
    await attacker.print_and_wait('Ощущение совсем свежее.');
    if (defender.sex_code !== 1) {
      await attacker.print_and_wait([
        'Всё-таки ',
        defender.uma_sex_title,
        ' — и хвост у неё от самого копчика; обычно колышется за юбкой формы, как ветер, который видно.',
      ]);
    }
    await attacker.print_and_wait(
      'Напевая, нежно гладишь; пальцы поднимаются по послушной шерсти — и обе руки досыта пропитываются тайным запахом от самого корня хвоста…',
    );
    await attacker.print_and_wait('А… кстати…');
    await defender.say_and_wait('Нюхать нельзя!', true);
    await attacker.print_and_wait(
      'Будто тебя так одёрнули: поднятую руку туго обматывает хвост, не давая шевельнуться.',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pull_tail(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await defender.say_and_wait('Оо～');
      await attacker.print_and_wait([
        'Снизу ',
        a_call_d,
        ' стонет так сладко, что стон как яд.',
      ]);
      await attacker.print_and_wait(
        `Дёрнешь хвост — и ${defender.uma_sex_title} становится смирной и послушной. Это уже понятно, и жар из низа живота ещё труднее сдержать.`,
      );
    } else {
      await defender.say_and_wait('Нн——');
      await attacker.print_and_wait(
        'Чуть сильнее потянуть — жопа поднимается, а если в этот момент отпустить, просядет и талия…',
      );
      await attacker.print_and_wait([
        'Эй-эй… ',
        attacker.phy_sex_title,
        ' прямо перед тобой — и ты правда понимаешь, какое представление даёшь, жалкая ',
        a_call_d,
        '?',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async cunnilingus(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.say_and_wait('Нннннн————');
      await attacker.print_and_wait(
        'Как не взять в рот. Как вытащить из капюшона набухший клитор — с этим грязным запахом самки — и оставить дрожать голым, одному, на воздухе.',
      );
      await attacker.print_and_wait([
        'Поэтому ',
        attacker.get_colored_name(),
        ' низко, глубоко наклоняется и прячет лицо между широко разведённых бёдер ',
        a_call_d,
        '.',
      ]);
      await attacker.print_and_wait(
        'Бёдра сами стрессово сжимаются — пах дрожит.',
      );
      await attacker.print_and_wait('Колени, обвившие талию, дрожат.');
      await attacker.print_and_wait('Ступни кольцом за поясницей — дрожат.');
      await attacker.print_and_wait('Ах… почему вдруг так…');
      await attacker.print_and_wait(
        'Не из-за этой горошинки же, которую язык делает всё мокрее, пока слюна смешивается с её соком.',
      );
    } else {
      await attacker.print_and_wait('Кончиком языка — дразнить.');
      await attacker.print_and_wait('Сосать, пока не встанет.');
      await attacker.print_and_wait('Чуть подуть — теплом, на мокрое.');
      await attacker.print_and_wait('Вот незадача…');
      await attacker.print_and_wait([
        'Что ни делай с этим клитором — ',
        a_call_d,
        ' одинаково срывается в дрожь от наслаждения. Так и не поймёшь, что ей вкуснее.',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async ask_cunnilingus(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('Прошу…');
      await defender.print_and_wait([
        'Ещё стыдно, но ',
        d_call_a,
        ' сама руками разводит дрожащие бёдра навстречу',
      ]);
      await defender.say_and_wait('Нннннн————');
      await defender.print_and_wait(
        'Как не взять в рот. Как вытащить набухший клитор из капюшона — с этим тяжёлым запахом самки — и оставить дрожать голым, одному.',
      );
      await defender.print_and_wait([
        'Поэтому ',
        defender.get_colored_name(),
        ' глубоко наклоняется и прячет голову между широко разведённых бёдер ',
        d_call_a,
        '.',
      ]);
      await defender.print_and_wait('Стрессово сжимающиеся бёдра дрожат.');
      await defender.print_and_wait('Колени, обхватившие талию, дрожат.');
      await defender.print_and_wait('Ступни за поясницей дрожат.');
      await defender.print_and_wait('Ах… почему вдруг так…');
      await defender.print_and_wait(
        'Неужели из-за этой горошинки, которую язык делает ещё мокрее.',
      );
    } else {
      await defender.print_and_wait('Кончиком языка дразнить.');
      await defender.print_and_wait('Сосанием заставить встать.');
      await defender.print_and_wait('Легко подуть на неё.');
      await defender.print_and_wait('Немного смущает…');
      await defender.print_and_wait([
        'Каким бы способом ни трогать клитор напротив — ',
        d_call_a,
        ' одинаково дрожит от наслаждения; так и не поймёшь, что ей больше нравится.',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async force_cunnilingus(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('Ну пожалуйста～');
      await defender.print_and_wait([
        'Сама разведя бёдра, ',
        d_call_a,
        ' с ожиданием смотрит вниз на ',
        defender.get_colored_name(),
        ' и рукой помогает блуждающему взгляду ',
        defender.get_colored_name(),
        ' опустить голову.',
      ]);
      await defender.say_and_wait('Нннннн————');
      await defender.print_and_wait(
        'Как не взять в рот. Как вытащить набухший клитор из капюшона — с этим тяжёлым запахом самки — и оставить дрожать голым, одному.',
      );
      await defender.print_and_wait([
        'Поэтому ',
        defender.get_colored_name(),
        ' глубоко наклоняется и прячет голову между широко разведённых бёдер ',
        d_call_a,
        '.',
      ]);
      await attacker.say_and_wait('Ха❤️');
      await defender.print_and_wait(
        'Тот, кто выдвинул опасную просьбу, сейчас забывшись качает телом…',
      );
      await defender.print_and_wait('Стрессово сжимающиеся бёдра дрожат.');
      await defender.print_and_wait('Колени, обхватившие талию, дрожат.');
      await defender.print_and_wait('Ступни за поясницей дрожат.');
      await defender.print_and_wait('Ах… почему вдруг так…');
      await defender.print_and_wait(
        'Неужели из-за этой горошинки, которую язык делает ещё мокрее.',
      );
    } else {
      await defender.print_and_wait('Кончиком языка дразнить.');
      await defender.print_and_wait('Сосанием заставить встать.');
      await defender.print_and_wait('Легко подуть на неё.');
      await defender.print_and_wait('Немного смущает…');
      await defender.print_and_wait([
        'Каким бы способом ни трогать клитор напротив — ',
        d_call_a,
        ' одинаково дрожит от наслаждения; так и не поймёшь, что ей больше нравится.',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async suck_virgin(attacker, defender, is_first) {
    if (is_first) {
      await attacker.print_and_wait(
        'Запах, от которого колотится сердце… кисло-сладкая, мясистая терпкость, тающая с кончика языка по всему телу…',
      );
      await attacker.print_and_wait(
        'В этой двусмысленной позе, где язык лижет киску, кто же начал первым…',
      );
      await attacker.print_and_wait('Мягкость против мягкости.');
      await attacker.print_and_wait(
        'Язык, свёрнутый как для свиста, медленно ползёт по каналу, и киска, неловко сжимаясь, отвечает на тёплую провокацию…',
      );
      await attacker.print_and_wait(
        'Ни у одной стороны нет причины легко отступить…',
      );
    } else {
      await attacker.print_and_wait('Пора заняться чем-то ещё.');
      await attacker.print_and_wait(
        'Уже почти не вспомнить, какой чистой тонкой щелью она была в начале; залитая языком изнутри и снаружи, киска сейчас слегка вывернута и дрожит…',
      );
      await attacker.print_and_wait(
        'А ноги, что раньше крепко сжимали талию «плохого ребёнка», после очередного раза разъехались, оставив только носки, высоко натянутые как в балете.',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async ask_suck_virgin(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.say_and_wait('Ха…');
      await defender.print_and_wait([
        d_call_a,
        ' перед тобой пальцами разводит розовые губки — что делать дальше, и так ясно…',
      ]);
      await defender.print_and_wait(
        'Запах, от которого колотится сердце… кисло-сладкая, мясистая терпкость, тающая с кончика языка по всему телу…',
      );
      await defender.print_and_wait(
        'В этой двусмысленной позе, где язык лижет киску, кто же начал первым…',
      );
      await defender.print_and_wait('Мягкость против мягкости.');
      await defender.print_and_wait(
        'Язык, свёрнутый как для свиста, медленно ползёт по каналу, и киска, неловко сжимаясь, отвечает на тёплую провокацию…',
      );
      await defender.print_and_wait(
        'Ни у одной стороны нет причины легко отступить…',
      );
    } else {
      await defender.print_and_wait(
        'Раз так и не услышал просьбы остановиться, у языка нет причины бросать на полпути.',
      );
      await defender.print_and_wait('Но…');
      await defender.print_and_wait('Пора заняться чем-то ещё.');
      await defender.print_and_wait(
        'Уже почти не вспомнить, какой чистой тонкой щелью она была в начале; залитая языком изнутри и снаружи, киска сейчас слегка вывернута и дрожит…',
      );
      await defender.print_and_wait(
        'А ноги, что раньше крепко сжимали талию «плохого ребёнка», после очередного раза разъехались, оставив только носки, высоко натянутые как в балете.',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async force_suck_virgin(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.say_and_wait('Нн——');
      await defender.print_and_wait(
        'Силой пригибают голову; губы, что хотели вскрикнуть, наталкиваются на наглую киску.',
      );
      await defender.print_and_wait(
        'Запах, от которого колотится сердце… кисло-сладкая, мясистая терпкость, тающая с кончика языка по всему телу…',
      );
      await defender.print_and_wait(
        'В этой двусмысленной позе, где язык лижет киску, кто же начал первым…',
      );
      await defender.print_and_wait('Мягкость против мягкости.');
      await defender.print_and_wait(
        'Язык, свёрнутый как для свиста, медленно ползёт по каналу, и киска, неловко сжимаясь, отвечает на тёплую провокацию…',
      );
      await defender.print_and_wait(
        'Ни у одной стороны нет причины легко отступить…',
      );
    } else {
      await attacker.say_and_wait('Ха～');
      await defender.print_and_wait([
        'Наверное, насытилась; как после огромного глотка холодного пива, ',
        d_call_a,
        ' выдыхает с облегчением.',
      ]);
      await defender.print_and_wait('Пора заняться чем-то ещё.');
      await defender.print_and_wait(
        'Уже почти не вспомнить, какой чистой тонкой щелью она была в начале; залитая языком изнутри и снаружи, киска сейчас слегка вывернута и дрожит…',
      );
      await defender.print_and_wait(
        'А ноги, что раньше крепко сжимали талию «плохого ребёнка», после очередного раза разъехались, оставив только носки, высоко натянутые как в балете.',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async blow_job(attacker, defender, is_first) {
    if (is_first) {
      await defender.say_and_wait(
        'На такое смотреть — и вина поднимается сама…',
        true,
      );
      if (attacker.race > 0 && attacker.sex_code !== 1) {
        await attacker.print_and_wait(
          'Умамусумэ. И член. Два слова, которым нечего было делить — сейчас слиплись, мокрые…',
        );
      }
      await attacker.print_and_wait(
        'Губы, которыми едят, силой раздвинул член. Там, где должны быть еда и воздух, этот твёрдый, вставший, опасный ствол занял рот как своё — и своевольно гонит грязный запах, от которого тело едет; слюна уже тянется по стволу…',
      );
      await attacker.print_and_wait(
        'Согнутая спина дрожит… почему… дыхание сбито, стыдно мокро во рту…',
      );
      await attacker.print_and_wait('Так ведь… странно, правда…?');
    } else {
      await attacker.say_and_wait('Хлюп… чмок～～');
      await attacker.print_and_wait(
        'Незаметно стала чуть ловчее… и от этого ещё стыднее…',
      );
      await attacker.print_and_wait(
        'Чуть задерёшь голову — и член напротив лезет глубже, горячий, до горла…',
      );
      await attacker.print_and_wait(
        'Приплюснешь язык и лизнёшь сбоку — он сам дёргается, довольно, оставляя на языке солоноватое.',
      );
      await attacker.print_and_wait('Если губами… всосать…');
      await attacker.print_and_wait(
        'Кх-кх… густой стыдный вкус лезет в голову и кружит её… слюна хлюпает, ниточками тянется от губ…',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async ask_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('Прошу——');
      await defender.print_and_wait([
        'Перед тобой ',
        d_call_a,
        ` вдруг говорит то, от чего краснеет лицо.`,
      ]);
      await defender.print_and_wait(
        'Так внезапно просить — даже если откажут и пнут, не жалуйся…',
      );
      await attacker.say_and_wait(
        'На такое смотреть — и вина поднимается сама…',
        true,
      );
      if (defender.race > 0 && defender.sex_code !== 1) {
        await defender.print_and_wait(
          'Умамусумэ. И член. Два слова, которым нечего было делить — сейчас слиплись, мокрые…',
        );
      }
      await defender.print_and_wait(
        'Губы, которыми едят, сейчас силой раздвинул член. Этот твёрдый, вставший ствол занял рот и своевольно гонит запах, от которого тело едет…',
      );
      await defender.print_and_wait('Согнутая спина дрожит… почему…');
      await defender.print_and_wait('Так ведь… странно, правда…?');
    } else {
      await defender.print_and_wait(
        'Повторять одну и ту же просьбу снова и снова — это читерство…',
      );
      await defender.say_and_wait('Хлюп… чмок～～');
      await defender.print_and_wait('Незаметно стала чуть ловчее…');
      await defender.print_and_wait(
        'Чуть задерёшь голову — и член напротив входит глубже…',
      );
      await defender.print_and_wait(
        'Приплюснутым языком легонько лизнёшь сбоку — и он приятно дёргается.',
      );
      await defender.print_and_wait('Если задействовать губы… сос…');
      await defender.print_and_wait(
        'Кх-кх… густой стыдный вкус лезет в голову и кружит её…',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async force_blow_job(attacker, defender, is_first) {
    if (is_first) {
      await attacker.say_and_wait('Открой рот.');
      await defender.print_and_wait(
        'Если сопротивляться, может и сработает… думала так, но тело понемногу пригибает эта рука…',
      );
      await defender.say_and_wait('Нн…');
      await attacker.say_and_wait(
        'На такое смотреть — и вина поднимается сама…',
        true,
      );
      if (defender.race > 0 && defender.sex_code !== 1) {
        await defender.print_and_wait(
          'Умамусумэ. И член. Два слова, которым нечего было делить — сейчас слиплись, мокрые…',
        );
      }
      await defender.print_and_wait(
        'Губы, которыми едят, сейчас силой раздвинул член. Этот твёрдый, вставший ствол занял рот и своевольно гонит запах, от которого тело едет…',
      );
      await defender.print_and_wait('Согнутая спина дрожит… почему…');
      await defender.print_and_wait('Так ведь… странно, правда…?');
    } else {
      await defender.say_and_wait('Ха…', true);
      await defender.say_and_wait('Ещё… продолжать…?', true);
      await defender.say_and_wait('Хлюп… чмок～～');
      await defender.print_and_wait('Незаметно стала чуть ловчее…');
      await defender.print_and_wait(
        'Чуть задерёшь голову — и член напротив входит глубже…',
      );
      await defender.print_and_wait(
        'Приплюснутым языком легонько лизнёшь сбоку — и он приятно дёргается.',
      );
      await defender.print_and_wait('Если задействовать губы… сос…');
      await defender.print_and_wait(
        'Кх-кх… густой стыдный вкус лезет в голову и кружит её…',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async deep_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('Если так…');
      await attacker.say_and_wait('Нн…');
      await attacker.print_and_wait('Всё-таки трудновато… но…');
      await attacker.print_and_wait('Глубже взяла…');
      await attacker.say_and_wait(
        ['Наверное, приятно… мой… ', a_call_d, '❤️'],
        true,
      );
      await attacker.say_and_wait('Хлюп… чмок…');
      await attacker.print_and_wait(
        'Из двоих здесь как минимум один уже сорвался: из этой грязной позы чмокает и выжимает запретный кайф, от которого разглаживаются брови.',
      );
      await attacker.print_and_wait([
        '…И вот ',
        attacker.get_colored_name(),
        ' — этот рот с этой минуты уже не только для еды. Грязный секс-орган: липко чавкает, обвивает член. Это уже не исправить❤️',
      ]);
      await attacker.print_and_wait(
        'Мягким горлом встречать головку. Кончиком языка гладить набухшие вены. Тугим горлом без воздуха подхватывать член…',
      );
      await attacker.print_and_wait([
        'Чему учится, что запоминает, во что превращается… сейчас присев под ',
        a_call_d,
        ' — ',
        attacker.get_colored_name(),
        '.',
      ]);
    } else {
      if (defender.race > 0) {
        await attacker.print_and_wait([
          'Уже накопила запас, чтобы бурляще служить члену горлом и одновременно вилять хвостом, ',
          attacker.get_colored_name(),
          ' в этом неожиданно для ',
          a_call_d,
          ' талантлива.',
        ]);
        await attacker.print_and_wait([
          'Краем глаза глядя на ',
          a_call_d,
          `, что задерживает дыхание и запрокидывает голову, не до песен `,
          attacker.get_colored_name(),
          ' понятливо дёргает ушами.',
        ]);
      }
      await attacker.say_and_wait('Ха… ха…❤️');
      await attacker.print_and_wait('Глотать…');
      await attacker.print_and_wait([
        'Чтобы добыть нужный кислород, с членом во рту ',
        attacker.get_colored_name(),
        ' глотает большими глотками — смесь запаха члена… нет, точнее сказать: запах члена, смешанный с кислородом.',
      ]);
      await attacker.print_and_wait([
        'Предэякулят и слюна, что не сдержать забитому рту ',
        attacker.get_colored_name(),
        ', от повторных толчков в рот превращаются в липкую прозрачную массу, легко тянущуюся нитями…',
      ]);
      await attacker.say_and_wait('Нн… нннннн…');
      await attacker.print_and_wait(
        'Ну, сколько ни делай так, уж говорить вслух вряд ли разучишься.',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async ask_deep_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('Ещё хочу, глубже…');
      await defender.print_and_wait([
        'Жадно бормоча, охваченная инстинктом выжать удовольствие, ',
        d_call_a,
        ' поднимает бёдра.',
      ]);
      await defender.print_and_wait('Глубже взяла…');
      await defender.print_and_wait('Упёрлось… в самый конец…');
      await defender.say_and_wait('Хлюп… чмок…');
      await defender.print_and_wait(
        'Из двоих здесь как минимум один уже сорвался: из этой грязной позы чмокает и выжимает запретный кайф, от которого разглаживаются брови.',
      );
      await defender.print_and_wait([
        '…И вот ',
        defender.get_colored_name(),
        ' — этот рот с этой минуты уже не только для еды. Грязный секс-орган: липко чавкает, обвивает член. Это уже не исправить❤️',
      ]);
      await defender.print_and_wait(
        'Мягким горлом встречать головку. Кончиком языка гладить набухшие вены. Тугим горлом без воздуха подхватывать член…',
      );
      await defender.print_and_wait([
        'Чему учится, что запоминает, во что превращается… сейчас присев под ',
        d_call_a,
        ' — ',
        defender.get_colored_name(),
        '.',
      ]);
    } else {
      await defender.print_and_wait([
        'Уже накопила запас, чтобы бурляще служить члену горлом и одновременно вилять хвостом, ',
        defender.get_colored_name(),
        ' в этом неожиданно ',
        attacker.phy_sex_title,
        ' талантлива.',
      ]);
      await defender.print_and_wait([
        'Краем глаза глядя на ',
        d_call_a,
        ', что задерживает дыхание и запрокидывает голову, не до песен ',
        defender.get_colored_name(),
        ' понятливо дёргает ушами.',
      ]);
      await defender.print_and_wait('Как тебе～');
      await defender.print_and_wait([
        'Хотя рот сейчас не свободен говорить, но со своей ',
        defender.race > 0 ? 'подопечной' : 'партнёршей',
        ' в нулевой дистанции ',
        d_call_a,
        ' полностью считывает похвальбу, которую кончик языка выводит на головке.',
      ]);
      await defender.say_and_wait('Ха… ха…❤️');
      await defender.print_and_wait('Глотать…');
      await defender.print_and_wait([
        'Чтобы добыть нужный кислород, с членом во рту ',
        defender.get_colored_name(),
        ' глотает большими глотками — смесь запаха члена… нет, точнее сказать: запах члена, смешанный с кислородом.',
      ]);
      await defender.print_and_wait([
        'Предэякулят и слюна, что не сдержать забитому рту ',
        defender.get_colored_name(),
        ', от повторных толчков в рот превращаются в липкую прозрачную массу, легко тянущуюся нитями…',
      ]);
      await defender.say_and_wait('Нн… нннннн…');
      await defender.print_and_wait(
        'Ну, сколько ни делай так, уж говорить вслух вряд ли разучишься.',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async force_deep_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('Подними голову.');
      await defender.print_and_wait('Глубже взяла…');
      await defender.print_and_wait(
        'Снова короткая команда, в которой трудно услышать нежность.',
      );
      await defender.print_and_wait([
        'Но тело ',
        defender.get_colored_name(),
        ' неодолимо подчиняется ей.',
      ]);
      await defender.say_and_wait('Хлюп… чмок…');
      await defender.print_and_wait(
        'Из двоих здесь как минимум один уже сорвался: из этой грязной позы чмокает и выжимает запретный кайф, от которого разглаживаются брови.',
      );
      await defender.print_and_wait([
        '…И вот рот ',
        defender.get_colored_name(),
        ' с этой минуты уже не только для еды. Грязный секс-орган: липко чавкает, обвивает член. Это уже не исправить❤️',
      ]);
      await defender.print_and_wait(
        'Мягким горлом встречать головку. Кончиком языка гладить набухшие вены. Тугим горлом без воздуха подхватывать член…',
      );
      await defender.print_and_wait([
        'Чему учится, что запоминает, во что превращается… ',
        d_call_a,
        ' снизу — ',
        defender.get_colored_name(),
        '.',
      ]);
    } else {
      await defender.print_and_wait([
        'Без слов подталкивая, ',
        attacker.phy_sex_title,
        ' снова силой рук фиксирует ',
        defender.teen_sex_title,
        ' у себя между ног, пока сам не насытится.',
      ]);
      await defender.say_and_wait('Ха… ха…❤️');
      await defender.print_and_wait('Глотать…');
      await defender.print_and_wait([
        'Чтобы добыть нужный кислород, ',
        defender.get_colored_name(),
        ' с членом во рту глотает большими глотками — смесь запаха члена… нет, точнее сказать: запах члена, смешанный с кислородом.',
      ]);
      await defender.print_and_wait([
        'Предэякулят и слюна, что не сдержать забитому рту ',
        defender.get_colored_name(),
        ', от повторных толчков в рот превращаются в липкую прозрачную массу, легко тянущуюся нитями…',
      ]);
      await defender.say_and_wait('Нн… нннннн…');
      await defender.print_and_wait(
        'Ну, сколько ни делай так, уж говорить вслух вряд ли разучишься.',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hand_job(attacker, defender, is_first) {
    if (is_first) {
      await attacker.say_and_wait('Нн——');
      await attacker.print_and_wait([
        'Будто шокированная жаром, рука ',
        attacker.get_colored_name(),
        ' на члене инстинктивно отдёргивается. Потом, как зимой суёшь ноги под одеяло, понемногу снова приближается.',
      ]);
      await attacker.print_and_wait(
        'Форма довольно грозная… от неё у девочки дёргается низ живота…',
      );
      await attacker.print_and_wait(
        'Но… когда пальцы обхватывают и слегка дрочат, предэякулят сочится и пляшет между пальцами… даже мило.',
      );
      await attacker.say_and_wait('Ха… ха… нн——');
      await attacker.print_and_wait('Уже понимаю, чего он хочет…');
    } else {
      await attacker.print_and_wait('Правда достаточно только этого…?');
      await attacker.print_and_wait([
        'Удовлетвориться, когда член гладит рука ',
        attacker.child_sex_title,
        '…?',
      ]);
      await attacker.print_and_wait('……');
      await attacker.print_and_wait('Правда… больше ничего не хочется…?');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async ask_hand_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('Помоги мне, пожалуйста…', true);
      await defender.print_and_wait([
        'Хоть ',
        d_call_a,
        ' ничего не сказала, ',
        defender.get_colored_name(),
        ', глядя на налитый красный член, уже разогретыми пальцами отлично понимает, что делать.',
      ]);
      await defender.say_and_wait('Нн——');
      await defender.print_and_wait([
        'Будто шокированная жаром, рука ',
        defender.get_colored_name(),
        ' на члене инстинктивно отдёргивается. Потом, как зимой суёшь ноги под одеяло, понемногу снова приближается.',
      ]);
      await defender.print_and_wait(
        'Форма довольно грозная… от неё у девочки дёргается низ живота…',
      );
      await defender.print_and_wait(
        'Но… когда пальцы обхватывают и слегка дрочат, предэякулят сочится и пляшет между пальцами… даже мило.',
      );
      await defender.say_and_wait('Ха… ха… нн——');
      await defender.print_and_wait('Уже понимаю, чего он хочет…');
    } else {
      await defender.print_and_wait('Правда достаточно только этого…?');
      await defender.print_and_wait([
        'Удовлетвориться, когда член гладит рука ',
        defender.child_sex_title,
        '…?',
      ]);
      await defender.print_and_wait('……');
      await defender.print_and_wait('Правда… больше ничего не хочется…?');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async force_hand_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('Руками можно, да?');
      await defender.print_and_wait([
        `Без пространства для отказа: вместе со словами `,
        d_call_a,
        ` уже у лица `,
        defender.get_colored_name(),
        ': послушно самой протянуть руки и служить — или дать члену, с которого капает грязный сок, обтереть все углы, что ему любопытны; у ',
        defender.get_colored_name(),
        ' только эти два варианта.',
      ]);
      await defender.say_and_wait('Нн——');
      await defender.print_and_wait([
        'Будто шокированная жаром, ',
        defender.get_colored_name(),
        ' — рука на члене инстинктивно отдёргивается. Потом, как зимой суёшь ноги под одеяло, понемногу снова приближается.',
      ]);
      await defender.print_and_wait(
        'Форма довольно грозная… от неё у девочки дёргается низ живота…',
      );
      await defender.print_and_wait(
        'Но… когда пальцы обхватывают и слегка дрочат, предэякулят сочится и пляшет между пальцами… даже мило.',
      );
      await defender.say_and_wait('Ха… ха… нн——');
      await defender.print_and_wait('Уже понимаю, чего он хочет…');
    } else {
      await defender.print_and_wait('Правда достаточно только этого…?');
      await defender.print_and_wait([
        'Удовлетвориться от руки ',
        defender.child_sex_title,
        '…?',
      ]);
      await defender.print_and_wait('……');
      await defender.print_and_wait('Правда… больше ничего не хочется…?');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async hand_and_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('Кажется, ');
      await attacker.print_and_wait(
        'это само выходит… удивительно естественно…',
      );
      await attacker.print_and_wait(
        'Стоит обеими руками поднять член — и голова сама незаметно тянется ближе.',
      );
      await attacker.print_and_wait('Согреть пальцами, растереть — и потом…');
      await attacker.say_and_wait('Чмок~');
      await attacker.print_and_wait('Такой густой…');
    } else {
      await attacker.print_and_wait(
        'Откидываешь член в сторону и, склонив голову, лижешь сверху вниз — как мороженое, у которого уже оплыл край.',
      );
      await attacker.say_and_wait('Хлюп… чмок——');
      await attacker.print_and_wait([
        a_call_d,
        ' — головка блестит; чьих в этих лоснящихся потёках больше — уже не разобрать…',
      ]);
      await attacker.print_and_wait('Совсем… уже ничего не понятно…❤️');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async ask_hand_and_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.say_and_wait('Хочется… чтобы я взяла в рот…?');
      await defender.print_and_wait('Это… так?');
      era.println();
      await defender.print_and_wait('Кажется, ');
      await defender.print_and_wait(
        'это само выходит… удивительно естественно…',
      );
      await defender.print_and_wait(
        'Стоит обеими руками поднять член — и голова сама незаметно тянется ближе.',
      );
      await defender.print_and_wait('Согреть пальцами, растереть — и потом…');
      await defender.say_and_wait('Чмок~');
      await defender.print_and_wait('Такой густой…');
    } else {
      await defender.print_and_wait(
        'Откидываешь член в сторону и, склонив голову, лижешь сверху вниз — как мороженое, у которого уже оплыл край.',
      );
      await defender.say_and_wait('Хлюп… чмок——');
      await defender.print_and_wait([
        d_call_a,
        ' — головка блестит; чьих в этих лоснящихся потёках больше — уже не разобрать…',
      ]);
      await defender.print_and_wait('Совсем… уже ничего не понятно…❤️');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async force_hand_and_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('Сама собой опускается на корточки.');
      await defender.print_and_wait(
        'Странно… явного приказа не было, а тело уже полностью знает, что делать дальше.',
      );
      era.println();
      await defender.print_and_wait('Кажется, ');
      await defender.print_and_wait(
        'это само выходит… удивительно естественно…',
      );
      await defender.print_and_wait(
        'Стоит обеими руками поднять член — и голова сама незаметно тянется ближе.',
      );
      await defender.print_and_wait('Согреть пальцами, растереть — и потом…');
      await defender.say_and_wait('Чмок~');
      await defender.print_and_wait('Такой густой…');
    } else {
      await defender.print_and_wait(
        'Откидываешь член в сторону и, склонив голову, лижешь сверху вниз — как мороженое, у которого уже оплыл край.',
      );
      await defender.say_and_wait('Хлюп… чмок——');
      await defender.print_and_wait([
        d_call_a,
        ' — головка блестит; чьих в этих лоснящихся потёках больше — уже не разобрать…',
      ]);
      await defender.print_and_wait('Совсем… уже ничего не понятно…❤️');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async tit_job(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('Скажи — красота.');
      await defender.print_and_wait([
        'Эта поза: ',
        d_call_a,
        ' склонилась внизу, руками поднимает девичью мягкость и обхватывает горячий член…',
      ]);
      await attacker.say_and_wait('Нн…');
      await defender.print_and_wait(
        'Вроде дошло: с головки поднимается горячий белый пар — густой, как вожделение.',
      );
      await defender.print_and_wait([
        'Рукой помогаешь ',
        d_call_a,
        ' снизу поднять голову.',
      ]);
      await defender.print_and_wait(
        'Ага. Лицо уже как следует пропиталось. Вкусное.',
      );
    } else {
      await attacker.say_and_wait('……');
      await attacker.print_and_wait([
        'Чувствуется: у ',
        a_call_d,
        ' талия прогибается назад.',
      ]);
      if (attacker.race > 0) {
        await attacker.print_and_wait(
          'Чуткие лошадиные уши сверху обдаёт рваным горячим дыханием.',
        );
      }
      await attacker.print_and_wait(
        'И член в мягкости тоже встал так, что киска сама дрогнет.',
      );
      await attacker.print_and_wait(
        'Сердце колотится — непонятно, от чего. Но это ведь только на ощупь, вслепую…',
      );
      await attacker.print_and_wait([
        'И ',
        attacker.get_colored_name(),
        ' поднимает голову.',
      ]);
      await attacker.print_and_wait('И правда — звериное лицо…');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async ask_tit_job(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await attacker.print_and_wait([
        'Горячим взглядом, от которого у ',
        a_call_d,
        ' соски вспыхивают и встают, моляще сверлит.',
      ]);
      await attacker.print_and_wait([
        'Напротив ',
        a_call_d,
        ' и правда не выдерживает и сдаётся, хе-хе.',
      ]);
      await defender.say_and_wait('……');
      era.println();
      await attacker.print_and_wait('Скажи — красота.');
      await attacker.print_and_wait([
        'Эта поза: ',
        a_call_d,
        ' склонилась внизу, руками поднимает девичью мягкость и обхватывает горячий член…',
      ]);
      await defender.say_and_wait('Нн…');
      await attacker.print_and_wait(
        'Вроде дошло: с головки поднимается горячий белый пар — густой, как вожделение.',
      );
      await attacker.print_and_wait([
        'Рукой помогаешь ',
        a_call_d,
        ' снизу поднять голову.',
      ]);
      await attacker.print_and_wait(
        'Ага. Лицо уже как следует пропиталось. Вкусное.',
      );
    } else {
      await defender.say_and_wait('……');
      await defender.print_and_wait([
        'Чувствуется: у ',
        d_call_a,
        ' талия прогибается назад.',
      ]);
      if (defender.race > 0) {
        await defender.print_and_wait(
          'Чуткие лошадиные уши сверху обдаёт рваным горячим дыханием.',
        );
      }
      await defender.print_and_wait(
        'И член в мягкости тоже встал так, что киска сама дрогнет.',
      );
      await defender.print_and_wait(
        'Сердце колотится — непонятно, от чего. Но это ведь только на ощупь, вслепую…',
      );
      await defender.print_and_wait([
        'И ',
        defender.get_colored_name(),
        ' поднимает голову.',
      ]);
      await defender.print_and_wait('И правда — звериное лицо…');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async fuck_tit(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await attacker.print_and_wait([
        'Нетерпеливо качаешь бёдрами: на теле напротив явно есть место, куда члену приятнее, чем в холодном воздухе. ',
        a_call_d,
        '.',
      ]);
      await attacker.print_and_wait('Ты же понимаешь.');
      await attacker.print_and_wait(
        'Лишние слова не нужны — только взглядом отдаёшь непререкаемый приказ.',
      );
      era.println();
      await attacker.print_and_wait('Разве не кайф.');
      await attacker.print_and_wait([
        'Эта поза: ',
        a_call_d,
        ' склонилась внизу, руками поднимает девичью мягкость и обхватывает горячий член…',
      ]);
      await defender.say_and_wait('Нн…');
      await attacker.print_and_wait(
        'Вроде дошло: с головки поднимается жаркий белый пар — густой от похоти.',
      );
      await attacker.print_and_wait([
        'Рукой помогаешь поднять голову той, что внизу. ',
        a_call_d,
        '.',
      ]);
      await attacker.print_and_wait(
        'Ага. Лицо уже пропарилось — совсем вкусное.',
      );
    } else {
      await defender.say_and_wait('……');
      await defender.print_and_wait([
        'Чувствуется: ',
        d_call_a,
        ' — поясница выгибается назад.',
      ]);
      if (defender.race > 0) {
        await defender.print_and_wait(
          'Чуткие лошадиные уши сверху обдаёт рваным горячим дыханием.',
        );
      }
      await defender.print_and_wait(
        'И член в мягкости тоже встал так, что киска сама дрогнет.',
      );
      await defender.print_and_wait(
        'Сердце колотится — непонятно, от чего. Но это ведь только на ощупь, вслепую…',
      );
      await defender.print_and_wait([
        'И ',
        defender.get_colored_name(),
        ' поднимает голову.',
      ]);
      await defender.print_and_wait('И правда — звериное лицо…');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async tit_and_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('Ну надо же… так любишь грудь…');
      await attacker.print_and_wait(
        'Прямо как крем на десерте — куда ни выдави, всё вкусно…',
      );
      await attacker.say_and_wait('Хлюп… хлюп… хлюп…');
      await attacker.print_and_wait([
        'Сиськи блестят — предэякулят капает на член и размазывается. Но не к замученным сиськам: самую горячую, налитую головку ',
        attacker.get_colored_name(),
        ' обеими руками принимает в рот.',
      ]);
      await attacker.say_and_wait('Нн…');
      await attacker.print_and_wait(
        'Язык уже не слушается, но стоит головке во рту чуть заскучать — и сиськи с сосками сами не перестают ласкать член…',
      );
    } else {
      await attacker.say_and_wait('Хлюп… хлюп…');
      await attacker.print_and_wait(
        'Сколько ни пробуй, вкусом это не назвать… солёный, грязный вкус лезет прямо в голову…',
      );
      await attacker.print_and_wait('Но…');
      await attacker.print_and_wait('Но…………');
      await attacker.print_and_wait('Но………………');
      await attacker.say_and_wait(
        ['Почему не останавливаемся… ни я, ни ', a_call_d, '…'],
        true,
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async ask_tit_and_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait([
        d_call_a,
        ' — головка, что высунулась из груди, какая-то вялая.',
      ]);
      await defender.print_and_wait(
        'Да и сама всё ясно: сложила ладони и просит.',
      );
      await defender.print_and_wait('Ну надо же… так любишь грудь…');
      await defender.print_and_wait(
        'Прямо как крем на десерте — куда ни выдави, всё вкусно…',
      );
      await defender.say_and_wait('Хлюп… хлюп… хлюп…');
      await defender.print_and_wait([
        'Сиськи блестят — предэякулят капает на член и размазывается. Но не к замученным сиськам: самую горячую, налитую головку ',
        defender.get_colored_name(),
        ' обеими руками принимает в рот.',
      ]);
      await defender.say_and_wait('Нн…');
      await defender.print_and_wait(
        'Язык уже не слушается, но стоит головке во рту чуть заскучать — и сиськи с сосками сами не перестают ласкать член…',
      );
    } else {
      await defender.say_and_wait('Хлюп… хлюп…');
      await defender.print_and_wait(
        'Сколько ни пробуй, вкусом это не назвать… солёный, грязный вкус лезет прямо в голову…',
      );
      await defender.print_and_wait('Но…');
      await defender.print_and_wait('Но…………');
      await defender.print_and_wait('Но………………');
      await defender.say_and_wait(
        ['Почему не останавливаемся… ни я, ни ', d_call_a, '…'],
        true,
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async fuck_tit_and_mouth(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.say_and_wait('Что…!?');
      await defender.print_and_wait(
        'Твою волю даже слушать не собирается — просто грубо берёт своё.',
      );
      await defender.print_and_wait('Ну надо же… так любишь грудь…');
      await defender.print_and_wait(
        'Прямо как крем на десерте — куда ни выдави, всё вкусно…',
      );
      await defender.say_and_wait('Хлюп… хлюп… хлюп…');
      await defender.print_and_wait([
        'Сиськи блестят — предэякулят капает на член и размазывается. Но не к замученным сиськам: самую горячую, налитую головку ',
        defender.get_colored_name(),
        ' обеими руками принимает в рот.',
      ]);
      await defender.say_and_wait('Нн…');
      await defender.print_and_wait(
        'Язык уже не слушается, но стоит головке во рту чуть заскучать — и сиськи с сосками сами не перестают ласкать член…',
      );
    } else {
      await defender.say_and_wait('Хлюп… хлюп…');
      await defender.print_and_wait(
        'Сколько ни пробуй, вкусом это не назвать… солёный, грязный вкус лезет прямо в голову…',
      );
      await defender.print_and_wait('Но…');
      await defender.print_and_wait('Но…………');
      await defender.print_and_wait('Но………………');
      await defender.say_and_wait(
        ['Почему не останавливаемся… ни я, ни ', d_call_a, '…'],
        true,
      );
    }
  },
  /**
   * 吸乳头，同时也是喂奶的地文
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方，但如果是喂奶则是被动方
   * @param {CharaTalk} defender 被动方，但如果是喂奶则是主动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async suck_nipple(attacker, defender, a_call_d) {
    if (Math.random() < 0.5) {
      await attacker.say_and_wait('Чмок——');
      await attacker.print_and_wait(
        'Белая мягкость и малиновое перед глазами инстинктивно норовят увернуться, но языку так просто не насытиться.',
      );
      await attacker.print_and_wait([
        defender.teen_sex_title,
        ' — мягкость шарахается влево-вправо и в итоге покорно остаётся на кончике языка.',
      ]);
      await attacker.say_and_wait('Сос——');
      await attacker.print_and_wait(
        'Понемногу красная точка на кончике языка твердеет от жара. Осторожно зубами захватываешь горошину — и шух, всос——',
      );
      await defender.say_and_wait('Нн——!');
      await attacker.print_and_wait([
        a_call_d,
        ' — вес тела сразу тяжело наваливается.',
      ]);
      await attacker.print_and_wait('Наверное, ноги подкосились.');
    } else {
      await attacker.print_and_wait('Разве не стыдно?');
      await attacker.print_and_wait([
        'Тебе кладут голову на колени и подносят к лицу ',
        era.get(`talent:${defender.id}:泌乳`) > 0
          ? 'текущую молоком '
          : 'белую ',
        'грудь.',
      ]);
      await attacker.print_and_wait(
        'И, наверное, по твоей вине эти вызывающе яркие соски уже распухли в удобную для сосания удлинённую форму…',
      );
      await attacker.print_and_wait('…так что правда не стыдно из-за этого?');
      await attacker.print_and_wait('Совсем нет.');
      await attacker.print_and_wait(
        'Сладко щуришься и ртом захватываешь алую горошину — всос.',
      );
      if (era.get(`talent:${defender.id}:泌乳`) > 0) {
        await attacker.print_and_wait('「Пшшшшш——」');
        await attacker.print_and_wait([
          'Хоть не видно, в голове уже только то: когда молоко пошло в первый раз, ',
          a_call_d,
          ' — зардевшееся лицо, из белой груди брызнула тонкая непрерывная дуга, и взгляд сам за ней тянется…',
        ]);
        await attacker.print_and_wait('И слегка сладко.');
      }
    }
  },
  /**
   * 咬乳头，同时也是请求咬乳头的地文
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方，但如果是请求咬乳头则是被动方
   * @param {CharaTalk} defender 被动方，但如果是请求咬乳头则是主动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async bite_nipple(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      'В миг, когда зубы захватывают твёрдую горошину, ',
      a_call_d,
      ' в объятиях сразу каменеет.',
    ]);
    await attacker.print_and_wait('Э… вот как……');
    await attacker.print_and_wait([
      'Легко работая зубами, оставляешь неровный красный ободок вокруг чувствительного соска… и заодно ',
      defender.teen_sex_title,
      ' в объятиях дрожит без остановки…',
    ]);
    await attacker.print_and_wait([
      'Наверное, поняв, куда ты дальше целишься, в миг, когда язык нежно смазывает сосок, ',
      defender.get_colored_name(),
      ' тянется руками и обнимает ',
      attacker.get_colored_name(),
      ' за талию…',
    ]);
    await defender.say_and_wait('Нн——');
    await attacker.print_and_wait('Очень мило.');
    await attacker.print_and_wait([
      'Не только про ту, что в объятиях — ',
      a_call_d,
      '. Ещё и про соски, сплошь в красных следах.',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async ask_milk_and_hand_job(
    attacker,
    defender,
    is_first,
    a_call_d,
    d_call_a,
  ) {
    if (is_first) {
      await attacker.print_and_wait([
        'Перед глазами одна белая кожа и грудь. ',
        a_call_d,
        ' закрывает всё — жаль, не видно лица: сейчас оно наверняка очень вкусное.',
      ]);
      await attacker.print_and_wait([
        'Даже сосок, что пляшет, дразнимый кончиком языка, на миг кажется пресным, но ',
        attacker.get_colored_name(),
        ' сразу находит, куда направить внимание.',
      ]);
      await attacker.print_and_wait('Так какое же всё-таки сейчас лицо.');
      await attacker.print_and_wait([
        'Потерянное, борющееся — удовольствие от того, что сосут ',
        era.get(`talent:${defender.id}:泌乳`) > 0 ? 'молоко' : 'сосок',
        ', тащит в грязь… стыд от раскалённого члена, что прыгает в ладони… или уже совсем утонувшее в этом грязном кайфе…',
      ]);
      await defender.say_and_wait('Э!?');
      await attacker.print_and_wait([
        'Этому вопросу не суждено получить ответ, но ',
        attacker.get_colored_name(),
        ' — член, который ',
        a_call_d,
        ' едва обхватила пальцами, вдруг неестественно встаёт ещё выше.',
      ]);
    } else {
      await defender.print_and_wait('Не знаешь, радоваться ли такому себе…');
      await defender.print_and_wait([
        'По тому, как язык ходит у взятого в рот ',
        era.get(`talent:${attacker.id}:泌乳`) > 0 ? 'текущего молоком ' : '',
        'соска, смутно читается лицо. ',
        d_call_a,
        ' не спрятать.',
      ]);
      await defender.print_and_wait(
        'По обжигающей ладонь температуре члена и вздувшимся венам смутно рисуешь в голове, какой он сейчас.',
      );
      await defender.print_and_wait('Ха… ну так возьми ответственность…');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async milk_and_hand_job(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('И так всё ясно.');
      await defender.print_and_wait(
        'После приглашения лечь на колени и сосать — между ног уже стоит высоко.',
      );
      await defender.print_and_wait('И так всё ясно…');
      await defender.print_and_wait([
        'Перед глазами одна белая кожа и грудь. ',
        d_call_a,
        ' закрывает всё — жаль, не видно лица: сейчас оно наверняка очень вкусное.',
      ]);
      await defender.print_and_wait([
        'Даже сосок, что пляшет, дразнимый кончиком языка, на миг кажется пресным, но ',
        defender.get_colored_name(),
        ' сразу находит, куда направить внимание.',
      ]);
      await defender.print_and_wait('Так какое же всё-таки сейчас лицо.');
      await defender.print_and_wait([
        'Потерянное, борющееся — удовольствие от того, что сосут ',
        era.get(`talent:${attacker.id}:泌乳`) > 0 ? 'молоко' : 'сосок',
        ', тащит в грязь… стыд от раскалённого члена, что прыгает в ладони… или уже совсем утонувшее в этом грязном кайфе…',
      ]);
      await attacker.say_and_wait('Э!?');
      await defender.print_and_wait([
        'Этому вопросу не суждено получить ответ, но ',
        defender.get_colored_name(),
        ' — член, который ',
        d_call_a,
        ' едва обхватила пальцами, вдруг неестественно встаёт ещё выше.',
      ]);
    } else {
      await attacker.print_and_wait('Не знаешь, радоваться ли такому себе…');
      await attacker.print_and_wait([
        'По тому, как язык ходит у взятого в рот ',
        era.get(`talent:${defender.id}:泌乳`) > 0 ? 'текущего молоком ' : '',
        'соска, смутно читается лицо. ',
        a_call_d,
        ' не спрятать.',
      ]);
      await attacker.print_and_wait(
        'По обжигающей ладонь температуре члена и вздувшимся венам смутно рисуешь в голове, какой он сейчас.',
      );
      await attacker.print_and_wait('Ха… ну так возьми ответственность…');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async non_penetrative(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('Правда вставил.');
      await defender.print_and_wait([
        'Член… вставил между сомкнутых бёдер ',
        d_call_a,
        ' — в мягкое, тёплое мясо бёдер.',
      ]);
      await defender.print_and_wait('Мягко, тепло, влажно, кайф, кайф, кайф…');
      await defender.print_and_wait('Чуть скрещенные ноги — от стыда…');
      await defender.print_and_wait(
        'Не только мягкость: обычные тренировки дали своё — член держат крепко, горячо сжимают.',
      );
      await defender.print_and_wait([
        'Как шлюха в течке — ',
        defender.get_colored_name(),
        ' рьяно трёт член между бёдер ',
        d_call_a,
        ' — вперёд-назад по паху, пока не станет скользко.',
      ]);
    } else {
      await defender.print_and_wait(
        'Стало скользко и блестит — соком, смазкой, стыдным мокрым.',
      );
      await defender.print_and_wait('Стало чуть сноровистее.');
      await defender.print_and_wait('Стало невозможно терпеть спокойно.');
      await defender.print_and_wait(
        'Стало… одиноко, будто мало, будто хочется внутрь…?',
      );
      await attacker.say_and_wait([a_call_d, '…']);
      await defender.print_and_wait('И взгляд… мокрый… дыхание сбито…');
      await defender.print_and_wait(
        'Когда ногами так пользуются — вот и выходит такое лицо.',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async ask_non_penetrative(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.say_and_wait(
        ['Понимаешь, что говоришь… ', d_call_a, '…'],
        true,
      );
      if (!attacker.id && defender.race > 0) {
        await defender.say_and_wait(
          `Ах… ах… вот как смотришь на ноги своей подопечной.`,
          true,
        );
      }
      await attacker.print_and_wait('Правда вставил.');
      await attacker.print_and_wait([
        'Член… между сомкнутых бёдер. ',
        a_call_d,
        '.',
      ]);
      await attacker.print_and_wait('Мягко, тепло, кайф, кайф, кайф…');
      await attacker.print_and_wait('Чуть скрещенные ноги — от стыда…');
      await attacker.print_and_wait(
        'Не только мягкость: обычные тренировки дали своё — член держат крепко.',
      );
      await attacker.print_and_wait([
        'Как шлюха в течке — ',
        attacker.get_colored_name(),
        ' рьяно трёт член между сомкнутых бёдер. ',
        a_call_d,
        '.',
      ]);
    } else {
      await attacker.print_and_wait('Стало скользко и блестит.');
      await attacker.print_and_wait('Стало чуть сноровистее.');
      await attacker.print_and_wait('Стало невозможно терпеть спокойно.');
      await attacker.print_and_wait('Стало… немного пусто…?');
      await defender.say_and_wait([d_call_a, '…']);
      await attacker.print_and_wait('И взгляд… мокрый…');
      await attacker.print_and_wait(
        'Когда ногами так пользуются — вот и выходит такое лицо.',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async sixty_nine(attacker, defender, is_first) {
    if (is_first) {
      await era.printAndWait('Липкие тела наложились друг на друга.');
      await era.printAndWait('Губы упёрлись в киску, губы — и в член.');
      await era.printAndWait(
        'Солёный похотливый сок ходит кругами в двух телах… как у зверей: глотаешь чужое, стыдно, горячо',
      );
      await era.printAndWait(
        'Кто-то первым намеренно сосёт и лижет — хлюп… чмок, грязно, мокро — и другой по образцу подхватывает.',
      );
      await era.printAndWait([
        attacker.get_colored_name(),
        '/',
        defender.get_colored_name(),
        '「',
        { color: attacker.color, content: 'хлюп… чмок' },
        { color: defender.color, content: 'Нннн хлюп…' },
        '……」',
      ]);
      await era.printAndWait('Прижатые друг к другу тела горят.');
      await era.printAndWait(
        'Так горячо, что кружит голову… дыхание сбито, слюна ниточками…',
      );
    } else {
      await era.printAndWait(
        'Когда-то чистые тонкие губки вылизаны до раскрытого, размякшего вида — мокрые, стыдно цветут.',
      );
      await era.printAndWait(
        'Когда-то свирепый налитый член от этого шустрого маленького язычка уже покрыт милым блеском слюны.',
      );
      await era.printAndWait([
        attacker.get_colored_name(),
        '/',
        defender.get_colored_name(),
        '「',
        { color: attacker.color, content: 'Ха…' },
        { color: defender.color, content: 'Ха…' },
        '……」',
      ]);
      await era.printAndWait(
        'Два потных тела трутся, прижавшись, и жадно берегут этот редкий момент перемирия… кожа к коже, всё ещё мокро.',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async armpit_intercourse(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('Паршиво.');
      await defender.print_and_wait([
        'Такую жалобу читаешь по стыдливо качающейся жопе. ',
        d_call_a,
        ' перед тобой высоко подняла руку.',
      ]);
      await defender.print_and_wait('Но ничего не поделаешь.');
      await attacker.say_and_wait('Нн——');
      await defender.print_and_wait([
        d_call_a,
        ' — подмышку сейчас моет огромная головка.',
      ]);
      await defender.print_and_wait(
        'Горячая подмышечная плоть от толчков розовеет — будто и правда стала похотливым органом…',
      );
      await defender.print_and_wait([
        'Ещё не вышло принять это как само собой разумеющееся. ',
        defender.get_colored_name(),
        ' — движения ещё с колебанием…',
      ]);
      await defender.print_and_wait([
        '…нерешительно трёт и толкает член в подмышечную щель. ',
        d_call_a,
        ' стоит к тебе спиной…',
      ]);
    } else {
      await attacker.print_and_wait('Ощущение… становится странным…');
      await attacker.print_and_wait(
        'Подмышки… оказывается, это орган для такого…',
      );
      await attacker.print_and_wait('И, оказывается, можно чувствовать такое…');
      await attacker.print_and_wait([
        'Кажется, член и правда что-то меняет: пунцовая ',
        attacker.get_colored_name(),
        ' тревожно служит уже освоившемуся хлюп-хлюп господину Члену.',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async ask_armpit_intercourse(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await defender.say_and_wait('Э?');
      await attacker.print_and_wait('Можешь повторить…');
      await attacker.print_and_wait([
        'Перед тобой ',
        a_call_d,
        ' с натянутым лицом без слов подгоняет, и тогда…',
      ]);
      await attacker.say_and_wait('Можно потереться членом о подмышку!');
      await defender.say_and_wait('……');
      await attacker.print_and_wait('Паршиво.');
      await attacker.print_and_wait([
        'Такую жалобу читаешь по стыдливо качающейся жопе. ',
        a_call_d,
        ' перед тобой высоко подняла руку.',
      ]);
      await attacker.print_and_wait('Но ничего не поделаешь.');
      await defender.say_and_wait('Нн——');
      await attacker.print_and_wait([
        a_call_d,
        ' — подмышку сейчас моет огромная головка.',
      ]);
      await attacker.print_and_wait(
        'Горячая подмышечная плоть от толчков розовеет — будто и правда стала похотливым органом…',
      );
      await attacker.print_and_wait([
        'Ещё не вышло принять это как само собой разумеющееся. ',
        attacker.get_colored_name(),
        ' — движения ещё с колебанием…',
      ]);
      await attacker.print_and_wait([
        '…нерешительно трёт и толкает член в подмышечную щель. ',
        a_call_d,
        ' стоит к тебе спиной…',
      ]);
    } else {
      await defender.print_and_wait('Ощущение… становится странным…');
      await defender.print_and_wait(
        'Подмышки… оказывается, это орган для такого…',
      );
      await defender.print_and_wait('И, оказывается, можно чувствовать такое…');
      await defender.print_and_wait([
        'Кажется, член и правда что-то меняет: пунцовая ',
        defender.get_colored_name(),
        ' тревожно служит уже освоившемуся хлюп-хлюп господину Члену.',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async force_armpit_intercourse(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'Руку вывернули вверх. ',
        a_call_d,
        ' сейчас о чём думает…',
      ]);
      await attacker.print_and_wait('Наверное, ничего хорошего…');
      await attacker.print_and_wait('Паршиво.');
      await attacker.print_and_wait([
        'Такую жалобу читаешь по стыдливо качающейся жопе. ',
        a_call_d,
        ' перед тобой высоко подняла руку.',
      ]);
      await attacker.print_and_wait('Но ничего не поделаешь.');
      await defender.say_and_wait('Нн——');
      await attacker.print_and_wait([
        a_call_d,
        ' — подмышку сейчас моет огромная головка.',
      ]);
      await attacker.print_and_wait(
        'Горячая подмышечная плоть от толчков розовеет — будто и правда стала похотливым органом…',
      );
      await attacker.print_and_wait([
        'Ещё не вышло принять это как само собой разумеющееся. ',
        attacker.get_colored_name(),
        ' — движения ещё с колебанием…',
      ]);
      await attacker.print_and_wait([
        '…нерешительно трёт и толкает член в подмышечную щель. ',
        a_call_d,
        ' стоит к тебе спиной…',
      ]);
    } else {
      await defender.print_and_wait('Ощущение… становится странным…');
      await defender.print_and_wait(
        'Подмышки… оказывается, это орган для такого…',
      );
      await defender.print_and_wait('И, оказывается, можно чувствовать такое…');
      await defender.print_and_wait([
        'Кажется, член и правда что-то меняет: пунцовая ',
        defender.get_colored_name(),
        ' тревожно служит уже освоившемуся хлюп-хлюп господину Члену.',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async foot_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('Улыбка точно будет.');
      await defender.print_and_wait([
        'Когда ',
        attacker.get_colored_name(),
        ' ',
        defender.race > 0
          ? 'теми же ногами, что носятся по скаковой дорожке, '
          : '',
        'ступает на член напротив и видит, как этот негодяй от возбуждения сам подставляет подошву, — точно улыбнётся.',
      ]);
      await defender.print_and_wait(
        'Улыбка брезгливости и презрения при виде грязи… заинтересованно-терпимая улыбка любовнику со странным фетишем… наивная улыбка просто потому, что забавно…',
      );
      await defender.print_and_wait([
        'Перед тобой ',
        d_call_a,
        ' — какая из них… в общем, та, от которой член встаёт ещё крепче.',
      ]);
    } else {
      await defender.print_and_wait('Наверное, поняла.');
      await defender.print_and_wait(
        'Член, что насилует подошву, — не хрупкая штука.',
      );
      await defender.print_and_wait([
        d_call_a,
        ' — движения, которыми топчет член, стали куда естественнее.',
      ]);
      await defender.print_and_wait([
        'Будто топтать подошвой этот член — врождённый талант. ',
        defender.get_colored_name(),
        '.',
      ]);
      await defender.print_and_wait('Хх……');
      await defender.print_and_wait([
        'От одной этой мысли ',
        defender.get_colored_name(),
        ' снова чувствует, как низ живота наливается жаром.',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async ask_foot_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('……так и есть?');
      await attacker.print_and_wait([
        'Хоть просьба запредельно грязная, ',
        a_call_d,
        ' напротив смотрит с лицом «я так и знала» — никуда не торопится.',
      ]);
      await attacker.print_and_wait(
        'Вот как…… настолько всё было написано на лице……',
      );
      await attacker.print_and_wait('Улыбка точно будет.');
      await attacker.print_and_wait([
        'Когда ',
        defender.get_colored_name(),
        ' ',
        attacker.race > 0
          ? 'теми же ногами, что носятся по скаковой дорожке, '
          : '',
        'наступит на член перед глазами и увидит, как этот засранец от возбуждения сам подпирает подошву, — точно улыбнётся.',
      ]);
      await attacker.print_and_wait(
        'Улыбка брезгливости и презрения при виде грязи… заинтересованно-терпимая улыбка любовнику со странным фетишем… наивная улыбка просто потому, что забавно…',
      );
      await attacker.print_and_wait([
        'Перед тобой ',
        a_call_d,
        ' — какая из них… в любом случае та, от которой член встаёт ещё крепче.',
      ]);
    } else {
      await attacker.print_and_wait('Наверное, поняла.');
      await attacker.print_and_wait(
        'Член, что насилует подошву, — не хрупкая штука.',
      );
      await attacker.print_and_wait([
        a_call_d,
        ' топчет член уже куда естественнее.',
      ]);
      await attacker.print_and_wait([
        'Будто топтать подошвой этот член — врождённый талант. ',
        attacker.get_colored_name(),
        '.',
      ]);
      await attacker.print_and_wait('Хх……');
      await attacker.print_and_wait([
        'От одной этой мысли ',
        attacker.get_colored_name(),
        ' снова чувствует, как низ живота наливается жаром.',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async force_foot_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        'Обидеться на такую просьбу и отвернуться — нормально.',
      );
      await attacker.print_and_wait(
        'Хотя в этом деле отвести взгляд, пока топчешь, — как раз награда.',
      );
      await attacker.print_and_wait('Ах…… взглянула……');
      await attacker.print_and_wait('Улыбка точно будет.');
      await attacker.print_and_wait([
        'Когда ',
        defender.get_colored_name(),
        ' ',
        attacker.race > 0
          ? 'теми же ногами, что носятся по скаковой дорожке, '
          : '',
        'наступит на член перед глазами и увидит, как этот засранец от возбуждения сам подпирает подошву, — точно улыбнётся.',
      ]);
      await attacker.print_and_wait(
        'Улыбка брезгливости и презрения при виде грязи… заинтересованно-терпимая улыбка любовнику со странным фетишем… наивная улыбка просто потому, что забавно…',
      );
      await attacker.print_and_wait([
        'Перед тобой ',
        a_call_d,
        ' — какая из них… в любом случае та, от которой член встаёт ещё крепче.',
      ]);
    } else {
      await attacker.print_and_wait('Наверное, поняла.');
      await attacker.print_and_wait(
        'Член, что насилует подошву, — не хрупкая штука.',
      );
      await attacker.print_and_wait([
        a_call_d,
        ' топчет член уже куда естественнее.',
      ]);
      await attacker.print_and_wait([
        'Будто топтать подошвой этот член — врождённый талант. ',
        attacker.get_colored_name(),
        '.',
      ]);
      await attacker.print_and_wait('Хх……');
      await attacker.print_and_wait([
        'От одной этой мысли ',
        attacker.get_colored_name(),
        ' снова чувствует, как низ живота наливается жаром.',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async tail_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('Ловко…');
      await defender.print_and_wait([
        'Просила — и всё равно неожиданно ловко. ',
        defender.get_colored_name(),
        ' смотрит: волнистый конский хвост обвивает член.',
      ]);
      await defender.print_and_wait(
        'И жопа с этого ракурса тоже со своим вкусом.',
      );
      if (attacker.sex_code !== 1) {
        await defender.print_and_wait([
          'Чуть уловимый девичий запах, которым неизбежно пропитан длинный конский хвост, и ',
          defender.get_colored_name(),
          ' — член встаёт как никогда.',
        ]);
      }
      await attacker.say_and_wait('……');
      await defender.print_and_wait([
        '……и, видимо, почувствовав этот вспыхнувший жар, ',
        d_call_a,
        ' отвернулась — даже красные уши двигаются мило.',
      ]);
    } else {
      await defender.print_and_wait(
        'Движения грубеют…… или, скорее, входят в навык.',
      );
      await defender.print_and_wait(
        'Хвост, вымазанный липким похотливым соком, всегда чему-то учится у этого блестящего «средства для шерсти».',
      );
      await defender.print_and_wait(
        'Например, с какой силой этот член любит, чтобы его обвивали.',
      );
      await defender.print_and_wait(
        'Например, где этот член дрожит, если поскрести.',
      );
      if (attacker.sex_code !== 1) {
        await defender.print_and_wait(
          'Например, не нужна ли киске под хвостом ещё…… жёстче……',
        );
      }
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async ask_tail_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('Эх…');
      await attacker.print_and_wait([
        'Почти слышно, как перед тобой ',
        a_call_d,
        ' тяжело вздыхает.',
      ]);
      await attacker.print_and_wait('Не слишком ли это……');
      await attacker.print_and_wait([
        'Вроде бы корит себя, что не сдерживается, но сейчас ',
        attacker.get_colored_name(),
        ' всё равно смотрит не отрываясь — ',
        a_call_d,
        '.',
      ]);
      await attacker.print_and_wait('Ловко…');
      await attacker.print_and_wait([
        'Просила — и всё равно неожиданно ловко. ',
        attacker.get_colored_name(),
        ' смотрит: волнистый конский хвост обвивает член.',
      ]);
      await attacker.print_and_wait(
        'И жопа с этого ракурса тоже со своим вкусом.',
      );
      if (defender.sex_code !== 1) {
        await attacker.print_and_wait([
          'Чуть уловимый девичий запах, которым неизбежно пропитан длинный конский хвост, и ',
          attacker.get_colored_name(),
          ' — член встаёт как никогда.',
        ]);
      }
      await defender.say_and_wait('……');
      await attacker.print_and_wait([
        '……и, видимо, почувствовав этот вспыхнувший жар, ',
        a_call_d,
        ' отвернулась — даже красные уши двигаются мило.',
      ]);
    } else {
      await attacker.print_and_wait(
        'Движения грубеют…… или, скорее, входят в навык.',
      );
      await attacker.print_and_wait(
        'Хвост, вымазанный липким похотливым соком, всегда чему-то учится у этого блестящего «средства для шерсти».',
      );
      await attacker.print_and_wait(
        'Например, с какой силой этот член любит, чтобы его обвивали.',
      );
      await attacker.print_and_wait(
        'Например, где этот член дрожит, если поскрести.',
      );
      if (defender.sex_code !== 1) {
        await attacker.print_and_wait(
          'Например, не нужна ли киске под хвостом ещё…… жёстче……',
        );
      }
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async force_tail_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('Неожиданно тихо?');
      await attacker.print_and_wait([
        'К грязным фетишам ',
        attacker.get_colored_name(),
        ' уже, наверное, была моральная готовность — и ',
        a_call_d,
        ' на этот раз подозрительно послушна.',
      ]);
      await attacker.print_and_wait('Ловко…');
      await attacker.print_and_wait([
        'Просила — и всё равно неожиданно ловко. ',
        attacker.get_colored_name(),
        ' смотрит: волнистый конский хвост обвивает член.',
      ]);
      await attacker.print_and_wait(
        'И жопа с этого ракурса тоже со своим вкусом.',
      );
      if (defender.sex_code !== 1) {
        await attacker.print_and_wait([
          'Чуть уловимый девичий запах, которым неизбежно пропитан длинный конский хвост, и ',
          attacker.get_colored_name(),
          ' — член встаёт как никогда.',
        ]);
      }
      await defender.say_and_wait('……');
      await attacker.print_and_wait([
        '……и, видимо, почувствовав этот вспыхнувший жар, ',
        a_call_d,
        ' отвернулась — даже красные уши двигаются мило.',
      ]);
    } else {
      await attacker.print_and_wait(
        'Движения грубеют…… или, скорее, входят в навык.',
      );
      await attacker.print_and_wait(
        'Хвост, вымазанный липким похотливым соком, всегда чему-то учится у этого блестящего «средства для шерсти».',
      );
      await attacker.print_and_wait(
        'Например, с какой силой этот член любит, чтобы его обвивали.',
      );
      await attacker.print_and_wait(
        'Например, где этот член дрожит, если поскрести.',
      );
      if (defender.sex_code !== 1) {
        await attacker.print_and_wait(
          'Например, не нужна ли киске под хвостом ещё…… жёстче……',
        );
      }
    }
  },
  /**
   * @author 天马闪光蹄
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async hair_fuck(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.say_and_wait('Нн——');
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' полуприседает, смотрит на знакомую фигуру напротив — и в груди невольно поднимается страх.',
      ]);
      await attacker.print_and_wait([
        a_call_d,
        ' усмехается, подаёт бёдра вперёд и надвигается на ',
        attacker.get_colored_name(),
        ' вплотную.',
      ]);
      await attacker.print_and_wait([
        'Тёплый член с неумолимой волей упирается в лоб. ',
        attacker.get_colored_name(),
        ' сглатывает, поднимает голову навстречу, осторожно пальцами подхватывает волосы, обвивает ими вонзающееся копьё и берётся за дело.',
      ]);
    } else {
      await attacker.print_and_wait('Шур-шур……');
      await attacker.print_and_wait(
        'Ладони и волосы снова и снова трут эту штуку.',
      );
      await attacker.print_and_wait(
        'Это ощущение…… эта штука…… всё ещё растёт……',
      );
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' чувствует, как чешутся кончики волос, и дыхание тяжелеет.',
      ]);
    }
  },
  /**
   * @author 天马闪光蹄
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async ask_hair_fuck(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await defender.say_and_wait([d_call_a, '…?']);
          await attacker.print_and_wait([
            defender.get_colored_name(),
            ' чуть поднимает голову — ожидание и стыд вместе. На макушке тепло, и тяжелее, чем кажется (это нервы?). Такая близость, такой густой запах гормонов сбивают с толку весь мозг.',
          ]);
          await attacker.print_and_wait([
            defender.get_colored_name(),
            ' сидит на корточках внизу — ',
            attacker.get_colored_name(),
            ', и лицо само становится грязным……',
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' невольно улыбается. Протягивает руки — ',
            defender.sex,
            ' не дёргается: ладони мягко к ушам с обеих сторон, нежно держит голову…… и двигает бёдрами.',
          ]);
          await attacker.print_and_wait([
            'Член ходит в волосах, растрёпывает аккуратно подстриженную чёлку, расчищая себе путь. Трение шерсти о кожу выжимает сок с головки, и двигаться становится легче. Жидкость стекает сверху. ',
            defender.phy_sex_title,
            ' уже без рассудка, стонет — на ресницы, и капает ниже……',
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' глядит на это — и твердеет ещё.',
          ]);
          break;
        case 1:
          await defender.say_and_wait('Ты хочешь…… вот так?!');
          await attacker.print_and_wait([
            'Сидящая перед ',
            attacker.get_colored_name(),
            ' ',
            a_call_d,
            ' бросает это тоном смеси «извращенец» и «ну и что с тобой поделать», вздыхает, легко встряхивает головой — гладкие волосы с приятным запахом задевают ',
            attacker.get_colored_name(),
            ' — уже торчащий член — и замирают.',
          ]);
          await attacker.print_and_wait('Теперь твоя очередь.');
          await attacker.print_and_wait([
            'Подаёт бёдра, и эта штука косо скользит вниз к шее; двойное касание мелких волос и нежной кожи — и ',
            attacker.get_colored_name(),
            ' не сдерживает вздох.',
          ]);
          await attacker.print_and_wait([
            defender.sex,
            ' смотрит на ',
            attacker.get_colored_name(),
            ' в таком виде, вскидывает бровь, чуть клонит шею, поднимает руку и слегка прижимает ствол — ',
            attacker.get_colored_name(),
            ' под тройным давлением. Ощущения бьют сразу — ',
            attacker.get_colored_name(),
            ' сыто выдыхает.',
          ]);
          break;
        case 2:
          await defender.say_and_wait('Хе-хе……');
          await attacker.print_and_wait([
            a_call_d,
            ' смотрит на ',
            attacker.get_colored_name(),
            ' — и не то чтобы улыбка. ',
            attacker.get_colored_name(),
            ' невольно делается совестно, но телом всё равно просит — ',
            defender.sex,
            ' пусть сделает именно так.',
          ]);
          await attacker.print_and_wait([
            defender.sex,
            ' будто нарочно морит ожиданием — ',
            attacker.get_colored_name(),
            ' ждёт несколько секунд. Потом заводит руки за спину, подбирает длинные волосы и резко встряхивает——',
          ]);
          await attacker.print_and_wait([
            'Тысячи прядей падают на ',
            attacker.get_colored_name(),
            ' — на чувствительное место, прохладно, щекотно. ',
            attacker.get_colored_name(),
            ' шипя втягивает воздух. Нет, это ещё не всё——',
          ]);
          await attacker.print_and_wait([
            defender.sex,
            ' несёт следом руки с волосами: десять пальцев смыкаются, из прядей — свиток. Низ ',
            attacker.get_colored_name(),
            ' полностью, плотно обхвачен — и дрочит——',
          ]);
          await attacker.print_and_wait([
            'Нынешних ощущений для ',
            attacker.get_colored_name(),
            ' сейчас, пожалуй, слишком много.',
          ]);
      }
    } else {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await attacker.print_and_wait(
            'Гладишь кончик уха не ради бархата шерсти на пальцах — чуть сгибаешь и трёшься об него своим членом.',
          );
          await attacker.print_and_wait([
            'Скользишь — непривычное трение телесной шерсти, и ',
            attacker.get_colored_name(),
            ' возбуждается невероятно.',
          ]);
          await attacker.print_and_wait([
            'Снизу ',
            defender.phy_sex_title,
            ' издаёт едва слышный стон — и ещё сильнее вспыхивает желание ',
            attacker.get_colored_name(),
            '.',
          ]);
          break;
        case 1:
          await attacker.print_and_wait([
            'Три места…… тройное ощущение…… ',
            defender.phy_sex_title,
            ' напротив сама так служит — ',
            attacker.get_colored_name(),
            '……',
          ]);
          await attacker.print_and_wait('На свете нет ничего чувствительнее.');
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' невольно кривит уголок рта и жмурится, наслаждаясь.',
          ]);
          break;
        case 2:
          await attacker.print_and_wait(
            'Как стекающая завеса воды, как мягко вьющаяся кисея.',
          );
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' — эта штука входит в диковинную дырку.',
          ]);
          await attacker.print_and_wait([
            'Трёшься снова и снова, ',
            attacker.get_colored_name(),
            ' невольно сводит ноги, ',
          ]);
          await attacker.print_and_wait(
            'с головки члена сочится бесцветная жидкость……',
          );
      }
    }
  },
  /**
   * @author 天马闪光蹄
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async force_hair_fuck(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await defender.say_and_wait('Э…… нн!');
          await attacker.print_and_wait([
            'Внезапно ',
            attacker.get_colored_name(),
            ' берёт за лицо. Эта ',
            defender.phy_sex_title,
            ' не успевает отпрянуть — тёплую набухшую штуку кладут в щель между ушной раковиной и волосами. ',
            defender.sex,
            ' не отшатнулась. Голову легко покачивают — ',
            defender.sex,
            ' терпит, бёдра ускоряются. Член, зажатый между кожей и шерстью, сразу возбуждается и толстеет.',
          ]);
          await attacker.print_and_wait([
            defender.sex,
            ' ещё не поняла, что происходит, а уже вынуждена бросить думать: место, которым принимают и обрабатывают мир, стало полем, где скачет низ — ',
            attacker.get_colored_name(),
            '.',
          ]);
          break;
        case 1:
          await defender.say_and_wait('Ха-а, подожди, подожди!');
          await attacker.print_and_wait([
            'Один взгляд ',
            attacker.get_colored_name(),
            ' — и ',
            defender.sex,
            ' будто знает, что будет дальше: одной рукой прикрывает затылок, другой суетливо машет. ',
            attacker.get_colored_name(),
            ' всё равно плевать.',
          ]);
          await attacker.print_and_wait([
            'Широким шагом подходишь, прижимаешь ей плечо — ',
            defender.sex,
            ' уже под тобой. Подаёшь бёдра и кладёшь член на затылок: укромное место. ',
            defender.phy_sex_title,
            ' терпит, а ты с удовольствием скользишь между гладким блеском прядей и нежной белой кожей.',
          ]);
          break;
        case 2:
          await defender.say_and_wait('Ладно…… если тебе так надо', true);
          await attacker.print_and_wait([
            'После взгляда глаза в глаза ',
            defender.phy_sex_title,
            ' напротив сдаётся. ',
            attacker.get_colored_name(),
            ' с видом победителя принимается за трофей.',
          ]);
          await attacker.print_and_wait([
            'Вытягиваешь привычную руку. ',
            attacker.get_colored_name(),
            ' забавляется. ',
            defender.sex,
            ' не дёргается — длинные волосы красивые, слабо пахнут; ухмыляется, зачерпывает охапку и грубо наматывает на ствол то, что ',
            defender.phy_sex_title,
            ' обычно так бережно укладывает, — и слегка тянет. Особый кайф дрочки.',
          ]);
      }
    } else {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await attacker.print_and_wait([
            'Ходишь по интимному месту внизу. ',
            a_call_d,
            ' — и ',
            attacker.get_colored_name(),
            ' явно возбуждается ещё сильнее.',
          ]);
          await attacker.print_and_wait([
            'Под ',
            attacker.get_colored_name(),
            ' снизу ',
            a_call_d,
            ' — выражение уже не разобрать…… зардевшееся лицо и уши ещё выдают, в каком ',
            defender.sex,
            ' сейчас состоянии.',
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' облизывает уголок рта и трётся ещё яростнее.',
          ]);
          break;
        case 1:
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' снова и снова трётся о скользкую кожу…… сквозь тонкие кончики волос, что гладят член, — кайф тела и покорения в голове.',
          ]);
          break;
        case 2:
          await attacker.print_and_wait([
            'Обычно чистые и гладкие волосы растрепаны в полный бардак — ',
            attacker.get_colored_name(),
            '.',
          ]);
          await attacker.print_and_wait([
            'Лобок путается с несколькими прядями, и ',
            attacker.get_colored_name(),
            ' — самцовый запах ложится поверх. ',
            defender.sex,
            ' пахнет снизу.',
          ]);
          await attacker.print_and_wait([
            'Дико двигаешься, дико метишь… ',
            attacker.get_colored_name(),
            ' дико спускает похоть на то, что ',
            defender.sex,
            ' бережёт как драгоценное.',
          ]);
      }
    }
  },
  /** 性交系 */
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {PrintedSpan} d_call_a 被插方对插入方的称呼
   * @param {boolean} is_anal_sex 是否是肛交
   */
  async missionary(attacker, defender, d_call_a, is_anal_sex = false) {
    await defender.print_and_wait(
      'Может, это и есть… поза, в которой лучше всего чувствуешь тепло друг друга — кожа к коже, дыхание в дыхание.',
    );
    if (is_anal_sex) {
      await defender.say_and_wait(
        'Но тебе и ту жару в киске тоже надо запомнить…?❤️',
        true,
      );
    }
    await defender.print_and_wait([
      'Обычная поза, миссионерская: если смотреть спереди, как двое сплелись, будто ',
      d_call_a,
      ' нырнула в объятия и сосёт грудь.',
    ]);
    await defender.print_and_wait([
      d_call_a,
      ' накрывает собой ',
      defender.get_colored_name(),
      ' целиком. Твёрдый член без жалости входит внутрь — мокро, тесно. ',
      defender.get_colored_name(),
      ' некуда деться: длинные, тонкие, тугие ноги в неловкой позе торчат по бокам талии ',
      d_call_a,
      ', ступни деревянные, носки в потолок…… внутри так мокро, так жарко…',
    ]);
    await defender.print_and_wait('Так горячо…… так горячо……');
    await defender.print_and_wait('……так горячо❤️');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {boolean} is_anal_sex 是否是肛交
   */
  async doggy_style(attacker, defender, is_anal_sex = false) {
    await attacker.print_and_wait('Как щенок…');
    await attacker.print_and_wait(
      'Эти ноги: носки туго натянуты, на цыпочках; колени согнуты и высоко толкают вверх мокрые бёдра…',
    );
    await attacker.print_and_wait(
      'А сверху, на этом упоре — жопа. Сама качается, как у щенка, который не понимает, что делает.',
    );
    await attacker.print_and_wait([
      'Сверху, в развратной позе, оседлана ',
      defender.race > 0 ? 'ушастая ' : '',
      defender.adult_sex_title,
      ' — дрожь в теле не остановить. Смотришь — и сухие губы сами хотят смочить. Для члена это дурман: сзади, низко дыша, ',
      attacker.get_colored_name(),
      ' готов впихнуть и яйца.',
    ]);
    if (is_anal_sex) {
      await attacker.print_and_wait(
        '…Э, тогда и яйца жопой можно выдавить, да',
      );
      await attacker.print_and_wait('Прямо как дурацкая шутка. Шшш.');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {PrintedSpan} d_call_a 被插方对插入方的称呼
   * @param {boolean} is_vagina 是否是性交
   */
  async sitting(attacker, defender, d_call_a, is_vagina = true) {
    await defender.print_and_wait('Стыднее, чем думала…');
    await defender.print_and_wait([
      'Пока ',
      is_vagina ? 'киску' : 'жопу',
      ' жёстко долбят — ещё и смотрят в упор…❤️',
    ]);
    await defender.print_and_wait([
      'Тело уже мягкое, бессильное от этого вредного члена, но под взглядом ',
      d_call_a,
      ' поясницу всё равно держишь прямой.',
    ]);
    await defender.print_and_wait([
      'Пускаешь этот улыбающийся взгляд по алому лицу…',
      defender.sex_code !== 1 ? ' по качающейся мягкой груди…' : '',
      ' по низу живота, где чуть проступает контур члена… и ему всё мало…',
    ]);
    await defender.print_and_wait('Неужели ещё не хватит——');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {PrintedSpan} d_call_a 被插方对插入方的称呼
   * @param {boolean} is_anal_sex 是否是肛交
   */
  async hug_sitting(attacker, defender, d_call_a, is_anal_sex = false) {
    await defender.print_and_wait(
      'Поза, выбранная, чтобы на тебя не смотрели.',
    );
    await defender.print_and_wait('Но на тебя же всё равно смотрят——');
    await defender.print_and_wait([
      'Отклонившись назад и упираясь руками, ',
      defender.get_colored_name(),
      ' невольно крутит жопой, что глотает член.',
    ]);
    await defender.print_and_wait([
      'Потом с горечью понимает, что горящий взгляд ',
      attacker.get_colored_name(),
      ' сзади снова там… и только на маленьком лице, которое ',
      d_call_a,
      ' не видит, уже тающее грязное выражение.',
    ]);
    if (is_anal_sex) {
      await defender.print_and_wait(
        'Плохо❤️ почему именно туда член пристаёт…',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {boolean} is_anal_sex 是否是肛交
   */
  async standing(attacker, defender, a_call_d, is_anal_sex = false) {
    await attacker.print_and_wait(
      'Кажется, можно достать…… ближе к матке, чем в других позах.',
    );
    await attacker.print_and_wait([
      'Невольно глубоко вдыхая, ',
      attacker.get_colored_name(),
      ' наклоняется вперёд и прижимается к ',
      a_call_d,
      ', у которой одна красивая нога задрана выше головы.',
    ]);
    await attacker.print_and_wait([
      'Два надутых яйца плотно у входа, и низ живота, распёртый формой члена, тоже плотно прижат к животу ',
      attacker.get_colored_name(),
      '.',
    ]);
    await defender.say_and_wait('Выдох…… вдох……❤️');
    if (is_anal_sex) {
      await defender.say_and_wait(
        'Ведь ещё…… киска слоем между нами, разве нет❤️',
        true,
      );
      await defender.say_and_wait('Почему……❤️', true);
    }
    await attacker.print_and_wait(
      'Так близко, что каждый глубокий вдох — уже часть секса: низ живота тянется, трётся, не отпускает.',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {boolean} is_anal_sex 是否是肛交
   */
  async hug_standing(attacker, defender, is_anal_sex = false) {
    await attacker.print_and_wait('Поясница быстро провисает.');
    await attacker.print_and_wait([
      'Хоть и ',
      defender.race > 0 ? defender.uma_sex_title : 'взрослая',
      ', теряет способность стоять на двух ногах; жалкая поза — держаться за что-то и выпятить жопу, чтобы кое-как устоять.',
    ]);
    await attacker.print_and_wait(
      'От ударов — стойка носками внутрь, не имеющая отношения к скачкам и тренировкам; носки несут слишком много веса, почти вдавливаясь в пол, а лёгкие пятки высоко на цыпочках в такт толчкам члена.',
    );
    await attacker.print_and_wait([
      'Будто сама ползёт под членом, хозяин ',
      is_anal_sex ? 'ануса' : 'киски',
      ' выносит колени вперёд; из-за слабой «косолапой» стойки при глубоком входе колени почти встречаются, и потное тело шатается ещё сильнее…',
    ]);
    if (is_anal_sex) {
      await defender.say_and_wait(
        'Не должно быть так… но, но эта поза плюс жопа, которую раздвигает член… слишком опасно…',
        true,
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {PrintedSpan} d_call_a 被插方对插入方的称呼
   * @param {boolean} is_anal_sex 是否是肛交
   */
  async suspended_congress(attacker, defender, d_call_a, is_anal_sex = false) {
    await defender.print_and_wait('Не сбежать…');
    await defender.print_and_wait('С этой позы сбежать уже нельзя.');
    await defender.print_and_wait([
      'Тело высоко поднято; ',
      d_call_a,
      ' держит жопу и сажает на член.',
    ]);
    if (is_anal_sex) {
      await defender.print_and_wait(
        'Стыдливую жопу силой превращают в чехол для члена… и это ещё не всё…',
      );
    }
    await defender.print_and_wait([
      'Ноги, разведённые по бокам талии ',
      d_call_a,
      ', свободны только в одном: обхватить талию или нет. А чтобы не повиснуть всем весом на члене, руки могут только крепко обнять ',
      d_call_a,
      '.',
    ]);
    await defender.print_and_wait([
      'Стечёт вниз по талии ',
      d_call_a,
      '…? Абсолютно… да❤️',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {PrintedSpan} d_call_a 被插方对插入方的称呼
   * @param {boolean} is_anal_sex 是否是肛交
   */
  async hug_suspended_congress(
    attacker,
    defender,
    d_call_a,
    is_anal_sex = false,
  ) {
    await defender.print_and_wait('Не сбежать…');
    await defender.print_and_wait('С этой позы сбежать уже нельзя.');
    await defender.print_and_wait([
      'Тело высоко поднято; ',
      d_call_a,
      ' держит жопу и сажает на член.',
    ]);
    if (is_anal_sex) {
      await defender.print_and_wait(
        'Стыдливую жопу силой превращают в чехол для члена…… и это ещё не всё……',
      );
    }
    await defender.print_and_wait([
      'Ноги, разведённые по бокам талии ',
      d_call_a,
      ', свободны только в одном: обхватить талию или нет. А чтобы не повиснуть всем весом на члене, руки могут только крепко обнять ',
      d_call_a,
      '.',
    ]);
    await defender.print_and_wait([
      'Стечёт вниз по талии ',
      d_call_a,
      '……? Абсолютно…… да❤️',
    ]);
    await defender.print_and_wait([
      'Ха…… и как раз сейчас не разглядеть лицо ',
      d_call_a,
      '.',
    ]);
    await defender.print_and_wait([
      'В тяжёлом дыхании лицо плывёт; спиной к ',
      d_call_a,
      ', ',
      defender.get_colored_name(),
      ' прогибает поясницу, пряча сорвавшееся выражение в тени упавших волос.',
    ]);
    await defender.say_and_wait('Ха…❤️');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {PrintedSpan} d_call_a 被插方对插入方的称呼
   * @param {boolean} is_anal_sex 是否是肛交
   */
  async ask_cowgirl(attacker, defender, d_call_a, is_anal_sex = false) {
    await defender.print_and_wait('Проглотила…');
    await defender.print_and_wait([
      'Переплетёнными пальцами с лежащей ',
      d_call_a,
      ', тугие блестящие упругие ноги приседают, входом трутся, ища момент взять огромную головку…',
    ]);
    await defender.print_and_wait(['Самой садиться… ', d_call_a, ' вредная…']);
    if (is_anal_sex) {
      await defender.say_and_wait('И ещё — жопой…', true);
    }
    await attacker.say_and_wait('И бёдрами качай.');
    await defender.print_and_wait([
      'В этот раз не ждать медленных движений ',
      defender.get_colored_name(),
      ': достаточно члену в тугой дырке легко ткнуть чувствительные стенки — и пояснице ',
      defender.get_colored_name(),
      ', которой некуда деться, остаётся только бесконечно плясать перед ',
      d_call_a,
      ', как на заводном ключе…',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {boolean} is_vagina 是否是性交
   */
  async ask_stimulate_glans_by_hole(attacker, defender, is_vagina = true) {
    await attacker.say_and_wait('Ах…… так устал(а)……');
    await defender.print_and_wait([
      'Хлюп-хлюп — тот член, что месил ',
      defender.get_colored_name(),
      ' драгоценную ',
      is_vagina ? 'киску' : 'жопу',
      ' в мокрый растрёпанный бардак, вдруг останавливается.',
    ]);
    await defender.print_and_wait(
      'Ртом орёт, что устал(а), а член между ног честно стоит колом.',
    );
    await attacker.say_and_wait('Дальше прошу.');
    await defender.print_and_wait(
      'Есть и мысль со зла просто вытолкнуть вредный член, но стоило ему с чваком выйти из киски хоть на вершок…… телу уже невыносимо одиноко……',
    );
    await defender.print_and_wait([
      'И тогда ',
      defender.get_colored_name(),
      ' крутит бёдрами.',
    ]);
    if (defender.race > 0) {
      await defender.print_and_wait(
        'Белая жопа пляшет под аккомпанемент мокрого конского хвоста.',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async stimulate_g_spot(attacker, defender, a_call_d) {
    await attacker.print_and_wait('Глубже.');
    await defender.say_and_wait('Ид——');
    await attacker.print_and_wait([
      a_call_d,
      ' почти вминается в тело ',
      attacker.get_colored_name(),
      '. Ненасытный ',
      attacker.get_colored_name(),
      ' даже в ноль не тормозит — член с вынесенными бёдрами идёт вперёд, и губы девочки, киска, матка стонут все вместе, одержимые им…',
    ]);
    await defender.say_and_wait('Гу-о-о-о-хо-о-о-о————❤️❤️');
    await attacker.print_and_wait(
      'Точка G — вот что это. Какой бы ни была до этого — нежной, светлой — стоит этому пахнущему самцом стволу раздвинуть ту складку, и она сразу падает: грязная самка, которой нужен только секс.',
    );
    await attacker.print_and_wait(
      'Красивое тело от ударов сворачивается клубком. В горле только муть и похоть. Одна матка вплотную пылает.',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {PrintedSpan} d_call_a 被插方对插入方的称呼
   */
  async stimulate_womb(attacker, defender, d_call_a) {
    await defender.print_and_wait(
      'Волшебство, от которого киске хорошо и без члена.',
    );
    await defender.print_and_wait([
      d_call_a,
      ' уверенно улыбается, раскрывает пятерню и кладёт широкую ладонь на низ живота.',
    ]);
    await defender.print_and_wait('Тепло, правда, но…');
    await defender.say_and_wait('Ммхо-о-ох…');
    await defender.print_and_wait('Вдруг вырвался совсем неприличный звук…');
    await defender.print_and_wait([
      'Почти проваливается… ладонь ',
      d_call_a,
      '…',
    ]);
    await defender.print_and_wait(
      'А матка будто наперекор заколотилась от возбуждения…',
    );
    await defender.print_and_wait([
      'Будто её схватила волшебная рука ',
      d_call_a,
      '……❤️',
    ]);
    await defender.print_and_wait('…Не может быть❤️');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {boolean} is_vagina 是否是性交
   */
  async ask_fuck(attacker, defender, is_vagina = true) {
    const motion = era.get(`tcvar:${attacker}:体位`) === motion_enum.rev;
    const towards = era.get(`tcvar:${attacker}:朝向`) === towards_enum.right;
    await attacker.print_and_wait('Какой стыд……');
    await attacker.print_and_wait(
      'Чтобы вымолить кайф, вот на что способна…… пальцы дрожат, дыхание сбито…',
    );
    await attacker.say_and_wait('Хаа…❤️');
    await attacker.print_and_wait([
      'Как на капитуляции, ',
      (motion ^ towards) > 0 ? 'разводит бёдра' : 'задирает жопу',
      ', дрожащими пальцами раздвигает сжавшиеся в комок ',
      is_vagina ? 'губки' : 'колечко',
      ' в стороны — внутри розовая мякоть, мокрая, стыдно блестит, ждёт.',
    ]);
    await attacker.say_and_wait('Прошу, вставь……');
    await attacker.say_and_wait('Член…… вставь——');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {boolean} is_vagina 是否是性交
   */
  async cowgirl(attacker, defender, a_call_d, is_vagina = true) {
    await attacker.print_and_wait('Хаа…');
    await attacker.print_and_wait([
      'Так близко смотреть…… смотреть на лицо ',
      a_call_d,
      ' снизу… только и понимаешь, какая же ты испорченная❤️',
    ]);
    await attacker.print_and_wait([
      'Бросает себя, качает бёдрами. Чувство, что так нельзя, уже победило — ',
      attacker.get_colored_name(),
      ' розовеет вся, бледным жаром, и старательно служит: член уже внутри, ',
      is_vagina ? 'киска' : 'жопа',
      ' держит жадно, мокро, не выпускает.',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {boolean} is_vagina 是否是性交
   */
  async stimulate_glans_by_hole(
    attacker,
    defender,
    a_call_d,
    is_vagina = true,
  ) {
    await attacker.print_and_wait(
      'Честно говоря… уже от одного этого душа вон…',
    );
    await attacker.print_and_wait([
      'Всё вперемешку…… и то, что ',
      is_vagina ? 'киска' : 'анус',
      ' сейчас берут силой, и то, что телу до безобразия хорошо……',
    ]);
    await attacker.print_and_wait([
      'И ещё хуже каша…… будто ',
      attacker.get_colored_name(),
      ' сама ещё может что-то сделать……',
    ]);
    await attacker.print_and_wait(
      'Хаа…… не просто орать в голос, а если вдохнуть поглубже……',
    );
    await attacker.print_and_wait([
      'С «чмок» всё сжалось; тело и секунды не продержалось — свело судорогой и обмякло, но в тот миг ',
      attacker.get_colored_name(),
      ' — ',
      is_vagina ? 'киска' : 'анус',
      ' с чувством поцеловала ',
      a_call_d,
      ' головку.',
    ]);
    await attacker.print_and_wait(
      'Ха… головка дёргается и дёргается — видно, ей очень хорошо…',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {boolean} is_vagina 是否是性交
   */
  async ask_stimulate_hole(attacker, defender, is_vagina = true) {
    await attacker.say_and_wait('Прошу…');
    await attacker.say_and_wait('Пожалуйста…');
    if (attacker.race > 0 && attacker.id) {
      await attacker.print_and_wait([
        'Будучи ',
        attacker.uma_sex_title,
        ', разве не слишком стыдно…',
      ]);
    } else {
      await attacker.print_and_wait(
        'Будучи взрослым, будучи тренером, разве не слишком стыдно…',
      );
    }
    await attacker.print_and_wait('Но совсем не сдержаться——');
    await attacker.print_and_wait('Потому что очень хочется——');
    await attacker.print_and_wait(
      'Хочется, чтобы внутри матки крутой член… круто, грубо, сильно…',
    );
    await attacker.print_and_wait('「Чмок—— до самого дна❤️');
    await attacker.print_and_wait('Чтобы тело «шух» свернулось——');
    await attacker.print_and_wait([
      'Стать самой приятной в мире ',
      is_vagina ? 'киской' : 'киской и жопой',
      '——',
    ]);
    await attacker.print_and_wait(
      'Так что прошу…… после этого делай что хочешь❤️',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {PrintedSpan} d_call_a 被插方对插入方的称呼
   */
  async continue_fucking(attacker, defender, d_call_a) {
    if (era.get(`tcvar:${defender.id}:接近高潮`)) {
      await defender.say_and_wait('О-о-о-о-о-о————❤️');
      await defender.print_and_wait([
        defender.get_colored_name(),
        ' бьётся телом перед ',
        d_call_a,
        ' — бесстыдно, в судороге, стряхивая с мокрого тела тёплые блестящие капли во все стороны, на пол.',
      ]);
      await defender.print_and_wait(
        'Сейчас не до приличий. Липкие пряди скрутились в прядь и косо висят на лбу; в низу живота колотится, колотится — и даже без члена, без пальцев, без языка пульсирующая киска тянет длинные серебряные нити и дышит наружу горячим паром.',
      );
      await defender.say_and_wait('Сейчас кончу…… вот-вот…… кончу……', true);
      await defender.say_and_wait('Быстрее…… быстрее…… да кончай же❤️', true);
      await defender.print_and_wait([
        'Сначала обмякает — потом снова, против воли, натягивается. Сама не понимает, зачем тело так. Когда ',
        d_call_a,
        ' доводит и дразнит до такого — слушается уже только дикость.',
      ]);
      await defender.print_and_wait('Как кончишь. Когда тебя доведут до края.');
      await defender.print_and_wait(
        'Голова пустая. Остановилась, перезапустилась — и этот никчёмный мозг умеет думать только об этом.',
      );
      await defender.say_and_wait('——❤️');
      await defender.say_and_wait('……сейчас…… сейчас придёт❤️', true);
    } else {
      await defender.say_and_wait('Хаа…');
      await defender.print_and_wait(
        'Думала, просто вдох — а из горла вырвался такой сладкий звук, что сама вздрогнула……❤️ стыдно, мокро, и всё равно хочется ещё.',
      );
      await defender.print_and_wait('Тело…… явно берёт своё…… наслаждается…');
      await defender.print_and_wait('Стыд……? Сопротивление……?');
      await defender.print_and_wait(
        'Утекло вместе со стонами. Сейчас честная ты хочешь ещё…… ещё и ещё❤️',
      );
      await defender.print_and_wait([
        'Хочется крепче прижаться к ',
        d_call_a,
        ', взять этот жар. Хочется, чтобы ',
        d_call_a,
        ' научил(а) ещё грязнее. Хочется, чтобы это мокрое горячее тело довели до такого стыда, что на люди уже не выйти……',
      ]);
      await defender.say_and_wait(
        '……хаа…… потому что будущую себя убедить уже не обещаю……',
        true,
      );
      await defender.say_and_wait(
        '……так что, пожалуйста…… не теряй время❤️',
        true,
      );
    }
  },
  /** 性虐系 */
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async insult(attacker, defender) {
    const buffer = [];
    if (era.get('tflag:强奸') === defender.id) {
      buffer.push(() => attacker.say_and_wait('Отброс! Насильник! Сдохни!'));
    }
    if (era.get(`talent:${attacker.id}:小恶魔`)) {
      buffer.push(() => attacker.say_and_wait('мелюзга～мелюзга～'));
    }
    if (era.get(`talent:${attacker.id}:抖S`)) {
      buffer.push(() =>
        attacker.say_and_wait([
          'Тупица! Отброс ',
          defender.sex_slave_title,
          '! Извращенец, которому надо, чтобы его ебали!',
        ]),
      );
    }
    if (buffer.length === 0) {
      buffer.push(() =>
        attacker.say_and_wait([
          'Так хочется, чтобы тебя ругали, ',
          defender.sex_slave_title,
          '?',
        ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @author 黑衣剑士-星爆气流斩准备就绪
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async hit_face_by_penis(attacker, defender, a_call_d, d_call_a) {
    if (attacker.id > 0) {
      await defender.print_and_wait([
        'Под ',
        d_call_a,
        ' за волосы, и, поняв, что силой совсем не сравниться, глядя, как у ',
        d_call_a,
        ' между ног злобно встаёт член, ',
        defender.get_colored_name(),
        ' внутри поднимается дурное предчувствие.',
      ]);
      await attacker.say_and_wait([
        a_call_d,
        '～запомни как следует мой запах～',
      ]);
      await defender.print_and_wait([
        'Сопротивляться нельзя, по щеке бьёт, ',
        d_call_a,
        ' злой запах члена заставляет ',
        defender.get_colored_name(),
        ' невольно хотеть сдаться.',
      ]);
      await defender.print_and_wait([
        'На лице остаётся след члена ',
        d_call_a,
        ', ',
        defender.get_colored_name(),
        ' поднимает лицо, ждав следующего шлепка',
      ]);
    } else {
      await attacker.print_and_wait([
        'Держа ',
        a_call_d,
        ' за волосы, ',
        attacker.get_colored_name(),
        ' силой тычет член в лицо. ',
        defender.sex,
        ' не отстраняется — и смотрит, как ',
        defender.sex,
        ' это терпит. ',
        attacker.get_colored_name(),
        ' улыбается.',
      ]);
      await defender.say_and_wait('Ннннн!!!');
      await attacker.print_and_wait([
        'Член, полный самцового запаха, заставляет нос ',
        a_call_d,
        ' непрерывно вздрагивать; ',
        attacker.get_colored_name(),
        ', держа волосы ',
        a_call_d,
        ', качает бёдрами — столкновения члена с гладкой щекой ',
        a_call_d,
        ' звучат похотливо, и взгляд ',
        a_call_d,
        ' мутнеет.',
      ]);
    }
  },
  /** 银趴系 */
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {string} a_penis 主动方肉棒尺寸
   */
  async ask_double_blow_job(attacker, defender, supporter, is_first, a_penis) {
    if (is_first) {
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' разводит ноги, ',
        a_penis,
        ' член гордо стоит, ',
        defender.get_colored_name(),
        ' и ',
        supporter.get_colored_name(),
        ' по знаку ',
        attacker.get_colored_name(),
        ' открывают рты и тянутся вперёд……',
      ]);
    } else {
      await attacker.print_and_wait([
        'По знаку ',
        attacker.get_colored_name(),
        ', ',
        defender.get_colored_name(),
        ' и ',
        supporter.get_colored_name(),
        ' по очереди служат ртом члену……',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @author 黑奴队长
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {string} d_penis 被动方肉棒尺寸
   * @param {string} s_penis 助手肉棒尺寸
   */
  async ask_double_fuck(
    attacker,
    defender,
    supporter,
    is_first,
    d_penis,
    s_penis,
  ) {
    const buffer = [];
    if (is_first) {
      buffer.push(
        async () => {
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' разводит бёдра, раскрывает киску на ',
            defender.get_colored_name(),
            ' и ',
            supporter.get_colored_name(),
            ' и, глядя на их стоящие члены, облизывает губы',
          ]);
          await attacker.print_and_wait([
            'Под откровенным приглашением ',
            attacker.get_colored_name(),
            ', ',
            defender.get_colored_name(),
            ' и ',
            supporter.get_colored_name(),
            ' не сдерживаются, бросаются на ',
            attacker.get_colored_name(),
            ' и по очереди долбят эту манящую киску…',
          ]);
        },
        async () => {
          const motion = era.get(`tcvar:${attacker}:体位`) === motion_enum.rev;
          const towards =
            era.get(`tcvar:${attacker}:朝向`) === towards_enum.right;
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            (motion ^ towards) > 0
              ? ' разводит ноги'
              : ' стоит на четвереньках',
            ' и качает задом: пусть ',
            defender.get_colored_name(),
            ' и ',
            supporter.get_colored_name(),
            ' по очереди входят членом в самую глубь.',
          ]);
        },
      );
    } else {
      buffer.push(
        async () => {
          if (d_penis === s_penis) {
            await attacker.print_and_wait([
              attacker.get_colored_name(),
              ' зажата между ',
              defender.get_colored_name(),
              ' и ',
              supporter.get_colored_name(),
              ', два ',
              d_penis,
              ' члена по очереди глотает похотливая киска ',
              attacker.get_colored_name(),
              '.',
            ]);
          } else {
            await attacker.print_and_wait([
              attacker.get_colored_name(),
              ' зажата между ',
              defender.get_colored_name(),
              ' и ',
              supporter.get_colored_name(),
              '; два члена — ',
              d_penis,
              ' и ',
              s_penis,
              ' — по очереди глотает похотливая киска ',
              attacker.get_colored_name(),
              '.',
            ]);
          }
          await attacker.print_and_wait([
            'Соки мажут низ тел троих; то и дело слышен сладкий стон ',
            attacker.get_colored_name(),
            '…',
          ]);
        },
        async () => {
          await attacker.print_and_wait([
            defender.get_colored_name(),
            ' и ',
            supporter.get_colored_name(),
            ' — разные члены и разная манера входа, ',
          ]);
          await attacker.print_and_wait(
            'и чувство греха от того, что тебя по очереди трахают двое, ',
          );
          await attacker.print_and_wait([
            'и ',
            attacker.get_colored_name(),
            ' при каждом входе ловит необычайное удовольствие.',
          ]);
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_double_penetration(attacker, defender, supporter, is_first) {
    if (is_first) {
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' верхом даёт ',
        defender.get_colored_name(),
        ' войти глубоко в киску, потом даёт знак ',
        supporter.get_colored_name(),
        ' войти и в жопу…',
      ]);
    } else {
      await attacker.print_and_wait([
        defender.get_colored_name(),
        ' и ',
        supporter.get_colored_name(),
        ' вместе непрерывно атакуют переднюю и заднюю дырки ',
        attacker.get_colored_name(),
        '.',
      ]);
      await attacker.print_and_wait(
        'двойное удовольствие и чувство греха, что тебя одновременно трахают двое, ',
      );
      await attacker.print_and_wait([
        'заставляют ',
        attacker.get_colored_name(),
        ' при каждом входе невольно громко стонать…',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {boolean} is_vagina 是否是性交
   */
  async ask_spit_roast(
    attacker,
    defender,
    supporter,
    is_first,
    is_vagina = true,
  ) {
    const part_name = is_vagina ? 'киска' : 'анус';
    if (is_first) {
      const motion = era.get(`tcvar:${attacker}:体位`) === motion_enum.rev;
      const towards = era.get(`tcvar:${attacker}:朝向`) === towards_enum.right;
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        (motion ^ towards) > 0 ? ' разводит ноги' : ' стоит на четвереньках',
        ' и качает задом, давая знак ',
        defender.get_colored_name(),
        ' войти в свою ',
        part_name,
        ', и жадно берёт ',
        supporter.get_colored_name(),
        ' член в рот……',
      ]);
    } else {
      await attacker.print_and_wait([
        defender.get_colored_name(),
        ' и ',
        supporter.get_colored_name(),
        ' вместе без остановки атакуют ',
        attacker.get_colored_name(),
        ' рот и ',
        part_name,
        '……',
      ]);
      await attacker.print_and_wait([
        'Удовольствие снизу и удушающий удар члена во рту оставляют в голове ',
        attacker.get_colored_name(),
        ' только член……',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {boolean} d_has_penis 被动方是否拥有阴茎
   * @param {boolean} s_has_penis 助手是否拥有阴茎
   */
  async fuck_69(
    attacker,
    defender,
    supporter,
    is_first,
    d_has_penis,
    s_has_penis,
  ) {
    if (is_first) {
      await attacker.print_and_wait([
        defender.get_colored_name(),
        ' лежит на кровати, и они с ',
        supporter.get_colored_name(),
        ' лижут друг другу ',
        d_has_penis
          ? s_has_penis
            ? 'член'
            : 'член и киска'
          : s_has_penis
            ? 'киска и член'
            : 'киска',
        ',',
      ]);
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' нетерпеливо вгоняет возбуждённый до предела член в киску ',
        defender.get_colored_name(),
        '……',
      ]);
    } else {
      await attacker.print_and_wait([
        defender.get_colored_name(),
        ' с киски брызжет сок и мочит лицо ',
        supporter.get_colored_name(),
        ', что усердно лижет место, где ',
        attacker.get_colored_name(),
        ' член входит и выходит, ',
      ]);
      await attacker.print_and_wait([
        supporter.get_colored_name(),
        ' тоже стонет, пока рот ',
        defender.get_colored_name(),
        ' служит……',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async double_fuck(attacker, defender, supporter, is_first) {
    if (is_first) {
      await defender.print_and_wait([
        defender.get_colored_name(),
        ' прижимают ',
        attacker.get_colored_name(),
        ' и ',
        supporter.get_colored_name(),
        '.',
      ]);
      await defender.print_and_wait([
        'двое нисколько не думают о чувствах ',
        defender.get_colored_name(),
        '.',
      ]);
      await defender.print_and_wait([
        'Просто по очереди вгоняют высоко вставшие члены в киску ',
        defender.get_colored_name(),
        ' и жёстко долбят…',
      ]);
    } else {
      await defender.print_and_wait([
        defender.get_colored_name(),
        ' непрерывно по очереди насилуют члены ',
        attacker.get_colored_name(),
        ' и ',
        supporter.get_colored_name(),
        '.',
      ]);
      await defender.print_and_wait('Кому чуть устало — меняются эстафетой,');
      await defender.print_and_wait([
        'только у обрызганной соком киски ',
        defender.get_colored_name(),
        ' почти нет ни мгновения покоя, ',
      ]);
      await defender.print_and_wait('и сознание будто вот-вот уйдёт…');
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async double_penetration(attacker, defender, supporter, is_first) {
    if (is_first) {
      await defender.print_and_wait([
        defender.get_colored_name(),
        ' стягивает на себя ',
        attacker.get_colored_name(),
        ' и входит в киску, ',
      ]);
      await defender.print_and_wait([
        supporter.get_colored_name(),
        ' одновременно входит в жопу ',
        defender.get_colored_name(),
        '……',
      ]);
    } else {
      await defender.print_and_wait([
        attacker.get_colored_name(),
        ' и ',
        supporter.get_colored_name(),
        ' вместе непрерывно атакуют переднюю и заднюю дырки ',
        defender.get_colored_name(),
        '.',
      ]);
      await defender.print_and_wait(
        'двойное удовольствие и чувство греха, что тебя одновременно трахают двое, ',
      );
      await defender.print_and_wait([
        'заставляют ',
        defender.get_colored_name(),
        ' при каждом входе невольно громко стонать…',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {boolean} is_vagina 是否是性交
   */
  async spit_roast(attacker, defender, supporter, is_first, is_vagina = true) {
    const part_name = is_vagina ? 'киску' : 'анус';
    if (is_first) {
      await defender.print_and_wait([
        defender.get_colored_name(),
        ' прижимают ',
        attacker.get_colored_name(),
        ' и ',
        supporter.get_colored_name(),
        '.',
      ]);
      await defender.print_and_wait([
        'двое нисколько не думают о чувствах ',
        defender.get_colored_name(),
        '.',
      ]);
      await defender.print_and_wait([
        'Просто спереди и сзади вгоняют высоко вставшие члены в ',
        defender.get_colored_name(),
        ' и рот ',
        part_name,
        ' и жёстко долбят…',
      ]);
    } else {
      await defender.print_and_wait([
        attacker.get_colored_name(),
        ' и ',
        supporter.get_colored_name(),
        ' вместе непрерывно атакуют ',
        defender.get_colored_name(),
        ' и рот ',
        part_name,
        ', ',
      ]);
      await defender.print_and_wait([
        'Удовольствие снизу и удушающий удар члена во рту оставляют в голове ',
        defender.get_colored_name(),
        ' только член…',
      ]);
    }
  },
  /** 道具系 */
  /**
   * @param {CharaTalk} chara 服药者
   * @param {number} item 道具 ID
   */
  async use_medicine(chara, item) {
    switch (item) {
      case medicine_enum.fron_k:
      case medicine_enum.fron_p:
        if (chara.sex_code === 0) {
          await era.printAndWait(
            [chara.get_colored_name(), ' отращивает свирепый гигантский член!'],
            { color: buff_colors[2] },
          );
        } else {
          await era.printAndWait([
            chara.get_colored_name(),
            ' член стал ещё мощнее!',
          ]);
        }
      // eslint-disable-next-line no-fallthrough
      case medicine_enum.uma_z:
        if (!era.get(`tcvar:${chara.id}:发情`)) {
          await era.printAndWait([chara.get_colored_name(), ' возбуждается'], {
            color: buff_colors[2],
          });
        }
        break;
      case medicine_enum.drug_m:
        await era.printAndWait(
          [chara.get_colored_name(), ' из груди начинает течь молоко……'],
          { color: buff_colors[2] },
        );
    }
  },
};
