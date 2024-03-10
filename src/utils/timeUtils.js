const calcElapsedTime = (dateFrom) => {
    const elapsedDays = (new Date() - new Date(dateFrom))/(1000 * 60 * 60 * 24)
    const elapsedYears = Math.floor(elapsedDays/365)
    const elapsedMonths = Math.floor(elapsedDays/30.4) - elapsedYears * 12
    const yearsString = elapsedYears ? `${elapsedYears} year${elapsedYears > 1 ? 's' : ''}` : ''
    const monthsString = elapsedMonths ? `${elapsedMonths} month${elapsedMonths > 1 ? 's' : ''}` : ''
    return `${yearsString} ${monthsString}`
}

export { calcElapsedTime }