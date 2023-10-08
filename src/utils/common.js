import { CONTACT_TYPE } from './constants';

 export const scrollToSection = id => {
   const element = document.getElementById(id);
   if (element) {
     element.scrollIntoView({ behavior: 'smooth' });
   }
 };

export const typeInput = type => {
  if (type === CONTACT_TYPE.TELEPHONE) {
    return 'tel';
  }
  if (type === CONTACT_TYPE.MAIL) {
    return 'email';
  }
  if (type === CONTACT_TYPE.TELEGRAM) {
    return 'text';
  }
};

export const patternInput = type => {
  if (type === CONTACT_TYPE.TELEPHONE) {
    return '[0-9]{10}';
  }
  if (type === CONTACT_TYPE.MAIL) {
    return '/^S+@S+.S+$/';
  }
  if (type === CONTACT_TYPE.TELEGRAM) {
    return '/^@[a-zA-Z0-9_]{2,20}$/';
  }
};

export const placeholderInput = type => {
  if (type === CONTACT_TYPE.TELEPHONE) {
    return '0961234567';
  }
  if (type === CONTACT_TYPE.MAIL) {
    return 'example@mail.com';
  }
  if (type === CONTACT_TYPE.TELEGRAM) {
    return '@qwerty';
  }
};
