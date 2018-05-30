var default_group = "Chickens";

function Person(name, email, phone, fav_color, fav_food) {

	// Defaults
	var number_of_tries_remaining = 3;

	// Make local copies of the data that was passed in.
	this.name = name;
	this.email = email;
	this.phone = phone;
	this.favorite = {
		food: fav_food,
		color: fav_color 
	};
	this.number_of_tries_remaining = number_of_tries_remaining;
	// Naming a variable the same thing as a function is double plus ungood.
	// this.isLockedOut = "green";

	this.isLockedOut = function() {

		// if number_of_tries_remaining > 0, return false.
		// Otherwise, return true.

		// console.log("Tries remaining: [" + this.number_of_tries_remaining + "]");		

		if (this.number_of_tries_remaining > 0) {
			return false;
		}
		else {
			return true;
		}

	}
}

var employee = new Person("Bob", "bob@ourcompany.com", "123-456-7890", "red", "carrots");

// console.log(employee.name);

var customers = [
	new Person("LeeAnn", "leeann@gmail.com", "234-567-8901", "blue", "peas"),
	new Person("Betty", "betty@gmail.com", "345-678-9012", "yellow", "potatoes"),
	new Person("Wilma", "wilma@gmail.com", "456-789-0123", "orange", "squash"),
	new Person("Bam-Bam", "bambam@gmail.com", "567-890-1234", "purple", "lettuce")
];

customers.push(new Person("Fred", "fred@gmail.com", "678-901-2345", "brown", "pork chops"));

var people = {
	'LeeAnn': new Person("LeeAnn", "leeann@gmail.com", "234-567-8901", "blue", "peas"),
	'Betty': new Person("Betty", "betty@gmail.com", "345-678-9012", "yellow", "potatoes"),
	'Wilma': new Person("Wilma", "wilma@gmail.com", "456-789-0123", "orange", "squash"),
	'Bam-Bam': new Person("Bam-Bam", "bambam@gmail.com", "567-890-1234", "purple", "lettuce")
};

people.Barney = new Person("Barney", "barney@gmail.com", "789-012-3456", "red", "pizza");

var folks = {
	1232323: new Person("LeeAnn", "leeann@gmail.com", "234-567-8901", "blue", "peas"),
	2343434: new Person("Betty", "betty@gmail.com", "345-678-9012", "yellow", "potatoes"),
	5676767: new Person("Wilma", "wilma@gmail.com", "456-789-0123", "orange", "squash"),
	787878: new Person("Bam-Bam", "bambam@gmail.com", "567-890-1234", "purple", "lettuce")
};

folks[3454545] = new Person("Barney", "barney@gmail.com", "789-012-3456", "red", "pizza");
