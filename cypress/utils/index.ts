import { 
    TOKEN_KEY,
} from "../../src/constants"

const testToken = "testToken"


export const checkTextExist = (text: string): void => {
    cy.contains(text).should('exist')
}

export const checkTextNonExist = (text: string): void => {
    cy.contains(text).should('not.exist')
}

export const typeThenBlurByTestId = (text: string, testid: string) => {
    cy.get(`[data-testid="${testid}"]`)
        .clear()
        .type(text)
        .blur()
}

export const validRoute = (url: string) => {
    cy.url().should('eq', url)
}

export const setVerifiedToken = (status: number): void => {
    cy.intercept(
        {
            method: 'POST',
            url: '/users/verified',
        },
        {
            statusCode: status,
        }
    )
}

export const setupLoginValid = (status: number): void => {
    cy.intercept(
        {
            method: 'POST',
            url: '/users/login',
        },
        {
            statusCode: status,
            data: {
                user: {
                    userId: 1,
                    username: "threezinedine"
                },
                token: "testing_token"
            }
        }
    )
}

export const setupFetchCurrentDateData = (): void => {
    cy.intercept(
        {
            method: 'GET',
            url: '/tasks/current'
        },
        {
            statusCode: 200,
            body:[
                {
                    taskId: 1,
                    taskName: "Operating system",
                    taskType: "core",
                    finished: true,
                },
                {
                    taskId: 2,
                    taskName: "Networking",
                    taskType: "project",
                    finished: false,
                }
            ]  
        }
    )
}

export const setupExpiredToken = ():void => {
    setVerifiedToken(401)
    window.localStorage.setItem(TOKEN_KEY, testToken)
}

export const setupValidToken = ():void => {
    setVerifiedToken(200)
    window.localStorage.setItem(TOKEN_KEY, testToken)
}
