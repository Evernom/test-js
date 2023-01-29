// function filterArray(numbers, value) {
//     numbers = [];

//     for (let i = 0; i < value; i += 1) {
      
//     numbers.push(i);
//   }
    
// return numbers;
// }
// const result = filterArray([1, 2, 3, 4, 5], 3);

// console.log(result);

const lastWeekTemps = [1, 2, 3];
const currentWeekTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentWeekTemps, ...nextWeekTemps];

console.log(allTemps);

this.books.splice(this.books.indexOf(oldName), 1, newName);






const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    const { potions } = this;
    
    for (const potion of potions) {
    if (potion.name === newPotion.name) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const { potions } = this;
    
    for (let i = 0; i < potions.length; i += 1) {
      const { name } = potions[i];
      
      if (potionName === name) {
       potions.splice(i, 1);
        
      }
      
     `Potion ${name} is not in inventory!`;
      
    }
  },
  updatePotionName(oldName, newName) {
    const { potions } = this;
    
    for (let i = 0; i < potions.length; i += 1) {
      const { name } = potions[i];

    if (oldName === name) {
      return `Potion ${newName} is not in inventory!`;
    } else if(oldName === name) {
      name = newName
    }
  }
  },
  // Change code above this line
};
