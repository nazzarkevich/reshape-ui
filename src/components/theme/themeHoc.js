import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from './themeContext';

export default function ThemeHoc (ComponentToWrap, componentName) {
    function ThemeComponent (props) {
        return (
            <ThemeContext.Consumer>
                {
                    theme => {
                        const componentTheme = componentName ?
                            theme[componentName] : {};

                        return (
                            <ComponentToWrap
                                {...props}
                                theme={{
                                    ...componentTheme,
                                    styles: theme.styles
                                }}
                            />
                        );
                    }
                }
            </ThemeContext.Consumer>
        );
    }

    ThemeComponent.displayName = `Theme(${ ComponentToWrap.displayName || 'Component' })`;
    ThemeComponent.propTypes = {
        style: PropTypes.shape({})
    };

    return ThemeComponent;
}
