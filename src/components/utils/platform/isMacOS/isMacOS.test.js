import each from 'jest-each';

import isMacOS from './isMacOS';

import { PLATFORM } from '../platform.ct';

describe('[Utils] -> platform -> isMacOS', () => {
    each`
        platform            | expected
        ${PLATFORM.MAC_OS}  | ${true}
        ${PLATFORM.WINDOWS} | ${false}
    `.it('should return $expected [platform: $platform]', ({
        platform,
        expected
    }) => {
        // When
        const result = isMacOS(platform);

        // Then
        expect(result).toEqual(expected);
    });
});
