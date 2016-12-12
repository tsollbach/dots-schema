import * as moment from 'moment'
import * as _ from 'lodash'

import {
    Validator,
    ValidationDefinition,
    ValidationResult,
    ValidationOptions,
    CleanOptions
}  from '../interfaces'
import { ComposedValidationResult } from '../composed-validation-result'
import { cleaned } from '../cleaned'

export class StringValidator implements Validator {

    public static RULES = {
        type: (value: any, key: string, definition: ValidationDefinition) => {
            if ((typeof value !== 'undefined' && value !== null) && typeof value !== 'string') {
                return {
                    property: key,
                    rule: 'type',
                    message: `Property ${key} must be of type String`
                }
            }
            return null
        },
        min: (value: any, key: string, definition: ValidationDefinition) => {
            if ((typeof value !== 'undefined' && value !== null) && (typeof definition.min === 'number') && value.length < definition.min) {
                return {
                    property: key,
                    rule: 'min',
                    message: `Property ${key} must be shorter than ${definition.min}`
                }
            }
            return null
        },
        max: (value: any, key: string, definition: ValidationDefinition) => {
            if ((typeof value !== 'undefined' && value !== null) && (typeof definition.max === 'number') && value.length > definition.max) {
                return {
                    property: key,
                    rule: 'max',
                    message: `Property ${key} must be longer than ${definition.max}`
                }
            }
            return null
        },
        regEx: (value: any, key: string, definition: ValidationDefinition) => {
            if ((typeof value !== 'undefined' && value !== null) && (definition.regEx instanceof RegExp) && !definition.regEx.test(value)) {
                return {
                    property: key,
                    rule: 'regEx',
                    message: `Property ${key} must match ${definition.regEx.toString()}`
                }
            }
            return null
        }
    }

    public static getValidatorsForKey(key: string, definition: ValidationDefinition, options: ValidationOptions, object?: any) {
        const validators: any = {
            type: cleaned(StringValidator.RULES.type, key, definition, options)
        }

        if (definition.min) {
            _.assign(validators, cleaned(StringValidator.RULES.min, key, definition, options))
        }

        if (definition.max) {
            _.assign(validators, cleaned(StringValidator.RULES.max, key, definition, options))
        }

        if (definition.regEx) {
            _.assign(validators, cleaned(StringValidator.RULES.regEx, key, definition, options))
        }

        return validators
    }

    validate(key: string, definition: ValidationDefinition, value: any, options: ValidationOptions): ValidationResult {
        const result = new ComposedValidationResult()
        const rules = StringValidator.RULES

        result.and(rules.type(value, key, definition))
        if (result.isValid()) {
            result.and(rules.min(value, key, definition))
            result.and(rules.max(value, key, definition))
            result.and(rules.regEx(value, key, definition))
        }

        return result
    }

    clean(definition: ValidationDefinition, value: any, options: CleanOptions, object: any): any {
        if (!options.autoConvert) {
            return value
        }
        if (typeof value !== 'string') {
            if (typeof value === 'number' || typeof value === 'boolean') {
                return value.toString()
            } else if (value instanceof Date) {
                if (typeof definition.dateFormat === 'string') {
                    return moment(value).format(definition.dateFormat)
                } else {
                    return moment(value).format()
                }
            }
        }

        if (typeof value === 'string') {
            if (options.trimStrings || definition.trim) {
                if (definition.trim !== false) {
                    value = value.trim()
                }
            }

            if (value.trim().length === 0 && (definition.removeEmpty || options.removeEmptyStrings)) {
                if (definition.removeEmpty !== false) {
                    value = null
                }
            }
        }

        return value
    }

}
