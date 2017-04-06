import { Myapi3Page } from './app.po';

describe('myapi3 App', () => {
  let page: Myapi3Page;

  beforeEach(() => {
    page = new Myapi3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
