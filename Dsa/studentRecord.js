function manipulateStudentRecord(obj, operation, prop, newValue) {
    if (operation === 'delete') {
      const newObj = { ...obj };
      delete newObj[prop];
      return newObj;
    } else if (operation === 'edit') {
      return {
        ...obj,
        [prop]: newValue
      };
    }
  }
  
  // Sample Usage
  const inputCount = 3;
  const inputData = [
    { name: 'John', lastName: 'Bliss', city: 'Florida' },
    { operation: 'edit', prop: 'city', newValue: 'Seattle' }
  ];
  
  let studentRecord = inputData[0];
  
  for (let i = 1; i <= inputCount; i++) {
    const operation = inputData[i].operation;
    const prop = inputData[i].prop;
    const newValue = inputData[i].newValue;
  
    studentRecord = manipulateStudentRecord(studentRecord, operation, prop, newValue);
  }
  
  // Output the result
  const sortedKeys = Object.keys(studentRecord).sort();
 // const output = sortedKeys.map(key => ${key} ${studentRecord[key]});
  console.log(output.join(' '));