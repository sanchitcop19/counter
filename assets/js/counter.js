document.onkeydown = function(evt) {
    evt = evt || window.event;
    var count = document.getElementsByClassName('display-1 text-center')[0];
    if (evt.keyCode == '38'){
        count.innerHTML = String(parseInt(count.innerHTML) + 1);
    }
    else if (evt.keyCode == '40'){
        count.innerHTML = String(parseInt(count.innerHTML) - 1);
    }
    document.cookie = "count=" + count.innerHTML;
}
