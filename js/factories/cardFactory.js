angular.module('app').factory('cardFactory', function () {
    var service = {};

    var cards = [
        {
            id: 1,
            description: 'Some Text 1',
            list_id: 1
    },
        {
            id: 2,
            description: 'Some Text 2',
            list_id: 3
    },
        {
            id: 3,
            description: 'AngularJS',
            list_id: 3
    },
        {
            id: 4,
            description: 'Some Text 4',
            list_id: 2
        }
  ];

    service.getCards = function (list) {
        return _.filter(cards, {
            list_id: list.id
        });
    };

    service.createCard = function (list, cardDescription) {
        cards.push({
            id: _.uniqueId('card_'),
            description: cardDescription,
            list_id: list.id
        });
    };

    service.removeCard = function (card) {
        _.pull(cards, card);
    }

    service.toList = function (card, idNum) {
        card.list_id = idNum;
    }
    
    service.editCard = function(editingText, card){
        console.log(editingText + " : " + card.id);
        card.description = editingText;
    }
    
    return service;
});
