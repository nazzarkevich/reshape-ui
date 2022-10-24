import { PLATFORM } from '../platform.ct';

/**
 * @param   {string} platform :: The user's current platform
 * @returns {boolean}         :: Boolean that indicates whether a given platform is Windows
 */

const isWindows = platform => platform === PLATFORM.WINDOWS;

export default isWindows;
