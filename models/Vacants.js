const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slug');
const shortId = require('shortid');

const vacantsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'The name of the vacant is obligatory',
        trim: true
    },
    company: {
        type: String,
        trim: true
    },
    ubication: {
        type: String,
        trim: true,
        required: 'The ubication is obligatory'
    },
    salary: {
        type: String,
        default: 0,
        trim: true
    },
    contract: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        lowercase: true
    },
    skill: [String],
    candidates: [{
        name: String,
        email: String,
        cv: String
    }]
});
vacantsSchema.pre('save', function(next) {
    
    //# Creating Url
    const url = slug(this.title);
    this.url = `${url}-${shortId.generate()}`;

    next();
})

module.exports = mongoose.model('Vacant', vacantsSchema);