/**
@toc

@param {Object} scope (attrs that must be defined on the scope (i.e. in the controller) - they can't just be defined in the partial html). REMEMBER: use snake-case when setting these on the partial!
TODO

@param {Object} attrs REMEMBER: use snake-case when setting these on the partial! i.e. my-attr='1' NOT myAttr='1'
TODO

@dependencies
TODO

@usage
partial / html:
TODO

controller / js:
TODO

//end: usage
*/

'use strict';

angular.module('brc.angular-responsive-img', [])
.directive('picture', ['$window', function ($window) {
  return {
    restrict: 'EA',
    compile: function(tElement, tAttrs) {
      var newtElement = angular.element('<img>'),
          sources = tElement.find('source'),
          rules = {},
          _src_processed = false;

      if(tAttrs.width)
        newtElement.attr('width', tAttrs.width);

      if(tAttrs.height)
        newtElement.attr('height', tAttrs.height);

      var processSources = function() {
        angular.forEach(sources, function(source){
          processSource(source, rules);
        });
        // Sources ready
        _src_processed = true;
      },
      processSource = function(source) {
        if(!source.getAttribute('src'))
          return false;

        // Getting dpi
        var dpi = source.getAttribute('dpi') || '1';

        // Building dpi entry if it didn't exist before
        if(!rules[dpi])
          rules[dpi] = { default: '', sizes: [] };

        // if no size restrictions: default for that dpi
        if(!source.getAttribute('size'))
          rules[dpi].default = source.getAttribute('src');
        // else, store a new rule for the image
        else{
          var new_rule = { src: source.getAttribute('src') },
              restrictions = source.getAttribute('size').split(',');

          angular.forEach(restrictions, function(restriction){
            var res = restriction.split(':');
            new_rule[res[0].trim()] = parseInt(res[1], 10);
          });

          rules[dpi].sizes.push(new_rule);
        }

        return true;
      },
      selectSource = function(element) {
        var src;

        var dpi = String($window.devicePixelRatio);
        var width = $window.innerWidth;
        var height = $window.innerHeight;

        // If dpi not defined, resturn default dpi
        var dpi_rules = rules[dpi] || rules['1'];

        // Looking for a rule that applies (higher in list, more priority)
        angular.forEach(dpi_rules.sizes, function(rule){
          // first rule applies
          if(src) return;
          var minw = rule['min-width'];
          var maxw = rule['max-width'];
          var minh = rule['min-height'];
          var maxh = rule['max-height'];
          if(angular.isNumber(minw) && minw > width) return;
          if(angular.isNumber(maxw) && maxw < width) return;
          if(angular.isNumber(minh) && minh > height) return;
          if(angular.isNumber(maxh) && maxh < height) return;
          src = rule.src;
        });

        if(!src)
          src = rules['1']['default'];  // default rule

        element.attr('src', src);
      };

      // Processing sources
      processSources();
      // Selecting initial default source
      selectSource(newtElement);
      // Replacing the original element
      tElement.replaceWith(newtElement);

      return function Link(scope, iElem, iAttrs){
        var resizeCb = function() {
          selectSource(iElem);
        };

        angular.element($window).on('resize', resizeCb);

        // Cleaning listeners when destroying
        scope.$on("$destroy", function(){
          angular.element($window).off('resize', resizeCb);
        });
      };
    }
  };
}]);
