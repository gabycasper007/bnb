import Themable from './themable.interface';

const theme: Themable = {
  id: 2,
  header: {
    backgroundColor: 'red'
  },
  footer: {
    backgroundColor: 'orange'
  },
  article: {
    backgroundColor: 'green'
  },
  sidebarRight: {
    backgroundColor: 'yellow'
  },
  section: {
    backgroundColor: 'pink'
  },
  secondSection: {
    backgroundColor: 'magenta'
  },
  button: {
    backgroundColor: 'blue',
    color: 'white'
  }
};

export default theme;
