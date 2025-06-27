export const getBackHeight = (total, queue) => {
    const factors = [.6, .4, .5]
    return `${total*factors[queue-1]}px`
}
export const getFrontHeight = (total) => {
    return `${total*.7}px`
}

export const getPOS = (queue) => {
    const pos_info = [
        {bottom: 30, right: 0},
        {bottom: 150, right: 20},
        {bottom: 0, right: 55}
    ]
    return pos_info[queue-1]
}