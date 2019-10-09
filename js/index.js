// Initialize Swiper 中央的轮播图
var swiper = new Swiper('.center-swiper', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.p1',
        clickable: true,
    },
});
//  Initialize Swiper 左侧的轮播图

var swiper1 = new Swiper('.left-swiper', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.p2',
        clickable: true,
    },
});


//加载头部和底部
$(document).ready(function () {
    $("#top").load("top.html");
    $("#bot").load("bot.html");
})


//我的收藏 下拉列表的实现
var mt = document.querySelector(".mytreasure>ul");
var s = document.querySelector(".mytreasure li:nth-child(2)")
var u = document.querySelector(".treasure>ul");
mt.onmouseover = function () {
    u.style.display = "block";
    s.style.color = "rgb(73, 184, 73)";
}
mt.onmouseout = function () {
    u.style.display = "none";
    s.style.color = "#777";
}
u.onmouseover = function () {
    u.style.display = "block";
    s.style.color = "rgb(73, 184, 73)";
}
u.onmouseout = function () {
    u.style.display = "none";
    s.style.color = "";
}

//搜索框 下拉列表的实现
var pl = document.querySelector(".pl");
var sx = document.querySelector(".search_xiala");
document.onclick = function () {
    sx.style.display = "none";
}

//点击输入框 下拉列表出现
pl.onclick = function () {
    sx.style.display = "block";
    event.stopPropagation();
}

//用户在搜索框输入的内容 若为空 则出现下拉列表 否则不出现
pl.oninput = pl.onpropertychange = function () {
    if (this.value == "") {
        // 首先判断文本框里的值是否为空。注意用双等号！
        sx.style.display = "block";
    } else {
        sx.style.display = "none";
    }
}

//导航选卡的实现
var bot = document.querySelector(".nav-bot");
var li = bot.querySelectorAll(".bot_left>ul>li");
var c = bot.querySelectorAll(".bot_right>.content-box");
for (var i = 0; i < li.length; i++) {
    li[i].index = i; //关键 将span与tc建立联系
    li[i].onmouseover = function () {
        for (var p = 0; p < li.length; p++) {
            li[p].className = "";
            c[p].style.display = "none";
        }
        this.className = "selected";
        c[this.index].style.display = "block";
    }
}
//当鼠标移出bot（下方导航区域），让右边的content-box全部隐藏
bot.onmouseleave = function () {
    for (var q = 0; q < li.length; q++) {
        li[q].className = "";
        c[q].style.display = "none";
    }
};

//二维码的显示与隐藏
var wx = document.querySelector(".fix-nav>ul>li:nth-child(2)");
var app = document.querySelector(".fix-nav>ul>li:nth-child(3)");
var wx_code = document.querySelector(".wei_code");
var app_code = document.querySelector(".app_code");
wx.onmouseover = function () {
    wx_code.style.display = "block";
}
wx.onmouseout = function () {
    wx_code.style.display = "none";
}
app.onmouseover = function () {
    app_code.style.display = "block";
}
app.onmouseout = function () {
    app_code.style.display = "none";
}

// 手风琴的实现
var allacd = document.querySelectorAll(".content-box2");
for (var i = 0; i < allacd.length; i++) {
    accordion(allacd[i]);
}
//封装成函数
function accordion(acd) {
    var l = acd.querySelectorAll("ul>li");
    for (var i = 0; i < l.length; i++) {
        l[i].onmouseover = function () {
            for (var j = 0; j < l.length; j++) {
                l[j].className = "";
                l[j].nextElementSibling.style.display = "none";
            }
            this.className = "cur";
            this.nextElementSibling.style.display = "block";

        }
    }
}

//实现内容栏的tab选卡
var ind = document.querySelectorAll(".index-content");
for (var i = 0; i < ind.length; i++) {
    t(ind[i]);
}

function t(tab) {
    var a = tab.querySelectorAll(".cc-nav a");
    var b = tab.querySelectorAll(".content-box1");
    for (var i = 0; i < a.length; i++) {
        a[i].index = i; //关键 将a与tc建立联系
        a[i].onclick = function () {
            for (var j = 0; j < a.length; j++) {
                a[j].className = "";
                b[j].style.display = "none";
            }
            this.className = "c-selected";
            b[this.index].style.display = "block";
        }
    }
}

// 底部的图片切换 
var swiper1 = new Swiper('.com-swiper', {
    slidesPerView: 5,
    slidesPerColumn: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

//左侧的楼梯导航的实现
window.onscroll = function () {
    var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    var node = document.querySelector(".louti-nav");
    var yy = document.querySelector(".louti-nav li:nth-child(1)");
    var ry = document.querySelector(".louti-nav li:nth-child(2)");
    var dy = document.querySelector(".louti-nav li:nth-child(3)");
    if (top > 700 && top < 3000) {
        node.style.display = 'block';
    } else {
        node.style.display = 'none';
    }
}

$(window).scroll(function () {
    for (var i = 0; i < 3; i++) {
        var scr = $(window).scrollTop();
        var box1 = $(".index-content").eq(i).offset().top;
        var evn = box1 - scr;
        if (evn < 50) {
            $(".louti-nav li").eq(i).addClass("bg").siblings("li").removeClass("bg");
        }
    }
});