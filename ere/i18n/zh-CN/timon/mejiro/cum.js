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
  calling_tip: '麦吉罗在呼唤……',
  /**
   * 被呼唤状态下 5% 概率会替换外出界面所有按钮都变成目白城，并且修改按钮内容，就是该数组的内容
   * @type {string[]}
   */
  calling_buttons: ['麦', '吉', '罗', '在', '呼', '唤'],
  // 带了不是麦吉罗呼唤对象的伴侣
  calling_not_chara_tip: '麦吉罗并未呼唤此人',
  // 带了三女神
  calling_god_tip: '麦吉罗也许不在三女神之下，但绝不在其之上',
  // 这周去过目白城了
  come_limited: '本周内找不到目白城了',
  /**
   * 进入目白城
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async come_in_mejiro_city(chara, you) {
    await printAndWait([
      you.get_colored_name(),
      ' 和 ',
      chara.get_colored_name(),
      ' 一同进入了目白城……',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} location
   * @returns {TextContent}
   */
  get_header: (chara, location) => [
    '与 ',
    chara.get_colored_name(),
    ' 位于 ',
    location,
  ],

  /**
   * 麦吉罗的的呼唤 - 迷雾
   */

  /** 进入目白城后提示处于迷雾探索 */
  async misty_notify() {
    await printAndWait('……然后迷雾吞没了你们……');
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
      ' 和 ',
      chara.get_colored_name(),
      ' 身处迷雾笼罩的街道……',
    ]);
    // 情动
    if (lust >= 7500) {
      ret.push(
        '周围是成双成对纵欲狂欢的人群，放肆的呻吟、肉体碰撞的声音和喷溅的水声充斥着整片空间。',
      );
    } else if (lust >= 5000) {
      // 不安
      ret.push(
        '周围是面容模糊的爱侣，正在欢爱、摆动，低低的娇吟和水声不绝于耳。',
      );
    } else if (lust >= 4000) {
      ret.push(
        '周围是面容模糊的眷侣，正在相互抚摸、狎戏，偶尔能听见呻吟和绵密的水声。',
      );
    } else if (lust >= 3000) {
      ret.push(
        '周围是成双成对的伴侣，相互拥抱、接吻，偶尔能听见轻悄悄的情话。',
      );
    } else if (lust >= 2000) {
      ret.push('周围是影影绰绰的一对对旅客，偶尔能听见模糊的低语。');
    }
    if (progress === 1) {
      ret.push('前面的迷雾正在消散，能看见明亮、干净的街区。');
    } else if (progress >= 0.66) {
      ret.push('前面的迷雾变得稀薄了一些，阳光穿过云层星星点点地照着。');
    } else if (progress >= 0.33) {
      ret.push('来路已经看不见了，似乎只能向前。');
    } else if (progress === 0) {
      ret.push(
        '一条大道笔直通向前方，但并不清楚延伸向哪里。来路只剩下蒙蒙的灰。',
      );
    }
    return ret;
  },
  // 以下是探索选项
  bt_slow_forward: '谨慎前进（低风险，性欲+++，体力--）',
  bt_normal_forward: '正常前进（中风险，性欲++，体力--）',
  bt_fast_forward: '大胆前进（高风险，性欲+，体力--）',
  bt_slow_search: '仔细搜索（低风险，性欲++，体力---）',
  bt_normal_search: '正常搜索（中风险，性欲++，体力--）',
  bt_fast_search: '粗略搜索（高风险，性欲++，体力-）',
  bt_rest: '停下休息（性欲++，体力+）',
  bt_surrender: '放弃抵抗（一心同体❤️）',
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
      ' 和 ',
      chara.get_colored_name(),
      ' 被迷雾完全包围了……',
    ]);
    await printAndWait(
      '目光所及除了迷雾就是一对对疯狂做爱的情侣，他们的面容依稀有着你们的影子。',
    );
    await printAndWait('性爱的声音盖过了其他所有，呼吸的空气中满是淫臭……');
    // 焦躁
    if (get('base:0:性欲') >= 9000) {
      await printAndWait([
        you.get_colored_name(),
        ' 听到血液在脑中轰鸣，自控在绮念的进攻下分崩离析……',
      ]);
      await printAndWait([
        '看到身边的 ',
        chara.get_colored_name(),
        ' 也同样霞飞双颊，夹紧双腿，',
        you.get_colored_name(),
        ' 最终任由思想把自己控制……',
      ]);
    } else {
      printButton('沉溺其中（「恩宠」+10）', 1);
      printButton('试图冷静（体力 & 精力+50%）', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait([
          you.get_colored_name(),
          ' 看向 ',
          chara.get_colored_name(),
          '，那眼眸中暗波荡漾……',
        ]);
        await printAndWait([you.get_colored_name(), ' 主动踏入欲望的泥淖，']);
        await printAndWait(['伴随着', chara.sex, '一同下坠，下坠……']);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' 看向 ',
          chara.get_colored_name(),
          '，那眼眸中暗波荡漾……',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' 惊慌地想抬腿离开欲望的泥淖，',
        ]);
        await printAndWait('脚步却越踩越深，直至坠落……');
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
          ' 和 ',
          chara.get_colored_name(),
          ' 走出了迷雾，发现正处于',
          vehicle,
          '旁。',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' 和 ',
          chara.get_colored_name(),
          ' 走出了迷雾，发现正处于公交车旁。',
        ]);
      }
    } else {
      await printAndWait([
        '当 ',
        you.get_colored_name(),
        ' 清醒时，已出现在目白城外的长椅上，旁边是睡着的 ',
        chara.get_colored_name(),
        '。',
      ]);
      await printAndWait([
        chara.sex,
        '清醒过来后，你们在不知从何而来的满足笑声中离开了目白城……',
      ]);
      await printAndWait([
        '……但是自那以后，',
        chara.get_colored_name(),
        ' 就会时不时听到若有若无的低语……',
      ]);
    }
  },
  /** 恩宠自然扣光之后的提醒 */
  async notify_misty() {
    await printAndWait('目白城再次为迷雾笼罩……');
  },
  /**
   * 被呼唤者 San 值掉光的提醒
   * @param chara
   * @returns {Promise<void>}
   */
  async notify_called(chara) {
    await printAndWait([
      chara.get_colored_name(),
      ' 从耳边的低语中听到了麦吉罗的呼唤……',
    ]);
  },

  /**
   * 麦吉罗的的呼唤 - 街道
   */
  money_header_template: '当前「恩宠」：%MONEY%',
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  print_city_info(chara, you) {
    print([
      you.get_colored_name(),
      ' 和 ',
      chara.get_colored_name(),
      ' 站在干净的街道上。',
    ]);
    print('明媚的阳光下，出双入对的人们穿行在大街小巷。');
  },
  city_change_target_template: '切换接受服务的角色，现在是 %NAME%',
  city_upgrade_max: '（MAX）',
  city_leave: '离开',
  city_bt_beauty_salon: '「美容院」',
  city_bs_welcome: '欢迎光临！请问是哪位要接受美容服务呢？',
  city_bs_height_up_template: '增高至 %HEIGHT%cm（10「恩宠」）',
  city_bs_height_up_limit_tip: '不能再高了',
  city_bs_height_down_template: '变矮至 %HEIGHT%cm（10「恩宠」）',
  city_bs_height_down_limit_tip: '不能再矮了',
  city_bs_boob_up_template: '增大胸部（5「恩宠」，目前是 %CUP% Cup）',
  city_bs_boob_up_limit_tip: '无法丰胸到 [爆乳] 以上',
  city_bs_boob_down_template: '缩小胸部（5「恩宠」，目前是 %CUP% Cup）',
  city_bs_boob_down_limit_tip: '已经是飞机场了',
  city_bs_nipple_deeper: '增加乳头色素累积（5「恩宠」）',
  city_bs_nipple_shallower: '清除乳头色素累积（5「恩宠」）',
  city_bs_clean_milk: '消除 [母乳体质]（30「恩宠」）',
  city_bs_clean_milk_confirm: '这会消除您作的那一点小小的修改，确定消除吗？',
  city_bs_get_milk: '获得 [母乳体质]（30「恩宠」）',
  city_bs_re_virgin: '恢复处女（20「恩宠」）',
  city_bs_penis_bigger_man_template: '增大阴茎（10「恩宠」，目前是 %SIZE%）',
  city_bs_penis_bigger_woman_template: 'FUTA 化（10「恩宠」，目前是 %SIZE%）',
  city_bs_penis_bigger_limit_tip: '已经不能继续增大了',
  city_bs_penis_smaller_man_template: '缩小阴茎（10「恩宠」，目前是 %SIZE%）',
  city_bs_penis_smaller_futa_template: '女体化（15「恩宠」，目前是 %SIZE%）',
  city_bs_penis_smaller_male_limit_tip: '已经不能继续缩小了',
  city_bs_penis_smaller_female_limit_tip: '本来无一物',
  city_bs_ero_deeper: '增加性器色素累积（5「恩宠」）',
  city_bs_ero_deeper_limit_tip: '已经是黝黑的性器',
  city_bs_ero_shallower: '减轻性器色素累积（5「恩宠」）',
  city_bs_ero_shallower_limit_tip: '已经是粉色的性器',
  city_bs_skin_shallower_template: '美白（5「恩宠」，现在是 %SKIN%）',
  city_bs_skin_shallower_limit_tip: '肤色已经不能再白了',
  city_bs_skin_deeper_template: '美黑（5「恩宠」，现在是 %SKIN%）',
  city_bs_skin_deeper_limit_tip: '肤色已经不能再深了',
  city_bs_hair_color: '染色',
  city_bs_hair_color_confirm: '要染成什么颜色？',
  city_bs_hair_color_current_suffix: '（现发色）',
  city_bs_uma_template: '转变为%UMA%（100「恩宠」，不可逆！）',
  city_bs_body_hair_color: '改变毛色（1「恩宠」）',
  city_bs_body_hair_color_current_suffix: '（现毛色）',
  city_bs_change_done: '好的，请放轻松，马上就好～',
  city_bs_bye: '下次再见～',
  city_bt_hospital: '「医院」',
  /**
   * 目白城医院的开场白
   * @param {function(TextContent):Promise} waiter_say_cb 服务生说话的回调函数
   */
  async city_hospital_start(waiter_say_cb) {
    await waiter_say_cb(
      '这里是目白城医院！头寒脑热、腰酸背痛、手震心疼、腿颤脚麻，我们全都——',
    );
    await waiter_say_cb('……不包治哦……');
    await waiter_say_cb('开个玩笑啦，有什么可以帮您的？');
  },
  city_hp_hp_medicine_template: '「大力丸」%PRICE%',
  city_hp_hp_medicine_price_template:
    '（%PRICE%「恩宠」：额外体力上限 %NOW% → %NEXT%）',
  city_hp_tp_medicine_template: '「醒神膏」%PRICE%',
  city_hp_tp_medicine_price_template:
    '（%PRICE%「恩宠」：额外精力上限 %NOW% → %NEXT%）',
  city_hp_b_scan: 'B超（-10「恩宠」）',
  /**
   * 目白城医院买药
   * @param {function(TextContent):Promise} waiter_say_cb 服务生说话的回调函数
   * @param {string} medicine 买的药
   */
  async city_hospital_medicine(waiter_say_cb, medicine) {
    await waiter_say_cb(['好的，', medicine, '一份～']);
    await waiter_say_cb('一周后见效哦～');
  },
  /**
   * 目白城做 B超
   * @param {function(TextContent):Promise} waiter_say_cb 服务生说话的回调函数
   * @param {CharaTalk} father 孩子的父亲
   * @param {CharaTalk} you 玩家
   */
  async city_hospital_b_scan(waiter_say_cb, father, you) {
    await waiter_say_cb('恭喜恭喜，我们来看看孩子的成长状态……');
    await printAndWait(
      [
        '＜仪器的屏幕上显示出孩子的影像，',
        you.get_colored_name(),
        ' 莫名从黑白的画面中看到了 ',
        father.get_colored_name(),
        ' 的脸＞',
      ],
      { isParagraph: true },
    );
    await waiter_say_cb('真可爱！有没有感觉长得像谁呢？');
  },
  city_bt_massage: '「按摩店」',
  city_massage_welcome: '这里提供精油按摩服务！要不要来放松一下呢？',
  city_mg_get_talent: '增强一个部位的性能力（60「恩宠」）',
  city_mg_get_talent_limit_tip: '没有可以提升性能力的部位了',
  city_mg_trained_talent_template: '增加可调教为最高级敏感度的部位%PRICE%',
  city_mg_trained_talent_price_template:
    '（25「恩宠」：%NOW% 个部位 → %NEXT% 个部位）',
  /**
   * 目白城按摩店，得到名器特性
   * @param {CharaTalk} target
   * @param {PrintedSpan} talent
   * @returns {TextContent}
   */
  get_city_massage_get_talent: (target, talent) => [
    target.get_colored_name(),
    ' 获得了 ',
    talent,
    '！',
  ],
  /**
   * 目白城按摩店，提高调教度
   * @param {CharaTalk} target
   * @returns {TextContent}
   */
  get_city_massage_upgrade_trained_talent: (target) => [
    target.get_colored_name(),
    ' 做完按摩后，身体变得更润滑了……',
  ],
  city_mg_bye: '请一路顺风～',
  city_bt_library: '「图书馆」',
  city_library_welcome: '欢迎来到目白城市立大图书馆！请问要借阅什么书籍呢？',
  // 玩家学钢之意志
  city_lb_self_get_im_template:
    '《桐生院秘传驯马术》（10「恩宠」→ %NAME% 习得 [钢之意志]）',
  // 玩家忘钢之意志
  city_lb_self_rm_im_template:
    '《我与我的马娘妻子》（5「恩宠」→ %NAME% 遗忘 [钢之意志]）',
  // 同伴学钢之意志
  city_lb_chara_get_im_template:
    '《神圣的一步半》（5「恩宠」→ %NAME% 习得 [钢之意志]）',
  // 同伴忘钢之意志
  city_lb_chara_rm_im_template:
    '《连迟钝的男性也能一举拿下！恋爱赛场的极意》（10「恩宠」→ %NAME% 遗忘 [钢之意志]）',
  // 玩家提高性技等级上限
  city_lb_update_abl_limit:
    '《性技提升入门读物——色欲之环出版社出版》（66「恩宠」）',
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
      await printAndWait('……读了什么？');
    } else if (get_or_rm) {
      await printAndWait([
        target.get_colored_name(),
        ' 习得了 ',
        iron_mind,
        '！',
      ]);
    } else {
      await printAndWait([
        target.get_colored_name(),
        ' 遗忘了 ',
        iron_mind,
        '！',
      ]);
    }
  },
  city_lb_bye: '欢迎下次光临～',
  city_bt_arcade: '「抽奖箱」',
  city_ac_welcome: '欢迎来到目白城！要在这里试试手气吗？',
  city_ac_confirm: '要使用 2「恩宠」抽奖吗？',
  /**
   * 目白城中大奖
   * @param {function(TextContent):Promise} waiter_say_cb 服务生说话的回调函数
   */
  async handle_ac_grand_prize(waiter_say_cb) {
    await waiter_say_cb('中～大～奖～啦～');
    await waiter_say_cb('奖券金十倍奉上！');
    await printAndWait('获得了 20「恩宠」！');
  },
  city_bt_newspaper: '「报社」',
  /**
   * 报社开头
   * @param {function(TextContent):Promise} waiter_say_cb 服务生说话的回调函数
   */
  async city_newspaper_start(waiter_say_cb) {
    await waiter_say_cb('欢迎光临～');
    await waiter_say_cb('目白城报社可以帮您恢复名誉、传播名气。');
  },
  city_ns_welcome: '有什么可以帮您的？',
  city_ns_button_template: '%PRICE%「恩宠」→ %HONOUR1%～%HONOUR2% 声望',
  city_ns_result_template: '好的，%HONOUR% 声望，马上为您办理～',
  city_ns_bye: '谢谢惠顾！',
  city_bt_bank: '「银行」',
  city_bn_start: '欢迎光临～',
  city_bn_welcome: '要办理取款业务吗？',
  city_bn_button_template: '%PRICE%「恩宠」→ %MONEY1%～%MONEY2% 马币',
  city_bn_result_template: '好的，取款 %MONEY% 马币，马上为您办理～',
  city_bn_bye: '请慢走～',
  city_bt_gov: '「市政府」',
  /**
   * 市政府，转换目白城形态
   * @param {CharaTalk} mayor
   * @returns {Promise<boolean>}
   */
  async handle_gov(mayor) {
    await mayor.say_and_wait('欢迎来到目白城。');
    await mayor.say_and_wait('请问有什么可以帮您的？');
    printButton('「请放过我……」', 1);
    printButton('没事', 2);
    if ((await input()) === 1) {
      print('（此操作不可逆，将永久性改变目白城风格！）', { color: 'red' });
      printButton('确定', 1);
      printButton('不了', 2);
      if ((await input()) === 1) {
        await mayor.say_and_wait('我明白了。');
        await mayor.say_and_wait(
          '您下次到访的时候，目白城会成为您希望的样子。',
        );
        await mayor.say_and_wait('再会。');
        return true;
      }
    }
    await mayor.say_and_wait('祝您和您的同伴在目白城玩得开心～');
    return false;
  },
  async city_notify_misty() {
    await printAndWait('你们走出店铺，眼前却已不是街道，而是郊景。');
    await printAndWait('回头望时，目白城已再次为迷雾笼罩……');
  },
};
