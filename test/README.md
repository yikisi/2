# erauma 单元测试

本目录是 erauma 主仓库的单元测试，独立于 `engine`，也**不放在 `ere/`** 内（`ere/` 会用于分发，不携带测试脚本）。

## 运行

```sh
pnpm test          # 一次性运行
pnpm check:ere     # 全工程静态检查（ere-check）
```

配置见仓库根目录 `vitest.config.mjs`，测试目录通过 `test/**/*.{test,spec}.js` 收集。
提交时由 husky `pre-commit` 自动执行单元测试。

## 目录结构

```
test/
├── helpers/era.js          # 取回与 ere/** 同一个 Node 实例的 era mock
├── stubs/                  # 被重定向的模块替身
│   ├── era-electron.js         # 有状态内存版引擎 SDK
│   ├── i18n-selector.js        # i18n 选择器替身
│   ├── i18n-extended-def.js    # i18n 衍生（递归魔法 Proxy）
│   └── chara-talk-factory.js   # 角色发言工厂替身
├── setup.js                # 解析层重定向（见下）
├── units/                  # 纯工具函数
├── data/                   # 纯数据 / 数据机种（含 data/ero 子目录）
├── i18n/                   # i18n 工具
└── system/                 # 系统逻辑（含 chara / ero / race 子目录）
```

## 测试基础设施

`ere/**` 全是 CommonJS，且被 vitest 外部化，因此其内部 `require('#/...')` 走的是 **Node 真实 `require`**。
`vi.mock` / `resolve.alias` 拦不住这些 require，所以 `test/setup.js` 通过重写 `Module._resolveFilename` 做重定向：

| 请求 | 重定向到 | 原因 |
| --- | --- | --- |
| `#/era-electron` | `stubs/era-electron.js` | 注入有状态的变量存取（`get/set/add`） |
| `#/i18n/selector` | `stubs/i18n-selector.js` | 真实模块会加载整条 `.kojo` 口上图，Node 无法解析 |
| `#/i18n/extended-def` | `stubs/i18n-extended-def.js` | 同上 |
| `#/utils/chara-talk-factory` | `stubs/chara-talk-factory.js` | 同上 |

其余 `#/...` 映射到 `ere/...`。

### era mock

- 变量名形如 `namespace:id:field`（如 `base:1:5`、`cflag:2:干劲`、`flag:0`），保存在内存 `Map` 中，未设置读作 `0`。
- 测试用法：`era.reset()` 清空、`era.seed({ ... })` 批量写入；`getAddedCharacters()` 读 `__added`，`getCharactersInTrain()` 读 `__members`。
- **必须**用 `test/helpers/era.js`（内部 `createRequire`）取 mock，才能和 `ere/**` 走同一个 Node 模块实例；若用 ESM `import` 会拿到另一个实例。
- 同理：凡是需要给**模块私有缓冲**（如 `sys-calc-juel` / `sys-calc-palam` 的 `tmp`）播种的测试，也要用 `createRequire` 取回同一实例。

## 覆盖范围

- **纯函数**：`ere/utils/*`（`value-utils`、`list-utils`、`gradient-color` 等）、`data/calc-attr-score`、运动/身体常量。
- **纯数据 / 算法**：`race/model/*`（`race-info`、`uma-skill`、`uma-gene`、`skill-enum`、`pseudo-uma`）、`race-const/params/location`、`train-const`、`ero/*-const`、`motion-*`、`attr-score`、`info-generator`（纯函数部分）。
- **系统逻辑（era-mock）**：角色数值（`sys-calc-chara-param`、`sys-calc-chara-others`、`sys-calc-characteristic`、`sys-count-juels`、`sys-check-*`、`sys-change-*`）、情色（`sys-calc-ero-status/stain/juel/palam/ero-exp/ero-item/ero-part`、`sys-calc-distance`、`sys-get-juel-price`、`sys-auto-update`、`sys-check-ero-action`、`update-marks`、`get-sm-buff`、`change-ero-cost` 等）、赛事与全局（`sys-check-titles-after-race`、`sys-calc-achievement`、`sys-calc-image`、`sys-calc-flag`、`sys-filter-chara`）。

## 未覆盖（偏集成，暂不做）

周结算/读档/初始化、比赛模拟与选手解析、准备流程与动作分发、事件队列/工厂、`action-checker` 注册等，例如：
`sys-next-week`、`sys-load-game`、`sys-init-chara`、`sys-train-uma`、`sys-handle-palace`、
`race/sys-simulate-race`、`race/sys-prepare-race`、`race/sub-simulate-*`、`race/sys-parse-race-uma`、
`ero/sys-calc-orgasm`、`ero/sub-calc-ero-orgasm/update-orgasms`、`ero/sys-prepare-ero`、`ero/sys-handle-ero-act`、
`ero/sub/*`、`next-week/*`、`basement/sys-handle-*`、`event/**`、`page/**`。

这些更适合用集成/E2E 方式验证，而非单元测试。

## 约定

- 只测可确定、可复现的逻辑；涉及 `Math.random` 的一律 `vi.spyOn(Math, 'random')`。
- 每个用例 `beforeEach(() => era.reset())`，注意 `seed` 是**合并**语义（旧值会残留，需显式清零）。
- 同名语义在不同模块可能用「命名键」或「数字索引」，如 `cflag:cid:育成回合计时` vs `cflag:cid:48`、`status:cid:10` vs `status:cid:沉睡`——按各模块实际使用的键播种。
