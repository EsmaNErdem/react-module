const choice = (items) => {
   const randomIndex = Math.floor(Math.random() * items.length)
   return items[randomIndex]
}

const remove = (items, item) => {
    for (let i = 0; i < items.length; i++) {
        if (items[i] == item) {
            items.splice(i, 1)
            return items
        }
    }
}

export {choice, remove};
