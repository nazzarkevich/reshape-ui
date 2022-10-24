import calcLeftEndPosition from './calcLeftEndPosition';

describe('Tooltip -> utils -> calcLeftEndPosition', () => {
    it('should return number', () => {
        // Given
        const payload = {
            rootRight: 600,
            tooltipWidth: 200
        };

        const expected = 400;

        // When
        const result = calcLeftEndPosition(payload);

        // Then
        expect(result).toEqual(expected);
    });
});
