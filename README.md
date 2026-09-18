# EraUma

EraUma 和 ERE 引擎（EraElectron、ere.app）将保持开源，请各位开发者以 internal（所有 gitgud.io 登陆用户可见） 或 private（除项目成员外不可见） 方式 fork 本项目，不要以 public 方式 fork 本项目，以避免不必要的麻烦！

[Release Notes](RELEASE.md)

Change Logs: [v3 ryuki](CHANGELOG-v3-ryuki.md) [v2 (agito)](CHANGELOG-v2-agito) [v1 (kuuga)](CHANGELOG-v1-kuuga) [test](CHANGELOG-test)

[How to make language library](i18n-template/README.md) (for the i18n framework)

## LICENSE
本项目采用GNU通用公共许可证 2.0 版本（GPLv2）许可。
完整的许可证文本请参见 [LICENSE](LICENSE) 文件。

### 您可以：
- 自由使用此软件
- 修改源代码
- 重新分发副本
- 基于此软件创建衍生作品

### 但必须遵守：
- 保留原作者版权声明
- 提供完整的源代码
- 使用相同的GPLv2许可证
- 不添加额外限制

更多详情请查阅 LICENSE 文件。

## Notifications

**重要：自 1.31 版本开始，资源包更新不再提高最小更新功能最低支持版本，请自行下载资源包以更新资源**

**重要：EraUma 自 1.1 版本开始将采取分包发布，解压即玩包将只含游戏引擎、游戏的 csv 和 ere 文件夹（即最小更新包的内容），且引擎将默认不加载任何图像视频资源**
* 如果想显示图片和播放音频，请单独下载资源包（resources.zip），解压后放到与 csv 和 ere 文件夹同级的文件夹下，并在启动引擎加载游戏后在游戏设置中打开【启用资源】功能然后重载游戏

**自 1.1 版本开始，EraUma 也将同时放出安卓引擎用游戏包，具体使用方式见安卓版引擎的使用说明**
* **可认为安卓引擎用和客户端引擎用的游戏包不通用**
* 安卓引擎启用图片和音频资源的方式和客户端引擎的方式相同

## Tutorial

> **任何情况下都只需要下载相应的游戏包和资源包，不需要下载源代码（Source code）！**<br>
> 各系统具体使用说明：
> * Win8及以上Windows系统：直接下载 [PC绿色版](https://umaera.gitgud.site/erauma/index.html)，需要显示图片的额外下载 [资源包](https://umaera.gitgud.site/data/uma-resource/full.html)；
> * Win7：下载 [PC游戏包](https://gitgud.io/umaera/erauma/-/releases/permalink/latest) 和 [EraElectron相应的发布版](https://gitgud.io/umaera/engine/era-electron/-/releases/permalink/latest)，打开引擎后打开PC游戏包解压出的文件夹（或者将PC游戏包解压出的文件夹改名为game然后放到引擎解压出的文件夹下，和.exe文件同级），需要显示图片的额外下载 [资源包](https://umaera.gitgud.site/data/uma-resource/full.html)；
> * Mac：下载 [PC游戏包](https://gitgud.io/umaera/erauma/-/releases/permalink/latest) 和 [EraElectron相应的发布版](https://gitgud.io/umaera/engine/era-electron/-/releases/permalink/latest)（注意芯片类型），安装 .dmg 后打开引擎，然后打开PC游戏包解压出的文件夹，需要显示图片的额外下载 [资源包](https://umaera.gitgud.site/data/uma-resource/full.html)；
> * Linux：……用 Linux 的仁兄装个 node.js 自己构建吧，npm run electron:build，然后下载 [PC游戏包](https://gitgud.io/umaera/erauma/-/releases/permalink/latest) ，打开引擎后打开PC游戏包解压出的文件夹，需要显示图片的额外下载 [资源包](https://umaera.gitgud.site/data/uma-resource/full.html)；
> * 安卓：下载 [安卓游戏包](https://gitgud.io/umaera/erauma/-/releases/permalink/latest) 和 [安卓版引擎](https://gitgud.io/umaera/engine/ere-app/-/releases/permalink/latest)，需要显示图片的额外下载 [资源包](https://umaera.gitgud.site/data/uma-resource/full.html)。

### PC

EraUma 发布采取分包制，即游戏本体包+游戏资源包拆分打包方式，使用时需要解压到同一个文件夹，才能通过 [ERE引擎](https://gitgud.io/umaera/engine/era-electron/-/releases/permalink/latest) 启动。

从 PC 版引擎 EraElectron 顶部下拉菜单中【打开游戏文件夹】启动时，请确认打开的文件夹至少有以下结构：

    erauma 文件夹 / PC 绿色版解压出的 game 文件夹
    ├── csv 文件夹
    │   ├── Chara 文件夹
    │   ├── _config.json
    │   ├── _fixed.json
    │   └── 其他各种以 csv 为后缀名的文件
    ├── ere 文件夹
    │   ├── data 文件夹
    │   ├── event 文件夹
    │   ├── page 文件夹
    │   ├── system 文件夹
    │   ├── utils 文件夹
    │   ├── era-electron.js
    │   └── main.js
    └── res 文件夹（可选）
        ├── audio 文件夹
        ├── ero 文件夹
        ├── filters 文件夹
        ├── others 文件夹
        ├── race 文件夹
        ├── sportswear 文件夹
        ├── uniform-summer 文件夹
        ├── uniform-winter 文件夹
        ├── game.csv
        ├── logo.png
        ├── title.png
        └── 资源包注意事项.txt

如果文件夹不是以上结构，则无法顺利在 PC 版引擎 EraElectron 中打开运行。

### Android

在 ere.app 中选取游戏文件夹时，请确认使用的文件夹至少有以下结构：

    erauma 文件夹
    ├── era.bundle.js
    ├── main.bundle.js
    ├── static.json
    └── res 文件夹（可选）
        ├── audio 文件夹
        ├── ero 文件夹
        ├── filters 文件夹
        ├── others 文件夹
        ├── race 文件夹
        ├── sportswear 文件夹
        ├── uniform-summer 文件夹
        ├── uniform-winter 文件夹
        ├── logo.png
        ├── title.png
        └── 资源包注意事项.txt

并且该文件夹必须位于类似结构的位置：

    个人文件夹
    ├── Documents / 文档
    ├── Downloads / 下载
    ├── 任意文件夹或任意层子文件夹
    │   ├── erauma 文件夹
    │   └── 其他文件或文件夹
    └── 其他文件或文件夹

如果文件夹不符合以上结构，则无法顺利在安卓版引擎 ere.app 中打开运行。

## Versions

EraUma 已于 2024/10/24 发布第一个正式发布版本 v1.0 (kuuga)，感谢各位玩家一直以来的支持与鼓励。

EraUma 的版本号是一串小数部分最多三位的正有理数，在前面的数位都不变的情况下，从千分位开始从小到大的数位的改动将可能包含以下内容的变化：

* 千分位（例：1.000 → 1.001）：又名 **0.001版本、修复版本**
  * _不需要重新开档_
  * _不存在游戏系统变化带来的存档转换_
  * _可使用引擎的最小更新功能_
  * bug 修复
  * 包括比赛机制在内的数值平衡
  * 口上内容调整
  * 不涉及存档变化的机制改动
* 百分位（例：1.00/1.001 → 1.01）：又名 **0.01版本、资源版本**
  * _不需要重新开档_
  * _不存在游戏系统变化带来的存档转换_
  * _可使用引擎的最小更新功能_
  * 其间所有修复版本的改动内容
  * +可能的新角色
  * +可能的新头像和立绘（一般跟随新角色）
  * +可能的新调教立绘和背景
* 十分位（例：1.0/1.01/1.001 → 1.1）：又名 **0.1版本、内容版本**
  * _不需要重新开档_
  * _可能存在游戏系统变化带来的存档转换_
  * _可能无法通过最小更新功能更新（当适配引擎版本改动时）_
  * 其间所有修复、资源版本的改动内容
  * +可能的新口上或口上加笔（招募/日常/育成/爱慕/地下室/调教）
  * +可能的新游戏机制
  * +可能的其他游戏机制改动
  * +可能的适配引擎版本重大更新（导致旧版本引擎无法运行游戏的更新）
* 整数位（例：1.0/1.1/1.01/1.001 → 2.0）：又名 **主要发布版本**
  * _不需要重新开档_
  * _可能存在游戏系统变化带来的存档转换_
  * _无法通过最小更新功能更新_
  * _会拥有新的版本代号_
  * 其间所有修复、资源、内容版本的改动内容 
  * +大量新游戏内容
  * +可能的新游戏系统
  * +可能的游戏底层系统或基本运行逻辑改动
  * +可能的适配引擎版本重大更新（导致旧版本引擎无法运行游戏的更新）