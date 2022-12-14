const CpfConverter = (cpf) => {
    let value = cpf
    value = value.replace( /[^\d]/g , "");
    value = value.replace( /(\d{3})(\d)/ , "$1.$2"); 
    value = value.replace( /(\d{3})(\d)/ , "$1.$2"); 
    value = value.replace( /(\d{3})(\d)/ , "$1-$2");
    return value
}

const CpfReverte = (cpf) => { 
    return cpf.replace( /\D/g, '')
}

const PhoneConverter = (phone) => {
    let value = phone
    value = value.replace( /[^\d]/g , "");
    value = value.replace( /(\d{0})(\d)/ , "$1($2"); 
    value = value.replace( /(\d{2})(\d)/ , "$1)$2"); 
    value = value.replace( /(\d{5})(\d)/ , "$1-$2"); 
    return value
}

const PhoneReverte = (phone) => { 
    return phone.replace( /[^\d]/g , '')
}


export const MaskService = {
    CpfConverter,
    CpfReverte,
    PhoneConverter,
    PhoneReverte
}