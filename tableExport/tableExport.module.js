(function (){
    'use strict';
    angular.module('TableExportModule', [])
        .directive('tableExport', tableExport);

    function tableExport() {
        return {
            restrict: 'EAC',
            link: link
        };

        function link (scope, elem, attr) {
            scope.$on('export-table', function (event, data) {
                elem.tableExport(data);
            });
        }
    }
})();