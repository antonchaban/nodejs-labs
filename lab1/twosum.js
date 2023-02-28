function twoSum(nums, target) {
    const map = new Map(); // create a Map object to store the indices and their corresponding values
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // find the complement of the current element
        if (map.has(complement)) {
            return [map.get(complement), i]; // return the indices of the two elements
        }
        map.set(nums[i], i); // store the current element and its index in the map
    }
    throw new Error('No two sum solution'); // throw an error if no solution is found
}

// example usage
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // prints [0, 1]
