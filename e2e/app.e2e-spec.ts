import { FlyerPage } from './app.po';

describe('flyer App', () => {
  let page: FlyerPage;

  beforeEach(() => {
    page = new FlyerPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
