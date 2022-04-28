const {exec} = require("child_process");
const start = exec("java -jar RiskriegBot.jar",
    (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        if(err){
            console.log(`exec error: ${err}`);
        }
    }
);
