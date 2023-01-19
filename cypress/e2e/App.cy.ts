describe('Login Screen Test', () => {
    const usernameHaveLessThanFourCharactersErrorString = "The username should have at least 4 characters."
    const passwordHaveLessThanFourCharactersErrorString = "The password should have at least 4 characters."
    const loginErrorMessage = "Login error"


    it('should receive username and password then can be submitted', () => {
        cy.visit('http://localhost:3000')

        checkTextNonExist(usernameHaveLessThanFourCharactersErrorString)
        writeOnUsernameThenBlur("thr")
        checkTextExist(usernameHaveLessThanFourCharactersErrorString)

        submitForm()
        checkTextExist(loginErrorMessage)

        cy.wait(3000)
            .then(() => {
                checkTextNonExist(loginErrorMessage)
            })

        writeOnUsernameThenBlur("eezinedine")
        checkTextNonExist(usernameHaveLessThanFourCharactersErrorString)

        writeOnPasswordThenBlur("thr")

        checkTextExist(passwordHaveLessThanFourCharactersErrorString)

        submitForm()
        checkTextExist(loginErrorMessage)

        cy.wait(3000). 
            then(() => {
                checkTextNonExist(loginErrorMessage)
        })

        writeOnPasswordThenBlur("eezinedine")

        checkTextNonExist(passwordHaveLessThanFourCharactersErrorString)

        submitForm()
    })

    function checkTextExist(text: string) {
        cy.contains(text).should('exist')
    }

    function checkTextNonExist(text: string) {
        cy.contains(text).should('not.exist')
    }

    function writeOnUsernameThenBlur(text: string) {
        cy.get('[data-testid="username"]')
            .type(text)
            .blur()
    }

    function writeOnPasswordThenBlur(text: string) {
        cy.get('[data-testid="password"]')
            .type(text)
            .blur()
    }

    function submitForm() {
        cy.get('[data-testid="submit"]')
            .click()
    }
})
