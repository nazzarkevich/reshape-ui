import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TextFieldView from './view';
import stylesheet from './style';
import compileStyles from '../utils/compileStyles';

const propTypes = {
    value:     PropTypes.string.isRequired,
    id:        PropTypes.string,
    className: PropTypes.string,
    error:     PropTypes.bool,
    editable:  PropTypes.bool,
    disabled:  PropTypes.bool,
    onBlur:    PropTypes.func,
    onClick:   PropTypes.func,
    onInput:   PropTypes.func,
    onKeyDown: PropTypes.func
};

const defaultProps = {
    editable: false,
    disabled: false
};

class TextField extends PureComponent {
    constructor (props) {
        super(props);

        // forward ref need to move caret to the end
        this.nativeElement = React.createRef();
    }

    static displayName = 'TextField';

    static propTypes = propTypes;

    static defaultProps = defaultProps;

    componentDidUpdate (prevProps) {
        const { editable } = this.props;

        if (prevProps.editable !== editable) {
            if (editable) this.moveCaretToEnd();
        }
    }

    componentDidMount () {
        const { editable } = this.props;

        if (editable) {
            this.moveCaretToEnd();
        }
    }

    moveCaretToEnd () {
        const node = this.getNode();

        if (node) this.setEndOfContenteditable(node);
    }

    setEndOfContenteditable (contentEditableElement) {
        let range = null, selection = null;
        //Firefox, Chrome, Opera, Safari, IE 9+
        if (document.createRange) {
            range = document.createRange();//Create a range (a range is a like the selection but invisible)
            range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
            // range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
            selection = window.getSelection();//get the selection object (allows you to change selection)
            selection.removeAllRanges();//remove any selections already made
            selection.addRange(range);//make the range you have just created the visible selection
        } else if (document.selection) {
            range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
            range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
            range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
            range.select();//Select the range (make it the visible selection
        }
    }

    handleClick = event => {
        const { onClick, disabled } = this.props;

        if (typeof onClick === 'function' && !disabled) {
            onClick(event);
        }
    };

    handleInput = event => {
        const { onInput } = this.props;

        if (typeof onInput === 'function') onInput(event);
    };

    handleBlur = event => {
        const { onBlur } = this.props;

        if (typeof onBlur === 'function') onBlur(event);
    };

    handleKeyDown = event => {
        const { onKeyDown } = this.props;

        if (typeof onKeyDown === 'function') onKeyDown(event);
    };

    getNode () {
        return this.nativeElement.current;
    }

    render () {
        const {
            id,
            value,
            className,
            editable
        } = this.props;

        const componentStyles = compileStyles(
            stylesheet, this.props, this.state
        );

        const attributes = {
            id,
            ref: this.nativeElement
        };

        const tagProps = {
            value,
            className,
            editable,
            onClick:   this.handleClick,
            onInput:   this.handleInput,
            onBlur:    this.handleBlur,
            onKeyDown: this.handleKeyDown,
            attributes,
            componentStyles
        };

        return <TextFieldView {...tagProps} />;
    }
}

export default TextField;
