const os = require("os")


exports.os_requirement=(req , res)=>{
  res.status(200).json({
    "hostname" : os.hostname(),
    "type": os.type(),
    "platform" :os.platform()
  });
}

exports.cpuList=(req,res)=>{
    res.status(200).json({
        "cpu":os.cpus()
    });

    
}