import { CasalimpiaFrontPage } from './app.po';

describe('casalimpia-front App', () => {
  let page: CasalimpiaFrontPage;

  beforeEach(() => {
    page = new CasalimpiaFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
