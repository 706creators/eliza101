# 扩展 eliza : 构建你的第一个 Plugin

## 1.1 简介 plugin 

plugin 扩展结构:

```ts
/**
 * Plugin for extending agent functionality
 */
export type Plugin = {
    /** Plugin name */
    name: string;

    /** Plugin description */
    description: string;

    /** Optional actions */
    actions?: Action[];

    /** Optional providers */
    providers?: Provider[];

    /** Optional evaluators */
    evaluators?: Evaluator[];

    /** Optional services */
    services?: Service[];

    /** Optional clients */
    clients?: Client[];
};
```

- actions 为插件的核心部分，定义了插件的执行逻辑
- services 类比操作系统中的服务程序，属于常驻模块
- providers 提供基础的GET 方法，用于对外输出数据
- evaluators 评估器，agent 根据评估器中定义的规则，触发agent 本身的行为，比如：存储更新

## 1.2 runtime 中调用

[https://github.com/elizaOS/eliza/blob/develop/packages/core/src/runtime.ts](https://github.com/elizaOS/eliza/blob/develop/packages/core/src/runtime.ts)

plugin 各个模块注册:

[https://github.com/elizaOS/eliza/blob/d5a56c9d647669653a20c2d184de20dc93846774/packages/core/src/runtime.ts#L379C3-L395C12](https://github.com/elizaOS/eliza/blob/d5a56c9d647669653a20c2d184de20dc93846774/packages/core/src/runtime.ts#L379C3-L395C12)

```ts
this.plugins.forEach((plugin) => {
    plugin.actions?.forEach((action) => {
        this.registerAction(action);
    });

    plugin.evaluators?.forEach((evaluator) => {
        this.registerEvaluator(evaluator);
    });

    plugin.services?.forEach((service) => {
        this.registerService(service);
    });

    plugin.providers?.forEach((provider) => {
        this.registerContextProvider(provider);
    });
});
```

service 模块初始化 (真实启动):

[https://github.com/elizaOS/eliza/blob/d5a56c9d647669653a20c2d184de20dc93846774/packages/core/src/runtime.ts#L429](https://github.com/elizaOS/eliza/blob/d5a56c9d647669653a20c2d184de20dc93846774/packages/core/src/runtime.ts#L429)

```ts
for (const plugin of this.plugins) {
    if (plugin.services)
        await Promise.all(
            plugin.services?.map((service) => service.initialize(this))
        );
}
```

---- draft ----

插件链接： [plugin-twitter](https://github.com/elizaOS/eliza/tree/main/packages/plugin-twitter)

## 1.2 插件的测试

### 配置插件

Character.json 中 plugins 添加 plugin-twitter 的配置

```json
...
"plugins": ["@elizaos/plugin-twitter"]
...
```

### 启动测试

```bash
pnpm run start --character ./plugin-twitter.json
pnpm run start:client 
```

## 1.3 代码解析

### 入口模块

每一个 `eliza` 的插件都是一个 `npm` 包，插件的入口模块是 `index.ts`，插件的入口模块需要导出 `Plugin` 对象, 其中定义插件的相关配置:

```ts
export const twitterPlugin: Plugin = {
    name: "twitter",
    description: "Twitter integration plugin for posting tweets",
    actions: [postAction],
    evaluators: [],
    providers: [],
};
```
