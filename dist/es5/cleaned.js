"use strict";
var _ = require('lodash');
var root_validator_1 = require('./validators/root-validator');
var schema_1 = require('./schema');
function cleaned(validator, key, definition, options, defaultObject, custom, rule) {
    var rootValidator = new root_validator_1.RootValidator();
    var defaultOptions = options;
    var defaultCleanOptions = typeof options.clean === 'object' ? _.defaults({}, options.clean, schema_1.Schema.DefaultCleanOptions) : _.defaults({}, schema_1.Schema.DefaultCleanOptions);
    return function (value, object, options) {
        var cleanOptions = defaultCleanOptions;
        options = _.assign({}, defaultOptions, options);
        object = typeof object !== 'undefined' ? object : defaultObject;
        if (options.clean) {
            var cleanOptions_1 = options.clean === 'object' ? _.assign({}, defaultCleanOptions, options.clean) : _.assign({}, defaultCleanOptions);
            value = rootValidator.clean(definition, value, cleanOptions_1, object);
        }
        return validator(value, key, definition, object, options, custom, rule);
    };
}
exports.cleaned = cleaned;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsZWFuZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQVksQ0FBQyxXQUFNLFFBRW5CLENBQUMsQ0FGMEI7QUFXM0IsK0JBQThCLDZCQUM5QixDQUFDLENBRDBEO0FBQzNELHVCQUF1QixVQUV2QixDQUFDLENBRmdDO0FBRWpDLGlCQUF3QixTQUFjLEVBQUUsR0FBVyxFQUFFLFVBQWdDLEVBQUUsT0FBMEIsRUFBRSxhQUFtQixFQUFFLE1BQWlCLEVBQUUsSUFBYTtJQUNwSyxJQUFNLGFBQWEsR0FBRyxJQUFJLDhCQUFhLEVBQUUsQ0FBQTtJQUN6QyxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUE7SUFDOUIsSUFBTSxtQkFBbUIsR0FBRyxPQUFPLE9BQU8sQ0FBQyxLQUFLLEtBQUssUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsZUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsZUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUE7SUFFdEssTUFBTSxDQUFDLFVBQUMsS0FBVSxFQUFFLE1BQVksRUFBRSxPQUEyQjtRQUN6RCxJQUFJLFlBQVksR0FBRyxtQkFBbUIsQ0FBQTtRQUN0QyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBRS9DLE1BQU0sR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLEdBQUcsTUFBTSxHQUFHLGFBQWEsQ0FBQTtRQUUvRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNoQixJQUFNLGNBQVksR0FBRyxPQUFPLENBQUMsS0FBSyxLQUFLLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsbUJBQW1CLENBQUMsQ0FBQTtZQUN0SSxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLGNBQVksRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUN4RSxDQUFDO1FBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUMzRSxDQUFDLENBQUE7QUFDTCxDQUFDO0FBbEJlLGVBQU8sVUFrQnRCLENBQUEiLCJmaWxlIjoiY2xlYW5lZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICAgIFZhbGlkYXRvcixcbiAgICBWYWxpZGF0aW9uRGVmaW5pdGlvbixcbiAgICBEZWZpbml0aW9uVHlwZSxcbiAgICBWYWxpZGF0aW9uUmVzdWx0LFxuICAgIFZhbGlkYXRpb25PcHRpb25zLFxuICAgIFZhbGlkYXRpb25FcnJvcixcbiAgICBDbGVhbk9wdGlvbnNcbn0gZnJvbSAnLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgUm9vdFZhbGlkYXRvciB9IGZyb20gJy4vdmFsaWRhdG9ycy9yb290LXZhbGlkYXRvcidcbmltcG9ydCB7IFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5lZCh2YWxpZGF0b3I6IGFueSwga2V5OiBzdHJpbmcsIGRlZmluaXRpb246IFZhbGlkYXRpb25EZWZpbml0aW9uLCBvcHRpb25zOiBWYWxpZGF0aW9uT3B0aW9ucywgZGVmYXVsdE9iamVjdD86IGFueSwgY3VzdG9tPzogRnVuY3Rpb24sIHJ1bGU/OiBzdHJpbmcpOiBGdW5jdGlvbiB7XG4gICAgY29uc3Qgcm9vdFZhbGlkYXRvciA9IG5ldyBSb290VmFsaWRhdG9yKClcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IG9wdGlvbnNcbiAgICBjb25zdCBkZWZhdWx0Q2xlYW5PcHRpb25zID0gdHlwZW9mIG9wdGlvbnMuY2xlYW4gPT09ICdvYmplY3QnID8gXy5kZWZhdWx0cyh7fSwgb3B0aW9ucy5jbGVhbiwgU2NoZW1hLkRlZmF1bHRDbGVhbk9wdGlvbnMpIDogXy5kZWZhdWx0cyh7fSwgU2NoZW1hLkRlZmF1bHRDbGVhbk9wdGlvbnMpXG5cbiAgICByZXR1cm4gKHZhbHVlOiBhbnksIG9iamVjdD86IGFueSwgb3B0aW9ucz86IFZhbGlkYXRpb25PcHRpb25zKSA9PiB7XG4gICAgICAgIGxldCBjbGVhbk9wdGlvbnMgPSBkZWZhdWx0Q2xlYW5PcHRpb25zXG4gICAgICAgIG9wdGlvbnMgPSBfLmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpXG5cbiAgICAgICAgb2JqZWN0ID0gdHlwZW9mIG9iamVjdCAhPT0gJ3VuZGVmaW5lZCcgPyBvYmplY3QgOiBkZWZhdWx0T2JqZWN0XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuY2xlYW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGNsZWFuT3B0aW9ucyA9IG9wdGlvbnMuY2xlYW4gPT09ICdvYmplY3QnID8gXy5hc3NpZ24oe30sIGRlZmF1bHRDbGVhbk9wdGlvbnMsIG9wdGlvbnMuY2xlYW4pIDogXy5hc3NpZ24oe30sIGRlZmF1bHRDbGVhbk9wdGlvbnMpXG4gICAgICAgICAgICB2YWx1ZSA9IHJvb3RWYWxpZGF0b3IuY2xlYW4oZGVmaW5pdGlvbiwgdmFsdWUsIGNsZWFuT3B0aW9ucywgb2JqZWN0KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbGlkYXRvcih2YWx1ZSwga2V5LCBkZWZpbml0aW9uLCBvYmplY3QsIG9wdGlvbnMsIGN1c3RvbSwgcnVsZSlcbiAgICB9XG59XG4iXX0=