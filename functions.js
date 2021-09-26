$(document).ready(function(){
    setInterval("actIt()",100);   //100 is the speed animation or transition speed
    $("#Patuti").click(function(e){
        var elm = $(this);
        var xPos = e.pageX - elm.offset().left;  //X and Y positon to click in Image
        var yPos = e.pageY - elm.offset().top;
        if(xPos<elm.width()/3.5){  
            moveIt(0,1); // 0-left, 1-right area 1
        } 
        else if(xPos>elm.width()/1.5){
            moveIt(1,1);
        }
        else if(yPos<elm.height()/2){
            moveIt(0,2);    //0 jump 1 dock area 2
        }
        else if(yPos>elm.height()/2){
            moveIt(1,2);
        }
    })
})
function actIt(){
    $("#Patuti").attr("src",moves[curPos][curSp]);
    curSp = (curSp + 1) % moves[curPos].length;
    if(curPos==1){
        if(curSp > 2){ 
            if($("#Patuti").position().left >270){ //left animation
                $("#Patuti").css("left",($("#Patuti").position().left - 25)+"px");  //15 move area
            } //Stop patuti from falling on the left side of the cliff
            else{
                $("#Patuti").css("left",($("#Patuti").position().left - 0)+"px");
            }
        }  
        if(curSp==0){curPos=0; curSp=1;} //balik sa idle
    }
    if(curPos==2){
        if(curSp > 2){  //right animation 
            if($("#Patuti").position().left < 450){ //Stop patuti from falling on the right side of the cliff
                $("#Patuti").css("left",($("#Patuti").position().left + 25)+"px");
            }
            else{
                $("#Patuti").css("left",($("#Patuti").position().left + 0)+"px");
            }  
        }
        if(curSp==0){curPos=0; curSp=1;} //balik sa idle
    } 
    if(curPos==3){
        if(curSp > 2) //jump animation
            $("#Patuti").css("top",($("#Patuti").position().top - 30)+"px");
        if(curSp==0){
            $("#Patuti").css("top",($("#Patuti").position().top + 120)+"px");
            curPos=0; curSp=1;} //balik sa idle
    } 
    if(curPos==4){
        if(curSp > 2){
            $("#Patuti").css("top",($("#Patuti").position().top + 23)+"px"); 
        } //Dock animation
        if(curSp==0){       
            curPos=0; curSp=1;
            $("#Patuti").css("top",($("#Patuti").position().top - 46)+"px");  } //balik sa idle
    } 
}

function moveIt(i,area){
    if(area==1){
        curPos = (i==0)? 1:2; //sets animation 1 left 2 right 3 jump 4 dock
        curSp = 0;
    }
    else if(area==2){
        curPos = (i==0)? 3:4; //sets animation 3 jump 4 dock
        curSp = 0;
    }
}

//====== UP BULLETS

function bullets_down(bullet) { //tagak ang bullet
    bullets_current_position = parseInt(bullet.css('top'));
    bullet.css('top', bullets_current_position + speedUp);
}


function check_bullets_hits_floor(bullet){  //Iyaha tan.awon if ang bullet na collide sa floor
    if(collision(bullet, bottomfloor)){
        return true;
    }
    return false;
}
function set_bullets_initial_position(bullet){ //balik sa position ang bala
    bullet.css('top', bullets_initial_position);
}

function check_bullet_hitsplayer(bullet){  //check if na.igo si patuti
    if(collision(bullet, Patuti)){
        bullet_top = parseInt(bullet.css('top'));  //check if patuti's head got hit if not then no hit
        if(bullet_top < Patuti_top/2){
            decrease_life()
            return true;
        }      
    }
    return false;
}

// -------- Side Bullets -----------------
function bullet_left(bullet2) {
    bullets_current_position2 = parseInt(bullet2.css('right'));
    bullet2.css('right', bullets_current_position2 + speedSide);
}
function check_bullets_hits_leftfloor(bullet2){  //Iyaha tan.awon if ang bullet na collide sa floor
    if(collision(bullet2, leftfloor)){
        return true;
    }
    return false;
}
function set_bullets_initial_position2(bullet2){ //balik sa position ang bala
    bullet2.css('right', bullets_initial_position2);
}
function check_bullet2_hitsplayer(bullet2){
    if(collision(bullet2, Patuti)){
        bullet_sideright = parseInt(bullet2.css('right')); //check if patuti's right side got hit if not then no hit
        if(bullet_sideright < Patuti_side/1.2){
            decrease_life()
            return true;
        }      
    }
    return false;
}

// ---- Lain Functions 
function decrease_life(){ //kuhaan og kinabuhi
    life--;
}

function stop_the_game(){  //hunong ang animation
    cancelAnimationFrame(anim_id);
    restart.show();
}

restart.click(function () {
    location.reload(); // reload basta mo click sa restart button

});

