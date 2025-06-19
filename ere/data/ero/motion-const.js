const {
  base_enum,
  motion_enum,
  towards_enum,
  up_enum,
} = require('#/data/ero/part-const');

const base_dict = [
  [
    [
      [[], []],
      [[], []],
    ],
    [
      [[], []],
      [[], []],
    ],
    [
      [[], []],
      [[], []],
    ],
    [
      [[], []],
      [[], []],
    ],
  ],
  [
    [
      [[], []],
      [[], []],
    ],
    [
      [[], []],
      [[], []],
    ],
    [
      [[], []],
      [[], []],
    ],
    [
      [[], []],
      [[], []],
    ],
  ],
  [
    [
      [[], []],
      [[], []],
    ],
    [
      [[], []],
      [[], []],
    ],
    [
      [[], []],
      [[], []],
    ],
    [
      [[], []],
      [[], []],
    ],
  ],
  [
    [
      [[], []],
      [[], []],
    ],
    [
      [[], []],
      [[], []],
    ],
    [
      [[], []],
      [[], []],
    ],
    [
      [[], []],
      [[], []],
    ],
  ],
];

base_dict[motion_enum.lie][motion_enum.lie][towards_enum.right][
  towards_enum.right
][up_enum.up] = base_enum.no;
base_dict[motion_enum.lie][motion_enum.lie][towards_enum.right][
  towards_enum.left
][up_enum.up] = base_enum.no;
base_dict[motion_enum.lie][motion_enum.lie][towards_enum.left][
  towards_enum.right
][up_enum.up] = base_enum.same;
base_dict[motion_enum.lie][motion_enum.lie][towards_enum.left][
  towards_enum.left
][up_enum.up] = base_enum.same;
base_dict[motion_enum.lie][motion_enum.sit][towards_enum.right][
  towards_enum.right
][up_enum.up] = base_enum.d_tri;
base_dict[motion_enum.lie][motion_enum.sit][towards_enum.right][
  towards_enum.left
][up_enum.up] = base_enum.no;
base_dict[motion_enum.lie][motion_enum.sit][towards_enum.left][
  towards_enum.right
][up_enum.up] = base_enum.s_tri;
base_dict[motion_enum.lie][motion_enum.sit][towards_enum.left][
  towards_enum.left
][up_enum.up] = base_enum.s_tri;
base_dict[motion_enum.lie][motion_enum.stand][towards_enum.right][
  towards_enum.right
][up_enum.up] = base_enum.foot;
base_dict[motion_enum.lie][motion_enum.stand][towards_enum.right][
  towards_enum.left
][up_enum.up] = base_enum.foot;
base_dict[motion_enum.lie][motion_enum.stand][towards_enum.left][
  towards_enum.right
][up_enum.up] = base_enum.foot;
base_dict[motion_enum.lie][motion_enum.stand][towards_enum.left][
  towards_enum.left
][up_enum.up] = base_enum.foot;
base_dict[motion_enum.lie][motion_enum.rev][towards_enum.right][
  towards_enum.right
][up_enum.up] = base_enum.same;
base_dict[motion_enum.lie][motion_enum.rev][towards_enum.right][
  towards_enum.left
][up_enum.up] = base_enum.same;
base_dict[motion_enum.lie][motion_enum.rev][towards_enum.left][
  towards_enum.right
][up_enum.up] = base_enum.no;
base_dict[motion_enum.lie][motion_enum.rev][towards_enum.left][
  towards_enum.left
][up_enum.up] = base_enum.no;

base_dict[motion_enum.sit][motion_enum.lie][towards_enum.right][
  towards_enum.right
][up_enum.up] = base_enum.no;
base_dict[motion_enum.sit][motion_enum.lie][towards_enum.right][
  towards_enum.left
][up_enum.up] = base_enum.no;
base_dict[motion_enum.sit][motion_enum.lie][towards_enum.left][
  towards_enum.right
][up_enum.up] = base_enum.no;
base_dict[motion_enum.sit][motion_enum.lie][towards_enum.left][
  towards_enum.left
][up_enum.up] = base_enum.no;
base_dict[motion_enum.sit][motion_enum.sit][towards_enum.right][
  towards_enum.right
][up_enum.up] = base_enum.no;
base_dict[motion_enum.sit][motion_enum.sit][towards_enum.right][
  towards_enum.left
][up_enum.up] = base_enum.no;
base_dict[motion_enum.sit][motion_enum.sit][towards_enum.left][
  towards_enum.right
][up_enum.up] = base_enum.same;
base_dict[motion_enum.sit][motion_enum.sit][towards_enum.left][
  towards_enum.left
][up_enum.up] = base_enum.no;
base_dict[motion_enum.sit][motion_enum.stand][towards_enum.right][
  towards_enum.right
][up_enum.up] = base_enum.foot;
base_dict[motion_enum.sit][motion_enum.stand][towards_enum.right][
  towards_enum.left
][up_enum.up] = base_enum.foot;
base_dict[motion_enum.sit][motion_enum.stand][towards_enum.left][
  towards_enum.right
][up_enum.up] = base_enum.foot;
base_dict[motion_enum.sit][motion_enum.stand][towards_enum.left][
  towards_enum.left
][up_enum.up] = base_enum.foot;
base_dict[motion_enum.sit][motion_enum.rev][towards_enum.right][
  towards_enum.right
][up_enum.up] = base_enum.no;
base_dict[motion_enum.sit][motion_enum.rev][towards_enum.right][
  towards_enum.left
][up_enum.up] = base_enum.no;
base_dict[motion_enum.sit][motion_enum.rev][towards_enum.left][
  towards_enum.right
][up_enum.up] = base_enum.no;
base_dict[motion_enum.sit][motion_enum.rev][towards_enum.left][
  towards_enum.left
][up_enum.up] = base_enum.no;

base_dict[motion_enum.stand][motion_enum.lie][towards_enum.right][
  towards_enum.right
][up_enum.up] = base_enum.no;
base_dict[motion_enum.stand][motion_enum.lie][towards_enum.right][
  towards_enum.left
][up_enum.up] = base_enum.no;
base_dict[motion_enum.stand][motion_enum.lie][towards_enum.left][
  towards_enum.right
][up_enum.up] = base_enum.no;
base_dict[motion_enum.stand][motion_enum.lie][towards_enum.left][
  towards_enum.left
][up_enum.up] = base_enum.no;
base_dict[motion_enum.stand][motion_enum.sit][towards_enum.right][
  towards_enum.right
][up_enum.up] = base_enum.no;
base_dict[motion_enum.stand][motion_enum.sit][towards_enum.right][
  towards_enum.left
][up_enum.up] = base_enum.no;
base_dict[motion_enum.stand][motion_enum.sit][towards_enum.left][
  towards_enum.right
][up_enum.up] = base_enum.same;
base_dict[motion_enum.stand][motion_enum.sit][towards_enum.left][
  towards_enum.left
][up_enum.up] = base_enum.no;
base_dict[motion_enum.stand][motion_enum.stand][towards_enum.right][
  towards_enum.right
][up_enum.up] = base_enum.same;
base_dict[motion_enum.stand][motion_enum.stand][towards_enum.right][
  towards_enum.left
][up_enum.up] = base_enum.no;
base_dict[motion_enum.stand][motion_enum.stand][towards_enum.left][
  towards_enum.right
][up_enum.up] = base_enum.same;
base_dict[motion_enum.stand][motion_enum.stand][towards_enum.left][
  towards_enum.left
][up_enum.up] = base_enum.same;
base_dict[motion_enum.stand][motion_enum.rev][towards_enum.right][
  towards_enum.right
][up_enum.up] = base_enum.no;
base_dict[motion_enum.stand][motion_enum.rev][towards_enum.right][
  towards_enum.left
][up_enum.up] = base_enum.no;
base_dict[motion_enum.stand][motion_enum.rev][towards_enum.left][
  towards_enum.right
][up_enum.up] = base_enum.no;
base_dict[motion_enum.stand][motion_enum.rev][towards_enum.left][
  towards_enum.left
][up_enum.up] = base_enum.no;

base_dict[motion_enum.rev][motion_enum.lie][towards_enum.right][
  towards_enum.right
][up_enum.up] = base_enum.no;
base_dict[motion_enum.rev][motion_enum.lie][towards_enum.right][
  towards_enum.left
][up_enum.up] = base_enum.diff;
base_dict[motion_enum.rev][motion_enum.lie][towards_enum.left][
  towards_enum.right
][up_enum.up] = base_enum.diff;
base_dict[motion_enum.rev][motion_enum.lie][towards_enum.left][
  towards_enum.left
][up_enum.up] = base_enum.diff;
base_dict[motion_enum.rev][motion_enum.sit][towards_enum.right][
  towards_enum.right
][up_enum.up] = base_enum.s_tri;
base_dict[motion_enum.rev][motion_enum.sit][towards_enum.right][
  towards_enum.left
][up_enum.up] = base_enum.s_tri;
base_dict[motion_enum.rev][motion_enum.sit][towards_enum.left][
  towards_enum.right
][up_enum.up] = base_enum.no;
base_dict[motion_enum.rev][motion_enum.sit][towards_enum.left][
  towards_enum.left
][up_enum.up] = base_enum.d_tri;
base_dict[motion_enum.rev][motion_enum.stand][towards_enum.right][
  towards_enum.right
][up_enum.up] = base_enum.foot;
base_dict[motion_enum.rev][motion_enum.stand][towards_enum.right][
  towards_enum.left
][up_enum.up] = base_enum.foot;
base_dict[motion_enum.rev][motion_enum.stand][towards_enum.left][
  towards_enum.right
][up_enum.up] = base_enum.foot;
base_dict[motion_enum.rev][motion_enum.stand][towards_enum.left][
  towards_enum.left
][up_enum.up] = base_enum.foot;
base_dict[motion_enum.rev][motion_enum.rev][towards_enum.right][
  towards_enum.right
][up_enum.up] = base_enum.same;
base_dict[motion_enum.rev][motion_enum.rev][towards_enum.right][
  towards_enum.left
][up_enum.up] = base_enum.same;
base_dict[motion_enum.rev][motion_enum.rev][towards_enum.left][
  towards_enum.right
][up_enum.up] = base_enum.no;
base_dict[motion_enum.rev][motion_enum.rev][towards_enum.left][
  towards_enum.left
][up_enum.up] = base_enum.no;

base_dict[motion_enum.lie][motion_enum.lie][towards_enum.right][
  towards_enum.right
][up_enum.down] = base_enum.same;
base_dict[motion_enum.lie][motion_enum.lie][towards_enum.right][
  towards_enum.left
][up_enum.down] = base_enum.same;
base_dict[motion_enum.lie][motion_enum.lie][towards_enum.left][
  towards_enum.right
][up_enum.down] = base_enum.no;
base_dict[motion_enum.lie][motion_enum.lie][towards_enum.left][
  towards_enum.left
][up_enum.down] = base_enum.no;
base_dict[motion_enum.lie][motion_enum.sit][towards_enum.right][
  towards_enum.right
][up_enum.down] = base_enum.no;
base_dict[motion_enum.lie][motion_enum.sit][towards_enum.right][
  towards_enum.left
][up_enum.down] = base_enum.no;
base_dict[motion_enum.lie][motion_enum.sit][towards_enum.left][
  towards_enum.right
][up_enum.down] = base_enum.no;
base_dict[motion_enum.lie][motion_enum.sit][towards_enum.left][
  towards_enum.left
][up_enum.down] = base_enum.no;
base_dict[motion_enum.lie][motion_enum.stand][towards_enum.right][
  towards_enum.right
][up_enum.down] = base_enum.no;
base_dict[motion_enum.lie][motion_enum.stand][towards_enum.right][
  towards_enum.left
][up_enum.down] = base_enum.no;
base_dict[motion_enum.lie][motion_enum.stand][towards_enum.left][
  towards_enum.right
][up_enum.down] = base_enum.no;
base_dict[motion_enum.lie][motion_enum.stand][towards_enum.left][
  towards_enum.left
][up_enum.down] = base_enum.no;
base_dict[motion_enum.lie][motion_enum.rev][towards_enum.right][
  towards_enum.right
][up_enum.down] = base_enum.no;
base_dict[motion_enum.lie][motion_enum.rev][towards_enum.right][
  towards_enum.left
][up_enum.down] = base_enum.no;
base_dict[motion_enum.lie][motion_enum.rev][towards_enum.left][
  towards_enum.right
][up_enum.down] = base_enum.same;
base_dict[motion_enum.lie][motion_enum.rev][towards_enum.left][
  towards_enum.left
][up_enum.down] = base_enum.same;

base_dict[motion_enum.sit][motion_enum.lie][towards_enum.right][
  towards_enum.right
][up_enum.down] = base_enum.s_tri;
base_dict[motion_enum.sit][motion_enum.lie][towards_enum.right][
  towards_enum.left
][up_enum.down] = base_enum.s_tri;
base_dict[motion_enum.sit][motion_enum.lie][towards_enum.left][
  towards_enum.right
][up_enum.down] = base_enum.no;
base_dict[motion_enum.sit][motion_enum.lie][towards_enum.left][
  towards_enum.left
][up_enum.down] = base_enum.no;
base_dict[motion_enum.sit][motion_enum.sit][towards_enum.right][
  towards_enum.right
][up_enum.down] = base_enum.same;
base_dict[motion_enum.sit][motion_enum.sit][towards_enum.right][
  towards_enum.left
][up_enum.down] = base_enum.same;
base_dict[motion_enum.sit][motion_enum.sit][towards_enum.left][
  towards_enum.right
][up_enum.down] = base_enum.no;
base_dict[motion_enum.sit][motion_enum.sit][towards_enum.left][
  towards_enum.left
][up_enum.down] = base_enum.same;
base_dict[motion_enum.sit][motion_enum.stand][towards_enum.right][
  towards_enum.right
][up_enum.down] = base_enum.same;
base_dict[motion_enum.sit][motion_enum.stand][towards_enum.right][
  towards_enum.left
][up_enum.down] = base_enum.same;
base_dict[motion_enum.sit][motion_enum.stand][towards_enum.left][
  towards_enum.right
][up_enum.down] = base_enum.no;
base_dict[motion_enum.sit][motion_enum.stand][towards_enum.left][
  towards_enum.left
][up_enum.down] = base_enum.same;
base_dict[motion_enum.sit][motion_enum.rev][towards_enum.right][
  towards_enum.right
][up_enum.down] = base_enum.no;
base_dict[motion_enum.sit][motion_enum.rev][towards_enum.right][
  towards_enum.left
][up_enum.down] = base_enum.no;
base_dict[motion_enum.sit][motion_enum.rev][towards_enum.left][
  towards_enum.right
][up_enum.down] = base_enum.s_tri;
base_dict[motion_enum.sit][motion_enum.rev][towards_enum.left][
  towards_enum.left
][up_enum.down] = base_enum.s_tri;

base_dict[motion_enum.stand][motion_enum.lie][towards_enum.right][
  towards_enum.right
][up_enum.down] = base_enum.no;
base_dict[motion_enum.stand][motion_enum.lie][towards_enum.right][
  towards_enum.left
][up_enum.down] = base_enum.no;
base_dict[motion_enum.stand][motion_enum.lie][towards_enum.left][
  towards_enum.right
][up_enum.down] = base_enum.no;
base_dict[motion_enum.stand][motion_enum.lie][towards_enum.left][
  towards_enum.left
][up_enum.down] = base_enum.no;
base_dict[motion_enum.stand][motion_enum.sit][towards_enum.right][
  towards_enum.right
][up_enum.down] = base_enum.no;
base_dict[motion_enum.stand][motion_enum.sit][towards_enum.right][
  towards_enum.left
][up_enum.down] = base_enum.no;
base_dict[motion_enum.stand][motion_enum.sit][towards_enum.left][
  towards_enum.right
][up_enum.down] = base_enum.no;
base_dict[motion_enum.stand][motion_enum.sit][towards_enum.left][
  towards_enum.left
][up_enum.down] = base_enum.no;
base_dict[motion_enum.stand][motion_enum.stand][towards_enum.right][
  towards_enum.right
][up_enum.down] = base_enum.no;
base_dict[motion_enum.stand][motion_enum.stand][towards_enum.right][
  towards_enum.left
][up_enum.down] = base_enum.same;
base_dict[motion_enum.stand][motion_enum.stand][towards_enum.left][
  towards_enum.right
][up_enum.down] = base_enum.no;
base_dict[motion_enum.stand][motion_enum.stand][towards_enum.left][
  towards_enum.left
][up_enum.down] = base_enum.no;
base_dict[motion_enum.stand][motion_enum.rev][towards_enum.right][
  towards_enum.right
][up_enum.down] = base_enum.no;
base_dict[motion_enum.stand][motion_enum.rev][towards_enum.right][
  towards_enum.left
][up_enum.down] = base_enum.no;
base_dict[motion_enum.stand][motion_enum.rev][towards_enum.left][
  towards_enum.right
][up_enum.down] = base_enum.no;
base_dict[motion_enum.stand][motion_enum.rev][towards_enum.left][
  towards_enum.left
][up_enum.down] = base_enum.no;

base_dict[motion_enum.rev][motion_enum.lie][towards_enum.right][
  towards_enum.right
][up_enum.down] = base_enum.diff;
base_dict[motion_enum.rev][motion_enum.lie][towards_enum.right][
  towards_enum.left
][up_enum.down] = base_enum.diff;
base_dict[motion_enum.rev][motion_enum.lie][towards_enum.left][
  towards_enum.right
][up_enum.down] = base_enum.diff;
base_dict[motion_enum.rev][motion_enum.lie][towards_enum.left][
  towards_enum.left
][up_enum.down] = base_enum.no;
base_dict[motion_enum.rev][motion_enum.sit][towards_enum.right][
  towards_enum.right
][up_enum.down] = base_enum.no;
base_dict[motion_enum.rev][motion_enum.sit][towards_enum.right][
  towards_enum.left
][up_enum.down] = base_enum.no;
base_dict[motion_enum.rev][motion_enum.sit][towards_enum.left][
  towards_enum.right
][up_enum.down] = base_enum.no;
base_dict[motion_enum.rev][motion_enum.sit][towards_enum.left][
  towards_enum.left
][up_enum.down] = base_enum.no;
base_dict[motion_enum.rev][motion_enum.stand][towards_enum.right][
  towards_enum.right
][up_enum.down] = base_enum.no;
base_dict[motion_enum.rev][motion_enum.stand][towards_enum.right][
  towards_enum.left
][up_enum.down] = base_enum.no;
base_dict[motion_enum.rev][motion_enum.stand][towards_enum.left][
  towards_enum.right
][up_enum.down] = base_enum.no;
base_dict[motion_enum.rev][motion_enum.stand][towards_enum.left][
  towards_enum.left
][up_enum.down] = base_enum.no;
base_dict[motion_enum.rev][motion_enum.rev][towards_enum.right][
  towards_enum.right
][up_enum.down] = base_enum.no;
base_dict[motion_enum.rev][motion_enum.rev][towards_enum.right][
  towards_enum.left
][up_enum.down] = base_enum.no;
base_dict[motion_enum.rev][motion_enum.rev][towards_enum.left][
  towards_enum.right
][up_enum.down] = base_enum.same;
base_dict[motion_enum.rev][motion_enum.rev][towards_enum.left][
  towards_enum.left
][up_enum.down] = base_enum.same;

module.exports = base_dict;
