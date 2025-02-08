let primary=999;
let potency=0;
for (let i = 0; i < alchemist.flask.recipe.length; i++) {
  if(chemistry[alchemist.flask.recipe[i]][5]=='primary ingredient'){primary=alchemist.flask.recipe[i];}
  else{potency+=parseInt(chemistry[alchemist.flask.recipe[i]][2]);}
}

recordRecipes(alchemist.flask.result,primary,potency);







<table class="gandlor_bottom_buttons" width="100%">
                <tr>
                  <td style="text-align: left;"><button id="gandlor_deal" class="gandlor_deal" disabled="disabled">Deal</button></td>
                  <td style="text-align: right;"><button id="gandlor_howto_button" class="gandlor_info">How to Play</button></td>
                </tr>
              </table>


<tr>
  <td>
    <span class="counter" id="counter1_label"></span><br>
    <span class="rate" id="rate1_label"></span>
  </td>
</tr>



<button class="reincarnate" id="reincarnation_messengers">Messengers speed</button>&nbsp;



.alchemist_upgrades_tr{
	background-color: #1d2021;
	border-radius: 10px;
	-moz-border-radius: 10px;
	-webkit-border-radius: 10px;
}




var milestones_array=[];
var num=0;

for (let index = 0; index < 40; index++) {
  num+=15;
  milestones_array[index] = num;
  
}

console.log(milestones_array);

//if(alchemist.lab.length>0){ alchemistUI(); }


if(alchemist.lab.length>0 && tower1.counter<alchemist.lab[alchemist.sel_id].upgrade_prices){
    alchemist_upgrade_button.prop('disabled', true);
  }else{
    alchemist_upgrade_button.prop('disabled', false);
  }

alchemist_upgrade_button.click(function(){

if(alchemist.lab.length<=0){return;}

playAudio(4);

alchemistUpgrade();

});


player.frame3+=1+dt;
  if(player.frame3>FRAME3_MAX){
    player.frame3=0;
    messengerMachen();
  }

player.frame2+=1;
  if(player.frame2>FRAME2_MAX){player.frame2=0;}

  //messengers

  let pmsg=numT(player.frame3 / FRAME3_MAX * 100).toFixed(0);

  if(messenger.fresh_horses==1 && pmsg>=90){
    messenger.fresh_horses=0;refreshUI();
  }

  if(messenger.hammer_multiplier>1 && (player.messenger_index==1 || player.messenger_index==5) ){
    messenger.hammer_time--;
      messenger_button.html('<b>' + messenger.title + '</b><br>');
      messenger_button.append(messenger.body + '<br><br>');
      messenger_button.append('<b>Time: ' + numT(messenger.hammer_time) + '</b>');
    if(messenger.hammer_time<=0){
      messenger.hammer_multiplier=1;
      messenger.active=0;
      player.frame3=0;
      hammerRateCalc();
      refreshUI();
    }
  }

  if(player.messenger_index==6 || player.messenger_index==2){next_messenger_label.html('<b class="darkred">Enemies</b> are on their way:<br>' + pmsg + '%' );}
  else{

    //we don't want fresh horses when enemies are attacking
    if(pmsg>=5 && pmsg<=85 && messenger.fresh_horses==0 && messenger.active==0){
      if(getRandomInt(0,prestige.fhp)==999){
        horsesMachen();
        refreshUI();
      }
    }
    
    next_messenger_label.html('Messengers are on their way:<br>' + pmsg + '%' );
  
  }



function getYoutubeLikeToDisplay(tree_age) {
  var seconds = tree_age.toFixed(0);
  var minutes = Math.floor(seconds / 60);
  var hours = "";
  if (minutes > 59) {
      hours = Math.floor(minutes / 60);
      hours = (hours >= 10) ? hours : "0" + hours;
      minutes = minutes - (hours * 60);
      minutes = (minutes >= 10) ? minutes : "0" + minutes;
  }

  seconds = Math.floor(seconds % 60);
  seconds = (seconds >= 10) ? seconds : "0" + seconds;
  if (hours != "") {
      return hours + ":" + minutes + ":" + seconds;
  }
  return minutes + ":" + seconds;
}












weaklings2:[
    [3,'One Step at a Time','Doubles the power of weaklings','green',1e2,'empowerment'],
    [7,'Handle With Care','Doubles the power of weaklings','green',1e3,'empowerment'],
    [32,'Fragile Stuff','Doubles the power of weaklings','green',1e4,'empowerment'],
    [62,'In Frodo\'s Footsteps','Doubles the power of weaklings','green',1e5,'empowerment'],
    [92,'Clandestine Talent','Doubles the power of weaklings','green',1e6,'empowerment'],
    [122,'The Silent Treatment','Doubles the power of weaklings','green',1e8,'empowerment'],
    [182,'','Doubles the power of weaklings','green',1e10,'empowerment'],
    [242,'Empowerment VIII','Doubles the power of weaklings','green',1e12,'empowerment'],
    [302,'Empowerment IX','Doubles the power of weaklings','green',1e14,'empowerment'],
    [362,'Empowerment X','Doubles the power of weaklings','green',1e16,'empowerment'],
    [422,'Empowerment XI','Doubles the power of weaklings','green',1e18,'empowerment'],
    [482,'Empowerment XII','Doubles the power of weaklings','green',1e20,'empowerment'],
    [542,'Empowerment XIII','Doubles the power of weaklings','green',1e22,'empowerment']
  ],




  <div class="nav_left">Hall of Giants</div>
  <div class="nav_right">Graveyard</div>




if (Math.random()<Math.pow(Math.max(0,(alchemist.upgrades_clicked-alchemist.purse.min_upgrades_clicked)/(alchemist.purse.max_upgrades_clicked-alchemist.purse.min_upgrades_clicked)),5)){
  alchemistPurse();
}














<tr>
  <td class="skycat">
    <button class="skycat">SC</button>
  </td>
</tr>



case 0:

      var dagger=0;
      var ship=0;
      
      for (let i = 0; i < prestige.raiders.loot.length; i++) {

        ch=[];
        ch.push(0,2,2,3,5,8);
        if(Math.random()<0.5 && dagger==0){ch.push(17);}
        if(Math.random()<0.1 && ship==0){ch.push(18);}
        if(prestige.cannibals==1){ch.push(9,10);}

        prestige.raiders.loot[i]=choose(ch);

        if(prestige.raiders.loot[i]==17){dagger=1;}
        if(prestige.raiders.loot[i]==18){ship=1;}

      }

    break;




weaklings_button.html( 'Weaklings'+weaklings_level+': ' + numT(tower1.weaklings+tower1.weaklings_temp-tower1.weaklings_retired) + '<br><span class="tiny">Power: ' + numT(mortals_rate[0]) + '/s<br>Price: ' + numT(tower1.weaklings_price[tower1.buy_amount_index]) + '</span>&nbsp;<img class="sprite" src="img/weakling.svg">' );



<button id="flask1" class="button6_flask">E</button><button id="flask2" class="button6_flask">E</button><button id="flask3" class="button6_flask">E</button>


function rateCalcGraveyard(){

  graveyard.rate = 1 + graveyard.skeletons * ( graveyard.skeletons_power*necromancer.skeletons_factor + (graveyard.spirits * (graveyard.spirits_power*necromancer.spirits_factor + graveyard.specters * (graveyard.specters_power*necromancer.specters_factor + graveyard.succubi * graveyard.succubi_power*necromancer.succubi_factor) ) ) );

  //undead_rate for the UI
  undead_rate[0]=graveyard.skeletons * ( graveyard.skeletons_power*necromancer.skeletons_factor + (graveyard.spirits * (graveyard.spirits_power*necromancer.spirits_factor + graveyard.specters * (graveyard.specters_power*necromancer.specters_factor + graveyard.succubi * graveyard.succubi_power*necromancer.succubi_factor) ) ) );
  undead_rate[1]=graveyard.spirits_power*necromancer.spirits_factor + graveyard.specters * (graveyard.specters_power*necromancer.specters_factor + graveyard.succubi * graveyard.succubi_power*necromancer.succubi_factor) ;
  undead_rate[2]=graveyard.specters_power*necromancer.specters_factor + graveyard.succubi * graveyard.succubi_power*necromancer.succubi_factor;
  undead_rate[3]=graveyard.succubi_power*necromancer.succubi_factor;

  //graveyard.rate *= Math.floor(dragons_tower.dragon4/50);

}




for (let i = 0; i < alchemist.flask.ingredients.length; i++) {
  flask_ingredients.append('<button id="ing'+alchemist.flask.ingredients[i]+'_'+i+'" class="button6_ingredient"><span class="'+chemistry[alchemist.flask.ingredients[i]][4]+'">' + chemistry[alchemist.flask.ingredients[i]][1] + ' (p'+chemistry[alchemist.flask.ingredients[i]][2]+')</span></button>' );
}


flask_recipe.append('<button id="flk'+alchemist.flask.recipe[i]+'_'+i+'" class="button6_flask"><span class="'+chemistry[alchemist.flask.recipe[i]][4]+'">' + ingredient_html + '</span></button>' );


inspect_width=alchemist_upgrades.width();
  if(inspect_width<10){inspect_width=settings.inspect_width;}
  else{settings.inspect_width=inspect_width;}







if(alchemist.aviary.display[i]==8){alchemist.aviary.multiplier += 0.01;}//owl
else if(alchemist.aviary.display[i]==41){alchemist.aviary.multiplier += 0.02;}//budgerigar
else if(alchemist.aviary.display[i]==48){alchemist.aviary.multiplier += 0.03;}//flamingo
else if(alchemist.aviary.display[i]==7){alchemist.aviary.multiplier += 0.05;}//peacock
else if(alchemist.aviary.display[i]==19){alchemist.aviary.multiplier += 0.05;}//golden hen




function qAdd(num){

  tower1.counter+=num;
  prestige.all_time_counter+=num;
  tower1.all_reincarnation_counter+=num;

  storeState();
  refreshUI();

}
function setGame(amt=1e38,trs=7){
  prestige.garden.trees=trs;
  qAdd(amt);
}
function wAdd(num){

  graveyard.counter+=num;

  storeState();
  refreshUIGraveyard();

}
function resetGraveyard(){
  setupGraveyard();
  wAdd(1e8);
}