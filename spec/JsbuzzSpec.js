
describe('Jsbuzz', function() {
    var jsbuzz;
    beforeEach(function(){
      jsbuzz = new Jsbuzz();
    });
    describe('knows when a number is', function(){
        it ('divisible by a divisor', function(){
            expect(jsbuzz._isDivisibleBy(3, 3)).toBe(true);
        });
    });
    describe('knows when a number is NOT', function(){
      it('divisible by a divisor', function() {
        expect(jsbuzz._isDivisibleBy(1, 3)).toBe(false);
      });
    });
} );
