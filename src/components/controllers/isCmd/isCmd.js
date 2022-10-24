/**
 * @typedef {Object} KeyboardEvent
 * @property {boolean} metaKey  :: Indicates whether the cmd key is being pressed
 */

/**
 * @param   {KeyboardEvent} e :: The occurred keyboard event
 * @returns {boolean}         :: Boolean that indicates whether a given event corresponds to cmd+v shortcut
 */

const isCmd = ({ metaKey }) => metaKey;

export default isCmd;
