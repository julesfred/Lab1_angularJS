(function() {

    function FormController(){

        var vm = this;
        vm.listItem = ["Buy milk", "Take the trash out"];
        
        vm.addItem = function(newItem) {
            vm.listItem.push(newItem);
            vm.newItem ="";
        };

        vm.removeItem = function(index) {
            vm.listItem.splice(index, 1);
        };


    };

angular
    .module("app")
    .controller("FormController", FormController);

})();