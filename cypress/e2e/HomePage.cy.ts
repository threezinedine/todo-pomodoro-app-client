describe("The home page testing", () => {
    it('should navigate to the login at the fist time access to home route', () => {
        cy.intercept(
            {
                method: 'POST',
                url: '/users/login',
            },
            {
                statusCode: 200,
                body: {
                    user: {
                        userId: 1,
                        username: "threezinedine"
                    },
                    token: "testing_token"
                }
            }
        )

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

    it('should cannot login when the response from server is not 200', () => {
        cy.intercept(
            {
                method: 'POST',
                url: '/users/login',
            },
            {
                statusCode: 401,
                body: {
                    detail: "Unauthorized"
                }
            }
        )

        cy.visit("http://localhost:3000")

        cy.url().should('eq', 'http://localhost:3000/login')

        cy.get('[data-testid="username"]')
            .type("threezinedine")

        cy.get('[data-testid="password"]')
            .type("threezinedine")

        cy.get('[data-testid="submit"]')
            .click()

        cy.url().should('eq', 'http://localhost:3000/login')

        cy.contains("Unauthorized").should('exist')

        cy.wait(1000)
            .then(() => {
                cy.contains("Unauthorized").should('not.exist')
            })
    })
})
