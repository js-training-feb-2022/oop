const hamburgerVariations = {
    size: {
        small: {
            price: 50,
            calories: 20
        },
        big: {
            price: 100,
            calories: 40,
        }
    },
    stuffing: {
        cheese: {
            price: 10,
            calories: 20,
        },
        salad: {
            price: 20,
            calories: 5
        },
        potato: {
            price: 15,
            calories: 10,
        }
    }
}

const saladVariations = {
    name: {
        ceasar: {
            price: 100,
            calories: 20,
        },
        olivier: {
            price: 50,
            calories: 80,
        }
    }
};

const drinkVariations = {
    name: {
        cola: {
            price: 50,
            calories: 40,
        },
        coffee: {
            price: 80,
            calories: 20,
        }
    }
};

export { hamburgerVariations, saladVariations, drinkVariations };