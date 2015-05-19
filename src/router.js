//import the controller folder (automatically calls the index.js file)
var controllers = require('./controllers'); 
var mid = require('./middleware');

var router = function(app) {

    app.get("/login", mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage); 
    app.post("/login", mid.requiresSecure, mid.requiresLogout, controllers.Account.login); 
    
    app.get("/signup", mid.requiresSecure, mid.requiresLogout, controllers.Account.signupPage);
    app.post("/signup", mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);
    
    app.get("/logout", mid.requiresLogin, controllers.Account.logout);
    
    app.get("/maker", mid.requiresLogin, controllers.Payment.makerPage);
    app.post("/maker", mid.requiresLogin,  controllers.Payment.make);
    
    app.get("/credit", mid.requiresLogin, controllers.Payment.creditPage);
    app.post("/credit", mid.requiresLogin,  controllers.Payment.credit);
    
    app.get("/bills", mid.requiresLogin, controllers.Payment.billsPage);
    app.post("/bills", mid.requiresLogin,  controllers.Payment.bill);
    
    app.get("/home", mid.requiresLogin, controllers.Payment.homePage);
    app.post("/home", mid.requiresLogin,  controllers.Payment.home);
    
    app.get("/cash", mid.requiresLogin, controllers.Payment.cashPage);
    app.post("/cash", mid.requiresLogin,  controllers.Payment.cash);
    
    app.get("/payday", mid.requiresLogin, controllers.Payment.paydayPage);
    app.post("/payday", mid.requiresLogin,  controllers.Payment.payday);
    
    app.get("/", mid.requiresSecure, controllers.Account.loginPage);
};

module.exports = router; 