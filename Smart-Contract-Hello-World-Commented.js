//Nebulas Official Hello Worlds Script
class HelloWorld {//Define the class object of our script
    constructor() {// The constructor method is a special method for creating and initializing an object created within a class.
        LocalContractStorage.defineProperties(this, {//LocalContractStorage is a built in function of Nebulas
            visitor: null
        });
		/*
		The LocalContractStorage module provides a state trie based storage capability. It accepts string only key/pair values. 
		All data is stored to a private state trie associated with current contract address, only the contract can access them.
		
		A list of built infunctions are available at: https://github.com/nebulasio/wiki/blob/master/smart_contract.md
		*/
    }
    init(visitor) {//All Nebulas smart contracts must contain the init class. Any Arguments entered during deployment will be attached to the init function and the variables (e.g. visitor).
        this.visitor = visitor;//Defining visitor variable as this.visitor
    }
    greetings(city) {//creating the greetings class/function that can be called by the user.
        Event.Trigger("greetings", "Here is " + city + ". Hello World! By " + this.visitor + ".")//This is a string that we will be printing (hello world).
    }
    who() {//creating the who class/function that can be called by the user.
        return this.visitor;//This will return the name of the visitor which is defined during deployment.
    }
}

module.exports = HelloWorld;//All contracts must use module.exports. It must be the class/protocol object defined in the script. In our example, it is "HelloWorld"


