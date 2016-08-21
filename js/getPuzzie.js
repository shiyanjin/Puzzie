/**
 * 实现拼图过程函数
 *
 * closePosition: 固定div相邻位置编号
 * puzzies：目前的拼图结果
 *
 * Created by jinshiyan on 2016/7/15.
 */
function getPuzzie(closePosition,puzzies,flag){
    //console.log(puzzies);
    var count = 0;//移动次数统计
    var moveClass = document.getElementsByClassName("move");
    for(var i=0;i<moveClass.length;i++) {
        moveClass[i].onclick = function(){
            /*console.log("moveClass:");
            for(var j=0;j<moveList.length;j++){
                console.log(moveClass[j]);
            }*/
            if(!flag){
                /*有时生成的初始拼图无法完成，所以每移动200步，就重新打乱一下顺序*/
                if(count<200){
                    move(closePosition,puzzies,this);
                    flag = isFinised(flag,puzzies);
                    if(flag){
                        var times = document.getElementById("time").innerHTML;//游戏完成时间
                        var str = (times=="00:00:00")?"You win!再玩一次？":
                            "You win!游戏共用时："+times+",再玩一次？";//确认对话框中的内容
                        if(confirm(str)){
                            reStart();
                        }else{
                            window.close();//关闭窗口
                        }
                    }
                    count++;
                }else{
                    /*重新打乱顺序*/
                    /*清除游戏区的拼图*/
                    for (var i = 0; i < 9; i++) {
                        var moveID = document.getElementById("move" + i);
                        moveID.remove();
                    }
                    start();//开始游戏
                    count = 0;
                }
            }else{
                alert("You win!");
            }

        }//onclick
    }//for(i)
}
