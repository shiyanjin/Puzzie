/**
 * 游戏计时
 *
 *Created by jinshiyan on 2016/7/16.
 */
var time = 0;//初始化秒为0
var second = 0,minute = 0,hour = 0;
function timer(){
    time = time + 1;
    //console.log(time);
    if(time<60){
        second = time;
    }else{
        second = time%60;
        minute = Math.floor(time/60);
        if(minute>60){
            hour = Math.floor(minute/60);
            minute = minute%60;
        }
    }
    var hourFlag = isGreatThan10(hour);
    var minuteFlag = isGreatThan10(minute);
    var secondFlag = isGreatThan10(second);
    //console.log("second="+second +" minute="+minute+" hour="+hour);
    var timer = document.getElementById("time");
    //时间显示
    if(hourFlag && minuteFlag && secondFlag){
        timer.innerHTML = "0"+hour+":0"+minute+":0"+second;
    }else if(hourFlag && minuteFlag && !secondFlag){
        timer.innerHTML = "0"+hour+":0"+minute+":"+second;
    }else if(hourFlag && !minuteFlag && secondFlag){
        timer.innerHTML = "0"+hour+":"+minute+":0"+second;
    }else if(!hourFlag && minuteFlag && secondFlag){
        timer.innerHTML = hour+":0"+minute+":0"+second;
    }else if(hourFlag && !minuteFlag && !secondFlag){
        timer.innerHTML = "0"+hour+":"+minute+":"+second;
    }else if(!hourFlag && minuteFlag && !secondFlag){
        timer.innerHTML = hour+":0"+minute+":"+second;
    }else if(!hourFlag && !minuteFlag && secondFlag){
        timer.innerHTML = hour+":"+minute+":0"+second;
    }else{
        timer.innerHTML = hour + ":" + minute + ":" + second;
    }
    totalTime = setTimeout("timer()",1000);
}
//判断hour/minute/second是否大于10
function isGreatThan10(input){
     var flag;
     if(input<10){
         flag = true;
     }else{
        flag = false;
     }
     return flag;
 }