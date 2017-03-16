import isObject from 'lodash.isobject';
import isArray from 'lodash.isarray';
import { ComposedValidationResult } from '../composed-validation-result';
import { Schema } from '../schema';
import { cleaned } from '../cleaned';
var SchemaValidator = (function () {
    function SchemaValidator() {
    }
    SchemaValidator.getValidatorsForKey = function (key, definition, options, object) {
        return {
            type: cleaned(SchemaValidator.RULES.type, key, definition, options),
            schema: cleaned(SchemaValidator.RULES.schema, key, definition, options)
        };
    };
    SchemaValidator.clean = function (definition, value, options, object) {
        var schema = definition.type;
        return schema.clean(value, options);
    };
    return SchemaValidator;
}());
export { SchemaValidator };
SchemaValidator.RULES = {
    type: function (value, key, definition) {
        if ((typeof value !== 'undefined' && value !== null) && (!(isObject(value) || isArray(value)))) {
            return {
                property: key,
                rule: 'type',
                message: "Property " + key + " must be an Object or an Array of Objects"
            };
        }
        return null;
    },
    schema: function (value, key, definition, options) {
        if (value instanceof Schema || typeof value === 'object') {
            var schema = definition.type;
            var result = new ComposedValidationResult();
            result.and(schema.validate(value, options), key);
            return result;
        }
        return null;
    }
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kb3RzLXNjaGVtYS92YWxpZGF0b3JzL3NjaGVtYS12YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxRQUFRLE1BQU0saUJBQWlCLENBQUE7QUFDdEMsT0FBTyxPQUFPLE1BQU0sZ0JBQWdCLENBQUE7QUFPcEMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUE7QUFDeEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQUNsQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFBO0FBRXBDO0lBQUE7SUFvQ0EsQ0FBQztJQVppQixtQ0FBbUIsR0FBakMsVUFBa0MsR0FBVyxFQUFFLFVBQWdDLEVBQUUsT0FBMEIsRUFBRSxNQUFZO1FBQ3JILE1BQU0sQ0FBQztZQUNILElBQUksRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUM7WUFDbkUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQztTQUMxRSxDQUFBO0lBQ0wsQ0FBQztJQUVhLHFCQUFLLEdBQW5CLFVBQW9CLFVBQWdDLEVBQUUsS0FBVSxFQUFFLE9BQTBCLEVBQUUsTUFBVztRQUNyRyxJQUFNLE1BQU0sR0FBVyxVQUFVLENBQUMsSUFBYyxDQUFBO1FBQ2hELE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBRUwsc0JBQUM7QUFBRCxDQXBDQSxBQW9DQzs7QUFsQ2lCLHFCQUFLLEdBQUc7SUFDbEIsSUFBSSxFQUFFLFVBQUMsS0FBVSxFQUFFLEdBQVcsRUFBRSxVQUFnQztRQUM1RCxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxLQUFLLFdBQVcsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdGLE1BQU0sQ0FBQztnQkFDSCxRQUFRLEVBQUUsR0FBRztnQkFDYixJQUFJLEVBQUUsTUFBTTtnQkFDWixPQUFPLEVBQUUsY0FBWSxHQUFHLDhDQUEyQzthQUN0RSxDQUFBO1FBQ0wsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUE7SUFDZixDQUFDO0lBQ0QsTUFBTSxFQUFFLFVBQUMsS0FBVSxFQUFFLEdBQVcsRUFBRSxVQUFnQyxFQUFFLE9BQTBCO1FBQzFGLEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxNQUFNLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN2RCxJQUFNLE1BQU0sR0FBVyxVQUFVLENBQUMsSUFBYyxDQUFBO1lBQ2hELElBQU0sTUFBTSxHQUFHLElBQUksd0JBQXdCLEVBQUUsQ0FBQTtZQUM3QyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ2hELE1BQU0sQ0FBQyxNQUFNLENBQUE7UUFDakIsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUE7SUFDZixDQUFDO0NBQ0osQ0FBQSIsImZpbGUiOiJ2YWxpZGF0b3JzL3NjaGVtYS12YWxpZGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaXNPYmplY3QgZnJvbSAnbG9kYXNoLmlzb2JqZWN0J1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnbG9kYXNoLmlzYXJyYXknXG5cbmltcG9ydCB7XG4gICAgVmFsaWRhdGlvbkRlZmluaXRpb24sXG4gICAgVmFsaWRhdGlvblJlc3VsdCxcbiAgICBWYWxpZGF0aW9uT3B0aW9uc1xufSAgZnJvbSAnLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IENvbXBvc2VkVmFsaWRhdGlvblJlc3VsdCB9IGZyb20gJy4uL2NvbXBvc2VkLXZhbGlkYXRpb24tcmVzdWx0J1xuaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgY2xlYW5lZCB9IGZyb20gJy4uL2NsZWFuZWQnXG5cbmV4cG9ydCBjbGFzcyBTY2hlbWFWYWxpZGF0b3Ige1xuXG4gICAgcHVibGljIHN0YXRpYyBSVUxFUyA9IHtcbiAgICAgICAgdHlwZTogKHZhbHVlOiBhbnksIGtleTogc3RyaW5nLCBkZWZpbml0aW9uOiBWYWxpZGF0aW9uRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKCh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlICE9PSBudWxsKSAmJiAoIShpc09iamVjdCh2YWx1ZSkgfHwgaXNBcnJheSh2YWx1ZSkpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBrZXksXG4gICAgICAgICAgICAgICAgICAgIHJ1bGU6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYFByb3BlcnR5ICR7a2V5fSBtdXN0IGJlIGFuIE9iamVjdCBvciBhbiBBcnJheSBvZiBPYmplY3RzYFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHNjaGVtYTogKHZhbHVlOiBhbnksIGtleTogc3RyaW5nLCBkZWZpbml0aW9uOiBWYWxpZGF0aW9uRGVmaW5pdGlvbiwgb3B0aW9uczogVmFsaWRhdGlvbk9wdGlvbnMpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFNjaGVtYSB8fCB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NoZW1hOiBTY2hlbWEgPSBkZWZpbml0aW9uLnR5cGUgYXMgU2NoZW1hXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IENvbXBvc2VkVmFsaWRhdGlvblJlc3VsdCgpXG4gICAgICAgICAgICAgICAgcmVzdWx0LmFuZChzY2hlbWEudmFsaWRhdGUodmFsdWUsIG9wdGlvbnMpLCBrZXkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VmFsaWRhdG9yc0ZvcktleShrZXk6IHN0cmluZywgZGVmaW5pdGlvbjogVmFsaWRhdGlvbkRlZmluaXRpb24sIG9wdGlvbnM6IFZhbGlkYXRpb25PcHRpb25zLCBvYmplY3Q/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IGNsZWFuZWQoU2NoZW1hVmFsaWRhdG9yLlJVTEVTLnR5cGUsIGtleSwgZGVmaW5pdGlvbiwgb3B0aW9ucyksXG4gICAgICAgICAgICBzY2hlbWE6IGNsZWFuZWQoU2NoZW1hVmFsaWRhdG9yLlJVTEVTLnNjaGVtYSwga2V5LCBkZWZpbml0aW9uLCBvcHRpb25zKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjbGVhbihkZWZpbml0aW9uOiBWYWxpZGF0aW9uRGVmaW5pdGlvbiwgdmFsdWU6IGFueSwgb3B0aW9uczogVmFsaWRhdGlvbk9wdGlvbnMsIG9iamVjdDogYW55KTogYW55IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hOiBTY2hlbWEgPSBkZWZpbml0aW9uLnR5cGUgYXMgU2NoZW1hXG4gICAgICAgIHJldHVybiBzY2hlbWEuY2xlYW4odmFsdWUsIG9wdGlvbnMpXG4gICAgfVxuXG59XG4iXX0=