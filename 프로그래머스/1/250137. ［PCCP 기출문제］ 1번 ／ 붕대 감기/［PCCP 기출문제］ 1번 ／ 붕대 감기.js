
function checkHealth(currentHealth, maxHealth) {
  if (currentHealth >= maxHealth) currentHealth = maxHealth;
  return currentHealth;
}

function solution(bandage, health, attacks) {
  let maxHealth = health;
  let currentHealth = health;
  let currentTime = 0;
  let bandageTime = 0;
  let bandageHeal = bandage[1];
  let bandageHealSuccess = bandage[2];

  for (let attack of attacks) {
    while (true) {
      if (currentTime === attack[0]) {
        currentHealth -= attack[1];
        bandageTime = 0;
        break;
      }

      if (bandageTime > 0) currentHealth += bandageHeal;
      currentHealth = checkHealth(currentHealth, maxHealth);

      if (bandageTime === bandage[0]) {
        currentHealth += bandageHealSuccess;
        currentHealth = checkHealth(currentHealth, maxHealth);
        bandageTime = 0;
      }

      currentTime++;
      bandageTime++;
    }
    if (currentHealth <= 0) {
      return -1;
    }
  }

  return currentHealth;
}


*/
