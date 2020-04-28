import Themable from './themable.interface';

const theme: Themable = {
  id: 1,
  header: {
    backgroundColor: '#4F5A27'
  },
  footer: {
    backgroundColor: '#CCC870'
  },
  article: {
    backgroundColor: '#FCE1A7'
  },
  sidebarRight: {
    backgroundColor: '#F5D36A'
  },
  section: {
    backgroundColor: '#68933A'
  },
  secondSection: {
    backgroundColor: '#948B76'
  },
  button: {
    background:
      'linear-gradient(to right bottom, rgba(240,187,15,1), rgba(250,215,56,1))'
  }
};

export default theme;
