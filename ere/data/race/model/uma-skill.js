class UmaSkill {
  /**
   * @param {number} id
   * @param {number} score
   * @param {number} typeRace
   * @param {number} typeTrigger
   * @param {number} typeBuff
   * @param {number} typeDebuff
   * @param {number} typeRotation
   * @param {number} typeDistance
   * @param {number} typeGround
   * @param {number} typeStyle
   * @param {number} typeCurve
   * @param {number} typePhase
   * @param {number} typeFinal
   * @param {number} typeRush
   * @param {number} typeTrack
   * @param {number} triggerLeft
   * @param {number} triggerRight
   * @param {number} typeSpan400
   * @param {number} typeMess
   * @param {number[]} attrBonus
   * @param {{velocityReal:number,velocityIdeal:number,acceleration:number,stamina:number}} baseBuff
   * @param {{velocityReal:number,velocityIdeal:number,acceleration:number,stamina:number}} baseDebuff
   */
  constructor(
    id,
    score,
    typeRace,
    typeTrigger,
    typeBuff,
    typeDebuff,
    typeRotation,
    typeDistance,
    typeGround,
    typeStyle,
    typeCurve,
    typePhase,
    typeFinal,
    typeRush,
    typeTrack,
    typeSpan400,
    typeMess,
    triggerLeft,
    triggerRight,
    attrBonus,
    baseBuff,
    baseDebuff,
  ) {
    // 技能id
    this.id = id;
    // 用于评分计算的分数
    this.score = score;
    // 比赛相关的技能
    this.typeRace = typeRace;
    // 是否需触发
    this.typeTrigger = typeTrigger;
    this.typeBuff = typeBuff;
    this.typeDebuff = typeDebuff;
    // 顺逆时针判定
    this.typeRotation = typeRotation;
    // 赛道长度限制判定
    this.typeDistance = typeDistance;
    // 草地泥地判定
    this.typeGround = typeGround;
    // 跑法限制判定
    this.typeStyle = typeStyle;
    // 直道弯道判定
    this.typeCurve = typeCurve;
    // 战术阶段判定
    this.typePhase = typePhase;
    // 最终直弯判定
    this.typeFinal = typeFinal;
    // 最终冲刺判定
    this.typeRush = typeRush;
    // 赛马场，用RaceInfo.trackEnum
    this.typeTrack = typeTrack;
    // 根干距离
    this.typeSpan400 = typeSpan400;
    // 对应场地状态（良、重等），用RaceInfo.messEnum
    this.typeMess = typeMess;
    // 触发左限赛程0%
    this.triggerLeft = triggerLeft;
    // 触发右限赛程100%
    this.triggerRight = triggerRight;
    // 属性bonus，用attrEnum作为下标取
    this.attrBonus = attrBonus;
    // 目标速度、真实速度、加速度和耐力的
    this.baseBuff = baseBuff;
    this.baseDebuff = baseDebuff;
  }
}

module.exports = UmaSkill;
