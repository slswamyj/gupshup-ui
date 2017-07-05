<<<<<<< HEAD
import { GupshupPage } from './app.po';

describe('gupshup App', () => {
  let page: GupshupPage;

  beforeEach(() => {
    page = new GupshupPage();
  });

<<<<<<< HEAD
  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
=======
  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
>>>>>>> 8b8fc8855e9124aae9707ee7f7ff9d26e4145c6b
=======
import { DependPage } from './app.po';

describe('depend App', () => {
  let page: DependPage;

  beforeEach(() => {
    page = new DependPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
>>>>>>> e60b8c18887ca63eac43dae39819b810b3e6a24e
  });
});
