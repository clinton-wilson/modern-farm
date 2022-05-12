export const catalog = (foods) => {
    let HTMLString = ""
    for (const food of foods) {
        HTMLString += `<section class="plant">${food.type}</section>\n`
    }
    return HTMLString
}