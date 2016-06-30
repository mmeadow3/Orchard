/////////Plant///////////
 function Plant (cm){
 	this.height = cm;
};
 Plant.prototype.increaseHeight = function (cm) {
 	this.height += cm
}

Plant.prototype.decreaseHeight = function (cm) {
 	this.height -= cm
}

Plant.prototype.getHeight = function() {
	return this.height;
};

//////////Tree/////////////////////
function Tree (cm){
 	this.height = cm;
 	this.branches = 10;
};

Tree.prototype.grow = function (cm){
	this.height += cm;
}

Tree.prototype.trim = function (cm){
	this.height -= cm;
	this.branches -= cm;
}




