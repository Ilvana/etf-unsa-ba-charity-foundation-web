import { EtfUnsaBaCharityFoundationWebPage } from './app.po';

describe('etf-unsa-ba-charity-foundation-web App', function() {
  let page: EtfUnsaBaCharityFoundationWebPage;

  beforeEach(() => {
    page = new EtfUnsaBaCharityFoundationWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
