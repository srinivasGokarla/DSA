//Create a function to merge two sorted arrays into a single sorted array.
//Write a function to convert Celsius to Fahrenheit.

const Array1 = [1, 3, 5, 7];
const Array2 = [2, 4, 6, 8];
function mergedArrays(Array1, Array2) {
    let i= 0, j = 0, res = [];
    while(i < Array1.length && j < Array2.length) {
        if(Array1[i] < Array2[j]) {
            res.push(Array1[i]);
            i++;
        } else {
            res.push(Array2[j]);
            j++;
        }
    }
    //console.log(res)
    while(i < Array1.length) {
        res.push(Array1[i]);
        i++;
    }
    while(j < Array2.length) {
        res.push(Array2[j]);
        j++;
    }
    console.log(res)
}

 mergedArrays(Array1, Array2)
