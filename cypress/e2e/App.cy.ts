describe('Login Screen Test', () => {
    const usernameHaveLessThanFourCharactersErrorString = "The username should have at least 4 characters."
    const usernameHaveMoreThanFiftyCharactersErrorString = "The username should have maximum 50 characters." 
    const usernameCannotNotContainTheSpecialCharacter = "The username cannot contain the specical characters."
    const passwordHaveLessThanFourCharactersErrorString = "The password should have at least 4 characters."
    const passwordHaveMoreThanFiftyCharactersErrorString = "The password should have maximum 50 characters." 
    const loginErrorMessage = "Login error"
    const username = "threezinedine"
    const password = "password"
    const lessThanFourCharactersUsername = "thr"
    const moreThanFiftyCharactersUsername = "asdlfkhaoiwejfaslfasflkjflkdfhalskdfjaghasdfkjasdfalkjewjapvanap"
    const containTheSpecialCharacterUsername = "three!zinedine"
    const lessThanFourCharactersPassword = "thr"
    const moreThanFiftyCharactersPassword = "asdlfkhaoiwejfaslfasflkjflkdfhalskdfjaghasdfkjasdfalkjewjapvanap"
    const waitingTime = 3000


    it('should receive username and password then can be submitted', () => {
        cy.visit('http://localhost:3000')

        testLoginErrorWithUsernameInput(lessThanFourCharactersUsername, usernameHaveLessThanFourCharactersErrorString)
        testLoginErrorWithUsernameInput(moreThanFiftyCharactersUsername, usernameHaveMoreThanFiftyCharactersErrorString)
        testLoginErrorWithUsernameInput(containTheSpecialCharacterUsername, usernameCannotNotContainTheSpecialCharacter)

        writeOnUsernameThenBlur(username)

        testLoginErrorWithPasswordInput(lessThanFourCharactersPassword, passwordHaveLessThanFourCharactersErrorString)
        testLoginErrorWithPasswordInput(moreThanFiftyCharactersPassword, passwordHaveMoreThanFiftyCharactersErrorString)

        writeOnPasswordThenBlur(password)

        checkTextNonExist(passwordHaveLessThanFourCharactersErrorString)

        submitForm()
    })

    function testLoginErrorWithUsernameInput(text: string, error: string) {
        checkTextNonExist(error)
        writeOnUsernameThenBlur(text)
        checkTextExist(error)

        submitForm()
        checkTextExist(loginErrorMessage)

        cy.wait(waitingTime)
            .then(() => {
                checkTextNonExist(loginErrorMessage)
            })
    }

    function testLoginErrorWithPasswordInput(text: string, error: string) {
        checkTextNonExist(error)
        writeOnPasswordThenBlur(text)
        checkTextExist(error)

        submitForm()
        checkTextExist(loginErrorMessage)

        cy.wait(waitingTime)
            .then(() => {
                checkTextNonExist(loginErrorMessage)
            })
    }

    function checkTextExist(text: string) {
        cy.contains(text).should('exist')
    }

    function checkTextNonExist(text: string) {
        cy.contains(text).should('not.exist')
    }

    function writeOnUsernameThenBlur(text: string) {
        cy.get('[data-testid="username"]')
            .clear()
            .type(text)
            .blur()
    }

    function writeOnPasswordThenBlur(text: string) {
        cy.get('[data-testid="password"]')
            .clear()
            .type(text)
            .blur()
    }

    function submitForm() {
        cy.get('[data-testid="submit"]')
            .click()
    }
})
