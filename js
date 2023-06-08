# Fomalhaut主题组件库

## 1. 准备工作
首先在 Github 上创建一个公开仓库，放入相关文件，例如：

点击仓库右侧的`Create a new release`按钮：

写一个版本号，点击`Publish release`提交。

## 2. 访问方式
### 1. 根据版本号访问
格式：
```https://cdn.jsdelivr.net/gh/github用户名/仓库名@版本号/文件目录/文件名```

例如：
```https://cdn.jsdelivr.net/gh/lzxjack/cdn@1.0.0/json/emoji.json```

### 2. 省略版本号（不推荐）
省略版本号，直接访问最新的资源，不推荐在生产环境中使用。

格式：
```https://cdn.jsdelivr.net/gh/github用户名/仓库名/文件目录/文件名```

例如：
```https://cdn.jsdelivr.net/gh/lzxjack/cdn/json/emoji.json```

### 3. 添加.min后缀
将`.min`添加到任何JS / CSS文件中以获得压缩的版本。

例如：
```https://cdn.jsdelivr.net/gh/lzxjack/cdn@1.0.0/js/wow.min.js```

### 4. 查看目录列表
在目录的最后添加`/`，可以查看当前目录的文件列表。

格式：
```https://cdn.jsdelivr.net/gh/github用户名/仓库名@版本号/[文件目录/]```

文件目录/可以省略，直接访问整个仓库的目录列表。

例如：
```https://cdn.jsdelivr.net/gh/lzxjack/cdn@1.0.0/```

