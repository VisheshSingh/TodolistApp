import { TodolistappPage } from './app.po';

describe('todolistapp App', () => {
  let page: TodolistappPage;

  beforeEach(() => {
    page = new TodolistappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
