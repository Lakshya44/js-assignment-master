const News = require('../controllers/news');

module.exports = function(app) {
    app.route('/news').get(async (req, res, next) => {
        try {
            return res.json(await News.getAllNews());
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/match').get(async (req, res, next) => {
        try {
            return res.json(await News.getNewsByMatchId(req.query));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/tour').get(async (req, res, next) => {
        try {
            return res.json(await News.getNewsByTourId(req.query));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/sport').get(async (req, res, next) => {
        try {
            return res.json(await News.getNewsBySportId(req.query));
        } catch (err) {
            return next(err);
        }
    });
}
