## Html

#### 用到了几个新的H5标签

页眉 <header>,区块 <section>,页脚 <footer>



#### lable标签

通过for属性绑定对应input标签的id值，这样点击lable的时候，被绑定的input会获得焦点



#### input标签

required=“required” 表明这个表单是必填项

autocomplete="off" 表示输入表单的时候**不需要**自动填充（根据之前输入过的内容）



## CSS

#### box-shadow

box-shadow: 水平距离 垂直距离 （模糊距离 阴影大小 阴影颜色  **inset**）

括号里的是可选属性，**inset** 表示是内侧阴影



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

