/// <reference types="Cypress" />
import '@percy/cypress';

describe("Testing of EA App", () => {

    beforeEach("Call for a purticular it block", () => {
        cy.visit("http://www.executeautomation.com/site");
    })

    it("Testing EA Site for assertion", () => {
        //Implicit assertions
        //cy.get("[aria-label='jump to slide 2']",{timeout:60000}).should('have.class','ls-nav-active');

        cy.percySnapshot();
        //Explicit assertions
        cy.get("[aria-label='jump to slide 2']",{timeout:60000}).should(($x) => {
            expect($x).to.have.class("ls-nav-active");
        })
        cy.percySnapshot();
    })
    it("Testing EA Site for assertion with hooks", () => {
        cy.percySnapshot();
        //Explicit assertions
        cy.get("[aria-label='jump to slide 2']",{timeout:60000}).should(($x) => {
            expect($x).to.have.class("ls-nav-active");
        })
        cy.percySnapshot();
    })

})