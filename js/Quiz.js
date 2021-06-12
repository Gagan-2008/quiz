class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background("Yellow");

    //write code to show a heading for showing the result of Quiz
    textSize(20);
    text("Result",130,270);
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo(); 
    if(allContestants !== undefined)
    {
      fill("Blue");
      
      text("*Note: Contestant who answered correct will be highlighted in Green",130,230)
      var pos = 300;
      for(var plr in allContestants){
       var contestantAns= 2;
      
       if(contestantAns === int(allContestants[plr].answer))
       {
        fill("Green");
        text(allContestants[plr].name ,130,pos);
       }
       else{
        fill("Red");
        text(allContestants[plr].name,130,pos);
       }
       pos+=30;

      } 
    }

    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
