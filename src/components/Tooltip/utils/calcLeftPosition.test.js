import calcLeftPosition from './calcLeftPosition';
import { PLACEMENT } from '../tooltip.ct';

describe('Tooltip -> utils -> calcLeftPosition', () => {
    it(`should return number if info and ${PLACEMENT.TOP} placement were passed`, () => {
        // Given
        const rootInfo = {
            left: 570,
            right: 570,
            width: 300
        };

        const tooltipInfo = {
            width: 30
        };

        const expected = 705;

        // When
        const result = calcLeftPosition(rootInfo, tooltipInfo, 'top');

        // Then
        expect(result).toEqual(expected);
    });

    it(`should return number if info and ${PLACEMENT.BOTTOM} placement were passed`, () => {
        // Given
        const rootInfo = {
            left: 570,
            right: 570,
            width: 300
        };

        const tooltipInfo = {
            width: 30
        };

        const expected = 705;

        // When
        const result = calcLeftPosition(rootInfo, tooltipInfo, 'bottom');

        // Then
        expect(result).toEqual(expected);
    });

    it(`should return number if info and ${PLACEMENT.TOP_START} placement were passed`, () => {
        // Given
        const rootInfo = {
            left: 570,
            right: 570,
            width: 300
        };

        const tooltipInfo = {
            width: 30
        };

        const expected = 570;

        // When
        const result = calcLeftPosition(rootInfo, tooltipInfo, 'top-start');

        // Then
        expect(result).toEqual(expected);
    });

    it(`should return number if info and ${PLACEMENT.TOP_END} placement were passed`, () => {
        // Given
        const rootInfo = {
            left: 570,
            right: 570,
            width: 300
        };

        const tooltipInfo = {
            width: 30
        };

        const expected = 540;

        // When
        const result = calcLeftPosition(rootInfo, tooltipInfo, 'top-end');

        // Then
        expect(result).toEqual(expected);
    });
});
