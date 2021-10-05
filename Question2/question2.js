 function resolvedPromise(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({'Message ':' resolved promise!'})
        },500)
    })
}

function rejectedPromise (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject({'Error ':' rejected promise!'})
        },500)
    })
}

resolvedPromise().then(result => console.log(result))
rejectedPromise().catch(error => console.log(error))