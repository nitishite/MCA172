const fs=require('fs');
fs.appendFile('Sample.txt', 'HELLO 1-MCA-B' , (err) =>{
    console.log('Content Updated');
})

fs.readFile('Sample.txt', 'utf-8', (err,data)=>{
    console.log(data);
})

