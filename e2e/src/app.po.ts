import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getHomePageTitle(): Promise<string> {
    return element(by.css('app-root #home-content h2')).getText() as Promise<string>;
  }
}
