const { rmSync, writeFileSync } = require('fs');

rmSync('release.yml', { force: true });
writeFileSync(
  `name: "EraUma v${process.env.CI_COMMIT_TAG} (${process.env.CALL_SIGN})"
description: ./RELEASE.md
tag_name: $CI_COMMIT_TAG
ref: $CI_COMMIT_SHA
assets:
  links:
    - name: "[Win10绿色版] ${process.env.GAME_ALL_ZIP} (解压密码：era)"
      url: "https://umaera.gitgud.site/erauma/index.html"
      link_type: package
    - name: "[PC游戏包] ${process.env.GAME_ZIP} (解压密码：era)"
      url: "${process.env.GAME_URL}"
      link_type: package
    - name: "[安卓游戏包] ${process.env.GAME_BUNDLE_ZIP} (解压密码：era)"
      url: "${process.env.GAME_BUNDLE_URL}"
      link_type: package
    - name: "[通用资源包] erauma-master-res.zip (版本号 ${process.env.RES_VERSION}，解压后文件夹改名为 res 然后放到游戏文件夹下，在游戏设置中启用资源)"
      url: "https://gitgud.io/umaera/data/uma-resource/-/archive/${process.env.RES_VERSION}/uma-resource-${process.env.RES_VERSION}.zip"
    - name: "[资源差分包] erauma-res-${process.env.RES_VERSION}-${process.env.OLD_VERSION}.zip (直接解压到 res 文件夹里，仅用于升级 ${process.env.OLD_VERSION} 版本的资源包)"
      url: "https://umaera.gitgud.site/data/uma-resource/index.html"`,
  'release.yml',
);
