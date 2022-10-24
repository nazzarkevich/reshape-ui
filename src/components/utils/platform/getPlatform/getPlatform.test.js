import each from 'jest-each';

import getPlatform from './getPlatform';

import { PLATFORMS, PLATFORM } from '../platform.ct';

describe('[Utils] -> platform -> getPlatform', () => {
    each`
        platform                | expected
        ${PLATFORMS.MAC_OS[0]}  | ${PLATFORM.MAC_OS}
        ${PLATFORMS.MAC_OS[1]}  | ${PLATFORM.MAC_OS}
        ${PLATFORMS.MAC_OS[2]}  | ${PLATFORM.MAC_OS}
        ${PLATFORMS.MAC_OS[3]}  | ${PLATFORM.MAC_OS}
        ${PLATFORMS.WINDOWS[0]} | ${PLATFORM.WINDOWS}
        ${PLATFORMS.WINDOWS[1]} | ${PLATFORM.WINDOWS}
        ${PLATFORMS.WINDOWS[2]} | ${PLATFORM.WINDOWS}
        ${PLATFORMS.WINDOWS[3]} | ${PLATFORM.WINDOWS}
    `.it('should return a platform [navigator.platform: $platform, platform: $expected', ({
        platform,
        expected
    }) => {
        // Given
        Object.defineProperty(
            global.window.navigator,
            'platform',
            {
                value: platform,
                writable: true
            }
        );

        // When
        const result = getPlatform();

        // Then
        expect(result).toEqual(expected);
    });
});
