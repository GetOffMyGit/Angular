import { DevNgPage } from './app.po';

describe('dev-ng App', () => {
  let page: DevNgPage;

  beforeEach(() => {
    page = new DevNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
