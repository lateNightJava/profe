import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src';
import { User } from '../../../src/models';

const expect = chai.expect;
chai.use(chaiHttp);

describe('Auth route: /api/auth', function () {
  const user = {
    name: 'Juanito Morales',
    email: '123fake@email.com',
    password: '123456',
    accountType: 'client',
  };
  let token;

  beforeEach(async function () {
    await User.deleteMany({});

    const res = await chai.request(app)
      .post('/api/users')
      .send(user);

    token = res.body.token;
  });

  describe('GET fetches auth user info', function () {
    describe('Successful fetch', function () {
      it('Fetches user info with token', async function () {
        const res = await chai.request(app)
          .get('/api/auth')
          .set('x-auth-token', token)
          .send();

        expect(res).to.have.status(200);
        expect(res.body).to.have.property('_id');
        expect(res.body.name).to.equal(user.name);
        expect(res.body.email).to.equal(user.email);
        expect(res.body.accountType).to.equal(user.accountType);
      });
    });

    describe('Unsuccessful fetch', function () {
      it('Responds with error for no token', async function () {
        const res = await chai.request(app)
          .get('/api/auth')
          .send();

        expect(res).to.have.status(401);
        expect(res.body).to.have.property('errors');
        expect(res.body.errors).to.be.an('array');
        expect(res.body.errors.length).to.equal(1);
        expect(res.body.errors[0].msg).to.equal('No Token. Please sign in.');
      });

      it('Responds with error for invalid token', async function () {
        const res = await chai.request(app)
          .get('/api/auth')
          .set('x-auth-token', `${token}1`)
          .send();

        expect(res).to.have.status(401);
        expect(res.body).to.have.property('errors');
        expect(res.body.errors).to.be.an('array');
        expect(res.body.errors.length).to.equal(1);
        expect(res.body.errors[0].msg).to.equal('Invalid token. Please sign in.');
      });

      it('Responds with error for deleted user', async function () {
        await User.deleteMany({});

        const res = await chai.request(app)
          .get('/api/auth')
          .set('x-auth-token', token)
          .send();

        expect(res).to.have.status(404);
        expect(res.body).to.have.property('errors');
        expect(res.body.errors).to.be.an('array');
        expect(res.body.errors.length).to.equal(1);
        expect(res.body.errors[0].msg).to.equal('User does not exist. Please Sign Up or Login.');
      });
    });
  });

  describe('POST login user', function () {
    describe('Successful login', function () {
      it('Responds with token', async function () {
        const res = await chai.request(app)
          .post('/api/auth')
          .send({ email: user.email, password: user.password });

        expect(res).to.have.status(201);
        expect(res.body).to.have.property('token');
      });
    });

    describe('Unsuccessful login', function () {
      it('Requires email', async function () {
        const res = await chai.request(app)
          .post('/api/auth')
          .send({ password: user.password });

        expect(res).to.have.status(400);
        expect(res.body).to.have.property('errors');
        expect(res.body.errors).to.be.an('array');
        expect(res.body.errors.length).to.equal(1);
        expect(res.body.errors[0].msg).to.equal('Please include a valid email.');
      });

      it('Requires password', async function () {
        const res = await chai.request(app)
          .post('/api/auth')
          .send({ email: user.email });

        expect(res).to.have.status(400);
        expect(res.body).to.have.property('errors');
        expect(res.body.errors).to.be.an('array');
        expect(res.body.errors.length).to.equal(1);
        expect(res.body.errors[0].msg).to.equal('Password is required.');
      });

      it('Responds with error message for invalid email', async function () {
        const res = await chai.request(app)
          .post('/api/auth')
          .send({ email: 'wrong1fake@email.com', password: user.password });

        expect(res).to.have.status(401);
        expect(res.body).to.have.property('errors');
        expect(res.body.errors).to.be.an('array');
        expect(res.body.errors.length).to.equal(1);
        expect(res.body.errors[0].msg).to.equal('Please check email and password combination.');
      });

      it('Responds with error message for invalid password', async function () {
        const res = await chai.request(app)
          .post('/api/auth')
          .send({ email: user.email, password: '123455' });

        expect(res).to.have.status(401);
        expect(res.body).to.have.property('errors');
        expect(res.body.errors).to.be.an('array');
        expect(res.body.errors.length).to.equal(1);
        expect(res.body.errors[0].msg).to.equal('Please check email and password combination.');
      });
    });
  });
});
