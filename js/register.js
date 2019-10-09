$(document).ready(function(){
    $("#top").load("top.html");
    $("#bottom").load("bot.html");
    $("#reset").on("click",function () {
        $('#password').val("");
        $('#rePassword').val("");
        $('#usrName').val("");
        // var isChecked = $('#checkBox1').is(":checked"); 
        // //设置选中 
        // $('#checkBox').prop('checked',true); 
        $('#checkBox1').attr("checked",false);
      })  
}) 

