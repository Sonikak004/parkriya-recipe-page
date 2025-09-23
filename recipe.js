document.addEventListener('DOMContentLoaded', () => {
    const recipes = [
        {
            id: 1,
            name: ' Rasam',
            image: 'https://vismaifood.com/storage/app/uploads/public/2f7/20d/779/thumb__1200_0_0_0_auto.jpg',
            ingredients: [
                { item: "Toor Dal", "quantity": 5, "unit": "gram" },
                { item: "Urad Dal", "quantity": 0.4, "unit": "gram" },
                { item: "Tomatoes", "quantity": 20, "unit": "gram" },
                { item: "Garlic", "quantity": 1.5, "unit": "gram" },
                { item: "Curry Leaves", "quantity": 0.12, "unit": "gram" },
                { item: "Coriander Leaves", "quantity": 0.12, "unit": "gram" },
                { item: "Grated Coconut", "quantity": 1.2, "unit": "gram" },
                { item: "Green Chilly", "quantity": 1, "unit": "gram" },
                { item: "Turmeric Powder", "quantity": 0.4, "unit": "gram" },
                { item: "Kashmiri Chilli", "quantity": 0.3, "unit": "nos" },
                { item: "Asafoetida", "quantity": 0.2, "unit": "gram" },
                { item: "Mustard Seeds", "quantity": 0.6, "unit": "gram" },
                { item: "Pepper", "quantity": 0.3, "unit": "gram" },
                { item: "Jeera", "quantity": 0.44, "unit": "gram" },
                { item: "Jaggery", "quantity": 0.2, "unit": "gram" },
                { item: "Salt", "quantity": 1.62, "unit": "gram" },
                { item: "Groundnut Oil", "quantity": 1.3, "unit": "ml" },
                { item: "Water", "quantity": 140, "unit": "ml" },
                { item: "Tamarind", "quantity": 1.4, "unit": "gram" }
            ],
            steps: {
                step1: 'Place a large heavy bottom vessel over medium heat and add Oil. Once the oil is hot, add Mustard seed and Urad Dal. Sauté until the mustard seeds begin to splutter. Now, add Kashmiri Chilli and the hand-pounded garlic. Sauté until the raw smell disperses. Stir and add Curry Leaves and green chillies over the mixture followed by chopped tomatoes. Cook over medium-high heat until the tomatoes turn mushy.',
                step2: 'Pour in the dissolved tamrind water and bring the mixture to boil and then add turmeric. Add in Salt, evenly throughout the mixture. Add the cooked toor dal to the boiling mixture. Once the Rasam starts boiling, add Water to achieve desired consistency and bring it to a final boil.',
                step3: 'Turn off the stove. Sprinkle the hand-pounded pepper and jeera over the rasam and add the remaining curry leaves, coriander leaves, grated coconut, asafoetida, and Jaggery for a hint of sweetness. Mix everything well and quickly close the lid. Allow the rasam to rest for 5 minutes to enhance the flavors. Rasam is ready to be served.'
            },
             prep: {
                prep1: 'Wash the Toor Dal thoroughly and in a pressure cooker',
                prep2: 'Add the washed toor dal, turmeric with Water (3 times of dal quantity) to cook for 3 whistles and keep it aside.',
                prep3: 'Dissolve tamrind in Water (3 times of tamrind quantity) and keep it aside.',
                prep4: 'Cut green chillies and keep it aside.',
                prep5: 'Finely chop Tomatoes and keep it aside.',
                prep6: 'Hand pound garlic and keep it aside.',
                prep7: 'Coarsely grind pepper, jeera and keep it aside.',
                prep8: 'Chop coriander leaves and grate coconut and keep it aside.'
            },
        },
    ];

    const recipeSection = document.getElementById('recipe-section');
    const searchInput = document.getElementById('search-input');
    const recipeModalElement = document.getElementById('recipeModal');
    const recipeModal = new bootstrap.Modal(recipeModalElement, {
        backdrop: true
    });

    function displayRecipes(recipesToDisplay) {
        recipeSection.innerHTML = '';
        recipesToDisplay.forEach(recipe => {
            const card = document.createElement('div');
            card.className = 'cont-reci';
            card.innerHTML = `
                <div class="recipe-card" data-id="${recipe.id}">
                    <img class="reci-img" src="${recipe.image}" alt="${recipe.name}">
                    <div class="recipe-card-body">
                        <h5 class="recipe-card-title">${recipe.name}</h5>
                    </div>
                </div>
            `;
            card.querySelector('.recipe-card').addEventListener('click', () => showRecipeDetails(recipe));
            recipeSection.appendChild(card);
        });
    }

    function showRecipeDetails(recipe) {
        const modalTitle = document.querySelector('#recipeModal .modal-title');
        const modalBody = document.querySelector('#recipeModal .modal-body');

        modalTitle.innerHTML = `
    <div class="mod-div">
        ${recipe.name}
        <label id="people-label" for="people-input" style="font-size: 18px;">Number of People:</label>
        <input type="number" id="people-input" class="input-form form-control" placeholder="Enter" min="1" value="1">
        <button id="apply-people-btn" class="btn btn-success btn-sm" style="margin-left: 8px;">Enter</button>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
`;


        modalBody.innerHTML = `
            <div class="mod-img-div">
                <img src="${recipe.image}" class="mod-img mb-3" alt="${recipe.name}">
            </div>

            

            <div class="mb-4">
                <h5 class="mt-4 mb-3">Ingredients:</h5>
                <table class="table table" id="ingredient-table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Item</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${recipe.ingredients.map((ingredient, index) => `
                            <tr>
                                <th scope="row">${index + 1}</th>
                                <td>${ingredient.item}</td>
                                <td>${ingredient.quantity}</td>
                                <td>${ingredient.unit}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>

            <div class="preparation">
                <h6 class="mt-4 mb-3">Pre-preparation:</h6>
                <ul>
                    ${Object.values(recipe.prep).map(step => `<li>${step}</li>`).join('')}
                </ul>
            </div>

            <div class="instructions">
                <h6 class="mt-4 mb-3">Instructions:</h6>
                <p>${recipe.steps.step1}</p>
                <p>${recipe.steps.step2}</p>
                <p>${recipe.steps.step3}</p>
            </div>
        `;

        const peopleInput = modalTitle.querySelector('#people-input');
        const ingredientTableBody = modalBody.querySelector('#ingredient-table tbody');

        function updateIngredients() {
            const people = parseInt(peopleInput.value, 10) || 1;
            const updatedIngredients = recipe.ingredients.map((ingredient, index) => {
                let updatedQuantity = (ingredient.quantity * people).toFixed(2);
                updatedQuantity = parseFloat(updatedQuantity).toString();

                let updatedUnit = ingredient.unit;
                if (ingredient.unit.toLowerCase() === 'gram' && updatedQuantity >= 1000) {
                    updatedQuantity = (updatedQuantity / 1000).toFixed(2);
                    updatedUnit = 'kg';
                } else if (ingredient.unit.toLowerCase() === 'ml' && updatedQuantity >= 1000) {
                    updatedQuantity = (updatedQuantity / 1000).toFixed(2);
                    updatedUnit = 'litres';
                }

                return `
                    <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${ingredient.item}</td>
                        <td>${updatedQuantity}</td>
                        <td>${updatedUnit}</td>
                    </tr>
                `;
            }).join('');
            ingredientTableBody.innerHTML = updatedIngredients;
        }

        // People input listeners
        peopleInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') updateIngredients();
        });
        document.getElementById('apply-people-btn').addEventListener('click', updateIngredients);


        recipeModal.show();
        updateIngredients();
    }

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm));
        displayRecipes(filteredRecipes);
    });

    document.getElementById('print-recipe-btn').addEventListener('click', () => {
        const modalBody = document.querySelector('#recipeModal .modal-body');
        const modalContent = modalBody.innerHTML;
        const modalTitle = document.querySelector('#recipeModal .modal-title').innerHTML;

        const peopleInput = document.querySelector('#people-input');
        const peopleInputValue = peopleInput.value;

        recipeModal.hide();
        const modalBackdrop = document.querySelector('.modal-backdrop');
        if (modalBackdrop) modalBackdrop.remove();

        const style = document.createElement('style');
        style.innerHTML = `
            @media print {
                #people-input, #people-label {
                    display: none;
                }
                .print-title {
                    font-size: 24px;
                    font-weight: bold;
                    position: relative;
                    left: 28px;
                }
            }
        `;
        document.head.appendChild(style);

        const printContent = `
            <div class="print-title">${modalTitle}</div>
            <div>${modalContent}</div>
        `;

        const originalBody = document.body.innerHTML;
        document.body.innerHTML = printContent;
        window.print();
        document.body.innerHTML = originalBody;
        document.head.removeChild(style);
        recipeModal.show();
        peopleInput.value = peopleInputValue;
        location.reload();
    });

    displayRecipes(recipes);
});
