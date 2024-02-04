const EduEventMarks = require('#/data/event/edu-event-marks');

class SSEventMarks extends EduEventMarks {
    // 初次磨合
    beginning;
    // 要来试试运气吗
    play_dice;
    // 茶座与猫
    enjoy_cat;
    // 咖啡的味道要怎么样比较好呢?
    sugar_or_milk;
    // 达成三冠
    love;
    // 未达成三冠
    broken_love;
    // 称号检查 - G1三着以内
    g1_count;

    constructor() {
        super(400);
        EduEventMarks.register_marks(this);
        console.log(this.beginning);
    }
}

module.exports = SSEventMarks;