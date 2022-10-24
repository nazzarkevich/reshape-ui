import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RowView from './view';

class Row extends Component {
    // shouldComponentUpdate (nextProps) {
    //     // nextProps
    //     const { index, data: nextData } = nextProps;
    //     const {
    //         selectedId: nextSelectedId,
    //         optionIndex: nextOptionIndex,
    //         options: nextOptions
    //     } = nextData;
    //
    //     const { data } = this.props;
    //     const { options, selectedId, optionIndex } = data;
    //
    //     const option = options[index] || {};
    //     const { id } = option;
    //
    //     let result = false;
    //
    //     if (nextSelectedId === id && selectedId !== id) result = true;
    //
    //     if (nextSelectedId !== id && selectedId === id) result = true;
    //
    //     if (nextOptionIndex === this.props.index && optionIndex !== index) {
    //         result = true;
    //     }
    //
    //     if (nextOptionIndex !== this.props.index && optionIndex === index) {
    //         result = true;
    //     }
    //
    //     if (nextOptions.length !== options.length) result = true;
    //
    //     return result;
    // }

    static propTypes = {
        iconClassName: PropTypes.string
    };

    constructor (props) {
        super(props);

        this.state = {
            hover: false
        }
    }

    handleMouseOver = () => {
        this.setState({ hover: true });
    }

    handleMouseLeave = () => {
        this.setState({ hover: false });
    }

    render () {
        return (
            <RowView
                { ...this.props }
                // hover={this.state}
                // onMouseOver={this.handleMouseOver}
                // onMouseLeave={this.handleMouseLeave}
            />
        );
    }
}

export default Row;