angular.module('app').controller('listsCtrl', function (listFactory) {
    this.lists = listFactory.getLists();

    this.addList = function () {
        if (!this.listName == '') {
            listFactory.addList(this.listName);
            this.listName = '';
        }
    };
});
