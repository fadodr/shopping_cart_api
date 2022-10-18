
export const computeExpiryDate = (timeInSecs : number) => {
    return new Date(Date.now() + (timeInSecs * 1000));
}