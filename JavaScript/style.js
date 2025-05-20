 const lastAnimatedElement = document.querySelector('.particle711');
    if (lastAnimatedElement) {
      lastAnimatedElement.addEventListener(lastAnimatedElement, () => {
        // Redirect to another page after animation ends
        window.location.href = '/welcome.html';
      });
    }

    // Fallback: Redirect after 10 seconds if animationend doesn't fire
    setTimeout(() => {
      window.location.href = '/welcome.html';
    }, 7500);