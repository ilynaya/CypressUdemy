/// <reference types="Cypress" />

context("Test API from the Fake JSON Server", () => {

    it.only('API testing', () => {

        cy.request({
            method: 'POST',
            url: 'http://eaapp.somee.com/Account/Login',
            body: {
                "__RequestVerificationToken": "jJ27CGSB6SHC24F0oV5nGIcKmDPqG2WfwOCDZxTUIhJ8Tk9TiSYlzhrzuhP5Ct2rHTiOY46WawRVGy6qanY18HsdbKEeK0TqWjgOY9b6RZE1",
                "UserName": "admin",
                "Password": "password",
                "RememberMe": "false"
            },
            failOnStatusCode: false
        }).then(($res) => {
            expect($res.status).to.eql(500);
            expect($res.body).to.contain('<i>The required anti-forgery cookie &quot;__RequestVerificationToken&quot; is not present.</i>')
        })
    });


});
