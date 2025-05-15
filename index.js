require('datejs');

//Create combineUsers function:
function combineUsers(...args) {
  let usernames = args;

  //Initialize return object to store combined array as an object
  const combinedObject = {
    users: [],
  };

  //Loop through usernames array and merge
  for(i = 0; i < usernames.length; i ++){

    //move in to combineObject.users key
    combinedObject.users.push(...usernames[i]);
  }

  //module - Get todays date M/d/yyy and add to combineObject
  console.log(combinedObject.merge_date = Date.today().toString('M/d/yyyy'));

  //return in to a single array in the combinedObjects object
  return combinedObject;
};



//test output
const testUsers = combineUsers(["Luna14","Pew1096","Bear23","Grumps"], ["Siena01", "Scout10","Chase08"], ["Sherm23","Van04", "Lou10","ApolloBear","AshadowCat"]);
console.log(testUsers);


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};