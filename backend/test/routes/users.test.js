import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/index.js';

const expect = chai.expect;
chai.use(chaiHttp);

describe('/users', () => {
  describe('get all users', () => {

  });

  describe('create new user', () => {
    it('has 200 status', () => {
      chai.request(app)
        .post('/user')
        .then(res => {
          expect(res).to.have.status(200);
        });
    });
  });

  describe('update user', () => {

  });

  describe('delete user', () => {

  });
});
