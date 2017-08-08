/**
 * Created by tostaky on 21/07/17.
 */

"use strict";

const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiPromised = require('chai-as-promised');
const should = chai.should();

const app = require('../app.js');

chai.use(chaiHttp);

describe('API Route', ()=>{
    describe('index', ()=>{
        it('should be res 200', (()=> {
            chai.request(app)
                .get('/')
                .end(function (err, res) {
                    expect(res.statusCode).to.equal(200);
                });

        }));
        it('should be err', (()=> {
            chai.request(app)
                .get('/')
                .end(function (err, res) {
                    expect(res.statusCode).to.equal(404);
                })
        }))
    })
});
