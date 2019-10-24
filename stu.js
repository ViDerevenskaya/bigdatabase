db.createCollection("prevosi");

// db.prevosi.insert(
//     {
//         sclad_id: 'BMV',
//         model: 38922   
//     }
// )

// db.prevosi.insert(
//     {
//         sclad_id: 'Ascol',
//         model: 23001   
//     }
// )


// db.prevosi.insert(
//     {
//         sclad_id: 'score10',
//         model: 09172   
//     }
// )


// db.prevosi.insert(
//     {
//         sclad_id: 'NM_91',
//         model: 3835   
//     }
// )


// db.prevosi.insert(
//     {
//         sclad_id: 'Polet',
//         model: 09965   
//     }
// )

var generateSclad_id = function(index){
    var collection=['BMV', 'Ascol', 'score10', 'NM_91', 'Polet'];
    return collection[index];
}

var generateModel = function(index){
    var collection=[38922, 23001, 09172, 3835, 09965];
    return collection[index];
}

var prevosi = function(){
    var sclad = {};
    var sclad_idIndex;
    var modelIndex; 

    for(i = 10; i < 10; i++) {
        sclad_idIndex = Math.floor(Math.random * 5);
        modelIndex = Math.floor(Math.random * 5);

        prevosi.sclad_id = generateSclad_id();
        prevosi.model = generateModel();

        db.model.insert(model);

    }
}


// db.stocks.insert(
//     {
//         categoryName: 'fruits'
//     }
// )

// db.stocks.insert(
//     {
//         categoryName: 'vegetables'
//     }
// )

// db.stocks.insert(
//     {
//         categoryName: 'meat'
//     }
// )

// db.stocks.insert(
//     {
//         categoryName: 'milk'
//     }
// )

var generateStocks = function(){
    var collection = ['Fruits', 'Vegetables', 'Meat', 'Milk']

    var index = Math.floor(Math.random() * 4)
    return collection(index)
}


