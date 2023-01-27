const faker = require('@faker-js/faker').faker;
const express = require('express');
const app = express();
const port = 7000;

class Usuario {
    constructor() {
        this._id = faker.datatype.uuid(),
        this.nombre = faker.name.firstName();
        this.apellido = faker.name.lastName(),
        this.numero = faker.phone.number();
        this.email = faker.internet.email();
        this.contrasenha = faker.internet.password();
    }
} 

class Empresa {
    constructor() {
        this._id = faker.datatype.uuid(),
        this.nombre = faker.company.name();
        this.direccion = {
            calle: faker.address.streetAddress(),
            ciudad: faker.address.cityName(),
            estado: faker.address.state(),
            cod_postal: faker.address.zipCode(),
            pais: faker.address.country()
        }
    }
} 

app.get("/api/users/new", (req, res) => {
    res.json(new Usuario());
});

app.get("/api/companies/new", (req, res) => {
    res.json(new Empresa());
});

app.get("/api/user/company", (req, res) => {
    res.json( { Usuario: new Usuario() , Empresa: new Empresa() } );
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );