import React, { Component } from 'react';

class Base extends Component {
    constructor (props) {
        super(props);
    }

    bindProps = (name, onChange, props = {}) => {
        let value = null,
            onChangeCallback = null;

        if (name) {
            value = this.getBoundValue(name);

            if (typeof onChange === 'function') {
                onChangeCallback = onChange;
            }
        }

        return {
            value,
            onChange: onChangeCallback,
            // common props
            ...props
        };
    };

    getBoundValue (name) {
        return this.state ? this.state[name] : null;
    }

    // Old bind Prop
    // bindProps = (name, props = {}) => {
    //     this.crefs = this.crefs || {};
    //
    //     let ref,
    //         // error = false,
    //         attribute = null,
    //         value = null,
    //         checked = null,
    //         onChange = null;
    //
    //     if (name) {
    //         ref = this.bindElementRef.bind(this);
    //
    //         attribute = name;
    //         // error = !!this._matchError({name});
    //         value = this.state ? this.state[name] : null;
    //         checked = typeof value === 'boolean' ? value : null;
    //         onChange = (event = {}) => {
    //             let value;
    //
    //             if (event.target) {
    //                 if (event.target.type === 'checkbox') {
    //                     value = event.target.checked;
    //                 } else {
    //                     value = event.target.value;
    //                 }
    //             } else {
    //                 value = event;
    //             }
    //
    //             return this.setState({[name]: value});
    //         };
    //     }
    //
    //     return {
    //         elementRef: ref,
    //         bind: false,
    //         // error,
    //         attribute,
    //         value,
    //         checked,
    //         onChange,
    //         // common props
    //         ...props,
    //     };
    // };

    bindElementRef (el) {
        this.crefs = this.crefs || {};

        if (el !== null) {
            if (el instanceof HTMLElement && el.name) {
                this.crefs[el.name] = el;
            } else if (el.props && el.props.attribute) {
                this.crefs[el.props.attribute] = el;
            }
        }
    }

    static displayName = 'BaseComponent';
}

export default Base;
