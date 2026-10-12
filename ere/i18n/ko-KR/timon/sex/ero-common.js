/**
 * @file 調教の地の文 - 通常
 * @author O口口口口口
 * @author 雞雞
 * @author 天马闪光蹄
 * @author 黑衣剑士-星爆气流斩准备就绪
 * @author 幽白書
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { buff_colors } = require('#/data/color-const');
const { medicine_enum } = require('#/data/ero/item-const');
const { motion_enum, towards_enum } = require('#/data/ero/part-const');

module.exports = {
  /** コミュニケーション系 */
  /**
   * @author O口口口口口
   * @param {CharaTalk} chara 現在の視点キャラ
   * @param {boolean} is_attacker 現在の視点キャラが攻撃側か
   */
  async after_refused(chara, is_attacker = true) {
    if (is_attacker) {
      await chara.say_and_wait("역시, 안 되는 건가……");
      await chara.print_and_wait(
        "분위기에 휩쓸려 입 밖에 낸 저속한 요구에도 역시 한계는 있는 모양이다……",
      );
      await chara.print_and_wait(
        "이렇게 몸속은 아직 술렁거리는 채로, 오늘은 여기서 끝낼 수밖에 없다.",
      );
      await chara.print_and_wait("다만……");
    } else {
      await chara.print_and_wait("그런 눈으로 보지 말아 줬으면 좋겠다……");
      await chara.print_and_wait(
        "뭐든 이쪽이 따를 줄 아는 건가!",
      );
      await chara.print_and_wait("……정말이지");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async kiss(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait("이럴 때는 역시 그걸 하고 싶어진다……");
      await attacker.print_and_wait([
        "시선이 향하는 곳을 알아차린 걸까. 눈을 가늘게 뜬 ",
        a_call_d,
        "이(가) 발끝으로 서서 먼저 입술을 내밀었다……",
      ]);
      await defender.say_and_wait("쪽……❤️");
      await attacker.print_and_wait("마음이 놓이는 달콤한 맛……");
      await attacker.print_and_wait(
        "이쪽이 코로 내쉬는 숨이 상대의 매끈한 목덜미에 그대로 닿자, 예쁜 속눈썹이 그에 반응하듯 깜빡인다……",
      );
      await attacker.print_and_wait(
        "……입술을 떼고 싶지 않다…… 이대로, 욕심을 내서 붙어 있고 싶다……",
      );
    } else {
      await defender.say_and_wait("하아……하아……❤️");
      await defender.print_and_wait(
        "이제 만족해 줘도 좋을 텐데……집요하게 따라오는 입술……",
      );
      await defender.print_and_wait(
        "코도 입술도……숨 쉴 통로를 욕심 많은 상대가 거의 틀어막고, 아랫배가 욱신거릴 만큼 달콤한 냄새를 짓궂게 머릿속으로 불어 넣는다……",
      );
      await defender.print_and_wait(
        "음…… 이제 혼자 숨 쉬는 외로움에 익숙해질 수 없게 되면, 책임져 줘야 해……❤️",
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async french_kiss(attacker, defender, is_first) {
    if (is_first) {
      await attacker.print_and_wait("입술 앞에서 멈출 생각은 없었다.");
      await defender.say_and_wait("응——?");
      await attacker.print_and_wait([
        `입맞춤 속에서 ${attacker.phy_sex_title}의 팔에 갇혀 가는 `,
        defender.get_colored_name(),
        "은(는) 당황해서 ",
        attacker.get_colored_name(),
        "의 이름을 부르려 했던 모양이다. 하지만 거세게 얽혀 드는 혀가 새어 나온 목소리를 달콤하게 가라앉은 소리로 바꾸고 만다.",
      ]);
      await attacker.print_and_wait(
        "입술이 겹친 정면, 더욱 깊이 기울이는 옆얼굴, 그리고 마지막에는……뒤로 두른 팔로 힘 풀린 연인을 안아 올려 내려다보며 얽히는 혀.",
      );
      await defender.say_and_wait("……숨을, 못 쉬겠어……", true);
    } else {
      await defender.print_and_wait("머리가 둥둥 떠다니는 것 같아……");
      await defender.print_and_wait(
        "포옹, 그리고——얼마나 지났는지 알 수 없을 만큼 길게, 혀까지 욕심내어 파고드는 입맞춤……",
      );
      await defender.print_and_wait(
        "도대체 얼마나 지났을까……가끔 입술을 떼고 쉬어도 끈적한 은빛 실로 이어진 채라, 이 입술은 처음부터 떨어지면 안 되었던 것 같다……얼굴까지 뜨겁다.",
      );
      await defender.print_and_wait("하지만……싫지는 않아……");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} success いちゃつきが成功したか
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async lure(attacker, defender, success, a_call_d) {
    if (success) {
      await attacker.print_and_wait([a_call_d, "이(가) 흥분하기 시작했다……"]);
    } else if (era.get(`tcvar:${defender.id}:发情`)) {
      await attacker.print_and_wait([
        a_call_d,
        "은(는) 더는 흥분할 수 없는 것 같다……",
      ]);
    } else {
      await attacker.print_and_wait("별로 효과가 없는 것 같다……");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async talk(attacker, defender, a_call_d) {
    if (
      !era.get(`cflag:${attacker.id}:种族`) &&
      era.get(`cflag:${defender.id}:种族`) > 0 &&
      Math.random() < 0.5
    ) {
      await attacker.say_and_wait([
        defender.uma_sex_title,
        "의 귀는 어느 동물과 비슷하게 감정을 표현하는 걸까.",
      ]);
      await attacker.print_and_wait("못마땅한 눈초리를 받았다.");
      await attacker.say_and_wait("……아…… 예를 들면, 고양이의 귀가 뜨거울 때는……");
      attacker.print("엉덩이를 걷어차였다.");
    } else if (attacker.sex_code !== 1 || defender.sex_code !== 1) {
      await attacker.say_and_wait("나중에 아이는 몇 명이 좋을까……");
      await attacker.print_and_wait([
        "맞은편의 ",
        a_call_d,
        "의 아랫배를 보다가 속마음이 새어 나왔다.",
      ]);
      await attacker.print_and_wait("……걷어차이지도 않았다…… 대답도 없다.");
      attacker.print("……그런데 얼굴은 몹시 붉다.");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async switch(attacker, defender, d_call_a) {
    await defender.say_and_wait("어……?");
    await defender.print_and_wait([
      "바로 곁에 있던 ",
      d_call_a,
      "이(가) 갑자기 거리를 벌렸다. 아래에 눌려 있던 ",
      defender.get_colored_name(),
      "은(는) 눈을 깜빡이며 곧바로 상황을 이해하지 못한다.",
    ]);
    await defender.print_and_wait("다음 순간, 눈앞의 천지가 뒤집힌다……");
    await attacker.say_and_wait("이제부터 네 차례야.");
    await defender.print_and_wait([
      "양팔을 벌린 ",
      d_call_a,
      "이(가) 격려하듯 웃어 보인다.",
    ]);
    attacker.say("……마음대로 해도 돼.");
  },
  /**
   * @author O口口口口口
   * @author 幽白書
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続の抵抗の初回か
   * @param {boolean} success 抵抗が成功したか
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async resist(attacker, defender, is_first, success, a_call_d) {
    if (era.get('flag:惩戒力度') === 3) {
      // @author 幽白書
      if (attacker.id === 0) {
        // 孕袋が主人に抵抗
        if (success) {
          // 抵抗成功、孕袋の主視点
          await attacker.print_and_wait("임신주머니 주제에 주도권을 빼앗으려 한다");
          await attacker.print_and_wait("그런 불경함도 주인은 말없이 허락해 주었다");
          await attacker.print_and_wait("음란한 암가축에게 베푸는 은총일까?");
          await attacker.print_and_wait(
            "아니면……스스로 욕망에 빠지는 모습을 조금 더 구경하고 싶을 뿐일까?",
          );
        } else {
          // 抵抗失敗、孕袋の主視点
          await attacker.print_and_wait(
            "임신주머니인 이상, 복종과 순종은 정신 깊은 곳에 새겨진 각인일 텐데",
          );
          await attacker.print_and_wait("어째서 그럼에도 저항하려 했을까?");
          await attacker.print_and_wait(
            "아직 타락하고 싶지 않다는 가느다란 실이 남아 있었던 걸까?",
          );
          await attacker.print_and_wait(
            "아니면……억지로 굴복당하는 쾌감을 더욱 깊이 맛보고 싶었을 뿐일까?",
          );
        }
        // 主人が孕袋に抵抗
      } else if (success) {
        // 抵抗成功、孕袋の主視点
        await defender.print_and_wait(
          "아무리 저항해도 마음 깊은 곳의 복종을 이길 수 없다",
        );
        await defender.print_and_wait(
          "주인의 동작 하나에 저항 따위는 깨끗이 놓아 버린다",
        );
        await defender.print_and_wait(
          "주도권을 허락받은 것도 임신주머니인 자신이 복종의 본성을 깨닫게 하기 위해서겠지……",
        );
      } else {
        // 抵抗失敗、主人の主視点
        await attacker.print_and_wait([
          a_call_d,
          "이(가) 몸을 흔들며 욕망과 육체에 빠져드는 모습",
        ]);
        await attacker.print_and_wait(
          "한때 트레이너로서 지녔던 긍지 따위는 이제 찾아볼 수 없다",
        );
        await attacker.print_and_wait("조금만 더 지켜보자, 아주 조금만");
        await attacker.print_and_wait([
          "지도자여야 할 ",
          a_call_d,
          "이(가) 어디까지 타락할 수 있는지를",
        ]);
      }
    } else {
      // @author O口口口口口
      if (is_first) {
        await defender.say_and_wait("움직이지 않는 게 좋을 거야.");
        await attacker.print_and_wait([
          attacker.get_colored_name(),
          "에게 올라탄 ",
          a_call_d,
          "이(가) 입술을 핥으며 어딘가 낯선 표정을 짓고 있다.",
        ]);
        await attacker.print_and_wait(
          "일방적으로 아래에 눌리는 것 따위……쉽게 익숙해질 리 없잖아!",
        );
        await attacker.print_and_wait('……');
      }
      if (success) {
        await attacker.say_and_wait("움직이지 않는 게 좋을 거야.");
        await attacker.print_and_wait([
          "조금 전의 말을 눈앞의 ",
          a_call_d,
          "에게 그대로 돌려준다. 당황한 얼굴을 보며, 지금 ",
          attacker.get_colored_name(),
          "의 얼굴에는 의기양양한 웃음이 가득하다.",
        ]);
      } else {
        const a_race = era.get(`cflag:${attacker.id}:种族`);
        const d_race = era.get(`cflag:${defender.id}:种族`);
        if (a_race === 0 && d_race > 0) {
          await attacker.say_and_wait(
            ["역시 인간은 ", defender.uma_sex_title, "에게는 이길 수 없어……"],
            true,
          );
        } else {
          await attacker.say_and_wait(
            ["역시 나는 ", a_call_d, "에게는 이길 수 없어……"],
            true,
          );
        }
        await attacker.print_and_wait([
          "손쉽게 다시 아래로 밀려나며, ",
          attacker.get_colored_name(),
          "의 머릿속에 그런 한 문장이 스쳤다.",
        ]);
        if (a_race === 0 && d_race === 0) {
          await attacker.say_and_wait(
            [
              "이상하잖아, 너도 ",
              defender.uma_sex_title,
              "잖아!",
            ],
            true,
          );
        } else if (a_race > 0 && d_race === 0) {
          await attacker.say_and_wait(
            ["이상하잖아, 내가 바로 ", attacker.uma_sex_title, "인데!"],
            true,
          );
        } else if (a_race > 0 && d_race > 0) {
          await attacker.say_and_wait(
            ["이상하잖아, 나도 ", attacker.uma_sex_title, "인데!"],
            true,
          );
        }
        await attacker.say_and_wait("크읏……", true);
      }
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async gargle(attacker, defender, a_call_d, d_call_a) {
    await era.printAndWait([
      attacker.get_colored_name(),
      '/',
      defender.get_colored_name(),
      '「',
      { color: attacker.color, content: "쪽……" },
      { color: defender.color, content: "응……!?" },
      '」',
    ]);
    await era.printAndWait(
      "서로에게 푹 빠진 두 사람의 입술이 다시 가까워졌다가, 닿기 전에 떨어졌다.",
    );
    await era.printAndWait("당황해서 눈을 연신 깜빡이고, 머리를 긁적이며 시선을 피한다……");
    await attacker.say_and_wait([a_call_d, '……']);
    await defender.say_and_wait([d_call_a, '……']);
    await era.printAndWait("타타타타……");
    await era.printAndWait("꿀꺽꿀꺽꿀꺽————");
    await era.printAndWait(
      "그리고 세면대 앞에는 햄스터처럼 볼을 부풀린 채 얼굴을 붉힌 바보 커플이 나란히 서 있었다.",
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async wipe_body(attacker, defender) {
    await defender.say_and_wait("아직……계속하는 거야……❤️");
    await attacker.print_and_wait(
      "본래 매끄러웠을 상대의 피부에 지금은 달콤한 흔적이 흩어져 있다……너무 심했을지도 모른다……",
    );
    await attacker.print_and_wait('……');
    await attacker.print_and_wait(
      "……상대의 몸에 직접 묻힌 저속한 냄새를 전부 빨아들인 꼴사나운 수건을 손에 쥐면, 조금이라도 공감할 줄 아는 사람이라면 역시 손길을 늦추고 싶어질 것이다.",
    );
    await attacker.print_and_wait("……그렇겠지……?");
  },
  /** 愛撫系 */
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async pet_ear(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        defender.uma_sex_title,
        "의 귀는 역시 동경할 만하다. 팔다리의 연장으로서도, 표정의 연장으로서도, 또는……성감대의 연장으로서도……",
      ]);
      await attacker.print_and_wait([
        `손끝으로 잠자리가 물을 스치듯 살짝 건드렸을 뿐인데,`,
        attacker.get_colored_name(),
        `이(가) 그 섬세한 감촉을 다 느끼기도 전에, 뾰족하고 긴 말 귀는 부끄러운 듯 ${attacker.phy_sex_title}의 손가락 사이에서 달아났다.`,
      ]);
      await attacker.say_and_wait('…………');
      await defender.say_and_wait(
        "부탁이야…… 한 번만 더 쓰다듬어 줘. 이번에는 피하지 않을게.",
      );
      await attacker.print_and_wait([
        "품 안의 ",
        a_call_d,
        "은(는) 지금 얼굴이 붉다.",
      ]);
    } else {
      await attacker.print_and_wait("후후……");
      await attacker.print_and_wait(
        "손바닥 안에, 이제 도망치지 않는 말 귀가 있다. 가는 솜털이 손끝을 스치고…… 몸도 마음도 치유되는 기분이다.",
      );
      await attacker.print_and_wait("이것이 연인의 특권일까……");
      await attacker.print_and_wait("다만 지금은 저쪽의 상태가 신경 쓰여서……");
      await attacker.print_and_wait([
        "보이지 않는 실로 이어진 것처럼, ",
        a_call_d,
        "의 두 다리가 ",
        attacker.phy_sex_title,
        "의 말귀에 달라붙은 손에 맞춰 부끄러운 듯 잘게 떨린다.",
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async pull_ear(attacker, defender) {
    await attacker.print_and_wait("이건 좋지 않아……");
    await attacker.print_and_wait("……연인이 해서는 안 되는 일이야……");
    await attacker.print_and_wait("……그런데도");
    await attacker.print_and_wait([
      "그저 부드러운 애무로는 부족해, 아랫배에서 솟는 지배욕에 삼켜진 ",
      attacker.phy_sex_title,
      "은(는) 손가락에 안전하게 힘을 더하는 요령을 조금씩 익혀 간다……",
    ]);
    await attacker.print_and_wait([
      "……그러면 아래에 있는 말귀 달린 ",
      defender.phy_sex_title,
      "도 알 수 있겠지. 몸속에서 깨어나기 시작한, 인간에게 꼬리를 흔드는 피의 기억이 언제 어디서 왔는지를……",
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async pet_breast_from_back(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      a_call_d,
      "의 힘없는 모습에 연민도 만족도 조금조차 느끼지 않는다. 쉽게 만족하지 못하는 ",
      attacker.get_colored_name(),
      "은(는) 두 손을 더 뻗어, 사과를 떨어뜨리는 힘에 따라 모양이 도드라진 아름다운 가슴을 움켜쥐었다.",
    ]);
    await defender.say_and_wait("하아……");
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      "은(는) 풍만한 가슴 살을 감싼 다섯 손가락에도 힘을 주어, ",
      a_call_d,
      "의 부드러운 살을 제 취향에 맞는 모양으로 마음대로 바꿔 간다.",
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async pet_breast_first(attacker, defender, a_call_d) {
    if (era.get(`cflag:${defender.id}:成长阶段`) < 5) {
      await attacker.print_and_wait([
        defender.teen_sex_title,
        "의 부드러움이……지금 손바닥에 내려앉았다.",
      ]);
    } else {
      await attacker.print_and_wait(
        "유혹하는 듯한 부드러움이……지금 손바닥에 내려앉았다.",
      );
    }
    await attacker.print_and_wait(
      "참지 못하는 손끝이 저절로 움직여 눈앞의 부드러운 살에 지문을 남기고, 제 취향에 맞는 모양으로 만들고 싶어진다.",
    );
    await defender.say_and_wait("응……");
    await attacker.print_and_wait([
      a_call_d,
      "의 몸이 자신의 손가락에 맞춰 흔들리며 달콤한 목소리를 흘린다……하아, 인정할 수밖에 없다. 이 감촉은 멈추고 싶지 않을 만큼 좋다……",
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async pet_breast(attacker, defender, a_call_d, d_call_a) {
    await defender.say_and_wait([d_call_a, '……']);
    await attacker.print_and_wait([
      "아아, 이쪽도 이제 알 수 있다……눈앞의 ",
      a_call_d,
      "의 몸은 자신의 손길에 팽팽해지고, 자신의 손길을 그리워하고 있다……",
    ]);
    await defender.say_and_wait([d_call_a, '……']);
    await attacker.print_and_wait("그래도 조금만 더 제멋대로 하고 싶다.");
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async pet_nipple(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await attacker.print_and_wait("뜨거워……");
      await attacker.print_and_wait(
        "하얀 가슴 살에 묻힌 작은 살점인데도 엄청난 열을 뿜고 있다",
      );
      await defender.say_and_wait("응……");
      await attacker.print_and_wait(
        "손가락으로 유륜을 둥글게 쓰다듬고 분홍빛 점을 손끝으로 누르며, 조금씩 부풀고 조금씩 서서 손가락에 맞서는 단단함이 되는 것을 지켜본다……",
      );
      await attacker.print_and_wait("……그러고는 힘을 더해 짓누르듯 주무른다.");
      await defender.say_and_wait([d_call_a, '……']);
      await attacker.print_and_wait(
        defender.race > 0 ? "아아, 꼬리로 벌을 받았다." : "아아, 얻어맞았다.",
      );
    } else {
      await attacker.print_and_wait("이대로 짜면 젖이 나올지도 모르겠어……");
      await attacker.print_and_wait(
        "이어지는 애무에 단단해진 음란한 젖꼭지를 보고 있으면, 나도 모르게 그런 생각이 든다……",
      );
      await defender.say_and_wait("햐아——");
      await attacker.print_and_wait([
        a_call_d,
        "이(가) 고개를 숙이고 숨을 흐트러뜨리는 틈에 손가락으로 젖꼭지를 위로 당겨 본다……",
      ]);
      await attacker.print_and_wait("당황하는 얼굴이 몹시 맛깔스럽다.");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async pet_clitoris(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        a_call_d,
        "의 두 다리를 벌려, ",
        defender.sex,
        "의 드러난 아랫배를 이렇게 가만히 바라본다……",
      ]);
      await attacker.print_and_wait(
        "이제 돌이킬 수 없어……그런데 그것 때문에 오히려 흥분하고 만다……",
      );
      await attacker.print_and_wait(
        "손가락으로 분홍빛 작은 살점을 덮은 껍질을 문질러 벌리고, 민감한 음핵이 공기에 드러나 사랑스러운 분홍빛에서 더욱 음란하게 충혈된 붉은빛으로 변하는 것을 지켜본다.",
      );
      await attacker.print_and_wait("……안심해. 부드럽게 해 줄 테니까");
    } else {
      await defender.say_and_wait("응……");
      await attacker.print_and_wait(
        "아아, 어느새 이렇게 빨갛게 부은 가련한 모습이 되어 있었다.",
      );
      await attacker.print_and_wait([
        "살짝 건드리고 조금만 끈기 있게 기다리면, 이 작고 민감한 돌기는 ",
        a_call_d,
        "의 순진한 몸을 흐트러지게 움직이기 시작한다……",
      ]);
      await defender.say_and_wait("햐아——");
      await attacker.print_and_wait("한 번만 더 보자. 이게 마지막이다.");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async finger_fuck(attacker, defender) {
    await defender.say_and_wait("응……");
    await attacker.print_and_wait(
      "몸의 반응은 아직 굳어 있는데도, 음부는 어렵지 않게 검지 끝에서 첫 마디까지 머금고 말았다……",
    );
    await attacker.print_and_wait("손가락이 뜨겁게 입맞춤을 받고 있다.");
    await attacker.print_and_wait(
      "위를 향해 굽히고, 아래로 문지르고, 주름의 꿈틀거림에 맞춰 양옆으로……",
    );
    await attacker.print_and_wait(
      "하아……다리를 그렇게 조이면 계속할 수가 없잖아.",
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async prepare_virgin_uma(attacker, defender) {
    await attacker.print_and_wait([
      "조심스럽게 두 손가락을 넣어, 눈앞에 벌어진 ",
      defender.teen_sex_title,
      "의 가느다란 한 줄 봉제선처럼 좁은 음부를 뒤집듯 벌린다.",
    ]);
    await attacker.print_and_wait("예뻐……");
    await defender.say_and_wait("그렇게 빤히 보지 마……");
    await attacker.print_and_wait(
      "미친 듯이 흔들리는 꼬리가 그렇게 중얼거렸다. 하지만……",
    );
    await defender.say_and_wait("응——");
    await attacker.print_and_wait(
      "후우. 손가락으로 음부를 벌릴수록 손가락 사이로 꿈틀거리는 안쪽에서 밀려난 뜨거운 숨결이 불어, 간지러울 만큼 유혹한다.",
    );
    await attacker.print_and_wait("한 개쯤 더 넣어도 되겠지.");
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async stimulate_g_spot_by_finger(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        defender.sex,
        "을(를) 더 기분 좋게 해 주고 싶다.",
        defender.sex,
        "의 음부를 더 부드럽게 하고 싶다. 이 아름다운 몸을 자신의 움직임으로 더욱 정신없이 뒤틀리게 하고 싶다……",
      ]);
      await defender.say_and_wait("하아……하아……");
      await attacker.print_and_wait(
        "손가락을 움직일 뿐인데 머릿속에서 폭주하는 욕망에 숨이 거칠어진다.",
      );
      await attacker.print_and_wait("어디지……이제 가까울 텐데……");
      await attacker.print_and_wait('……');
      await defender.say_and_wait("응——");
      await attacker.print_and_wait([
        "주변의 주름과는 다른 미세한 융기에 손가락이 이끌리고, 그 작은 부푼 곳만이 지닌 열기와 축축한 감촉이 느껴진다……정답임을 알려 준 것은 갑자기 젖혀진 ",
        a_call_d,
        "의 허리와, 범행 중인 팔을 끼워 잡은 두 다리였다.",
      ]);
      await attacker.print_and_wait("……찾았다.");
    } else {
      await attacker.print_and_wait("눌러 뭉갠다.");
      await attacker.print_and_wait("주물러 풀어 준다.");
      await attacker.print_and_wait("찌르며 희롱한다.");
      await attacker.print_and_wait("무딘 손톱 끝으로 간질이듯 긁는다.");
      await attacker.print_and_wait([
        "이 손이 질릴 때까지, 어느새 진흙처럼 녹아 땀에 젖은 ",
        defender.get_colored_name(),
        "에게 쾌락이 왜 독이라 불리는지 듬뿍 가르쳐 주자.",
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async pet_anal(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.say_and_wait("읏——!?");
      await attacker.print_and_wait([
        "조금 늦었지만, 눈앞에서 엉덩이를 내민 ",
        defender.adult_sex_title,
        "은(는) 이쪽의 의도를 분명히 알아차렸다.",
        attacker.get_colored_name(),
        "의 손가락이 은근하게 다가가, 몸이 딱 경계할 만큼 거친 감촉으로 작은 구멍의 입구를 둥글게 어루만진다.",
      ]);
      await attacker.print_and_wait([
        "그 「적당한」 경계는……",
        a_call_d,
        "이(가) 무의식적으로 손가락에 아양을 떨듯 내미는 엉덩이에 드러난다……",
        defender.race > 0 ? "그리고 흔들리는 말꼬리에도……" : '',
      ]);
    } else {
      await defender.print_and_wait("그러니까……정말 저기를 공략할 생각이야……");
      await defender.print_and_wait([
        `기분 탓……일까……`,
        d_call_a,
        `……이렇게 애태우는 방식을 유난히 마음에 들어 하는 것 같아서……`,
      ]);
      await defender.print_and_wait(
        "더는 몸을 굳히고 있을 수 없다. 은근한 애무에 녹아내린 자신의 항문은 어느새 풀려, 무엇을 삼켜도 이상하지 않은 음란한 구멍이 되어 있었다.",
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async prepare_anal(attacker, defender, a_call_d) {
    await attacker.print_and_wait(
      `손바닥으로 눈앞에서 벌어졌다 닫히는 구멍이 내뿜는 뜨거운 숨결을 느끼며 네 손가락을 말뚝처럼 세워, 부끄러워 은밀한 곳을 닫으려는 엉덩이 살을 ${attacker.phy_sex_title}의 시선에서 달아나지 못하도록 고정한다.`,
    );
    await attacker.print_and_wait(
      "유난히 굵은 중지만은 다른 일을 맡는다. 전갈의 꼬리처럼 살짝 굽어 항문에 다가간 뒤, 천천히 그러나 단호하게 파고든다.",
    );
    await attacker.print_and_wait("저항이 거세다.");
    await attacker.print_and_wait([
      "스스로 꿈틀거리는 주름이 생물처럼 숨 쉬며 ",
      attacker.get_colored_name(),
      `의 손가락을 밀어낸다. 옆의 음부처럼 교접을 위해 존재하는 음란한 살도 아닌데, 지금 ${attacker.phy_sex_title}의 손가락에는 뜻밖일 만큼 적극적이다.`,
    ]);
    await attacker.print_and_wait("두려운 걸까……기쁜 걸까……?");
    await attacker.print_and_wait([
      "신음하는 ",
      a_call_d,
      "조차도 알 수 없다. 부끄러운 듯 꿈틀거리는 항문 깊은 곳에서 달려와 등을 타고 올라 몸을 떨리게 하는 전류가 무엇을 뜻하는지를.",
    ]);
    await defender.say_and_wait("또……안으로……첫 마디가……이제 전부……", true);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async pet_leg(attacker, defender, is_first) {
    if (is_first) {
      if (attacker.id === 0 && defender.race > 0) {
        await attacker.print_and_wait(
          "트레이너로서 눈앞에 있는 담당의 두 다리를 성적인 의미로 바라보고 쓰다듬는다……",
        );
        await attacker.print_and_wait(
          "지금 하는 일을 절제된 말로 표현하기만 해도, 몸이 식을 듯한 배덕감이 오한이 되어 온몸을 달린다.",
        );
        await attacker.print_and_wait(
          "조교 뒤 상태를 확인하려고 가끔 손으로 쓰다듬을 만큼 친근했을 텐데도……",
        );
        await attacker.print_and_wait(
          "이상하게도 지금 머릿속에서는 이 두 다리를 「레이스」와 연결할 수 없다",
        );
      }
      await attacker.print_and_wait("지금 머릿속에 있는 것은……");
      await attacker.print_and_wait(
        "이 다리로 허리를 휘감긴다면 분명 견딜 수 없으리라는 상상뿐이다.",
      );
    } else {
      await attacker.print_and_wait("부드럽고 탄력이 있다.");
      await attacker.print_and_wait("곡선은 우아하고 길다.");
      await attacker.print_and_wait("손가락의 애무에 떨리는, 훌륭한 민감함이 있다.");
      if (defender.race > 0) {
        await attacker.print_and_wait("아쉽네……");
        await attacker.print_and_wait(
          "이런 다리가 레이스만을 위해 존재하다니……",
        );
      }
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async pet_tail(attacker, defender) {
    await attacker.print_and_wait("꽤 신선한 경험이다.");
    if (defender.sex_code !== 1) {
      await attacker.print_and_wait([
        "무엇보다 ",
        defender.uma_sex_title,
        "의 꼬리뼈 뿌리에서 뻗어, 평소에는 제복 치마 뒤에서 눈에 보이는 바람처럼 흔들리는 꼬리이니 말이다.",
      ]);
    }
    await attacker.print_and_wait(
      "콧노래를 섞어 부드럽게 쓰다듬고, 손가락을 매끄러운 꼬리털을 따라 뿌리까지 미끄러뜨려 두 손에 꼬리 밑동의 은밀한 냄새를 새긴다……",
    );
    await attacker.print_and_wait("아아……그러고 보니……");
    await defender.say_and_wait("냄새 맡지 마!", true);
    await attacker.print_and_wait(
      "그렇게 꾸중이라도 들은 듯, 들어 올리려던 손이 꼬리에 단단히 감겨 움직일 수 없게 된다.",
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async pull_tail(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await defender.say_and_wait("오오～");
      await attacker.print_and_wait([
        "아래에 있는 ",
        a_call_d,
        "의 입에서 새는 녹아내린 신음은 독이다.",
      ]);
      await attacker.print_and_wait(
        `꼬리를 당기면 눈앞의 ${defender.uma_sex_title}이(가) 순순히 따른다는 것을 안 뒤로는 아랫배에서 치솟는 열기를 더욱 억누르기 어려워졌다.`,
      );
    } else {
      await defender.say_and_wait("응——");
      await attacker.print_and_wait(
        "조금 힘을 주면 엉덩이가 올라가고, 거기서 손을 늦추면 허리까지 내려앉는다……",
      );
      await attacker.print_and_wait([
        "이봐……지금 자기가 ",
        attacker.phy_sex_title,
        "의 앞에서 어떤 움직임을 보이는지 알고 있는 거야, 가련한 ",
        a_call_d,
        '？',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async cunnilingus(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.say_and_wait("으으으으————");
      await attacker.print_and_wait(
        "입에 머금지 않을 이유가 없다. 눈앞에서 저속한 암컷의 냄새를 풍기는 충혈된 콩알을 보호막 밖으로 드러내 놓고, 혼자 떨게 둘 이유가 없다.",
      );
      await attacker.print_and_wait([
        "그래서 ",
        attacker.get_colored_name(),
        "은(는) 몸을 깊이 숙여, 머리를 ",
        a_call_d,
        "의 활짝 벌어진 두 다리 사이에 파묻었다.",
      ]);
      await attacker.print_and_wait(
        "반사적으로 닫히려는 허벅지 사이가 떨린다.",
      );
      await attacker.print_and_wait("허리에 두른 무릎이 떨린다.");
      await attacker.print_and_wait("허리 뒤에서 깍지 낀 두 발이 떨린다.");
      await attacker.print_and_wait("아아……어째서 갑자기 이렇게 된 걸까……");
      await attacker.print_and_wait(
        "설마 혀에 더욱 젖어 드는 이 음핵 때문은 아니겠지.",
      );
    } else {
      await attacker.print_and_wait("혀끝으로 희롱한다.");
      await attacker.print_and_wait("빨아서 세운다.");
      await attacker.print_and_wait("살짝 숨을 불어 넣는다.");
      await attacker.print_and_wait("조금 곤란해지고 만다……");
      await attacker.print_and_wait([
        "눈앞의 음핵을 어떤 방식으로 자극해도 눈앞의 ",
        a_call_d,
        "이(가) 똑같이 기쁨에 떤다면, 무엇을 좋아하는지 알 수 없지 않은가.",
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async ask_cunnilingus(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait("부탁이야……");
      await defender.print_and_wait([
        "아직 부끄러움을 남긴 채, 눈앞의 ",
        d_call_a,
        "이(가) 자기 손으로 떨리는 두 다리를 이쪽을 향해 벌려 주었다",
      ]);
      await defender.say_and_wait("으으으으————");
      await defender.print_and_wait(
        "입에 머금지 않을 이유가 없다. 눈앞에서 저속한 암컷의 냄새를 풍기는 충혈된 콩알을 보호막 밖으로 드러내 놓고, 혼자 떨게 둘 이유가 없다.",
      );
      await defender.print_and_wait([
        "그래서 ",
        defender.get_colored_name(),
        "은(는) 몸을 깊이 숙여, 머리를 ",
        d_call_a,
        "의 활짝 벌어진 두 다리 사이에 파묻었다.",
      ]);
      await defender.print_and_wait(
        "반사적으로 닫히려는 허벅지 사이가 떨린다.",
      );
      await defender.print_and_wait("허리에 두른 무릎이 떨린다.");
      await defender.print_and_wait("허리 뒤에서 깍지 낀 두 발이 떨린다.");
      await defender.print_and_wait("아아……어째서 갑자기 이렇게 된 걸까……");
      await defender.print_and_wait(
        "설마 혀에 더욱 젖어 드는 이 음핵 때문은 아니겠지.",
      );
    } else {
      await defender.print_and_wait("혀끝으로 희롱한다.");
      await defender.print_and_wait("빨아서 세운다.");
      await defender.print_and_wait("살짝 숨을 불어 넣는다.");
      await defender.print_and_wait("조금 곤란해지고 만다……");
      await defender.print_and_wait([
        "눈앞의 음핵을 어떤 방식으로 자극해도 눈앞의 ",
        d_call_a,
        "이(가) 똑같이 기쁨에 떤다면, 무엇을 좋아하는지 알 수 없지 않은가.",
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async force_cunnilingus(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait("부탁이야～");
      await defender.print_and_wait([
        "스스로 두 다리를 벌린 ",
        d_call_a,
        "이(가) 아래에 있는 ",
        defender.get_colored_name(),
        "을(를) 기대하며 바라보고, 시선이 흔들리는 ",
        defender.get_colored_name(),
        "의 머리를 손으로 눌러 내린다.",
      ]);
      await defender.say_and_wait("으으으으————");
      await defender.print_and_wait(
        "입에 머금지 않을 이유가 없다. 눈앞에서 저속한 암컷의 냄새를 풍기는 충혈된 콩알을 보호막 밖으로 드러내 놓고, 혼자 떨게 둘 이유가 없다.",
      );
      await defender.print_and_wait([
        "그래서 ",
        defender.get_colored_name(),
        "은(는) 몸을 깊이 숙여, 머리를 ",
        d_call_a,
        "의 활짝 벌어진 두 다리 사이에 파묻었다.",
      ]);
      await attacker.say_and_wait("하아❤️");
      await defender.print_and_wait(
        "민망한 부탁을 한 쪽인데도 지금은 정신없이 몸을 흔들고 있다……",
      );
      await defender.print_and_wait(
        "반사적으로 닫히려는 허벅지 사이가 떨린다.",
      );
      await defender.print_and_wait("허리에 두른 무릎이 떨린다.");
      await defender.print_and_wait("허리 뒤에서 깍지 낀 두 발이 떨린다.");
      await defender.print_and_wait("아아……어째서 갑자기 이렇게 된 걸까……");
      await defender.print_and_wait(
        "설마 혀에 더욱 젖어 드는 이 음핵 때문은 아니겠지.",
      );
    } else {
      await defender.print_and_wait("혀끝으로 희롱한다.");
      await defender.print_and_wait("빨아서 세운다.");
      await defender.print_and_wait("살짝 숨을 불어 넣는다.");
      await defender.print_and_wait("조금 곤란해지고 만다……");
      await defender.print_and_wait([
        "눈앞의 음핵을 어떤 방식으로 자극해도 눈앞의 ",
        d_call_a,
        "이(가) 똑같이 기쁨에 떤다면, 무엇을 좋아하는지 알 수 없지 않은가.",
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async suck_virgin(attacker, defender, is_first) {
    if (is_first) {
      await attacker.print_and_wait(
        "심장 박동을 빠르게 하는 냄새……혀끝에서 온몸으로 녹아드는, 새콤달콤한 비릿함……",
      );
      await attacker.print_and_wait(
        "혀로 음부를 핥는 이 달콤한 연결에서, 먼저 다가온 것은 어느 쪽이었을까……",
      );
      await attacker.print_and_wait("부드러움과 부드러움의 겨루기.");
      await attacker.print_and_wait(
        "휘파람을 불 듯 오므린 입술 모양으로 질 안에서 말려 천천히 앞으로 나아가는 혀와, 뜨거운 도발에 응해 서툴게 꿈틀거리며 맞서는 음부……",
      );
      await attacker.print_and_wait("어느 쪽에도 쉽게 물러설 수 없는 이유가 있다……");
    } else {
      await attacker.print_and_wait("슬슬 다른 걸 해도 될 때다.");
      await attacker.print_and_wait(
        "처음에는 가느다란 봉제선처럼 닫혀 있던 청초한 모양 따위는 이제 거의 떠오르지 않는다. 다가오는 혀에 안쪽까지 핥긴 지금의 음부는 바깥을 향해 벌어진 채 미세하게 떨리고 있다……",
      );
      await attacker.print_and_wait(
        "못된 이의 허리를 단단히 끼워 잡던 두 다리도 어느새 풀려, 발레를 하듯 높이 든 발끝만 남아 있다.",
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async ask_suck_virgin(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.say_and_wait("하아……");
      await defender.print_and_wait([
        d_call_a,
        "이(가) 눈앞에서 손가락으로 분홍빛 음부의 꽃잎을 벌리고 있다. 이쪽이 해야 할 일은 이제 분명하겠지……",
      ]);
      await defender.print_and_wait(
        "심장 박동을 빠르게 하는 냄새……혀끝에서 온몸으로 녹아드는, 새콤달콤한 비릿함……",
      );
      await defender.print_and_wait(
        "혀로 음부를 핥는 이 달콤한 연결에서, 먼저 다가온 것은 어느 쪽이었을까……",
      );
      await defender.print_and_wait("부드러움과 부드러움의 겨루기.");
      await defender.print_and_wait(
        "휘파람을 불 듯 오므린 입술 모양으로 질 안에서 말려 천천히 앞으로 나아가는 혀와, 뜨거운 도발에 응해 서툴게 꿈틀거리며 맞서는 음부……",
      );
      await defender.print_and_wait("어느 쪽에도 쉽게 물러설 수 없는 이유가 있다……");
    } else {
      await defender.print_and_wait(
        "그만해 달라는 말이 들리지 않는 이상, 이쪽의 혀가 도중에 멈출 이유는 없다.",
      );
      await defender.print_and_wait("다만……");
      await defender.print_and_wait("슬슬 다른 걸 해도 될 때다.");
      await defender.print_and_wait(
        "처음에는 가느다란 봉제선처럼 닫혀 있던 청초한 모양 따위는 이제 거의 떠오르지 않는다. 다가오는 혀에 안쪽까지 핥긴 지금의 음부는 바깥을 향해 벌어진 채 미세하게 떨리고 있다……",
      );
      await defender.print_and_wait(
        "못된 이의 허리를 단단히 끼워 잡던 두 다리도 어느새 풀려, 발레를 하듯 높이 든 발끝만 남아 있다.",
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async force_suck_virgin(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.say_and_wait("응——");
      await defender.print_and_wait(
        "머리가 억지로 눌려 내려가고, 놀라 벌어진 입술이 활짝 열린 음부에 부딪힌다.",
      );
      await defender.print_and_wait(
        "심장 박동을 빠르게 하는 냄새……혀끝에서 온몸으로 녹아드는, 새콤달콤한 비릿함……",
      );
      await defender.print_and_wait(
        "혀로 음부를 핥는 이 달콤한 연결에서, 먼저 다가온 것은 어느 쪽이었을까……",
      );
      await defender.print_and_wait("부드러움과 부드러움의 겨루기.");
      await defender.print_and_wait(
        "휘파람을 불 듯 오므린 입술 모양으로 질 안에서 말려 천천히 앞으로 나아가는 혀와, 뜨거운 도발에 응해 서툴게 꿈틀거리며 맞서는 음부……",
      );
      await defender.print_and_wait("어느 쪽에도 쉽게 물러설 수 없는 이유가 있다……");
    } else {
      await attacker.say_and_wait("하아～");
      await defender.print_and_wait([
        "만족한 모양이다. 차가운 맥주를 단숨에 마신 뒤처럼, ",
        d_call_a,
        "이(가) 기분 좋게 숨을 내쉰다.",
      ]);
      await defender.print_and_wait("슬슬 다른 걸 해도 될 때다.");
      await defender.print_and_wait(
        "처음에는 가느다란 봉제선처럼 닫혀 있던 청초한 모양 따위는 이제 거의 떠오르지 않는다. 다가오는 혀에 안쪽까지 핥긴 지금의 음부는 바깥을 향해 벌어진 채 미세하게 떨리고 있다……",
      );
      await defender.print_and_wait(
        "못된 이의 허리를 단단히 끼워 잡던 두 다리도 어느새 풀려, 발레를 하듯 높이 든 발끝만 남아 있다.",
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async blow_job(attacker, defender, is_first) {
    if (is_first) {
      await defender.say_and_wait(
        "눈앞의 광경은 죄책감이 치밀어 오를 정도다……",
        true,
      );
      if (attacker.race > 0 && attacker.sex_code !== 1) {
        await attacker.print_and_wait(
          "우마무스메와 육봉. 거의 만날 일 없던 두 단어가 지금은 끈적하게 이어져 있다……",
        );
      }
      await attacker.print_and_wait(
        "육봉이 자신의 입술을 억지로 벌리고, 본래 영양을 섭취할 곳을 단단하게 일어선 위험한 물건이 차지한 채 몸을 이상하게 만드는 저속한 냄새를 제멋대로 뿌리고 있다.",
      );
      await attacker.print_and_wait(
        "숙인 몸이 떨리기 시작한다……어째서일까……",
      );
      await attacker.print_and_wait("이런 건 역시 조금 이상한 걸까……?");
    } else {
      await attacker.say_and_wait("츄릅츄릅～～");
      await attacker.print_and_wait("어느새 조금 능숙해져 있다……");
      await attacker.print_and_wait(
        "고개를 조금 들면 눈앞의 육봉을 더 깊이 머금을 수 있을 것 같다……",
      );
      await attacker.print_and_wait(
        "짓눌린 혀로 옆에서 살짝 핥으면 기분 좋은 듯 떨린다.",
      );
      await attacker.print_and_wait("입술을 쓰면……빨아서……");
      await attacker.print_and_wait(
        "콜록……짙게 흘러드는 부끄러운 맛에 머리가 어질어질하다……",
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async ask_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait("부탁이야——");
      await defender.print_and_wait([
        "눈앞의 ",
        d_call_a,
        `이(가) 갑자기 얼굴이 붉어질 말을 입에 올렸다.`,
      ]);
      await defender.print_and_wait(
        "갑자기 이런 부탁을 하다니, 거절당하고 걷어차여도 할 말은 없어……",
      );
      await attacker.say_and_wait(
        "눈앞의 광경은 죄책감이 치밀어 오를 정도다……",
        true,
      );
      if (defender.race > 0 && defender.sex_code !== 1) {
        await defender.print_and_wait(
          "우마무스메와 육봉. 거의 만날 일 없던 두 단어가 지금은 끈적하게 이어져 있다……",
        );
      }
      await defender.print_and_wait(
        "육봉이 자신의 입술을 억지로 벌리고, 본래 영양을 섭취할 곳을 단단하게 일어선 위험한 물건이 차지한 채 몸을 이상하게 만드는 저속한 냄새를 제멋대로 뿌리고 있다.",
      );
      await defender.print_and_wait(
        "숙인 몸이 떨리기 시작한다……어째서일까……",
      );
      await defender.print_and_wait("이런 건 역시 조금 이상한 걸까……?");
    } else {
      await defender.print_and_wait("같은 부탁을 몇 번이나 하는 건 반칙이야……");
      await defender.say_and_wait("츄릅츄릅～～");
      await defender.print_and_wait("어느새 조금 능숙해져 있다……");
      await defender.print_and_wait(
        "고개를 조금 들면 눈앞의 육봉을 더 깊이 머금을 수 있을 것 같다……",
      );
      await defender.print_and_wait(
        "짓눌린 혀로 옆에서 살짝 핥으면 기분 좋은 듯 떨린다.",
      );
      await defender.print_and_wait("입술을 쓰면……빨아서……");
      await defender.print_and_wait(
        "콜록……짙게 흘러드는 부끄러운 맛에 머리가 어질어질하다……",
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async force_blow_job(attacker, defender, is_first) {
    if (is_first) {
      await attacker.say_and_wait("입 벌려.");
      await defender.print_and_wait(
        "저항하는 말이 통할지도 모른다……그렇게 생각했는데 몸은 그 손에 조금씩 눌려 내려간다……",
      );
      await defender.say_and_wait("응……");
      await attacker.say_and_wait(
        "눈앞의 광경은 죄책감이 치밀어 오를 정도다……",
        true,
      );
      if (defender.race > 0 && defender.sex_code !== 1) {
        await defender.print_and_wait(
          "우마무스메와 육봉. 거의 만날 일 없던 두 단어가 지금은 끈적하게 이어져 있다……",
        );
      }
      await defender.print_and_wait(
        "육봉이 자신의 입술을 억지로 벌리고, 본래 영양을 섭취할 곳을 단단하게 일어선 위험한 물건이 차지한 채 몸을 이상하게 만드는 저속한 냄새를 제멋대로 뿌리고 있다.",
      );
      await defender.print_and_wait(
        "숙인 몸이 떨리기 시작한다……어째서일까……",
      );
      await defender.print_and_wait("이런 건 역시 조금 이상한 걸까……?");
    } else {
      await defender.say_and_wait("하아……", true);
      await defender.say_and_wait("아직……계속하는 거야……", true);
      await defender.say_and_wait("츄릅츄릅～～");
      await defender.print_and_wait("어느새 조금 능숙해져 있다……");
      await defender.print_and_wait(
        "고개를 조금 들면 눈앞의 육봉을 더 깊이 머금을 수 있을 것 같다……",
      );
      await defender.print_and_wait(
        "짓눌린 혀로 옆에서 살짝 핥으면 기분 좋은 듯 떨린다.",
      );
      await defender.print_and_wait("입술을 쓰면……빨아서……");
      await defender.print_and_wait(
        "콜록……짙게 흘러드는 부끄러운 맛에 머리가 어질어질하다……",
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async deep_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait("이렇게 하면……");
      await attacker.say_and_wait("응……");
      await attacker.print_and_wait("역시 조금 어려워……하지만……");
      await attacker.print_and_wait("더 깊이 머금었어……");
      await attacker.say_and_wait(
        ["기분 좋지……내……", a_call_d, '❤️'],
        true,
      );
      await attacker.say_and_wait("츄릅츄릅……");
      await attacker.print_and_wait(
        "이곳의 두 사람 중 적어도 한 명, 이름 모를 저속한 누군가가 먼저 나서서 이 음란한 자세로부터 쪽쪽, 미간을 펴게 하는 금단의 쾌감을 짜내고 있다.",
      );
      await attacker.print_and_wait([
        "……이렇게 ",
        attacker.get_colored_name(),
        "의 이 작은 입은 바로 이 순간부터 영양 섭취 이외의 의미를 부여받고, 끈적한 소리를 내며 육봉에 달라붙는 저속한 성기로 타락했다. 이제 돌이킬 수 없다❤️",
      ]);
      await attacker.print_and_wait(
        "목구멍의 부드러운 살로 귀두를 맞이하고, 능숙한 혀끝으로 육봉의 충혈된 혈관을 어루만지며, 공기도 끼지 못할 만큼 세게 빨아 기둥을 받친다……",
      );
      await attacker.print_and_wait([
        "무엇을 배우고, 무엇을 기억하며, 어떤 모습이 되어 갈까……지금 ",
        a_call_d,
        "의 아래에 웅크린 ",
        attacker.get_colored_name(),
        '。',
      ]);
    } else {
      if (defender.race > 0) {
        await attacker.print_and_wait([
          "목으로 꿀꺽꿀꺽 육봉에 봉사하면서 꼬리를 흔들 여유까지 생겼다. ",
          attacker.get_colored_name(),
          "은(는) 이 점에서 ",
          a_call_d,
          "의 예상대로 재능이 있다.",
        ]);
        await attacker.print_and_wait([
          "슬쩍 ",
          a_call_d,
          `이(가) 숨을 들이쉬며 고개를 드는 모습을 곁눈질하면서, 콧노래를 부를 틈도 없는 `,
          attacker.get_colored_name(),
          "은(는) 알기 쉽게 귀를 떤다.",
        ]);
      }
      await attacker.say_and_wait("하아……하아……❤️");
      await attacker.print_and_wait("삼킨다……");
      await attacker.print_and_wait([
        "필요한 공기를 얻기 위해, 육봉을 머금은 ",
        attacker.get_colored_name(),
        "이(가) 크게 삼킨다. 육봉 냄새가 섞인……아니, 산소가 섞인 육봉 냄새라고 하는 편이 정확하겠지.",
      ]);
      await attacker.print_and_wait([
        "쿠퍼액과, 작은 입을 틀어막힌 ",
        attacker.get_colored_name(),
        "이(가) 주체하지 못하고 흘리는 침은 입구멍을 드나들 때마다 뒤섞여, 긴 실을 끌기 쉬운 끈적하고 투명한 액체가 되어 간다……",
      ]);
      await attacker.say_and_wait("응……으으으으……");
      await attacker.print_and_wait(
        "뭐, 이렇게 몇 번을 해도 끝내 입 벌리는 법까지 잊지는 않겠지.",
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async ask_deep_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait("더, 깊숙한 곳이 좋아……");
      await defender.print_and_wait([
        "욕심내어 중얼거리며 쾌감을 찾는 본능에 지배당한 ",
        d_call_a,
        "은(는) 허리를 내밀었다.",
      ]);
      await defender.print_and_wait("더 깊이 머금었어……");
      await defender.print_and_wait("닿았어, 가장 깊은 곳에……");
      await defender.say_and_wait("츄릅츄릅……");
      await defender.print_and_wait(
        "이곳의 두 사람 중 적어도 한 명, 이름 모를 저속한 누군가가 먼저 나서서 이 음란한 자세로부터 쪽쪽, 미간을 펴게 하는 금단의 쾌감을 짜내고 있다.",
      );
      await defender.print_and_wait([
        "……이렇게 ",
        defender.get_colored_name(),
        "의 이 작은 입은 바로 이 순간부터 영양 섭취 이외의 의미를 부여받고, 끈적한 소리를 내며 육봉에 달라붙는 저속한 성기로 타락했다. 이제 돌이킬 수 없다❤️",
      ]);
      await defender.print_and_wait(
        "목구멍의 부드러운 살로 귀두를 맞이하고, 능숙한 혀끝으로 육봉의 충혈된 혈관을 어루만지며, 공기도 끼지 못할 만큼 세게 빨아 기둥을 받친다……",
      );
      await defender.print_and_wait([
        "무엇을 배우고, 무엇을 기억하며, 어떤 모습이 되어 갈까……지금 ",
        d_call_a,
        "의 아래에 웅크린 ",
        defender.get_colored_name(),
        '。',
      ]);
    } else {
      await defender.print_and_wait([
        "목으로 꿀꺽꿀꺽 육봉에 봉사하면서 꼬리를 흔들 여유까지 생겼다. ",
        defender.get_colored_name(),
        "은(는) 이 점에서 ",
        attacker.phy_sex_title,
        "의 예상을 뛰어넘는 재능이 있다.",
      ]);
      await defender.print_and_wait([
        "슬쩍 ",
        d_call_a,
        "이(가) 숨을 들이쉬며 고개를 드는 모습을 곁눈질하면서, 콧노래를 부를 틈도 없는 ",
        defender.get_colored_name(),
        "은(는) 알기 쉽게 귀를 떤다.",
      ]);
      await defender.print_and_wait("어때～");
      await defender.print_and_wait([
        "지금 작은 입에는 말할 틈이 없다. 하지만 자신의 ",
        defender.race > 0 ? "담당" : "동료",
        "에게 바싹 닿아 있는 ",
        d_call_a,
        "은(는) 혀끝으로 육봉의 귀두에 그려진 자랑을 완전히 이해했다.",
      ]);
      await defender.say_and_wait("하아……하아……❤️");
      await defender.print_and_wait("삼킨다……");
      await defender.print_and_wait([
        "필요한 공기를 얻기 위해, 육봉을 머금은 ",
        defender.get_colored_name(),
        "이(가) 크게 삼킨다. 육봉 냄새가 섞인……아니, 산소가 섞인 육봉 냄새라고 하는 편이 정확하겠지.",
      ]);
      await defender.print_and_wait([
        "쿠퍼액과, 작은 입을 틀어막힌 ",
        defender.get_colored_name(),
        "이(가) 주체하지 못하고 흘리는 침은 입구멍을 드나들 때마다 뒤섞여, 긴 실을 끌기 쉬운 끈적하고 투명한 액체가 되어 간다……",
      ]);
      await defender.say_and_wait("응……으으으으……");
      await defender.print_and_wait(
        "뭐, 이렇게 몇 번을 해도 끝내 입 벌리는 법까지 잊지는 않겠지.",
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async force_deep_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait("고개 들어.");
      await defender.print_and_wait("더 깊이 머금었어……");
      await defender.print_and_wait(
        "여전히 온정 따위는 느껴지지 않는 짧은 명령이다.",
      );
      await defender.print_and_wait([
        "하지만 ",
        defender.get_colored_name(),
        "의 몸은 거부할 수 없이 그 말에 지배당하고 있다.",
      ]);
      await defender.say_and_wait("츄릅츄릅……");
      await defender.print_and_wait(
        "이곳의 두 사람 중 적어도 한 명, 이름 모를 저속한 누군가가 먼저 나서서 이 음란한 자세로부터 쪽쪽, 미간을 펴게 하는 금단의 쾌감을 짜내고 있다.",
      );
      await defender.print_and_wait([
        "……이렇게 ",
        defender.get_colored_name(),
        "의 이 작은 입은 바로 이 순간부터 영양 섭취 이외의 의미를 부여받고, 끈적한 소리를 내며 육봉에 달라붙는 저속한 성기로 타락했다. 이제 돌이킬 수 없다❤️",
      ]);
      await defender.print_and_wait(
        "목구멍의 부드러운 살로 귀두를 맞이하고, 능숙한 혀끝으로 육봉의 충혈된 혈관을 어루만지며, 공기도 끼지 못할 만큼 세게 빨아 기둥을 받친다……",
      );
      await defender.print_and_wait([
        "무엇을 배우고, 무엇을 기억하며, 어떤 모습이 되어 갈까……지금 ",
        d_call_a,
        "의 아래에 웅크린 ",
        defender.get_colored_name(),
        '。',
      ]);
    } else {
      await defender.print_and_wait([
        "말없이 재촉하며, ",
        attacker.phy_sex_title,
        "다시 손으로 강제로 눈앞의 ",
        defender.teen_sex_title,
        "을(를) 자신의 사타구니에 고정한다. 만족할 때까지.",
      ]);
      await defender.say_and_wait("하아……하아……❤️");
      await defender.print_and_wait("삼킨다……");
      await defender.print_and_wait([
        "필요한 공기를 얻기 위해, 육봉을 머금은 ",
        defender.get_colored_name(),
        "이(가) 크게 삼킨다. 육봉 냄새가 섞인……아니, 산소가 섞인 육봉 냄새라고 하는 편이 정확하겠지.",
      ]);
      await defender.print_and_wait([
        "쿠퍼액과, 작은 입을 틀어막힌 ",
        defender.get_colored_name(),
        "이(가) 주체하지 못하고 흘리는 침은 입구멍을 드나들 때마다 뒤섞여, 긴 실을 끌기 쉬운 끈적하고 투명한 액체가 되어 간다……",
      ]);
      await defender.say_and_wait("응……으으으으……");
      await defender.print_and_wait(
        "뭐, 이렇게 몇 번을 해도 끝내 입 벌리는 법까지 잊지는 않겠지.",
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async hand_job(attacker, defender, is_first) {
    if (is_first) {
      await attacker.say_and_wait("응——");
      await attacker.print_and_wait([
        "그 열기에 놀란 듯, ",
        attacker.get_colored_name(),
        "이(가) 육봉에 댄 손이 본능적으로 뒤로 물러난다. 그러고는 겨울에 발을 이불 속에 넣듯 조금씩 다시 가까이 다가간다.",
      ]);
      await attacker.print_and_wait(
        "꽤 흉악하다……여자의 아랫배를 들썩이게 할 모양인데도……",
      );
      await attacker.print_and_wait(
        "그런데도……손가락으로 둥글게 감아 쥐고 가볍게 훑으면, 손가락 사이에서 쿠퍼액이 춤추는 모습이……조금 귀엽다.",
      );
      await attacker.say_and_wait("하아……하아……응——");
      await attacker.print_and_wait("분간할 수 있게 되었다……");
    } else {
      await attacker.print_and_wait("정말 이것만으로 괜찮은 걸까……");
      await attacker.print_and_wait([
        attacker.child_sex_title,
        '의 손에 자지가 감싸여 문질러지기만 해도 만족할 수 있을까……？',
      ]);
      await attacker.print_and_wait('……');
      await attacker.print_and_wait("정말……달리 하고 싶은 건 없는 걸까……");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async ask_hand_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait("도와줘……부탁이야……", true);
      await defender.print_and_wait([
        d_call_a,
        "은(는) 아무 말도 하지 않았다. 하지만 ",
        defender.get_colored_name(),
        "은(는) 눈앞에서 빨갛게 부어 충혈된 육봉을 바라보고, 따뜻해지기 시작한 열 손가락은 자신이 해야 할 일을 이미 완전히 이해하고 있다.",
      ]);
      await defender.say_and_wait("응——");
      await defender.print_and_wait([
        "그 열기에 놀란 듯, ",
        defender.get_colored_name(),
        "이(가) 육봉에 댄 손이 본능적으로 뒤로 물러난다. 그러고는 겨울에 발을 이불 속에 넣듯 조금씩 다시 가까이 다가간다.",
      ]);
      await defender.print_and_wait(
        "꽤 흉악하다……여자의 아랫배를 들썩이게 할 모양인데도……",
      );
      await defender.print_and_wait(
        "그런데도……손가락으로 둥글게 감아 쥐고 가볍게 훑으면, 손가락 사이에서 쿠퍼액이 춤추는 모습이……조금 귀엽다.",
      );
      await defender.say_and_wait("하아……하아……응——");
      await defender.print_and_wait("분간할 수 있게 되었다……");
    } else {
      await defender.print_and_wait("정말 이것만으로 괜찮은 걸까……");
      await defender.print_and_wait([
        defender.child_sex_title,
        '의 손에 자지가 감싸여 문질러지기만 해도 만족할 수 있을까……？',
      ]);
      await defender.print_and_wait('……');
      await defender.print_and_wait("정말……달리 하고 싶은 건 없는 걸까……");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async force_hand_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait("손으로 해 줘. 괜찮잖아.");
      await defender.print_and_wait([
        `거절할 여지는 주어지지 않는다.`,
        d_call_a,
        `의 말과 함께, 이미 `,
        defender.get_colored_name(),
        "의 앞에서 순순히 두 손을 내밀어 봉사하거나, 쿠퍼액을 흘리는 육봉에 호기심 어린 구석구석까지 문질러지거나.",
        defender.get_colored_name(),
        "에게 남은 선택지는 그 둘뿐이다.",
      ]);
      await defender.say_and_wait("응——");
      await defender.print_and_wait([
        "그 열기에 놀란 듯, ",
        defender.get_colored_name(),
        "이(가) 육봉에 댄 손이 본능적으로 뒤로 물러난다. 그러고는 겨울에 발을 이불 속에 넣듯 조금씩 다시 가까이 다가간다.",
      ]);
      await defender.print_and_wait(
        "꽤 흉악하다……여자의 아랫배를 들썩이게 할 모양인데도……",
      );
      await defender.print_and_wait(
        "그런데도……손가락으로 둥글게 감아 쥐고 가볍게 훑으면, 손가락 사이에서 쿠퍼액이 춤추는 모습이……조금 귀엽다.",
      );
      await defender.say_and_wait("하아……하아……응——");
      await defender.print_and_wait("분간할 수 있게 되었다……");
    } else {
      await defender.print_and_wait("정말 이것만으로 괜찮은 걸까……");
      await defender.print_and_wait([
        defender.child_sex_title,
        '의 손에 자지가 감싸여 문질러지기만 해도 만족할 수 있을까……？',
      ]);
      await defender.print_and_wait('……');
      await defender.print_and_wait("정말……달리 하고 싶은 건 없는 걸까……");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async hand_and_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait("어쩐지");
      await attacker.print_and_wait("뜻밖일 만큼 자연스러운 움직임이다……");
      await attacker.print_and_wait(
        "양손으로 육봉을 일으킨 뒤, 고개가 저절로 가까이 다가간다.",
      );
      await attacker.print_and_wait("손가락의 체온으로 데우고 문질러 벌린 뒤, 그리고……");
      await attacker.say_and_wait("쪽～");
      await attacker.print_and_wait("엄청 진해……");
    } else {
      await attacker.print_and_wait(
        "육봉을 옆으로 비켜 놓고 고개를 기울여 위에서 아래까지 정성껏 핥는다. 끝이 녹아 흐르는 아이스크림처럼.",
      );
      await attacker.say_and_wait("츄릅츄릅——");
      await attacker.print_and_wait([
        a_call_d,
        `의 귀두가 반짝인다. 빛나는 젖은 흔적은 어느 쪽 잘못일까……`,
      ]);
      await attacker.print_and_wait("이제 완전히……알 수 없게 되어 간다……❤️");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async ask_hand_and_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.say_and_wait("머금어……줬으면 해……?");
      await defender.print_and_wait("그렇……구나");
      era.println();
      await defender.print_and_wait("어쩐지");
      await defender.print_and_wait("뜻밖일 만큼 자연스러운 움직임이다……");
      await defender.print_and_wait(
        "양손으로 육봉을 일으킨 뒤, 고개가 저절로 가까이 다가간다.",
      );
      await defender.print_and_wait("손가락의 체온으로 데우고 문질러 벌린 뒤, 그리고……");
      await defender.say_and_wait("쪽～");
      await defender.print_and_wait("엄청 진해……");
    } else {
      await defender.print_and_wait(
        "육봉을 옆으로 비켜 놓고 고개를 기울여 위에서 아래까지 정성껏 핥는다. 끝이 녹아 흐르는 아이스크림처럼.",
      );
      await defender.say_and_wait("츄릅츄릅——");
      await defender.print_and_wait([
        d_call_a,
        "의 귀두가 반짝인다. 빛나는 젖은 흔적은 어느 쪽 잘못일까……",
      ]);
      await defender.print_and_wait("이제 완전히……알 수 없게 되어 간다……❤️");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async force_hand_and_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait("어느새 쪼그려 앉은 자세가 되어 있었다.");
      await defender.print_and_wait(
        "이상하다……분명한 요구를 듣지도 않았는데 몸은 다음에 해야 할 일을 완전히 알고 있다.",
      );
      era.println();
      await defender.print_and_wait("어쩐지");
      await defender.print_and_wait("뜻밖일 만큼 자연스러운 움직임이다……");
      await defender.print_and_wait(
        "양손으로 육봉을 일으킨 뒤, 고개가 저절로 가까이 다가간다.",
      );
      await defender.print_and_wait("손가락의 체온으로 데우고 문질러 벌린 뒤, 그리고……");
      await defender.say_and_wait("쪽～");
      await defender.print_and_wait("엄청 진해……");
    } else {
      await defender.print_and_wait(
        "육봉을 옆으로 비켜 놓고 고개를 기울여 위에서 아래까지 정성껏 핥는다. 끝이 녹아 흐르는 아이스크림처럼.",
      );
      await defender.say_and_wait("츄릅츄릅——");
      await defender.print_and_wait([
        d_call_a,
        "의 귀두가 반짝인다. 빛나는 젖은 흔적은 어느 쪽 잘못일까……",
      ]);
      await defender.print_and_wait("이제 완전히……알 수 없게 되어 간다……❤️");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async tit_job(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.print_and_wait("대단하지 않은가.");
      await defender.print_and_wait([
        "이 ",
        d_call_a,
        "이(가) 자신의 아래에 웅크려, 여성 특유의 부드러움으로 뜨거운 육봉을 감싸는 모습……",
      ]);
      await attacker.say_and_wait("응……");
      await defender.print_and_wait(
        "제대로 전해지는 모양이다. 육봉의 귀두에서 피어오르는, 애욕을 가득 머금은 뜨겁고 하얀 숨결이.",
      );
      await defender.print_and_wait([
        "손을 대어 아래에 있는 ",
        d_call_a,
        "의 고개를 들게 한다.",
      ]);
      await defender.print_and_wait(
        "응, 이미 충분히 달아오른 맛있어 보이는 얼굴이다.",
      );
    } else {
      await attacker.say_and_wait('……');
      await attacker.print_and_wait([
        "알 수 있다.",
        a_call_d,
        "의 허리가 뒤로 젖혀진다.",
      ]);
      if (attacker.race > 0) {
        await attacker.print_and_wait(
          "민감한 말귀가 위에서 내뿜는 흐트러진 뜨거운 숨결에 후우후우 쓰다듬어진다.",
        );
      }
      await attacker.print_and_wait(
        "부드러운 살에 감싸인 육봉도 음부를 쉽게 떨리게 할 모양으로 일어서 있다.",
      );
      await attacker.print_and_wait(
        "무슨 생각을 했는지 가슴이 두근거린다. 하지만 이것도 이른바 「장님 코끼리 만지기」 같은 것이겠지……",
      );
      await attacker.print_and_wait([
        "그래서 ",
        attacker.get_colored_name(),
        "은(는) 고개를 든다.",
      ]);
      await attacker.print_and_wait("역시 짐승 같은 얼굴이다……");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async ask_tit_job(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await attacker.print_and_wait([
        "뜨거운 눈길로 눈앞의 ",
        a_call_d,
        "의 젖꼭지가 뜨겁게 일어설 만큼, 부탁하듯 가만히 바라본다.",
      ]);
      await attacker.print_and_wait([
        "맞은편의 ",
        a_call_d,
        "은(는) 역시 버티지 못하고 져 주었다. 해냈다.",
      ]);
      await defender.say_and_wait('……');
      era.println();
      await attacker.print_and_wait("대단하지 않은가.");
      await attacker.print_and_wait([
        "이 ",
        a_call_d,
        "이(가) 자신의 아래에 웅크려, 여성 특유의 부드러움으로 뜨거운 육봉을 감싸는 모습……",
      ]);
      await defender.say_and_wait("응……");
      await attacker.print_and_wait(
        "제대로 전해지는 모양이다. 육봉의 귀두에서 피어오르는, 애욕을 가득 머금은 뜨겁고 하얀 숨결이.",
      );
      await attacker.print_and_wait([
        "손을 대어 아래에 있는 ",
        a_call_d,
        "의 고개를 들게 한다.",
      ]);
      await attacker.print_and_wait(
        "응, 이미 충분히 달아오른 맛있어 보이는 얼굴이다.",
      );
    } else {
      await defender.say_and_wait('……');
      await defender.print_and_wait([
        "알 수 있다.",
        d_call_a,
        "의 허리가 뒤로 젖혀진다.",
      ]);
      if (defender.race > 0) {
        await defender.print_and_wait(
          "민감한 말귀가 위에서 내뿜는 흐트러진 뜨거운 숨결에 후우후우 쓰다듬어진다.",
        );
      }
      await defender.print_and_wait(
        "부드러운 살에 감싸인 육봉도 음부를 쉽게 떨리게 할 모양으로 일어서 있다.",
      );
      await defender.print_and_wait(
        "무슨 생각을 했는지 가슴이 두근거린다. 하지만 이것도 이른바 「장님 코끼리 만지기」 같은 것이겠지……",
      );
      await defender.print_and_wait([
        "그래서 ",
        defender.get_colored_name(),
        "은(는) 고개를 든다.",
      ]);
      await defender.print_and_wait("역시 짐승 같은 얼굴이다……");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async fuck_tit(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await attacker.print_and_wait([
        "기다리지 못하고 허리를 흔든다. 차가운 공기 속보다는 눈앞의 ",
        a_call_d,
        "의 몸에 육봉이 있어야 할 곳이 더 많다.",
      ]);
      await attacker.print_and_wait("알고 있잖아.");
      await attacker.print_and_wait(
        "쓸데없는 대화는 필요 없다. 흔들림 없는 명령을 시선만으로 전한다.",
      );
      era.println();
      await attacker.print_and_wait("대단하지 않은가.");
      await attacker.print_and_wait([
        "이 ",
        a_call_d,
        "이(가) 자신의 아래에 웅크려, 여성 특유의 부드러움으로 뜨거운 육봉을 감싸는 모습……",
      ]);
      await defender.say_and_wait("응……");
      await attacker.print_and_wait(
        "제대로 전해지는 모양이다. 육봉의 귀두에서 피어오르는, 애욕을 가득 머금은 뜨겁고 하얀 숨결이.",
      );
      await attacker.print_and_wait([
        "손을 대어 아래에 있는 ",
        a_call_d,
        "의 고개를 들게 한다.",
      ]);
      await attacker.print_and_wait(
        "응, 이미 충분히 달아오른 맛있어 보이는 얼굴이다.",
      );
    } else {
      await defender.say_and_wait('……');
      await defender.print_and_wait([
        "알 수 있다.",
        d_call_a,
        "의 허리가 뒤로 젖혀진다.",
      ]);
      if (defender.race > 0) {
        await defender.print_and_wait(
          "민감한 말귀가 위에서 내뿜는 흐트러진 뜨거운 숨결에 후우후우 쓰다듬어진다.",
        );
      }
      await defender.print_and_wait(
        "부드러운 살에 감싸인 육봉도 음부를 쉽게 떨리게 할 모양으로 일어서 있다.",
      );
      await defender.print_and_wait(
        "무슨 생각을 했는지 가슴이 두근거린다. 하지만 이것도 이른바 「장님 코끼리 만지기」 같은 것이겠지……",
      );
      await defender.print_and_wait([
        "그래서 ",
        defender.get_colored_name(),
        "은(는) 고개를 든다.",
      ]);
      await defender.print_and_wait("역시 짐승 같은 얼굴이다……");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async tit_and_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait("정말……그렇게 가슴이 좋아……");
      await attacker.print_and_wait(
        "디저트의 크림 같다. 어디에 짜도 맛있어 보인다……",
      );
      await attacker.say_and_wait("쥬릅쥬릅쥬릅……");
      await attacker.print_and_wait([
        "가슴 살은 육봉의 기둥에 떨어진 쿠퍼액으로 미끈하게 빛난다. 애쓰는 가슴보다 가장 뜨겁게 부푼 귀두는 ",
        attacker.get_colored_name(),
        "이(가) 양손으로 입에 맞이했다.",
      ]);
      await attacker.say_and_wait("응……");
      await attacker.print_and_wait(
        "혀가 이제 말을 듣지 않는다. 입 위의 귀두가 조금 쓸쓸해 보이기만 해도, 젖꼭지를 모아 육봉에 아양 떠는 움직임이 멈추지 않는다……",
      );
    } else {
      await attacker.say_and_wait("쥬릅쥬릅……");
      await attacker.print_and_wait(
        "몇 번을 맛봐도 맛있다고 하기는 어렵다……짭짤하고 저속한 맛이 곧장 머릿속으로 달린다……",
      );
      await attacker.print_and_wait("하지만……");
      await attacker.print_and_wait("하지만…………");
      await attacker.print_and_wait("하지만………………");
      await attacker.say_and_wait(
        ["어째서 둘 다 움직임이 멈추지 않는 걸까……나, 그리고 ", a_call_d, '……'],
        true,
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async ask_tit_and_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait([
        d_call_a,
        "의 가슴 살 사이로 나온 귀두가 조금 기운 없어 보인다.",
      ]);
      await defender.print_and_wait(
        "본인도 알기 쉽게 손바닥을 모아 부탁하고 있다.",
      );
      await defender.print_and_wait("정말……그렇게 가슴이 좋아……");
      await defender.print_and_wait(
        "디저트의 크림 같다. 어디에 짜도 맛있어 보인다……",
      );
      await defender.say_and_wait("쥬릅쥬릅쥬릅……");
      await defender.print_and_wait([
        "가슴 살은 육봉의 기둥에 떨어진 쿠퍼액으로 미끈하게 빛난다. 애쓰는 가슴보다 가장 뜨겁게 부푼 귀두는 ",
        defender.get_colored_name(),
        "이(가) 양손으로 입에 맞이했다.",
      ]);
      await defender.say_and_wait("응……");
      await defender.print_and_wait(
        "혀가 이제 말을 듣지 않는다. 입 위의 귀두가 조금 쓸쓸해 보이기만 해도, 젖꼭지를 모아 육봉에 아양 떠는 움직임이 멈추지 않는다……",
      );
    } else {
      await defender.say_and_wait("쥬릅쥬릅……");
      await defender.print_and_wait(
        "몇 번을 맛봐도 맛있다고 하기는 어렵다……짭짤하고 저속한 맛이 곧장 머릿속으로 달린다……",
      );
      await defender.print_and_wait("하지만……");
      await defender.print_and_wait("하지만…………");
      await defender.print_and_wait("하지만………………");
      await defender.say_and_wait(
        ["어째서 둘 다 움직임이 멈추지 않는 걸까……나, 그리고 ", d_call_a, '……'],
        true,
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async fuck_tit_and_mouth(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.say_and_wait("뭐……!?");
      await defender.print_and_wait(
        "이쪽의 의사를 물을 생각도 없이, 그저 난폭하게 자신이 하고 싶은 일을 밀어붙인다.",
      );
      await defender.print_and_wait("정말……그렇게 가슴이 좋아……");
      await defender.print_and_wait(
        "디저트의 크림 같다. 어디에 짜도 맛있어 보인다……",
      );
      await defender.say_and_wait("쥬릅쥬릅쥬릅……");
      await defender.print_and_wait([
        "가슴 살은 육봉의 기둥에 떨어진 쿠퍼액으로 미끈하게 빛난다. 애쓰는 가슴보다 가장 뜨겁게 부푼 귀두는 ",
        defender.get_colored_name(),
        "이(가) 양손으로 입에 맞이했다.",
      ]);
      await defender.say_and_wait("응……");
      await defender.print_and_wait(
        "혀가 이제 말을 듣지 않는다. 입 위의 귀두가 조금 쓸쓸해 보이기만 해도, 젖꼭지를 모아 육봉에 아양 떠는 움직임이 멈추지 않는다……",
      );
    } else {
      await defender.say_and_wait("쥬릅쥬릅……");
      await defender.print_and_wait(
        "몇 번을 맛봐도 맛있다고 하기는 어렵다……짭짤하고 저속한 맛이 곧장 머릿속으로 달린다……",
      );
      await defender.print_and_wait("하지만……");
      await defender.print_and_wait("하지만…………");
      await defender.print_and_wait("하지만………………");
      await defender.say_and_wait(
        ["어째서 둘 다 움직임이 멈추지 않는 걸까……나, 그리고 ", d_call_a, '……'],
        true,
      );
    }
  },
  /**
   * 乳首を吸う地の文。授乳でも使う
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側。授乳のときは受動側
   * @param {CharaTalk} defender 受動側。授乳のときは主動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async suck_nipple(attacker, defender, a_call_d) {
    if (Math.random() < 0.5) {
      await attacker.say_and_wait("쪽——");
      await attacker.print_and_wait(
        "눈앞의 하얀 살과 장밋빛은 본능적으로 달아나려 한다. 하지만 혀는 그렇게 쉽게 만족하지 않는다.",
      );
      await attacker.print_and_wait([
        defender.teen_sex_title,
        "의 부드러운 살이 좌우로 달아나다가, 이윽고 체념한 듯 혀끝에 머문다.",
      ]);
      await attacker.say_and_wait("후욱——");
      await attacker.print_and_wait(
        "이윽고 혀끝에서 홀로 열을 띠는 붉은 점이 단단해진다. 이로 조심스럽게 그 살점을 문 뒤, 후욱 하고 빤다——",
      );
      await defender.say_and_wait("응——!");
      await attacker.print_and_wait([
        a_call_d,
        "의 몸무게가 털썩 덮쳐 왔다.",
      ]);
      await attacker.print_and_wait("다리에 힘이 풀린 모양이다.");
    } else {
      await attacker.print_and_wait("부끄럽지도 않은 걸까?");
      await attacker.print_and_wait([
        "무릎베개로 봉사를 받으며, ",
        era.get(`talent:${defender.id}:泌乳`) > 0 ? "젖이 넘치는 " : "하얀 ",
        "가슴 살을 자신의 앞에 눕힌다.",
      ]);
      await attacker.print_and_wait(
        "자신 때문이겠지. 빛깔이 짙은 음란한 젖꼭지는 빨기 좋을 만큼 가늘고 길게 부어 있다……",
      );
      await attacker.print_and_wait("……그러니까, 정말 부끄럽지도 않은가?");
      await attacker.print_and_wait("조금도 부끄럽지 않다.");
      await attacker.print_and_wait(
        "기분 좋은 듯 눈을 가늘게 뜨고 입을 벌려 그 붉은 젖꼭지를 물고 빤다.",
      );
      if (era.get(`talent:${defender.id}:泌乳`) > 0) {
        await attacker.print_and_wait("「찍찍찍——」");
        await attacker.print_and_wait([
          `보이지 않는데도 머릿속에는 이미 처음 젖이 넘쳤을 때의 광경이 가득하다. `,
          a_call_d,
          `의 붉어진 얼굴 아래, 하얀 가슴 살에서 가늘고 끊임없이 뿜어져 시선을 따라가게 하는 아름다운 포물선……`,
        ]);
        await attacker.print_and_wait("게다가 조금 달다.");
      }
    }
  },
  /**
   * 乳首を噛む地の文。噛ませる依頼でも使う
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側。噛ませる依頼のときは受動側
   * @param {CharaTalk} defender 受動側。噛ませる依頼のときは主動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async bite_nipple(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      `이로 단단한 젖꼭지를 문 순간, 품 안에 있는 `,
      a_call_d,
      `의 몸이 단번에 굳어진다.`,
    ]);
    await attacker.print_and_wait("어……그래……");
    await attacker.print_and_wait([
      "이를 부드럽게 써서 민감한 젖꼭지 둘레에 들쭉날쭉한 붉은 자국을 남긴다……그러면서 품 안의 ",
      defender.teen_sex_title,
      "의 몸도 끊임없이 떨린다……",
    ]);
    await attacker.print_and_wait([
      "다음 의도를 알아차린 모양이다. 젖꼭지를 혀로 정성껏 적신 순간, ",
      defender.get_colored_name(),
      "은(는) 양팔을 뻗어 ",
      attacker.get_colored_name(),
      "의 허리를 끌어안았다……",
    ]);
    await defender.say_and_wait("응——");
    await attacker.print_and_wait("귀여워.");
    await attacker.print_and_wait([
      "품 안의 ",
      a_call_d,
      "뿐만이 아니다. 빨갛게 부은 자국투성이인 젖꼭지도.",
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async ask_milk_and_hand_job(
    attacker,
    defender,
    is_first,
    a_call_d,
    d_call_a,
  ) {
    if (is_first) {
      await attacker.print_and_wait([
        "눈앞이 온통 ",
        a_call_d,
        "의 하얀 피부와 가슴 살뿐이라, 지금 맛있을 얼굴이 보이지 않는 것이 아쉽다.",
      ]);
      await attacker.print_and_wait([
        "혀끝에 간질여져 춤추는 젖꼭지까지 한순간 심심하게 느껴진다. 하지만 ",
        attacker.get_colored_name(),
        "은(는) 곧 새롭게 눈길을 줄 곳을 찾는다.",
      ]);
      await attacker.print_and_wait("그럼 지금은 어떤 얼굴을 하고 있을까.");
      await attacker.print_and_wait([
        "빨리는 ",
        era.get(`talent:${defender.id}:泌乳`) > 0 ? "모유" : "젖꼭지",
        "의 쾌감에 저속함 너머로 끌려가는, 실신과 저항이 섞인 얼굴……손바닥에서 튀는 뜨거운 육봉에 당황하고 부끄러워하는 얼굴……아니면 이미 완전히 빠져 저속하게 즐기는 얼굴일까……",
      ]);
      await defender.say_and_wait("어!?");
      await attacker.print_and_wait([
        "답 없는 질문이라는 건 알고 있다. 그런데도 ",
        attacker.get_colored_name(),
        "을(를) ",
        a_call_d,
        "의 손가락이 겨우 감싼 육봉이 갑자기 평소보다 높이 일어선다.",
      ]);
    } else {
      await defender.print_and_wait("이런 자신을 기뻐해도 될지 모르겠다……");
      await defender.print_and_wait([
        "입에 물린 ",
        era.get(`talent:${attacker.id}:泌乳`) > 0 ? "젖이 넘치는 " : '',
        "젖꼭지 옆, 혀의 움직임 사이로 희미하게 보이는 ",
        d_call_a,
        "의 표정.",
      ]);
      await defender.print_and_wait(
        "손바닥에 닿은 육봉의 열기와 부푼 혈관으로 지금의 모양을 어렴풋이 그릴 수 있다.",
      );
      await defender.print_and_wait("하아……책임져 줘……");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async milk_and_hand_job(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.print_and_wait("알기 쉽겠지");
      await defender.print_and_wait(
        "무릎베개를 하고 젖을 머금게 된 뒤, 높이 일어선 사타구니.",
      );
      await defender.print_and_wait("알기 쉽겠지……");
      await defender.print_and_wait([
        "눈앞이 온통 ",
        d_call_a,
        "의 하얀 피부와 가슴 살뿐이라, 지금 맛있을 얼굴이 보이지 않는 것이 아쉽다.",
      ]);
      await defender.print_and_wait([
        "혀끝에 간질여져 춤추는 젖꼭지까지 한순간 심심하게 느껴진다. 하지만 ",
        defender.get_colored_name(),
        "은(는) 곧 새롭게 눈길을 줄 곳을 찾는다.",
      ]);
      await defender.print_and_wait("그럼 지금은 어떤 얼굴을 하고 있을까.");
      await defender.print_and_wait([
        "빨리는 ",
        era.get(`talent:${attacker.id}:泌乳`) > 0 ? "모유" : "젖꼭지",
        "의 쾌감에 저속함 너머로 끌려가는, 실신과 저항이 섞인 얼굴……손바닥에서 튀는 뜨거운 육봉에 당황하고 부끄러워하는 얼굴……아니면 이미 완전히 빠져 저속하게 즐기는 얼굴일까……",
      ]);
      await attacker.say_and_wait("어!?");
      await defender.print_and_wait([
        "답 없는 질문이라는 건 알고 있다. 그런데도 ",
        defender.get_colored_name(),
        "을(를) ",
        d_call_a,
        "의 손가락에 겨우 감싸인 육봉이 갑자기 평소보다 높이 일어선다.",
      ]);
    } else {
      await attacker.print_and_wait("이런 자신을 기뻐해도 될지 모르겠다……");
      await attacker.print_and_wait([
        "입에 물린 ",
        era.get(`talent:${defender.id}:泌乳`) > 0 ? "젖이 넘치는 " : '',
        "젖꼭지 옆, 혀의 움직임 사이로 희미하게 보이는 ",
        a_call_d,
        "의 표정.",
      ]);
      await attacker.print_and_wait(
        "손바닥에 닿은 육봉의 열기와 부푼 혈관으로 지금의 모양을 어렴풋이 그릴 수 있다.",
      );
      await attacker.print_and_wait("하아……책임져 줘……");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async non_penetrative(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.print_and_wait("정말 집어넣었다.");
      await defender.print_and_wait([
        "육봉을……",
        d_call_a,
        "의 다문 허벅지 사이로 집어넣는다.",
      ]);
      await defender.print_and_wait(
        "부드럽다. 따뜻하다. 대단해, 대단해, 대단해……",
      );
      await defender.print_and_wait(
        "살짝 엇갈린 두 다리는 부끄러워하는 것이겠지……",
      );
      await defender.print_and_wait(
        "부드럽기만 한 것이 아니다. 평소 단련한 성과로 육봉은 단단히 받쳐져 있다.",
      );
      await defender.print_and_wait([
        "발정한 원숭이처럼, ",
        defender.get_colored_name(),
        "의 육봉이 열기에 미쳐 ",
        d_call_a,
        "의 사타구니를 앞뒤로 문지른다.",
      ]);
    } else {
      await defender.print_and_wait("미끈해지고 반짝이기 시작했다.");
      await defender.print_and_wait("조금 능숙해지기 시작했다.");
      await defender.print_and_wait("이제 얌전히 견딜 수 없다.");
      await defender.print_and_wait("조금……쓸쓸해지기 시작한 걸까……");
      await attacker.say_and_wait([a_call_d, '……']);
      await defender.print_and_wait("눈까지……젖어 있다……");
      await defender.print_and_wait("두 다리를 이렇게 쓰이면 이리 되는 법이다.");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async ask_non_penetrative(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.say_and_wait(
        ["자기가 무슨 말을 하는지 알고는 있는 거야……", d_call_a, '……'],
        true,
      );
      if (!attacker.id && defender.race > 0) {
        await defender.say_and_wait(
          `아아……아아……그런 눈으로 보고 있었구나, 자기 담당의 두 다리를.`,
          true,
        );
      }
      await attacker.print_and_wait("정말 집어넣었다.");
      await attacker.print_and_wait([
        "육봉을……",
        a_call_d,
        "의 다문 허벅지 사이로 집어넣는다.",
      ]);
      await attacker.print_and_wait(
        "부드럽다. 따뜻하다. 대단해, 대단해, 대단해……",
      );
      await attacker.print_and_wait(
        "살짝 엇갈린 두 다리는 부끄러워하는 것이겠지……",
      );
      await attacker.print_and_wait(
        "부드럽기만 한 것이 아니다. 평소 단련한 성과로 육봉은 단단히 받쳐져 있다.",
      );
      await attacker.print_and_wait([
        "발정한 원숭이처럼, ",
        attacker.get_colored_name(),
        "의 육봉이 열기에 미쳐 ",
        a_call_d,
        "의 사타구니를 앞뒤로 문지른다.",
      ]);
    } else {
      await attacker.print_and_wait("미끈해지고 반짝이기 시작했다.");
      await attacker.print_and_wait("조금 능숙해지기 시작했다.");
      await attacker.print_and_wait("이제 얌전히 견딜 수 없다.");
      await attacker.print_and_wait("조금……쓸쓸해지기 시작한 걸까……");
      await defender.say_and_wait([d_call_a, '……']);
      await attacker.print_and_wait("눈까지……젖어 있다……");
      await attacker.print_and_wait("두 다리를 이렇게 쓰이면 이리 되는 법이다.");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async sixty_nine(attacker, defender, is_first) {
    if (is_first) {
      await era.printAndWait("미끈하게 겹친 몸.");
      await era.printAndWait("입술이 구멍에 닿고, 입술이 육봉에도 닿는다.");
      await era.printAndWait("짭짤한 즙이 두 사람의 몸을 돈다……짐승처럼");
      await era.printAndWait(
        "누가 먼저인지는 알 수 없다. 일부러 츄릅츄릅 음란한 소리를 내자, 다른 쪽도 보고 따라 하듯 이어 간다.",
      );
      await era.printAndWait([
        attacker.get_colored_name(),
        '/',
        defender.get_colored_name(),
        '「',
        { color: attacker.color, content: "츄릅츄릅" },
        { color: defender.color, content: "으으으츄릅……" },
        '……」',
      ]);
      await era.printAndWait("맞닿은 몸이 열기를 띠어 간다.");
      await era.printAndWait("뜨거워서 머리가 녹아내린다……");
    } else {
      await era.printAndWait(
        "본래 청초한 한 줄 봉제선이었던 꽃잎이 핥겨 벌어지고 느슨해져 있다.",
      );
      await era.printAndWait(
        "본래 사나웠던 충혈된 육봉이, 튀어 오르는 작은 혀 때문에 사랑스러운 빛을 두르고 있다.",
      );
      await era.printAndWait([
        attacker.get_colored_name(),
        '/',
        defender.get_colored_name(),
        '「',
        { color: attacker.color, content: "하아……" },
        { color: defender.color, content: "하아……" },
        '……」',
      ]);
      await era.printAndWait(
        "땀에 젖은 두 몸이 서로 비비며 드문 휴전을 탐하고 있다……",
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async armpit_intercourse(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait("최악이야.");
      await defender.print_and_wait([
        "눈앞에서 팔을 높이 든 ",
        d_call_a,
        "의 부끄러운 듯 흔들리는 엉덩이에서 그런 불만이 읽힌다.",
      ]);
      await defender.print_and_wait("이것만큼은 어쩔 수 없다.");
      await attacker.say_and_wait("응——");
      await defender.print_and_wait([
        d_call_a,
        "의 겨드랑이를 육봉의 커다란 귀두가 훑고 있다.",
      ]);
      await defender.print_and_wait(
        "김이 피어오르는 겨드랑이 살이 드나드는 움직임에 맞춰 옅게 붉어져, 정말 성기관으로 변해 가는 것 같다……",
      );
      await defender.print_and_wait([
        "이것을 완전히 당연하다고 여기지는 못해, ",
        defender.get_colored_name(),
        "의 움직임에는 아직 망설임이 있다……",
      ]);
      await defender.print_and_wait([
        "……망설이면서도 육봉으로 문지른다. 등을 돌린 ",
        d_call_a,
        "의 겨드랑이 구멍을……",
      ]);
    } else {
      await attacker.print_and_wait("어쩐지……이상해지기 시작했다……");
      await attacker.print_and_wait("겨드랑이는 이런 일에 쓰는 기관이었던가……");
      await attacker.print_and_wait("게다가 이런 감촉이 있었다니……");
      await attacker.print_and_wait([
        "육봉에 물들어 무언가 변해 가는 모양이다. 얼굴이 새빨개진 ",
        attacker.get_colored_name(),
        "은(는) 불안한 듯, 이미 츄릅츄릅 능숙하게 육봉님을 섬기고 있다.",
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async ask_armpit_intercourse(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await defender.say_and_wait("어?");
      await attacker.print_and_wait("한 번 더 말해 줄래……");
      await attacker.print_and_wait([
        "눈앞의 ",
        a_call_d,
        "의 내키지 않는 얼굴이 말없이 재촉해서……",
      ]);
      await attacker.say_and_wait("겨드랑이에 육봉을 문지르게 해 주세요!");
      await defender.say_and_wait('……');
      await attacker.print_and_wait("최악이야.");
      await attacker.print_and_wait([
        "눈앞에서 팔을 높이 든 ",
        a_call_d,
        "의 부끄러운 듯 흔들리는 엉덩이에서 그런 불만이 읽힌다.",
      ]);
      await attacker.print_and_wait("이것만큼은 어쩔 수 없다.");
      await defender.say_and_wait("응——");
      await attacker.print_and_wait([
        a_call_d,
        "의 겨드랑이를 육봉의 커다란 귀두가 훑고 있다.",
      ]);
      await attacker.print_and_wait(
        "김이 피어오르는 겨드랑이 살이 드나드는 움직임에 맞춰 옅게 붉어져, 정말 성기관으로 변해 가는 것 같다……",
      );
      await attacker.print_and_wait([
        "이것을 완전히 당연하다고 여기지는 못해, ",
        attacker.get_colored_name(),
        "의 움직임에는 아직 망설임이 있다……",
      ]);
      await attacker.print_and_wait([
        "……망설이면서도 육봉으로 문지른다. 등을 돌린 ",
        a_call_d,
        "의 겨드랑이 구멍을……",
      ]);
    } else {
      await defender.print_and_wait("어쩐지……이상해지기 시작했다……");
      await defender.print_and_wait("겨드랑이는 이런 일에 쓰는 기관이었던가……");
      await defender.print_and_wait("게다가 이런 감촉이 있었다니……");
      await defender.print_and_wait([
        "육봉에 물들어 무언가 변해 가는 모양이다. 얼굴이 새빨개진 ",
        defender.get_colored_name(),
        "은(는) 불안한 듯, 이미 츄릅츄릅 능숙하게 육봉님을 섬기고 있다.",
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async force_armpit_intercourse(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        "팔이 끌어 올려진 ",
        a_call_d,
        "은(는) 지금 무슨 생각을 하고 있을까…",
      ]);
      await attacker.print_and_wait("분명 좋은 말은 아니겠지……");
      await attacker.print_and_wait("최악이야.");
      await attacker.print_and_wait([
        "눈앞에서 팔을 높이 든 ",
        a_call_d,
        "의 부끄러운 듯 흔들리는 엉덩이에서 그런 불만이 읽힌다.",
      ]);
      await attacker.print_and_wait("이것만큼은 어쩔 수 없다.");
      await defender.say_and_wait("응——");
      await attacker.print_and_wait([
        a_call_d,
        "의 겨드랑이를 육봉의 커다란 귀두가 훑고 있다.",
      ]);
      await attacker.print_and_wait(
        "김이 피어오르는 겨드랑이 살이 드나드는 움직임에 맞춰 옅게 붉어져, 정말 성기관으로 변해 가는 것 같다……",
      );
      await attacker.print_and_wait([
        "이것을 완전히 당연하다고 여기지는 못해, ",
        attacker.get_colored_name(),
        "의 움직임에는 아직 망설임이 있다……",
      ]);
      await attacker.print_and_wait([
        "……망설이면서도 육봉으로 문지른다. 등을 돌린 ",
        a_call_d,
        "의 겨드랑이 구멍을……",
      ]);
    } else {
      await defender.print_and_wait("어쩐지……이상해지기 시작했다……");
      await defender.print_and_wait("겨드랑이는 이런 일에 쓰는 기관이었던가……");
      await defender.print_and_wait("게다가 이런 감촉이 있었다니……");
      await defender.print_and_wait([
        "육봉에 물들어 무언가 변해 가는 모양이다. 얼굴이 새빨개진 ",
        defender.get_colored_name(),
        "은(는) 불안한 듯, 이미 츄릅츄릅 능숙하게 육봉님을 섬기고 있다.",
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async foot_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait("웃음을 지을 것이다.");
      await defender.print_and_wait([
        "이를테면 ",
        attacker.get_colored_name(),
        ' ',
        defender.race > 0 ? "레이스를 내달리는 그 두 발로 " : '',
        "눈앞의 육봉에 발을 올리고, 그 못된 것이 흥분해 오히려 발바닥을 들어 올리면 분명 웃음을 지을 것이다.",
      ]);
      await defender.print_and_wait(
        "저속한 것을 보았을 때의 혐오와 경멸 어린 웃음……특이한 성벽을 가진 연인을 향한 흥미와 포용의 웃음……천진하게 그저 재미있어 웃는 웃음……",
      );
      await defender.print_and_wait([
        "눈앞의 ",
        d_call_a,
        "은(는) 어느 쪽일까…어쨌든 육봉을 더욱 흥분시키는 종류겠지.",
      ]);
    } else {
      await defender.print_and_wait("알아차린 모양이다.");
      await defender.print_and_wait(
        "자신의 발바닥을 침범하는 이 육봉은 연약한 물건이 아니다.",
      );
      await defender.print_and_wait([
        d_call_a,
        "이(가) 육봉을 밟는 움직임은 한결 자연스러워졌다.",
      ]);
      await defender.print_and_wait([
        "마치 ",
        defender.get_colored_name(),
        "의 육봉을 발바닥에 올리는 것이 타고난 재능인 것처럼.",
      ]);
      await defender.print_and_wait("스으……");
      await defender.print_and_wait([
        "그저 상상했을 뿐인데, ",
        defender.get_colored_name(),
        "은(는) 다시 아랫배가 뜨거워진다.",
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async ask_foot_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait("……역시?");
      await attacker.print_and_wait([
        "도를 넘은 저속한 부탁을 들었을 텐데도, 눈앞의 ",
        a_call_d,
        "은(는) 예상했다는 듯 여유로운 얼굴을 보인다.",
      ]);
      await attacker.print_and_wait("이렇게……노골적이었던 걸까……");
      await attacker.print_and_wait("웃음을 지을 것이다.");
      await attacker.print_and_wait([
        "이를테면 ",
        defender.get_colored_name(),
        ' ',
        attacker.race > 0 ? "레이스를 내달리는 그 두 발로 " : '',
        "눈앞의 육봉에 발을 올리고, 그 못된 것이 흥분해 오히려 발바닥을 들어 올리면 분명 웃음을 지을 것이다.",
      ]);
      await attacker.print_and_wait(
        "저속한 것을 보았을 때의 혐오와 경멸 어린 웃음……특이한 성벽을 가진 연인을 향한 흥미와 포용의 웃음……천진하게 그저 재미있어 웃는 웃음……",
      );
      await attacker.print_and_wait([
        "눈앞의 ",
        a_call_d,
        "은(는) 어느 쪽일까…어쨌든 육봉을 더욱 흥분시키는 종류겠지.",
      ]);
    } else {
      await attacker.print_and_wait("알아차린 모양이다.");
      await attacker.print_and_wait(
        "자신의 발바닥을 침범하는 이 육봉은 연약한 물건이 아니다.",
      );
      await attacker.print_and_wait([
        a_call_d,
        "이(가) 육봉을 밟는 움직임은 한결 자연스러워졌다.",
      ]);
      await attacker.print_and_wait([
        "마치 ",
        attacker.get_colored_name(),
        "의 육봉을 발바닥에 올리는 것이 타고난 재능인 것처럼.",
      ]);
      await attacker.print_and_wait("스으……");
      await attacker.print_and_wait([
        "그저 상상했을 뿐인데, ",
        attacker.get_colored_name(),
        "은(는) 다시 아랫배가 뜨거워진다.",
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async force_foot_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        "이런 요구에 불만을 느끼고 얼굴을 돌리는 것도 당연하겠지.",
      );
      await attacker.print_and_wait(
        "다만 이쪽 업계에서는 밟을 때 얼굴을 돌리는 것이 포상이다.",
      );
      await attacker.print_and_wait("아아……이쪽을 봤다……");
      await attacker.print_and_wait("웃음을 지을 것이다.");
      await attacker.print_and_wait([
        "이를테면 ",
        defender.get_colored_name(),
        ' ',
        attacker.race > 0 ? "레이스를 내달리는 그 두 발로 " : '',
        "눈앞의 육봉에 발을 올리고, 그 못된 것이 흥분해 오히려 발바닥을 들어 올리면 분명 웃음을 지을 것이다.",
      ]);
      await attacker.print_and_wait(
        "저속한 것을 보았을 때의 혐오와 경멸 어린 웃음……특이한 성벽을 가진 연인을 향한 흥미와 포용의 웃음……천진하게 그저 재미있어 웃는 웃음……",
      );
      await attacker.print_and_wait([
        "눈앞의 ",
        a_call_d,
        "은(는) 어느 쪽일까…어쨌든 육봉을 더욱 흥분시키는 종류겠지.",
      ]);
    } else {
      await attacker.print_and_wait("알아차린 모양이다.");
      await attacker.print_and_wait(
        "자신의 발바닥을 침범하는 이 육봉은 연약한 물건이 아니다.",
      );
      await attacker.print_and_wait([
        a_call_d,
        "이(가) 육봉을 밟는 움직임은 한결 자연스러워졌다.",
      ]);
      await attacker.print_and_wait([
        "마치 ",
        attacker.get_colored_name(),
        "의 육봉을 발바닥에 올리는 것이 타고난 재능인 것처럼.",
      ]);
      await attacker.print_and_wait("스으……");
      await attacker.print_and_wait([
        "그저 상상했을 뿐인데, ",
        attacker.get_colored_name(),
        "은(는) 다시 아랫배가 뜨거워진다.",
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async tail_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait("능숙해……");
      await defender.print_and_wait([
        "부탁한 ",
        defender.get_colored_name(),
        "조차 의외라고 느낄 만큼 능숙하게, 굽이치는 털결의 말꼬리가 육봉을 감싼다.",
      ]);
      await defender.print_and_wait("이 각도에서 보는 엉덩이도 각별하다.");
      if (attacker.sex_code !== 1) {
        await defender.print_and_wait([
          "긴 말꼬리에 배어들 수밖에 없는 은은한 여자의 냄새가 ",
          defender.get_colored_name(),
          "의 육봉을 어느 때보다 흥분시킨다.",
        ]);
      }
      await attacker.say_and_wait('……');
      await defender.print_and_wait([
        "……그 부풀어 오르는 열기를 느낀 모양이다. 등을 돌린 ",
        d_call_a,
        "은(는) 붉어진 귀의 움직임까지 사랑스러워졌다.",
      ]);
    } else {
      await defender.print_and_wait(
        "움직임이 거칠어지기 시작했다……또는 능숙해졌다.",
      );
      await defender.print_and_wait(
        "음란한 즙으로 끈적해진 꼬리는 털을 빛나게 하는 그 손질로부터 무언가를 깨닫는다.",
      );
      await defender.print_and_wait("가령, 이 육봉이 좋아하는 감는 힘의 세기.");
      await defender.print_and_wait("가령, 긁히면 떨리는 부위.");
      if (attacker.sex_code !== 1) {
        await defender.print_and_wait(
          "가령, 꼬리 아래의 음부도 더욱……격렬하게……",
        );
      }
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async ask_tail_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait("하아……");
      await attacker.print_and_wait(["눈앞의 ", a_call_d, "의 긴 한숨."]);
      await attacker.print_and_wait("조금 지나친 걸까……");
      await attacker.print_and_wait([
        "자제하지 못하는 자신을 반성하는 것 같지만, 지금 ",
        attacker.get_colored_name(),
        "은(는) 그래도 가만히 눈앞의 ",
        a_call_d,
        '。',
      ]);
      await attacker.print_and_wait("능숙해……");
      await attacker.print_and_wait([
        "부탁한 ",
        attacker.get_colored_name(),
        "조차 의외라고 느낄 만큼 능숙하게, 굽이치는 털결의 말꼬리가 육봉을 감싼다.",
      ]);
      await attacker.print_and_wait("이 각도에서 보는 엉덩이도 각별하다.");
      if (defender.sex_code !== 1) {
        await attacker.print_and_wait([
          "긴 말꼬리에 배어들 수밖에 없는 은은한 여자의 냄새가 ",
          attacker.get_colored_name(),
          "의 육봉을 어느 때보다 흥분시킨다.",
        ]);
      }
      await defender.say_and_wait('……');
      await attacker.print_and_wait([
        "……그 부풀어 오르는 열기를 느낀 모양이다. 등을 돌린 ",
        a_call_d,
        "은(는) 붉어진 귀의 움직임까지 사랑스러워졌다.",
      ]);
    } else {
      await attacker.print_and_wait(
        "움직임이 거칠어지기 시작했다……또는 능숙해졌다.",
      );
      await attacker.print_and_wait(
        "음란한 즙으로 끈적해진 꼬리는 털을 빛나게 하는 그 손질로부터 무언가를 깨닫는다.",
      );
      await attacker.print_and_wait("가령, 이 육봉이 좋아하는 감는 힘의 세기.");
      await attacker.print_and_wait("가령, 긁히면 떨리는 부위.");
      if (defender.sex_code !== 1) {
        await attacker.print_and_wait(
          "가령, 꼬리 아래의 음부도 더욱……격렬하게……",
        );
      }
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async force_tail_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait("뜻밖의 침묵?");
      await attacker.print_and_wait([
        "아마 ",
        attacker.get_colored_name(),
        "의 저속한 성벽에 어느 정도 각오가 되어 있었던 모양인지, ",
        a_call_d,
        "은(는) 이번에는 뜻밖일 만큼 순종적이다.",
      ]);
      await attacker.print_and_wait("능숙해……");
      await attacker.print_and_wait([
        "부탁한 ",
        attacker.get_colored_name(),
        "조차 의외라고 느낄 만큼 능숙하게, 굽이치는 털결의 말꼬리가 육봉을 감싼다.",
      ]);
      await attacker.print_and_wait("이 각도에서 보는 엉덩이도 각별하다.");
      if (defender.sex_code !== 1) {
        await attacker.print_and_wait([
          "긴 말꼬리에 배어들 수밖에 없는 은은한 여자의 냄새가 ",
          attacker.get_colored_name(),
          "의 육봉을 어느 때보다 흥분시킨다.",
        ]);
      }
      await defender.say_and_wait('……');
      await attacker.print_and_wait([
        "……그 부풀어 오르는 열기를 느낀 모양이다. 등을 돌린 ",
        a_call_d,
        "은(는) 붉어진 귀의 움직임까지 사랑스러워졌다.",
      ]);
    } else {
      await attacker.print_and_wait(
        "움직임이 거칠어지기 시작했다……또는 능숙해졌다.",
      );
      await attacker.print_and_wait(
        "음란한 즙으로 끈적해진 꼬리는 털을 빛나게 하는 그 손질로부터 무언가를 깨닫는다.",
      );
      await attacker.print_and_wait("가령, 이 육봉이 좋아하는 감는 힘의 세기.");
      await attacker.print_and_wait("가령, 긁히면 떨리는 부위.");
      if (defender.sex_code !== 1) {
        await attacker.print_and_wait(
          "가령, 꼬리 아래의 음부도 더욱……격렬하게……",
        );
      }
    }
  },
  /**
   * @author 天马闪光蹄
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async hair_fuck(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.say_and_wait("읏——");
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        "은(는) 엉거주춤하게 앉아, 눈앞의 익숙한 모습을 바라보며 살짝 두려움을 느낀다.",
      ]);
      await attacker.print_and_wait([
        a_call_d,
        "은(는) 의미심장하게 웃으며 허리를 내밀어 ",
        attacker.get_colored_name(),
        "에게 다가간다.",
      ]);
      await attacker.print_and_wait([
        "뜨거운 막대 모양의 물건이 거스를 수 없는 의지를 담아 이마로 내밀어지고, ",
        attacker.get_colored_name(),
        "은(는) 침을 삼키며 스스로 고개를 들어 맞이한다. 손가락으로 머리카락을 쓸어 모아 찔러 오는 긴 창에 감고 작업을 시작한다.",
      ]);
    } else {
      await attacker.print_and_wait("사락사락……");
      await attacker.print_and_wait("손바닥과 머리카락이 그것을 거듭 주무르고 문지른다.");
      await attacker.print_and_wait("이 감촉……저게……아직도 부풀고 있어……");
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        "은(는) 머리카락 끝이 간지럽고 숨도 거칠어진다.",
      ]);
    }
  },
  /**
   * @author 天马闪光蹄
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async ask_hair_fuck(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await defender.say_and_wait([d_call_a, '……？']);
          await attacker.print_and_wait([
            defender.get_colored_name(),
            "은(는) 기대와 부끄러움이 섞인 얼굴로 살짝 고개를 든다. 정수리에 뜨겁고 보기보다 무거운 감촉이 닿는다(기분 탓일까?). 가까운 거리와 짙은 페로몬이 정보를 처리하는 머릿속을 어지럽힌다.",
          ]);
          await attacker.print_and_wait([
            defender.get_colored_name(),
            "은(는) 쪼그려 앉아, ",
            attacker.get_colored_name(),
            "의 사타구니 아래에서 얼굴이 저절로 저속해져 간다……",
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            "은(는) 자신도 모르게 미소 짓는다. 양손을 뻗어 살며시 ",
            defender.sex,
            "의 양쪽 귀 옆에 대고 부드럽게 머리를 받친다……그리고 허리를 움직이기 시작한다.",
          ]);
          await attacker.print_and_wait([
            "사타구니가 머리카락 사이를 오가며 정돈된 짧은 머리를 흐트러뜨려 자신을 위한 길을 만든다. 털과 피부의 마찰에 끝이 젖어 움직임이 부드러워진다. 액체가 꼭대기에서 흘러 이미 의식이 희미해져 신음하는 ",
            defender.phy_sex_title,
            "의 속눈썹을 타고 더 아래로 떨어진다……",
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            "은(는) 그 광경을 보고 더욱 단단해진다.",
          ]);
          break;
        case 1:
          await defender.say_and_wait("그런 걸……하고 싶다고?!");
          await attacker.print_and_wait([
            '',
            attacker.get_colored_name(),
            "의 눈앞에 있는 ",
            a_call_d,
            "은(는) 「변태네」와 「어쩔 수 없지」가 섞인 목소리로 말을 마치고 한숨을 쉬며 가볍게 고개를 흔든다. 매끄러운 머리카락이 좋은 냄새를 싣고 ",
            attacker.get_colored_name(),
            "의 이미 밖으로 일어선 육근에 닿아 멈춘다.",
          ]);
          await attacker.print_and_wait("자신의 차례다.");
          await attacker.print_and_wait([
            "허리를 한 번 내밀어 자신의 그것을 비스듬히 목덜미로 미끄러뜨린다. 잔머리와 매끄러운 피부의 이중 자극에 ",
            attacker.get_colored_name(),
            "은(는) 자신도 모르게 한숨을 쉰다.",
          ]);
          await attacker.print_and_wait([
            defender.sex,
            "은(는) ",
            attacker.get_colored_name(),
            "의 그 얼굴에 눈썹을 치켜올리고, 살짝 고개를 기울여 한 손을 가볍게 ",
            attacker.get_colored_name(),
            "의 그것에 댄다. 세 겹의 힘으로 끼워 여러 감촉이 동시에 밀려들자, ",
            attacker.get_colored_name(),
            "은(는) 만족스럽게 숨을 내쉰다.",
          ]);
          break;
        case 2:
          await defender.say_and_wait("후후……");
          await attacker.print_and_wait([
            a_call_d,
            "은(는) 웃는다고도 할 수 없는 눈으로 ",
            attacker.get_colored_name(),
            "을(를) 바라본다. ",
            attacker.get_colored_name(),
            "은(는) 조금 찔리지만, 그래도 몸으로 ",
            defender.sex,
            "에게 그렇게 해 달라고 부탁한다.",
          ]);
          await attacker.print_and_wait([
            defender.sex,
            "은(는) 일부러 ",
            attacker.get_colored_name(),
            "을(를) 몇 초간 애태운 뒤 양손을 뒤로 돌려 긴 머리카락을 쓸어 모아 단숨에 들어 올린다——",
          ]);
          await attacker.print_and_wait([
            "여러 가닥의 머리카락이 ",
            attacker.get_colored_name(),
            "의 민감한 곳에 떨어져 차갑고 간지러워, ",
            attacker.get_colored_name(),
            "이(가) 스읍 하고 숨을 들이쉰다. 아니, 아직 끝이 아니다——",
          ]);
          await attacker.print_and_wait([
            defender.sex,
            "머리카락을 쓸어 모은 손이 이어지고, 열 손가락이 머리카락과 함께 통을 만들어 ",
            attacker.get_colored_name(),
            "의 사타구니를 완전히 빈틈없이 감싼 뒤 훑기 시작한다——",
          ]);
          await attacker.print_and_wait([
            "이번 자극은 ",
            attacker.get_colored_name(),
            "에게 아마 너무 과했을 것이다.",
          ]);
      }
    } else {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await attacker.print_and_wait(
            "귀끝을 쓰다듬는 것은 잔털의 감촉을 즐기기 위해서가 아니다. 살짝 구부려 자신의 소중한 것에 문지르기 위해서다.",
          );
          await attacker.print_and_wait([
            "미끄러뜨린다. 평소에는 맛볼 수 없는 털의 자극에 ",
            attacker.get_colored_name(),
            "은(는) 비정상적일 만큼 흥분한다.",
          ]);
          await attacker.print_and_wait([
            "아래에 있는 ",
            defender.phy_sex_title,
            "이(가) 희미한 신음을 흘려, 더욱 ",
            attacker.get_colored_name(),
            "의 욕망을 부추긴다.",
          ]);
          break;
        case 1:
          await attacker.print_and_wait([
            "세 부위……세 겹의 감촉……눈앞의 ",
            defender.phy_sex_title,
            "이(가) 스스로 ",
            attacker.get_colored_name(),
            "에게 이런 봉사를 해 준다……",
          ]);
          await attacker.print_and_wait("이보다 기분 좋은 일은 없다.");
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            "은(는) 자신도 모르게 입꼬리를 올리고 눈을 감아 음미한다.",
          ]);
          break;
        case 2:
          await attacker.print_and_wait(
            "가늘게 떨어지는 물의 장막처럼, 부드럽게 감기는 얇은 비단처럼.",
          );
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            "의 그것은 기묘한 구멍 속으로 들어갔다.",
          ]);
          await attacker.print_and_wait([
            "거듭 문지르자, ",
            attacker.get_colored_name(),
            "은(는) 자신도 모르게 두 다리를 움츠리고 육근 끝에서 무색의 액체가 넘친다……",
          ]);
      }
    }
  },
  /**
   * @author 天马闪光蹄
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async force_hair_fuck(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await defender.say_and_wait("어……응!");
          await attacker.print_and_wait([
            "갑자기 ",
            attacker.get_colored_name(),
            "이(가) 눈앞의 이 ",
            defender.phy_sex_title,
            "의 얼굴을 잡고 뜨겁게 충혈된 그것을 ",
            defender.sex,
            "의 귀와 머리카락 사이에 댄 뒤, ",
            defender.sex,
            "의 머리를 흔들며 허리의 왕복 운동을 빠르게 한다. 피부와 털 사이에서 문질러지는 육근은 곧 흥분해 부풀기 시작한다.",
          ]);
          await attacker.print_and_wait([
            defender.sex,
            "은(는) 무슨 일이 일어났는지도 모른 채 생각을 포기한다. 바깥세상을 받아들이는 부위가 이미 ",
            attacker.get_colored_name(),
            "의 사타구니가 내달리는 곳이 되어 있다.",
          ]);
          break;
        case 1:
          await defender.say_and_wait("하아, 잠깐, 잠깐만!");
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            "의 눈을 보고, ",
            defender.sex,
            "은(는) 다음에 무슨 일이 일어날지 눈치챈 듯 한 손으로 뒤통수를 감싸고 다른 손을 황급히 내젓는다. 하지만 ",
            attacker.get_colored_name(),
            "은(는) 아랑곳하지 않는다.",
          ]);
          await attacker.print_and_wait([
            "성큼 다가가, ",
            defender.sex,
            "의 어깨를 누르고 허리를 내밀어 그것을 ",
            defender.phy_sex_title,
            "에게 은밀한 뒷목에서, 매끄러운 머리카락과 하얀 피부 사이로 기분 좋게 미끄러뜨린다.",
          ]);
          break;
        case 2:
          await defender.say_and_wait("좋아……정 하고 싶다면", true);
          await attacker.print_and_wait([
            "서로 바라본 끝에, 눈앞의 ",
            defender.phy_sex_title,
            "은(는) 뒤로 물러나고, ",
            attacker.get_colored_name(),
            "은(는) 승자의 얼굴로 전리품에 손을 댄다.",
          ]);
          await attacker.print_and_wait([
            "주로 쓰는 손을 뻗어, ",
            attacker.get_colored_name(),
            "은(는) ",
            defender.sex,
            "의 아름답고 은은한 향이 나는 긴 머리카락을 만지작거리며 짓궂게 웃는다. 한 움큼 쓸어 모아 난폭하게 ",
            defender.phy_sex_title,
            "이(가) 평소 정성껏 다듬어 둔 그것을 자신의 물건에 감아 가볍게 당기며 평소와 다른 훑기의 쾌감을 얻는다.",
          ]);
      }
    } else {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await attacker.print_and_wait([
            "사타구니 아래에 있는 ",
            a_call_d,
            "의 은밀한 곳을 종횡으로 누비며, ",
            attacker.get_colored_name(),
            "의 육근은 더욱 흥분하고 있다.",
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            "에게 아래에서 눌린 ",
            a_call_d,
            "의 표정은 이제 알아보기 어렵다……붉어진 얼굴과 귀뿌리만이 ",
            defender.sex,
            "의 현재 상태를 엿보게 한다.",
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            "은(는) 입가를 핥으며 더욱 열심히 문지른다.",
          ]);
          break;
        case 1:
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            "은(는) 미끄러운 피부 위를 거듭 문지른다……분신을 쓰다듬는 가느다란 머리카락 끝을 지나, 육체의 기분 좋음과 정신의 정복을 맛본다.",
          ]);
          break;
        case 2:
          await attacker.print_and_wait([
            "평소에는 가지런하고 매끄럽던 머리카락이 ",
            attacker.get_colored_name(),
            "에게 엉망이 된다.",
          ]);
          await attacker.print_and_wait([
            "음모와 몇 가닥의 머리카락이 얽혀, ",
            attacker.get_colored_name(),
            "의 수컷 기운을 ",
            defender.sex,
            "의 냄새 위에 덧씌운다.",
          ]);
          await attacker.print_and_wait([
            "거칠게 움직이고 거칠게 새긴다……",
            attacker.get_colored_name(),
            "은(는) 거칠게 ",
            defender.sex,
            "의 소중한 것으로 욕망을 푼다.",
          ]);
      }
    }
  },
  /** 性交系 */
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {PrintedSpan} d_call_a 被挿入側から挿入側への呼びかけ
   * @param {boolean} is_anal_sex 尻穴性交か
   */
  async missionary(attacker, defender, d_call_a, is_anal_sex = false) {
    await defender.print_and_wait(
      "이게……서로의 체온을 가장 잘 느낄 수 있는 자세겠지.",
    );
    if (is_anal_sex) {
      await defender.say_and_wait("하지만 그곳의 온도까지 기억하고 싶어…❤️", true);
    }
    await defender.print_and_wait([
      "이른바 정상위, 또는 미셔너리. 서로 얽힌 두 사람을 정면에서 보면, 마치 ",
      d_call_a,
      "이(가) 품에 파고들어 모유를 빠는 모습 같다.",
    ]);
    await defender.print_and_wait([
      d_call_a,
      "의 몸이 ",
      defender.get_colored_name(),
      "의 몸을 덮는다. 단단한 육봉이 거침없이 음부에 들어가고, ",
      defender.get_colored_name(),
      "의 길고 가는 다리가 조금 꼴사나운 모습으로 ",
      d_call_a,
      "의 허리 양옆에 뻗어 발바닥을 천장으로 향한 채 팽팽해진다……",
    ]);
    await defender.print_and_wait("뜨거워……뜨거워……");
    await defender.print_and_wait("……뜨거워❤️");
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {boolean} is_anal_sex 尻穴性交か
   */
  async doggy_style(attacker, defender, is_anal_sex = false) {
    await attacker.print_and_wait("강아지처럼……");
    await attacker.print_and_wait(
      "저 다리……발끝을 뻗고 무릎을 굽혀 젖은 허리를 높이 받친 다리……",
    );
    await attacker.print_and_wait(
      "그 위에 받쳐진 것은……강아지처럼 무의식적으로 흔들리는 엉덩이.",
    );
    await attacker.print_and_wait([
      "선정적인 모습으로 아래에 깔린 ",
      defender.race > 0 ? "말귀 달린 " : '',
      defender.adult_sex_title,
      "은(는) 몸의 떨림이 멈추지 않는다. 보고 있으면 마른 입술을 적시고 싶어진다. 육봉에 미약이 된 듯, 뒤에서 낮게 신음하는 ",
      attacker.get_colored_name(),
      "은(는) 주머니까지 밀어 넣을 것 같다.",
    ]);
    if (is_anal_sex) {
      await attacker.print_and_wait(
        "……아니, 그러면 엉덩이로 주머니까지 짜낼 수 있잖아",
      );
      await attacker.print_and_wait("썰렁한 농담 같다, 정말.");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {PrintedSpan} d_call_a 被挿入側から挿入側への呼びかけ
   * @param {boolean} is_vagina 秘部性交か
   */
  async sitting(attacker, defender, d_call_a, is_vagina = true) {
    await defender.print_and_wait("생각했던 것보다 부끄러워……");
    await defender.print_and_wait([
      "그 ",
      is_vagina ? "음부" : "항문",
      "을(를) 격렬하게 찔리면서 빤히 쳐다보이고 있다……❤️",
    ]);
    await defender.print_and_wait([
      "못된 육봉에 온몸이 흐물흐물해졌을 텐데도, ",
      d_call_a,
      "의 시선을 받으며 억지로 허리를 편다.",
    ]);
    await defender.print_and_wait([
      "웃음이 담긴 시선이 붉어진 얼굴 위를……",
      defender.sex_code !== 1 ? "흔들리는 부드러운 가슴 위를……" : '',
      "육봉의 흔적이 희미하게 솟은 아랫배를…질리지도 않고 오간다……",
    ]);
    await defender.print_and_wait("아직도 부족하다는 건가——");
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {PrintedSpan} d_call_a 被挿入側から挿入側への呼びかけ
   * @param {boolean} is_anal_sex 尻穴性交か
   */
  async hug_sitting(attacker, defender, d_call_a, is_anal_sex = false) {
    await defender.print_and_wait("보이지 않기 위한 자세.");
    await defender.print_and_wait("하지만 아직도 보고 있잖아——");
    await defender.print_and_wait([
      "뒤로 손을 짚어 몸을 받치며, ",
      defender.get_colored_name(),
      "은(는) 육봉을 삼켰다 뱉는 엉덩이를 무의식적으로 비튼다.",
    ]);
    await defender.print_and_wait([
      "한탄하듯 깨닫는다. 뒤에 있는 ",
      attacker.get_colored_name(),
      "의 뜨거운 눈길은 역시 그곳에 모인다……그래서 ",
      d_call_a,
      "에게 보이지 않는 작은 얼굴만은 녹아내릴 듯 저속한 표정이 되어 있다.",
    ]);
    if (is_anal_sex) {
      await defender.print_and_wait(
        "위험해❤️ 어째서 육봉에 시달리는 곳이 저기인 거야……",
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {boolean} is_anal_sex 尻穴性交か
   */
  async standing(attacker, defender, a_call_d, is_anal_sex = false) {
    await attacker.print_and_wait("다른 자세보다 자궁에 닿을 것 같다……");
    await attacker.print_and_wait([
      "무의식적으로 깊이 숨을 들이쉬며, ",
      attacker.get_colored_name(),
      "은(는) 몸을 앞으로 기울여 아름다운 다리 한쪽을 머리 위까지 올린 ",
      a_call_d,
      "에게 바싹 붙는다.",
    ]);
    await attacker.print_and_wait([
      "부푼 두 주머니가 구멍 입구에 밀착하고, 육봉 모양으로 솟은 아랫배도 ",
      attacker.get_colored_name(),
      "의 아랫배와 빈틈없이 겹친다.",
    ]);
    await defender.say_and_wait("하아……스으……❤️");
    if (is_anal_sex) {
      await defender.say_and_wait(
        "아직……음부 한 겹이 사이에 있을 텐데❤️",
        true,
      );
      await defender.say_and_wait("어째서……❤️", true);
    }
    await attacker.print_and_wait(
      "지나치게 가까운 거리가 두 사람의 아랫배를 움직이는 깊은 호흡을 이 교접의 양념으로 만든다.",
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {boolean} is_anal_sex 尻穴性交か
   */
  async hug_standing(attacker, defender, is_anal_sex = false) {
    await attacker.print_and_wait("허리가 금방 주저앉는다.");
    await attacker.print_and_wait([
      "설마 ",
      defender.race > 0 ? defender.uma_sex_title : "성인",
      "인데도 두 발만으로는 서 있지 못하고, 무언가를 붙잡고 엉덩이를 내밀어야 겨우 서 있는 꼴사나운 모습이 될 줄이야.",
    ]);
    await attacker.print_and_wait(
      "레이스나 조교와도 무관한 안짱다리 자세로 무너져, 발끝은 체중을 너무 많이 받아 땅에 파묻힐 것 같은데도 뒤쪽 발꿈치는 육봉이 드나들 때마다 높이 뜬다.",
    );
    await attacker.print_and_wait([
      "스스로 육봉 아래로 기어들듯, ",
      is_anal_sex ? "항문" : "음부",
      "의 주인은 무릎을 앞으로 내민다. 힘없는 안짱다리 때문에 가까워진 무릎이 육봉이 깊이 들어갈 때마다 거의 맞닿고, 땀에 젖은 몸이 더욱 흔들린다……",
    ]);
    if (is_anal_sex) {
      await defender.say_and_wait(
        "이래서는 안 되는데……하지만, 하지만 이 자세에 육봉이 벌리는 항문……위험해……",
        true,
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {PrintedSpan} d_call_a 被挿入側から挿入側への呼びかけ
   * @param {boolean} is_anal_sex 尻穴性交か
   */
  async suspended_congress(attacker, defender, d_call_a, is_anal_sex = false) {
    await defender.print_and_wait("달아날 수 없어……");
    await defender.print_and_wait("이 자세가 된 순간부터 달아날 수 없다.");
    await defender.print_and_wait([
      "몸이 높이 들리고, ",
      d_call_a,
      "에게 엉덩이를 받쳐진 채 육봉 위에 올라간다.",
    ]);
    if (is_anal_sex) {
      await defender.print_and_wait(
        "부끄러워하는 항문이 억지로 육봉의 칼집이 된다……그것만이 아니다……",
      );
    }
    await defender.print_and_wait([
      '',
      d_call_a,
      "의 허리 양옆으로 벌어진 다리에 허락된 자유는 감을지 말지뿐이다. 몸을 완전히 육봉에 맡기지 않으려면 두 손은 ",
      d_call_a,
      "을(를) 끌어안을 수밖에 없다.",
    ]);
    await defender.print_and_wait([
      '',
      d_call_a,
      "의 허리를 타고 흘러내릴까……분명……그렇게 될 거야❤️",
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {PrintedSpan} d_call_a 被挿入側から挿入側への呼びかけ
   * @param {boolean} is_anal_sex 尻穴性交か
   */
  async hug_suspended_congress(
    attacker,
    defender,
    d_call_a,
    is_anal_sex = false,
  ) {
    await defender.print_and_wait("달아날 수 없어……");
    await defender.print_and_wait("이 자세가 된 순간부터 달아날 수 없다.");
    await defender.print_and_wait([
      "몸이 높이 들리고, ",
      d_call_a,
      "에게 엉덩이를 받쳐진 채 육봉 위에 올라간다.",
    ]);
    if (is_anal_sex) {
      await defender.print_and_wait(
        "부끄러워하는 항문이 억지로 육봉의 칼집이 된다……그것만이 아니다……",
      );
    }
    await defender.print_and_wait([
      '',
      d_call_a,
      "의 허리 양옆으로 벌어진 다리에 허락된 자유는 감을지 말지뿐이다. 몸을 완전히 육봉에 맡기지 않으려면 두 손은 ",
      d_call_a,
      "을(를) 끌어안을 수밖에 없다.",
    ]);
    await defender.print_and_wait([
      '',
      d_call_a,
      "의 허리를 타고 흘러내릴까……분명……그렇게 될 거야❤️",
    ]);
    await defender.print_and_wait([
      "하아……지금만큼은 ",
      d_call_a,
      "의 얼굴을 보고 싶다.",
    ]);
    await defender.print_and_wait([
      "거친 신음 속에서 표정이 황홀하게 녹아들고, 등을 돌린 ",
      d_call_a,
      "의 ",
      defender.get_colored_name(),
      "은(는) 조금씩 허리를 굽혀, 제어할 수 없는 얼굴을 늘어진 머리카락 그늘에 숨긴다.",
    ]);
    await defender.say_and_wait("하아……❤️");
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {PrintedSpan} d_call_a 被挿入側から挿入側への呼びかけ
   * @param {boolean} is_anal_sex 尻穴性交か
   */
  async ask_cowgirl(attacker, defender, d_call_a, is_anal_sex = false) {
    await defender.print_and_wait("삼켰어……");
    await defender.print_and_wait([
      "똑바로 누운 ",
      d_call_a,
      "와(과) 열 손가락을 깍지 끼고, 조이고 탄력 있는 윤기 나는 두 다리로 내려앉아 구멍 입구에 뜨거운 귀두를 머금을 틈을 찾는다……",
    ]);
    await defender.print_and_wait([
      "스스로 앉다니……",
      d_call_a,
      "은(는) 짓궂어……",
    ]);
    if (is_anal_sex) {
      await defender.say_and_wait("게다가 항문으로……", true);
    }
    await attacker.say_and_wait("허리도 흔들어 줘.");
    await defender.print_and_wait([
      "이번에는 ",
      defender.get_colored_name(),
      "의 느릿한 움직임을 기다릴 필요가 없다. 조이는 구멍에 머금어진 육봉이 민감한 질의 살을 살짝 더듬으면, ",
      defender.get_colored_name(),
      "의 달아날 곳 없는 허리는 태엽이 감긴 듯 쉬지 않고 ",
      d_call_a,
      "의 앞에서 춤추기 시작한다……",
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {boolean} is_vagina 秘部性交か
   */
  async ask_stimulate_glans_by_hole(attacker, defender, is_vagina = true) {
    await attacker.say_and_wait("아아……힘들어……");
    await defender.print_and_wait([
      "질척질척 ",
      defender.get_colored_name(),
      "의 소중한 ",
      is_vagina ? "음부" : "항문",
      "을(를) 흐트러져 젖을 때까지 찧던 육봉이 갑자기 멈춘다.",
    ]);
    await defender.print_and_wait(
      "입으로는 힘들다고 하면서도 사타구니의 육봉은 솔직하게 단단하다.",
    );
    await attacker.say_and_wait("나머지는 부탁해.");
    await defender.print_and_wait(
      "고집을 부려 못된 육봉을 빼 버리자고 생각하는 순간도 있다. 하지만 츄릅, 하고 음부에서 조금만 떨어져도……몸은 견딜 수 없이 쓸쓸하다……",
    );
    await defender.print_and_wait([
      "그래서 ",
      defender.get_colored_name(),
      "은(는) 허리를 비튼다.",
    ]);
    if (defender.race > 0) {
      await defender.print_and_wait(
        "하얀 엉덩이가 젖은 말꼬리의 반주에 맞춰 춤춘다.",
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async stimulate_g_spot(attacker, defender, a_call_d) {
    await attacker.print_and_wait("더 깊숙이.");
    await defender.say_and_wait("이상해——");
    await attacker.print_and_wait([
      a_call_d,
      "은(는) 거의 ",
      attacker.get_colored_name(),
      "의 몸속으로 파고들 것 같다. 만족할 줄 모르는 ",
      attacker.get_colored_name(),
      "은(는) 바싹 붙은 거리를 넘어도 망설임 없이 허리를 내밀어 단단한 육봉을 앞으로 보내고, 입술도 음부도 자궁도 거기에 홀린 소리를 내게 한다……",
    ]);
    await defender.say_and_wait("구오오옷호오오오————❤️❤️");
    await attacker.print_and_wait(
      "이른바 G스폿이란 이런 것이다. 그전까지 어떤 사람이었든, 상냥했든 명랑했든, 수컷 냄새가 나는 단단한 육봉이 그 주름을 밀어 벌리면 단번에 교접에 빠진 저속한 암컷으로 타락한다.",
    );
    await attacker.print_and_wait(
      "아름다운 몸은 육봉이 찌를 때마다 웅크러지고, 목에는 탁한 음란한 소리만 남으며, 바로 곁의 자궁만 뜨겁다.",
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {PrintedSpan} d_call_a 被挿入側から挿入側への呼びかけ
   */
  async stimulate_womb(attacker, defender, d_call_a) {
    await defender.print_and_wait("육봉 없이 음부를 기분 좋게 만드는 마법.");
    await defender.print_and_wait([
      d_call_a,
      "은(는) 자신만만하게 웃으며 다섯 손가락을 벌려 커다란 손바닥을 아랫배에 댄다.",
    ]);
    await defender.print_and_wait("분명 따뜻하다. 하지만……");
    await defender.say_and_wait("으홋으응——");
    await defender.print_and_wait("꼴사나운 소리가 갑자기 새어 나왔다——");
    await defender.print_and_wait(["파묻힐 것 같아……", d_call_a, "의 손바닥……"]);
    await defender.print_and_wait("그와 대조적으로 자궁만이 두근두근 흥분한다……");
    await defender.print_and_wait([
      "마치 ",
      d_call_a,
      "의 마술 같은 손에 붙잡힌 것 같아……❤️",
    ]);
    await defender.print_and_wait("……거짓말이지❤️");
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {boolean} is_vagina 秘部性交か
   */
  async ask_fuck(attacker, defender, is_vagina = true) {
    const motion = era.get(`tcvar:${attacker}:体位`) === motion_enum.rev;
    const towards = era.get(`tcvar:${attacker}:朝向`) === towards_enum.right;
    await attacker.print_and_wait("꼴사나워……");
    await attacker.print_and_wait("쾌감을 구걸하려고 이런 짓까지……");
    await attacker.say_and_wait("하아……❤️");
    await attacker.print_and_wait([
      "항복하듯 ",
      (motion ^ towards) > 0 ? "두 다리를 벌린다" : "엉덩이를 높이 든다",
      ". 떨리는 손가락으로 오므라든 ",
      is_vagina ? "음순" : "항문",
      "을(를) 바깥으로 벌려 안쪽의 분홍빛 살을 드러낸다.",
    ]);
    await attacker.say_and_wait("부탁이야, 넣어 줘……");
    await attacker.say_and_wait("육봉을……넣어 줘——");
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {boolean} is_vagina 秘部性交か
   */
  async cowgirl(attacker, defender, a_call_d, is_vagina = true) {
    await attacker.print_and_wait("하아……");
    await attacker.print_and_wait([
      "이렇게 가까이서 본다……아래에 있는 ",
      a_call_d,
      "의 얼굴을 본다……자신이 얼마나 최악인지 깨닫게 될 뿐이다❤️",
    ]);
    await attacker.print_and_wait([
      "자포자기하여 몸을 흔들고, 배덕감에 굴복한 ",
      attacker.get_colored_name(),
      "의 몸은 옅은 분홍빛을 띠며, ",
      is_vagina ? "음부" : "항문",
      "에 머금은 육봉을 필사적으로 섬기고 있다.",
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {boolean} is_vagina 秘部性交か
   */
  async stimulate_glans_by_hole(
    attacker,
    defender,
    a_call_d,
    is_vagina = true,
  ) {
    await attacker.print_and_wait("솔직히……지금 이것만으로도 승천할 것 같다……");
    await attacker.print_and_wait([
      "엉망이다……범해지고 있는 ",
      is_vagina ? "음부" : "항문",
      "의 현재 모습도, 완전히 녹아내린 몸도……",
    ]);
    await attacker.print_and_wait([
      "더욱 엉망인 것은……아직 뭔가 할 수 있을 것 같은 ",
      attacker.get_colored_name(),
      "본인……",
    ]);
    await attacker.print_and_wait(
      "하아……그저 이상하다고 외치는 대신 깊이 숨을 들이쉬면……",
    );
    await attacker.print_and_wait([
      "「쪽」 하고 오므라들었다. 일 초도 버티지 못하고 몸이 경련하며 무너진다. 하지만 그 순간, ",
      attacker.get_colored_name(),
      "의 ",
      is_vagina ? "음부" : "항문",
      "으로 깊이 입 맞추듯 ",
      a_call_d,
      "의 귀두를 감쌌다.",
    ]);
    await attacker.print_and_wait(
      "하아……귀두가 튀어 오른다. 기뻐하는 것이겠지……",
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {boolean} is_vagina 秘部性交か
   */
  async ask_stimulate_hole(attacker, defender, is_vagina = true) {
    await attacker.say_and_wait("부탁이야……");
    await attacker.say_and_wait("부탁이야……");
    if (attacker.race > 0 && attacker.id) {
      await attacker.print_and_wait([
        "이 ",
        attacker.uma_sex_title,
        "으로서 이건 너무나 꼴사나워……",
      ]);
    } else {
      await attacker.print_and_wait(
        "성인으로서, 트레이너로서 이건 너무나 꼴사나워……",
      );
    }
    await attacker.print_and_wait("하지만 도저히 참을 수 없어——");
    await attacker.print_and_wait("원하니까——");
    await attacker.print_and_wait(
      "자궁 깊은 곳을 굉장한 육봉으로, 굉장히, 거칠고, 세게……",
    );
    await attacker.print_and_wait("「쪽——하고 가장 깊은 곳까지 닿아 줘❤️");
    await attacker.print_and_wait("몸을 「휙」 웅크리게 해서——");
    await attacker.print_and_wait([
      "세상에서 가장 기분 좋은 ",
      is_vagina ? "음부" : "음부와 항문",
      '——',
    ]);
    await attacker.print_and_wait(
      "그러니까 부탁이야……그 뒤에는 어떻게 해도 좋으니까❤️",
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {PrintedSpan} d_call_a 被挿入側から挿入側への呼びかけ
   */
  async continue_fucking(attacker, defender, d_call_a) {
    if (era.get(`tcvar:${defender.id}:接近高潮`)) {
      await defender.say_and_wait("오오오오오오————❤️");
      await defender.print_and_wait([
        defender.get_colored_name(),
        "의 몸이 파렴치하게 ",
        d_call_a,
        "의 앞에서 경련하듯 격렬하게 뒤틀리며 젖은 몸의 따뜻한 물방울을 주변으로 흩뿌린다.",
      ]);
      await defender.print_and_wait(
        "정작 본인에게는 그런 체면을 신경 쓸 여유가 없다. 끈적한 머리카락이 이마에 붙고 아랫배에서는 두근거림이 날뛴다. 안에 육봉도 손가락도 짓궂은 혀도 없는데, 벌어졌다 닫히는 음부는 연근처럼 긴 은빛 실을 끌며 뜨거운 김을 내뿜는다.",
      );
      await defender.say_and_wait("가……이제……가 버려……", true);
      await defender.say_and_wait("빨리……빨리……가게 해 줘❤️", true);
      await defender.print_and_wait([
        "한 번 힘을 잃었다가 다시 마지못해 팽팽해진다. 자신도 왜 몸이 그렇게 움직이는지 모르겠다.",
        d_call_a,
        "에게 그토록 희롱당한 몸은 이제 야성에 따를 뿐인 것이겠지.",
      ]);
      await defender.print_and_wait("어떻게 가는지, 언제 가게 될지");
      await defender.print_and_wait(
        "새하얘진 머리는 멈췄다가 다시 움직인 뒤, 그런 것밖에는 생각하지 못하는 망가진 뇌가 된다.",
      );
      await defender.say_and_wait('——❤️');
      await defender.say_and_wait("……와……오는 거야❤️", true);
    } else {
      await defender.say_and_wait("하아……");
      await defender.print_and_wait(
        "그저 숨을 쉬려던 것뿐인데, 목에서 자신도 놀랄 만큼 음란한 소리가 쥐어짜였다……❤️",
      );
      await defender.print_and_wait("제대로 기뻐하고 있어……몸이……");
      await defender.print_and_wait("부끄러움……? 저항……?");
      await defender.print_and_wait(
        "언제부터였을까, 그런 감정은 새어 나온 신음과 함께 사라져 있었다. 지금의……솔직한 자신은 더 원한다……더욱더❤️",
      );
      await defender.print_and_wait([
        "더 밀착하고 싶다.",
        d_call_a,
        "의 몸에 밀착해 그 열기를 느끼고 싶다. 더욱, ",
        d_call_a,
        "에게 더 저속한 것을 배우고 싶다. 이 젖고 뜨거운 몸을 남 앞에 나설 수 없을 만큼 부끄러운 모습으로 가지고 놀아 줬으면 한다……",
      ]);
      await defender.say_and_wait(
        "……하아……이후의 자신을 설득할 수 있다는 보장이 없으니까……",
        true,
      );
      await defender.say_and_wait("……그러니까 제대로……지금 이 순간에❤️", true);
    }
  },
  /** 性虐系 */
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async insult(attacker, defender) {
    const buffer = [];
    if (era.get('tflag:强奸') === defender.id) {
      buffer.push(() =>
        attacker.say_and_wait("인간 말종! 강간마! 죽어 버려!"),
      );
    }
    if (era.get(`talent:${attacker.id}:小恶魔`)) {
      buffer.push(() => attacker.say_and_wait("허접～허접～"));
    }
    if (era.get(`talent:${attacker.id}:抖S`)) {
      buffer.push(() =>
        attacker.say_and_wait([
          "바보! 쓸모없는 ",
          defender.sex_slave_title,
          "! 범해지고 싶어 하는 변태!",
        ]),
      );
    }
    if (buffer.length === 0) {
      buffer.push(() =>
        attacker.say_and_wait([
          "그렇게 욕을 먹고 싶어, ",
          defender.sex_slave_title,
          '？',
        ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @author 黑衣剑士-星爆气流斩准备就绪
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async hit_face_by_penis(attacker, defender, a_call_d, d_call_a) {
    if (attacker.id > 0) {
      await defender.print_and_wait([
        d_call_a,
        "에게 머리카락을 잡혀 힘으로는 저항할 수 없음을 깨닫고, ",
        d_call_a,
        "의 사타구니 아래 육봉이 흉악하게 고개를 들자, ",
        defender.get_colored_name(),
        "의 가슴에 불길한 예감이 스친다.",
      ]);
      await attacker.say_and_wait([
        a_call_d,
        "～내 냄새를 제대로 기억해 줘～",
      ]);
      await defender.print_and_wait([
        "저항할 수 없다. 뺨에 얻어맞는 감촉이 들고, ",
        d_call_a,
        "의 육봉이 풍기는 흉악한 냄새가 ",
        defender.get_colored_name(),
        "을(를) 자신도 모르게 굴복시키려 한다.",
      ]);
      await defender.print_and_wait([
        "얼굴에 ",
        d_call_a,
        "의 육봉 자국이 남고, ",
        defender.get_colored_name(),
        "은(는) 고개를 들어 다음 뺨 때리기를 기다린다",
      ]);
    } else {
      await attacker.print_and_wait([
        a_call_d,
        "의 머리카락을 움켜쥐고, ",
        attacker.get_colored_name(),
        "은(는) 강제로 자신의 육봉을 ",
        defender.sex,
        "의 얼굴에 들이대어, ",
        defender.sex,
        "의 얼굴을 ",
        attacker.get_colored_name(),
        "이(가) 육봉으로 찌르는 모습에 웃음이 새어 나온다.",
      ]);
      await defender.say_and_wait("으으으!!!");
      await attacker.print_and_wait([
        "수컷 냄새가 가득한 육봉 때문에 ",
        a_call_d,
        "의 코가 끊임없이 실룩거리고, ",
        attacker.get_colored_name(),
        "은(는) ",
        a_call_d,
        "의 머리카락을 움켜쥔 채 허리를 흔든다. 육봉이 ",
        a_call_d,
        "의 매끄러운 뺨에 닿아 음란한 소리를 내고, ",
        a_call_d,
        "의 눈도 몽롱해져 간다.",
      ]);
    }
  },
  /** 乱交系 */
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 連続行動の初回か
   * @param {string} a_penis 主動側の肉棒の大きさ
   */
  async ask_double_blow_job(attacker, defender, supporter, is_first, a_penis) {
    if (is_first) {
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        "은(는) 다리를 벌리고, ",
        a_penis,
        " 육봉이 오만하게 일어서자, ",
        defender.get_colored_name(),
        "와(과) ",
        supporter.get_colored_name(),
        "은(는) ",
        attacker.get_colored_name(),
        "의 신호에 입을 벌려 다가간다……",
      ]);
    } else {
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        "의 신호에, ",
        defender.get_colored_name(),
        "와(과) ",
        supporter.get_colored_name(),
        "은(는) 번갈아 입으로 육봉을 섬긴다……",
      ]);
    }
  },
  /**
   * @author 雞雞
   * @author 黑奴队长
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 連続行動の初回か
   * @param {string} d_penis 受動側の肉棒の大きさ
   * @param {string} s_penis 助手の肉棒の大きさ
   */
  async ask_double_fuck(
    attacker,
    defender,
    supporter,
    is_first,
    d_penis,
    s_penis,
  ) {
    const buffer = [];
    if (is_first) {
      buffer.push(
        async () => {
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            "은(는) 두 다리를 벌리고, ",
            defender.get_colored_name(),
            "와(과) ",
            supporter.get_colored_name(),
            "에게 음부를 벌려 보이며 두 사람의 일어선 육봉을 보고 입술을 핥는다",
          ]);
          await attacker.print_and_wait([
            '',
            attacker.get_colored_name(),
            "의 노골적인 유혹에, ",
            defender.get_colored_name(),
            "와(과) ",
            supporter.get_colored_name(),
            "은(는) 참지 못하고, ",
            attacker.get_colored_name(),
            "의 몸에 달려들어 유혹하는 음부를 번갈아 찌른다……",
          ]);
        },
        async () => {
          const motion = era.get(`tcvar:${attacker}:体位`) === motion_enum.rev;
          const towards =
            era.get(`tcvar:${attacker}:朝向`) === towards_enum.right;
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            (motion ^ towards) > 0 ? "은(는) 두 다리를 벌리고 " : "은(는) 네 발로 엎드려 ",
            "엉덩이를 흔들며, ",
            defender.get_colored_name(),
            "와(과) ",
            supporter.get_colored_name(),
            "에게 번갈아 육봉을 깊이 넣어 달라는 뜻을 보인다.",
          ]);
        },
      );
    } else {
      buffer.push(
        async () => {
          if (d_penis === s_penis) {
            await attacker.print_and_wait([
              attacker.get_colored_name(),
              "은(는) ",
              defender.get_colored_name(),
              "와(과) ",
              supporter.get_colored_name(),
              "에게 양쪽으로 끼인 채, 두 자루의 ",
              d_penis,
              " 육봉을 번갈아 ",
              attacker.get_colored_name(),
              "의 음란한 음부가 삼켜 간다",
            ]);
          } else {
            await attacker.print_and_wait([
              attacker.get_colored_name(),
              "은(는) ",
              defender.get_colored_name(),
              "와(과) ",
              supporter.get_colored_name(),
              "에게 양쪽으로 끼인 채, 두 자루의 ",
              d_penis,
              " 육봉과 ",
              s_penis,
              " 육봉을 번갈아 ",
              attacker.get_colored_name(),
              "의 음란한 음부가 삼켜 간다",
            ]);
          }
          await attacker.print_and_wait([
            "꿀물이 세 사람의 사타구니를 적시고, 이따금 ",
            attacker.get_colored_name(),
            "의 달콤한 소리가 샌다……",
          ]);
        },
        async () => {
          await attacker.print_and_wait([
            defender.get_colored_name(),
            "와(과) ",
            supporter.get_colored_name(),
            "의 서로 다른 육봉과 각자의 삽입 방식, ",
          ]);
          await attacker.print_and_wait(
            "그리고 두 사람에게 번갈아 범해지고 있다는 배덕감 때문에, ",
          );
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            "은(는) 삽입될 때마다 보통이 아닌 쾌감을 맛본다.",
          ]);
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_double_penetration(attacker, defender, supporter, is_first) {
    if (is_first) {
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        "은(는) 기승위로 ",
        defender.get_colored_name(),
        "을(를) 음부 깊숙이 받아들인 뒤, ",
        supporter.get_colored_name(),
        "에게도 자신의 항문에 들어와 달라는 뜻을 보인다……",
      ]);
    } else {
      await attacker.print_and_wait([
        defender.get_colored_name(),
        "와(과) ",
        supporter.get_colored_name(),
        "이(가) 함께 계속 공략하는 것은 ",
        attacker.get_colored_name(),
        "의 앞뒤 구멍이다. ",
      ]);
      await attacker.print_and_wait(
        "두 겹의 쾌감과 두 사람에게 동시에 범해진다는 배덕감 때문에, ",
      );
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        "은(는) 삽입될 때마다 소리를 지르지 않을 수 없다……",
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 連続行動の初回か
   * @param {boolean} is_vagina 秘部性交か
   */
  async ask_spit_roast(
    attacker,
    defender,
    supporter,
    is_first,
    is_vagina = true,
  ) {
    const part_name = is_vagina ? "음부" : "항문";
    if (is_first) {
      const motion = era.get(`tcvar:${attacker}:体位`) === motion_enum.rev;
      const towards = era.get(`tcvar:${attacker}:朝向`) === towards_enum.right;
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        (motion ^ towards) > 0 ? "은(는) 두 다리를 벌리고 " : "은(는) 네 발로 엎드려 ",
        "엉덩이를 흔들며, ",
        defender.get_colored_name(),
        "에게 자신의 ",
        part_name,
        "에 넣어 달라는 뜻을 보이고, 욕심껏 ",
        supporter.get_colored_name(),
        "의 육봉을 입에 머금는다……",
      ]);
    } else {
      await attacker.print_and_wait([
        defender.get_colored_name(),
        "와(과) ",
        supporter.get_colored_name(),
        "이(가) 함께 계속 공략하는 것은 ",
        attacker.get_colored_name(),
        "의 입구멍과 ",
        part_name,
        '……',
      ]);
      await attacker.print_and_wait([
        "아래쪽의 쾌감과 입 안의 육봉이 숨을 빼앗는 충격 때문에, ",
        attacker.get_colored_name(),
        "의 머릿속에는 이제 육봉밖에 남아 있지 않다……",
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 連続行動の初回か
   * @param {boolean} d_has_penis 受動側に陰茎があるか
   * @param {boolean} s_has_penis 助手に陰茎があるか
   */
  async fuck_69(
    attacker,
    defender,
    supporter,
    is_first,
    d_has_penis,
    s_has_penis,
  ) {
    if (is_first) {
      await attacker.print_and_wait([
        defender.get_colored_name(),
        "은(는) 침대에 누워, ",
        supporter.get_colored_name(),
        "와(과) 서로의 ",
        d_has_penis
          ? s_has_penis
            ? "육봉"
            : "육봉과 음부"
          : s_has_penis
            ? "음부와 육봉"
            : "음부",
        "을(를) 핥으며, ",
      ]);
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        "은(는) 부풀도록 흥분한 육봉을 기다리지 못하고 ",
        defender.get_colored_name(),
        "의 음부에……",
      ]);
    } else {
      await attacker.print_and_wait([
        defender.get_colored_name(),
        "의 음부에서 튀는 꿀물이 ",
        supporter.get_colored_name(),
        "이(가) 열심히 핥고 있는, ",
        attacker.get_colored_name(),
        "의 육봉이 드나드는 곳의 얼굴을 적시고, ",
      ]);
      await attacker.print_and_wait([
        supporter.get_colored_name(),
        "도 ",
        defender.get_colored_name(),
        "의 입에 봉사받으며 달콤한 신음을 멈추지 못한다……",
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 連続行動の初回か
   */
  async double_fuck(attacker, defender, supporter, is_first) {
    if (is_first) {
      await defender.print_and_wait([
        defender.get_colored_name(),
        "은(는) ",
        attacker.get_colored_name(),
        "와(과) ",
        supporter.get_colored_name(),
        "에게 단숨에 짓눌리고, ",
      ]);
      await defender.print_and_wait([
        "두 사람은 ",
        defender.get_colored_name(),
        "의 기분 따위는 신경 쓰지 않는다.",
      ]);
      await defender.print_and_wait([
        "그저 번갈아 흥분해 높이 일어선 육봉을 ",
        defender.get_colored_name(),
        "의 음부에 힘껏 집어넣었다 뺀다……",
      ]);
    } else {
      await defender.print_and_wait([
        defender.get_colored_name(),
        "은(는) 끊임없이 ",
        attacker.get_colored_name(),
        "와(과) ",
        supporter.get_colored_name(),
        "의 육봉에 번갈아 범해지고 있다.",
      ]);
      await defender.print_and_wait(
        "어느 한쪽이 조금 지치면 다른 쪽이 대신 이어 간다.",
      );
      await defender.print_and_wait([
        "그저 ",
        defender.get_colored_name(),
        "의 즙이 튈 만큼 범해진 음부에는 숨 돌릴 틈도 없고, ",
      ]);
      await defender.print_and_wait("의식까지 자신에게서 멀어지는 것 같다……");
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 連続行動の初回か
   */
  async double_penetration(attacker, defender, supporter, is_first) {
    if (is_first) {
      await defender.print_and_wait([
        defender.get_colored_name(),
        "은(는) ",
        attacker.get_colored_name(),
        "에게 끌려가 음부에 삽입당하고, ",
      ]);
      await defender.print_and_wait([
        supporter.get_colored_name(),
        "도 동시에 ",
        defender.get_colored_name(),
        "의 항문에……",
      ]);
    } else {
      await defender.print_and_wait([
        attacker.get_colored_name(),
        "와(과) ",
        supporter.get_colored_name(),
        "이(가) 함께 계속 공략하는 것은 ",
        defender.get_colored_name(),
        "의 앞뒤 구멍이다. ",
      ]);
      await defender.print_and_wait(
        "두 겹의 쾌감과 두 사람에게 동시에 범해진다는 배덕감 때문에, ",
      );
      await defender.print_and_wait([
        '',
        defender.get_colored_name(),
        "은(는) 삽입될 때마다 소리를 억누르지 못하고 신음한다……",
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 連続行動の初回か
   * @param {boolean} is_vagina 秘部性交か
   */
  async spit_roast(attacker, defender, supporter, is_first, is_vagina = true) {
    const part_name = is_vagina ? "음부" : "항문";
    if (is_first) {
      await defender.print_and_wait([
        defender.get_colored_name(),
        "은(는) ",
        attacker.get_colored_name(),
        "와(과) ",
        supporter.get_colored_name(),
        "에게 단숨에 짓눌리고, ",
      ]);
      await defender.print_and_wait([
        "두 사람은 ",
        defender.get_colored_name(),
        "의 기분 따위는 신경 쓰지 않는다.",
      ]);
      await defender.print_and_wait([
        "앞뒤에서 흥분해 높이 일어선 육봉을 ",
        defender.get_colored_name(),
        "의 ",
        part_name,
        "와(과) 입구멍에 힘껏 집어넣었다 뺀다……",
      ]);
    } else {
      await defender.print_and_wait([
        attacker.get_colored_name(),
        "와(과) ",
        supporter.get_colored_name(),
        "이(가) 함께 계속 공략하는 것은 ",
        defender.get_colored_name(),
        "의 ",
        part_name,
        " 및 입구멍이다. ",
      ]);
      await defender.print_and_wait([
        "아래쪽의 쾌감과 입 안의 육봉이 숨을 빼앗는 충격 때문에, ",
        defender.get_colored_name(),
        "의 머릿속에는 이제 육봉밖에 남아 있지 않다……",
      ]);
    }
  },
  /** 道具系 */
  /**
   * @param {CharaTalk} chara 服薬者
   * @param {number} item 道具ID
   */
  async use_medicine(chara, item) {
    switch (item) {
      case medicine_enum.fron_k:
      case medicine_enum.fron_p:
        if (chara.sex_code === 0) {
          await era.printAndWait(
            [chara.get_colored_name(), "에게 흉악한 거근이 자랐다!"],
            { color: buff_colors[2] },
          );
        } else {
          await era.printAndWait([
            chara.get_colored_name(),
            "의 육봉이 더욱 우람해졌다!",
          ]);
        }
      // eslint-disable-next-line no-fallthrough
      case medicine_enum.uma_z:
        if (!era.get(`tcvar:${chara.id}:发情`)) {
          await era.printAndWait(
            [chara.get_colored_name(), "은(는) 흥분하기 시작했다"],
            { color: buff_colors[2] },
          );
        }
        break;
      case medicine_enum.drug_m:
        await era.printAndWait(
          [chara.get_colored_name(), "의 유방에서 젖이 흐르기 시작했다……"],
          { color: buff_colors[2] },
        );
    }
  },
};
