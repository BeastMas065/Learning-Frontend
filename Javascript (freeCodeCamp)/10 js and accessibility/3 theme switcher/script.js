const themes = [
    {
        name: "light",
        message: "light mode on"
    },
    {
        name: "dark",
        message: "dark mode on"
    },
    {
        name: "gray",
        message: "gray mode on"
    }
];

const btn = document.getElementById("theme-switcher-button");
const content = document.getElementById("theme-dropdown");
const items = document.querySelectorAll('[role="menuitem"]');
const status = document.querySelector('[aria-live="polite"]');

btn.addEventListener("click", () => {

    if (content.hidden) {
        content.hidden = false;
        btn.setAttribute("aria-expanded", "true");
        status.textContent = "";
    } else {
        content.hidden = true;
        btn.setAttribute("aria-expanded", "false");
    }

});

items.forEach(item => {

    item.addEventListener("click", (event) => {

        const themeName = event.target.textContent;

        // Remove any previous theme
        document.body.classList.remove(
            "theme-light",
            "theme-dark",
            "theme-gray"
        );

        // Add selected theme
        document.body.classList.add(`theme-${themeName}`);

        // Find the theme object
        const theme = themes.find(theme => theme.name === themeName);

        // Display message
        status.textContent = theme.message;

        // Close dropdown
        content.hidden = true;
        btn.setAttribute("aria-expanded", "false");

    });

});