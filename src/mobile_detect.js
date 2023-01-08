import IsMobileJS from 'ismobilejs';

export const mobileDetect = new IsMobileJS(window.navigator.userAgent);

export const isTablet = (isMandatoryScreenWidthCheck = true) =>
  document.documentElement.clientWidth < 1024 || (
    mobileDetect.tablet && (
      !isMandatoryScreenWidthCheck ||
        document.documentElement.clientWidth <= 1023
    )
  );

export const isPhone = (isMandatoryScreenWidthCheck = true) =>
  document.documentElement.clientWidth < 768 || (
    mobileDetect.phone && (
      !isMandatoryScreenWidthCheck ||
        document.documentElement.clientWidth <= 480
    )
  );

export const isMobile = (isMandatoryScreenWidthCheck = true) =>
  document.documentElement.clientWidth < 1024 || (
    mobileDetect.any && (
      !isMandatoryScreenWidthCheck ||
        document.documentElement.clientWidth <= 1023
    )
  );
