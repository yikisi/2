module.exports = class extends require('#/i18n/zh-CN/table/status-desc') {
  template = '[%NAME%]: %DESC%';

  remote =
    'Remote coaching; Trainer training bonuses do nothing, cannot train slackers, Fondness gain -25%, Fondness loss +50%.';

  pr_1 = 'Not really into it; Motivation cap drops by 1 stage.';
  pr_2 = 'Something weighing on the mind; Motivation cap drops by 2 stages.';
  pr_3 =
    'Low desire and low mood; Motivation cap drops by 3 stages. Cannot train or race.';
  pr_4 =
    'Total loss of control in an instant; Motivation cap drops by 4 stages. Cannot train or race.';

  eo_2 = 'All tingly... maybe time for a little hands-on work.';
  eo_3 = 'That flutter in the heart keeps growing...';
  eo_4 = 'Restless and wired—ready to snap! Cannot train or race.';

  buff207 = 'Exercise-based weight loss is more effective.';
  buff301 = (buff) => `Energy and Focus cost -${buff}%.`;
  buff305 = 'Migraine, Injury, and Fatigue clear faster...';
  buff303 = (buff) => `Renown gain +${buff}%, Renown loss -${buff}%.`;
  buff340 = (buff) => `Speed and Power training effect +${buff}%.`;
  buff341 = (buff1, buff2) =>
    `Wit training effect +${buff1}%, Skill Points from training +${buff2}%.`;
  buff342 = (buff) => `Stamina and Guts training effect +${buff}%.`;
  buff343 = (check) =>
    'Overseas expedition penalties are ' +
    (check > 0 ? 'reduced' : 'halved') +
    '.';
  buff344 = 'Spending Focus relieves stress more effectively.';
  buff345 = (buff) => `Training exp gain +${buff}%.`;
  buff346 = (check) =>
    'Training success rate and effect ' +
    (check > 0 ? 'increase' : 'increase slightly') +
    '.';
  // Use getters so other language packs that translate buff346 still share it through buff347/buff348
  // unless those packs override buff347 and buff348 themselves
  get buff347() {
    return this.buff346;
  }
  get buff348() {
    return this.buff346;
  }

  milk = 'Breast stimulation causes milk to leak.';

  pg_resume = 'The body is still working hard to recover.';
  pg_prebirth = 'About to give birth and welcome new life.';
  pg_normal = 'New life is already waiting to arrive.';

  train_debuff = '...surely it will not fail again; Training success rate -2%.';
  train_buff_1 = 'Believe in yourself—just believe! Training success rate +2%.';
  train_buff_2 =
    'If last time worked, this time is locked in! Training success rate +4%.';

  cum = 'mejiro is calling...';

  1 = 'The price of staying up all night; Energy and Focus cost +10%.';
  2 =
    'Does not want to train—just wants a break. Motivation bonuses do nothing, Training success rate -10%, Training effect -20%, and Fondness drops after training.';
  3 =
    'Too heavy—the track is crying out; Energy and Focus cost +10%, Speed gain -100%.';
  4 =
    'Even medicine has a downside—ease up; Motivation cannot rise, Wit performance -10%.';
  5 =
    'Injured! Cannot race or train, movement is limited, Power performance -50%.';
  6 =
    'Just raced and worn out; per stack: race stats -5%, Training success rate -10%, Training effect -5%, Power performance -5% (up to -30%).';
  7 = 'Not really following the words... per stack: race Guts and Wit -5%.';
  8 =
    'Weather, air, food—everything feels off... per stack: Training success rate -10%, race Speed, Stamina, and Power -5%.';
  9 =
    'Unfamiliar ceiling... and unfamiliar track; per stack: race aptitudes drop by 1 grade.';
  10 = 'Asleep... anything goes...';

  15 = 'Energy and Focus cost +10%, race stats +5%.';
  16 =
    'Detoxed and light on the feet; weight loss works better, drugs clear faster.';
  17 = 'Birthday—Fondness changes are doubled.';

  20 =
    'Hiding affection deep inside... Infatuation gain +50%, sleep sex chance +20%, confinement chance +10%. Will not confess unless it is a Great Success.';
  21 =
    'Growing disgust toward you... is it the drug, or what you have done? Fondness gain -50%, Fondness loss +50%, and Fondness falls each week.';
  22 =
    'Drugs have forced a temporary calm—Infatuation will not rise... for now.';
  23 =
    'A weird app that shows names, numbers, s... sexual history, and... nudes (nosebleed).';
  24 =
    'Two strange numbers float above every head... showing real Fondness and Infatuation.';
  25 =
    'Strange text floats above every head... showing all sexual abilities and experience.';
  26 =
    'Whether you are studying natural body beauty or planning weight control, this is essential... shows real body stats.';

  30 =
    'That time of the month; Libido builds faster, Energy and Focus cost +10%, all Pleasure caps -10%.';
  31 = 'Instinct is ready for conception.';
  32 =
    'Everyone knows that after maturity, one month every year is special... Libido builds faster, pregnancy is easier, Power and Wit performance -10%.';
  33 = 'For this turn only, Lewd Crest plugins can be adjusted.';

  36 = 'Gained a tool for mischief.';
  37 = 'Gained an e☆ven☆stronger tool for mischief.';

  40 =
    'Too late; lets sperm pass through condoms, and pregnancy becomes easier.';

  // Training
  tr_leader = 'You have the lead.';

  v_penis_v = 'Still has a shot at becoming a wizard.';
  v_penis_d = 'No longer qualified to become a wizard.';

  v_vagina_v = 'Not much real experience—waiting for a chance to train.';
  v_vagina_d = 'Leveled up in a dream.';
  v_vagina_r = 'Savoring that raw, first-time feel again.';

  tr_erect = 'It says: ready to go!';
  tr_lb_breast = 'Chest already slick with fluids.';
  tr_lb_vagina = 'Ready and waiting for you.';
  tr_lb_anal = 'Ready to be filled.';
  tr_br_erect = 'Nipples no longer hidden by inversion... try teasing them.';

  tr_tc_40 = 'Cannot act.';
  tr_tc_41 = 'Cannot act for now.';
  tr_tc_44 =
    'Lust is rising—some people should watch themselves; Pleasure gain +25%.';
  tr_tc_45 = (_, p) =>
    'Energy and Focus cost +10%, Pleasure gain +20%' +
    (p ? ', ejaculation volume +50%' : '') +
    '.';
  tr_tc_46 = (t) =>
    `Cock unusable for ${t} turns; gear up for the next wild round~`;
  tr_tc_48 = 'Eager for sex—more room for you... for now.';
  tr_tc_49 = 'The rear has more give, letting larger things in... for now.';
  tr_tc_57 = (t) => `Cannot orgasm for ${t} turns, Pleasure gain -10%.`;
};
