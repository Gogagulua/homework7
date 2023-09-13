// Exercise 1: Object Method Context
// ##########################################
// ცვლად car -ში შეინახეთ 1 property (brend) და 1 method(getBrand). 
// დაწერეთ მეთოდი, რომელიც დააბრუნებს მნიშვნელობად ამ პროპერთის მნიშვნელობას.
// გამოიყენეთ this.
let car = {
    // ... your code here ...
    brend: "Toyota",
    getBrand: function () {
        return this.brend
    }

    
};

console.log(car.getBrand()); // Should print "Toyota"



// Exercise 2: Using .bind()
// ##########################################
// გადააბით ერთმანეთს ცვლადი person და ფუნქცია introduce.
// და გამოიძახეთ ფუნქცია introduce
let person = {
    name: "Alex",
    age: 30
};

function introduce() {
    console.log("My name is " + this.name + " and I am " + this.age + " years old.");
}

 let mixed = introduce.bind(person)
 mixed()

// ... your code here ...


// Exercise 3: Using .call()
// ##########################################
// გადააბით ერთმანეთს ცვლადი person და ფუნქცია introduce.
// და გამოიძახეთ ფუნქცია introduce

// ... your code here ...

let people = {
    name: "josh",
    age: 18
}
let shake = introduce.call(people)
console.log(shake);



// Exercise 4: Using .apply()
// ##########################################
// გადააბით ერთმანეთს ცვლადი person და ფუნქცია introduce.
// და გამოიძახეთ ფუნქცია introduce

// ... your code here ...
let com = {
    name: "jake"

}


// Exercise 5: Context in Event Listeners
// ##########################################
// მიაბით event Listener -ი ღილაკს და მასზე დაჭერისას გამოიძახეთ ფუნქცია, რომელიც დაბეჭდავს ღილაკის ტექსტს.
// გამოიყენეთ this.

// ... your code here ...

let btn = document.getElementById("textCo")
btn.addEventListener("click", function() {
    console.log("button clicked", this.textContent)
})

// Exercise 6: Nested Functions
// ##########################################
// დაწერეთ foreach ციკლი, რომელიც მასივის ყველა ელემენტს დაბეჭდავს `${სახელი} loves ${საქმიანობა}`
// გამოიყენეთ this.


let user = {
    name: "zviadi",
    activities: ["reading", "cycling"],
    printActivities: function () {
      this.activities.forEach((item) => {
        console.log(`${this.name} loves ${item}`);
      });
    },
  };
  
  user.printActivities(); // Should print "Zviadi loves Reading" and "Zviadi loves Cycling"     