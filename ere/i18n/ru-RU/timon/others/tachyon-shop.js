/**
 * @file 小卖部 - 系统提示
 * @author 幽白書
 */
const {
  get,
  input,
  print,
  printAndWait,
  printButton,
} = require('#/era-electron');

module.exports = {
  /**
   * 速子在队，热恋 & 融洽以上，第一次去小卖部
   * @param {CharaTalk} tachyon 速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 速子对玩家的称呼
   */
  async start_first_love(tachyon, you, callname) {
    await tachyon.say_and_wait([
      'Ого, ',
      callname,
      '…и правда сюда явился, надо же… так невтерпёж?…',
    ]);
    await printAndWait([
      'Гуляя, ',
      you.get_colored_name(),
      ' видит каштанововолосую, в белом халате и с румянцем во всё лицо, ',
      tachyon.uma_sex_title,
    ]);
    await printAndWait([
      tachyon.sex,
      ' такова: тёмно-красные глаза, будто расчерченные жалюзи, полны безумия и тайны, а великоватый белый халат туго распирает от всего, что в нём развешано.',
    ]);
    await printAndWait([
      'Такая подозрительная — и ведь ',
      tachyon.sex,
      ' не кто-нибудь: за неё отвечает ',
      you.get_colored_name(),
      ', его подопечная ',
      tachyon.uma_sex_title,
      ' и заодно возлюбленная, ',
      tachyon.get_colored_name(),
    ]);
    if (get('exp:32:性爱次数') > get('exp:32:睡奸次数')) {
      await tachyon.say_and_wait(
        '…Неужели я перестаралась и теперь нужны лекарства?.. Нет, впрочем… тут ничего не поделаешь: совместимость всё-таки надо испытывать…',
      );
      await tachyon.say_and_wait(
        'И ещё, это… было очень хорошо, так что… возьми побольше за раз, дома пригодится❤️',
      );
    } else if (get('exp:0:性爱次数') > get('exp:0:睡奸次数')) {
      await tachyon.say_and_wait(
        'Я, я говорю, ты же не собрался с кем-то этим заняться? …Нет, не может быть, это всё для… для… для того, чтобы делать это со мной?',
      );
      await tachyon.say_and_wait(
        'Правда? Не обманываешь?.. Хорошо, буду ждать вечера❤️',
      );
    } else {
      await tachyon.say_and_wait([
        callname,
        '…Угу, поняла. Раз уж мы начали встречаться, к такому я готова…',
      ]);
      if (you.sex_code === 1) {
        await tachyon.say_and_wait(
          'Говорят же, у людей-мужчин влечение очень сильное… Честно, я даже удивлена, что ты дотерпел до сих пор…',
        );
      }
      await tachyon.say_and_wait([
        'Уточню заранее — не думаю, что ты на такое способен, но… эти лекарства ты покупаешь, чтобы делать это со мной, да, ',
        callname,
        '?',
      ]);
    }
    await tachyon.say_and_wait('В общем, смотри, какой сегодня товар');
  },
  /**
   * 速子在队，爱欲 & 融洽以上
   * @param {CharaTalk} tachyon 速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 速子对玩家的称呼
   * @param {boolean} is_first 是否是第一次去小卖部
   */
  async start_lust(tachyon, you, callname, is_first) {
    if (is_first) {
      await tachyon.say_and_wait([callname, '? Что ты здесь делаешь?']);
    } else if (!get('exp:32:性爱次数')) {
      tachyon.say('…Опять пришёл? И с кем на этот раз…');
    } else {
      tachyon.say([
        'После всего тебе всё мало?.. Ну и ходок же ты, ',
        callname,
        '. Уже хочется вскрыть тебя и изучить изнутри',
      ]);
    }
    print([
      'Гуляя, ',
      you.get_colored_name(),
      ' видит ',
      tachyon.uma_sex_title,
      ',',
    ]);
    print([
      tachyon.sex,
      ' такова: тёмно-красные глаза, будто расчерченные жалюзи, полны безумия и тайны, а великоватый белый халат туго распирает от всего, что в нём развешано.',
    ]);
    print([
      'Такая подозрительная — и ведь ',
      tachyon.sex,
      ' не кто-нибудь: за неё отвечает ',
      you.get_colored_name(),
      ', его подопечная ',
      tachyon.uma_sex_title,
      ' ',
      tachyon.get_colored_name(),
    ]);
    if (is_first) {
      await tachyon.say_and_wait([
        callname,
        '……ты же знаешь, что здесь продают…… То есть…… у тебя уже есть… такой… партнёр?',
      ]);
      await printAndWait([
        tachyon.get_colored_name(),
        ' почему-то нервно спрашивает',
      ]);
      printButton('Конечно есть', 1);
      printButton('Нет', 2);
      if ((await input()) === 1) {
        await tachyon.say_and_wait([
          'О? И кто это? Кто вообще позарился на такого, как ты — весь светишься, сплошная странность? Человек или ',
          tachyon.uma_sex_title,
          '?',
        ]);
        await tachyon.say_and_wait(
          'Нет, это просто исследование биоразнообразия. Сообщать данные о понравившемся человеке — базовый долг подопытного кролика…',
        );
        await tachyon.say_and_wait(
          'Ладно, случай выспросить всё равно подвернётся',
        );
      } else {
        await tachyon.say_and_wait(
          '……Хе-хе, как и думала. Такого, как ты — весь светишься, сплошная странность — если бы кто-то и полюбил, вот тогда я бы уже занялась наблюдением.',
        );
        await tachyon.say_and_wait([
          'Но тогда твои причины покупать эти лекарства совсем непонятны. Слушай, ',
          callname,
          ', ты же не собираешься совершать преступления?',
        ]);
        await tachyon.say_and_wait(
          'Кстати, давно не получала отчётов о реакции на препараты…',
        );
        await tachyon.say_and_wait(
          'Ладно, пользуйся как хочешь. Ради науки можно рискнуть чем угодно… даже собой',
        );
        await tachyon.say_and_wait(
          'На что я намекаю? Хе-хе, кто знает. Вопрос лишь в том, дойдёт ли до деревянного болвана смысл моих слов',
        );
      }
    }
    tachyon.say('В общем, смотри, какой сегодня товар');
  },
  /**
   * 速子在队，低爱慕 & 冷淡以上，第一次去小卖部
   * @param {CharaTalk} tachyon 速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 速子对玩家的称呼
   */
  async start_first(tachyon, you, callname) {
    await tachyon.say_and_wait(['Ого, да это же ', callname, '?']);
    await printAndWait([
      'Гуляя, ',
      you.get_colored_name(),
      ' видит каштанововолосую, в белом халате и с загадочным видом, ',
      tachyon.uma_sex_title,
      ',',
    ]);
    await printAndWait([
      tachyon.sex,
      ' такова: тёмно-красные глаза, будто расчерченные жалюзи, полны безумия и тайны, а великоватый белый халат туго распирает от всего, что в нём развешано',
    ]);
    await printAndWait([
      'Такая подозрительная — и ведь ',
      tachyon.sex,
      ' не кто-нибудь: за неё отвечает ',
      you.get_colored_name(),
      ', его подопечная ',
      tachyon.uma_sex_title,
      ' ',
      tachyon.get_colored_name(),
    ]);
    await tachyon.say_and_wait(
      'Не думала, что ты из таких… Ну да ладно, дело житейское — тяга к еде и к телу в природе. Но раз уж я нарочно вышла торговать лекарствами, ',
    );
    await tachyon.say_and_wait([
      'похоже, обычную дневную дозу можно и удвоить… В общем, рассказывай, на какую же ты глаз положил, на какую ',
      tachyon.uma_sex_title,
      '?',
    ]);
    printButton('Ответить', 1);
    printButton('Мотнуть головой в отказ', 2);
    if ((await input()) === 1) {
      print('Введите имя:');
      let _default = false;
      switch (await input()) {
        case '爱丽速子':
        case '速子':
        case '你':
        case '妳':
          if (get('relation:32:0') <= 150) {
            await tachyon.say_and_wait([
              '……',
              callname,
              ', некоторые шутки лучше вслух не произносить',
            ]);
            await printAndWait([
              tachyon.sex,
              ' улыбается одними губами, а во взгляде — густое предупреждение',
            ]);
            await printAndWait([
              'Этим вопросом, кажется, задета ',
              tachyon.get_colored_name(),
              ' — лучше так не говорить…',
            ]);
          } else {
            await tachyon.say_and_wait(
              'Раз я тебе так нравлюсь, попробуй завтра вот это лекарство, ',
            );
            await tachyon.say_and_wait([
              'Почему-то все, кто выпил это лекарство, говорят: им явилась прекрасная ',
              tachyon.teen_sex_title,
              '; и всё на свете, кроме той, что зовётся «прекрасная ',
              tachyon.teen_sex_title,
              '», кажется им сплошным куском мяса…',
            ]);
            await tachyon.say_and_wait(
              'Странно, это же всего лишь средство для остроты зрения. И что же тут происходит?',
            );
            await printAndWait([
              tachyon.sex,
              ' отмахивается от того, что сказал ',
              you.get_colored_name(),
              ', — похоже, всерьёз не приняла',
            ]);
          }
          break;
        case '曼城茶座':
        case '茶座':
          // 以茶座身份开始游戏不会触发
          if (get('cflag:0:模版角色') !== 25) {
            await tachyon.say_and_wait('Неужели Кафе…!');
            await printAndWait([
              tachyon.get_colored_name(),
              ' почему-то смотрит с уважением',
            ]);
            await tachyon.say_and_wait(
              'Бери что хочешь! Скидка двадцать процентов… нет, тридцать! Но с условием: весь процесс записать!',
            );
            await tachyon.say_and_wait(
              'Оформи по форме отчёта об опыте… ладно, лучше сними всё на видео!',
            );
            await tachyon.say_and_wait(
              'Гу-хе-хе-хе, кроме опыта я увижу ещё и то, как эта особа тонет в похоти… как же интересно!',
            );
            await printAndWait([
              you.get_colored_name(),
              ' опешил от того, как ',
              tachyon.get_colored_name(),
              ' вдруг затараторила, и поспешно отказался: то, что ',
              tachyon.sex,
              ' предлагает, ему не нужно',
            ]);
            await tachyon.say_and_wait('Гу… отказываешься? Ну и ладно');
            await printAndWait([
              tachyon.get_colored_name(),
              ' разочарованно вздыхает, а потом ',
              tachyon.sex,
              ' принимается рыться в карманах белого халата',
            ]);
            await tachyon.say_and_wait([
              'Тогда… держи вот это, ',
              callname,
              '.',
            ]);
            await printAndWait([
              you.get_colored_name(),
              ' берёт в руки бумагу, которую протянула ',
              tachyon.get_colored_name(),
              ', — согласие на донорство органов; получатель — ',
              tachyon.get_colored_name(),
              ', её лаборатория',
            ]);
            printButton('……', 1);
            await input();
            await tachyon.say_and_wait([
              'Кафе вряд ли интересно мучить труп, так что процентов восемьдесят органов достанется мне на исследования. Надо будет договориться: ',
              tachyon.sex,
              ' порежет аккуратно…',
            ]);
            await printAndWait([
              you.get_colored_name(),
              ' покрывается холодным потом и смотрит на ту, что произнесла всё это с улыбочкой, — на ',
              tachyon.get_colored_name(),
            ]);
            await tachyon.say_and_wait(
              'Ха-ха-ха, шучу… но на всякий случай всё-таки подпиши, ладно?',
            );
          } else {
            _default = true;
          }
          break;
        case '大和赤骥':
        case '大和':
        case '赤骥':
          // 以大和身份开始游戏不会触发
          if (get('cflag:0:模版角色') !== 9) {
            await tachyon.say_and_wait([
              '……',
              callname,
              ', спрошу на всякий случай: если завтра — последний день твоей жизни, лекарство какого цвета ты бы выпил?',
            ]);
            await printAndWait([
              tachyon.get_colored_name(),
              ' смотрит почти безжалостным взглядом — на ',
              you.get_colored_name(),
            ]);
            printButton('「……!?」', 1);
            printButton('«Пощади!»', 2);
            tachyon.sex_code - 1 &&
              printButton('«Хотя бы дай мне умереть в груди Дайвы!»', 3);
            await input();
            await tachyon.say_and_wait([
              'Хе-хе… это просто шутка… Но вот скажи, ',
              callname,
              ', тебе больше по душе горы или море?',
            ]);
            await tachyon.say_and_wait(
              'Нет, что за глупый вопрос я задаю. Тебе ведь всё-таки милее формалин из моей лаборатории?',
            );
            await printAndWait([
              tachyon.get_colored_name(),
              ' смотрит так, что на шутку это совсем не похоже…',
            ]);
          } else {
            _default = true;
          }
          break;
        case '森林宝穴':
        case '宝穴':
          // 以宝穴身份开始游戏不会触发
          if (get('cflag:0:模版角色') !== 94) {
            await tachyon.say_and_wait([
              '……',
              callname,
              ' — знаешь, трахать дурочек противозаконно?',
            ]);
            await printAndWait([
              tachyon.get_colored_name(),
              ' смотрит взглядом, каким смотрят на мразь, — на ',
              you.get_colored_name(),
            ]);
            await tachyon.say_and_wait([
              'Вообще-то как торговка и безумный учёный я не должна лезть, но мне уже хочется вызвать полицию, ',
              callname,
            ]);
            await printAndWait([
              you.get_colored_name(),
              ' только и остаётся, что натужно посмеяться',
            ]);
          } else {
            _default = true;
          }
          break;
        default:
          _default = true;
      }
      if (_default) {
        await tachyon.say_and_wait(
          'О… любопытно. Тогда не забудь как следует оформить отчётом данные после приёма и перемены в настроении и сдать мне',
        );
        await printAndWait([
          tachyon.get_colored_name(),
          ' будто бы искренне заинтересовалась, но ',
          you.get_colored_name(),
          ' видит: интересуют её одни только данные опыта',
        ]);
      }
    } else {
      await tachyon.say_and_wait('Чего стесняться, я же никому не расскажу');
      await printAndWait([
        tachyon.get_colored_name(),
        ' делает разочарованное лицо',
      ]);
    }
    await tachyon.say_and_wait('В общем, смотри, какой сегодня товар');
  },
  /**
   * 速子在队，怀疑，去小卖部
   * @param {CharaTalk} tachyon 速子
   * @param {CharaTalk} you 玩家
   */
  start_doubt(tachyon, you) {
    tachyon.say('…Пришёл, значит. Кого на этот раз изводить собрался?');
    print([
      'Гуляя, ',
      you.get_colored_name(),
      ' видит каштанововолосую, в белом халате и с румянцем во всё лицо, ',
      tachyon.uma_sex_title,
    ]);
    print([
      tachyon.sex,
      ' такова: тёмно-красные глаза, будто расчерченные жалюзи, полны безумия и тайны, но стоит ей взглянуть на ',
      you.get_colored_name(),
      ' — и взгляд тут же делается таким, будто перед ней что-то грязное; великоватый белый халат туго распирает от всего, что в нём развешано.',
    ]);
    tachyon.say(
      'Цык… честно, а можно ли вообще продавать лекарства такому, как ты? Я об этом думала уже не один десяток раз',
    );
    tachyon.say('Ладно, смотри сам, какой сегодня товар');
  },
  /**
   * 速子在队，失望，去小卖部
   * @param {CharaTalk} tachyon 速子
   * @param {CharaTalk} you 玩家
   */
  start_hate(tachyon, you) {
    tachyon.say('……Ц');
    print([
      'Гуляя, ',
      you.get_colored_name(),
      ' видит каштанововолосую, в белом халате и с загадочным видом, ',
      tachyon.uma_sex_title,
      ',',
      tachyon.sex,
      ' такова: тёмно-красные глаза, будто расчерченные жалюзи, полны безумия и тайны,',
    ]);
    print([
      'но стоит ей увидеть ',
      you.get_colored_name(),
      ' — и во взгляде тут же ненависть; великоватый белый халат туго распирает от всего, что в нём развешано.',
    ]);
    print([
      'С ненавистью смотрит на ',
      you.get_colored_name(),
      ' — и ведь ',
      tachyon.sex,
      ' не кто-нибудь: за неё отвечает ',
      you.get_colored_name(),
      ', его подопечная ',
      tachyon.uma_sex_title,
      ' ',
      tachyon.get_colored_name(),
    ]);
    tachyon.say(
      'Не будь у меня нехватки подопытных получше, я бы с удовольствием подмешала в эти лекарства что-нибудь такое, от чего жизнь хуже смерти',
    );
    print([tachyon.sex, ' без всякого стеснения говорит опасные вещи']);
    tachyon.say('Смотри сам, оставь деньги и проваливай');
  },
  /**
   * 速子在队，通用情况
   * @param {CharaTalk} tachyon 速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 速子对玩家的称呼
   */
  async start(tachyon, you, callname) {
    tachyon.say(['Ого, да это же ', callname, '?']);
    print([
      'Гуляя, ',
      you.get_colored_name(),
      ' видит каштанововолосую, в белом халате и с загадочным видом, ',
      tachyon.uma_sex_title,
      ',',
    ]);
    print([
      tachyon.sex,
      ' такова: тёмно-красные глаза, будто расчерченные жалюзи, полны безумия и тайны, а великоватый белый халат туго распирает от всего, что в нём развешано.',
    ]);
    print([
      'Такая подозрительная — и ведь ',
      tachyon.sex,
      ' не кто-нибудь: за неё отвечает ',
      you.get_colored_name(),
      ', его подопечная ',
      tachyon.uma_sex_title,
      ' ',
      tachyon.get_colored_name(),
    ]);
    tachyon.say(
      'Ты уже не птенец-первогодка, знаешь ведь, зачем сюда ходят? Говори, какое лекарство нужно; выпьешь — на следующий день не забудь вовремя сдать итоги опыта',
    );
    printButton('«Даже не прикрывается — прямо говорит, что это опыт…»', 1);
    printButton(
      '«Раз это опытные препараты, то и денег с меня брать вроде бы не за что»',
      2,
    );
    await input();
    tachyon.say([
      'Мм-хм~~ Если не возражаешь, чтобы в купленное подмешали опытных препаратов — от которых половые органы светятся, кожа по всему телу становится прозрачной, а сперма выходит едкой, — то могу и денег не брать, ничего страшного',
    ]);
    print([you.get_colored_name(), ' покорно достаёт кошелёк']);
    tachyon.say('Вот и умница. Ну что ж, смотри, какой сегодня товар');
  },
  /**
   * 速子在队，进入小卖部事件的最后，速子在队情况下任意分支的最后一句都是这个
   * @param {CharaTalk} tachyon 速子
   */
  async start_final_welcome(tachyon) {
    await printAndWait([
      tachyon.get_colored_name(),
      ' берётся за полы: ',
      tachyon.sex,
      ' распахивает свой белый халат…',
    ]);
  },
  /**
   * 速子不在队，纯粹初见
   * @param {CharaTalk} tachyon 速子
   * @param {CharaTalk} you 玩家
   */
  async start_first_out_of_team(tachyon, you) {
    await tachyon.say_as_unknown_and_wait(
      'Ого, новая жирная овечка…… нет, кролик…… то есть, гость',
    );
    await printAndWait([
      'Гуляя, ',
      you.get_colored_name(),
      ' встречает каштанововолосую ',
      tachyon.uma_sex_title,
    ]);
    await printAndWait([
      tachyon.sex,
      ' такова: тёмно-красные глаза, будто расчерченные жалюзи, полны безумия и тайны,',
    ]);
    await printAndWait(
      'Великоватый на вид белый халат туго распирает от всего, что в нём развешано.',
    );
    await tachyon.say_as_unknown_and_wait(
      'Ха-ха-ха, раз уж ты сюда добрался, наверняка прекрасно знаешь, чем тут занимаются.',
    );
    printButton('«Не знаю»', 1);
    printButton('«…Не знаю»', 2);
    printButton('«Знаю»', 3);
    switch (await input()) {
      case 1:
        await tachyon.say_as_unknown_and_wait(
          'Ого, да это же невинный агнец? Ничего, посмотришь — узнаешь.',
        );
        break;
      case 2:
        await tachyon.say_as_unknown_and_wait(
          'Хе-хе, зачем врать так, что никто не поверит? Как нечестно.',
        );
        break;
      case 3:
        await tachyon.say_as_unknown_and_wait(
          'Честный хороший мальчик… нет, в таком случае правильнее звать плохим мальчиком?',
        );
    }
    await tachyon.say_as_unknown_and_wait(
      'Что ж, покажу тебе сегодняшний товар.',
    );
    await printAndWait([
      'Каштанововолосая ',
      tachyon.uma_sex_title,
      ' берётся за полы: ',
      tachyon.sex,
      ' распахивает свой белый халат…',
    ]);
  },
  /**
   * 速子不在队，但是已经触发过第一环招募事件
   * @param {CharaTalk} tachyon 速子
   * @param {CharaTalk} you 玩家
   * @param {boolean} is_first 是否是第一次去小卖部
   */
  async start_out_of_team(tachyon, you, is_first) {
    if (is_first) {
      await tachyon.say_as_unknown_and_wait(
        'Ого, новая жирная овечка… нет, подопытная свинка… то есть, гость',
      );
    } else {
      tachyon.say(
        'Ого, снова ты, дорогой гость. Тренер — это, оказывается, такая распутная профессия? Ц-ц',
      );
    }
    print([
      'Гуляя, ',
      you.get_colored_name(),
      ' видит каштанововолосую, в белом халате и с загадочным видом, ',
      tachyon.uma_sex_title,
      ',',
    ]);
    print([
      tachyon.sex,
      ' такова: тёмно-красные глаза, будто расчерченные жалюзи, полны безумия и тайны, а великоватый белый халат туго распирает от всего, что в нём развешано.',
    ]);
    print([
      'Вот такая ',
      tachyon.sex,
      ' — известная на всю академию проблемная девица, ',
      tachyon.get_colored_name(),
    ]);
    if (is_first) {
      await tachyon.say_and_wait(
        'О? Лицо у тебя знакомое… Ага, если не путаю, ты ведь тренер?',
      );
      printButton('«Нет»', 1);
      printButton('«…Нет»', 2);
      printButton('«Да»', 3);
      switch (await input()) {
        case 1:
          await tachyon.say_and_wait(
            'Хм? Значит, я перепутала?.. Или мы виделись на чёрном рынке…',
          );
          await printAndWait([
            tachyon.get_colored_name(),
            ' бормочет слово, от которого мороз по коже',
          ]);
          break;
        case 2:
          await tachyon.say_and_wait([
            'Ха-ха-ха, спокойно, спокойно! На этот счёт рот у меня на замке: твоя подопечная ',
            tachyon.uma_sex_title,
            ' ничего не узнает',
          ]);
          await printAndWait([
            tachyon.get_colored_name(),
            ' загадочно улыбается: мол, всё понимаю',
          ]);
          break;
        case 3:
          await tachyon.say_and_wait([
            '…Вот так прямо и признался? Мне уже начинает быть жалко ту, за кого ты отвечаешь, — твою ',
            tachyon.uma_sex_title,
            ', правда жалко',
          ]);
          await printAndWait([
            tachyon.get_colored_name(),
            ' делает лицо человека, которому нечего сказать',
          ]);
      }
    }
    tachyon.say('В общем, для начала посмотрим, какой сегодня товар.');
    await printAndWait([
      tachyon.get_colored_name(),
      ' берётся за полы: ',
      tachyon.sex,
      ' распахивает свой белый халат…',
    ]);
  },
  /**
   * 离开小卖部，爱欲 & 融洽以上，购买数量少于三件
   * @param {CharaTalk} tachyon 速子
   */
  end_love_buy_few(tachyon) {
    tachyon.say(
      'Э…… так мало хватит? Что? Сомневаюсь в твоих силах? Нет, я не это имела в виду…… Накажешь меня как следует? Хе-хе, тогда буду ждать вечера❤️',
    );
  },
  /**
   * 离开小卖部，爱欲 & 融洽以上，购买数量多于十件
   * @param {CharaTalk} tachyon 速子
   */
  end_love_buy_many(tachyon) {
    tachyon.say(
      '!? Столько…… не лопнешь ли…… Хе-хе, жду с нетерпением. И после можно будет напрямую почувствовать изменения от лекарств……',
    );
    tachyon.say('Сегодня вечером дай мне как следует насладиться❤️……');
  },
  /**
   * 离开小卖部，购买数量少于三件
   * @param {CharaTalk} tachyon 速子
   * @param {boolean} is_first 是否第一次进小卖部
   */
  end_buy_few(tachyon, is_first) {
    if (is_first) {
      tachyon.say_as_unknown('Ого, так мало — хватит?');
      tachyon.say_as_unknown(
        'Нет, просто любопытство. У такого всё-таки есть индивидуальные различия; если можно, хотелось бы больше экспериментальных данных…… ничего',
      );
    } else {
      tachyon.say('Ого, так мало — хватит?');
      tachyon.say(
        'Нет, просто любопытство. У такого всё-таки есть индивидуальные различия; если можно, хотелось бы больше экспериментальных данных…… ничего',
      );
    }
  },
  /**
   * 离开小卖部，购买数量多于十件
   * @param {CharaTalk} tachyon 速子
   * @param {boolean} is_first 是否第一次进小卖部
   */
  end_buy_many(tachyon, is_first) {
    if (is_first) {
      tachyon.say_as_unknown(
        'Ого, столько берёшь? Нет, просто любопытство. У такого всё-таки есть индивидуальные различия……',
      );
      tachyon.say_as_unknown(
        'Кстати, лично жду, что в следующий визит приложишь отзыв об использовании; ещё лучше — в формате нормального экспериментального отчёта',
      );
    } else {
      tachyon.say(
        'Ого, столько берёшь? Нет, просто любопытство. У такого всё-таки есть индивидуальные различия……',
      );
      tachyon.say(
        'Кстати, лично жду, что в следующий визит приложишь отзыв об использовании; ещё лучше — в формате нормального экспериментального отчёта',
      );
    }
  },
};
