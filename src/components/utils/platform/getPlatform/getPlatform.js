import { PLATFORMS, PLATFORM } from '../platform.ct';

/**
 * @returns {string} :: The user's current platform
 */

const getPlatform = () => {
    const { platform } = window.navigator;

    if (PLATFORMS.MAC_OS.includes(platform)) return PLATFORM.MAC_OS;
    if (PLATFORMS.WINDOWS.includes(platform)) return PLATFORM.WINDOWS;
};

export default getPlatform; 
