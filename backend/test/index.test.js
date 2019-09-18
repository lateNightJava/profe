import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src';

const expect = chai.expect;
chai.use(chaiHttp);

describe('App/Server', function () {
  it('App should exist', function () {
    expect(app).to.be.a('function');
  });

  it('GET / should return 200 and message', async function () {
    const res = await chai.request(app).get('/');

    expect(res).to.have.status(200);
    expect(res.body.message).to.equal('Welcome to Teechuh.com API');
  });
});
