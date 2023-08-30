export class HomePage{
    constructor(){
    this.OnlineShopButton = '#onlineshoplink';
    };

    clickOnlineShopButton (){
    cy.get(this.OnlineShopButton).click();
    };
};