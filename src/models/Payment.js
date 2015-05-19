var mongoose = require('mongoose');
var _ = require('underscore');
var cost;

var PaymentModel;

var setName = function(name) {
    return _.escape(name).trim();
};

var PaymentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        set: setName
    },
    
    price: {
        type: Number,
        min: 0,
        required: true
    },
	type: {
		type: String,
		required: true,
        trim: true,
        set: setName
	},
    owner: 	{
		type: mongoose.Schema.ObjectId,
		required: true,
		ref: 'Account'
	},
    
    createdData: {
        type: Date,
        default: Date.now
    }

});

PaymentSchema.methods.toAPI = function() {
    return {
        name: this.name,
        price: this.price,
        type: this.type,
		createdData: this.createdData
    };
};

PaymentSchema.statics.findByOwner = function(ownerId, callback) {

    var search = {
        owner: mongoose.Types.ObjectId(ownerId)
    };

    return PaymentModel.find(search).select("name price createdData type").exec(callback);
};


PaymentModel = mongoose.model('Payment', PaymentSchema);


module.exports.PaymentModel = PaymentModel;
module.exports.PaymentSchema = PaymentSchema;