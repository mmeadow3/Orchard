// Create a Plant function. ++++++++++++++++++
// Create a Tree function.+++++++++++++++++++++++
// Plant should be the prototype of Tree. +++++++++++++++++++++
// /Plant should have a property of height. +++++++++++++++++++++++
// The Plant prototype should have two methods on it: increaseHeight and decreaseHeight. Each method should accept an integer value as input.++++++++++++++++++++++
// increaseHeight should increase the value of the height property by the amount passed in as an argument. +++++++++++++
// decreaseHeight should decrease the value of the height property by the amount passed in as an argument. ++++++++++++++++++++
// Tree should have a property of branches. ++++++++++++++++++++++++++++++++
// The Tree prototype should have two methods on it: grow and trim. ++++++++++++++++++++++
// The grow method should accept an integer value as input. ++++++++++++++++++++++++++
// The grow method should increase the height of the tree. +++++++++++++++++++
// The trim method should accept an integer value as input. +++++++++++++++++++++
// The trim method should decrease the height of the tree. +++++++++++++++++++
// When the trim method is called, the number of branches should decrease by one. ++++++++++++++++
// Each time the height of a tree increases by 10, the value of branch should increase by one.++++++++++++++++++++++
// Create a PearTree instance of Tree. var PearTree = new Tree(); ++++++++++++++++
// Create an OakTree instance of Tree. +++++++++++++++++++++++
// Every second, increase the height the pear tree by some integer value and increase the height the oak tree by some integer value that is larger than what you used for the pear tree.
// Also output the current height of each tree and how many branches it has to the DOM
// Every tenth time the trees are grown, invoke the trim method. Pass one value to the method for the pear tree, and a larger value to the method on the oak tree.
// Stop growing the trees after they have grown 30 times.


/////////Plant///////////
 function Plant (cm){
 	this.height = cm;
};
Plant.prototype = new Tree();

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
	this.height += cm
	if (cm >= 10 ) {    //////////////////////////Come back and fix this/////////
		this.branches += Math.floor(cm/10)
	}
};

Tree.prototype.trim = function (cm){
	this.height -= cm;
	this.branches -= 1;
}

var PearTree = new Tree(5); /////////////////will log out a tree with 5cm height and 10 branches
// PearTree.grow(29); /////// grow is working ////////
console.log("PearTree", PearTree)////////////

var OakTree = new Tree(20); /////////////////
// OakTree.trim(5); //////trim function is working////////
console.log("OakTree", OakTree)////////////

///////will need to make look to append trees to DOM///////////
function growPearTree


for (var i = 0; i < 30; i++) {
$('.output').append(`<h5 id="pear">Pear Tree is now ` + PearTree.height + ` Feet tall and has ` + PearTree.branches + ` branches` + `</h5>`);
$('.output').append(`<h5 id="oak">Oak Tree is now ` + OakTree.height + ` Feet tall and has ` + OakTree.branches + ` branches` + `</h5>`)
}









