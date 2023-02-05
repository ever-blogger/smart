import '../../css/app/index.css';

import initClickHandler from './clickHandler';
import animateNavbar from './navbarAnimation';
import { determineColorModeSupport } from './colorModeToggle';
import keyClickHandler from './keyHandler';
import generatePagination from './pagination';
import { Saves } from './saves';

// eslint-disable-next-line no-undef
if (ENV === 'development') {
  const script = document.createElement('script');
  script.src = `http://${
    (window.location.host || 'localhost').split(':')[0]
  }:35729/livereload.js?snipver=1`;
  document.head.append(script);
  console.info('Reload script added');
}

initClickHandler();
animateNavbar();
determineColorModeSupport();
generatePagination();
keyClickHandler();
new Saves().init();
