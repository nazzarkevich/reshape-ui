import each from 'jest-each';

import isWindows from './isWindows';

import { PLATFORM } from '../platform.ct';

describe('[Utils] -> platform -> isWindows', () => {
    each`
        platform            | expected
        ${PLATFORM.WINDOWS} | ${true}
        ${PLATFORM.MAC_OS}  | ${false}
    `.it('should return $expected [platform: $platform]', ({
        platform,
        expected
    }) => {
        // When
        const result = isWindows(platform);

        // Then
        expect(result).toEqual(expected);
    });
});
