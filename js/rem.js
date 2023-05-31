function setRem() {
    var wwidth = 375;
    var clientw = document.documentElement.clientWidth || document.body.clientWidth
    var html = document.querySelector('html');
    html.style.fontSize = (clientw / wwidth) * 10 + 'px'
}
window.onresize = setRem
window.onload = setRem




var pitch = document.getElementsByClassName('pitch');
var login1 = document.getElementsByClassName('login');
// 找到所有隐藏栏

for (var i = 0; i < pitch.length; i++) {
    pitch[i].setAttribute('index', i);

    pitch[i].onclick = function () {
        //拿到被点击的index下标
        var index = this.getAttribute('index');
        for (var j = 0; j < pitch.length; j++) {
            if (index > 0) {
                pitch[j].className = 'pitch';
                pitch[index].className = 'pitch on';
            } else {
                pitch[j].className = 'pitch ';
                pitch[index].className = 'pitch on';
            }
        }
        // 再次使用排他法 给对应的item选项设置隐藏和显示
        for (var i = 0; i < login1.length; i++) {
            login1[i].style.display = 'none';
            login1[index].style.display = 'block';
        }
    }
}

// var close = document.getElementById('close')
// var down = document.getElementsByClassName('closedown')[0]
// close.onclick=function(){
//     down.style.display = 'none';
// }




