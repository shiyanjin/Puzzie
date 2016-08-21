/**
 * 生成一组随机数，代表移动的9块拼图,包括一块空拼图
 * Created by jinshiyan on 2016/7/15.
 */
function getMovedPuzzies(){
    var sumPuzzies = 9;//拼图的总块数
    var puzzies = new Array();//定义生成拼图编号的数组
    while(puzzies.length<sumPuzzies){
        getRandom(sumPuzzies,puzzies);
    }
    return puzzies;
}
function getRandom(sumPuzzies,puzzies){
    var newPuzzie = Math.floor(Math.random()*sumPuzzies);
    //console.log(newPuzzie);
    for(var i=0;i<puzzies.length;i++){
        if(newPuzzie == puzzies[i]){
            return false;
        }
    }
    puzzies.push(newPuzzie);
    //console.log(puzzies+" "+puzzies.length);
}
