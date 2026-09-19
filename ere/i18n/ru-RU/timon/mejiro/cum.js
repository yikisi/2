/**
 * @file 麦吉罗的呼唤 - 系统提示
 * @author 黑奴队长
 */
const {
  get,
  input,
  print,
  printAndWait,
  printButton,
} = require('#/era-electron');

module.exports = {
  // 伴侣被呼唤状态下的提示
  calling_tip: 'Мэдзиро зовёт…',
  /**
   * 被呼唤状态下 5% 概率会替换外出界面所有按钮都变成目白城，并且修改按钮内容，就是该数组的内容
   * @type {string[]}
   */
  calling_buttons: ['Ме', 'дзи', 'ро', ' зо', 'вё', 'т'],
  // 带了不是麦吉罗呼唤对象的伴侣
  calling_not_chara_tip: 'Мэдзиро не зовёт этого человека',
  // 带了三女神
  calling_god_tip:
    'Мэдзиро, возможно, не ниже Трёх богинь, но уж точно не выше них',
  // 这周去过目白城了
  come_limited: 'На этой неделе город Мэдзиро не найти',
  /**
   * 进入目白城
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async come_in_mejiro_city(chara, you) {
    await printAndWait([
      you.get_colored_name(),
      ' и ',
      chara.get_colored_name(),
      ' вместе входят в город Мэдзиро…',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} location
   * @returns {TextContent}
   */
  get_header: (chara, location) => [
    'С ',
    chara.get_colored_name(),
    ' — ',
    location,
  ],

  /**
   * 麦吉罗的的呼唤 - 迷雾
   */

  /** 进入目白城后提示处于迷雾探索 */
  async misty_notify() {
    await printAndWait('…и тогда туман поглотил вас…');
  },
  /**
   * 探索移动阶段，提示性欲状态
   * @param {CharaTalk} chara 同伴
   * @param {CharaTalk} you 玩家
   * @param {number} progress 离开进度
   * @returns {TextContent[]}
   */
  get_misty_info(chara, you, progress) {
    const ret = [];
    const lust = Math.max(get('base:0:性欲'), get(`base:${chara.id}:性欲`));
    ret.push([
      you.get_colored_name(),
      ' и ',
      chara.get_colored_name(),
      ' стоят на улице, окутанной туманом…',
    ]);
    // 情动
    if (lust >= 7500) {
      ret.push(
        'Вокруг — толпа людей, парами предающихся разгулу похоти: разнузданные стоны, шлепки тел и брызги соков заполняют всё пространство.',
      );
    } else if (lust >= 5000) {
      // 不安
      ret.push(
        'Вокруг — любовники с размытыми лицами: совокупляются, покачиваются, тихие томные стоны и влажное хлюпанье не смолкают.',
      );
    } else if (lust >= 4000) {
      ret.push(
        'Вокруг — пары с размытыми лицами: гладят друг друга, похотливо заигрывают, изредка слышны стоны и густое влажное хлюпанье.',
      );
    } else if (lust >= 3000) {
      ret.push(
        'Вокруг — пары обнимаются и целуются, изредка слышен тихий любовный шёпот.',
      );
    } else if (lust >= 2000) {
      ret.push(
        'Вокруг — смутные силуэты путников, идущих парами, изредка доносится неразборчивый шёпот.',
      );
    }
    if (progress === 1) {
      ret.push('Впереди туман рассеивается, видны светлые, чистые кварталы.');
    } else if (progress >= 0.66) {
      ret.push(
        'Впереди туман чуть поредел, сквозь облака пятнами пробивается солнце.',
      );
    } else if (progress >= 0.33) {
      ret.push('Пути назад уже не видно, похоже, остаётся только вперёд.');
    } else if (progress === 0) {
      ret.push(
        'Широкая дорога уходит прямо вперёд, но куда она ведёт — неясно. От пути назад осталась лишь мутная серость.',
      );
    }
    return ret;
  },
  // 以下是探索选项
  bt_slow_forward: 'Осторожно вперёд (низкий риск, похоть+++, силы--)',
  bt_normal_forward: 'Обычным шагом (средний риск, похоть++, силы--)',
  bt_fast_forward: 'Смело вперёд (высокий риск, похоть+, силы--)',
  bt_slow_search: 'Тщательный обыск (низкий риск, похоть++, силы---)',
  bt_normal_search: 'Обычный обыск (средний риск, похоть++, силы--)',
  bt_fast_search: 'Беглый обыск (высокий риск, похоть++, силы-)',
  bt_rest: 'Остановиться отдохнуть (похоть++, силы+)',
  bt_surrender: 'Сдаться (Единство ❤️)',
  /**
   * 性欲爆表，离开失败
   * @param {CharaTalk} chara 同伴
   * @param {CharaTalk} you 玩家
   * @returns {Promise<number[]>}
   */
  async fail_to_escape(chara, you) {
    const ret = [];
    await printAndWait([
      you.get_colored_name(),
      ' и ',
      chara.get_colored_name(),
      ' полностью окружены туманом…',
    ]);
    await printAndWait(
      'Куда ни глянь — только туман да пары, бешено трахающиеся; в их лицах смутно проступают ваши черты.',
    );
    await printAndWait(
      'Звуки секса перекрывают всё остальное, вдыхаемый воздух пропитан похотливой вонью…',
    );
    // 焦躁
    if (get('base:0:性欲') >= 9000) {
      await printAndWait([
        you.get_colored_name(),
        ' слышит, как кровь гудит в голове, а самоконтроль рассыпается под натиском похотливых грёз…',
      ]);
      await printAndWait([
        'Видя рядом ',
        chara.get_colored_name(),
        ', тоже с пылающими щеками и сжатыми бёдрами, ',
        you.get_colored_name(),
        ' в конце концов отдаётся во власть этих мыслей…',
      ]);
    } else {
      printButton('Погрузиться в это («милость» +10)', 1);
      printButton('Попытаться успокоиться (силы и энергия +50%)', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait([
          you.get_colored_name(),
          ' смотрит на ',
          chara.get_colored_name(),
          ', и в тех глазах плещутся тёмные волны…',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' по своей воле ступает в трясину желания,',
        ]);
        await printAndWait(['Рядом ', chara.sex, ', и вы падаете вниз, вниз…']);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' смотрит на ',
          chara.get_colored_name(),
          ', и в тех глазах плещутся тёмные волны…',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' в панике пытается вытащить ноги из трясины желания,',
        ]);
        await printAndWait(
          'но с каждым шагом увязает всё глубже, пока не срывается вниз…',
        );
      }
    }
    return ret;
  },
  /**
   * 离开目白城
   * @param {CharaTalk} chara 同伴
   * @param {CharaTalk} you 玩家
   * @param {string|false} vehicle 载具，如果是 false 则表示没有多人载具
   * @param {boolean} success 是否成功
   * @returns {Promise<number[]>}
   */
  async leave_misty(chara, you, vehicle, success) {
    if (success) {
      if (typeof vehicle === 'string') {
        await printAndWait([
          you.get_colored_name(),
          ' и ',
          chara.get_colored_name(),
          ' выходят из тумана, а рядом — ',
          vehicle,
          '.',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' и ',
          chara.get_colored_name(),
          ' выходят из тумана, а рядом — автобус.',
        ]);
      }
    } else {
      await printAndWait([
        'Когда ',
        you.get_colored_name(),
        ' приходит в себя, то уже оказывается на скамейке за городом Мэдзиро, а рядом спит ',
        chara.get_colored_name(),
        '.',
      ]);
      await printAndWait([
        chara.sex,
        ' приходит в себя, и вы уходите из города Мэдзиро под непонятно откуда взявшимся довольным смехом…',
      ]);
      await printAndWait([
        '…но с тех пор ',
        chara.get_colored_name(),
        ' то и дело слышит еле уловимый шёпот…',
      ]);
    }
  },
  /** 恩宠自然扣光之后的提醒 */
  async notify_misty() {
    await printAndWait('Город Мэдзиро снова окутан туманом…');
  },
  /**
   * 被呼唤者 San 值掉光的提醒
   * @param chara
   * @returns {Promise<void>}
   */
  async notify_called(chara) {
    await printAndWait([
      chara.get_colored_name(),
      ' в шёпоте у уха слышит зов Мэдзиро…',
    ]);
  },

  /**
   * 麦吉罗的的呼唤 - 街道
   */
  money_header_template: 'Текущая «милость»: %MONEY%',
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  print_city_info(chara, you) {
    print([
      you.get_colored_name(),
      ' и ',
      chara.get_colored_name(),
      ' стоят на чистой улице.',
    ]);
    print('Под ярким солнцем пары гуляют по проспектам и переулкам.');
  },
  city_change_target_template: 'Сменить, кто принимает услугу; сейчас: %NAME%',
  city_upgrade_max: '(MAX)',
  city_leave: 'Уйти',
  city_bt_beauty_salon: '«Салон красоты»',
  city_bs_welcome: 'Добро пожаловать! Кто принимает услуги салона?',
  city_bs_height_up_template: 'Вырасти до %HEIGHT% см (10 «милости»)',
  city_bs_height_up_limit_tip: 'Выше уже нельзя',
  city_bs_height_down_template: 'Уменьшиться до %HEIGHT% см (10 «милости»)',
  city_bs_height_down_limit_tip: 'Ниже уже нельзя',
  city_bs_boob_up_template: 'Увеличить грудь (5 «милости», сейчас %CUP% Cup)',
  city_bs_boob_up_limit_tip: 'Нельзя увеличить грудь выше [Огромная грудь]',
  city_bs_boob_down_template: 'Уменьшить грудь (5 «милости», сейчас %CUP% Cup)',
  city_bs_boob_down_limit_tip: 'Уже как аэродром',
  city_bs_nipple_deeper: 'Усилить пигментацию сосков (5 «милости»)',
  city_bs_nipple_shallower: 'Снять пигментацию сосков (5 «милости»)',
  city_bs_clean_milk: 'Снять [Молочное тело] (30 «милости»)',
  city_bs_clean_milk_confirm: 'Это снимет вашу маленькую правку. Точно снять?',
  city_bs_get_milk: 'Получить [Молочное тело] (30 «милости»)',
  city_bs_re_virgin: 'Вернуть девственность (20 «милости»)',
  city_bs_penis_bigger_man_template:
    'Увеличить член (10 «милости», сейчас %SIZE%)',
  city_bs_penis_bigger_woman_template:
    'FUTA-фикация (10 «милости», сейчас %SIZE%)',
  city_bs_penis_bigger_limit_tip: 'Дальше увеличивать нельзя',
  city_bs_penis_smaller_man_template:
    'Уменьшить член (10 «милости», сейчас %SIZE%)',
  city_bs_penis_smaller_futa_template:
    'Феминизация (15 «милости», сейчас %SIZE%)',
  city_bs_penis_smaller_male_limit_tip: 'Дальше уменьшать нельзя',
  city_bs_penis_smaller_female_limit_tip: 'Изначально пусто',
  city_bs_ero_deeper: 'Усилить пигментацию гениталий (5 «милости»)',
  city_bs_ero_deeper_limit_tip: 'Уже совсем тёмные гениталии',
  city_bs_ero_shallower: 'Осветлить пигментацию гениталий (5 «милости»)',
  city_bs_ero_shallower_limit_tip: 'Уже розовые гениталии',
  city_bs_skin_shallower_template: 'Отбеливание (5 «милости», сейчас %SKIN%)',
  city_bs_skin_shallower_limit_tip: 'Светлее уже нельзя',
  city_bs_skin_deeper_template: 'Загар (5 «милости», сейчас %SKIN%)',
  city_bs_skin_deeper_limit_tip: 'Темнее уже нельзя',
  city_bs_hair_color: 'Окрашивание',
  city_bs_hair_color_confirm: 'В какой цвет покрасить?',
  city_bs_hair_color_current_suffix: '(текущий цвет волос)',
  city_bs_uma_template: 'Превратиться в %UMA% (100 «милости», необратимо!)',
  city_bs_body_hair_color: 'Изменить цвет шерсти (1 «милость»)',
  city_bs_body_hair_color_current_suffix: '(текущий цвет шерсти)',
  city_bs_change_done: 'Хорошо, расслабьтесь — сейчас всё будет～',
  city_bs_bye: 'До встречи～',
  city_bt_hospital: '«Больница»',
  /**
   * 目白城医院的开场白
   * @param {function(TextContent):Promise} waiter_say_cb 服务生说话的回调函数
   */
  async city_hospital_start(waiter_say_cb) {
    await waiter_say_cb(
      'Это больница города Мэдзиро! Голова, поясница, руки, сердце, ноги — мы всё——',
    );
    await waiter_say_cb('…не лечим…');
    await waiter_say_cb('Шутка. Чем можем помочь?');
  },
  city_hp_hp_medicine_template: '«Сильный шарик» %PRICE%',
  city_hp_hp_medicine_price_template:
    '(%PRICE% «милости»: доп. потолок сил %NOW% → %NEXT%)',
  city_hp_tp_medicine_template: '«Бодрящая мазь» %PRICE%',
  city_hp_tp_medicine_price_template:
    '(%PRICE% «милости»: доп. потолок энергии %NOW% → %NEXT%)',
  city_hp_b_scan: 'УЗИ (-10 «милости»)',
  /**
   * 目白城医院买药
   * @param {function(TextContent):Promise} waiter_say_cb 服务生说话的回调函数
   * @param {string} medicine 买的药
   */
  async city_hospital_medicine(waiter_say_cb, medicine) {
    await waiter_say_cb(['Хорошо, ', medicine, ' — одна порция～']);
    await waiter_say_cb('Эффект через неделю～');
  },
  /**
   * 目白城做 B超
   * @param {function(TextContent):Promise} waiter_say_cb 服务生说话的回调函数
   * @param {CharaTalk} father 孩子的父亲
   * @param {CharaTalk} you 玩家
   */
  async city_hospital_b_scan(waiter_say_cb, father, you) {
    await waiter_say_cb('Поздравляем! Посмотрим, как растёт малыш…');
    await printAndWait(
      [
        '＜На экране прибора — изображение ребёнка; ',
        you.get_colored_name(),
        ' почему-то видит в чёрно-белой картинке лицо ',
        father.get_colored_name(),
        '>',
      ],
      { isParagraph: true },
    );
    await waiter_say_cb('Какой милый! На кого, по-вашему, похож?');
  },
  city_bt_massage: '«Массаж»',
  city_massage_welcome: 'У нас масляный массаж! Хотите расслабиться?',
  city_mg_get_talent: 'Усилить секс-способность одной зоны (60 «милости»)',
  city_mg_get_talent_limit_tip:
    'Больше нет зон, где можно поднять секс-способность',
  city_mg_trained_talent_template:
    'Добавить зоны, доступные для дрессуры до высшей чувствительности%PRICE%',
  city_mg_trained_talent_price_template:
    '(25 «милости»: %NOW% зон → %NEXT% зон)',
  /**
   * 目白城按摩店，得到名器特性
   * @param {CharaTalk} target
   * @param {PrintedSpan} talent
   * @returns {TextContent}
   */
  get_city_massage_get_talent: (target, talent) => [
    target.get_colored_name(),
    ' получает ',
    talent,
    '!',
  ],
  /**
   * 目白城按摩店，提高调教度
   * @param {CharaTalk} target
   * @returns {TextContent}
   */
  get_city_massage_upgrade_trained_talent: (target) => [
    target.get_colored_name(),
    ' после массажа… тело стало податливее…',
  ],
  city_bt_library: '«Библиотека»',
  city_library_welcome:
    'Добро пожаловать в городскую библиотеку Мэдзиро! Какую книгу берёте?',
  // 玩家学钢之意志
  city_lb_self_get_im_template:
    '«Секретные приёмы Кирюин» (10 «милости» → %NAME% учит [Стальная воля])',
  // 玩家忘钢之意志
  city_lb_self_rm_im_template:
    '«Я и моя жена-умамусумэ» (5 «милости» → %NAME% забывает [Стальная воля])',
  // 同伴学钢之意志
  city_lb_chara_get_im_template:
    '«Священный полтора шага» (5 «милости» → %NAME% учит [Стальная воля])',
  // 同伴忘钢之意志
  city_lb_chara_rm_im_template:
    '«Даже тупого парня схватить с разу! Вершина любовных скачек» (10 «милости» → %NAME% забывает [Стальная воля])',
  // 玩家提高性技等级上限
  city_lb_update_abl_limit:
    '«Введение в рост секс-навыков — изд. «Кольцо похоти»» (66 «милости»)',
  /**
   * 目白城图书馆看书的处理
   * @param {CharaTalk} target 学习的对象
   * @param {boolean} get_or_rm 习得 or 遗忘 钢之意志
   * @param {PrintedSpan} iron_mind 钢之意志
   * @param {boolean} unlimit 是否是看了提高技能等级上限的书
   * @returns {Promise<void>}
   */
  async handle_city_library(target, get_or_rm, iron_mind, unlimit) {
    if (unlimit) {
      await printAndWait('…что вы прочитали?');
    } else if (get_or_rm) {
      await printAndWait([
        target.get_colored_name(),
        ' выучила ',
        iron_mind,
        '!',
      ]);
    } else {
      await printAndWait([
        target.get_colored_name(),
        ' забыла ',
        iron_mind,
        '!',
      ]);
    }
  },
  city_lb_bye: 'Ждём вас снова～',
  city_bt_arcade: '«Лотерея»',
  city_ac_welcome: 'Добро пожаловать в город Мэдзиро! Испытать удачу?',
  city_ac_confirm: 'Потратить 2 «милости» на розыгрыш?',
  /**
   * 目白城中大奖
   * @param {function(TextContent):Promise} waiter_say_cb 服务生说话的回调函数
   */
  async handle_ac_grand_prize(waiter_say_cb) {
    await waiter_say_cb('Кру～п～ный～ выигрыш～');
    await waiter_say_cb('Десятикратная выплата по купону!');
    await printAndWait('Получено 20 «милости»!');
  },
  city_bt_newspaper: '«Редакция»',
  /**
   * 报社开头
   * @param {function(TextContent):Promise} waiter_say_cb 服务生说话的回调函数
   */
  async city_newspaper_start(waiter_say_cb) {
    await waiter_say_cb('Добро пожаловать～');
    await waiter_say_cb(
      'Редакция города Мэдзиро поможет восстановить честь и разнести славу.',
    );
  },
  city_ns_welcome: 'Чем помочь?',
  city_ns_button_template: '%PRICE% «милости» → %HONOUR1%～%HONOUR2% репутации',
  city_ns_result_template: 'Хорошо, %HONOUR% репутации — оформляем～',
  city_ns_bye: 'Спасибо за визит!',
  city_bt_bank: '«Банк»',
  city_bn_start: 'Добро пожаловать～',
  city_bn_welcome: 'Оформить снятие?',
  city_bn_button_template: '%PRICE% «милости» → %MONEY1%～%MONEY2% ма-монет',
  city_bn_result_template: 'Хорошо, снятие %MONEY% ма-монет — оформляем～',
  city_bn_bye: 'До свидания～',
  city_bt_gov: '«Мэрия»',
  /**
   * 市政府，转换目白城形态
   * @param {CharaTalk} mayor
   * @returns {Promise<boolean>}
   */
  async handle_gov(mayor) {
    await mayor.say_and_wait('Добро пожаловать в город Мэдзиро.');
    await mayor.say_and_wait('Чем могу помочь?');
    printButton('«Пожалуйста… отпустите меня…»', 1);
    printButton('Ничего', 2);
    if ((await input()) === 1) {
      print('(Необратимо: навсегда изменит стиль города Мэдзиро!)', {
        color: 'red',
      });
      printButton('Подтвердить', 1);
      printButton('Не надо', 2);
      if ((await input()) === 1) {
        await mayor.say_and_wait('Поняла.');
        await mayor.say_and_wait(
          'При следующем визите город Мэдзиро станет таким, каким вы хотите.',
        );
        await mayor.say_and_wait('До встречи.');
        return true;
      }
    }
    await mayor.say_and_wait(
      'Желаю вам и вашему спутнику хорошо провести время в городе Мэдзиро～',
    );
    return false;
  },
  async city_notify_misty() {
    await printAndWait(
      'Вы выходите из лавки — и перед глазами уже не улица, а окраина.',
    );
    await printAndWait(
      'Оглянувшись, видите: город Мэдзиро снова окутан туманом…',
    );
  },
};
