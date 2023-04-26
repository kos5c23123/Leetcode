var isValidSudoku = function(board) {
    let rows = new Set()
    let cols = new Set()
    let boxes = new Set()

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let val = board[i][j]
            if (val === '.') 
                continue;
            
            let Row = i + 'r' + val
            let Col = j + 'c' + val
            let Box = Math.floor(i / 3) + 'b' + Math.floor(j / 3) + 'b' + val
            if (rows.has(Row) || cols.has(Col) || boxes.has(Box)) 
                return false
            
            rows.add(Row)
            cols.add(Col)
            boxes.add(Box)
        }
    }
    return true
};