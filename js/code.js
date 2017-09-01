//获取验证码
var InterValObj; 
var count = 60; 
function sendMessage() {
    $("#btnSendCode").attr("disabled", "true");
    $("#btnSendCode").html("剩余" + count + "秒");
    InterValObj = window.setInterval(SetRemainTime, 1000);
};
function SetRemainTime() {   
    if (count == 0) {                
        window.clearInterval(InterValObj);       
        $("#btnSendCode").removeAttr("disabled");
        $("#btnSendCode").html("重新获取");
    }else {
        count--;
        $("#btnSendCode").html("剩余" + count + "秒");
    }
}