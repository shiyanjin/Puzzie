/**
 * 重新开始游戏
 * Created by jinshiyan on 2016/7/16.
 */
function reStart() {
    /*清除游戏区的拼图*/
    for (var i = 0; i < 9; i++) {
        var moveID = document.getElementById("move" + i);
        moveID.remove();
    }
    start();//开始游戏
    if(totalTime){
        //清除定时器
        clearTimeout(totalTime);
        var timer = document.getElementById("time");
        timer.innerHTML = "00:00:00";
        //重新开启一个定时器
        time = 0;//初始化秒为0
        second = 0;
        minute = 0;
        hour = 0;
        timer();
    }
}
