# EraUma

EraUma将保持内源，ERE引擎将保持开源；请各位开发者以internal或private方式fork本项目，不要以public方式fork本项目，以避免不必要的麻烦！

[Release Notes](RELEASE.md)

[Changelogs](CHANGELOG.md)

## Notifications

**重要：EraUma自1.1版本开始无法在3.2.0以下的引擎上运行**

**重要：EraUma自1.1版本开始将采取分包发布，解压即玩包将只含游戏引擎、游戏的csv和ere文件夹（即最小更新包的内容），且引擎将默认不加载任何图像视频资源**
* 如果想显示图片和播放音频，请单独下载资源包（resources.zip），解压后放到与csv和ere文件夹同级的文件夹下，并在启动引擎加载游戏后在游戏设置中打开【启用资源】功能然后重载游戏

**自1.1版本开始，EraUma也将同时放出安卓引擎用游戏包，具体使用方式见安卓版引擎的使用说明**
* **可认为安卓引擎用和客户端引擎用的游戏包不通用**
* 安卓引擎启用图片和音频资源的方式和客户端引擎的方式相同

## Tutorial

> **任何情况下都只需要下载相应的游戏包和资源包，不需要下载源代码（Source code）！**<br>
> 各系统具体使用说明：
> * Win8及以上Windows系统：直接下载 [Win10绿色版](https://umaera.gitgud.site/erauma/index.html)，需要显示图片的额外下载 [资源包](https://gitgud.io/umaera/erauma/-/archive/master/erauma-master.zip?path=res)；
> * Win7：下载 [Win10绿色版](https://umaera.gitgud.site/erauma/index.html)，以及 [EraElectron相应的发布版](https://gitgud.io/umaera/era-electron/-/releases/permalink/latest)，然后把绿色版压缩包中的game文件夹放到Win7引擎压缩包解压出的文件夹中（和引擎的exe文件同级），需要显示图片的额外下载 [资源包](https://gitgud.io/umaera/erauma/-/archive/master/erauma-master.zip?path=res)；
> * Mac：下载 [Win10绿色版](https://umaera.gitgud.site/erauma/index.html)，取其中的 game 文件夹并改名，然后下载 [EraElectron相应的发布版](https://gitgud.io/umaera/era-electron/-/releases/permalink/latest)（注意芯片类型），安装 .dmg 后打开引擎，然后打开到Win10绿色版中的 game 文件夹，需要显示图片的额外下载 [资源包](https://gitgud.io/umaera/erauma/-/archive/master/erauma-master.zip?path=res)；
> * Linux：……用Linux的仁兄装个node.js自己构建吧，npm run electron:build，然后下载 [Win10绿色版](https://umaera.gitgud.site/erauma/index.html) 取用其中的 game 文件夹，打开引擎后打开 game 文件夹就行，需要显示图片的额外下载 [资源包](https://gitgud.io/umaera/erauma/-/archive/master/erauma-master.zip?path=res)；
> * 安卓：下载 [安卓游戏包](https://gitgud.io/umaera/erauma/-/releases/permalink/latest) 和 [安卓版引擎](https://gitgud.io/umaera/ere-app/-/releases/permalink/latest)，**使用方法看 [说明](https://gitgud.io/umaera/ere-app/-/releases/permalink/latest) 不用看下面的内容**，需要显示图片的额外下载 [资源包](https://gitgud.io/umaera/erauma/-/archive/master/erauma-master.zip?path=res)。

EraUma发布采取分包制，即游戏本体包+游戏资源包拆分打包方式，使用时需要解压到同一个文件夹，才能通过[ERE引擎](https://gitgud.io/umaera/era-electron/-/releases/permalink/latest)启动

从ERE引擎顶部下拉菜单中【打开游戏文件夹】启动时，请确认打开的文件夹至少有以下结构：

* **erauma文件夹/Win10绿色版解压出的game文件夹**
    * **csv文件夹**
        * Chara文件夹
        * _config.json
        * _fixed.json
        * 其他各种以csv为后缀名的文件
    * **ere文件夹**
        * data文件夹
        * event文件夹
        * page文件夹
        * system文件夹
        * utils文件夹
        * era-electron.js
        * main.js
    * （可选）**res文件夹**

如果文件夹不是以上结构，则无法顺利在ere引擎中打开运行。

## Versions

EraUma已于2024/10/24发布第一个正式发布版本v1.0（kuuga），感谢各位玩家一直以来的支持与鼓励。

EraUma的版本号是一串小数部分最多三位的正有理数，在前面的数位都不变的情况下，从千分位开始从小到大的数位的改动将可能包含以下内容的变化：

* 千分位（例：1.000→1.001）：又名**0.001版本**
  * _不需要重新开档_
  * _不存在游戏系统变化带来的存档转换_
  * _可使用引擎的最小更新功能_
  * bug修复
  * 包括比赛机制在内的数值平衡
  * 口上内容调整
  * 不涉及存档变化的机制改动
* 百分位（例：1.00/1.001→1.01）：又名**0.01版本**
  * _不需要重新开档_
  * _不存在游戏系统变化带来的存档转换_
  * _可使用引擎的最小更新功能_
  * 其间所有版本的改动内容
  * +可能的新角色
  * +可能的新头像和立绘（一般跟随新角色）
  * +可能的新调教立绘和背景
* 十分位（例：1.0/1.01/1.001→1.1）：又名**0.1版本**
  * _不需要重新开档_
  * _可能存在游戏系统变化带来的存档转换_
  * _可能无法通过最小更新功能更新（当适配引擎版本改动时）_
  * 其间所有版本的改动内容
  * +可能的新口上或口上加笔（招募/日常/育成/爱慕/地下室/调教）
  * +可能的新游戏机制
  * +可能的其他游戏机制改动
  * +可能的适配引擎版本重大更新（导致旧版本引擎无法运行游戏的更新）
* 整数位（例：1.0/1.1/1.01/1.001→2.0）：又名**主要发布版本**
  * _不需要重新开档_
  * _可能存在游戏系统变化带来的存档转换_
  * _无法通过最小更新功能更新_
  * _会拥有新的版本代号_
  * 其间所有版本的改动内容 
  * +大量新游戏内容
  * +可能的新游戏系统
  * +可能的游戏底层系统或基本运行逻辑改动
  * +可能的适配引擎版本重大更新（导致旧版本引擎无法运行游戏的更新）

> **For developers:**
> 
> 1.0开始的EraUma分支将按照以上版本号规则分为三类：
> * master分支：唯一的主分支/保护分支，负责发布。
> * dev分支：主开发分支，所有新增、改动和修复内容必须先合并到dev分支，再由dev分支合并到master分支进入发布。
> * 内容分支：由使用js的口上作者提交内容用，随用随开，不用即废。口上作者需要先将新口上或加笔提交到自己的分支（fork项目作者需要先提merge request将内容合并到EraUma仓库相应分支），然后通过dev分支在最终合并到master中。
>   * 例：特别周的spe分支，丸善斯基、醒目飞鹰的lines分支，目白麦昆的mcqueen分支，待兼福来的kitaru分支，调教地文的train分支。
>   * 内容分支需要定期merge master分支以兼容最新的游戏机制和系统。