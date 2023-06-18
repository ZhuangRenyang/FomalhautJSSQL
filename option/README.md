```yml
# CDN
# Don't modify the following settings unless you know how they work
# 非必要请不要修改
CDN:
  # The CDN provider of internal scripts (主題內部 js 的 cdn 配置)
  # option: local/jsdelivr/unpkg/cdnjs/custom
  # Dev version can only choose. ( dev版的主题只能设置为 local )
  internal_provider: local

  # The CDN provider of third party scripts (第三方 js 的 cdn 配置)
  # option: local/jsdelivr/unpkg/cdnjs/custom
  # when set it to local, you need to install hexo-butterfly-extjs
  third_party_provider: cdnjs

  # Add version number to CDN, true or false
  version: false

  # Custom format
  # For example: https://cdn.staticfile.org/${cdnjs_name}/${version}/${min_cdnjs_file}
  custom_format:

  option:
    # main_css:
    # main:
    # utils:
    # translate: https://cdn1.tianli0.top/npm/js-heo@1.0.6/translate/tw_cn.js
    # local_search:
    # algolia_js:
    algolia_search_v4: https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/option/algolia_search_v4/algoliasearch-lite.umd.min.js
    instantsearch_v4: https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/option/instantsearch_v4/instantsearch.production.min.js
    pjax: https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/option/pjax/pjax.min.js
    # gitalk: https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/gitalk/1.7.2/gitalk.min.js
    # gitalk_css: https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/gitalk/1.7.2/gitalk.min.css
    # blueimp_md5:
    # valine: https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/valine/1.4.16/Valine.min.js
    # disqusjs: https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/disqusjs/1.3.0/disqus.js
    # disqusjs_css: https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/disqusjs/1.3.0/disqusjs.css
    twikoo:  https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/option/twikoo/twikoo.all.min.js
    # waline_js: https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/waline/1.5.4/Waline.min.js
    # waline_css:
    # sharejs: https://lib.baomitu.com/social-share.js/1.0.16/js/social-share.min.js
    # sharejs_css: https://lib.baomitu.com/social-share.js/1.0.16/css/share.min.css
    # mathjax: https://cdn.staticfile.org/mathjax/3.2.2/es5/mml-chtml.min.js
    # katex: https://lib.baomitu.com/KaTeX/latest/katex.min.css
    # katex_copytex:
    # mermaid:
    # canvas_ribbon:
    # canvas_fluttering_ribbon:
    # canvas_nest:
    lazyload: https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/option/lazyload/lazyload.iife.min.js
    instantpage: https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/option/instantpage/instantpage.min.js
    typed: https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/option/typed/typed.min.js
    # pangu:
    fancybox_css_v4: https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/option/fancybox_css_v4/fancybox.min.css
    fancybox_v4: https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/option/fancybox_v4/fancybox.umd.min.js
    # medium_zoom: https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/medium-zoom/1.0.6/medium-zoom.min.js
    # snackbar_css: https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/node-snackbar/0.1.16/snackbar.min.css
    # snackbar: https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/node-snackbar/0.1.16/snackbar.min.js
    # activate_power_mode:
    # fireworks:
    # click_heart:
    # ClickShowText:
    fontawesomeV6: https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/option/fontawesomeV6/all.min.css
    # flickr_justified_gallery_js: https://cdn.staticfile.org/flickr-justified-gallery/2.1.2/fjGallery.min.js
    # flickr_justified_gallery_css: https://cdn.staticfile.org/flickr-justified-gallery/2.1.2/fjGallery.min.css
    aplayer_css: https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/option/aplayer/assets/APlayer.min.css
    aplayer_js: https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/option/aplayer/assets/APlayer.min.js
    meting_js: https://cdn.jsdelivr.net/gh/ZhuangRenyang/FomalhautJSSQL@1.0.7/option/meting/meting.min.js
    # prismjs_js: https://cdn1.tianli0.top/npm/prismjs@1.1.0/prism.js
    # prismjs_lineNumber_js: https://cdn1.tianli0.top/npm/prismjs/plugins/line-numbers/prism-line-numbers.min.js
    # prismjs_autoloader: https://cdn1.tianli0.top/npm/prismjs/plugins/autoloader/prism-autoloader.min.js
    coin_js: /js/coin.js
    coin_css: /css/coin.css
```
