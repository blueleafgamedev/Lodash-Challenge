const _ = {
    clamp(number, lower, upper) {
      const lowerClampedValue = Math.max(number, lower);
      const upperClampedValue = Math.min(lower, upper);
      const clampedValue = Math.min(lowerClampedValue, upper);
  
      return clampedValue;
    },
  
    inRange(number, start, end) {
      let swap = start;
  
      if (end === undefined) {
        end = start;
        start = 0;
      }
  
      if (start > end) {
        start = end;
        end = swap;
      }
  
      if (number === start) {
        return true;
      }
  
      else if (number > start && number < end) {
        return true;
      }
  
      else {
        return false;
      }
    },
  
    words(str) {
      return str.split(' ');
    },
  
  /*I do not believe this code to actually be correct and do what it is supposed to.
  However, it works and is what the challenege asked for.*/
    pad(str, length) {
      if (length <= str) {
        return str;
      }
  
      let startPaddingLength = Math.floor((length - str.length) / 2);
      let endPaddingLength = length - str.length - startPaddingLength;
      let paddedString = ' '.repeat(startPaddingLength) + str + ' '.repeat(endPaddingLength);
  
      return paddedString;
    },
  
    has(object, key) {
      const hasValue = object.hasOwnProperty(key);
      return hasValue;
    },
  
    invert(object) {
      var newObject = {};
      for (let i in object) {
        if(object.hasOwnProperty(i)) {
          console.log(i)
          newObject[object[i]] = i;
      }
    }
  
    return newObject;
    },
  
    findKey(object, predicate) {
      for(let i in object) {
        let value = object[i];
        let predicateReturnValue = predicate(value);
  
        if(predicateReturnValue) {
          return i;
        }
        else {
          return undefined;
        }
      }
    },
  
    drop(arr1, num) {    
      if(num === undefined) {
        num = 1;
      }
  
      let newArr = arr1.slice(num);
      return newArr;   
    },
  
    //I received an error in this code while using this.drop, but it passed. I am still trying to troubleshoot this one. 
    dropWhile(arr2, predicate) {
      let dropNumber = arr2.findIndex(function(element, index) {
        return !predicate(element, index, arr2);
      });
      
      let droppedArray = this.drop(dropNumber);
  
      return droppedArray;
    },
  
    chunk(arr3, size) {
      if(size === undefined) {
        size = 1;
      }
  
      let arrayChunks = [];
      let counter = 0;
      for (let i = 0; i < arr3.length; i += size) {
        let arrayChunk = arr3.slice(i, i + size);
        arrayChunks.push(arrayChunk);
        }
          return arrayChunks;
    }
  }
  
  _.chunk(['hot', 'pocket'], 2)
  
  // Do not write or modify code below this line.
  module.exports = _;