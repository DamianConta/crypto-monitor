const chai = require("chai")
const chaiHttp = require("chai-http");

const server = require("../bin/app")

chai.should();
chai.use(chaiHttp);

describe('Testing API',()=>{

    it('Ruta incorrecta 404 POST /x',(done)=>{
        chai.request(server.serverTest)
            .post('/x')
            .send({
                'propiedad' : 'incorrecta'
            })
            .end((err, response)=>{
                response.should.have.status(404)
                done();
            })
    });

    it('Login con Formato inválido 500 POST',(done)=>{
        chai.request(server.serverTest)
            .post('/v1/users/login')
            .type('form')
            .send("user=&password=")
            .end((err, response)=>{
                response.should.have.status(500)
                done();
            })
    });

        it('Formulario Register vacío POST',(done)=>{
            chai.request(server.serverTest)
                .post('/v1/users/sign-up')
                .type('form')
                .send({
                    'user' : '',
                    'password' : ''
                })
                .end((err, response)=>{
                    response.should.have.status(500)
                    done();
                })
        });

        it('Register con formato inválido',(done)=>{
            chai.request(server.serverTest)
                .post('/v1/users/sign-up')
                .type('form')
                .send({
                    'propiedad' : 'incorrecta'
                })
                .end((err, response)=>{
                    response.should.have.status(401)
                    done();
                })
        });

        var Token ="";

        it('Login con Formato válido',(done)=>{
            chai.request(server.serverTest)
                .post('/v1/users/login')
                .type('form')
                .send("user=testing&password=testing")
                .end((err, response)=>{
                    Token = response.body.token;
                    response.should.have.status(200);
                    done();
                })
        });

        it('Listado Coins con Token válido',(done)=>{
            chai.request(server.serverTest)
                .get('/v1/coins/list')
                .send("user=testing&password=testing")
                .set({
                    'Authorization': 'Bearer '+ Token,
                    "Access-Control-Allow-Origin" : "*",  
                    "Access-Control-Allow-Credentials" : true              
                })
                .end((err, response)=>{
                    response.should.have.status(200);
                    done();
                })
        });

        it('Listado Wallet',(done)=>{
            chai.request(server.serverTest)
                .post('/v1/coins/wallet/list')
                .send("user=testing&password=testing")
                .set({
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                    'Authorization': 'Bearer '+ Token,
                    "Access-Control-Allow-Origin" : "*",  
                    "Access-Control-Allow-Credentials" : true  
                })
                .end((err, response)=>{
                    response.should.have.status(200);
                    done();
                })
        });


});


