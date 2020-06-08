
describe('Fizzbuzz', function() {
    var fizzbuzz;
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
} );
