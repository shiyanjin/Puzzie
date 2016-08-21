/**
 * 初始化各拼图的位置
 * Created by jinshiyan on 2016/7/16.
 */
function init(puzzies){
    //console.log(puzzies);
    for(var i=0;i<puzzies.length;i++) {
        var parent = document.getElementById("box");
        var div = document.createElement("div");
        div.setAttribute("class", "move");
        div.setAttribute("id", "move" + puzzies[i]);
        parent.appendChild(div);
        var parent2 = document.getElementById("move" + puzzies[i]);
        if (puzzies[i] != 0) {
            var p = document.createElement("p");
            p.setAttribute("class", "number");
            p.innerHTML = puzzies[i];
            parent2.appendChild(p);
        }

        if(Math.floor(i/3)==0){
            parent2.style.top = "0px";
        }
        else if(Math.floor(i/3)==1){
            parent2.style.top = "100px";
        }else{
            parent2.style.top = "200px";
        }
        if(i%3==0){
            parent2.style.left = "0px";
        }
        else if(i%3==1){
            parent2.style.left = "100px";
        }else{
            parent2.style.left = "200px";
        }
    }
}