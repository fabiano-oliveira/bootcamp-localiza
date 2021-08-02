
// callbacks
function getDataAsync(callback){
    setTimeout(function(){
        callback([1, 2, 3, 4]);
    }, 2000);
}

function transformDataAsync(data, callback){
    setTimeout(function(){
        callback(data.map(v => v * 2));
    }, 2000);
}


getDataAsync(data => {
    console.log(`[callback] data acquired: ${data}`);
    transformDataAsync(data, newData => {
        console.log(`[callback] data transformed: ${newData}`);
    });
});

// promises
let getDataPromise = new Promise((resolve, reject) => {
    setTimeout(
        function(){
            resolve([1, 2, 3]);
        }, 1000
    );
});

// promise exec
getDataPromise
    .then(data => {
        console.log(`[promise] data acquired: ${data}`);
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(data.map(v => v * 2)), 1000);
        });
    }).then(data => {
        console.log(`[promise] data transformed: ${data}`);
    });


// async/await
function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>  resolve([1, 2, 3, 4, 5]), 5000);
    })
}

function transformData(data){
    return new Promise((resolve, reject) => { 
        setTimeout(() => resolve(data.map(v => v * 3)), 5000);
    });
}

async function loadAndTransformAsync(){
    console.log('[async/await] Loading...');
    var data = await getData();
    console.log(`[async/await] Data acquired: ${data}`);
    console.log('[async/await] Transforming data...');
    var newData = await transformData(data); 
    console.log(`[async/await] Dados transformados: ${newData}`);
}

loadAndTransformAsync();
console.log('Fim do programa.');