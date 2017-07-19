import { CleanHouseFrontPage } from './app.po';

describe('clean-house-front App', () => {
  let page: CleanHouseFrontPage;

  beforeEach(() => {
    page = new CleanHouseFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
