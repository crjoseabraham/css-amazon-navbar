const btnDepartments = document.getElementById('btn-departments'),
      btnCloseMenu = document.getElementById('btn-menu-close'),
      grid = document.getElementById('grid'),
      containerSubcategories = document.querySelector('#menu .container-subcategories'),
      isMobile = () => window.innerWidth <= 800

btnDepartments.addEventListener('mouseover', () => {
  if (!isMobile())
    grid.classList.add('active')
})

grid.addEventListener('mouseleave', () => {
  if (!isMobile())
    grid.classList.remove('active')
})

document.querySelectorAll('#menu .categories a').forEach(element => {
  element.addEventListener('mouseenter', el => {
    if (!isMobile()) {
      document.querySelectorAll('#menu .subcategory').forEach(category => {
        category.classList.remove('active')
  
        if (category.dataset.category === el.target.dataset.category)
          category.classList.add('active')
      })
    }
  })
})

// EventListeners for mobile devices
document.querySelector('#btn-menu-bars').addEventListener('click', e => {
  e.preventDefault()
  document.querySelector('#menu .container-nav-links').classList.toggle('active')

  if (document.querySelector('#menu .container-nav-links').classList.contains('active'))
    document.querySelector('body').style.overflow = 'hidden'
  else 
  document.querySelector('body').style.overflow = 'visible'
})

// Click on 'All departments' for mobile
btnDepartments.addEventListener('click', e => {
  e.preventDefault()
  grid.classList.add('active')
  btnCloseMenu.classList.add('active')
})

// 'Back' button in Categories menu
document.querySelector('#grid .categories .btn-back').addEventListener('click', e => {
  e.preventDefault()
  grid.classList.remove('active')
  btnCloseMenu.classList.remove('active')
})

document.querySelectorAll('#menu .categories a').forEach(element => {
  element.addEventListener('click', e => {
    if (isMobile()) {
      containerSubcategories.classList.add('active')
      document.querySelectorAll('#menu .subcategory').forEach(category => {
        category.classList.remove('active')

        if (category.dataset.category === e.target.dataset.category) {
          category.classList.add('active')
        }
      })
    }
  })
})

// 'Back' button in Subcategories menu
document.querySelectorAll('#grid .container-subcategories .btn-back').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault()
    containerSubcategories.classList.remove('active')
  })
})

btnCloseMenu.addEventListener('click', e => {
  e.preventDefault()
  document.querySelectorAll('#menu .active').forEach(element => {
    element.classList.remove('active')
  })
  document.querySelector('body').style.overflow = 'visible'
})