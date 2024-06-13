function CreateMenuItem(name, description) {
    const menuItem = document.createElement('div');

    menuItem.classList.add('menu-item');

    const foodName = document.createElement('h2');
    foodName.textContent = name;

    const foodDescription = document.createElement('p');
    foodDescription.textContent = description;

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

function CreateMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(
        CreateMenuItem(
            "Bruschetta de Tomate e Manjericão",
            "Pão italiano tostado, coberto com tomate fresco, manjericão, alho e um fio de azeite de oliva extra virgem."
        )
    );

    menu.appendChild(
        CreateMenuItem(
            "Risotto de Cogumelos Selvagens",
            "Arroz arbóreo cremoso com uma seleção de cogumelos selvagens, finalizado com parmesão ralado e azeite trufado."
        )
    );

    menu.appendChild(
        CreateMenuItem(
            "Tiramisu",
            "Camadas de biscoitos de champagne embebidos em café e creme de mascarpone, polvilhadas com cacau."
        )
    );

    return menu;
}

function loadMenu(menu) {
    const content = document.getElementById('content');
    content.textContent = "";
    content.appendChild(CreateMenu());   
}

export default loadMenu;