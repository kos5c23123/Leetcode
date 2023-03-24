// Not working but can be used as reference
// var rotate = function(matrix) {
//     let result = []
//     for (let i = 0 ; i < matrix.length; i++) {
//         let current = []
//         let head = matrix[matrix.length - 1][i]
//         current.push(head)
//         for (let j = matrix.length - 2; j >= 0; j--) {
//             const temp = matrix[j][i]
//             current.push(temp)
//         }
//         result.push(current)
//     }
// };

var rotate = function(matrix) {
    let n = matrix.length, depth = (n / 2)
    for (let i = 0; i < depth; i++) {
        let len = n - 2 * i - 1, opp = n - 1 - i
        console.log(len, opp)
        for (let j = 0; j < len; j++) {
            let temp = matrix[i][i+j]
            matrix[i][i+j] = matrix[opp-j][i]
            matrix[opp-j][i] = matrix[opp][opp-j]
            matrix[opp][opp-j] = matrix[i+j][opp]
            matrix[i+j][opp] = temp
        }
    }
};