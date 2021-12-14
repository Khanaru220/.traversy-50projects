const containerEl = document.querySelector('.container');

const imageBlockEls = document.querySelectorAll('.image-block');

containerEl.addEventListener('click', e => {
  console.log(e.target);
  // prevent click <body>
  if (e.target.classList.contains('image-block')) {
    if (!e.target.classList.contains('active')) {
      imageBlockEls.forEach(el => el.classList.remove('active'));
      e.target.classList.add('active');
    }
    // turn to same flex all, if click active block
    else e.target.classList.remove('active');
  }
});

// Animation for .container (none -> flex)

document.querySelector('.container').style.display = 'none';
setTimeout(
  () => (document.querySelector('.container').style.display = 'flex'),
  4800
);

// Animation for h1
setTimeout(() => {
  document.querySelector('h1').style.display = 'none';
}, 5000);
