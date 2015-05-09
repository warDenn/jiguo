void function(){

    var body = $("body");

    body.on("click", ".dnav", function(){

        var classname = $(this).attr("data-id");

        $("#"+classname).show().siblings(".hiddenA").hide();
        $(this).addClass("navcurrent").siblings().removeClass("navcurrent");
        console.log($("."+classname))

    });


    var template = '\
        <div id="fatherDis0" class="userdis">\
            <img src="images/head.jpg">\
            <h4 class="userinf">{{name}}<span>{{time}}</span></h4>\
            <p class="userinf">{{content}}</p>\
            <div class="zandiv"><i class="fa fa-thumbs-o-up"></i><span>{{fav}}</span></div>\
        </div>';


    var tmpl = Handlebars.compile(template);

    var data = {
        name:"小石头",
        time:"刚刚",
        content:"",
        fav: 0
    };

    
    var textarea = $(".look textarea");

    body.on("click", ".look button", function(){

        var text = textarea.val(), html;
        
        data.content = text;

        html = tmpl(data);

        if(data.content ==""){
            return;
        }

        $(html).insertBefore($(".userdis").first());

        textarea.val("");

    });

    // $("#showDetails").click(function(){
    //     $(".detailscontent").css({"height":"","overflow":"visible"});
    //     $(".gradient").remove();
    //     $(this).remove();
    // });
    // $(".list div").click(function(){
    //     $(this).removeClass();
    //     $(this).addClass("ox");
    //     $(this).children(":eq(1)").addClass("xSpan")
    // });
    // $(".details").children("div").click(function(){
    //     $(this).attr({"style":"color:rgb(254,83,65);border-bottom:3px solid rgb(254,83,65)"})
    //     $(this).siblings().removeAttr("style");
    //     var aa=$(this).attr('class');
    //     // $("."+$(this).attr("class")).css({"display":"block"});
    // });
    // $(".likediv>img").click(function(){
    //     var str=$(".likediv>span").text();
    //     var num=str.slice(2);
    //     num++;
    //     $(".likediv>span").text("喜欢");
    //     $(".likediv>span").append(num);

    // });
    // $(".plimg").click(function(){
    //     $(this).attr({"src":"images/redzan.jpg"});
    //     var num=$(this).next().text();
    //     num++;
    //     $(this).next().text(num);
    // });



}();
// $(".right>img").click(function(){
//     var i=parseInt($(this).next().text());
//     i++;
//     $(this).next().text(i);
// });


// function getClass(sClass)
// {
//         var allElemnt=document.getElementsByTagName('*');
//         var classArr=[];
//         var reg=new RegExp('\\b'+sClass+'\\b', 'i');
//         var i=0;
        
//         for(i=0;i<allElemnt.length;i++)
//         {
//                 if(reg.test(allElemnt[i].className))
//                 {
//                         classArr.push(allElemnt[i]);
//                 }
//         }
        
//         return classArr;
// };
// var nav=getClass("details");
// function tb(event){
//     var classArr=getClass("hiddenA");
//     for(var i=0;i<3;i++){
//         classArr[i].style.display="none";
//     };
//     var target=event.target||event.srcElement;
//     var tid=target.id;
//     var a=document.getElementById(tid+"1");
//     a.style.display="block";
// };
// var plimg=getClass("plimg");

// // nav[0].addEventListener("click",tb,false);
// // 评论那一块 在textarea写入文本 直接可以增加评论；
// var button=document.getElementsByTagName("button")[0];
// var texta=document.getElementsByTagName("textarea")[0];
// var fatherDis=document.getElementById("fatherDis0");
// var yourdiv=document.getElementById("yourdiv");
// function makeNewDis(){
//     var text=texta.value;
//     var newNode=fatherDis.cloneNode(true);
//     var num=newNode.id.slice(newNode.lenth-2);
//     num++;
//     newNode.id=newNode.id.slice(0,newNode.id.slice(newNode.lenth-1))+num;   
//     if(navigator.userAgent.indexOf("MSIE")>0){
//         newNode.childNodes[2].innerText=text;
//         newNode.childNodes[7].childNodes[0].src="images/zan.jpg";
//         newNode.childNodes[7].childNodes[1].innerText="0";
//     }else if(newNode.textContent){
//         newNode.childNodes[5].textContent=text;
//         newNode.childNodes[7].childNodes[0].src="images/zan.jpg";
//         newNode.childNodes[7].childNodes[1].textContent="0";

//     }else{
//         newNode.childNodes[5].innerText=text;
//         newNode.childNodes[7].childNodes[0].src="images/zan.jpg";
//         newNode.childNodes[7].childNodes[1].innerText="0";
//     }
//     yourdiv.insertBefore(newNode,null)


// }
// button.addEventListener("click",makeNewDis,false);


