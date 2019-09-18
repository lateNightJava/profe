import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src';
import { User } from '../../../src/models';

const expect = chai.expect;
chai.use(chaiHttp);

describe('Users route: /api/users', function () {
  beforeEach(async function () {
    await User.deleteMany({});
  });

  describe('POST creates new user', function () {
    const user = {
      name: 'Juanito Morales',
      email: '123fake@email.com',
      password: '123456',
      accountType: 'client',
    };

    describe('Successful creation', function () {
      it('Returns new client user', async function () {
        const res = await chai.request(app)
          .post('/api/users')
          .send(user);

        expect(res).to.have.status(201);
        expect(res.body).to.have.property('token');
      });

      it('Returns new instructor user', async function () {
        const instructor = Object.assign({}, user, { accountType: 'instructor' });

        const res = await chai.request(app)
          .post('/api/users')
          .send(instructor);

        expect(res).to.have.status(201);
        expect(res.body).to.have.property('token');
      });
    });

    describe('Unsuccessful creation', function () {
      it('Requires name', async function () {
        const noName = Object.assign({}, user, { name: '' });

        const res = await chai.request(app)
          .post('/api/users')
          .send(noName);

        expect(res).to.have.status(400);
        expect(res.body).to.have.property('errors');
        expect(res.body.errors).to.be.an('array');
        expect(res.body.errors.length).to.equal(1);
        expect(res.body.errors[0].msg).to.equal('Please provide a name.');
      });

      it('Requires email', async function () {
        const noEmail = Object.assign({}, user, { email: '' });

        const res = await chai.request(app)
          .post('/api/users')
          .send(noEmail);

        expect(res).to.have.status(400);
        expect(res.body).to.have.property('errors');
        expect(res.body.errors).to.be.an('array');
        expect(res.body.errors.length).to.equal(1);
        expect(res.body.errors[0].msg).to.equal('Please provide a valid email.');
      });

      it('Requires password', async function () {
        const noPassword =  Object.assign({}, user, { password: '' });

        const res = await chai.request(app)
          .post('/api/users')
          .send(noPassword);

        expect(res).to.have.status(400);
        expect(res.body).to.have.property('errors');
        expect(res.body.errors).to.be.an('array');
        expect(res.body.errors.length).to.equal(1);
        expect(res.body.errors[0].msg).to.equal('Please provide a password with 6 or more characters.');
      });

      it('Requires account type', async function () {
        const noAccountType =  Object.assign({}, user, { accountType: '' });

        const res = await chai.request(app)
          .post('/api/users')
          .send(noAccountType);

        expect(res).to.have.status(400);
        expect(res.body).to.have.property('errors');
        expect(res.body.errors).to.be.an('array');
        expect(res.body.errors.length).to.equal(1);
        expect(res.body.errors[0].msg).to.equal('Please provide a valid account type.');
      });

      it('Does not allow existing email', async function () {
        await chai.request(app)
          .post('/api/users')
          .send(user);

        const res = await chai.request(app)
          .post('/api/users')
          .send(user);

        expect(res).to.have.status(400);
        expect(res.body).to.have.property('errors');
        expect(res.body.errors).to.be.an('array');
        expect(res.body.errors.length).to.equal(1);
        expect(res.body.errors[0].msg).to.equal('This account already exists. Please sign in.');
      });
    });
  });
});
