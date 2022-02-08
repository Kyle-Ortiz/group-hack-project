export default function addCartItem(item){
    const set = new Set(items);
    if(set.has(item)){item.quantity++;}
    else set.add(item);
    return [...set]
}

export default function subtractCartItem(item){
    const set = new Set(items);
    if(set.has(item)){item.quantity--;}
    return [...set]
}

export default function eliminateCartItem(item){
    const set = new Set(items);
    if(set.has(item)){set.delete(item)};
    return [...set]
}

