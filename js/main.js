const darkSwitch = document.querySelector(".dark-mode-btn");

//1 
// Проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
  darkSwitch.classList.add("dark-mode-btn--active");
  document.querySelector("body").classList.add("dark-theme");
}

// 2 Проверка в LocalStorage
if (localStorage.getItem('darkMode') === 'dark') {
  darkSwitch.classList.add("dark-mode-btn--active");
  document.querySelector("body").classList.add("dark-theme");
} else if (localStorage.getItem("darkMode") === "light") {
  darkSwitch.classList.remove("dark-mode-btn--active");
  document.querySelector("body").classList.remove("dark-theme");
}



window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
  const newColourScheme = event.matches ? 'dark' : 'light'
  if (newColourScheme === 'dark') {
    darkSwitch.classList.add("dark-mode-btn--active");
    document.querySelector("body").classList.add("dark-theme");
    localStorage.setItem("darkMode", "dark");
  } else {
    darkSwitch.classList.remove("dark-mode-btn--active");
    document.querySelector("body").classList.remove("dark-theme");
    localStorage.setItem("darkMode", "light");
  }
})


  darkSwitch.onclick = function () {
    darkSwitch.classList.toggle("dark-mode-btn--active");
    const isDark = document
      .querySelector("body")
      .classList.toggle("dark-theme");

    if (isDark) {
      localStorage.setItem("darkMode", "dark");
    } else {
      localStorage.setItem("darkMode", "light");
    }
  };

