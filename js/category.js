var startTime = new Date();
        startTime.setFullYear(2019,8, 29);
        startTime.setHours(23);
        startTime.setMinutes(59);
        startTime.setSeconds(59);
        startTime.setMilliseconds(999);
        var EndTime=startTime.getTime();
        function GetRTime(){
            var NowTime = new Date();
            var nMS = EndTime - NowTime.getTime();//毫秒差值
            var nD = Math.floor(nMS/(1000 * 60 * 60 * 24));//剩余天
            var nH = Math.floor(nMS/(1000*60*60)) % 24;//剩余小时
            var nM = Math.floor(nMS/(1000*60)) % 60;//剩余分钟
            var nS = Math.floor(nMS/1000) % 60;//剩余秒
            function bq(s){
                if(s<10)
                return '0'+s;
                else
                 return s;
            }
            if (nMS < 0){
                $("#dao").hide();
                $("#daoend").show();
            }else{
               $("#dao").show();
               $("#daoend").hide();
               $("#RemainD").text(bq(nD));
               $("#RemainH").text(bq(nH));
               $("#RemainM").text(bq(nM));
               $("#RemainS").text(bq(nS)); 
            }
        }
        
        $(document).ready(function () {
            var timer_rt = window.setInterval("GetRTime()", 1000);
        });