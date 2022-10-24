import { PLATFORM } from '../platform.ct';

/**
 * @param   {string} platform :: The user's current platform
 * @returns {boolean}         :: Boolean that indicates whether a given platform is MacOS
 */

const isMacOS = platform => platform === PLATFORM.MAC_OS;

export default isMacOS;
