// JSON concepts
const bioData = {name: "Mahesh",
    age: 30,
    subject: "Computer Science"
}
// normal javascript object
console.log(bioData);
console.log(bioData.name);

const jsonData = JSON.stringify(bioData);
// javascript object to JSON
console.log(jsonData);
//output like {"name":"Mahesh","age":30,"subject":"Computer Science"}

const objData = JSON.parse(jsonData);
// converting JSON to Javascirpt object
console.log(objData);

console.log("===============================\n");



/*
1:  convert to JSON
2:  Add to another file
3:  Read file
4:  Again convert to Javascirpt object
5:  Show on console
*/
const fs = require('fs');

// const jsonData1 = JSON.stringify(bioData);
// fs.writeFile('10.1-createdJSON.json', jsonData1, (err)=>{
//     console.log('File created or data added successfully!');
// });

// JSON file created with jsonData1
// After One execution comment the above createfile code.


fs.readFile('10.1-createdJSON.json', 'utf-8', (err, data)=>{
    if(err) throw err;
    else{
        console.log(data);
        // converting to js obj
        let newObj = JSON.parse(data);
        console.log(newObj);
    }
});


