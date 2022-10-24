/**
 * @typedef {Object} KeyboardEvent
 * @property {boolean} ctrlKey  :: Indicates whether the ctrl key is being pressed
 */

/**
 * @param   {KeyboardEvent} e :: The occurred keyboard event
 * @returns {boolean}         :: Boolean that indicates whether a given event corresponds to ctrl shortcut
 */

const isCtrl = ({ ctrlKey }) => ctrlKey;

export default isCtrl;
