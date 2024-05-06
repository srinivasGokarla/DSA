// CreateApp1 function
function CreateApp1(appName, rating, developer, category, platform, price) {
    this.appName = appName;
    this.rating = rating;
    this.developer = developer;
    this.category = category;
    this.platform = platform;
    this.price = price;

    this.getAppInfo = function() {
        return `${this.appName} (Rating: ${this.rating}) by ${this.developer}`;
    };

    this.getPrice = function() {
        return this.price;
    };

    this.increasePrice = function(amount) {
        this.price += amount;
        return this.price;
    };

    this.decreasePrice = function(amount) {
        this.price -= amount;
        return this.price;
    };

    this.isPopular = function() {
        return this.rating >= 3;
    };
}

// CreateApp2 constructor function
function CreateApp2(appName, rating, developer, category, platform, price) {
    this.appName = appName;
    this.rating = rating;
    this.developer = developer;
    this.category = category;
    this.platform = platform;
    this.price = price;

    this.getAppInfo = function() {
        return `${this.appName} (Rating: ${this.rating}) by ${this.developer}`;
    };

    this.getPrice = function() {
        return this.price;
    };

    this.increasePrice = function(amount) {
        this.price += amount;
        return this.price;
    };

    this.decreasePrice = function(amount) {
        this.price -= amount;
        return this.price;
    };

    this.isPopular = function() {
        return this.rating >= 3;
    };
}

// ES6 class CreateApp3
class CreateApp3 {
    constructor(appName, rating, developer, category, platform, price) {
        this.appName = appName;
        this.rating = rating;
        this.developer = developer;
        this.category = category;
        this.platform = platform;
        this.price = price;
    }

    getAppInfo() {
        return `${this.appName} (Rating: ${this.rating}) by ${this.developer}`;
    }

    getPrice() {
        return this.price;
    }

    increasePrice(amount) {
        this.price += amount;
        return this.price;
    }

    decreasePrice(amount) {
        this.price -= amount;
        return this.price;
    }

    isPopular() {
        return this.rating > 3;
    }
}

// Example invocation for CreateApp1
let app1 = new CreateApp1("MyApp", 3.5, "MyCompany", "Utility", "105", 30000);

console.log(app1.appName); // MyApp
console.log(app1.rating); // 3.5
console.log(app1.developer); // MyCompany
console.log(app1.category); // Utility
console.log(app1.platform); // 105
console.log(app1.price); // 30000

console.log(app1.getAppInfo()); // MyApp (Rating: 3.5) by MyCompany
console.log(app1.getPrice()); // 30000
console.log(app1.increasePrice(2000)); // 32000
console.log(app1.decreasePrice(3000)); // 29000
console.log(app1.getPrice()); // 29000
console.log(app1.isPopular()); // true

// Example invocation for CreateApp2
let app2 = new CreateApp2("MyApp", 2, "creativeWorks", "Entertainment", "Android", 14000);

console.log(app2.appName); // MyApp
console.log(app2.rating); // 2
console.log(app2.developer); // creativeWorks
console.log(app2.category); // Entertainment
console.log(app2.platform); // Android
console.log(app2.price); // 14000

console.log(app2.getAppInfo()); // MyApp (Rating: 2) by creativeWorks
console.log(app2.getPrice()); // 14000
console.log(app2.increasePrice(2000)); // 16000
console.log(app2.decreasePrice(3000)); // 13000
console.log(app2.getPrice()); // 13000
console.log(app2.isPopular()); // false

// Example invocation for CreateApp3
let app3 = new CreateApp3("MyApp", 3, "Yetcreativelorks", "Games", "105", 70000);

console.log(app3.appName); // MyApp
console.log(app3.rating); // 3
console.log(app3.developer); // Yetcreativelorks
console.log(app3.category); // Games
console.log(app3.platform); // 105
console.log(app3.price); // 70000

console.log(app3.getAppInfo()); // MyApp (Rating: 3) by Yetcreativelorks
console.log(app3.getPrice()); // 70000
console.log(app3.increasePrice(3000)); // 73000
console.log(app3.decreasePrice(3000)); // 70000
console.log(app3.getPrice()); // 70000
console.log(app3.isPopular()); // false