"use strict";
var _ = require('lodash');
var cleaned_1 = require('../cleaned');
var common_rules_1 = require('./common-rules');
var NumberValidator = (function () {
    function NumberValidator() {
    }
    NumberValidator.getValidatorsForKey = function (key, definition, options, object) {
        var validators = {
            type: cleaned_1.cleaned(NumberValidator.RULES.type, key, definition, options)
        };
        if (typeof definition.min !== 'undefined') {
            validators.min = cleaned_1.cleaned(NumberValidator.RULES.min, key, definition, options);
        }
        if (typeof definition.max !== 'undefined') {
            validators.max = cleaned_1.cleaned(NumberValidator.RULES.max, key, definition, options);
        }
        return validators;
    };
    NumberValidator.clean = function (definition, value, options, object) {
        if (!options.autoConvert) {
            return value;
        }
        if (typeof value === 'string') {
            var result = parseFloat(value);
            if (_.isNaN(result)) {
                return value;
            }
            value = result;
        }
        if (typeof value === 'number') {
            if (definition.decimal) {
                return value;
            }
            else {
                var rounding = definition.rounding ? definition.rounding : options.rounding;
                switch (rounding) {
                    case 'round':
                        return Math.round(value);
                    case 'floor':
                        return Math.floor(value);
                    case 'ceil':
                        return Math.ceil(value);
                }
            }
        }
        return value;
    };
    NumberValidator.RULES = {
        type: function (value, key, definition) {
            if ((typeof value !== 'undefined' && value !== null) && typeof value !== 'number') {
                return {
                    property: key,
                    rule: 'type',
                    message: "Property " + key + " must be of type Number"
                };
            }
            return null;
        },
        min: common_rules_1.min,
        max: common_rules_1.max
    };
    return NumberValidator;
}());
exports.NumberValidator = NumberValidator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRvcnMvbnVtYmVyLXZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBWSxDQUFDLFdBQU0sUUFFbkIsQ0FBQyxDQUYwQjtBQVUzQix3QkFBd0IsWUFDeEIsQ0FBQyxDQURtQztBQUNwQyw2QkFBeUIsZ0JBRXpCLENBQUMsQ0FGd0M7QUFFekM7SUFBQTtJQWtFQSxDQUFDO0lBakRpQixtQ0FBbUIsR0FBakMsVUFBa0MsR0FBVyxFQUFFLFVBQWdDLEVBQUUsT0FBMEIsRUFBRSxNQUFZO1FBQ3JILElBQU0sVUFBVSxHQUFRO1lBQ3BCLElBQUksRUFBRSxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDO1NBQ3RFLENBQUE7UUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLFVBQVUsQ0FBQyxHQUFHLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN4QyxVQUFVLENBQUMsR0FBRyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUNqRixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxVQUFVLENBQUMsR0FBRyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDeEMsVUFBVSxDQUFDLEdBQUcsR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDakYsQ0FBQztRQUVELE1BQU0sQ0FBQyxVQUFVLENBQUE7SUFDckIsQ0FBQztJQUVhLHFCQUFLLEdBQW5CLFVBQW9CLFVBQWdDLEVBQUUsS0FBVSxFQUFFLE9BQXFCLEVBQUUsTUFBVztRQUNoRyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUE7UUFDaEIsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxNQUFNLEdBQVcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBRXRDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixNQUFNLENBQUMsS0FBSyxDQUFBO1lBQ2hCLENBQUM7WUFFRCxLQUFLLEdBQUcsTUFBTSxDQUFBO1FBQ2xCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzVCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixNQUFNLENBQUMsS0FBSyxDQUFBO1lBQ2hCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixJQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQTtnQkFDN0UsTUFBTSxDQUFBLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDZCxLQUFLLE9BQU87d0JBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBQzVCLEtBQUssT0FBTzt3QkFDUixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtvQkFDNUIsS0FBSyxNQUFNO3dCQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUMvQixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFBO0lBQ2hCLENBQUM7SUE5RGMscUJBQUssR0FBRztRQUNuQixJQUFJLEVBQUUsVUFBQyxLQUFVLEVBQUUsR0FBVyxFQUFFLFVBQWdDO1lBQzVELEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUssV0FBVyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNoRixNQUFNLENBQUM7b0JBQ0gsUUFBUSxFQUFFLEdBQUc7b0JBQ2IsSUFBSSxFQUFFLE1BQU07b0JBQ1osT0FBTyxFQUFFLGNBQVksR0FBRyw0QkFBeUI7aUJBQ3BELENBQUE7WUFDTCxDQUFDO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQTtRQUNmLENBQUM7UUFDRCx1QkFBRztRQUNILHVCQUFHO0tBQ04sQ0FBQTtJQW1ETCxzQkFBQztBQUFELENBbEVBLEFBa0VDLElBQUE7QUFsRVksdUJBQWUsa0JBa0UzQixDQUFBIiwiZmlsZSI6InZhbGlkYXRvcnMvbnVtYmVyLXZhbGlkYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICAgIFZhbGlkYXRpb25EZWZpbml0aW9uLFxuICAgIFZhbGlkYXRpb25SZXN1bHQsXG4gICAgVmFsaWRhdGlvbkVycm9yLFxuICAgIFZhbGlkYXRpb25PcHRpb25zLFxuICAgIENsZWFuT3B0aW9uc1xufSAgZnJvbSAnLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IENvbXBvc2VkVmFsaWRhdGlvblJlc3VsdCB9IGZyb20gJy4uL2NvbXBvc2VkLXZhbGlkYXRpb24tcmVzdWx0J1xuaW1wb3J0IHsgY2xlYW5lZCB9IGZyb20gJy4uL2NsZWFuZWQnXG5pbXBvcnQgeyBtaW4sIG1heCB9IGZyb20gJy4vY29tbW9uLXJ1bGVzJ1xuXG5leHBvcnQgY2xhc3MgTnVtYmVyVmFsaWRhdG9yIHtcblxuICAgICBwdWJsaWMgc3RhdGljIFJVTEVTID0ge1xuICAgICAgICB0eXBlOiAodmFsdWU6IGFueSwga2V5OiBzdHJpbmcsIGRlZmluaXRpb246IFZhbGlkYXRpb25EZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAoKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgIT09IG51bGwpICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eToga2V5LFxuICAgICAgICAgICAgICAgICAgICBydWxlOiAndHlwZScsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBQcm9wZXJ0eSAke2tleX0gbXVzdCBiZSBvZiB0eXBlIE51bWJlcmBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9LFxuICAgICAgICBtaW4sXG4gICAgICAgIG1heFxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VmFsaWRhdG9yc0ZvcktleShrZXk6IHN0cmluZywgZGVmaW5pdGlvbjogVmFsaWRhdGlvbkRlZmluaXRpb24sIG9wdGlvbnM6IFZhbGlkYXRpb25PcHRpb25zLCBvYmplY3Q/OiBhbnkpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yczogYW55ID0ge1xuICAgICAgICAgICAgdHlwZTogY2xlYW5lZChOdW1iZXJWYWxpZGF0b3IuUlVMRVMudHlwZSwga2V5LCBkZWZpbml0aW9uLCBvcHRpb25zKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkZWZpbml0aW9uLm1pbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvcnMubWluID0gY2xlYW5lZChOdW1iZXJWYWxpZGF0b3IuUlVMRVMubWluLCBrZXksIGRlZmluaXRpb24sIG9wdGlvbnMpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGRlZmluaXRpb24ubWF4ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdmFsaWRhdG9ycy5tYXggPSBjbGVhbmVkKE51bWJlclZhbGlkYXRvci5SVUxFUy5tYXgsIGtleSwgZGVmaW5pdGlvbiwgb3B0aW9ucylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWxpZGF0b3JzXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjbGVhbihkZWZpbml0aW9uOiBWYWxpZGF0aW9uRGVmaW5pdGlvbiwgdmFsdWU6IGFueSwgb3B0aW9uczogQ2xlYW5PcHRpb25zLCBvYmplY3Q6IGFueSk6IGFueSB7XG4gICAgICAgIGlmICghb3B0aW9ucy5hdXRvQ29udmVydCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IG51bWJlciA9IHBhcnNlRmxvYXQodmFsdWUpXG5cbiAgICAgICAgICAgIGlmIChfLmlzTmFOKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUgPSByZXN1bHRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbi5kZWNpbWFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdW5kaW5nID0gZGVmaW5pdGlvbi5yb3VuZGluZyA/IGRlZmluaXRpb24ucm91bmRpbmcgOiBvcHRpb25zLnJvdW5kaW5nXG4gICAgICAgICAgICAgICAgc3dpdGNoKHJvdW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JvdW5kJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICBjYXNlICdmbG9vcic6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2VpbCc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxufVxuIl19
