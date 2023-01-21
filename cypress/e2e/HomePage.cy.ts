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
    const tokenExpiredErrorMessage = "Token expired"

    const loginSuccessfullyNotificationMessage = "Login successfully"

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

        cy.intercept(
            {
                method: 'POST',
                url: '/users/verified',
            },
            {
                statusCode: 200,
            }
        )

        cy.visit(homeUrl)

        validRoute(loginUrl)

        typeThenBlurByTestId(username, usernameTestId)
        typeThenBlurByTestId(password, passwordTestId)

        submitForm()

        cy.wait(100)
            .then(() => {
                validRoute(homeUrl)
                checkTextExist(loginSuccessfullyNotificationMessage)

                cy.wait(waitingTime)
                    .then(() => {
                        checkTextNonExist(loginSuccessfullyNotificationMessage)
                    })
            })

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

    it('should not navigate to login url when the token is verified', () => {
        cy.intercept(
            {
                method: 'POST',
                url: '/users/verified',
            },
            {
                statusCode: 200,
            }
        )

        window.localStorage.setItem("token", "test_token")
        cy.visit(homeUrl)

        cy.wait(100)
            .then(() => {
                validRoute(homeUrl)
            })
    })

    it('should navigate to login url when the token is expired', () => {
        cy.intercept(
            {
                method: 'POST',
                url: '/users/verified',
            },
            {
                statusCode: 401,
            }
        )

        window.localStorage.setItem("token", "test_token")
        cy.visit(homeUrl)

        cy.wait(waitingTime)
            .then(() => {
                validRoute(loginUrl)
            })

        checkTextExist(tokenExpiredErrorMessage)

        cy.wait(waitingTime)
            .then(() => {
                checkTextNonExist(tokenExpiredErrorMessage)
            })
    })

    const submitForm = (): void => {
        cy.get('[data-testid="submit"]')
            .click()
    }

})
