import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/index.js';
import { User } from '../../src/models/index.js';

const expect = chai.expect;
chai.use(chaiHttp);

describe('/users', () => {
  beforeEach(async () => await User.deleteMany({}));

  describe('get all users', () => {

  });

  describe('create new user', () => {
    const user1 = {
      email: '123fake@email.com',
      password: '123456',
      accountType: 'Client',
    };

    const usersPostReq = (user, testCb) => (
      chai.request(app)
        .post('/user')
        .send(user)
        .then(res => testCb(res))
        .catch(err => { throw err; })
    );

    describe('Successful Creation', () => {
      it ('returns new client user', () => {
        usersPostReq(user1, res => {
          console.log(res.body);
          expect(res).to.have.status(201);
          expect(res.body).to.have.property('email', user1.email);
          expect(res.body).to.have.property('accountType', user1.accountType);
        });
      });

      it ('returns new instructor user', () => {
        const instructor = Object.assign({}, user1, { accountType: 'Instructor' });

        usersPostReq(instructor, res => {
          console.log(res.body);
          expect(res).to.have.status(201);
          expect(res.body).to.have.property('email', instructor.email);
          expect(res.body).to.have.property('accountType', instructor.accountType);
        });
      });
    });

    describe('Unsuccessful Creation', () => {
      const failedCb = res => {
        console.log(res.body);
        expect(res).to.have.status(400);
        expect(res.body).to.have.property('message');
      };

      it ('requires email', () => {
        const noEmail = Object.assign({}, user1, { email: '' });
        usersPostReq(noEmail, failedCb);
      });

      it ('requires password', () => {
        const noPassword =  Object.assign({}, user1, { password: '' });
        usersPostReq(noPassword, failedCb);
      });

      it ('requires account type', () => {
        const noAccountType =  Object.assign({}, user1, { accountType: '' });
        usersPostReq(noAccountType, failedCb);
      });
    });
  });

  // describe('update user', () => {
  //
  // });
  //
  // describe('delete user', () => {
  //
  // });
});
