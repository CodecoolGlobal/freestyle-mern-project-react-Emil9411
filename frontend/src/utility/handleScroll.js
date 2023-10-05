const handleScroll = (setter) => {
    if (
      window.innerHeight + Math.round(window.scrollY) >=
      document.body.offsetHeight - 1
    ) {
      setter((prevLoadedItems) => prevLoadedItems + 12);
    }
  };

  export default handleScroll;