let data = [
    { "id": 'animals', 'parent': null },
    { "id": 'mammals', 'parent': 'animals' },
    { "id": 'cats', 'parent': 'mammals' },
    { "id": 'dogs', 'parent': 'mammals' },
    { "id": 'chihuahua', 'parent': 'dogs' },
    { "id": 'labrador', 'parent': 'dogs' },
    { "id": 'persian', 'parent': 'cats' },
    { "id": 'siamese', 'parent': 'cats' }
];

function buildHierarchy(data, parent) {
    let result = {};
    data
        .filter(item => item.parent === parent)
        .forEach(item => {
            const children = buildHierarchy(data, item.id);
            if (Object.keys(children).length > 0) {
                result[item.id] = children;
            } else {
                result[item.id] = {};
            }
        });
    return result;
}

const root = data.find(item => item.parent === null);
const output = buildHierarchy(data, root.id);

console.log(JSON.stringify(output, null, 2));

//output: 
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