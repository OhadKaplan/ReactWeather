
// function getTempPromis (location){
//     var temp='';
//     return new Promise(function (resolve,reject){
//         if(typeof temp ==='number'){
//             resolve(temp);
//         } else{
//             reject('Location Not Found!');
//         }        
//     });
// }

// getTempPromis('Tel-Aviv').then(
//     function(temp){
//         console.log('Promis success', temp);
//     },
//     function(err){
//         console.log('Error -  Promis faild!', err);
//     }
// );

//Challenge Area

function addNumbers(a,b){
    return new Promise(function (resolve,reject){
        setTimeout(function(){
            if(typeof a ==='number' && typeof b==='number'){
                resolve(a+b);
            }else{
                reject('Error - Please insert only numbers');
            }   
        },2000);
        
    });
}

addNumbers(2,6).then(
    function(result){
        console.log('Result:',result);
    },
    function(err){
        console.log('Error',err);
    }

);


addNumbers(7,'a').then(
    function(result){
        
        console.log('Result:',result);
    },
    function(err){
        
        console.log('Error',err);
    }

);

addNumbers('',).then(
    function(result){
        
        console.log('Result:',result);
    },
    function(err){
        
        console.log('Error',err);
    }

);