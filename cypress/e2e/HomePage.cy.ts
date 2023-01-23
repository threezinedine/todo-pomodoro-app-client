import {
    checkTextExist,
    checkTextNonExist,
    typeThenBlurByTestId,
    validRoute,
    setupValidToken,
    setupExpiredToken,
    setVerifiedToken,
    setupLoginValid,
    setupFetchCurrentDateData,
    checkComponentExistById,
    clickButtonWithTestId,
    clickByText,
    setUpFirstTestTask,
    setUpSecondTestTask,
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
    const pomodoroUrl = "http://localhost:3000/pomodoro"

    const startButtonText = "Start"
    const stopButtonText = "Stop"
    const brandId = "brand"

    const firstTestTaskName = "Operating system"
    const secondTestTaskName = "Networking"

    const testDefaultTime = "45:00"

    it('should navigate to the login at the fist time access to home route', () => {
        setupLoginValid(200)
        setVerifiedToken(200)

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
        setupLoginValid(401)
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
        setupValidToken()
        cy.visit(homeUrl)

        cy.wait(100)
            .then(() => {
                validRoute(homeUrl)
            })

        cy.get('[data-testid="logout"]')
            .click()

        cy.wait(100)
            .then(() => {
                validRoute(loginUrl)
            })

    })

    it('should navigate to login url when the token is expired', () => {
        setupExpiredToken()
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

        cy.visit(homeUrl)

        cy.wait(100)
            .then(() => {
                validRoute(loginUrl)
            })
    })

    it('should display the taskName when the home page is represent', () => {
        setupValidToken()
        setupFetchCurrentDateData()

        cy.visit(homeUrl)

        checkTextExist("Operating system")
        checkTextExist("Networking")
    })

    const submitForm = (): void => {
        cy.get('[data-testid="submit"]')
            .click()
    }

    it('should display error when the reponse is not valid', () => {
        setupValidToken()

        cy.visit(homeUrl)

        checkTextExist("Cannot fetch data")
    })

    it('should have the sidebar component and header component inside the home page', () => {
        setupValidToken()

        cy.visit(homeUrl)

        checkComponentExistById("header")
        checkComponentExistById("sidebar")

        clickButtonWithTestId("brand")

        validRoute(homeUrl)

        cy.visit(pomodoroUrl)
        clickButtonWithTestId("brand")
        validRoute(homeUrl)

    })

    it("should navigate to the pomodoro route when the task's name is clicked", () => {
        setupValidToken()
        setupFetchCurrentDateData()

        cy.visit(homeUrl)

        clickByText(firstTestTaskName)

        setUpFirstTestTask()

        validRoute(pomodoroUrl)
        checkTextExist(testDefaultTime)
        checkTextExist(firstTestTaskName)
        checkButtonWorking()
        clickButtonWithTestId(brandId)
        validRoute(homeUrl)

        setUpSecondTestTask()

        clickByText(secondTestTaskName)
        validRoute(pomodoroUrl)
        checkTextExist(testDefaultTime)
        checkTextExist(secondTestTaskName)
        checkButtonWorking()
        clickButtonWithTestId(brandId)
        validRoute(homeUrl)
    })

    const checkButtonWorking = () => {
        checkTextExist(startButtonText)
        checkTextNonExist(stopButtonText)
        clickByText(startButtonText)

        checkTextNonExist(startButtonText)
        checkTextExist(stopButtonText)
        clickByText(stopButtonText)

        checkTextExist(startButtonText)
        checkTextNonExist(stopButtonText)
    }
})
