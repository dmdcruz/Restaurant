function loadInitialPage(content) {
    const title = document.createElement('h1');
    const headline = document.createElement('h2');

    title.innerHTML = 'Restaurant';
    title.classList.add('title');

    headline.innerHTML = 'Inovação que Satisfaz Paladares Exigentes';
    headline.classList.add('headline');

    content.appendChild(title);
    content.appendChild(headline);

}

export {loadInitialPage};