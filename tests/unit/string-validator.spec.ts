require('app-module-path').addPath(__dirname + '/../../build/module/')


import { expect } from 'chai'
import * as moment from 'moment'

import { Schema, ValidationResult } from 'dots-schema'

describe('StringValidator', () => {

    it('can validate a string type', () => {
        const schema = new Schema({
            string: {
                type: String,
                min: 1,
                max: 3
            }
        })

        let result = schema.validate({
            string: '123'
        }) as ValidationResult

        expect(result.isValid()).to.equal(true)

        result = schema.validate({
            string: 1
        }) as ValidationResult

        expect(result.isValid()).to.equal(false)
        expect(result.getErrors().length).to.equal(1)

        let error = result.getErrors()[0]

        expect(error.property).to.equal('string')
        expect(error.rule).to.equal('type')

        result = schema.validate({
            string: ''
        }) as ValidationResult

        expect(result.isValid()).to.equal(false)
        expect(result.getErrors().length).to.equal(1)
        expect(result.getErrors()[0].rule).to.equal('min')
        expect(result.getErrors()[0].property).to.equal('string')

        result = schema.validate({
            string: '1234'
        }) as ValidationResult

        expect(result.isValid()).to.equal(false)
        expect(result.getErrors().length).to.equal(1)
        expect(result.getErrors()[0].rule).to.equal('max')
        expect(result.getErrors()[0].property).to.equal('string')
    })

    it('can validate using a regex', () => {
        const schema = new Schema({
            string: {
                type: String,
                regEx: Schema.RegEx.Email
            }
        })

        let result = schema.validate({
            string: 'test@example.com'
        }) as ValidationResult

        expect(result.isValid()).to.equal(true)

        result = schema.validate({
            string: 'testexample.com'
        }) as ValidationResult

        expect(result.isValid()).to.equal(false)
        expect(result.getErrors().length).to.equal(1)
        expect(result.getErrors()[0].rule).to.equal('regEx')
        expect(result.getErrors()[0].property).to.equal('string')
    })

    it('can clean a string', () => {
        const schema = new Schema({
            string: {
                type: String
            },
            stringTrimmed: {
                type: String
            },
            stringEmpty: {
                type: String
            },
            emptyWithDefault: {
                type: String,
                defaultValue: 'default'
            }
        })

        let result = schema.clean({
            string: 1,
            stringTrimmed: '  test     ',
            stringEmpty: '   ',
            emptyWithDefault: '  '
        })

        expect(result.string).to.equal('1')
        expect(result.stringTrimmed).to.equal('test')
        expect(result.stringEmpty).to.equal(null)
        expect(result.emptyWithDefault).to.equal('default')

        const date = new Date()
        result = schema.clean({
            string: date,
            stringTrimmed: '  test     ',
            stringEmpty: '   ',
            emptyWithDefault: '  '
        }, {
            trimStrings: false
        })

        expect(result.string).to.equal(moment(date).format())
        expect(result.stringTrimmed).to.equal('  test     ')
        expect(result.stringEmpty).to.equal(null)
    })

})
