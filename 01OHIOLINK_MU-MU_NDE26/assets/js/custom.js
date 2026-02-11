(function () {
  ('use strict');
  ('use strict');
  var app = angular.module('viewCustom', ['angularLoad', 'externalSearch']);
  var LOCAL_VID = '01OHIOLINK_MU-MU_NDE';

  /** ------ externalSearch -------- **/
  app.component('prmFacetExactAfter', {
    bindings: { parentCtrl: '<' },
    template: '<external-search></external-search>',
  });

  angular
    .module('externalSearch', [])
    .value('searchTargets', [])
    .directive('externalSearch', function () {
      return {
        require: '^^prmFacet',
        restrict: 'E',
        templateUrl:
          '/nde/custom/' + LOCAL_VID + '/assets/externalSearch.html',
        controller: [
          '$scope',
          '$location',
          'searchTargets',
          function ($scope, $location, searchTargets) {
            $scope.name = $scope.$ctrl.parentCtrl.facetGroup.name;
            $scope.targets = searchTargets;
            var query = $location.search().query;
            var filter = $location.search().pfilter;
            $scope.queries = Array.isArray(query)
              ? query
              : query
              ? [query]
              : false;
            $scope.filters = Array.isArray(filter)
              ? filter
              : filter
              ? [filter]
              : false;
          },
        ],
        link: function link(scope, element, attrs, prmFacetCtrl) {
          var facetTitle = 'External Search';
          var found = false;
          for (var facet in prmFacetCtrl.facets) {
            if (prmFacetCtrl.facets[facet].name === facetTitle) {
              found = true;
            }
          }
          if (!found) {
            prmFacetCtrl.facets.push({
              name: facetTitle,
              displayedType: 'exact',
              limitCount: 0,
              facetGroupCollapsed: false,
              values: [],
            });
          }
        },
      };
    });

  app.value('searchTargets', [
    {
      name: 'Worldcat',
      url: 'https://2292.on.worldcat.org/search?',
      img: '/discovery/custom/' + LOCAL_VID + '/img/logo-worldcat.png',
      img_2: '/discovery/custom/' + LOCAL_VID + '/img/logo_placeholder.png',
      alt: 'Worldcat',
      mapping: function (queries, filters) {
        const query_mappings = {
          any: 'kw',
          title: 'ti',
          creator: 'au',
          subject: 'su',
          isbn: 'bn',
          issn: 'n2',
        };
        try {
          return (
            'queryString=' +
            queries
              .map((part) => {
                let terms = part.split(',');
                let type = query_mappings[terms[0]] || 'kw';
                let string = terms[2] || '';
                let join = terms[3] || '';
                return type + ':' + string + ' ' + join + ' ';
              })
              .join('')
          );
        } catch (e) {
          return '';
        }
      },
    },
    {
      name: 'Google Scholar',
      url: 'https://scholar.google.com/scholar?q=',
      img: '/discovery/custom/' + LOCAL_VID + '/img/logo-googlescholar.png',
      img_2: '/discovery/custom/' + LOCAL_VID + '/img/logo_placeholder.png',
      alt: 'Google Scholar',
      mapping: function mapping(queries, filters) {
        try {
          return queries
            .map(function (part) {
              return part.split(',')[2] || '';
            })
            .join(' ');
        } catch (e) {
          return '';
        }
      },
    },
    {
      name: 'PubMed',
      url: 'https://pubmed.ncbi.nlm.nih.gov/?otool=ibeudlmlib&term=',
      img: '/discovery/custom/' + LOCAL_VID + '/img/logo-pubmed.png',
      img_2: '/discovery/custom/' + LOCAL_VID + '/img/logo_placeholder.png',
      alt: 'PubMed',
      mapping: function mapping(queries, filters) {
        try {
          return queries
            .map(function (part) {
              return part.split(',')[2] || '';
            })
            .join(' ');
        } catch (e) {
          return '';
        }
      },
    },
  ]);

  /** ------ END externalSearch ------------ **/
})();
