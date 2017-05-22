"use strict";
var protractor_1 = require('protractor');
var StorePage = (function () {
    function StorePage() {
    }
    StorePage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    StorePage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return StorePage;
}());
exports.StorePage = StorePage;
