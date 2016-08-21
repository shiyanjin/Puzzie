/**
 * 拼图移动函数
 * closePosition：固定div相邻位置编号
 * puzzies：目前的拼图结果
 * obj：点击的拼图对象
 * Created by jinshiyan on 2016/7/16.
 */
function move(closePosition,puzzies,obj){
    var idSplit = obj.id.split("e")[1];//得到目前点击拼图的id序号0~8
    //console.log("idSplit:"+idSplit);
    for(var index=0;index<puzzies.length;index++){
        if(puzzies[index]==idSplit){
            var fixedIndex = index;//得到目前点击拼图在框中的位置
            break;
        }
    }
    for(var j=0;j<closePosition[fixedIndex].length;j++){
        //closePosition表示的第i个拼图，i从1开始，数组下标从0开始
        var indexClose = closePosition[fixedIndex][j]-1;
        //console.log("puzzies="+puzzies);
        //console.log("indexClose="+indexClose);
        if(puzzies[indexClose]==0) {
            //console.log(indexClose);
            /*获得没有拼图(空白)div的top和left值*/
            var empty = document.getElementById("move0");
            var _this =  document.getElementById(obj.id);
            var top = empty.offsetTop;
            var left = empty.offsetLeft;
            //console.log("top="+top+" left="+left);
            /*被点击拼图的top和left值*/
            var thisTop = _this.offsetTop;
            var thisLeft = _this.offsetLeft;
           // console.log("thisTop="+thisTop+" thisLeft="+thisLeft);
            /*交换两个div的top和left值*/
            empty.style.top = thisTop+"px";
            empty.style.left = thisLeft+"px";
            _this.style.top = top+"px";
            _this.style.left = left+"px";
            /*更新puzzies*/
            puzzies[fixedIndex] = 0;
            puzzies[indexClose] = idSplit;
            //console.log(empty.id+"  this:"+_this.id+" puzzies="+puzzies);
            //console.log(moveList);
            break;
        }else{
            continue;
        }
    }//for(j)
    //return puzzies;
}
