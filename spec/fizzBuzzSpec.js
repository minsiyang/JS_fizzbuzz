
describe('Fizzbuzz', function() {
    var fizzBuzz;
    beforeEach(function(){
      fizzBuzz = new Fizzbuzz();
    });
    describe('knows when a number is', function(){
        it ('divisible by three', function(){
            expect(fizzBuzz.isDivisibleByThree(3, 3)).toBe(true);
        });
    });
    describe('knows when a number is NOT', function(){
      it('divisible by three', function() {
        expect(fizzBuzz.isDivisibleByThree(1, 3)).toBe(false);
      });
    });

    describe('knows when a number is', function(){
      it('divisible by five', function(){
        expect(fizzBuzz.isDivisibleByFive(5, 5)).toBe(true);
      });
    });

    describe('knows when a number is NOT', function(){
      it('divisible by five', function(){
        expect(fizzBuzz.isDivisibleByFive(6, 5)).toBe(false);
      });
    });

    describe('knows when a number is', function(){
      it('divisible by fifteen', function(){
        expect(fizzBuzz.isDivisibleByFifteen(30, 15)).toBe(true);
      });
    });

    describe('knows when a number is NOT', function(){
      it('divisible by fifteen', function(){
        expect(fizzBuzz.isDivisibleByFifteen(20, 15)).not.toBe(true);
      });
    });

    describe('number is multiple of 3', function(){
      it('return "fizz" when passed 3', function(){
        expect(fizzBuzz.play(3)).toEqual("Fizz");
      });

      it ('return "fizz" when passed 9', function(){
        expect(fizzBuzz.play(9)).toEqual("Fizz");
      });
    });

    describe('number is multiple of 5', function(){
      it('return "Buzz" when passed 5', function(){
        expect(fizzBuzz.play(5)).toEqual("Buzz");
      });
    });

} );
