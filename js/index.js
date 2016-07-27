$(function(){
    //1.轮播图
    $("#kinMaxShow").kinMaxShow({   
        height:400,            
        button:{    
            switchEvent:'mouseover',         
            showIndex:false,                    
            normal:{background:'url(images/index/button_default.png) no-repeat',marginRight:'8px',border:'0',right:'46%',bottom:'7px',height:'15px',width:'15px'},
            focus:{background:'url(images/index/button_current.png) no-repeat',border:'0'}
        }           
    });

    //2.图片切换
    var lilength = $(".shareholder_content ul li").length+2;//定义变量lilength并获得li的长度
    $(".ul_width").css("width",lilength*256);//动态生成ul的宽度=每个li的宽度*li的长度
    var leftpos = 0;
    var leftcount = 0;
    //左侧点击切换
    $("#mover_left").click(function() {         
        if (lilength-1 <=0){}
            else{
            if (leftcount>0){
                leftpos = leftpos + 256;
                leftcount = leftcount - 1;
                $(".ul_width").animate({ left: leftpos }, "slow");
            }
        }
    });
    //右侧点击切换
    $("#mover_right").click(function() {
        if (lilength-1 <=0){
        }else{
            if (leftcount <= (lilength-3)/2) {
                leftpos = leftpos - 256;
                leftcount = leftcount + 1;
                $(".ul_width").animate({ left: leftpos }, "slow");
            }
        }               
    });
});

