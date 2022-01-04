const {exec} = require("child_process");
const start = exec("sh shell_run.sh",
    (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        if(err){
            console.log(`exec error: ${err}`);
        }
    }
);
