angular.module('app').controller('List', List);

function List (messages) {
	var vm = this;
	
	vm.messages = messages.list;
	var name = "nate";
}