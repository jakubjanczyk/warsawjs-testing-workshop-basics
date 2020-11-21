describe.skip('fizz buzz', () => {
    // DEMO
    it('return 1 for n = 1', () => {
        const result = fizzBuzz(1);

        expect(result).toEqual(1);
    });

    it('return 2 for n = 2', () => {
        const result = fizzBuzz(2);

        expect(result).toEqual(2);
    });

    it('return Fizz for n = 3', () => {
        const result = fizzBuzz(3);

        expect(result).toEqual('Fizz');
    });

    it('return Buzz for n = 5', () => {
        const result = fizzBuzz(5);

        expect(result).toEqual('Buzz');
    });

    it('return Fizz for n = 6', () => {
        const result = fizzBuzz(6);

        expect(result).toEqual('Fizz');
    });

    it('return Buzz for n = 10', () => {
        const result = fizzBuzz(10);

        expect(result).toEqual('Buzz');
    });

    it('return FizzBuzz for n = 15', () => {
        const result = fizzBuzz(15);

        expect(result).toEqual('FizzBuzz');
    });
});

const fizzBuzz = (n) => {
    const dividedBy3 = n % 3 === 0;
    const dividedBy5 = n % 5 === 0;
    return dividedBy3 && dividedBy5
      ? 'FizzBuzz'
      : dividedBy3
        ? 'Fizz'
        : dividedBy5
          ? 'Buzz'
          : n;
}

