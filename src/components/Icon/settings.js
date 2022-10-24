import styles from '../styles';

const { iconSmall, iconMedium } = styles;

const smallIcon = {
    svg: {
        width: iconSmall,
        height: iconSmall,
        viewBox: `0 0 ${iconSmall} ${iconSmall}`
    }
};

const mediumIcon = {
    svg: {
        width: iconMedium,
        height: iconMedium,
        viewBox: `0 0 ${iconMedium} ${iconMedium}`
    }
};

const settings = {
    small: smallIcon,
    medium: mediumIcon,
};

export default settings;
