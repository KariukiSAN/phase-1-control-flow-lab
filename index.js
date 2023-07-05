function scuberGreetingForFeet(feet){
  if (feet <= 400){
    return 'This one is on me!';
  }
  else if (feet > 2000 && feet <= 2500){
    return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(city){
 return city=== 'NYC'? "Let's go to" + city+ "!": "Nope not going to"
}

function switchOnCharmFromTip(tip){
  switch (tip){
    case 5:
      return "Thank you so much.";
    case 10:
      return "Thank you.";
    case 15:
      return "Thank you, you're too kind.";
    default:
      return "Thank you."
  }
}