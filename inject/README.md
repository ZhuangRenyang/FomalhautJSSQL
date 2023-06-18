```yml
# Inject
# Insert the code to head (before '</head>' tag) and the bottom (before '</body>' tag)
# 插入代码到头部 </head> 之前 和 底部 </body> 之前
inject:
  head:
    - <script defer src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script> #moc3看板娘
    - <script async src="https://cdn.jsdelivr.net/gh/ZhuangRenyang/live2d-moc3@1.0.5/js/frame/live2dcubismcore.min.js"></script> #Live2DCubismCore moc3看板娘
    - <script defer src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.6.1/pixi.min.js"></script> #Include Pixi moc3看板娘
    - <script async src="https://cdn.jsdelivr.net/gh/ZhuangRenyang/live2d-moc3@1.0.5/js/live2dcubismframework.js"></script> #Include Cubism Components moc3看板娘
    - <script async src="https://cdn.jsdelivr.net/gh/ZhuangRenyang/live2d-moc3@1.0.5/js/live2dcubismpixi.js"></script> #moc3看板娘
    - <script async src="https://cdn.jsdelivr.net/gh/ZhuangRenyang/live2d-moc3@1.0.5/js/l2d.js"></script> #User's Script moc3看板娘
    - <script async src="https://cdn.jsdelivr.net/gh/ZhuangRenyang/live2d-moc3@1.0.5/js/main.js"></script> #moc3看板娘
    - <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/inject/css/iconcss/fonticon.css" media="defer" onload="this.media='all'"> # 我的图标css样式
    - <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/inject/css/elementui2.15.6/index.css"> # 引入组件库(f12)
    # 综合美化模块样式引入
    - <style id="themeColor"></style> # 主题色
    - <style id="rightSide"></style> # 侧边栏
    - <style id="transPercent"></style> # 透明度调节
    - <style id="blurNum"></style> # 模糊半径调节
    - <style id="settingStyle"></style> # 模糊效果开关
    - <span id="fps"></span> # 帧率检测
    - <style id="defineBg"></style> # 自定义背景选项
    - <style id="menu_shadow"></style> # 菜单发光样式

  bottom:
    - # aplayer音乐
    - <div class="aplayer no-destroy" data-id="8916378502" data-server="tencent" data-type="playlist" data-order="list" data-fixed="true" data-preload="auto" data-autoplay="false" data-mutex="true" ></div> #音乐平台: netease, tencent, kugou, xiami, baidu
    - <script src="https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/inject/js/echarts@4.9.0/echarts.min.js"></script>
    - <script src="https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/inject/js/china/china.js"></script> # 绘制地图需要另外添加 china.js
    - <script src="https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/inject/js/jquery3.6.3/jquery.min.js"></script> # jQuery
    - <script async src="https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/inject/js/vue2.6.14/vue.min.js"></script> # VUE
    - <script async src="https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/inject/js/elementui2.15.6/index.js"></script> # ElementUI
    - <script async src="https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/inject/js/clipboard2.0.11/clipboard.min.js"></script> # 分享按钮依赖
    - <script defer type="https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/inject/js/sweetalert28.19.0/sweetalert2.all.js"></script> # 节日弹窗依赖
    - <script async src="https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/inject/js/pacejs1.2.4/pace.min.js"></script> # 顶部进度条js
    - <script defer src="https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/inject/js/winbox/winbox.bundle.min.js"></script> # winbox
    - <script async src="https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/inject/js/iconjs/fonticon1.js"></script> # js图标引入1
    - <script async src="https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/inject/js/iconjs/fonticon2.js"></script> # js图标引入2
    - <script async src="https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/inject/js/iconjs/fonticon3.js"></script> # js图标引入3
    - <script async src="https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/inject/js/iconjs/goldingot.js"></script>  # 新年元宝
    - <canvas id="universe"></canvas> # 星空画布
    - <canvas id="snow"></canvas> # 雪花画布
    - <script defer src="/js/fomal.js"></script> # 主模块js
    - <script async src="https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/inject/js/iconjs/fonticon.js"></script> #我的js图标
```

## 1. 准备工作
首先在 Github 上创建一个公开仓库，放入相关文件，例如：
![image](https://github.com/ZhuangRenyang/FomalhautJSSQL/assets/116170751/b61299c2-6d09-43f6-bd03-4331645fc862)

点击仓库右侧的`Create a new release`按钮：
![image](https://github.com/ZhuangRenyang/FomalhautJSSQL/assets/116170751/7c56683a-c7ff-43f7-8649-c921ac2fee5c)

写一个版本号，点击`Publish release`提交。
![image](https://github.com/ZhuangRenyang/FomalhautJSSQL/assets/116170751/f9723acc-596c-47c2-8009-0c9e5c97c50b)

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
![image](https://github.com/ZhuangRenyang/FomalhautJSSQL/assets/116170751/294dc267-4269-4b94-9ca5-1e23d9eb82f5)
```
