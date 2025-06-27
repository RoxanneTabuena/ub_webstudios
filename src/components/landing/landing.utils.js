export const getBackHeight = (total, queue) => {
    const factors = [.6, .5, .4]
    return `${total*factors[queue-1]}px`
}
export const getFrontHeight = (total) => {
    return `${total*.7}px`
}

export const getPOS = (queue) => {
    const pos_info = [
        {bottom: 20, right: 0},
        {bottom: 150, right: 0},
        {bottom: 0, right: 30}
    ]
    return pos_info[queue-1]
}