import React from "react";
import YourBotCard from "./YourBotCard";

function YourBotArmy({yourBots, setYourBots, deleteBot}) {



 function removeBotFromArmy(bot) {
   const newArmy = yourBots.filter((b) => b.id !== bot.id);
    setYourBots(newArmy);
    }


  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {yourBots.map((bot) => {
            return (
              <YourBotCard
                bot={bot}
                key={bot.id}
                removeBotFromArmy={removeBotFromArmy}
                deleteBot={deleteBot}
              />
            );})}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
