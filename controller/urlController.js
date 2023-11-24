const shortid = require('shortid');
const URL = require('../model/url');

exports.generateURL = async (req, res) => {
    if(!req.body.url) 
        return res.status(400).json({error: 'URL is required'});

    const shortID = shortid();
    await URL.create({
        id: shortID,
        redirectUrl: req.body.url,
        visitHistory: [],
    });

    return res.json({id: shortID});
}

exports.getShortURL = async (req, res) => {
    const url = await URL.findOne({id: req.params.id});
    if(!url) return res.status(404).json({error: 'URL not found'});

    url.visitHistory.push({timestamp: Date.now()});
    await url.save();

    return res.redirect(url.redirectUrl);
}

exports.getAnalytics = async (req, res) => {
    const id = req.params.id;
    const url = await URL.findOne({id});
    return res.json({ totalClicks: url.visitHistory.length});
}