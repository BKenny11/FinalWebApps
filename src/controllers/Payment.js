var _ = require('underscore');
var models = require('../models');

var Payment = models.Payment;

var makerPage = function(req, res) {

    Payment.PaymentModel.findByOwner(req.session.account._id, function(err, docs) {

        if(err) {
            console.log(err);
            return res.status(400).json({error:'An error occurred'}); 
        }
        
        res.render('app', {payments: docs});
    });
};

var homePage = function(req, res) {

    res.render('add');
};
var billsPage = function(req, res) {

    res.render('bills');
};
var cashPage = function(req, res) {

    res.render('cash');
};
var paydayPage = function(req, res) {

    res.render('payday');
};
var creditPage = function(req, res) {

    res.render('credit');
};

var makePayment = function(req, res) {

    if(!req.body.name || !req.body.price) {
        return res.status(400).json({error: "name and price required"});
    }
    
    var paymentData = {
        name: req.body.name,
        price: req.body.price,
        type: req.body.type,
        createdData: req.body.createdData,
        owner: req.session.account._id
    };
    
    var newPayment = new Payment.PaymentModel(paymentData);
    
    newPayment.save(function(err) {
        if(err) {
            console.log(err);
            return res.status(400).json({error:'An error occurred'}); 
        }

        res.json({redirect: '/maker'});
    });
    
};

var creditPayment = function(req, res) {

    if(!req.body.name || !req.body.price) {
        return res.status(400).json({error: "name and price required"});
    }
    
    var paymentData = {
        name: req.body.name,
        price: req.body.price,
        type: req.body.type,
        createdData: req.body.createdData,
        owner: req.session.account._id
    };
    
    var newPayment = new Payment.PaymentModel(paymentData);
    
    newPayment.save(function(err) {
        if(err) {
            console.log(err);
            return res.status(400).json({error:'An error occurred'}); 
        }

        res.json({redirect: '/credit'});
    });
    
};

var billsPayment = function(req, res) {

    if(!req.body.name || !req.body.price) {
        return res.status(400).json({error: "name and price required"});
    }
    
    var paymentData = {
        name: req.body.name,
        price: req.body.price,
        type: req.body.type,
        createdData: req.body.createdData,
        owner: req.session.account._id
    };
    
    var newPayment = new Payment.PaymentModel(paymentData);
    
    newPayment.save(function(err) {
        if(err) {
            console.log(err);
            return res.status(400).json({error:'An error occurred'}); 
        }

        res.json({redirect: '/bills'});
    });
    
};

var cashPayment = function(req, res) {

    if(!req.body.name || !req.body.price) {
        return res.status(400).json({error: "name and price required"});
    }
    
    var paymentData = {
        name: req.body.name,
        price: req.body.price,
        type: req.body.type,
        createdData: req.body.createdData,
        owner: req.session.account._id
    };
    
    var newPayment = new Payment.PaymentModel(paymentData);
    
    newPayment.save(function(err) {
        if(err) {
            console.log(err);
            return res.status(400).json({error:'An error occurred'}); 
        }

        res.json({redirect: '/cash'});
    });
    
};

var paydayPayment = function(req, res) {

    if(!req.body.name || !req.body.price) {
        return res.status(400).json({error: "name and price required"});
    }
    
    var paymentData = {
        name: req.body.name,
        price: req.body.price,
        type: req.body.type,
        createdData: req.body.createdData,
        owner: req.session.account._id
    };
    
    var newPayment = new Payment.PaymentModel(paymentData);
    
    newPayment.save(function(err) {
        if(err) {
            console.log(err);
            return res.status(400).json({error:'An error occurred'}); 
        }

        res.json({redirect: '/payday'});
    });
    
};

var homePayment = function(req, res) {

    if(!req.body.name || !req.body.price) {
        return res.status(400).json({error: "name and price required"});
    }
    
    var paymentData = {
        name: req.body.name,
        price: req.body.price,
        type: req.body.type,
        createdData: req.body.createdData,
        owner: req.session.account._id
    };
    
    var newPayment = new Payment.PaymentModel(paymentData);
    
    newPayment.save(function(err) {
        if(err) {
            console.log(err);
            return res.status(400).json({error:'An error occurred'}); 
        }

        res.json({redirect: '/home'});
    });
    
};

module.exports.makerPage = makerPage;
module.exports.billsPage = billsPage;
module.exports.cashPage = cashPage;
module.exports.paydayPage = paydayPage;
module.exports.homePage = homePage;
module.exports.creditPage = creditPage;


module.exports.make = makePayment;
module.exports.credit = creditPayment;
module.exports.cash = cashPayment;
module.exports.payday = paydayPayment;
module.exports.bill = billsPayment;
module.exports.home = homePayment;