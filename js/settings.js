import selectTheme from "./selectStyle.js";

const optionsButton = document.querySelector('.settings-btn');
const settingsWrapper = document.querySelector('.settings-wrapper');
const closeSettingsBtn = document.querySelector('.close-settings-btn');
const goBackSettingsBtn = document.querySelector('.go-back-setting-btn');
const backToTopButton = document.querySelector('.back-to-top-btn');
const themeBtn = document.querySelector('.select-setting.themes');
const themesWrapper = document.querySelector('.settings-themes');

function showOptions(){
    themeBtn.classList.add('hidden');
    goBackSettingsBtn.classList.remove('hidden');
    themesWrapper.classList.remove('hidden')
    backToTopButton.classList.remove('hidden');
}

function hideOptions(){
    themeBtn.classList.remove('hidden');
    goBackSettingsBtn.classList.add('hidden');
    themesWrapper.classList.add('hidden');
    backToTopButton.classList.add('hidden');
}

optionsButton.addEventListener('click', () => {
    settingsWrapper.classList.remove('hidden');
    selectTheme()
})

closeSettingsBtn.addEventListener('click', () => {
    settingsWrapper.classList.add('hidden');
    hideOptions()
    
})

goBackSettingsBtn.addEventListener('click', () => {
    hideOptions()
 })

backToTopButton.addEventListener('click', () => {
    closeSettingsBtn.scrollIntoView()
})

themeBtn.addEventListener('click', () => {
   showOptions()
})



