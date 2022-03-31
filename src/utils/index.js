export const isMobile = () => {
  return (
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
    typeof window.orientation !== 'undefined'
  );
};

export const isAppleDevice = () => {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
};

export const isSafari = () =>
  navigator.vendor && navigator.vendor.indexOf('Apple') > -1;
