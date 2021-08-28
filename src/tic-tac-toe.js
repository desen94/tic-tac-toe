class TicTacToe {
    constructor() {
        this.currentPlayer = 'x'
        this.gameField = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]
    }
    
    getCurrentPlayerSymbol() {
        return this.currentPlayer
    }
    
    nextTurn(rowIndex, columnIndex) {
        if (!this.gameField[rowIndex][columnIndex]) {
            this.gameField[rowIndex][columnIndex] = this.currentPlayer
            this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x'
        }
    }
    
    isFinished() {
        return !!this.getWinner() || this.noMoreTurns()
    }
    
    getWinner() {
        for (let i = 0; i < 3; i++) {
            if (this.gameField[i][0] === this.gameField[i][1] && this.gameField[i][0] === this.gameField[i][2]) {
                return this.gameField[i][0]
            } else if (this.gameField[0][i] === this.gameField[1][i] && this.gameField[0][i] === this.gameField[2][i]) {
                return this.gameField[0][i]
            }
        }
        if (this.gameField[0][0] === this.gameField[1][1] && this.gameField[0][0] === this.gameField[2][2]) {
            return this.gameField[0][0]
        }
        
        if (this.gameField[0][2] === this.gameField[1][1] && this.gameField[0][2] === this.gameField[2][0]) {
            return this.gameField[0][2]
        }
        return null
    }
    
    noMoreTurns() {
        return this.gameField.every(row => row.every(col => col))
    }
    
    isDraw() {
        return this.noMoreTurns() && !this.getWinner()
    }
    
    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex]
    }
}

module.exports = TicTacToe
