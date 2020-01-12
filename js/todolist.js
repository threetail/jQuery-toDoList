$(function () {
    load()//刚开始先渲染一遍
    //用户添加数据
    $('#title').on("keyup", function (e) {
        if (e.keyCode === 13) {
            //如果判断输入框为空，那就不添加了
            if ($(this).val() === '') {
                return
            } else {
                var data = getData();
                data.push({ todo: $(this).val(), status: false })//存储的数据格式是[{},{}]
                setData(data)
                load()
                $(this).val('');//回车后清空内容
            }
        }
    })
    //用户删除数据
    $('ol,ul').on('click', 'a', function () {
        var index = $(this).attr('data-id');//获取a的自定义属性值
        var data = getData();
        data.splice(index, 1);//根据索引号删除对应的元素
        setData(data);
        load();
    })
    //正在进行已经完成操作
    $('ol,ul').on('click', 'input', function () {
        var data = getData();
        var index = $(this).siblings('a').attr('data-id');
        data[index].status = $(this).prop('checked');
        setData(data)
        load()
    })

    // 存储数据函数
    function setData(data) {
        localStorage.setItem('todo', JSON.stringify(data))
    }

    //读取数据函数
    function getData() {
        var data = localStorage.getItem('todo');
        if (data === null) {
            return []
        } else {
            return JSON.parse(data)
        }
    }

    //渲染加载数据函数
    function load() {
        var data = getData();
        $('ol,ul').empty()
        //计数器
        var todocount = 0;
        var donecount = 0;
        $.each(data, function (i, n) {
            if (!n.status) {
                $('ol').prepend('<li><input type="checkbox"><a data-id=' + i + '></a>' + n.todo + '</li>')
                todocount++
            } else {
                $('ul').prepend('<li><input type="checkbox" checked="checked"><a data-id=' + i + '></a>' + n.todo + '</li>')
                donecount++
            }
        })
        $('#todocount').html(todocount);
        $('#donecount').html(donecount);
    }
})