import moment from 'moment'

import {
    ValidationDefinition,
    ValidationResult,
    ValidationOptions
}  from '../interfaces'
import { ComposedValidationResult } from '../composed-validation-result'
import { cleaned } from '../cleaned'

export class DateValidator {

     public static RULES = {
        type: (value: any, key: string, definition: ValidationDefinition) => {
            if ((typeof value !== 'undefined' && value !== null) && !(value instanceof Date)) {
                return {
                    property: key,
                    rule: 'type',
                    message: `Property ${key} must be of type Date`
                }
            }
            return null
        },
        before: (value: any, key: string, definition: ValidationDefinition) => {
            if (value instanceof Date && (definition.before instanceof Date) && !moment(value).isBefore(definition.before)) {
                return {
                    property: key,
                    rule: 'type',
                    message: `Property ${key} must be a date before ${definition.before}`
                }
            }
            return null
        },
        after: (value: any, key: string, definition: ValidationDefinition) => {
            if (value instanceof Date && (definition.after instanceof Date) && !moment(value).isAfter(definition.after)) {
                return {
                    property: key,
                    rule: 'type',
                    message: `Property ${key} must be a date after ${definition.after}`
                }
            }
            return null
        }
    }

    public static getValidatorsForKey(key: string, definition: ValidationDefinition, options: ValidationOptions, object?: any) {
        const validators: any = {
            type: cleaned(DateValidator.RULES.type, key, definition, options)
        }

        if (definition.before) {
            validators.before = cleaned(DateValidator.RULES.before, key, definition, options)
        }

        if (definition.after) {
            validators.after = cleaned(DateValidator.RULES.after, key, definition, options)
        }

        return validators
    }

    public static clean(definition: ValidationDefinition, value: any, options: ValidationOptions, object: any): any {
        if (!options.castTypes) {
            return value
        }
        if (typeof value === 'string') {
            if (typeof definition.dateFormat === 'string') {
                return moment(value, definition.dateFormat).toDate()
            } else {
                return moment(value).toDate()
            }
        }
        return value
    }
}
