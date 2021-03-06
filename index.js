var flowRemoveTypes = require('flow-remove-types');
var createFilter = require('rollup-pluginutils').createFilter;

module.exports = function(options) {
  options = options || {};
  var filter = createFilter(options.include, options.exclude);

  return {
    name: 'flow-remove-types',
    transform: function(code, id) {
      if (filter(id)) {
        var transformed = flowRemoveTypes(code, options);
        return {
          code: transformed.toString(),
          map: transformed.generateMap()
        };
      }
    }
  };
}
