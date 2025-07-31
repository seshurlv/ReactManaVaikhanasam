// Scroll utility functions for better navigation experience

/**
 * Smoothly scroll to an element by ID
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} offset - Optional offset from the top (default: 80px for navbar)
 */
export const scrollToElement = (elementId, offset = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Parse hash from URL and scroll to the corresponding element
 * @param {number} delay - Delay before scrolling (default: 100ms)
 */
export const handleUrlHashScroll = (delay = 100) => {
  const hash = window.location.hash;
  if (hash) {
    const elementId = hash.substring(1); // Remove the # symbol
    setTimeout(() => {
      scrollToElement(elementId);
    }, delay);
  }
};

/**
 * Enhanced hash change handler for React Router
 */
export const handleHashFromReactRouter = () => {
  const href = window.location.href;
  const hashIndex = href.lastIndexOf('#');
  
  if (hashIndex > 0) {
    const elementId = href.substring(hashIndex + 1);
    // Handle React Router hash format like #/sections#elementId
    const cleanId = elementId.includes('#') ? elementId.split('#')[1] : elementId;
    
    if (cleanId) {
      setTimeout(() => {
        scrollToElement(cleanId);
      }, 150);
    }
  }
};
