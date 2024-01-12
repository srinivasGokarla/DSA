const dataArray = [
    { name: "John", class: "3", skill: { one: "reading", two: "math" } },
    { name: "Alice", class: "2", skill: { one: "drawing", two: "music" } },
    { name: "Bob", class: "6", skill: { one: "coding", two: "swimming" } },
    { name: "Eva", class: "4", skill: { one: "writing", two: "singing" } },
    { name: "Mike", class: "1", skill: { one: "playing", two: "cooking" } },
    { name: "Sophie", class: "5", skill: { one: "dancing", two: "programming" } }]
    
    
  // const names =  dataArray.map((item) => ({
  //     name: item.name
  // })
  
  const twoValues = dataArray.map((item) => (
      {
          two : item.skill.two
      }))