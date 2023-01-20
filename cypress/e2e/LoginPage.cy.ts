describe('Login Screen Test', () => {
    const usernameHaveLessThanFourCharactersErrorString = "The username should have at least 4 characters."
    const usernameHaveMoreThanFiftyCharactersErrorString = "The username should have maximum 50 characters." 
    const usernameCannotNotContainTheSpecialCharacter = "The username cannot contain the specical characters."
    const passwordHaveLessThanFourCharactersErrorString = "The password should have at least 4 characters."
    const passwordHaveMoreThanFiftyCharactersErrorString = "The password should have maximum 50 characters." 
    const passwordDoesNotMatchErrorString = "The password does not match"
    const loginErrorMessage = "Login error"
    const registerErrorMessage = "Register error"
    const username = "threezinedine"
    const password = "password"
    const wrongPassword = "threezinedine"
    const lessThanFourCharactersUsername = "thr"
    const moreThanFiftyCharactersUsername = "asdlfkhaoiwejfaslfasflkjflkdfhalskdfjaghasdfkjasdfalkjewjapvanap"
    const containTheSpecialCharacterUsername = "three!zinedine"
    const lessThanFourCharactersPassword = "thr"
    const moreThanFiftyCharactersPassword = "asdlfkhaoiwejfaslfasflkjflkdfhalskdfjaghasdfkjasdfalkjewjapvanap"
    const waitingTime = 1000


    it('should receive username and password then can be submitted', () => {
        cy.visit('http://localhost:3000/login')

        testLoginErrorWithUsernameInput(lessThanFourCharactersUsername, usernameHaveLessThanFourCharactersErrorString)
        testLoginErrorWithUsernameInput(moreThanFiftyCharactersUsername, usernameHaveMoreThanFiftyCharactersErrorString)
        testLoginErrorWithUsernameInput(containTheSpecialCharacterUsername, usernameCannotNotContainTheSpecialCharacter)

        writeOnUsernameThenBlur(username)
        checkTextNonExist(usernameCannotNotContainTheSpecialCharacter)

        testLoginErrorWithPasswordInput(lessThanFourCharactersPassword, passwordHaveLessThanFourCharactersErrorString)
        testLoginErrorWithPasswordInput(moreThanFiftyCharactersPassword, passwordHaveMoreThanFiftyCharactersErrorString)

        writeOnPasswordThenBlur(password)

        checkTextNonExist(moreThanFiftyCharactersPassword)

        submitForm()
    })

    it('should receive the username ,password and valid password then can be submitted', () => {
        cy.visit("http://localhost:3000/register")

        testLoginErrorWithUsernameInput(lessThanFourCharactersUsername, usernameHaveLessThanFourCharactersErrorString, registerErrorMessage)
        testLoginErrorWithUsernameInput(moreThanFiftyCharactersUsername, usernameHaveMoreThanFiftyCharactersErrorString, registerErrorMessage)
        testLoginErrorWithUsernameInput(containTheSpecialCharacterUsername, usernameCannotNotContainTheSpecialCharacter, registerErrorMessage)

        writeOnUsernameThenBlur(username)
        checkTextNonExist(usernameCannotNotContainTheSpecialCharacter)

        testLoginErrorWithPasswordInput(lessThanFourCharactersPassword, passwordHaveLessThanFourCharactersErrorString, registerErrorMessage)
        testLoginErrorWithPasswordInput(moreThanFiftyCharactersPassword, passwordHaveMoreThanFiftyCharactersErrorString, registerErrorMessage)

        writeOnPasswordThenBlur(password)
        checkTextNonExist(moreThanFiftyCharactersPassword)

        writeOnPasswordValidatorThenBlur(wrongPassword)
        checkTextExist(passwordDoesNotMatchErrorString)
        
        submitForm()
        checkTextExist(registerErrorMessage)

        cy.wait(waitingTime)
            .then(() => {
                checkTextNonExist(registerErrorMessage)
            })

        writeOnPasswordValidatorThenBlur(password)
        checkTextNonExist(passwordDoesNotMatchErrorString)

        submitForm()
    })

    const testLoginErrorWithUsernameInput = (text: string, error: string, submitError: string = loginErrorMessage): void => {
        checkTextNonExist(error)
        writeOnUsernameThenBlur(text)
        checkTextExist(error)

        submitForm()
        checkTextExist(submitError)

        cy.wait(waitingTime)
            .then(() => {
                checkTextNonExist(submitError)
            })
    }

    const testLoginErrorWithPasswordInput = (text: string, error: string, submitError: string = loginErrorMessage): void => {
        checkTextNonExist(error)
        writeOnPasswordThenBlur(text)
        checkTextExist(error)

        submitForm()
        checkTextExist(submitError)

        cy.wait(waitingTime)
            .then(() => {
                checkTextNonExist(submitError)
            })
    }

    const checkTextExist = (text: string): void => {
        cy.contains(text).should('exist')
    }

    const checkTextNonExist = (text: string): void => {
        cy.contains(text).should('not.exist')
    }

    const writeOnUsernameThenBlur = (text: string): void => {
        cy.get('[data-testid="username"]')
            .clear()
            .type(text)
            .blur()
    }

    const writeOnPasswordThenBlur = (text: string): void => {
        cy.get('[data-testid="password"]')
            .clear()
            .type(text)
            .blur()
    }

    const writeOnPasswordValidatorThenBlur = (text: string): void => {
        cy.get('[data-testid="validator"]')
            .clear()
            .type(text)
            .blur()
    }

    const submitForm = (): void => {
        cy.get('[data-testid="submit"]')
            .click()
    }
})
