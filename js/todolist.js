$(function () {
    load()
    $('#title').on("keyup", function (e) {
        if (e.keyCode === 13) {
            var data = getData();
            data.push({todo:$(this).val(),status:false})
            setData(data)
            load()
        }
    })
    // 存储数据
    function setData(data) {
        localStorage.setItem('todo', JSON.stringify(data))
    }

    //读取数据
    function getData() {
        var data = localStorage.getItem('todo');
        if (data === null) {
            return []
        } else {
            return JSON.parse(data)
        }
    }

    //渲染加载数据
    function load(){
        var data = getData();
        $('ol,ul').empty()
        $.each(data,function(i,n){
            $('ol').prepend('<li><input type="checkbox"><a></a>'+n.todo+'</li>')        
        })
        
    }

})