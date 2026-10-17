
const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");

const categoryDropdown = document.getElementById("category-dropdown");

const viewCategoryButton = document.getElementById("view-category-button");
const addBookmarkButton = document.getElementById("add-bookmark-button");
const addBookmarkButtonForm = document.getElementById("add-bookmark-button-form");

const closeFormButton = document.getElementById("close-form-button");
const closeListButton = document.getElementById("close-list-button");
const deleteBookmarkButton = document.getElementById("delete-bookmark-button");

const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");

const categoryList = document.getElementById("category-list");
const categoryNames = document.querySelectorAll(".category-name");

function getBookmarks() {
    try {
        const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

        if (
            !Array.isArray(bookmarks) ||
            !bookmarks.every(
                bookmark =>
                    bookmark &&
                    typeof bookmark === "object" &&
                    !Array.isArray(bookmark) &&
                    typeof bookmark.name === "string" &&
                    typeof bookmark.category === "string" &&
                    typeof bookmark.url === "string"
            )
        ) {
            return [];
        }

        return bookmarks;
    } catch {
        return [];
    }
}

function displayOrCloseForm() {
    mainSection.classList.toggle("hidden");
    formSection.classList.toggle("hidden");
}

function displayOrHideCategory() {
    mainSection.classList.toggle("hidden");
    bookmarkListSection.classList.toggle("hidden");
}

addBookmarkButton.addEventListener("click", () => {
    categoryNames.forEach(categoryName => {
        categoryName.innerText = categoryDropdown.value;
    });

    displayOrCloseForm();
});

closeFormButton.addEventListener("click", () => {
    displayOrCloseForm();
});

addBookmarkButtonForm.addEventListener("click", () => {
    const bookmarks = getBookmarks();

    const bookmark = {
        name: nameInput.value,
        category: categoryDropdown.value,
        url: urlInput.value
    };

    bookmarks.push(bookmark);

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    nameInput.value = "";
    urlInput.value = "";

    displayOrCloseForm();
});

viewCategoryButton.addEventListener("click", () => {
    const selectedCategory = categoryDropdown.value;

    categoryNames.forEach(categoryName => {
        categoryName.innerText = selectedCategory;
    });

    const bookmarks = getBookmarks();

    const filteredBookmarks = bookmarks.filter(
        bookmark => bookmark.category === selectedCategory
    );

    categoryList.innerHTML = "";

    if (filteredBookmarks.length === 0) {
        categoryList.innerHTML = "<p>No Bookmarks Found</p>";
    } else {
        filteredBookmarks.forEach(bookmark => {
            categoryList.innerHTML += `
                <div>
                    <input
                        type="radio"
                        id="${bookmark.name.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}"
                        value="${bookmark.name.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}"
                        name="bookmark"
                    >
                    <label for="${bookmark.name.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}">
                        <a href="${bookmark.url.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}" target="_blank" rel="noopener noreferrer">${bookmark.name.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</a>
                    </label>
                </div>
            `;
        });
    }

    displayOrHideCategory();
});

closeListButton.addEventListener("click", () => {
    displayOrHideCategory();
});

deleteBookmarkButton.addEventListener("click", () => {
    const selectedBookmark = document.querySelector(
        'input[name="bookmark"]:checked'
    );

    if (!selectedBookmark) {
        return;
    }

    const selectedCategory = categoryDropdown.value;
    const selectedName = selectedBookmark.value;

    const bookmarks = getBookmarks();

    const index = bookmarks.findIndex(
        bookmark =>
            bookmark.name === selectedName &&
            bookmark.category === selectedCategory
    );

    if (index !== -1) {
        bookmarks.splice(index, 1);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }

    viewCategoryButton.click();
});
