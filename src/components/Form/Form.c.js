import Base from '../Base';
import { ICON_STATUS } from '../index';
import { isComposedIconStatus } from '../utils';

class Form extends Base {
    static displayName = 'BaseForm';

    // componentDidUpdate () {
    //     const { errors, iconStatus } = this.state;
    //
    //     if (errors) {
    //         const isValidationResetRequired = this.checkValidationState(errors);
    //         const isErrorsExist = this.checkErrors(errors);
    //
    //         if (isValidationResetRequired) {
    //             this.resetValidationState();
    //         }
    //
    //         if (isErrorsExist && iconStatus !== ICON_STATUS.ERROR) {
    //             this.setState({
    //                 iconStatus: ICON_STATUS.ERROR
    //             });
    //         }
    //
    //         if (!isErrorsExist && iconStatus === ICON_STATUS.ERROR) {
    //             this.setState({ iconStatus: this.props.iconStatus });
    //         }
    //     }
    // }

    componentDidUpdate () {
        const { errors, errorStatus } = this.state;
        const { iconStatus } = this.props;

        if (errors) {
            const isValidationResetRequired = this.checkValidationState(errors);
            const isErrorsExist = this.checkErrors(errors);

            if (isValidationResetRequired) {
                this.resetValidationState();
            }

            if (isErrorsExist && errorStatus !== ICON_STATUS.ERROR) {
                this.setState({
                    errorStatus: ICON_STATUS.ERROR
                });
                
                if (isComposedIconStatus(iconStatus)) {
                    this.setState({ iconStatus: this.setErrorStatus() });
                } else {
                    this.setState({ iconStatus: ICON_STATUS.ERROR });
                }
            }

            if (!isErrorsExist && errorStatus === ICON_STATUS.ERROR) {
                this.setState({
                    iconStatus,
                    errorStatus: null
                });
            }
        }
    }

    setErrorStatus = () => {
        const { errors } = this.state;
        const { iconStatus } = this.props;

        let result = { ...iconStatus };

        for (let key in errors) {
            if (
                errors.hasOwnProperty(key) &&
                errors[key] &&
                iconStatus.hasOwnProperty(key)
            ) {
                result = {
                    ...iconStatus,
                    ...result,
                    [key]: ICON_STATUS.ERROR
                };
            }
        }

        return result;
    }

    checkErrors = errors => Object
        .keys(errors)
        .some(i => errors[i] === true);

    checkValidationState = errors => {
        const hasInvalidFields = this.checkErrors(errors);

        const isEmpty = this.fieldList.every(i => this.state[i] === null);

        return isEmpty && hasInvalidFields;
    }

    setupValidation = rules => {
        this.validationRules = rules;
        this.fieldList = Object.keys(rules);

        const errors = this.getInitialValidationState();

        this.state = { ...this.state, errors };
    }

    getInitialValidationState = () => {
        const fields = Object.keys(this.validationRules);

        return fields.reduce((result, field) => {
            result[field] = false;

            return result;
        }, {});
    }

    resetValidationState = () => {
        this.setState({
            errors: this.getInitialValidationState()
        });
    }

    validate = (field, value) => {
        const isEmptyValue = value === '';

        const rule = this.validationRules[field];

        let result = { strict: false, loose: false };

        if (!isEmptyValue) {
            rule.forEach(i => {
                if (typeof i === 'function') {
                    const matchResult = i(value);

                    if (
                        typeof matchResult === 'boolean'
                    ) {
                        if (matchResult === true) {
                            result.strict = true;
                            result.loose = true;
                        } else {
                            result.strict = false;
                            result.loose = false;
                        }
                    }
                    if (matchResult.strict) result.strict = true;
                    if (matchResult.loose) result.loose = true;
                } else {
                    if (i === value) result.strict = true;
                    if (i.startsWith(value)) result.loose = true;
                }
            });
        }

        const isInvalidValue = !isEmptyValue && !result.loose;

        this.setState(prevState => ({
            errors: {
                ...prevState.errors,
                [field]: isInvalidValue
            }
        }));

        return isEmptyValue || result.strict;
    }

    // bindFields = (name, fields) => {
    //     if (Array.isArray(fields) && fields.length) {
    //         this[name] = fields;
    //     }
    // }

    // updateBoundFields () {
    //     const stateFields = Object.keys(this.state);
    //     const observableFields = stateFields.filter(name => this[name]);
    //
    //     observableFields.forEach(name => {
    //         const boundFields = this[name];
    //
    //         const result = boundFields.reduce((accumulator, name) => {
    //             const value = this.state[name];
    //
    //             if (value) accumulator.push(value);
    //
    //             return accumulator;
    //         }, []);
    //
    //         const isActive = !!result.length;
    //
    //         if (isActive && !this.state[name]) {
    //             this.setState({ [name]: true });
    //         } else if (!isActive && this.state[name]) {
    //             this.setState({ [name]: false });
    //         }
    //     });
    // }
}

export default Form;
