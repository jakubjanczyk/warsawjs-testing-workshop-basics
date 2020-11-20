it('example test should pass', () => {
    expect(true).toBe(true);
});

// DEMO
it('should add two numbers', () => {
    // Arrange

    // Act
    const sum = add(1, 2);

    // Assert
    expect(sum).toEqual(3);
});

it('should subtract two numbers', () => {
    // Given

    // When
    const result = subtract(3, 1);

    // Then
    expect(result).toBe(2);
});

it('should add element to an array', () => {
    const array = [1, 2];

    array.push(3);

    expect(array).toContain(3);
});


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}
