## Html

#### 用到了几个新的H5标签

页眉 header,区块 section,页脚 footer



#### lable标签

通过for属性绑定对应input标签的id值，这样点击lable的时候，被绑定的input会获得焦点



#### input标签

required=“required” 表明这个表单是必填项

autocomplete="off" 表示输入表单的时候**不需要**自动填充（根据之前输入过的内容）



## CSS

#### box-shadow

box-shadow: 水平距离 垂直距离 （模糊距离 阴影大小 阴影颜色  **inset**）

括号里的是可选属性，**inset** 表示是内侧阴影



#### opacity

元素透明度，值是0~1的小数



#### @media screen媒体查询

```css
@media screen and (min-width: 620px) {
    section {
        width: 600px;
        padding: 0 10px;
    }
}
/*表示的是当屏幕大于620px时，运行里边的代码*/
```



## js

#### 逻辑分析

- 用户输入内容按回车以后，把数据存储到本地。
  1. 判断键盘事件对象的keyCode属性是否为13
  2. 数据存到localStorage里，注意只能存字符串格式。所以要用Json.stringify()和Json.parse()转化格式
  3. 以数组里存对象的形式存储，对象里分别是内容和状态两个键值对

- 从localStorage里拿数据渲染到页面
  1. 拿到数据后，遍历数据，然后通过判断stutas的属性值创建元素（分别渲染ulol，完成了正在进行和已经完成的功能）
  2. 遍历渲染前得先清空ul ol

- 删除。给每一个a标签添加点击事件，在此之前需要给每一个a标签添加自定义属性
  1. 读取数据，根据所点击的a标签的自定义属性值来删除对应的内容，然后再保存和渲染页面

- 计数器
  1. 代码写在load渲染函数里，先声明一个变量赋值0，遍历的时候不断++就好了



#### 用到的jQuery的一些方法

1. 遍历数组    $.each(data,function(i,n){})     data是要便利的对象，i是索引号，n是每一个元素。参数都必填
2. 追加元素    $(*).prepend(加前边)      $().append(加后边)
3. 清空元素    $(*).empty()
4. 事件委托    $(父元素).on("click", "子元素" ，function(){})
5. 获得自定义属性值   $(*).attr('自定义的属性名')      /  获得固有属性  $().prop('固有属性名')
6. 获得兄弟元素    $(*).siblings('标签名')



#### 用到的JS的一些方法

splise   根据索引号删除数组里的某个元素

```js
var arr=['a','b','c']
arr.splise(1,1) //(从哪个位置开始删，删除几个元素)
//删除了b
```































