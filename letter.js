var Letter = function (val, guessed) {
    this.val = val;
    this.guessed = guessed;
    this.displayVal = function () {
        if (this.guessed) {
            return this.val + " ";
        } else {
            return "_ ";
        }
    };
    this.checkLetter = function (char) {
        if (char === this.val) {
            this.guessed = true
            return true
        } else {return false}
    };
};

module.exports = Letter;