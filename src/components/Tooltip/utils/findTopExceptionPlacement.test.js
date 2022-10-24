import findTopExceptionPlacement from './findTopExceptionPlacement';
import { PLACEMENT } from '../tooltip.ct';

describe('Tooltip -> utils -> findTopExceptionPlacement', () => {
    it('should return null if placement not found', () => {
        // Given
        const payload = {
            topPosition: 100,
            tooltipHeight: 60
        };

        const expected = null;

        // When
        const result = findTopExceptionPlacement(payload);

        // Then
        expect(result).toEqual(expected);
    });

    it(`should return ${PLACEMENT.TOP_START} if negative left position was passed`, () => {
        // Given
        const payload = {
            topPosition: -1.23,
            tooltipHeight: 60
        };

        const expected = PLACEMENT.BOTTOM;

        // When
        const result = findTopExceptionPlacement(payload);

        // Then
        expect(result).toEqual(expected);
    });

    it(`should return ${PLACEMENT.TOP_END} if right position bigger then viewport with`, () => {
        // Given
        const payload = {
            topPosition: 800,
            tooltipHeight: 60
        };

        const expected = PLACEMENT.TOP;

        // When
        const result = findTopExceptionPlacement(payload);

        // Then
        expect(result).toEqual(expected);
    });
});
