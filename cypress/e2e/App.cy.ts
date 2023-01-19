describe('Login Screen Test', () => {
    const usernameHaveLessThanFourCharactersErrorString = "The username should have at least 4 characters."

    it('should receive username and password then can be submitted', () => {
        cy.visit('http://localhost:3000')

        cy.contains(usernameHaveLessThanFourCharactersErrorString).should('not.exist')

        cy.get('[data-testid="username"]')
            .type("thr")
            .blur()

        cy.contains(usernameHaveLessThanFourCharactersErrorString).should('exist')

        cy.get('[data-testid="submit"]')
            .click()

        cy.contains("Login error").should('exist')

        cy.get('[data-testid="username"]')
            .type("eezinedine")

        cy.contains(usernameHaveLessThanFourCharactersErrorString).should('not.exist')

        cy.get('[data-testid="password"]')
            .type("threezinedine")

        cy.get('[data-testid="submit"]')
            .click()
    })
})
