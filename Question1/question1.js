const mixedArray = ['PIZZA',10,true,25,false,'Wings']

/*

function lowerCaseWords(array){
    var newArr =[]

    return  new Promise(function(resolve, reject){
        for (let i = 0; i<array.length;i++){
            if (typeof array[i] == 'string'){
                newArr.push(" "+array[i].toLowerCase())
               
            }

        }
        resolve(`${newArr}`)

        
    })
        
    
}



console.log(lowerCaseWords(mixedArray))
*/

function lowerCaseWords(array){
    return new Promise(function(resolve, reject){
        if(Array.isArray(array)){
            var newFilteredArr =array.filter((arrItems)=>typeof arrItems === 'string')

            var newArr = newFilteredArr.map((filteredItems)=>filteredItems.toLowerCase())

            resolve(newArr)
        }else{
            reject("Something went wrong")
        }
    })
}

lowerCaseWords(mixedArray).then(function(result){
    console.log(result)
},function(error){ 
    console.log(error)
})