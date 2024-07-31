document.addEventListener('DOMContentLoaded', () => {
    const recipes = [
        {
            id: 1,
            name: 'Kalyana Rasam',
            image: 'https://vismaifood.com/storage/app/uploads/public/2f7/20d/779/thumb__1200_0_0_0_auto.jpg',
            ingredients: [
               { item: "Toor Dal", "quantity": 5, "unit": "gram" },
               { item: "Urad Dal", "quantity": 0.04, "unit": "gram" },
        
                { item: "Tomatoes", "quantity": 20, "unit": "gram" },
                { item: "Garlic", "quantity": 1.5, "unit": "gram" },
                 { item: "Curry Leaves", "quantity": 0.12, "unit": "gram" },
                 { item: "Coriander Leaves", "quantity": 0.12, "unit": "gram" },
                 { item: "Grated Coconut", "quantity": 1.2, "unit": "gram" },

                { item: "Turmeric Powder", "quantity": 0.04, "unit": "gram" },
                 { item: "Kashmiri Chilli", "quantity": 0.03, "unit": "nos" },
                 { item: "Asafoetida", "quantity": 0.02, "unit": "gram" },
                { item: "Mustard Seeds", "quantity": 0.06, "unit": "gram" },
                { item: "Pepper", "quantity": 0.3, "unit": "gram" },
                { item: "Jeera", "quantity": 0.44, "unit": "gram" },
                { item: "Jaggery", "quantity": 0.02, "unit": "gram" },
                { item: "Salt", "quantity": 1.62, "unit": "gram" },
        
                { item: "Groundnut Oil", "quantity": 1.3, "unit": "ml" },
                { item: "Water", "quantity": 16, "unit": "ml" },
        
                { item: "Tamarind", "quantity": 1.4, "unit": "gram" }
    ],
            prep: {
                prep1: 'Wash the Toor Dal thoroughly and in a pressure cooker, add the washed toor dal, turmeric with Water to cook for 3 whistles and keep it aside.',
                prep2: 'Dissolve tamrind in Water and keep it aside.',
                prep3: 'Finely chop Tomatoes and keep it aside.',
                prep4: 'Hand pound garlic, pepper, jeera and keep it aside.'
            },
            steps: {
                step1: 'Place a large vessel over medium heat and add Groundnut Oil. Once the oil is hot, add Mustard seed and Urad Dal. Sauté until the mustard seeds begin to splutter. Now, add Kashmiri Chilli and the hand-pounded garlic. Sauté until the raw smell disperses. Stir in Curry Leaves and turmeric powder over the mixture followed by chopped tomatoes. Cook over medium-high heat until the tomatoes turn mushy.',
                step2: 'Pour in the dissolved tamrind water and bring the mixture to boil. Stir in Salt, evenly throughout the mixture. Add the cooked toor dal to the boiling mixture. Once the Rasam starts boiling, add Water to achieve desired consistency and bring it to a final boil.',
                step3: 'Turn off the stove. Sprinkle the hand-pounded pepper and jeera over the rasam and add the remaining curry leaves, coriander leaves, grated coconut, asafoetida, and Jaggery for a hint of sweetness. Mix everything well and quickly close the lid. Allow the rasam to rest for 5 minutes to enhance the flavors. Rasam is ready to be served.'
            }
        },
        {
            id: 2,
            name: 'Rava Upma',
            description: 'A classic South Indian breakfast staple featuring roasted semolina cooked with aromatic spices and tempered with herbs for a flavorful dish',
            datePosted: 'March 11, 2024',
            image: 'https://www.sharmispassions.com/wp-content/uploads/2013/07/RavaUpma2-e1659624509745.jpg',
            ingredients: [
        // Main Ingredient
        { item: "Rava", "quantity": 24, "unit": "Gram" },
        
        // Oils and Ghee
        { item: "Groundnut Oil", "quantity": 8, "unit": "ML" },
        { item: "Oil", "quantity": 1, "unit": "ml" },
        { item: "Ghee", "quantity": 0.5, "unit": "ml" },
        
        // Dals
        { item: "Urad Dal", "quantity": 0.3, "unit": "Gram" },
        { item: "Chana Dal", "quantity": 0.3, "unit": "Gram" },
        
        // Vegetables
        { item: "Carrot", "quantity": 4, "unit": "Gram" },
        { item: "Onion", "quantity": 4, "unit": "Gram" },
        { item: "Beans", "quantity": 4, "unit": "Gram" },
        { item: "Tomato", "quantity": 2, "unit": "Gram" },
        { item: "Ginger", "quantity": 0.118, "unit": "Gram" },
        { item: "Garlic", "quantity": 0.1, "unit": "Gram" },
        { item: "Green Chilli", "quantity": 0.1, "unit": "Gram" },
        { item: "Curry Leaves", "quantity": 0.06, "unit": "Gram" },
        { item: "Coriander Leaves", "quantity": 0.06, "unit": "Gram" },
        
        // Spices and Condiments
        { item: "Bay Leaf", "quantity": 0.004, "unit": "inch" },
        { item: "Turmeric Powder", "quantity": 0.006, "unit": "Gram" },
        { item: "Clove", "quantity": 0.012, "unit": "Gram" },
        { item: "Cardamom", "quantity": 0.012, "unit": "Gram" },
        { item: "Mustard Seeds", "quantity": 0.1, "unit": "Gram" },
        { item: "Stone Flower", "quantity": 0.002, "unit": "inch" },
        { item: "Asafoetida", "quantity": 0.006, "unit": "Gram" },
        { item: "Salt", "quantity": 1, "unit": "Gram" },
        
        // Liquid
        { item: "Water", "quantity": 60, "unit": "ml" }
    ],
            steps: {
                step1: 'Heat Groundnut Oil in a kadai. Once it is hot, add Rava and fry until the raw smell is gone and then remove from heat and set aside. In another kadai, heat oil and add Mustard seeds, Chana dal, and Urad dal. Fry until they start to splutter, add chopped Onion and continue frying until they turn translucent and the raw smell is gone.',
                step2: 'In a mixer jar, combine Green chilli, Curry leaves, Clove, Cardamom, Stone flower, Garlic, Ginger and grind to a paste. Add this paste to the onion mixture in the kadai and sauté well. Then add chopped Carrot, Beans, and Tomato to the kadai with the onion mixture. Fry until the vegetables are cooked through and tender. Now add Turmeric powder, Asafoetida, and Salt to the mixture.',
                step3: 'Pour heated Water into the kadai, and reduce the flame. Slowly add the fried rava to the mixture while stirring in a clockwise direction. Allow it to cook on low heat for about 3 minutes with the lid on to let the flavors meld. Remove the lid and add Ghee and chopped Coriander leaves to the upma, mix everything well and serve hot.'
            }
        },
        {
            id: 3,
            name: 'Pongal',
            description: 'A classic South Indian breakfast staple featuring roasted semolina cooked with aromatic spices and tempered with herbs for a flavorful dish',
            datePosted: 'March 11, 2024',
            image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/05/ven-pongal-recipe.jpg',
            ingredients: [
        // Main Ingredients
        { item: "Rice", "quantity": 50, "unit": "Gram" },
        { item: "Moong Dal", "quantity": 50, "unit": "Gram" },
        
        // Dals 
        
        // Vegetables
        { item: "Ginger", "quantity": 1.5, "unit": "Gram" },
        { item: "Green Chilli", "quantity": 0.30, "unit": "Gram" },
        { item: "Coconut", "quantity": 12.6, "unit": "Gram" },
        { item: "Curry Leaf", "quantity": 1.4, "unit": "inch" },
        
        // Spices and Condiments
        { item: "Pepper", "quantity": 0.84, "unit": "Gram" },
        { item: "Jeera", "quantity": 1.5, "unit": "Gram" },
        { item: "Turmeric Powder", "quantity": 0.3, "unit": "Gram" },
        { item: "Asafoetida", "quantity": 0.14, "unit": "Gram" },
        { item: "Salt", "quantity": 4.4, "unit": "Gram" },
        { item: "Cashew", "quantity": 2.9, "unit": "Gram" },
        
        // Oils and Ghee
        { item: "Oil", "quantity": 7, "unit": "ml" },
        { item: "Ghee", "quantity": 4.2, "unit": "Gram" },
        // Liquid
        { item: "Water", "quantity": 0.500, "unit": "ml" }
    ],
            steps: {
                step1: "Wash rice and moong dal together thoroughly. Drain and set aside.",
                step2: "In a pressure cooker, cook the washed rice and moong dal with water until soft and well-cooked.",
                step3: "In a separate pan, prepare the tempering by heating oil and ghee. Add ginger, green chili, pepper, jeera, turmeric powder, and asafoetida. Sauté until fragrant. Add curry leaves and coconut. Mix well with the cooked rice and dal mixture. Serve hot Pongal garnished with a little more ghee if desired."
            }
        },
        {
            id: 4,
            name: 'Idly',
            description: 'A classic South Indian breakfast staple featuring roasted semolina cooked with aromatic spices and tempered with herbs for a flavorful dish',
            datePosted: 'March 11, 2024',
            image: 'https://t4.ftcdn.net/jpg/04/97/86/19/360_F_497861919_YpD1bljFxozYpF3LNM91zWOubJCPH8hm.jpg',
            ingredients: [
                { item: "Urad Dal Whole", "quantity": 13.8, "unit": "Gram" },
        { item: "Rice", "quantity": 36.4, "unit": "Gram" },
        
        // Other Ingredients
        { item: "Flattened Rice", "quantity": 2.7, "unit": "Gram" },
        { item: "Fenugreek", "quantity": 0.05, "unit": "Gram" }
            ],
            steps: {
                step1: "Soak whole Urad dal, rice, flattened rice, and fenugreek seeds in water separately for 4 hours.",
                step2: "Drain the water from Urad dal and rice. Grind them together to a fine paste. Add flattened rice and fenugreek seeds while grinding.",
                step3: "Add salt to the batter and mix well. Let it ferment overnight or for 8-10 hours. Once fermented, pour the batter into idly moulds and steam for 10-12 minutes. Serve hot idlis with chutney and sambar."
            }
        },
        {
            id: 5,
            name: 'Onion Chutney',
            description: 'A classic South Indian breakfast staple featuring roasted semolina cooked with aromatic spices and tempered with herbs for a flavorful dish',
            datePosted: 'March 11, 2024',
            image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/onion-chutney-3.jpg',
            ingredients: [
                { item: "Onion", "quantity": 6.3, "unit": "Gram" },
        { item: "Tomato", "quantity": 6.3, "unit": "Gram" },
        
        // Dals and Legumes
        { item: "Urad Dal", "quantity": 1.8, "unit": "Gram" },
        { item: "Fried Gram", "quantity": 1.8, "unit": "Gram" },
        
        // Spices and Condiments
        { item: "Salt", "quantity": 0.7, "unit": "Gram" },
        { item: "Red Chilli", "quantity": 0.25, "unit": "Gram" },
        { item: "Jeera", "quantity": 0.07, "unit": "Gram" },
        { item: "Coconut", "quantity": 8.36, "unit": "Gram" },
        { item: "Tamrind", "quantity": 0.18, "unit": "Gram" },
        
        // Herbs
        { item: "Curry Leaves", "quantity": 0.18, "unit": "Gram" },
        { item: "Coriander", "quantity": 0.13, "unit": "Gram" },
        { item: "Mint Leaves", "quantity": 1, "unit": "Gram" },
        
        // Oils and Fats
        { item: "Oil", "quantity": 2.1, "unit": "ml" }
            ],
            steps: { 
                step1: "Heat a small amount of oil in a pan. Add urad dal, red chilli, jeera, curry leaves, and fry until dal turns golden brown. Remove and set aside.",
                step2: "In the same pan, add sliced onions and sauté until they turn translucent. Add chopped tomatoes, salt, and cook until tomatoes turn soft.",
                step3: "Allow the mixture to cool slightly. Grind together the fried dal mixture, cooked onion-tomato mixture, coconut, tamarind, coriander, and mint leaves to a smooth paste. Adjust seasoning as per taste. Serve onion chutney with dosa, idli, or any South Indian breakfast dish."
            }
        },
        {
            id: 6,
            name: 'Chana Masala',
            description: 'A classic South Indian breakfast staple featuring roasted semolina cooked with aromatic spices and tempered with herbs for a flavorful dish',
            datePosted: 'March 11, 2024',
            image: 'https://minimalistbaker.com/wp-content/uploads/2016/02/EASY-Chana-Masala-SQUARE.jpg',
            ingredients: [
                // Vegetables
                { item: "Onion", "quantity": 9.09, "unit": "Gram" },
                { item: "Tomato", "quantity": 10.91, "unit": "Gram" },
                { item: "Coriander Leaves", "quantity": 0.27, "unit": "Gram" },
                
                // Legumes
                { item: "Chickpeas", "quantity": 21.82, "unit": "Gram" },
                
                // Oils and Fats
                { item: "Groundnut Oil", "quantity": 2.73, "unit": "ml" },
                { item: "Ghee", "quantity": 0.364, "unit": "ml" },
                
                // Spices and Condiments
                { item: "Cumin seeds", "quantity": 0.18, "unit": "Gram" },
                { item: "Pepper", "quantity": 0.036, "unit": "Gram" },
                { item: "Cinnamon", "quantity": 0.036, "unit": "Gram" },
                { item: "Star Anise", "quantity": 0.018, "unit": "Gram" },
                { item: "Clove", "quantity": 0.009, "unit": "Gram" },
                { item: "Fennel seeds", "quantity": 0.036, "unit": "Gram" },
                { item: "Mustard", "quantity": 0.036, "unit": "Gram" },
                { item: "Cardamom", "quantity": 0.005, "unit": "Gram" },
                { item: "Stone Flower", "quantity": 0.005, "unit": "Gram" },
                { item: "Chana Masala Powder", "quantity": 0.545, "unit": "Gram" },
                { item: "Turmeric Powder", "quantity": 0.091, "unit": "Gram" },
                { item: "Salt", "quantity": 1.09, "unit": "Gram" },
                
                // Additional Ingredients
                { item: "Baby Cashew", "quantity": "Assumed value needed", "unit": "Gram" },
                { item: "Kapok Buds", "quantity": 0.036, "unit": "Gram" },
                { item: "Dried Fenugreek Leaves", "quantity": 0.018, "unit": "Gram" },
                { item: "Ginger", "quantity": 0.364, "unit": "Gram" },
                { item: "Garlic", "quantity": 0.455, "unit": "Gram" },
                { item: "Curd", "quantity": 1.82, "unit": "Gram" }
            ],
            steps:  {
                step1: "Heat groundnut oil and ghee in a pan. Add cumin seeds, pepper, cinnamon, star anise, clove, fennel seeds, mustard, cardamom, and stone flower. Sauté until fragrant.",
                step2: "Add chopped onions, ginger, garlic, and mint leaves. Sauté until onions turn golden brown. Add chopped tomatoes, chana masala powder, turmeric powder, and salt. Cook until tomatoes are soft.",
                step3: "Add boiled chickpeas, baby cashew, kapok buds, dried fenugreek leaves, and curd. Mix well and cook for 5-7 minutes. Garnish with chopped coriander leaves. Serve hot Chana Masala with rice or roti."
            }
        },
        {
            id: 7,
            name: 'Veg Biryani',
            description: 'A classic South Indian breakfast staple featuring roasted semolina cooked with aromatic spices and tempered with herbs for a flavorful dish',
            datePosted: 'March 11, 2024',
            image: 'https://www.indianveggiedelight.com/wp-content/uploads/2020/04/veg-biryani-instant-pot-500x375.jpg',
            ingredients: [
                 // Vegetables
        { item: "Rice", "quantity": 50.6, "unit": "Gram" },
        { item: "Onion", "quantity": 12.6, "unit": "Gram" },
        { item: "Beans", "quantity": 10.8, "unit": "Gram" },
        { item: "Carrot", "quantity": 10.8, "unit": "Gram" },
        { item: "Knol Khol", "quantity": 10.8, "unit": "Gram" },
        { item: "Potato", "quantity": 5.4, "unit": "Gram" },

        // Dairy
        { item: "Curd", "quantity": 7.2, "unit": "ml" },
        { item: "Milk", "quantity": 1.8, "unit": "ml" },

        // Spices and Condiments
        { item: "Coriander Powder", "quantity": 0.27, "unit": "Gram" },
        { item: "Chilly powder", "quantity": 0.36, "unit": "Gram" },
        { item: "Garam masala", "quantity": 0.45, "unit": "Gram" },
        { item: "Lemon", "quantity": 0.018, "unit": "ml" },
        { item: "Oil", "quantity": 9.0, "unit": "ml" },
        { item: "Salt", "quantity": 2.3, "unit": "Gram" },

        // Aromatics
        { item: "Ginger", "quantity": 0.36, "unit": "Gram" },
        { item: "Garlic", "quantity": 0.36, "unit": "Gram" },
        { item: "Green chilli", "quantity": 0.03, "unit": "Gram" },

        // Whole Spices
        { item: "Cardamom", "quantity": 0.018, "unit": "Gram" },
        { item: "Stone flower", "quantity": 0.009, "unit": "Gram" },
        { item: "Fennel seeds", "quantity": 0.018, "unit": "Gram" },
        { item: "Cloves", "quantity": 0.018, "unit": "ml" },
        { item: "Cinnamon", "quantity": 0.009, "unit": "Gram" },

        // Others
        { item: "Dried fenugreek seeds", "quantity": 0.05, "unit": "ml" }
    ],
            steps: {
                step1: "Wash and soak rice for 30 minutes. Drain water and set aside. Heat oil in a pan, add whole spices (cardamom, stone flower, fennel seeds, cloves, cinnamon), and sauté until fragrant.",
                step2: "Add sliced onions, ginger, garlic, and green chilli. Sauté until onions turn golden brown. Add chopped vegetables (beans, carrot, knol khol, potato), coriander powder, chilly powder, garam masala, salt, and cook until vegetables are half done.",
                step3: "Layer the half-cooked rice over the vegetables. Sprinkle lemon juice, curd, milk, dried fenugreek seeds, and cover with a tight lid. Cook on low heat for 15-20 minutes until rice is fully cooked and flavors are absorbed. Serve hot Veg Biryani garnished with fresh coriander leaves."
            }
        },
        {
            id: 8,
            name: 'Carrot Soup',
            description: 'A classic South Indian breakfast staple featuring roasted semolina cooked with aromatic spices and tempered with herbs for a flavorful dish',
            datePosted: 'March 11, 2024',
            image: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2023-01-carrot-soup%2Fcarrot-soup-084',
            ingredients: [
                    // Spices and Condiments
                    { item: "Pepper", "quantity": 0.036, "unit": "Gram" },
                    { item: "Cinnamon", "quantity": 0.018, "unit": "Gram" },
                    { item: "Fennel Seeds", "quantity": 0.027, "unit": "Gram" },
                    { item: "Coriander", "quantity": 0.036, "unit": "Gram" },
                    { item: "Cumin Seeds", "quantity": 0.036, "unit": "Gram" },
                    { item: "Bay Leaf", "quantity": 0.009, "unit": "Gram" },
            
                    // Vegetables
                    { item: "Carrot", "quantity": 7.27, "unit": "Gram" },
                    { item: "Onion", "quantity": 0.91, "unit": "Gram" },
                    { item: "Tomato", "quantity": 0.91, "unit": "Gram" },
            
                    // Others
                    { item: "Red Chilli", "quantity": 0.036, "unit": "Gram" },
                    { item: "Coconut Oil", "quantity": 0.55, "unit": "ml" },
                    { item: "Coconut", "quantity": 1.82, "unit": "Gram" },
                    { item: "Lemon Juice", "quantity": 0.09, "unit": "ml" },
                    { item: "Salt", "quantity": 0.3, "unit": "Gram" },
                    { item: "Water", "quantity": 20, "unit": "ml" }
    ],
            steps: {
                step1: "Heat the coconut oil in a pot over medium heat. Add the bay leaf, fennel seeds, and cumin seeds. Sauté until they release their aroma.",
                step2: "Add chopped onions, carrots, tomatoes, and red chilli. Sauté until vegetables are softened.",
                step3: "Pour in enough water to cover the vegetables. Add salt, pepper, and cinnamon. Bring to a boil, then reduce heat and simmer for 15-20 minutes until carrots are tender. Remove bay leaf. Blend the soup until smooth. Serve hot garnished with chopped coriander leaves and a squeeze of lemon juice."
            }
        },
        {
            id: 9,
            name: 'Veg Roll',
            description: 'A classic South Indian breakfast staple featuring roasted semolina cooked with aromatic spices and tempered with herbs for a flavorful dish',
            datePosted: 'March 11, 2024',
            image: 'https://c.ndtvimg.com/2023-08/b575c5qo_kathi-roll_625x300_10_August_23.jpg',
            ingredients: [
                 // Vegetables
        { item: "Onion", "quantity": 9.1, "unit": "Gram" },
        { item: "Tomato", "quantity": 7.2, "unit": "Gram" },
        { item: "Beans", "quantity": 18.2, "unit": "Gram" },
        { item: "Carrot", "quantity": 12.7, "unit": "Gram" },
        { item: "Knol Khol", "quantity": 24, "unit": "Gram" },
        { item: "Capsicum", "quantity": 9.11, "unit": "Gram" },
        { item: "Cabbage", "quantity": 9.11, "unit": "Gram" },
        { item: "Potato", "quantity": 21.86, "unit": "Gram" },

        // Spices and Condiments
        { item: "Garlic", "quantity": 0.55, "unit": "Gram" },
        { item: "Ginger", "quantity": 0.36, "unit": "Gram" },
        { item: "Garam Masala", "quantity": 0.05, "unit": "Gram" },
        { item: "Chilli Powder", "quantity": 0.36, "unit": "Gram" },
        { item: "Coriander powder", "quantity": 0.55, "unit": "Gram" },
        { item: "Oil", "quantity": 5.46, "unit": "ml" },
        { item: "Mustard seeds", "quantity": 0.18, "unit": "Gram" },
        { item: "Salt", "quantity": 1.28, "unit": "Gram" },
        { item: "Turmeric powder", "quantity": 0.02, "unit": "Gram" }
    ],
            steps: {
                step1: "Heat oil in a pan. Add mustard seeds and let them splutter. Add chopped onions, ginger, and garlic. Sauté until onions turn translucent.",
                step2: "Add chopped vegetables (carrot, beans, knol khol, capsicum, cabbage, potato) and sauté for a few minutes until they are slightly tender. Add salt, turmeric powder, garam masala, and chilli powder. Mix well and cook until vegetables are fully cooked and aromatic.",
                step3: "Take a soft flatbread (roti or paratha). Place a portion of the vegetable mixture on one end of the flatbread. Roll tightly. Serve hot with chutney or sauce of your choice."
            }
        },
        {
            id: 10,
            name: 'Chapathi',
            description: 'A classic South Indian breakfast staple featuring roasted semolina cooked with aromatic spices and tempered with herbs for a flavorful dish',
            datePosted: 'March 11, 2024',
            image: 'https://static.toiimg.com/thumb/61203720.cms?width=800&height=800&imgsize=670417',
            ingredients: [
                { item: 'Wheat Flour', quantity: 47.19, unit: 'Gram' },
                { item: 'Oil', quantity: 3.99, unit: 'ml' },
                { item: 'Salt', quantity: 0.91, unit: 'Gram' },
                { item: 'Water', quantity: 30.85, unit: 'ml' },
            ],
            steps: {
                step1: "In a mixing bowl, combine wheat flour, salt, and oil. Gradually add water and knead into a smooth and elastic dough. Add more water or flour as needed to achieve the right consistency.",
                step2: "Divide the dough into small balls. Roll each ball into a thin, round shape using a rolling pin and dusting with flour as needed to prevent sticking.",
                step3: "Heat a griddle or tawa over medium-high heat. Place a rolled chapathi on the hot tawa. Cook until bubbles appear on the surface, then flip and cook the other side until golden brown spots appear. Brush with oil or ghee if desired. Repeat with remaining dough balls. Serve hot with your favorite curry or chutney."
            }
        },
        {
            id: 11,
            name: 'Red Coconut Chutney',
            description: 'A classic South Indian breakfast staple featuring roasted semolina cooked with aromatic spices and tempered with herbs for a flavorful dish',
            datePosted: 'March 11, 2024',
            image: 'https://www.indianveggiedelight.com/wp-content/uploads/2018/03/red-coconut-chutney-featured-500x375.jpg',
            ingredients: [
                 // Vegetables
        { item: "Coconut", "quantity": 1.38, "unit": "Gram" },
        { item: "Onion", "quantity": 4.55, "unit": "Gram" },
        { item: "Tomato", "quantity": 6.38, "unit": "Gram" },

        // Lentils and Pulses
        { item: "Urad dal", "quantity": 1.27, "unit": "Gram" },

        // Spices and Condiments
        { item: "Groundnut Oil", "quantity": 2.37, "unit": "ml" },
        { item: "Salt", "quantity": 0.49, "unit": "Gram" },
        { item: "Red chilli", "quantity": 0.18, "unit": "Gram" },
        { item: "Curry leaves", "quantity": 0.04, "unit": "Gram" },
        { item: "Mustard seeds", "quantity": 0.09, "unit": "Gram" },
        { item: "Cumin Seeds", "quantity": 0.09, "unit": "Gram" },
        { item: "Coriander", "quantity": 0.05, "unit": "Gram" }
    ],
            steps:  {
                step1: "Heat a small amount of oil in a pan. Add mustard seeds, urad dal, red chillies, curry leaves, and sauté until mustard seeds crackle and dal turns golden brown.",
                step2: "Add chopped onions and tomatoes. Sauté until onions turn translucent and tomatoes soften.",
                step3: "Add grated coconut, salt, and cumin seeds. Mix well and sauté for a minute. Remove from heat and let it cool. Transfer the mixture to a blender, add a little water, and blend to a smooth paste. Serve the red coconut chutney as a side dish with dosa, idli, or vada."
            }
        },
        {
            id: 12,
            name: 'Beans Chutney',
            description: 'A classic South Indian breakfast staple featuring roasted semolina cooked with aromatic spices and tempered with herbs for a flavorful dish',
            datePosted: 'March 11, 2024',
            image: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Karanataka_Style_Goraikai_Kara_Recipe_Cluster_Beans_Chutney_Recipe_.jpg',
            ingredients: [
                // Vegetables
                { item: "Beans", "quantity": 8000, "unit": "Gram" },
                { item: "Coconut", "quantity": 12400, "unit": "Gram" },
                { item: "Onion", "quantity": 2500, "unit": "Gram" },
        
                // Lentils and Pulses
                { item: "Urad dal", "quantity": 500, "unit": "Gram" },
                { item: "Chana dal", "quantity": 500, "unit": "Gram" },
        
                // Spices and Condiments
                { item: "Oil", "quantity": 1200, "unit": "ml" },
                { item: "Salt", "quantity": 330, "unit": "Gram" },
                { item: "Red chilli", "quantity": 20, "unit": "Gram" },
                { item: "Curry leaves", "quantity": 100, "unit": "Gram" },
                { item: "Mustard seeds", "quantity": 80, "unit": "Gram" },
                { item: "Cumin Seeds", "quantity": 60, "unit": "Gram" },
                { item: "Green chilli", "quantity": 100, "unit": "Gram" },
                { item: "Tamarind", "quantity": 130, "unit": "Gram" }
            ],
            steps: {
                step1: "Heat a small amount of oil in a pan. Add mustard seeds, urad dal, red chillies, curry leaves, and sauté until mustard seeds crackle and dal turns golden brown.",
                step2: "Add chopped onions and beans. Sauté until onions turn translucent and beans are tender.",
                step3: "Add grated coconut, salt, cumin seeds, green chillies, and tamarind. Mix well and sauté for a minute. Remove from heat and let it cool. Transfer the mixture to a blender, add a little water, and blend to a smooth paste. Serve the chutney as a side dish with dosa, idli, or vada."
            }
        },
        {
            id: 13,
            name: 'Brinji Rice',
            description: 'A classic South Indian rice dish featuring a variety of spices and vegetables, cooked to perfection for a flavorful meal',
            datePosted: 'March 11, 2024',
            image: 'https://www.spiceindiaonline.com/wp-content/uploads/2008/05/Kathirikkai-Sadam-3-500x500.jpg',
            ingredients: [
                // Vegetables
                { item: "Coconut", quantity: 4.36, unit: "Gram" },
                { item: "Onion", quantity: 18.18, unit: "Gram" },
                { item: "Tomato", quantity: 1.82, unit: "Gram" },
                
                // Lentils and Pulses
                { item: "Urad dal", quantity: 1.45, unit: "Gram" },
                { item: "Chana dal", quantity: 1.82, unit: "Gram" },
                
                // Spices and Condiments
                { item: "Rice", quantity: 40, unit: "Gram" },
                { item: "Jeera rice", quantity: 3.64, unit: "Gram" },
                { item: "Basmati rice", quantity: 3.64, unit: "Gram" },
                { item: "Garlic", quantity: 0.73, unit: "Gram" },
                { item: "Ginger", quantity: 0.73, unit: "Gram" },
                { item: "Cinnamon", quantity: 27.27, unit: "Gram" },
                { item: "Cloves", quantity: 0.02, unit: "Gram" },
                { item: "Cardamom", quantity: 0.02, unit: "Gram" },
                { item: "Star anise", quantity: 0.03, unit: "Gram" },
                { item: "Stone flower (kalpasi)", quantity: 0.02, unit: "Gram" },
                { item: "Fennel seeds", quantity: 0.04, unit: "Gram" },
                { item: "Coriander seeds", quantity: 0.18, unit: "Gram" },
                { item: "Cumin seeds", quantity: 0.09, unit: "Gram" },
                { item: "Mace", quantity: 0.002, unit: "Piece" },
                { item: "Nutmeg", quantity: 0.005, unit: "Piece" },
                { item: "Black cardamom", quantity: 0.004, unit: "Piece" },
                { item: "Bay leaf", quantity: 0.007, unit: "Piece" },
                { item: "Green chili", quantity: 0.18, unit: "Gram" },
                { item: "Lemon", quantity: 0.009, unit: "Piece" },
                { item: "Ghee", quantity: 1.82, unit: "Gram" },
                { item: "Curd", quantity: 1.82, unit: "Gram" },
                { item: "Coconut milk", quantity: 1.82, unit: "ml" },
                { item: "Mint leaves", quantity: 0.2, unit: "Gram" },
                { item: "Coriander leaves", quantity: 0.2, unit: "Gram" },
                { item: "Turmeric powder", quantity: 0.03, unit: "Gram" },
                { item: "Salt", quantity: 1.64, unit: "Gram" },
                { item: "Water", quantity: 102, unit: "ml" },
                { item: "Oil", quantity: 9.09, unit: "ml" }
            ],
            steps: {
                 step1: "Wash and soak the rice for 30 minutes. Heat oil and ghee in a pan, add whole spices (cinnamon, cloves, cardamom, star anise, stone flower) and sauté until fragrant. Add sliced onions, green chili, ginger, and garlic paste, and sauté until the onions turn golden brown." ,
                step2: "Add chopped tomatoes and cook until they turn soft. Add turmeric powder, coriander seeds, cumin seeds, fennel seeds, and salt. Mix well. Add the soaked rice and mix gently to coat the rice with the spices." ,
                step3: "Add water and coconut milk. Bring to a boil, then reduce heat, cover the pan, and cook until the rice is done. Garnish with chopped mint leaves and coriander leaves before serving." 
              }
        },
        {
            id: 14,
            name: 'Vada Curry',
            description: 'A delicious South Indian curry made with vadas and a rich, flavorful gravy.',
            datePosted: 'March 11, 2024',
            image: 'https://www.vidhyashomecooking.com/wp-content/uploads/2022/05/VadacurryRecipe.jpg',
            ingredients: [
                // Vada Curry
                { item: "Onion", quantity: 9.09, unit: "Gram" },
                { item: "Tomato", quantity: 7.27, unit: "Gram" },
                { item: "Coriander seeds", quantity: 0.55, unit: "Gram" },
                { item: "Cumin seeds", quantity: 0.18, unit: "Gram" },
                { item: "Black pepper", quantity: 0.02, unit: "Gram" },
                { item: "Fenugreek seeds", quantity: 0.02, unit: "Gram" },
                { item: "Black cardamom", quantity: 0.36, unit: "Gram" },
                { item: "Fried gram", quantity: 0.45, unit: "Gram" },
                { item: "Red chilies", quantity: 0.22, unit: "Gram" },
                { item: "Cinnamon", quantity: 0.02, unit: "Gram" },
                { item: "Cloves", quantity: 0.02, unit: "Gram" },
                { item: "Green cardamom", quantity: 0.02, unit: "Gram" },
                { item: "Stone flower", quantity: 0.01, unit: "Gram" },
                { item: "Star anise", quantity: 0.02, unit: "Gram" },
                { item: "Coconut", quantity: 3.27, unit: "Gram" },
                { item: "Salt", quantity: 0.77, unit: "Gram" },
                { item: "Chana dal", quantity: 0.36, unit: "Gram" },
                { item: "Urad dal", quantity: 0.36, unit: "Gram" },
                { item: "Curry leaves", quantity: 0.18, unit: "Gram" },
                { item: "Fennel seeds", quantity: 0.03, unit: "Gram" },
                { item: "Oil", quantity: 1.82, unit: "ml" },
                { item: "Water", quantity: 100, unit: "ml" },
        
                // Vada
                { item: "Oil", quantity: 18.18, unit: "ml" },
                { item: "Chana dal", quantity: 9.09, unit: "Gram" },
                { item: "Onion", quantity: 7.27, unit: "Gram" },
                { item: "Cinnamon", quantity: 0.01, unit: "Gram" },
                { item: "Fennel seeds", quantity: 0.02, unit: "Gram" },
                { item: "Salt", quantity: 0.27, unit: "Gram" },
                { item: "Curry leaves", quantity: 0.18, unit: "Gram" },
                { item: "Ginger", quantity: 0.18, unit: "Gram" },
                { item: "Garlic", quantity: 0.18, unit: "Gram" },
                { item: "Green chili", quantity: 0.02, unit: "Gram" }
            ],
            steps: {
                
                    step1: "Prepare the vadas: Soak chana dal for 2 hours, then drain and grind it with onions, cinnamon, fennel seeds, curry leaves, ginger, garlic, and green chili to a coarse paste. Form small balls and deep-fry them until golden brown."
                ,
                
                    step2: "Make the curry: Heat oil in a pan, add whole spices (coriander seeds, cumin seeds, black pepper, fenugreek seeds, black cardamom, red chilies, cinnamon, cloves, green cardamom, stone flower, star anise) and sauté until fragrant. Add chopped onions and cook until golden brown. Add tomatoes and cook until soft. Add salt, coconut paste, and water. Bring to a boil."
                ,

                    step3: "Combine and cook: Add the fried vadas to the curry and simmer for 10-15 minutes until the flavors are well combined. Garnish with curry leaves before serving."
                
            }
        },
        {
            id: 15,
            name: 'Tea',
            description: 'A classic South Indian beverage made with tea powder, jaggery, and aromatic spices.',
            datePosted: 'March 11, 2024',
            image: 'https://images.healthshots.com/healthshots/en/uploads/2023/08/25160403/jaggery-tea.jpg',
            ingredients: [
                // Tea Ingredients for 1 Person
                { item: "Tea powder", quantity: 3.6, unit: "Gram" },
                { item: "Jaggery powder", quantity: 21.4, unit: "Gram" },
                { item: "Ginger", quantity: 3.4, unit: "Gram" },
                { item: "Cardamom", quantity: 0.26, unit: "Gram" },
                { item: "Black pepper", quantity: 0.17, unit: "Gram" },
                { item: "Cloves", quantity: 0.17, unit: "Gram" },
                { item: "Milk", quantity: 171.4, unit: "ml" },
                { item: "Water", quantity: 171.4, unit: "ml" }
            ],
            steps: {
                step1: "In a small pot, bring water to a boil. Add tea powder, grated ginger, crushed green cardamom, black pepper, and cloves. Boil for 5 minutes.",
                step2: "Add milk to the pot and bring it to a boil again. Reduce heat and simmer for another 5 minutes, allowing the flavors to blend.",
                step3: "Add jaggery powder to the tea and stir well until it dissolves. Strain the tea to remove spices and serve hot."
            }
        },
        {
            id: 16,
            name: 'Vegetable Fry',
            description: 'A classic South Indian dish featuring a medley of vegetables stir-fried with aromatic spices and herbs for a flavorful accompaniment.',
            datePosted: 'March 11, 2024',
            image: 'https://www.kannammacooks.com/wp-content/uploads/opos-carrot-beans-poriyal-recipe.jpg',
            ingredients: [
                // Vegetables
                { item: "Beans", "quantity": 40, "unit": "Gram" },
                { item: "Carrot", "quantity": 34, "unit": "Gram" },
                { item: "Onion", "quantity": 20, "unit": "Gram" },
                
                // Lentils and Pulses
                { item: "Chana dal", "quantity": 1, "unit": "Gram" },
                { item: "Urad dal", "quantity": 1, "unit": "Gram" },
                
                // Spices and Condiments
                { item: "Green chili", "quantity": 1, "unit": "Gram" },
                { item: "Mustard seeds", "quantity": 0.23, "unit": "Gram" },
                { item: "Cumin seeds", "quantity": 0.11, "unit": "Gram" },
                { item: "Coconut", "quantity": 23, "unit": "Gram" },
                { item: "Oil", "quantity": 3, "unit": "Gram" },
                { item: "Turmeric powder", "quantity": 0.09, "unit": "Gram" },
                { item: "Coriander powder", "quantity": 0.06, "unit": "Gram" },
                { item: "Salt", "quantity": 1.3, "unit": "Gram" },
                { item: "Curry leaves", "quantity": 0.17, "unit": "Gram" },
                { item: "Hing", "quantity": 0.06, "unit": "Gram" }
            ],
            steps: {
                step1: "Heat oil in a pan. Add mustard seeds, cumin seeds, and hing. Sauté until the mustard seeds crackle.",
                step2: "Add chopped onions, carrots, and beans. Cook until the vegetables are tender.",
                step3: "Add chana dal, urad dal, green chili, turmeric powder, coriander powder, and salt. Stir well and cook for a few minutes. Garnish with curry leaves and serve hot."
            }
        },
        {
            id: 17,
            name: 'Coriander Chutney',
            description: 'A classic South Indian dish featuring roasted semolina cooked with aromatic spices and tempered with herbs for a flavorful chutney.',
            datePosted: 'March 11, 2024',
            image: 'https://www.indianveggiedelight.com/wp-content/uploads/2021/07/coriander-coconut-chutney-recipe-featured.jpg',
            ingredients: [
                // Vegetables
                { item: "Onion", "quantity": 20.0, "unit": "Gram" },
                { item: "Tomato", "quantity": 12.0, "unit": "Gram" },
        
                // Lentils and Pulses
                { item: "Urad dal", "quantity": 5.0, "unit": "Gram" },
                { item: "Chana dal", "quantity": 15.0, "unit": "Gram" },
        
                // Spices and Condiments
                { item: "Groundnut Oil", "quantity": 5.2, "unit": "ml" },
                { item: "Salt", "quantity": 1.28, "unit": "Gram" },
                { item: "Red chilli", "quantity": 0.20, "unit": "Gram" },
                { item: "Curry leaves", "quantity": 0.40, "unit": "Gram" },
                { item: "Mustard seeds", "quantity": 0.20, "unit": "Gram" },
                { item: "Cumin Seeds", "quantity": 0.20, "unit": "Gram" },
                { item: "Coriander", "quantity": 1.80, "unit": "Gram" },
                { item: "Ginger", "quantity": 0.40, "unit": "Gram" },
                { item: "Garlic", "quantity": 0.40, "unit": "Gram" },
                { item: "Green chili", "quantity": 0.20, "unit": "Gram" }
            ],
            steps: {
                step1: "Heat oil in a pan. Add mustard seeds, cumin seeds, and sauté until they crackle.",
                step2: "Add chopped onions and sauté until translucent. Then add tomatoes and cook until they soften.",
                step3: "Add garlic, ginger, green chili, and curry leaves. Sauté for a minute. Blend the mixture into a smooth paste and serve with your meal."
            }
        },
        {
            id: 18,
            name: 'Tomato Dal',
            description: 'A classic South Indian dish featuring lentils cooked with tomatoes and spices for a flavorful meal.',
            datePosted: 'March 11, 2024',
            image: 'https://i.ytimg.com/vi/BGpmdsNi5SI/maxresdefault.jpg',
            ingredients: [
                // Vegetables
                { item: "Onion", "quantity": 27.27, "unit": "Gram" },
                { item: "Tomato", "quantity": 45.45, "unit": "Gram" },
                { item: "Garlic", "quantity": 4.55, "unit": "Gram" },
        
                // Lentils and Pulses
                { item: "Dal", "quantity": 45.45, "unit": "Gram" },
        
                // Spices and Condiments
                { item: "Green Chili", "quantity": 1.14, "unit": "Gram" },
                { item: "Oil", "quantity": 6.82, "unit": "Gram" },
                { item: "Mustard Seeds", "quantity": 0.23, "unit": "Gram" },
                { item: "Cumin Seeds (Jeera)", "quantity": 0.23, "unit": "Gram" },
                { item: "Urad Dal", "quantity": 0.23, "unit": "Gram" },
                { item: "Salt", "quantity": 3.77, "unit": "Gram" },
                { item: "Haldi Powder (Turmeric Powder)", "quantity": 0.045, "unit": "Gram" },
                { item: "Ghee", "quantity": 2.38, "unit": "Gram" },
                { item: "Curry Leaves", "quantity": 0.23, "unit": "Gram" },
                { item: "Tamarind", "quantity": 1.82, "unit": "Gram" },
                { item: "Water", "quantity": 220, "unit": "ml" }
            ],
            steps:  {
                step1: "Heat oil in a pan. Add mustard seeds, cumin seeds, and urad dal. Sauté until the mustard seeds crackle and the urad dal turns golden brown.",
                step2: "Add chopped onions and minced garlic. Sauté until the onions are translucent. Then add chopped tomatoes, green chili, haldi powder, and salt. Cook until the tomatoes are soft.",
                step3: "Add the soaked and drained dal, tamarind, and water. Cook until the dal is tender. Finish by stirring in ghee and curry leaves. Serve hot."
            }
        }
    ];

    const recipeSection = document.getElementById('recipe-section');
    const searchInput = document.getElementById('search-input');
    const recipeModalElement = document.getElementById('recipeModal');
    const recipeModal = new bootstrap.Modal(recipeModalElement, {
        backdrop: true // Ensures clicking on the backdrop will close the modal
    });

    function displayRecipes(recipesToDisplay) {
        recipeSection.innerHTML = '';
        recipesToDisplay.forEach(recipe => {
            const card = document.createElement('div');
            card.className = 'cont-reci';
            card.innerHTML = `
                <div class="recipe-card" data-id="${recipe.id}">
                    <img class="reci-img" src="${recipe.image}" alt="${recipe.name}"></img>
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
                <label id="people-label" for="people-input" style=" font-size: 18px;">Number of People:</label>
                <input type="number" id="people-input" class="input-form form-control" placeholder="Enter" min="1" value="1">
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
                let updatedQuantity = (ingredient.quantity * people).toFixed(2); // This line formats to 2 decimal places

                // Remove .00 if the quantity is a whole number
                updatedQuantity = parseFloat(updatedQuantity).toString();

                // Convert units if necessary
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

        // Listen for changes in the number of people input
        peopleInput.addEventListener('input', updateIngredients);

        // Show the modal
        recipeModal.show();

        // Update ingredients initially
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
    
        // Capture current value of number of people
        const peopleInput = document.querySelector('#people-input');
        const peopleInputValue = peopleInput.value;
    
        // Temporarily hide the modal
        recipeModal.hide();
    
        // Remove the modal backdrop if it exists
        const modalBackdrop = document.querySelector('.modal-backdrop');
        if (modalBackdrop) {
            modalBackdrop.remove();
        }
    
        // Create a style element to hide the number of people input and its label during printing
        const style = document.createElement('style');
        style.innerHTML = `
            @media print {
                #people-input, #people-label {
                    display: none;
                }

                .print-title {
                font-size: 24px; /* Adjust the font size as needed */
                font-weight: bold;
                position: relative;
                left: 28px;
            }

            }
        `;
        document.head.appendChild(style);
    
        // Create printable content
        const printContent = `
            <div class="print-title">${modalTitle}</div>
            <div>${modalContent}</div>
        `;
    
        // Temporarily replace body content for printing
        const originalBody = document.body.innerHTML;
        document.body.innerHTML = printContent;
    
        // Call print function
        window.print();
    
        // Restore original body content
        document.body.innerHTML = originalBody;
    
        // Remove the print-specific styles
        document.head.removeChild(style);
    
        // Show the modal again
        recipeModal.show();
    
        // Restore people input value if needed
        peopleInput.value = peopleInputValue;
    
        // Reload the page after printing (optional)
        location.reload();
    });
    
    
    
    
    // Initial display of recipes
    displayRecipes(recipes);
});
