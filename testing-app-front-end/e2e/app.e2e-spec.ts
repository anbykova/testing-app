import { TestingAppFrontEndPage } from './app.po';

describe('testing-app-front-end App', function() {
  let page: TestingAppFrontEndPage;

  beforeEach(() => {
    page = new TestingAppFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
