//Josephus Survivor and Josephus Permutation
// Permutation - https://www.codewars.com/kata/5550d638a99ddb113e0000a2/train/javascript
// Survivor - https://www.codewars.com/kata/555624b601231dc7a400017a/train/javascript

//united function
function josephus(n, k) {
    //create array of people
    let alive = new Array(n);
    for (let i = 0; i < n; i++)
        alive[i] = i+1;
    let current = 0, dead = [];
    while (alive.length > 1) { // while there are still people
        current = (current + k - 1) % alive.length; //choose position to delete
        dead.push(alive[current]);
        alive.splice(current, 1); //delete and move array
    }
    console.log('Josephus permutation of ' + n + ' people with ' + k + ' interval - ' + dead);
    console.log('Josephus Survivor of ' + n + ' people with ' + k + ' interval - ' + alive.pop());
}

function create_fill_array(n) {
    const array = new Array(n);
    for (let i = 0; i < n; i++)
        array[i] = i+1;
    return array
}
// https://www.codewars.com/kata/555624b601231dc7a400017a/train/javascript
function josephusSurvivor(n,k){
    //create array of people
    let alive = create_fill_array(n);
    let current = 0;

    while (alive.length > 1) { // while there are still people
        current = (current + k - 1) % alive.length; //choose position to delete
        alive.splice(current, 1); //delete and move array
        //console.log(alive);
    }
    console.log('Josephus Survivor of ' + n + ' people with ' + k + ' interval - ' + alive.pop());
    return alive.pop();
}
//https://www.codewars.com/kata/5550d638a99ddb113e0000a2/train/javascript
function josephusPermutation(n, k) {
    let alive = create_fill_array(n);
    let current = 0,
        len = alive.length,
        deaths = [];
    while (len = alive.length) {
        current = (current + k - 1) % len;
        deaths.push(alive[current]);
        alive.splice(current, 1);
    }
    console.log('Josephus permutation of ' + n + ' people with ' + k + ' interval - ' + deaths);
    return deaths;
}

//Test functions
josephusPermutation(10, 1) //exp. result: [1,2,3,4,5,6,7,8,9,10]
josephusSurvivor(10, 1) //exp.result: 10
josephusPermutation(7, 3) //exp. result: [3, 6, 2, 7, 5, 1, 4]
josephusSurvivor(7, 3) //exp.result: 4

josephus(10, 1);
josephus(7, 3);

