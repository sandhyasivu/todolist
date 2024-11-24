document.getElementById("add-btn").addEventListener("click", function() {
    const input = document.getElementById("todo-input");
    const todoText = input.value.trim();

    if (todoText) {
        const todoItem = document.createElement("li");
        todoItem.innerHTML = `
            <span>${todoText}</span>
            <button class="delete-btn">Delete</button>
        `;
        
        todoItem.querySelector(".delete-btn").addEventListener("click", function() {
            todoItem.remove();
        });

        document.getElementById("todo-list").appendChild(todoItem);
        input.value = ""; // Clear the input field
    }
});

document.getElementById("todo-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("add-btn").click();
    }
});
