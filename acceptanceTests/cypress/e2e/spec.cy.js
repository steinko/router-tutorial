describe('shoul test Bookeeper appliocatuion', () => {
	
  it('Bookeeper page should cotain Bookeeper', () => {
    cy.visit('http://localhost:3000')
    cy.contains("Bookkeeper!")
  })


it('Bookepper page should cotain Invoices', () => {
    cy.visit('http://localhost:3000')
    cy.contains("Invoices")
  })

it('Bookeeper page should cotain Expences', () => {
    cy.visit('http://localhost:3000')
    cy.contains("Expenses")
  })

it('Invoice page should cotain Invoices', () => {
    cy.visit('http://localhost:3000')
    cy.contains("Invoices").click()
    cy.contains("Invoices")
  })

it('Expence page should cotain Expences', () => {
    cy.visit('http://localhost:3000')
    cy.contains("Expenses").click()
    cy.contains("Expenses")
  })

})