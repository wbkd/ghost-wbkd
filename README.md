# ghost-wbkd
A [ghost](https://ghost.org/)/[journey](https://github.com/kabukky/journey) theme.


![screenshot](https://raw.githubusercontent.com/wbkd/ghost-wbkd/master/screenshot.jpg)

**See it live on [our blog](http://blog.webkid.io)**

### Install

To install the theme, clone this repository into your theme folder of your ghost installation:

```
$ cd path-to-ghost/content/themes
$ git clone https://github.com/wbkd/ghost-wbkd.git
```

After that, restart the blog and select the webkid theme in your ghost admin panel.

### Customize

Due to restrictions of the Ghost templates, some values are hard-coded at the moment. To customize the theme, you have to edit the Handlebars templates in the theme folder. 

**Navigation**

For changing the navigation links and labels, you have to edit the ```partials/header.hbs``` file.

```
<!--Change this to customize the navigation-->
<div class="taglist-wrapper clearfix">
  <ul id="taglist" class="taglist">
      <li><a href="{{@blog.url}}">Home</a></li>
      <li><a href="/tag/javascript">javascript</a></li>
      <li><a href="/tag/nodejs">nodejs</a></li>
      <li><a href="/tag/data-visualization">data visualization</a></li>
      <li><a href="/tag/d3">d3</a></li>
      <li><a href="/tag/maps">maps</a></li>
  </ul>
</div>
```

**Sidebar Widgets**

There are three widgets in the sidebar: About, Social and Latest Articles. The latest articles are pulled automatically from the RSS-Feed of your page. If you want to change the url of your RSS-Feed, you have to edit the ```assets/js/webkid.js``` file.

The other two widgets are configured in the ```partials/sidebar.hbs``` template.

```
<!--Change this to your homepage-->
<p>See our latest projects at <a href="http://www.webkid.io">webkid.io</a></p>

<!--Change the links to your sites-->
<div class="sidebox box social clearfix">
  <ul>
    <a href="/rss" target="_blank" class="social-item rss"><li><i class="fa fa-rss"></i></li></a>
    <a href="http://twitter.com/webk1d" target="_blank" class="social-item tw"><li><i class="fa fa-twitter"></i></li></a>
    
    <a href="http://github.com/wbkd" target="_blank" class="social-item github"><li><i class="fa fa-github"></i></li></a>
    
    <a href="http://webkid.io" target="_blank" class="social-item home"><li><i class="fa fa-home"></i></li></a>
  </ul>
</div>
```

### License

The MIT License (MIT)

Copyright (c) 2015 webkid.io

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


### Authors

[Moritz Klack](http://twitter.com/moklick) and [Christopher Möller](http://twitter.com/chrtze) of [webkid.io](http://www.webkid.io).