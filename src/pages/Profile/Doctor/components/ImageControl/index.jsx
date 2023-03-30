import React, { useEffect, useState } from 'react';
import InputText from '../InputText';

 import { Input, Container } from './style';

const IMAGE_DEFAULT = 'https://cdn.discordapp.com/attachments/469630958811742212/1022924520002158624/unknown.png'


function ImageControl({ photoUrl, changePhotoUrl }) {
    const [photo, setPhoto] = useState(photoUrl)
    const onError = () => setPhoto(IMAGE_DEFAULT);
    const imageChange = () => {
        setPhoto(photoUrl)
    }
    useEffect(()=>{
        imageChange()
    },[photoUrl])

    return (
        <Container>
            <img 
                src={photo ? photo : IMAGE_DEFAULT}
                onError={onError} 
                className='image-photo'
            />
            {
                photo === IMAGE_DEFAULT ? 
                    <InputText 
                        title={'Url da foto'}
                        nameInpt={'photo'}
                        value={photo}
                        changeValue={changePhotoUrl}
                        rotate='right'
                        blurEventOnly
                    />
                    :
                    <InputText 
                        title={'Url da foto'}
                        nameInpt={'photo'}
                        value={photo}
                        changeValue={changePhotoUrl}
                        rotate='right'
                    />
                
            }
        </Container>
    )
}

export default ImageControl;