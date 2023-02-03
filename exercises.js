export function flatteningList() {
    let arrays = [[1, 2, 3], [4, 5], [6]];
    function concat (array, element) {
        let array1 = array + element + ",";
        return array1;
    }
    
    function combine (array, element) {
        return array.concat(element);
    }
    
    function reduce(array) {
        let current = [];
        for (let element of array) {
            current = combine(current, element);
        }
        return current;
    }
    console.log(reduce(arrays));
}