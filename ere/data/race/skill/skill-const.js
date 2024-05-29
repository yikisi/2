const chara_skill_dict = {},
  skills_dict = {};

chara_skill_dict[1] = [
  100011, 200512, 201352, 200732, 200162, 201351, 200612, 200511,
];
chara_skill_dict[2] = [
  100021, 200432, 200552, 200712, 200022, 200431, 200542, 200551,
];
chara_skill_dict[3] = [
  100031, 200452, 201132, 201332, 200502, 201331, 201142, 201131,
];
chara_skill_dict[4] = [
  100041, 200362, 201052, 200532, 201062, 201051, 200432, 201061,
];
chara_skill_dict[5] = [
  100051, 200771, 201072, 200572, 201052, 201071, 201042, 200571,
];
chara_skill_dict[6] = [
  100061, 200342, 201062, 201352, 200222, 201351, 200492, 200341,
];
chara_skill_dict[7] = [
  100071, 201591, 201212, 201472, 201482, 201471, 200622, 201481,
];
chara_skill_dict[8] = [
  100081, 200382, 200702, 200602, 200372, 200381, 201032, 200701,
];
chara_skill_dict[9] = [
  100091, 200282, 200722, 200572, 200562, 200721, 200582, 200571,
];
chara_skill_dict[10] = [
  100101, 200362, 201052, 201532, 200682, 201051, 201032, 200681,
];
chara_skill_dict[11] = [
  100111, 200871, 201152, 200602, 200512, 201151, 200592, 200601,
];
chara_skill_dict[12] = [
  100121, 200502, 200632, 200732, 201452, 200731, 201462, 200631,
];
chara_skill_dict[13] = [
  100131, 200172, 200562, 201192, 201182, 201191, 201352, 200561,
];
chara_skill_dict[14] = [
  100141, 200362, 201122, 201312, 200562, 201121, 200722, 200561,
];
chara_skill_dict[15] = [
  100151, 200582, 200722, 200142, 200362, 200581, 200562, 200721,
];
chara_skill_dict[16] = [
  100161, 200362, 201102, 200572, 200512, 200361, 201641, 200511,
];
chara_skill_dict[17] = [
  100171, 200332, 201152, 200572, 200891, 201151, 201322, 200331,
];
chara_skill_dict[18] = [
  100181, 200502, 200722, 201372, 200941, 201371, 200931, 200501,
];
chara_skill_dict[19] = [
  100191, 201591, 201682, 201382, 200162, 201592, 201102, 201681,
];
chara_skill_dict[20] = [
  100201, 200881, 201192, 200542, 201522, 201191, 201611, 200541,
];
chara_skill_dict[21] = [
  100211, 201611, 201132, 200592, 200572, 200591, 200642, 201612,
];
chara_skill_dict[22] = [
  100221, 200192, 200582, 201112, 201342, 200581, 200012, 201341,
];
chara_skill_dict[23] = [
  100231, 200162, 200742, 200562, 200262, 200561, 200821, 200741,
];
chara_skill_dict[24] = [
  100241, 200382, 201272, 200742, 200492, 200381, 200502, 200491,
];
chara_skill_dict[25] = [
  100251, 200232, 201222, 201422, 201581, 201421, 201202, 201221,
];
chara_skill_dict[26] = [
  100261, 200232, 200532, 200712, 201242, 200531, 201252, 200711,
];
chara_skill_dict[27] = [
  100271, 200232, 200722, 200612, 200472, 200721, 201102, 200611,
];
chara_skill_dict[28] = [
  100281, 200212, 201352, 201002, 201362, 201001, 201012, 201351,
];
chara_skill_dict[29] = [
  100291, 200492, 201102, 201342, 200242, 200491, 201322, 201341,
];
chara_skill_dict[30] = [
  100301, 200861, 201342, 200742, 201581, 201341, 201352, 200741,
];
chara_skill_dict[31] = [
  100311, 201651, 201282, 202132, 200032, 201281, 201082, 202131,
];
chara_skill_dict[32] = [
  100321, 200132, 201152, 200572, 201102, 201151, 201112, 200571,
];
chara_skill_dict[33] = [
  100331, 200492, 201152, 201492, 200632, 201491, 200861, 200631,
];
chara_skill_dict[34] = [
  100341, 201611, 201452, 202002, 200202, 201612, 200642, 202001,
];
chara_skill_dict[35] = [
  100351, 200152, 200732, 201402, 200592, 201401, 201392, 200591,
];
chara_skill_dict[36] = [
  100361, 200462, 202102, 201452, 201492, 202101, 201502, 201453,
];
chara_skill_dict[37] = [
  100371, 200502, 201542, 201112, 200512, 200501, 200432, 200511,
];
chara_skill_dict[38] = [
  100381, 200462, 201372, 201012, 201002, 201371, 200582, 201011,
];
chara_skill_dict[39] = [
  100391, 200492, 201072, 200612, 201382, 200491, 200132, 200611,
];
chara_skill_dict[40] = [
  100401, 200052, 200692, 200602, 201651, 200691, 201062, 200601,
];
chara_skill_dict[41] = [
  100411, 200841, 201312, 200652, 200982, 200651, 200992, 200981,
];
chara_skill_dict[42] = [
  100421, 200152, 200962, 201072, 202042, 200963, 201902, 201071,
];
chara_skill_dict[43] = [
  100431, 202343, 200162, 202282, 201052, 202281, 201072, 202341,
];
chara_skill_dict[44] = [
  100441, 200781, 201482, 202082, 201512, 201481, 200642, 201511,
];
chara_skill_dict[45] = [
  100451, 200352, 200742, 201372, 200462, 201371, 200881, 200351,
];
chara_skill_dict[46] = [
  100461, 200452, 201522, 201672, 200162, 200451, 200952, 201671,
];
chara_skill_dict[47] = [
  100471, 200192, 200572, 201112, 201322, 200571, 201172, 201113,
];
chara_skill_dict[48] = [
  100481, 200302, 200602, 201102, 200572, 200601, 201702, 200571,
];
chara_skill_dict[49] = [
  100491, 202442, 202032, 201702, 201382, 202031, 201102, 202441,
];
chara_skill_dict[50] = [
  100501, 201641, 200622, 201162, 200642, 200621, 201452, 200641,
];
chara_skill_dict[51] = [
  100511, 200362, 201062, 201342, 200652, 200361, 201392, 201341,
];
chara_skill_dict[52] = [
  100521, 200442, 200652, 201412, 200472, 200441, 200302, 200471,
];
chara_skill_dict[53] = [
  100531, 200462, 200612, 202112, 200972, 200611, 202122, 202111,
];
chara_skill_dict[54] = [
  100541, 200592, 201382, 200672, 201002, 200591, 200652, 200671,
];
chara_skill_dict[55] = [
  100551, 202102, 201542, 200492, 202422, 202101, 201702, 200491,
];
chara_skill_dict[56] = [
  100561, 201562, 201422, 201232, 201571, 201231, 200781, 201561,
];
chara_skill_dict[57] = [
  100571, 201142, 202522, 200642, 200232, 202521, 201591, 200641,
];
chara_skill_dict[58] = [
  100581, 200472, 201112, 200582, 200142, 200581, 200861, 200471,
];
chara_skill_dict[59] = [
  100591, 200062, 201442, 201142, 201382, 201441, 200722, 200064,
];
chara_skill_dict[60] = [
  100601, 200122, 201162, 201442, 200911, 201161, 201422, 201441,
];
chara_skill_dict[61] = [
  100611, 200262, 200672, 201432, 201142, 200671, 201072, 201431,
];
chara_skill_dict[62] = [
  100621, 200482, 201212, 200602, 201621, 200481, 200512, 201211,
];
chara_skill_dict[63] = [
  100631, 200572, 202161, 202152, 201702, 200571, 200182, 202151,
];
chara_skill_dict[64] = [
  100641, 201661, 201242, 201192, 200532, 201662, 200302, 201191,
];
chara_skill_dict[65] = [
  100651, 202502, 200302, 201052, 201032, 201051, 201651, 202501,
];
chara_skill_dict[66] = [
  100661, 202392, 201282, 200532, 201252, 202391, 200432, 200531,
];
chara_skill_dict[67] = [
  100671, 200012, 201692, 201102, 202012, 201691, 200152, 200014,
];
chara_skill_dict[68] = [
  100681, 200432, 201172, 200532, 201102, 200531, 201272, 201173,
];
chara_skill_dict[69] = [
  100691, 200172, 200582, 201112, 200342, 200581, 201532, 200174,
];
chara_skill_dict[70] = [
  100701, 202652, 201702, 200722, 200492, 201701, 201112, 200721,
];
chara_skill_dict[71] = [
  100711, 200022, 200572, 201702, 201322, 200571, 201142, 201701,
];
chara_skill_dict[72] = [
  100721, 200462, 200732, 201322, 202092, 200461, 200342, 200731,
];
chara_skill_dict[74] = [
  100741, 200472, 201462, 202072, 201212, 200471, 201222, 202071,
];
chara_skill_dict[76] = [
  100761, 201382, 202152, 202592, 201611, 202151, 202472, 202591,
];
chara_skill_dict[77] = [
  100771, 200152, 202012, 202192, 201172, 200154, 202482, 202011,
];
chara_skill_dict[78] = [
  100781, 200302, 201052, 202412, 201042, 201051, 200342, 202411,
];
chara_skill_dict[80] = [
  100801, 201032, 201601, 202952, 200452, 201602, 200532, 202951,
];
chara_skill_dict[82] = [
  100821, 200462, 202502, 202672, 201042, 200461, 202532, 202671,
];
chara_skill_dict[83] = [
  100831, 200042, 202562, 202422, 201692, 202421, 200592, 202561,
];
chara_skill_dict[84] = [
  100841, 200362, 200632, 202652, 200032, 200631, 200642, 202651,
];
chara_skill_dict[85] = [
  100851, 202542, 200502, 202402, 201392, 202541, 200851, 202401,
];
chara_skill_dict[86] = [
  100861, 200492, 202742, 202532, 201352, 202741, 201902, 202531,
];
chara_skill_dict[87] = [
  100871, 200162, 202042, 200532, 200972, 200531, 201601, 202041,
];
chara_skill_dict[88] = [
  100881, 200592, 201112, 202082, 200162, 200591, 202652, 202081,
];
chara_skill_dict[89] = [
  100891, 202432, 200512, 201352, 201651, 202431, 201611, 200511,
];
chara_skill_dict[91] = [
  100911, 202172, 202122, 200492, 201442, 202171, 202652, 202121,
];
chara_skill_dict[93] = [
  100931, 200582, 200992, 201902, 201312, 200581, 202042, 201901,
];
chara_skill_dict[98] = [
  100981, 202262, 201532, 201112, 202332, 202261, 202252, 202331,
];
chara_skill_dict[99] = [
  100991, 202202, 201672, 200562, 201332, 200561, 200861, 201671,
];
chara_skill_dict[100] = [
  101001, 202302, 201532, 201072, 201032, 201071, 202332, 202301,
];
chara_skill_dict[102] = [
  110021, 200382, 201661, 202542, 201651, 200381, 201591, 202541,
];
chara_skill_dict[104] = [
  110041, 200032, 200532, 202462, 200552, 200531, 200732, 202461,
];
chara_skill_dict[105] = [
  110051, 201702, 200172, 202602, 201651, 201701, 202161, 202601,
];
chara_skill_dict[106] = [
  110061, 200302, 202642, 201422, 200062, 201421, 201382, 202641,
];
chara_skill_dict[107] = [
  110071, 202552, 200542, 201611, 200722, 200541, 202602, 201612,
];
chara_skill_dict[108] = [
  110081, 202652, 202722, 202872, 201462, 202721, 202882, 202871,
];
chara_skill_dict[109] = [
  110091, 201902, 200582, 202502, 201312, 202501, 202802, 201901,
];

skills_dict[10071] = require('#/data/race/skill/skill-10071');
skills_dict[10081] = require('#/data/race/skill/skill-10081');
skills_dict[10091] = require('#/data/race/skill/skill-10091');
skills_dict[10111] = require('#/data/race/skill/skill-10111');
skills_dict[10141] = require('#/data/race/skill/skill-10141');
skills_dict[10181] = require('#/data/race/skill/skill-10181');
skills_dict[10241] = require('#/data/race/skill/skill-10241');
skills_dict[10271] = require('#/data/race/skill/skill-10271');
skills_dict[10321] = require('#/data/race/skill/skill-10321');
skills_dict[10351] = require('#/data/race/skill/skill-10351');
skills_dict[10411] = require('#/data/race/skill/skill-10411');
skills_dict[10451] = require('#/data/race/skill/skill-10451');
skills_dict[10521] = require('#/data/race/skill/skill-10521');
skills_dict[10541] = require('#/data/race/skill/skill-10541');
skills_dict[10561] = require('#/data/race/skill/skill-10561');
skills_dict[10601] = require('#/data/race/skill/skill-10601');
skills_dict[10611] = require('#/data/race/skill/skill-10611');
skills_dict[10621] = require('#/data/race/skill/skill-10621');
skills_dict[10631] = require('#/data/race/skill/skill-10631');
skills_dict[10661] = require('#/data/race/skill/skill-10661');
skills_dict[100011] = require('#/data/race/skill/skill-100011');
skills_dict[100021] = require('#/data/race/skill/skill-100021');
skills_dict[100031] = require('#/data/race/skill/skill-100031');
skills_dict[100041] = require('#/data/race/skill/skill-100041');
skills_dict[100051] = require('#/data/race/skill/skill-100051');
skills_dict[100061] = require('#/data/race/skill/skill-100061');
skills_dict[100071] = require('#/data/race/skill/skill-100071');
skills_dict[100081] = require('#/data/race/skill/skill-100081');
skills_dict[100091] = require('#/data/race/skill/skill-100091');
skills_dict[100101] = require('#/data/race/skill/skill-100101');
skills_dict[100111] = require('#/data/race/skill/skill-100111');
skills_dict[100121] = require('#/data/race/skill/skill-100121');
skills_dict[100131] = require('#/data/race/skill/skill-100131');
skills_dict[100141] = require('#/data/race/skill/skill-100141');
skills_dict[100151] = require('#/data/race/skill/skill-100151');
skills_dict[100161] = require('#/data/race/skill/skill-100161');
skills_dict[100171] = require('#/data/race/skill/skill-100171');
skills_dict[100181] = require('#/data/race/skill/skill-100181');
skills_dict[100191] = require('#/data/race/skill/skill-100191');
skills_dict[100201] = require('#/data/race/skill/skill-100201');
skills_dict[100211] = require('#/data/race/skill/skill-100211');
skills_dict[100221] = require('#/data/race/skill/skill-100221');
skills_dict[100231] = require('#/data/race/skill/skill-100231');
skills_dict[100241] = require('#/data/race/skill/skill-100241');
skills_dict[100251] = require('#/data/race/skill/skill-100251');
skills_dict[100261] = require('#/data/race/skill/skill-100261');
skills_dict[100271] = require('#/data/race/skill/skill-100271');
skills_dict[100281] = require('#/data/race/skill/skill-100281');
skills_dict[100291] = require('#/data/race/skill/skill-100291');
skills_dict[100301] = require('#/data/race/skill/skill-100301');
skills_dict[100311] = require('#/data/race/skill/skill-100311');
skills_dict[100321] = require('#/data/race/skill/skill-100321');
skills_dict[100331] = require('#/data/race/skill/skill-100331');
skills_dict[100341] = require('#/data/race/skill/skill-100341');
skills_dict[100351] = require('#/data/race/skill/skill-100351');
skills_dict[100361] = require('#/data/race/skill/skill-100361');
skills_dict[100371] = require('#/data/race/skill/skill-100371');
skills_dict[100381] = require('#/data/race/skill/skill-100381');
skills_dict[100391] = require('#/data/race/skill/skill-100391');
skills_dict[100401] = require('#/data/race/skill/skill-100401');
skills_dict[100411] = require('#/data/race/skill/skill-100411');
skills_dict[100421] = require('#/data/race/skill/skill-100421');
skills_dict[100431] = require('#/data/race/skill/skill-100431');
skills_dict[100441] = require('#/data/race/skill/skill-100441');
skills_dict[100451] = require('#/data/race/skill/skill-100451');
skills_dict[100461] = require('#/data/race/skill/skill-100461');
skills_dict[100471] = require('#/data/race/skill/skill-100471');
skills_dict[100481] = require('#/data/race/skill/skill-100481');
skills_dict[100491] = require('#/data/race/skill/skill-100491');
skills_dict[100501] = require('#/data/race/skill/skill-100501');
skills_dict[100511] = require('#/data/race/skill/skill-100511');
skills_dict[100521] = require('#/data/race/skill/skill-100521');
skills_dict[100531] = require('#/data/race/skill/skill-100531');
skills_dict[100541] = require('#/data/race/skill/skill-100541');
skills_dict[100551] = require('#/data/race/skill/skill-100551');
skills_dict[100561] = require('#/data/race/skill/skill-100561');
skills_dict[100571] = require('#/data/race/skill/skill-100571');
skills_dict[100581] = require('#/data/race/skill/skill-100581');
skills_dict[100591] = require('#/data/race/skill/skill-100591');
skills_dict[100601] = require('#/data/race/skill/skill-100601');
skills_dict[100611] = require('#/data/race/skill/skill-100611');
skills_dict[100621] = require('#/data/race/skill/skill-100621');
skills_dict[100631] = require('#/data/race/skill/skill-100631');
skills_dict[100641] = require('#/data/race/skill/skill-100641');
skills_dict[100651] = require('#/data/race/skill/skill-100651');
skills_dict[100661] = require('#/data/race/skill/skill-100661');
skills_dict[100671] = require('#/data/race/skill/skill-100671');
skills_dict[100681] = require('#/data/race/skill/skill-100681');
skills_dict[100691] = require('#/data/race/skill/skill-100691');
skills_dict[100701] = require('#/data/race/skill/skill-100701');
skills_dict[100711] = require('#/data/race/skill/skill-100711');
skills_dict[100721] = require('#/data/race/skill/skill-100721');
skills_dict[100741] = require('#/data/race/skill/skill-100741');
skills_dict[100761] = require('#/data/race/skill/skill-100761');
skills_dict[100771] = require('#/data/race/skill/skill-100771');
skills_dict[100781] = require('#/data/race/skill/skill-100781');
skills_dict[100801] = require('#/data/race/skill/skill-100801');
skills_dict[100821] = require('#/data/race/skill/skill-100821');
skills_dict[100831] = require('#/data/race/skill/skill-100831');
skills_dict[100841] = require('#/data/race/skill/skill-100841');
skills_dict[100851] = require('#/data/race/skill/skill-100851');
skills_dict[100861] = require('#/data/race/skill/skill-100861');
skills_dict[100871] = require('#/data/race/skill/skill-100871');
skills_dict[100881] = require('#/data/race/skill/skill-100881');
skills_dict[100891] = require('#/data/race/skill/skill-100891');
skills_dict[100911] = require('#/data/race/skill/skill-100911');
skills_dict[100931] = require('#/data/race/skill/skill-100931');
skills_dict[100981] = require('#/data/race/skill/skill-100981');
skills_dict[100991] = require('#/data/race/skill/skill-100991');
skills_dict[101001] = require('#/data/race/skill/skill-101001');
skills_dict[101021] = require('#/data/race/skill/skill-101021');
skills_dict[101041] = require('#/data/race/skill/skill-101041');
skills_dict[101051] = require('#/data/race/skill/skill-101051');
skills_dict[101061] = require('#/data/race/skill/skill-101061');
skills_dict[101071] = require('#/data/race/skill/skill-101071');
skills_dict[101081] = require('#/data/race/skill/skill-101081');
skills_dict[101091] = require('#/data/race/skill/skill-101091');
skills_dict[110011] = require('#/data/race/skill/skill-110011');
skills_dict[110021] = require('#/data/race/skill/skill-110021');
skills_dict[110031] = require('#/data/race/skill/skill-110031');
skills_dict[110041] = require('#/data/race/skill/skill-110041');
skills_dict[110051] = require('#/data/race/skill/skill-110051');
skills_dict[110061] = require('#/data/race/skill/skill-110061');
skills_dict[110071] = require('#/data/race/skill/skill-110071');
skills_dict[110081] = require('#/data/race/skill/skill-110081');
skills_dict[110091] = require('#/data/race/skill/skill-110091');
skills_dict[110101] = require('#/data/race/skill/skill-110101');
skills_dict[110111] = require('#/data/race/skill/skill-110111');
skills_dict[110121] = require('#/data/race/skill/skill-110121');
skills_dict[110131] = require('#/data/race/skill/skill-110131');
skills_dict[110141] = require('#/data/race/skill/skill-110141');
skills_dict[110151] = require('#/data/race/skill/skill-110151');
skills_dict[110161] = require('#/data/race/skill/skill-110161');
skills_dict[110171] = require('#/data/race/skill/skill-110171');
skills_dict[110181] = require('#/data/race/skill/skill-110181');
skills_dict[110191] = require('#/data/race/skill/skill-110191');
skills_dict[110201] = require('#/data/race/skill/skill-110201');
skills_dict[110211] = require('#/data/race/skill/skill-110211');
skills_dict[110221] = require('#/data/race/skill/skill-110221');
skills_dict[110231] = require('#/data/race/skill/skill-110231');
skills_dict[110241] = require('#/data/race/skill/skill-110241');
skills_dict[110251] = require('#/data/race/skill/skill-110251');
skills_dict[110261] = require('#/data/race/skill/skill-110261');
skills_dict[110271] = require('#/data/race/skill/skill-110271');
skills_dict[110291] = require('#/data/race/skill/skill-110291');
skills_dict[110301] = require('#/data/race/skill/skill-110301');
skills_dict[110311] = require('#/data/race/skill/skill-110311');
skills_dict[110321] = require('#/data/race/skill/skill-110321');
skills_dict[110341] = require('#/data/race/skill/skill-110341');
skills_dict[110351] = require('#/data/race/skill/skill-110351');
skills_dict[110361] = require('#/data/race/skill/skill-110361');
skills_dict[110371] = require('#/data/race/skill/skill-110371');
skills_dict[110381] = require('#/data/race/skill/skill-110381');
skills_dict[110391] = require('#/data/race/skill/skill-110391');
skills_dict[110401] = require('#/data/race/skill/skill-110401');
skills_dict[110411] = require('#/data/race/skill/skill-110411');
skills_dict[110451] = require('#/data/race/skill/skill-110451');
skills_dict[110461] = require('#/data/race/skill/skill-110461');
skills_dict[110481] = require('#/data/race/skill/skill-110481');
skills_dict[110501] = require('#/data/race/skill/skill-110501');
skills_dict[110511] = require('#/data/race/skill/skill-110511');
skills_dict[110521] = require('#/data/race/skill/skill-110521');
skills_dict[110531] = require('#/data/race/skill/skill-110531');
skills_dict[110561] = require('#/data/race/skill/skill-110561');
skills_dict[110581] = require('#/data/race/skill/skill-110581');
skills_dict[110591] = require('#/data/race/skill/skill-110591');
skills_dict[110601] = require('#/data/race/skill/skill-110601');
skills_dict[110611] = require('#/data/race/skill/skill-110611');
skills_dict[110621] = require('#/data/race/skill/skill-110621');
skills_dict[110641] = require('#/data/race/skill/skill-110641');
skills_dict[110651] = require('#/data/race/skill/skill-110651');
skills_dict[110671] = require('#/data/race/skill/skill-110671');
skills_dict[110681] = require('#/data/race/skill/skill-110681');
skills_dict[110691] = require('#/data/race/skill/skill-110691');
skills_dict[110711] = require('#/data/race/skill/skill-110711');
skills_dict[110721] = require('#/data/race/skill/skill-110721');
skills_dict[110741] = require('#/data/race/skill/skill-110741');
skills_dict[110831] = require('#/data/race/skill/skill-110831');
skills_dict[110851] = require('#/data/race/skill/skill-110851');
skills_dict[120011] = require('#/data/race/skill/skill-120011');
skills_dict[120031] = require('#/data/race/skill/skill-120031');
skills_dict[120071] = require('#/data/race/skill/skill-120071');
skills_dict[120131] = require('#/data/race/skill/skill-120131');
skills_dict[120321] = require('#/data/race/skill/skill-120321');
skills_dict[120351] = require('#/data/race/skill/skill-120351');
skills_dict[120451] = require('#/data/race/skill/skill-120451');
skills_dict[120601] = require('#/data/race/skill/skill-120601');
skills_dict[120671] = require('#/data/race/skill/skill-120671');
skills_dict[120681] = require('#/data/race/skill/skill-120681');
skills_dict[200011] = require('#/data/race/skill/skill-200011');
skills_dict[200012] = require('#/data/race/skill/skill-200012');
skills_dict[200013] = require('#/data/race/skill/skill-200013');
skills_dict[200014] = require('#/data/race/skill/skill-200014');
skills_dict[200021] = require('#/data/race/skill/skill-200021');
skills_dict[200022] = require('#/data/race/skill/skill-200022');
skills_dict[200031] = require('#/data/race/skill/skill-200031');
skills_dict[200032] = require('#/data/race/skill/skill-200032');
skills_dict[200041] = require('#/data/race/skill/skill-200041');
skills_dict[200042] = require('#/data/race/skill/skill-200042');
skills_dict[200051] = require('#/data/race/skill/skill-200051');
skills_dict[200052] = require('#/data/race/skill/skill-200052');
skills_dict[200061] = require('#/data/race/skill/skill-200061');
skills_dict[200062] = require('#/data/race/skill/skill-200062');
skills_dict[200064] = require('#/data/race/skill/skill-200064');
skills_dict[200071] = require('#/data/race/skill/skill-200071');
skills_dict[200072] = require('#/data/race/skill/skill-200072');
skills_dict[200081] = require('#/data/race/skill/skill-200081');
skills_dict[200082] = require('#/data/race/skill/skill-200082');
skills_dict[200091] = require('#/data/race/skill/skill-200091');
skills_dict[200092] = require('#/data/race/skill/skill-200092');
skills_dict[200101] = require('#/data/race/skill/skill-200101');
skills_dict[200102] = require('#/data/race/skill/skill-200102');
skills_dict[200111] = require('#/data/race/skill/skill-200111');
skills_dict[200112] = require('#/data/race/skill/skill-200112');
skills_dict[200121] = require('#/data/race/skill/skill-200121');
skills_dict[200122] = require('#/data/race/skill/skill-200122');
skills_dict[200131] = require('#/data/race/skill/skill-200131');
skills_dict[200132] = require('#/data/race/skill/skill-200132');
skills_dict[200133] = require('#/data/race/skill/skill-200133');
skills_dict[200141] = require('#/data/race/skill/skill-200141');
skills_dict[200142] = require('#/data/race/skill/skill-200142');
skills_dict[200151] = require('#/data/race/skill/skill-200151');
skills_dict[200152] = require('#/data/race/skill/skill-200152');
skills_dict[200154] = require('#/data/race/skill/skill-200154');
skills_dict[200161] = require('#/data/race/skill/skill-200161');
skills_dict[200162] = require('#/data/race/skill/skill-200162');
skills_dict[200163] = require('#/data/race/skill/skill-200163');
skills_dict[200171] = require('#/data/race/skill/skill-200171');
skills_dict[200172] = require('#/data/race/skill/skill-200172');
skills_dict[200174] = require('#/data/race/skill/skill-200174');
skills_dict[200181] = require('#/data/race/skill/skill-200181');
skills_dict[200182] = require('#/data/race/skill/skill-200182');
skills_dict[200191] = require('#/data/race/skill/skill-200191');
skills_dict[200192] = require('#/data/race/skill/skill-200192');
skills_dict[200194] = require('#/data/race/skill/skill-200194');
skills_dict[200201] = require('#/data/race/skill/skill-200201');
skills_dict[200202] = require('#/data/race/skill/skill-200202');
skills_dict[200211] = require('#/data/race/skill/skill-200211');
skills_dict[200212] = require('#/data/race/skill/skill-200212');
skills_dict[200221] = require('#/data/race/skill/skill-200221');
skills_dict[200222] = require('#/data/race/skill/skill-200222');
skills_dict[200231] = require('#/data/race/skill/skill-200231');
skills_dict[200232] = require('#/data/race/skill/skill-200232');
skills_dict[200241] = require('#/data/race/skill/skill-200241');
skills_dict[200242] = require('#/data/race/skill/skill-200242');
skills_dict[200251] = require('#/data/race/skill/skill-200251');
skills_dict[200252] = require('#/data/race/skill/skill-200252');
skills_dict[200253] = require('#/data/race/skill/skill-200253');
skills_dict[200261] = require('#/data/race/skill/skill-200261');
skills_dict[200262] = require('#/data/race/skill/skill-200262');
skills_dict[200263] = require('#/data/race/skill/skill-200263');
skills_dict[200271] = require('#/data/race/skill/skill-200271');
skills_dict[200272] = require('#/data/race/skill/skill-200272');
skills_dict[200281] = require('#/data/race/skill/skill-200281');
skills_dict[200282] = require('#/data/race/skill/skill-200282');
skills_dict[200283] = require('#/data/race/skill/skill-200283');
skills_dict[200291] = require('#/data/race/skill/skill-200291');
skills_dict[200292] = require('#/data/race/skill/skill-200292');
skills_dict[200301] = require('#/data/race/skill/skill-200301');
skills_dict[200302] = require('#/data/race/skill/skill-200302');
skills_dict[200311] = require('#/data/race/skill/skill-200311');
skills_dict[200321] = require('#/data/race/skill/skill-200321');
skills_dict[200331] = require('#/data/race/skill/skill-200331');
skills_dict[200332] = require('#/data/race/skill/skill-200332');
skills_dict[200341] = require('#/data/race/skill/skill-200341');
skills_dict[200342] = require('#/data/race/skill/skill-200342');
skills_dict[200351] = require('#/data/race/skill/skill-200351');
skills_dict[200352] = require('#/data/race/skill/skill-200352');
skills_dict[200361] = require('#/data/race/skill/skill-200361');
skills_dict[200362] = require('#/data/race/skill/skill-200362');
skills_dict[200371] = require('#/data/race/skill/skill-200371');
skills_dict[200372] = require('#/data/race/skill/skill-200372');
skills_dict[200381] = require('#/data/race/skill/skill-200381');
skills_dict[200382] = require('#/data/race/skill/skill-200382');
skills_dict[200391] = require('#/data/race/skill/skill-200391');
skills_dict[200401] = require('#/data/race/skill/skill-200401');
skills_dict[200411] = require('#/data/race/skill/skill-200411');
skills_dict[200431] = require('#/data/race/skill/skill-200431');
skills_dict[200432] = require('#/data/race/skill/skill-200432');
skills_dict[200433] = require('#/data/race/skill/skill-200433');
skills_dict[200441] = require('#/data/race/skill/skill-200441');
skills_dict[200442] = require('#/data/race/skill/skill-200442');
skills_dict[200451] = require('#/data/race/skill/skill-200451');
skills_dict[200452] = require('#/data/race/skill/skill-200452');
skills_dict[200461] = require('#/data/race/skill/skill-200461');
skills_dict[200462] = require('#/data/race/skill/skill-200462');
skills_dict[200471] = require('#/data/race/skill/skill-200471');
skills_dict[200472] = require('#/data/race/skill/skill-200472');
skills_dict[200481] = require('#/data/race/skill/skill-200481');
skills_dict[200482] = require('#/data/race/skill/skill-200482');
skills_dict[200491] = require('#/data/race/skill/skill-200491');
skills_dict[200492] = require('#/data/race/skill/skill-200492');
skills_dict[200501] = require('#/data/race/skill/skill-200501');
skills_dict[200502] = require('#/data/race/skill/skill-200502');
skills_dict[200511] = require('#/data/race/skill/skill-200511');
skills_dict[200512] = require('#/data/race/skill/skill-200512');
skills_dict[200521] = require('#/data/race/skill/skill-200521');
skills_dict[200531] = require('#/data/race/skill/skill-200531');
skills_dict[200532] = require('#/data/race/skill/skill-200532');
skills_dict[200541] = require('#/data/race/skill/skill-200541');
skills_dict[200542] = require('#/data/race/skill/skill-200542');
skills_dict[200551] = require('#/data/race/skill/skill-200551');
skills_dict[200552] = require('#/data/race/skill/skill-200552');
skills_dict[200561] = require('#/data/race/skill/skill-200561');
skills_dict[200562] = require('#/data/race/skill/skill-200562');
skills_dict[200571] = require('#/data/race/skill/skill-200571');
skills_dict[200572] = require('#/data/race/skill/skill-200572');
skills_dict[200581] = require('#/data/race/skill/skill-200581');
skills_dict[200582] = require('#/data/race/skill/skill-200582');
skills_dict[200591] = require('#/data/race/skill/skill-200591');
skills_dict[200592] = require('#/data/race/skill/skill-200592');
skills_dict[200601] = require('#/data/race/skill/skill-200601');
skills_dict[200602] = require('#/data/race/skill/skill-200602');
skills_dict[200611] = require('#/data/race/skill/skill-200611');
skills_dict[200612] = require('#/data/race/skill/skill-200612');
skills_dict[200621] = require('#/data/race/skill/skill-200621');
skills_dict[200622] = require('#/data/race/skill/skill-200622');
skills_dict[200631] = require('#/data/race/skill/skill-200631');
skills_dict[200632] = require('#/data/race/skill/skill-200632');
skills_dict[200641] = require('#/data/race/skill/skill-200641');
skills_dict[200642] = require('#/data/race/skill/skill-200642');
skills_dict[200651] = require('#/data/race/skill/skill-200651');
skills_dict[200652] = require('#/data/race/skill/skill-200652');
skills_dict[200662] = require('#/data/race/skill/skill-200662');
skills_dict[200671] = require('#/data/race/skill/skill-200671');
skills_dict[200672] = require('#/data/race/skill/skill-200672');
skills_dict[200681] = require('#/data/race/skill/skill-200681');
skills_dict[200682] = require('#/data/race/skill/skill-200682');
skills_dict[200691] = require('#/data/race/skill/skill-200691');
skills_dict[200692] = require('#/data/race/skill/skill-200692');
skills_dict[200701] = require('#/data/race/skill/skill-200701');
skills_dict[200702] = require('#/data/race/skill/skill-200702');
skills_dict[200711] = require('#/data/race/skill/skill-200711');
skills_dict[200712] = require('#/data/race/skill/skill-200712');
skills_dict[200721] = require('#/data/race/skill/skill-200721');
skills_dict[200722] = require('#/data/race/skill/skill-200722');
skills_dict[200731] = require('#/data/race/skill/skill-200731');
skills_dict[200732] = require('#/data/race/skill/skill-200732');
skills_dict[200741] = require('#/data/race/skill/skill-200741');
skills_dict[200742] = require('#/data/race/skill/skill-200742');
skills_dict[200751] = require('#/data/race/skill/skill-200751');
skills_dict[200752] = require('#/data/race/skill/skill-200752');
skills_dict[200761] = require('#/data/race/skill/skill-200761');
skills_dict[200762] = require('#/data/race/skill/skill-200762');
skills_dict[200771] = require('#/data/race/skill/skill-200771');
skills_dict[200772] = require('#/data/race/skill/skill-200772');
skills_dict[200781] = require('#/data/race/skill/skill-200781');
skills_dict[200791] = require('#/data/race/skill/skill-200791');
skills_dict[200801] = require('#/data/race/skill/skill-200801');
skills_dict[200811] = require('#/data/race/skill/skill-200811');
skills_dict[200821] = require('#/data/race/skill/skill-200821');
skills_dict[200831] = require('#/data/race/skill/skill-200831');
skills_dict[200841] = require('#/data/race/skill/skill-200841');
skills_dict[200851] = require('#/data/race/skill/skill-200851');
skills_dict[200861] = require('#/data/race/skill/skill-200861');
skills_dict[200871] = require('#/data/race/skill/skill-200871');
skills_dict[200881] = require('#/data/race/skill/skill-200881');
skills_dict[200891] = require('#/data/race/skill/skill-200891');
skills_dict[200901] = require('#/data/race/skill/skill-200901');
skills_dict[200911] = require('#/data/race/skill/skill-200911');
skills_dict[200921] = require('#/data/race/skill/skill-200921');
skills_dict[200931] = require('#/data/race/skill/skill-200931');
skills_dict[200941] = require('#/data/race/skill/skill-200941');
skills_dict[200951] = require('#/data/race/skill/skill-200951');
skills_dict[200952] = require('#/data/race/skill/skill-200952');
skills_dict[200961] = require('#/data/race/skill/skill-200961');
skills_dict[200962] = require('#/data/race/skill/skill-200962');
skills_dict[200963] = require('#/data/race/skill/skill-200963');
skills_dict[200971] = require('#/data/race/skill/skill-200971');
skills_dict[200972] = require('#/data/race/skill/skill-200972');
skills_dict[200973] = require('#/data/race/skill/skill-200973');
skills_dict[200981] = require('#/data/race/skill/skill-200981');
skills_dict[200982] = require('#/data/race/skill/skill-200982');
skills_dict[200991] = require('#/data/race/skill/skill-200991');
skills_dict[200992] = require('#/data/race/skill/skill-200992');
skills_dict[201001] = require('#/data/race/skill/skill-201001');
skills_dict[201002] = require('#/data/race/skill/skill-201002');
skills_dict[201011] = require('#/data/race/skill/skill-201011');
skills_dict[201012] = require('#/data/race/skill/skill-201012');
skills_dict[201021] = require('#/data/race/skill/skill-201021');
skills_dict[201022] = require('#/data/race/skill/skill-201022');
skills_dict[201031] = require('#/data/race/skill/skill-201031');
skills_dict[201032] = require('#/data/race/skill/skill-201032');
skills_dict[201041] = require('#/data/race/skill/skill-201041');
skills_dict[201042] = require('#/data/race/skill/skill-201042');
skills_dict[201043] = require('#/data/race/skill/skill-201043');
skills_dict[201051] = require('#/data/race/skill/skill-201051');
skills_dict[201052] = require('#/data/race/skill/skill-201052');
skills_dict[201061] = require('#/data/race/skill/skill-201061');
skills_dict[201062] = require('#/data/race/skill/skill-201062');
skills_dict[201071] = require('#/data/race/skill/skill-201071');
skills_dict[201072] = require('#/data/race/skill/skill-201072');
skills_dict[201082] = require('#/data/race/skill/skill-201082');
skills_dict[201092] = require('#/data/race/skill/skill-201092');
skills_dict[201101] = require('#/data/race/skill/skill-201101');
skills_dict[201102] = require('#/data/race/skill/skill-201102');
skills_dict[201103] = require('#/data/race/skill/skill-201103');
skills_dict[201111] = require('#/data/race/skill/skill-201111');
skills_dict[201112] = require('#/data/race/skill/skill-201112');
skills_dict[201113] = require('#/data/race/skill/skill-201113');
skills_dict[201121] = require('#/data/race/skill/skill-201121');
skills_dict[201122] = require('#/data/race/skill/skill-201122');
skills_dict[201131] = require('#/data/race/skill/skill-201131');
skills_dict[201132] = require('#/data/race/skill/skill-201132');
skills_dict[201141] = require('#/data/race/skill/skill-201141');
skills_dict[201142] = require('#/data/race/skill/skill-201142');
skills_dict[201151] = require('#/data/race/skill/skill-201151');
skills_dict[201152] = require('#/data/race/skill/skill-201152');
skills_dict[201161] = require('#/data/race/skill/skill-201161');
skills_dict[201162] = require('#/data/race/skill/skill-201162');
skills_dict[201171] = require('#/data/race/skill/skill-201171');
skills_dict[201172] = require('#/data/race/skill/skill-201172');
skills_dict[201173] = require('#/data/race/skill/skill-201173');
skills_dict[201181] = require('#/data/race/skill/skill-201181');
skills_dict[201182] = require('#/data/race/skill/skill-201182');
skills_dict[201191] = require('#/data/race/skill/skill-201191');
skills_dict[201192] = require('#/data/race/skill/skill-201192');
skills_dict[201201] = require('#/data/race/skill/skill-201201');
skills_dict[201202] = require('#/data/race/skill/skill-201202');
skills_dict[201211] = require('#/data/race/skill/skill-201211');
skills_dict[201212] = require('#/data/race/skill/skill-201212');
skills_dict[201221] = require('#/data/race/skill/skill-201221');
skills_dict[201222] = require('#/data/race/skill/skill-201222');
skills_dict[201231] = require('#/data/race/skill/skill-201231');
skills_dict[201232] = require('#/data/race/skill/skill-201232');
skills_dict[201241] = require('#/data/race/skill/skill-201241');
skills_dict[201242] = require('#/data/race/skill/skill-201242');
skills_dict[201251] = require('#/data/race/skill/skill-201251');
skills_dict[201252] = require('#/data/race/skill/skill-201252');
skills_dict[201253] = require('#/data/race/skill/skill-201253');
skills_dict[201261] = require('#/data/race/skill/skill-201261');
skills_dict[201262] = require('#/data/race/skill/skill-201262');
skills_dict[201271] = require('#/data/race/skill/skill-201271');
skills_dict[201272] = require('#/data/race/skill/skill-201272');
skills_dict[201281] = require('#/data/race/skill/skill-201281');
skills_dict[201282] = require('#/data/race/skill/skill-201282');
skills_dict[201291] = require('#/data/race/skill/skill-201291');
skills_dict[201292] = require('#/data/race/skill/skill-201292');
skills_dict[201302] = require('#/data/race/skill/skill-201302');
skills_dict[201311] = require('#/data/race/skill/skill-201311');
skills_dict[201312] = require('#/data/race/skill/skill-201312');
skills_dict[201321] = require('#/data/race/skill/skill-201321');
skills_dict[201322] = require('#/data/race/skill/skill-201322');
skills_dict[201331] = require('#/data/race/skill/skill-201331');
skills_dict[201332] = require('#/data/race/skill/skill-201332');
skills_dict[201341] = require('#/data/race/skill/skill-201341');
skills_dict[201342] = require('#/data/race/skill/skill-201342');
skills_dict[201351] = require('#/data/race/skill/skill-201351');
skills_dict[201352] = require('#/data/race/skill/skill-201352');
skills_dict[201361] = require('#/data/race/skill/skill-201361');
skills_dict[201362] = require('#/data/race/skill/skill-201362');
skills_dict[201371] = require('#/data/race/skill/skill-201371');
skills_dict[201372] = require('#/data/race/skill/skill-201372');
skills_dict[201381] = require('#/data/race/skill/skill-201381');
skills_dict[201382] = require('#/data/race/skill/skill-201382');
skills_dict[201383] = require('#/data/race/skill/skill-201383');
skills_dict[201391] = require('#/data/race/skill/skill-201391');
skills_dict[201392] = require('#/data/race/skill/skill-201392');
skills_dict[201393] = require('#/data/race/skill/skill-201393');
skills_dict[201401] = require('#/data/race/skill/skill-201401');
skills_dict[201402] = require('#/data/race/skill/skill-201402');
skills_dict[201411] = require('#/data/race/skill/skill-201411');
skills_dict[201412] = require('#/data/race/skill/skill-201412');
skills_dict[201421] = require('#/data/race/skill/skill-201421');
skills_dict[201422] = require('#/data/race/skill/skill-201422');
skills_dict[201431] = require('#/data/race/skill/skill-201431');
skills_dict[201432] = require('#/data/race/skill/skill-201432');
skills_dict[201441] = require('#/data/race/skill/skill-201441');
skills_dict[201442] = require('#/data/race/skill/skill-201442');
skills_dict[201451] = require('#/data/race/skill/skill-201451');
skills_dict[201452] = require('#/data/race/skill/skill-201452');
skills_dict[201453] = require('#/data/race/skill/skill-201453');
skills_dict[201461] = require('#/data/race/skill/skill-201461');
skills_dict[201462] = require('#/data/race/skill/skill-201462');
skills_dict[201463] = require('#/data/race/skill/skill-201463');
skills_dict[201471] = require('#/data/race/skill/skill-201471');
skills_dict[201472] = require('#/data/race/skill/skill-201472');
skills_dict[201481] = require('#/data/race/skill/skill-201481');
skills_dict[201482] = require('#/data/race/skill/skill-201482');
skills_dict[201491] = require('#/data/race/skill/skill-201491');
skills_dict[201492] = require('#/data/race/skill/skill-201492');
skills_dict[201501] = require('#/data/race/skill/skill-201501');
skills_dict[201502] = require('#/data/race/skill/skill-201502');
skills_dict[201511] = require('#/data/race/skill/skill-201511');
skills_dict[201512] = require('#/data/race/skill/skill-201512');
skills_dict[201521] = require('#/data/race/skill/skill-201521');
skills_dict[201522] = require('#/data/race/skill/skill-201522');
skills_dict[201531] = require('#/data/race/skill/skill-201531');
skills_dict[201532] = require('#/data/race/skill/skill-201532');
skills_dict[201541] = require('#/data/race/skill/skill-201541');
skills_dict[201542] = require('#/data/race/skill/skill-201542');
skills_dict[201551] = require('#/data/race/skill/skill-201551');
skills_dict[201552] = require('#/data/race/skill/skill-201552');
skills_dict[201561] = require('#/data/race/skill/skill-201561');
skills_dict[201562] = require('#/data/race/skill/skill-201562');
skills_dict[201571] = require('#/data/race/skill/skill-201571');
skills_dict[201581] = require('#/data/race/skill/skill-201581');
skills_dict[201591] = require('#/data/race/skill/skill-201591');
skills_dict[201592] = require('#/data/race/skill/skill-201592');
skills_dict[201601] = require('#/data/race/skill/skill-201601');
skills_dict[201602] = require('#/data/race/skill/skill-201602');
skills_dict[201611] = require('#/data/race/skill/skill-201611');
skills_dict[201612] = require('#/data/race/skill/skill-201612');
skills_dict[201621] = require('#/data/race/skill/skill-201621');
skills_dict[201631] = require('#/data/race/skill/skill-201631');
skills_dict[201641] = require('#/data/race/skill/skill-201641');
skills_dict[201651] = require('#/data/race/skill/skill-201651');
skills_dict[201652] = require('#/data/race/skill/skill-201652');
skills_dict[201661] = require('#/data/race/skill/skill-201661');
skills_dict[201662] = require('#/data/race/skill/skill-201662');
skills_dict[201671] = require('#/data/race/skill/skill-201671');
skills_dict[201672] = require('#/data/race/skill/skill-201672');
skills_dict[201681] = require('#/data/race/skill/skill-201681');
skills_dict[201682] = require('#/data/race/skill/skill-201682');
skills_dict[201691] = require('#/data/race/skill/skill-201691');
skills_dict[201692] = require('#/data/race/skill/skill-201692');
skills_dict[201701] = require('#/data/race/skill/skill-201701');
skills_dict[201702] = require('#/data/race/skill/skill-201702');
skills_dict[201901] = require('#/data/race/skill/skill-201901');
skills_dict[201902] = require('#/data/race/skill/skill-201902');
skills_dict[202001] = require('#/data/race/skill/skill-202001');
skills_dict[202002] = require('#/data/race/skill/skill-202002');
skills_dict[202011] = require('#/data/race/skill/skill-202011');
skills_dict[202012] = require('#/data/race/skill/skill-202012');
skills_dict[202021] = require('#/data/race/skill/skill-202021');
skills_dict[202022] = require('#/data/race/skill/skill-202022');
skills_dict[202031] = require('#/data/race/skill/skill-202031');
skills_dict[202032] = require('#/data/race/skill/skill-202032');
skills_dict[202041] = require('#/data/race/skill/skill-202041');
skills_dict[202042] = require('#/data/race/skill/skill-202042');
skills_dict[202051] = require('#/data/race/skill/skill-202051');
skills_dict[202061] = require('#/data/race/skill/skill-202061');
skills_dict[202071] = require('#/data/race/skill/skill-202071');
skills_dict[202072] = require('#/data/race/skill/skill-202072');
skills_dict[202081] = require('#/data/race/skill/skill-202081');
skills_dict[202082] = require('#/data/race/skill/skill-202082');
skills_dict[202091] = require('#/data/race/skill/skill-202091');
skills_dict[202092] = require('#/data/race/skill/skill-202092');
skills_dict[202101] = require('#/data/race/skill/skill-202101');
skills_dict[202102] = require('#/data/race/skill/skill-202102');
skills_dict[202111] = require('#/data/race/skill/skill-202111');
skills_dict[202112] = require('#/data/race/skill/skill-202112');
skills_dict[202121] = require('#/data/race/skill/skill-202121');
skills_dict[202122] = require('#/data/race/skill/skill-202122');
skills_dict[202131] = require('#/data/race/skill/skill-202131');
skills_dict[202132] = require('#/data/race/skill/skill-202132');
skills_dict[202151] = require('#/data/race/skill/skill-202151');
skills_dict[202152] = require('#/data/race/skill/skill-202152');
skills_dict[202161] = require('#/data/race/skill/skill-202161');
skills_dict[202171] = require('#/data/race/skill/skill-202171');
skills_dict[202172] = require('#/data/race/skill/skill-202172');
skills_dict[202191] = require('#/data/race/skill/skill-202191');
skills_dict[202192] = require('#/data/race/skill/skill-202192');
skills_dict[202201] = require('#/data/race/skill/skill-202201');
skills_dict[202202] = require('#/data/race/skill/skill-202202');
skills_dict[202211] = require('#/data/race/skill/skill-202211');
skills_dict[202212] = require('#/data/race/skill/skill-202212');
skills_dict[202221] = require('#/data/race/skill/skill-202221');
skills_dict[202222] = require('#/data/race/skill/skill-202222');
skills_dict[202231] = require('#/data/race/skill/skill-202231');
skills_dict[202232] = require('#/data/race/skill/skill-202232');
skills_dict[202241] = require('#/data/race/skill/skill-202241');
skills_dict[202242] = require('#/data/race/skill/skill-202242');
skills_dict[202251] = require('#/data/race/skill/skill-202251');
skills_dict[202252] = require('#/data/race/skill/skill-202252');
skills_dict[202261] = require('#/data/race/skill/skill-202261');
skills_dict[202262] = require('#/data/race/skill/skill-202262');
skills_dict[202271] = require('#/data/race/skill/skill-202271');
skills_dict[202272] = require('#/data/race/skill/skill-202272');
skills_dict[202281] = require('#/data/race/skill/skill-202281');
skills_dict[202282] = require('#/data/race/skill/skill-202282');
skills_dict[202291] = require('#/data/race/skill/skill-202291');
skills_dict[202292] = require('#/data/race/skill/skill-202292');
skills_dict[202301] = require('#/data/race/skill/skill-202301');
skills_dict[202302] = require('#/data/race/skill/skill-202302');
skills_dict[202311] = require('#/data/race/skill/skill-202311');
skills_dict[202312] = require('#/data/race/skill/skill-202312');
skills_dict[202321] = require('#/data/race/skill/skill-202321');
skills_dict[202322] = require('#/data/race/skill/skill-202322');
skills_dict[202331] = require('#/data/race/skill/skill-202331');
skills_dict[202332] = require('#/data/race/skill/skill-202332');
skills_dict[202341] = require('#/data/race/skill/skill-202341');
skills_dict[202342] = require('#/data/race/skill/skill-202342');
skills_dict[202343] = require('#/data/race/skill/skill-202343');
skills_dict[202352] = require('#/data/race/skill/skill-202352');
skills_dict[202361] = require('#/data/race/skill/skill-202361');
skills_dict[202362] = require('#/data/race/skill/skill-202362');
skills_dict[202371] = require('#/data/race/skill/skill-202371');
skills_dict[202372] = require('#/data/race/skill/skill-202372');
skills_dict[202381] = require('#/data/race/skill/skill-202381');
skills_dict[202382] = require('#/data/race/skill/skill-202382');
skills_dict[202391] = require('#/data/race/skill/skill-202391');
skills_dict[202392] = require('#/data/race/skill/skill-202392');
skills_dict[202401] = require('#/data/race/skill/skill-202401');
skills_dict[202402] = require('#/data/race/skill/skill-202402');
skills_dict[202411] = require('#/data/race/skill/skill-202411');
skills_dict[202412] = require('#/data/race/skill/skill-202412');
skills_dict[202421] = require('#/data/race/skill/skill-202421');
skills_dict[202422] = require('#/data/race/skill/skill-202422');
skills_dict[202431] = require('#/data/race/skill/skill-202431');
skills_dict[202432] = require('#/data/race/skill/skill-202432');
skills_dict[202441] = require('#/data/race/skill/skill-202441');
skills_dict[202442] = require('#/data/race/skill/skill-202442');
skills_dict[202451] = require('#/data/race/skill/skill-202451');
skills_dict[202452] = require('#/data/race/skill/skill-202452');
skills_dict[202461] = require('#/data/race/skill/skill-202461');
skills_dict[202462] = require('#/data/race/skill/skill-202462');
skills_dict[202471] = require('#/data/race/skill/skill-202471');
skills_dict[202472] = require('#/data/race/skill/skill-202472');
skills_dict[202481] = require('#/data/race/skill/skill-202481');
skills_dict[202482] = require('#/data/race/skill/skill-202482');
skills_dict[202491] = require('#/data/race/skill/skill-202491');
skills_dict[202492] = require('#/data/race/skill/skill-202492');
skills_dict[202501] = require('#/data/race/skill/skill-202501');
skills_dict[202502] = require('#/data/race/skill/skill-202502');
skills_dict[202521] = require('#/data/race/skill/skill-202521');
skills_dict[202522] = require('#/data/race/skill/skill-202522');
skills_dict[202531] = require('#/data/race/skill/skill-202531');
skills_dict[202532] = require('#/data/race/skill/skill-202532');
skills_dict[202541] = require('#/data/race/skill/skill-202541');
skills_dict[202542] = require('#/data/race/skill/skill-202542');
skills_dict[202551] = require('#/data/race/skill/skill-202551');
skills_dict[202552] = require('#/data/race/skill/skill-202552');
skills_dict[202561] = require('#/data/race/skill/skill-202561');
skills_dict[202562] = require('#/data/race/skill/skill-202562');
skills_dict[202571] = require('#/data/race/skill/skill-202571');
skills_dict[202581] = require('#/data/race/skill/skill-202581');
skills_dict[202582] = require('#/data/race/skill/skill-202582');
skills_dict[202591] = require('#/data/race/skill/skill-202591');
skills_dict[202592] = require('#/data/race/skill/skill-202592');
skills_dict[202601] = require('#/data/race/skill/skill-202601');
skills_dict[202602] = require('#/data/race/skill/skill-202602');
skills_dict[202612] = require('#/data/race/skill/skill-202612');
skills_dict[202621] = require('#/data/race/skill/skill-202621');
skills_dict[202622] = require('#/data/race/skill/skill-202622');
skills_dict[202641] = require('#/data/race/skill/skill-202641');
skills_dict[202642] = require('#/data/race/skill/skill-202642');
skills_dict[202651] = require('#/data/race/skill/skill-202651');
skills_dict[202652] = require('#/data/race/skill/skill-202652');
skills_dict[202661] = require('#/data/race/skill/skill-202661');
skills_dict[202662] = require('#/data/race/skill/skill-202662');
skills_dict[202671] = require('#/data/race/skill/skill-202671');
skills_dict[202672] = require('#/data/race/skill/skill-202672');
skills_dict[202681] = require('#/data/race/skill/skill-202681');
skills_dict[202682] = require('#/data/race/skill/skill-202682');
skills_dict[202692] = require('#/data/race/skill/skill-202692');
skills_dict[202702] = require('#/data/race/skill/skill-202702');
skills_dict[202711] = require('#/data/race/skill/skill-202711');
skills_dict[202721] = require('#/data/race/skill/skill-202721');
skills_dict[202722] = require('#/data/race/skill/skill-202722');
skills_dict[202732] = require('#/data/race/skill/skill-202732');
skills_dict[202741] = require('#/data/race/skill/skill-202741');
skills_dict[202742] = require('#/data/race/skill/skill-202742');
skills_dict[202751] = require('#/data/race/skill/skill-202751');
skills_dict[202752] = require('#/data/race/skill/skill-202752');
skills_dict[202761] = require('#/data/race/skill/skill-202761');
skills_dict[202762] = require('#/data/race/skill/skill-202762');
skills_dict[202772] = require('#/data/race/skill/skill-202772');
skills_dict[202792] = require('#/data/race/skill/skill-202792');
skills_dict[202801] = require('#/data/race/skill/skill-202801');
skills_dict[202802] = require('#/data/race/skill/skill-202802');
skills_dict[202811] = require('#/data/race/skill/skill-202811');
skills_dict[202821] = require('#/data/race/skill/skill-202821');
skills_dict[202832] = require('#/data/race/skill/skill-202832');
skills_dict[202852] = require('#/data/race/skill/skill-202852');
skills_dict[202871] = require('#/data/race/skill/skill-202871');
skills_dict[202872] = require('#/data/race/skill/skill-202872');
skills_dict[202882] = require('#/data/race/skill/skill-202882');
skills_dict[202922] = require('#/data/race/skill/skill-202922');
skills_dict[202932] = require('#/data/race/skill/skill-202932');
skills_dict[202942] = require('#/data/race/skill/skill-202942');
skills_dict[202951] = require('#/data/race/skill/skill-202951');
skills_dict[202952] = require('#/data/race/skill/skill-202952');
skills_dict[210011] = require('#/data/race/skill/skill-210011');
skills_dict[210012] = require('#/data/race/skill/skill-210012');
skills_dict[210021] = require('#/data/race/skill/skill-210021');
skills_dict[210022] = require('#/data/race/skill/skill-210022');
skills_dict[210031] = require('#/data/race/skill/skill-210031');
skills_dict[210032] = require('#/data/race/skill/skill-210032');
skills_dict[210041] = require('#/data/race/skill/skill-210041');
skills_dict[210042] = require('#/data/race/skill/skill-210042');
skills_dict[210051] = require('#/data/race/skill/skill-210051');
skills_dict[210052] = require('#/data/race/skill/skill-210052');
skills_dict[210061] = require('#/data/race/skill/skill-210061');
skills_dict[210062] = require('#/data/race/skill/skill-210062');
skills_dict[210071] = require('#/data/race/skill/skill-210071');
skills_dict[210072] = require('#/data/race/skill/skill-210072');
skills_dict[210261] = require('#/data/race/skill/skill-210261');
skills_dict[210271] = require('#/data/race/skill/skill-210271');
skills_dict[210281] = require('#/data/race/skill/skill-210281');
skills_dict[300071] = require('#/data/race/skill/skill-300071');
skills_dict[300081] = require('#/data/race/skill/skill-300081');
skills_dict[300091] = require('#/data/race/skill/skill-300091');
skills_dict[300101] = require('#/data/race/skill/skill-300101');
skills_dict[300141] = require('#/data/race/skill/skill-300141');
skills_dict[407011] = require('#/data/race/skill/skill-407011');
skills_dict[407021] = require('#/data/race/skill/skill-407021');
skills_dict[407031] = require('#/data/race/skill/skill-407031');
skills_dict[407041] = require('#/data/race/skill/skill-407041');
skills_dict[407051] = require('#/data/race/skill/skill-407051');
skills_dict[900251] = require('#/data/race/skill/skill-900251');
skills_dict[1400011] = require('#/data/race/skill/skill-1400011');
skills_dict[102301111] = require('#/data/race/skill/skill-102301111');
skills_dict[102301211] = require('#/data/race/skill/skill-102301211');
skills_dict[103502111] = require('#/data/race/skill/skill-103502111');
skills_dict[103502211] = require('#/data/race/skill/skill-103502211');
skills_dict[104102111] = require('#/data/race/skill/skill-104102111');
skills_dict[104102211] = require('#/data/race/skill/skill-104102211');
skills_dict[105001111] = require('#/data/race/skill/skill-105001111');
skills_dict[105002111] = require('#/data/race/skill/skill-105002111');
skills_dict[105002211] = require('#/data/race/skill/skill-105002211');
skills_dict[105101121] = require('#/data/race/skill/skill-105101121');
skills_dict[105101211] = require('#/data/race/skill/skill-105101211');
skills_dict[105401111] = require('#/data/race/skill/skill-105401111');
skills_dict[106701111] = require('#/data/race/skill/skill-106701111');
skills_dict[106701211] = require('#/data/race/skill/skill-106701211');
skills_dict[106801111] = require('#/data/race/skill/skill-106801111');
skills_dict[106801211] = require('#/data/race/skill/skill-106801211');
skills_dict[106803111] = require('#/data/race/skill/skill-106803111');
skills_dict[106803211] = require('#/data/race/skill/skill-106803211');
skills_dict[108001111] = require('#/data/race/skill/skill-108001111');
skills_dict[108001211] = require('#/data/race/skill/skill-108001211');
skills_dict[108601111] = require('#/data/race/skill/skill-108601111');
skills_dict[108601211] = require('#/data/race/skill/skill-108601211');
skills_dict[108801111] = require('#/data/race/skill/skill-108801111');
skills_dict[108801211] = require('#/data/race/skill/skill-108801211');
skills_dict[108901211] = require('#/data/race/skill/skill-108901211');

for (const key in chara_skill_dict) {
  chara_skill_dict[key] = Object.values(
    chara_skill_dict[key].reduce((p, c) => {
      (p[skills_dict[c].group_id] || (p[skills_dict[c].group_id] = [])).push(c);
      return p;
    }, {}),
  ).map((e) => e.sort()[0]);
}

module.exports = { chara_skill_dict, skills_dict };
