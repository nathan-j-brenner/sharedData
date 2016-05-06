angular.module('app').controller('Post', Post);

function Post (messages) {
	var vm = this;
	
	vm.newMessage = "Hello World!";
	
	vm.addMessage = function (message) {
		messages.add(message);
		vm.newMessage = "";
	};
}