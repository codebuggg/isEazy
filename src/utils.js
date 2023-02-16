export const getFormattedDate = (date) => {

    const createdAt = new Date(date)
    const year = createdAt.getFullYear()
    const day = createdAt.getDay()
    const month = getMonth(createdAt.getMonth())
    const hour = createdAt.getHours()
    const minute = createdAt.getMinutes()
    return `${day} ${month} ${year} / ${hour}:${minute}`
     
}

const getMonth = (monthIndex) => {
    switch(monthIndex){
        case 0:
        return "January"
        case 1:
        return "February"
    }
}
