/**
 * 开始游戏
 * Created by jinshiyan on 2016/7/15.
 */
window.onload = function(){
    start();
}
function start(){
    var puzziesNumber = 8;//可活动的拼图数量
    var flag = false;//完成拼图的标志，默认已经完成
    var puzzies = getMovedPuzzies();//获取拼图顺序
    init(puzzies);//初始化各拼图的位置
    var closePosition = [
        [2,4],
        [1,3,5],
        [2,6],
        [1,5,7],
        [2,4,6,8],
        [3,5,9],
        [4,8],
        [5,7,9],
        [6,8]
    ];//每个位置的相邻位置编号
    getPuzzie(closePosition,puzzies,flag);
}
