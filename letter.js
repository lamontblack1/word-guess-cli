let Letter = function (val,guessed) {
    this.val = val;
    this.guessed = guessed;
    this.returnValue = function () {
        if (this.guessed) {
            return this.val
        } else {
            return "_"
        }
    };
    this.check = function (char) {
        if (char === this.val) {
            this.guessed = true
        }
    }
}