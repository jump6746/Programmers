/* 

해설진이 이름을 부르면 추월한 것
현재 등수 배열 : players
해설진이 부른 이름을 담은 문자열 배열 : callings
경주가 끝났을 때 선수들의 이름을 등수대로 배열로 return

*/

// playersList = { mumu: 0, soe: 1, poe: 2, kai: 3, mine: 4}

function solution(players, callings){
    
    let playersList = {};
    
    for(let i = 0; i < players.length; i++){
      playersList[players[i]] = i;
    }
  
    for(let call of callings){
      const index = playersList[call];
      const temp = players[index - 1];

      players[index - 1] = call;
      players[index] = temp;

      playersList[call] = index - 1;
      playersList[temp] = index;
    }

    return players
}




