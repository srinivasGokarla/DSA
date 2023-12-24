function anagramDetector(S1, S2) {

    const cleanedS1 = S1.replace(/\s/g, '').toLowerCase();
    const cleanedS2 = S2.replace(/\s/g, '').toLowerCase();

    const sortedS1 = cleanedS1.split('').sort().join('');
    const sortedS2 = cleanedS2.split('').sort().join('');

    if (sortedS1 === sortedS2) {
        console.log("True");
    } else {
        console.log("False");
    }
}
