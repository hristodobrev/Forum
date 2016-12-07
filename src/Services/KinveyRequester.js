import $ from "jquery";

const KinveyRequester = (function () {

    const baseUrl = 'https://baas.kinvey.com/';
    const appKey = 'kid_H1DHe6bzg';
    const appSecret = 'd1e7f89e0cf141bf82352f52f57cbd9d';

    function getRequest(model, uri) {
        let url = baseUrl + model + '/' + appKey + '/' + uri;
        return _makeRequest('GET', url);
    }

    function postRequest(model, uri, data) {
        let url = baseUrl + model + '/' + appKey + '/' + uri;
        return _makeRequest('POST', url, data);
    }

    function putRequest(model, uri, data) {
        let url = baseUrl + model + '/' + appKey + '/' + uri;
        return _makeRequest('PUT', url, data);
    }

    function deleteRequest(url) {
        return _makeRequest('DELETE', url);
    }

    function logoutRequest(authToken) {
        let url = baseUrl + 'user/' + appKey + '/_logout';
        return $.ajax({
            method: 'POST',
            url: url,
            headers: {
                'Authorization': 'Kinvey ' + authToken
            }
        });
    }

    function _isLoggedIn() {
        return sessionStorage.getItem('authToken');
    }

    function _getAuthHeaders() {
        let headers = {
            'Content-Type': 'application/json'
        };

        let authToken = _isLoggedIn();
        if (authToken) {
            headers['Authorization'] = 'Kinvey ' + authToken;
        } else {
            headers['Authorization'] = 'Basic ' + btoa(appKey + ':' + appSecret)
        }

        return headers;
    }

    function _makeRequest(method, url, data) {
        return $.ajax({
            method,
            url,
            headers: _getAuthHeaders(),
            data: JSON.stringify(data)
        });
    }

    return {
        get: getRequest,
        post: postRequest,
        put: putRequest,
        delete: deleteRequest,
        logout: logoutRequest
    };
})();

export default KinveyRequester;
