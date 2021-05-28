arrayToSort=[1,4,2,6,7,3,7,9,3,4,3,5,6,7]

const sortArray = () =>{
    let sortComplete = 1

    do {
        sortComplete = 0
        for( let i = 0; i < arrayToSort.length-1; i++){
            if (arrayToSort[i] > arrayToSort[i+1]) {
                let temp = arrayToSort[i];
                arrayToSort[i] = arrayToSort[i+1];
                arrayToSort[i+1] = temp;
                sortComplete++;
            }                
        }
        console.log(arrayToSort)
        console.log(sortComplete)
    }
    while (sortComplete != 0);
    console.log(arrayToSort)
}

sortArray()