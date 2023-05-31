var fenlan = document.getElementsByClassName("fenlan");
var box = document.getElementsByClassName("box");
var mengban = document.getElementsByClassName("mengban")[0];
var tab = document.getElementsByClassName("tab")[0];
for (var i = 0; i < fenlan.length; i++) {
    fenlan[i].setAttribute('index', i);
    fenlan[i].onclick = function () {
        var index = this.getAttribute('index');
        for (var j = 0; j < fenlan.length; j++) {
            fenlan[j].className = 'fenlan';
            fenlan[index].className = 'active fenlan';
            mengban.style.display = 'block';
            tab.className = 'tab fixed';
        }
        for (var k = 0; k < box.length; k++) {
            box[k].style.display = 'none';
            box[index].style.display = 'block';
        }
        mengban.onclick = function () {
            fenlan[index].className = 'fenlan';
            box[index].style.display = 'none';
            mengban.style.display = 'none';
            tab.className = 'tab';
        }

    }
}

