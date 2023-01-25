import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TagView from './view';
import stylesheet from './style';
import compileStyles from '../utils/compileStyles';

class Tag extends PureComponent {
    constructor (props) {
        super(props);

        this.state = {
            editable: props.editable
        };
        // forward ref need to move caret to the end
        this.nativeElement = React.createRef();
    }

    static displayName = 'Tag';

    static propTypes = {
        id:            PropTypes.string,
        className:     PropTypes.string,
        startIcon:     PropTypes.node,
        active:        PropTypes.bool,
        error:         PropTypes.bool,
        editable:      PropTypes.bool,
        primary:       PropTypes.bool,
        secondary:     PropTypes.bool,
        validate:      PropTypes.func,
        onBlur:        PropTypes.func,
        onClick:       PropTypes.func,
        onInput:       PropTypes.func,
        onKeyDown:     PropTypes.func,
        innerRef:      PropTypes.object,
        onMouseDown:   PropTypes.func,
        onContextMenu: PropTypes.func
    };

    static defaultProps = {
        editable: false
    };

    componentDidUpdate (prevProps) {
        const { editable } = this.props;

        if (prevProps.editable !== editable) {
            if (editable) this.moveCaretToEnd();

            this.setState({ editable });
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

        if (node) {
            this.setEndOfContenteditable(node);
        }
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
        const { onClick } = this.props;

        if (typeof onClick === 'function') {
            onClick(event);
        }
    };

    handleContextMenuClick = event => {
        const { onContextMenu } = this.props;

        if (typeof onContextMenu === 'function') {
            onContextMenu(event);
        }
    };

    handleInput = event => {
        const { onInput } = this.props;
        const { target } = event;

        if (target && typeof onInput === 'function') {
            onInput(event);
        }
    };

    handleBlur = event => {
        const { onBlur } = this.props;

        if (typeof onBlur === 'function') {
            onBlur(event);
        }
    };

    handleKeyDown = event => {
        const { onKeyDown } = this.props;

        if (typeof onKeyDown === 'function') {
            onKeyDown(event);
        }
    };

    render () {
        const {
            id,
            children,
            editable,
            className,
            startIcon,
            onMouseDown
        } = this.props;

        const componentStyles = compileStyles(
            stylesheet, this.props, this.state
        );

        const attributes = {
            id
        };

        const tagProps = {
            startIcon,
            className,
            editable,
            onMouseDown,
            onClick:       this.handleClick,
            onInput:       this.handleInput,
            onBlur:        this.handleBlur,
            onKeyDown:     this.handleKeyDown,
            onContextMenu: this.handleContextMenuClick,
            componentStyles,
            attributes
        };

        return (
            <TagView {...tagProps} ref={this.props.innerRef}>
                {children}
            </TagView>
        );
    }
}

export default Tag;
