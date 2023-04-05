// code your solution here


function saturdayFun (activity ='roller-skate') {
return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun ());
console.log(saturdayFun ('bathe my dog'));

function mondayWork (activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork(''));
console.log(mondayWork('work from home'));

function wrapAdjective(highlight = "*") {
    return function (adjective = "special") {
      return `You are ${highlight}${adjective}${highlight}!`;
    }
  }
  
  const wrappedWithStars = wrapAdjective("*");
  console.log(wrappedWithStars()); // "You are *special*!"
  console.log(wrappedWithStars("awesome")); // "You are *awesome*!"
  
  const wrappedWithBars = wrapAdjective("||");
  console.log(wrappedWithBars()); // "You are ||special||!"
  console.log(wrappedWithBars("dedicated")); // "You are ||dedicated||!"
  