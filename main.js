window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
}

function showNavOnScroll() {
  navigation = document.getElementById('navigation')

  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
  nav.classList.add('menu')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
