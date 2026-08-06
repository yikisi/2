module.exports = class extends require('#/i18n/zh-CN/new-game') {
  rp_select = 'Choose a character to play as';
  rp_select_me = 'Myself';
  rp_select_tip_1 = 'Characters with a * suffix have dialogue';
  rp_select_tip_2 =
    'Only characters with completed personal achievements can be played';
  rp_select_tip_3 = (clist) => [
    ...clist,
    ' and other special characters cannot be played',
  ];

  intro_info1 =
    'After years of hard work, you finally made it.\nThe letter in your inbox gleams with gold leaf,\nshining the same color as the Trainer badge you just earned.\n\nWith still-shaking hands, you break the wax seal————';
  intro_info2 =
    'Letter of Appointment\n............\n............\n............\n............\n............\n............\n............We hereby appoint you as a Trainer at our academy.';
  intro_info3 = 'Chair of Japan Central Tracen Academy';
  intro_sign = (name) => ['(Signature)', { isBlank: 2 }, name];
  intro_time = ['(Date)', { isBlank: 2 }, 'January 1, 2000'];
  intro_input_name =
    '—Then you sign your name in the lower left (type a name and press Enter, up to 10 characters)';
  intro_select_sex = '(Please select a gender)';
  intro_resign = 'Resign';
  intro_submit = 'Submit Appointment';
  intro_re_select_sex = 'Reselect Gender';

  set_diff_header = 'Game Mode';
  set_dif0 = 'Elysium';
  set_dif0_desc =
    'The Three Goddesses bless every Umamusume equally|Tracen Umamusume far outclass their peers|Umamusume long for pure love';
  set_dif1 = 'Terra';
  set_dif1_desc =
    'The Three Goddesses are not watching here|Tracen is only one famous academy|Umamusume face real-world pressure';
  set_dif2 = "Tracen' Trap";
  set_dif2_desc =
    'The Three Goddesses watch over Umamusume—except your team|Strong rivals always show up in races|Umamusume will try every way to blow off steam|Tracen is harsh and ruthless to Trainers';
  set_dif3 = 'Antagonist';
  set_dif3_desc =
    'The Three Goddesses watch over Umamusume—except you and your team|Strong rivals always show up in races|Umamusume hate you|Tracen is harsh and ruthless to Trainers';
  set_dif4 = 'Omola';
  set_dif4_desc =
    'The Three Goddesses especially favor your team|Tracen Umamusume far outclass their peers|Umamusume will stop at nothing to claim you|So will their children';
  set_dif5 = 'Uma3rb';
  set_dif5_desc =
    'The Three Goddesses especially favor your team|Tracen Umamusume far outclass their peers|Umamusume are loose and always in heat|They can race loaded with toys';
  set_dif6 = 'Sodoma';
  set_dif6_desc =
    'Same as Gomola|But everyone is FUTA|Tracen is harsh and ruthless to Trainers';
  set_dif7 = 'Gensoky♂';
  set_dif7_desc =
    'Same as Gomola|But everyone is male|Tracen is harsh and ruthless to Trainers';
  set_guide = 'Show beginner tutorial';
  set_ng_tooltip =
    '* For a first playthrough, strongly recommend starting in [Earthly Paradise] or [Mortal World]!';
  set_detail = 'Tune Each Option';
  set_mode_header = 'Presets';
  set_option_header = 'Game Options';
  set_next = 'Enter Game';

  set_train_diff = 'Training Difficulty';
  set_td_0 = 'Easy as Pie';
  set_td_1 = 'Barely Manageable';
  set_td_2 = 'Uphill Battle';
  set_td_0_desc = 'Training success rate +25%';
  set_td_2_desc = 'Training success rate -25%';

  set_train_buff = 'Training Bonus';
  set_tb_0 = 'Double the Results';
  set_tb_1 = 'Steady Progress';
  set_tb_2 = 'Twice the Effort';
  set_tb_0_desc = 'Training bonus +25%';
  set_tb_2_desc = 'Training bonus -25%';

  set_race_diff = 'Race Difficulty';
  set_rd_0 = 'Pushovers';
  set_rd_1 = 'Even Match';
  set_rd_2 = 'Stacked Field';
  set_rd_0_desc = 'Opponent rating -20%';
  set_rd_2_desc = 'Opponent rating +10%; enable legendary rivals';

  set_hurt = 'Umamusume can get injured';
  set_ht_0 = 'Safe and Sound';
  set_ht_1 = 'Close Call';

  set_pressure = 'Umamusume take pressure';
  set_ps_0 = 'Travel Light';
  set_ps_1 = 'Carry the Weight';

  set_money_price = 'Shop Management';
  set_mp_0 = 'Generous';
  set_mp_1 = 'By the Book';
  set_mp_2 = 'Greedy';
  set_mp_0_desc = 'Shop item prices -50%';
  set_mp_2_desc = 'Shop item prices +100%';

  set_sex_skill_price = 'Sex skill Factor cost';
  set_race_skill_price = 'Race ability Factor cost';
  set_sp_0 = 'Low';
  set_sp_1 = 'Medium';
  set_sp_2 = 'High';
  set_sp_0_desc = 'Factor cost -50%';
  set_sp_2_desc = 'Factor cost +100%';

  set_game_over = 'Game Over';
  set_go_0 = 'Never-Ending Feast';
  set_go_1 = '+ Fan Assault';
  set_go_2 = '+ Debt Slave';
  set_go_3 = '+ Prison of Love';
  set_go_0_desc = 'Your Trainer career continues until Renown hits zero';
  set_go_1_desc =
    'An Umamusume career record decides your life or death... even a little dislike can end the career and end your life';
  set_go_2_desc =
    'Your debt to Umamusume also decides your fate. Be an adult and manage your money';
  set_go_3_desc =
    'What fruit does hopeless love bear? You too can end your life in a prison built of affection';

  set_honour = 'Renown Changes';
  set_hn_0 = 'Rising Daily';
  set_hn_1 = 'Steady';
  set_hn_2 = 'Slow Fade';
  set_hn_0_desc = 'Your Renown slowly grows; Renown +1 each turn';
  set_hn_1_desc = 'Your Renown does not change without other factors';
  set_hn_2_desc = 'Your Renown slowly fades; Renown -1 each turn';

  set_honour_empty = 'When Disgraced';
  set_he_0 = 'Quiet Exit';
  set_he_1 = 'Dark Bargain';
  set_he_0_desc =
    'Renown hit zero. It is over... Game system, take us back to the title';
  set_he_1_desc =
    'Want to keep going after Renown hits zero? Even if it costs you everything?';

  set_chara_sex = 'Umamusume Gender';
  set_cs_0 = 'Surrounded by Beauties';
  set_cs_1 = 'Peak Masculinity';
  set_cs_2 = 'Both Sides';
  set_cs_3 = 'Reality Projection';
  set_cs_0_desc = 'Surrounded by beautiful girls!';
  set_cs_1_desc = 'Handsome guys sweating through their youth...';
  set_cs_2_desc = 'Ladies... ladies?';
  set_cs_3_desc = 'What does earring placement mean?';

  set_relation = 'Initial Fondness';

  set_relation_buff = 'Fondness Gain Difficulty';
  set_love_buff = 'Infatuation Gain Difficulty';
  set_diff_easy = 'Easy';
  set_diff_normal = 'Normal';
  set_diff_hard = 'Hard';
  set_diff_easy_desc = 'Gain +50%';
  set_diff_hard_desc = 'Gain -50%';

  set_relation_change = 'Fondness Over Time';
  set_rc_0 = 'Growing Daily';
  set_rc_1 = "A Gentleman' Distance";
  set_rc_2 = 'Souring Look';
  set_rc_0_desc =
    'Umamusume Fondness for you grows daily; Fondness +5 each turn';
  set_rc_1_desc = 'Umamusume Fondness for you is not affected by time';
  set_rc_2_desc =
    'Umamusume slowly grow to dislike you; Fondness -10 each turn';

  set_love = 'Initial Infatuation';

  set_love_change = 'Infatuation Over Time';
  set_lc_0 = 'Dare Not Dream';
  set_lc_1 = 'Drawn In';
  set_lc_0_desc =
    'Only active choices make Umamusume fall for you; Infatuation rank-up events can trigger';
  set_lc_1_desc =
    'Umamusume slowly fall for you until Dependence... even if you do nothing; Infatuation +1 each turn, no Infatuation rank-up events';

  set_unfaith = 'View on Cheating';
  set_uf_0 = 'Open-Minded';
  set_uf_1 = 'Unforgivable';
  set_uf_0_desc = 'Umamusume only care about the time spent with you';
  set_uf_1_desc = 'Watch that possessiveness...';

  set_extreme = 'Extreme Actions of Umamusume';
  set_eb_0 = 'Never';
  set_eb_1 = 'Possible';
  set_eb_2 = 'Try to Restrain';
  set_eb_3 = 'Actively Pursue';
  set_eb_0_desc = 'Umamusume will not do anything to you. Safe';
  set_eb_1_desc =
    'When denied, Umamusume have a low chance to night-raid or kidnap you';
  set_eb_2_desc =
    'Umamusume try to suppress night raids and kidnapping... but only barely';
  set_eb_3_desc = 'Where you cannot see, twisted smiles bloom...';

  set_talent = 'Innate Traits';
  set_tt_0 = 'Born Lewd';
  set_tt_1 = 'Born Different';
  set_tt_2 = 'Pure as Snow';
  set_tt_3 = 'Stone-Cold';
  set_tt_0_desc = 'As far as the eye can see, all mares';
  set_tt_1_desc = 'Everyone is unique';
  set_tt_2_desc = 'Umamusume bodies are flawless—no weak spots at all';
  set_tt_3_desc = 'Extremely hard to make them feel pleasure';

  set_abl_update = 'How characters learn sex skills';
  set_au_0 = 'No Interest';
  set_au_1 = 'Eager Students';

  set_resist = 'Character rape resistance';
  set_rs_0 = 'Falls Easily';
  set_rs_1 = 'Fights Hard';

  set_ero_item = 'Item Influence';
  set_ei_0 = 'Full Steam Ahead';
  set_ei_1 = 'Hard Going';
  set_ei_0_desc =
    'A spectator: "Sometimes races look a bit weird—flushed faces, damp clothes... but still exciting"';
  set_ei_1_desc =
    'A spectator: "Running with eyes rolled back, track all wet—this is the Arima Kinen, show some respect!"; racing with toys: base stats -25%';

  set_mejiro_style = 'MEJIRO';
  set_ms_0 = 'Free';
  set_ms_1 = 'Loving';
  set_ms_0_desc = 'As you like ❤️';
  set_ms_1_desc = 'mejiro is calling...';

  set_child_love = 'Forbidden Love';
  set_cl_0 = 'Not Allowed';
  set_cl_1 = 'Allowed';
  set_cl_0_desc =
    'Children only hold filial affection for you... unless you break it first';
  set_cl_1_desc = 'Children only hold filial affection for you... right?';

  set_height = 'Umamusume Height';
  set_hg_0 = 'Such a Tiny Mom';
  set_hg_1 = 'Normal Is Fine';
  set_hg_2 = 'I Want to Be Dominated!';
  set_hg_0_desc = 'A paradise ringed with loli heights...';
  set_hg_1_desc = 'Umamusume height is naturally distributed';
  set_hg_2_desc = 'Giant Umamusume cannot be beaten!';

  set_gd_0 = 'I already know everything!';
  set_gd_1 = 'Show it';

  cus_intro_header = 'Character creation time! Generate a random character?';
  bt_cus_random = 'Randomize';
  bt_cus_default = 'Defaults Are Fine';
  bt_cus_set = 'Set Myself';

  cus_body_header = 'First, decide the body details!';
  bt_cus_confirm = 'Looks Good!';

  cus_birthday_header =
    'Next, height and birthday!\nPS: The dev assumes you were not born on Feb 29';
  cus_birthday_month = 'Birth Month';
  cus_bm_prev = 'Previous Month';
  cus_bm_next = 'Next Month';
  cus_birthday_date = 'Birth Date';
  cus_bd_prev_5 = '5 Days Earlier';
  cus_bd_prev = 'Previous Day';
  cus_bd_next = 'Next Day';
  cus_bd_next_5 = '5 Days Later';

  cus_breast_header =
    'What size should your feminine symbol be?\nPS: Bigger is not always better!';
  cus_breast_1 = '...I am a cutting board';
  cus_breast_2 = 'Rare value, of course';
  cus_breast_3 = 'Normal is fine';
  cus_breast_4 = 'A bit bigger, please!';
  cus_breast_5 = 'I want to tower over all (not really)';

  cus_penis_header =
    'What size should your "mischief tool" be?\nPS: Bigger is not always better!';
  cus_penis_1 = 'Something everyone can take!';
  cus_penis_2 = 'A little bigger than that is fine';
  cus_penis_3 = 'Normal is fine';
  cus_penis_4 = 'Something majestic, of course!';
  cus_penis_5 = 'I want everyone to hurt and love it!';

  cus_uma_header =
    'Fantasy time! If you became an Umamusume, what temperament would you have?';

  cus_uma_color_header_template =
    'Hmm, so you think you would be a %CHARA% temperament... then what coat color would you be?';

  cus_call_header = 'Next up: what to call you!';
  cus_call_3 = 'Ohhh, you picked a name that really loves hooves!';
  cus_call_179 = 'Ohhh, you picked a very loli-loving name!';
  cus_call_621 = 'Ohhh, you picked a name that really wants to be bullied!';

  cus_set_callname = 'How should the Narrator address you?';
  cus_set_by_self = 'I will decide!';

  get_cus_callname_confirm = (actual, call) => [
    actual,
    ' Trainer, from now on the Narrator will call you ',
    call,
    '!',
  ];

  cus_taiwu_header = 'Finally, a gift from the developers!';

  taiwu_talent_speed = 'Swift from Crisis';
  taiwu_talent_stamina = 'Pure as Nature';
  taiwu_talent_power = 'Edge from Toil';
  taiwu_talent_guts = 'Fragrance from Frost';
  taiwu_talent_wiz = 'Mind in Stillness';

  taiwu_talent_speed_desc =
    'Swift from crisis, at the critical moment—your Speed far exceeds ordinary people.';
  taiwu_talent_stamina_desc =
    'Pure as nature, effortless and innate—your Stamina far exceeds ordinary people.';
  taiwu_talent_power_desc =
    'Edge from toil, taming tigers and dragons—your Power far exceeds ordinary people.';
  taiwu_talent_guts_desc =
    'Fragrance from frost, tempered by hardship—your Guts far exceed ordinary people.';
  taiwu_talent_wiz_desc =
    'Mind in stillness, insight arising on its own—your Wit far exceeds ordinary people.';

  cus_final_header = 'One last check!';
  get_cus_f_name = (name) => [name, ' Trainer'];
  get_cus_f_male = (callname, sex, height) => [
    'Narrator calls you: ',
    callname,
    { isDivider: true },
    'Gender: ',
    sex,
    { isDivider: true },
    'Height: ',
    height,
    'cm',
  ];
  get_cus_f_female = (callname, sex, height, female_info) => [
    ...this.get_cus_f_male(callname, sex, height),
    { isDivider: true },
    ...female_info,
  ];
  get_cus_f_hair = (hair, hair_color) => [
    'Hairstyle: ',
    hair,
    { isDivider: true },
    'Hair color: ',
    hair_color,
  ];
  get_cus_f_uma = (body_hair, chara) => [
    'If turned into an Umamusume, you see yourself as a ',
    body_hair,
    ' ',
    chara,
    ' Umamusume',
  ];
  get_cus_f_skin_male = (skin, armpit, pubic, pv_color, penis) => [
    ...this.get_cus_f_skin_female(skin, armpit, pubic, pv_color),
    { isDivider: true },
    'Penis length: ',
    penis,
  ];
  get_cus_f_skin_female = (skin, armpit, pubic, pv_color) => [
    'Skin tone: ',
    skin,
    { isDivider: true },
    'Underarm hair: ',
    armpit,
    { isDivider: true },
    'Pubic hair: ',
    pubic,
    { isDivider: true },
    'Genital color: ',
    pv_color,
  ];
  cus_f_talent = 'Personality traits: ';
  cus_f_xp = 'Other traits: ';
  cus_f_gift = 'Developer gift: ';
  bt_random_talents = 'Reroll Traits';
  bt_random_all = 'Randomize Everything!';
  bt_re_make = 'I want to redo!';
  bt_exit = 'I am out...';
};
