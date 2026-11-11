function Listen(port,callback) {
    // something that initalize the port listening
    console.log(`${port}  is listening`);
    let err = "My Error"
    callback(err)
}


Listen(3000,(err)=>{console.log(err)});