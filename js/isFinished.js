/**
 * 判断是否已经完成拼图，若完成flag=true，否则flag=false
 *
 * flag:判断标志
 * puzzies：目前的拼图结果
 * Created by jinshiyan on 2016/7/15.
 */
function isFinised(flag,puzzies){
    /*for(var i=1;i<puzziesNumber;i++){
        if(puzzies[i]==i){
            continue;
        }else{
            flag = false;
            break;
        }
    }*/
    var correct = [1,2,3,4,5,6,7,8,0];
    if(puzzies.toString()==correct.toString()){
        flag = true;
    }
    return flag;
}