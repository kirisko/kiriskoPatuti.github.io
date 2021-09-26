startgame.click(function () {
    startgame.hide();
    the_game = function () {
        if(check_bullets_hits_floor(bulletTopnum) || check_bullet_hitsplayer(bulletTopnum)){  //condition if maigo sa floor or maigo sa player           
            set_bullets_initial_position(bulletTopnum);
            bulletTopnum = null;
            bulletTopnum = numberbullets[Math.floor(numberbullets.length * Math.random())];                     
        }
        else{
            bullets_down(bulletTopnum);              //else matagak ra ang bullet
        }
        //---leftfloor========================================================
        if(check_bullets_hits_leftfloor(bulletSidenum) || check_bullet2_hitsplayer(bulletSidenum)){  //condition if maigo sa floor or maigo sa player
            set_bullets_initial_position2(bulletSidenum);
            bulletSidenum = null;   //set null to choose another random bullet
            bulletSidenum = numberbulletsSide[Math.floor(numberbulletsSide.length * Math.random())];      
        }
        else{
            bullet_left(bulletSidenum);   //else mo agi sa kilid ra ang bullet
        }    
       //=================================================================
       if(life>0){   // Ilisan ang image if ang specific life ma decrease.
           if(life==10){
            $('#LifeBar').attr('src', 'life/life-10.png');
           }
           if(life==9){
            $('#LifeBar').attr('src', 'life/life-9.png');
           }
           if(life==8){
            $('#LifeBar').attr('src', 'life/life-8.png');
           }
           if(life==7){
            $('#LifeBar').attr('src', 'life/life-7.png');
           }
           if(life==6){
            $('#LifeBar').attr('src', 'life/life-6.png');
           }
           if(life==5){
            $('#LifeBar').attr('src', 'life/life-5.png');
           }
           if(life==4){
            $('#LifeBar').attr('src', 'life/life-4.png');
           }
           if(life==3){
            $('#LifeBar').attr('src', 'life/life-3.png');
           }
           if(life==2){
            $('#LifeBar').attr('src', 'life/life-2.png');
           }
           if(life==1){ 
            $('#LifeBar').attr('src', 'life/life-1.png');
           }
           
            anim_id = requestAnimationFrame(the_game);
       }
       else{
        if(life==0){ //set life 0 in image
            $('#LifeBar').attr('src', 'life/life-0.png');
           }
           stop_the_game();
       }
       
    };
    anim_id = requestAnimationFrame(the_game);
});

