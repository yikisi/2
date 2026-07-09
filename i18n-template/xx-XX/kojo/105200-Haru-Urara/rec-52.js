/**
 * @file 春乌拉拉 - 招募
 * @author 99
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} urara
   * @param {CharaTalk} inner_urara
   * @param {CharaTalk} you
   * @param {string} callname
   * @param {number} rec_mark
   */
  async recruit(urara, inner_urara, you, callname, rec_mark) {
    const ret = [];
    if (era.get('cflag:52:育成次数') > 0) {
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        '您又来了啊，想再听一遍相同的故事？还是有未完成的遗憾？',
      );
      await inner_urara.say_as_unknown_and_wait(
        '既然是您的选择，那就重新开始吧，期望您能在新的故事里得到答案。',
      );
      await inner_urara.say_as_unknown_and_wait(
        `与过往一致，这是一位渺小到不能再渺小的小${urara.uma_sex_title}的故事——`,
      );
    } else if (rec_mark) {
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        '这次的您做好准备了吗？希望这次您真有打算将故事带到结尾……我会期待着的。',
      );
      await inner_urara.say_as_unknown_and_wait(
        `那么，这是一位渺小到不能再渺小的小${urara.uma_sex_title}的故事——`,
      );
    } else {
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        '喂喂？听得见吗？既然您有在听，那么适当地开始讲这个故事吧。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '这个故事或许很普通，或许有些长，但是既然有所选择，那就听到底吧。',
      );
      await inner_urara.say_as_unknown_and_wait(
        `这是一位渺小到不能再渺小的小${urara.uma_sex_title}的故事——`,
      );
    }
    era.drawLine();
    await era.printAndWait(
      `坐在训练场的角落里躲避着刺眼的阳光，${you.name} 感到一阵眩晕。`,
    );
    await era.printAndWait(`虽然前几天也出现了这样的感觉，这次却更为明显了。`);
    await era.printAndWait(
      `尽管还不清楚缘由，但 ${you.name} 确实感觉到心中有什么东西在飞速流失着……`,
    );
    await era.printAndWait(`……`);
    await era.printAndWait(
      `实际上，在精英云集的中央特雷森里，最不缺的就是人才与天才。`,
    );
    await era.printAndWait(
      `不管是新人还是已经成为传奇，都总有更加优秀的人站在更高的山峰上，而 ${you.name} 似乎距离那里永远都只差一点。`,
    );
    await era.printAndWait(
      `即使通过堆砌起过去的砖石，尽全力将自己垫得更高，距离成为那『凤毛麟角』似乎也依旧遥不可及——`,
    );
    await era.printAndWait(
      `前人的经验没告诉过 ${you.name} 最后一点距离会如此遥远，这令 ${you.name} 感到有些挫败。`,
    );
    await era.printAndWait(
      `在那些更有天赋、甚至被誉为天才的同行面前，${you.name} 所能依靠的又只剩下『坚持住』。`,
    );
    await era.printAndWait(
      `尽管曾尝试过努力说服自己，但要使自己完全的心平气和也是不能的。`,
    );
    await era.printAndWait(
      `若是能够轻易接受自己对${urara.uma_sex_title}的理解被比下去的话，是没办法做好训练员的，而 ${
        you.name
      } 至少还存在着想要继续精进的想法。`,
    );
    await era.printAndWait(
      `心中怀揣着追求并想要继续前进，但能做到的也只有暂时顶住压力而已。`,
    );
    await era.printAndWait(
      `不过现在的 ${you.name} 没能想起来，比起强求打起精神，${you.name} 更需要的是尝试放下沉重的包袱，并为自己注入一点点小小的『希望』。`,
    );
    await era.printAndWait(
      `虽然，天永远不会遂人愿。在还没想好如何越过这道坎时，更大的问题也降了下来。`,
    );
    await era.printAndWait(
      `因感到压力而停不下来的 ${you.name}，在最近不断强迫自己加班后，其结果便是精神终于在此处达到了极限。`,
    );
    await era.printAndWait(
      `摇摇欲坠的 ${you.name} 此刻如断线木偶般的向一侧倒下去,不过在落地前，一抹樱粉色突然闯入了 ${you.name} 模糊的视线中。`,
    );
    await era.printAndWait(
      `随后在 ${
        you.name
      } 身边环绕传开的，则是一股由天真烂漫的${urara.teen_sex_title}所散发出的香气。`,
    );
    await era.printAndWait(
      `像是樱花的香气？别开玩笑了，淡薄如水的樱花怎会散发出如此令人安心的香气？`,
    );
    await era.printAndWait(
      `那……这是大脑过载后的幻觉？看来有人是真的累坏了啊……`,
    );
    await era.printAndWait(
      `无法拉住离开的意识，${you.name} 在断线的思绪中逐渐闭上眼睛。`,
    );
    await era.printAndWait(
      `不过在意识消失前，${you.name} 又切实地感受到有谁靠住了 ${you.name} 倒下的身体，并将 ${you.name} 温柔地抱在了怀中。`,
    );
    await era.printAndWait(
      `接触的瞬间，${urara.teen_sex_title}柔软的香气包裹住了 ${
        you.name
      } 的身心，似乎还夹带着运动结束后在体操服上留下的体香。`,
    );
    await urara.say_as_unknown_and_wait(
      `这位训练员？你还好吧？稍等一下！我马上送你去医务室！`,
    );
    await era.printAndWait(
      `身体在难以言说的安心感中到达了极限，${
        you.name
      } 怀着对这位前来搭救的${urara.uma_sex_title}的感激放飞了自己的意识。`,
    );

    era.drawLine();
    inner_urara.say_as_unknown(`在意识迷蒙之中，${callname}这样想（说）着——`);
    era.printButton(`「原来不是幻觉啊……」`, 1);
    era.printButton(`「……抱歉……」`, 2);
    era.printButton(`「是、是天使吗……？」`, 3);
    ret.push((ret['love'] = await era.input()));
    await inner_urara.say_as_unknown_and_wait(
      `是boy meet girl吗？哈哈～凭两人身份上的差距，无论如何都不会是吧。`,
    );
    await inner_urara.say_as_unknown_and_wait(`但是这样的相遇，意外的不坏？`);

    era.drawLine();
    await era.printAndWait(
      `伴随着熟悉的药品味道进入鼻腔，飞走的意识逐渐找到了躺在特雷森医务室中的身体。`,
    );
    await era.printAndWait(
      `缓缓醒来的 ${you.name} 在朦胧中享受着身旁柔软的触感，并非在说身下僵硬的床单，而是身侧熟睡的少女的。`,
    );
    await era.printAndWait(
      `即使没睁开眼睛，${
        you.name
      } 依旧能从身旁传来的香甜气息得知个大概：现在与 ${
        you.name
      } 共枕的，正是在晕倒时将 ${
        you.name
      } 搬到医务室的小${urara.uma_sex_title}。`,
    );
    era.println();

    await inner_urara.say_as_unknown_and_wait(
      `于是现在，醒来的${callname}打算——`,
    );
    era.printButton(
      `起床向${urara.sex}道谢。${
        you.name
      } 打算睁开眼睛，先观察${urara.teen_sex_title}的样子。`,
      1,
    );
    era.printButton(
      `但还是好累。${you.name} 打算继续闭着眼睛，继续感受来之不易的温柔乡。`,
      2,
      { disabled: urara.sex_code === 1 },
    );

    if ((await era.input()) === 2) {
      await era.printAndWait(`好像，已经好久都没觉得如此安心过了。`);
      await era.printAndWait(
        `闭着眼睛，${you.name} 向那股温暖的源头更进一步，甚至几乎要将${urara.sex}揽入怀中。`,
      );
      await era.printAndWait(
        `不论是熟睡中的柔软又有健康肉感的身体，还是仿佛朴素花香般的体味都令 ${you.name} 心旷神怡。`,
      );
      await era.printAndWait(
        `${urara.teen_sex_title}近在咫尺的吐息纯真地挑逗着 ${
          you.name
        } 的脖颈，这份丢失距离感的接触让 ${you.name} 的意识逐渐深陷其中。`,
      );
      await era.printAndWait(
        `${you.name} 也清楚对搭救了自己的学生做这样的事十分不妥，甚至对一名成年人来说过于下流了。`,
      );
      await era.printAndWait(
        `只是此刻 ${you.name} 的大脑却因精神需求，正强迫着 ${you.name} 的身体进行『更进一步』的指示。`,
      );
      await era.printAndWait(
        `在恍惚中，${you.name} 的手指攀上了小${urara.uma_sex_title}的身体。`,
      );
      await era.printAndWait(
        `从指尖接触到掌心的抚摸，${you.name} 用触觉测量着${urara.sex}意外娇小的轮廓与含苞待放的曲线；`,
      );
      await era.printAndWait(
        `一只手抚过${urara.teen_sex_title}身前的山丘，剐蹭着${urara.teen_sex_title}柔软的脸蛋与嘴唇，顺着柔顺的发丝；`,
      );
      await era.printAndWait(
        `手指摸索着探入耳套，享受着其中小小的耳朵的柔软；`,
      );
      await era.printAndWait(
        `另一只手则顺着柔软的后颈与脊背一路向下，滑进了${urara.teen_sex_title}被毛发遮盖的尾根处；`,
      );
      await era.printAndWait(
        `而除了那敏感的根部，甚至一拐手指就能从灯笼裤尾根处的洞中深入；`,
      );
      await era.printAndWait(
        `甚至只要再拨开一层衣物，触及到更深加秘密的『花园』……`,
      );
      await era.printAndWait(
        `只是就在 ${
          you.name
        } 还想继续深入之时，沉睡中的小${urara.uma_sex_title}开始抖动起耳朵和尾巴。`,
      );
      await era.printAndWait(
        `随着身体的轻微颤抖从喉咙中漏出了几点可爱的喘息声，这是即将醒梦的前兆。`,
      );
      await era.printAndWait(
        `看来不能再得寸进尺了。半梦半醒中的 ${you.name} 终于拿回了理智，并意识到已经该睁开眼睛了——`,
      );
      era.printButton('睁开眼睛', 1);
      await era.input();
    }

    await era.printAndWait(
      `睁开眼睛的瞬间，一抹樱粉色便映入了眼帘。绽开的樱状瞳孔与 ${you.name} 四目相对，散发着天真但不懵懂的点点微光。`,
    );
    await era.printAndWait(
      `这双清澈的眼睛先是不带一丝偏见与怀疑的观察着 ${you.name}，随后向 ${you.name} 投来了毫无恶意的笑容。`,
    );
    await era.printAndWait(
      `甩着自己樱色的马尾与红色缎带，如孩子般天真烂漫的小${urara.uma_sex_title}先 ${
        you.name
      } 一步从医务室的床上坐起来。`,
    );
    await era.printAndWait(
      `贴身的体操服透出了虽然幼态但意外匀称有致的身形，跪坐在床上的大腿与臀部与幼小的形象不符的丰满圆润；`,
    );
    await era.printAndWait(
      `呼之欲出的肉感在撑满三角下着的同时，也让贴身的布料在不经意间露出腰臀上留下了生动的勒痕；`,
    );
    await era.printAndWait(
      `再加上那测不准距离的娃娃脸，即使还很稚嫩，${urara.sex}都已展露出了独属于自己的『女性』魅力。`,
    );
    await era.printAndWait(
      `哪怕有不可抗力做借口，这可爱脸庞上的无暇笑容，还是让刚才享受与${urara.sex}同床共枕的 ${you.name} 产生了无法推脱的负罪感。`,
    );
    await urara.say_as_unknown_and_wait(
      '你是训练员对吧？身体怎么样？训练员真辛苦呢！但是不用勉强自己也可以哦！',
    );
    await era.printAndWait(
      `带着可爱的笑容与没有隔阂感的关照，樱色的小小${urara.uma_sex_title}毫无防备地靠向了 ${
        you.name
      }。`,
    );
    await era.printAndWait(
      `这时的 ${you.name} 才反应过来，${
        you.name
      } 还不知道这位出手相助的${urara.uma_sex_title}的名字。`,
    );
    era.println();

    era.printButton(`「谢谢你，请问你……？」`, 1);
    await era.input();

    await urara.say_and_wait(
      `我叫${urara.name}！因为看到训练员要倒在那里了，但是大家都不在身边，所以就把训练员搬到医务室里来了！`,
    );
    await urara.say_and_wait(
      `结果在等训练员醒来的时候，我不小心躺在旁边睡着了呢，诶嘿嘿～`,
    );
    await era.printAndWait(
      `看来确实被温柔地关照了，总感觉更对不起${urara.sex}了。`,
    );
    await urara.say_and_wait(`对了！训练员先生！下次要来看我的选拔赛吗？`);
    era.println();

    era.printButton(`「选拔赛？你的吗？」`, 1);
    await era.input();

    await era.printAndWait(
      `${you.name} 有些疑惑的看着乌拉拉，并非怀疑${urara.sex}缺乏觉悟或疏于锻炼，而是……`,
    );
    await era.printAndWait(
      `一目了然的，这位名叫春乌拉拉的${urara.uma_sex_title}有着闪光的品质，但目前的${
        urara.sex
      }就是不像有多能跑的样子。`,
    );
    await era.printAndWait(`至少现在的话，结果只会是竹篮打水罢了。`);
    await urara.say_and_wait(`嗯！我会拿下一着的！因为我感觉到了！所以……`);
    await era.printAndWait(
      `小小的${urara.uma_sex_title}还兴奋地想说些什么，直到无意间瞄到了墙上的挂钟。`,
    );
    await urara.say_and_wait(
      `啊！已经这个时间了！那么训练员也要注意身体哦！那么下次再见啦！`,
    );
    await era.printAndWait(
      `随着突然被注意到的时间，与乌拉拉的对话似乎就这样马马虎虎的中断了。`,
    );
    await era.printAndWait(
      `这可不是感觉说得算的啊！${you.name} 本想这样说，但心里冒出的一点点想要去看${urara.sex}的奔跑的想法又使 ${you.name} 没能张开口。`,
    );
    await era.printAndWait(
      `下次的确应该去看看也说不定？目送着乌拉拉蹦蹦跳跳地离开医务室，${you.name} 再次闭上了眼。`,
    );
    await era.printAndWait(`果然还是好累。`);
    era.drawLine();
    await inner_urara.say_as_unknown_and_wait(
      `或许是想要去见证，又或是连自己都没能察觉的某种情感，${callname}（${you.name}）还是来到了训练场。`,
    );
    era.drawLine();
    await you.say_as_passer_by_and_wait(
      '训练员A',
      '那孩子虽然很有感染力，但果然……',
    );
    await you.say_as_passer_by_and_wait(
      '训练员B',
      `是啊，已经能想到要训练这样的孩子会有多麻烦了，${urara.sex}似乎不适合这里。`,
    );
    await you.say_as_passer_by_and_wait(
      '训练员C',
      '虽然给人的感觉很舒服，但只是如此的话也没有意义啊。',
    );
    await era.printAndWait(
      `顺着周围人的窃窃私语，${you.name} 向赛场上望去。果不其然，${you.name} 的感觉是正确的。`,
    );
    await era.printAndWait(
      `乌拉拉的比赛已经开始了，而虽然只是最基本的选拔赛，但${urara.sex}还是被落在了最末尾。`,
    );
    await era.printAndWait(
      `周围的训练员也理所当然的不会长时间将目光放在${
        urara.sex
      }身上，即使有偶尔的几道视线重新扫过，也会很快移动到别的${urara.uma_sex_title}身上。`,
    );
    await era.printAndWait(
      `但是，原本也只是想对${urara.sex}投以简短关注的 ${you.name}，现在却被只有 ${you.name} 所侧目的${urara.sex}吸引了。`,
    );
    await era.printAndWait(
      `看着那决不会放弃奔跑的身影，微弱的鼓动开始在 ${you.name} 的心中逐渐聚集……`,
    );
    era.drawLine();
    await inner_urara.say_as_unknown_and_wait(
      `于是，现在的${callname}，或者说，现在的 ${you.name}……？`,
    );
    era.printButton(`「虽然还不明白，但意外的想要看下去。」（尝试招募）`, 1);
    era.printButton(
      `「${urara.sex}是个好孩子，但${urara.sex}还是太弱了，似乎也没有天赋，不过说不定会有更好的人能够帮助${urara.sex}。」（放弃招募）`,
      2,
    );
    ret.push((ret['rec'] = await era.input()));
    if (ret['rec'] === 1) {
      era.drawLine();
      await era.printAndWait(
        `顺应着心中的鼓动，${you.name} 决定继续关注那道小小的身影。`,
      );

      await era.printAndWait(
        `\n就算跑在最后，春乌拉拉仍在尽全力奔跑，明明挂起的是咬紧牙关的表情，能读出却满是开心。`,
      );
      await era.printAndWait(
        `${
          urara.sex
        }并非在追赶着前方的哪一位，也并不是再拼了命的要超过谁，名为『春乌拉拉』的${urara.uma_sex_title}只是在尽全力地享受着奔跑，仅此而已。`,
      );
      await era.printAndWait(
        `灵魂为之鼓动的理由逐渐明晰，尽管依旧跑在末尾，想为${urara.sex}加油打气的心情却逐渐充满了 ${you.name} 的内心。`,
      );
      await era.printAndWait(
        `随着不知何时由自己发出的呐喊声，高涨的思绪赶在思考之前以行动将自身变为了现实。`,
      );
      await era.printAndWait(
        `但这再怎么说也仅是一场简单的、一天就能经过好几轮的选拔赛而已，为这样的最后一名呐喊实在难以理解。`,
      );
      await era.printAndWait(
        `即使如此，这样的庸俗思考也没能使 ${you.name} 停下，至少此刻的 ${you.name} 并不在乎。`,
      );
      await era.printAndWait(
        `${you.name} 已做好了被奇怪与不屑所包围的准备，就像攀登最后一段无法达到的距离时，旁人所投来的目光。`,
      );
      await era.printAndWait(
        `但 ${you.name} 却惊讶地发现，随着 ${
          you.name
        } 的呼唤，有更多的${urara.uma_sex_title}开始声援起来，就连有些训练员们也开始为那个身影加油。`,
      );
      await era.printAndWait(
        `小小的水花逐渐扩散，最后的距离在呼喊声中不断减少。起始的 ${you.name} 身处这片呐喊的浪潮之中，触动随之涌上心头——`,
      );
      await era.printAndWait(
        `那道竭尽全力的樱粉色身上，不仅有因职业条件契合而选择的「${you.name}」，更有那个因热爱与勇气选择成为训练员的「${you.name}」。`,
      );
      await era.printAndWait(
        `最初的那个人仅是为了金钱或名誉，或是只为了训练出强大的${urara.uma_sex_title}作为成绩才来到这里的吗？`,
      );
      await era.printAndWait(`不只是这样的吧？`);
      era.drawLine();

      await inner_urara.say_as_unknown_and_wait(`虽然就像空想家的纸上谈兵……`);
      await inner_urara.say_as_unknown_and_wait(`……`);
      await inner_urara.say_as_unknown_and_wait(
        `……但单靠结果，是不能衡量梦想与热爱的。`,
      );
      await inner_urara.say_as_unknown_and_wait(
        `或许没有实绩只会被人甩开，或许结果就是能代表一切——`,
      );
      await inner_urara.say_as_unknown_and_wait(
        `但此时此刻，您却『不小心』想起了自己并非只为结果而来，哪怕失去也不应害怕。`,
      );
      await inner_urara.say_as_unknown_and_wait(
        `藏在河沙中的细小碎金或许没什么价值，但若被谁拾起，依旧能闪闪发亮。`,
      );
      era.drawLine();

      await era.printAndWait(
        `随着结束奔跑的参赛者们走出赛场，同行们为了能够招募到跑在最前端的${urara.uma_sex_title}很快便散去了。`,
      );
      await era.printAndWait(
        `聚集的${urara.uma_sex_title}们也为了准备下一轮或许就是自己的比赛而奔走，只剩下还未离去的 ${
          you.name
        } 与乌拉拉相互对视着。`,
      );
      await era.printAndWait(
        `在冲线前就因最初的呐喊声而认出了 ${
          you.name
        } 的小${urara.uma_sex_title}，此时此刻正带着无暇的笑容招着手向 ${
          you.name
        } 跑来。`,
      );
      await era.printAndWait(
        `依旧是那个纯洁的笑容，仿佛早春的朝阳正照耀于此。`,
      );
      await urara.say_and_wait(`啊！是上次的训练员呢！没想到你真的来看我了！`);
      await era.printAndWait(
        `来到了 ${
          you.name
        } 身边的小${urara.uma_sex_title}在开心之余似乎也有些惊奇。`,
      );
      await urara.say_and_wait(
        `诶嘿嘿～又输了呢！不过我也能够跑到最后了，奔跑真的很开心呢！所以训练员，下次也……`,
      );
      await era.printAndWait(
        `而在乌拉拉有些不好意思地诉说中，${you.name} 下定了决心。`,
      );

      era.printButton(`「乌拉拉，请听我说。」`, 1);
      await era.input();

      await era.printAndWait(
        `与乌拉拉含着绽开樱花的双瞳对视着，做心理准备的 ${you.name}，主动向${urara.sex}踏进一步。`,
      );
      await you.say_and_wait(
        `虽然可能会很困难，但如果此刻的我能够回应${urara.sex}那份纯粹的期待的话——`,
        true,
      );

      await inner_urara.say_as_unknown_and_wait(
        `带着曾经从不会有的想法，此时此刻怀着信念的${callname}（您）向乌拉拉发出了邀请。`,
      );
      era.printButton(`「我来陪你训练吧，为了取得下次的胜利。」`, 1);
      era.printButton(
        `「我还想继续看你的奔跑，所以……可以成为我的担当吗？」`,
        2,
      );
      ret.push((ret['reward'] = await era.input()));

      await era.printAndWait(
        `听到 ${
          you.name
        } 的邀请，小小的${urara.uma_sex_title}瞪大了湿润的眼睛，樱瞳也因突如其来的邀请惊得微微颤抖。`,
      );
      await era.printAndWait(
        `不过即使随后流露出了一点纯真的羞涩，乌拉拉还是清晰的回应了 ${you.name} 的请求。`,
      );
      await urara.say_and_wait(
        `其实我至今为止都是一个人做训练的，所以确实不太明白应该怎么做呢！`,
      );
      await urara.say_and_wait(
        `但如果训练员能陪着我的话，一定能让我跑得更快吧！所以……`,
      );
      await era.printAndWait(
        `学着 ${
          you.name
        } 的样子，乌拉拉也向前一步。带着熟悉又纯粹的笑容，小小的${urara.uma_sex_title}拉住了 ${
          you.name
        } 的双手。`,
      );
      await urara.say_and_wait(`所以我很开心哦！接下来一起加油吧！训练员！`);
      await era.printAndWait(
        `燃起的星火不会被轻易的熄灭，只要能够正视自身，奔跑的路途就依然能向前延伸。`,
      );
      await era.printAndWait(
        `注视着乌拉拉灿烂的笑脸，${you.name} 暗中再次坚定了决心。`,
      );
      await era.printAndWait(
        `无论结果如何，${you.name} 都将会陪伴${urara.sex}走到最后，去见证${urara.sex}能跑向的未来。`,
      );

      era.printButton(`「所以，不要停下来啊……」`, 1);
      await era.input();

      await era.printAndWait(
        `于是在乌拉拉的惊呼中，刚刚战胜了心中的又一道坎的 ${you.name} 又倒下了——`,
      );
      await era.printAndWait(
        `因为过于放松而突然失去了力气，这次的 ${you.name} 以『停不下来』的姿势安心地倒在了地上。`,
      );
      await era.printAndWait(
        `而至于醒来后发现自己再次与乌拉拉同床共枕，则是另一回事了。`,
      );
      era.println();
      await era.printAndWait([
        '成为 ',
        urara.get_colored_name(),
        ' 的训练员了！',
      ]);
    } else {
      await era.printAndWait(
        `${you.name} 驱散心中微弱的鼓动，转身离开了训练场。`,
      );
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        `于是，${callname}就这样头也不回的离开了训练场——`,
      );
      await inner_urara.say_as_unknown_and_wait(`……唉……`);
      await inner_urara.say_as_unknown_and_wait(
        `看来您现在也只是心血来潮呢，那故事也只有这样草草收尾了。`,
      );
      await inner_urara.say_as_unknown_and_wait(
        `但这里永远会为您预留出相遇的机会，所以……`,
      );
      await inner_urara.say_as_unknown_and_wait(
        `下一次，如果曾经对那一抹樱色有过一丝触动的话，就请再试试看吧。`,
      );
    }
    return ret;
  },
};
