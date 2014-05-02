describe('Blur spec does not work', function() {
    var ptor = protractor.getInstance();

    it('should load', function() {
        browser.get('');
        expect(element(by.css('body')).getInnerHtml()).not.toBe(null);
    });

    it('does not see the blur event', function(){
        browser.get('');
        element(by.id('email')).sendKeys('anemail@example.com');
        // Lose focus from email input field
        element(by.id('blurEmail')).click();
        expect(element(by.id('blurEmail')).getText()).toMatch(/anemail/);
    });
});