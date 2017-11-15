(function() {

    function FormController(){

        var vm = this;
        vm.listItem = ["Buy milk", "Take the trash out"];
        
        vm.addItem = function(indexName) {
            vm.listItem.push(indexName);
            vm.indexName="";
        };

        vm.removeItem = function(index) {
            vm.listItem.splice(index, 1);
        };


    };

angular
    .module("app")
    .controller("FormController", FormController);

})();