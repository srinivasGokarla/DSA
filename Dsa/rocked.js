let data = [
    { "id": 'animals', 'parent': null },
    { "id": 'mammals', 'parent': 'animals' },
    { "id": 'cats', 'parent': 'mammals' },
    { "id": 'dogs', 'parent': 'mammals' },
    { "id": 'chihuahua', 'parent': 'dogs' },
    { "id": 'labrador', 'parent': 'dogs' },
    { "id": 'persian', 'parent': 'cats' },
    { "id": 'siamese', 'parent': 'cats' }
]
function herchary(data) {
  //  console.log(data)
    let obj = {};
    console.log(obj, "testing")
    function build(parent,node) {
     //console.log(parent,node "checking")
        const child = data.filter((item) =>  item.parent == 'animals')
        
       
  .map((element) => {
      
      node[element.id] = {};
      
      console.log(node[element.id])
      return  build(node[element.id], element.id)
      console.log(child)
  })
  
  if( build(node, null) == null) {
     return
  } else {
      build(node, null) 
     return  obj
  }
     
     
     
    }
    

}
console.log(herchary(data))


// {
//     "mammals": {
//         "cats": {
//             "persian": {},
//             "siamese": {}
//         },
//         "dogs": {
//             "chihuahua": {},
//             "labrador": {}
//         }
//     }
// }