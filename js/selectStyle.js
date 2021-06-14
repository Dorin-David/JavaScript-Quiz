import themes from './themes/themes.js';

const styleOptionsWrapper = document.querySelector('.settings-themes');
const currentStyle = document.querySelector('#code-style');


function selectTheme(){
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
    
        wrapper.addEventListener('click', function(){
            const options = document.querySelectorAll('.theme-wrapper');
    
            [...options].forEach(option => option.classList.remove('selected'));
            wrapper.classList.add('selected');
            currentStyle.href = `./code_styles/${path}.css`
        })
    
    }
    
    hljs.highlightAll();
}

export default selectTheme