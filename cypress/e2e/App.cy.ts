describe('Login Screen Test', () => {
    it('should receive username and password then can be submitted', () => {
        cy.visit('http://localhost:3000')

        cy.get('[data-testid="username"]')
            .type("threezinedine")

        cy.get('[data-testid="password"]')
            .type("threezinedine")

        cy.get('[data-testid="submit"]')
            .click()
    })
})
