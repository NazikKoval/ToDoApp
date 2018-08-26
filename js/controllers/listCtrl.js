angular.module('app').controller('listCtrl', function (listFactory, cardFactory) {
    this.removeList = function (list) {
        listFactory.removeList(list);
    };
    this.getCards = function (list) {
        return cardFactory.getCards(list);
    };
    this.createCard = function (list) {
        if (!this.cardDescription == '') {
            cardFactory.createCard(list, this.cardDescription);
            this.cardDescription = '';
        }
    };
    this.removeCard = function (card) {
        cardFactory.removeCard(card);
    };
    this.toList = function (card, idNum) {
        cardFactory.toList(card, idNum);
    };
    this.editCard = function (card) {
        if (!this.edit == '') {
            cardFactory.editCard(this.edit, card);
            this.edit = '';
        }
    }
});