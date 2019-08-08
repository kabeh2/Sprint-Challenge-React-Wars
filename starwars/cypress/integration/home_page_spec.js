describe("Home Page Tests", function() {
  it("Open Page, Click Next, Brings New Characters", function() {
    // Arrange - setup initial app state
    cy.visit("/");
    // - visit a web page

    // - query for an element
    // cy.contains(".MuiButtonBase-root").click();

    // Get Next Button and click
    cy.get(".makeStyles-button-380").click();

    // Act - take an action
    // cy.url().should("include", "/commands/actions");

    // // - interact with that element
    // cy.get(".action-email")
    //   .type("fake@email.com")
    //   .should("have.value", "fake@email.com");
    // Assert - make an assertion
    // - make an assertion about page content
  });
});
