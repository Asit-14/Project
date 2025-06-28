
	const statsElement = document.querySelector('.stats');

  statsElement.addEventListener('animationend', () => {
		// Restart after delay
		setTimeout(() => {
			statsElement.style.animation = 'none'; // Remove animation
			void statsElement.offsetWidth;         // Trigger reflow
			statsElement.style.animation = 'scrollStats 20s linear 1'; // Reapply
		}, 1000); // 1 second pause before restarting
  });

