"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var MagicPage = (function () {
    function MagicPage() {
    }
    MagicPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    MagicPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return MagicPage;
}());
exports.MagicPage = MagicPage;
//# sourceMappingURL=app.po.js.map