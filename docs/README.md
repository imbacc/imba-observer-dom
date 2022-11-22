# docsify 文档

https://docsify.js.org/#/zh-cn/cover

# 用于发布 npm 包 ts 打包

#### 首先先执行 -> 成功登录后

`pnpm run adduser`

#### 编写代码并测试

`pnpm run test`

#### 编译打包

`pnpm run build`

#### 上传 npm 包 当前是打 tag 并上传到 npm

`pnpm run pub`

#### 上传到 npm 包需要手动修改 package.json version 版本号

`pnpm run pub2`

#### 删除已发布的包

`pnpm run rm:package`

# 初始化

```
pnpm run init
```

### 编译并发布

```
pnpm run build        # 编译
pnpm run pub          # 打标签并且 发布到npmjs.org
pnpm run pub2         # 不打标签 直接发布到npmjs.org
```

### mocha 测试

```
pnpm run test # mocha
```

### 文档

```
pnpm run docs # docsify
```

### 安装

```
# pnpm
pnpm i xxx
```

### 使用

```
例:
import { aaa } from 'xxx'
或者
import * as aaa from 'xxx'
aaa('key')
```
