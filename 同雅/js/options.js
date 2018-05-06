//公司简介
function resetTabs(){
    $("#content > div").hide(); 
    $("#tabs a").attr("class","");   
}
var myUrl = window.location.href;
var myUrlTab = myUrl.substring(myUrl.indexOf("#")); 
var myUrlTabName = myUrlTab.substring(0,4); 
(function(){
    $("#content > div").hide(); 
    $("#tabs li:first a").attr("class","current");
    $("#content > div:first").fadeIn();
    $("#tabs a").on("click",function(e) {
        e.preventDefault();
        if ($(this).attr("class") == "current"){
         return       
        }
        else{             
        resetTabs();
        $(this).attr("class","current"); 
        $($(this).attr('name')).fadeIn(); 
        }
    });

    for (i = 1; i <= $("#tabs li").length; i++) {
      if (myUrlTab == myUrlTabName + i) {
          resetTabs();
          $("a[name='"+myUrlTab+"']").attr("class","current"); 
          $(myUrlTab).fadeIn();     
      }
    }
})()
//面食项目 
function msresetTabs(){
    $("#mscontent > div").hide(); 
    $("#mstabs a").attr("class","");   
}
var msmyUrlTab = myUrl.substring(myUrl.indexOf("#")); 
var msmyUrlTabName = msmyUrlTab.substring(0,4); 
(function(){
    $("#mscontent > div").hide(); 
    $("#mstabs li:first a").attr("class","current");
    $("#mscontent > div:first").fadeIn();
    $("#mstabs a").on("click",function(e) {
        e.preventDefault();
        if ($(this).attr("class") == "current"){
         return       
        }else{             
        msresetTabs();
        $(this).attr("class","current"); 
        $($(this).attr('name')).fadeIn(); 
        }
    });

    for (i = 1; i <= $("#mstabs li").length; i++) {
      if (msmyUrlTab == msmyUrlTabName + i) {
          msresetTabs();
          $("a[name='"+msmyUrlTab+"']").attr("class","current"); 
          $(msmyUrlTab).fadeIn();     
      }
    }
})()
//奶茶项目 
function ncresetTabs(){
    $("#nccontent > div").hide(); 
    $("#nctabs a").attr("class","");   
}
var ncmyUrlTab = myUrl.substring(myUrl.indexOf("#")); 
var ncmyUrlTabName = ncmyUrlTab.substring(0,4); 
(function(){
    $("#nccontent > div").hide(); 
    $("#nctabs li:first a").attr("class","current");
    $("#nccontent > div:first").fadeIn();
    $("#nctabs a").on("click",function(e) {
        e.preventDefault();
        if ($(this).attr("class") == "current"){
         return       
        }else{             
        ncresetTabs();
        $(this).attr("class","current"); 
        $($(this).attr('name')).fadeIn(); 
        }
    });

    for (i = 1; i <= $("#nctabs li").length; i++) {
      if (ncmyUrlTab == ncmyUrlTabName + i) {
          ncresetTabs();
          $("a[name='"+ncmyUrlTab+"']").attr("class","current"); 
          $(ncmyUrlTab).fadeIn();     
      }
    }
})()
//早餐项目 
function zcresetTabs(){
    $("#zccontent > div").hide(); 
    $("#zctabs a").attr("class","");   
}
var zcmyUrlTab = myUrl.substring(myUrl.indexOf("#")); 
var zcmyUrlTabName = zcmyUrlTab.substring(0,4); 
(function(){
    $("#zccontent > div").hide(); 
    $("#zctabs li:first a").attr("class","current");
    $("#zccontent > div:first").fadeIn();
    $("#zctabs a").on("click",function(e) {
        e.preventDefault();
        if ($(this).attr("class") == "current"){
         return       
        }else{             
        zcresetTabs();
        $(this).attr("class","current"); 
        $($(this).attr('name')).fadeIn(); 
        }
    });

    for (i = 1; i <= $("#zctabs li").length; i++) {
      if (zcmyUrlTab == zcmyUrlTabName + i) {
          zcresetTabs();
          $("a[name='"+zcmyUrlTab+"']").attr("class","current"); 
          $(msmyUrlTab).fadeIn();     
      }
    }
})()
//夜宵项目 
function yxresetTabs(){
    $("#yxcontent > div").hide(); 
    $("#yxtabs a").attr("class","");   
}
var yxmyUrlTab = myUrl.substring(myUrl.indexOf("#")); 
var yxmyUrlTabName = yxmyUrlTab.substring(0,4); 
(function(){
    $("#yxcontent > div").hide(); 
    $("#yxtabs li:first a").attr("class","current");
    $("#yxcontent > div:first").fadeIn();
    $("#yxtabs a").on("click",function(e) {
        e.preventDefault();
        if ($(this).attr("class") == "current"){
         return       
        }else{             
        yxresetTabs();
        $(this).attr("class","current"); 
        $($(this).attr('name')).fadeIn(); 
        }
    });

    for (i = 1; i <= $("#yxtabs li").length; i++) {
      if (yxmyUrlTab == yxmyUrlTabName + i) {
          yxresetTabs();
          $("a[name='"+yxmyUrlTab+"']").attr("class","current"); 
          $(yxmyUrlTab).fadeIn();     
      }
    }
})()
//烧腊项目 
function slresetTabs(){
    $("#slcontent > div").hide(); 
    $("#sltabs a").attr("class","");   
}
var slmyUrlTab = myUrl.substring(myUrl.indexOf("#")); 
var slmyUrlTabName = slmyUrlTab.substring(0,4); 
(function(){
    $("#slcontent > div").hide(); 
    $("#sltabs li:first a").attr("class","current");
    $("#slcontent > div:first").fadeIn();
    $("#sltabs a").on("click",function(e) {
        e.preventDefault();
        if ($(this).attr("class") == "current"){
         return       
        }else{             
        slresetTabs();
        $(this).attr("class","current"); 
        $($(this).attr('name')).fadeIn(); 
        }
    });

    for (i = 1; i <= $("#sltabs li").length; i++) {
      if (slmyUrlTab == slmyUrlTabName + i) {
          slresetTabs();
          $("a[name='"+slmyUrlTab+"']").attr("class","current"); 
          $(slmyUrlTab).fadeIn();     
      }
    }
})()
//小吃项目 
function xcresetTabs(){
    $("#xccontent > div").hide(); 
    $("#xctabs a").attr("class","");   
}
var xcmyUrlTab = myUrl.substring(myUrl.indexOf("#")); 
var xcmyUrlTabName = xcmyUrlTab.substring(0,4); 
(function(){
    $("#xccontent > div").hide(); 
    $("#xctabs li:first a").attr("class","current");
    $("#xccontent > div:first").fadeIn();
    $("#xctabs a").on("click",function(e) {
        e.preventDefault();
        if ($(this).attr("class") == "current"){
         return       
        }else{             
        xcresetTabs();
        $(this).attr("class","current"); 
        $($(this).attr('name')).fadeIn(); 
        }
    });

    for (i = 1; i <= $("#xctabs li").length; i++) {
      if (xcmyUrlTab == xcmyUrlTabName + i) {
          xcresetTabs();
          $("a[name='"+xcmyUrlTab+"']").attr("class","current"); 
          $(xcmyUrlTab).fadeIn();     
      }
    }
})()