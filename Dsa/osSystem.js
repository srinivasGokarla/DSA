// write your code here
import os from 'os';

function getOsName(){
    return os.type()
}

function getFreeMemoryPercentage()
{
    return(os.freemem()/os.totalmem())
}
function getUptimeInMinutes(){
    return(Math.round(os.uptime()/60))
}

export {os,getOsName,getFreeMemoryPercentage,getUptimeInMinutes}