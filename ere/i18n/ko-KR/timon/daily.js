/**
 * @file 日常の地の文
 * @author 雞雞
 * @author 幽白書
 * @author Mr.E.
 * @author 阿格尼斯数码公司
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');
const { get_abbr_number } = require('#/utils/value-utils');

const { buff_colors, money_color } = require('#/data/color-const');

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {CharaTalk} minoru
   */
  good_morning(chara, you, minoru) {
    const buffer = [
      /** @author 雞雞 */
      {
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 엄지손가락을 치켜세웠다.',
          ]);
        },
      },
      {
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 과식했는지 배가 볼록 나와 있다.',
          ]);
        },
      },
      {
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 무언가를 열심히 읽고 있다.',
          ]);
        },
      },
      {
        // CFLAGNAME:65 = 成长阶段
        c: () => era.get(`cflag:${chara.id}:65`) < 5,
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 동급생들과 즐겁게 이야기하고 있다.',
          ]);
        },
      },
      {
        // CFLAGNAME:65 = 成长阶段
        c: () => chara.id !== 301 && !(era.get('cflag:301:48') < 3 * 48),
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 접수처에서',
            minoru.get_colored_name(),
            '에게 무언가를 문의하고 있다.',
          ]);
        },
      },
      /** @author 幽白書 */
      {
        // TALENTNAME:0 = 情感活动
        c: () => era.get(`talent:${chara.id}:0`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 주말에 TV에서 본 농담을 신이 나서',
            you.get_colored_name(),
            '에게 이야기하다가, 도중에 자기가 먼저 웃음을 터뜨렸다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 주말에 본 드라마 이야기를 하다가 다시 울음을 터뜨렸다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            '이(가) 보니,',
            chara.get_colored_name(),
            '은(는) 몇 명의',
            chara.uma_sex_title,
            '과(와) 둘러앉아 괴담을 나누는 모양이다. 잠시 후',
            chara.get_colored_name(),
            '의 얼굴이 창백해졌다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            '은(는)',
            chara.get_colored_name(),
            '의 머리카락에 작은 나뭇가지가 꽂힌 것을 발견했다.',
            you.get_colored_name(),
            '이(가) 떼어 줄 때까지,',
            chara.get_colored_name(),
            '은(는) 머리에 이물질이 붙은 줄도 몰랐다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            '은(는) 트레이너실에서 옷을 갈아입지 말라며',
            chara.get_colored_name(),
            '을(를) 꾸짖었지만, 상대는 왜 안 되는지 모르겠다는 표정이었다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 다른',
            chara.uma_sex_title,
            '과(와) 연애 소문을 이야기하는 모양이다.',
            you.get_colored_name(),
            '이(가) 지켜보니,',
            chara.get_colored_name(),
            '은(는) 연애 중인',
            chara.uma_sex_title,
            '에게 질문을 쏟아 내다가 상대가 새빨개져 도망갈 때까지 멈추지 않았다.',
          ]);
        },
      },
      {
        // TALENTNAME:1 = 自信程度
        c: () => era.get(`talent:${chara.id}:1`) === 1,
        h() {
          era.print([
            '트레이너실에 들어서자,',
            you.get_colored_name(),
            '은(는)',
            chara.get_colored_name(),
            '이(가) 평소처럼 자신을 비하하는 말을 들었다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:1`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            '이(가)',
            chara.get_colored_name(),
            '에게 인사하자, 영문도 모른 채',
            chara.get_colored_name(),
            '에게 위로받았다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:1`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            '이(가)',
            chara.get_colored_name(),
            '의 머리를 쓰다듬자, 어째서인지',
            chara.get_colored_name(),
            '은(는) 벌을 받는 줄 알고 겁먹은 채 눈을 감았다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:1`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 트레이닝장 한가운데 서서 세상의 왕이라도 된 듯 거만한 태도를 보이고 있다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:1`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 관중석에서 다른',
            chara.uma_sex_title,
            '의 달리기에 하나하나 점수를 매기며 주관적인 평가를 늘어놓고 있다.',
          ]);
        },
      },
      {
        c: () =>
          // CFLAGNAME:1 = 种族
          era.get(`cflag:${chara.id}:1`) > 0 &&
          era.get(`talent:${chara.id}:1`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 한숨을 쉬며 학원에 대등한 상대가 없다고 한탄한다.',
          ]);
        },
      },
      {
        // TALENTNAME:2 = 痛苦感受
        c: () => era.get(`talent:${chara.id}:2`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 넘어졌다. 고개를 들었을 때,',
            you.get_colored_name(),
            `은(는)${chara.sex}의 눈에 눈물이 고인 것을 보았다.`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 친구와 놀고 있었고, 벌칙은 딱밤인 모양이다. 진',
            chara.get_colored_name(),
            '이(가) 겁먹은 표정을 짓는 모습을,',
            you.get_colored_name(),
            '은(는) 목격했다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 친구들과 영화 이야기를 하고 있었다. 잔혹한 줄거리를 듣는 순간,',
            chara.get_colored_name(),
            '의 두 귀가 저절로 내려갔다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 심하게 넘어졌다.',
            you.get_colored_name(),
            '이(가) 걱정하고 있자,',
            chara.get_colored_name(),
            '은(는) 아무 일도 없다는 듯 몸을 털고 일어났다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 넘어졌다.',
            you.get_colored_name(),
            '이(가) 상처를 치료하다 고개를 들었을 때는 이미',
            chara.get_colored_name(),
            '은(는) 어느새 잠들어 있었다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 아픔을 참는 요령을 소개하고 있다……알쏭달쏭한 주제인데도 의외로 많은 사람이 진지하게 듣고 메모까지 하고 있다.',
          ]);
        },
      },
      {
        // TALENTNAME:3 = 恐惧感受
        c: () => era.get(`talent:${chara.id}:3`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 운동장 구석에 숨어 주변의 지나치게 쾌활한 사람들과 엮이고 싶지 않은 듯하다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 혼자 트레이닝장 그늘에 웅크려, 나뭇가지로 땅에 같은 소용돌이를 몇 번이나 그리고 있다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            '은(는) 자판기의 반사 유리를 향해 낮게 혼잣말하는',
            chara.get_colored_name(),
            '을(를) 발견했다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            '은(는)',
            chara.get_colored_name(),
            '이(가) 몰래 민들레 씨앗을 하늘로 불고, 돌아보며 장난에 성공한 듯 환하게 웃는 모습을 보았다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 훈련용 타이어를 거대한 굴렁쇠 삼아, 음정이 틀린 라이브 곡을 흥얼거리며 잔디 위로 밀고 달린다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 스포츠 음료를 안고 깡충깡충 걷고, 머리카락은 바람에 흩날린다.',
          ]);
        },
      },
      {
        // TALENTNAME:4 = 羞耻忍耐
        c: () => era.get(`talent:${chara.id}:4`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 트레이너실 커튼 뒤에서 책을 펴고 있다가 발소리가 들리자 곧바로 책을 덮어 가슴에 안았다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 자판기 투입구의 각도를 여러 번 고쳐, 동전이 똑바로 떨어져도 소리가 나지 않게 하고 있다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === 1,
        h() {
          era.print([
            '트레이너실 선반 뒤의 그림자가 살짝 흔들린다.',
            chara.get_colored_name(),
            '은(는) 그곳에서 옷을 갈아입고 있었고,',
            you.get_colored_name(),
            '에게 들키자 얼굴을 새빨갛게 물들였다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            '은(는) 갑자기',
            chara.get_colored_name(),
            '에게 업혀 트레이닝장으로 향했다. 바람처럼 달리는 쾌감을 느끼게 해 주겠단다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 뜀틀을 늘어놓고 트레이닝장의',
            chara.uma_sex_title,
            '들을 모아 한 번에 몇 개나 넘을 수 있는지 겨루기 시작했다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 트레이닝장 입구에 앉아 지나가는',
            chara.uma_sex_title,
            '에게 썰렁한 농담을 하나 시키고는, 하지 않으면 보내 주지 않는다.',
          ]);
        },
      },
      {
        // TALENTNAME:5 = 反感获取
        c: () => era.get(`talent:${chara.id}:5`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 지나가는',
            chara.uma_sex_title,
            `을(를) 노려보고, 시선을 받은 아이들은 겁에 질려 비명을 질렀다.`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 장애물 울타리에 스프레이로 낙서하다가,',
            you.get_colored_name(),
            '을(를) 발견하자 도발하듯 손끝의 페인트를 벽에 문질렀다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === 1,
        h() {
          era.print([
            '탈의실에서 싹둑싹둑 소리가 난다.',
            chara.get_colored_name(),
            '은(는) 교복 소맷부리에 구멍이 숭숭 나도록 자르고 있었고, 실밥이 바닥에 흩어져 있었다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === -1,
        h() {
          era.print([
            '어떻게 해야 할까? ',
            chara.get_colored_name(),
            '의 마음을 받아들여 연인이 될 것인가, 아니면 냉정하게 거절할 것인가?',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 스포츠 음료를 여러 병 안고 트레이닝장 옆에 서서, 땀에 젖은',
            chara.uma_sex_title,
            '을(를) 발견하면 내민다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 트레이닝장의 돌멩이를 줍고 있다. 넘어졌을 때 뾰족한 돌에 더 다치지 않도록.',
          ]);
        },
      },
      {
        // TALENTNAME:6 = 反抗意愿
        c: () => era.get(`talent:${chara.id}:6`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            '의 일정표는',
            chara.get_colored_name(),
            '이(가) 마커로 지우고,',
            chara.get_colored_name(),
            '이(가) 짠 일정으로 바꿔 놓았다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            '의 트레이너실에는,',
            chara.get_colored_name(),
            '이(가) 허락도 없이 두고 간 물건들이 넘쳐난다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === 1,
        h() {
          era.print([
            '미리 약속도 하지 않았는데,',
            chara.get_colored_name(),
            '은(는) 당연하다는 듯 오늘 방과 후에는',
            you.get_colored_name(),
            '에게 쇼핑에 동행하라고 말한다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            '은(는) 트레이너실 앞에서 몇 번이나 손을 들면서도 끝내 문을 두드리지 못하는',
            chara.get_colored_name(),
            '을(를) 발견했다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            '은(는) 갑자기 작동한 스프링클러에 놀라 엉덩방아를 찧고 멍하니 있다.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === -1,
        h() {
          era.print([
            '어떻게 해야 할까? ',
            chara.get_colored_name(),
            '의 마음을 받아들여 연인이 될 것인가, 아니면 냉정하게 거절할 것인가?',
          ]);
        },
      },
    ];
    get_random_entry(buffer.filter((t) => !t.c || t.c())).h();
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} is_sleep
   */
  select(chara, you, is_sleep) {
    if (is_sleep) {
      era.print([chara.get_colored_name(), '은(는) 깊이 잠들어 있다.']);
    } else {
      const buffer = [
        {
          h() {
            era.print([
              chara.get_colored_name(),
              '은(는)',
              you.get_colored_name(),
              '에게 인사했다.',
            ]);
          },
        },
        {
          h() {
            era.print([
              chara.get_colored_name(),
              '은(는)',
              you.get_colored_name(),
              '에게 가볍게 고개를 끄덕이며 언제든 움직일 수 있음을 알렸다.',
            ]);
          },
        },
      ];
      get_random_entry(buffer).h();
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_gn_sex_message: (chara, you) => [
    '바쁜 하루가 끝나고,',
    you.get_colored_name(),
    '은(는)',
    chara.get_colored_name(),
    '을(를) 학생 기숙사 입구까지 데려다주었다.',
    chara.get_colored_name(),
    '은(는) 머뭇거리며 함께 자지 않겠냐고 권했다……',
  ],
  gn_sex_yes: '받아들인다',
  gn_sex_no: '거절한다',
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async gn_sex_accept(chara, you) {
    await era.printAndWait([
      '주변의 따뜻한 시선 속에서, 뺨을 붉힌',
      chara.get_colored_name(),
      '은(는)',
      you.get_colored_name(),
      '의 팔을 잡고 천천히 걸어갔다……',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async gn_sex_force(chara, you, callname) {
    await era.printAndWait([
      '그 순간,',
      chara.get_colored_name(),
      '은(는) 표정이 달라지더니,',
      you.get_colored_name(),
      `을(를) 끼고 강제로 밖으로 걸어갔다.${chara.sex}의`,
      callname,
      '을(를) 무릎 꿇리고 성적 특훈을 시킬 생각인 모양이다!',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   */
  async gn_sex_reject(chara) {
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 실망한 채 돌아서서 학생 기숙사로 걸어갔다……',
    ]);
  },
  /**
   * @author 雞雞
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} c_awake
   * @param {boolean} y_awake
   */
  good_night_normal(chara, you, c_awake, y_awake) {
    if (c_awake && y_awake) {
      era.print([
        '바쁜 하루가 끝나고,',
        you.get_colored_name(),
        '은(는)',
        chara.get_colored_name(),
        '을(를) 학생 기숙사 입구까지 데려다준 뒤, 잘 자라는 인사를 나누고 각자 돌아갔다.',
      ]);
    } else if (y_awake) {
      era.print([
        '기분 좋게 잠든',
        chara.get_colored_name(),
        '을(를) 보자,',
        you.get_colored_name(),
        '은(는) 차마 깨울 수 없었다. 하는 수 없이 직접 학생 기숙사까지 데려다주고, 뻐근한 어깨를 주무르며 트레이너 기숙사로 돌아왔다.',
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        '은(는) 세상 모르고 잠들어, 몽롱한 와중에',
        chara.get_colored_name(),
        '의 작별 인사만 들은 듯했다.',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_study(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 트레이너실에서',
      chara.get_colored_name(),
      `의 공부를 지도해, 풀지 못하던 문제를${chara.sex}이(가) 풀 수 있게 했다.`,
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_prepare(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는)',
      chara.get_colored_name(),
      '과(와) 트레이너실에서 레이스를 준비했다. 다음 경기에 임하려면 충분한 각오가 필요하다.',
    ]);
  },
  /**
   * @author 雞雞
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} is_sleep
   */
  async talk(chara, you, is_sleep) {
    if (is_sleep) {
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 작게 코를 골며 편안하게 잠들어 있다.',
      ]);
    } else {
      // BASENAME:0 = 体力
      const low_stamina =
        era.get(`base:${chara.id}:0`) < 0.45 * era.get(`maxbase:${chara.id}:0`);
      // CFLAGNAME:48 = 育成回合计时
      const in_edu = era.get(`cflag:${chara.id}:48`) < 3 * 48;
      const buffer = [
        {
          c: () => low_stamina,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              '의 상태가 무척 피곤해 보인다. 이제 ',
              chara.get_colored_name(),
              '을(를) 쉬게 해줄 때가 된 것 같다.',
            ]);
          },
        },
        {
          c: () => low_stamina,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              '은(는) 간절한 눈빛으로',
              you.get_colored_name(),
              '을(를) 보며 쉬게 해 달라고 부탁한다.',
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === -2,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              '은(는) 안색이 어둡고 털까지 곤두서 있어, 의욕이 최악인 듯하다.',
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === -1,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              '은(는) 안색이 좋지 않고 준비 운동도 뜻대로 되지 않아, 의욕이 부족해 보인다.',
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === 0,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              '은(는) 표정이 꽤 굳어 있고 조금 긴장했다. 의욕은 평범한 듯하다.',
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === 1,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              '은(는) 즐겁게 코스에서 준비 운동을 하고 있다. 의욕이 좋아 보인다.',
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === 2,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              '은(는) 신이 나서 코스를 뛰어다닌다. 의욕이 넘친다.',
            ]);
          },
        },
        {
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              '은(는) 계속 편안한 표정을 짓고 있다.',
            ]);
          },
        },
      ];
      await get_random_entry(buffer.filter((t) => !t.c || t.c())).h();
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_gift(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 준 선물에,',
      chara.get_colored_name(),
      '은(는) 무척 기뻐했다.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_cook(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는)',
      chara.get_colored_name(),
      '과(와) 트레이너실에서 함께 요리했다. 오늘은 몸에 좋은 유기농 당근을 먹기로 했다.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_rest(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는)',
      chara.get_colored_name(),
      '과(와) 트레이너실에서 함께 쉬며 잠시 머릿속을 비웠다.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_game(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는)',
      chara.get_colored_name(),
      '과(와) 트레이너실에서 함께 게임을 하며 즐거운 시간을 보냈다.',
    ]);
  },
  bm_money_message: '얼마를 빌릴까요?',
  bm_time_message: '언제까지 빌릴까요?',
  get_bm_confirm_message: (amount, time, repay) => [
    '대출 금액',
    { ...get_abbr_number(amount), color: money_color },
    '우마 코인. 앞으로',
    { content: time.toLocaleString(), color: buff_colors[3] },
    '주 동안 매주',
    { ...get_abbr_number(repay), color: money_color },
    '우마 코인씩 상환. 총액',
    {
      ...get_abbr_number(repay * time),
      color: money_color,
    },
    '우마 코인. 수락할까요?',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} amount
   */
  async bm_confirm(chara, you, amount) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는)',
      chara.get_colored_name(),
      '에게서',
      { content: amount.toLocaleString(), color: money_color },
      '우마 코인을 빌렸다……',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_a_tree_hollow(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는)',
      chara.get_colored_name(),
      '과(와) 안뜰의 고목 구멍을 찾아갔다.',
    ]);
    await era.printAndWait([
      `${chara.sex}이(가) 나무 구멍을 향해 소리 지르는 모습을 보며,`,
      you.get_colored_name(),
      '은(는)',
      chara.get_colored_name(),
      '을(를) 최강으로 이끌겠다는 결심을 새롭게 다졌다.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_a_dating(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는)',
      chara.get_colored_name(),
      '과(와) 안뜰에서 데이트했다. 두 사람의 조합에 주변 학생들은 수군거림을 멈추지 못했다.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_r_lunch(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는)',
      chara.get_colored_name(),
      '과(와) 옥상에서 도시락을 먹으며 반찬을 교환했다.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_r_fishing(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는)',
      chara.get_colored_name(),
      '과(와) 강가에서 낚시했다. 많이 잡히기를.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_r_walking(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는)',
      chara.get_colored_name(),
      '과(와) 강가를 산책했다. 오늘도 기분이 좋다.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_arcade(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는)',
      chara.get_colored_name(),
      '과(와) 상점가의 오락실에 갔다. 인형 뽑기 집게야, 벌어지지 마라.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_drawing(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는)',
      chara.get_colored_name(),
      '과(와) 상점가에서 제비를 뽑았다. 좋은 것이 나올까?',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_ktv(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는)',
      chara.get_colored_name(),
      '과(와) 상점가의 노래방에 갔다. 산꼭대기의 친구들도 신이 났다!',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_movie(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는)',
      chara.get_colored_name(),
      '과(와) 상점가에서 영화를 보았다. 요즘 좋은 작품이 있을까?',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} dice 祈祷掷骰结果，0-1 之间的小数，越小越好
   */
  async o_c_pray(chara, you, dice) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는)',
      chara.get_colored_name(),
      '과(와) 신사에서 기도했다.',
    ]);
    if (dice < 0.5) {
      await era.printAndWait([
        dice < 0.05 ? '대길' : '길',
        '운세가 나왔다! 일행은 몹시 기분이 좋아졌다.',
      ]);
    } else {
      await era.printAndWait([
        '흉 운세가 나왔다! 일행은 하늘에서 떨어질 액운을 계속 경계하게 되었다.',
      ]);
    }
  },
  /**
   * @author Mr.E.
   * @param {CharaTalk} chara
   * @param {number} dice 祈祷掷骰结果，0-0.05 之间的小数，这里根据数值计算大成功的类型
   */
  async oc_great_luck(chara, dice) {
    // FLAGNAME:122 = 强奸抵抗
    if (dice < 0.0001 && era.get('flag:122') === 1) {
      await era.printAndWait('제비에는 알 수 없는 술식 재료가 적혀 있었다!');
    } else if (dice < 0.01) {
      await era.printAndWait([
        '눈앞에 형형색색의 문이 환영처럼 보이더니 갑자기 기분이 좋아졌다',
      ]);
    } else if (dice < 0.02) {
      await era.printAndWait([
        '한 줄기 바람이 불어,',
        chara.get_colored_name(),
        '의 몸 위로 넘어졌다?!',
      ]);
    } else if (dice < 0.03 && chara.sex_code !== 1) {
      await era.printAndWait([
        '한 줄기 바람이 불더니 옆에 있던 ',
        chara.get_colored_name(),
        '의 치마가 들춰졌다?!',
      ]);
    } else {
      await era.printAndWait(['한 줄기 바람이 불더니, 무려 우마 코인 150?!']);
    }
  },
  /** @param {CharaTalk} chara */
  oc_remove_train_debuff(chara) {
    era.print([
      '【',
      chara.get_colored_name(),
      '의 트레이닝이 더 순조로워진 듯하다】',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_restaurant(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는)',
      chara.get_colored_name(),
      '과(와) 역 앞에서 식사했다. 중식, 일식, 아니면 양식으로 할까?',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_dating(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는)',
      chara.get_colored_name(),
      '과(와) 역 앞에서 데이트했다. 손을 잡은 두 사람에게 부러운 시선이 쏟아졌다.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_shopping(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는)',
      chara.get_colored_name(),
      '과(와) 역 앞의 가게들을 둘러보았다. 작은 선물을 사자.',
    ]);
  },
  cl_new_year: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        '새해를 맞아,',
        you.get_colored_name(),
        '은(는)',
        chara.get_colored_name(),
        '과(와) 트레이너실에서 성대하게 축하했다.',
      ]);
    };
    f.title = '새해';
    return f;
  })(),
  cl_valentine: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        '오늘은 밸런타인데이.',
        you.get_colored_name(),
        '은(는)',
        chara.get_colored_name(),
        '과(와) 트레이너실에서 선물을 주고받았다.',
      ]);
      await era.printAndWait([
        '상대가 기뻐하는 얼굴을 보자,',
        you.get_colored_name(),
        '도 기뻐졌다.',
      ]);
    };
    f.title = '밸런타인데이';
    return f;
  })(),
  cl_palace: (() => {
    /**
     * @author 天马闪光蹄
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        '전당 주간은 달리기를 뜻하는',
        chara.uma_sex_title,
        '들에게 가장 중요한 축제 중 하나다.',
      ]);
      // CFLAGNAME:47 = 殿堂
      switch (era.get(`cflag:${chara.id}:47`)) {
        case 2:
          await era.printAndWait([
            you.get_colored_name(),
            '과(와)',
            chara.get_colored_name(),
            '의 뛰어난 성적 덕분에 두 사람은 당연한 주인공으로 초대받았다.',
          ]);
          // CFLAGNAME:48 = 育成回合计时
          if (era.get(`cflag:${chara.id}:48`) === 143 + 9) {
            await era.printAndWait([
              '시간이 되자,',
              chara.get_colored_name(),
              '은(는) 감출 수 없는 기쁨과 자부심을 안고 무대 중앙으로 걸어갔다.',
            ]);
          }
          await era.printAndWait([
            you.get_colored_name(),
            '은(는)',
            chara.sex,
            '이(가) 한 계단씩 단상에 올라 두 사람이 분투한 과거를 이야기하고 청중과 경험을 나누는 모습을 보았다.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '의 눈이 조금 흐려지고, 두 사람 사이에 있었던 일들이 저절로 떠올랐다……',
          ]);
          break;
        case 1:
          await era.printAndWait([
            you.get_colored_name(),
            '과(와)',
            chara.get_colored_name(),
            '은(는) 나란히 트레센 학원 대강당으로 향해 행사에 참가했다.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '의 담당은 귀와 꼬리가 무의식적으로 조금 처져, 별로 기운이 없어 보였다.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '은(는)',
            chara.get_colored_name(),
            '을(를) 보며 한숨을 쉬고, 조용히 한 손을',
            chara.sex,
            '의 어깨에 얹어 힘이 되어 주었다. 그 행동에,',
            chara.sex,
            '도 조금 기운을 되찾은 듯했다.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '과(와)',
            chara.get_colored_name(),
            '도 힘을 다했지만, 성적은 전당 입성에 미치지 못했다. 인생에는 그런 아쉬움도 있는 법이다.',
          ]);
          await era.printAndWait([
            '최후의 승자는 되지 못했지만, 축제 분위기에 휩싸여 마음은 조금 누그러졌다.',
          ]);
          break;
        default:
          // CFLAGNAME:65 = 成长阶段
          if (era.get(`cflag:${chara.id}:65`) === 5) {
            await era.printAndWait([
              `전당 주간은 현역${chara.uma_sex_title}들에게 중요한 날일 뿐 아니라,`,
              you.get_colored_name(),
              '같은 업무 관계자들에게도 바쁘고 긴장되는 하루다.',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              '과(와)',
              chara.get_colored_name(),
              '은(는) 행사장에 들어가 식의 내용을 꼼꼼히 기록했다……때때로 고개를 들어 서로를 바라보고는, 다시 필요한 정보에 몰두했다.',
            ]);
          } else {
            await era.printAndWait([
              '이 시기가 되면 트레센 학원에서는 여러 행사가 열린다. 그중 하나는 전당에 입성한 몇 명의',
              chara.uma_sex_title,
              '을(를) 초대해 며칠간 강연을 열고, 다른',
              chara.uma_sex_title,
              '와 트레이너들에게 경험을 전하는 것이다.',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              '과(와)',
              chara.get_colored_name(),
              '은(는) 동경하여 모인 인파 속에서 겨우 자리를 구해 앉았다.',
            ]);
            // CFLAGNAME:1 = 种族
            if (era.get(`cflag:${chara.id}:1`) > 0) {
              await era.printAndWait([
                '단상 위',
                chara.uma_sex_title,
                '의 차분하면서도 열정적인 목소리가 울리자,',
                you.get_colored_name(),
                '은(는)',
                chara.get_colored_name(),
                '이(가) 허리를 펴고 동경 어린 눈빛을 띠는 것을 알아차렸다……',
              ]);
            }
          }
      }
    };
    f.title = '전당 주간';
    return f;
  })(),
  cl_fans: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        '4월 팬 감사제에서,',
        you.get_colored_name(),
        '은(는)',
        chara.get_colored_name(),
        '과(와) 함께 팬들에게 재주를 선보였다.',
      ]);
    };
    f.title = '팬 감사제';
    return f;
  })(),
  cl_temple_fair: (() => {
    /**
     * @author 天马闪光蹄
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        '축제 기간에,',
        you.get_colored_name(),
        '은(는)',
        chara.get_colored_name(),
        '을(를) 초대해 여름 합숙장 근처의 장터에 놀러 가기로 했다.',
      ]);
      if (era.get(`cflag:${chara.id}:65`) === 5) {
        if (era.get(`love:${chara.id}`) >= 50) {
          await era.printAndWait([
            chara.sex,
            '은(는) 곧바로 수락했다. 두 사람은 직장인의 무거운 짐을 잠시 내려놓고 하루 종일 실컷 놀았다……',
          ]);
        } else {
          await chara.say_and_wait('데이트?');
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 화면의 알림을 보고 자신도 모르게 미소 지었다. 답장을 하려는 순간 새로운 메시지가 날아들었다.',
          ]);
          await chara.say_and_wait('그럼 그렇게 결정한 거야.');
          await era.printAndWait([
            '글 아래에는 유카타를 입고 살짝 꾸민',
            chara.sex,
            '의 셀카가 있었다.',
            you.get_colored_name(),
            '은(는) 자신도 모르게 숨을 멈췄다……',
          ]);
          await era.printAndWait('말할 것도 없이 좋은 추억이 될 것이다.');
        }
      } else if (era.get(`love:${chara.id}`) >= 50) {
        await era.printAndWait([
          chara.sex,
          '와 함께 끝없이 추락하고, 또 추락한다……',
        ]);
      } else {
        await era.printAndWait([
          chara.sex,
          '은(는) 재빨리',
          you.get_colored_name(),
          '에게 답장했다.',
          you.get_colored_name(),
          '이(가) 입구에서 먼저 기다리다 고개를 들자, 새 유카타를 입고 정성껏 꾸민',
          chara.sex,
          '을(를) 발견했다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 반응하기도 전에 그녀는 희미하게 미소 짓고,',
          you.get_colored_name(),
          '의 팔을 잡아 함께 걸어갔다……',
        ]);
        await era.printAndWait('두 사람은 즐거운 하루를 보냈다.');
      }
    };
    f.title = '축제';
    return f;
  })(),
  cl_halloween: (() => {
    /**
     * @author 天马闪光蹄
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      if (era.get(`cflag:${chara.id}:65`) === 5) {
        await era.printAndWait(['트레센의 축제는 종종 다른 곳과 다르다.']);
        await era.printAndWait([
          '예를 들면 오늘……',
          you.get_colored_name(),
          '은(는) 옆에서 조금 우스꽝스럽고 으스스하게 꾸민',
          chara.sex,
          '을(를) 보며 속으로 한숨을 쉬었다.',
        ]);
        await era.printAndWait(
          "원래는 아이들이 공들여 분장하고, 어른들은 집에서 사탕을 준비해 기다리면 되는 축제다. 학원 윗사람들은 '학생들과 하나가 되자'는 등의 이유로 교직원들에게도 분장을 권하고 밖에서 사탕을 나눠 주게 했으며, 이를 위해 반나절 휴가까지 주었다.",
        );
        await era.printAndWait(
          '어쩌면……그저 놀고 싶은 어른들의 핑계일지도 모른다.',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 그렇게 생각한 순간 옆에서 살기 어린 시선이 느껴져, 황급히 고개를 젓고',
          chara.get_colored_name(),
          '의 보폭에 맞췄다.',
        ]);
        await era.printAndWait('피곤한 밤이지만 그래도 재미있다.');
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 쉬고 있을 때, 문에서 갑작스러운 듯 아닌 듯 격렬한 노크 소리가 났다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 누구의 소행인지 대충 짐작했다. 문을 열고 기묘한 차림의',
          chara.get_colored_name(),
          '에게 놀란 척한 뒤,',
          chara.sex,
          '과(와) 함께 사탕을 받으러 나갔다……',
        ]);
        await era.printAndWait('가는 길에 이상한 것들을 여럿 본 듯하다.');
      }
    };
    f.title = '핼러윈';
    return f;
  })(),
  cl_christmas: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        '크리스마스가 다가오자,',
        you.get_colored_name(),
        '은(는)',
        chara.get_colored_name(),
        '과(와) 함께 산타클로스 차림으로 축하했다. 신나게 떠들던 기운이 다한 것은 밤이 되어서였다.',
      ]);
    };
    f.title = '크리스마스';
    return f;
  })(),
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async birthday_remote(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 멀리서',
      chara.get_colored_name(),
      '에게 생일 축하 인사를 전했다',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 무척 기뻐하고 있다.',
    ]);
  },
  /**
   * @author 阿格尼斯数码公司
   * @param chara
   * @param you
   */
  async birthday_normal(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      '을(를) 위해 성대한 생일 파티를 준비했다!',
    ]);
    const buffer = [
      {
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            '은(는) 생일의 주인공으로서 무척 기뻐 보인다',
          ]);
        },
      },
      {
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            '은(는) 흔들리는 촛불 앞에서 눈을 감고 올해의 생일 소원을 빌었다',
          ]);
        },
      },
      {
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            '은(는) 모두의 즐거움에 물들어 내내 미소 짓고 있다',
          ]);
        },
      },
      {
        c: () =>
          // TALENTNAME:11 = 社交态度
          era.get(`talent:${chara.id.id}:11`) === -1 &&
          // EXPNAME:20 = 过生日次数
          era.get(`exp:${chara.id}:20`) === 0,
        async h() {
          await era.printAndWait([
            '여러 모임에 자주 얼굴을 비추는',
            chara.get_colored_name(),
            '은(는)',
            you.get_colored_name(),
            `이(가)${chara.sex}을(를) 위해 생일 파티를 준비할 줄은 전혀 예상하지 못해, 놀라면서도 즐거운 하루를 보냈다`,
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === -1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            '그렇다 해도,',
            chara.get_colored_name(),
            '은(는)',
            you.get_colored_name(),
            '의 열의를 알게 되자,',
            you.get_colored_name(),
            `이(가)${chara.sex}을(를) 위해 준비한 생일 파티를 예상 밖의 전교 규모 생일 축제로 바꿔 버렸다……!`,
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === -1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            '그렇다 해도,',
            chara.get_colored_name(),
            '은(는) 스스로도 생일 파티의 나머지 절반을 준비하고 있었던 모양이다. 두 파티가 합쳐져 규모가 폭발적으로 커졌다……!',
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === 1 &&
          era.get(`exp:${chara.id}:20`) === 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            '은(는) 이런 파티가 있을 줄 몰랐는지, 모인 사람들을 보고 조금 겁먹었다',
          ]);
          if (era.get(`cflag:${chara.id}:1`) > 0) {
            await era.printAndWait('하지만 꼬리는 아주 빠르게 흔들리고 있다');
          } else {
            await era.printAndWait('하지만 무척 기뻐 보인다');
          }
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id.id}:11`) === 1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            '이번의',
            chara.get_colored_name(),
            '은(는) 뜻밖에도 어떤 상황에서도 주눅 들지 않고, 모두와 함께 생일 축하 노래를 불렀다',
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === 1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            '은(는) 여전히 조금 겁먹은 듯하지만, 선물을 받았을 때는 무척 기뻐 보였다',
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === 1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            '은(는) 말없이 생일 케이크를 먹고,',
            era.get(`cflag:${chara.id}:1`) > 0 ? '귀를 흔들며' : '미소 지으며',
            `주변 사람들이${chara.sex}의 옛이야기를 하는 것을 듣고 있다`,
          ]);
        },
      },
      {
        // TALENTNAME:7 = 坦率程度
        c: () =>
          era.get(`talent:${chara.id}:7`) === -1 &&
          era.get(`exp:${chara.id}:20`) === 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            "은(는) 이런 행사를 전혀 예상하지 못한 것이 분명했지만, '처음부터 알고 있었다'는 식으로 둘러대며 놀랐는지 아닌지 얼버무렸다",
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:7`) === -1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            `은(는) 생일 파티에서 마음에 들지 않는 점을 투덜거리면서도,`,
            era.get(`cflag:${chara.id}:1`) > 0
              ? '꼬리를 흔들며'
              : '입을 크게 벌리고',
            '케이크를 먹고 있다',
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:7`) === -1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            '이(가) 전에 정리해 둔,',
            you.get_colored_name(),
            '의 일 처리를 나무라는 백 가지 표현이 이제야 쓸모가 있었다',
          ]);
          await era.printAndWait(
            '다만 이번 생일 행사는 잘 준비했다며 뜻밖에 칭찬했다',
          );
        },
      },
    ];
    await get_random_entry(buffer.filter((t) => !t.c || t.c())).h();
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async load_talk(chara, you) {
    // CFLAGNAME:81 = 妊娠阶段
    // CFLAGNAME:57 = 扩展变量
    // EXPNAME:117 = 生产次数
    if (
      era.get(`cflag:${chara.id}:81`) > 2 &&
      !era.get(`cflag:${chara.id}:57`)?.report
    ) {
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 배를 쓰다듬으며 절망한 눈으로 멀어지는',
        you.get_colored_name(),
        '을(를) 배웅했다.',
      ]);
    }
    if (
      era.get(`cflag:${chara.id}:81`) <= 2 &&
      !era.get(`exp:${chara.id}:117`) > 0
    ) {
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 젖병을 들고 절망한 눈으로 멀어지는',
        you.get_colored_name(),
        '을(를) 배웅했다.',
      ]);
    }
  },
};
