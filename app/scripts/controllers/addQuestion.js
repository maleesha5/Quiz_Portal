angular.module('aeturnumQuizProjectPortalApp')
    .controller('questionController', function($scope, $log, Question, Answer, $http) {

        $scope.question = new Question();
        $scope.question.answers.answer1 = new Answer();
        $scope.question.answers.answer2 = new Answer();
        $scope.question.answers.answer3 = new Answer();
        $scope.question.answers.answer4 = new Answer();



        $scope.save = function(question) {
            $log.log(question);
            /* questionEndpoint.saveQuestion(question).then(function(response) {
                 return response;
             })*/

            //var saveQuestionUrl = "http://127.0.0.1:8080/Aeturnum_quiz/save_question";
            $http.post('/someUrl', question);

        };

        $scope.reset = function() {
            $scope.employee = angular.copy($scope.master);
        };

        $scope.reset();
    })

.service('Question', [function() {

    function Question() {

        this.body = undefined;
        this.category = undefined;
        this.mark = undefined;
        this.answers = {};
    }

    return Question;

}])

.service('Answer', [function() {

    function Answer() {
        this.body = undefined;
        this.isCorrect = undefined;
    }

    return Answer;

}]);