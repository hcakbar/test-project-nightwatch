module.exports = {
    tags: ['my-app'],
    'My App Test' : function (browser) {
         browser 
         .url('https://hcakbar.github.io/akbar/')
         .waitForElementVisible('body', 5000) 
         .assert.title('akbar$ >_')
         .assert.visible('.header-link') 
         .assert.visible('.banner')
         .click('a[href="#MY-WORKS"]')
         .assert.visible('.projects')
         .click('a[href="#CONTACT"]')     
         .assert.visible('.contact-me')   
         .pause(1000)
         .end();
       }
 };