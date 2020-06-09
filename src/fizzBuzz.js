class Fizzbuzz {
    _isDivisibleBy(number, divisor) {
        return(number % divisor === 0);

    }

    // isDivisibleByThree(number) {
    //     return this._isDivisibleBy(number, 3);
    // }

    // isDivisibleByFive(number) {
    //     return this._isDivisibleBy(number, 5);
    // }

    // isDivisibleByFifteen(number) {
    //     return this._isDivisibleBy(number, 15);
    // }

    play(number) {
      if (this._isDivisibleBy(number, 15)){
        return "FizzBuzz";
     }  
      if (this._isDivisibleBy(number, 3)){
        return "Fizz";
     }
      if (this._isDivisibleBy(number, 5)){
        return "Buzz";
     }
      return number
    }

}
