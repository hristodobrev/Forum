import KinveyRequester from '../Services/KinveyRequester';

class AnswerModel {

    getAnswersByArticleId(articleId) {
        return KinveyRequester.get('appdata', `answers?query={"article_id": "${articleId}"}`, data);
    }

    getAllAnswers() {
        return KinveyRequester.get('appdata', 'answers');
    }
}

export default AnswerModel;