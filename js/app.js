$(function () {
    let baseUrl = 'https://baas.kinvey.com';
    let appKey = 'kid_H1DHe6bzg';
    let appSecret = 'd1e7f89e0cf141bf82352f52f57cbd9d';
    let _guestCredentials = '4a736b93-bbbc-4f3a-a2a1-bc16409fc54e.qGPwypjMyBLhmPiyjOqD3Aj64zt+vU5IXdjzPLO2IZ8=';

    let authService = new AuthorizationService('Kinvey', baseUrl, appKey, appSecret, _guestCredentials);
    let requester = new Requester(authService);

    $('#linkHome').click(showHome);
    $('#linkLogin').click(showLogin);
    $('#linkRegister').click(showRegister);
    showHome();

    function showHome() {
        showView('homeView');
    }

    function showLogin() {
        showView('loginView');
    }

    function showRegister() {
        showView('registerView');
    }

    function showView(viewName) {
        $('section').hide();
        $('section#' + viewName).fadeIn();
    }

    // function createArticle() {
    //     // let url = baseUrl + '/appdata/' + appKey + '/articles';
    //     // requester.post(url);
    //
    //     $.ajax({
    //         method: 'POST',
    //         url: baseUrl + '/appdata/' + appKey + '/articles',
    //         headers: {
    //             'Authorization': 'Kinvey 4a736b93-bbbc-4f3a-a2a1-bc16409fc54e.qGPwypjMyBLhmPiyjOqD3Aj64zt+vU5IXdjzPLO2IZ8=',
    //             'Content-Type': 'application/json'
    //         },
    //         data: JSON.stringify({
    //             title: 'Test Article',
    //             date_created: new Date(),
    //             user_id: '58344b791217fb99551e27ff'
    //         }),
    //         beforeSend: function () {
    //             if($('#loader').length) {
    //                 $('#main-content').hide();
    //                 $('#loader').fadeIn();
    //             }
    //         },
    //         success: function (data) {
    //             console.log(data);
    //         },
    //         error: function (error) {
    //             console.log(error);
    //         },
    //         complete: function() {
    //             if($('#loader').length) {
    //                 $('#loader').hide();
    //                 $('#main-content').fadeIn();
    //             }
    //         }
    //     });
    // }
});