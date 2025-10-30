document.addEventListener('DOMContentLoaded', () => {
  const markers = document.querySelectorAll('svg g[id^="marker"]');
  const modal = document.querySelector('.modal');
  const overlay = modal.querySelector('.overlay');
  const modalCards = modal.querySelectorAll('[id^="modal-card_"]');

  if (!markers.length) {
    console.warn('Маркер(ы) не найдены — возможно SVG не inline или id другие.');
    return;
  }

  function hideAllCards() {
    modalCards.forEach(card => card.style.display = 'none');
  }

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  overlay.addEventListener('click', closeModal);

  markers.forEach(marker => {
    marker.style.cursor = 'pointer';
    marker.addEventListener('click', (e) => {
      const markerId = e.currentTarget.id;
      const number = markerId.split('_')[1];
      const targetCard = document.getElementById(`modal-card_${number}`);

      if (targetCard) {
        hideAllCards();
        targetCard.style.display = 'block';
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      } else {
        console.warn(`Не найдена карточка modal-card_${number}`);
      }
    });
  });
});