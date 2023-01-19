describe('Login Screen Test', () => {
    const usernameHaveLessThanFourCharactersErrorString = "The username should have at least 4 characters."
    const passwordHaveLessThanFourCharactersErrorString = "The password should have at least 4 characters."


    it('should receive username and password then can be submitted', () => {
        cy.visit('http://localhost:3000')

        cy.contains(usernameHaveLessThanFourCharactersErrorString).should('not.exist')

        cy.get('[data-testid="username"]')
            .type("thr")
            .blur()

        cy.contains(usernameHaveLessThanFourCharactersErrorString)
            .should('exist')

        cy.get('[data-testid="submit"]')
            .click()

        cy.contains("Login error").should('exist')

        cy.wait(3000)
            .then(() => {
                cy.contains("Login error").should('not.exist')
            })

        cy.get('[data-testid="username"]')
            .type("eezinedine")

        cy.contains(usernameHaveLessThanFourCharactersErrorString)
            .should('not.exist')

        cy.get('[data-testid="password"]')
            .type("thr")
            .blur()

        cy.contains(passwordHaveLessThanFourCharactersErrorString)
            .should('exist')

        cy.get('[data-testid="submit"]')
            .click()

        cy.contains("Login error").should('exist')

        cy.wait(3000). 
            then(() => {
                cy.contains("Login error").should('not.exist')
        })

        cy.get('[data-testid="password"]')
            .type("eezinedine")
            .blur()

        cy.contains(passwordHaveLessThanFourCharactersErrorString).should('not.exist')

        cy.get('[data-testid="submit"]')
            .click()
    })
})
