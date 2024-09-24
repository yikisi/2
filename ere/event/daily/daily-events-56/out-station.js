const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const FukuEventMarks = require('#/data/event/edu-event-marks/edu-event-marks-56');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  hook.arg = await select_action_in_station(56);
  const callname = sys_get_callname(56, 0),
    edu_marks = new FukuEventMarks(),
    kitaru = get_chara_talk(56),
    me = get_chara_talk(0),
    message = [];
  switch (hook.arg) {
    case 0:
      message.push(
        async () => {
          await kitaru.say_and_wait([
            callname,
            '，那家店的苹果派看起来很不错的样子！',
          ]);
          await kitaru.say_and_wait('要试试吗？');
        },
        async () => {
          await kitaru.say_and_wait('现在是吃饭的吉时呢！');
          await kitaru.say_and_wait('要一起去吃吗？');
        },
      );
      break;
    case 1:
      message.push(
        async () => {
          await kitaru.say_and_wait('唔！感觉过于庄重的服饰不是很适合我呢！');
          await kitaru.say_and_wait('当然！巫女服除外啦！');
          await kitaru.say_and_wait('这件怎么样？');
          switch (get_random_value(0, 3) - !(kitaru.sex_code - 1)) {
            case 0:
              await era.printAndWait([
                '穿着带着可爱花纹的连衣裙，从更衣室出来后的 ',
                kitaru.get_colored_name(),
                ' 如此询问 ',
                me.get_colored_name(),
                '。',
              ]);
              await era.printAndWait([
                '有些清凉的着装露出了',
                kitaru.sex,
                '诱人的白皙双肩。',
              ]);
              break;
            case 1:
              await era.printAndWait([
                '如上班族一般的衬衫配着领带，从更衣室出来后的 ',
                kitaru.get_colored_name(),
                ' 如此询问 ',
                me.get_colored_name(),
                '。',
              ]);
              await era.printAndWait(
                '双腿换上了符合职场风格的黑色丝袜，恰到好处的丹数使其微微透着肉色。',
              );
              break;
            case 2:
              await era.printAndWait([
                '用于正式场合的礼服，从更衣室出来后的 ',
                kitaru.get_colored_name(),
                ' 如此询问',
                me.get_colored_name(),
              ]);
              await era.printAndWait([
                '礼服的裙摆在',
                kitaru.sex,
                '的转身中扬起，露出的腿环在肉感的大腿上勒出了明显的痕迹。',
              ]);
              break;
            case 3:
              await era.printAndWait([
                '不知道从哪里翻出来的旗袍，从更衣室出来后的 ',
                kitaru.get_colored_name(),
                ' 如此询问',
                me.get_colored_name(),
              ]);
              await era.printAndWait([
                '颇为修身的旗袍，隐约可以听到胸部布料的哀嚎悲鸣。',
              ]);
          }
          await kitaru.say_and_wait(['喂！', callname, ' 在看哪里呢？']);
        },
        async () => {
          await kitaru.say_and_wait('嘿！');
          await kitaru.say_and_wait('握手术！');
          await kitaru.say_and_wait('据说能把运气传递给别人呢！');
          await era.printAndWait('之后在其他人的注视下像情侣一样越靠越紧。');
        },
      );
      if (era.get('love:56') >= 50 && era.get('exp:56:接吻次数')) {
        message.push(async () => {
          await kitaru.say_and_wait(['那个……', callname, '！']);
          await kitaru.say_and_wait('啾！');
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' 亲了 ',
            me.get_colored_name(),
            ' 一下。',
          ]);
          await era.printAndWait(
            '与其说是接吻、不如说是把嘴唇和嘴唇撞在了一起。',
          );
        });
      }
      break;
    case 2:
      message.push(async () => {
        let branch;
        if (era.get('love:56') >= 75) {
          if (edu_marks.haircut === 0) {
            edu_marks.haircut = 1;
            await print_event_name('福来的发型', kitaru);
            await era.printAndWait([
              '再一次和 ',
              kitaru.get_colored_name(),
              ' 路过了商店街的发廊。',
            ]);
            await era.printAndWait(
              '路过店门时，目光不由自主的在那些海报停留了几眼。',
            );
            await kitaru.say_and_wait(['欸！', callname, ' 在看什么呢？']);
            await era.printAndWait([
              kitaru.get_colored_name(),
              ' 顺着 ',
              me.get_colored_name(),
              ' 的目光看去，在见到海报上那些有着精心保养发型的',
              kitaru.get_uma_sex_title(),
              '模特后，',
              kitaru.sex,
              '下意识的摸了摸自己日常乱糟糟的发型。',
            ]);
            await kitaru.say_and_wait(
              '啊啦！我平时倒是没有特别关注过自己的发型……',
            );
            await kitaru.say_and_wait([
              sys_get_colored_callname(56, 62),
              '，',
              sys_get_colored_callname(56, 74),
              '，',
              sys_get_colored_callname(56, 2),
              ' 的发型……',
            ]);
            await kitaru.say_and_wait([
              sys_get_colored_callname(56, 58),
              ' 倒是和我差不多',
            ]);
            await era.printAndWait([
              '的确，',
              me.get_colored_name(),
              ' 的担当 ',
              kitaru.get_colored_name(),
              ' 似乎本身就属于那种不怎么注意头发打理的，全凭',
              kitaru.get_uma_sex_title(),
              '自身发质特有的韧性维持了一个大概的稳定的状态而已。',
            ]);
            await kitaru.say_and_wait([
              '话说，',
              callname,
              ' 想看我留长发的样子吗？',
            ]);
            await kitaru.say_and_wait([
              '小学的时候倒是试着留过长发，但照镜子的时候，总是会想到照片里的',
              kitaru.get_bigger_sibling_sex_title(),
            ]);
            await kitaru.say_and_wait(['不过，如果 ', callname, ' 喜欢的话！']);
            await era.printAndWait([
              '看来 ',
              kitaru.get_colored_name(),
              ' 似乎被 ',
              me.get_colored_name(),
              ' 无心的行为勾起了莫名的危机感。',
            ]);
            branch = 1;
          } else {
            branch = await select_yes_or_no(
              ['要带 ', kitaru.get_colored_name(), ' 去发廊吗？'],
              '是',
              '否',
            );
            if (branch) {
              await kitaru.say_and_wait([callname, '，又想我换发型了吗？']);
              switch (era.get('cstr:56:后发')) {
                case '长直发':
                  await era.printAndWait([
                    '留着如瀑布般顺直的橙色长发的 ',
                    kitaru.get_colored_name(),
                    ' 回过头来看着 ',
                    me.get_colored_name(),
                    '。',
                  ]);
                  break;
                case '齐肩直发':
                  await era.printAndWait([
                    kitaru.get_colored_name(),
                    ' 回过头来看着 ',
                    me.get_colored_name(),
                    '，优雅的橙色发丝垂在肩头。',
                  ]);
                  break;
                case '外翼式':
                  await era.printAndWait([
                    kitaru.get_colored_name(),
                    ' 回过头来看着 ',
                    me.get_colored_name(),
                    '，粉颊边被香汗黏住了些发丝。',
                  ]);
              }
              branch = 1;
            } else {
              branch = 2;
            }
          }
        } else {
          branch = 2 + (Math.random() < 0.5);
        }
        switch (branch) {
          case 1:
            hook.override = true;
            await era.printAndWait([
              '那么，',
              me.get_colored_name(),
              ' 有什么想要让',
              kitaru.sex,
              '尝试的发型呢？',
            ]);
            era.printButton('齐肩直发', 1);
            era.printButton('垂到腰的长直发', 2);
            era.printButton('「现在的发型就很适合福来」', 3);
            switch (await era.input()) {
              case 1:
                era.set('cstr:56:后发', '齐肩直发');
                await era.printAndWait([
                  '在 ',
                  me.get_colored_name(),
                  ' 的建议下，',
                  kitaru.get_colored_name(),
                  ' 换成了齐肩的直发。',
                ]);
                await kitaru.say_and_wait('怎么样？');
                await era.printAndWait([
                  kitaru.get_colored_name(),
                  ' 侧过头来看着 ',
                  me.get_colored_name(),
                  '，柔顺的齐肩长发泛着蜂蜜般的橙黄色光芒。',
                ]);
                break;
              case 2:
                era.set('cstr:56:后发', '长直发');
                era.set('cflag:56:头发长度', 2);
                await era.printAndWait([
                  '在 ',
                  me.get_colored_name(),
                  ' 的建议下，',
                  kitaru.get_colored_name(),
                  ' 换成了垂到腰部的长直发。',
                ]);
                await kitaru.say_and_wait('长发……果然还是有些不习惯呢！');
                await era.printAndWait([
                  kitaru.get_colored_name(),
                  ' 不经意地用手指拢住垂到腰侧的发丝。',
                ]);
                await era.printAndWait('这样看来的确变得稳重了许多。');
                break;
              case 3:
                await era.printAndWait([
                  '在 ',
                  me.get_colored_name(),
                  ' 的建议下，',
                  kitaru.get_colored_name(),
                  ' 没有改变自己的发型。',
                ]);
                await kitaru.say_and_wait('嗯！果然还是这样比较好！');
                await era.printAndWait([
                  '看着 ',
                  kitaru.get_colored_name(),
                  ' 的样子，',
                  me.get_colored_name(),
                  ' 不禁伸手试了试',
                  kitaru.sex,
                  '蓬松橙发的柔软触感。',
                ]);
            }
            break;
          case 2:
            await kitaru.say_and_wait('喔！是新的占卜道具哦！');
            await era.printAndWait([
              me.get_colored_name(),
              '看着 ',
              kitaru.get_colored_name(),
              ' 指着那个以历代名',
              kitaru.get_uma_sex_title(),
              '为题材的塔罗牌。',
            ]);
            break;
          case 3:
            await kitaru.say_and_wait('想要看我留长发的样子吗？');
            await kitaru.say_and_wait('……抱歉');
            await era.printAndWait([
              '在路过发廊的时候，',
              kitaru.get_colored_name(),
              ' 支支吾吾的绕过了这个被 ',
              me.get_colored_name(),
              ' 提起的话题',
            ]);
        }
      });
  }
  await get_random_entry(message)();
};
