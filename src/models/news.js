const mysql = require('../lib/mysql');

const getAllNews = async () => {
    const parameters = [];
    const statement = 'select * from news;';
    return await mysql.query(statement, parameters);
}

const getNewsByMatchId = async params => {
    const statement = 'select title, description from news where matchId = ?';
    const parameters = [params.matchId];
    return await mysql.query(statement, parameters);
}

const getNewsByTourId = async params => {
    const statement = 'select title, description from news where tourId = ?';
    const parameters = [params.tourId];
    return await mysql.query(statement, parameters);
}

const getNewsBySportId = async params => {
    const statement = 'select title, description from news where sportId = ?';
    const parameters = [params.sportId];
    return await mysql.query(statement, parameters);
}

module.exports = {
    getAllNews: getAllNews,
    getNewsByMatchId: getNewsByMatchId,
    getNewsByTourId: getNewsByTourId,
    getNewsBySportId: getNewsBySportId
}