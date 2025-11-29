const listInner = document.querySelector(".list-inner");

content_data.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "item-card";
    card.textContent = item.title;

    const content = document.createElement("div");
    content.className = "item-content";
    content.textContent = item.text;

    card.addEventListener("click", () => {
        const expanded = card.classList.contains("expanded");

        // Close all
        document.querySelectorAll(".item-card").forEach(c => c.classList.remove("expanded"));
        document.querySelectorAll(".item-content").forEach(c => {
            c.style.display = "none";
        });

        // Open this one
        if (!expanded) {
            card.classList.add("expanded");
            content.style.display = "flex";
            content.classList.add("fade-open");

            // Scroll to TOP of list container after animation
            setTimeout(() => {
                const listContainer = document.getElementById("manifestList");
                const cardTop = card.getBoundingClientRect().top;
                const containerTop = listContainer.getBoundingClientRect().top;

                // Correct target scroll position
                const scrollAmount = cardTop - containerTop + listContainer.scrollTop;

                // FIXED: use the correct variable
                slowScrollTo(listContainer, scrollAmount, 700);
            }, 150);

        }
    });


    listInner.appendChild(card);
    listInner.appendChild(content);
});

function slowScrollTo(element, target, duration) {
    const start = element.scrollTop;
    const distance = target - start;
    const startTime = performance.now();

    function step(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out curve (nice smooth finish)
        const eased = 1 - Math.pow(1 - progress, 3);

        element.scrollTop = start + distance * eased;

        if (elapsed < duration) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}
