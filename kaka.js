function solvedProblem() {
    const buildings = [[2, 9, 10], [3, 7, 15], [5, 12, 12]]
    // const subArr = buildings[0];
    // const subArr1 = buildings[1];
    // const subArr2 = buildings[2]
    let stp = []
    for (let i = 0; i < buildings.length - 1; i++) {
        if (buildings[i][0] < buildings[i + 1][-1]) {
            stp.push(buildings[i + 1][0])
        }
        else {
            stp.push(buildings[i][0])
        }
    }
    return stp
}
console.log(solvedProblem());
