// Block variable & const scoping

// example 1: 
// Rule 1: if a variable is accessed / used before it is assigned a value, it will be undefined
// Rule 2: If a variable is accessed / used before it is declared, it will be be a reference error

if (true) {
    // declare block variable
    let month;
    // this will print undefined, because although `month` is declared, its not yet initialized
    console.log(month);
    // declare and initialize block variable
    let year = 1990;
    // this will print `1990`
    console.log(year);
}
console.log(year); // reference Error: year is not defined
console.log(month); // reference Error: month is not defined

// example 2 : Temporal dead zones

function amIAlive(soul) {
    // initialize a default transient state between dead and being alive
    var mySoulState = 'purgatory';
    if (soul) {
        /**
         * temporal dead zone for variable mySoulState
         */
        // throws referenceError: myVariable is not defined.
        console.log(mySoulState);
        let mySoulState = soul.getState();
        // end of temporal dead zone for variable `mySoulState`
        console.log(mySoulState);
        // do post processing & finally
        return false; 
    }
    return true;
}

// mySoulState is in a temporal dead zone from `let mySoulState` line up to the top of the block if (value) {...}. 
// If trying to access the variable mySoulState in this zone, JavaScript throws a ReferenceError. Why ? 
// An interesting question is: Then, is really `mySoulState` moved to the top of the current scope ? 
// Because, generally, let variables declarations are registered to the top of the block.  
// We saw an example where it was used after it was declared, but before it was initialized & so was undefined . 
// But as per the rule, if it is really registered at the top of the scope, it means its declared. 
// So if accessed, it should not throw a reference error... Why then ? What is happening ? 
// If you take a look at the beginning of the function block, var mySoulState = 'purgatory' is declaring a variable 
// for the entire function scope.  
// In the block if (value) {...}, if `let mySoulState` did not cover the outer scope variables, then in the 
// temporal dead zone mySoulState would have the value 'purgatory' again, which does not happen.  
// So block variables are ROUGH HOISTED. => they cover up for their outer variables, but are not undefined, but 
// end up having a reference error if accessed. 

// In an exact description, when the engine encounters a block with let statement, 
// -> first the variable is declared at the top of the block. 
// -> At declared state the variable still cannot be used, 
// -> but it covers the outer scope variable with the same name. 

// Later when let mySoulState=  line is passed, the variable is in initialized state and can be used.                         
// Rules for let :
// let expansion in the entire block protects variables from modification by outer scopes, even before declaration.
// Generate reference errors when accessing a let variables in temporal dead zones. 
