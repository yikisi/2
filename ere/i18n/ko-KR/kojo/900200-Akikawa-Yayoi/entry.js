module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900200-Akikawa-Yayoi/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ko-KR/kojo/900200-Akikawa-Yayoi/rec-302.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ko-KR/kojo/900200-Akikawa-Yayoi/daily-302.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ko-KR/kojo/900200-Akikawa-Yayoi/love-302.kojo');

  chairman = '내가 상사라네';
  chairman_desc =
    '이사장의 권한은 무한하다. 학원 지명으로 우마무스메를 모집할 때 명성 소모-25%.';

  npc_talk = '「잡담! 시간이 나면 놀러 오게나!」';
  npc_sex = '「정사! 내가 자네를 범해 주겠네!」';
  npc_out = '「외출! 함께 걸어 보세!」';
  get_npc_celebration = (celebration) => `「축하! ${celebration}, 축하하네!」`;
  npc_func = '「항의! 트레이닝하고 싶은 담당이 없다니!」';
  npc_bye = '「재회! 다녀오겠네!」';
};
