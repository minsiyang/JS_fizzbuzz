class Fizzbuzz {
    _isDivisibleBy(number, divisor) {
        return(number % divisor === 0);

    }

    isDivisibleByThree(number) {
        return this._isDivisibleBy(number, 3);
    }

    isDivisibleByFive(number) {
        return this._isDivisibleBy(number, 5);
    }

}