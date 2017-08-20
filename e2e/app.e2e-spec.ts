import { PrimeNoPage } from './app.po';

describe('prime-no App', () => {
  let page: PrimeNoPage;

  beforeEach(() => {
    page = new PrimeNoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
