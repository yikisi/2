const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class DaiyaEduMarks99 extends EduEventMarks {
  // 不停打嗝SOS
  sos;
  // Sweepy5☆入团测验！
  sweepy5;
  // 过高的理想
  high_dream;
  // 追逐憧憬
  chase;
  // 坚硬的钻石在棉花里
  diamond_cotton;
  // 前往崇拜之人正等待着的高处
  high_place;
  // 新鲜！
  fresh;
  // Heartbeat · Excite
  heartbeat_excite;
  // 舞蹈练习
  dance_practice;
  // 禁忌特调
  banned_coffee;
  // 身为里见家的一员，身为赛马娘
  satono_uma;
  // 巷子大冒险
  street_adv;
  // 在便利商店前要特别小心
  shopping;
  // 在缤纷色彩之中
  in_colorful;
  // 首次赢G1
  win_g1;
  // 首次跑G1
  run_g1;

  constructor() {
    super(67);
    EduEventMarks.register_marks(this);
  }
}

module.exports = DaiyaEduMarks99;
