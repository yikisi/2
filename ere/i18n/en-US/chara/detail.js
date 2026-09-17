/**
 * @author Katze (translator)
 */
module.exports = class extends require('#/i18n/zh-CN/chara/detail') {
  base_title = 'Personal Info';
  get_base_summary_info = (
    skin,
    hair,
    body_hair,
    characteristic,
    sex_title,
  ) => [
    skin,
    ' skin, ',
    hair,
    ' ',
    body_hair,
    ' ',
    characteristic,
    ' ',
    sex_title,
  ];
  base_hair_info_template = 'Hairstyle: %HAIR%';
  base_birthday_info_template = 'Born on %YEAR%/%MONTH%/%DATE%';
  base_birthday_info_no_year_template = 'Born on %MONTH%/%DATE%';
  base_header_body = 'Body Measurements';
  get_base_body_info = (height, weight) => [
    'Height: ',
    height,
    'cm',
    { isDivider: true },
    'Weight: ',
    weight,
  ];
  base_body_weight_fat = 'A bit... happily plump...';
  base_body_weight_heavy = 'Slightly increased';
  base_body_weight_normal = 'Well managed';
  base_body_hidden = 'No further data available';
  get_base_female_info = (bust, cup, waist, hip) => [
    'Measurements: B',
    bust,
    ' (',
    cup,
    ' Cup) · W',
    waist,
    ' · H',
    hip,
  ];
  /** @param {CharaTalk} chara */
  get_base_hair_select = (chara) => [
    'Please select a new hairstyle for ',
    chara.get_colored_name(),
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} clothe
   */
  get_base_clothe_auto_select = (chara, clothe) => [
    'Currently, ',
    chara.get_colored_name(),
    ' will choose outfits based on the occasion and festivals when racing. For the URA Awards Ceremony and Hall of Fame week after career end, they will wear the Winning Outfit [',
    clothe,
    '].',
  ];
  /**
   * @param {CharaTalk} chara
   * @param {string} clothe
   */
  get_base_clothe_keep_some = (chara, clothe) => [
    'Currently, ',
    chara.get_colored_name(),
    ' will wear the Winning Outfit [',
    clothe,
    '] for races, the URA Awards Ceremony, and Hall of Fame week after career end.',
  ];
  base_clothe_change_confirm = 'Change it?';
  base_clothe_bt_auto_select = 'Auto Select';
  base_clothe_bt_keep_current = 'Keep Current';

  edu_title = 'Career Status';
  get_edu_score = (score) => ['Evaluation: ', score];
  edu_date_template = '%YEAR% %MONTH% Week %WEEK%';
  edu_date_with_playthrough_template =
    '%YEAR% %MONTH% Week %WEEK% (Playthrough %PLAYTHROUGH%)';
  get_edu_pt = (pt) => ['Skill Points: ', pt];
  edu_header_attr = 'Base Stats';
  get_edu_attr = (attr_name, attr) => [attr_name, ': ', attr];
  edu_header_adapt = 'Race Aptitudes';
  get_edu_adapt = (adapt_name, adapt) => [adapt_name, ': ', adapt];
  edu_header_aim_template = 'Career Goals (%CURRENT%/%TOTAL%)';
  edu_header_aim_finished = 'Career Goals (Complete!)';
  edu_aim_template = '%DESC% %CURRENT%/%REQUIRE% %MARK%';
  edu_aim_template_in_rec = '%DESC% %REQUIRE%';
  edu_aim_desc_template = '%EDUTIME% %RACE%';
  edu_aim_common_desc_1 = 'Place in a G1 race';
  edu_aim_common_desc_2 = 'Top 3 in a G2 or higher race';
  edu_aim_common_desc_3 = '1st place in any race';
  edu_aim_require_template = '%REQUIRE% times';
  edu_aim_require_1 = '1st';
  edu_aim_require_2 = 'Top 2';
  edu_aim_require_3 = 'Top 3';
  edu_aim_require_4 = 'Top 4';
  edu_aim_require_5 = 'Place';
  edu_aim_require_20 = 'Race';
  edu_aim_mark_done = '✔';
  edu_aim_mark_no = '✘';
  edu_header_language = 'Language Skills';

  skill_title = 'Racing Skills';
  skill_header_learnt = 'Learned Skills';
  skill_no_skill = 'None learned';
  skill_header_available = 'Unlockable Skills';
  skill_header_gene = 'Inherited Factors';
  skill_no_gene = 'None inherited';
  skill_header_gene_available = 'Inheritable Factors';

  race_title = 'Race Record';
  race_header_race = 'Race Results';
  race_no_race = 'No races yet';
  get_race_summary = (race_count, win, reward) => [
    race_count,
    ' races, ',
    win,
    ' wins, total prize money ',
    reward,
  ];
  get_race_result = (year, race, result) => [year, ' ', race, ' · ', result];
  race_result_tip_template = 'Favorite rank %POP% · %STYLE%';
  race_header_title = 'Exclusive Titles';

  relation_title = 'Social Relations';
  relation_header_relation = 'Relationships';
  get_relation_entry = (name, relation) => [name, ': ', relation];
  relation_no_relation = 'No characters of note';
  get_relation_take_care = (chara) => ['Looking after ', chara];
  get_relation_be_taken_care = (chara) => ['Being looked after by ', chara];
  relation_header_family = 'Immediate Family';
  get_relation_family_parents = (father, mother) => [
    'Father: ',
    father,
    ', Mother: ',
    mother,
  ];
  get_relation_first_child_as_father = (date, _, __, chara, is_boy) => [
    is_boy ? 'Eldest son' : 'Eldest daughter',
    ' ',
    chara,
    ' born on ',
    date,
  ];
  get_relation_first_child_as_mother = (date, _, __, chara, is_boy) => [
    'Gave birth to ',
    is_boy ? 'eldest son' : 'eldest daughter',
    ' ',
    chara,
    ' on ',
    date,
  ];
  relation_family_children_template = 'Currently %INFO%';
  relation_family_as_father_template = 'Father of %COUNT% children';
  relation_family_as_mother_template = 'Mother of %COUNT% children';
  relation_family_child_boy_title_template = '%NUMBER%th son';
  relation_family_child_girl_title_template = '%NUMBER%th daughter';
  get_relation_family_child_entry_as_father = (title, child, mother) => [
    title,
    ' ',
    child,
    ', mother: ',
    mother,
  ];
  get_relation_family_child_entry_as_mother = (title, child, father) => [
    title,
    ' ',
    child,
    ', father: ',
    father,
  ];
  relation_no_family = 'No characters to introduce';
  relation_bt_change_callname_to_you_template = 'Change how they call %YOU%';
  relation_bt_reset_callname_to_you_template = 'Reset how they call %YOU%';
  relation_bt_change_callname_template =
    'Change how you call this character (%CALLNAME%)';
  relation_bt_reset_callname = 'Reset how you call this character';
  get_relation_change_callname_to_you_confirm = (chara, you) => [
    'How should ',
    chara,
    ' address ',
    you,
    '?',
  ];
  get_relation_change_callname_confirm = (chara) => [
    'How do you want to call ',
    chara,
    '?',
  ];
  get_relation_change_callname_result = (caller, callee, callname) => [
    caller,
    ' now calls ',
    callee,
    ' ',
    callname,
  ];

  sex_title = 'Sexual Status';
  sex_exp_slave_2_accept =
    'Accepted the role of sex slave, savoring the pleasure of serving the Uma Musume mistresses';
  sex_exp_slave_2_reject =
    'Resisting the sex slave identity, not yet fully lost in the overwhelming physical pleasure';
  sex_exp_slave_3_accept =
    'Accepted the role of breeding sow, savoring the joy of carrying new life for the Uma Musume mistresses';
  sex_exp_slave_3_reject =
    'Resisting the breeding sow identity, stubbornly clinging to human pride';
  sex_header_inmon = 'Lewd Crest Customization';
  get_sex_exp = (you, sex_count, sleep_info, prison_info) => [
    'Slept with ',
    you,
    ' ',
    sex_count,
    ' times',
    ...sleep_info,
    ...prison_info,
  ];
  get_sex_sleep_exp = (sleep_count) => [
    ' (including ',
    sleep_count,
    ' sleep sex)',
  ];
  get_sex_prison_exp = (prison_count) => [
    ' (imprisoned ',
    prison_count,
    ' times)',
  ];
  get_sex_exp_you = (sex_count, sleep_info, prison_info) => [
    'Slept with other characters a total of ',
    sex_count,
    ' times',
    ...sleep_info,
    ...prison_info,
  ];
  get_sex_sleep_exp_you = (sleep_count) => [
    ' (including ',
    sleep_count,
    ' times being sleep-raped)',
  ];
  get_sex_prison_exp_you = (prison_count) => [
    ' (imprisoned ',
    prison_count,
    ' times)',
  ];
  sex_header_abl = 'Sexual Abilities';
  get_sex_abl_entry = (abl, level) => [abl, ': ', level];
  sex_header_jewel = 'Held Factors';
  sex_header_mark = 'Obtained Marks';
  sex_image_bt_change_template = 'Change training CG (Current: %CURRENT%)';
  sex_image_set_template = 'Set %SET%';
  sex_image_set_common = 'Common';
  sex_image_common_info = 'Using common training CG';
  sex_image_personal_info = 'Exclusive training CG available';

  exp_mouth_title = 'Info [Mouth]';
  exp_mouth_gift_desc =
    'Perfectly formed lips and mouth with natural suction that can make any opponent surrender';
  exp_mouth_trained_desc =
    'Itches and aches with loneliness no matter when or where... Already a filthy, lewd mouth';
  exp_mouth_drink_semen = 'Faint white stains linger on the lips...';
  exp_mouth_drink_semen_template = 'Just swallowed %SEMEN%ml of semen';
  get_exp_mouth_kiss = (date, chara) => [
    'First kiss given to ',
    chara,
    ' on ',
    date,
  ];
  get_exp_mouth_unknown_kiss = (date, chara) => [
    'In truth, the first kiss was already stolen by ',
    chara,
    ' on ',
    date,
  ];
  get_exp_mouth_kiss_count = (count) => ['Kissed ', count, ' times'];
  get_exp_mouth_blow_job = (date, chara) => [
    'On ',
    date,
    ', explored another use for this mouth with ',
    chara,
  ];
  get_exp_mouth_be_blow_job = (date, chara) => [
    'On ',
    date,
    ', was taught another use for this mouth by ',
    chara,
  ];
  get_exp_mouth_unknown_be_blow_job = (date, chara) => [
    'In truth, was already first used by ',
    chara,
    ' as early as ',
    date,
  ];
  get_exp_mouth_suck_count = (count) => ['Soothed the body ', count, ' times'];
  get_exp_mouth_blow_job_count = (count) => [
    'Sucked genitals ',
    count,
    ' times',
  ];
  get_exp_mouth_drink_semen = (date, chara) => [
    'On ',
    date,
    ', first tasted ',
    chara,
    "'s semen and became oddly captivated by its musky flavor",
  ];
  get_exp_mouth_unknown_drink_semen = (date, chara) => [
    'In truth, had already grown used to the taste of ',
    chara,
    "'s semen by ",
    date,
  ];
  get_exp_mouth_drink_semen_count = (count) => ['Drank ', count, 'ml of semen'];
  exp_mouth_poisoned_sens =
    'Every time warm semen is swallowed, the throat grows restless and needy';
  exp_mouth_poisoned_meek =
    'Every time warm semen is swallowed, a wave of happiness follows';
  exp_mouth_poisoned_both =
    'Every time warm semen is swallowed, the throat grows happily restless';
  get_exp_mouth_drink_secretion = (date, chara) => [
    'On ',
    date,
    ', first drank the sweet nectar of pleasure from ',
    chara,
    "'s pink hole",
  ];
  get_exp_mouth_unknown_drink_secretion = (date, chara) => [
    'In truth, was already fed ',
    chara,
    "'s lewd juices on ",
    date,
  ];
  get_exp_mouth_drink_secretion_count = (count) => [
    'Drank ',
    count,
    'ml of love juice',
  ];
  get_exp_mouth_drink_milk = (date, chara) => [
    'On ',
    date,
    ', first suckled ',
    chara,
    "'s breasts not out of hunger—wonder if the taste was satisfying?",
  ];
  get_exp_mouth_drink_milk_count = (count) => ['Drank ', count, 'ml of milk'];
  get_exp_mouth_orgasm = (count) => [
    'Came from the pleasure ',
    count,
    ' times',
  ];

  exp_breast_title = 'Info [Breasts]';
  exp_breast_summary_man = 'Solid, muscular chest';
  exp_breast_nipple_pink = 'pink little strawberries';
  exp_breast_nipple_deep = 'dark little cherries';
  exp_breast_nipple_inverted = 'deep volcanic lakes';
  get_exp_breast_summary_woman = (nipple, size) => [
    size,
    ' breasts topped with ',
    nipple,
  ];
  exp_breast_gift_desc =
    'Beautifully curved, heaven-sent full breasts with perfect elasticity that make any visitor linger';
  exp_breast_trained_desc =
    'Itch and ache with loneliness no matter when or where... Already a pair of filthy, lewd breasts';
  exp_breast_milk =
    "If the front of the clothes is a little damp... please don't suspect anything. It's just sweat...";
  exp_breast_milk_template =
    'Blocked by the clamps, currently holding %MILK%ml of milk... Nipples hurt so much';
  get_exp_breast_self_milk = (date) => [
    'On ',
    date,
    ', first caressed own nipples and they stood erect',
  ];
  get_exp_breast_be_milk = (date, chara) => [
    'On ',
    date,
    ', first had nipples caressed by ',
    chara,
    ' and they stood erect',
  ];
  get_exp_breast_unknown_be_milk = (date, chara) => [
    'In truth, those breasts have already become ',
    chara,
    "'s playthings since ",
    date,
  ];
  get_exp_milk_count = (count) => ['Played with ', count, ' times'];
  get_exp_breast_tit_job = (date, chara) => [
    'Learned on ',
    date,
    ' that ',
    chara,
    "'s cock gets hard for these breasts",
  ];
  get_exp_breast_be_tit_job = (date, chara) => [
    'Was taught on ',
    date,
    ' that ',
    chara,
    "'s cock gets hard for these breasts",
  ];
  get_exp_breast_unknown_be_tit_job = (date, chara) => [
    'In truth, after ',
    date,
    ', the breasts have already adapted to servicing ',
    chara,
    "'s cock—though the owner remains unaware",
  ];
  get_exp_breast_tit_job_count = (count) => [
    'Pleasured genitals ',
    count,
    ' times',
  ];
  get_exp_breast_semen_count = (count) => [
    'Stained with ',
    count,
    'ml of semen',
  ];
  /**
   * @param {string} date
   * @param {PrintedSpan} chara
   * @param _ 这个参数是第二参加者的占位符，不能删！
   * @param {string} cup
   * @returns {TextContent}
   */
  get_exp_breast_milking = (date, chara, _, cup) => [
    'On ',
    date,
    ', let ',
    chara,
    ' taste the contents of these ',
    cup,
    ' breasts for the first time',
  ];
  get_exp_breast_double_milking = (date, chara, supporter, cup) => [
    'On ',
    date,
    ', let ',
    chara,
    ' and ',
    supporter,
    ' taste the contents of these ',
    cup,
    ' breasts for the first time',
  ];
  get_exp_breast_milking_count = (count) => ['Breastfed ', count, ' times'];
  get_exp_breast_milking_amount = (amount) => [
    'Produced ',
    amount,
    'ml of milk',
  ];
  get_exp_breast_orgasm = (count) => [
    'Came from the pleasure ',
    count,
    ' times',
  ];

  exp_body_title = 'Info [Body]';
  exp_body_no_armpit_hair = 'Naturally hairless, smooth underarms';
  exp_body_clean_armpit_hair = 'Underarms currently smooth and hairless';
  get_exp_body_armpit_hair = (armpit_hair) => ['Underarms have ', armpit_hair];
  exp_body_trained_desc =
    'Craving the warmth of others... The body itself has become pure lust';
  get_exp_body_face_semen = (date, chara) => [
    'On ',
    date,
    ', first received a facial from ',
    chara,
  ];
  get_exp_body_unknown_face_semen = (date, chara) => [
    'In truth, the face was already covered in ',
    chara,
    "'s semen on ",
    date,
  ];
  get_exp_body_face_semen_count = (count, amount) => [
    'Received ',
    count,
    ' facials, stained with ',
    amount,
    'ml of semen',
  ];
  get_exp_body_body_sex = (date, chara) => [
    date,
    ' was the first day this body accepted ',
    chara,
    "'s cock and desire",
  ];
  get_exp_body_be_body_sex = (date, chara) => [
    date,
    ' was the first day this body was filled with ',
    chara,
    "'s cock and desire",
  ];
  get_exp_body_unknown_be_body_sex = (date, chara) => [
    'In truth, since ',
    date,
    ', the sleeping face, the breaths, the unguarded body have all become a cock sleeve for ',
    chara,
  ];
  get_exp_body_body_sex_count = (count) => [
    'Pleasured genitals ',
    count,
    ' times',
  ];
  get_exp_body_semen_amount = (amount) => [
    'Stained with ',
    amount,
    'ml of semen',
  ];
  exp_body_poisoned_sens =
    'Every time warm semen stains the skin, it grows restless and needy';
  exp_body_poisoned_meek =
    'Every time warm semen stains the skin, a wave of happiness follows';
  exp_body_poisoned_both =
    'Every time warm semen stains the skin, it grows happily restless';
  get_exp_body_orgasm = (count) => ['Came from the pleasure ', count, ' times'];

  exp_hf_title = 'Info [Hands & Feet]';
  exp_hf_header_hand = 'Info [Hands]';
  exp_hand_gift_desc =
    "Caressing technique as natural as a god's; a few finger movements leave the partner utterly enchanted";
  get_exp_hf_hand_job = (date, chara) => [
    'Fingers really are the most primitive and best pleasure tool. Learned that from ',
    chara,
    ' on ',
    date,
  ];
  get_exp_hf_self_hand_job = (date) => [
    'Fingers really are the most primitive and best pleasure tool. Figured that out alone on ',
    date,
  ];
  get_exp_hf_be_hand_job = (date, chara) => [
    'Fingers really are the most primitive and best pleasure tool. Was taught that by ',
    chara,
    ' on ',
    date,
  ];
  get_exp_hf_unknown_be_hand_job = (date, chara) => [
    'In truth, on ',
    date,
    ', the fingers were already coated in the lewd scent of ',
    chara,
    "'s love juices",
  ];
  get_exp_hf_hand_job_count = (count) => ['Stroked cock ', count, ' times'];
  get_exp_hf_touch_vagina_count = (count) => [
    'Fingered pussy ',
    count,
    ' times',
  ];
  get_exp_hf_touch_anal_count = (count) => [
    'Fingered asshole ',
    count,
    ' times',
  ];
  get_exp_hf_touch_body_count = (count) => ['Caressed body ', count, ' times'];
  get_exp_hf_touch_breast_count = (count) => [
    'Groped breasts ',
    count,
    ' times',
  ];
  exp_hf_header_foot = 'Info [Feet]';
  exp_foot_gift_desc =
    "Leg and foot movements precise to the millimeter; footjob technique as natural as a god's";
  get_exp_hf_foot_job = (date, chara) => [
    'On ',
    date,
    ', first stepped on ',
    chara,
    "'s cock with these feet",
  ];
  get_exp_hf_unknown_be_foot_job = (date, chara) => [
    'In truth, even the feet and toes have become toys for ',
    chara,
    "'s cock. After ",
    date,
    ', does walking feel lonely?',
  ];
  get_exp_hf_foot_job_count = (count) => ['Pleasured cock ', count, ' times'];
  get_exp_hf_step_on_vagina_count = (count) => [
    'Pleasured pussy ',
    count,
    ' times',
  ];
  get_exp_hf_step_on_body_count = (count) => [
    'Stepped on body ',
    count,
    ' times',
  ];

  get_exp_pv_pubic_hair = (pubic_hair) => ['Pubic area has ', pubic_hair];

  exp_penis_title = 'Info [Cock]';
  exp_penis_no_pubic_hair = 'Naturally smooth and hairless';
  exp_penis_clean_pubic_hair = 'Pubic area currently smooth and hairless';
  exp_penis_drug = 'Acquired with the help of drugs';
  get_exp_penis_summary = (drug, color, size) => [
    'Below is a',
    drug,
    ' ',
    color,
    ' and ',
    size,
    ' cock',
  ];
  exp_penis_gift_desc =
    'A perfect, invincible towering dragon whose precum alone seems able to impregnate an egg';
  exp_penis_trained_desc = 'Poor control; easily shoots everything at once';
  get_exp_penis_lose_virgin = (date, chara) => [
    'Gave virginity to ',
    chara,
    ' on ',
    date,
  ];
  get_exp_penis_lose_virgin_sleep = (date, chara) => [
    'Secretly gave virginity to ',
    chara,
    ' on ',
    date,
  ];
  get_exp_penis_be_lose_virgin = (date, chara) => [
    'Virginity was taken by ',
    chara,
    ' on ',
    date,
  ];
  get_exp_penis_unknown_be_lose_virgin = (date, chara) => [
    'In truth, virginity was already taken by ',
    chara,
    ' on ',
    date,
  ];
  get_exp_penis_fuck_body_count = (count) => ['Fucked body ', count, ' times'];
  get_exp_penis_fuck_vagina_count = (count) => [
    'Fucked pussy ',
    count,
    ' times',
  ];
  get_exp_penis_fuck_anal_count = (count) => ['Fucked ass ', count, ' times'];
  get_exp_penis_cum_semen_exp = (date, chara, _, amount) => [
    'First injected ',
    amount,
    'ml of seed into ',
    chara,
    "'s body on ",
    date,
  ];
  get_exp_penis_unknown_cum_semen_exp = (date, chara, _, amount) => [
    'In truth, was milked of ',
    amount,
    'ml of semen by ',
    chara,
    "'s lewd pussy on ",
    date,
  ];
  get_exp_penis_cum_count = (count) => ['Came ', count, ' times'];
  get_exp_penis_cum_amount = (amount) => [
    'Shot a total of ',
    amount,
    'ml of semen',
  ];
  get_exp_penis_fuck_sleep_vagina = (count, you) => [
    'Raped ',
    you,
    ' in their sleep ',
    count,
    ' times',
  ];
  get_exp_penis_fuck_sleep_vagina_you = (count) => [
    'Raped other characters in their sleep ',
    count,
    ' times',
  ];
  get_exp_penis_be_sleep_fuck = (count) => [
    'Was raped in sleep ',
    count,
    ' times without noticing',
  ];

  exp_vagina_title = 'Info [Pussy]';
  exp_vagina_no_pubic_hair = 'Naturally bare, smooth and adorable';
  exp_vagina_clean_pubic_hair =
    'Pussy currently smooth and hairless, soft and lovely';
  exp_vagina_pink = 'pink and cute';
  exp_vagina_purple = 'flushed and purplish';
  exp_vagina_deep = 'deep and mature';
  get_exp_vagina_summary = (color) => ['Has a ', color, ' pussy'];
  exp_vagina_gift_desc = 'A living cave that milks any visiting guest dry';
  exp_vagina_clitoris_trained_desc =
    'Swells and hardens at the lightest touch... Already a filthy little bean';
  exp_vagina_vagina_trained_desc =
    'A pleasure pot that secretes love juice around the clock, always ready for insertion... Already a filthy pussy';
  exp_vagina_semen = 'Little white spots on the inner thighs...';
  exp_vagina_semen_template =
    "There's still about %SEMEN%ml of semen inside the pussy";
  get_exp_vagina_lose_virgin = (date, chara, _, penis) => [
    'Gave virginity to ',
    chara,
    "'s ",
    penis,
    ' cock on ',
    date,
  ];
  get_exp_vagina_lose_virgin_sleep = (date, chara, _, penis) => [
    'Secretly gave virginity to ',
    chara,
    "'s ",
    penis,
    ' cock on ',
    date,
  ];
  get_exp_vagina_be_lose_virgin = (date, chara, _, penis) => [
    'Virginity was taken by ',
    chara,
    "'s ",
    penis,
    ' cock on ',
    date,
  ];
  get_exp_vagina_unknown_be_lose_virgin = (date, chara, _, penis) => [
    'In truth, virginity was already taken by ',
    chara,
    "'s ",
    penis,
    ' cock on ',
    date,
  ];
  get_exp_vagina_vagina_touched_count = (count) => [
    'Played with ',
    count,
    ' times',
  ];
  get_exp_vagina_fucked_count = (count) => ['Penetrated ', count, ' times'];
  get_exp_vagina_cumed_exp = (date, chara, _, amount) => [
    'Received ',
    chara,
    "'s ",
    amount,
    'ml of seed on ',
    date,
  ];
  get_exp_vagina_unknown_cumed_exp = (date, chara, _, amount) => [
    'In truth, the precious vagina and womb were baptized with ',
    chara,
    "'s ",
    amount,
    'ml of semen on ',
    date,
  ];
  get_exp_vagina_out_semen = (amount) => [
    'Stained with ',
    amount,
    'ml of semen',
  ];
  get_exp_vagina_cumed_semen = (count, amount) => [
    'Received ',
    count,
    ' creampies totaling ',
    amount,
    'ml of semen',
  ];
  exp_vagina_poisoned_sens =
    'Every time warm semen is pumped in, the womb grows restless and needy';
  exp_vagina_poisoned_meek =
    'Every time warm semen is pumped in, a wave of happiness follows';
  exp_vagina_poisoned_both =
    'Every time warm semen is pumped in, the womb grows happily restless';
  get_exp_vagina_squirt_exp = (date, chara) => [
    'On ',
    date,
    ', squirted filthy honey for the first time in front of ',
    chara,
  ];
  get_exp_vagina_squirt_exp_both = (date, chara, supporter) => [
    'On ',
    date,
    ', squirted filthy honey for the first time in front of ',
    chara,
    ' and ',
    supporter,
  ];
  get_exp_vagina_squirt_exp_self = (date) => [
    'On ',
    date,
    ', made herself squirt filthy honey for the first time',
  ];
  get_exp_vagina_unknown_squirt_exp = (date, chara) => [
    'In truth, was already harvested for nectar by ',
    chara,
    ' on ',
    date,
  ];
  get_exp_vagina_unknown_squirt_exp_both = (date, chara, supporter) => [
    'In truth, was already harvested for nectar by ',
    chara,
    ' and ',
    supporter,
    ' on ',
    date,
  ];
  get_exp_vagina_unknown_squirt_exp_self = (date) => [
    'In truth, the first trickle of nectar already came unconsciously on ',
    date,
  ];
  get_exp_vagina_clitoris_orgasm = (count) => [
    'Came from the clit ',
    count,
    ' times',
  ];
  get_exp_vagina_vagina_orgasm = (count) => [
    'Came from the pussy ',
    count,
    ' times',
  ];
  get_exp_vagina_squirt_count = (count, amount) => [
    'Squirted ',
    count,
    ' times, secreting ',
    amount,
    'ml of love juice',
  ];
  get_exp_vagina_squirt_amount = (amount) => [
    'Secreted a total of ',
    amount,
    'ml of love juice',
  ];
  get_exp_vagina_fuck_sleep_penis = (count, you) => [
    'Raped ',
    you,
    ' in their sleep ',
    count,
    ' times',
  ];
  get_exp_vagina_fuck_sleep_penis_you = (count) => [
    'Raped other characters in their sleep ',
    count,
    ' times',
  ];
  get_exp_vagina_be_sleep_fuck = (count) => [
    'Was raped in sleep ',
    count,
    ' times without noticing',
  ];
  exp_vagina_pregnant_in_growth = "Hasn't had first period yet";
  exp_vagina_pregnant_menstrual_period = 'On period';
  exp_vagina_pregnant_too_many_birth = "Can't handle any more seeds";
  exp_vagina_pregnant_timer_template = '%DESC% (%TIMER% weeks)';
  exp_vagina_pregnant_egg_prepared = 'Egg is waiting for fertilization ❤️';
  exp_vagina_pregnant_egg_growth = 'A new egg is growing';
  exp_vagina_pregnant_egg_out = 'Egg has died and is waiting to be expelled';
  exp_vagina_pregnant_prob_template = '%DESC% (Pregnancy chance %PROB%%)';
  exp_vagina_pregnant_desc_resume =
    'The child has been safely born; time to focus on recovery';
  exp_vagina_pregnant_desc_no = "The baby room is waiting for Daddy's visit ❤️";
  exp_vagina_pregnant_desc_embryo = 'A tiny new life is already growing';
  exp_vagina_pregnant_desc_fetal =
    'The placenta is fully formed; mother and child need quality protein';
  exp_vagina_pregnant_desc_late =
    'The fetus is reaching final maturity; the belly is already high and round';
  exp_vagina_pregnant_desc_pre_birth =
    'The miracle of life is almost here—time to get ready';
  exp_vagina_pregnant_desc_showing =
    'The belly is already big and sticking out';
  exp_vagina_pregnant_desc_known =
    'No visible signs on the belly yet, but changing habits and medical reports already reveal the new life';
  get_exp_vagina_pregnant_father = (chara) => [
    "The child's father is confirmed to be ",
    chara,
  ];
  get_exp_vagina_pregnant_father_you = (you) => [
    you,
    " knows the child's father is ",
    you,
  ];

  exp_anal_title = 'Info [Ass]';
  exp_anal_gift_desc =
    'A tight black hole that seems able to swallow everything, guaranteeing no return';
  exp_anal_trained_desc =
    'A rectum constantly craving to be filled with warmth... Already a filthy asshole';
  exp_anal_semen = 'The back of the pants got wet...';
  exp_anal_semen_template =
    "Probably because there's still %SEMEN%ml of semen lingering inside the ass";
  get_exp_anal_anal_sex_exp = (date, chara) => [
    'On ',
    date,
    ', first understood the sexual meaning of the ass thanks to ',
    chara,
  ];
  get_exp_anal_be_anal_sex_exp = (date, chara) => [
    'On ',
    date,
    ', was first taught the sexual meaning of the ass by ',
    chara,
  ];
  get_exp_anal_unknown_be_anal_sex_exp = (date, chara) => [
    'In truth, was already played with by ',
    chara,
    ' on ',
    date,
    '—probably no going back',
  ];
  get_exp_anal_anal_sex_count = (count) => [
    'Pleasured genitals ',
    count,
    ' times',
  ];
  get_exp_anal_cum_in_anal_count = (count, amount) => [
    'Received ',
    count,
    ' creampies totaling ',
    amount,
    'ml of semen',
  ];
  exp_anal_poisoned_sens =
    'Every time warm semen is pumped in, the rectum grows restless and needy';
  exp_anal_poisoned_meek =
    'Every time warm semen is pumped in, a wave of happiness follows';
  exp_anal_poisoned_both =
    'Every time warm semen is pumped in, the rectum grows happily restless';
  get_exp_anal_orgasm = (count) => ['Came from the pleasure ', count, ' times'];

  exp_sm_title = 'Info [S&M]';
  exp_sm_sex_title_0 = 'Mare';
  exp_sm_sex_title_1 = 'Stallion';
  exp_sm_sex_title_10 = 'Futa Mare';
  exp_sm_sadism_talent_template =
    'A born lewd sadist %TITLE% who gets excited just imagining tormenting others';
  exp_sm_machoism_abuse_talent_template =
    'A born lewd masochist %TITLE% who gets excited just imagining being scolded by others';
  exp_sm_machoism_hit_talent_template =
    'A born lewd masochist %TITLE% who gets excited just imagining being hit by others';
  exp_sm_machoism_all_talent_template =
    'A born lewd masochist %TITLE% who gets excited just imagining being tormented by others';
  get_exp_sm_sadism_exp = (date, chara) => [
    'First abused ',
    chara,
    ' on ',
    date,
  ];
  get_exp_sm_abuse_count = (count) => ['Scolded others ', count, ' times'];
  get_exp_sm_hit_count = (count) => ['Hit others ', count, ' times'];
  get_exp_sm_sadism_count = (count) => [
    'Came from the sadistic pleasure ',
    count,
    ' times',
  ];
  get_exp_sm_machoism_exp = (date, chara) => [
    'First abused by ',
    chara,
    ' on ',
    date,
  ];
  get_exp_sm_be_abused_count = (count) => ['Was scolded ', count, ' times'];
  get_exp_sm_be_hit_count = (count) => ['Was hit ', count, ' times'];
  get_exp_sm_machoism_count = (count) => [
    'Came from the masochistic pleasure ',
    count,
    ' times',
  ];

  desc_conjunction = '\nAlso, ';
  human_info = 'Just an ordinary human';
  no_reward_info = 'No notable race records yet';
  cannot_join_race_info = 'Cannot enter races';
  growth_info = 'Still growing';
  no_exp_info = 'No related experience yet';
  no_known_info = 'Not well enough known yet';
  no_part_info = 'No such body part';

  prev_template = 'Previous - %NAME%';
  next_template = 'Next - %NAME%';

  get_child_number(num) {
    const first = 'Eldest';
    const second = 'Second';
    const n10 = ['Ten', 'Twenty', 'Thirty', 'Forty'];
    const n0 = [
      'One',
      'Two',
      'Three',
      'Four',
      'Five',
      'Six',
      'Seven',
      'Eight',
      'Nine',
    ];
    if (num === 1) {
      return first;
    } else if (num === 2) {
      return second;
    } else if (num < 10) {
      return n0[num - 1];
    } else if (num < 50) {
      let ret = n10[Math.floor(num / 10) - 1];
      if (num % 10 > 0) {
        ret += n0[(num % 10) - 1];
      }
      return ret;
    }
    return num.toString();
  }
};
