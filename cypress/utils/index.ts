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
