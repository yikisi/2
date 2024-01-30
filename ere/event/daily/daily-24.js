const era = require('#/era-electron');

const {
  sys_change_attr_and_print,
  sys_change_motivation,
} = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_change_money } = require('#/system/sys-calc-flag');

const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const event_hooks = require('#/data/event/event-hooks');
const CharaTalk = require('#/utils/chara-talk');
const chara_talk = new CharaTalk(24);

/**
 * 重炮的日常事件，id=24
 *
 * @author 黑奴二号
 */
module.exports = {
  override: true, //override设为true会跳过默认的数值结算，反之则会套用默认的数值结算
  /**
   * @param {HookArg} stage_id
   * @param {any} extra_flag
   * @param {EventObject} event_object
   * @returns {Promise<boolean>}
   */
  async run(stage_id, extra_flag, event_object) {
    if (event_object) {
      throw new Error('unsupported hook!');
    }
    const chara_name = era.get('callname:24:-2'), //角色称呼
      your_name = era.get('callname:0:-2'), //玩家称呼
      relation = era.get(`relation:24:0`),
      sex = era.get('cflag:24:性别') === 1 ? '他' : '她', //角色性别
      motivation = era.get('cflag:24:干劲'); //干劲（影响谈话）
    let talk_arr, ret, temp;
    switch (stage_id.hook) {
      case event_hooks.good_morning: //早安问候
        if (era.get('base:24:体力') === era.get('maxbase:24:体力')) {
          //满体力情况下
          if (relation > 75) {
            //判断好感，融洽及以上对话
            talk_arr = [
              '叮当叮当──♪人家来叫你起床啰～☆',
              '早安！耶嘿嘿～因为一早就想让训练员看到，所以就飞奔过来了！',
            ];
          } else {
            //判断好感，融洽以下对话
            talk_arr = [
              '早安──！今天人家也要充满活力地起飞！',
              '训练员，早安！你该不会是～正在找人家吧？耶嘿嘿，在这里啦～♪',
            ];
          }
        } else if (era.get('status:24:熬夜')) {
          //熬夜情况下对话
          if (relation > 75) {
            //判断好感，融洽及以上对话
            talk_arr = [
              '呼啊……今天为了做便当所以很早起。……耶嘿嘿，好好期待中午吧♪」',
            ];
          } else {
            talk_arr = [
              '呼啊……昨天跟帝王一起熬夜了～虽然很想睡觉，但觉得自己有点像大人的感觉……',
            ];
          }
        } else {
          //其他情况下的早安问候
          if (relation > 75) {
            //判断好感，融洽及以上对话
            talk_arr = [
              '嗳嗳！要来做训练吗？人家随时都能跟你走喔☆走向幸福长久的未来！」',
              '锁定目标☆` 用训练员的笑容补充今天的动力～♪',
            ];
          } else {
            talk_arr = [
              '训练员～！我们今天要做什么训练啊？我随时都能紧急起飞哦！',
              '走吧，训练员！` 今天也要起飞去寻找令人期待、闪闪发亮的事情哦！',
            ];
          }
        }
        chara_talk.say(`${get_random_entry(talk_arr)}`);
        break;
      case event_hooks.talk: //谈话
        switch (motivation) {
          case -2: //干劲极差
            talk_arr = [
              '奇怪……？怎么身体好像不听使唤……？人家这是怎么了啊……？',
              '嗯嗯～？精神好像有种急遽下降的感觉……？',
            ];
            break;
          case -1: //干劲较差
            if (relation > 75) {
              //判断好感，融洽及以上对话
              talk_arr = [
                '人家会努力的，所以等一下要给我奖励唷？不然好像提不太起劲……',
                '不用担心！人家常常突然就状态转好的！所以状态稍微不好也没问题的！',
              ];
            } else {
              talk_arr = [
                '唔唔……好像状态不太好的感觉。人家快要坠机了～',
                '我现在不想要努力了啦！不管谁来说什么！不想做的事情就是不想做──！',
              ];
            }
            break;
          case 0: //干劲普通
            if (relation > 75) {
              //判断好感，融洽及以上对话
              talk_arr = [
                '跟训练员一起训练就会很开心！所以就会有想要努力的感觉哦！',
                '不可以让人家感觉到腻哦？虽然我觉得跟训练员在一起是不会腻的。',
              ];
            } else {
              talk_arr = [
                '准备OK！！Maya随时都可以起飞哦',
                '视线良好！静待指令！准备好下达指示了吗？我随时都可以起飞了哦！',
              ];
            }
            break;
          case 1: //干劲良好
            if (relation > 75) {
              //判断好感，融洽及以上对话
              talk_arr = [
                '训练员！你不觉得人家现在看起来很闪闪发亮吗？耶嘿嘿♪',
                '人家会努力的～！做得好要记得称赞我哦☆',
              ];
            } else {
              talk_arr = [
                '能不能找到什么令人兴奋的事情来做呢～♪',
                '嗯嗯嗯！身体很轻很灵活！人家感觉可以跑很远喔～！',
              ];
            }
            break;
          case 2: //干劲极佳
            if (relation > 75) {
              //判断好感，融洽及以上对话
              talk_arr = [
                '只要是和训练员一起，做什么好像都会很有趣呢！我还是第一次有这种感觉！',
                `人家一定会成为闪闪发亮的成熟赛${chara_talk.get_uma_sex_title()}！所以请你要在最近的地方看着人家喔！`,
              ];
            } else {
              talk_arr = [
                '什么样的训练都尽管来吧！我会咻～地一下就做完的！',
                '人家的状态不断上升中喔！感觉能有非常闪闪发亮的表现！',
              ];
            }
            break;
        }
        await chara_talk.say_and_wait(`${get_random_entry(talk_arr)}`);
        break;
      case event_hooks.out_river: //河边外出
        switch (Math.floor(Math.random() * 3)) {
          case 0:
            await chara_talk.say_and_wait(
              `训练员，你要点什么～？人家要点温度选更热，再加上蜂蜜鲜奶油的客制特调……`,
            );
            era.printButton('你在说什么？', 0);
            await chara_talk.say_and_wait(
              `饮料啦！真是的，要走在这条路上的话，手上就一定要拿一杯咖啡才行！`,
            );
            await chara_talk.say_and_wait(
              `走过这条路之后，我再把我的咖啡给训练员♪`,
            );
            await chara_talk.say_and_wait(`训练员！摆个好看的姿势！`);
            await chara_talk.say_and_wait(`三、二、一！`);
            await chara_talk.say_and_wait(`…………`);
            era.println();
            sys_change_motivation(24, 1); //干劲+1
            sys_like_chara(24, 0, get_random_value(10, 20)); //好感上升随机10-20
            await era.waitAnyKey();
            break;
          case 1:
            await chara_talk.say_and_wait(
              `河堤感觉像飞机的跑道一样…………在上面奔跑的话，好像要起飞一样～`,
            );
            await chara_talk.say_and_wait(`训练员，来追我吧☆`);
            era.printButton('小心不要摔下来哦', 0);
            await chara_talk.say_and_wait(`没关系啦，我相信训练员会接住我的！`);
            await era.printAndWait(`之后，${your_name}继续和摩耶重炮约会……`);
            era.println();
            sys_change_motivation(24, 1); //干劲+1
            sys_like_chara(24, 0, get_random_value(10, 20)); //好感上升随机10-20
            await era.waitAnyKey();
            break;
          case 2:
            await era.printAndWait(`和重炮一起去了河边钓鱼。`);
            await chara_talk.say_and_wait(
              `和训练员一起钓鱼约会……感觉像是成熟的大人才会做的事呢～咻～`,
            );
            switch (Math.floor(Math.random() * 2)) {
              case 0:
                await chara_talk.say_and_wait(
                  `Maya明白了！只要这样做…………啊！上钩了！`,
                );
                await era.printAndWait(`摩耶重炮似乎很快掌握了诀窍。`);
                era.println();
                sys_change_motivation(24, 1); //干劲+1
                sys_like_chara(24, 0, get_random_value(20, 30)); //成功时好感上升随机20-30
                await era.waitAnyKey();
                break;
              case 1:
                await chara_talk.say_and_wait(
                  `啊啊……好无聊啊…………为什么这么久还没有鱼上钩呢？`,
                );
                await era.printAndWait(
                  `由于缺乏耐心，摩耶重炮并没有什么收获。`,
                );
                era.println();
                sys_change_motivation(24, 1); //干劲+1
                sys_like_chara(24, 0, get_random_value(5, 10)); //失败时好感上升随机5-10
                await era.waitAnyKey();
                break;
            }
            break;
        }
        break;
      case event_hooks.out_church: //神社外出
        await chara_talk.say_and_wait(
          `听说这里求姻缘的签很有名♪训练员，我们也来求吧！——`,
        );
        await chara_talk.say_and_wait(
          `虽然就算不求神问卜，我们也很登对☆……不过感觉能让人心动！`,
        );
        await era.printAndWait(`为了满足摩耶重炮的希望，\n决定抽“姻缘签”了。`);
        await chara_talk.say_and_wait(`抽到签了吗？给人家看给人家看！`);
        switch (Math.floor(Math.random() * 3)) {
          case 0:
            await chara_talk.say_and_wait(`未来……会有进展？`);
            await chara_talk.say_and_wait(
              `咦………………Maya的努力，完全没传达到吗？`,
            );
            era.println();
            sys_change_motivation(24, 1); //干劲+1
            sys_like_chara(24, 0, get_random_value(0, 5)); //好感上升随机0-5
            await era.waitAnyKey();
            break;
          case 1:
            await chara_talk.say_and_wait(`感……感情还算好……！？`);
            await chara_talk.say_and_wait(`还算……还算……还算是……算怎样……？`);
            era.println();
            sys_change_motivation(24, 1); //干劲+1
            sys_like_chara(24, 0, get_random_value(10, 20)); //好感上升随机10-20
            await era.waitAnyKey();
            break;
          case 2:
            await chara_talk.say_and_wait(
              `……哇！！“热恋一直线”！！真是太棒了～♪`,
            );
            await chara_talk.say_and_wait(`嘿嘿嘿～～连神明都认可我们吗～～～`);
            era.println();
            sys_change_motivation(24, 1); //干劲+1
            sys_like_chara(24, 0, get_random_value(20, 30)); //好感上升随机20-30
            await era.waitAnyKey();
            break;
        }
        era.println();
        if (era.get('status:24:练习X手') < 0 && Math.random() < 0.5) {
          era.set('status:24:练习X手', 0); // 有练习X手时50%概率消除
          era.print(`${chara_name} 的训练似乎更加顺利了……`);
        }
        await era.waitAnyKey();
        break;
      case event_hooks.out_shopping: //商店街外出
        sys_change_money(-5);
        era.print('一起前往商店街的哪里呢？');
        era.printButton('去唱卡拉OK吧', 0);
        era.printButton('去街机厅吧', 1);
        era.printButton('去购物吧', 2);
        ret = await era.input();
        if (!ret) {
          //卡拉OK
          await era.printAndWait(`与 ${chara_name} 一同去了卡拉OK……`);
          await chara_talk.say_and_wait(`今天一定要用我的歌声迷住训练员！`);
          await chara_talk.say_and_wait(`怎么样，有感受到Maya的魅力吗？`);
          era.printButton('很可爱！', 0);
          era.printButton('很性感！', 1);
          ret = await era.input();
          if (!ret) {
            await chara_talk.say_and_wait(
              `唔……！难道训练员认为这样的歌曲对人家来说还太早了！？`,
            );
            era.printButton('并没有那个意思哦。', 0);
            await chara_talk.say_and_wait(
              `嗯嗯……也就是说，人家的魅力不只是性感而已！`,
            );
            await era.printAndWait(
              `虽然好像有点误会，不过摩耶重炮的心情变得很好。`,
            );
          } else {
            await chara_talk.say_and_wait(`好耶～♪我就知道训练员会这么说！`);
            await chara_talk.say_and_wait(`训练员真的是超级爱人家耶～♪`);
          }
          await era.printAndWait(`与 ${chara_name} 一起度过了一段愉快的时光。`);
          era.println();
          sys_change_motivation(24, 2); //干劲+2
          sys_like_chara(24, 0, get_random_value(0, 10)); //好感上升随机0-10
          await era.waitAnyKey();
        } else if (ret === 1) {
          //抓娃娃机
          await era.printAndWait(`与 ${chara_name} 一同去了街机厅……`);
          await chara_talk.say_and_wait(`哇～～～！训练员，快看快看！`);
          await chara_talk.say_and_wait(`你看，那个玩偶──`);
          await era.printAndWait(
            `${your_name}往摩耶重炮指示的方向看去，那里摆了一台里面装着赛${chara_talk.get_uma_sex_title()}主题玩偶的夹娃娃机。`,
          );
          await chara_talk.say_and_wait(
            `那个是嘚嘚玩偶吧！超可爱的～我好想要～！`,
          );
          await chara_talk.say_and_wait(`不过，我零用钱快花光了……`);
          await era.printAndWait(
            `原本双眼还闪闪发亮的摩耶重炮顿时失落了起来。`,
          );
          era.printButton('我来夹给你吧？', 0);
          await chara_talk.say_and_wait(`真的吗！？那人家会在旁边加油的！！`);
          await chara_talk.say_and_wait(`上啊上啊，加油加油！训练员♪`);
          switch (Math.floor(Math.random() * 3)) {
            case 0:
              await chara_talk.say_and_wait(`呜，好可惜～就差那么一点了……！`);
              era.printButton('抱歉啊……', 0);
              await chara_talk.say_and_wait(`哇，别放在心上，训练员！！`);
              await chara_talk.say_and_wait(`你为了人家那么努力，我很开心了！`);
              await era.printAndWait(
                `虽然什么都没夹到，不过摩耶重炮还是很开心。`,
              );
              era.println(); //失败
              sys_change_motivation(24, 1); //干劲+1
              sys_like_chara(24, 0, get_random_value(10, 20)); //好感上升随机0-10
              await era.waitAnyKey();
              break;
            case 1:
              await chara_talk.say_and_wait(`太棒了！训练员，谢谢你！`);
              await chara_talk.say_and_wait(
                `看到训练员在夹娃娃时那认真的样子，让我忍不住心动了一下……♪`,
              );
              await chara_talk.say_and_wait(
                `嘿嘿，要装饰在哪里呢～？这可是我和训练员的回忆，好犹豫哦！`,
              );
              await era.printAndWait(`摩耶重炮似乎很开心。`);
              era.println(); //成功
              sys_change_motivation(24, 1); //干劲+1
              sys_like_chara(24, 0, get_random_value(10, 20)); //好感上升随机10-20
              sys_change_money(5); // 抓到娃娃就返还马币
              await era.waitAnyKey();
              break;
            case 2:
              await chara_talk.say_and_wait(
                `哇～好可爱～！而且这么多只！好厉害！！`,
              );
              await chara_talk.say_and_wait(
                `嘿嘿，都要感谢训练员为了帮我而这么地努力。`,
              );
              await chara_talk.say_and_wait(`人家啊，现在超……开心的！！`);
              await chara_talk.say_and_wait(
                `我会把这些玩偶当成训练员，每天抱紧紧的！`,
              );
              await era.printAndWait(`摩耶重炮似乎非常开心。`);
              era.println(); //大成功
              sys_change_motivation(24, 2); //干劲+2
              sys_like_chara(24, 0, get_random_value(20, 30)); //好感上升随机20-30
              sys_change_money(5); // 抓到娃娃就返还马币
              await era.waitAnyKey();
              break;
          }
        } else {
          //购物
          await era.printAndWait(`与 ${chara_name} 一同去逛商店……`);
          switch (Math.floor(Math.random() * 2)) {
            case 0:
              await chara_talk.say_and_wait(
                `咦～好可爱～♪这个不会太成熟吗？可是有点反差会不会更可爱啊？`,
              );
              await chara_talk.say_and_wait(
                `这种时候……训练员！陪Maya一起伤脑筋吧～！`,
              );
              await chara_talk.say_and_wait(
                `现在正在打折♪我要买很多可爱的衣服～♪`,
              );
              await chara_talk.say_and_wait(
                `然后然后，就开始犹豫了啦～！因为这个月的零用钱有点吃紧！`,
              );
              await chara_talk.say_and_wait(
                `这件在重点设计上有搭配最新配件，可说是技巧性穿搭！`,
              );
              await chara_talk.say_and_wait(
                `而这件是可爱却又具有机动性，服饰店的姐姐说这件的实用性超猛！`,
              );
              await chara_talk.say_and_wait(
                `呐，训练员！你觉得哪件比较适合重炮～？`,
              );
              era.printButton('有最新技巧的穿搭！', 0);
              era.printButton('具机动性的实用穿搭！', 1);
              ret = await era.input();
              if (!ret) {
                await chara_talk.say_and_wait(
                  `就是啊～！Maya也是这么想的！还是得走在流行的最前端才行呢♪`,
                );
                await chara_talk.say_and_wait(`店员～不好意思～！`);
                await chara_talk.say_and_wait(
                  `感觉人家距离成为成熟的女人又更近了一步……！`,
                );
              } else {
                await chara_talk.say_and_wait(
                  `我懂～！机动性高就比较不容易累，出去玩的时候就能更尽兴了呢♪`,
                );
                await chara_talk.say_and_wait(`就决定是这件了！好──去买吧♪`);
                await chara_talk.say_and_wait(
                  `好啦，训练员，出发！今天的约会可还没有结束哦？`,
                );
              }
              era.println();
              sys_change_motivation(24, 1); //干劲+1
              sys_like_chara(24, 0, get_random_value(10, 20)); //好感上升随机10-20
              await era.waitAnyKey();
              break;
            case 1:
              await chara_talk.say_and_wait(
                `咦～是卖点心的地方耶！Maya有好多想尝试的零食呢！`,
              );
              era.printButton('注意体重，只能选一样哦。', 0);
              await chara_talk.say_and_wait(`呣……好吧……到底要选哪个好～！？`);
              await chara_talk.say_and_wait(
                `要选季节限定！全新口味的“刺激成瘾胡萝卜脆片”吗～？`,
              );
              await chara_talk.say_and_wait(
                `还是要选重炮个人推荐必买的“超甜甜巧克力”呢？`,
              );
              await chara_talk.say_and_wait(
                `唔唔～选不出来啦～训练员，你来帮人家选吧！`,
              );
              era.printButton('挑战新口味！', 0);
              era.printButton('必买的最棒！', 1);
              ret = await era.input();
              if (!ret) {
                await chara_talk.say_and_wait(
                  `对吧对吧！缺乏刺激可不行呢♪虽然我很怕辣，但还是挑战一下吧！`,
                );
                await era.printAndWait(
                  `虽然最后摩耶重炮被辣的满脸通红，但还是努力把零食吃完了。`,
                );
              } else {
                await chara_talk.say_and_wait(
                  `这样啊～果然选择点心时安定感很重要对吧。`,
                );
                await chara_talk.say_and_wait(
                  `毕竟要是吃到不喜欢的会很失望嘛！好──那我就决定选这个了！`,
                );
                await chara_talk.say_and_wait(
                  `我们一起分着吃吧！训练员，啊————`,
                );
                await era.printAndWait(
                  `和名字相同，摩耶重炮挑选的巧克力非常的甜。`,
                );
              }
              era.println();
              sys_change_motivation(24, 1); //干劲+1
              sys_like_chara(24, 0, get_random_value(10, 20)); //好感上升随机10-20
              await era.waitAnyKey();
              break;
          }
        }
        break;
      case event_hooks.out_station:
        sys_change_money(-5); // 车站固定-5
        era.print('一起前往车站做什么呢？');
        era.printButton('吃饭', 0);
        era.printButton('约会', 1);
        era.printButton('看电影', 2);
        ret = await era.input();
        switch (ret) {
          case 0: //吃饭
            await chara_talk.say_and_wait(`约会，约会☆训练员，我们要去哪♪`);
            switch (Math.floor(Math.random() * 3)) {
              case 0:
                await chara_talk.say_and_wait(`啊哇哇哇哇哇…………`);
                await chara_talk.say_and_wait(
                  `Maya……Maya是成熟的大人了，一定能吃完的！`,
                );
                await era.printAndWait(
                  `和摩耶重炮一起品尝了中华料理，虽然${sex}不擅长吃辣，但还是挑战了传说中的麻婆豆腐…………`,
                );
                break;
              case 1:
                await chara_talk.say_and_wait(`训练员，来喂我吃嘛！啊………………`);
                await era.printAndWait(
                  `和摩耶重炮一起去了家庭餐厅，朴素的菜肴也让两人吃的很开心。`,
                );
                break;
              case 2:
                await chara_talk.say_and_wait(
                  `难…………难道这就是传说中的烛光晚餐！`,
                );
                await chara_talk.say_and_wait(
                  `Maya今天终于要迈上大人的阶梯了吗？`,
                );
                await era.printAndWait(
                  `和摩耶重炮一起去了西餐厅，优雅的氛围让${sex}的心里小鹿乱撞。`,
                );
                break;
            }
            temp = sys_change_attr_and_print(
              24,
              '体力',
              get_random_value(0, 50),
            ); //角色体力加0-50
            temp.length &&
              era.print(
                [{ content: `${chara_name} 的 ` }, ...temp, { content: '！' }],
                {
                  isList: true,
                },
              );
            sys_like_chara(24, 0, get_random_value(0, 10)); //好感上升随机0-10
            break;
          case 1: //约会
            switch (Math.floor(Math.random() * 2)) {
              case 0:
                await era.printAndWait(`和摩耶重炮约好在车站见面。`);
                await chara_talk.say_and_wait(
                  `训练员来了来了～！那我们一起去约会吧♪`,
                );
                await chara_talk.say_and_wait(
                  `嗳，像这样约定见面，不觉得很有……情侣的感觉吗？`,
                );
                await chara_talk.say_and_wait(
                  `开玩笑的啦！有心跳加速吗？开始在意人家了对吧？`,
                );
                await chara_talk.say_and_wait(
                  `用大人的魅力动摇人心作战”非常成功呢☆`,
                );
                await era.printAndWait(
                  `虽然不太想承认，但${your_name}或许真的被摩耶重炮迷住了也说不定。`,
                );
                break;
              case 1:
                await era.printAndWait(`和摩耶重炮在车站旁的大街上散步。`);
                await chara_talk.say_and_wait(`哇……今天街上的人好多……`);
                await chara_talk.say_and_wait(
                  `训练员，为了避免走散，我们来牵手吧！`,
                );
                await chara_talk.say_and_wait(
                  `嘿嘿……像这样牵手一起散步，有没有情侣的感觉呢♪`,
                );
                await era.printAndWait(
                  `虽然在旁人看来，或许更像成人在带孩子吧………但无论如何，摩耶重炮开心就好。`,
                );
                break;
            }
            sys_like_chara(24, 0, get_random_value(20, 30)); //好感上升随机20-30
            break;
          case 2: //看电影
            await era.printAndWait(`和摩耶重炮一起去看了新上映的电影。`);
            switch (Math.floor(Math.random() * 2)) {
              case 0:
                await chara_talk.say_and_wait(`训练员训练员！刚才你看到了吗！`);
                await chara_talk.say_and_wait(
                  `是飞机耶！还是Maya的爸爸驾驶的！`,
                );
                await chara_talk.say_and_wait(`总有一天Maya也要在蓝天上翱翔☆`);
                await chara_talk.say_and_wait(`所以训练员一定要跟住我哦？`);
                await era.printAndWait(
                  `不知是不是偶然，似乎正好碰到了摩耶重炮的父亲出演的动作片，摩耶重炮非常开心。`,
                );
                break;
              case 1:
                await chara_talk.say_and_wait(
                  `犯人果然是那个人啊！Maya可是一开始就猜到了！`,
                );
                await chara_talk.say_and_wait(
                  `怎么样，Maya很聪明吧♪训练员再夸夸我也可以哦？`,
                );
                await era.printAndWait(
                  `虽然摩耶重炮猜到了结果，但似乎也有好好的享受到乐趣？`,
                );
                break;
            }
            temp = sys_change_attr_and_print(
              0,
              '体力',
              get_random_value(0, 50),
            ); //玩家体力随机回复0-30
            temp.length &&
              era.print(
                [{ content: `${your_name} 的 ` }, ...temp, { content: '！' }],
                {
                  isList: true,
                },
              );
            temp = sys_change_attr_and_print(
              24,
              '体力',
              get_random_value(0, 50),
            ); //角色体力随机回复0-30
            temp.length &&
              era.print(
                [{ content: `${chara_name} 的 ` }, ...temp, { content: '！' }],
                {
                  isList: true,
                },
              );
            sys_like_chara(24, 0, get_random_value(0, 10)); //好感上升随机0-10
            break;
        }
        break;
      case event_hooks.school_atrium:
        era.print('一起前往中庭做什么呢？');
        era.printMultiColumns([
          {
            accelerator: 0,
            config: { align: 'center', width: 12 },
            content: '去看看枯树洞吧',
            type: 'button',
          },
          {
            accelerator: 100,
            config: { align: 'center', width: 12 },
            content: '去约会吧',
            type: 'button',
          },
        ]);
        ret = await era.input();
        await chara_talk.say_and_wait(
          !ret
            ? `人家可是成熟的${chara_talk.get_adult_sex_title()}，才，才不会哭的？`
            : `去约会吧！人家要和训练员成为学园里最般配的情侣！`,
        );
        break;
      case event_hooks.school_rooftop:
        await chara_talk.say_and_wait(`Maya给训练员做了便当哦，来一起吃吧！`);
        break;
      default:
        throw new Error('unsupported hook!');
    }
    return false;
  },
};
