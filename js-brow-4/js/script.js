const menu = [
  {
    name: 'Home',
    link: './index.html',
    items: []
  },
  {
    name: 'About',
    link: './index.html',
    items: []
  },
  {
    name: 'Products',
    link: '/products',
    items: [
      {
        name: 'Product 1',
        link: './products/1',
        items: []
      },
      {
        name: 'Product 2',
        link: './products/2',
        items: [
          {
            name: 'Product 2.1',
            link: './products/2/1',
            items: []
          },
        ]
      },
    ]
  },
  {
    name: 'Services',
    link: '/services',
    items: [
      {
        name: 'Service 1',
        link: '/services/1',
        items: [
          {
            name: 'Service 1.1',
            link: '/services/1/1',
            items: []
          },
        ]
      },
      {
        name: 'Service 2',
        link: '/services/2',
        items: [
          {
            name: 'Service 2.1',
            link: '/services/2/1',
            items: []
          },
          {
            name: 'Service 2.2',
            link: '/services/2/2',
            items: []
          },
        ]
      },
    ]
  },
]

const container = document.querySelector('.container');

const menuUl = document.createElement('ul');
menuUl.setAttribute("id", "container")

function createMenu(items, container) {
  items.forEach((item) => {
    // Crea un elemento li y agrega el nombre del elemento como texto dentro del li
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = item.name;
    a.href = item.link;
    li.appendChild(a);

    a.addEventListener('click', function (event) {
      event.preventDefault();
    });

    li.addEventListener('click',() => {
      // Remover la clase 'active' de todos los elementos del menú
      const items = document.querySelectorAll('li');
        items.forEach(function (item) {
          item.classList.remove('active');
        });
        // Agregar la clase 'active' al elemento actual
        li.classList.add('active');
    })
  
    if (item.items.length > 0) {
      // Si el elemento tiene elementos hijos, crea un submenú llamando recursivamente a la función createMenu
      const ul = document.createElement('ul');

      // Agrega un botón para expadir o contraer los submenús
      const button = document.createElement('button');
      button.textContent = '+';
      button.addEventListener('click', function () {
        const subMenu = this.nextElementSibling;
        subMenu.classList.toggle('show');    
      });
      li.appendChild(button);

      createMenu(item.items, ul);
      li.appendChild(ul);
    }

    // Agrega el elemento li al contenedor ul
    container.appendChild(li);
  });
}

// Llama a la función createMenu para crear el menú
createMenu(menu, menuUl);

// Agrega el contenedor ul al elemento padre en el DOM
container.appendChild(menuUl);






