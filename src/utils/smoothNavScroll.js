export const smoothNavScroll = (e) => {
  e.preventDefault();

  const hash = e.target.parentElement.hash.substring(1);
  const sectionToScroll = document.getElementById(hash);

  sectionToScroll.scrollIntoView({ behavior: 'smooth' });
};

export const smoothOfferFormScroll = () => {
  document.getElementById('offer').scrollIntoView({ behavior: 'smooth' });
};
