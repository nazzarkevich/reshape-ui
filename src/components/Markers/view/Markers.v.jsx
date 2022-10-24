import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Axis, Marker } from '../style';

import classNames from 'classnames';

import { mainAxisIcons, crossAxisIcons } from '../markers.ct';

const propTypes = {
    componentStyles: PropTypes.shape({}),
    hideCrossAxis:   PropTypes.bool,
    markerList:      PropTypes.arrayOf(PropTypes.string),
    className:       PropTypes.string,
    onClick:         PropTypes.func,
    id:              PropTypes.string
};

const MarkersView = props => {
    const {
        id,
        onClick,
        className,
        markerList,
        hideCrossAxis,
        componentStyles
    } = props;

    return (
        <Wrapper
            id={id}
            onClick={onClick}
            className={className}
            styles={componentStyles}
        >
            <Axis
                className="main-axis"
                styles={componentStyles.mainAxis}
            >
                {
                    mainAxisIcons.map(marker =>
                        <Marker
                            key={marker}
                            className={classNames({
                                active: markerList.includes(marker)
                            })}
                            data-id={marker}
                            styles={componentStyles.marker}
                        />
                    )
                }
            </Axis>
            {
                !hideCrossAxis ?
                    <Axis
                        className="cross-axis"
                        styles={componentStyles.crossAxis}
                    >
                        {
                            crossAxisIcons.map(marker =>
                                <Marker
                                    key={marker}
                                    className={classNames({
                                        active: markerList.includes(marker)
                                    })}
                                    data-id={marker}
                                    styles={componentStyles.marker}
                                />
                            )
                        }
                    </Axis> : null
            }
        </Wrapper>
    );
};

MarkersView.propTypes = propTypes;

export default MarkersView;
