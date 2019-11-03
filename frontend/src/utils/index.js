import { base64StringToBlob } from 'blob-util';

export const shuffle = (array) => {
    return array.reduce( 
        (newArr, _, i) => {
            var rand = i + ( Math.floor( Math.random() * (newArr.length - i) ) );
            [newArr[rand], newArr[i]] = [newArr[i], newArr[rand]]
            return newArr
        }, [...array]
    );
}

export const imageBlob = (image) => {
    const imageSring = image.split('data:image/png;base64,').join('');
    const blob = base64StringToBlob(imageSring, 'image/jpeg');
    const index =  parseInt(Math.random() * 100);
    const name = `image-${Date.now()}${index}.jpg`;
    blob.name = name;
    return blob;
}