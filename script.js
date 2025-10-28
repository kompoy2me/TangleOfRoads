document.addEventListener('DOMContentLoaded', () => {
  const markers = document.querySelectorAll('svg g[id^="marker"]');

  if (!markers.length) {
    console.warn('Маркер(ы) не найдены — возможно SVG не inline или id другие.');
    return;
  }

  markers.forEach(marker => {
    marker.style.cursor = 'pointer';
    marker.addEventListener('click', (e) => {
      const id = e.currentTarget.id;
      alert('Клик по маркеру: ' + id);
    });
  });
});