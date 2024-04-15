//convert the first element of the word into a Upppercase of Given sentences

//let str = "my name is srinivas"

const HashGenerator = (str)  => {
    str = str.split(" ")
   
    str = str.map((currEle) =>  currEle.charAt(0).toUpperCase() + currEle.slice(1))
    // add # symbol before sentence then
   str = `#${str.join("")}`
   return str
    
}
console.log("HashGenerator", HashGenerator("my name is srinivas"))


const GenerateHash = (name) => {
    if(name.length > 280 || name.length === 0) {
        return false
    }
    name = name.split(" ")
    name = name.map((currEle) =>  currEle.replace(currEle[0], currEle[0].toUpperCase()) )
    // add # symbol before sentence then
   name = `#${name.join("")}`
   return name
}

console.log(GenerateHash("my name is srinivas"))


