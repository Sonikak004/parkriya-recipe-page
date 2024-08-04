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
        { item: "Rice", "quantity": 14.7, "unit": "Gram" },
        { item: "Moong Dal", "quantity": 14.7, "unit": "Gram" },
        
        // Dals 
        
        // Vegetables
        { item: "Ginger", "quantity": 0.36, "unit": "Gram" },
        { item: "Green Chilli", "quantity": 0.09, "unit": "Gram" },
        { item: "Coconut", "quantity": 1.84, "unit": "Gram" },
        { item: "Curry Leaf", "quantity": 0.09, "unit": "inch" },
        
        // Spices and Condiments
        { item: "Pepper", "quantity": 0.18, "unit": "Gram" },
        { item: "Jeera", "quantity": 0.36, "unit": "Gram" },
        { item: "Turmeric Powder", "quantity": 0.02, "unit": "Gram" },
        { item: "Asafoetida", "quantity": 0.018, "unit": "Gram" },
        { item: "Salt", "quantity": 1.2, "unit": "Gram" },
        { item: "Cashew", "quantity": 0.36, "unit": "Gram" },
        
        // Oils and Ghee
        { item: "Ghee", "quantity": 1.38, "unit": "Gram" },
        // Liquid
        { item: "Water", "quantity": 15.65, "unit": "ml" }
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
        { item: "Oil", "quantity": 2.18, "unit": "ml" }
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
        { item: "Rice", "quantity": 51, "unit": "Gram" },
        { item: "Onion", "quantity": 12.7, "unit": "Gram" },
        { item: "Beans", "quantity": 10.9, "unit": "Gram" },
        { item: "Carrot", "quantity": 10.9, "unit": "Gram" },
        { item: "Knol Khol", "quantity": 10.9, "unit": "Gram" },
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
        { item: "Turmeric powder", "quantity": 0.018, "unit": "Gram" }
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
                { item: 'Wheat Flour', "quantity": 47.3, "unit": 'Gram' },
                { item: 'Oil', "quantity": 4.0, "unit": 'ml' },
                { item: 'Salt', "quantity": 0.91, "unit": 'Gram' },
                { item: 'Water', "quantity": 30.96, "unit": 'ml' },
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
        { item: "Coconut", "quantity": 5.1, "unit": "Gram" },
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
                { item: "Beans", "quantity": 15, "unit": "Gram" },
                { item: "Coconut", "quantity": 23.3, "unit": "Gram" },
                { item: "Onion", "quantity": 4.7, "unit": "Gram" },
        
                // Lentils and Pulses
                { item: "Urad dal", "quantity": 0.94, "unit": "Gram" },
                { item: "Chana dal", "quantity": 0.94, "unit": "Gram" },
        
                // Spices and Condiments
                { item: "Oil", "quantity": 2.26, "unit": "ml" },
                { item: "Salt", "quantity": 0.62, "unit": "Gram" },
                { item: "Red chilli", "quantity": 0.03, "unit": "Gram" },
                { item: "Curry leaves", "quantity": 0.1, "unit": "Gram" },
                { item: "Mustard seeds", "quantity": 0.14, "unit": "Gram" },
                { item: "Cumin Seeds", "quantity": 0.11, "unit": "Gram" },
                { item: "Green chilli", "quantity": 0.1, "unit": "Gram" },
                { item: "Tamarind", "quantity": 0.24, "unit": "Gram" }
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
                { item: "Coconut", "quantity": 4.36, "unit": "Gram" },
                { item: "Onion", "quantity": 18.18, "unit": "Gram" },
                { item: "Tomato", "quantity": 1.82, "unit": "Gram" },
                
                // Lentils and Pulses
                { item: "Urad dal", "quantity": 1.45, "unit": "Gram" },
                { item: "Chana dal", "quantity": 1.82, "unit": "Gram" },
                
                // Spices and Condiments
                { item: "Rice", "quantity": 41.5, "unit": "Gram" },
                { item: "Jeera rice", "quantity": 3.7, "unit": "Gram" },
                { item: "Basmati rice", "quantity": 3.7, "unit": "Gram" },
                { item: "Garlic", "quantity": 0.73, "unit": "Gram" },
                { item: "Ginger", "quantity": 0.73, "unit": "Gram" },
                { item: "Cinnamon", "quantity": 27.27, "unit": "Gram" },
                { item: "Cloves", "quantity": 0.02, "unit": "Gram" },
                { item: "Cardamom", "quantity": 0.02, "unit": "Gram" },
                { item: "Star anise", "quantity": 0.03, "unit": "Gram" },
                { item: "Stone flower (kalpasi)", "quantity": 0.02, "unit": "Gram" },
                { item: "Fennel seeds", "quantity": 0.04, "unit": "Gram" },
                { item: "Coriander seeds", "quantity": 0.18, "unit": "Gram" },
                { item: "Cumin seeds", "quantity": 0.09, "unit": "Gram" },
                { item: "Mace", "quantity": 0.002, "unit": "Piece" },
                { item: "Nutmeg", "quantity": 0.005, "unit": "Piece" },
                { item: "Black cardamom", "quantity": 0.004, "unit": "Piece" },
                { item: "Bay leaf", "quantity": 0.007, "unit": "Piece" },
                { item: "Green chili", "quantity": 0.18, "unit": "Gram" },
                { item: "Lemon", "quantity": 0.009, "unit": "Piece" },
                { item: "Ghee", "quantity": 1.82, "unit": "Gram" },
                { item: "Curd", "quantity": 1.82, "unit": "Gram" },
                { item: "Coconut milk", "quantity": 1.82, "unit": "ml" },
                { item: "Mint leaves", "quantity": 0.2, "unit": "Gram" },
                { item: "Coriander leaves", "quantity": 0.2, "unit": "Gram" },
                { item: "Turmeric powder", "quantity": 0.03, "unit": "Gram" },
                { item: "Salt", "quantity": 1.64, "unit": "Gram" },
                { item: "Water", "quantity": 105.6, "unit": "ml" },
                { item: "Oil", "quantity": 9.4, "unit": "ml" }
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
                { item: "Onion", "quantity": 9.2, "unit": "Gram" },
                { item: "Tomato", "quantity": 7.38, "unit": "Gram" },
                { item: "Coriander seeds", "quantity": 0.55, "unit": "Gram" },
                { item: "Cumin seeds", "quantity": 0.18, "unit": "Gram" },
                { item: "Black pepper", "quantity": 0.02, "unit": "Gram" },
                { item: "Fenugreek seeds", "quantity": 0.02, "unit": "Gram" },
                { item: "Black cardamom", "quantity": 0.36, "unit": "Gram" },
                { item: "Fried gram", "quantity": 0.45, "unit": "Gram" },
                { item: "Red chilies", "quantity": 0.22, "unit": "Gram" },
                { item: "Cinnamon", "quantity": 0.02, "unit": "Gram" },
                { item: "Cloves", "quantity": 0.02, "unit": "Gram" },
                { item: "Green cardamom", "quantity": 0.02, "unit": "Gram" },
                { item: "Stone flower", "quantity": 0.01, "unit": "Gram" },
                { item: "Star anise", "quantity": 0.02, "unit": "Gram" },
                { item: "Coconut", "quantity": 3.27, "unit": "Gram" },
                { item: "Salt", "quantity": 0.77, "unit": "Gram" },
                { item: "Chana dal", "quantity": 0.36, "unit": "Gram" },
                { item: "Urad dal", "quantity": 0.36, "unit": "Gram" },
                { item: "Curry leaves", "quantity": 0.18, "unit": "Gram" },
                { item: "Fennel seeds", "quantity": 0.03, "unit": "Gram" },
                { item: "Oil", "quantity": 1.84, "unit": "ml" },
                { item: "Water", "quantity": 101.4, "unit": "ml" },
        
                // Vada
                { item: "Oil for vada", "quantity": 18.4, "unit": "ml" },
                { item: "Chana dal", "quantity": 9.09, "unit": "Gram" },
                { item: "Onion", "quantity": 7.27, "unit": "Gram" },
                { item: "Cinnamon", "quantity": 0.01, "unit": "Gram" },
                { item: "Fennel seeds", "quantity": 0.02, "unit": "Gram" },
                { item: "Salt", "quantity": 0.27, "unit": "Gram" },
                { item: "Curry leaves", "quantity": 0.18, "unit": "Gram" },
                { item: "Ginger", "quantity": 0.18, "unit": "Gram" },
                { item: "Garlic", "quantity": 0.18, "unit": "Gram" },
                { item: "Green chili", "quantity": 0.02, "unit": "Gram" }
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
                { item: "Tea powder", "quantity": 1.5, "unit": "Gram" },
                { item: "Jaggery powder", "quantity": 6, "unit": "Gram" },
                { item: "Milk", "quantity": 15.3, "unit": "ml" },
                { item: "Water", "quantity": 84.6, "unit": "ml" }
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
                { item: "Beans", "quantity": 12.9, "unit": "Gram" },
                { item: "Carrot", "quantity": 11.1, "unit": "Gram" },
                { item: "Onion", "quantity": 6.4, "unit": "Gram" },
                
                // Lentils and Pulses
                { item: "Chana dal", "quantity": 0.22, "unit": "Gram" },
                { item: "Urad dal", "quantity": 0.22, "unit": "Gram" },
                
                // Spices and Condiments
                { item: "Green chili", "quantity": 0.09, "unit": "Gram" },
                { item: "Mustard seeds", "quantity": 0.07, "unit": "Gram" },
                { item: "Cumin seeds", "quantity": 0.036, "unit": "Gram" },
                { item: "Coconut", "quantity": 2.2, "unit": "Gram" },
                { item: "Oil", "quantity": 0.92, "unit": "Gram" },
                { item: "Turmeric powder", "quantity": 0.09, "unit": "Gram" },
                { item: "Coriander powder", "quantity": 0.06, "unit": "Gram" },
                { item: "Salt", "quantity": 0.4, "unit": "Gram" },
                { item: "Curry leaves", "quantity": 0.05, "unit": "Gram" },
                { item: "Asafoetida", "quantity": 0.018, "unit": "Gram" }
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
                { item: "Urad dal", "quantity": 1.9, "unit": "Gram" },
                { item: "Chana dal", "quantity": 1.45, "unit": "Gram" },
        
                // Spices and Condiments
                { item: "Groundnut Oil", "quantity": 5.2, "unit": "ml" },
                { item: "Salt", "quantity": 0.62, "unit": "Gram" },
                { item: "Red chilli", "quantity": 0.20, "unit": "Gram" },
                { item: "Curry leaves", "quantity": 0.19, "unit": "Gram" },
                { item: "Mustard seeds", "quantity": 0.09, "unit": "Gram" },
                { item: "Cumin Seeds", "quantity": 0.09, "unit": "Gram" },
                { item: "Coriander Leaves", "quantity": 0.87, "unit": "Gram" },
                { item: "Ginger", "quantity": 0.19, "unit": "Gram" },
                { item: "Garlic", "quantity": 0.19, "unit": "Gram" },
                { item: "Green chili", "quantity": 0.09, "unit": "Gram" },
                { item: "Tamrind", "quantity": 0.09, "unit": "Gram" }
            ],
            steps: {
                step1: "Heat oil in a pan. Add mustard seeds, cumin seeds, and sauté until they crackle.",
                step2: "Add chopped onions and sauté until translucent. Then add tomatoes, Tamrind and cook until they soften.",
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
                { item: "Onion", "quantity": 11.6, "unit": "Gram" },
                { item: "Tomato", "quantity": 19.4, "unit": "Gram" },
                { item: "Garlic", "quantity": 1.9, "unit": "Gram" },
        
                // Lentils and Pulses
                { item: "Toor Dal", "quantity": 19.4, "unit": "Gram" },
        
                // Spices and Condiments
                { item: "Green Chili", "quantity": 0.48, "unit": "Gram" },
                { item: "Oil", "quantity": 2.9, "unit": "Gram" },
                { item: "Mustard Seeds", "quantity": 0.09, "unit": "Gram" },
                { item: "Cumin Seeds (Jeera)", "quantity": 0.09, "unit": "Gram" },
                { item: "Urad Dal", "quantity": 0.09, "unit": "Gram" },
                { item: "Salt", "quantity": 1.6, "unit": "Gram" },
                { item: "Turmeric Powder", "quantity": 0.019, "unit": "Gram" },
                { item: "Ghee", "quantity": 1.01, "unit": "Gram" },
                { item: "Curry Leaves", "quantity": 0.09, "unit": "Gram" },
                { item: "Tamarind", "quantity": 0.77, "unit": "Gram" },
                { item: "Asafoetida", "quantity": 0.09, "unit": "Gram" },
                { item: "Water", "quantity": 97, "unit": "ml" }
            ],
            steps:  {
                step1: "Heat oil in a pan. Add mustard seeds, cumin seeds, and urad dal. Sauté until the mustard seeds crackle and the urad dal turns golden brown.",
                step2: "Add chopped onions and minced garlic. Sauté until the onions are translucent. Then add chopped tomatoes, green chili, haldi powder, and salt. Cook until the tomatoes are soft.",
                step3: "Add the soaked and drained dal, tamarind, and water. Cook until the dal is tender. Finish by stirring in ghee and curry leaves. Serve hot."
            }
        },
        {
            id: 19,
            name: 'Tomato Curry',
            description: 'A classic South Indian dish featuring lentils cooked with tomatoes and spices for a flavorful meal.',
            datePosted: 'March 11, 2024',
            image: 'https://justhomemade.files.wordpress.com/2011/04/tomato-onion-gojju-top.jpg',
            ingredients:  [
                // Vegetables
                { item: "Onion", "quantity": 9.16, "unit": "gram" },    // 5000 g / 546
                { item: "Tomato", "quantity": 32.97, "unit": "gram" },  // 18000 g / 546
        
                // Spices and Condiments
                { item: "Oil", "quantity": 2.75, "unit": "gram" },      // 1500 g / 546
                { item: "Coconut", "quantity": 28.30, "unit": "gram" }, // 15450 g / 546
                { item: "Red Chili", "quantity": 0.03, "unit": "gram" }, // 15 g / 546
                { item: "Dhaniya Powder", "quantity": 0.73, "unit": "gram" }, // 400 g / 546
                { item: "Mustard Seeds", "quantity": 0.09, "unit": "gram" }, // 50 g / 546
                { item: "Methi Seeds", "quantity": 0.05, "unit": "gram" }, // 30 g / 546
                { item: "Salt", "quantity": 1.47, "unit": "gram" },     // 800 g / 546
                { item: "Fried Gram", "quantity": 1.83, "unit": "gram" }, // 1000 g / 546
                { item: "Water", "quantity": 100.73, "unit": "ml" },    // 55000 ml / 546
                { item: "Broken Cashew", "quantity": 0.55, "unit": "gram" } // 300 g / 546
            ],
            steps:  {
                step1: "Heat the oil in a pan over medium heat. Add the mustard seeds and methi seeds, and let them splutter. Once the seeds start to pop, add the chopped onions and sauté until they turn golden brown and aromatic. Stir in the dhaniya powder and red chili, ensuring the spices are well integrated with the onions. This will create a flavorful base for the curry.",
        
        step2: "Add the chopped tomatoes to the pan and cook until they become soft and start to break down, releasing their juices. This should take about 5-7 minutes. Stir occasionally to prevent sticking. Add the salt and mix well, allowing the flavors to meld. Add water to the pan and bring the mixture to a simmer. Let it cook until it reaches a slightly thickened consistency, about 10 minutes.",
        
        step3: "Add the coconut, fried gram, and broken cashew to the curry. Stir everything together and cook for another 3-5 minutes until the coconut is well incorporated and the cashew pieces are slightly softened. The curry should have a rich and creamy texture, thanks to the coconut. Taste and adjust the seasoning if needed. Serve the tomato curry hot with rice or your choice of bread."
            }
        },
        {
            id: 20,
            name: 'Coconut Rice',
            description: 'A classic South Indian dish featuring lentils cooked with tomatoes and spices for a flavorful meal.',
            datePosted: 'March 11, 2024',
            image: 'https://www.ticklingpalates.com/wp-content/uploads/2021/08/coconut-rice-recipe.jpg',
            ingredients: [
                // Spices and Condiments
                { item: "Coconut Oil", "quantity": 3.66, "unit": "gram" },
                { item: "Oil", "quantity": 3.66, "unit": "gram" },
                { item: "Chana Dal", "quantity": 1.47, "unit": "gram" },
                { item: "Urad Dal", "quantity": 1.47, "unit": "gram" },
                { item: "Rice", "quantity": 40.29, "unit": "gram" },
                { item: "Coconut", "quantity": 28.30, "unit": "gram" },
                { item: "Salt", "quantity": 1.28, "unit": "gram" },
                { item: "Milk", "quantity": 1.83, "unit": "ml" },
                { item: "Curry Leaves", "quantity": 0.18, "unit": "gram" },
                { item: "Cinnamon", "quantity": 0.02, "unit": "piece" },
                { item: "Cloves", "quantity": 0.02, "unit": "piece" },
                { item: "Cardamom", "quantity": 0.02, "unit": "piece" },
                { item: "Mustard Seeds", "quantity": 0.09, "unit": "gram" },
                { item: "Ghee", "quantity": 0.46, "unit": "gram" },
                { item: "Water", "quantity": 84.35, "unit": "ml" }
            ],
            steps: {
                step1: "Heat the coconut oil and regular oil in a large pan over medium heat. Add mustard seeds, cloves, cardamom, and chana dal, and sauté until the mustard seeds crackle and the dal turns golden brown. Add the urad dal and continue to sauté until it is slightly toasted.",
                
                step2: "Add the rice to the pan and stir for a minute to coat it with the spices. Then, add the coconut, salt, and curry leaves. Stir well to combine all the ingredients. Pour in the water and bring it to a boil. Reduce the heat to low, cover the pan, and let it simmer until the rice is cooked and the liquid is absorbed, about 15-20 minutes.",
                
                step3: "Once the rice is cooked, gently fluff it with a fork. Add the ghee and milk, and stir to incorporate them evenly into the rice. Let it sit covered for a few minutes to allow the flavors to meld. Serve the coconut rice hot, garnished with additional curry leaves if desired."
            }
        },
        {
            id: 21,
            name: 'Veg Kurma',
            description: 'A classic South Indian dish featuring lentils cooked with tomatoes and spices for a flavorful meal.',
            datePosted: 'March 11, 2024',
            image: 'https://www.cookwithmanali.com/wp-content/uploads/2017/06/Veg-Kurma-500x500.jpg',
            ingredients: [
                // Grinding
                { item: "Onion", "quantity": 9.2, "unit": "gram" },
                { item: "Coriander Seeds", "quantity": 0.46, "unit": "gram" },
                { item: "Cumin Seeds", "quantity": 0.09, "unit": "gram" },
                { item: "Cardamom", "quantity": 0.01, "unit": "Piece" },
                { item: "Cinnamon", "quantity": 0.01, "unit": "Piece" },
                { item: "Cloves", "quantity": 0.01, "unit": "Piece" },
                { item: "Cinnamon", "quantity": 0.02, "unit": "gram" },
                { item: "Coconut", "quantity": 9.2, "unit": "gram" },
                { item: "Cashew Nuts", "quantity": 0.73, "unit": "gram" },
                { item: "Bengal gram", "quantity": 0.92, "unit": "gram" },
                { item: "Green Chili", "quantity": 0.18, "unit": "gram" },
                { item: "Coriander Leaves", "quantity": 0.0018, "unit": "Bunch" },
                { item: "Mint Leaves", "quantity": 0.0018, "unit": "g" },
                { item: "Turmeric Powder", "quantity": 0.01, "unit": "gram" },
                { item: "Poppy Seeds)", "quantity": 0.05, "unit": "gram" },
                { item: "Black Pepper", "quantity": 0.02, "unit": "gram" },
        
                // Tadka (Tempering)
                { item: "Oil", "quantity": 1.5, "unit": "ml" },
                { item: "Mustard Seeds", "quantity": 0.09, "unit": "gram" },
                { item: "Curry Leaves", "quantity": 0.18, "unit": "gram" },
                { item: "Onion", "quantity": 9.2, "unit": "gram" },
                { item: "Tomato", "quantity": 5.5, "unit": "gram" },
                { item: "Salt", "quantity": 0.92, "unit": "gram" },
                { item: "Ghee", "quantity": 0.46, "unit": "ml" },
                { item: "Water", "quantity": 460, "unit": "ml" }
            ],
            steps: {
                step1: "Heat oil in a large pan over medium heat. Add mustard seeds and let them crackle. Add curry leaves and sauté for a few seconds until aromatic.",
                step2: "Add finely chopped onions to the pan and cook until they turn golden brown. Next, add chopped tomatoes and cook until they become soft and mushy. Stir in the ground mixture of coriander seeds, cumin seeds, cardamom, cinnamon, cloves, chili powder, and poppy seeds. Cook for a few minutes until the spices release their aroma.",
                step3: "Add the cashew nuts, green chili, and the vegetables of your choice. Cook for a few minutes until the vegetables start to soften. Pour in water and bring the mixture to a boil. Reduce the heat, cover the pan, and let it simmer until the vegetables are cooked through and the curry has thickened. Stir in ghee and garnish with coriander and mint leaves. Serve hot with rice or chapati."
            }
        },
        {
            id: 22,
            name: 'Green Gram Dal',
            description: 'A classic South Indian dish featuring lentils cooked with tomatoes and spices for a flavorful meal.',
            datePosted: 'March 11, 2024',
            image: 'https://www.secondrecipe.com/wp-content/uploads/2022/12/moong-dal-curry.jpg',
            ingredients: [
                // Lentils and Pulses
                { item: "Green Gram", "quantity": 10.91, "unit": "Gram" },
                { item: "Rajma", "quantity": 1.82, "unit": "Gram" },
                { item: "Karamani (Black-eyed Peas)", "quantity": 5.45, "unit": "Gram" },
                
                // Vegetables
                { item: "Onion", "quantity": 5.45, "unit": "Gram" },
                { item: "Tomato", "quantity": 9.09, "unit": "Gram" },
                { item: "Garlic", "quantity": 0.91, "unit": "Gram" },
                
                // Spices and Condiments
                { item: "Green Chili", "quantity": 0.09, "unit": "Gram" },
                { item: "Red Chili Powder", "quantity": 0.036, "unit": "Gram" },
                { item: "Dhaniya Powder", "quantity": 0.18, "unit": "Gram" },
                { item: "Coriander Powder", "quantity": 0.09, "unit": "Gram" },
                { item: "Oil", "quantity": 0.91, "unit": "ml" },
                { item: "Mustard Seeds", "quantity": 0.09, "unit": "Gram" },
                { item: "Cumin Seeds", "quantity": 0.09, "unit": "Gram" },
                { item: "Salt", "quantity": 0.91, "unit": "Gram" },
                { item: "Curry Leaves", "quantity": 0.18, "unit": "Gram" },
                { item: "Coconut", "quantity": 7.27, "unit": "Gram" },
        
                // Liquids
                { item: "Water", "quantity": 54.55, "unit": "ml" }
            ],
            steps:  {
                step1: "Soak the green gram, rajma, and karamani in water for several hours or overnight. Drain the water before cooking.",
        step2: "Heat oil in a large pan or pot. Add mustard seeds and cumin seeds. Sauté until the mustard seeds crackle. Add finely chopped onions and garlic. Cook until the onions become translucent. Add chopped tomatoes, green chili, and cook until the tomatoes turn soft.",
        step3: "Stir in the red chili powder, dhaniya powder, and coriander powder. Mix well. Add the soaked and drained green gram, rajma, and karamani. Pour in the water and bring to a boil. Reduce heat and simmer until the dal and beans are cooked and tender. Season with salt and mix in curry leaves. Cook for a few more minutes. Stir in grated coconut just before serving to enhance the flavor. Serve hot with rice or rotis.",
            }
        },
        {
            id: 23,
            name: 'Veg Kadai',
            description: 'A classic South Indian dish featuring lentils cooked with tomatoes and spices for a flavorful meal.',
            datePosted: 'March 11, 2024',
            image: 'https://www.tasteatlas.com/images/dishes/d24aa6fbf6024a2c94de28fadb965701.jpeg',
            ingredients: [
                // Vegetables
                { item: "Onion", "quantity": 5.45, "unit": "Gram" },
                { item: "Tomato", "quantity": 5.45, "unit": "Gram" },
                { item: "Coconut", "quantity": 5.45, "unit": "Gram" },
        
                // Spices and Condiments
                { item: "Coriander Seeds", "quantity": 0.18, "unit": "Gram" },
                { item: "Cumin Seeds", "quantity": 0.09, "unit": "Gram" },
                { item: "Fenugreek Seeds", "quantity": 0.018, "unit": "Gram" },
                { item: "Pepper", "quantity": 0.036, "unit": "Gram" },
                { item: "Red Chili", "quantity": 0.13, "unit": "Gram" },
                { item: "Cashews", "quantity": 0.18, "unit": "Gram" },
                { item: "Cinnamon", "quantity": 0.027, "unit": "Gram" },
                { item: "Cloves", "quantity": 0.018, "unit": "Gram" },
                { item: "Cardamom", "quantity": 0.009, "unit": "Gram" },
                { item: "Khus Khus", "quantity": 0.018, "unit": "Gram" },
                { item: "Star Anise", "quantity": 0.009, "unit": "Gram" },
                { item: "Fennel Seeds", "quantity": 0.036, "unit": "Gram" },
                { item: "Oil", "quantity": 1.82, "unit": "ml" },
                { item: "Curd", "quantity": 1.82, "unit": "ml" },
                { item: "Breadfruit", "quantity": 45.45, "unit": "Gram" },
                { item: "Salt", "quantity": 0.91, "unit": "Gram" }
            ],
            steps:  {
                step1: "Grind together coconut, coriander seeds, cumin seeds, fenugreek seeds, pepper, red chili, cashews, cinnamon, cloves, cardamom, khus khus, star anise, and fennel seeds into a smooth paste with a little water. Set aside.",
                step2: "Heat oil in a pan. Add chopped onions and sauté until they are translucent. Add chopped tomatoes and cook until they are soft.",
                step3: "Add the ground paste to the pan and sauté for a few minutes until the raw smell disappears.",
            }
        },
        {
            id: 24,
            name: 'Pulav',
            description: 'A classic South Indian dish featuring lentils cooked with tomatoes and spices for a flavorful meal.',
            datePosted: 'March 11, 2024',
            image: 'https://www.indianveggiedelight.com/wp-content/uploads/2020/04/cauliflower-pulao-instant-pot-featured.jpg',
            ingredients: [
                // Spices for Powder
                { item: "Cinnamon", "quantity": 0.018, "unit": "Gram" },
                { item: "Cloves", "quantity": 0.009, "unit": "Gram" },
                { item: "Star Anise", "quantity": 0.009, "unit": "Gram" },
                { item: "Stone Flower", "quantity": 0.009, "unit": "Gram" },
                { item: "Fennel Seeds", "quantity": 0.027, "unit": "Gram" },
                { item: "Bay Leaf", "quantity": 0.005, "unit": "piece" },
                { item: "Coriander Seeds", "quantity": 0.036, "unit": "Gram" },
                { item: "Cumin Seeds", "quantity": 0.073, "unit": "Gram" },
                { item: "Nutmeg", "quantity": 0.005, "unit": "piece" },
                { item: "Cardamom Powder", "quantity": 0.004, "unit": "piece" },
        
                // Spices for Tempering
                { item: "Cinnamon", "quantity": 0.073, "unit": "Gram" },
                { item: "Cardamom", "quantity": 0.054, "unit": "Gram" },
                { item: "Cloves", "quantity": 0.054, "unit": "Gram" },
                { item: "Star Anise", "quantity": 0.054, "unit": "Gram" },
                { item: "Fennel Seeds", "quantity": 0.045, "unit": "Gram" },
                { item: "Black Stone Flower", "quantity": 0.045, "unit": "Gram" },
                { item: "Kasuri Methi", "quantity": 0.009, "unit": "Gram" },
                { item: "Bay Leaf", "quantity": 0.018, "unit": "piece" },
        
                // Vegetables
                { item: "Onion", "quantity": 9.05, "unit": "Gram" },
                { item: "Oil", "quantity": 0.009, "unit": "ml" },
                { item: "Tomato", "quantity": 7.25, "unit": "Gram" },
                { item: "Turmeric Powder", "quantity": 0.054, "unit": "Gram" },
                { item: "Ginger", "quantity": 0.73, "unit": "Gram" },
                { item: "Garlic", "quantity": 0.73, "unit": "Gram" },
                { item: "Green Chili", "quantity": 0.22, "unit": "Gram" },
                { item: "Beans", "quantity": 14.49, "unit": "Gram" },
                { item: "Carrot", "quantity": 14.49, "unit": "Gram" },
                { item: "Potato", "quantity": 7.25, "unit": "Gram" },
                { item: "Cauliflower", "quantity": 2.72, "unit": "Gram" },
                { item: "Mint Leaves", "quantity": 0.009, "unit": "Gram" },
                { item: "Coriander Leaves", "quantity": 0.0018, "unit": "Gram" },
                { item: "Curd", "quantity": 0.0018, "unit": "ml" },
                { item: "Rice", "quantity": 43.48, "unit": "Gram" },
                { item: "Salt", "quantity": 1.54, "unit": "Gram" }
            ],
            steps:  {
                step1: "Grind together cinnamon, cloves, star anise, stone flower, fennel seeds, bay leaf, coriander seeds, cumin seeds, nutmeg, and cardamom powder into a smooth powder. Set aside. Heat oil in a pan. Add cinnamon, cardamom, cloves, star anise, fennel seeds, black stone flower, kasuri methi, and bay leaf. Sauté for a few seconds until fragrant.",
        step2: "Add chopped onions, ginger, garlic, and green chili. Sauté until the onions are golden brown. Add chopped tomatoes and turmeric powder. Cook until the tomatoes are soft and oil starts to separate.Add beans, carrot, potato, and cauliflower. Mix well and cook for a few minutes.",
        step3: "Add the ground spice powder, mint leaves, and coriander leaves. Mix well. Add curd and rice. Mix gently and add water. Bring to a boil, then cover and cook on low heat until the rice and vegetables are tender. Add salt to taste. Serve hot with raita or pickle.",
            }
        },
        {
            id: 25,
            name: 'Puliyogare',
            description: 'A classic South Indian dish featuring lentils cooked with tomatoes and spices for a flavorful meal.',
            datePosted: 'March 11, 2024',
            image: 'https://www.balancenutrition.in/images/receipe-img/1537555626_large.jpg',
            ingredients: [
                // Spices and Condiments
                { item: "Tamarind", "quantity": 2.72, "unit": "Gram" },
                { item: "Coriander Seeds", "quantity": 0.36, "unit": "Gram" },
                { item: "Cumin Seeds", "quantity": 0.27, "unit": "Gram" },
                { item: "Pepper", "quantity": 0.055, "unit": "Gram" },
                { item: "Fenugreek Seeds", "quantity": 0.055, "unit": "Gram" },
                { item: "Chana Dal", "quantity": 0.18, "unit": "Gram" },
                { item: "Urad Dal", "quantity": 0.18, "unit": "Gram" },
                { item: "Toor Dal", "quantity": 0.18, "unit": "Gram" },
                { item: "Cinnamon", "quantity": 0.018, "unit": "Gram" },
                { item: "Cloves", "quantity": 0.036, "unit": "piece" },
                { item: "Star Anise", "quantity": 0.018, "unit": "piece" },
                { item: "Black Stone Flower", "quantity": 0.009, "unit": "Gram" },
                { item: "Cardamom", "quantity": 0.018, "unit": "piece" },
                { item: "Nutmeg", "quantity": 0.0036, "unit": "piece" },
                { item: "Red Chili (Dry)", "quantity": 0.27, "unit": "Gram" },
                { item: "Dry Coconut", "quantity": 2.72, "unit": "Gram" },
                { item: "Salt", "quantity": 1.54, "unit": "Gram" },
                { item: "Oil", "quantity": 0.009, "unit": "ml" },
                { item: "Mustard Seeds", "quantity": 0.009, "unit": "Gram" },
                { item: "Curry Leaves", "quantity": 0.009, "unit": "Gram" },
                { item: "Asafoetida", "quantity": 0.009, "unit": "Gram" }
            ],
            steps:  {
                step1: "Soak tamarind in water and extract the juice. Set aside. Dry roast coriander seeds, cumin seeds, pepper, fenugreek seeds, chana dal, urad dal, toor dal, cinnamon, cloves, star anise, black stone flower, cardamom, nutmeg, red chili, and dry coconut until fragrant. Grind into a fine powder.",
                step2: "Heat oil in a pan. Add mustard seeds and let them crackle. Add curry leaves and asafoetida. Add the tamarind extract, salt, and the prepared spice powder. Cook until the mixture thickens.",
                step3: "Mix the tamarind paste with cooked rice. Adjust salt to taste. Serve hot."
            }
        },
        {
            id: 26,
            name: 'Aloo Palya',
            description: 'A classic South Indian dish featuring lentils cooked with tomatoes and spices for a flavorful meal.',
            datePosted: 'March 11, 2024',
            image: 'https://www.indianveggiedelight.com/wp-content/uploads/2017/07/potato-masala.jpg',
            ingredients: [
                // Vegetables
                { item: "Onion", "quantity": 5.24, "unit": "Gram" },
                { item: "Tomato", "quantity": 8.74, "unit": "Gram" },
                { item: "Coconut", "quantity": 8.74, "unit": "Gram" },
                
                // Nuts
                { item: "Cashew Nuts", "quantity": 0.524, "unit": "Gram" },
                
                // Spices and Condiments
                { item: "Cinnamon", "quantity": 0.0175, "unit": "Gram" },
                { item: "Cloves", "quantity": 0.0175, "unit": "Piece" },
                { item: "Cardamom", "quantity": 0.0175, "unit": "Piece" },
                { item: "Black Stone Flower", "quantity": 0.00874, "unit": "Gram" },
                { item: "Star Anise", "quantity": 0.00874, "unit": "Piece" },
                { item: "Kasuri Methi", "quantity": 0.00874, "unit": "Gram" },
                { item: "Poppy Seeds", "quantity": 0.0262, "unit": "Gram" },
                { item: "Fennel Seeds", "quantity": 0.0262, "unit": "Gram" },
                { item: "Red Chili", "quantity": 0.0874, "unit": "Gram" },
                { item: "Green Chili", "quantity": 0.0175, "unit": "Gram" },
                { item: "Garlic", "quantity": 0.175, "unit": "Gram" },
                { item: "Potatoes", "quantity": 31.5, "unit": "Gram" },
                { item: "Flat Bean", "quantity": 5.24, "unit": "Gram" },
                { item: "Salt", "quantity": 0.629, "unit": "Gram" },
                { item: "Turmeric Powder", "quantity": 0.0262, "unit": "Gram" },
                { item: "Oil", "quantity": 1.75, "unit": "Milliliter" },
                { item: "Mustard Seeds", "quantity": 0.0612, "unit": "Gram" }
            ],
            steps:  {
                step1: "Chop the onions and tomatoes finely. Peel and cube the potatoes. Mince the garlic. Heat oil in a pan over medium heat. Add mustard seeds and allow them to splutter. Add cinnamon, cloves, cardamom, stone flower, star anise, poppy seeds, and fennel seeds. Sauté for a few seconds until fragrant.",
                step2: "Add chopped onions and minced garlic to the pan. Sauté until the onions turn translucent. Add chopped tomatoes, red chili powder, turmeric powder, and salt. Cook until the tomatoes soften.",
                step3: "Add potato cubes and hyacinth beans. Stir well to coat them with the spices. Cover the pan and cook on low heat until the potatoes and beans are tender. Stir occasionally to prevent sticking. Add crushed cashew nuts, kasuri methi, and green chili. Mix well and cook for another minute. Garnish with freshly grated coconut and stir to combine. Serve the Aloo Palya hot as a side dish with rice or roti.",
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
