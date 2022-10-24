import calcAbovePosition from './calcAbovePosition';

describe('Tooltip -> utils -> calcAbovePosition', () => {
    it('should return number', () => {
        // Given
        const payload = {
            rootTop: 100,
            tooltipHeight: 20
        };

        const expected = 72;

        // When
        const result = calcAbovePosition(payload);

        // Then
        expect(result).toEqual(expected);
    });
});
