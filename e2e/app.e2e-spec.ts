import { AppRxPage } from './app.po';

describe('app-rx App', () => {
  let page: AppRxPage;

  beforeEach(() => {
    page = new AppRxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
