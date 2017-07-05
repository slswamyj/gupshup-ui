import { browser, by, element } from 'protractor';

<<<<<<< HEAD
export class GupshupPage {
=======
export class DependPage {
>>>>>>> e60b8c18887ca63eac43dae39819b810b3e6a24e
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
