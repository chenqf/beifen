
# 瀑布流与木桶布局

> 你知道的越多，你不知道的越多  
> `点赞`再看，手留余香，与有荣焉

## 前言

2019年终岁尾，最近对布局相关的内容比较有兴趣，在此整理一下和瀑布流相关的使用场景以及多种实现方案。

本文主要分为2部分：

1. 瀑布流布局
2. 木桶布局

## 瀑布流布局

`瀑布流`又称瀑布流式布局，是一种比较流行的页面布局方式，专业的英文名称为[`Masonry Layouts`]。与传统的分页显示不同，视觉表现为`参差不齐`的多栏布局，最早是由[Pinterest](https://www.pinterest.com/)首先运用。

无图无真相：

![](./0.jpg)

如图所示，网页上呈现`参差不齐`的多栏布局，图片`等宽不等高`，根据图片原比例缩放直至宽度达到固定的要求，每行排满后，后面的元素依次添加到其后，视觉上显得错落有致不拘一格。

### 瀑布流的优点

优点如下：

+ 节省空间，外表美观，更有艺术性。
+ 对于触屏设备非常友好，通过向上滑动浏览
+ 用户浏览时的观赏和思维不容易被打断，留存更容易。

> 从体验的心理讲，女性是一种逛街数小时都不需要停歇的生物，一眼望不到头的瀑布流契合了这种心理。瀑布流的图片就像商品，就像逛街、就像扫货。女性只要不断往下拉伸页面，就像置身在一条没有尽头的购物街，没有层高限制的商场中一样。传统布局中的下一页就是打断，好比男朋友轻声在耳边说了句：休息一下吧，我累了……结果不言而喻~

### 瀑布流的缺点

缺点如下：

+ 用户无法了解内容总长度，对内容没有宏观掌控。
+ 用户无法了解现在所处的具体位置，不知道离终点还有多远。
+ 回溯时不容易定位到之前看到的内容。
+ 容易造成页面加载的负荷。
+ 容易造成用户浏览的疲劳，没有短暂的休息时间。

### 瀑布流的适用场景

根据瀑布流的优缺点，我们不难得出在什么情况下选择瀑布流是合理的选择：

+ `内容以图片为主的时候`，瀑布流是更好的选择。图片占用空间比较大，并且大脑理解的速度相比理解文字要快，短时间内可以扫过的内容很多，所以如果用分页显示的话用户务必会频繁的翻页，影响沉浸式的体验，而瀑布流可以解决这个问题。

+ `信息与信息之间相对独立时`，瀑布流是更好的选择。如果信息关联性强，用户务必会进行大量的回溯操作去查看之前或者之后的信息，相反，如果信息相对独立的话，可以使用瀑布流，让用户同时接受来自不同地方的信息。

+ `信息与搜索匹配比较模糊时`，瀑布流是更好的选择。瀑布流给人的直观印象，就是同时显示的信息与用户搜索的匹配度大致一样，而分页显示的直观印象则是越靠上的信息被认为与用户的搜索越匹配。因此，当信息与搜索匹配度没有明显区分度时，可以采用瀑布流。

+ `用户目的性不强的时候`，瀑布流是更好的选择。如果用户有特定需要查找的信息，分页查找定位更方便，而当目的性较弱的时候，瀑布流可以增加用户停留的时间和意想不到的收获。

## multi-column 多栏布局实现瀑布流

通常`Multi-column`用于文本的分列：

```html
.container {
  column-count: 3;
}
```

![](./1.png)

`multi-column`布局中子元素的排列顺序是先`从上往下`再`从左至右`。

![](./2.png)

根据这个特性，我们就可以用来实现`瀑布流`。

`multi-column`实现`瀑布流`主要依赖以下几个属性：

+ `column-count`: 设置共有几列
+ `column-width`: 设置每列宽度，列数由`总宽度`与`每列宽度`计算得出
+ `column-gap`: 设置列与列之间的间距

`column-count`和`column-width`都可以用来定义分栏的数目，而且并没有明确的优先级之分。优先级的计算取决与具体的场景。

计算方式为：计算`column-count`和`column-width`转换后具体的列数，哪个小就用哪个。

一个图片&文字的例子：

```html
<div class="masonry">
    <div class="item">
        <img src="..."/>
        <span class="title">...</span>
    </div>
    <div class="item">
        <img src="..."/>
        <span class="title">...</span>
    </div>
    <!-- more items-->
</div>
```

```css
.masonry{
    column-count: 3;
    column-gap: 10px;
}
.masonry .item{
    border:1px solid #999;
    margin-bottom: 10px;
}
.masonry .item img{
    width: 100%;
}
```

[点击查看在线DEMO及完整代码](https://codesandbox.io/s/masonry-column-1-ddbhw)

效果如下：

![](./3.png)

我们可以看到，虽然实现了`瀑布流`的效果，但奇怪的是例子中前两列的最后一个元素的`文本内容`被`自动断开`，一部分在当前列尾，一部分在下一列的列头。

我的理解是`multi-column`布局会将其内的元素自动进行流动和平衡，尽可能保证每列的高度趋于相同，所以会将其内的文本阶段分布在两列内。

而这种展示方式无疑是我们不希望看到的，我们希望的是每个元素都是独立的，前后不断开，此时我们需要使用`break-inside`来实现。

break-inside: auto | avoid

+ auto: 元素可以中断
+ avoid: 元素不能中断

修改一下之前的例子：

```css
.masonry .item{
    break-inside: avoid;
}
```

[点击查看在线DEMO及完整代码](https://codesandbox.io/s/masonry-column-2-nnw63)

效果如下：

![](./4.png)

效果实现了，但由于`multi-column`布局中子元素的排列顺序是先`从上往下`再`从左至右`，所以这种方式仅适用于数据固定不变的情况，对于滚动加载更多等可动态添加数据的情况就并不适用了。

> 关于`column`更多的用法，参见[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/columns)   
> 关于`column`的兼容性，参见[caniuse](https://www.caniuse.com/#search=columns)

## grid 布局实现瀑布流

`Grid布局`是最强大的 CSS 布局方案。

它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。以前，只能通过复杂的 CSS 框架达到的效果，现在浏览器内置了。

![](./5.png)

上图这样的布局，就是 Grid 布局的拿手好戏，因此，我们就可以用`Grid`来实现`瀑布流`。

为实现`瀑布流`先介绍以下几个属性：

+ `display`:设置为`grid`指明当前容器为`Grid布局`
+ `grid-template-columns`: 定义每一列的列宽
+ `grid-template-rows`: 定义每一行的行高
+ `column-gap`：用于设置列间距

`grid-template-columns`和`grid-template-rows`，可以使用绝对单位，也可以使用百分比。并且为了表示比例关系，`Grid`布局提供了`fr`关键字，如果设置`1fr`和`2fr`，表示后者是前者的两倍。

根据以上几个属性，先写一个例子出来，看看效果：

```html
<div class="masonry">
    <div class="item"></div>
    <!-- more items-->
</div>
```

```css
.masonry{
    display: grid;
    grid-template-rows: 1fr 1fr 1fr; // 分为3行
    grid-template-columns: 1fr 1fr 1fr; // 分为3列
    column-gap:5px; // 列间距5px
}

```

[点击查看在线DEMO及完整代码](https://codesandbox.io/s/masonry-grid-1-idjpw)

效果如下：

![](./6.png)

我们看到高度不同的div块分布在每一个单元格内，但还没有实现`瀑布流`的效果。

为实现`瀑布流`再介绍几个属性：

+ `grid-row-start`：上边框所在的水平`网格线`
+ `grid-row-end`：下边框所在的水平`网格线`
+ `grid-column-start`：左边框所在的垂直`网格线`
+ `grid-column-end`：右边框所在的垂直`网格线`

那么什么是`网格线`呢?

划分网格的线，称为`网格线`。水平网格线划分出行，垂直网格线划分出列。

正常情况下，`n行`有`n + 1`根水平网格线，`m列`有`m + 1`根垂直网格线，比如三行就有四根水平网格线。

![](./7.png)

上图是一个 4 x 4 的网格，共有5根水平网格线和5根垂直网格线。

这4个属性可接收如下属性：

+ `auto`：表示自动放置
+ `自定义名称`：可以给予网格线一个名称，并在此处引用(本文并不涉及)
+ `网格线索引`: 代表第几条网格线(从1开始)
+ `span + 数字` : 表示上下边框或左右边框跨越多少网格

来看看这个`网格线`有什么用处

为方便查看，我们让例子中的每个div块高度修改为100%，并将样式代码修改为：

```css
.item{
    height:100%;
}
.item:first-child{
    grid-row-start:1;
    grid-row-end:span 2;
}
```

[点击查看在线DEMO及完整代码](https://codesandbox.io/s/masonry-grid-2-u5h2w)

![](./8.png)

我们对`Grid`布局中的第一项添加了`grid-row-start:1`和`grid-row-end:span 2`,令其上边框位于1水平网格线，下边框距上边框跨越2个水平网格线。从效果上看来，是不是有点像`瀑布流`了呢！

在之前的例子中，我们分别指定了`grid-template-columns`和`grid-template-rows`用于定义几行几列，由于行列数的确定，其内的每个单元格的宽高也被确定了，而实际的`瀑布流`布局中，宽度是固定的，而高度是动态的，并且具体的行数也是无法在开始时确定的，所以我们需要在`Grid`布局中不指定行高(grid-template-rows)。

介绍另一个属性：

+ `grid-auto-rows`：用来设置多余网格的行高

结合刚才说的Grid实现的瀑布流布局中，不设置行高(grid-template-rows),此时设置`grid-auto-rows`后，所有单元格的高度均为`grid-auto-rows`指定的值。

由于`grid-row-start`和`grid-row-end`可以指定单元格的上边距和下边距位置，也就是说可以将单元格的高度拉伸，而原有高度由`grid-auto-rows`决定，我们仅需将`grid-auto-rows`设置一个很小的值，比如`10px`，然后对其进行拉伸将其高度指定为真实高度，每一个单元格都做如下操作，那么瀑布流就实现了~

假设第一个单元格内容真实高度为100px，由于`grid-auto-rows:10px`,那么我们可以这样设置：

```css
.item1{
    grid-row-start:'auto';
    grid-row-end:span 10;
}
```

假设第二个单元格内容真实高度为150px，由于`grid-auto-rows:10px`,那么我们可以这样设置：

```css
.item2{
    grid-row-start:'auto';
    grid-row-end:span 15;
}
```

当然了，在实际情况中，`瀑布流`更多的是为图片的展示而服务的，并且由于图片是异步请求加载，只有在加载完成后才能获取图片的真实宽高，所以不得不使用JS来动态将单元格高度进行拉伸。

伪代码如下：

```javascript
    //image-dom
    let img = document.getElementsByTagName('img')[0];
    //image-dom 当前宽度
    let width = img.width;
    
    let image = new Image();
    image.src = 'xxxx.img';
    image.onload = function(){
        //图片原宽
        let w = image.width;
        //图片原高
        let h = image.height;
        //image-dom的真实高度(依据当前宽度及图片真实宽高)
        let height = Math.round(h * width / w)
        //设置当前跨越几个网格(每个网格10px)
        img.style.gridRowEnd = `span ${~~(height/10)}`
    }
```

[点击查看在线DEMO及完整代码](https://codesandbox.io/s/masonry-grid-3-8smrj)

效果如下：

![](./9.png)

> 关于`column`更多的用法，参见[MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/Grid)   
> 关于`column`的兼容性，参见[caniuse](https://www.caniuse.com/#search=grid)

## Flexbox 实现瀑布流

`Flexbox`布局到今天已经是使用非常广泛的，也算是很成熟的一个特性。在此就不再介绍`Flexbox`布局的相关内容，如果还有不是很了解的朋友，可参见阮一峰的[《Flex 布局教程：语法篇》](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

那接下来我们就看`Flexbox`怎么实现瀑布流布局。

此时，我们需要将html结构设计成如下结构：

```html
<div class="masonry">
    <!-- 第一列 -->
    <div class="column">
        <div class="item"></div>
        <!-- more items-->
    </div>
    <!-- 第二列 -->
    <div class="column">
        <div class="item"></div>
        <!-- more items-->
    </div>
    <!-- 第三列 -->
    <div class="column">
        <div class="item"></div>
        <!-- more items-->
    </div>
</div>
```

上面代码中`div.masonry`代表当前瀑布流容器，`div.column`代表每一列的容器，`div.item`代表每一列中的每一项。

我们需要将`div.masonry`和`div.column`都通过`display:flex`将其设置为`Flex`容器。

不同的是`瀑布流容器`主轴方向设置为水平方向`flex-direction:row`,`列容器`主轴方向设置为垂直方向`flex-direction:column`

```css
.masonry {
    display: flex; // 设置为Flex容器
    flex-direction: row; // 主轴方向设置为水平方向
}

.column {
    display: flex; // 设置为Flex容器
    flex-direction: row; // 主轴方向设置为垂直方向
}
```

[点击查看在线DEMO及完整代码](https://codesandbox.io/s/masonry-flex-1-bigeg)

效果如下：

![](./10.gif)

## 总结

做瀑布流需要考虑几方面大因素，图片质量，图片大小，加载速度，如果这些不能同时满足，会大大降低用户体验。个人觉得瀑布流对于触屏终端体验会更好一些。




## 参考

+ [瀑布流的设计体验真的很好吗？](https://www.zhihu.com/question/20005422/answers/updated)
+ [写给自己看的CSS columns分栏布局教程](https://www.zhangxinxu.com/wordpress/2019/01/css-css3-columns-layout/)
+ [Grid布局20行代码快速生成瀑布流](https://www.cnblogs.com/ZweiZhao/p/9783930.html)
+ [Grid 布局教程](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)


