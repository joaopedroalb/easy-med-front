const getDateFormated  = (value) => {
    const date = new Date(value)
    return date.toLocaleDateString('pt-BR')
}

export const DateService = {
    getDateFormated
}
