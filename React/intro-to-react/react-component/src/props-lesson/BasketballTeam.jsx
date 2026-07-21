import BasketballPlayer from "./BasketballPlayer"

//You can given default props to your component , in case no props are passed in
function BasketballTeam({team_name = "Unamed Team Name",team_star_player = "Unamed Star",team_manager ="Unamed Manger", players=["Unamed Players"]}){
    console.log(team_name)
    return(
        <div>
            <h2>Team Name : {team_name}</h2>
            <h3>Star Player : {team_star_player}</h3>
            <p>Team Manager : {team_manager}</p>
            <h3>Players:</h3>
            {/* .map() is for you to iterate through every element in the array*/}
            {players.map((player,index) => (
                <BasketballPlayer key={index} player_name={player} />
            ))}
            {/*In the instance above, we iterate through players */}
            {/*Reference from ShowBasketballTeam.jsx to see the players it should be in the from of an array */}
            {/*Because it is an arraym we use .map() to parse through each element */}
            {/*Each item in the array will be used as 'player' in the .map() function*/}
            {/*We also include index as the key because we are displaying multiple BasketballPlayer components */}
            {/*Then, we use 'player' to assign to BasketballPlayer's player_name prop, so it can display the player_name in the BasketballPlayer component*/}
            <br></br>
        </div>
    )

}


export default BasketballTeam