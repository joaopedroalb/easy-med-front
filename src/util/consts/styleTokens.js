export const DEVICE_SIZES = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '728px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const DEVICE_RESPONSIVE_QUERY  = {
    mobileS: `(max-width: ${DEVICE_SIZES.mobileS})`,
    mobileM: `(max-width: ${DEVICE_SIZES.mobileM})`,
    mobileL: `(max-width: ${DEVICE_SIZES.mobileL})`,
    tablet: `(max-width: ${DEVICE_SIZES.tablet})`,
    laptop: `(max-width: ${DEVICE_SIZES.laptop})`,
    laptopL: `(max-width: ${DEVICE_SIZES.laptopL})`,
    desktop: `(max-width: ${DEVICE_SIZES.desktop})`,
    desktopL: `(max-width: ${DEVICE_SIZES.desktop})`
};

export const BUTTON_THEME = {
    red:{
        bg:'var(--red)',
        color:'var(--white)',
    },
    blue:{
        bg:'var(--blue-400)',
        color:'var(--white)',
    },
    darkBlue:{
        bg:'var(--dark-blue-800)',
        color:'var(--white)',
    },
    green:{
        bg:'var(--green)',
        color:'var(--black)',
    },
}