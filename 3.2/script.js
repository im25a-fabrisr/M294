let currentIndex = 6;

document.getElementById('add-more-btn').addEventListener('click', () => {
    const grid = document.getElementById('cover-grid');
    const nextCovers = shuffled.slice(currentIndex, currentIndex + 3);

    nextCovers.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Album Cover';
        grid.appendChild(img);
    });

    currentIndex += 3;
});

const removeBtn = document.createElement('button');
removeBtn.id = 'remove-first-three-btn';
removeBtn.className = 'pill-btn';
removeBtn.textContent = 'Remove first three';
removeBtn.style.marginTop = '20px';
removeBtn.style.marginLeft = '10px';

const addBtn = document.getElementById('add-more-btn');
if (addBtn) {
    addBtn.after(removeBtn);
}

// 2. Event-Listener zum Löschen der ersten 3 Bilder
removeBtn.addEventListener('click', () => {
    const grid = document.getElementById('cover-grid');
    for (let i = 0; i < 3; i++) {
        if (grid.firstElementChild) {
            grid.firstElementChild.remove();
        }
    }
});