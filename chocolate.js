
let chocs = [
    {
      chocName: "Plain Milk",
      description: "Smooth milk chocolate",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream",
      img: "assets/plain_milk.jpg",
    },
    {
      chocName: "Plain Dark",
      description: "Dark chocolate",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream",
      img: "assets/plain_dark.jpg",
    },
    {
      chocName: "Bailey's Cup",
      description: "Dark chocolate with Bailey's Cream Filling",
      calories: 100,
      ingredients: "Cocoa butter, Milk, Cream, baileys",
      img: "assets/baileys_cup.jpg",
    },
    {
      chocName: "Cappuccino Cup",
      description: "Dark chocolatewith Cappuccino style cream filling",
      calories: 120,
      ingredients: "Cocoa butter, Milk, Cream, Cappuccino fondant",
      img: "assets/cappuccino_cup.jpg",
    },
    {
      chocName: "Nutter Butter",
      description: "Dark chocolate with peanut butter",
      calories: 190,
      ingredients: "Cocoa butter, Milk, Cream, peanut butter",
      img: "assets/nutter_butter.jpg",
    },
    {
      chocName: "Orange Fondant",
      description: "Dark chocolate folded with orange fondant",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream, orange peel, orange fondant",
      img: "assets/orange_fondant.jpg",
    },
    {
      chocName: "Pistachio Cup",
      description: "Dark chocolate with nuggets of pistachio",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream, chunks of pistachio nut",
      img: "assets/pistachio_diamond.jpg",
    },
    {
      chocName: "Rum Barrel",
      description: "Dark chocolate with a decadent rum filling",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream, rum paste and rum flavourings",
      img: "assets/rum_barrel.jpg",
    },
    {
      chocName: "Toffee Crunch",
      description: "Dark chocolate with brittle toffee candy",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream, toffee",
      img: "assets/toffee_crunch.jpg",
    },
    {
      chocName: "Plain Supreme",
      description: "Dark chocolate with slivers of milk chocolate",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream",
      img: "assets/plain_hybrid.jpg",
    },
  ];

let showCals = true;
const toggleCalories = () => {
    showCals = !showCals;
    if (showCals)
        $("p.contents").show();
    else
    $("p.contents").hide();

    };


//highlight chocolate, turn box yellow from cream
  const highlightRandomChocolate = () => {
    $(".wrapper .box").css("background-color", "#e5e2b3")
    $(".wrapper .box").css("border", "1px solid black");
    let randomIndex = Math.floor(Math.random() * 10);
    console.log(randomIndex);
    $(".wrapper .box:eq(" + randomIndex + ")").css("background-color", "yellow");
  };

  //sample button
  const sampleRaffle = () => {
    const randomSample = Math.floor(Math.random() * 50) + 1;
    alert("The draw is: " + randomSample + ". Hand this to the employee for results!")
};
