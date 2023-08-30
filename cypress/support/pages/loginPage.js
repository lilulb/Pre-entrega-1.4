export class LoginPage {
    constructor () {
    this.userInput = '#user';
    this.passInput = '#pass';
    this.loginButton = '#submitForm'
    };
    
    escribirUsuario(usuario){
    cy.get(this.userInput).type(usuairo);
    };
    
    escribirContraseña(contreseña){
    (this.passInput).type(contraseña);
    };
    
    clickloginButton(){
    cy.get(this.loginButton).click();
    };
};