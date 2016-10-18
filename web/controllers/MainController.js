app.controller('MainController', ['$scope', '$location', '$http',
    function ($scope, $location, $http) {
        $scope.patterns = {
            url: /^(http(s)?:\/\/)?(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
            alias: /^[a-zA-Z- .0-9:;]+$/
        };
        $scope.links;
        $scope.link = {url: '', alias: ''};

        $scope.submit = function () {
            $r = validateLink($scope.link);
            if ($r != 0) return 0;
            $http.post(api_host + 'links', $scope.link).then(function (res) {
                if (res.status == 201 && res.data.status == 'created') $scope.initLinks();
            })
        };
        $scope.clear = function () {
            for (k in $scope.link) {
                $scope.link[k] = '';
            }
        };
        $scope.initLinks = function () {
            $http.get(api_host + 'links', $scope.link).then(function (res) {
                if (res.status == 200 && res.data.status == 'ok') $scope.links = res.data.content;
            })
        };
        $scope.initLinks();

        function validateLink(data) {
            var e = 0;
            for (k in data) {
                if (typeof data[k] == 'undefined' || data[k] == '') {
                    e++;
                    $('#' + k).addClass('invalid');
                } else $('#' + k).removeClass('invalid');
            }
            return e;
        }

        $scope.click = function (link) {
            $http.put(api_host + 'links/' + link.id, []).then(function (res) {
                if (res.status == 200 && res.data.status == 'updated') link.clicks++;
            })
        }
    }
]);
