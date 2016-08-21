/**
 * stop():暂停计时
 * goOn()：计时器接着前面的计时继续计时
 *
 * Created by jinshiyan on 2016/7/16.
 */
function stop(){
    if(totalTime) {
        clearTimeout(totalTime);
    }
}
function goOn(){
    timer();
}