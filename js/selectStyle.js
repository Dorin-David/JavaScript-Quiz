import themes from './themes/themes.js';
const styleOptionsWrapper = document.querySelector('.settings-themes');

let theme = document.createElement('div');
const themeImage = document.createElement('img');

{/* <div class="theme-wrapper">
<img src="./public/assets/atom-one-dark.JPG" alt="a11y-dark_theme">
<h3>Atom One Dark</h3>
</div> */}


for(let [theme, path] of Object.entries(themes)) {
    const wrapper = document.createElement('div');
    const img = document.createElement('img');
    const themeName = document.createElement('h3');
    
    img.src = `../public/assets/${path}.JPG`;
    img.alt = theme + ' theme';
    themeName.textContent = theme;

    wrapper.classList.add('theme-wrapper')
    wrapper.append(img, themeName);
    styleOptionsWrapper.append(wrapper)

}




hljs.highlightAll();