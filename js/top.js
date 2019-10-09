(function(){
    a1=".xuexizx";b1="a";c1=".xuexiz";
    a2=".xuexigj";b2="b";c2=".xuexi>ul";
    a3=".fuwuzx";b3="c";c3=".fuwu>ul";
    a4=".mycourse";b4="d";c4=".course>ul";
    a5=".mymessage";b5="e";c5=".message>ul";

    function myFunction(aa,bb,cc){
        var f1 = document.querySelector(aa);
        var x1 = document.getElementById(bb);
        var ul1 = document.querySelector(cc);
    f1.onmouseover = function () {
        this.style.backgroundColor = "#fff";
        ul1.style.display = "block";
        x1.style.transform = "rotate(180deg)";
    }
    ul1.onmouseover = function () {
        ul1.style.display = "block";
        f1.style.backgroundColor = "#fff";
        x1.style.transform = "rotate(180deg)";
    }
    f1.onmouseout=function(){
        f1.style.backgroundColor="rgb(245,245,245)";
        ul1.style.display = "none";
        x1.style.transform = "rotate(360deg)";
    }
    
    ul1.onmouseout = function () {
        ul1.style.display = "none";
        f1.style.backgroundColor = "rgb(245,245,245)";
        x1.style.transform = "rotate(360deg)";
    }
    }

    myFunction(a1,b1,c1);
    myFunction(a2,b2,c2);
    myFunction(a3,b3,c3);
    myFunction(a4,b4,c4);
    myFunction(a5,b5,c5);
})();