const { app } = require('../../index');
const request = require('supertest');

describe('News Tests', () => {
    let server;

    beforeAll((done) => {
        server = app.listen(done);
    });

    afterAll((done) => {
        server.close(done);
    });

    it('should return a 200 OK status code for GET request to /news', async () => {
        const expectedResponse = [
            {"id":1,"title":"How Old-Fashioned Joe Root Shunned Bazball To Save","description":"Joe Root did not bring out the sweep shot until he","tourId":1,"matchId":1,"sportId":1},
            {"id":2,"title":"English media polarising headlines on Jasprit Bumr","description":"Jasprit Bumrah has become English media blue-eyed ","tourId":1,"matchId":2,"sportId":1},
            {"id":3,"title":"The Indian Cricket Team Was Burdened By the Weight","description":"The crowds at the Narendra Modi stadium showed lit","tourId":3,"matchId":8,"sportId":1},
            {"id":4,"title":"Milan Suicide, Liverpool Triumph La Repubblica, It","description":"In a country where football is a religion it was l","tourId":2,"matchId":7,"sportId":2},
            {"id":5,"title":"Young Boys Wankdorf Erection ReliefSoccernet, 2005","description":"Swiss side Young Boys of Bern moved into their new","tourId":2,"matchId":5,"sportId":2}
        ]
        const response = await request(server).get('/news');
        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
        expect(response.body).toStrictEqual(expectedResponse);
    })

    it('should return a 200 OK status code for GET request to /news/match', async () => {
        const expectedResponse = [
            {"title":"How Old-Fashioned Joe Root Shunned Bazball To Save","description":"Joe Root did not bring out the sweep shot until he"}
        ];
        const response = await request(server).get('/news/match?matchId=1');
        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
        expect(response.body).toStrictEqual(expectedResponse);
    })

    it('should return a 500 Internal Server Error status code for GET request to /news/match', async () => {
        const response = await request(server).get('/news/match');
        expect(response.status).toBe(500);
    })

    it('should return a 200 OK status code for GET request to /news/tour', async () => {
        const expectedResponse = [
            {"title":"Milan Suicide, Liverpool Triumph La Repubblica, It","description":"In a country where football is a religion it was l"},
            {"title":"Young Boys Wankdorf Erection ReliefSoccernet, 2005","description":"Swiss side Young Boys of Bern moved into their new"}
        ];
        const response = await request(server).get('/news/tour?tourId=2');
        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
        expect(response.body).toStrictEqual(expectedResponse);
    })

    it('should return a 200 OK status code for GET request to /news/sport', async () => {
        const expectedResponse = [
            {"title":"How Old-Fashioned Joe Root Shunned Bazball To Save","description":"Joe Root did not bring out the sweep shot until he"},
            {"title":"English media polarising headlines on Jasprit Bumr","description":"Jasprit Bumrah has become English media blue-eyed "},
            {"title":"The Indian Cricket Team Was Burdened By the Weight","description":"The crowds at the Narendra Modi stadium showed lit"}
        ];
        const response = await request(server).get('/news/sport?sportId=1');
        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
        expect(response.body).toStrictEqual(expectedResponse);
    })
});