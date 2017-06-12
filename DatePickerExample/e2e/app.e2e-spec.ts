import { DatePickerExamplePage } from './app.po';

describe('date-picker-example App', () => {
  let page: DatePickerExamplePage;

  beforeEach(() => {
    page = new DatePickerExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
