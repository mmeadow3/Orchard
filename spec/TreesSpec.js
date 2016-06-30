// There should be a Plant function defined.
// There should be a Tree function defined.
// There should be a function named increaseHeight on the prototype of Plant.
// There should be a function named decreaseHeight on the prototype of Plant.
// There should be a height property on Plant.
// There should be a function named grow on the prototype of Tree.
// There should be a function named trim on the prototype of Tree.
// When you invoke the trim method on Tree, the height of the Tree s
//hould be reduced by the integer value that is passed as an argument (e.g. PearTree.trim(2))
// When you invoke the trim method on Tree, the values of the branches property should be decreased by one.
// When you invoke the grow method on Tree, the height of the Tree should be increased
// by the integer value that is passed as an argument (e.g. PearTree.grow(2))

describe('specs for orchard.js', function() {

  it('There should be a Plant function defined', function() {
    expect(Plant).toBeDefined();
  });
//  it("There shoule be a Tree function", function() {
//     expect(Tree).toBeDefined();
//     });


//   it("Plant should have be an increaseHeight", function() {
    
//   });

//    it("Plant should have be an decreaseHeight", function() {
    
//   });

// it("Plant should have a height property", function(height) {
//     plant.height = height;
//   });

// describe("There should be a Tree function", function() {

//   it("should add two integers", function() {
    
//   });

//   it("should have a subtract function", function() {
//     expect(subtract).toBeDefined();
//   });

//   it("should subtract two integers", function() {
//     expect(subtract(7, 5)).toBe(2);
//   });

});