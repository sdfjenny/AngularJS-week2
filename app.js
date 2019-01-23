(function(){
'use strict';

var ToBuylist = [
  {
	  name:"Cookies", 
	  quantity: "10"
  },
  {
	  name:"Donuts",
	  quantity: "200"
  },
  {
	  name:"Milk",
	  quantity: "50"
  },
  {
	  name: "Chocolate",
	  quantity: "20"
  },
  {
	  name: "Pepto Bismol",
	  quantity: "15"
  }
	  
	];


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service ('ShoppingListCheckOffService', ShoppingListCheckOffService);




ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService){
	var itemAdder = this;
	itemAdder.Message="";
	itemAdder.ToBuylist =ToBuylist;
	itemAdder.bought = function(itemIdex){
		ShoppingListCheckOffService.addItem(itemIdex);
		ShoppingListCheckOffService.remove(itemIdex);
		
		
		
		};
	
	
	
	
	
	
	
	
}


AlreadyBoughtController.$inject = [
'ShoppingListCheckOffService'
];

function AlreadyBoughtController(ShoppingListCheckOffService){
	var showList= this;
	
	
	
	showList.list=ShoppingListCheckOffService.getItems();
	
	
	
	
	
	
	;
	
	
	
	
	
}

function ShoppingListCheckOffService() {
  var service = this;
  // List of shopping items
  var Tbuy= ToBuylist;
  var Bitem= [];
  var Msg="Nothing is Bought yet";
  
  service.remove = function (itemIdex){
	  Tbuy.splice(itemIdex, 1);
  };
  
  service.addItem = function (itemIdex) {
	  
	  Bitem.push (Tbuy[itemIdex]);
	  
  };
  
  
  service.getItems = function (){
	  
	  return Bitem;
	  
	  
  };
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  }
  
  
	
	
	
	







	
	
	
	
	
	
	
	
})();