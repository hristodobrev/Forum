class Requester {
    constructor(authService) {
        this.authService = authService;
    }

    get(url, successCallback, errorCallback) {
        let headers = this._getHeaders(true);
        this._makeRequest('GET', url, headers, null, successCallback, errorCallback);
    }

    post(url, data, successCallback, errorCallback) {
        let headers = this._getHeaders(false);
        this._makeRequest('POST', url, headers, data, successCallback, errorCallback);
    }

    put(url, data, successCallback, errorCallback) {
        let headers = this._getHeaders(false);
        this._makeRequest('PUT', url, headers, data, successCallback, errorCallback);
    }

    delete(url, data, successCallback, errorCallback) {
        let headers = this._getHeaders(false);
        this._makeRequest('DELETE', url, headers, data, successCallback, errorCallback);
    }

    _makeRequest(method, url, headers, data, successCallback, errorCallback) {
        $.ajax({
            method: method,
            url: url,
            headers: headers,
            data: JSON.stringify(data) || null,
            beforeSend: function () {
                if ($('#loader').length) {
                    $('#main-content').hide();
                    $('#loader').fadeIn();
                }
            },
            success: successCallback,
            error: errorCallback,
            complete: function () {
                if ($('#loader').length) {
                    $('#loader').hide();
                    $('#main-content').fadeIn();
                }
            }
        });
    }

    _getHeaders(isGuest) {
        return this.authService.getAuthorizationHeaders(isGuest);
    }
}

class AuthorizationService {
    constructor(authType, baseServiceUrl, appKey, appSecret, guestUserCredentials) {
        this.baseServiceUrl = baseServiceUrl;
        this.appKey = appKey;
        this.appSecret = appSecret;
        this._guestUserCredentials = guestUserCredentials;
        this._appCredentials = btoa(appKey + ':' + appSecret);
        this.authType = authType;
    }

    initAuthorizationType(authType) {
        this.authType = authType;
    }

    getCurrentUser() {
        return sessionStorage['username'];
    }

    isLoggedIn() {
        return this.getCurrentUser() != undefined;
    }

    getAuthorizationHeaders(isGuest) {
        let headers = {};

        if (this.isLoggedIn()) {
            headers = {
                'Authorization': this.authType + ' ' + sessionStorage['_authToken']
            };
            // console.log('Authorization with authToken');
        } else if (!this.isLoggedIn() && isGuest) {
            headers = {
                'Authorization': this.authType + ' ' + this._guestUserCredentials
            };
            // console.log('Authorization with guest credentials');
        } else if (!this.isLoggedIn() && !isGuest) {
            headers = {
                'Authorization': 'Basic' + ' ' + this._appCredentials
            };
            // console.log('Authorization with app credentials');
        }

        headers['Content-Type'] = 'application/json';

        return headers;
    }
}