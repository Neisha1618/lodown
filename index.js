'use strict';

// YOU KNOW WHAT TO DO //




/**
 * identity: Designed to return the given value un-altered
 * 
 * @param {any value} value: can be any datatype
 * 
 * @return {any value}: same value as input un-altered
 * 
 * 
*/
function identity(value){
    return value;
}
module.exports.identity = identity;

/**
 * typeof: Designed to take a value and return the datatype of that value as a
 *         string.
 * 
 * @param {any value} value: this value can be any data type
 * 
 * @return {string}: it will be a string of the datatype of our input value
*/

function typeOf(value){
    
    if(typeof(value) === "string"){
        return "string"
    } else if(Array.isArray(value) === true){
        return "array"
    } else if(value === null){
        return "null";
    } else if(typeof(value) === "object"){
        return "object"
    } else if(typeof(value) === "undefined"){
        return "undefined"
    } else if(typeof(value)=== "number"){
        return "number"
    } else if(typeof(value)=== "boolean"){
        return "boolean"
    } else {
        return "function";
    }
    
    
};
module.exports.typeOf = typeOf;

/**
 * first: Designed to take in an array and a value and return the first numbered
 *        value in an array based on the number value. a few edge cases to look at
 *        includes: if there isnt a number given, then we will return the first element
 *        in the array. Another edge case is if the number is negative then we will
 *        return an array literal. Another edge case is if the array isnt an array. 
 *        then we will return an array literal.the final edge case is if the number
 *        given is greater then the arrays length then we will return the whole array.
 * 
 * @param {array} array: an array of values. if there is no array then our function
 *                       will return an empty array.
 * @param {number} num:  a number value that will determine what elements will be
 *                       return from our array. 
 * @return {array}: we will return an array of the first values  of the array based 
 *                  on the value of the number
 * 
*/

function first(array,num){
     let arr = [];
  
   if(num === 1 || !num){
       return array[0];
   } else if(num < 0){
       return [];
   }  else if(!Array.isArray(array)){
      return [];
    } else if(num > array.length){
        return array;
    } else {
       for(var i = 0; i < num; i++){
   arr.push(array[i]);
   }
   return arr;
   }
    
};
module.exports.first = first;

/**
 * last: Designed to take in an array and a value and return the last element 
 *        values in an array based on the number that is passed in. A few edge cases to look at
 *        includes: if there isnt a number given, then we will return the first element
 *        in the array. Another edge case is if the number is negative then we will
 *        return an array literal. Another edge case is if the array isnt an array. 
 *        then we will return an array literal.the final edge case is if the number
 *        given is greater then the arrays length then we will return the whole array.
 * 
 * @param {array} array: an array of values. if there is no array then our function
 *                       will return an empty array.
 * @param {number} num:  a number value that will determine what elements will be
 *                       return from our array. 
 * @return {array}: we will return an array of the last element values of the array based 
 *                  on the value of the number passed in.
*/

 function last(array,num){

     if(num === 1 || !num){
         return array[array.length -1];
     } else if(num < 0 || !Array.isArray(array)){
         return [];
     } else if(num > array.length){
         return array;
     } else {
         return array.slice(num - 1, array.length)
         }
    };
module.exports.last = last;

/**
 * indexOf: Designed to return the index of an array value at its first occurence
 *          without using the built in indexOf method. If we do not have the value
 *          in our array then we need to return -1. One thing to look out for is a
 *          duplicate value in the array since we only want the index of the first occurence.
 * 
 * @param {array} array: an array filled with values
 * 
 * @param {string} value: a value to search for in the array 
 * 
 * @return {number}: return the index value of the element in the array
 *          
 *   
 *
 * 
*/

function indexOf(array,value){
    for(let i = 0; i < array.length; i++){
      if(array[i] === value){
          return i;
        }
      }  
          return -1;
    }
module.exports.indexOf = indexOf;

/**
 * contains: This function is just like the includes array method. It is built to 
 *           return true if the array contains the value passed in. or false if it
 *           does not include the value. we used a terenary operator to check the
 *           condition that the value is in the array.
 * 
 * @param {array} array: an array of values
 * 
 * @param {string} value: a value to be checked in the array.
 * 
 * @return {boolean}: either true or false will be returned based on the whether
 *                    the value is in the array.
*/

 function contains(array,value){
    return array.includes(value) ?  true : false;
}
module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */

function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: Designed to take an array of duplicate values and return a new array 
 *         with duplicates removed utilizing the indexOf function we created.
 * 
 * @param {array} array: an array of values that includes duplicate values
 * 
 * @return{array} : a new array with the duplicate values removed
 * 
 * 
*/

 function unique(array) {
    let uniqueArr = [];
 for(var i = 0; i < array.length; i++){
     if(indexOf(array,array[i]) === i){
         uniqueArr.push(array[indexOf(array,array[i])]);
     }
    
 }
 return uniqueArr;
};
module.exports.unique = unique;

/**
 * filter: Designed to iterate through an array and apply a callback function on each element
 *         in the array to determine if the valuse a true. then it return a new array of all the true values.
 * 
 * @param {array} array: an array of values to pass through a function
 * 
 * @param {function} func: the function to be applied to each value in the array to test the truthiness
 * 
 * @return {array}: a new array of all the true values
 * 
 * 
*/

 function filter(array,func){
    let filterArr = [];
     each(array,function(element,i,collection){
        if(func(element,i,collection) === true){
            filterArr.push(element);
        }
     });
     
 return filterArr;
}
module.exports.filter = filter;

/**
 * reject: Designed to iterate through an array and apply a callback function on each element 
 *         in the array to check for the false values. reject will then return a new array of 
 *         false values. this function.
 * 
 * @param {array} array: an array of values to test
 * 
 * @param {function} func: a function to test which values are false
 * 
 * @return {array}: a new array of all the false values 
 *         
 * 
*/


function reject(array,func){
    return filter(array,function(element,i,array){
        return !func(element,i,array);
        });  

};
module.exports.reject = reject;

/**
 * partition: Designed to iterate over an array and apply a function onn the elements
 *            that will then create an array of truthy values and an array of falsy values.
 *            so an array of arrays.
 * 
 * @param {array} array: An array to be interated true and tested on
 * 
 * @param {function} func: the function to be applied on the array
 * 
 * @return {array}: a very nested array of truthy values and an array of falsey values
*/

let storeAll = [];
let truthy = [];
let falsy = [];

 function partition(array, func){
           each(array,function(element,key,array){
        if(func(element,key,array) === true){
           truthy.push(array[key]);
        }else {
         falsy.push(array[key])
}
});
storeAll.push(truthy,falsy);
return storeAll;
};
module.exports.partition = partition;

/**
 * map: This function is designed to iterate over an array or object and apply a
 *      callback function on each element in that array or object an return the modified values in an array.
 * 
 * @param {array or object} collection: the collection that will be iterated over 
 *                          then tested
 * 
 * @param {function} func: The function that wil be applied on each element in the collection
 * 
 * @return {array}: an array of modified values
 * 
*/

function map(collection,func){
    let mapArray = [];
    each(collection, function(element,index,array){
      mapArray.push(func(element,index,array));
       }); return mapArray;

};
module.exports.map = map;

/**
 * pluck: Designed to iterate over an array of objects and return an array containing
 *       the value of the property for every element in the array of objects.
 * 
 * @param {array} array: an array of objects
 * 
 * @param {string} prop: a key on the object in which we will access the value
 * 
 * @return {array}: the property values stored in a new array
 * 
*/

 function pluck(array,prop){
  return map(array,function(element){
      return element[prop];
  });
};
module.exports.pluck = pluck;

/**
 * every: Designed to apply a callback function on every value in either an array or object. 
 *        if the value is true for every element we will then return true. If just 
 *        one value in the collection is false then we will return false. If there is not a function 
 *        to apply then we will look for truthy or falsy elements.
 * 
 * @param {array or object} collection: the collection we will iterate over
 * 
 * @param{function} func: the function we will apply to each element to check the values
 * 
 * @return {boolean}: boolean values to let us know if the collections resolve to true or false
*/

function every(collection,func){
  
    let result = true;
   
    if(func){
        
    map(collection, function(element,index,array){
       if(func(element,index,array) === false){
          
            result = false;
        }
        });
  
  } else{
      
      map(collection,function(element,index,array){
          
          if(element === false){
             
              result = false;
          }
      });
  } 
  return result;
  
};
module.exports.every = every;

/**
 * some: Designed to apply a function on every value in either an array or object. 
 *        if the value is true for just one element we will then return true. If all
 *        of the values in the collection is false then we will return false. If there is not a function 
 *        to apply then we will look for truthy or falsy elements.
 * 
 * @param {array or object} collection: the collection we will iterate over
 * 
 * @param{function} func: the function we will apply to each element to check the values
 * 
 * @return {boolean}: boolean values to let us know if the collections resolve to true or false
*/



function some(collection,test){
    let result = false;
    if(test){
        map(collection,function(element,index,array){
            if(test(element,index,array) === true){
               return  result = true;
            }
        });
    } else{
        map(collection,function(element){
            if(element === true){
              return result = true; 
            }
        });
        
    }
    return result;
};
module.exports.some = some;

/**
 * reduce: Designed to apply a function on every element in a collection passing the arguments:
*         previous result, element, index. Then we will use the return value as the previous result
*         for the next iteration on the very first iteration,we will use the seed as the previous result
*         If we dont have a seed value, the first value of the collection will be the seed until finally 
*        we get down to a single value.
* 
* @param {array} array: an array we will reduce down to a single vlaue
* 
* @param {function} test: a function to be applied to the array
* 
* @param {any value} seed: if we have a seed, it will be the first element in our array
* 
* @return {number}: a single value dependng on whats in the array
*       
*/

function reduce (array,test,seed){
    let i;
        let previousResult;
        if(seed !== undefined && seed !== null) {
            // initalized i at the first index
            i = 0;
            previousResult = seed;
        } else {
            previousResult = array[0];
            i = 1;
        }
         for(; i < array.length; i++) {  // loop over array
             previousResult = test(previousResult, array[i], i);
         }
         return previousResult;

};
module.exports.reduce = reduce;

/**
 * extend: Designed to copy properties from any object into one main "target" object.
 *         an then return the main object with all the other object properties copied in.
 * 
 * @param {object} obj1: the target object that will gain all the properties from other objects
 * 
 * @param {...object} obj2: the object whose properties will be copied
 * 
 * @return {object}: the target object with all the properties copied in
*/

function extend(obj1, ...object2){
 for(var i = 0; i < object2.length; i++){
   for(let key in object2[i]){
     obj1[key] = object2[i][key];
 }
 }
    return obj1;
};
module.exports.extend = extend;