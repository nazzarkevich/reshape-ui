import calcLeftCenterPosition from './calcLeftCenterPosition';

describe('Tooltip -> utils -> calcLeftCenterPosition', () => {
    it('should return number', () => {
        // Given
        const payload = {
            rootLeft: 600,
            rootWidth: 200,
            tooltipWidth: 40
        };

        const expected = 680;

        // When
        const result = calcLeftCenterPosition(payload);

        // Then
        expect(result).toEqual(expected);
    });
});
