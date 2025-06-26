export const getWidthAsPercent = (factor) => {
    return `${66/factor}%`
}

export const getPosFromHeight = (height) => {
    
    return {
            a: {
            bottom: .0545*height,
            right: .06*height},
            b: {
            bottom: .518*height,
            right: 0},
            c: {
            bottom: 0,
            right: 0}
            }
}