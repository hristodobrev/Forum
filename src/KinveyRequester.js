import $ from 'jquery';

const KinveyRequester = (function () {
    const baseUrl = 'https://baas.kinvey.com/';
    const appKey = 'kid_H1DHe6bzg';
    const appSecret = 'd1e7f89e0cf141bf82352f52f57cbd9d';
    const appAuthHeaders = {
        Authorization: 'Basic ' + btoa(appKey + ':' + appSecret)
    };

    function login(username, password) {
        return $.ajax({
            method: 'POST',
            url: baseUrl + 'users/' + appKey + '/login',
            headers: appAuthHeaders,
            data: {
                username,
                password
            }
        });
    }

    return {
        login
    };
})();

export default KinveyRequester;