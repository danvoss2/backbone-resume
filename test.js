var request = require('supertest');
var app = require('./app');


describe('Requests to the root path', function() {

  it('Returns a 200 status code', function(done) {

    request(app)
      .get('/')
      .expect(200, done);

  });

  it('Returns a HTML format', function(done) {

    request(app)
      .get('/')
      .expect('Content-Type', /html/, done);
  });

  it('Returns an index file with Resume', function(done) {

    request(app)
      .get('/')
      .expect(/resume/i, done);

  });

});