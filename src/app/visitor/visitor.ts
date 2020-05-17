export class Visitor {
  name?: string;
  phoneNumber?: string;
  bodyTemperature?: number;
  url?: string;

  constructor(url: string) {
    this.url = atob(url);
  }

  getSubmitUrl() {
    return this.url.replace('name', encodeURIComponent(this.name))
      .replace('phone', this.phoneNumber).replace('temp', this.bodyTemperature.toString())
      .replace('viewform', 'formResponse') + '&submit=submit';
  }
}
