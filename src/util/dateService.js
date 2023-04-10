const getDateFormated  = (value) => {
    const date = new Date(value)
    return date.toLocaleDateString('pt-BR')
}

const getDateInput = (value) => {
    const date = new Date(value)

    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export const DateService = {
    getDateFormated,
    getDateInput
}
