module.exports = {
    date(timestamp) {
        const date = new Date(timestamp)

        // use UTC for precision.
        const year = date.getFullYear()
        const month = `0${date.getMonth() + 1}`.slice(-2) // jan = 0
        const day = `0${date.getDate()}`.slice(-2) // 1 - 31
        const hour = date.getHours()
        const minutes = date.getMinutes()

        return {
            day,
            month,
            year,
            hour,
            minutes,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`,
            format: `${day}/${month}/${year}`
        }
    },
    formatPrice(price) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: "BRL"
        }).format(price/100)

    }
}

