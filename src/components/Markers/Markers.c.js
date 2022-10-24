import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import stylesheet from './style';
import MarkersView from './view';
import compileStyles from '../utils/compileStyles';
import _isEqual from 'lodash/isEqual';

import {
    getPlatform,
    isWindows,
    isMacOS
} from '../utils/platform';

import {
    isCmd,
    isCtrl
} from '../controllers';

class Markers extends PureComponent {
    static displayName = 'Markers';

    static propTypes = {
        crossAxisDegree: PropTypes.number,
        mainAxisDegree:  PropTypes.number,
        hideCrossAxis:   PropTypes.bool,
        className:       PropTypes.string,
        secondary:       PropTypes.bool,
        onChange:        PropTypes.func,
        onClick:         PropTypes.func,
        value:           PropTypes.arrayOf(
            PropTypes.string
        ),
        id:              PropTypes.string
    };

    static defaultProps = {
        value:         [],
        hideCrossAxis: false
    };

    constructor (props) {
        super(props);

        this.state = {
            markerList: props.value
        };
    }

    componentDidUpdate (prevProps) {
        const { value } = this.props;
        // Bind to parent component state
        if (!_isEqual(prevProps.value, value)) {
            this.setState({ markerList: value });
        }
    }

    handleCmdClick = event => {
        const { target } = event;
        const id = target.dataset.id;

        this.setState({ markerList: [id] }, this.onChange);
    };

    handleClick = event => {
        const { target, nativeEvent } = event;
        const id = target.dataset.id;

        const { markerList } = this.state;

        const platform = getPlatform();

        if (
            isMacOS(platform) && isCmd(nativeEvent) ||
            isWindows(platform) && isCtrl(nativeEvent)
        ) {
            this.handleCmdClick(event);
        } else {
            if (id && markerList.includes(id)) {
                this.setState(prevState => ({
                    markerList: prevState
                        .markerList
                        .filter(marker => marker !== id)
                }), this.onChange);
            } else {
                this.setState(prevState => ({
                    markerList: [
                        ...prevState.markerList,
                        id
                    ]
                }), this.onChange);
            }
        }
    };

    onChange = () => {
        const { onChange } = this.props;
        const { markerList } = this.state;

        if (typeof onChange === 'function') {
            onChange(markerList);
        }
    };

    render () {
        const { markerList } = this.state;
        const componentStyles = compileStyles(stylesheet,
            this.props,
            this.state
        );

        const props = {
            ...this.props,
            markerList,
            onClick: this.handleClick,
            componentStyles
        };

        return <MarkersView {...props}/>;
    }
}

export default Markers;
