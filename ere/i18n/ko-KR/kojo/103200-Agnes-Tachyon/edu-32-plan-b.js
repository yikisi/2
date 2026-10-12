/**
 * @file アグネスタキオン - 育成 - Plan B
 * @author 幽白書
 * @author 黑奴一号 黑奴队长（修订）
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  ws_b_betray: (() => {
    const title = 'Betray';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     */
    const f = async (tachyon, coffee, you, callname, call_25, relation) => {
      await era.printAndWait(
        '꿈을 남에게 맡긴다……가혹한 길이기는 하다. 하지만',
      );
      await era.printAndWait(
        '이성적으로 판단한다면, 가장 실현하기 쉬운 희망일 것이다',
      );
      await era.printAndWait([
        tachyon.sex,
        '가 말하는 운명은 제쳐 두더라도,',
        tachyon.sex,
        '의 두 다리는……트레이너로서든,',
        tachyon.get_colored_name(),
        '를 동경하는 팬으로서든',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '는 그 과정에서 ',
        tachyon.sex,
        '가 입을지도 모를 상처를 외면할 수 없다',
      ]);
      await era.printAndWait('가능성이 너무 낮다');
      await era.printAndWait('눈앞의 길도 가시투성이다');
      await era.printAndWait([
        you.get_colored_name(),
        '는 할 수 없다. 겁쟁이라 욕해도 상관없다',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '가 무사하기만 하면 된다',
      ]);
      await era.printAndWait('그 외에는……');
      era.println();
      await era.printAndWait([coffee.get_colored_name()]);
      await era.printAndWait([
        you.get_colored_name(),
        '는 또 한 명의 담당 ',
        tachyon.uma_sex_title,
        '를 떠올렸다',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 달리기도 모습도, 마찬가지로 ',
        you.get_colored_name(),
        '를 매료시켰다',
      ]);
      await era.printAndWait('「대신」이라는 말은 오만하고 이기적이다');
      await era.printAndWait(
        '누구도 누군가를 대신할 수 없다. 누구도 다른 사람을 대신하려고 태어나지 않았다',
      );
      if (relation >= era.get('relation:25:0')) {
        await era.printAndWait([
          '하지만 누군가 ',
          tachyon.get_colored_name(),
          '의 꿈을 「이어받을」 수 있다면……',
        ]);
        era.println();
        await era.printAndWait([
          '그건,',
          coffee.get_colored_name(),
          '밖에 없다',
        ]);
        era.println();
        await era.printAndWait([
          '말없이 있는 ',
          you.get_colored_name(),
          '를 보고,',
          tachyon.get_colored_name(),
          '도 마음속 결정을 알아챘다',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '가 입을 열기를 기다릴 뿐이다',
        ]);
      } else {
        await era.printAndWait(['특히나 ', coffee.get_colored_name()]);
        era.printButton(`「……카페${coffee.sex}는 누구의 대역도 아니야」`, 1);
        await era.input();
        await tachyon.say_and_wait(['후후, 꽤나 감싸 주는군……']);
        await tachyon.say_and_wait([
          '안심하게.',
          tachyon.sex,
          '를 누군가의 대역이라고 한 적은 없네……',
        ]);
        await tachyon.say_and_wait([
          '그래, 지나가던 친절한 ',
          tachyon.uma_sex_title,
          '가,',
          coffee.get_colored_name(),
          '와 그 트레이너를 돕는 것뿐이라네',
        ]);
        era.println();
        await era.printAndWait([
          '「',
          coffee.get_colored_name(),
          '와,',
          coffee.get_colored_name(),
          '의 트레이너」——그렇게 말했을 때,',
          tachyon.get_colored_name(),
          '의 얼굴에 뚜렷한 실망이 떠올랐다',
        ]);
        await era.printAndWait([
          '……그렇다. 이렇게 선택한 이상, 나는 정말로 ',
          coffee.get_colored_name(),
          '의 트레이너가 된다……하지만 이 선택이야말로 ',
          tachyon.get_colored_name(),
          '에게 가장 좋은 길이겠지',
        ]);
      }
      era.printButton('「……난 Plan B를 선택하겠어」', 1);
      await era.input();
      await tachyon.say_and_wait('……그런가');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '의 선택을 듣고 많은 말을 하지 않은 채 고개만 끄덕였다',
      ]);
      await era.printAndWait([
        '방 안은 숨 막히는 침묵에 잠겼다.',
        you.get_colored_name(),
        '가 견디지 못하고 무슨 말이라도 하려던 그때',
      ]);
      era.println();
      await tachyon.say_and_wait('……하하하하핫!');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '가 갑자기 웃음을 터뜨려,',
        you.get_colored_name(),
        '는 어깨를 움찔했다',
      ]);
      era.println();
      await tachyon.say_and_wait('좋아, 좋아! 올바른 선택을 했군!');
      era.println();
      await era.printAndWait('올바른 선택……인가?');
      era.println();
      await tachyon.say_and_wait(
        '솔직히 Plan A를 선택할까 봐 조금 두려웠네. 나 같은 사람은 트레이닝이나 레이스보다는 뒤에서 연구하는 편이 어울리니 말이야. 하하핫!',
      );
      era.println();
      await era.printAndWait([
        '……',
        tachyon.sex,
        '가 그렇게 말하니, 이게 맞는 거겠지. 그렇겠지?',
      ]);
      await era.printAndWait([
        '이것이 ',
        tachyon.sex,
        '에게 가장 잘 맞고, 가장 합리적인 선택이겠지. 그렇겠지?',
      ]);
      await era.printAndWait('분명 그럴 것이다');
      await era.printAndWait('틀림없이 그렇다');
      await era.printAndWait([
        '그렇지 않다면……나는 담당 ',
        tachyon.uma_sex_title,
        '를, 나의 빛(Tachyon)을 버리고 배신한 셈이 되니까',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '아, 그렇지,',
        callname,
        ', 내일도 약을 시험하러 오게나',
      ]);
      await era.printAndWait('…………어? 아직도 약을 시험해?');
      await era.printAndWait([
        you.get_colored_name(),
        '의 얼빠진 얼굴을 보고,',
        tachyon.get_colored_name(),
        '는 웃었다',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '후후……당연하지. 다만 내일부터 먹을 약은 모두 ',
        call_25,
        '에게 쓸 것이라네……',
      ]);
      await tachyon.say_and_wait(
        '각오해 두게. 내일부터는 시험할 약이 더 많아질 테니!',
      );
      await tachyon.say_and_wait([
        call_25,
        '가 한계까지 도달할 기반을 다지려면, 전보다 훨씬 할 일이 많다네',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '는 웃으며 대기실을 나섰다. 내 선택은,',
        tachyon.sex,
        '에게 영향을 주지 않은……걸까?',
      ]);
      await era.printAndWait([
        '마음 깊은 곳은 아직 진정되지 않았다. 그래도 ',
        you.get_colored_name(),
        '는 그 걱정을 곧 떨쳐 냈다.',
        coffee.get_colored_name(),
        '를 위해서도,',
        tachyon.get_colored_name(),
        '를 위해서도, 더 노력해야 한다',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '는 월계배에 출전했다',
      ]);
      await era.printAndWait([
        '본격화를 마친 시니어 상대도, 동기의 강자도, 드림 컵의 선배들까지도,',
        tachyon.sex,
        '는 똑같이 뛰어넘었다',
      ]);
      await era.printAndWait('여전히 시선을 빼앗는 달리기다');
      await era.printAndWait('여전히 빛 같은 달리기다');
      await era.printAndWait('빛처럼 순식간에 사라지는 달리기다');
      era.println();
      await era.printAndWait([
        '그 뒤,',
        tachyon.get_colored_name(),
        '는 트윙클 시리즈 출전을 반영구적으로 중단하겠다고 발표했다',
      ]);
      await era.printAndWait('그 발표는 언론을 크게 뒤흔들었다');
      await era.printAndWait([
        '하지만 그 무엇도 ',
        you.get_colored_name(),
        '와 ',
        tachyon.sex,
        '의 동행을 막지는 못한다',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_b_47_31: (() => {
    const title = '달빛';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {string} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     */
    const f = async (tachyon, coffee, you, callname, t_call_c, relation) => {
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '타키온 선배, 요즘……한밤중에 모래사장을 달리는 것 같아요',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        '큰일이라는 건 아니지만, 타키온 선배가 달리는 모습이……어쩐지 괴로워 보여요',
      );
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'C', [
        '타키온 선배에게 신세도 많이 졌는데……선배 ',
        tachyon.sex,
        ', 정말 괜찮은 걸까요',
      ]);
      era.println();
      await era.printAndWait([
        '여러 ',
        tachyon.uma_sex_title,
        '가 걱정해 준 덕분에,',
        you.get_colored_name(),
        '는 한밤중에 트레이너 기숙사를 나서 합숙소의 모래사장으로 향했다',
      ]);
      await era.printAndWait([
        '다른 ',
        tachyon.uma_sex_title,
        '가 말해 줘야 담당의 이상을 알아채다니……트레이너 실격이다',
      ]);
      await era.printAndWait([
        '하지만 도움에 대한 감사일까……',
        tachyon.sex,
        '는 실험이라고 생각해도,',
        tachyon.sex,
        '의 약으로 도움받은 이들은 분명히 있다',
      ]);
      await era.printAndWait([
        '이유에도 감정에도 뭐라고 이름 붙이기 어렵다.',
        you.get_colored_name(),
        '는 묘하게 가슴이 뜨거워졌다',
      ]);
      era.println();
      await tachyon.say_and_wait('하아……하아……하아……');
      era.println();
      await era.printAndWait([
        '모래사장에 도착한 ',
        you.get_colored_name(),
        '의 눈앞에는, 합숙 내내 자신과 함께 ',
        coffee.get_colored_name(),
        '의 달리기를 개선할 연구에 몰두하던 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        '달리기에 몰두한 ',
        tachyon.sex,
        '는 밤의 어둠에 섞여 다가온 ',
        you.get_colored_name(),
        '를 알아채지 못했다',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '도 말없이 바라보며 이 고요를 깨지 않았다',
      ]);
      era.println();
      await era.printAndWait([
        '모래사장 위 ',
        tachyon.sex,
        '의 달리기는 완벽하지 않다',
      ]);
      await era.printAndWait([
        '사츠키상 때와 비교할 것도 없이, 훨씬 이전의 ',
        tachyon.get_colored_name(),
        '의 달리기와 비교해도 몹시 어색하다',
      ]);
      await era.printAndWait([
        '다리가 버틸지 신경 쓰여 힘껏 내딛지 못하는 모습도 있다. 그 주법 자체도,',
        tachyon.get_colored_name(),
        '가 본래 잘하는 것이 아니다',
      ]);
      await era.printAndWait([
        '그런데도 달빛 아래 ',
        tachyon.sex,
        '의 모습에서 ',
        you.get_colored_name(),
        '는 눈을 뗄 수 없다',
      ]);
      await era.printAndWait([
        '완벽한지는 상관없다.',
        tachyon.get_colored_name(),
        '의 달리기 그 자체가 ',
        you.get_colored_name(),
        '를 끌어당긴다. 빛이다. 아무리 희미한 빛이라도 사람은 열광하며 뒤쫓는다',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '는 저도 모르게 한 걸음 내디뎌 그 빛을 붙잡으려 했다……',
      ]);
      era.println();
      await tachyon.say_and_wait(['누구지? ……이런,', callname]);
      era.println();
      await era.printAndWait([
        '달리기를 멈춘 ',
        tachyon.sex,
        '는 바로 가까이에 있는 인영을 알아채고 말을 걸었다',
      ]);
      era.printButton('「이 늦은 시간에 뭐 해?」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '별일 아니네.',
        t_call_c,
        '를 위해 새로운 주법을 시험하고 있을 뿐……',
      ]);
      await tachyon.say_and_wait([
        '방금 봤겠지. 내 달리기는 엉망이네. 하지만,',
        t_call_c,
        '의 주법을 이 방향으로 바꿀 수 있다면……',
      ]);
      era.println();
      await era.printAndWait('하려던 말을 삼켰다');
      await era.printAndWait([
        '틀린 말은 아니다. 모든 것은 ',
        tachyon.get_colored_name(),
        '의 Plan B를 위한 것이다',
      ]);
      await era.printAndWait([
        '동시에,',
        coffee.get_colored_name(),
        '를 정점까지 이끌기 위한 일이기도 하다',
      ]);
      if (relation <= 225) {
        await era.printAndWait('처음부터 정해 둔 일이었다');
        await era.printAndWait('합리적으로 보면 가장 이치에 맞는 선택 아닌가');
        await era.printAndWait('그러니');
      } else {
        await era.printAndWait('처음부터 정해 둔 일이었다');
        await era.printAndWait([
          you.get_colored_name(),
          '는 더는 ',
          tachyon.get_colored_name(),
          '에게 그런 고통을 주고 싶지 않다. 그렇지 않은가?',
        ]);
        await era.printAndWait('그러니');
      }
      era.printButton('「……그래도 쉬어 가면서 해」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '알고 있네. 자네도 마찬가지야. 이렇게 늦도록 깨어 있으면 내일 ',
        t_call_c,
        '의 트레이닝은 어쩔 셈인가?',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '는 그런 피상적이고 형식적인 걱정밖에 하지 못한 채 모래사장을 떠났다',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_b_47_40: (() => {
    const title = '또 다른 가능성';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {boolean} coffee_kiku_sho マンハッタンカフェが菊花賞に出走するか
     */
    const f = async (tachyon, you, callname, call_25, coffee_kiku_sho) => {
      await era.printAndWait([
        '그날 밤,',
        you.get_colored_name(),
        '는 꿈을 꾸었다',
      ]);
      await era.printAndWait([
        '국화상을 제패한 ',
        tachyon.sex,
        '가 레이스장에서 백의에 감싸인 손을 흔들고 있다',
      ]);
      await era.printAndWait(['모두가 ', tachyon.sex, '의 이름을 부른다']);
      await era.printAndWait([
        tachyon.sex,
        '는 돌아서서 관객석의 ',
        you.get_colored_name(),
        '를 바라보았다',
      ]);
      await era.printAndWait('얼굴만 새까맣다');
      await you.say_as_passer_by_and_wait(
        '관객들',
        '⬛⬛⬛⬛！⬛⬛⬛⬛！⬛⬛⬛⬛！',
      );
      await era.printAndWait([
        '주위 관객들이 ',
        tachyon.sex,
        '의 이름을 부른다',
      ]);
      await era.printAndWait([tachyon.sex, '의 이름이 뭐지?']);
      await era.printAndWait([tachyon.sex, '는……누구지?']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '는 꿈에서 벌떡 깨어나 한동안 진정하지 못했다',
      ]);
      await era.printAndWait([
        '너무나 진짜 같아서,',
        you.get_colored_name(),
        '는 그 여운에 사로잡혔다',
      ]);
      await era.printAndWait([
        '그날 밤 남은 시간도 ',
        you.get_colored_name(),
        '는 뒤척이며 아침까지 잠들지 못했다',
      ]);
      era.println();
      await era.printAndWait([
        '하늘이 희미하게 밝아 올 무렵,',
        you.get_colored_name(),
        '는 황급히 트레이너 기숙사를 나섰다',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '가 언론에 출전 중단을 발표했다는 것은 안다',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '가 자신에게 말도 없이 레이스를 신청할 리 없다는 것도 안다',
      ]);
      await era.printAndWait('그래도 걱정된다. 그래도 두렵다');
      await era.printAndWait([
        '그래도 ',
        tachyon.sex,
        '를 내 눈으로 봐야만 꿈이 현실이 아니라고 확신할 수 있다',
      ]);
      era.println();
      await tachyon.say_and_wait(['이런,', callname, '? 오늘은 꽤 이르군']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '가 실험실로 뛰어들자, 아침부터 느긋하게 홍차를 마시던 ',
        tachyon.get_colored_name(),
        '가 있었다',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '뭐, 오늘은 국화상이니……긴장하는 것도 당연하겠지',
      ]);
      if (coffee_kiku_sho) {
        await tachyon.say_and_wait(
          '이따 함께 가세. 후후……직접 달리지 않고 관객석에서 남이 달리는 걸 보는 건 처음이군',
        );
      } else {
        await tachyon.say_and_wait([
          '자네는 힘내고 오게. 하긴,',
          call_25,
          ' ',
          tachyon.sex,
          '는 출전하지 않을 생각이니, 나는 여기서 중계만 봐도 충분하네. 좋은 모습을 보여 주게나',
        ]);
      }
      era.println();
      await tachyon.say_and_wait('……아니면 다른 할 말이 있나?');
      era.println();
      await era.printAndWait('이렇게 갑자기 실험실에 뛰어들었건만');
      await era.printAndWait('악몽을 털어놓으려 했건만');
      await era.printAndWait([tachyon.sex, '를 보는 순간 모든 말이 사라졌다']);
      era.println();
      await era.printAndWait('무슨 말을 해야 할까');
      await era.printAndWait([
        '나는,',
        you.get_colored_name(),
        '가 국화상에서 이기는 꿈을 꿨다고?',
      ]);
      await era.printAndWait([
        '꿈속의 ',
        you.get_colored_name(),
        '에게는 얼굴도 이름도 없었다고?',
      ]);
      await era.printAndWait('나는 후회하고 있다고……');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '는 세차게 고개를 젓고 괜찮다고만 대답한 뒤, 볼썽사납게 실험실을 나왔다',
      ]);
      await era.printAndWait('무슨 말을 해야 할까');
      await era.printAndWait('무슨 말을 할 수 있을까');
      await era.printAndWait(
        '스스로 결정한 일을 이제 와 후회하다니, 농담도 정도가 있다',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '는 실험실을 떠나 오늘의 국화상을 준비하러 갔다',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_limited_tachyon: (() => {
    const title = '한계에 멈춘 광자';
    /**
     * Plan B 専用。カフェが菊花賞に出走したあと発動
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     */
    const f = async (tachyon, coffee, you, callname, call_25) => {
      await era.printAndWait(['국화상이 끝났다']);
      await era.printAndWait([
        '끝난 지 며칠.',
        you.get_colored_name(),
        '는 밤까지 트레이닝한 ',
        coffee.get_colored_name(),
        '를 기숙사까지 데려다주고,',
        tachyon.sex,
        '에게 쉬라고 말한 뒤……자신은 학원으로 돌아왔다',
      ]);
      await era.printAndWait('나도 쉬어야 하는데……아직 일이 남았다');
      era.println();
      await era.printAndWait([
        '깜깜한 트레이너실에 들어선 순간,',
        you.get_colored_name(),
        '는 방 안에 다른 사람이 있다는 걸 알아챘다',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 감이 예리해서가 아니다. 그 사람이 사람을 빛나게 하는 약을 들고 있었기 때문이다',
      ]);
      era.printButton('「……타키온이구나」', 1);
      await era.input();
      await era.printAndWait([
        '지난 몇 달간,',
        coffee.get_colored_name(),
        '를 도와준, 역시나 ',
        you.get_colored_name(),
        '의 담당 ',
        tachyon.uma_sex_title,
        '——',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 손에 들린 약이 달빛 아래 일곱 빛깔로 빛난다',
      ]);
      era.println();
      await tachyon.say_and_wait(['국화상이 끝났군']);
      era.printButton('「……그래」', 1);
      await era.input();
      await era.printAndWait('사이가 나쁜 것은 아니다');
      await era.printAndWait([
        '애초에 ',
        tachyon.sex,
        '는 지금도 ',
        you.get_colored_name(),
        '의 담당 ',
        tachyon.uma_sex_title,
        '다. 일상에서 마주칠 일은 늘 있다',
      ]);
      await era.printAndWait('평범하게 대화하지 못할 이유는 없을 것이다');
      await era.printAndWait([
        '하지만 지난 몇 달 동안, 대화가 ',
        coffee.get_colored_name(),
        '를 벗어난 적은 거의 없었다',
      ]);
      await era.printAndWait('게다가 합동 트레이닝 때의 일도……');
      await era.printAndWait([
        '문득,',
        you.get_colored_name(),
        '는 ',
        tachyon.sex,
        '와 무슨 이야기를 해야 할지 알 수 없었다',
      ]);
      era.println();
      await tachyon.say_and_wait(callname);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '의 밤색 단발은 가라앉은 달빛 아래 술처럼 짙고, 붉은 눈동자는 피를 원하는 짐승처럼 탐욕스럽게 ',
        you.get_colored_name(),
        '를 바라보고 있다',
      ]);
      await era.printAndWait([
        '그 순간,',
        you.get_colored_name(),
        '는 여러 가지를 떠올렸다. 선배 트레이너가 말했던,',
        tachyon.uma_sex_title,
        '와의 안전한 거리',
      ]);
      await era.printAndWait([
        '트레이너 강좌에서 들었던,',
        tachyon.uma_sex_title,
        '의 독점욕',
      ]);
      await era.printAndWait([
        tachyon.uma_sex_title,
        '생리학에서 배운,',
        tachyon.uma_sex_title,
        '의 발정기……',
      ]);
      await era.printAndWait([
        '하지만 지금 맨몸으로 담당 ',
        tachyon.uma_sex_title,
        '와 마주한 내게는 아무것도 도움이 되지 않는다',
      ]);
      await era.printAndWait([
        '눈앞의 ',
        tachyon.get_colored_name(),
        '의 약 덕분에 조금은 저항할 힘이 있을지도 모른다',
      ]);
      await era.printAndWait('하지만 정말 조금이다');
      await era.printAndWait([
        tachyon.sex,
        '가 다가오자,',
        you.get_colored_name(),
        '도 무의식중에 물러났다',
      ]);
      await era.printAndWait('그렇게 한 걸음씩 밀려나 벽까지 몰렸다');
      await era.printAndWait([
        tachyon.sex,
        '는 벽에 웅크린 ',
        you.get_colored_name(),
        '를 붙잡고 담담히 말했다',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, ', 잠깐……함께 달려 주지 않겠나?']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '가 예상했던, 하지만 예상보다도 좋지 않은 부탁이었다',
      ]);
      era.drawLine();
      await era.printAndWait('밤의 트레이닝장. 텅 빈 코스');
      await era.printAndWait([
        '그곳에 있는 것은 달리는 ',
        tachyon.get_colored_name(),
        '뿐이다',
      ]);
      await era.printAndWait([
        '달빛 아래 ',
        tachyon.sex,
        '의 달리기는 몹시 볼품없다',
      ]);
      await era.printAndWait([
        '무리도 아니다. 거의 석 달 동안 트레이닝하지 않은 ',
        tachyon.sex,
        '다. 천재라도 시간을 거스를 수는 없다. 근육의 쇠퇴와 둔해진 감각은 선수에게 치명적이다',
      ]);
      await era.printAndWait([
        '지금의 ',
        tachyon.get_colored_name(),
        '라면, 어쩌면 ',
        you.get_colored_name(),
        '도 이길 수 있을지 모른다……',
      ]);
      await era.printAndWait([
        '터무니없는 소리 같지만, 매일 약으로 단련한 몸이라면 오래 달리지 않은 ',
        tachyon.uma_sex_title,
        '를 이기는 것도 가능할 것이다',
      ]);
      era.println();
      await era.printAndWait('그런데 왜……');
      await era.printAndWait([you.get_colored_name(), '는 괴롭게 생각했다']);
      era.println();
      await era.printAndWait([
        '왜 이렇게 초라해진 달리기도,',
        you.get_colored_name(),
        '의 눈에는 처음 봤을 때처럼 빛나는 걸까',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '……']);
      era.println();
      await era.printAndWait([
        '어느새 ',
        tachyon.sex,
        '는 달리기를 마치고,',
        you.get_colored_name(),
        '의 곁에서 숨을 헐떡이고 있었다',
      ]);
      await era.printAndWait(['예전의 ', tachyon.sex, '는 이렇지 않았다']);
      await era.printAndWait([
        '다리의 부상을 감안하더라도,',
        tachyon.sex,
        '는 이렇게 되어서는 안 됐다',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '를 이렇게 만든 것은 곁에서,',
        tachyon.sex,
        '를 믿어 줘야 했던 사람이다',
      ]);
      await era.printAndWait(['——', you.get_colored_name()]);
      era.println();
      await tachyon.say_and_wait('……후후, 꼴사나운 달리기였군');
      era.println();
      await era.printAndWait([
        '그렇지 않다고,',
        you.get_colored_name(),
        '는 위로하려 했다',
      ]);
      await era.printAndWait([
        '하지만 ',
        tachyon.sex,
        '의 눈이,',
        you.get_colored_name(),
        '에게 거짓말을 허락하지 않았다',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        ', 기억하나? 월계배 때 내가 했던 말을',
      ]);
      era.println();
      await era.printAndWait('기억하냐고? 잊는 게 불가능하다');
      await era.printAndWait('지금도 깊은 밤이면 거듭 꾸는 악몽이다');
      await era.printAndWait([
        '자신과 타인의 꿈을 짊어진 ',
        tachyon.uma_sex_title,
        '가 눈앞에서 시들어 가던 순간',
      ]);
      await era.printAndWait(
        '질책이든 원망이든 탄식이든 받아들일 각오는 되어 있었다',
      );
      era.println();
      await era.printAndWait([
        '하지만 ',
        tachyon.sex,
        '가 꺼낸 말은 그런 것이 아니었다',
      ]);
      era.println();
      await tachyon.say_and_wait('남은 전력 질주의 횟수……지금이 그 기회라네');
      await tachyon.say_and_wait([
        '국화상에서,',
        call_25,
        '는 이미 ',
        tachyon.sex,
        '의 빛을 꽃피웠지……이견 없는 『최강』의 ',
        tachyon.uma_sex_title,
      ]);
      era.println();
      await era.printAndWait([
        '가장 빠른 ',
        tachyon.uma_sex_title,
        '가 사츠키상을 차지한다',
      ]);
      await era.printAndWait([
        '가장 강한 ',
        tachyon.uma_sex_title,
        '가 국화상을 차지한다',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '는 오래전부터 전해 내려온 말을 떠올렸다',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '그리고……연말까지,',
        tachyon.sex,
        '는 반드시 정점에 다다를 걸세',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '는 자신 안에 있는 가능성을 이야기하고 있다',
      ]);
      await era.printAndWait('……이제는 자신의 것이 아닌 가능성을');
      era.println();
      await tachyon.say_and_wait([
        '하지만 ',
        tachyon.sex,
        '가 한계를 넘게 하려면, 갈고닦기 위한 발판이 필요하네……',
      ]);
      era.println();
      await era.printAndWait(
        '자신의 가능성을 잃었을 텐데도, 그 눈의 빛은 아직 이토록 눈부시다',
      );
      await era.printAndWait([
        '이런 ',
        tachyon.sex,
        '라면, 나는 분명 고개를 끄덕일 것이다.',
        tachyon.sex,
        '가 꿈을 위해 불타 없어진다면 함께하는 것쯤은 어렵지 않다',
      ]);
      await era.printAndWait('지금까지처럼 기꺼이 쓰임받을 것이다');
      await era.printAndWait('하지만……');
      era.println();
      await tachyon.say_and_wait([
        '그러니,',
        callname,
        ', 자네의 힘이 필요하네',
      ]);
      await tachyon.say_and_wait([
        '나는 내년에 복귀하겠네.',
        call_25,
        '를 더 높은 한계로 이끌기 위해.',
        tachyon.sex,
        '를 가장 날카롭게 파고들 전술을 세워,',
        tachyon.sex,
        '를 한계까지 몰아붙일 수 있는 건 나뿐이라네',
      ]);
      await tachyon.say_and_wait('……힘을 빌려주겠지');
      era.println();
      await era.printAndWait(
        '정말로 모든 것을 희생해 남을 완성할 생각이라면, 왜 그 얼굴은 이토록 분한가',
      );
      await era.printAndWait('왜 눈가에 눈물이 맺혔는가');
      era.println();
      await tachyon.say_and_wait('침묵은 동의로 받아들이겠네');
      era.println();
      await era.printAndWait('애초에 거절할 이유가 없지 않은가');
      await era.printAndWait([
        coffee.get_colored_name(),
        '를 정점으로 이끌기 위해',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 「유지」를 이루기 위해',
      ]);
      await era.printAndWait([
        '거절할 이유는 없다. 다만 ',
        you.get_colored_name(),
        '는 알고 싶었다',
      ]);
      await era.printAndWait(
        '눈앞의 밤색 머리 천재는 지금 무슨 생각을 하고 있을까?',
      );
    };
    f.title = title;
    return f;
  })(),
  we_b_47_47: (() => {
    const title = '빛바랜 광채';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {boolean} coffee_arim_kin マンハッタンカフェが有馬記念に出走するか
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      coffee_arim_kin,
    ) => {
      await tachyon.say_and_wait(['그런데 내일은 아리마 기념이군,', callname]);
      era.println();
      await era.printAndWait([
        '달빛 아래 트레이닝하던 ',
        tachyon.get_colored_name(),
        '가 문득 ',
        you.get_colored_name(),
        '에게 말했다',
      ]);
      await era.printAndWait([
        '국화상이 끝난 뒤로, 두 사람은 이렇게 밤마다 트레이닝과 지도를 이어 왔다',
      ]);
      await era.printAndWait([
        '어색하던 대화도 두 달 동안 함께하니 예전의 익숙함을 되찾아 가고 있다',
      ]);
      await era.printAndWait(
        '말하기 좀 그렇지만, 지금 상황을 어떻게 생각하느냐고 묻는다면',
      );
      await era.printAndWait('아마 즐기고 있다');
      await era.printAndWait([
        '낮에는 ',
        coffee.get_colored_name(),
        '를 위해 움직이고, 밤에는 ',
        tachyon.get_colored_name(),
        '의 회복을 돕는다',
      ]);
      await era.printAndWait([
        '일은 늘었다. 그런데도 국화상 이전의 ',
        you.get_colored_name(),
        '와 비교하면 마음의 짐은 날마다 가벼워지고 있다',
      ]);
      await era.printAndWait([
        '…………그 탓에,',
        you.get_colored_name(),
        '는 시간도 거의 잊고 있었다',
      ]);
      era.println();
      if (coffee_arim_kin) {
        await tachyon.say_and_wait([
          '내일은,',
          call_25,
          '의 올해 마지막 레이스라네',
        ]);
      } else {
        await tachyon.say_and_wait('내일이면 올해 시즌도 끝나겠군');
      }
      era.println();
      await era.printAndWait(['아리마 기념 뒤에는']);
      await era.printAndWait([
        you.get_colored_name(),
        '가 줄곧 마주하지 못했던 내년이 온다',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '내년에는……',
        call_25,
        '가 나가는 레이스라면……하나도 빠짐없이 전력을 다해 함께 출전하겠네',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '는 ',
        tachyon.sex,
        '의 눈을 보았다. 그 안에 있는 것은,',
        coffee.get_colored_name(),
        '를 위해 불타오를 각오와 열정이다',
      ]);
      era.println();
      await tachyon.say_and_wait('……그러니 내년에도 잘 부탁하겠네');
      era.println();
      await era.printAndWait('빛이 없다');
      await era.printAndWait([
        '줄곧 ',
        you.get_colored_name(),
        '의 두 눈을 불태우던,',
        tachyon.get_colored_name(),
        '의 눈빛은 이제 거의 보이지 않는다',
      ]);
      era.printButton('「내년에도……잘 부탁해」', 1);
      await era.input();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '는 아리마 기념 직후 기자회견을 열 예정이다',
      ]);
      await era.printAndWait('복귀 발표는 세간을 크게 뒤흔들 것이다');
      await era.printAndWait('하지만 그 뒤의 일은 지금 두 사람과는 관계없다');
    };
    f.title = title;
    return f;
  })(),
  ws_b_95_1: (() => {
    const title = '결의의 새해';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {string} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     */
    const f = async (tachyon, coffee, you, callname, call_25, relation) => {
      await era.printAndWait('새해');
      await era.printAndWait(
        '원래는 묵은해를 보내고 새해를 맞이하는 경사스러운 날이다',
      );
      await era.printAndWait(
        '신사에 참배하는 것도 지난 한 해를 털어 내고 새해를 맞이한다는 뜻이 된다',
      );
      era.println();
      await era.printAndWait('하지만……악연이라는 것은 좀처럼 떨어지지 않는다');
      await era.printAndWait(
        '상대가 누구든, 장소가 어디든, 신사라고 예외는 아니다',
      );
      await era.printAndWait(
        '그림자처럼 따라붙어 끈질기게 떨어지지 않는 성가신 존재',
      );
      await era.printAndWait('그렇다, 악연이란————');
      era.println();
      await tachyon.say_and_wait(['이런,', callname, '……우연이군']);
      era.printButton('「타키……타키온!」', 1);
      era.printButton('「잘됐다, 뛰어!」', 2);
      await era.input();
      await tachyon.say_and_wait('아, 잠깐……');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '가 대답하기도 전에,',
        you.get_colored_name(),
        '는 ',
        tachyon.sex,
        '의 손을 잡고 신전의 인파 속으로 파고들어 금세 모습을 감췄다',
      ]);
      await you.say_as_passer_by_and_wait('기자 A', '큭……놓쳤다');
      await you.say_as_passer_by_and_wait(
        '기자 B',
        '빛나지 않으니 이렇게 찾기 힘들다니……',
      );
      era.println();
      await you.say_as_passer_by_and_wait(
        '기자 C',
        '……이쪽을 막아. 절대로 놓치지 마',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '는 ',
        tachyon.get_colored_name(),
        '를 인파 속에 숨기고, 카메라를 든 기자들이 쫓아오지 않는 것을 확인한 뒤에야 숨을 돌렸다',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '가 아리마 기념 뒤에 갑자기 복귀를 발표한 일은 언론의 최대 관심사였다',
      ]);
      await era.printAndWait([
        '하지만 ',
        tachyon.get_colored_name(),
        '의 상태를 걱정해,',
        you.get_colored_name(),
        '는 관련 취재를 모두 거절했다',
      ]);
      await era.printAndWait('그랬더니 직접 몰려오다니……!');
      era.println();
      await tachyon.say_and_wait(['……', callname]);
      era.println();
      await era.printAndWait([
        '그제야 ',
        you.get_colored_name(),
        '는 떠올렸다. 무심코 아무 생각 없이 ',
        tachyon.get_colored_name(),
        '의 손을 잡고 달렸다……',
      ]);
      era.printButton('「타키온, 다리는 괜찮아!」', 1);
      await era.input();
      await era.printAndWait('……아무렇지도 않네. 조금 놀랐을 뿐이야. 후후');
      await era.printAndWait([
        '그래도 ',
        tachyon.uma_sex_title,
        '다. 다리가 불편해도 신체 능력은 인간보다 뛰어나다. 더구나 올해 복귀할, 전 G1급 ',
        tachyon.uma_sex_title,
        '이기도 하다',
      ]);
      era.println();
      await you.say_and_wait('……그래, 레이스 복귀', true);
      era.printButton('「타키온」', 1);
      era.printButton('「올해 출전 일정은……」', 2);
      await era.input();
      await tachyon.say_and_wait([
        '물론……',
        call_25,
        '와 같네. 말할 것도 없지 않나',
      ]);
      era.println();
      await era.printAndWait('역시 그런가');
      await era.printAndWait([you.get_colored_name(), '는 고개를 끄덕였다']);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '가 레이스를 떠난 이유도, 떠난 뒤에도, 모든 것은 ',
        coffee.get_colored_name(),
        '———',
        you.get_colored_name(),
        '의 또 다른 담당 ',
        tachyon.uma_sex_title,
        '를 위해서다',
      ]);
      await era.printAndWait([
        '그렇다면 제한된 출전 기회에는 당연히 ',
        coffee.get_colored_name(),
        '가 나가는 레이스가 우선일 것이다…………',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '? 왜 그러나?']);
      era.println();
      await era.printAndWait('그런데도 마음 깊은 곳에 떠오르고 만다');
      await era.printAndWait([
        '여름 합숙 때의,',
        tachyon.get_colored_name(),
        '의 얼굴',
      ]);
      await era.printAndWait([
        '국화상이 끝난 뒤의,',
        tachyon.get_colored_name(),
        '의 눈',
      ]);
      await era.printAndWait([
        '아리마를 앞두고……',
        tachyon.get_colored_name(),
        '가 결의를 굳혔을 때의 표정',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '？']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '는 그제야 알아챘다.',
        tachyon.get_colored_name(),
        '가 한동안 이쪽을 바라보고 있었던 모양이다. 황급히 정신을 차리고 왜 그러냐고 물었다',
      ]);
      era.println();
      await tachyon.say_and_wait('……아무것도 아니네. 다만 벌써 우리 차례야');
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '가 신전을 가리켰다.',
        you.get_colored_name(),
        '는 그제야 깨달았다. 급히 뛰어든 곳은 본전 앞에서 가호를 비는 긴 줄이었다',
      ]);
      era.printButton('「타키온은 이런 거 안 믿지 않았어?」', 1);
      await era.input();
      await era.printAndWait([
        '말하는 순간,',
        you.get_colored_name(),
        '는 실수했다는 것을 깨달았다',
      ]);
      if (relation <= 0) {
        await tachyon.say_and_wait(
          '……호오, 자네가 내 뜻을 신경 쓰는 날도 오는군',
        );
        era.println();
        await era.printAndWait([
          '아니나 다를까,',
          tachyon.sex,
          '의 빈정거림을 들었다',
        ]);
      } else if (relation <= 225) {
        era.println();
        await tachyon.say_and_wait('……데려온 건 자네 아닌가?');
        era.println();
        await era.printAndWait([
          '그러고 보니 아직 ',
          tachyon.get_colored_name(),
          '에게 사정을 말하지 않았다……',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '는 황급히 기자들에 대해 설명했다',
        ]);
        await era.printAndWait([
          '설명을 들은 ',
          tachyon.sex,
          '는 별 반응 없이 그렇군, 하고만 말했다',
        ]);
      } else if (relation <= 525) {
        await tachyon.say_and_wait(
          '믿지는 않네……그래도 자네의 마음이라 생각해 두지. 애초에 먼저 끌고 온 건 자네 아닌가?',
        );
        era.println();
        await era.printAndWait([
          '그러고 보니 아직 ',
          tachyon.get_colored_name(),
          '에게 사정을 말하지 않았다……',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '는 황급히 기자들에 대해 설명했다',
        ]);
        await era.printAndWait([
          '설명을 들은 ',
          tachyon.sex,
          '는 조금 미안한 눈빛을 했다',
        ]);
      } else {
        await tachyon.say_and_wait(
          '내가 믿는 건 신이 아니네. 나를 여기까지 데려온 자네라네',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '가 갑자기 낯간지러운 말을 했다',
        ]);
        await era.printAndWait([
          '그러고 보니 아직 ',
          tachyon.get_colored_name(),
          '에게 사정을 말하지 않았다……',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '는 황급히 기자들에 대해 설명했다',
        ]);
        await tachyon.say_and_wait(
          '훗, 범속한 날벌레 무리에게 우리를 의심할 자격이나 있나?',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          '는 코웃음을 쳤다',
        ]);
      }
      era.println();
      await era.printAndWait(['이야기하는 사이 줄의 맨 앞으로 왔다']);
      await era.printAndWait([
        you.get_colored_name(),
        '는 눈앞의 신상을 바라보았다',
      ]);
      await era.printAndWait('그럼……무엇을 빌어야 할까');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '는 여러 가지 생각 끝에 빌어야 할 소원을 떠올렸다',
      ]);
      await era.printAndWait('두 손을 모으고 신에게 기도한다');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 두 다리에 아무 일 없이, 무사히 끝까지 달릴 수 있기를',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 레이스가 늘 그렇듯 빛나기를',
      ]);
      await era.printAndWait([
        '그리고……',
        coffee.get_colored_name(),
        '의 트레이닝도 무사히 진행되기를',
      ]);
      era.println();
      await era.printAndWait([
        '기도를 마치고,',
        you.get_colored_name(),
        '는 옆의 ',
        tachyon.get_colored_name(),
        '를 보았다',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '는 벌써 건성으로 기도를 마치고 ',
        you.get_colored_name(),
        '를 기다리고 있다',
      ]);
      await era.printAndWait([
        '두 사람은 인파에서 빠져나와, 미련을 버리지 못한 기자들을 조심스레 피해 학원으로 돌아왔다',
      ]);
      era.println();
      await tachyon.say_and_wait(['그런데……자네는 무엇을 빌었나?']);
      era.println();
      await era.printAndWait([
        '어째서인지,',
        tachyon.get_colored_name(),
        '는 알고 싶어 한다',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '는 ',
        tachyon.sex,
        '에게 말했다……',
      ]);
      era.printButton('타키온의 건강 (체력+20%)', 1);
      era.printButton('타키온의 레이스 (무작위 능력치+20)', 2);
      era.printButton('카페의 트레이닝 (스킬 Pt+30)', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait([
            you.get_colored_name(),
            '는 ',
            tachyon.sex,
            '에게 말했다. 빈 것은 ',
            tachyon.sex,
            '의 두 다리가 무사하기를 바라는 소원이라고',
          ]);
          era.println();
          if (relation <= 225) {
            await tachyon.say_and_wait('……시시한 소원이군');
            await tachyon.say_and_wait(
              '몸이 무사하기만 바라면……레이스에 돌아가지 않으면 되지 않나?',
            );
            await tachyon.say_and_wait([
              '모든 걸 버리기로 정해 놓고, 그런 소원을 빌다니……',
              callname,
              ', 각오가 부족하군',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '의 대답은 신랄했다',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              '의 소원을 진심으로 비웃는 것처럼 들린다',
            ]);
          } else {
            await tachyon.say_and_wait('……몸이 무사하기를, 인가');
            await tachyon.say_and_wait('아니, 아무것도 아니네. 그저……후후');
            await tachyon.say_and_wait(
              '그래, 무사히 끝까지 달릴 수 있다면 더 바랄 것이 없겠지',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '는 가볍게 말했다',
            ]);
            await era.printAndWait('그저 잡담인 것처럼——실제로 그렇긴 하지만');
          }
          era.println();
          await era.printAndWait([
            '하지만 ',
            you.get_colored_name(),
            '는 놓치지 않았다',
          ]);
          await era.printAndWait([
            '소원을 말했을 때,',
            tachyon.get_colored_name(),
            '의 눈에 피어난 희망과 갈망을',
          ]);
          await era.printAndWait('……보았다고 무엇을 할 수 있겠는가');
          await era.printAndWait([
            '그 가능성을 쫓을 길은 몇 달 전,',
            you.get_colored_name(),
            '가 스스로 막아 버렸다',
          ]);
          await era.printAndWait([
            '지금의 ',
            you.get_colored_name(),
            '와 ',
            tachyon.sex,
            '는 파멸을 향해 계속 달리고 있을 뿐이다',
          ]);
          era.println();
          await era.printAndWait('그러니 기도할 수밖에 없다');
          await era.printAndWait('적어도 이 마지막 시간만큼은');
          await era.printAndWait([
            tachyon.sex,
            '가 고통과 부상을 피할 수 있기를',
          ]);
          era.println();
          await tachyon.say_and_wait('……볼일은 없으니 돌아가겠네');
          era.printButton('「쉬어 가면서 해」', 1);
          break;
        case 2:
          await era.printAndWait([
            you.get_colored_name(),
            '는 ',
            tachyon.sex,
            '에게 말했다. 빈 것은 ',
            tachyon.sex,
            '와 ',
            coffee.get_colored_name(),
            '의 레이스가 무사하기를 바라는 소원이라고',
          ]);
          era.println();
          await tachyon.say_and_wait('하하, 나쁘지 않은 소원이군!');
          await tachyon.say_and_wait([
            call_25,
            '는 이미 ',
            tachyon.sex,
            '의 가능성을 증명했지……다음은 내 차례라네',
          ]);
          await tachyon.say_and_wait([
            tachyon.sex,
            '의 발판이 되겠다고 해 놓고 내가 제자리에 머물러서는 안 되지. 그래서는 그저 강가의 돌멩이에 불과하니',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '는 말로는 ',
            coffee.get_colored_name(),
            '를 위해서라고 거듭 강조한다',
          ]);
          await era.printAndWait([
            '그런데도 ',
            you.get_colored_name(),
            '는 놓치지 않았다……',
          ]);
          await era.printAndWait([
            '레이스 이야기가 나왔을 때,',
            tachyon.get_colored_name(),
            '의 눈을 스친 투지를',
          ]);
          await era.printAndWait([
            '역시,',
            tachyon.get_colored_name(),
            '는 레이스로 돌아가고 싶어 한다',
          ]);
          await era.printAndWait('……하지만 바란다고 무엇을 할 수 있겠는가');
          await era.printAndWait([
            '그 가능성을 쫓을 길은 몇 달 전,',
            you.get_colored_name(),
            '가 스스로 막아 버렸다',
          ]);
          await era.printAndWait([
            '지금의 ',
            you.get_colored_name(),
            '와 ',
            tachyon.sex,
            '는 파멸을 향해 계속 달리고 있을 뿐이다',
          ]);
          era.println();
          await era.printAndWait('그러니 기도할 수밖에 없다');
          await era.printAndWait('적어도 이 마지막 시간만큼은');
          await era.printAndWait([
            '남은 시간을,',
            tachyon.sex,
            '가 마음껏 누릴 수 있기를',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '후후, 자네의 기대에 부응하려면 곧바로 트레이닝을 시작해야겠군',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '는 즐거운 듯 트레이닝장으로 향했다',
          ]);
          era.printButton('……트레이닝할 때 조심해', 1);
          break;
        case 3:
          await era.printAndWait([
            you.get_colored_name(),
            '는 ',
            tachyon.sex,
            '에게 말했다. 빈 것은 ',
            coffee.get_colored_name(),
            '의 트레이닝이 무사하기를 바라는 소원이라고',
          ]);
          era.println();
          await tachyon.say_and_wait('……그래');
          await tachyon.say_and_wait([
            '당연하지……우리의 모든 것은,',
            call_25,
            '가 더 멀리, 한계 너머로 나아가기 위한 것이니',
          ]);
          await tachyon.say_and_wait([
            tachyon.sex,
            '의 트레이닝에 문제가 생기면……전부 헛수고가 되네',
          ]);
          await tachyon.say_and_wait(
            '그러니 이것이 최우선이지……우선순위를 잊지 않는 자네는 든든하군',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '는 말로는 ',
            coffee.get_colored_name(),
            '를 위해서라고 거듭 강조한다',
          ]);
          await era.printAndWait([
            '그런데도 ',
            you.get_colored_name(),
            '는 놓치지 않았다……',
            coffee.get_colored_name(),
            '의 이름이 나왔을 때,',
            tachyon.sex,
            '의 눈에 깃든 쓸쓸함을',
          ]);
          await era.printAndWait([
            '역시,',
            coffee.get_colored_name(),
            '의 이야기는 꺼내지 말았어야 했다',
          ]);
          await era.printAndWait([
            '지금 ',
            tachyon.get_colored_name(),
            '의 트레이너인 나는,',
            tachyon.sex,
            '를 위해 생각해야 할 것이다',
          ]);
          await era.printAndWait([
            '하지만……',
            tachyon.sex,
            '를 걱정할 자격은 몇 달 전에 스스로 버렸다',
          ]);
          await era.printAndWait([
            '지금의 ',
            you.get_colored_name(),
            '와 ',
            tachyon.sex,
            '는 파멸을 향해 계속 달리고 있을 뿐이다',
          ]);
          era.println();
          await era.printAndWait('그러니 기도할 수밖에 없다');
          await era.printAndWait('외적인 조건들이 모두 충족되기를');
          await era.printAndWait([
            tachyon.sex,
            '를 만족시키고,',
            tachyon.get_colored_name(),
            '의 「유지」를 이루기 위해',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '후후, 자네의 기대에 부응하려면 나도 질 수 없겠군.',
            call_25,
            '와 같은 무대에 설 수 있을 만큼 회복해야겠네',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '는 담담히 말을 마치고 실험실로 향했다',
          ]);
          era.printButton('「……실험할 때 조심해」', 1);
      }
      await era.input();
      await era.printAndWait([
        tachyon.sex,
        '는 손을 흔들어 알겠다는 뜻을 전했다',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_b_95_14: (() => {
    const title = '팬 감사제';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      await era.printAndWait([
        '몸이 아직 완전히 준비되지 않았기에,',
        tachyon.get_colored_name(),
        '는 팬 감사제 행사와 취재를 거절했다',
      ]);
      await era.printAndWait([
        '그 때문에 주위에서는 「',
        tachyon.get_colored_name(),
        '의 복귀」에 대한 불안과 의심이 생겨났다',
      ]);
      await era.printAndWait([
        '하지만 그건 ',
        you.get_colored_name(),
        '와 ',
        tachyon.get_colored_name(),
        '에게 관계없는 일이다. 의심은……',
      ]);
      await era.printAndWait(
        '아니, 두 사람의 예정대로 진행한다면 의심이 많을수록 계획에는 도움이 될 것이다',
      );
      await era.printAndWait([
        '……그러니,',
        tachyon.get_colored_name(),
        '를 비판하는 말을 들어도,',
        you.get_colored_name(),
        '는 이를 악물고 그 자리를 떠날 수밖에 없었다',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_b_95_15: (() => {
    const title = '깜빡이는 광자';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {string} callname_25 マンハッタンカフェがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, coffee, you, callname, call_25, callname_25) => {
      await era.printAndWait('밤의 트레이닝장');
      await era.printAndWait(
        '원래라면 아무도 없어야 할 곳. 사람이 있어서는 안 될 시간……',
      );
      era.println();
      await tachyon.say_and_wait('……하하, 사람이 꽤 많군……');
      era.println();
      await era.printAndWait(
        '뜻밖에도 트레이닝장은 자율 훈련을 하는 사람들로 가득했다',
      );
      await era.printAndWait([
        'G1 시즌이 시작되는 긴장감에,',
        tachyon.uma_sex_title,
        '들이 스스로 달리는 것은 이 시기 트레센에서 흔히 볼 수 있는 풍경이다',
      ]);
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', [
        '아, 타키온 선……어, 트레이너 ',
        you.adult_sex_title,
        '！？',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '를 보고 인사하려던 후배는,',
        tachyon.sex,
        '의 뒤에 있던 ',
        you.get_colored_name(),
        '를 발견하고 걸음을 멈췄다',
      ]);
      await era.printAndWait('아무래도 자율 훈련은 권장되는 행동이 아니니까……');
      await era.printAndWait([
        '하지만 담당 ',
        tachyon.uma_sex_title,
        '와 함께 직접 자율 훈련을 하러 온 ',
        you.get_colored_name(),
        '에게,',
        tachyon.couple_title,
        '를 나무랄 자격은 없을 것이다',
      ]);
      era.printButton('「쉿」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '는 쓴웃음을 지으며 ',
        tachyon.sex,
        '에게 「쉿」 하고 신호했다.',
        tachyon.sex,
        '도 눈치 빠르게,',
        you.get_colored_name(),
        '를 보지 못한 척하고,',
        tachyon.get_colored_name(),
        '와 이야기를 이어 갔다',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '타키온 선배! 저도 올해 클래식에 들어왔어요! 사츠키상은 아쉽게～～못 나갔지만, 더비는 힘낼 거예요!',
      );
      await tachyon.say_and_wait('후후, 열심히 하게나');
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '으으～～본격화가 늦어서 트레이너가 사츠키상은 건너뛰자고……본격화를 앞당길 방법은 없을까요?',
      );
      await tachyon.say_and_wait(
        '자연에 맡기는 편이 좋네……성장을 억지로 앞당기면 아무래도 화근이 남으니……',
      );
      era.println();
      await era.printAndWait([
        '후배와 이야기하는 ',
        tachyon.get_colored_name(),
        '는,',
        you.get_colored_name(),
        '의 예상보다 온화했다',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 입에서 나온 말이라고는 선뜻 믿기 어려울 정도다',
      ]);
      await era.printAndWait('……생각해 보면 당연한 일이기도 하다');
      await era.printAndWait([
        '가능성을 무엇보다 중시하는 ',
        tachyon.get_colored_name(),
        '가 당장의 성적을 위해 ',
        tachyon.uma_sex_title,
        '의 가능성을 희생하는 것을 허락할 리 없다',
      ]);
      await era.printAndWait('더구나 상대는 더 넓은 가능성을 지닌 후배다');
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '아……벌써 늦었네요. 타키온 선배! 먼저 돌아갈게요!',
      );
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', [
        '그리고……텐노상(봄), 카페 선배도 강하지만 타키온 선배라면 꼭 이길 거라고 믿어요!',
      ]);
      era.println();
      await era.printAndWait([
        '동경으로 가득 찬 ',
        tachyon.sex,
        '의 눈이 빛난다',
      ]);
      era.drawLine();
      await era.printAndWait([
        coffee.get_colored_name(),
        '가 강한 것은 당연하다',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '와 나의 도움이 없어도,',
        coffee.get_colored_name(),
        '는 강하다',
      ]);
      await era.printAndWait([
        '정면으로 겨룬다면,',
        tachyon.get_colored_name(),
        '도 고전할 수밖에 없다',
      ]);
      await era.printAndWait('게다가……');
      if (
        new Array(5)
          .fill(0)
          .every((_, i) => era.get(`base:32:${5 + i}`) >= 1200)
      ) {
        await era.printAndWait([
          '능력은 충분해도 레이스 경험, 그리고 몇 달 동안 코스를 뛰지 않았다는 점에서,',
          tachyon.get_colored_name(),
          '는 명백히 ',
          coffee.get_colored_name(),
          '에게 뒤처진다',
        ]);
      } else {
        await era.printAndWait([
          '능력으로 보아도 지금의 ',
          tachyon.get_colored_name(),
          '는 사츠키상이나 더비 때의 ',
          tachyon.sex,
          '에게조차 미치지 못한다',
        ]);
      }
      await era.printAndWait('아무리 회복하려 해도 능력에는 한계가 있다');
      era.println();
      await era.printAndWait([
        '더구나,',
        tachyon.get_colored_name(),
        '의 출전 목적은……레이스에서 이기는 게 아니다',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '를 더 높은 정점으로 이끌기 위해서일 뿐이다',
      ]);
      await era.printAndWait(
        '승패가 아무래도 좋다는 게 아니다. ……이겨서는 안 된다. 이기기를 바라서는 안 된다',
      );
      await era.printAndWait([
        '이긴다면,',
        tachyon.get_colored_name(),
        '의 꿈이자 마지막 희망인 ',
        coffee.get_colored_name(),
        '가,',
        tachyon.get_colored_name(),
        '의 한계에 패했다는 뜻이 되니까',
      ]);
      await era.printAndWait('그러니……');
      era.println();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait('그러니 대답하기 어렵겠지');
      await era.printAndWait('자신을 믿는 후배에게 그런 말을 할 수 있을까');
      await era.printAndWait(['텐노상(봄)에서는 절대로 이길 수 없다고']);
      await era.printAndWait(
        '얼어붙은 분위기 속에서 동경의 빛이 당혹감으로 바뀌어 가는 후배에게, 정말 그렇게 말할 수 있을까',
      );
      era.println();
      await era.printAndWait([
        '원래라면 여기서 ',
        tachyon.get_colored_name(),
        '를 도와야 할 ',
        you.get_colored_name(),
        '도 어째서인지 발이 붙박여 입을 열지 못했다',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '도 어쩌면 대답을 기다리는 것일지 모른다',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '는 정말 승패에 관심이 없을까',
      ]);
      await era.printAndWait('정말 승리를 내줄 수 있을까');
      await era.printAndWait(
        '자신이 소중히 여기는 가능성 앞에서 포기한다고 말할 수 있을까',
      );
      era.println();
      await era.printAndWait('얼마나 시간이 지났는지 모르겠다');
      await era.printAndWait([
        '다른 자율 훈련 중이던 ',
        tachyon.uma_sex_title,
        '들이 돌아가고, 밤에는 다시 침묵이 내려앉았다',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……',
        call_25,
        '는 ',
        tachyon.sex,
        ', 정말 강한 상대라네',
      ]);
      era.println();
      await era.printAndWait('……그렇다');
      await era.printAndWait('그게 당연하다');
      era.println();
      await era.printAndWait([
        '애초에 만약 ',
        tachyon.get_colored_name(),
        '가 진심으로 이 승부를 이기려 한다면, 가장 곤란한 건 나일 것이다',
      ]);
      await era.printAndWait([
        '처음 이런 희극 같은 제안을 받아들인 것은, 그게 ',
        coffee.get_colored_name(),
        '와 ',
        tachyon.get_colored_name(),
        '둘 모두에게 이롭기 때문이었다',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 영광을 얻고,',
        tachyon.get_colored_name(),
        '는 ',
        tachyon.sex,
        '가 원하는 실험 결과를 얻는다',
      ]);
      await era.printAndWait([
        '만약 ',
        tachyon.get_colored_name(),
        '가 이제 와 말을 뒤집는다면, 사이에 끼어 곤란해지는 것은 ',
        you.get_colored_name(),
        '다',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '하지만……내가 이길 걸세.',
        call_25,
        '가 ',
        tachyon.sex,
        '아무리 강해도 마찬가지야. 이기는 건 나라네',
      ]);
      era.println();
      await era.printAndWait('！');
      await era.printAndWait('설마……생각을 바꾼 건가');
      await era.printAndWait('이건 곤란한데……');
      await era.printAndWait([
        '후배에게 적당히 둘러댄 말이라 해도, 이 대답은 ',
        tachyon.get_colored_name(),
        '의 마음이 흔들리기 시작했다는 증거다',
      ]);
      await era.printAndWait(
        '더구나 대충 넘기려 했다면 조금 전까지 침묵할 필요도 없었다',
      );
      await era.printAndWait('그렇다면……나는 어떻게 해야 할까');
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 ',
        callname_25,
        '이자,',
        tachyon.get_colored_name(),
        '의 ',
        callname,
      ]);
      await era.printAndWait('어느 쪽을 선택해야 할까');
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '네! 그날 꼭 타키온 선배를 응원하러 갈게요!',
      );
      era.println();
      await era.printAndWait([
        '경쾌한 발소리가 멀어지고, 남은 두 사람은 고요한 트레이닝장에서 별이 빛나는 하늘과 함께 있었다',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '를 선택한다면, Plan B를 택한 나는 뭐가 되는가',
      ]);
      if (era.get('love:25') >= 50) {
        await era.printAndWait([
          '이대로 ',
          tachyon.get_colored_name(),
          '를 계속 돕는다면, 온 힘을 다해 지원해 온 그 ',
          tachyon.teen_sex_title,
          '를 마주할 낯이 있을까.',
          tachyon.sex,
          '가 타 준 커피를 마주할 낯이 있을까',
        ]);
      }
      era.println();
      await era.printAndWait([
        '그러니 도와야 할 상대는 ',
        coffee.get_colored_name(),
        '일 것이다',
      ]);
      await era.printAndWait([
        '그러니,',
        tachyon.get_colored_name(),
        '에게 확인해야 한다. 방금 말은 그저 후배에게 한 의례적인 말일 뿐이라고',
      ]);
      await era.printAndWait(
        '그러니……이 상황에서 가슴이 기쁨으로 뛰어서는 안 될 텐데',
      );
      era.println();
      await era.printAndWait('그런데도 지금 마음은 이렇게나 기뻐하고 있다');
      await era.printAndWait(
        '설마 내가 진정으로 선택하고 싶었던 것은 Plan A였을까',
      );
      await era.printAndWait([
        '설마,',
        coffee.get_colored_name(),
        '를 돕는 것이 본심에 어긋난 일이었을까',
      ]);
      await era.printAndWait('……아니, 그것만은 아니라고 단언할 수 있다');
      await era.printAndWait(
        '그렇다면 왜……이렇게 갈등해야 할 상황인데도 심장이 도무지 진정되지 않는가',
      );
      await era.printAndWait([
        '참지 못하고,',
        you.get_colored_name(),
        '는 입을 열었다',
      ]);
      era.printButton('「타키온……방금 그 말, 진심 아니지?」', 1);
      era.printButton('「타키온……방금 그 말, 농담이지?」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '물론이지. 승패에 집착하는 건 아이들의 특권이네……우리에게 필요한 건 실험 데이터뿐이야. 그뿐이라네',
      );
      await era.printAndWait('말은 거짓말을 한다');
      await era.printAndWait('목소리는 거짓말을 한다');
      await era.printAndWait(
        '언제나 이성적이라 자칭하는 사람은 자신의 이익을 위해 거짓말을 한다',
      );
      await era.printAndWait('하지만……감동은 거짓말하지 않는다');
      era.println();
      await era.printAndWait([
        '방금 말이 얼마나 진실이고 얼마나 거짓인지,',
        you.get_colored_name(),
        '는 알 수 없다',
      ]);
      await era.printAndWait([
        '하지만……',
        tachyon.sex,
        '의 눈에는 몇 달 전 거의 사라졌던 빛이 있다',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 눈을 불태우고, 감동 속에서 사라졌던 빛',
      ]);
      await era.printAndWait('오늘 밤, 다시 희미한 불꽃이 켜졌다');
    };
    f.title = title;
    return f;
  })(),
  tenn_spr_end: (() => {
    const title = '이제 알겠다';
    /**
     * Plan B かつマンハッタンカフェ同時出走
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {string} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {boolean} tachyon_win アグネスタキオンが勝ったか
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      love,
      tachyon_win,
    ) => {
      await era.printAndWait('아아, 그런 거였구나');
      era.println();
      await era.printAndWait(['텐노상(봄)']);
      await era.printAndWait('마지막 직선에서 겨루는 두 사람을 보며');
      await era.printAndWait('드디어 알았다');
      era.println();
      await era.printAndWait([
        '왜 처음부터,',
        tachyon.get_colored_name(),
        '의 성과를 발판으로 삼는다는 걸 알면서도 ',
        coffee.get_colored_name(),
        '를 지원하는지',
      ]);
      await era.printAndWait([
        '왜 그날 밤,',
        tachyon.get_colored_name(),
        '의 대답에 기뻐하고 말았는지',
      ]);
      era.println();
      await era.printAndWait([
        '광속을 뛰어넘는 모습과, 칠흑의 사냥개처럼 앞의 상대를 물어뜯는 달리기를 보고서야 비로소 이해했다',
      ]);
      await era.printAndWait([
        '처음 ',
        tachyon.couple_title,
        '가 달리는 모습을 본 순간부터',
      ]);
      await era.printAndWait([
        '나는 이미 깊이 ',
        tachyon.couple_title,
        '',
        era.get('love:25') >= 75 && love >= 75 ? '' : '의 달리기를',
        '사랑하고 있었다',
      ]);
      era.println();
      await era.printAndWait(['빛처럼 반짝이는 ', tachyon.get_colored_sex()]);
      await era.printAndWait(['그림자처럼 검은 ', coffee.get_colored_sex()]);
      await era.printAndWait(['처음부터 이렇게 단순한 것이었다']);
      era.println();
      await era.printAndWait('아이 같은, 철없는 소원');
      await era.printAndWait(
        '누가 강한지 가리고 싶다……아니, 그저 같은 경기장에서 겨루는 모습을 보고 싶다',
      );
      await era.printAndWait([
        '강하고 약하고가 아니다. 그저 ',
        tachyon.couple_title,
        '가 달리는 모습을 보고 싶다',
      ]);
      era.println();
      await era.printAndWait(
        '결승선 앞의 이 직선이 영원히 끝나지 않았으면 좋겠다',
      );
      await era.printAndWait([
        '영원히,',
        tachyon.couple_title,
        '가 코스를 질주하는 이 모습을 바라볼 수 있다면 좋겠다',
      ]);
      await era.printAndWait([
        '어느새,',
        you.get_colored_name(),
        '는 울고 있었다',
      ]);
      era.println();
      await era.printAndWait('빛인가, 그림자인가');
      await era.printAndWait(
        '모든 것을 비추는 빛이 그림자의 도망칠 곳을 빼앗을까',
      );
      await era.printAndWait('모든 것을 삼키는 어둠이 빛을 집어삼킬까');
      era.println();
      await you.say_as_passer_by_and_wait('해설', [
        '마지막 순간까지 서로를 물어뜯는 대접전!',
        coffee.get_colored_name(),
        '! 아니면 ',
        tachyon.get_colored_name(),
        '! 초광속의 도주인가, 마천루의 체포인가! 지금 결승선을 통과한 것은……!',
      ]);
      era.drawLine();
      if (tachyon_win) {
        await tachyon.say_and_wait('………이긴……건가?');
      } else {
        await tachyon.say_and_wait('………진……건가?');
      }
      era.println();
      await tachyon.print_and_wait('이해할 수 없군');
      await tachyon.print_and_wait('불합리해');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '의 출전은,',
        coffee.get_colored_name(),
        '를 성공시키기 위한 것이었다',
      ]);
      await tachyon.print_and_wait([
        coffee.sex,
        '를 정점에 올리기 위해, 레이스에서 ',
        coffee.sex,
        '가 가장 힘들어하는 부분을 찔러,',
        coffee.sex,
        '에게 발전을 강요한다',
      ]);
      await tachyon.print_and_wait([
        '그 뒤에는……눈에 띄지 않게 뒤로 물러나,',
        tachyon.sex,
        '가 승리라는 이름의 보상을 맛보게 한다',
      ]);
      if (tachyon_win) {
        await era.printAndWait('그 결과');
        await you.say_as_passer_by_and_wait('해설', [
          tachyon.get_colored_name(),
          '! 광속을 뛰어넘어, 요도의 언덕에 선 방패의 영광은 ',
          tachyon.get_colored_name(),
          '에게로!',
        ]);
      } else {
        await tachyon.print_and_wait('그래야 했는데, 그렇다면……');
        era.println();
        await you.say_as_passer_by_and_wait('해설', [
          coffee.get_colored_name(),
          '! 초광속을 삼켜, 요도의 언덕에 선 방패의 영광은 ',
          coffee.get_colored_name(),
          '에게로!',
        ]);
        era.println();
        await tachyon.print_and_wait('왜……지금 이렇게……분한 거지!');
      }
      era.println();
      await tachyon.print_and_wait('처음에는 순조로웠네');
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        '의 장점도 단점도 그 안정성에 있다',
      ]);
      await tachyon.print_and_wait([
        '극도의 안정성 덕분에,',
        tachyon.sex,
        '는 지구력이 가장 중요한 장거리에서 늘 우위를 점한다',
      ]);
      await tachyon.print_and_wait([
        '하지만 너무 안정적인 탓에,',
        tachyon.sex,
        '에게는 승부처에서의 폭발력이 부족하다',
      ]);
      await tachyon.print_and_wait([
        '그러니 ',
        tachyon.sex,
        '가 편안하게 느끼는 페이스를 깨고,',
        tachyon.sex,
        '에게 한계를 뛰어넘도록 재촉한다',
      ]);
      era.println();
      await tachyon.print_and_wait('그런데 예상과 달리');
      await tachyon.print_and_wait([
        tachyon.sex,
        '는 리듬을 되찾는 데 그치지 않고 더욱 진화해, 주법을 완성했다',
      ]);
      await tachyon.print_and_wait(
        '여기까지면 이 레이스의 목적은 끝났을 터인데',
      );
      await tachyon.print_and_wait('그런데도……');
      era.println();
      await tachyon.print_and_wait('이유는 생각할 것도 없네');
      await tachyon.print_and_wait('그날 밤, 후배와 나눈 대화가 주된 원인이야');
      await tachyon.print_and_wait([
        '하지만……후배 ',
        tachyon.sex,
        '에게 잘못은 없네',
      ]);
      await tachyon.print_and_wait(['문제는,', tachyon.get_colored_name()]);
      era.println();
      await tachyon.print_and_wait(
        '마음속에 망설임이 없었다면 그때 정확히 대답할 수 있었을 거야',
      );
      await tachyon.print_and_wait('적당히 둘러대든, 솔직하게 대답하든');
      await tachyon.print_and_wait(
        '마음속에 의심이 없었다면 입 밖에 낼 수 있었겠지',
      );
      era.println();
      await tachyon.say_and_wait('나는……');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '는 결국 한 명의 ',
        tachyon.uma_sex_title,
        '다',
      ]);
      await tachyon.print_and_wait(
        '달리는 본능과 이기고 싶은 본능을 거스를 수 없어',
      );
      await tachyon.print_and_wait([
        tachyon.uma_sex_title,
        '의 가능성에는 다른 길도 얼마든지 있는데',
      ]);
      await tachyon.print_and_wait('굳이 코스에 집착할 필요는 없는데');
      await tachyon.print_and_wait([
        '그런데도 ',
        call_25,
        '를 택하고, 남이 달리는 모습을 괴롭게 바라보는 길만 남았어도 다른 길을 선택하지 않은 이유',
      ]);
      await tachyon.print_and_wait([
        '그것은……',
        tachyon.get_colored_name(),
        '가 달리는 것을 사랑하기 때문이라네',
      ]);
      era.println();
      await tachyon.print_and_wait('거기까지 생각하자 문득 어깨의 힘이 풀렸다');
      await tachyon.print_and_wait(
        '아무리 그럴듯한 구실과 이유로 감춰도 마찬가지야',
      );
      await tachyon.print_and_wait([
        '아무리 저항해도,',
        tachyon.uma_sex_title,
        '의 본능에서 벗어날 수는 없어',
      ]);
      await tachyon.print_and_wait('……벗어나고 싶지도 않고');
      await tachyon.print_and_wait([
        '가장 빠르고 가장 강한 ',
        tachyon.uma_sex_title,
        '가 되고 싶다',
      ]);
      await tachyon.print_and_wait(
        '적수와 마지막 순간까지 맞붙어 사투를 벌이고 싶다',
      );
      await tachyon.print_and_wait('자신을……증명하고 싶다');
      era.println();
      await tachyon.print_and_wait([
        '……하지만 그렇다면, 어떻게 ',
        you.sex,
        '를 마주해야 하지',
      ]);
      await tachyon.print_and_wait(
        '계속 도와주고 언제나 곁에서 지지해 준 사람',
      );
      await tachyon.print_and_wait(['무슨 얼굴로 ', you.sex, '를 만나야 할까']);
      await tachyon.print_and_wait(['……', you.sex, '하지만 화를 내겠지']);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '와 ',
        coffee.get_colored_name(),
        '의 전담 트레이너로서',
      ]);
      await tachyon.print_and_wait([
        '처음 정한 것은 레이스를 ',
        call_25,
        '에게 양보하고 자신은 뒤로 물러나는 일이었다',
      ]);
      era.println();
      await tachyon.print_and_wait('그런데……');
      if (tachyon_win) {
        await tachyon.print_and_wait('통제 불능에 불안정한 이 문제아는');
        await tachyon.print_and_wait(
          '한순간의 열기에 취해 모든 것을 망쳐 버렸다',
        );
      } else {
        await tachyon.print_and_wait([
          '이제 와서 ',
          you.sex,
          '에게 나는……아직 달리고 싶다고 말하라는 건가',
        ]);
        await tachyon.print_and_wait('휘두르는 것도 정도가 있지');
      }
      era.println();
      await tachyon.print_and_wait('정신을 차렸을 때는');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '는 코스에서 달아나고 있었다',
      ]);
      era.drawLine();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '는 선수 대기실로 돌아오지 않았다',
      ]);
      await era.printAndWait([
        '레이스장 어디에도,',
        tachyon.sex,
        '의 모습은 없다',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '는 걱정되어 기숙사장에게 전화했고,',
        tachyon.get_colored_name(),
        '가 이미 트레센으로 돌아왔다는 말을 듣고서야 한숨 돌렸다',
      ]);
      await era.printAndWait('……아니, 한숨 돌렸다고는 할 수 없다');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '는 대체 왜……왜 혼자 학원으로 돌아간 걸까',
      ]);
      await era.printAndWait(['기회를 봐서,', tachyon.sex, '와 이야기하자']);
    };
    f.title = title;
    return f;
  })(),
  we_b_95_18: (() => {
    const title = '다시 피어나는 광자';
    /**
     * 天皇賞（春）でカフェに勝ったあと
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      relation,
      love,
    ) => {
      await era.printAndWait('더는 이대로 둘 수 없다');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '가 몇 번째인지도 모를 만큼,',
        you.get_colored_name(),
        '와의 대화를 피한 뒤,',
        you.get_colored_name(),
        '는 결심했다',
      ]);
      await era.printAndWait('트레이닝에는 오고, 실험도 평소처럼 한다');
      await era.printAndWait([
        '하지만 잠깐 쉬며 텐노상(봄) 이야기를 꺼내려 하면,',
        tachyon.sex,
        '는 곧바로 그 자리를 피한다',
      ]);
      await era.printAndWait('언제 어디서든, 심지어 실험 도중에도');
      era.println();
      await era.printAndWait('이대로는 안 된다');
      await era.printAndWait([
        tachyon.sex,
        '의 표정은 날마다 시들어 가고, 주눅마저 들어 있다',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '는 이래서는 안 된다',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '는 이래서는 안 되는 존재다',
      ]);
      era.println();
      await era.printAndWait('모처럼 되찾은 눈빛을');
      await era.printAndWait('이런 일로 꺼뜨릴 수는 없다');
      await era.printAndWait('피하는 이유는 대충 알겠다');
      if (relation <= 75) {
        await era.printAndWait('아직 모르는 부분도 있지만');
      }
      await era.printAndWait('그러니……');
      era.printButton(`${tachyon.sex}에게 분명히 말해야 한다`, 1);
      await era.input();
      era.drawLine();
      await tachyon.print_and_wait('……벌써 몇 주째 피하고 있군');
      await tachyon.print_and_wait([
        '텐노상(봄)이 끝난 뒤부터 줄곧 ',
        you.sex,
        '를 피하고 있다',
      ]);
      await tachyon.print_and_wait('나를 위해 모든 것을 희생한 사람을');
      await tachyon.print_and_wait([
        '이성적으로 보자면, 달릴 생각도 미래도 없는 ',
        tachyon.uma_sex_title,
        '를 계속 담당하는 것은 무의미하고, 담당 자리와 자원과 시간을 낭비하는 행동이다',
      ]);
      await tachyon.print_and_wait([
        '감정적으로 보자면,',
        you.sex,
        '의 꿈을,',
        you.sex,
        '가 매료된 달리기를 망가뜨린 데다, 우스운 Plan B에까지 끌어들여 꿈마저 희생하게 하고 ',
        you.sex,
        '에게 맞추게 했다',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '그런데도 ',
        you.sex,
        '는 뒤돌아보지 않고 따라왔다',
      ]);
      await tachyon.print_and_wait('내 연구를 위해 스스로 실험체가 되었다');
      await tachyon.print_and_wait([
        '내 고집 때문에,',
        call_25,
        '까지 끌어들였다',
      ]);
      await tachyon.print_and_wait([
        '그러니 그 보답으로,',
        you.sex,
        '와 ',
        call_25,
        '에게 명성을 안겨, 조금이라도 보답하고 싶었다',
      ]);
      await tachyon.print_and_wait('하지만……');
      era.println();
      await tachyon.say_and_wait('……음?');
      era.println();
      await tachyon.print_and_wait([
        '오늘도 같았다. 일부러 ',
        you.sex,
        '와의 대화를 피하고, 꼭 필요할 때 외에는 마주치지 않으려 애쓰며 연구실 앞까지 돌아왔다',
      ]);
      await tachyon.print_and_wait(
        '그런데……연구실 밖에는 이미 누군가 기다리고 있었다',
      );
      era.println();
      await tachyon.say_and_wait(['……', callname]);
      era.println();
      await tachyon.print_and_wait('아니');
      await tachyon.print_and_wait('안 돼');
      await tachyon.print_and_wait('지금은 아니야');
      era.println();
      await tachyon.print_and_wait('간단한 일이네');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '는 타카라즈카 기념에서 지기만 하면 된다',
      ]);
      await tachyon.print_and_wait([
        '타카라즈카 기념에서 승리를 양보하면, 다시……',
      ]);
      era.println();
      await tachyon.print_and_wait('아니, 이제 무리야');
      await tachyon.print_and_wait('달리는 본능을 억누를 수 없어');
      await tachyon.print_and_wait('이건 그저 자기기만, 현실 도피라네');
      era.println();
      await tachyon.print_and_wait('눈앞의 인영이 통로 한가운데 서 있다');
      await tachyon.print_and_wait('온몸이 떨린다……당연하지. 화가 나겠지');
      await tachyon.print_and_wait(
        '잘못을 저질러 놓고 계속 도망치기만 한 바보에게',
      );
      await tachyon.print_and_wait('좋아, 각오는 되어 있네');
      await tachyon.print_and_wait('모든 분노를……쏟아 내게나');
      era.println();
      await tachyon.say_and_wait(['……', callname]);
      era.drawLine();
      await era.printAndWait('먼저 무슨 말을 해야 할까');
      await era.printAndWait([
        '우선 말해야겠지.',
        tachyon.sex,
        '를 탓할 생각은 없다고',
      ]);
      await era.printAndWait([
        '상대가 봐줘서 얻은 승리 따위,',
        coffee.get_colored_name(),
        '는 ',
        tachyon.sex,
        '절대로 기뻐하지 않을 것이다',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '를 더 높은 정점으로 이끈다는 목적은 무너지지 않았다',
      ]);
      await era.printAndWait([
        '오히려,',
        coffee.get_colored_name(),
        '를 완전히 손바닥 위에 올려놓고 다룰 수 있다고 생각한 것이 지나치게 오만했다',
      ]);
      await era.printAndWait(
        '앞으로도 전력을 다해 출전하며 서로를 갈고닦는 것이야말로 Plan B를 가장 잘 실행하는 길이다',
      );
      await era.printAndWait('그러니……');
      await era.printAndWait('그래, 이렇게 말하자');
      era.printButton('「타키온……」', 1);
      era.printButton('「텐노상, 정말 대단했어!」', 2);
      await era.input();
      await tachyon.say_and_wait('……어?');
      era.println();
      await era.printAndWait('그렇다');
      await era.printAndWait('이론이나 논리보다 이 말이 내게 어울린다');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 달리기에 빠져 그를 위해 모든 것을 바치는 모르모트',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '는 어째서인지 갑자기 내 두 눈을 빤히 바라보았다',
      ]);
      await era.printAndWait(
        '처음 만났을 때와 같다. 사츠키상이나 더비를 앞두고 있을 때와 같다',
      );
      await era.printAndWait([
        '내 눈은 대체 무슨 색이기에,',
        tachyon.sex,
        '는 매번 그렇게 감탄하는 걸까',
      ]);
      era.println();
      await tachyon.say_and_wait('……하지만 그러면 Plan B는……');
      era.printButton(
        `「타키온이 힘을 빼 줘야 이길 수 있는 카페가 정말로${tachyon.uma_sex_title}의 한계를 뛰어넘을 수 있을까?」`,
        1,
      );
      await era.input();
      await tachyon.say_and_wait('……');
      era.println();
      await era.printAndWait('꿈에 대한 맹목인가');
      await era.printAndWait([
        '아니면 ',
        coffee.get_colored_name(),
        '를 향한 집착인가',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '는 가장 중요한 것을 잊고 있었던 모양이다',
      ]);
      if (love >= 75) {
        await era.printAndWait([
          '이렇게 보면 결혼한 뒤의 ',
          tachyon.get_colored_name(),
          '는 의외로 아이를 무작정 감싸는 성격일지도 모르겠다',
        ]);
      }
      era.println();
      await tachyon.say_and_wait([
        '……그건,',
        tachyon.get_colored_name(),
        '의 트레이너로서 하는 말이지? 그렇다면 ',
        coffee.get_colored_name(),
        '의 트레이너는 어쩔 건가',
      ]);
      if (relation <= 75) {
        era.println();
        await era.printAndWait([
          '……순간 충격을 받아,',
          you.get_colored_name(),
          '는 할 말을 잊었다',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '가 나를 피하는 이유를 몰랐다',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          '에게 느끼는 죄책감이라면 이해할 수 있다. 그런데 왜 나를 피하는 걸까',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '……나를 걱정해서……?',
        ]);
      }
      await era.printAndWait([
        '그렇다면,',
        coffee.get_colored_name(),
        '의 트레이너로서 답해야 한다',
      ]);
      era.printButton('「분해……카페를 이기게 해 주지 못했어」', 1);
      era.printButton(
        '「그러니 타카라즈카에서는 카페가 지금보다 강해져서 타키온을 뛰어넘을 거야!」',
        2,
      );
      await era.input();
      await tachyon.say_and_wait('……분하다고……?');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '는 그 말을 곱씹고 있다. 하지만 해야 할 말은 아직 남았다',
      ]);
      era.printButton('「하지만 타키온의 트레이너로서는!」', 1);
      era.printButton(
        '「타키온이 카페에게 지게 두지 않겠어. 타카라즈카도 타키온이 이길 거야!」',
        2,
      );
      await era.input();
      await era.printAndWait('틀림없다');
      await era.printAndWait([
        '이것이,',
        tachyon.get_colored_name(),
        '의 트레이너「이자」',
        coffee.get_colored_name(),
        '의 트레이너가 내놓는 답이다',
      ]);
      await era.printAndWait('이유? 텐노상(봄) 때 이미 말했을 것이다');
      await era.printAndWait([
        '나는 깊이 ',
        tachyon.couple_title,
        '의 달리기를 사랑한다',
      ]);
      if (love >= 75 && era.get('love:25') >= 75) {
        await era.printAndWait([
          '나는 깊이 ',
          tachyon.couple_title,
          '를 사랑한다',
        ]);
      }
      era.println();
      await tachyon.say_and_wait(['……', callname]);
      era.println();
      await era.printAndWait('나직한 부름');
      await era.printAndWait('그리고 팽팽한 침묵');
      await era.printAndWait('얼마나 지났는지 모를 침묵 끝에……');
      era.println();
      await tachyon.say_and_wait([
        '……',
        callname,
        ', 그렇게 내 달리기가 좋은가?',
      ]);
      era.println();
      await era.printAndWait(
        '대답할 필요도 없다. 얼굴과 눈이 모든 것을 말해 준다',
      );
      era.println();
      await tachyon.say_and_wait(
        '…………그렇다면 관심 있나? 나와 조금 더 함께 걸을 생각이',
      );
      await tachyon.say_and_wait(
        '함께해 주게. 프랑스로 향하는 낭만적인 여행을',
      );
      era.println();
      await era.printAndWait('……어?');
    };
    f.title = title;
    return f;
  })(),
  before_takz_kin_b: (() => {
    const title = '마음을 하나로';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait('끓어오르는 피');
      await era.printAndWait('얼마 만일까. 이 레이스의 열기');
      era.println();
      await tachyon.say_and_wait([callname, '……다녀오겠네']);
      era.printButton(`「가! ${tachyon.uma_sex_title}의 한계를 보여 줘!」`, 1);
      era.printButton('「걱정 말고 이겨. 다시 한번 가슴을 뜨겁게 해 줘!」', 2);
      await era.input();
      await tachyon.say_and_wait('그래……그리고 타카라즈카가 끝나면……');
      era.println();
      await era.printAndWait([you.get_colored_name(), '는 고개를 끄덕였다']);
      await era.printAndWait('그때 약속한 더 넓은 세계');
      era.printButton('「우리의 한계를 세계의 정점에 새기자!」', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  takz_kin_end_b: (() => {
    const title = '한계를 향해';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     */
    const f = async (tachyon, coffee, you, callname, call_25) => {
      await tachyon.say_and_wait(['하아……하아……카……', call_25, '……！']);
      era.println();
      await tachyon.print_and_wait('온 힘을 짜낸 외침');
      await tachyon.print_and_wait('레이스 도중에 말을 한다');
      await tachyon.print_and_wait(
        '실험의 관점에서도, 경주의 관점에서도, 극히 상식을 벗어난 행동이다',
      );
      await tachyon.print_and_wait([
        '그런데도 ',
        tachyon.get_colored_name(),
        '는 목소리를 냈다',
      ]);
      era.println();
      await tachyon.print_and_wait(
        '마지막 직선에 앞서, 최종 스퍼트가 시작되기 전에',
      );
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '가 내던진 상식 밖의 선언',
      ]);
      era.println();
      await tachyon.say_and_wait('따라잡을 수 있다면……어디 해 보게!');
      era.println();
      await tachyon.print_and_wait([
        '앞에서 달리는 ',
        tachyon.get_colored_name(),
      ]);
      await tachyon.print_and_wait(
        '가 뒤에서 끈질기게 따라붙는 사냥개에게 도발을 던진다',
      );
      era.drawLine();
      await coffee.say_and_wait('……시시해요');
      await coffee.say_and_wait('그런 짓을 하면 누가 기뻐할 거라고 생각하세요');
      await coffee.say_and_wait(
        '양보받지 않아도 저는 정면으로 당신을 뛰어넘을 거예요……그리고 친구도',
      );
      era.println();
      await tachyon.print_and_wait(
        '레이스 전에 잘못을 털어놓자, 아니나 다를까 호되게 혼이 났네',
      );
      await tachyon.print_and_wait('하지만……뭐, 이러니 훨씬 편하군');
      await tachyon.print_and_wait([
        callname,
        '처럼 전부 받아 주는 편이 오히려 걱정되니 말이야',
      ]);
      await tachyon.print_and_wait(
        '그러니 오늘은 망설임 없이 전력을 다해 달릴 수 있네',
      );
      era.println();
      await tachyon.print_and_wait('상대를 향한 경의');
      await tachyon.print_and_wait('자신을 향한 갈망');
      await tachyon.print_and_wait('지원자를 위한 보답');
      era.println();
      await tachyon.say_and_wait([
        '이것들을 바치는,',
        tachyon.get_colored_name(),
        '의 일본 국내 마지막 춤이라네',
      ]);
      await you.say_as_passer_by_and_wait('해설', [
        tachyon.get_colored_name(),
        '! 아니면 ',
        coffee.get_colored_name(),
        '！',
        tachyon.get_colored_name(),
        '！',
        coffee.get_colored_name(),
        '！',
        tachyon.get_colored_name(),
        '！',
        coffee.get_colored_name(),
        '! 지금 두 사람이 결승선을———————————!',
      ]);
      era.println();
      await tachyon.print_and_wait('누가 이겼는가');
      await tachyon.print_and_wait('누가 졌는가');
      await tachyon.print_and_wait('아니, 이제 아무래도 좋다');
      era.println();
      await tachyon.print_and_wait('이것으로 모든 것이 끝났다');
      await tachyon.print_and_wait([
        '오늘 레이스에서,',
        tachyon.get_colored_name(),
        '는 자신의 최선을 보여 주었다',
      ]);
      await tachyon.print_and_wait('다음 레이스도 이미 시야에 들어와 있네');
      era.drawLine();
      era.printButton('「강해, 빨라! 카페도……타키온도……!」', 1);
      era.printButton('「너희의 트레이너일 수 있어서……정말……다행이야!」', 2);
      await era.input();
      await tachyon.say_and_wait([
        '후후, 갑자기 그런 감상적인 말을 하다니. 대단원 같군. 우리의 레이스는 아직 끝나지 않았네,',
        callname,
      ]);
      era.println();
      await era.printAndWait('아아, 그렇다');
      era.println();
      await tachyon.say_and_wait('……기자회견이 곧 시작되겠군');
      era.println();
      await era.printAndWait([
        '상반기 최강의 ',
        tachyon.uma_sex_title,
        '를 가리는 총결산. 이런 레이스에 기자들이 모이지 않을 리 없다',
      ]);
      era.print('이 무대에서 앞으로의 목표를 발표하자');
      era.printButton('「가, 타키온」', 1);
      era.printButton('「난 언제까지나 네 뒤에 있을게」', 2);
      await era.input();
      await tachyon.say_and_wait('……그래, 다녀오겠네');
      era.drawLine();
      await tachyon.say_and_wait([
        '그런 이유로 다음 출전 예정은 세계 최고봉, 개선문상이네. 이상으로, 기자 여러분은 질문 있나?',
      ]);
      era.println();
      await era.printAndWait('찬물을 끼얹은 듯한 침묵');
      await era.printAndWait([
        '회견 전부터 오늘 ',
        tachyon.get_colored_name(),
        '진영이 중대 발표를 할 거라 들었던 기자들조차',
      ]);
      await era.printAndWait('그 무게에 저도 모르게 숨을 삼켰다');
      era.println();
      await tachyon.say_and_wait('———질문이 없다면 오늘 취재는 여기까지……');
      era.println();
      await era.printAndWait(
        '그제야 기자들은 꿈에서 깬 듯 일제히 질문을 쏟아 냈다',
      );
      await era.printAndWait(
        '하지만 전개가 너무 갑작스러워, 준비한 질문은 전부 쓸 수 없게 되어 즉석에서 화제를 찾는 모습이 역력하다',
      );
      await era.printAndWait([
        tachyon.get_colored_name(),
        '는 당황하지 않고 담담히 답했다',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(
        '기자 A',
        '왜 이렇게 갑작스럽게 결정하셨나요? 충분히 숙고한 출전 계획인가요?',
      );
      await tachyon.say_and_wait(
        '트레이너 군과 논의 끝에 내린 결정이라네. 몇 달 전에 이미 정했지. 갑작스럽지도 급작스럽지도 않고, 그저 지금까지 언론에 알리지 않았을 뿐이야',
      );
      await you.say_as_passer_by_and_wait('기자 B', [
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        '가 작년에 이유를 밝히지 않고 트윙클 시리즈를 중단한 이유는……? 올해 개선문상도 설마……',
      ]);
      await tachyon.say_and_wait([
        '그 점은 말할 수 없지만, 보장할 수는 있네. 올해 개선문상에는 반드시 출전하겠어',
      ]);
      await you.say_as_passer_by_and_wait('기자 B', [
        '……저, 오늘 레이스는 정말 훌륭했습니다.',
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        '가 대전 상대인 ',
        coffee.get_colored_name(),
        '에게 전하고 싶은 말은 있나요?',
      ]);
      await tachyon.say_and_wait(
        '음……그렇군. 그럼 『자네도, 자네의 친구도, 개선문에서 한꺼번에 뛰어넘겠네』, 그걸로 하지',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '는 뒤편에서 회견장의 별처럼 빛나는 ',
        tachyon.sex,
        '를 바라보았다',
      ]);
      await era.printAndWait(
        '한때 빛바랬던 광자가 지금은 가장 눈부신 빛을 뿜고 있다',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_b_95_31: (() => {
    const title = '다시 빛나는 광자';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（着色名）
     * @param {PrintedSpan} takz_kin 宝塚記念（着色名）
     * @param {PrintedSpan} prix_lat 凱旋門賞（着色名）
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      love,
      tenn_spr,
      takz_kin,
      prix_lat,
    ) => {
      await era.printAndWait([
        tachyon.get_colored_name(),
        '는 홀로 모래사장을 달리고 있다',
      ]);
      await era.printAndWait('일 년 전 이맘때와 어딘가 닮은 광경');
      await era.printAndWait([
        '거기까지 생각한 순간,',
        tachyon.get_colored_name(),
        '는 갑자기 걸음을 멈췄다',
      ]);
      era.println();
      await era.printAndWait('지금 이 순간은 그때 그 순간과 같다');
      era.println();
      await tachyon.say_and_wait('……왔군');

      era.printButton('「왔어」', 1);
      await era.input();
      await tachyon.say_and_wait('오지 말았어야 했네');

      era.printButton('「그래도 왔어」', 1);
      era.println();
      await era.printAndWait([
        '아무 약속도 하지 않았는데,',
        you.get_colored_name(),
        '는 일 년 뒤인 오늘 다시 이 모래사장에 왔다',
      ]);
      era.println();
      await tachyon.say_and_wait('……됐네, 장난은 그만하지. 본론으로 들어가세');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '의 장난에 어울릴 생각이 없는 ',
        tachyon.get_colored_name(),
        '는 바로 본론을 꺼내려 했지만, 말이 끊겼다',
      ]);
      era.printButton('「그보다」', 1);
      era.printButton('「먼저 한 번 달려 주지 않을래?」', 2);
      await era.input();
      era.drawLine();
      await era.printAndWait('작년 이맘때와 비교하면');
      await era.printAndWait([
        '트레이닝을 재개한 ',
        tachyon.get_colored_name(),
        '의 달리기는 당연히 예전과 비교할 수 없다',
      ]);
      await era.printAndWait('하지만 차이는 단련의 양뿐만이 아니다');
      era.println();
      await era.printAndWait(
        '작년에도 오랫동안 단련하지 않아 볼품없는 달리기였지만, 사람을 끌어당기는 빛을 뿜었다',
      );
      await era.printAndWait([
        '지금의 ',
        tachyon.get_colored_name(),
        '는,',
        you.get_colored_name(),
        '가 본 것 중 가장 눈부신 빛을 내고 있다',
      ]);
      await era.printAndWait(['너무나 밝아, 착각마저 든다']);
      await era.printAndWait('———지금 여기서 사라져도 조금의 후회도 없을 만큼');
      era.println();
      await tachyon.say_and_wait([
        callname,
        '、',
        prix_lat,
        '가 끝나면, 나는 트윙클 시리즈에서 은퇴하겠네',
      ]);
      era.println();
      await era.printAndWait(
        '중단이 아니다. 은퇴다. 다시 말해 현역 생활을 끝내는 것이다',
      );
      await era.printAndWait('한 번 물러나면 만회할 기회는 없다');
      era.println();
      await tachyon.say_and_wait(
        '내 다리는……반년 동안 무리했으니, 이제 충분하네',
      );
      await tachyon.say_and_wait([
        '텐노상(봄), 그리고 타카라즈카 기념……마지막으로 개선문상',
      ]);
      await tachyon.say_and_wait([
        '……그래서 마지막으로 묻고 싶군.',
        callname,
        '……후회는 없나?',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 말에,',
        you.get_colored_name(),
        '는 되돌아보기 시작했다',
      ]);
      await era.printAndWait('후회. 무엇을?');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '에게 ',
        takz_kin,
        '에서 전력을 다하게 한 것?',
      ]);
      await era.printAndWait([
        tenn_spr,
        '전날 밤,',
        tachyon.get_colored_name(),
        '를 말리지 않은 것?',
      ]);
      await era.printAndWait('Plan B를 선택한 것?');
      await era.printAndWait([
        '아니면……',
        tachyon.get_colored_name(),
        '를 영입한 것?',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '가 질문을 꺼내자,',
        tachyon.get_colored_name(),
        '는 잠시 입을 다물었다',
      ]);
      await era.printAndWait('그리고 답했다');
      era.println();
      await tachyon.say_and_wait('……전부라네');
      await tachyon.say_and_wait([
        '후회하지 않나? 이렇게 다루기 힘들고, 말을 뒤집고, 마음이 갈팡질팡하는 ',
        tachyon.uma_sex_title,
        '를 담당으로 삼은 것을',
      ]);
      if (love >= 50) {
        await tachyon.say_and_wait([
          '처음부터 ',
          call_25,
          '만 담당했으면 좋았겠다는 생각은 없나?',
        ]);
        era.println();
        await era.printAndWait(
          '질문처럼 들리지만, 느낌은 질투 섞인 투정에 가깝다',
        );
      }
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '가 그렇게 묻자,',
        you.get_colored_name(),
        '는 진지하게 되짚어 보았다',
      ]);
      await era.printAndWait([
        '타카라즈카 기념을 떠올리면, 머릿속에는 ',
        tachyon.get_colored_name(),
        '와 ',
        coffee.get_colored_name(),
        '가 정점에서 맞붙던 모습만 있다',
      ]);
      await era.printAndWait([
        '텐노상(봄)을 떠올리면, 떠오르는 것은 ',
        coffee.get_colored_name(),
        '의 기묘한 달리기와……',
        tachyon.get_colored_name(),
        '가 다시 피워 낸 섬광뿐이다',
      ]);
      await era.printAndWait([
        'Plan B를 선택했던 날을 떠올린다……',
        tachyon.get_colored_name(),
        '가 무사하기를 진심으로 바랐던 마음',
      ]);
      await era.printAndWait([
        '마지막으로 떠오른 것은 트레이닝장에서 ',
        tachyon.sex,
        '의 달리기에 두 눈이 타올라, 영원히 아물지 않을 상처를 남긴 그날',
      ]);
      era.printButton('「후회하지 않아」', 1);
      era.printButton('「후회해. 타키온을 더 일찍 만나지 못한 걸」', 2);
      await era.input();
      await tachyon.say_and_wait('……흐흥, 그런가');
      await tachyon.say_and_wait('그럼 이대로 따라오게……');
      await tachyon.say_and_wait([
        '함께 세계의 정점에 오른 뒤, 연구 성과를 보여 주겠네———가장 만족스러운,',
        tachyon.get_colored_name(),
        '의 달리기를!',
      ]);
      await era.printAndWait(
        '지금까지 중 가장 만족스럽고 가장 눈부신 달리기를 보여 준다',
      );
      await era.printAndWait(
        '줄곧 지켜봐 온, 곁에 있는 가장 열렬한 팬을 만족시킬 한 판',
      );
      await era.printAndWait('어느새 입술이 말라 있다');
      await era.printAndWait(
        '더 굉장한 레이스를, 더 눈부신 모습을 기대하고 있다',
      );
      await era.printAndWait([
        '우상인 ',
        tachyon.sex,
        '가 그렇게까지 말했는데, 그 달리기에 매료된 모르모트에게 고개를 끄덕이는 것 말고 다른 말이 있을까',
      ]);
      era.printButton('「가, 타키온」', 1);
      await era.input();
      await era.printAndWait('과거는 후회하지 않는다. 지금도, 앞으로도');
      await era.printAndWait([
        '두 사람은 프랑스로 발을 내디뎠다———개선문상을 향해',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_b_95_35: (() => {
    const title = '프랑스(?)';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     */
    const f = async (tachyon, coffee, you, call_25) => {
      await tachyon.say_and_wait('여기가……프랑스인가');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '는 창밖을 본다. 하늘과 하나가 된 야경',
      ]);
      await tachyon.print_and_wait('여기가 프랑스……');
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        '가 줄곧 마음에 품었던 곳',
      ]);
      await tachyon.print_and_wait([
        '수많은 일본의 ',
        tachyon.uma_sex_title,
        '가 좌절한 곳',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '가 마지막으로 정점에 발을 들일 곳',
      ]);
      era.println();
      await tachyon.print_and_wait('그런데……');
      await tachyon.print_and_wait(
        '별을 올려다보는 자는 발밑의 웅덩이를 잊는다',
      );
      await tachyon.print_and_wait(
        '분수에 넘치는 꿈이라는 말에는 선인들의 지혜가 담겨 있군',
      );
      era.drawLine();
      era.printButton('「……아니야. 여긴 두바이야」', 1);
      await era.input();
      await tachyon.say_and_wait('…………어?');
      await era.printAndWait([
        '머릿속이 온통 개선문상으로 가득한 게 분명한 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '가 일주일 전에 두바이를 경유한다고 말했는데도 듣지 않은 모양이다',
      ]);
      era.printButton(
        '「그래도 두바이 레이스도 세계적으로 유명해. 기회가 된다면……」',
        1,
      );
      await era.input();
      await era.printAndWait([
        '거기까지 말하고,',
        you.get_colored_name(),
        '는 갑자기 입을 다물었다',
      ]);
      await era.printAndWait('두바이 레이스는 확실히 세계적으로 유명하다');
      await era.printAndWait(
        '유명한 주된 이유는 상금이다. 세계에서 가장 「금」이 많이 걸린 레이스인 것은 틀림없다',
      );
      await era.printAndWait('하지만……');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '에게는 이제 「기회」가 없다',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '음, 기회가 된다면 두바이 레이스도 살펴보세. 나중에……',
        call_25,
        '의 트레이닝 계획에 넣어 볼까?',
      ]);
      era.println();
      await era.printAndWait([
        '그런데 ',
        tachyon.sex,
        '는 전혀 신경 쓰지 않는 듯하다',
      ]);
      await era.printAndWait('가볍게, 피하던 화제를 스스로 꺼냈다');

      era.printButton(
        '「……돌아가면 타키온은 카페의 트레이닝 계획도 계속 짤 거야?」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait('당연하지……');
      await tachyon.say_and_wait([
        '이번 개선문상은 내 개인적인 고집일 뿐이네. 진정한 가능성도, 진정한 희망도, 아직 ',
        call_25,
        '에게 있어',
      ]);
      await tachyon.say_and_wait([
        '그러고 보니,',
        call_25,
        '는 어떻게 할 건가?',
      ]);
      era.printButton(
        '「걱정 마. 카페와는 태블릿으로 연락하고, 매달 일본 일 때문에 돌아갈 거야」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait('……매달?');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '는 조금 놀라서 ',
        you.get_colored_name(),
        '를 바라보았다',
      ]);
      await era.printAndWait([you.get_colored_name(), '는 고개를 끄덕였다']);
      await era.printAndWait('아, 돈이 걱정인가?');
      era.printButton(
        '「출장 처리라 항공권은 학원에서 부담해. 그건 걱정하지 마」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait('……미안하네');
      era.printButton('「신경 쓰지 마」', 1);
      era.printButton('「내가 그러고 싶어서야」', 2);
      await era.input();
      await era.printAndWait('진심이기도 하고, 거짓말이기도 하다');
      await era.printAndWait('……사실 해외든 국내든 선택할 수 있었다');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 원정만 전담하거나, 일본에 남아 ',
        coffee.get_colored_name(),
        '와 함께할 수도 있었다',
      ]);
      await era.printAndWait(
        '트레센 학원이 일손이 부족해도, 트레이너에게 이렇게까지 분신술을 요구하지는 않는다',
      );
      await era.printAndWait('하지만……');
      era.printButton('「난 그냥 내버려 둘 수 없어」', 1);
      era.printButton('「타키온도 카페도 마찬가지야」', 2);
      await era.input();
      await era.printAndWait([
        '친구의 뒷모습을 쫓는 ',
        tachyon.teen_sex_title,
        '를 혼자 둘 수 없다',
      ]);
      await era.printAndWait([
        '타향에서 막다른 길로 달려가는 ',
        tachyon.teen_sex_title,
        '를 혼자 둘 수 없다',
      ]);
      await era.printAndWait(
        '그러니 나를 희생하는 우유부단한 선택밖에 할 수 없다',
      );
      era.println();
      await tachyon.say_and_wait('……너무 사람이 좋군');
      era.printButton('「나쁜 것만 있는 건 아니야」', 1);
      era.printButton('「이러면 너와 카페의 달리기를 둘 다 볼 수 있거든」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '그런 이유로 십여 시간이나 비행기를 타고 오가다니, 제정신이 아니군',
      );
      era.println();
      await you.say_and_wait('칭찬으로 받아 둘게');
      await era.printAndWait([
        you.get_colored_name(),
        '는 웃으며,',
        tachyon.get_colored_name(),
        '의 탄식에 답했다',
      ]);
      await era.printAndWait(
        '조금 전 분위기를 망친 것에 대한 보답이라고 생각하자',
      );
      era.println();
      await tachyon.say_and_wait('……그럼 내 달리기를 끝까지 지켜봐 주게');
      era.println();
      await era.printAndWait('세계라는 이름의 무대에서');
      await era.printAndWait([
        tachyon.sex,
        '는 ',
        you.get_colored_name(),
        '에게 손을 내밀었다',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '를,',
        tachyon.get_colored_name(),
        '의 마지막 춤에 초대하고 있다',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_b_95_36: (() => {
    const title = '결의';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} prix_lat 凱旋門賞（着色名）
     */
    const f = async (tachyon, you, callname, prix_lat) => {
      await tachyon.say_and_wait('하아……하아……');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '는 프랑스의 트레이닝장을 달리고 있다',
      ]);
      await tachyon.print_and_wait([
        '요 며칠은 ',
        callname,
        '가 일본으로 돌아가 있는 기간이다',
      ]);
      era.println();
      await tachyon.say_and_wait(['다음은 세계 최고봉, 개선문상……']);
      era.println();
      await tachyon.print_and_wait([
        '지금의 ',
        you.sex,
        '는 아직 의아해하고 있겠지',
      ]);
      await tachyon.print_and_wait(['왜 개선문상을 골랐는지']);
      await tachyon.print_and_wait([
        '한계의 저편에 닿는 것. 그것이 ',
        tachyon.get_colored_name(),
        '의 꿈',
      ]);
      await tachyon.print_and_wait([
        tachyon.sex,
        '는 줄곧 이 목표에 모든 것을 걸 수 있다고 생각했다. 닿을 수만 있다면, 그 주인공이 자신이 아니어도 상관없다고',
      ]);
      await tachyon.print_and_wait([
        '……하지만,',
        tachyon.sex,
        '는 생각만큼 무심하지 못했다',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '본질적으로,',
        tachyon.sex,
        '는 달리고 싶은 ',
        tachyon.uma_sex_title,
        '다',
      ]);
      await tachyon.print_and_wait([
        '하지만 ',
        tachyon.sex,
        '는 한계를 넘겠다는 꿈도 버리고 싶지 않다',
      ]);
      await tachyon.print_and_wait(
        '그렇다면 어떻게 해야 할까. 둘 다 얻을 방법은',
      );
      await tachyon.print_and_wait([
        '간단하지.',
        tachyon.get_colored_name(),
        '가 「한계」가 되면 된다',
      ]);
      era.println();
      await tachyon.print_and_wait(['그래서 ', prix_lat, '를 선택했다']);
      await tachyon.print_and_wait(
        '세계 최고봉, 한계를 가장 잘 나타내는 경주를',
      );
      await tachyon.print_and_wait([
        '이 무대에서 자신을 통해,',
        tachyon.uma_sex_title,
        '의 한계를 정의한다',
      ]);
      era.println();
      await tachyon.say_and_wait('……후후');
      era.println();
      await tachyon.print_and_wait(
        '모두를 뛰어넘어 한계 그 자체가 되는 것을 생각하니',
      );
      await tachyon.print_and_wait('몸이 참을 수 없이 뜨거워진다');
      era.println();
      await tachyon.say_and_wait('역시 달리고 싶은 거야……나는');
      era.println();
      await tachyon.print_and_wait('결의는 이미 타오르고 있다');
      await tachyon.print_and_wait(
        '그렇다면 모든 것을 버리고 눈앞의 승리에 집중하세',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_b_95_37: (() => {
    const title = '한계의 기준';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {PrintedSpan} callname_25 マンハッタンカフェがプレイヤーを呼ぶ名
     * @param {PrintedSpan} c_call_t マンハッタンカフェがアグネスタキオンを呼ぶ名
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
    ) => {
      await era.printAndWait('개선문상 전날');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '가 묵는 호텔에 불청객이 찾아왔다',
      ]);
      era.println();
      await tachyon.say_and_wait(['……', call_25, '? 어째서……']);
      await coffee.say_and_wait(['…………', c_call_t]);
      era.println();
      await era.printAndWait([
        '일본에 남아 있어야 할 ',
        coffee.get_colored_name(),
      ]);
      await era.printAndWait(['개선문상 전날, 프랑스에 도착했다']);
      era.println();
      await coffee.say_and_wait([
        '……',
        callname_25,
        '에게 데려와 달라고 부탁했어요',
      ]);
      await coffee.say_and_wait([callname_25, '가 말해서……']);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 조용히 침대 가장자리에 앉아 입을 열지 않는다',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '가 말을 마치기를 기다리고 있다',
      ]);
      era.println();
      await coffee.say_and_wait(['말해 봐요.', c_call_t, ', 당신 다리……']);
      await tachyon.say_and_wait(
        '……그래, 이미 한계라네. 그렇지 않더라도 내일 레이스에서는 모든 걸 쏟아부을 생각이야……여력은 남기지 않겠어',
      );
      await coffee.say_and_wait('……왜요');
      era.println();
      await era.printAndWait([
        '어째서인지 당사자인 ',
        tachyon.get_colored_name(),
        '보다 ',
        coffee.get_colored_name(),
        '가 더 초조해한다',
      ]);
      await coffee.say_and_wait([
        '……또 타카라즈카 때처럼 저를 위해, 저와 친구를 위해 나가려는 거라면……',
      ]);
      await coffee.say_and_wait(
        '절대 용납하지 않겠어요. 여기서————출전을 막는 한이 있더라도',
      );
      era.println();
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 두 눈이 갑자기 크게 뜨였다',
      ]);
      await era.printAndWait([
        '찰나, 보이지 않는 거대한 손이 ',
        tachyon.get_colored_name(),
        '의 움직임을 억누른 듯했다',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '은 그 자리에 묶여 움직이지 못한다',
      ]);
      await era.printAndWait([
        '그런데도 ',
        tachyon.sex,
        '의 눈은 여전히 평온하다',
      ]);
      await era.printAndWait('그러더니……');
      era.println();
      await tachyon.say_and_wait('………후후');
      await coffee.say_and_wait([c_call_t, '……？']);
      await tachyon.say_and_wait('후후후……하하하!');
      era.println();
      await era.printAndWait([
        '정신이라도 나간 것처럼, 이런 상황에서도 ',
        tachyon.get_colored_name(),
        '은 유쾌하게 소리 내어 웃었다',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '이봐, ',
        call_25,
        '……자네, 조금 자의식 과잉 아닌가',
      ]);
      await coffee.say_and_wait('！？');
      await tachyon.say_and_wait('자네를 위해 달린다고……지나친 생각이군');
      await tachyon.say_and_wait([
        '내 목적은 처음부터 끝까지 하나뿐이야.',
        tachyon.uma_sex_title,
        '의 한계를 뛰어넘는 것……',
        tachyon.uma_sex_title,
        '의 가능성을 증명하는 것',
      ]);
      era.println();
      await era.printAndWait([
        '어느새 ',
        tachyon.get_colored_name(),
        '을 묶고 있던 힘이 풀려 있었다',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 여유롭게 일어나 묻지도 않은 먼지를 털었다',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……그 목적을 위해서라면 무엇을 희생해도 상관없다네. 나 자신조차도',
      );
      await tachyon.say_and_wait([
        '오히려 묻고 싶은 건 자네야, ',
        call_25,
        '……그럴 각오가 되어 있나? 지금의 자네가 나를 뛰어넘을 수 있겠나?',
      ]);
      await coffee.say_and_wait('…………！');
      await tachyon.say_and_wait(
        '……나머지는 레이스가 끝난 뒤에……그때 전부 말하도록 하지',
      );
      era.println();
      await era.printAndWait([
        '대답을 기다리지 않고 ',
        tachyon.get_colored_name(),
        '은 방을 나섰다',
      ]);
      await era.printAndWait([
        '맞은편에는 두 사람의 이야기가 끝나기를 방 밖에서 기다리던 ',
        you.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait(['……', callname, ', 자네 방으로 가겠네']);
      era.println();
      await era.printAndWait('……어?');
      era.println();
      await tachyon.say_and_wait('왜 그러나?');
      era.printButton('「이성의 방에 들어오는 건 좀 그렇지 않나……」', 1);
      era.printButton('「타키온, 날 유혹하는 거야?」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '바보 같으니!……방금 그런 대사로 한껏 멋을 부려 놓고 바로 내 방에 돌아가면 다 망치지 않겠나. 그러니 자네 방에서 기다리도록 하지',
      );
      await tachyon.say_and_wait('겸사겸사……자네 방에 실험 도구는 있겠지?');
      await tachyon.say_and_wait([
        '방금 ',
        call_25,
        '의 그 표정을 보고 왠지 또 번뜩이는 게 있었거든……',
      ]);
      await tachyon.say_and_wait(
        '내일은 출전해야 하니 오늘은 이상한 걸 마실 수 없네. 대신 마셔 줄 거지～～',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '의 과장된 태도를 보고 ',
        you.get_colored_name(),
        '는 저도 모르게 웃었다',
      ]);
      await era.printAndWait(
        '내일이 어떻게 되든, 적어도 오늘은 이 시간을 만끽하자',
      );
    };
    f.title = title;
    return f;
  })(),
  prix_lat_win_b: (() => {
    const title = '한계에 머물다';
    /**
     * Plan B 専用。マンハッタンカフェは同時出走できない
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, coffee, you, callname) => {
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 세계의 정점에 섰다',
      ]);
      await era.printAndWait([
        '일본에서 온 ',
        tachyon.uma_sex_title,
        '가 세계 기록을 경신했다',
      ]);
      await era.printAndWait(
        '자신의 두 눈을 불태운 달리기가, 처음이자 마지막으로 세상에서 가장 눈부신 빛을 뿜어냈다',
      );
      era.println();
      await era.printAndWait([
        '레이스가 끝나고 선수 대기실로 돌아온 ',
        tachyon.get_colored_name(),
        '은 말이 많지 않았다',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '는 평소처럼 먼저 ',
        tachyon.sex,
        '의 다리를 살폈다',
      ]);
      era.println();
      await tachyon.say_and_wait(['……이젠 그럴 필요 없지 않나, ', callname]);
      await tachyon.say_and_wait('자네도 알고 있을 텐데');
      era.println();
      await era.printAndWait([you.get_colored_name(), '는 입을 다물었다']);
      await era.printAndWait('결말은 알고 있다. 그런데도 기적을 기다리게 된다');
      await era.printAndWait('하지만……');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '는 아무 말 없이 그저 ',
        tachyon.get_colored_name(),
        '의 다리에 약을 발라 식혀 주며 부담을 덜어 주었다',
      ]);
      await era.printAndWait([
        '주최 측에서 시상 준비가 끝났다는 연락이 올 때까지 기다린 뒤, 두 사람은 천천히 무대로 향했다',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……그래서, 어떤가? 이번 레이스는 만족스러웠나?',
      );
      era.println();
      await era.printAndWait('모든 걸 쏟아붓고 두 다리를 불태워');
      await era.printAndWait('그렇게 손에 넣은 승리');
      await era.printAndWait(
        '매료되지 않을 수가 없다. 열광하지 않을 수가 없다',
      );
      era.println();
      await era.printAndWait('자신은 분명 좋은 트레이너가 아니다');
      await era.printAndWait([
        '트레이너라면 이성적으로 ',
        tachyon.uma_sex_title,
        '를 위해,',
        tachyon.couple_title,
        '에게 가장 좋은 선택을 생각해야 한다',
      ]);
      await era.printAndWait([
        '하지만 자신은 그저 가장 아름답고 가장 강한 달리기가 보고 싶어서, 담당 ',
        tachyon.uma_sex_title,
        '에게 이런 일을 하게 했다',
      ]);
      await era.printAndWait(
        '다행히 지금의 질문에는 트레이너로서 대답할 필요가 없다',
      );
      await era.printAndWait([
        '한 명의 팬으로서,',
        tachyon.get_colored_name(),
        '의 가장 광적인 열성 팬으로서',
      ]);
      era.printButton('「내가 본 것 중 가장 굉장한 레이스였어」', 1);
      await era.input();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 아침 햇살 같은 미소를 지었다',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 빛보다 약하지만, 더 부드럽고 더 따스한 빛',
      ]);
      era.drawLine();
      await tachyon.print_and_wait('다리가 욱신거린다');
      await tachyon.print_and_wait('발뒤꿈치에는 뚜렷한 통증이 찌른다');
      await tachyon.print_and_wait('하지만 그보다 큰 건 아쉬움이다');
      era.println();
      await tachyon.print_and_wait('알고 있던 일이야. 그래도 역시……');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은 끝내 한계를 뛰어넘지 못했다',
      ]);
      era.println();
      await tachyon.print_and_wait(
        '실망할 일은 아니지. 당초 계획대로 진행됐을 뿐이니까',
      );
      era.println();
      await you.say_as_passer_by_and_wait('기자 A', [
        '타키온 ',
        tachyon.adult_sex_title,
        '! 오늘 개선문상 우승을 축하드립니다! 게다가 이번에는 역대 기록까지 경신하셨는데요!',
      ]);
      await you.say_as_passer_by_and_wait(
        '기자 A',
        '이번 승리에 관해 경쟁 상대나 일본의 지인들에게 한 말씀 해 주시겠습니까?',
      );
      era.println();
      await tachyon.say_and_wait('……후후');
      await tachyon.say_and_wait('그럼 마지막으로……조금만 이야기하도록 하지');
      await you.say_as_passer_by_and_wait('기자 A', '마지막……이요?');
      await tachyon.say_and_wait([
        '나는 모든 ',
        tachyon.uma_sex_title,
        '에게 각자의 가능성이 있다고 믿는다네',
      ]);
      await tachyon.say_and_wait(
        '아무리 높은 벽이라도 반드시 뛰어넘을 수 있어',
      );
      await tachyon.say_and_wait('그러니……이 기록은 시작이지, 끝이 아니야');
      await tachyon.say_and_wait([
        '앞으로 더 많은 ',
        tachyon.uma_sex_title,
        '가 세계 무대에 서고, 그리고……한계를 뛰어넘겠지',
      ]);
      await tachyon.say_and_wait(
        '나는 그렇게 믿고, 여러분에게, 그리고……기대하고 있다네',
      );
      era.println();
      await tachyon.print_and_wait(
        '후발 주자들에 대한 기대를 가득 품으면서도, 오만하게 자신을 한계로 규정했다',
      );
      await tachyon.print_and_wait([
        '무대 아래의 사람들은 투지를 불태우며 무대 위의 ',
        tachyon.sex,
        '을 바라보고 있다',
      ]);
      await tachyon.print_and_wait([
        '하지만 ',
        tachyon.sex,
        '의 눈에 담긴 것은, 여전히 관객석에 숨어 있는 그 사람이다',
      ]);
      await tachyon.print_and_wait('무대는 마련됐다');
      await tachyon.print_and_wait('서막은 끝났다');
      await tachyon.print_and_wait('자, 이제 자네가 이걸 뛰어넘을 수 있겠나?');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은 ',
        coffee.get_colored_name(),
        '에게 소리 없는 도전을 던졌다',
      ]);
      era.drawLine();
      await era.printAndWait(['개선문상이 끝났다']);
      await era.printAndWait([
        '레이스가 끝난 뒤, ',
        you.get_colored_name(),
        '는 곧바로 ',
        tachyon.get_colored_name(),
        '을 병원에 데려가 검사를 받게 했다',
      ]);
      await era.printAndWait('예상대로이면서, 예상 밖이기도 했다');
      await era.printAndWait('예상대로, 은퇴할 수밖에 없는 다리 부상이었다');
      await era.printAndWait(
        '예상 밖이었던 건 부상이 생각만큼 심하지 않았다는 점이다',
      );
      await era.printAndWait(
        '달릴 수 없다는 것 외에는 더 심각한 증상이 없었다',
      );
      await era.printAndWait([
        '……하지만 ',
        tachyon.uma_sex_title,
        '에게는 그보다 더 심각할 필요가 없었다',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 은퇴 소식은 순식간에 세계를 뒤흔들었다',
      ]);
      await era.printAndWait([
        '담당 트레이너인 ',
        you.get_colored_name(),
        '도 세계의 주목을 받았고, 그중에는 불만과 험담도 섞여 있었다',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_b_95_39: (() => {
    const title = '한계를 뛰어넘다……?';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {PrintedSpan} callname_25 マンハッタンカフェがプレイヤーを呼ぶ名
     * @param {PrintedSpan} c_call_t マンハッタンカフェがアグネスタキオンを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {PrintedSpan} prix_lat 凱旋門賞（着色名）
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
      relation,
      love,
      prix_lat,
    ) => {
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 은퇴한 이후로, 실험실에서는 늘 ',
        tachyon.sex,
        '의 유쾌한 목소리가 들려왔다.',
      ]);
      await tachyon.say_and_wait([
        '하하하! ',
        call_25,
        '！',
        call_25,
        '! 어서 와서 내 신약을 시험해보게나!',
      ]);
      await coffee.say_and_wait('……시끄러워요.');
      era.println();
      await era.printAndWait([
        '은퇴와 동시에 모든 압박감을 떨쳐버린 듯한 ',
        tachyon.sex,
        '는, 온 에너지를 신약 제조에 쏟아붓고 있었다.',
      ]);
      await era.printAndWait([
        '당연히 그 첫 번째 피해자는 ',
        tachyon.sex,
        '와 가장 가까운 ',
        you.get_colored_name(),
        '과(와) ',
        coffee.get_colored_name(),
        '였다.',
      ]);
      await era.printAndWait([
        '은퇴 후에 ',
        tachyon.sex,
        '가 상실감에 빠져 기운을 차리지 못하면 어쩌나 걱정했던 ',
        you.get_colored_name(),
        '도, 이제야 조금 안심할 수 있게 되었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '! 자네도 도망갈 생각 말게! 자네 몫은 여기 있네!',
      ]);
      era.printButton('군말 없이 약을 받아 마신다', 1);
      era.printButton('「타키온만 즐거울 수 있다면 뭐든 마실게!」', 2);
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait('오호라, 오늘은 웬일로 이렇게 능동적인가?');
        await coffee.say_and_wait([
          '……또 ',
          callname_25,
          '에게 무슨 약을 먹인 건가요? 솔직히 말하세요.',
        ]);
        await tachyon.say_and_wait(
          '음…… 어제의 것은 영양 흡수 효율을 높이는 거라 파란색 빛이 났고, 오늘의 것은……',
        );
        await coffee.say_and_wait([
          '거짓말…… 분명 무슨 정신개조약이라도 먹인 거겠죠. 안 그러면 ',
          callname_25,
          '이 저렇게 고분고분하게 그런 이상한 걸 마실 리가 없잖아요.',
        ]);
        await tachyon.say_and_wait('너무 심한 처사로군!');
      } else {
        if (love >= 75) {
          await tachyon.say_and_wait(
            '바…… 바보…… 왜 갑자기 그런 낯간지러운 소리를 하는 건가……',
          );
        } else if (relation <= 225) {
          await tachyon.say_and_wait('……아니, 왜 갑자기 그런 기분 나쁜 소릴……');
        } else if (relation >= 225) {
          await tachyon.say_and_wait(
            '에…… 아니, 왜 갑자기 그런 낯간지러운 소리를 하는 거야?',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 어이없다는 표정으로 ',
            you.get_colored_name(),
            '을(를) 빤히 쳐다보았다.',
          ]);
          await era.printAndWait('너무한 반응이었다.');
        }
        era.println();
        if (era.get('love:25') >= 75) {
          await coffee.say_and_wait([
            c_call_t,
            '？',
            callname_25,
            '? 두 분 사이가 어떤 관계인지 조금 설명해주시겠어요? ……저 지금, 별로 침착하지 못할지도 모르겠네요.',
          ]);
        } else {
          await coffee.say_and_wait(
            '……부탁이니까 여기서 꽁냥거리지 좀 말아줄래요?',
          );
        }
      }
      era.drawLine();
      await coffee.say_and_wait(['……맞다, ', callname_25, ', 슬슬……']);
      era.println();
      await era.printAndWait([
        '한바탕 소란이 지나가고, 드디어 ',
        coffee.get_colored_name(),
        '의 훈련 시간이 되었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 고개를 끄덕이며 ',
        coffee.get_colored_name(),
        '와 함께 훈련장으로 향할 준비를 했다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '오? 또 훈련인가? 요즘 ',
        call_25,
        '은 왠지 유독 부지런해진 느낌이군.',
      ]);
      await coffee.say_and_wait([
        '……전 언제나 훈련에 진심이었어요. 저를 ',
        c_call_t,
        '와 같은 취급 하지 마세요.',
      ]);
      await coffee.say_and_wait(
        '게다가 연말이 다가오고 있으니까요…… 반드시 친구를 초월해야만 해요.',
      );
      await coffee.say_and_wait('그것 말고도……');
      await coffee.say_and_wait('누군가의 도전장도 받았으니까요……');
      era.println();
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 ',
        tachyon.get_colored_name(),
        '을 똑바로 쏘아보았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        prix_lat,
        ' 당시 ',
        tachyon.get_colored_name(),
        '이 했던 말을 떠올렸다.',
      ]);
      await coffee.say_and_wait([
        '전 반드시, ',
        c_call_t,
        '를 뛰어넘을 거예요.',
      ]);
      await tachyon.say_and_wait('……흥, 할 수 있다면 어디 한번 해보게나.');
      await tachyon.say_and_wait(['한계를 뛰어넘어 보라고! ', call_25, '！']);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 눈에는 여전히 광기 어린 빛이 일렁이고 있었다.',
      ]);
      await era.printAndWait([
        '다만…… ',
        you.get_colored_name(),
        '의 착각일지도 모르겠지만, 그 눈빛이 조금은 흔들리는 것 같기도 했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_b_cf_japa_cup: (() => {
    const title = '한계를 넘어';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     */
    const f = async (tachyon, coffee, you, callname, call_25) => {
      await you.say_as_passer_by_and_wait('해설', [
        coffee.get_colored_name(),
        '! 재팬컵 기록을 경신했습니다……아니! 세계 기록입니다! 세계 2400m 기록은 불과 몇 달 전에 ',
        tachyon.get_colored_name(),
        '이 경신했는데, 그 기록을 칠흑의 환영이 다시 뛰어넘었습니다!',
      ]);
      era.println();
      await tachyon.print_and_wait('정말 뛰어넘었군');
      await tachyon.print_and_wait(['', call_25, '가 결승선을 통과한 순간']);
      await tachyon.print_and_wait(
        '자신도 다른 사람들과 마찬가지로 흥분하고 있다',
      );
      era.println();
      await tachyon.print_and_wait('당연한 일이지');
      await tachyon.print_and_wait([
        '조금 자화자찬이 되겠지만,',
        tachyon.sex,
        '는 자신이 보기에 한계를 뛰어넘을 가능성이 가장 큰 ',
        tachyon.uma_sex_title,
        '다',
      ]);
      await tachyon.print_and_wait(
        '가장 가깝다는 것과 실제로 뛰어넘는 것 사이에는 큰 차이가 있다',
      );
      await tachyon.print_and_wait([
        '하지만……',
        tachyon.sex,
        '는 정말로 해냈다!',
      ]);
      await tachyon.print_and_wait(
        '어째서인지 달리는 모습에서 알 수 없는 위화감이 느껴지지만, 그것도 상관없다',
      );
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은 한계에 도달한 ',
        tachyon.uma_sex_title,
        '. 그리고 ',
        coffee.get_colored_name(),
        ' 말이야. ',
        tachyon.sex,
        '는 지금 한계를 뛰어넘었다',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '！',
        callname,
        '！',
        call_25,
        '은 ',
        tachyon.sex,
        '……',
      ]);
      era.println();
      await tachyon.print_and_wait(
        '흥분한 나머지 옆 사람과 기쁨을 나누고 싶었다',
      );
      await tachyon.print_and_wait(
        '온갖 고난을 겪어 온 연구가 지금 결실을 맺었다',
      );
      await tachyon.print_and_wait('그런데');
      era.println();
      await tachyon.say_and_wait(['……', callname, '？']);
      era.println();
      await tachyon.print_and_wait('대답이 없다');
      await tachyon.print_and_wait([
        '곁의 ',
        you.sex,
        '도, 관중석의 관객들도, 모든 시선이',
      ]);
      await tachyon.print_and_wait(['중앙의 ', tachyon.sex, '에게 쏠려 있다']);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '의 부름은 귀를 찢을 듯한 함성과 박수에 묻혔다',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_b_95_47: (() => {
    const title = '추월당한 한계';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, coffee, you, callname, call_25, love) => {
      await tachyon.print_and_wait([
        '꿈속의 ',
        tachyon.get_colored_name(),
        '은 다시 그날로 돌아갔다',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '회장의 함성도,',
        you.sex,
        '의 시선도, 결승선을 지나 가볍게 손을 흔드는 그 ',
        tachyon.uma_sex_title,
        '에게 쏠려 있다',
      ]);
      await tachyon.print_and_wait([
        '당연하지. 오늘의 주인공은 ',
        coffee.get_colored_name(),
        '니까',
      ]);
      await tachyon.print_and_wait([
        '주인공은 자신이 아니다. 주변 사람들이 ',
        tachyon.sex,
        '를 바라보는 것도 당연하다',
      ]);
      await tachyon.print_and_wait('하지만……');
      await tachyon.print_and_wait('어째서');
      era.println();
      await tachyon.say_and_wait('계속 나를 바라보겠다고 약속했잖나', true);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은 더 이상 달릴 수 없다',
      ]);
      await tachyon.print_and_wait([
        '그래서 시선을 ',
        coffee.get_colored_name(),
        '에게 돌리는 건가',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '주변 관객들 중에는 「',
        tachyon.get_colored_name(),
        '보다 ',
        coffee.get_colored_name(),
        '가 더 강하다」고 외치는 이도 있다',
      ]);
      await tachyon.print_and_wait([
        '하지만 그런 비교보다,',
        you.sex,
        '의 눈빛이 자신을 더 아프게 한다',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '한때는 자신을 바라볼 때만 떠오르던 그 눈빛이, 지금은 ',
        you.sex,
        '가 ',
        call_25,
        '를 바라보는 눈에 담겨 있다',
      ]);
      await tachyon.say_and_wait('그 눈빛은 나만의 것이 아니었나?');
      await tachyon.say_and_wait('내가 불태웠던 두 눈은 벌써 나은 건가?');
      await tachyon.say_and_wait('나를 혼자 남겨 둘 건가?');
      era.println();
      await tachyon.print_and_wait([
        '꿈속의 ',
        you.sex,
        '는 ',
        call_25,
        '와 함께 멀어져 간다',
      ]);
      await tachyon.print_and_wait('자신을 칠흑 같은 공간에 버려둔 채');
      era.println();
      await tachyon.say_and_wait('안 돼……기다려, 기다려 주게……');
      era.println();
      await tachyon.print_and_wait('따라잡고 싶다');
      await tachyon.print_and_wait('하지만……두 다리가 말을 듣지 않는다');
      await tachyon.print_and_wait('고개를 숙이고서야 깨닫는다……아아');
      await tachyon.print_and_wait(
        '망가진 두 다리로 달리는 이를 따라잡을 수 있을 리 없다',
      );
      era.println();
      await tachyon.print_and_wait(
        '자신의 목소리가 들렸는지, 그 뒷모습이 돌아본다',
      );
      await tachyon.print_and_wait('눈 속의 빛은 더 이상 없다');
      await tachyon.print_and_wait(
        '아니, 사라진 게 아니다————다른 누군가에게 옮겨 간 것이다',
      );
      era.println();
      await tachyon.print_and_wait('안 돼');
      await tachyon.print_and_wait('나를 봐 줘');
      await tachyon.print_and_wait('예전처럼 나를 봐 줘');
      await tachyon.print_and_wait('두고 가지 마, 혼자 남겨 두지 마');
      era.println();
      await tachyon.print_and_wait('하지만');
      await tachyon.print_and_wait([
        '달리지 못하는 ',
        tachyon.get_colored_name(),
        '에게 상대를 붙잡을 자격이 있나',
      ]);
      era.drawLine();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은 꿈에서 깨어났다',
      ]);
      await tachyon.print_and_wait(
        '무슨 꿈을 꾸었는지는 벌써 잘 기억나지 않는다',
      );
      await tachyon.print_and_wait([
        '……하지만 몸 상태를 보니, 십중팔구 재팬컵 때의 일이겠지',
      ]);
      await tachyon.print_and_wait([call_25, '는 이미 한계를 뛰어넘었다']);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '을 뛰어넘었다',
      ]);
      await tachyon.print_and_wait([
        '그러니……',
        you.sex,
        '가 ',
        call_25,
        '에게 매료되어도 당연하겠지',
      ]);
      await tachyon.print_and_wait([
        '무엇보다 ',
        tachyon.get_colored_name(),
        '을 뛰어넘은 달리기니까',
      ]);
      era.println();
      await tachyon.say_and_wait('……아니');
      if (love <= 50) {
        await tachyon.print_and_wait('이제 와서 깨닫다니, 너무 늦은 걸까');
        await tachyon.print_and_wait(
          '그토록 오래 곁에 있었는데도, 늘 당연하게 여겼다',
        );
        await tachyon.print_and_wait([
          '잃을 것 같아지고서야 비로소, 자신이 ',
          you.sex,
          '에게서 떨어질 수 없다는 걸 깨달았다',
        ]);
      }
      era.println();
      await tachyon.print_and_wait([
        you.sex,
        '라면 지금까지처럼 자신을 돌봐 주겠지',
      ]);
      await tachyon.print_and_wait([
        '지금까지처럼 ',
        tachyon.get_colored_name(),
        '의 요구도 들어주겠지',
      ]);
      await tachyon.print_and_wait([you.sex, '는 그만큼 다정한 사람이니까']);
      await tachyon.print_and_wait([
        '……하지만 그것만으로는 ',
        tachyon.get_colored_name(),
        '은 만족할 수 없다',
      ]);
      await tachyon.print_and_wait([
        you.sex,
        '의 빛이 자신을 따뜻하게 해 주었다',
      ]);
      await tachyon.print_and_wait('희망을, 레이스에 대한 갈망을 낳았다');
      await tachyon.print_and_wait(
        '그러니 제발……내 빛을 빼앗아 가지 말아 주게',
      );
      era.println();
      await tachyon.print_and_wait(
        'Jingle bell Jingle bell Jingle all the way～～',
      );
      era.println();
      await tachyon.print_and_wait(
        '갑자기 창밖에서 크리스마스 노래가 들려왔다',
      );
      await tachyon.print_and_wait([
        '성야가 다가오는데도 ',
        tachyon.get_colored_name(),
        '의 마음은 여전히 어둠 속에 있다',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_b_95_48: (() => {
    const title = '성야의 약속';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} vega アドマイヤベガ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {PrintedSpan} callname_25 マンハッタンカフェがプレイヤーを呼ぶ名
     * @param {boolean} tachyon_win_prix_lat アグネスタキオンがシニア級凱旋門賞を勝ったか
     */
    const f = async (
      tachyon,
      coffee,
      vega,
      you,
      callname,
      call_25,
      callname_25,
      tachyon_win_prix_lat,
    ) => {
      let ret = 0;
      await era.printAndWait([
        '요즘 ',
        tachyon.get_colored_name(),
        '의 상태가 이상하다',
      ]);
      await era.printAndWait([
        '혼자 틀어박혀 지내며 ',
        coffee.get_colored_name(),
        '의 트레이닝에도 따라오지 않는다. 실험조차 거의 하지 않게 되었다',
      ]);
      await era.printAndWait([
        '실험의 최대 피해자인 ',
        you.get_colored_name(),
        '와 ',
        coffee.get_colored_name(),
        '에게 꼭 나쁜 일만은 아니다. 하지만 걱정은 된다',
      ]);
      await era.printAndWait([
        '문득 상점가의 크리스마스 노래가 ',
        you.get_colored_name(),
        '의 귀에 들어왔다',
      ]);
      await era.printAndWait([
        '그래. 크리스마스를 구실 삼아 ',
        tachyon.sex,
        '을 데리고 나가 이야기를 해 보자',
      ]);
      era.drawLine();
      await era.printAndWait(
        '성야의 상점가는 평소보다 불빛도 밝고 열기도 뜨겁다',
      );
      await era.printAndWait(
        '그 이유는 크리스마스 때문만은 아니다. 그보다도……',
      );
      await you.say_as_passer_by_and_wait('상점가 아저씨', [
        '아리마 기념 예상! 내일 아리마 기념, 레이스 전 예상입니다!',
      ]);
      await you.say_as_passer_by_and_wait('관광객 A', [
        '내일 아리마 기념은 어떻게 될까……뭐, 우승은 ',
        coffee.get_colored_name(),
        '겠지',
      ]);
      await you.say_as_passer_by_and_wait('관광객 B', [
        '재팬컵에서 정말 강했잖아!……역대 최강이라 해도 되지 않을까',
      ]);
      era.println();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait(
        '계속 말없이 있을 수도 없다. 여기서는 무슨 말이라도 하자',
      );
      era.printButton('「내일이 아리마 기념이네. 카페라면 괜찮을 거야」', 1);
      era.printButton('「저쪽 꿀 특제 음료, 크리스마스 할인 중인가 봐」', 2);
      if ((await era.input()) === 1) {
        ret++;
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait([tachyon.sex, '은 역시 아무 말도 하지 않는다']);
        await era.printAndWait([
          '분위기가 무겁다.',
          you.get_colored_name(),
          '는 어쩔 수 없이 ',
          coffee.get_colored_name(),
          '의 최근 트레이닝 이야기를 이어 간다',
        ]);
      } else {
        await tachyon.say_and_wait('……그럼 한 잔 마시도록 할까');
        era.println();
        await era.printAndWait([
          '가장 달콤한 꿀 음료를 마신 뒤 ',
          tachyon.get_colored_name(),
          '의 기분이 조금 풀렸다',
        ]);
        await era.printAndWait([
          '겸사겸사 ',
          you.get_colored_name(),
          '도 똑같이 가장 달콤한 것으로 주문했지만……',
        ]);
        await era.printAndWait([
          '한 모금 빨아 마시자마자 ',
          you.get_colored_name(),
          '는 이가 아파졌다',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이 기분 좋게 꿀 음료를 마시는 모습을 보며 ',
          you.get_colored_name(),
          '는 기회가 되면 ',
          tachyon.sex,
          '의 치아 검진을 받게 하는 편이 좋지 않을까 생각하기 시작했다',
        ]);
      }
      era.println();
      await era.printAndWait([
        '얼마 지나지 않아 상점가 중앙의 크리스마스트리 앞에 도착했다',
      ]);
      await era.printAndWait([
        '갑작스러운 강풍이 주변의 아리마 기념 보도물을 두 사람 앞으로 날려 보냈다',
      ]);
      await era.printAndWait([
        '신문에는 재팬컵 때의 ',
        coffee.get_colored_name(),
        '가 실려 있었다. 위풍당당한 모습이다',
      ]);
      era.printButton(
        '「재팬컵……그때 카페는 정말 강했지. 이런 말은 좀 안 맞을지도 모르지만, 타키온과……」',
        1,
      );
      era.printButton('「타키온! 저쪽 솜사탕 가게, 굉장한데!」', 2);
      if ((await era.input()) === 1) {
        ret++;
        await era.printAndWait([
          '아까 아리마 기념 이야기를 꺼냈을 때 ',
          tachyon.get_colored_name(),
          '은 기분이 좋지 않았다',
        ]);
        await era.printAndWait([
          '그래서 ',
          you.get_colored_name(),
          '는 화제를 재팬컵으로 돌렸다',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '의 숙원이 이루어진 날이라면 ',
          tachyon.get_colored_name(),
          '도 기운을 차리지 않을까',
        ]);
        await era.printAndWait('그런데……');
        era.println();
        await tachyon.say_and_wait('………………');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 역시 아무 말도 하지 않는다',
        ]);
        await era.printAndWait('이것도 아닌가……');
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '는 트리 옆 솜사탕 가게를 바라본다. 장인의 손끝에서 폭신폭신한 동물들이 잇달아 만들어지고 있다',
        ]);
        era.println();
        await tachyon.say_and_wait('……아니, 나는……');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이 말을 마치기도 전에 주인은 크고 폭신폭신한 모르모트 솜사탕을 ',
          tachyon.get_colored_name(),
          '의 손에 쥐여 주었다',
        ]);
        await vega.say_as_unknown_and_wait(
          '기분이 안 좋을 땐 기억해 둬. 폭신폭신한 건 절대 널 배신하지 않아',
        );
        if (era.get('cflag:33:招募状态') === recruit_flags.yes) {
          await era.printAndWait('주인이 어째서인지 묘하게 낯익다');
          await era.printAndWait('……착각이겠지');
        }
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 멍하니 모르모트 솜사탕을 받아 들고, 돌려주지도 별다른 말을 하지도 않았다',
        ]);
        await era.printAndWait([
          '그러더니 ',
          tachyon.sex,
          '은 입을 살짝 벌려 한입 베어 물었다',
        ]);
        era.println();
        await tachyon.say_and_wait('……폭신폭신하군');
        era.println();
        await era.printAndWait([
          '어째서인지 그 말을 들은 주인은 의기양양하게 가슴을 폈다',
        ]);
      }
      era.println();
      await era.printAndWait(['마지막으로 상점가 끝까지 걸어갔다']);
      await era.printAndWait([
        '길가의 서점. 가게에서 가장 눈에 띄는 곳에 지난 잡지 몇 권이 놓여 있다',
      ]);
      await era.printAndWait('지난 잡지……라고만 하기도 애매하다');
      await era.printAndWait(
        '레이스 정보로는 오래됐지만, 시기로 따지면 두 달 전 잡지일 뿐이다',
      );
      await era.printAndWait([
        '————',
        tachyon.get_colored_name(),
        '의 개선문상 이후 인터뷰가 실린 잡지다',
      ]);
      await you.say_as_passer_by_and_wait('서점 주인', '어서 오세요!');
      era.printButton('「이건……」', 1);
      era.printButton('「개선문상 잡지인가?」', 2);
      await era.input();
      await era.printAndWait([
        '주인은 ',
        you.get_colored_name(),
        '의 뒤에서 고개를 숙이고 있는 ',
        tachyon.get_colored_name(),
        '을 알아보지 못했다',
      ]);
      await era.printAndWait('잡지를 보더니 자랑스럽게 이야기하기 시작했다');
      await you.say_as_passer_by_and_wait('서점 주인', [
        '오오! 이 잡지는 말이야, 내가 일부러 여기 놓아둔 거라네!',
      ]);
      if (tachyon_win_prix_lat) {
        await you.say_as_passer_by_and_wait('서점 주인', [
          '드디어 일본의 ',
          tachyon.uma_sex_title,
          '가 세계의 개선문상을 차지했잖나! 기념으로 놔둬야지!',
        ]);
      }
      await you.say_as_passer_by_and_wait('서점 주인', [
        '밖의 사람들은 아무것도 몰라.',
        tachyon.get_colored_name(),
        '이 가장 강해! 은퇴만 안 했으면 저 ',
        coffee.get_colored_name(),
        '따위는 ',
        tachyon.sex,
        '의 상대도 안 됐을 거야!',
      ]);
      era.printButton('「꼭 그렇다고 단정할 수는……」', 1);
      era.printButton('「물론 타키온이 가장 강하죠」', 2);
      if ((await era.input()) === 1) {
        ret++;
        await era.printAndWait(['재팬컵 전이라면 분명 그랬다']);
        await era.printAndWait([
          '하지만 재팬컵 이후의 ',
          coffee.get_colored_name(),
          '는 이미 ',
          tachyon.get_colored_name(),
          '도 인정한 완성형이다',
        ]);
        await era.printAndWait([
          '그 상태의 ',
          coffee.get_colored_name(),
          '가 다시 한번 ',
          tachyon.get_colored_name(),
          '과 달린다면……승패는 알 수 없다',
        ]);
        await era.printAndWait([
          '그렇다.',
          coffee.get_colored_name(),
          '가 한계를 뛰어넘었어도……자신은 마음속으로 ',
          tachyon.get_colored_name(),
          '이라면 ',
          tachyon.sex,
          '와 대등하게 겨룰 수 있다고 믿고 있다',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '스스로 말하는 것처럼 족쇄 같은 존재는 절대 아니다',
        ]);
        await you.say_as_passer_by_and_wait(
          '서점 주인',
          '쳇, 뭘 좀 아는 사람이 왔나 했더니 아무것도 모르는 녀석이었군',
        );
        era.println();
        await era.printAndWait([
          '주인의 말에 ',
          you.get_colored_name(),
          '는 쓴웃음을 지을 수밖에 없었다',
        ]);
        await era.printAndWait([
          '문득 ',
          you.get_colored_name(),
          '는 ',
          tachyon.get_colored_name(),
          '이 잡지 더미로 다가가는 것을 보았다',
        ]);
        era.println();
        await tachyon.say_and_wait('……주인장, 한 권 주게');
        await you.say_as_passer_by_and_wait('서점 주인', [
          '오, ',
          tachyon.sex_code === 1 ? '총각' : '아가씨',
          '는 안목이 있구먼',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 일부러 목소리를 낮춰 ',
          tachyon.sex,
          '본래의 음색을 알아듣지 못하게 하고 있다',
        ]);
        await era.printAndWait(
          '그런데 이 잡지는……그때 견본을 받았을 텐데. 왜 다시 사는 걸까?',
        );
        era.println();
        await tachyon.say_and_wait(
          '……어쩔 수 없지. 이 잡지의 가치를 모르는 사람이 있으니, 나라도 소중히 여겨야 하지 않겠나',
        );
        era.println();
        await era.printAndWait('어');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이 몰래, 짜증이 섞인 눈길을 ',
          you.get_colored_name(),
          '에게 보낸다',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '는 저도 모르게 생각한다. 또 뭘 잘못했나?',
        ]);
      } else {
        await tachyon.say_and_wait('……！');
        era.println();
        await era.printAndWait('물어볼 것도 없다');
        await era.printAndWait('만약이라는 말에 의미가 없더라도');
        await era.printAndWait([
          '그래도 만약을 생각하지 않을 수 없다 ',
          tachyon.uma_sex_title,
        ]);
        await era.printAndWait([
          '무한한 가능성과 상상을 가져다주는 존재 ',
          tachyon.uma_sex_title,
        ]);
        await era.printAndWait(['그것이 ', tachyon.get_colored_name()]);
        await you.say_as_passer_by_and_wait('서점 주인', [
          '거봐!',
          you.sex_code === 1 ? '총각' : '아가씨',
          '가 들어올 때부터 느꼈어. 이 사람은 뭘 좀 안다고!',
        ]);
        await you.say_as_passer_by_and_wait('서점 주인', [
          '그러니까 내가 말했잖나, ',
          tachyon.get_colored_name(),
          '이 제일 강하다니까! 저 ',
          coffee.get_colored_name(),
          '따위는 상대도 안 돼!',
        ]);
        await you.say_as_passer_by_and_wait('서점 주인', [
          '사실 나는 작년 사츠키상 때부터 ',
          tachyon.get_colored_name(),
          '을 지켜봤다네! 그 달리기는……',
          tachyon.uma_sex_title,
          '의 한계라고 해도 과언이 아니야!',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '와 주인은 신이 나서 ',
          tachyon.get_colored_name(),
          '의 레이스를 이야기했다',
        ]);
        await era.printAndWait([
          '뒤에 있던 ',
          tachyon.get_colored_name(),
          '이 견디다 못해 ',
          you.get_colored_name(),
          '의 손을 잡고 가게 밖으로 끌어내려 할 때까지',
        ]);
        await era.printAndWait([
          '어째서인지 ',
          tachyon.sex,
          '의 얼굴이 조금 붉다……조명 탓이겠지',
        ]);
      }
      era.println();
      if (ret >= 2) {
        await era.printAndWait(['어느새 둑 근처까지 걸어와 있었다']);
        await era.printAndWait(
          '어둡고 조용한 강변은 멀리 상점가의 불빛과 크리스마스 노래에 대조를 이루고 있다',
        );
        era.println();
        await tachyon.say_and_wait('……눈이군');
        era.println();
        await era.printAndWait('정말로 주변에 솜 같은 눈이 흩날리기 시작했다');
        await era.printAndWait(
          '……이렇게 늦은 밤, 눈까지 오는데 이런 곳에 있는 건 역시 위험하겠지',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이 침울한 이유는 묻지 못했지만, 오늘은 벌써 너무 늦었다',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '가 오늘은 이만 돌아가자고 말을 꺼내려던 순간……',
        ]);
        era.println();
        await tachyon.say_and_wait('…………흑');
        era.println();
        await era.printAndWait([
          '갑자기 ',
          you.get_colored_name(),
          '는 ',
          tachyon.get_colored_name(),
          '에게 끌어안겼다',
        ]);
        await era.printAndWait('아무런 전조도 없는 갑작스러운 포옹');
        era.printButton('「타키온……?」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          '는 무언가 말하려 했지만, 품 안에서 미세하게 떨리는 몸과 ',
          you.get_colored_name(),
          '의 어깨에 기댄 머리, 그리고 이유를 알 수 없는 어깨의 축축함에 지금은 입을 열 때가 아님을 깨달았다',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '미안하네……하지만……잠깐만, 잠깐이면 되니까……',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '는 멍하니 ',
          tachyon.get_colored_name(),
          '이 자신의 품 안에서 울도록 내버려 두었다',
        ]);
        await era.printAndWait('마음속은 의문투성이다');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '에게 대체 무슨 일이 있었던 걸까',
        ]);
        era.drawLine();
        await tachyon.print_and_wait('사실 이미 눈치채고 있었다');
        await tachyon.print_and_wait(
          '오늘 데리고 나온 것은 자신의 추측을 다시 한번 확인하기 위해서였을 뿐이다',
        );
        await tachyon.print_and_wait(
          '하지만 실제로 듣자 가슴이 찔리는 듯한 아픔을 막을 수 없었다',
        );
        era.println();
        await tachyon.print_and_wait('조금 전의 잡담에서도 이미 알고 있었다');
        await tachyon.print_and_wait([
          you.sex,
          '의 화제는 몇 마디 못 가 ',
          call_25,
          '에게 돌아갔고, 눈에도 ',
          tachyon.sex,
          '에 대한 기대가 가득했다',
        ]);
        await tachyon.print_and_wait([
          '한때 무슨 일이든 ',
          tachyon.get_colored_name(),
          '을 우선하던 ',
          callname,
          '는 이제 없다',
        ]);
        await tachyon.print_and_wait([
          '지금의 ',
          you.sex,
          '는 ',
          call_25,
          '의 「',
          callname_25,
          '」다',
        ]);
        await tachyon.print_and_wait(
          '정으로 보나 이치로 보나 그것이 가장 올바른 선택이다',
        );
        await tachyon.print_and_wait(
          '자신은 달리기로 현혹해 편리한 도구처럼 부린 비열한 마녀에 불과하다',
        );
        await tachyon.print_and_wait([
          '온갖 장애물을 넘고 마침내 한계까지 뛰어넘은 ',
          coffee.uma_sex_title,
        ]);
        await tachyon.print_and_wait([
          '자신의 달리기로 마녀가 ',
          you.sex,
          '에게 걸었던 저주를 풀고, 마지막에는 두 사람이 행복하게 산다',
        ]);
        await tachyon.print_and_wait('분명 이야기로서는 가장 좋은 결말이겠지');
        era.println();
        await tachyon.print_and_wait('그러니……');
        era.println();
        await tachyon.say_and_wait(
          '마지막으로 한 번……나를, 마지막으로 딱 한 번만 사랑해 주게',
        );
        await tachyon.say_and_wait([
          '한 번이면 돼……그 뒤로는 자네와 ',
          call_25,
          ' 사이에 더는 끼어들지 않겠네',
        ]);
        era.println();
        await tachyon.print_and_wait(
          '온갖 구실을 늘어놓으며, 하룻밤의 기쁨만을 애원한다',
        );
        await tachyon.print_and_wait(
          '가엾게도, 마지막까지 자신은 이런 구실밖에 댈 수 없다',
        );
        await tachyon.print_and_wait([
          '협박 같은 말투로 ',
          you.sex,
          '에게 마지막 자비를 바란다',
        ]);
        await tachyon.print_and_wait('한 번이면 된다');
        await tachyon.print_and_wait([
          '그러면 자신도 포기하고, 진심으로 ',
          you.couple_title,
          '를 축복할 수 있다',
        ]);
        await tachyon.print_and_wait(
          '머릿속에서 「정말 포기할 수 있을 거라 생각해?」라고 속삭이는 목소리를 무시하고',
        );
        await tachyon.print_and_wait('그런 말로 자신을 설득한다');
        era.println();
        await era.printAndWait([
          '그런 ',
          tachyon.get_colored_name(),
          '을 보고,',
          you.get_colored_name(),
          '는 선택한다',
        ]);
        era.printButton('「끌어안는다」', 1);
        era.printButton('「입을 맞춘다」', 2);
        if ((await era.input()) === 1) {
          await tachyon.print_and_wait(
            '갑자기 미처 꺼내지 못한 말이 가로막혔다',
          );
          await tachyon.print_and_wait([
            '……',
            you.sex,
            '에게 도리어 끌어안겼다',
          ]);
          await tachyon.print_and_wait(
            '하고 싶던 말이 목구멍에 걸려 나오지 않는다',
          );
        } else {
          await tachyon.print_and_wait(
            '갑자기 미처 꺼내지 못한 말이 가로막혔다',
          );
          await tachyon.print_and_wait('……부드럽고 따뜻한 감촉');
          await tachyon.print_and_wait(
            '겨울의 추위를 말끔히 걷어 내는 듯한 성야의 입맞춤',
          );
        }
        era.println();
        await tachyon.print_and_wait('아니……자신이 바란 것은 그런 게 아니다');
        await tachyon.print_and_wait([
          '아니면……',
          tachyon.get_colored_name(),
          '에게는 이제 사랑받을 자격조차 없다는 건가?',
        ]);
        await tachyon.print_and_wait(
          '자포자기한 끝에 그런 생각마저 떠오르고 만다',
        );
        era.println();
        await tachyon.say_and_wait(['음……', callname]);
        era.println();
        await tachyon.print_and_wait('그렇게 생각한 바로 그때');
        await tachyon.print_and_wait([
          '마음속 잡념을 몰아내듯 ',
          you.sex,
          '는 더욱 힘주어 끌어안았다',
        ]);
        era.printButton('「적어도 내일 아리마 기념은 봐 줘」', 1);
        era.printButton('「반드시 타키온에게 답을 줄게」', 2);
        await era.input();
        await tachyon.print_and_wait('답……어떤 답이지');
        await tachyon.print_and_wait('관계를 끝내자는 답인가?');
        await tachyon.print_and_wait([
          you.sex,
          '의 두 눈을 똑바로 바라봐도 아무런 의미도 읽을 수 없다',
        ]);
        era.println();
        await tachyon.print_and_wait('……그래도 나쁘지는 않다');
        await tachyon.print_and_wait([
          '마지막으로 ',
          you.sex,
          '의 그 열광적인 눈빛을 다시 볼 수 있다면',
        ]);
        await tachyon.print_and_wait([
          '……그 시선 끝에 있는 것이 이제 ',
          tachyon.get_colored_name(),
          '이 아니더라도',
        ]);
      } else {
        await tachyon.say_and_wait('……아, 눈이군');
        era.println();
        await era.printAndWait('문득 하늘에서 하얀 눈이 흩날리기 시작했다');
        await era.printAndWait([
          '이제 돌아가는 편이 좋을까……그렇게 생각한 ',
          you.get_colored_name(),
          '의 옷자락을 ',
          tachyon.get_colored_name(),
          '이 가볍게 잡아당겼다',
        ]);
        era.println();
        await tachyon.say_and_wait('어디 들어가 잠깐 앉도록 하지');
        era.println();
        await era.printAndWait('그래. 오늘의 목적은 아직 이루지 못했다');
        await era.printAndWait([
          '가게에 앉아 ',
          tachyon.get_colored_name(),
          '의 기분이 좋지 않은 이유를 알아내자',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '는 스스로 기운을 북돋았다',
        ]);
        era.drawLine();
        era.printButton('「…………」', 1);
        await era.input();
        await tachyon.say_and_wait([callname, '? 앉지 않을 건가?']);
        era.printButton('「……아니, 그게」', 1);
        await era.input();
        await tachyon.say_and_wait(
          '그렇게 말을 더듬다니, 자네답지 않군……아니면 말하기 곤란한 사정이라도 있나?',
        );
        era.println();
        await era.printAndWait('아니, 말하기 곤란한 사정이라기보다는 문제는……');
        era.printButton('「학생이랑 술집에 오는 건 안 되잖아」', 1);
        era.printButton('「미성년자랑 술집에 오는 건 불법이잖아」', 2);
        await era.input();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이 ',
          you.get_colored_name(),
          '를 끌고 들어가려는 곳은 상점가 끝자락의 술집이었다',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '이미 은퇴했으니 괜찮지 않겠나……나도 이런 곳은 처음이지만, 문제없을 걸세',
        );
        await tachyon.say_and_wait([
          '아니면 ',
          callname,
          ', 자네는 그 나이를 먹고도 술집에 못 들어가는 건가?',
        ]);
        era.printButton('「은퇴했느냐가 아니라 학생이라는 게 문제야!」', 1);
        era.printButton('「……도발해도 안 통해」', 2);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          '가 거절하며 ',
          tachyon.get_colored_name(),
          '을 끌어내려 했을 때는 ',
          tachyon.get_colored_name(),
          '이 이미 가게 안으로 들어간 뒤였다',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '자, 자, 들어오게. 야식……비슷한 거라고 생각하면 되지',
        );
        await you.say_as_passer_by_and_wait('주인', '어서 오세요～～');
        era.println();
        await era.printAndWait([
          '문이 열리자 가게 안의 온기가 바깥의 냉기와 대비되어 ',
          you.get_colored_name(),
          '는 더 이상 발을 뗄 수 없게 되었다',
        ]);
        era.printButton('「……잠깐 앉아 있는 정도라면, 뭐」', 1);
        await era.input();
        await era.printAndWait([
          '가게에 들어선 ',
          you.get_colored_name(),
          '는 뜻밖의 모습을 보았다',
        ]);
        await era.printAndWait(
          '가게 안을 바쁘게 오가는 주인의 뒤에 밤색의 긴 꼬리가 달려 있다',
        );
        era.println();
        await tachyon.say_and_wait('……오, 설마……');
        era.println();
        await you.say_as_passer_by_and_wait(
          '주인',
          '어서 와요! ……그런데 손님, 학생이죠?',
        );
        era.println();
        await tachyon.say_and_wait(
          '오, 그렇게 보이나? 하지만 나는 이미 은퇴한 몸이라네',
        );
        era.println();
        await era.printAndWait(
          '아니, 은퇴했다고 학생이 아니게 되는 건 아니잖아',
        );
        await era.printAndWait(
          '따지고 싶었지만 주인은 고개를 끄덕이며 「그럼 괜찮네」라고 말했다',
        );
        await era.printAndWait('아니……뭐가 괜찮다는 거야');
        era.println();
        await you.say_as_passer_by_and_wait(
          '주인',
          '게다가 옆 사람은 트레이너죠? 트레이너가 함께라면 괜찮아요',
        );
        await tachyon.say_and_wait('……호오, 알아보는 건가?');
        era.println();
        await era.printAndWait([
          '문제가 많을 것 같은데……하지만 그보다 ',
          you.get_colored_name(),
          '도 어떻게 자신이 트레이너라는 걸 알았는지 궁금했다',
        ]);
        await you.say_as_passer_by_and_wait('주인', [
          you.sex,
          '의 눈빛 때문이죠. 우리 남편이랑 똑같아요. 담당만 보면 발이 떨어지지 않는 그 눈빛',
        ]);
        era.println();
        await era.printAndWait('무, 무슨 말을 그렇게 해');
        await era.printAndWait('내가 무슨 변태인가');
        await you.say_as_passer_by_and_wait(
          '주인',
          '후후, 그 눈빛은 좋은 남편의 필수 조건이랍니다～～놓치면 안 돼요',
        );
        era.println();
        await era.printAndWait(
          '주인은 그렇게 말하고 다른 손님을 상대하러 갔다',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '는 조심스레 ',
          tachyon.get_colored_name(),
          '을 바라보았다. 이번에야말로 ',
          tachyon.sex,
          '에게 놀림받겠지……',
        ]);
        era.println();
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait('무슨 생각을 하는지 알 수 없다');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '의 표정은 어딘가 멍해 보인다',
        ]);
        era.printButton('「타키온?」', 1);
        await era.input();
        await tachyon.say_and_wait('……아, 그래, 흠흠, 아무것도 아니라네');
        era.println();
        await era.printAndWait([
          '정신을 차리자 ',
          tachyon.get_colored_name(),
          '의 얼굴은 뒤늦게 작동한 발열 도시락처럼',
        ]);
        await era.printAndWait([
          '순식간에 새빨개졌고, ',
          you.get_colored_name(),
          '는 ',
          tachyon.sex,
          '의 얼굴에서 김이 피어오르는 것만 같았다',
        ]);
        await era.printAndWait([
          '어색한 분위기를 감추려는 듯 ',
          tachyon.sex,
          '은 가게 안의 풍경으로 관심을 돌렸다',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '도 그쪽으로 시선을 돌렸다',
        ]);
        era.println();
        await era.printAndWait('주인은 바쁘게 손님을 접대하고 있다');
        await era.printAndWait([
          '손님들 중에는 아리마 기념 이야기를 하는 사람도 있지만, 주된 화제는 아니다',
        ]);
        await era.printAndWait(
          '매일의 날씨처럼 심심풀이로 두어 마디 나누는 주제일 뿐이다',
        );
        await era.printAndWait([
          '그 증거로, 지금도 아무도 ',
          tachyon.get_colored_name(),
          '을 알아보지 못했다',
        ]);
        await era.printAndWait([
          '트레센 학원 근처의 상점가에서 상반기에 가장 이름을 날린 ',
          tachyon.uma_sex_title,
          '을 알아보지 못하다니, 매우 이례적인 일이다',
        ]);
        era.println();
        await era.printAndWait([
          '그 모습을 보고 ',
          you.get_colored_name(),
          '는 ',
          tachyon.uma_sex_title,
          '인 주인을 떠올렸다',
        ]);
        await era.printAndWait([
          '남편이 트레이너라고 하니,',
          tachyon.sex,
          '도 한때는 레이스를 뛰던 ',
          tachyon.uma_sex_title,
          '였겠지',
        ]);
        await era.printAndWait(
          '은퇴한 뒤에는 레이스와 거의 인연이 없는 이런 삶을 살고 있다',
        );
        await era.printAndWait(
          '이토록 담담하고, 이토록 지루하고, 이토록……평온한 삶',
        );
        era.println();
        await tachyon.say_and_wait('……이것도 하나의 가능성인 건가?');
        era.println();
        await era.printAndWait([tachyon.uma_sex_title, '의 가능성']);
        await era.printAndWait([
          '그것은 ',
          tachyon.get_colored_name(),
          '이 늘 입에 올리는 말이다',
        ]);
        await era.printAndWait([
          '……하지만 ',
          tachyon.uma_sex_title,
          '라고 해서 누구나 경주 ',
          tachyon.uma_sex_title,
          '가 될 수 있는 것은 아니다',
        ]);
        await era.printAndWait([
          '경주 ',
          tachyon.uma_sex_title,
          '라도 레이스장이 아닌 다른 길을 선택할 수 있다',
        ]);
        era.println();
        await era.printAndWait([
          '그렇다면 그 가능성은 ',
          tachyon.get_colored_name(),
          '에게도 해당하는 걸까?',
        ]);
        await era.printAndWait([
          '문득 ',
          you.get_colored_name(),
          '는 ',
          tachyon.get_colored_name(),
          '이 침울해하는 이유를 이해했다',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '에게도 그런 가능성이 있을까?',
        ]);
        await era.printAndWait(['찻집 주인이 된 ', tachyon.get_colored_name()]);
        await era.printAndWait([
          '연구의 길로 나아가 과학자가 된 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          '평범한 학생으로 진학해 대학생이 되고, 사회에 나와 회사원이 된 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          tachyon.sex,
          '에게도 있을까. 평범한 사람처럼 레이스장을 떠나 자신의 삶을 살아가는 나날이',
        ]);
        era.println();
        await tachyon.say_and_wait(['……', callname, ', 나를 따라와 주겠나?']);
        await tachyon.say_and_wait('만약……내가 그런 가능성을 선택한다면');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '과 함께 레이스와도,',
          tachyon.uma_sex_title,
          '의 속도와도 무관한 소박하고 평온한 일상을 보낸다',
        ]);
        await era.printAndWait('그런 삶은 분명 무척 아름답겠지');
        await era.printAndWait([
          '평범한 나날이라도 ',
          tachyon.get_colored_name(),
          '이 있다면 절대 지루하지 않을 것이다',
        ]);
        await era.printAndWait([tachyon.sex, '과 함께 둘만의 삶을 꾸린다']);
        await era.printAndWait('……하지만 지금은 안 된다');
        era.printButton('「……내일 아리마가 끝난 뒤라도 괜찮을까」', 1);
        era.printButton('「내일 아리마를 보고 나서 다시 물어봐 줘」', 2);
        await era.input();
        await era.printAndWait(
          '레이스장을 떠나고 싶다는 것도 선택할 수 있는 가능성 중 하나다',
        );
        await era.printAndWait([
          '하지만 지금의 ',
          tachyon.get_colored_name(),
          '처럼 도피하듯 떠나는 건 절대 아니다',
        ]);
        await era.printAndWait(
          '……내일 아리마가 그 눈빛을 바꿔 주었으면 좋겠다',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_b: (() => {
    const title = '최종 실험, 준비 완료';
    /**
     * Plan B 専用、シニア年有馬記念の前
     * 注意：Plan B ではアグネスタキオンはシニア年有馬記念に出走できないため、このイベントは機制上マンハッタンカフェの同段階の前イベントに属する
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {string} callname_25 マンハッタンカフェがプレイヤーを呼ぶ名
     * @param {PrintedSpan} c_call_t マンハッタンカフェがアグネスタキオンを呼ぶ名
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
      arim_kin,
    ) => {
      await tachyon.print_and_wait('아리마 기념');
      await tachyon.print_and_wait([
        callname,
        '의 말대로라면 이 레이스 뒤에 자신에 대한 답이 나온다',
      ]);
      await tachyon.print_and_wait('조금 두렵고, 그래도 조금은 기대된다');
      await tachyon.print_and_wait('다가올 결말이 두렵고');
      await tachyon.print_and_wait('밝혀질 진실이 기대된다');
      await tachyon.print_and_wait([you.sex, '는 대체 무엇을 말하려는 걸까']);
      await tachyon.print_and_wait('오늘 아리마에서 그게 명확해지는 걸까?');
      era.println();
      await coffee.say_and_wait(['……', c_call_t, '？']);
      await tachyon.say_and_wait('…………');
      await coffee.say_and_wait([c_call_t, '！']);
      await tachyon.say_and_wait('……어?');
      era.println();
      await era.printAndWait([
        '정신을 차리니 눈앞의 ',
        call_25,
        '가 곤란한 표정으로 이쪽을 보고 있다',
      ]);
      era.println();
      await coffee.say_and_wait(
        '몇 번이나 불렀는데……또 무슨 생각을 하고 있었나요?',
      );
      await tachyon.say_and_wait('……아무것도 아니야. 괜찮다네');
      await coffee.say_and_wait('……이상하네요');
      await tachyon.print_and_wait([
        call_25,
        '때문이 아니었다면 자신이 이렇게 되지는 않았을 것이다',
      ]);
      await tachyon.print_and_wait([
        '처음부터 ',
        call_25,
        '에게 온 힘을 쏟지 말았어야 했다. 적어도 자신은 ',
        callname,
        '의 마음속에서 가장 밝은 빛으로 남을 수 있었을 테니까',
      ]);
      await tachyon.print_and_wait([
        '……그런 생각은 조금도 ',
        tachyon.get_colored_name(),
        '의 머릿속에 떠오르지 않았다',
      ]);
      await tachyon.print_and_wait([
        '그런 생각을 한다면 과거의 ',
        tachyon.get_colored_name(),
        '을 전부 부정하는 셈이 된다',
      ]);
      await tachyon.print_and_wait([
        '더구나 ',
        call_25,
        '자신은 아무 잘못도 하지 않았다',
      ]);
      await tachyon.print_and_wait(
        '그저……모든 일이 예상과 다르게 흘러갔을 뿐이다',
      );
      await tachyon.print_and_wait([
        '그러니 ',
        tachyon.get_colored_name(),
        '은 몹시 복잡한 눈길로 ',
        call_25,
        '를 바라볼 수밖에 없다',
      ]);
      era.println();
      await coffee.say_and_wait('슬슬 나갈 시간이에요');
      await tachyon.say_and_wait('……그래, 힘내게');
      await coffee.say_and_wait([c_call_t, '……목소리가 조금 이상해요']);
      era.println();
      await tachyon.print_and_wait([
        '너무 기대한 탓일까.',
        tachyon.get_colored_name(),
        '의 목소리는 조금 쉬어 있었다',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……아무것도 아니야. 어제 ',
        callname,
        '와 거리에 나갔다가 조금 추웠을 뿐이네',
      ]);
      if (era.get('love:25') >= 75) {
        await coffee.say_and_wait(
          '잠깐만요. 두 분이 크리스마스에 거리에 나갔다고요? ……레이스가 끝나면 자세히 설명해 주세요',
        );
      } else {
        await coffee.say_and_wait([
          '또 ',
          callname_25,
          '와 돌아다니고……오늘은 ',
          arim_kin,
          '인데',
        ]);
      }
      era.println();
      await era.printAndWait('그 뒤의 말은 더 이상 중요하지 않았다');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 기다린다. 레이스가 끝나고 수수께끼가 풀릴 순간을',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ending_b: (() => {
    const title = (tachyon, coffee) => [
      { color: 'white', content: '최강의' },
      {
        color: coffee.color,
        content: coffee.uma_sex_title,
        fontWeight: 'bold',
      },
      { color: 'white', content: ', 최속의' },
      { color: tachyon.color, content: '달리기', fontWeight: 'bold' },
    ];
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {PrintedSpan} callname_25 マンハッタンカフェがプレイヤーを呼ぶ名
     * @param {PrintedSpan} c_call_t マンハッタンカフェがアグネスタキオンを呼ぶ名
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
    ) => {
      await tachyon.print_and_wait([
        '처음에 ',
        tachyon.get_colored_name(),
        '은 그저 기다리고 있었다',
      ]);
      await tachyon.print_and_wait([
        '레이스가 끝나기를, ',
        callname,
        '가 ',
        you.sex,
        '의 답을 내놓기를',
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.sex,
        '은 이 레이스에 무슨 의미가 있는지 알 수 없다',
      ]);
      await tachyon.print_and_wait([
        '지금의 자신과 ',
        call_25,
        '의 차이를 보여 주려는 걸까?',
      ]);
      await tachyon.print_and_wait(
        '지금의 자신은 아직 부족하다는 건가, 충분히 가엾지 않다는 건가. 그런 자포자기한 생각마저 떠올랐다',
      );
      await tachyon.print_and_wait([
        '그래서 ',
        tachyon.sex,
        '은 레이스장을 진지하게 보고 있지 않았다',
      ]);
      await tachyon.print_and_wait('그저 시간이 지나기를 기다렸을 뿐이다');
      era.println();
      await you.say_as_passer_by_and_wait('해설', [
        '레이스 시작! 각 ',
        tachyon.uma_sex_title,
        ', 안정적인 출발입니다!',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '처음에는 해설의 목소리가 ',
        tachyon.sex,
        '의 호기심을 자극했다',
      ]);
      await tachyon.print_and_wait([
        '달리지 못하게 되어도 ',
        tachyon.get_colored_name(),
        '은 모든 것에 호기심을 갖고 있다',
      ]);
      await tachyon.print_and_wait([
        '더구나 상대는 이론상 자신이 속속들이 알고 있을 터인 ',
        call_25,
      ]);
      era.println();
      await tachyon.print_and_wait('그다음에는 위화감');
      await tachyon.print_and_wait(
        '사실 그 위화감은 지금 시작된 것이 아니었다',
      );
      await tachyon.print_and_wait(['재팬컵이 끝났을 때부터 있었다']);
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        '의 달리기……처음의 ',
        tachyon.sex,
        '의 달리기와 아주 조금 다르다',
      ]);
      await tachyon.print_and_wait([
        '만약 자신이 계속 ',
        call_25,
        '를 지켜보고 있었다면 알아채지 못했을지도 모른다. 그 정도로 미세한 차이다',
      ]);
      await tachyon.print_and_wait([
        '하지만 재팬컵 이후 ',
        call_25,
        '의 달리기를 진지하게 보지 않았던 자신에게는 아주 작은 변화도 또렷이 보인다',
      ]);
      await tachyon.print_and_wait('특히……');
      await tachyon.print_and_wait([
        '저것은 여전히 ',
        call_25,
        '자신의 달리기다. 하지만……',
      ]);
      await tachyon.print_and_wait('세세한 부분……출발 자세……호흡법……');
      await tachyon.print_and_wait([
        '그 세세한 부분은……',
        tachyon.get_colored_name(),
        '자신조차 의식하지 못했던, 자신만의 버릇이다',
      ]);
      await tachyon.print_and_wait('그건……');

      era.printButton(
        `「이건……내가 아는 최속과 최강, 두 ${tachyon.uma_sex_title}의 달리기를 융합한 거야」`,
        1,
      );
      await era.input();
      await tachyon.print_and_wait(
        '자신의 마음을 놓아주지 않는 그 사람이 어느새 곁에 서 있었다',
      );
      await tachyon.print_and_wait([
        '눈 속의 빛은 여전히 흔들리며 레이스장을 달리는 그 ',
        tachyon.uma_sex_title,
        '를 바라보고 있다',
      ]);
      await tachyon.print_and_wait('하지만……');
      era.println();
      await tachyon.print_and_wait([
        you.sex,
        '의 눈 속 빛은 대체 누구를 위해 빛나는 걸까',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '를 위해서일까, 아니면 ',
        coffee.get_colored_name(),
      ]);
      await tachyon.print_and_wait([
        '전에는 당연하게 생각했다. 자신은 더 이상 레이스장에 설 수 없으니, 바라보는 것은 ',
        call_25,
        '일 거라고',
      ]);
      await tachyon.print_and_wait('하지만……');
      era.printButton(
        '「그리고 나는 믿어. 이보다 더 찬란하고 눈부시고 사람을 매료시키는 달리기는 없다고」',
        1,
      );
      await era.input();
      await you.say_as_passer_by_and_wait('해설', [
        coffee.get_colored_name(),
        '! 광속을 넘어선 칠흑의 환영! 연말의 나카야마를 제패한 것은 ',
        coffee.get_colored_name(),
        '！',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '황홀한 가운데 자신은 본 것 같았다.',
        tachyon.get_colored_name(),
        '과 ',
        coffee.get_colored_name(),
        '가 동시에 결승선을 넘는 순간을',
      ]);
      era.drawLine();
      await era.printAndWait([
        '그 ',
        tachyon.teen_sex_title,
        '가 친구를 뛰어넘겠다는 꿈을 이룰 수 있도록',
      ]);
      await era.printAndWait(
        '마음에서 떠나지 않는 그 모습이 앞으로도 눈앞에서 달릴 수 있도록',
      );
      await era.printAndWait([
        '최강의 ',
        tachyon.uma_sex_title,
        '와 최속을 결합한다',
      ]);
      await era.printAndWait(
        '머릿속에서는 이 순간에 할 만한 멋진 말을 몇 가지나 떠올렸다',
      );
      await era.printAndWait('하지만 입을 여는 순간……다시 가로막혔다');
      await tachyon.say_and_wait('쪽……읍……쪽……');
      await era.printAndWait(
        '이렇게 사람이 많은 관중석에서, 이렇게나 대담한 입맞춤이라니',
      );
      await era.printAndWait([
        '……주변 사람들이 모두 레이스장 중앙의 ',
        coffee.get_colored_name(),
        '에게 정신이 팔려 있지 않았다면 또 한바탕 비난이 쏟아졌을 것이다',
      ]);
      await era.printAndWait([
        '어떤 의미에서는 참으로 ',
        tachyon.sex,
        '다운 행동이다',
      ]);
      era.println();
      await era.printAndWait([
        '얼마나 이어졌는지 모르겠다.',
        you.get_colored_name(),
        '가 자신의 목숨을 걱정하기 시작하고, 진정된 관객들에게 두 사람의 이상한 모습이 들킬 것 같아질 무렵 ',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '은 그제야 인간에게도 ',
        tachyon.uma_sex_title,
        '에게도 가장 중요한 산소의 존재를 떠올렸다',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 얼굴은 산소 부족 때문인지, 아니면 어떤 감정 때문인지 살짝 붉어져 있었고,',
      ]);
      await era.printAndWait([
        '그리고 ',
        you.get_colored_name(),
        '가 사랑하는, 광기의 빛을 머금은 검붉은 눈동자는 여전히 ',
        you.get_colored_name(),
        '의 얼굴을 정면으로 바라보고 있었다',
      ]);
      await era.printAndWait('그리고……');
      await era.printAndWait([
        '이것이 ',
        you.get_colored_name(),
        '가 이 세상에 ',
        tachyon.get_colored_name(),
        '의 달리기보다 빛나는 것이 있음을 처음 본 순간이었다',
      ]);
      await era.printAndWait([
        '바로 지금 이 순간 ',
        tachyon.get_colored_name(),
        '의 얼굴에 떠오른 미소',
      ]);
      era.drawLine({ content: '트레센 학원으로 돌아온 뒤' });
      await coffee.say_and_wait('……오늘 아리마에서 이긴 건 제가 맞죠');
      await tachyon.say_and_wait([
        '물론이지, ',
        call_25,
        '. 멋진 레이스였다네',
      ]);
      await coffee.say_and_wait([
        '그럼……설명해 주실래요? 왜 ',
        c_call_t,
        '은 의기양양하게 ',
        callname_25,
        '에게 달라붙어 있는 거죠',
      ]);
      era.println();
      await era.printAndWait([
        '레이스장에서 돌아온 뒤로 ',
        tachyon.get_colored_name(),
        '은 줄곧 자신을 붙잡고 놓지 않았다',
      ]);
      await era.printAndWait([
        '지금도 ',
        you.get_colored_name(),
        '를 소파에 앉히고는 왼팔을 끌어안은 채 놓지 않는다',
      ]);
      await era.printAndWait([
        '게다가 전부 자기 공이라는 듯한 얼굴로 의기양양하게 ',
        coffee.get_colored_name(),
        '를 보고 있다',
      ]);
      era.println();
      await tachyon.say_and_wait('후훗～～뭐가 문제인가? 뭐가 문제냐고?');
      if (era.get('love:25') >= 75) {
        await era.printAndWait([
          tachyon.get_colored_name(),
          '의 사극 악당 같은 말투를 듣고',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          '는 우선 온몸을 떨었다',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '가 충동적으로 무슨 짓을 할까 걱정한 바로 그때',
        ]);
        await coffee.say_and_wait('————그럼 저도요');
        era.println();
        await era.printAndWait([
          '토라진 듯 ',
          coffee.get_colored_name(),
          '는 순식간에 소파로 파고들어 ',
          you.get_colored_name(),
          '의 두 다리 사이에 앉았다',
        ]);
        era.println();
        await tachyon.say_and_wait(['이봐——', call_25, ', 그건 반칙이잖나!']);
        await coffee.say_and_wait(
          '……반칙 아니에요. 그리고……반칙이면 어때요. 오늘 이긴 건 저인데……',
        );
        await tachyon.say_and_wait('윽, 나도 앉겠네!');
        era.println();
        await era.printAndWait([
          '아이처럼 티격태격하는 두 사람을 보고 ',
          you.get_colored_name(),
          '는 쓴웃음을 지었다',
        ]);
        await era.printAndWait(
          '—————어째서인지 갑자기 원앙 커피가 마시고 싶어졌다',
        );
        await coffee.say_and_wait([
          '……그런데 ',
          callname_25,
          '……',
          c_call_t,
          '가 레이스 전에 말했던 어젯밤 외출 건……나중에 제대로 설명해 주실 거죠?',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          '가 자리의 이점을 살려 ',
          you.get_colored_name(),
          '의 귓가에 조용히 속삭이는 말을 듣고',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 쓴웃음은 얼굴에 그대로 굳었다',
        ]);
      } else {
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 사극 속 탐관오리 같은 미소를 지으며,',
          you.get_colored_name(),
          '에게 얹은 손도 가만히 두지 않고 움직인다',
        ]);
        await era.printAndWait('그리고……');
        era.println();
        await tachyon.say_and_wait('꾸엑————');
        era.println();
        await era.printAndWait([
          '갑자기 ',
          tachyon.get_colored_name(),
          '은 이름 모를 정체불명의 힘에 머리를 맞은 듯 순식간에 기절했다',
        ]);
        await coffee.say_and_wait('……정말이지');
        await coffee.say_and_wait([
          '이제 좀 조용해지겠네요……그럼 ',
          callname_25,
          ', 커피 드실래요?',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '는 희미하게 쓴웃음을 지으며 ',
          coffee.get_colored_name(),
          '에게 「부탁해」라고 말했다',
        ]);
        await era.printAndWait(
          '하지만 지금은 왠지 평범한 커피만으로는 조금 쓰게 느껴질 것 같다',
        );
        await era.printAndWait(
          '겨울 햇살이 비치는 트레이너실에서, 지금 이 순간은',
        );
        await era.printAndWait('무언가 다른 것을 더하는 편이 좋겠다……');
        era.printButton('「……저기, 원앙 커피 한번 만들어 볼래?」', 1);
        await era.input();
        await era.printAndWait([
          coffee.get_colored_name(),
          '는 ',
          you.get_colored_name(),
          '를 보며 처음에는 조금 화를 냈다가, 무언가 떠오른 듯 곤란한 표정을 지었다',
        ]);
        await coffee.say_and_wait([
          '……오늘만이에요. 그리고 절대 ',
          c_call_t,
          '에게는 말하지 마세요. 안 그러면 ',
          tachyon.sex,
          '이 또 시끄럽게 굴 테니까요',
        ]);
        await era.printAndWait('커피와 섞인 홍차를 한 모금 마신다');
        await era.printAndWait(
          '커피의 쓴맛과 홍차의 떫은맛은 옅어졌지만, 향은 줄어들지 않고 오히려 서로의 풍미를 돋운다',
        );
        await era.printAndWait([
          '어째서인지 ',
          you.get_colored_name(),
          '는 지금 이 순간이 바로 이 맛 같다고 느꼈다',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  hot_spring_b: (() => {
    const title = '또 다른 가능성';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {boolean} win_prix_lat アグネスタキオンがシニア年凱旋門賞を勝ったか
     * @param {number} chris_count クリスマスイベントで 1 を選んだ回数
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      love,
      win_prix_lat,
      chris_count,
    ) => {
      await tachyon.say_and_wait('그러고 보니 아직 이런 게 있었군……');
      await tachyon.say_and_wait([
        '그냥 버리기도 아까우니, 어떤가, ',
        callname,
        '? 같이 가겠나?',
      ]);
      era.println();
      await era.printAndWait('우연히 실험실을 정리하다가');
      await era.printAndWait(['구석에 숨겨져 있던 봉투를 발견했다']);
      if (love >= 75) {
        await era.printAndWait('음……?');
        await era.printAndWait('어째서인지 위화감이 아주 강하게 든다');
        await era.printAndWait([
          you.get_colored_name(),
          '가 자세히 보자 곧바로 꼬리가 드러났다',
        ]);
        await era.printAndWait(
          '대청소하다 발견했다는 봉투에 구김 하나 없고, 오히려 정성껏 보관해 둔 것처럼 보였다',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이 「찾아냈다」는 점까지 생각하자 ',
          you.get_colored_name(),
          '는 대강 진상을 짐작했다',
        ]);
        era.println();
        await tachyon.say_and_wait(['음? ', callname, '? 왜 그러나?']);
        era.println();
        await era.printAndWait('……말하지 말자');
        await era.printAndWait([
          '그랬다가는 ',
          tachyon.get_colored_name(),
          '이 부끄러워 화를 내는 것까지는 괜찮다. 문제는 ',
          tachyon.sex,
          '이 화를 낸 뒤에는 그날 밤 자신이 절대로 편히 있지 못하리라는 점이다',
        ]);
      }
      era.println();
      await era.printAndWait('마침 급한 일은 거의 정리되어 있다');
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 URA 결승도 이미 끝났다',
      ]);
      await era.printAndWait('기회가 났으니 같이 가자');
      era.drawLine();
      await era.printAndWait('열 시간 가까이 차에 흔들린 끝에');
      await era.printAndWait([
        you.get_colored_name(),
        '와 ',
        tachyon.get_colored_name(),
        '은 마침내 온천 숙소에 도착했다',
      ]);
      era.println();
      await tachyon.say_and_wait('후우……드디어 도착했군');
      await tachyon.say_and_wait('이봐……정말 길을 잘못 든 건 아니겠지?');
      era.printButton('「……지도에는 분명 여기라고 나와 있어」', 1);
      await era.input();
      await era.printAndWait(['두 사람이 망설이는 것도 무리는 아니다']);
      await era.printAndWait(
        '지금 있는 곳은 원시림이라 불러도 손색없는 깊은 산속이다',
      );
      await era.printAndWait('이런 곳에 정말 온천이 있을까……');
      era.println();
      await tachyon.say_and_wait(
        '찾아보도록 하지……잠깐, 여기 전파도 안 터지나!?',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '이 휴대전화를 꺼내 보니, 깊은 산속에는 정말 전파가 잡히지 않았다',
      ]);
      await era.printAndWait('이건……곤란한데');
      era.println();
      await tachyon.say_and_wait([callname, '……차라리 돌아가는 건 어떤가?']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '도 돌아갈까 생각하던 바로 그때',
      ]);
      await era.printAndWait('수풀을 하나 헤치자 눈앞에 온천 숙소가 나타났다');
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        '와 ',
        tachyon.get_colored_name(),
        '이 프런트에서 체크인을 마친 뒤 ',
        you.get_colored_name(),
        '는 곧바로 노천탕에 들어갔다',
      ]);
      await era.printAndWait(
        '아직 추위가 가시지 않은 겨울에 열몇 시간이나 차를 타고 산까지 넘었다. 정말 고된 여정이었다',
      );
      await era.printAndWait(
        '하지만 깊은 산속이라는 장점도 있다. 숙소에는 자신들 외에 손님이 없어, 말하자면 혼자 숙소를 독차지한 셈이다',
      );
      await era.printAndWait('그래서 지금의 온천욕은 각별히 기분이 좋다');

      era.printButton('「……응?」', 1);
      await era.input();
      await era.printAndWait('그때 탈의실의 가림막 너머에서 인기척이 났다');
      await era.printAndWait(
        '응? 방금 아무도 없다고 했는데 다른 손님이 온 건가?',
      );
      era.println();
      await tachyon.say_and_wait([callname, '? 안에 있나?']);
      era.println();
      await era.printAndWait('……뭐?');
      era.printButton('「타키……타키온!?」', 1);
      await era.input();
      await tachyon.say_and_wait('오, 있었군. 그럼 사양 않고 들어가겠네');
      era.println();
      await era.printAndWait([
        '말이 끝나자마자 ',
        tachyon.sex,
        '은 ',
        you.get_colored_name(),
        '의 대답을 기다리지 않고 탈의실 문을 밀고 들어왔다',
      ]);
      await era.printAndWait([
        '……',
        tachyon.sex,
        '이 목욕 수건을 두른 것을 보고 ',
        you.get_colored_name(),
        '은 안도한 건지 실망한 건지 알 수 없었다',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '하하하! 그 표정은 뭐지? 알몸으로 들어올 줄 알았나?',
      );
      await tachyon.say_and_wait('아무리 나라도 그 정도 상식은 있다네');
      era.println();
      await era.printAndWait([
        '말투는 놀리는 듯했지만 ',
        you.get_colored_name(),
        '는 ',
        tachyon.sex,
        '이 뭔가 하고 싶은 말이 있는 것처럼 느꼈다',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '아까 프런트의 여주인과 잠깐 이야기했는데 말이지……',
        tachyon.sex,
        ', 나를 전혀 모르더군',
      ]);
      await tachyon.say_and_wait([
        '정확히는 경주 ',
        tachyon.uma_sex_title,
        '인 ',
        tachyon.get_colored_name(),
        '을 모른다네',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '가 오해하지 않도록 ',
        tachyon.get_colored_name(),
        '은 서둘러 덧붙였다',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '을 못 알아보는 건 이해할 수 있다. 모두가 ',
        tachyon.uma_sex_title,
        '의 레이스에 열광해서 선수 하나하나의 얼굴까지 외우고 사는 것은 아니니까',
      ]);
      if (win_prix_lat) {
        await era.printAndWait([
          '하지만 경주 ',
          tachyon.uma_sex_title,
          '인 ',
          tachyon.get_colored_name(),
          '을 모른다니……세계의 정점, 개선문상을 제패한 ',
          tachyon.uma_sex_title,
          '을 모르는 사람은 이 세상에서 분명 드물다',
        ]);
      } else {
        await era.printAndWait([
          '하지만 경주 ',
          tachyon.uma_sex_title,
          '인 ',
          tachyon.get_colored_name(),
          '을 모르는 사람은 이 세상에서 분명 드물다',
        ]);
      }
      await era.printAndWait(
        '다만 이토록 외딴 숙소라는 걸 생각하면, 그럴 수도 있겠다는 생각이 든다',
      );
      era.println();
      await tachyon.say_and_wait(
        '솔직히 놀랐네……정말로 나를 전혀 모르는, 완전한 타인이 있다니……',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '는 ',
        tachyon.get_colored_name(),
        '이 말을 잇기를 기다렸다',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '도 순간은 놀랐다. 하지만 ',
        tachyon.get_colored_name(),
        '은 명예나 이익을 탐하는 ',
        tachyon.uma_sex_title,
        '가 아니다. 명성 따위는 ',
        tachyon.sex,
        '이 가장 신경 쓰지 않는 것 중 하나다',
      ]);
      await era.printAndWait('굳이 이 이야기를 꺼낸 데에는 다른 이유가 있겠지');
      era.println();
      if (chris_count < 2) {
        await tachyon.say_and_wait('크리스마스 날 일을 기억하나?');
        era.println();
        await era.printAndWait([
          '크리스마스……',
          you.get_colored_name(),
          '는 그 작은 술집을 떠올렸다',
        ]);
        await era.printAndWait(
          '레이스장의 세계는 정말로 그곳과는 무관해 보였다',
        );
        await era.printAndWait(
          '레이스가 없어도 그들의 인생은 똑같이 흘러가고 있다',
        );
        await era.printAndWait('지금 이 순간도 그때와 같다');
        await era.printAndWait([
          '……그때 자신은 ',
          tachyon.get_colored_name(),
          '이 제시한 가능성을 거절했다',
        ]);
        await era.printAndWait([
          '그때의 ',
          tachyon.sex,
          '은 도망치기 위해 레이스장을 떠나려 했기 때문이다',
        ]);
        await era.printAndWait('그렇다면 지금은?');
        await era.printAndWait([
          you.get_colored_name(),
          '는 말없이 ',
          tachyon.get_colored_name(),
          '이 이야기를 마치기를 기다렸다',
        ]);
        era.println();
        await era.printAndWait([
          '탕 가장자리에 앉은 ',
          tachyon.sex,
          '은 아무 말도 하지 않는다',
        ]);
        await era.printAndWait(
          '달빛 아래에서는 그림 속에 있는 것처럼 고요해 보인다',
        );
        await era.printAndWait([
          tachyon.sex,
          '을 알고,',
          tachyon.get_colored_name(),
          '이라는 ',
          tachyon.uma_sex_title,
          '를 아는 사람이라면 상상하기 어려운 광경이다',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이 「고요하다」는 말과 이렇게 잘 어울리다니',
        ]);
        era.println();
        await tachyon.say_and_wait([
          callname,
          '……그날의 답은 아직 듣지 못했군',
        ]);
        await tachyon.say_and_wait('이런 가능성도 존재해도 되는 건가?');
        await tachyon.say_and_wait(
          '계속 가능성을 좇던 과학자가 어느 날 문득 지쳤어. 계기도 없이,',
        );
        await tachyon.say_and_wait(
          '이만하면 충분하다고 생각해 앞으로의 길은 뒤따르는 이들에게 맡기기로 한 거지……',
        );
        await tachyon.say_and_wait(
          '소중히 여기는 사람, 자신을 소중히 여겨 주는 사람과 그저 함께 살아가고 싶어졌어……',
        );
        await tachyon.say_and_wait(
          '그런 사람에게……이런 곳은 꽤 어울리지 않겠나?',
        );
        era.println();
        await era.printAndWait([
          '아무도 ',
          tachyon.get_colored_name(),
          '을 모르는 곳',
        ]);
        await era.printAndWait('더 이상 가능성을 탐구하지 않아도 된다');
        await era.printAndWait(
          '멈춰 서서 한숨 돌릴 수 있다. 혹은……이대로 평온하게 살아갈 수도 있다',
        );
        await era.printAndWait('그런 가능성……');
      } else {
        await tachyon.say_and_wait('여기는 조용하군');
        era.println();
        await era.printAndWait(
          '……바람과 물소리 외에는 사람 목소리 하나 들리지 않는 온천 숙소',
        );
        await era.printAndWait([
          '지나친 고요함은 다른 때라면 무섭게 느껴질 수도 있겠지. 하지만 ',
          tachyon.get_colored_name(),
          '이 있다면 이 공간도 견디지 못할 곳은 아니다',
        ]);
        era.println();
        await tachyon.say_and_wait('게다가 넓어');
        era.println();
        await era.printAndWait(
          '……온천 숙소니까 당연하다. 지금은 둘뿐이지만, 원래는 수백 명의 손님을 받을 수 있게 지어진 곳이다',
        );
        era.println();
        await tachyon.say_and_wait('그리고 사람도 없지');
        era.println();
        await era.printAndWait('……이렇게 깊은 산속이니까');
        await era.printAndWait([
          '맥락 없는 말이 이어지자 ',
          you.get_colored_name(),
          '는 점점 더 ',
          tachyon.get_colored_name(),
          '이 무슨 말을 하려는 건지 알 수 없게 되었다',
        ]);
        era.println();
        era.println();
        await tachyon.say_and_wait([
          '이토록 넓고 조용하고 평온한 곳이라면……개선문상의 ',
          tachyon.uma_sex_title,
          '와 ',
          tachyon.sex,
          '의 트레이너 정도는 품어 줄 수 있겠지',
        ]);
        await tachyon.say_and_wait(
          '이렇게……아무도 모르게 조용하고 평온하게 살아가는 것……그것도 하나의 가능성일까?',
        );
        era.println();
        await era.printAndWait([tachyon.uma_sex_title, '의 가능성']);
        await era.printAndWait([
          '그것은 ',
          tachyon.get_colored_name(),
          '이 늘 입에 올리는 말이다',
        ]);
        await era.printAndWait([
          '하지만 ',
          tachyon.uma_sex_title,
          '는 평생 달리기만 할 수는 없다',
        ]);
        await era.printAndWait([
          '경주 ',
          tachyon.uma_sex_title,
          '라도 언젠가는 레이스장을 떠나, 속도를 추구하는 일과는 다른 길로 나아간다',
        ]);
        era.println();
        await era.printAndWait([
          '그렇다면 그 가능성은 ',
          tachyon.get_colored_name(),
          '에게도 해당하는 걸까?',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '에게도 그런 가능성이 있을까?',
        ]);
        await era.printAndWait(['찻집 주인이 된 ', tachyon.get_colored_name()]);
        await era.printAndWait([
          '연구의 길로 나아가 과학자가 된 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          '평범한 학생으로 진학해 대학생이 되고, 사회에 나와 회사원이 된 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          tachyon.sex,
          '에게도 있을까. 평범한 사람처럼 레이스장을 떠나 자신의 삶을 살아가는 나날이',
        ]);
        era.println();
        await tachyon.say_and_wait(['……', callname, ', 나를 따라와 주겠나?']);
        await tachyon.say_and_wait('만약……내가 그런 가능성을 선택한다면');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '과 함께 레이스와도,',
          tachyon.uma_sex_title,
          '의 속도와도 무관한 소박하고 평온한 일상을 보낸다',
        ]);
        await era.printAndWait('그런 삶은 분명 무척 아름답겠지');
        await era.printAndWait([
          '평범한 나날이라도 ',
          tachyon.get_colored_name(),
          '이 있다면 절대 지루하지 않을 것이다',
        ]);
      }
      era.printButton('「나쁘지……않을 것 같아」', 1);
      era.printButton('「조금 더……생각해 봐도 될까」', 2);
      await era.input();
      await tachyon.say_and_wait('……후후');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '의 답에 ',
        tachyon.get_colored_name(),
        '은 별다른 말을 하지 않았다',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '은 발끝으로 수면을 쓸며 겹겹이 파문을 일으키고 있다',
      ]);
      await era.printAndWait([
        '문득 바람이 일자 ',
        you.get_colored_name(),
        '는 숲 전체가 다시 숨을 쉬기 시작하는 소리를 들었다',
      ]);
      await era.printAndWait(
        '나뭇잎이 사락사락 떨어지고, 밤잠을 자던 새들이 놀라 날아올랐다',
      );
      await era.printAndWait([
        '밤의 고요함은 ',
        tachyon.sex,
        '이 잠시 일으킨 소란으로 순식간에 깨진 듯했다',
      ]);
      era.println();
      await era.printAndWait([
        '이런 ',
        tachyon.sex,
        '이 정말 그런 삶을 살 수 있을까?',
      ]);
      await era.printAndWait([
        '가능하든 불가능하든, 거기서 생겨날 가능성을 생각하자 ',
        you.get_colored_name(),
        '는 문득 가슴이 설렜다',
      ]);
      await era.printAndWait([
        '하지만 가능하든 불가능하든, 자신은 반드시 ',
        tachyon.sex,
        '의 곁에 있을 것이다. 마지막까지',
      ]);
      era.println();
      await tachyon.say_and_wait('그런데 말이지');
      era.println();
      await era.printAndWait('주변이 겨울밤의 고요함과 소란을 되찾은 뒤');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 문득 생각났다는 듯 입을 열었다',
      ]);
      await era.printAndWait(
        '말하면서 목욕 수건의 끝을 슬그머니 말아 올려, 허벅지 안쪽 깊숙한 곳까지 드러낸다',
      );
      era.println();
      await tachyon.say_and_wait('수건을 두른 채라 조금 미안하긴 하네만……');
      await tachyon.say_and_wait(
        '그래도 이 아래에는 정말 아무것도 안 입었다네……볼 텐가?',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 장난기 어린 눈으로 ',
        you.get_colored_name(),
        '를 바라보며 손으로 목욕 수건의 매듭을 천천히 풀어 간다',
      ]);
      if (tachyon.sex_code !== 1) {
        await era.printAndWait([
          you.get_colored_name(),
          '는 수건 아래로 희미하게 보이는, 조금 젖은 틈을 보았다',
        ]);
        await era.printAndWait('……아마 온천수겠지');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이 아직 탕에 들어가지 않았다는 걸 알면서도, ',
          you.get_colored_name(),
          '는 그렇게 자신을 속이기로 했다',
        ]);
      }
      era.printButton('「온천 안에서는 좀 곤란하지 않을까……」', 1);
      era.printButton('「방에 돌아가서 하면……안 될까?」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '이미 확인했다네……며칠 동안은 우리 말고 예약한 사람이 없어. 그러니 여기서 뭘 해도 문제없지',
      );
      await tachyon.say_and_wait(
        '게다가……아무도 오지 않으니 저항해 봤자 소용없다네♡',
      );
      await tachyon.say_and_wait('힘 빼고 즐기도록 하게');
      era.println();

      if (tachyon.sex_code !== 1 && you.sex_code > 0) {
        await era.printAndWait([
          '언제 수건을 벗었는지, 알몸으로 탕에 들어온 ',
          tachyon.get_colored_name(),
          '이 ',
          you.get_colored_name(),
          '를 덮치며, 탕에 들어오기 전부터 흠뻑 젖어 있던 옅은 빛깔의 틈을 굵은 기둥에 맞춘다……',
        ]);
      } else {
        await era.printAndWait([
          '언제 수건을 벗었는지, 알몸으로 탕에 들어온 ',
          tachyon.get_colored_name(),
          '이 ',
          you.get_colored_name(),
          '를 덮치고, ',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} tachyon
   * @param {CharaTalk} you
   */
  async hot_spring_b_sex_end(tachyon, you) {
    await era.printAndWait([
      '일이 끝나자 ',
      tachyon.get_colored_name(),
      '이 먼저 탕에서 나왔다',
    ]);
    if (tachyon.sex_code !== 1 && you.sex_code > 0) {
      await era.printAndWait([
        you.get_colored_name(),
        '는 만족스러운 듯 살짝 부푼 배를 쓰다듬는 ',
        tachyon.sex,
        '의 모습과, 허벅지를 타고 흘러내리는 온천수인지 무엇인지 모를 투명한 액체를 바라본다',
      ]);
      await era.printAndWait(
        '일자로 닫혀 있던 것이 두 입술처럼 벌어지고, 그 사이에 조금 전 몰래 받아먹은 하얀 액체가 남아 있는 구멍도 보인다',
      );
      await era.printAndWait('사타구니가 다시 단단해졌다');
      await era.printAndWait([
        tachyon.sex,
        '은 눈치챈 듯 엉덩이를 살짝 흔든다',
      ]);
    }
    await era.printAndWait('방에 돌아가면 또 한바탕 치르게 될 것 같다……');
    await era.printAndWait([
      '그 전에 ',
      you.get_colored_name(),
      '는 하늘을 올려다보며 한바탕 치르기 전의 마지막 고요함을 음미한다',
    ]);
  },
  palace_b: (() => {
    const title = 'Plan B의 미래';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        tachyon.get_colored_name(),
        '과 함께한 삼 년이 끝났다',
      ]);
      era.println();
      await era.printAndWait([
        '졸업식이 끝난 뒤 ',
        you.get_colored_name(),
        '는 ',
        tachyon.sex,
        '의 앞으로의 계획도 물었다',
      ]);
      await era.printAndWait([
        '「또 만나게 될 걸세, ',
        callname,
        '」',
        tachyon.sex,
        '은 그 말만 남겼다',
      ]);
      era.println();
      await era.printAndWait([
        '그러고는 ',
        tachyon.get_colored_name(),
        '은 떠났다',
      ]);
      await era.printAndWait('트레센 학원을 떠나고, 이 나라를 떠났다');
      await era.printAndWait('마치 세상에서 사라진 것처럼');
      await era.printAndWait(['지금 ', tachyon.sex, '은 대체 어디에 있을까']);
      await era.printAndWait([
        you.get_colored_name(),
        '도 그런 의문을 품은 적이 있다',
      ]);
      await era.printAndWait('밥은 잘 먹고 있을까');
      await era.printAndWait('잠은 잘 자고 있을까');
      await era.printAndWait([
        '혼자 있는 ',
        tachyon.sex,
        '이 정말 스스로를 돌볼 수 있을까',
      ]);
      era.println();
      await era.printAndWait('상대는 이미 성인인데도, 걱정하지 않을 수 없었다');
      await era.printAndWait('하지만……사실 자신도 알고 있다');
      await era.printAndWait('그런 걱정은 쓸데없다는 것을');
      await era.printAndWait([tachyon.get_colored_name(), '은 천재다']);
      await era.printAndWait('의심의 여지 없이 타고난 천재다');
      await era.printAndWait([
        '그런 ',
        tachyon.sex,
        '이라면 어디에 있든 반드시 빛을 발하겠지',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '는 어디에 있는지도 모를 ',
        tachyon.get_colored_name(),
        '에 대한 기대를 품고 집 문을 열었다',
      ]);
      era.println();
      await tachyon.say_and_wait(['오, ', callname, ', 오늘은 일찍 돌아왔군']);
      era.println();
      await era.printAndWait([
        '소파에 드러누워 다리를 꼬고 있는 게으른 ',
        tachyon.uma_sex_title,
        '을 무시한다',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '참, 저녁 말이야, 저녁……',
        callname,
        ', 오늘은 자네 차례라네～～',
      ]);
      era.println();
      await era.printAndWait([
        '자신의 마음속 천재 ',
        tachyon.uma_sex_title,
        ', 초광속의 입자, ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        '분명 세계 어딘가에서 ',
        tachyon.uma_sex_title,
        '의 미래에 관한 연구를 계속하고 있을 것이다',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '아, 맞다. 오늘 새 메일이……트레이너 연수회……사흘간!? 삭제, 삭제. 이런 데 참가해서 무슨 의미가 있겠나',
      );
      era.println();
      await era.printAndWait(
        '절대 아니다. 졸업한 뒤에도 학원의 빈 교실에 눌러앉아 있을 존재가 아니다',
      );
      await era.printAndWait(
        '거처는 졸업식 당일 짐을 들고 멋대로 자기 집에 굴러들어 왔다',
      );
      await era.printAndWait('이제는 완전히 자기 집을 제 영역으로 삼고 있다');
      await era.printAndWait([
        '지금도 멋대로 사생활을 침범하는 이 게으른 ',
        tachyon.uma_sex_title,
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '？ ',
        callname,
        '～～～～나 좀 봐 주게～～～～',
      ]);
      await you.say_and_wait(
        '그러니까 왜 타키온이 우리 집에 눌러앉아 있는 거야!',
      );
      era.println();
      await era.printAndWait('결국 더는 무시할 수 없게 되었다');
      await era.printAndWait(
        '첫날부터 품었지만 상대의 당당한 태도에 눌려 말하지 못했던 의문을 마침내 입 밖에 냈다',
      );
      era.println();
      await tachyon.say_and_wait('응——뭐 문제라도 있나?');
      await tachyon.say_and_wait(
        '게다가 집안일을 전혀 안 하는 것도 아니잖나. 쓸고 닦는 청소도, 저녁 준비도 나눠서 하고 있네만～～',
      );
      era.println();
      await era.printAndWait([
        '확실히 지금의 ',
        tachyon.get_colored_name(),
        '이 예전보다 나아진 점이 있다면',
      ]);
      await era.printAndWait('생활 능력의 성장일 것이다');
      await era.printAndWait([
        '모든 일을 자신에게 대신 시키던 예전의 ',
        tachyon.get_colored_name(),
        '과는 다르다',
      ]);
      await era.printAndWait([
        '지금의 ',
        tachyon.get_colored_name(),
        '은 분명 발전하고 있다',
      ]);
      await era.printAndWait(
        '식후 설거지부터 평소의 쓸고 닦는 청소까지 돕는다',
      );
      await era.printAndWait('아주 작은 차이지만, 분명 발전하고 있다……');
      await era.printAndWait(
        '다만 어째서인지 집안일을 시작한 딸을 바라보는 늙은 아버지 같은 안도감이 옅게 든다',
      );
      await era.printAndWait(
        '아니, 말려들 뻔했네……요점은 왜 여기서 사느냐는 거야!',
      );
      era.println();
      await tachyon.say_and_wait(
        '그런 사소한 건 신경 쓰지 말게. 괜찮아, 괜찮아',
      );
      await tachyon.say_and_wait('오, 아니면 돈 이야기인가?');
      await tachyon.say_and_wait(
        '확실히 생활을 나누는 건 집안일뿐만이 아니지……생활비도 분담해야겠군',
      );
      await tachyon.say_and_wait('그럼 이번 달 생활비부터 분담하도록 하지, ');
      await tachyon.say_and_wait(
        '다행히 상금은 둘째 치고, 예전에 출원한 특허……특허료라면 충분할 걸세',
      );
      era.println();
      await era.printAndWait(
        '요점은 돈이 아니야……아니, 돈도 중요해. 하지만 지금 요점은 돈이 아니라고',
      );
      await era.printAndWait([
        '애초에……',
        tachyon.get_colored_name(),
        '은 진학 안 해? 유학이라든가……?',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '이봐, ',
        callname,
        ', 판에 박힌 진학이 나에게 무슨 도움이 되리라 생각하나?',
      ]);
      await tachyon.say_and_wait(
        '그런 집단 교육은 자기 길이 정해지지 않은 범인에게는 편리하지. 나 같은 천재에게는 자신의 결단이야말로 최선의 선택이라네',
      );
      era.println();
      await era.printAndWait('인정하고 싶지 않았지만');
      await era.printAndWait([tachyon.get_colored_name(), '은 분명 천재다']);
      await era.printAndWait([
        '자신에게는 ',
        tachyon.sex,
        '의 선택을 의심할 자격이 없을지도 모른다',
      ]);
      await era.printAndWait(
        '그래도 다른 문제도 있지 않을까. 예를 들면……가족이라든가……?',
      );
      era.println();
      await tachyon.say_and_wait([
        '이봐, ',
        callname,
        '……나는 이미 성인이라네? 법적으로 완전한 행위 능력이 있는 사람이지. 살 곳을 스스로 선택할 권리는 있지 않겠나?',
      ]);
      await you.say_and_wait(
        '법이 남의 집을 자기 거처로 삼는 행위까지 보장할 것 같지는 않다',
      );
      await tachyon.say_and_wait(
        '뭐, 공간은 넓으니 내가 조금 끼어든다고 큰일 날 건 없지 않나',
      );
      await tachyon.say_and_wait('……게다가 자네, 나를 내쫓을 수 있겠나?');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 장난기 어린 눈으로 ',
        you.get_colored_name(),
        '를 바라본다',
      ]);
      await era.printAndWait('언제나 이렇다');
      await era.printAndWait('뱀에게 노려진 모르모트처럼');
      await era.printAndWait('모든 것을 빨아들이는 심연처럼');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 그 눈으로 바라보면 반박할 말이 나오지 않는다',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '이토록 나를 사랑하는 자네가 정말 나를 내쫓을 수 있겠나?',
      );
      await tachyon.say_and_wait(
        '이토록 나에게 사랑받는 자네가 정말 내 사랑을 거절할 생각인가?',
      );
      era.println();
      await era.printAndWait('입 안이 바싹 마른다');
      await era.printAndWait([
        '어느새 ',
        tachyon.get_colored_name(),
        '은 자신의 코앞까지 다가와 있었다',
      ]);
      await era.printAndWait(['국화상 때의 ', tachyon.sex, '과 같다']);
      await era.printAndWait('하지만 그때와 달리, 이번에는 정말 예감이 든다');
      await era.printAndWait('「잡아먹힌다」는 실감');
      era.println();
      await era.printAndWait('아아');
      await era.printAndWait('결국 이것도 자신이 선택한 길이겠지');
      await era.printAndWait([
        you.get_colored_name(),
        '는 온천 여행 때 ',
        tachyon.get_colored_name(),
        '과 나눈 대화를 떠올린다',
      ]);
      era.println();
      await era.printAndWait([
        '그때 자신은 결심했다.',
        tachyon.sex,
        '이 마지막에 어떤 가능성을 선택하든 반드시 끝까지 따라가겠다고',
      ]);
      await era.printAndWait('심연을 들여다보는 자는 심연에 삼켜진다');
      await era.printAndWait([
        you.get_colored_actual_name(),
        '는 아마 평생 ',
        tachyon.sex,
        '의 눈 속 심연에서 벗어나지 못할 것이다',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
