/**
 * @file 隔日清晨系列 - H事件
 * @author 雞雞
 * @author 黑奴队长
 */
const {
  get,
  input,
  printAndWait,
  printButton,
  setColor,
} = require('#/era-electron');

const { akuochi } = require('#/data/color-const');

const { degeneration_to_evil } = require('#/i18n/zh-CN/snippets');

module.exports = {
  naked_apron: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      const ret = [];
      await printAndWait([
        '早上醒来时，发现 ',
        chara.get_colored_name(),
        ' 已经不在床上了。',
      ]);
      await printAndWait([
        '起床梳洗后在厨房发现了',
        chara.sex,
        '的身影，对方似乎在准备早餐的样子，然而……',
      ]);
      await printAndWait([
        '浑身上下赤裸，只穿着围裙认真地准备早餐的 ',
        chara.get_colored_name(),
        ' 一边扭着可爱的屁股一边做菜的模样实在是——',
      ]);
      printButton('（可恶，忍不了了！）', 1);
      printButton('（数质数冷静下来吧……）', 2);
      ret.push(await input());
      if (ret[0] === 2) {
        await printAndWait([
          you.get_colored_name(),
          ' 抑制住了冲动，用理性向 ',
          chara.get_colored_name(),
          ' 打招呼。',
        ]);
      }
      return ret;
    };
    f.title = '隔日清晨之裸体围裙';
    return f;
  })(),
  blow_job: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {PrintedSpan} callname
     */
    const f = async (chara, you, callname) => {
      const ret = [];
      await printAndWait([
        '早上醒来时，',
        you.get_colored_name(),
        ' 自下身感受到一股异样的感觉。',
      ]);
      await printAndWait([
        '睁开眼睛后出现在眼前的是 ',
        chara.get_colored_name(),
        ' 光着身子用嘴巴吸吮着 ',
        you.get_colored_name(),
        ' 的',
        you.sex_code === 0 ? '阴蒂' : '阴茎',
        '的淫靡景象。',
      ]);
      const skill = get(`abl:${chara.id}:口交技巧`);
      await printAndWait([
        chara.get_colored_name(),
        ' ',
        get(`talent:${chara.id}:饮精成瘾`) > 0 ||
        get(`talent:${chara.id}:淫口`) > 0
          ? '贪婪'
          : skill > 2
            ? '熟练'
            : '生涩',
        '地',
        you.sex_code === 0 ? '舔舐着阴蒂' : '吞吐着阴茎',
        '，',
        you.get_colored_name(),
        ' 也不禁以手按住 ',
        chara.get_colored_name(),
        ' 的脑袋渴求更多的快感。',
      ]);
      printButton('（可恶，忍不了了！）', 1);
      printButton('（要去了……！）', 2);
      ret.push(await input());
      if (ret[0] === 2) {
        await printAndWait([
          '在 ',
          chara.get_colored_name(),
          ' 的早安口交下，',
          you.get_colored_name(),
          ' 很快就达到了高潮，',
          you.sex_code === 0 ? '爱液' : '精液',
          '尽数射进了 ',
          chara.get_colored_name(),
          ' 的樱桃小嘴当中。',
        ]);
        await chara.say_and_wait(['满嘴都是……', callname, ' 的味道呢……']);
        await printAndWait('欲望得以发泄之后，新的一天开始了……');
      }
      return ret;
    };
    f.title = '隔日清晨之早安口交';
    return f;
  })(),
  duty: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {string} your_title
     * @param {string} penis_desc
     */
    const f = async (chara, you, your_title, penis_desc) => {
      const ret = [];
      await printAndWait([you.get_colored_name(), ' 被击打脸颊的温热唤醒。']);
      if (chara.sex_code === 0) {
        await printAndWait([
          '折磨了 ',
          you.get_colored_name(),
          ' 一整晚的 ',
          chara.get_colored_name(),
          ' 又一次饮用了药物，屈尊用',
          chara.sex,
          '那根高贵的',
          penis_desc,
          '肉棒作为闹钟。',
        ]);
      } else {
        await printAndWait([
          '折磨了 ',
          you.get_colored_name(),
          ' 一整晚的 ',
          chara.get_colored_name(),
          ' 又一次屈尊用',
          chara.sex,
          '那根高贵的',
          penis_desc,
          '肉棒作为闹钟。',
        ]);
      }
      await printAndWait([
        '——提醒着 ',
        you.get_colored_name(),
        '，',
        you.sex,
        '还有未尽的义务。从早到晚，周而复始。',
      ]);
      ret.push(await degeneration_to_evil('顺从地含住', '厌恶地扭过脸去'));
      if (ret[0] === 1) {
        setColor(akuochi[1]);
        await printAndWait([
          '其实不劳费心，',
          you.get_colored_name(),
          ' 刚刚张开一点嘴唇，那根肉棒就迫不及待地捅了进来。',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' 刚刚张开一点嘴唇，那根肉棒就迫不及待地捅了进来。',
        ]);
        await printAndWait([
          '在 ',
          chara.get_colored_name(),
          ' 肆意地使用之下，',
          you.get_colored_name(),
          ' 温顺地用唇舌服侍着。',
        ]);
        await printAndWait([
          your_title,
          ' ',
          you.get_colored_actual_name(),
          '，今天也牢记着自己的职责……',
        ]);
      } else {
        setColor(akuochi[0]);
        await printAndWait([
          '即使沦落到这步田地，',
          you.get_colored_name(),
          ' 也是有尊严、至少是脾气的——',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' 只是微微扭开了脸、正打算如此主张时，早已失去耐心的 ',
          chara.get_colored_name(),
          ' 主人甩了 ',
          you.get_colored_name(),
          ' 一个耳光，提醒着 ',
          you.get_colored_name(),
          ' 现在到底是何等处境。',
        ]);
        await printAndWait([
          '随后，',
          chara.get_colored_name(),
          ' 不再希冀 ',
          you.get_colored_name(),
          ' 的配合，就开始自行取用这顿自助的早餐。',
        ]);
        await printAndWait([
          your_title,
          ' ',
          you.get_colored_actual_name(),
          '，今天也被灌输着、自己的职责……',
        ]);
      }
      setColor();
      return ret;
    };
    f.title = '隔日清晨之义务履行';
    return f;
  })(),
};
