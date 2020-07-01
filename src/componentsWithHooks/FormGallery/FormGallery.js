import React, { useState, useEffect } from 'react';
import './FormGallery.scss';
import { FormGalleryList } from "./Components/FormGalleryList";

export const FormGallery = function () {
    const [galleryList, setGalleryList] = useState([{
        imgUrl: './img/azul.jpg',
        title: 'Titutlo de azul',
        description: 'Descripción de prueba',
    }, {
        imgUrl: './img/persa.jpg',
        title: 'Titutlo de persa',
        description: 'Descripción de prueba',
    }]);

    const [title, setTitle] = useState('');
    const [imgUrl, setImgUrl] = useState('./img/azul.jpg');
    const [description, setDescription] = useState('');

    const images = [{
        label: 'Azul ruso',
        value: './img/azul.jpg'
    }, {
        label: 'Persa',
        value: './img/persa.jpg'
    }, {
        label: 'Siames',
        value: './img/siames.jpg'
    }];

    const addItem = () => {
        setGalleryList([...galleryList, { imgUrl, title, description }]);
    };


    // useEffect(() => {
    //     if (title === 'Kerry Copollon') {
    //         alert('Me ta vasilando?')
    //     }
    // }, [title]);

    return (
        <div className="c-form-gallery">
            <div className="c-form-gallery__form">
                <label htmlFor="imgUrl">Image</label>
                <select className="c-form-gallery__select" name="" id="imgUrl" value={imgUrl}
                        onChange={$event => {setImgUrl($event.target.value)}}>
                    {images.map(image => {
                        return <option value={image.value}>{image.label}</option>;
                    })}
                </select>

                <label htmlFor="title">Title</label>
                <input className="c-form-gallery__input" id="title" type="text" value={title}
                       onChange={$event => {setTitle($event.target.value)}}/>
                <label htmlFor="description">Description</label>
                <textarea className="c-form-gallery__textarea" id="description" cols="30" rows="10" value={description}
                          onChange={$event => {setDescription($event.target.value)}}/>
                <button className="c-form-gallery__button" onClick={() => addItem()}>Añadir</button>
            </div>
            <FormGalleryList galleryList={galleryList}/>
        </div>
    )
};

