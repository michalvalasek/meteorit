HomeController = new Stellar.Controller('home');

HomeController.index = function() {
  Stellar.render('games');
};

HomeController.create_game = function() {
  Stellar.render('create_game');
};

HomeController.game = function() {
  Stellar.render('game');
};