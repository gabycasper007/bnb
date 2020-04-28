type StringOrNumber = string | number;

export default interface Themable {
  id: number;
  header: {
    [key: string]: StringOrNumber;
  };
  footer: {
    [key: string]: StringOrNumber;
  };
  article: {
    [key: string]: StringOrNumber;
  };
  sidebarRight: {
    [key: string]: StringOrNumber;
  };
  section: {
    [key: string]: StringOrNumber;
  };
  secondSection: {
    [key: string]: StringOrNumber;
  };
  button: {
    [key: string]: StringOrNumber;
  };
}
