const img = document.querySelector('.profile-pic')

img.addEventListener('mouseover', () => {
  img.src = './assets/profile-pic-cat.png'
})

img.addEventListener('mouseout', () => {
  img.src = './assets/profile-pic.png'
})