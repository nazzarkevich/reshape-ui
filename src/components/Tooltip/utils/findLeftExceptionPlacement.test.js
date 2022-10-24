import findLeftExceptionPlacement from './findLeftExceptionPlacement';
import { PLACEMENT } from '../tooltip.ct';

describe('Tooltip -> utils -> findLeftExceptionPlacement', () => {
    it('should return null if placement not found', () => {
        // Given
        const payload = {
            leftPosition: 100,
            tooltipWidth: 60
        };

        const expected = null;

        // When
        const result = findLeftExceptionPlacement(payload);

        // Then
        expect(result).toEqual(expected);
    });

    it(`should return ${PLACEMENT.TOP_START} if negative left position was passed`, () => {
        // Given
        const payload = {
            leftPosition: -1.23,
            tooltipWidth: 60
        };

        const expected = PLACEMENT.TOP_START;

        // When
        const result = findLeftExceptionPlacement(payload);

        // Then
        expect(result).toEqual(expected);
    });

    it(`should return ${PLACEMENT.TOP_END} if right position bigger then viewport with`, () => {
        // Given
        const payload = {
            leftPosition: 1400,
            tooltipWidth: 60
        };

        const expected = PLACEMENT.TOP_END;

        // When
        const result = findLeftExceptionPlacement(payload);

        // Then
        expect(result).toEqual(expected);
    });
});
