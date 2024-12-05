/////////////////////////////////////////////////////////////////
///////////////////////////// BOOTCAMP //////////////////////////
////////////////////// REQUIRED PRACTICE EXAM ///////////////////
/////////////////////////////////////////////////////////////////

let subscriptions = [
    {  // 0
      name: "HBOMax",
      type: 'streaming',
      costPerMonth: 14.99,
      cancel: false,
      users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
        {
          ip: '175.100.90.40',
          lastAccessed: '5/18/2023'
        }
      ]
    },
    { // 1
      name: 'Hulu',
      type: 'streaming',
      costPerMonth: 7.99,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
      ]
    },
    { // 2
      name: 'Netflix',
      type: 'streaming',
      costPerMonth: 9.99,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
        {
          ip: '175.100.90.40',
          lastAccessed: '5/18/2023'
        },
         {
           ip: '180.145.75.25',
           lastAccessed: '5/20/2023'
         }
      ]
    },
    { // 3
      name: 'Express VPN',
      type: 'software',
      costPerMonth: 12.95,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
      ]
    },
    { // 4
      name: 'Adobe Premiere Pro',
      type: 'software',
      costPerMonth: 20.99,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
      ]
    },
  ];
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #1 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /*
 Create a function called cancelSubscriptions that takes in one parameter - array - 
 that represents an array of subscription objects. This function should iterate through 
 the input array of subscriptions and set EVERY OTHER subscription object's cancel property 
 to true, but only if the cost of the subscription is more than 10 dollars.
  */
  
  let cancelSubscriptions = function(array){
    for(let i = 0; i < array.length; i++){
      //using conditional statement to find subscriptions over 10 dollars
      if(subscriptions.costPerMonth > 10){
      //how to set "every other" to true?
      arr[i]
    }
  }};
  
  
  /*
  NOTE: If you test this function in the console, remember to comment 
  out the test because this function will DESTRUCTIVELY alter the subscriptions 
  array.
  */
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #2 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /*
Create a function called subscriptionList that takes in one parameter - array - 
which represents an array of subscription objects. This function should use the 
native reduce method to return a string that formats the subscriptions like as such:
HBOMax - 14.99
Hulu - 7.99
Netflix - 9.99
Express VPN - 12.95
Adobe Premiere Pro - 20.99

This is an example of what the return value should look like as a string: 
"HBOMax - 14.99\nHulu - 7.99\nNetflix - 9.99\nExpress VPN - 12.95\nAdobe Premiere Pro - 20.99\n"
  */
  
  let subscriptionList = function(array){
   array.reduce(`subscriptions[0].name + " - " + subscriptions[0].costPerMonth + \n
   subscriptions[0].name + " - " + subscriptions[0].costPerMonth + \n
   subscriptions[1].name + " - " + subscriptions[1].costPerMonth + \n
   subscriptions[2].name + " - " + subscriptions[2].costPerMonth + \n
   subscriptions[3].name + " - " + subscriptions[3].costPerMonth`)
  };
  
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #3 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////

  /**Create a function called getSubscriptionObject that takes in two parameters
   *  - array and name. array represents an array of subscription objects; name is a 
   * string of a subscription (example: 'HBOMax'). This function should use recursion 
   * to find the subscription object matching the input name. If the subscriptio is found, 
   * the function should return an object containing the subscription's name and cost property. 
   * If no subscription is found, the function should return an object with the name and cost 
   * properties set to null.
getSubscriptionObject('HBOMax'); // => { name: 'HBOMax', costPerMonth: 14.99 }
getSubscriptionObject('Disney Plus'); // => { name: null, costPerMonth: null } */
  
  let getSubscriptionObject = function(array, name){
 


  };
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #4 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  /**
Create a function called updateSubscription that takes in two parameters - object and updates. 
object represents a single subscription object; updates represents an array of arrays, where 
each subarray contains a property to update and a value to assign to that property. This function 
should use this updates array to access the necessary properties on the input object and assign 
the new values. updateSubscription should return the input object after modifying it.
   */
  
  let updateSubscription = function(object, updates){
    
  };
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #5 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
/**
 * 
 * Create a function called getMultipleUsers that takes in one parameter - array - 
 * which represents an array of subscription objects. This function should use the 
 * native filter method to return a new array of only the subscriptions that have multiple users.
*/

//function getMultipleUsers(array){
//subscriptions.filter(subscriptions.users.length > 1 {array.push(subscriptions.users)})
//}

  
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #6 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////

  /**
  Create a function called getUsersArray that takes in one parameter - 
  array which represents an array of subscription objects. This function 
  should use the native map method to return a new array of objects that only 
  contains the name property of the subscription and users property pointing 
  to an array of the users.
   */
  
  let getUsersArray = function(){
   
  };
  
  
