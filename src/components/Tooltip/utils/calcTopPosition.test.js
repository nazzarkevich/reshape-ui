import calcTopPosition from './calcTopPosition';
import { PLACEMENT, INDENT } from '../tooltip.ct';

describe('Tooltip -> utils -> calcLeftPosition', () => {
    it(`should return number if info and ${PLACEMENT.TOP} placement were passed`, () => {
        // Given
        const rootInfo = {
            top:    100,
            bottom: 700, // based on viewport height 800 - 100 [look at setupTests]
            width:  300
        };

        const tooltipInfo = {
            height: 20
        };

        const expected = rootInfo.top - tooltipInfo.height - INDENT;

        // When
        const result = calcTopPosition(rootInfo, tooltipInfo, 'top');

        // Then
        expect(result).toEqual(expected);
    });

    it(`should return number if info and ${PLACEMENT.BOTTOM} placement were passed`, () => {
        // Given
        const rootInfo = {
            top:    100,
            bottom: 700, // based on viewport height 800 - 100 [look at setupTests]
            width:  300
        };

        const tooltipInfo = {
            height: 20
        };

        const expected = rootInfo.bottom + INDENT;

        // When
        const result = calcTopPosition(rootInfo, tooltipInfo, 'bottom');

        // Then
        expect(result).toEqual(expected);
    });

    it(`should return number if info and ${PLACEMENT.TOP_START} placement were passed`, () => {
        // Given
        const rootInfo = {
            top:    100,
            bottom: 700,
            width:  300
        };

        const tooltipInfo = {
            height: 20
        };

        const expected = rootInfo.top - tooltipInfo.height - INDENT;

        // When
        const result = calcTopPosition(rootInfo, tooltipInfo, 'top-start');

        // Then
        expect(result).toEqual(expected);
    });

    it(`should return number if info and ${PLACEMENT.TOP_END} placement were passed`, () => {
        // Given
        const rootInfo = {
            top:    100,
            bottom: 700,
            width:  300
        };

        const tooltipInfo = {
            height: 20
        };

        const expected = rootInfo.top - tooltipInfo.height - INDENT;

        // When
        const result = calcTopPosition(rootInfo, tooltipInfo, 'top-end');

        // Then
        expect(result).toEqual(expected);
    });
});
