import calcLeftStartPosition from './calcLeftStartPosition';

describe('Tooltip -> utils -> calcLeftStartPosition', () => {
    it('should return number', () => {
        // Given
        const payload = { rootLeft: 600 };

        const expected = 600;

        // When
        const result = calcLeftStartPosition(payload);

        // Then
        expect(result).toEqual(expected);
    });
});
