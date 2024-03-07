describe("Testing my site with cypress", () => {
    it("check that it opens with localhost:8080", () => {
        cy.visit("http://localhost:8080");
    });
});