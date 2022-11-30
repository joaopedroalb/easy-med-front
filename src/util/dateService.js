const getDateFormated  = (value) => {
    const date = new Date(value)
    return date.toLocaleDateString('pt-BR')
}

const getDateInput = (value) => {
    const date = new Date(value)

    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const result = date.getFullYear()+"-"+(month)+"-"+(day) ;
    
    return result
}

export const DateService = {
    getDateFormated,
    getDateInput
}
