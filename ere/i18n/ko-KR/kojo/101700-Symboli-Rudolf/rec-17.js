/**
 * @file シンボリルドルフ - 募集
 * @author 露娜俘虏
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} luna
   * @param {CharaTalk} you
   */
  async rec_start(luna, you) {
    await era.printAndWait(
      `${you.name}은(는) 머리를 긁적이며 욕실에 고인 물을 한참 바라보다가 두 팔을 벌렸다.`,
    );
    await era.printAndWait(
      `이른 아침부터 욕실의 모든 설비가 멈춰 버렸다. ${you.name}은(는) 알고 있었다. 시간과 노력을 들인다고 해서 순순히 작동하리라는 보장은 없다는 것을.`,
    );
    era.printButton('「차라리 일하러 가는 게 낫겠어.」', 1);
    await era.input();

    await era.printAndWait(
      `${you.name}은(는) 미련 없이 문을 닫고 가방을 챙겨 트레센으로 향했다.`,
    );
    era.println();

    await era.printAndWait(
      `또다시 새 학기다. ${you.name}은(는) 생각했다. 어찌 됐든 트레센도 작년의 우울함에서 벗어나야 할 때라고.`,
    );
    await era.printAndWait('새로운 학기, 새로운 희망, 새로운 이야기.');
    await era.printAndWait(
      `역에서 전차를 기다리던 중, ${you.name}은(는) 승강장에 놓인 신문을 집어 들었다. 늠름한 우마무스메의 모습 옆에 커다란 여섯 글자가 적혀 있었다.`,
    );
    await era.printAndWait('심볼리 루돌프!');
    await era.printAndWait(
      `${you.name}은(는) 휘파람을 불며 신문을 옆구리에 끼고 전차에 올랐다.`,
    );
    await era.printAndWait(
      '——그 심볼리 루돌프가 출주한다. 이미 최근의 화제를 독차지하고 있는 소식이었다.',
    );
    await era.printAndWait(
      '일하는 자리든 한가롭게 잡담하는 자리든, 사람들이 모인 곳이라면 어디에서나 열띤 이야기가 들렸다.',
    );
    await era.printAndWait('???「학생회장, 【황제】 심볼리 루돌프!」');
    await era.printAndWait(
      '???「과연 누가 그 황제의 트레이너가 될 수 있을까?」',
    );
    await era.printAndWait(
      `???「애초에 ${luna.sex}에게 트레이너가 필요하기는 해?」`,
    );
    await era.printAndWait(
      '???「심볼리 가문의 최고 걸작이잖아. 데뷔 전부터 온 세상의 주목을 받는 스타라고. 하아, 정말 엄청난 거물이야!」',
    );
    await era.printAndWait(
      `그런 이야기를 들을 때마다 ${you.name}의 가슴은 자부심으로 가득 찼다. 그 황제의 위명이 ${you.name}와(과) 깊은 관련이 있는 듯한 기분이었다.`,
    );
    await era.printAndWait(
      `실제로 ${you.name}은(는) 심볼리 가문에서 일한 적이 있다. 더 정확히 말하면, 한동안 심볼리 가문의 보조 트레이너로 일했다.`,
    );
    await era.printAndWait(
      `높으신 분들 뒤에서 잡일을 할 뿐, 이름을 알릴 기회는 없었다. 하지만 그 시절 ${you.name}은(는) 심볼리 가문의 젊은 우마무스메들과 가까워졌다.`,
    );
    await era.printAndWait(
      `그중에서도 루나라는 아이는 ${you.name}와(과) 그림자처럼 붙어 다녔다.`,
    );
    await era.printAndWait(
      `심볼리 가문을 찾지 않은 지도 오래되었다. 그래도 그때의 인연 덕분에 ${you.name}도, 트레센에 있는 심볼리 가문 사람들도 서로에게 각별한 친근감을 느꼈다.`,
    );
    if (era.get('flag:当前声望') < 500) {
      await era.printAndWait(
        `그 시절을 떠올리자 ${you.name}은(는) 기분이 한결 밝아졌다. 언젠가는 이토록 강한 우마무스메와 어깨를 나란히 하고 중앙에서 이름을 떨치고 싶었다.`,
      );
    } else {
      await era.printAndWait(
        `그 터무니없던 나날에 대한 회상을 멈추고 ${you.name}은(는) 하늘을 향해 길게 숨을 내쉬었다. 자부심 아래 숨어 있던 불안을 털어 내듯이. 새 학기가 시작된다. 이번 회차의 담당은 필연적으로 심볼리 루돌프와 겨뤄야 할 것이고, 앞으로 곳곳에서 발목을 잡힐 터였다. 좌절하더라도 담담하게 나아가 주기를 바랐다.`,
      );
    }
    era.println();

    await era.printAndWait(
      `학원에 도착하니 사람이 너무나 적었다——아니, 아예 문이 닫혀 있었다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 조금 일찍 왔다는 사실을 깨달았다…… 아니, 지나치게 일렀다. 차라리 욕실과 씨름하는 편이 나았을지도.`,
    );
    await era.printAndWait(
      `그래도 모처럼 시간이 생겼으니 조금 둘러보자. ${you.name}은(는) 담을 넘어 학원 안으로 뛰어들었다.`,
    );
    await era.printAndWait('학원은 고요했다.');
    await era.printAndWait(
      `${you.name}은(는) 호기심에 고개를 들고 주위를 살폈다. 평소 이 시간에 교사 안으로 들어오는 사람은 없을 것이다. 정상적인 시간대의 트레센은 언제나 북적였다.`,
    );
    await era.printAndWait(
      `하지만 어딘가 이상했다. ${you.name}은(는) 누군가 우는 소리를 들은 것 같았다.`,
    );
    await era.printAndWait(
      `어째서인지 ${you.name}은(는) 어느 때보다 초조해졌다.`,
    );
    await era.printAndWait(`${you.name}은(는) 자신도 모르게 몸을 움직였다.`);
    await era.printAndWait('영혼 깊은 곳의 무언가가 당신을 움직이고 있었다.');
    await you.say_and_wait('서둘러야 해!', true);
    await you.say_and_wait('그 아이를 찾아야 해!', true);
    await era.printAndWait(
      `${you.name}은(는) 인적 없는 곳으로 달려가 숨이 턱에 차서야 깨달았다. 이곳은 개인 트레이닝장이었다.`,
    );
    await era.printAndWait('그런 건 아무래도 좋다——!');
    await era.printAndWait(
      `${you.name}은(는) 안으로 뛰어들어 반쯤 열린 문을 밀었다.`,
    );
    era.println();
    await era.printAndWait(
      `한 우마무스메가 몸을 웅크린 채 쓰러져 있었다. ${luna.sex}는 머리를 감싸 쥐고 극심한 고통에 시달리는 듯했다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 말을 걸려 했지만 두 발이 땅에 못 박힌 듯 움직이지 않았다.`,
    );
    await era.printAndWait(
      `분명 심볼리 루돌프였다——${you.name}은(는) 입을 벌렸다. 목이 바짝 말랐다.`,
    );
    await era.printAndWait(
      `위대한 이름과 드높은 명성 아래, ${
        luna.sex
      }는 여전히 한창 피어나는 ${luna.teen_sex_title}에 불과했다.`,
    );
    await era.printAndWait(`동시에 ${you.name}은(는) 크게 동요했다.`);
    await era.printAndWait('누가 믿을 수 있을까. 비할 데 없는 「황제」가——');
    await era.printAndWait('빈틈없다고 알려진 심볼리가——');
    await era.printAndWait(
      '모든 우마무스메가 「에덴」에서 달리기를 바라는 존재가——',
    );
    await era.printAndWait(
      `아무도 없는 곳에서 울며 구토하고 있다니. 하지만 ${you.name}을(를) 더욱 동요하게 한 것은……`,
    );
    era.printButton('「너는——」', 1);
    await era.input();

    await era.printAndWait(
      `${you.name}은(는) 자신이 미쳤다고 생각했다. 하지만 ${you.name}은(는) 알고 있었다. 그 아이를 잊는 일은 절대로 있을 수 없다는 것을.`,
    );
    await era.printAndWait('——성미가 급해 어린 사자처럼 이를 드러내던 아이.');
    await era.printAndWait(
      '——절대로 지지 않고, 의기양양하게 당신을 산으로 바다로 이끌던 아이.',
    );
    await era.printAndWait(
      '——제멋대로이면서도 사랑스럽고, 영원히 잊지 않겠다고 선언하던 아이.',
    );
    await era.printAndWait(
      `${you.name}의 영혼에는 ${luna.sex}의 이름이 새겨져 있었다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) ${luna.sex}의 이름을 결코 잊지 않는다.`,
    );
    era.printButton('「루나!」', 1);
    await era.input();

    await era.printAndWait(
      `쇠약해진 ${luna.teen_sex_title}이(가) 고개를 들어 당신을 바라보았다.`,
    );
    await luna.say_and_wait(`……${you.actual_name}……？`);
    await era.printAndWait(
      `말을 마치자 ${luna.sex}는 더 버티지 못하고 비틀거리며 바닥으로 쓰러졌다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 스스로도 놀랄 만큼 빠르게 달려가 ${luna.sex}를 받아 안았다.`,
    );
    await luna.say_and_wait('정말 그대였구나……');
    await era.printAndWait(`그 말을 끝으로 ${luna.sex}는 깊이 잠들었다.`);

    era.drawLine();
    await era.printAndWait(
      `심볼리 루돌프——그렇게 불리기 전, ${luna.teen_sex_title}의 이름은 루나였다.`,
    );
    await era.printAndWait(
      `${luna.sex}는 달리는 것을 좋아했고, 단것을 좋아했고, 빈둥거리며 보내는 시간을 좋아했다.`,
    );
    await era.printAndWait(
      `가문의 기대를 짊어지기 전, ${luna.sex}는 심볼리 가문의 골칫덩이이자 모두의 사랑을 독차지하는 귀한 자제였다.`,
    );
    await era.printAndWait(
      '하지만 나이가 들수록 루나의 압도적인 실력과 숨 막힐 듯한 예리함에 심볼리 가문은 놀라움과 기쁨을 감추지 못했다.',
    );
    await era.printAndWait(
      `${luna.sex}는 그토록 강했다. 온갖 욕망을 충족할 수 있을 만큼.`,
    );
    await era.printAndWait('루나는 기억한다. 어느 날부터 삶이 달라졌다.');
    await era.printAndWait(
      `${luna.sex}는 이제 루나가 아니다. 앞으로 ${luna.sex}는 심볼리 루돌프다.`,
    );
    await era.printAndWait(
      '한 사람이 어떻게 느닷없이 다른 사람이 될 수 있단 말인가.',
    );
    await era.printAndWait(
      `루나는 밤낮으로 고민했다. 그러던 어느 날, ${luna.sex}는——`,
    );
    era.printButton('「루나…… 루나……!」', 1);
    await era.input();

    await era.printAndWait(
      `${you.name}의 부름이 마침내 닿은 것일까. 루나는 천천히 눈을 떴다.`,
    );
    await era.printAndWait(
      `${luna.sex}는 씁쓸하게 웃으며 자신이 망가져 버린 걸까 생각했다. 어떻게 ${
        you.actual_name_with_title
      }의 목소리가 들리는 걸까.`,
    );
    await era.printAndWait(
      `${you.sex}는 트레센에 있다. 하지만 그때부터 자신은 더 이상 ${you.sex}를 끌어들이지 않겠다고 다짐했었다.`,
    );
    await era.printAndWait(
      `그러나 곧 ${luna.sex}는 예리하게 알아차렸다. 이곳은 꿈이 아니다.`,
    );
    era.drawLine();
    era.printButton('「루나, 정말 너야?」', 1);
    era.printButton('「루나, 네가 심볼리 루돌프였다고?!」', 2);
    await era.input();
    await era.printAndWait(
      `품 안의 루나를 바라보며 ${you.name}은(는) 자신도 모르게 물었다.`,
    );
    await luna.say_and_wait('드디어 내 곁에 와 주었구나.');
    await era.printAndWait(
      `루나는 체념한 듯 씁쓸하게 미소 지었다. 그러고는 기쁨의 눈물을 흘렸다.`,
    );
    await luna.say_and_wait(
      '조금만 더 일찍 와 주었다면, 나는…… 돌아가. 오늘 일은 아무에게도 말하지 말아 줘. 황제는 나약해서는 안 되니까.',
    );
    await era.printAndWait(
      `${you.name}은(는) 루나의 말을 다 듣기도 전에, ${luna.sex}는 당신을 이곳에서 내보냈다.`,
    );
    await era.printAndWait(
      `${you.name}에게는 분명했다. ${luna.sex}도 당신을 알아본 것이다.`,
    );
  },
  /**
   * @param {CharaTalk} luna
   * @param {CharaTalk} you
   */
  async rec_end(luna, you) {
    await era.printAndWait(
      `그 뒤 며칠 동안 ${you.name}은(는) 넋이 나간 채 지냈다.`,
    );
    await era.printAndWait(
      `루나가 당신을 만나고 싶어 하지 않는다면, ${luna.sex}를 찾아갈 수는 없었다.`,
    );
    await era.printAndWait(
      `지금까지 ${you.name}은(는) ${luna.sex}의 뜻을 거스르지 못했다. 어른이 되고 트레이너가 되어서도, ${luna.sex}가 한마디만 하면 무엇이든 고분고분 따랐다.`,
    );
    await era.printAndWait(
      `${you.name}이(가) 마음을 잡지 못하고 있던 중, 학생회 간사가 기세 좋게 트레이너 사무실로 뛰어들어 왔다.`,
    );
    await era.printAndWait(
      `${luna.sex}는 ${you.name}을(를) 찾아온 것이다. 정확히 말하면, ${luna.sex}는 당신에게 온 편지를 가지고 있었다.`,
    );
    await era.printAndWait('간사「학생회장 심볼리 루돌프의 직접 지명입니다.」');
    await era.printAndWait(
      `${luna.sex}는 눈에 띄게 흥분한 채 편지를 그대로 ${you.name}의 손에 건넸다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 억지웃음을 지으며 이 『뜨거운 감자』를 받아 들었다.`,
    );
    await era.printAndWait(
      `임무를 마친 간사는 바람처럼 달려 나갔다. ${you.name}은(는) 적당히 웃어 보이고 조퇴했다.`,
    );
    await era.printAndWait(
      `그리고 ${you.name}은(는) 며칠 동안 돌아오지 않았던 집으로 최대한 서둘러 돌아가 문을 단단히 닫았다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 집 가장 안쪽의 욕실로 달려가 등으로 문을 필사적으로 막았다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 손이 계속 떨리는 탓에 한참 애를 쓴 끝에야 겨우 봉투를 뜯었다.`,
    );
    await era.printAndWait(
      `${you.name}이(가) 편지지를 꺼냈다——새하얀 종이에는 짧은 말 하나만 커다랗게 적혀 있었다.`,
    );
    await era.printAndWait('「살려 줘」', {
      align: 'center',
      color: luna.color,
      fontSize: '3rem',
      fontWeight: 'bold',
      isParagraph: true,
    });
    await era.printAndWait(
      `${you.name}은(는) 힘없이 바닥에 주저앉았다. 욕실을 청소하지 않은 탓에, 얼떨결에 새로 산 바지를 고인 물에 담그고 말았다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 알고 있었다. 거절할 권리는 없었다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 알 수 없었다. 심볼리 루돌프——루나에게 무슨 일이 생긴 걸까.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 또한 알고 있었다. 루나의 부탁을 자신은 결코 거절하지 않을 것이다.`,
    );
    await era.printAndWait('앞에 어떤 지옥이 기다리고 있더라도.');

    era.drawLine();
    await era.printAndWait([
      ' ',
      luna.get_colored_actual_name(),
      '와(과)의 계약에 성공했다.',
    ]);
  },
};
