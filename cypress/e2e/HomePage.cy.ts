import {
    checkTextExist,
    checkTextNonExist,
    typeThenBlurByTestId,
    validRoute,
} from '../utils'


describe("The home page testing", () => {
    const usernameTestId = "username"
    const passwordTestId = "password"

    const username = "threezinedine"
    const password = "threezinedine"

    const unauthorizedErrorMessage = "Unauthorized"
    const waitingTime = 1000

    const homeUrl = "http://localhost:3000/"
    const loginUrl = "http://localhost:3000/login"

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

        cy.visit(homeUrl)

        validRoute(loginUrl)

        typeThenBlurByTestId(username, usernameTestId)
        typeThenBlurByTestId(password, passwordTestId)

        submitForm()

        validRoute(homeUrl)
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

        cy.visit(homeUrl)

        validRoute(loginUrl)

        typeThenBlurByTestId(username, usernameTestId)
        typeThenBlurByTestId(password, passwordTestId)
        submitForm()

        validRoute(loginUrl)

        checkTextExist(unauthorizedErrorMessage)

        cy.wait(waitingTime)
            .then(() => {
                checkTextNonExist(unauthorizedErrorMessage)
            })
    })

    const submitForm = () => {
        cy.get('[data-testid="submit"]')
            .click()
    }
})
