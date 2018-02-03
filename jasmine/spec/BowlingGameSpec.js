describe('BowlingGame', function (){

  describe('The Player can ', function(){
    it('have a total when rolls twice', function() {
      game = new BowlingGame();
      game.roll(2,3);
      expect(game.rollTotal).toEqual(5);
    });

    it('score when hits pins', function() {
      game = new BowlingGame();
      expect(game.score()).toEqual(5);
    });

    it('see the final score', function(){
      game = new BowlingGame();
      expect(game.finalScore()).toEqual(130);
    });
  });

  describe('After each set of rolls ', function(){
    it('current roll number changes by 2', function() {
      game = new BowlingGame();
      game.roll(2,3);
      game.roll(4,2);
      expect(game.currentRollNumber).toEqual(4);
    });
  });

});
