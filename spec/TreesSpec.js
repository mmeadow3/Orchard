// There should be a Plant function defined. +++++++++
// There should be a Tree function defined. ++++++++++++
// There should be a function named increaseHeight on the prototype of Plant. ++++++++++++++
// There should be a function named decreaseHeight on the prototype of Plant. ++++++++++++++
// There should be a height property on Plant. ++++++++++++++++
// There should be a function named grow on the prototype of Tree. +++++++++++++
// There should be a function named trim on the prototype of Tree. ++++++++++++++
// When you invoke the trim method on Tree, the height of the Tree ++++++++++++++++++++
// should be reduced by the integer value that is passed as an argument (e.g. PearTree.trim(2))+++++++++++++++
// When you invoke the trim method on Tree, the values of the branches property should be decreased by one.+++++++++++++++++
// When you invoke the grow method on Tree, the height of the Tree should be increased++++++++++++++++++
// by the integer value that is passed as an argument (e.g. PearTree.grow(2)) +++++++++++++++++++++


 // let testTree = new Tree(10);
 //    testTree.grow(20);
 //    expect(tree.height).toEqual(30);

describe('specs for orchard.js', function() { /////////////Start of Test Function//////////

  it('There should be a Plant function defined', function() {
    expect(Plant).toBeDefined();
  });

 it("There should be a Tree function", function() { /////////////////Tree Function///////
    expect(Tree).toBeDefined();
    });

////////////////prototypes of Plant//////////////////////
  it("Plant should have an increaseHeight function", function() {
    let testPlant = new Plant();
    expect(testPlant.increaseHeight).toBeDefined();
  });

   it("Plant should have a decreaseHeight function", function() {
    let testPlant = new Plant();
    expect(testPlant.decreaseHeight).toBeDefined();
  });

it('There should be a height property on plant', function() {
    let testPlant = new Plant(10);
    expect(testPlant.height).toEqual(10);
  });
//////////////End Plant Prototypes/////////////////////
it("There should be a grow function on tree", function() {
  let testTree = new Tree ();
  expect(testTree.grow).toBeDefined();
})

it("There should be a trim function on tree", function() {
  let testTree = new Tree ();
  expect(testTree.trim).toBeDefined();
})

it("the trim function should reduce the height by an interger", function() {   ///////////this is just giving the .trim function functionality////
  let testTree = new Tree(10);
  testTree.trim(5);
  expect(testTree.height).toEqual(5);
});


it("the grow function should increase the height by an interger", function() {   ///////////this is just giving the .grow function functionality////
  let testTree = new Tree(10);
  testTree.grow(5);
  expect(testTree.height).toEqual(15);
});

it("the trim function should reduce the number of branches by 1", function() { 
  let testTree = new Tree(10);
  testTree.trim(1);
  expect(testTree.branches).toEqual(9);
});







}); /////////////End of Test Function////////////////////


