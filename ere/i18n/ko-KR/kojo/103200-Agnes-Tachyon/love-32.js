/**
 * @file アグネスタキオン - 恋慕
 * @author 幽白書
 * @author 黑奴一号 黑奴队长（修订）
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  25: (() => {
    const title = (tachyon) => [
      '「',
      tachyon.name,
      '」？「',
      tachyon.uma_sex_title,
      'A」？',
    ];
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} callname_25 マンハッタンカフェがプレイヤーを呼ぶ名
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {PrintedSpan} c_call_t マンハッタンカフェがアグネスタキオンを呼ぶ名
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      callname_25,
      t_call_c,
      c_call_t,
    ) => {
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        '의 실험실. 늘 학원을 떠들썩하게 만들던 이곳이 요 며칠은 묘하게 조용했다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '뭔가, 애마는 학원에 혼자 남겨 두고 자기만 출장을 간다니',
      );
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        '은 실험실에서 실험을 하며 투덜거리고 있다.',
      ]);
      await coffee.print_and_wait(
        '누구에 대한 불평이냐고? 물론 출장 때문에 일주일 동안 자리를 비우는 모르모트 이야기다.',
      );
      era.println();
      await tachyon.say_and_wait(
        '도시락까지 직접 데워 먹게 하다니……태만하기도 정도가 있지',
      );
      era.println();
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        '은 쉬지 않고, 쉬지 않고, 쉬지 않고 중얼거린다.',
      ]);
      await coffee.print_and_wait(
        '중얼거리기만 했다면 그나마 견딜 수 있었을지도 모른다……',
      );
      era.println();
      await tachyon.say_and_wait([
        '이 정도면 학대라고 생각하지 않나? ',
        t_call_c,
      ]);
      await coffee.say_and_wait('…………애정 과시에 저까지 끌어들이지 마세요');
      era.println();
      await coffee.print_and_wait([
        tachyon.sex,
        '가 멈출 기색도 없이 자신까지 화제에 끌어들이려 하자, 같은 빈 교실을 쓰는 ',
        coffee.get_colored_name(),
        '는 마침내 참지 못했다.',
      ]);
      await coffee.say_and_wait([c_call_t, '……그 이야기, 벌써 세 번째예요']);
      await tachyon.say_and_wait('겨우 세 번이잖나. 많은 것도 아닌데');
      await coffee.say_and_wait([
        callname_25,
        '가 떠난 건 오늘이 처음이잖아요……',
      ]);
      await tachyon.say_and_wait('…………그래도 세 번은 많지……');
      await coffee.say_and_wait([
        you.sex,
        '가 학원을 나간 지 아직 삼십 분도 안 됐어요',
      ]);
      await tachyon.say_and_wait('………………');
      era.println();
      await coffee.print_and_wait([
        coffee.get_colored_name(),
        '는 한숨을 쉰다. 전에는 실험이 최우선이던 이 동급생은 트레이너와 친해진 뒤 완전히 딴사람이 되었다.',
      ]);
      if (era.get('love:25') >= 50) {
        await coffee.print_and_wait(
          '……이해가 안 되는 건 아니다. 그 사람이니까',
        );
      } else {
        await coffee.print_and_wait(
          '원래는 냉혹하고, 윤리 의식도 없고, 사람 목숨을 지푸라기처럼……너무 심하게 말했을지도 모른다.',
        );
      }
      await coffee.print_and_wait([
        tachyon.sex,
        '가 여전히 투덜거리는 모습을 보자 ',
        coffee.get_colored_name(),
        '는 짜증이 치밀어 저도 모르게 말을 내뱉었다.',
      ]);
      era.println();
      await coffee.say_and_wait([
        '그리고……',
        callname_25,
        '는 ',
        c_call_t,
        '의 전속도 아니잖아요',
      ]);
      await tachyon.say_and_wait('…………무슨 뜻인가?');
      await coffee.say_and_wait([
        '무슨 뜻인지는 ',
        c_call_t,
        '자신이 가장 잘 알 거예요.',
        callname_25,
        '가 출장을 간다고는 했지만, 어디에 무슨 일로 가는지는 말했나요?',
      ]);
      await coffee.say_and_wait([
        '…………아니. 처음부터 끝까지 ',
        you.sex,
        '는 나에게 출장을 간다는 말만 했네',
      ]);
      era.println();
      await coffee.print_and_wait([
        '당연하다. 출장이라고는 했지만 실제로는 ',
        c_call_t,
        '이 얼마 전 일으킨 실험 유출 사고를 수습하느라 급히 불려 간 것이다. 담당의 감정을 지나치게 신경 쓰는 ',
        callname,
        '이(가) ',
        tachyon.sex,
        '본인에게 말할 리 없다.',
      ]);
      if (era.get('cflag:25:招募状态') === 1) {
        await coffee.print_and_wait('……질투가 날 정도다.');
      }
      await coffee.print_and_wait([
        coffee.get_colored_name(),
        '는 속으로 생각한다.',
      ]);
      era.println();
      await coffee.say_and_wait([
        '그럼……이런 가능성도 있겠네요.',
        callname_25,
        '는 출장이 아니라……누군가와 밀회를 하는 거예요',
      ]);
      await tachyon.say_and_wait('…………');
      await coffee.say_and_wait([
        '왜냐하면……',
        c_call_t,
        '은 손이 많이 가니까요. 제가 ',
        callname_25,
        '라면 진작 질렸을 거예요',
      ]);
      await tachyon.say_and_wait([
        '……',
        you.sex,
        '는 말했네.',
        you.sex,
        '는 내 달리기와 가능성에 매료되었다고',
      ]);
      await coffee.say_and_wait('후후……');
      await tachyon.say_and_wait('뭐가 우스운 건가');
      era.println();
      await coffee.print_and_wait([
        coffee.get_colored_name(),
        '는 커피를 한 모금 마시며 지금 ',
        tachyon.get_colored_name(),
        '의 반응을 음미한다.',
      ]);
      if (era.get('love:25') >= 50) {
        await coffee.print_and_wait(
          '요즘 「자기」 트레이너와 달달한 모습을 잔뜩 뽐내던 이 사람에게 이런 불안한 표정을 짓게 하다니……안 돼, 조금 버릇이 될 것 같다.',
        );
      } else {
        await coffee.print_and_wait(
          '요즘 트레이너와 달달한 모습을 잔뜩 뽐내던 이 사람에게 이런 불안한 표정을 짓게 하다니……안 돼, 조금 버릇이 될 것 같다.',
        );
      }
      era.println();
      await coffee.say_and_wait([
        '그러니까 ',
        tachyon.get_colored_name(),
        '이라는 ',
        tachyon.uma_sex_title,
        '그 자체는 ',
        you.sex,
        '에게 아무런 매력도 없다는 뜻 아닌가요?',
      ]);
      await tachyon.say_and_wait('…………');
      await coffee.say_and_wait([
        '달리기, 가능성……',
        you.sex,
        '가 보는 건 ',
        tachyon.get_colored_name(),
        '이라는 ',
        tachyon.uma_sex_title,
        '인가요. 아니면 『그걸 가진 어느 ',
        tachyon.uma_sex_title,
        'A』인가요?',
      ]);
      await tachyon.say_and_wait('……아니……');
      await coffee.say_and_wait([
        '반대로 말하면, 그런 것들 외에 ',
        tachyon.get_colored_name(),
        '이라는 ',
        tachyon.uma_sex_title,
        '는 ',
        you.sex,
        '에게 어떤 매력이 있을까요?',
      ]);
      await tachyon.say_and_wait('…………');
      era.println();
      await coffee.print_and_wait([
        '조금 전의 불쾌함은 사라지고 오늘의 즐거움이 최고조에 달한 ',
        coffee.get_colored_name(),
        '는 마지막으로 원자폭탄이라도 떨어뜨리듯 한마디를 남기고 교실을 나갔다.',
      ]);
      if (era.get('love:25') >= 50) {
        await coffee.say_and_wait([
          '그러고 보니 ',
          callname_25,
          '의 도시락은 정말 맛있더군요……앞으로도 ',
          callname_25,
          '에게 만들어 달라고 할까요?',
        ]);
      } else {
        await coffee.say_and_wait([
          '그러고 보니 ',
          callname_25,
          '의 도시락은 정말 맛있더군요……기회가 되면 또 ',
          you.sex,
          '에게 만들어 달라고 해야겠어요',
        ]);
      }
      era.drawLine();
      await tachyon.say_and_wait('…………');
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        '는 떠났고 실험실에는 ',
        tachyon.get_colored_name(),
        '만 남았다',
      ]);
      await tachyon.print_and_wait([
        '머리 회전이 빠른 ',
        tachyon.sex,
        '는 알고 있다. 그 말들은 ',
        coffee.get_colored_name(),
        '가 ',
        tachyon.sex,
        '를 자극하기 위해 일부러 꺼낸 것이라는 걸',
      ]);
      await tachyon.print_and_wait([
        '왜 그랬는지까지 ',
        tachyon.sex,
        '는 짐작하고 있다.',
      ]);
      era.println();
      await tachyon.say_and_wait('애정 과시……?');
      era.println();
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        '의 말대로 자신과 ',
        callname,
        '은(는) ',
        tachyon.sex,
        '의 눈에 그렇게 보였던 걸까',
      ]);
      await tachyon.print_and_wait('하지만 이상하지 않나');
      await tachyon.print_and_wait(
        '애정 과시란 연인이나 서로 좋아하는 사이의 두 사람이 남의 시선을 아랑곳하지 않고 다정함을 드러내는 것',
      );
      await tachyon.print_and_wait([
        '자신과 ',
        callname,
        '은(는) 그런 관계가 아니다.',
      ]);
      await tachyon.print_and_wait('연인, 혹은 서로 좋아하는 사이……');
      await tachyon.print_and_wait([
        '주변 사람들의 눈에 자신과 ',
        callname,
        '은(는) 그런 사이로 보였던 건가?',
      ]);
      await tachyon.print_and_wait([callname, '과(와) 나……연애……']);
      era.println();
      await tachyon.say_and_wait('………！？');
      era.println();
      await tachyon.print_and_wait(
        '그 생각이 떠오르는 순간 심장이 강심제를 맞은 것처럼 뛰기 시작하고, 피가 지나치게 돌며 뺨까지 뜨거워진다.',
      );
      await tachyon.print_and_wait('이……이건 마치……내가………');
      era.println();
      await tachyon.say_and_wait([
        '그, 그, 그, 그럴 리 없네……실험동물에 불과해……그래! 결국 ',
        you.sex,
        '는 그저 모르모트일 뿐이잖나!',
      ]);
      await tachyon.say_and_wait([
        '어째서 내가 ',
        you.sex,
        '가 좋아하는 게 나인지, 달리기인지, 가능성인지 신경 써야 한단 말인가!',
      ]);
      era.println();
      await tachyon.print_and_wait(
        '그래, 모르모트라면 같은 목표를 가지고 있으면 된다.',
      );
      await tachyon.print_and_wait([
        '불필요한 감정 따위는 필요 없다. 감정은 실험에 방해만 될 뿐이다.',
      ]);
      await tachyon.print_and_wait([
        '두 사람의 관계는 연구자와 모르모트, 트레이너와 ',
        tachyon.uma_sex_title,
      ]);
      tachyon.print('그 밖의 관계는 필요 없다');
      era.printButton('정말 그런가?', 1);
      era.printButton('그래, 그렇다', 2);
      if ((await era.input()) === 1) {
        await tachyon.print_and_wait('그래, 그럴 텐데');
        await tachyon.print_and_wait('어째서');
        await tachyon.print_and_wait(
          '연인 취급을 받았다는 사실에 가슴의 두근거림과 들뜸을 억누를 수 없는 걸까',
        );
        await tachyon.print_and_wait([
          you.sex,
          '가 ',
          coffee.get_colored_name(),
          '에게 도시락을 만들어 주었다는 사실에 질투와 분노가 가라앉지 않는 걸까',
        ]);
        await tachyon.print_and_wait([
          '…………',
          coffee.get_colored_name(),
          '의 말대로 상대가 자신을 보고 있지 않을지도 모른다는 생각에 공포와 두려움을 떨칠 수 없는 걸까',
        ]);
        era.println();
        await tachyon.say_and_wait('…………나는 대체 어떻게 된 거지');
        await tachyon.say_and_wait('마치……마치');
        era.println();
        await tachyon.print_and_wait([
          '마치 내가 ',
          callname,
          '을(를) 좋아하는 것 같잖나',
        ]);
        era.println();
        await tachyon.print_and_wait(
          '당사자조차 알 수 없는 감정이 뜨거운 한숨에 섞여 천장으로 떠올랐다가, 외로운 실험실 안에서 사라진다.',
        );
      } else {
        await tachyon.print_and_wait('그래');
        await tachyon.print_and_wait('그렇다');
        await tachyon.print_and_wait(
          '두 사람은 순수하게 모르모트와 연구자로 지내면 된다.',
        );
        await tachyon.print_and_wait('이대로의 생활을 이어 가면 된다.');
        await tachyon.print_and_wait(
          '제멋대로인 천재 과학자와, 불평 없이 일하는 조수 겸 실험체',
        );
        await tachyon.print_and_wait('두 사람의 관계는 이대로면 된다.');
        await tachyon.print_and_wait('언제까지……이어 갈 수 있을까');
        await tachyon.print_and_wait(
          '일 년? 이 년? 졸업할 때까지? 대학까지? 사회에 나갈 때까지?',
        );
        await tachyon.print_and_wait('이 관계를 그때까지 유지할 수 있을까?');
        era.println();
        await tachyon.say_and_wait('하아……');
        era.println();
        await tachyon.print_and_wait(
          '하지만 어느 쪽이든 자신이 선택했다. 그러니 지금은 이대로도 괜찮다.',
        );
      }
      era.println();
      await tachyon.say_and_wait(['어서 돌아와 주게, ', callname, '……']);
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
   */
  async 49(tachyon, you, callname) {
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '릿토 기숙사의 어느 침실에서 한 ',
      tachyon.uma_sex_title,
      '가 베개로 입을 막고 낮은 목소리로 알아듣기 어려운 소리를 흘리고 있다.',
    ]);
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait(
      '평소라면 이 방에서 이런 광경이 벌어져도 드문 일은 아니다.',
    );
    await tachyon.print_and_wait([
      '대개는 어느 분홍 머리의 ',
      tachyon.uma_sex_title,
      '가 베개를 끌어안고 ',
      tachyon.uma_sex_title,
      '를 향한 마음을 낮게 속삭이는 것이지만……',
    ]);
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait('하지만, 오늘의 주인공은 조금 다르다.');
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '분홍 머리의 ',
      tachyon.uma_sex_title,
      '와 같은 방을 쓰는 밤색 머리의 ',
      tachyon.uma_sex_title,
      '가, 예전에 룸메이트가 하던, 그때는 자신을 몹시 당혹스럽게 만들던 그 행동을 지금 하고 있다.',
    ]);
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '그때의 ',
      tachyon.sex,
      '는 그런 행동이 쓸데없다고 생각했다.',
    ]);
    await tachyon.print_and_wait('정말 말하고 싶다면 왜 부끄러워하지?');
    await tachyon.print_and_wait('부끄럽다면 입 밖에 내지 않으면 되지 않나?');
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '이제야 ',
      tachyon.sex,
      '는 그 행동의 이유를 이해했다.',
    ]);
    await tachyon.print_and_wait('부끄러운 것은 말에 담긴 애정 때문이고');
    await tachyon.print_and_wait(
      '말해야만 하는 것은 말하지 않으면 마음속 불길을 풀 곳이 없기 때문이다.',
    );
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '그렇기에, 지금의 ',
      tachyon.sex,
      '도 베개를 향해, 룸메이트가 광고 촬영을 하러 멀리 나간 뒤의 빈방에서, 혼자 속마음을 털어놓을 수밖에 없다.',
    ]);
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '……그렇다 해도 이 감정의 근원이 무엇인지 ',
      tachyon.sex,
      '는 지금도 분명히 알지 못하기에, ',
    ]);
    await tachyon.print_and_wait('그저 자신의 말이라면 고분고분 따르는——');
    await tachyon.print_and_wait([
      '동시에 지금의 초조함을 만들어 낸 원흉이기도 한——',
      you.sex,
      '의 이름을 계속 부를 수밖에 없다.',
    ]);
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait(
      '처음 만났을 때는 순전히 실험체에 대한 흥미로 붙인 호칭',
    );
    await tachyon.print_and_wait(
      '처음에는 흥미 속에 평가와 냉담함이 섞여 있던 호칭',
    );
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait(
      '지금은 복잡한 감정을 띠고, 입에 올릴 때마다 가슴을 떨리게 하는 호칭이 되었다.',
    );
    era.println();
    await tachyon.say_and_wait([callname, '……']);
    era.println();
    await tachyon.print_and_wait('이 감정은 무엇일까');
    await tachyon.print_and_wait('달콤하고, 쓰고, 따뜻하면서도 두렵다.');
    await tachyon.print_and_wait('모순되는 성질이 하나의 감정에 모여 있다.');
    await tachyon.print_and_wait('기묘해. 뜨거워. 두려……워?');
    era.println();
    await tachyon.say_and_wait([callname, '……']);
    era.println();
    await tachyon.print_and_wait(
      '미지에 대한 태도는 지금까진 전부 기대와 기쁨 뿐이었다.',
    );
    await tachyon.print_and_wait('그런데, 어째서, 이 미지의 감정만은 두려움을 낳는 걸까?');
    await tachyon.print_and_wait([
      '무엇이 두렵지. 이 감정? 아니면 ',
      callname,
      '?',
    ]);
    await tachyon.print_and_wait(['내가 두려워한다고……', callname, '을(를)?']);
    era.println();
    await tachyon.say_and_wait([callname, '……']);
    era.println();
    await tachyon.print_and_wait('더욱 떨리는 마음속이 답을 알려 준다.');
    await tachyon.print_and_wait(['나는 ', callname, '을(를) 두려워하고 있나?']);
    await tachyon.print_and_wait([you.sex, '의 무엇이?']);
    await tachyon.print_and_wait(['결국 그저 ', callname, ' ']);
    await tachyon.print_and_wait('하지만……순수한 두려움도 아니다.');
    await tachyon.print_and_wait('이 복잡한 감정은 또 무엇일까');
    await tachyon.print_and_wait('긴장, 초조, 불안, 흥분, 기쁨, 공포, 혼란');
    await tachyon.print_and_wait(
      '어떤 감정에도 닿아 있는 것 같으면서, 어떤 감정에도 속하지 않는다.',
    );
    await tachyon.print_and_wait(['결국 그저 ', callname, ' ']);
    era.println();
    await tachyon.say_and_wait(['……', callname]);
    era.println();
    await tachyon.print_and_wait('……아니, 추측할 필요도 없겠지');
    await tachyon.print_and_wait([
      you.sex,
      '의 이름을 부를 때마다 마음속을 달리는 전류',
    ]);
    await tachyon.print_and_wait([
      you.sex,
      '의 목소리를 들을 때마다 가슴이 뛰는 고동',
    ]);
    await tachyon.print_and_wait([
      you.sex,
      '의 웃는 얼굴을 볼 때마다 제멋대로 폭주하는 머릿속',
    ]);
    era.println();
    await tachyon.say_and_wait('……………');
    await tachyon.say_and_wait([callname, '♡']);
    era.println();
    await tachyon.print_and_wait('아아, 역시');
    await tachyon.say_and_wait([callname, '♡']);
    era.println();
    await tachyon.print_and_wait('아니, 상상 이상이군');
    era.println();
    await tachyon.say_and_wait([callname, '♡']);
    await tachyon.say_and_wait([callname, '♡']);
    await tachyon.say_and_wait([callname, '♡']);
    era.println();
    await tachyon.print_and_wait('생각지도 못했다.');
    await tachyon.print_and_wait('「사랑」을 담아 부르기만 했는데');
    await tachyon.print_and_wait('마음이 이렇게 달라지다니');
    era.println();
    await tachyon.print_and_wait('초조함은 즐거움으로 바뀌었다.');
    await tachyon.print_and_wait('혼란은 안도감으로 바뀌었다.');
    await tachyon.print_and_wait('불안은 기쁨으로 바뀌었다.');
    await tachyon.print_and_wait('두려움은……');
    era.println();
    await tachyon.say_and_wait('…………');
    era.println();
    await tachyon.print_and_wait('어째서, 어째서 두려움은 남아 있지');
    await tachyon.print_and_wait('인정했잖나');
    await tachyon.print_and_wait([
      '나는 이미 ',
      callname,
      '을(를) 사랑하고 있잖나',
    ]);
    await tachyon.print_and_wait('그런데 왜 아직 두렵지');
    await tachyon.print_and_wait('그런데 왜 아직 무섭지');
    era.println();
    await tachyon.print_and_wait('아아……');
    await tachyon.print_and_wait('답은 명백하지 않은가');
    await tachyon.print_and_wait('이 기쁨이 사랑에서 비롯됐다면');
    await tachyon.print_and_wait('두려운 이유는');
    await tachyon.print_and_wait('당연히 「사랑받지 못할까 봐」 두려운 것이지');
    era.println();
    await tachyon.print_and_wait([you.sex, '가 자신을 좋아하지 않으면 어쩌지']);
    await tachyon.print_and_wait([you.sex, '가 자신을 싫어하면 어쩌지']);
    await tachyon.print_and_wait([
      you.sex,
      '가 다른 누군가를 좋아하게 되면 어쩌지',
    ]);
    await tachyon.print_and_wait([
      '만약……',
      you.sex,
      '가 좋아하는 것이 「자신」이 아니라면 어쩌지',
    ]);
    era.println();
    await tachyon.print_and_wait([
      '달리기, 가능성……',
      you.sex,
      '가 보는 건 ',
      tachyon.get_colored_name(),
      '이라는 ',
      tachyon.uma_sex_title,
      '인가. 아니면 「그걸 가진 어느 ',
      tachyon.uma_sex_title,
      'A」인가?',
    ]);
    await tachyon.print_and_wait([
      '반대로 말하면, 그런 것들 외에 ',
      tachyon.get_colored_name(),
      '이라는 ',
      tachyon.uma_sex_title,
      '는 ',
      you.sex,
      '에게 어떤 매력이 있을까?',
    ]);
    era.println();
    await tachyon.print_and_wait([you.sex, '의 광기 어린 눈을 떠올린다.']);
    await tachyon.print_and_wait([
      you.sex,
      '가 매료된 것은 ',
      tachyon.get_colored_name(),
      '이 아니라 ',
      tachyon.get_colored_name(),
      '의 달리기',
    ]);
    await tachyon.print_and_wait([
      you.sex,
      '가 돕고 싶어 하는 것은 ',
      tachyon.get_colored_name(),
      '이 아니라 ',
      tachyon.get_colored_name(),
      '의 꿈',
    ]);
    era.println();
    await tachyon.say_and_wait([callname, '…………']);
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '……부속물에 불과하다.',
    ]);
    await tachyon.print_and_wait([
      '자신이 죽을 위기에 처하면 ',
      you.sex,
      '는 초조해할까',
    ]);
    await tachyon.print_and_wait([
      '자신이 더 이상 달릴 수 없게 되면 ',
      you.sex,
      '는 가슴 아파할까',
    ]);
    await tachyon.print_and_wait([
      '자신이 꿈을 버리면 ',
      you.sex,
      '는 아쉬워할까',
    ]);
    era.println();
    await tachyon.print_and_wait('……아니, 답은 모두 「그렇다」겠지');
    await tachyon.print_and_wait('하지만, 하지만');
    era.println();
    await tachyon.print_and_wait([
      '만약 ',
      tachyon.get_colored_name(),
      '이 두 다리도, 꿈도, 가능성도 잃는다면 ',
      you.sex,
      '는 여전히 ',
      tachyon.get_colored_name(),
      '을 사랑해 줄까?',
    ]);
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait(
      '대답이 돌아올 리 없는 질문이 베갯솜 사이로 사라진다.',
    );
    era.println();
    await tachyon.say_and_wait(callname);
    await tachyon.say_and_wait(callname);
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait('아아, 안 돼');
    await tachyon.print_and_wait(
      '입을 열 때마다 아직도 번개 같은 자극이 흐른다.',
    );
    await tachyon.print_and_wait(
      '부를 때마다 아직도 머릿속이 미칠 듯이 떨린다.',
    );
    await tachyon.print_and_wait('하지만');
    await tachyon.print_and_wait('물을 때마다 마음의 그림자가 한 겹 짙어지고');
    await tachyon.print_and_wait(
      '의심할 때마다 머릿속의 두려움이 조금씩 커진다.',
    );
    era.println();
    await tachyon.print_and_wait('두렵다');
    await tachyon.print_and_wait('불안하다');
    await tachyon.print_and_wait('괴롭다');
    era.println();
    await tachyon.print_and_wait('이것이 좋아한다는 건가?');
    await tachyon.print_and_wait('이것이 푹 빠진다는 건가?');
    await tachyon.print_and_wait('이것이, 연애라는 건가?');
    era.println();
    tachyon.print('만약 그렇다면……그렇다면');
    era.printButton('……무언가 해야 해(관계를 진전시킨다)', 1);
    era.printButton('……아니, 아직이야(아직 진전시키지 않는다)', 2);
    const ret = await era.input();
    if (ret === 1) {
      await tachyon.print_and_wait('무언가 해야 한다.');
      await tachyon.print_and_wait(
        '초조해하기만 해서는 아무것도 바뀌지 않는다.',
      );
      await tachyon.print_and_wait([
        '애초에 ',
        tachyon.get_colored_name(),
        '은 왕자님이 나타나기만을 기다리는 나약한 ',
        tachyon.uma_sex_title,
        '가 아니다',
      ]);
      await tachyon.print_and_wait(
        '기존의 변수들을 조합하고 실험으로 증명한다.',
      );
      await tachyon.print_and_wait('그것이 연구자로서 해야 할 일이다.');
      await tachyon.print_and_wait('생각해 보자');
      era.println();
      await tachyon.print_and_wait([
        '단 하나의 실험 목적.',
        tachyon.get_colored_name(),
        '이 ',
        callname,
        '의 마음속에서 차지하는 자리를 증명하는 것',
      ]);
      await tachyon.print_and_wait(
        '실험안은……있다. 하지만 위험도와 리스크는……',
      );
      era.println();
      await tachyon.say_and_wait('………………후후');
      era.println();
      await tachyon.print_and_wait('아직 생각할 필요가 있나?');
      await tachyon.print_and_wait([
        '그 사람이 곁에 없는 ',
        tachyon.get_colored_name(),
        '에게 존재할 의미가 있나?',
      ]);
      await tachyon.print_and_wait(
        '이 지경이 되고도 아직 자신을 속일 생각인가?',
      );
      era.println();
      await tachyon.print_and_wait('아아');
      await tachyon.print_and_wait([
        '자네가 나를 연구자에서 그저 한 ',
        tachyon.teen_sex_title,
        '로 바꿔 버렸군',
      ]);
      await tachyon.print_and_wait([
        '그러니 책임져 주게, 나의 친애하는 ',
        callname,
      ]);
      await tachyon.print_and_wait('나의 고백, 나의 「연애편지」');
      await tachyon.print_and_wait('부디 제대로 받아 주게');
    } else {
      await tachyon.print_and_wait('안 돼……');
      era.println();
      await tachyon.print_and_wait('만약 변해 버린다면');
      await tachyon.print_and_wait([you.sex, '를 더는 만날 수 없게 된다면']);
      await tachyon.print_and_wait([
        you.sex,
        '가 만든 도시락을 더는 먹을 수 없게 된다면',
      ]);
      await tachyon.print_and_wait([
        '그 광기 어린 눈을 더는 볼 수 없게 된다면',
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은 더 이상 살아갈 수 없다.',
      ]);
      era.println();
      await tachyon.print_and_wait('그런 건 절대 싫다.');
      await tachyon.print_and_wait('그런 건 절대 안 된다.');
      era.println();
      await tachyon.print_and_wait([
        callname,
        '과(와) ',
        tachyon.get_colored_name(),
        '의 일상을 위해',
      ]);
      await tachyon.print_and_wait('이 나날을 지키기 위해');
      await tachyon.print_and_wait('억누르자');
      await tachyon.print_and_wait('눌러 담자');
      await tachyon.print_and_wait('견디자');
      era.println();
      await tachyon.print_and_wait('가슴의 두근거림을 억누른다.');
      await tachyon.print_and_wait('안에서 솟는 열기를 눌러 담는다.');
      await tachyon.print_and_wait('마음속 불안을 견딘다.');
      era.println();
      await tachyon.print_and_wait('다만……');
      await tachyon.print_and_wait(
        '아무리 강한 용수철도 압력을 견디지 못하고 부서지는 날이 온다.',
      );
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '이라는 이 용수철은 언제까지 버틸 수 있을까',
      ]);
    }
    return ret;
  },
  74: (() => {
    const title = '마녀의 고백';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([
        callname,
        ', 오늘 약을 마시기 전에 이야기 하나 해 주겠네',
      ]);
      era.println();
      await era.printAndWait([
        '오늘도 ',
        you.get_colored_name(),
        '은(는) 평소처럼 ',
        tachyon.get_colored_name(),
        '의 실험실을 찾아왔다.',
        tachyon.sex,
        '는 평소처럼 도시락을 받고 오늘의 약을 ',
        you.get_colored_name(),
        '에게 건넨다.',
      ]);
      await era.printAndWait('물물교환 같기도, 거래 같기도 하다.');
      era.println();
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '이(가) 약을 마시려 하자 ',
        tachyon.get_colored_name(),
        '은 ',
        you.get_colored_name(),
        '의 손을 멈춰 세웠다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 의아하게 ',
        tachyon.sex,
        '를 바라보자 ',
        tachyon.sex,
        '는 진지한 눈으로 ',
        you.get_colored_name(),
        '을(를) 마주 바라본다.',
      ]);
      era.println();
      await era.printAndWait(
        '…………그 눈빛은 목숨을 걸 각오라도 담고 있는 듯했다.',
      );
      era.println();
      await tachyon.say_and_wait([callname, ', 인어공주라는 동화를 알고 있나']);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '는 ',
        you.get_colored_name(),
        '의 대답을 기다리지 않고, 애초에 답하게 할 생각도 없었던 듯 말을 이어 갔다.',
      ]);
      await era.printAndWait(
        '……하지만 그것은 안데르센 동화의 인어공주와는 다른 이야기였다.',
      );
      era.println();
      await tachyon.say_and_wait(
        '옛날 옛적에 바닷속에 사는 인어공주가 있었다네. 공주는 어릴 때부터 두 다리를 갖고 싶어 했고, 땅 위에서 마음껏 달리기를 바랐지',
      );
      await tachyon.say_and_wait(
        '하지만 바다에 사는 공주에게는 허리 아래로 물고기 꼬리만 있었어. 달리기는커녕 서 있을 수도 없었네',
      );
      era.println();
      await era.printAndWait('그녀는 자조하듯 자신의 두 다리를 바라본다……');
      await era.printAndWait(
        '유리처럼 약한 두 다리. 서 있을 수 있고 달릴 수 있어도, ',
      );
      await era.printAndWait(
        '달리면 망가지는 다리가 물고기 꼬리보다 얼마나 나을까?',
      );
      era.println();
      await tachyon.say_and_wait(
        '공주는 마녀를 만나지 않았네. 믿을 수 없는 마녀에게 다리를 맡길 생각도 없었지.',
      );
      await tachyon.say_and_wait(
        '원한 것은 진정한 자신의 두 다리였어. 그래서 공주는 직접 마술을 배우기 시작했네',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 양손을 휘젓자 어디선가 시험관 두 개가 나타났다. 마술 공연 같기도, 어쩌면……진짜 마법 같기도 했다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '공주는 믿었네. 계속 노력하면 언젠가 자신의 두 다리를 얻을 수 있을 거라고.',
      );
      await tachyon.say_and_wait(
        '그때는 마음껏 달릴 수 있을 거라고. 더는 아무것도 두려워하지 않아도 될 거라고. 어느 순간까지는 그랬네……',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 말투가 문득 멀어지며 꿈속으로 가라앉는 듯해진다.',
      ]);
      era.println();
      await tachyon.say_and_wait('공주는 한 사람을 만났어');
      await tachyon.say_and_wait(
        '그 사람은 왕자가 아니었네. 그저 잠수부였지. 바다에 빠져 구조를 기다리는 왕자가 아니라',
      );
      await tachyon.say_and_wait(
        '항해 도중 수면에서 데이터를 수집하던 공주를 우연히 보고, 그만 세이렌에게 홀려',
      );
      await tachyon.say_and_wait(
        '바다에 뛰어들어 스스로 실험을 도운 평범한 인간. 가령——모르모트 군이라고 부르도록 하지',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 그 대목에서 키득키득 웃었다. 무언가 우스운 일이 떠오른 듯했다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '처음에 공주는 모르모트 군에게 아무런 감정도 없었네. 재미있는 실험 대상이 생겼다는 것뿐이었지.',
      );
      await tachyon.say_and_wait(
        '그를 대상으로 여러 실험을 했어. 증식, 발광, 분신, 성전환………후후',
      );
      await tachyon.say_and_wait(
        '하지만 순진한 공주는 변한 것이 모르모트 군뿐이라고 생각했네.',
      );
      await tachyon.say_and_wait(
        '가장 중요한 기본 원리를 잊고 있었던 거야————반응은 상호적이라는 것을.',
      );
      await tachyon.say_and_wait('화학에서도, 인간관계에서도 마찬가지라네');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 한숨을 내쉬었다. 눈에는 끝없는 미련과 그리움이 담겨 있다. 아직 꿈에 빠져 있는 듯하다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '모르모트 군은 공주를 데리고 실험이라는 명목으로 여러 가지를 보여 주었네.',
      );
      await tachyon.say_and_wait(
        '일각고래와 함께 사냥하며 약육강식을 배우고, 흰긴수염고래가 죽어 바다 밑으로 가라앉는 것을 보며 생로병사의 의미를 되새기고, ',
      );
      await tachyon.say_and_wait(
        '돌고래의 구애와 짝짓기를 보고는 둘 다 얼굴을 붉혔지',
      );
      await tachyon.say_and_wait(
        '차츰 공주는 깨달았네. 실험 밖의 세상도 이토록 아름답다는 것을',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '는 조곤조곤 말을 이어가며 아름답고도 장엄한 광경들을 묘사했다.',
      ]);
      await era.printAndWait(
        '말투는 여전히 부드럽지만 가느다란 실 같은 미련이 묻어 있다———마치 아름다운 꿈에서 깨려는 듯하다.',
      );
      era.println();
      await tachyon.say_and_wait('그러다 마침내 어느 날');
      await tachyon.say_and_wait(
        '공주는 깨달았네. 더는 실험에 집중할 수 없다는 것을',
      );
      await tachyon.say_and_wait(
        '마음을 가라앉히고 연구하려 할 때마다 연구 성과보다도, ',
      );
      await tachyon.say_and_wait(
        '새로운 연구 이야기를 들었을 때 모르모트 군이 지을 표정을 더 기대하게 되었네.',
      );
      await tachyon.say_and_wait(
        '수면에서 데이터를 수집하려 할 때마다 수면 위의 인간들보다도, ',
      );
      await tachyon.say_and_wait(
        '바닷속에서 기다리는 모르모트 군을 만나고 싶어졌지.',
      );
      await tachyon.say_and_wait(
        '새로운 약을 만들려 할 때마다 약의 효과보다도, ',
      );
      await tachyon.say_and_wait(
        '모르모트 군이 약을 마신 뒤 보일 반응이 더 기대되었네',
      );
      era.println();
      await era.printAndWait([
        '그제야 ',
        tachyon.get_colored_name(),
        '의 표정이 또렷하게 돌아온다. 아름다운 꿈에서 마침내 깨어난 것처럼',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '공주는 두려워하기 시작했네. 언젠가 모르모트 군과 보내는 시간에 완전히 빠져 버리는 건 아닐까 하고.',
      );
      await tachyon.say_and_wait(
        '언젠가……두 다리를 얻겠다는 목표마저 공허한 말 한마디가 되어 버리는 건 아닐까 하고',
      );
      await tachyon.say_and_wait(
        '그렇게 된 공주는 평범한 과학자는 될 수 있겠지. 하지만 더는 연구자로 있을 수 없어……',
      );
      era.println();
      await tachyon.say_and_wait('그때 마녀가 나타났네');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 의자에서 일어나 ',
        you.get_colored_name(),
        '에게 다가간다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 손이 ',
        you.get_colored_name(),
        '의 손을 덮었다……하지만 꼭 쥐지는 않았다.',
        tachyon.sex,
        '가 쓰다듬고 있는 것은 ',
        you.get_colored_name(),
        '의 손에 든 시험관이다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '원래 처음부터 끝까지 마녀는 공주의 마음속에 있었네. 마녀는 공주 자신이었던 거야!',
      );
      await tachyon.say_and_wait(
        '마음속 이성적인 면인 마녀는 공주에게 말했네. 지금 모든 일의 근원은 저 모르모트야. 그가 없어지면 모든 것이 원래대로 돌아갈 거라고',
      );
      await tachyon.say_and_wait(
        '만약 그 모르모트가 떠난다면……아니, 떠나는 것만으로는 부족해. 여운을 남겨서는 안 돼……',
      );
      await tachyon.say_and_wait(
        '그 모르모트를 『지워 버리는』 거야. 그러면 공주는 원래대로, 실험에 집중하던 공주로 돌아갈 수 있어',
      );
      era.println();
      await tachyon.say_and_wait(
        '…………그래, 그저 『원래대로 돌아갈』 뿐이야. 아무도 보장할 수 없네.',
      );
      await tachyon.say_and_wait(
        '원래대로 돌아간 공주가 실험으로 두 다리를 얻을 수 있을지는. 알 수 있는 건 『그럴 가능성이 있다』는 것뿐이지',
      );
      await tachyon.say_and_wait(
        '반대로 모르모트 군과 계속 함께 있다면……그 가능성은',
      );
      await tachyon.say_and_wait(
        '다시는 되찾을 수 없어. 마녀는 그렇게 말하고 공주의 손으로 어떤 약을 만들게 했네',
      );
      await tachyon.say_and_wait(
        '마녀는 공주에게 말했어. 평소처럼 모르모트에게 이 약을 마시게 하면',
      );
      await tachyon.say_and_wait(
        '모든 것이 끝나고 원래 생활로 돌아갈 수 있다고',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 거기까지 말하고 ',
        you.get_colored_name(),
        '의 손에서 다시 약을 빼 들었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('하지만……');
      era.println();
      await era.printAndWait('약을 쥔 손이 문득 조금 떨린다.');
      era.println();
      await tachyon.say_and_wait(
        '겁 많은 공주는 모든 것을 모르모트 군에게 털어놓았네',
      );
      await tachyon.say_and_wait(
        '……사랑해서도, 불쌍해서도, 차마 그럴 수 없어서도 아니었어',
      );
      await tachyon.say_and_wait('겁이 많고, 나약하고, 용기가 없어서였지');
      await tachyon.say_and_wait(
        '공주가 선량하다고는 생각하지 말게. 어차피 마녀는 공주의 내면 중 한 모습이야. 본질은 그 냉혹하고 무정한 마녀라네',
      );
      await tachyon.say_and_wait(
        '그렇게 말한 공주의 목적은…………그저 책임지고 싶지 않았던 것뿐이야',
      );
      era.println();
      await era.printAndWait([
        '그러고는 ',
        tachyon.get_colored_name(),
        '은 다시 손에 든 약을 들어 올렸다.',
      ]);
      era.println();
      await tachyon.say_and_wait('사랑하는 이를 죽인 죄를 짊어지고 싶지 않다.');
      await tachyon.say_and_wait(
        '연모하는 이를 제 손으로 해친 책임을 지고 싶지 않다.',
      );
      await tachyon.say_and_wait(
        '지워 버리려는 모르모트가 공주를 위해 스스로 희생해 주기를 바라는 이기심',
      );
      era.println();
      await era.printAndWait('약이 다시 내밀어진다.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 고개를 숙인 ',
        tachyon.get_colored_name(),
        '의 얼굴에 지금 어떤 표정이 떠올랐는지 볼 수 없다.',
      ]);
      await era.printAndWait('울고 있을까? 사랑하는 이의 죽음 때문에?');
      await era.printAndWait(
        '비웃고 있을까? 자신을 묶어 두던 사슬이 풀리려 하니까?',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 말없이 상대가 이야기를 마치기를 기다린다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '그러니…… ',
        callname,
        ', 이 이기적인 연구자를 위해 선택을 내려주겠나.',
      ]);
      era.println();
      await era.printAndWait([
        '지금 ',
        tachyon.sex,
        '가 내뱉은 말은 분명 지독하게 이기적인 말이었다.',
      ]);
      await era.printAndWait('상대가 자신을 위해 희생해 주기를 바란다.');
      await era.printAndWait(
        '그것도 「가능성」을 위해서일 뿐, 확실한 것조차 아니다.',
      );
      await era.printAndWait(
        '다시 말해 「나를 위해 죽어 줘. 하지만 죽어도 성공할지는 몰라」——정말로 무책임한 말이다.',
      );
      era.println();
      era.print(['그러니 ', you.get_colored_name(), '은(는) 선택한다…………']);
      era.printButton('마시지 않는다 (관계 진전)', 1);
      era.printButton('마신다 (관계 유지)', 2);
      era.printButton('타키온에게 약을 마시게 한다 [!]', 3);
      era.print(
        [
          '【경고: 이 선택지를 선택할 경우, ',
          tachyon.get_colored_name(),
          '과의 관계는 돌이킬 수 없게 됩니다! 트레센 학원은 담당을 저버리는 행위를 용납하지 않습니다!】',
        ],
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
  '74-accept': (() => {
    const title = '초광속의 공주';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '의 손에서 약을 받아 든다.',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '……']);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '는 고개를 들었다. 눈에는 걱정이 담겨 있다.',
      ]);
      await era.printAndWait([
        '자신이 약을 마실까 봐 걱정하는 걸까, 아니면……마시지 않을까 봐?',
      ]);
      await era.printAndWait([
        '솔직히 ',
        you.get_colored_name(),
        '자신도 다음 행동이 옳은지 단언할 수는 없다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '은(는) 장담할 수 있다. 지금부터 하는 모든 행동은 진심에서 나온 것이라고',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 손에 든 약을……옆의 폐약품 처리통에 쏟아 버렸다.',
      ]);
      era.println();
      await tachyon.say_and_wait('………………아');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 시험관을 기울이는 동안 ',
        tachyon.get_colored_name(),
        '은 아무 소리도 내지 않았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 약을 전부 쏟고, 한 세기처럼 긴 시간이 흐른 뒤에야 ',
        tachyon.sex,
        '는 작게 「아」 하는 소리를 흘렸다. 이제야 반응해야 했다는 것을 떠올린 듯했다.',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '……이게 무슨 뜻인지 알고 있나?']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 시험관을 거꾸로 세워 약이 한 방울도 남지 않았음을 확인한다.',
      ]);
      await era.printAndWait([
        '그제야 ',
        tachyon.get_colored_name(),
        '은 겨우 말을 정리해 엮어 낸 문장을 내뱉었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '내 꿈……내가 추구하는 가능성. 자네의 그 선택은 결국',
      );
      await tachyon.say_and_wait([
        '나, ',
        tachyon.get_colored_name(),
        '에게 그런 것들을 완전히 버리라는 뜻이야. 철저히 버리고, 그저 다른 사춘기의 ',
        tachyon.teen_sex_title,
        '와 아무런 다를 바 없는……',
      ]);
      await tachyon.say_and_wait([
        '사랑에 빠진 평범한 ',
        tachyon.child_sex_title,
        '가 되라는 거지. 다른 가능성은 버리고, 자네와 함께할 가능성을 선택하라는……',
      ]);
      era.println();
      await era.printAndWait([tachyon.sex, '는 말을 더듬으며 빠르게 말했다.']);
      await era.printAndWait(
        '지금이라도 생각을 바꾸라고 자신을 설득하며 이 결정이 얼마나 어리석은지 알려 주려는 듯했고, ',
      );
      await era.printAndWait([
        tachyon.sex,
        '를 위해 희생해 주기를 바라면서도 악역은 되고 싶지 않아 이토록 이기적이고 뻔뻔한 충고를 늘어놓는 듯했다.',
      ]);
      era.println();
      await era.printAndWait([
        '하지만 ',
        tachyon.sex,
        '와 오랫동안 함께해 온 ',
        you.get_colored_name(),
        '에게는 말 뒤에 숨은 진심이 보인다.',
      ]);
      await era.printAndWait(
        '말을 더듬는 것은 두렵기 때문이다. 모두 자신의 착각일까 봐',
      );
      await era.printAndWait(
        '말이 빠른 것은 후회한다는 말을 듣고 싶지 않기 때문이다. 아이가 일부러 불분명하게 말해서 상대를 끄덕이게 하는 것과 같다.',
      );
      await era.printAndWait(
        '계약서에 서명하기 전에 내용을 몇 번이고 반복하며 상대의 변심을 막으려는 보험 영업사원처럼',
      );
      await era.printAndWait(
        '그렇게 판단한 근거는 거절하는 말을 하면서도 계속 흔들리는 꼬리와',
      );
      await era.printAndWait(
        '곧게 선 귀, 그리고 본인은 들키지 않았다고 생각하겠지만 얼굴에 분명히 드러난——안도하는 표정이었다.',
      );
      era.println();
      await tachyon.say_and_wait([
        '알고 있나, ',
        callname,
        '……자네는 계속 가능성 너머를 보고 싶다고 했잖나? 이렇게 되어 버리면 정말로……',
      ]);
      era.println();
      await era.printAndWait('이제 됐다');
      await era.printAndWait([
        '이대로 ',
        tachyon.sex,
        '가 언제까지 허세를 부릴 수 있을지 지켜보는 것도 재미있겠지만',
      ]);
      await era.printAndWait([
        '그랬다가는 나중에 부끄러움에 화가 난 ',
        tachyon.sex,
        '에게 보복당할 것이다.',
      ]);
      await era.printAndWait([
        '그래서 ',
        you.get_colored_name(),
        '은(는) 생각한다. 어떻게 해야 ',
        you.get_colored_name(),
        '의 가장 깊은 각오를 보여 줄 수 있을까',
      ]);
      era.print([you.get_colored_name(), '은(는) 결심한다……']);
      era.printButton(`${tachyon.sex}를 끌어안는다`, 1);
      era.printButton(`${tachyon.sex}에게 입을 맞춘다`, 2);
      era.printButton(`${tachyon.sex}의 귀를 가볍게 문다`, 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait([
            '갑작스러운 일을 겪으면 두 가지 일에 동시에 신경 쓰기 어렵다.',
            tachyon.uma_sex_title,
            '도 마찬가지다.',
          ]);
          await era.printAndWait([
            '그러니 당연히 ',
            you.get_colored_name(),
            '의 갑작스러운 포옹에 멍해져 익숙한 남자의 향기에 잠긴 채',
          ]);
          await era.printAndWait([
            '그 온기를 느끼는 ',
            tachyon.get_colored_name(),
            '은 ',
            tachyon.sex,
            '의 장황한 말을 더 이어 갈 수 없게 되었다.',
          ]);
          break;
        case 2:
          await era.printAndWait(
            '예부터 전해 내려오는 애정 표현은, 입을 막으면서 마음까지 전할 수 있는 가장 강력한 기술인지도 모른다.',
          );
          await era.printAndWait([
            tachyon.sex,
            '의 입술은 ',
            tachyon.sex,
            ' 자신과 닮아, 겉보기에는 굳게 닫혀 있지만 닿는 순간 허물어지며 부드러운 속을 드러낸다.',
          ]);
          await era.printAndWait(
            '바위처럼 견고하던 성채도 혀끝이 더듬자 맥없이 무너져, 상대가 깊숙이 들어오는 것을 허락할 수밖에 없다.',
          );
          await era.printAndWait(
            '굳건해 보이던 혀도 자신의 두툼한 혀에 닿는 순간 작은 새처럼 기대어, 이끄는 대로 몸을 맡긴다.',
          );
          break;
        case 3:
          await era.printAndWait(
            '그 대신 새어 나온 것은 억누르지 못한 교성이었다.',
          );
          await era.printAndWait([
            '잘 알려져 있듯, 많은 ',
            tachyon.uma_sex_title,
            '에게만 있는 인간과는 다른 기관은 ',
            tachyon.couple_title,
            '의 가장 민감한 부위다.',
          ]);
          await era.printAndWait([
            '그러니 ',
            tachyon.get_colored_name(),
            '이 상상을 자극하는 교성을 흘렸다고 누가 탓할 수 있겠는가',
          ]);
          await era.printAndWait([
            '오히려 ',
            you.get_colored_name(),
            '에게 안겨 귀를 만져지면서도 여전히 서 있고, ',
            you.get_colored_name(),
            '의 품에 무너지지 않은 ',
            tachyon.get_colored_name(),
            '이 대단한 것이다.',
          ]);
          era.println();
          await tachyon.say_and_wait([callname, '……안 돼……잠깐……간지럽잖나……']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '의 거절이라기보다는 받아들이는 듯한 목소리를 듣고, ',
            you.get_colored_name(),
            '은(는) 손길을 바꾸어 더 거친 힘으로 주무르고 문지르며 ',
            tachyon.uma_sex_title,
            '의 탄력 있고 민감한 귓바퀴 끝을 만지작거린다.',
          ]);
          era.println();
          await tachyon.say_and_wait('힉……기다리게……안 된다네……');
          era.println();
          await era.printAndWait([
            '꼬박 30초를 버틴 끝에 ',
            tachyon.get_colored_name(),
            '은 마침내 무너져 ',
            you.get_colored_name(),
            '의 품으로 쓰러졌다.',
          ]);
      }
      await era.printAndWait([
        tachyon.sex,
        '이 완전히 저항을 멈춘 뒤에야 ',
        you.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '을 놓아준다.',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '……']);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '은 아직 방금 겪은 일에 잠겨 정신을 차리지 못하고 있다.',
      ]);
      await era.printAndWait([
        '그 순간 ',
        you.get_colored_name(),
        '은(는) 일생에 한 번 있을 진심을 털어놓기 시작한다.',
      ]);
      era.printButton('「사랑해, 아그네스 타키온」', 1);
      await era.input();
      await tachyon.say_and_wait('！！！！？？？？');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '의 말을 듣는 순간 ',
        tachyon.sex,
        '의 꼬리가 곤두섰다. 털을 바짝 세운 고양이 같았다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname.substring(0, 1).repeat(5),
        callname,
        '!? 무슨 말을 하는 건가!?',
      ]);
      era.println();
      await era.printAndWait([
        '이런, ',
        tachyon.get_colored_name(),
        '의 귀가 별로 좋지 않은 모양이다.',
      ]);
      await era.printAndWait('그렇다면 몇 번 더 말해 주자');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 처음 ',
        tachyon.get_colored_name(),
        '을 보았을 때를 떠올린다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 달리기, ',
        tachyon.sex,
        '의 위태로움',
      ]);
      await era.printAndWait([
        '둘 다 ',
        you.get_colored_name(),
        '을(를) 광기에 빠뜨리고 ',
        tachyon.sex,
        '에게 매료되게 했다.',
      ]);
      await era.printAndWait(['그래, 「', tachyon.sex, '」다']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '의 데뷔전을 떠올린다.',
      ]);
      await era.printAndWait(
        '빛처럼, 당연하다는 듯 레이스에 나서고, 당연하다는 듯 모든 것을 뛰어넘고, 당연하다는 듯 승리한다.',
      );
      await era.printAndWait([
        '「레이스는 실험 결과의 검증에 불과하다」고 말하며 차가운 얼굴과 냉정한 태도로 레이스에 임한다 ',
        tachyon.sex,
      ]);
      await era.printAndWait(['그래, 「', tachyon.sex, '」다']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 처음 ',
        tachyon.sex,
        '에게 도시락을 만들어 주었을 때를 떠올린다.',
      ]);
      await era.printAndWait(
        '자신의 가능성을 보고 싶다며, 그를 위해 기꺼이 스스로 실험체가 되었다.',
      );
      await era.printAndWait([
        '상상을 초월하고 한계를 깨뜨릴 가능성을 기대하며 눈에 광기를 띠었다 ',
        tachyon.sex,
      ]);
      era.println();
      await era.printAndWait(['그래, 「', tachyon.sex, '」다']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 밤새 잠도 자지 않고 실험하는 ',
        tachyon.sex,
        '를 떠올린다.',
      ]);
      await era.printAndWait(
        '연구를 위해서라면 몸을 바치고, 꿈을 위해서라면 건강도 버릴 수 있다.',
      );
      await era.printAndWait([
        '몸은 초라한데 눈만은 꿈에 대한 동경으로 빛난다 ',
        tachyon.sex,
      ]);
      await era.printAndWait(['그래, 「', tachyon.sex, '」다']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 처음 함께 외출했을 때의 ',
        tachyon.sex,
        '를 떠올린다.',
      ]);
      await era.printAndWait([
        '색이 바뀌는 양배추즙 소동과 ',
        tachyon.sex,
        '의 토라진 모습',
      ]);
      await era.printAndWait([
        '그런 일로 고집을 부리고, 인형 뽑기로 뽑은 인형에 기뻐하던, 그런 평범한 ',
        tachyon.sex,
      ]);
      await era.printAndWait(['그래, 「', tachyon.sex, '」다']);
      era.println();
      await era.printAndWait([
        '그리고 마지막으로…… 눈앞, ',
        you.get_colored_name(),
        '의 앞에 있는 ',
        tachyon.sex,
      ]);
      await era.printAndWait([
        '긴장해서 시선을 이리저리 돌리며 ',
        you.get_colored_name(),
        '이(가) 다시 입을 열기를 기다리는 ',
        tachyon.sex,
      ]);
      await era.printAndWait([
        '원래 감정이 옅던 두 눈에 지금은 행복과 애정이 가득한 ',
        tachyon.sex,
      ]);
      await era.printAndWait([
        '뺨을 붉힌 채 누가 봐도……완전히 사랑에 빠진, 그저 한 명의 ',
        tachyon.teen_sex_title,
        '인 ',
        tachyon.sex,
      ]);
      era.printButton(
        '「사랑해, 아그네스 타키온. 내가 사랑하는 건 『너』야. 달리기도, 꿈도, 가능성도 아니야」',
        1,
      );
      await era.input();
      await era.printAndWait('틀림없다');
      await era.printAndWait(['모든 것의 주체는 ', tachyon.sex, '이다']);
      await era.printAndWait([
        '처음의 자신은 분명 ',
        tachyon.sex,
        '의 달리기와 광기에 이끌렸을 뿐일지도 모른다.',
      ]);
      await era.printAndWait([
        '하지만 지금은 ',
        tachyon.get_colored_name(),
        '이라는 ',
        tachyon.uma_sex_title,
        '가 ',
        you.get_colored_name(),
        '의 마음속에서 차지하는 자리는 그런 것들을 넘어섰다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 생각도 진작 바뀌어 있었다.',
      ]);
      await era.printAndWait([
        '「',
        tachyon.get_colored_name(),
        '의 꿈을 이루어 주기 위해 불평 없이 일한다」가 아니다.',
      ]);
      await era.printAndWait([
        '「',
        tachyon.get_colored_name(),
        '을 위해 자신의 모든 것을 바칠 수 있다」인 것이다.',
      ]);
      await era.printAndWait('그러니……');
      era.printButton(
        '「언젠가 네가 달리지 않게 되어도, 가능성을 좇지 않게 되어도, 나는 지금처럼 널 사랑할 거야」',
        1,
      );
      await era.input();
      await era.printAndWait('결국 처음부터 끝까지 이렇게 간단한 문제였다.');
      await era.printAndWait([
        '「어머니와 아내가 물에 빠지면 누구부터 구할 거야」 같은 문제에서 주인공이 「',
        tachyon.get_colored_name(),
        '」과 「',
        tachyon.get_colored_name(),
        '의 재능」으로 바뀌었을 뿐이다.',
      ]);
      await era.printAndWait([
        '…………이렇게 간단한 문제를 이토록 복잡하게 만드는 것도 ',
        tachyon.sex,
        '의 재능일지 모른다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '의 복잡한 성격에 쓴웃음을 지었다.',
      ]);
      await era.printAndWait('하지만 이제 안심할 수 있겠지');
      era.println();
      await tachyon.say_and_wait([callname, '……']);
      era.println();
      await era.printAndWait([
        '그렇게 생각한 ',
        you.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '의 얼굴에서 기쁨의 눈물과 활짝 피어난 웃음을 보았다.',
      ]);
      await era.printAndWait([
        '큰비가 지나간 뒤의 코스모스처럼 선명하고 아름다웠다.',
      ]);
      era.drawLine();
      await tachyon.say_and_wait([callname, '～～오늘 약이라네']);
      era.println();
      await era.printAndWait([
        '다음 날, ',
        you.get_colored_name(),
        '은(는) 어제까지만 해도 더는 연구할 수 없다던 어느 ',
        tachyon.uma_sex_title,
        '를 바라본다.',
      ]);
      await era.printAndWait(
        '평소 약보다 더 위험해 보이는 형광색 약을 들고, 통통 뛰듯 트레이너실로 들어왔다.',
      );
      era.println();
      await tachyon.say_and_wait(
        '어서, 어서. 오늘 약은 지금까지의 발광 계열을 집대성한 것이라네. 마시면 이만 사천 가지 RGB 색을 낼 수 있어～～',
      );
      await tachyon.say_and_wait(
        '참, 주말에는 현장 실험을 나갈 테니 원래 일정은 전부 비워 두게. 알겠나?',
      );
      await tachyon.say_and_wait(
        '그리고 오늘 도시락은 삼십 분 일찍 가져다주게. 중요한 실험이 있거든',
      );
      await tachyon.say_and_wait(
        '그러니 기억해 두게……아, 되도록 국물 있는 건 피하고. 실험에 지장이 있으니',
      );
      era.println();
      await era.printAndWait(
        '들어오자마자 들뜬 연구자는 실험과 연구 이야기를 멈추지 않는다.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '조차 그 광경에 잠시 멍해졌다.',
      ]);
      await era.printAndWait(
        '물론 무리한 요구 때문은 아니다. 평소 요구가 훨씬 더 무리하다. 그게 아니라……',
      );
      era.printButton('「연구할 수 없다고 하지 않았어?」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 기억한다. 어제 눈물을 글썽이며 더는 연구할 수 없다, 가능성을 찾을 수 없다고 하던 ',
        tachyon.get_colored_name(),
        '의 가엾은 모습을',
      ]);
      await era.printAndWait([
        '지금의 ',
        tachyon.sex,
        '에게서는 어제의 낙담과 무너진 모습이 전혀 보이지 않는다.',
      ]);
      era.println();
      await tachyon.say_and_wait(['……사실이라네, ', callname, ' ']);
      await tachyon.say_and_wait(
        '지금 나는 더 이상 내 가능성 연구에 집중할 수 없어.',
      );
      await tachyon.say_and_wait('머릿속은 온종일 자네 생각으로 가득하거든……');
      await tachyon.say_and_wait(
        '지금 이 순간도 마음속에서는 자네가 기뻐하는 얼굴, 화난 얼굴, 부끄러워하는 얼굴, 긴장하는 얼굴을……',
      );
      await tachyon.say_and_wait(
        '나를 이렇게 만들었으니 책임져 줘야 하지 않겠나',
      );
      era.printButton('「미……미안?」', 1);
      await era.input();
      await era.printAndWait('이게 내 탓인가?');
      await era.printAndWait(
        '게다가 이렇게 곧장 애정을 들이밀면 역시 부끄럽다……',
      );
      await era.printAndWait('아니, 그게 아까 이야기와 무슨 상관이야');
      await era.printAndWait(
        '지금도 평소처럼 연구하고 있는 이유에 대한 설명은 아니잖아?',
      );
      era.println();
      await tachyon.say_and_wait(
        '그러니……더는 나만 생각하고 있을 수 없다는 거야',
      );
      await tachyon.say_and_wait(
        '지금 떠오르는 모든 가능성에는……자네가 곁에 있어야 해. 앞으로 생각할 수 있는 것도 아마 『자네와』 함께할 가능성뿐이겠지',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 갑자기 ',
        tachyon.sex,
        '의 말을 이해할 수 없어 가만히 ',
        tachyon.get_colored_name(),
        '을 바라본다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '도 ',
        you.get_colored_name(),
        '의 시선 아래에서 점점 안절부절못하기 시작한다.',
      ]);
      await era.printAndWait(
        '그러더니 댐이 무너지듯, 아무렇지 않은 얼굴이 연인의 시선이라는 마지막 한 번의 자극으로',
      );
      await era.printAndWait(
        '순식간에 온 얼굴을 붉힌 수줍은 표정으로 바뀌었다.',
      );
      era.println();
      await tachyon.say_and_wait(
        '그러니까……그게……주말 실험……시간은 낼 수 있겠지……',
      );
      await tachyon.say_and_wait(
        '일반적으로 말하는, 그, 그러니까 데이트라는 행위가 우리 둘에게 얼마나 적합한지 검증하려는 것으로…………',
      );
      await tachyon.say_and_wait(
        '아무튼! 토요일 아침 아홉 시, 지각은 용납하지 않겠네! 그리고 내 아침밥도 가져오게! 이상이야!',
      );
      await tachyon.say_and_wait(
        '그리고 오늘 점심 도시락은……가능하면……한입에 먹기 편한 걸로……',
      );
      await tachyon.say_and_wait(
        '그……연인 관계에서 『아앙』 하고 먹여 주는 행위에 따른 심박수 측정을……해 봐도 되겠나?',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '가 부끄러움을 무릅쓰고 말을 끝내는 모습을 보고 ',
        you.get_colored_name(),
        '은(는) 저도 모르게 웃었다.',
      ]);
      await era.printAndWait('이럴 때는 어떻게 대답하면 좋을까');
      await era.printAndWait(
        '이 제멋대로이고 자유분방한, 가장 귀여운 미치광이 과학자에게',
      );
      await era.printAndWait([
        '이 사랑스럽고 소중한, 가장 사랑하는, 사랑에 빠진 ',
        tachyon.teen_sex_title,
        '에게',
      ]);
      era.println();
      await you.say_and_wait([
        '물론입니다……나의 ',
        tachyon.sex_code - 1 ? '공주' : '왕자',
        '님',
      ]);
      return [];
    };
    f.title = title;
    return f;
  })(),
  '74-reject-1': (() => {
    const title = '톱니바퀴가 돌기 시작하다';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 처음 ',
        tachyon.get_colored_name(),
        '이라는 ',
        tachyon.uma_sex_title,
        '를 만났을 때의 광경을 떠올린다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 달리기, ',
        tachyon.sex,
        '의 위태로움, ',
        tachyon.sex,
        '의 가능성',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '에게 두 눈을 불태운 ',
        you.get_colored_name(),
        '은(는) 그때 이미 ',
        tachyon.sex,
        '를 위해 모든 것을 바치겠다고 맹세하지 않았던가',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 별말 없이 곧바로 ',
        tachyon.sex,
        '의 손에서 시험관을 받아 든다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '는 전에 자신에게 광기 어린 눈이 있다고 했다.',
      ]);
      await era.printAndWait([
        '그 광기의 근원은 분명 ',
        tachyon.sex,
        '의 빛이 반사된 것이리라',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 광기는 ',
        tachyon.sex,
        '의 꿈에서 비롯되었고, ',
        you.get_colored_name(),
        '의 광기는 ',
        tachyon.sex,
        '에게서 비롯되었다.',
      ]);
      await era.printAndWait([
        '그렇다면 ',
        tachyon.sex,
        '의 꿈을 위해, ',
        tachyon.sex,
        '가 그 빛을 계속 발할 수 있도록 자신을 희생하는 게 뭐가 나쁜가?',
      ]);
      era.println();
      await era.printAndWait([
        '지금의 ',
        you.get_colored_name(),
        '은(는) 독실한 신도 같다. 실제로도 그렇다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 마음속 신이자 유일한 빛이, 지금은 ',
        you.get_colored_name(),
        '때문에 어둠 속으로 추락하고 있다.',
      ]);
      await era.printAndWait('그런 일은 절대 용납할 수 없다.');
      await era.printAndWait('다행히 아직 구할 방법이 있다.');
      era.println();
      await era.printAndWait([
        '자신이 사라지면 ',
        tachyon.sex,
        '는 다시 ',
        you.get_colored_name(),
        '이(가) 보고 싶어 하는 빛을 낼 수 있다.',
      ]);
      era.printButton('「고마워……가능성 너머에서 다시 만나자」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '을 믿는다. 맹신이라고 해도 좋다.',
      ]);
      await era.printAndWait([
        '하지만 동시에 ',
        you.get_colored_name(),
        '의 마음속에는 한 줄기 두려움도 남아 있다.',
      ]);
      await era.printAndWait([
        '만약 자신이 죽은 뒤 ',
        tachyon.sex,
        '가 자신이 생각한 만큼 강하지 않다면 어쩌지',
      ]);
      await era.printAndWait([
        '만약 ',
        tachyon.sex,
        '가 ',
        tachyon.sex,
        '자신이 생각한 만큼 강하지 않다면 어쩌지',
      ]);
      await era.printAndWait([
        '그래서 이것은 ',
        you.get_colored_name(),
        '이(가) 만일을 대비해 채워 둔 족쇄다.',
      ]);
      era.println();
      await era.printAndWait([
        '자신이 ',
        tachyon.sex,
        '에게 그토록 중요하다고는 생각하지 않는다. 하지만 만에 하나, 만약 ',
        tachyon.sex,
        '가 정말 다시 일어서지 못한다면……이 족쇄, 혹은 이 저주가',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '가 한때 사랑했던 이가 남긴 저주가 ',
        tachyon.sex,
        '를 앞으로 밀어 ',
        tachyon.sex,
        '의 이상에 닿을 때까지 나아가게 할 것이다.',
      ]);
      await era.printAndWait([
        '만약 전부 자만이고 자신이 ',
        tachyon.sex,
        '의 마음속에서 그만한 무게를 차지하지 않았다면',
      ]);
      await era.printAndWait([
        '그것이 가장 좋다.',
        tachyon.sex,
        '는 그저 모르모트 한 마리 때문에 걸음을 멈추지 않고, 굳게 뜻을 지키며 앞으로 나아가겠지',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 그렇게 바라며 시험관을 들어 약을 마셨고, 그러자……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 놀라움과 기쁨에 눈을 크게 뜬다.',
        tachyon.sex,
        '가 고개를 들고 평소의 미소를 짓고 있다.',
      ]);
      await era.printAndWait([
        '이러면 됐다.',
        tachyon.sex,
        '는 분명, 분명 자신의 길을 지켜 나갈 것이다…………',
      ]);
      era.setToBottom();
      await era.printAndWait('다음 순간');
      era.setToBottom();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 느낀다. 무언가 ',
        you.get_colored_name(),
        '의 입술에 닿았다.',
      ]);
      await era.printAndWait('부드럽고 따뜻하고 싱그러운 두 장의 장미 꽃잎');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 ',
        you.get_colored_name(),
        '의 입술에 입을 맞추었다.',
      ]);
      era.println();
      await era.printAndWait([
        '그뿐만이 아니다. ',
        tachyon.sex,
        '의 혀가 ',
        you.get_colored_name(),
        '의 두 입술을 벌린다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 혀가 ',
        you.get_colored_name(),
        '의 입안을 헤집으며 무언가를 찾는다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 혀가 아쉬운 듯 ',
        you.get_colored_name(),
        '의 치아 사이, ',
        you.get_colored_name(),
        '의 혀끝, ',
        you.get_colored_name(),
        '의 잇몸을 핥는다——하지만 그것들은 ',
        tachyon.sex,
        '의 목표가 아니다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 목표는————너무나 갑작스러운 상황에 ',
        you.get_colored_name(),
        '이(가) 반응하지 못하고, 미처 삼키지도 못한 ',
        you.get_colored_name(),
        '의 입안에 남아 있는 약이었다.',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 뒤늦게 알아차리고 황급히 막으려 한다.',
      ]);
      await era.printAndWait('하지만 이미 늦었다.');
      await era.printAndWait([
        you.get_colored_name(),
        '의 입안에 있던 약은 이미 ',
        tachyon.sex,
        '에게 대부분 넘어간 뒤였다.',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 이유를 물을 겨를도 없이 서둘러 혀를 빼고, ',
        tachyon.sex,
        '를 막으려 한다.',
      ]);
      await era.printAndWait([
        '하지만 인간은 힘으로 ',
        tachyon.uma_sex_title,
        '를 당할 수 없다. 그토록 많은 실험을 거친 ',
        you.get_colored_name(),
        '도 예외는 아니다.',
      ]);
      era.println();
      await era.printAndWait('마침내 한 세기처럼 길었던 입맞춤이 끝났다.');
      await era.printAndWait([
        '떨어진 두 사람은 숨을 몰아쉬었고, ',
        you.get_colored_name(),
        '은(는) 숨을 고르며 ',
        tachyon.get_colored_name(),
        '에게 약을 뱉게 하려고 달려들었다……하지만 발이 멈췄다.',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' ',
        tachyon.sex,
        '의 지금 표정과 감정은 ',
        you.get_colored_name(),
        '로서는 이해할 수 없다.',
      ]);
      await era.printAndWait('기쁜 거라면 왜 얼굴에 눈물이 흐르는 걸까');
      await era.printAndWait([
        '슬픈 거라면 왜 ',
        you.get_colored_name(),
        '이(가) 본 적 없는, 완벽하다고 해도 좋을 미소를 짓고 있는 걸까',
      ]);
      if (era.get('cflag:32:扩展变量')?.choco > 0) {
        await era.printAndWait([
          '그때 ',
          you.get_colored_name(),
          '의 입에 남아 있던 약이 문득 맛을 바꾸었다. 원래는 무색무취였던 약의 지금 맛은……',
        ]);
        era.println();
        if (era.get('exp:32:接吻次数') > 0) {
          await tachyon.say_and_wait(
            '마지막 입맞춤에서 돼지고기 덮밥 맛이 날 줄은 몰랐군',
          );
        } else {
          await tachyon.say_and_wait(
            '첫 입맞춤에서 돼지고기 덮밥 맛이 날 줄은 몰랐군',
          );
        }
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 밸런타인데이에 받았던 초콜릿을 떠올린다.',
        ]);
        await era.printAndWait([
          '매일 약을 마시게 되는 자신과 그 반응을 즐기던 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait(
          '그 아름다운 나날이 영원히 이어졌으면 좋았을 텐데',
        );
        await era.printAndWait(
          '그 홍차 향이 언제까지나 변하지 않았으면 좋았을 텐데',
        );
        await era.printAndWait('각오는 굳혔을 텐데');
        await era.printAndWait('어째서 지금 그런 나날을 그리워하고 있는 걸까');
        era.println();
        await tachyon.say_and_wait([callname, ', 미안하네. 속였어']);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 여전히 그 화사한 미소를 유지하고 있고, 얼굴의 눈물도 구슬처럼 계속 떨어진다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          tachyon.get_colored_name(),
          '은 사실 그렇게 대단한 ',
          tachyon.uma_sex_title,
          '가 아니라네',
        ]);
        await tachyon.say_and_wait([
          '가능성을 위해서라면 모든 걸 버릴 수 있는 ',
          tachyon.uma_sex_title,
          '도 아니고',
        ]);
        await tachyon.say_and_wait([
          '꿈을 위해 사랑하는 이를 죽게 할 수 있는 ',
          tachyon.uma_sex_title,
          '도 아니야',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 고개를 저으며 말한다.',
          you.get_colored_name(),
          '은(는) 무언가 말하고 싶지만 어째서인지 입이 열리지 않는다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '……아니, 그렇게 말하는 것도 틀렸을지 모르겠군. 정확히는 ',
          tachyon.sex,
          '는 한때 그런 ',
          tachyon.uma_sex_title,
          '였어',
        ]);
        await tachyon.say_and_wait([
          '하지만 아까 말했듯, 모르모트 군에게 변해 버린 공주는 사랑이 무엇인지 알아 버렸네. 그러니……',
          tachyon.sex,
          '는 이제 할 수 없어',
        ]);
        await tachyon.say_and_wait([
          tachyon.get_colored_name(),
          '도 결국 평범한 한 명의 ',
          tachyon.child_sex_title,
          '일 뿐이라네',
        ]);
        await tachyon.say_and_wait([
          '그러니 ',
          tachyon.sex,
          '는 사랑에 빠지고, 두려워하고, 자신이 좋아하는 사람이 자신을 좋아하는지 무서워하고……',
        ]);
        await tachyon.say_and_wait(
          '좋아하는 사람의 눈에 비친 것이 사실은 자신이 아닐지도 모른다고 두려워하지',
        );
        era.println();
        await era.printAndWait([
          '처음부터 끝까지 「',
          callname,
          '」가 바라보고 매료된 것은 「',
          tachyon.get_colored_name(),
          '의 달리기」, 「',
          tachyon.get_colored_name(),
          '의 꿈」',
        ]);
        await era.printAndWait([
          '그렇다면……',
          tachyon.get_colored_name(),
          '은?',
        ]);
        await era.printAndWait([
          '아니……',
          tachyon.get_colored_name(),
          '……은 누구지?',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '……아아, 약효가 나타나기 시작했군…………조금 더 이야기하고 싶었는데',
        );
        era.println();
        await era.printAndWait([
          '눈앞의 ',
          tachyon.teen_sex_title,
          '의 얼굴에서는 더 이상 눈물이 떨어지지 않는다. 하지만 미소는 여전히 빛나고 있다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '…………그래도 적어도 차이지는 않았어. 그러니까 최소한 거절당하지는 않았다는 거지, ',
        );
        await tachyon.say_and_wait(
          '그렇지? 그걸로 충분해……그래, 그걸로 충분하다네, 하하하!',
        );
        era.println();
        await era.printAndWait('하하하하하');
        await era.printAndWait([
          tachyon.teen_sex_title,
          '는 호탕하게 웃고, ',
          you.get_colored_name(),
          '은(는) ',
          tachyon.sex,
          '가 웃는 모습에서 어떤 그림자를 떠올린다……',
        ]);
        await era.printAndWait([
          '자신이 무언가를 마신 뒤에는 「',
          tachyon.sex,
          '」도 언제나 자신을 보며 호탕하게 웃었다.',
        ]);
        await era.printAndWait([
          '「',
          tachyon.sex,
          '」의 이름이 뭐였지? 「',
          tachyon.sex,
          '」는 눈앞의 이 ',
          tachyon.teen_sex_title,
          '인가?',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '미안하네, ',
          callname,
          ', 이렇게 휘둘러 놓고 결국 모든 것이 물거품이 되어 버리다니…',
        ]);
        await tachyon.say_and_wait([
          '하지만 ',
          tachyon.get_colored_name(),
          '의 마지막 변덕이라 생각해 주게……다음에는 이런 골치 아픈 ',
          tachyon.phy_sex_title,
          '에게 두 번 다시 매료되지 않기를',
        ]);
        era.println();
        await era.printAndWait([
          '「',
          tachyon.get_colored_name(),
          '」, 「',
          callname,
          '」',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 어딘가 닮았고 인상에 남은 이 명사들을 필사적으로 머릿속에 붙잡아 두려 한다.',
        ]);
        await era.printAndWait(
          '하지만 뇌는 드럼 세탁기에 들어간 것처럼, 기억을 얼룩처럼 씻어 내고 있다.',
        );
        await era.printAndWait([
          '눈앞의 ',
          tachyon.teen_sex_title,
          '의 모습마저 새벽빛에 사라지는 물거품처럼 덧없다.',
        ]);
        era.setToBottom();
        await tachyon.say_and_wait(['잘 자게, ', callname, ' ']);
        era.setToBottom();
        await era.printAndWait([
          '그 말을 듣고 나서 ',
          you.get_colored_name(),
          '의 의식은 심연으로 가라앉았다.',
        ]);
        era.setToBottom();
        era.drawLine();
        await tachyon.say_as_unknown_and_wait('……일어');
        await tachyon.say_as_unknown_and_wait('………일어나게');
        era.println();
        await era.printAndWait([you.get_colored_name(), '은(는) 눈을 떴다.']);
        await era.printAndWait([
          '어떤 목소리에 잠에서 깨어난 ',
          you.get_colored_name(),
          '은(는) 눈을 떠서 본 천장이 낯설다는 걸 깨달았다.',
        ]);
        era.printButton('「여긴 어디지?」', 1);
        await era.input();
        await tachyon.say_as_unknown_and_wait('……여기는 내 실험실이라네');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 목소리가 들리는 쪽을 본다.',
        ]);
        await era.printAndWait([
          '눈앞에는 밤색 머리의 ',
          tachyon.uma_sex_title,
          '가 있다. 단정하게 자른 짧은 머리와 흰 가운이 ',
          tachyon.sex,
          '가 연구자임을 말해 준다.',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '는 품평하는 듯한 눈으로 ',
          you.get_colored_name(),
          '을(를) 바라보고, 어째서인지 ',
          you.get_colored_name(),
          '은(는) 소름이 돋는다.',
        ]);
        era.printButton('「넌 누구야?」', 1);
        await era.input();
        await tachyon.say_as_unknown_and_wait(
          '그 질문은 내가 해야 할 것 같네만……자네는 누구인가? 왜 내 실험실에 누워 있지?',
        );
        await era.printAndWait([
          '밤색 머리의 ',
          tachyon.uma_sex_title,
          '가 말한다',
        ]);
        await era.printAndWait([
          '그제야 ',
          you.get_colored_name(),
          '은(는) 자신이 아직 바닥에 누워 있음을 깨닫고 서둘러 일어났다.',
        ]);
        era.printButton(`「${you.actual_name}야. 트레이너 일을 하고 있어」`, 1);
        await era.input();
        await tachyon.say_as_unknown_and_wait(
          '…………오? 그럼 트레이너 군, 무슨 일로 여기서 자고 있었나',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 여기에 눕기 전에 무엇을 하고 있었는지 떠올려 보려 하지만, 아무리 해도 생각나지 않는다.',
        ]);
        era.println();
        await tachyon.say_as_unknown_and_wait(
          '…………생각나지 않아도 괜찮네. 어째서인지 나도 기억을 잃은 모양이라 조금 전까지 무얼 했는지 떠오르지 않거든……',
        );
        await tachyon.say_as_unknown_and_wait([
          '뭐, 그 이야기는 제쳐 두도록 하지. 아무튼 나는 ',
          tachyon.get_colored_name(),
          '. 트레이너 군, 잘 부탁하네',
        ]);
        era.println();
        await era.printAndWait([tachyon.get_colored_name()]);
        await era.printAndWait([
          '그 이름을 듣는 순간 ',
          you.get_colored_name(),
          '의 가슴이 한 박자 멎은 듯했다.',
        ]);
        await era.printAndWait('들어 본 적 없는 이름일 텐데');
        await era.printAndWait(['이 ', tachyon.uma_sex_title, '를 모를 텐데']);
        await era.printAndWait('어째서인지 익숙하다.');
        era.println();
        era.printButton('「우리……어디서 만난 적 있지 않아?」', 1);
        await era.input();
        await tachyon.say_and_wait(
          '오, 요즘은 그런 진부한 작업 멘트는 유행하지 않네만, 트레이너 군',
        );
        await era.printAndWait([
          tachyon.sex,
          '는 ',
          you.get_colored_name(),
          '을(를) 보며 장난스러운 미소를 지었고, ',
          you.get_colored_name(),
          '은(는) 당황해 그런 뜻이 아니라고 설명했다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '농담이라네……어째서인지 나도 같은 느낌이 들어',
        );
        era.println();
        await era.printAndWait([
          '어째서인지 트레이너로서의 직감이 ',
          you.get_colored_name(),
          '에게 알려 준다. 이 ',
          tachyon.uma_sex_title,
          '는 분명 ',
          you.get_colored_name(),
          '을(를) 뒤흔들 달리기를 보여 줄 것이라고.',
        ]);
        await era.printAndWait([
          '하지만 동시에 어떤 장면이 ',
          you.get_colored_name(),
          '의 머릿속에 계속 떠오른다.',
          tachyon.get_colored_name(),
          '이라는 이 ',
          tachyon.uma_sex_title,
          '가……',
        ]);
        await era.printAndWait('끊임없이 도시락을 조르는 모습이???');
        await era.printAndWait([
          '정신을 차리고 보니 ',
          you.get_colored_name(),
          '은(는) 이미 ',
          tachyon.sex,
          '에게 계약을 제안하고 있었다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '…………말해 두겠네만, 보통 이렇게 갑작스럽게 계약을 제안하나? 이건 ',
          tachyon.uma_sex_title,
          '의 일생이 걸린 일이라네. 조금 더 진지하게 생각해야 하지 않겠나?',
        ]);
        era.printButton('「분명 우린 잘 맞을 것 같아」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 말을 마치고 다 끝났다고 생각한다.',
        ]);
        await era.printAndWait(
          '무슨 생각이었던 거야. 낯익은 느낌은 있지만, 보통은 이렇게 갑자기 계약을 제안하지 않잖아!!',
        );
        await era.printAndWait(
          '이제 끝이다. 거절당할 뿐 아니라 실컷 비웃음까지 당할지도 모른다…………',
        );
        era.println();
        await era.printAndWait([
          '아니나 다를까, ',
          tachyon.get_colored_name(),
          '이라는 ',
          tachyon.uma_sex_title,
          '는 그 말을 듣고 잠시 멍해졌다가 호탕하게 웃었다. 그러고는……',
        ]);
        await tachyon.say_and_wait('좋아');
        era.println();
        await era.printAndWait('봐, 역시………………');
        await era.printAndWait('？？？？？');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 얼굴 가득 물음표를 띄운 채 상대를 바라본다.',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '는 웃다가 맺힌 눈가의 눈물을 닦으며 말한다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '어째서인지 나도 같은 느낌이 드는군……물론 그 느낌의 근원이 무엇인지는 조사해야겠지만, ',
        );
        await tachyon.say_and_wait(
          '자네는 나쁜 사람이 아닌 것 같아. 게다가 분명 재미있는 사람이 될 테지……',
        );
        await tachyon.say_and_wait(
          '후후, 그러니 잘 부탁하네, 트레이너…………아니, 모르모트 군',
        );
        era.println();
        await era.printAndWait('「모르모트 군」');
        await era.printAndWait([
          tachyon.sex,
          '가 문득 바꾼 호칭은 조금 영문을 모르겠고, 조금 무섭다……',
        ]);
        await era.printAndWait([
          '모르모트라는 호칭은 보통 그리 좋은 호칭은 아니잖아. 게다가 ',
          tachyon.sex,
          '의 이 연구에 미친 듯한 모습은…………',
        ]);
        await era.printAndWait([
          '하지만 그 외에도 ',
          you.get_colored_name(),
          '은(는) 한 줄기 친근함을 느낀다.',
        ]);
        era.printButton('「잘 부탁해, 아그네스 타키……타키온」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_actual_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '을 알게 되었다.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  '74-reject-2': (() => {
    const title = '시간이 되돌아가다';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} taste 秋川やよい / ノーザンテースト
     * @param {CharaTalk} minoru 駿川たづな / ハーベストタイム
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, taste, minoru, you) => {
      await era.printAndWait('당연한 수순처럼');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 어째서인지 익숙한 밤색 머리의 ',
        tachyon.uma_sex_title,
        '———',
        tachyon.get_colored_name(),
        '과 계약을 맺었다.',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 계약을 등록해야겠다고 생각하고 ',
        minoru.get_colored_name(),
        '와 ',
        taste.get_colored_name(),
        '를 찾아갔다.',
      ]);
      await era.printAndWait([
        '…………왜 ',
        minoru.couple_title,
        '은 저렇게 슬픈 눈으로 자신을 바라보는 걸까',
      ]);
      await minoru.say_and_wait('알아요. 또 그 아이의 약이겠죠……');
      await era.printAndWait('무슨 뜻이지. 그 아이라니 누구지?');
      await taste.say_and_wait([
        '안타깝네요!',
        you.actual_name,
        '트레이너님이라면 곧 기억을 되찾으실 거라고 믿어요',
      ]);
      await era.printAndWait([
        '이건 또 무슨 뜻이지……',
        minoru.couple_title,
        '은 ',
        you.get_colored_name(),
        '이(가) 기억을 잃었다는 걸 알고 있나? 설마 ',
        you.get_colored_name(),
        '의 기억 상실이나 그에 준하는 사고는 흔한 일인가?',
      ]);
      era.println();
      await era.printAndWait('영문을 모르겠다……뭐, 그런 셈 치자');
      await era.printAndWait([
        '아무튼 ',
        you.get_colored_name(),
        '과(와) ',
        tachyon.get_colored_name(),
        '의 육성이 시작된다!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  '74-reject-3': (() => {
    const title = '멈춘 시계';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([
        '그럼……우선 실험 파트너로서 호흡부터 맞추도록 하지, ',
        callname,
        ', 내 달리기를 잘 봐 주게, 후후',
      ]);
      era.println();
      await era.printAndWait('역시……무언가 이상하다.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 달리기를, ',
        tachyon.sex,
        '가 달리는 모습을 보다가 깨닫는다.',
      ]);
      await era.printAndWait('빠르다. 눈길을 빼앗는 달리기다.');
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '에게는 그것을 생각할 여유가 없다.',
      ]);
      await era.printAndWait(
        '그래, 빠르고 눈부시다. 하지만 그뿐만은 아닌 것 같다.',
      );
      await era.printAndWait('어디선가 비슷한 달리기를 본 적이 있는 듯하다.');
      await era.printAndWait([
        '수면 위의 빛처럼 ',
        you.get_colored_name(),
        '의 머릿속 깊은 곳을 계속 간질이다가',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 수면으로 헤엄쳐 나오려는 순간 흔적도 없이 사라진다.',
      ]);
      era.println();
      await you.say_and_wait('이상해……', true);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 머리를 긁적이며 고민하고 있을 때………',
      ]);
      era.printButton('「！？」', 1);
      await era.input();
      await era.printAndWait('트레이닝장에서 갑자기 상황이 달라졌다.');
      await era.printAndWait([
        '달리기를 보여 주기만 하겠다던 ',
        tachyon.get_colored_name(),
        '이 점점 더 빠르게 달린다.',
      ]);
      await era.printAndWait('조금 전까지는……준비 운동이었을 뿐인가?');
      await era.printAndWait([
        '평범한 체육복 차림의 ',
        tachyon.get_colored_name(),
        '이 트레이닝장을 경쾌하게 달린다.',
      ]);
      await era.printAndWait('빨라진다, 점점 빨라진다.');
      await era.printAndWait([
        '어째서인지 ',
        you.get_colored_name(),
        '의 가슴에 다급함이 치민다.',
      ]);
      await era.printAndWait('초조함과 절박함');
      era.println();
      await era.printAndWait([
        '이렇게 빨리 달려도 ',
        tachyon.get_colored_name(),
        ' ',
        tachyon.sex,
        '의 다리는 괜찮은 걸까?',
      ]);
      await era.printAndWait('……? 왜 문제가 있지?');
      await era.printAndWait(['왜냐하면 ', tachyon.sex, '의 다리는……']);
      await era.printAndWait([tachyon.sex, '의 다리는 그렇게 약한데']);
      await era.printAndWait([
        '왜 나는 ',
        tachyon.sex,
        '의 다리가 약하다는 걸 알고 있지',
      ]);
      era.println();
      await era.printAndWait('모른다. 하지만 알고 싶다.');
      await era.printAndWait([
        '진실을 알고 싶다는 다급함이 ',
        you.get_colored_name(),
        '(으)로 하여금 계속 생각하게 한다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 사고 속도에 맞추기라도 하듯',
      ]);
      await era.printAndWait([tachyon.get_colored_name(), '도 계속 가속한다.']);
      await era.printAndWait([
        '그리고……',
        you.get_colored_name(),
        '의 인식 끝자락',
      ]);
      await era.printAndWait('머릿속 깊이 숨겨진 가장 소중한 것');
      await era.printAndWait([tachyon.uma_sex_title, '의 한계 속도']);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 알고 있는, ',
        tachyon.uma_sex_title,
        '의 한계',
      ]);
      await era.printAndWait([
        '————',
        tachyon.get_colored_name(),
        '의 한계 속도',
      ]);
      era.println();
      await era.printAndWait([
        '눈앞의 ',
        tachyon.get_colored_name(),
        '과 머릿속의 종잡을 수 없는 빛이 차츰 겹쳐진다.',
      ]);
      await era.printAndWait([
        '그때 ',
        you.get_colored_name(),
        '은(는) 마지막으로 한 번 더 수면을 향해 손을 뻗는다.',
      ]);
      await era.printAndWait('————————닿았다.');
      await era.printAndWait('————————떠올랐다.');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 ',
        you.get_colored_actual_name(),
        '의 담당 ',
        tachyon.uma_sex_title,
      ]);
      await era.printAndWait('만났을 때의 일, 레이스에 관한 일, 그리고……');
      era.println();
      await era.printAndWait('그리고……?');
      await era.printAndWait('모르겠다');
      await era.printAndWait('잊고 있다');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 자신의 담당 ',
        tachyon.uma_sex_title,
      ]);
      await era.printAndWait([
        you.get_colored_actual_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '의 모르모트 군',
      ]);
      await era.printAndWait('여기까지는 틀림없다.');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 레이스에 관한 하나하나의 일들',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 달리는 모습은 세세한 부분까지 또렷이 기억한다.',
      ]);
      await era.printAndWait('하지만……');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 무엇을 좋아하는지',
      ]);
      await era.printAndWait([tachyon.get_colored_name(), '의 생활 습관']);
      await era.printAndWait([tachyon.get_colored_name(), '의 취미']);
      await era.printAndWait([tachyon.get_colored_name(), '의 평소 옷차림']);
      await era.printAndWait(
        '어째서인지 머릿속에 남아 있는, 아마 레이스 관리와 관련 있을 음식 취향 외에는',
      );
      await era.printAndWait('다른 모든 것을 한 번도 접한 적 없는 것 같다.');
      era.println();
      await era.printAndWait('부자연스럽다.');
      await era.printAndWait('부자연스럽다고밖에 느껴지지 않는다.');
      await era.printAndWait('이렇게 오래 알고 지냈고, 이렇게 많이 함께했는데');
      await era.printAndWait([
        tachyon.sex,
        '의 레이스와 달리기를 이렇게 훤히 알고 있는데',
      ]);
      await era.printAndWait([
        '그런데도 ',
        tachyon.get_colored_name(),
        '이라는 ',
        tachyon.uma_sex_title,
        '를 아무것도 모르는 것 같다.',
      ]);
      era.println();
      await tachyon.say_and_wait(['후우……그래서 모르모트 군, 어땠나?']);
      era.printButton('「잘 달렸어!」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 무의식적으로 기억 속에서 몇 번이고 했던 대답을 입에 올린다.',
      ]);
      await era.printAndWait('어딘가 이상한 것 같다.');
      await era.printAndWait('무슨 일이 일어났는지 모르겠다.');
      await era.printAndWait('하지만……');
      era.println();
      await era.printAndWait('그것들을 떠올린 순간');
      await era.printAndWait('가슴 깊은 곳에서 분명 한마디를 들은 것 같았다.');
      era.println();
      era.printButton(
        `「이번에야말로 ${tachyon.sex}의 마음을 저버리지 마」`,
        1,
      );
      await era.input();
      await era.printAndWait('무슨 뜻일까……잘 생각해 보자');
    };
    f.title = title;
    return f;
  })(),
  '74-betray': (() => {
    const title = [{ color: buff_colors[3], content: '마녀의 약' }];
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([you.get_colored_name(), '은(는) 문득 지쳤다.']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 약을 ',
        tachyon.get_colored_name(),
        '의 손으로 밀어 돌려주었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(['…………', callname, '？']);
      era.printButton('「지쳤어. 마시고 싶으면 네가 마셔」', 1);
      await era.input();
      await era.printAndWait('언제부터였을까. 이유는 무엇일까.');
      await era.printAndWait([
        '어쩌면 ',
        you.get_colored_name(),
        '은(는) 더 이상 ',
        tachyon.get_colored_name(),
        '이라는 ',
        tachyon.uma_sex_title,
        '의 제멋대로인 행동을 견딜 수 없어진 걸까',
      ]);
      await era.printAndWait([
        '어쩌면 ',
        you.get_colored_name(),
        '은(는) 이미 ',
        tachyon.get_colored_name(),
        '에 대한 인내심을 잃은 걸까',
      ]);
      await era.printAndWait([
        '어쩌면 ',
        you.get_colored_name(),
        '은(는) 이것도 ',
        tachyon.sex,
        '의 또 다른 장난이라고 생각한 걸까',
      ]);
      await era.printAndWait([
        '결국 ',
        tachyon.sex,
        '의 사정 때문에 자신에게 죽으라니, 이 여자는 무슨 농담을 하는 건가',
      ]);
      era.println();
      await era.printAndWait([
        '아무튼 ',
        you.get_colored_name(),
        '은(는) 약을 ',
        tachyon.sex,
        '에게 밀어 돌려주었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 이 약이 정말 사람을 죽이는지 아닌지 따위는 신경 쓰지 않는다.',
      ]);
      await era.printAndWait(
        '아니, 정말 사람을 죽이는 약이라면 그것도 나쁘지 않을지 모른다.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '의 마음속에는 그런 어두운 생각마저 생겨나 있었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('…………아아, 그런가……알겠네');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 격한 반응을 보이지 않았다.',
      ]);
      await era.printAndWait([
        '평소의 ',
        tachyon.sex,
        '에 비해 이상하리만큼 차분한 모습이 오히려 ',
        you.get_colored_name(),
        '의 흥미를 조금 끌었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 그제야 고개를 들었다 ',
        tachyon.sex,
        '가 무언가 깨닫고 해방된 듯한 미소를 짓고 있는 것이 보였다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……그렇군. 이 문제의 답은 애초에 둘뿐이 아니었어',
      );
      await tachyon.say_and_wait(
        '삶과 죽음 외에도 세 번째 선택지가 있었군. 문제를 낸 자를 죽게 하는 것, 그렇지?',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 저도 모르게 눈살을 찌푸린다.',
      ]);
      await era.printAndWait('말이 길다. 마실 건가, 안 마실 건가');
      await era.printAndWait([
        '……아니, 결국 늘 남에게 약을 마시게 하는 이 ',
        tachyon.phy_sex_title.substring(0, 1),
        '는',
      ]);
      await era.printAndWait('자신이 약을 마실 생각은 해 본 적 없겠지');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 한숨을 쉬며 또 한바탕의 소동이었다고 탄식하고, 실험실을 나가려 했다.',
      ]);
      era.drawLine();
      await era.printAndWait([
        '그리고 ',
        you.get_colored_name(),
        '이(가) 돌아서서 나가려는 순간',
      ]);
      era.println();
      await tachyon.say_and_wait('큭………!');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 강제로 입맞춤을 당했다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 저항하려 하지만, 인간은 결국 ',
        tachyon.uma_sex_title,
        '의 힘을 당해 낼 수 없다. 약으로 몇 번이고 개조된 ',
        you.get_colored_name(),
        '도 마찬가지다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 혀가 ',
        you.get_colored_name(),
        '의 입술을 벌리고, ',
        you.get_colored_name(),
        '의 입안을 헤집으며 이끈다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 혀가 아쉬운 듯 ',
        you.get_colored_name(),
        '의 치아 사이, ',
        you.get_colored_name(),
        '의 혀끝, ',
        you.get_colored_name(),
        '의 잇몸을 핥는다——하지만 그것들은 ',
        tachyon.sex,
        '의 목표는 아니다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 목표는————아직 삼키지 않은, 사람을 「없애기」에 충분한 약을 ',
        you.get_colored_name(),
        '의 입안으로 넘기는 것',
      ]);
      era.println();
      await you.say_and_wait('큭……! 으으으………!!!');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 필사적으로 저항하며 몸을 비틀지만, 상대를 막을 수 없다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 헛된 저항 끝에, 약은 결국 ',
        you.get_colored_name(),
        ' 일행 두 사람이 남김없이 나눠 마시게 되었다.',
      ]);
      era.println();
      await you.say_and_wait('젠장……!');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 저도 모르게 크게 욕설을 내뱉는다.',
      ]);
      await era.printAndWait([
        '이 ',
        tachyon.phy_sex_title.substring(0, 1),
        '는 무슨 생각인 거야. 죽으려면 길동무까지 데려가겠다는 건가',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 험악하게 ',
        tachyon.sex,
        '를 노려보며 곧바로 욕을 퍼부으려다……말이 나오기 직전에 멈췄다.',
      ]);
      era.println();
      era.println();
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), '이 울고 있었다.']);
      await era.printAndWait([
        '아니……정확히는 ',
        tachyon.sex,
        '는 눈물을 흘리면서도 미소를 지으려 애쓰고 있었다. 하지만 끝내 떠오른 것은 우는 것보다 더 보기 괴로운 웃음이었다.',
      ]);
      await era.printAndWait([
        '이것은 ',
        you.get_colored_name(),
        '이(가) ',
        tachyon.sex,
        '를 알고 지낸 이래 처음 보는 ',
        tachyon.sex,
        '의 이토록 초라한 모습이었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '하……하하하, ',
        callname,
        ', 미안하네. 속였어',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '는 아무렇지 않은 말투를 가장하려 했지만, 흐느끼는 목소리가 그것을 몹시 어렵게 했다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '이건 독 같은 게 아니라네…………반대로 『다시 시작하는』 약이지',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '는 그렇게 말하지만 ',
        tachyon.sex,
        '가 시험관을 든 손은 여전히 떨리고 있어서 ',
        you.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '의 말을 믿을 수 없다.',
      ]);
      era.println();
      await era.printAndWait(
        '…………믿기지 않겠지? 상관없네. 약효가 나타나면 알게 될 테니',
      );
      era.println();
      await era.printAndWait('웃기지 마……!');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 그렇게 외치고 싶었지만 몸이 이미 움직이지 않는다는 걸 깨달았다.',
      ]);
      if (era.get('cflag:32:扩展变量')?.choco > 0) {
        await era.printAndWait([
          '그러고는 ',
          you.get_colored_name(),
          '의 입에 남아 있던 약이 문득 맛을 바꾸었다. 원래는 무색무취였던 약의 지금 맛은……',
        ]);
        era.println();
        if (era.get('exp:32:接吻次数') > 0) {
          await tachyon.say_and_wait(
            '마지막 입맞춤에서 돼지고기 덮밥 맛이 날 줄은 몰랐군',
          );
        } else {
          await tachyon.say_and_wait(
            '첫 입맞춤에서 돼지고기 덮밥 맛이 날 줄은 몰랐군',
          );
        }
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 밸런타인데이에 받았던 초콜릿을 떠올린다.',
        ]);
        await era.printAndWait([
          '그때부터 이 ',
          tachyon.uma_sex_title,
          '는 기묘한 약으로 자신을 계속 괴롭혀 왔다.',
        ]);
        await era.printAndWait(
          '매번 자신이 약을 마신 뒤 보이는 반응을 보며 호탕하게 웃고 즐겼다.',
        );
        await era.printAndWait(
          '이제 더는 견딜 수 없어진 자신이 무엇을 잘못했단 말인가?',
        );
      }
      await era.printAndWait([
        '분명 처음에 ',
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '이라는 ',
        tachyon.uma_sex_title,
        '의 달리기와 ',
        tachyon.sex,
        '의 꿈에 흥미를 가졌다.',
      ]);
      await era.printAndWait([
        '분명 ',
        you.get_colored_name(),
        '은(는) 진심으로 ',
        tachyon.sex,
        '를 돕고, ',
        tachyon.sex,
        '를 지키고, ',
        tachyon.sex,
        '가 꿈을 이룰 때까지 곁에 있고 싶었다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '은(는) 이제 질렸다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '에 대한 분노, 불만, 실망, 혐오가 쌓인 무게는 저울 반대편의 ',
        tachyon.sex,
        '에 대한 기대와 호감, 동경보다 무거워졌다.',
      ]);
      era.println();
      await era.printAndWait([
        '지금의 ',
        you.get_colored_name(),
        '은(는) 그저 빨리 이 ',
        tachyon.uma_sex_title,
        '에게서 벗어나고 싶을 뿐인데, 이런 독까지 마시게 되다니.',
      ]);
      await you.say_and_wait(
        '너 같은 녀석과 로미오와 줄리엣 흉내를 낼 여유는 없어!',
        true,
      );
      await era.printAndWait([
        '하지만 말을 할 수 없는 ',
        you.get_colored_name(),
        '은(는) 말없이 ',
        tachyon.get_colored_name(),
        '의 이야기를 끝까지 들을 수밖에 없다. 하다못해 험악한 눈빛으로 ',
        tachyon.get_colored_name(),
        '을 노려보며 불만을 표출한다.',
      ]);
      era.println();
      await tachyon.say_and_wait('솔직히 말하면 정말 무서웠네');
      await tachyon.say_and_wait(
        '누군가를 좋아하면서도 상대가 나를 좋아하는지 모른다는 건 정말 무서운 일이야',
      );
      await tachyon.say_and_wait(
        '어떤 실험 결과보다 마음을 들뜨게 하고, 어떤 레이스 결과보다 심장을 빠르게 뛰게 하지',
      );
      await tachyon.say_and_wait('솔직히 말하면 정말 무서웠네');
      await tachyon.say_and_wait(
        '상대가 좋아하는 게 내가 아니라, 내가 가진 『무언가』뿐이라면',
      );
      await tachyon.say_and_wait(
        '어떻게 해야 하지. 상대의 눈에 비친 게 내 『꿈』뿐이고, 나라는 사람이 아니라면',
      );
      await tachyon.say_and_wait(
        '나는 줄곧 그것만 걱정했어……가장 중요한 것, 가장 두려운 가능성을 잊고서',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 웃는다. 너무도 순진하고 낙관적이었던 자신을 비웃는다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '상대는 애초에 자신을 좋아하지 않았던 것이다. 꿈의 가능성까지 포함한 자신의 모든 것을 좋아하지 않았던 것이다.',
      );
      era.println();
      await era.printAndWait([
        '마침내 ',
        tachyon.get_colored_name(),
        '의 얼굴에 있던 미소——그것을 미소라고 부를 수 있다면——가 무너졌다.',
      ]);
      await era.printAndWait('완전히 울상이 되었다.');
      era.println();
      await tachyon.say_and_wait(
        '이게……실연이라는 느낌이군……흑……괴로워……무서워……마음이 부서질 것 같아……',
      );
      await tachyon.say_and_wait(
        '그런 거였군……차인 거였어……아파……마음이 아파……',
      );
      await tachyon.say_and_wait(
        '어째서……어째서 한 사람에게 사랑받지 못했을 뿐인데……어째서 이렇게 괴롭지……으으……싫어……',
      );
      await tachyon.say_and_wait(
        '싫어……이렇게 아플 줄 알았으면 사랑 같은 건 하지 않았을 텐데……다음에는, 다음에는……싫어……두 번 다시 싫어……아파……',
      );
      await tachyon.say_and_wait([
        callname,
        '……',
        callname,
        '……어디 있나……왜 보이지 않지……어디로 간 거야……',
      ]);
      await tachyon.say_and_wait([
        '어째서 이렇게 괴로울 때 곁에 없는 건가……',
        callname,
        '……이제 실험에는 쓰지 않겠네……전부 내 잘못이야……그러니……그러니 돌아와 줘……',
      ]);
      await tachyon.say_and_wait(
        '여긴 무서워……데려가 줘, 우리 실험실로……더는 고집부리지 않을 테니……',
      );
      await tachyon.say_and_wait([
        '옷은 직접 빨겠네……도시락통도 다 먹으면 어질러 두지 않을게……',
        callname,
        '……',
        callname,
        '…………',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '을 바라본다. 어느 순간부터 자신이 누구인지도 잊은 듯하다.',
      ]);
      await era.printAndWait([
        '눈은 자신을 보고 있는데도 계속 ',
        callname,
        '을(를) 부르며, 이곳에 없는 누군가를 찾는 것 같다.',
      ]);
      await era.printAndWait(['아니……', callname, '……？']);
      await era.printAndWait([
        '이건 누구지?',
        you.get_colored_name(),
        '은(는) 이 이름을 들어 본 적 없을 텐데?',
      ]);
      await era.printAndWait([
        '눈앞의 이 ',
        tachyon.uma_sex_title,
        '는 누구지. 자신은 ',
        tachyon.sex,
        '를 알고 있나',
      ]);
      era.println();
      await era.printAndWait('머리가 아프다, 아프다, 쪼개질 것 같다.');
      await era.printAndWait('생각할수록 잊어버리는 것이 늘어난다.');
      era.println();
      await era.printAndWait([
        '마침내 ',
        callname,
        '을(를) 부르는 비명 속에서 ',
        you.get_colored_name(),
        '의 의식은 심연으로 가라앉았다.',
      ]);
      era.setToBottom();

      await tachyon.say_as_unknown_and_wait('……일어');
      await tachyon.say_as_unknown_and_wait('………일어나게');
      era.println();
      await era.printAndWait([you.get_colored_name(), '은(는) 눈을 떴다.']);
      await era.printAndWait([
        '어떤 목소리에 잠에서 깨어난 ',
        you.get_colored_name(),
        '은(는) 눈을 떠서 본 천장이 낯설다는 걸 깨달았다.',
      ]);
      era.printButton('「여긴 어디지?」', 1);
      await era.input();
      await tachyon.say_as_unknown_and_wait('……여기는 내 실험실이라네');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 목소리가 들리는 쪽을 본다.',
      ]);
      await era.printAndWait([
        '눈앞에는 밤색 머리의 ',
        tachyon.uma_sex_title,
        '가 있다. 단정하게 자른 짧은 머리와 흰 가운이 ',
        tachyon.sex,
        '가 연구자임을 말해 준다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '는 품평하는 듯한 눈으로 ',
        you.get_colored_name(),
        '을(를) 바라보고, 어째서인지 ',
        you.get_colored_name(),
        '은(는) 소름이 돋는다.',
      ]);
      era.printButton('「넌 누구야?」', 1);
      await era.input();
      await tachyon.say_as_unknown_and_wait(
        '그 질문은 내가 해야 할 것 같네만……자네는 누구인가? 왜 내 실험실에 누워 있지?',
      );
      await era.printAndWait([
        '밤색 머리의 ',
        tachyon.uma_sex_title,
        '가 말한다',
      ]);
      await era.printAndWait([
        '그제야 ',
        you.get_colored_name(),
        '은(는) 자신이 아직 바닥에 누워 있음을 깨닫고 서둘러 일어났다.',
      ]);
      era.printButton(`「${you.actual_name}야. 트레이너 일을 하고 있어」`, 1);
      await era.input();
      await tachyon.say_as_unknown_and_wait(
        '…………오? 그럼 트레이너 군, 무슨 일로 여기서 자고 있었나',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 여기에 눕기 전에 무엇을 하고 있었는지 떠올려 보려 하지만 아무리 해도 생각나지 않는다.',
      ]);
      era.println();
      await tachyon.say_as_unknown_and_wait(
        '…………생각나지 않아도 괜찮네. 어째서인지 나도 기억을 잃은 모양이라 조금 전까지 무얼 했는지 떠오르지 않거든……',
      );
      await tachyon.say_as_unknown_and_wait([
        '뭐, 그 이야기는 제쳐 두도록 하지. 아무튼 나는 ',
        tachyon.get_colored_name(),
        '. 트레이너 군, 잘 부탁하네',
      ]);
      era.println();
      await era.printAndWait([tachyon.get_colored_name()]);
      await era.printAndWait([
        '기묘한 이름이다……뭐, ',
        tachyon.uma_sex_title,
        '의 이름은 대개 이런 식이다. 남의 이름을 차별하는 것도 좋지 않겠지',
      ]);
      await era.printAndWait([
        '하지만 어째서인지 직감이 ',
        you.get_colored_name(),
        '에게 말한다. 눈앞의 이 ',
        tachyon.uma_sex_title,
        '와는 거리를 두라고',
      ]);
      era.println();
      era.printButton(
        `「그럼 오늘은 이만 가 보겠습니다. 실험실에 멋대로 들어와 정말 죄송합니다. 나중에 다시 사과드리겠습니다, ${tachyon.name} 씨」`,
        1,
      );
      await era.input();
      await tachyon.say_and_wait(
        '…………아니, 괜찮네. 애초에 둘이 동시에 기억을 잃다니……',
      );
      await tachyon.say_and_wait(
        '뭐, 이걸로 됐겠지. 나중에 일부러 찾아올 필요는 없네, 트레이너 군',
      );
      era.println();
      await era.printAndWait([
        '그렇게 ',
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '의 실험실을 나섰다.',
      ]);
      await era.printAndWait([
        '문을 나서기 전, ',
        you.get_colored_name(),
        '은(는) 문득 뒤돌아보았다.',
      ]);
      era.println();
      await tachyon.say_and_wait('응? 트레이너 군, 아직 할 말이 있나?');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 예감이 든다. 이 문을 나서면 아마 다시는 이 ',
        tachyon.uma_sex_title,
        '와 인연을 맺을 일이 없을 거라고',
      ]);
      era.println();
      await you.say_and_wait('아무것도 아니다. 기분 탓이겠지');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 실험실 문을 나선다. 이번에는 조금도 망설이지 않았다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  89: (() => {
    const title = 'Now or Forever';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} scarlet ダイワスカーレット
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} shakur エアシャカール
     * @param {CharaTalk} pocket ジャングルポケット
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {PrintedSpan} t_call_s アグネスタキオンがエアシャカールを呼ぶ名
     * @param {PrintedSpan} t_call_p アグネスタキオンがジャングルポケットを呼ぶ名
     */
    const f = async (
      tachyon,
      scarlet,
      digital,
      coffee,
      shakur,
      pocket,
      you,
      callname,
      t_call_c,
      t_call_s,
      t_call_p,
    ) => {
      await tachyon.say_and_wait([callname, '～～']);
      await tachyon.say_and_wait([callname, '～～～？']);
      await tachyon.say_and_wait([callname, '！！']);
      await tachyon.say_and_wait([
        callname,
        '…………아아, ',
        callname,
        '은(는) 오늘 없었지',
      ]);
      await tachyon.say_and_wait([
        '윽……하지만 이 약은 신선할 때 효능을 시험해야 하는데. 어쩔 수 없군, ',
        t_call_c,
        '～～',
      ]);
      await tachyon.say_and_wait(['…………뭐, ', t_call_c, '도 없다고!?']);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은 실험실에서 시치미를 떼듯 중얼거렸다.',
      ]);
      await tachyon.print_and_wait([
        '안타깝게도 실험실 안에는 ',
        tachyon.sex,
        '에게 츳코미를 걸어줄 사람이 아무도 없었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '은(는) 그렇다 치고…… ',
        t_call_c,
        '마저 없다니…… 아니면 ',
        t_call_p,
        '…… ',
        t_call_s,
        '…… ',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '생각해보니 ',
        coffee.get_colored_name(),
        ' 뿐만이 아니었다.',
      ]);
      await tachyon.print_and_wait([
        pocket.get_colored_name(),
        ', ',
        shakur.get_colored_name(),
        ', ',
        digital.get_colored_name(),
        ', 심지어 아끼는 후배인 ',
        scarlet.get_colored_name(),
        '조차 최근에는 보기가 힘들어졌다.',
      ]);
      await tachyon.print_and_wait([
        '그 원인은…… 영리한 ',
        tachyon.get_colored_name(),
        '이라면, ',
        tachyon.sex,
        '의 놀라운 지혜와 객관적인 판단력으로 아주 쉽게 유추해낼 수 있었다.',
      ]);
      await tachyon.print_and_wait('그렇다……');
      era.println();
      await tachyon.say_and_wait([
        '……역시, 내가 계속 ',
        callname,
        '의 이야기만 해서 그런 거겠지.',
      ]);
      era.println();
      await tachyon.print_and_wait(
        '사실, 단순히 모르모트라는 애칭으로 부르는 연인에 대한 이야기뿐만이 아니었다. 정확히는 연인과의 정사, 노골적으로 말하자면 닭살 돋는 애정 행각을 끊임없이 자랑했기 때문이었다.',
      );
      if (era.get('exp:32:性爱次数') > era.get('exp:32:睡奸次数')) {
        await tachyon.print_and_wait([
          '만약 그런 화제가 그저 달콤한 밀어나 애매한 감정 수준에 머물렀다면, 적어도 주변 사람들, 특히 ',
          scarlet.get_colored_name(),
          '과 ',
          digital.get_colored_name(),
          '은 기꺼이 들어주었을 것이다.',
        ]);
        await tachyon.print_and_wait([
          '하지만 화제는 늘 잠자리 이야기로 흘러간다. 비슷한 이야기만 들어도 얼굴을 붉히는 ',
          tachyon.couple_title,
          '을 탓할 수는 없다.',
        ]);
      }
      era.println();
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        '마저 참지 못하고 물었을 정도였다.',
      ]);
      await tachyon.print_and_wait(
        '어째서 그렇게 한시도 쉬지 않고 애정을 과시하느냐고.',
      );
      era.println();
      await tachyon.say_and_wait('……하지만, 멈출 수가 없는걸.');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은 아무도 없는 공간에서 나직이 읊조렸다.',
      ]);
      era.println();
      await tachyon.print_and_wait('사랑하는 사람과 입을 맞추는 기쁨');
      await tachyon.print_and_wait('운명의 상대를 끌어안는 뜨거운 마음');
      await tachyon.print_and_wait('좋은 인연과 다정히 얽혀 나누는 온기');
      await tachyon.print_and_wait('서로를 지켜 주는 사람을 향한 애틋한 사랑');
      era.println();
      await tachyon.print_and_wait(
        '이 감정들, 이 말들을 누군가에게 털어놓지 않으면',
      );
      await tachyon.print_and_wait(
        '이 엄청난 열기에 속부터 겉까지 모두 타 버릴 것만 같다.',
      );
      era.println();
      await tachyon.print_and_wait('좋아해');
      await tachyon.print_and_wait('귀여워');
      await tachyon.print_and_wait('멋져');
      await tachyon.print_and_wait('매혹적이야');
      await tachyon.print_and_wait('아름다워');
      await tachyon.print_and_wait('세련됐어');
      await tachyon.print_and_wait('색기 있어');
      await tachyon.print_and_wait('빠져들 수밖에 없어');
      era.println();
      await tachyon.print_and_wait([
        '어떤 형용사든 ',
        you.sex,
        '에게는 더하지도 모자라지도 않게 어울린다.',
      ]);
      await tachyon.print_and_wait([
        '이지적인 ',
        tachyon.get_colored_name(),
        '에게 있어 연애에 빠져 허우적거리는 것은 의심할 여지 없이 어리석은 짓이었다.',
      ]);
      await tachyon.print_and_wait(
        '사실 마음속에는 줄곧 이런 어리석은 자신의 모습을 비웃는 목소리가 있다.',
      );
      await tachyon.print_and_wait('하지만……');
      era.println();
      await tachyon.print_and_wait(
        '이성을 지킨다는 것이 이 감정을 버리는 것이라면',
      );
      await tachyon.print_and_wait([
        '객관적이라는 것이 ',
        you.sex,
        '를 향한 사랑을 낮추는 것이라면',
      ]);
      era.println();
      await tachyon.print_and_wait('그렇다면 자신은 이성을 버리겠다.');
      await tachyon.print_and_wait('욕망의 불꽃 속에서 춤추는 광대가 되겠다.');
      era.println();
      await tachyon.say_and_wait('아아…… 나, 분명 미친 거겠지.');
      era.println();
      await tachyon.print_and_wait('틀림없다');
      await tachyon.print_and_wait('이런 자신은 분명 미쳐 있다.');
      await tachyon.print_and_wait(
        '예전의 자신은 말할 것도 없고, 세상의 평범한 연인들과 비교해도 자신의 사랑은 광기의 영역에 이르렀다.',
      );
      await tachyon.print_and_wait(
        '하지만 미쳤는지 아닌지는 진작 정해져 있지 않았나',
      );
      era.println();
      await tachyon.print_and_wait([
        '온 세상이 알고 있다.',
        tachyon.get_colored_name(),
        '은 미친 ',
        tachyon.uma_sex_title,
        '다',
      ]);
      await tachyon.print_and_wait([
        '하지만 ',
        tachyon.get_colored_name(),
        '은 온 세상 따위 신경 쓰지 않았다.',
      ]);
      await tachyon.print_and_wait([
        you.sex,
        '는 알고 있다.',
        tachyon.get_colored_name(),
        '이 그런 ',
        tachyon.uma_sex_title,
        '라는 것을',
      ]);
      await tachyon.print_and_wait([
        '그리고 ',
        tachyon.get_colored_name(),
        '이 신경 쓰는 것은 ',
        you.sex,
        '뿐이다',
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '이 두려워하는 것은 단 하나. 자신이 ',
        you.sex,
        '에게 미움을 받는 것',
      ]);
      await tachyon.print_and_wait([
        '자신의 행동은 ',
        you.sex,
        '에게 걸맞을까?',
      ]);
      await tachyon.print_and_wait(['자신의 사랑을 ', you.sex, '는 좋아할까?']);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은 ',
        you.sex,
        '와 서로 의지하며 함께 걸어갈 수 있는 사람일까',
      ]);
      era.println();
      await tachyon.print_and_wait('아아, 결국 그런 것이군');
      era.println();
      await tachyon.print_and_wait('타오르는 사랑은 눈부시면서도 덧없다.');
      await tachyon.print_and_wait('그런 사랑은 오래가지 않는다.');
      await tachyon.print_and_wait(
        '지금의 자신은 불빛에 사로잡힌 나방에 불과하다.',
      );
      era.println();
      await tachyon.print_and_wait('원한다');
      await tachyon.print_and_wait('원한다');
      await tachyon.print_and_wait(
        '변치 않는 사랑을 원한다, 영원한 사랑을 원한다.',
      );
      await tachyon.print_and_wait(
        '다이아몬드처럼 영원하고 빛나는 사랑을 원한다.',
      );
      await tachyon.print_and_wait([
        you.sex,
        '의 곁에 당연하다는 듯 머무는 사랑을 원한다.',
      ]);
      era.println();
      await tachyon.print_and_wait('하지만 이런 자신으로 괜찮을까');
      await tachyon.print_and_wait('평생을 맡길 수 있는 상대일까?');
      await tachyon.print_and_wait([
        you.sex,
        '는 약속해 줄까, 이런 자신을 영원히 사랑하겠다고',
      ]);
      await tachyon.print_and_wait([
        '자신은 이런 ',
        you.sex,
        '를 영원히 사랑할 수 있을까',
      ]);
      era.println();
      tachyon.say('나는……');
      era.printButton('영원을 선택한다', 1, {
        buttonType: '',
        color: tachyon.color,
      });
      era.printButton('계속 불타오른다', 2, {
        buttonType: '',
        color: tachyon.color,
      });
      const ret = await era.input();
      if (ret === 1) {
        await tachyon.print_and_wait([you.sex, '와 나란히 선다.']);
        await tachyon.print_and_wait([you.sex, '와 손을 잡는다.']);
        await tachyon.print_and_wait([you.sex, '와 가정을 꾸린다.']);
        await tachyon.print_and_wait([you.sex, '와 새 생명을 낳는다.']);
        era.println();
        await tachyon.print_and_wait('원한다……안정되고 평온한 사랑을');
        await tachyon.print_and_wait('답이 너무 간단해서 스스로도 놀란다.');
        era.println();
        await tachyon.print_and_wait([
          '일을 마치고 돌아와 집 앞에서 기다리는 ',
          you.sex,
          '를 만난다',
        ]);
        await tachyon.print_and_wait([
          '자신이 일찍 돌아온 날에는 요리를 준비하고 ',
          you.sex,
          '가 돌아오기를 기다린다.',
        ]);
        await tachyon.print_and_wait([
          '요리는 잘하지 못하지만 ',
          you.sex,
          '를 위해서라면 ',
          tachyon.get_colored_name(),
          '은 한때 연구에 바치겠다고 맹세한 두 손을 볶음 요리와 식사 준비에 쓰리라',
        ]);
        await tachyon.print_and_wait('휴일에는 둘이 외출한다. 어디든 좋다.');
        await tachyon.print_and_wait(
          '공원, 가구점, 혹은 실험 도구점이나 화학약품점',
        );
        await tachyon.print_and_wait([
          you.sex,
          '와 소파를 어디에 놓을지 같은 사소한 일로 다툰다.',
        ]);
        await tachyon.print_and_wait(
          '밤까지 잘못을 인정하지 않던 토라진 두 사람이, 결국 누가 먼저랄 것도 없이 따뜻한 포옹으로 화해한다.',
        );
        await tachyon.print_and_wait([
          '새집을 마련한 날은 분명 피곤하겠지.',
          tachyon.uma_sex_title,
          '의 체력으로도 버거울지 모른다.',
        ]);
        await tachyon.print_and_wait([
          '모처럼 생긴 새집에서 느긋하게 다정한 시간을 보내고 싶은데 ',
          you.sex,
          '의 품에 쓰러져 그대로 잠들어 버린다.',
        ]);
        if (tachyon.sex_code - 1 && you.sex_code === 1) {
          await tachyon.print_and_wait('임신한 날, 그는 분명 크게 기뻐하겠지');
          await tachyon.print_and_wait(
            '하지만 갑자기 말해서는 안 돼. 그때 내뿜는 강한 빛에 이웃들이 시끄럽다고 화낼 테니까',
          );
          await tachyon.print_and_wait(
            '좋은 타이밍을 찾자. 낮에, 아침 식사할 때',
          );
          await tachyon.print_and_wait(
            '아무렇지 않은 말투로 「자네, 아빠가 된다네♡」라고 말하는 거야',
          );
          await tachyon.print_and_wait('그때 그는 어떤 표정을 지을까?');
          await tachyon.print_and_wait(
            '아이가 태어나면 아이와 함께 우리 사진을 보고 싶어',
          );
          await tachyon.print_and_wait(
            '그때 내가 어떻게 옛 실험체에게 매료되었는지 이야기해 주고',
          );

          await tachyon.print_and_wait(
            '아마 아이는 아빠가 불쌍하다고 생각하겠지. 엄마에게 이렇게나 괴롭힘을 당했다니',
          );
          await tachyon.print_and_wait(
            '다만 잠자리에서 괴롭힘을 당하는 쪽은 엄마지만♡',
          );
          await tachyon.print_and_wait(
            '아이가 자라 가정을 꾸린 뒤에는 이불 속에서 말없이 우는 그를 위로하고 싶어',
          );
          await tachyon.print_and_wait(
            '……반대일지도 모르겠군. 어쩌면 나는 의외로 자식을 끔찍이 아끼는 엄마일지도 몰라',
          );
          era.println();
        }
        await tachyon.print_and_wait([
          '재미있어서 ',
          you.sex,
          '와 함께 있는 것이 아니다.',
        ]);
        await tachyon.print_and_wait([
          you.sex,
          '와 함께하는 매일이 이토록 재미있는 것이다.',
        ]);
        await tachyon.print_and_wait('이렇게 지루하고 평탄한 일상조차도');
        await tachyon.print_and_wait([
          '곁에 있는 사람이 ',
          you.sex,
          '라는 생각만으로 기대감에 가슴이 벅차오른다.',
        ]);
        era.println();
        await you.say_and_wait('타키온! 날 불렀다며, 무슨 일이야?');
        era.println();
        await tachyon.print_and_wait(
          '누가 친절하게 알려 준 걸까? 마음이 통한 걸까?',
        );
        await tachyon.print_and_wait('어느 쪽이든 상관없다.');
        await tachyon.print_and_wait('잘 생각해 보자. 어떻게 말하면 좋을까?');
        await tachyon.print_and_wait('그래……이렇게 말하자');
        era.println();
        await tachyon.say_and_wait([
          callname,
          ', 생각해 봤는데 말이야. 우리……다음 단계로 나아가도 괜찮지 않겠나?',
        ]);
        await tachyon.print_and_wait(
          '말을 꺼내는 순간 교회의 종소리가 들린 것 같았다.',
        );
      } else {
        await tachyon.print_and_wait('영원……인가?');
        era.println();
        await tachyon.print_and_wait('모르겠다');
        await tachyon.print_and_wait('생각할 수 없다.');
        era.println();
        await tachyon.print_and_wait(
          '자신은 그런 곁을 지키는 사람이 될 수 있을까',
        );
        await tachyon.print_and_wait([you.sex, '의 평생을 함께할 수 있을까']);
        era.println();
        await tachyon.print_and_wait([
          '결국 ',
          tachyon.get_colored_name(),
          '이라는 이 ',
          tachyon.phy_sex_title,
          '은 그렇게 곁을 지키는 사람, 그런 반려자, 그런……',
        ]);
        await tachyon.print_and_wait('연인이 될 수 있을까?');
        era.println();
        await tachyon.print_and_wait('요리도 못하는 자신');
        await tachyon.print_and_wait('자기 일에만 몰두하는 자신');
        await tachyon.print_and_wait('게으른 자신');
        await tachyon.print_and_wait('인내심 없는 자신');
        era.println();
        await tachyon.print_and_wait('지금은 아직 받아들여 줄 수 있겠지');
        await tachyon.print_and_wait('그렇다면 미래에는');
        await tachyon.print_and_wait('십 년 뒤에는?');
        await tachyon.print_and_wait('이십 년 뒤에는?');
        await tachyon.print_and_wait('육십 년, 칠십 년 뒤에는?');
        era.println();
        await tachyon.print_and_wait('이 감정은 정말 영원히 이어질까?');
        era.println();
        await tachyon.print_and_wait('모르겠다');
        await tachyon.print_and_wait('생각할 수 없다.');
        era.println();
        await you.say_and_wait('타키온! 날 불렀다며, 무슨 일이야?');
        era.println();
        await tachyon.print_and_wait(
          '누가 쓸데없이 알려 준 걸까. 우연히 마음이 통한 걸까',
        );
        await tachyon.print_and_wait('……어느 쪽이든 상관없다.');
        await tachyon.print_and_wait('억누르자, 식히자, 가두자');
        await tachyon.print_and_wait('자신의 우스운 생각을 가두자');
        era.println();
        await tachyon.say_and_wait('……아무것도 아니라네');
        era.println();
        await tachyon.print_and_wait(
          '사랑이라는 거센 불꽃을 자신의 걱정과 불안을 연료 삼아 계속 태운다.',
        );
        await tachyon.print_and_wait(
          '그것이 우유부단한 자신이 짊어져야 할 영원한 벌이겠지',
        );
        era.drawLine();
        await tachyon.print_and_wait([
          you.get_colored_name(),
          '은(는) 고개를 저으며 마음속의 기묘한 생각을 떨치고, 망설임 없이 문밖으로 발을 내디뎠다.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  99: (() => {
    const title = 'Tachyon';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([callname, ', 내 이름을 한 번 불러주겠나?']);
      era.println();

      await era.printAndWait(['이름?']);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 궁금하다는 듯 ',
        tachyon.get_colored_name(),
        '을 바라보았다.',
      ]);
      await era.printAndWait([
        '오늘 트레이닝실에 들어오자마자 ',
        tachyon.get_colored_name(),
        '에게 억지로 소파에 눕혀졌다.',
      ]);
      await era.printAndWait([
        '이어서 ',
        tachyon.sex,
        '는 훈련 계획을 쓰는 작은 화이트보드를 꺼내 들고는, 마치 선생님이 수업을 시작하려는 듯한 모습이었다. 이건 또 무슨 놀이인지 알 수가 없었다.',
      ]);
      era.println();

      await tachyon.say_and_wait(['자, 어서 어서, 불러보게.']);

      era.printButton('「아그네스 타키온」', 1);
      await era.input();

      await era.printAndWait([
        tachyon.get_colored_name(),
        ', 자신에게 있어 유일무이한 담당 우마무스메의 이름.',
      ]);
      await era.printAndWait([
        '이름을 듣자 ',
        tachyon.get_colored_name(),
        '은 눈을 가늘게 뜨며, 무척 만족스러운 듯한 표정을 지었다.',
      ]);
      era.println();

      await tachyon.say_and_wait(['음…… 좋군.']);
      await tachyon.say_and_wait(['그럼…… 타키온이 무슨 뜻인지 알고 있나?']);
      era.println();

      await era.printAndWait(['타키온?']);

      era.printButton('「모르겠는데……」', 1);
      era.printButton('「그거…… 초광속 입자 아니야?」', 2);

      if ((await era.input()) === 1) {
        await tachyon.say_and_wait(
          '으음…… 내 모르모트라면 적어도 그 정도는 가슴속에 새겨두어야 하지 않겠나.',
        );
      } else {
        await tachyon.say_and_wait('정답이네. 합격점을 주도록 하지.');
      }

      await tachyon.say_and_wait([
        '타키온이란, 빛보다 빠른 속도로 허수의 시간 속을 항행하는 입자라네.',
      ]);
      await tachyon.say_and_wait([
        '특수 상대성 이론에서 타키온은 공간꼴 사차원 운동량과 허수의 상대 시간을 가지며, 일반 물질과의 상호작용이 뚜렷하지 않아 현재로서는 검출할 수 없는 가상의 입자라네. 전자기 복사의 원리로 보면……',
      ]);

      era.printButton('「잠, 잠깐만!」', 1);
      await era.input();

      await tachyon.say_and_wait([
        '정숙하게, ',
        callname,
        '. 내 말을 끝까지 듣게나.',
      ]);
      era.println();

      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 화이트보드에 적어 내려가는 수식에 머리가 어지러워진 ',
        you.get_colored_name(),
        '은(는) 서둘러 잠깐 멈추고 내용을 소화하고 싶었다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        tachyon.get_colored_name(),
        '은 화이트보드를 툭툭 치며, 아랑곳하지 않고 설명을 이어갔다.',
      ]);
      era.println();

      await tachyon.say_and_wait([
        '그리고…… 시간성과 공간성의 차이 때문에 타키온의 존재에는 두 가지 넘을 수 없는 장벽이 존재한다네.',
      ]);
      era.println();

      await era.printAndWait([
        '그 말을 내뱉고 ',
        tachyon.get_colored_name(),
        '은 말을 멈추었다.',
      ]);
      await era.printAndWait([
        '착한 학생이라면 선생님이 대놓고 뜸을 들일 때 적절한 질문을 던져야 하는 법이다.',
      ]);
      await era.printAndWait([
        '어느샌가 ',
        you.get_colored_name(),
        '도 이 상황에 몰입하기 시작했다.',
      ]);

      era.printButton('「장벽?」', 1);
      await era.input();

      await tachyon.say_and_wait([
        '그렇다네…… 만약 타키온이 실제로 존재한다면 마주하게 될 제약이지.',
      ]);
      await tachyon.say_and_wait([
        '간단히 말하자면…… 『광속 이하의 물질과는 접촉할 수 없다』는 것과, 『광속 이하로 속도를 줄일 수 없다』는 것이야. 우선 첫 번째부터 설명하자면, 접촉할 수 없는 이유는 인과율 위배에 따른……',
      ]);
      era.println();

      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 설명이 다시 시작되었다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '의 머릿속은 이미 ',
        tachyon.sex,
        '의 지식으로 뇌를 침범하는 듯한 난해한 해석에 머물러 있지 않았다.',
      ]);
      era.println();

      await era.printAndWait([
        tachyon.get_colored_name(),
        '과 함께 지내온 탓인지, 타키온이 초광속 입자를 뜻한다는 것을 알면서도 자꾸만 곁에 있는 ',
        tachyon.get_colored_name(),
        '을 떠올리게 되었다.',
      ]);
      await era.printAndWait([
        '점차 ',
        you.get_colored_name(),
        '의 머릿속에 어떤 장면 하나가 떠올랐다.',
      ]);
      era.println();

      await era.printAndWait([
        '광속 너머의 어느 세계, 광속 이하의 물질은 도달할 수 없는 공간 속.',
      ]);
      await era.printAndWait([
        '시간조차 너무나 느리다고 무시당하는 그 세계 속에서, 유일하게 존재하는 ',
        { color: tachyon.color, content: '타키온' },
        '.',
      ]);
      await era.printAndWait([
        '광속 이하의 세계와는 상호작용할 수 없고, 오직 초광속의 형태로만 존재할 수 있는 ',
        { color: tachyon.color, content: '타키온' },
        '.',
      ]);
      await era.printAndWait(['절대적인 속도, 그리고 절대적인 고독.']);
      era.println();

      await tachyon.say_and_wait(['…………']);
      era.println();

      await era.printAndWait([
        '어느샌가 ',
        you.get_colored_name(),
        '은(는) 배경음악처럼 깔리던 설명 소리가 멈췄다는 것을 깨달았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 정신을 차려보니, ',
        tachyon.get_colored_name(),
        '이 자신을 뚫어지게 쳐다보고 있었다. 언제부터 그러고 있었는지 알 수 없었다.',
      ]);
      era.println();

      await tachyon.say_and_wait([callname, '? 무슨 생각을 하고 있나?']);

      era.printButton('「아무것도 아니야……」', 1);
      era.printButton(
        '「그냥, 그렇게 생각하니 타키온이 너무 외로울 것 같아서……」',
        2,
      );
      await era.input();

      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 질문에 ',
        you.get_colored_name(),
        '은(는) 자신의 생각을 솔직하게 털어놓았다.',
      ]);
      await era.printAndWait([
        '어떤 의미에서 예전의 ',
        tachyon.get_colored_name(),
        '도 조금은 그런 면이 있었다.',
      ]);
      await era.printAndWait([
        '지나치게 뛰어난 재능 탓에, 주변 사람들은 ',
        tachyon.sex,
        '와 같은 세계를 바라볼 수 없었다.',
      ]);
      await era.printAndWait([
        '세상으로부터 고립되어, 눈앞의 목표만을 쫓던 ',
        { color: tachyon.color, content: '타키온' },
        '.',
      ]);
      await era.printAndWait([
        '하지만…… 그런 ',
        tachyon.get_colored_name(),
        '조차 결국 타인과 접촉하고, 영향을 주고받을 수 있었다.',
      ]);
      await era.printAndWait([
        '만약 물리적인 공간마저 격절되어 버린다면, ',
        { color: tachyon.color, content: '타키온' },
        '은……',
      ]);
      await era.printAndWait([
        '아니, 지금 이야기하는 건 초광속 입자이지 ',
        tachyon.get_colored_name(),
        '이 아니지 않은가.',
      ]);
      await era.printAndWait([
        '이렇게 엉뚱한 소리를 하면 ',
        tachyon.get_colored_name(),
        '이 화를 내겠지?',
      ]);
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '이 장난스럽게 나무라며 생각을 정정해 줄 것을 기다렸다.',
      ]);
      await era.printAndWait(['하지만……']);
      era.println();

      await tachyon.say_and_wait([
        '호오? ',
        callname,
        ', 자네는 그렇게 생각하는가?',
      ]);
      era.println();

      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 평온하게 말하며 화이트보드를 밀어두고, 소파에 앉아 있는 ',
        you.get_colored_name(),
        '에게 다가왔다.',
      ]);
      await era.printAndWait([
        '탁한 붉은 눈동자가 ',
        you.get_colored_name(),
        '을(를) 응시했다. 여느 때처럼 ',
        tachyon.sex,
        '가 대체 무슨 생각을 하는지 읽어낼 수 없었다.',
      ]);
      era.println();

      await tachyon.say_and_wait([
        '하지만, 만약 그것이 한계를 넘어서기 위한 대가라면 어떡하겠나? 만약…… 가정이긴 하지만, 현재의 모든 것을 잃고 절대적인 고독이 되는 것이 한계를 넘기 위해 지불해야 할 대가라면…… 자네는 그것을 받아들일 수 있겠나, ',
        callname,
        '？',
      ]);
      era.println();

      await era.printAndWait(['기묘했다.']);
      await era.printAndWait(['참으로 이상했다.']);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '과의 거리는 가까워지지도, 멀어지지도 않았다.',
      ]);
      await era.printAndWait([
        '하지만 눈앞의 ',
        tachyon.get_colored_name(),
        '은 갑자기 어떤 착각을 불러일으켰다.',
      ]);
      await era.printAndWait(['가까우면서도 먼 듯한 느낌.']);
      await era.printAndWait(['손을 뻗으면 닿을 것 같으면서도.']);
      await era.printAndWait([
        '다음 순간이면 속세를 떠나 사라져 버릴 것만 같은.',
      ]);
      await era.printAndWait([
        '하지만 그런 생각보다 지금 중요한 것은 대답을 하는 것이었다.',
      ]);
      await era.printAndWait(['신중하게 생각해야 한다……']);
      era.println();

      await era.printAndWait([you.get_colored_name(), '은(는) 생각했다……']);

      era.printButton('「괜찮아」(관계 진전)', 1);
      era.printButton('「안 돼」(관계 유지)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(['한계를 넘는 대가가 그것이라면……']);
        await era.printAndWait([
          '그렇다면 그 실험을 뒷받침하는 자로서 해야 할 일은 ',
          tachyon.sex,
          '의 결단을 인정하고 ',
          tachyon.sex,
          '가 목표로 향하도록 보내 주는 것이다.',
        ]);
        await era.printAndWait(['그것이 자신의 「모르모트」로서의 책임이다.']);
        await era.printAndWait([
          '그러니 ',
          you.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '의 방식을 존중한다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 그렇게 ',
          tachyon.get_colored_name(),
          '에게 설명했다.',
        ]);
        era.println();

        await tachyon.say_and_wait(['…………그런가. 그게 자네의 선택인가?']);
        era.println();

        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 여전히 ',
          tachyon.sex,
          '의 생각을 드러내지 않고, 말투도 변함없이 담담하다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 조금 걱정된다. 무언가 잘못 말한 건 아닐까.',
        ]);
        await era.printAndWait(['하지만 선택은 이미 했다.']);
        era.println();

        era.printButton('「타키온의 모르모트라면 그래야겠지……」', 1);
        era.printButton('「……그래도 타키온을 따라잡으려고 노력할게!」', 2);
        await era.input();

        await era.printAndWait([
          '자신은 ',
          tachyon.get_colored_name(),
          '의 성장을 막아서는 안 된다.',
        ]);
        await era.printAndWait([
          '오히려 반대다. 자신이 ',
          tachyon.get_colored_name(),
          '을 따라잡으려 노력해야 한다.',
        ]);
        await era.printAndWait(['광속을 넘는 것이 영원한 고독을 뜻한다면.']);
        await era.printAndWait([
          '자신이 해야 할 일은 ',
          tachyon.sex,
          '를 외롭게 두지 않는 것이다.',
        ]);
        await era.printAndWait([
          '자신 혼자서라도 ',
          tachyon.sex,
          '의 곁에 있으려 노력한다.',
        ]);
        await era.printAndWait([
          '그것이 ',
          tachyon.get_colored_name(),
          '의 「모르모트」로서, 그리고……',
          tachyon.get_colored_name(),
          '의 연인으로서 마음속에 품은 바람이다.',
        ]);
        era.println();

        await tachyon.say_and_wait(['…………']);
        await tachyon.say_and_wait(['그러고 보니 아직 말하지 않았군.']);
        await tachyon.say_and_wait(['내 선택은———']);
        era.println();

        await era.printAndWait([
          tachyon.get_colored_name(),
          '의 표정은 무서울 만큼 평온하다.',
        ]);
        await era.printAndWait(['폭풍 전의 바다처럼 고요하다.']);
        era.println();

        await tachyon.say_and_wait([
          '나는 그 선을 넘겠네. 광속을 넘어, 한계를 넘어———',
        ]);
        era.println();

        await era.printAndWait(['아아, 역시.']);
        await era.printAndWait([
          '그것이 ',
          you.get_colored_name(),
          '이(가) 동경했던 ',
          tachyon.uma_sex_title,
          '가 내놓을 답이다.',
        ]);
        await era.printAndWait(['뜻밖이 아니다. 당연하다고 할 수밖에 없다.']);
        await era.printAndWait([
          '하지만……가슴속의 옅은 상실감은 어디에서 온 걸까?',
        ]);
        await era.printAndWait([
          '그런데 ',
          tachyon.get_colored_name(),
          '의 말은 아직 끝나지 않았다.',
        ]);
        era.println();

        await tachyon.say_and_wait(['————자네와 함께.']);
        era.println();

        await era.printAndWait(['문득.']);
        await era.printAndWait(['폭풍 전의 고요함이 뒤집힌다.']);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 앞선 비유가 조금 잘못되었음을 깨닫는다.',
        ]);
        await era.printAndWait(['폭풍 전의 고요함이 아니다. 심해다.']);
        await era.printAndWait([
          '비바람이 다가오는 게 아니다. 자신은 이미 그 속에 잠겨 있다.',
        ]);
        era.println();

        await tachyon.say_and_wait([
          '둘이 함께 한계를 넘어———타키온(Tachyon)이 된다.',
        ]);
        era.println();

        await era.printAndWait([
          '참지 못하고 ',
          you.get_colored_name(),
          '은(는) 고개를 끄덕인다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          tachyon.sex,
          '의 두 눈을 바라본다. 빛이 반짝인다.',
        ]);
        await era.printAndWait([
          '심해를 헤매던 작은 물고기가 심해어에게 삼켜지기 직전 보는 미끼의 빛 같다.',
        ]);

        era.drawLine();

        await tachyon.print_and_wait([
          '나는 ',
          you.sex,
          '의 두 눈을 바라본다.',
        ]);
        await tachyon.print_and_wait(['그 안에는 어설픈 망설임이 있다.']);
        await tachyon.print_and_wait([
          '마음은 절반은 짜증이고, 절반은 안도감이다.',
        ]);
        await tachyon.print_and_wait(['어째서 ', you.sex, '는 모르는 걸까?']);
        await tachyon.print_and_wait([
          '그래도 다행이다.',
          you.sex,
          '는 아직 모르고 있다.',
        ]);
        era.println();

        await tachyon.print_and_wait([you.sex, '만이라도 괜찮다는 게 아니다.']);
        await tachyon.print_and_wait([you.sex, '만 있으면 되는 것이다.']);
        await tachyon.print_and_wait(['자신은 고독을 두려워하지 않는다.']);
        await tachyon.print_and_wait([
          '자신이 두려운 것은 곁에서 ',
          you.sex,
          '의 모습이 사라지는 것뿐이다.',
        ]);
        await tachyon.print_and_wait(['그러니……']);
        era.println();

        await tachyon.print_and_wait(['한계 너머.']);
        await tachyon.print_and_wait([
          '아무도 도달할 수 없는, 광속을 넘어선 끝.',
        ]);
        await tachyon.print_and_wait(['그리고……']);
        await tachyon.print_and_wait([
          '우리 둘 외에는 아무도 방해하지 않는 세계.',
        ]);
        era.println();

        await tachyon.say_and_wait(
          ['초광속 너머에서도, 육체와 정신이 모두 타 버려도……'],
          true,
        );
        await tachyon.say_and_wait('영원히, 영원히 내 곁에 있어 주겠나?', true);
        await tachyon.say_and_wait(['나의 친애하는 ', callname, '❤️'], true);
      } else {
        await era.printAndWait([
          tachyon.get_colored_name(),
          '을 혼자 고독한 영원 속으로 보낸다면, 자신은 절대 용납하지 않을 것이다.',
        ]);
        await era.printAndWait([
          '하지만……저울 반대편에 놓인 것이 ',
          tachyon.get_colored_name(),
          '의 꿈이라면?',
        ]);
        await era.printAndWait([
          '어쩌면 이 영원이야말로 ',
          tachyon.get_colored_name(),
          '이 추구해 온 전부인 것은 아닐까?',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '는 그것을 알고 이해한 상태로 한계를 추구한다는 목표를 내세웠겠지',
        ]);
        await era.printAndWait([
          '그렇다면 ',
          tachyon.sex,
          '의 ',
          callname,
          '로서, ',
          tachyon.sex,
          '의 연인으로서……',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '가 꿈을 좇는 것을 도와야 하지 않을까?',
        ]);
        era.println();

        await era.printAndWait(['그러니……']);

        era.printButton('「거절한다」', 1);
        await era.input();

        await era.printAndWait([
          '모르모트로서의 책임은 어쩌면 다했을지도 모른다. 그렇다면 ',
          tachyon.get_colored_name(),
          '의 연인으로서 다해야 할 책임은?',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '와 함께 발맞춰 온갖 일을 겪으며 마침내 결실을 맺은 사랑을 얻은 자신……',
        ]);
        await era.printAndWait([
          '그런 결말을 용납할 수 있을까.',
          tachyon.get_colored_name(),
          '과 영원히 이별하게 되는 것을 용납할 수 있을까.',
        ]);
        await era.printAndWait(['답은 물론……아니.']);

        era.printButton('「이기적이어도 좋아.」', 1);
        era.printButton('「타키온을 영원히 내 곁에 두고 싶어.」', 2);
        await era.input();

        await era.printAndWait(['상대가 떠나는 게 두렵다.']);
        await era.printAndWait(['그저 그만큼 이기적인 이유.']);
        await era.printAndWait(['지금의 자신은 더 이상 적응할 수 없다.']);
        await era.printAndWait([
          '밤에 잠들기 전 누군가를 위해 준비할 도시락이 없는 생활에.',
        ]);
        await era.printAndWait([
          '아침에 실험실에 가도 실험에 바쁜 뒷모습이 보이지 않는 생활에.',
        ]);
        await era.printAndWait([
          '점심에 누군가 귀엽고 가엾게 밥을 조르는 모습을 볼 수 없는 생활에.',
        ]);
        await era.printAndWait([
          '오후 트레이닝에서 그 찬란한 달리기를 볼 수 없는 생활에.',
        ]);
        await era.printAndWait([
          '지금의 자신은 더 이상 예전처럼 지루한 나날로 돌아갈 수 없다.',
        ]);
        await era.printAndWait(['그러니, 그러니.']);

        era.printButton(
          '「가능하다면……타키온과 함께 초광속 너머로 가고 싶어.」',
          1,
        );
        era.printButton('「하지만……불가능하다면……」', 2);
        await era.input();

        await era.printAndWait(['자신이 그 선을 넘지 못할까 봐 두렵다.']);
        await era.printAndWait([
          '그래서 ',
          tachyon.sex,
          '의 손을 붙잡고 싶다.',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '를 광속 아래의 세계에 붙잡아 두고 싶다.',
        ]);
        await era.printAndWait(['자신을 위해 남아 주었으면 좋겠다.']);
        era.println();

        await tachyon.say_and_wait(['…………']);
        await tachyon.say_and_wait(['…………후후.']);
        era.println();

        await era.printAndWait(['평온한 미소.']);
        await era.printAndWait(['뜻을 알 수 없는 웃음.']);
        await era.printAndWait(['저도 모르게 두려움이 인다.']);
        await era.printAndWait([tachyon.sex, '의 답은 대체……']);
        era.println();

        await tachyon.say_and_wait(['그게……자네의 답인가?']);
        await tachyon.say_and_wait(['……자네는 역시 늘 내 예측을 깨는군……']);
        era.println();

        await era.printAndWait([tachyon.sex, '는 무슨 생각을 하고 있을까?']);
        await era.printAndWait([
          '지금 이 순간 ',
          tachyon.sex,
          '의 웃음은 조소일까, 비웃음일까, 아니면 자신이 기대를 깬 것에 대한 기쁨의 미소일까?',
        ]);
        era.println();

        await tachyon.say_and_wait([
          '그렇다면……나의 친애하는 ',
          callname,
          '을(를) 위해.',
        ]);
        await tachyon.say_and_wait([
          '나는 영원히, 영원히 여기에 남아 자네와 함께하겠네.',
        ]);

        era.drawLine();

        await tachyon.print_and_wait(['가슴속 감정은 형용하기 어렵다.']);
        await tachyon.print_and_wait([
          '하지만 전체적으로는 환희라고 부르는 감정이 더 크겠지.',
        ]);
        era.println();

        await tachyon.print_and_wait([
          '언제나 자신의 예상을 뛰어넘는 사람은 이번에도 좋은 쪽으로 자신의 기대를 충족시켰다.',
        ]);
        await tachyon.print_and_wait([
          you.sex,
          '라면 타키온의 꿈을 위해 자신은 포기하겠다는 바보 같은 말을 할 줄 알았다.',
        ]);
        await tachyon.print_and_wait(['정말이지……']);
        await tachyon.print_and_wait([
          '그 가능성을 생각하는 것만으로도 ',
          tachyon.get_colored_name(),
          '은 맥이 빠진다.',
        ]);
        await tachyon.print_and_wait([
          '어째서 ',
          you.sex,
          '는 언제나 모르는 걸까?',
        ]);
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          '은 욕심 많은 ',
          tachyon.uma_sex_title,
          '다.',
        ]);
        await tachyon.print_and_wait([
          '둘 중 하나를 택하라고? 아니, ',
          tachyon.sex,
          '는 둘 다 원한다.',
        ]);
        await tachyon.print_and_wait([you.sex, '가 정말 그런 말을 했다면.']);
        await tachyon.print_and_wait([
          '행동이 강압적이더라도, 누군가의 곁에서 ',
          you.sex,
          '를 빼앗더라도.',
        ]);
        await tachyon.print_and_wait([
          tachyon.sex,
          '는 제멋대로 ',
          you.sex,
          '를 광속 너머, 둘만 지내는 세계로 낚아챘을 것이다.',
        ]);
        await tachyon.print_and_wait(['하지만……']);
        era.println();

        await tachyon.print_and_wait(['만약 이 사람이.']);
        await tachyon.print_and_wait([
          '이 순진하고 귀여운 ',
          callname,
          '이(가), 뜻밖에도……',
        ]);
        await tachyon.print_and_wait([
          '드물게 자신의 탐욕을, 자신의 욕망을 드러낸다면.',
        ]);
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          '을 곁에 두고 싶다는 욕망을.',
        ]);
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          '에게 꿈을 버리게 하고 싶다는 욕망을.',
        ]);
        era.println();

        await tachyon.print_and_wait([
          you.sex,
          '에게서 떨어질 수 없는 자신도 진심으로 그 뜻을 따를 수밖에 없다.',
        ]);
        await tachyon.print_and_wait([
          '지배하고 지배받는 관계는 언제 뒤집힌 걸까?',
        ]);
        await tachyon.print_and_wait(['아니, 뒤집힌 게 아니다……']);
        await tachyon.print_and_wait(['묶어 두는 동시에 묶여 있는 것이다.']);
        await tachyon.print_and_wait([
          '아아, 이것이 분명 사랑이라는 감정이겠지.',
        ]);
        await tachyon.print_and_wait([
          callname,
          '은(는) ',
          tachyon.get_colored_name(),
          '을 사랑하고, ',
          tachyon.get_colored_name(),
          '도 ',
          callname,
          '을(를) 사랑한다.',
        ]);
        await tachyon.print_and_wait([
          '초광속 너머의 세계 같은 건 없다. 한계 밖에도 아무것도 없다……',
        ]);
        await tachyon.print_and_wait([
          '있는 것은 서로 사랑하는 평범한 사람과 평범한 ',
          tachyon.uma_sex_title,
          '. 그것뿐이라네.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
