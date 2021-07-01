import themes from './themes/themes.js';

const styleOptionsWrapper = document.querySelector('.settings-themes');
const currentStyle = document.querySelector('#code-style');


function selectTheme(){
    const currentTheme = localStorage.getItem('currentTheme');
    for(let [theme, path] of Object.entries(themes)) {
        const wrapper = document.createElement('div');
        const img = document.createElement('img');
        const themeName = document.createElement('h3');
        
        img.src = `../public/assets/${path}.JPG`;
        img.alt = theme + ' theme';
        themeName.textContent = theme;
    
        wrapper.classList.add('theme-wrapper');
        if(currentTheme === theme) wrapper.classList.add('selected');
        wrapper.append(img, themeName);
        wrapper.dataset.theme = theme;
        styleOptionsWrapper.append(wrapper)
    
        wrapper.addEventListener('click', function(){
            const options = document.querySelectorAll('.theme-wrapper');
    
            [...options].forEach(option => option.classList.remove('selected'));
            wrapper.classList.add('selected');
            currentStyle.href = `./code_styles/${path}.css`;
            localStorage.setItem('currentTheme', theme);
            localStorage.setItem('currentThemePath', path)
        
        })    
    }    
    hljs.highlightAll();
}

export default selectTheme