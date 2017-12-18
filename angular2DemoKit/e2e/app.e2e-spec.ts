import { Angular2DemoKitPage } from './app.po';

describe('angular2-demo-kit App', () => {
  let page: Angular2DemoKitPage;

  beforeEach(() => {
    page = new Angular2DemoKitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
