describe("The home page testing", () => {
    it('should navigate to the login at the fist time access to home route', () => {
        cy.visit("http://localhost:3000")

        cy.url().should('eq', 'http://localhost:3000/login')

        cy.get('[data-testid="username"]')
            .type("threezinedine")

        cy.get('[data-testid="password"]')
            .type("threezinedine")

        cy.get('[data-testid="submit"]')
            .click()

        cy.url().should('eq', 'http://localhost:3000/')
    })
})
