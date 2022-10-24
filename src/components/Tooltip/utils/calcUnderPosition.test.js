import calcUnderPosition from './calcUnderPosition';
import { INDENT } from '../tooltip.ct';

describe('Tooltip -> utils -> calcUnderPosition', () => {
    it('should return number', () => {
        // Given
        const payload = { rootBottom: 600 };

        const expected = 600 + INDENT;

        // When
        const result = calcUnderPosition(payload);

        // Then
        expect(result).toEqual(expected);
    });
});
