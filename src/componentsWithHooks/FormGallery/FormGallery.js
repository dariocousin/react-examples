import React, { useContext, useState } from 'react';
import './FormGallery.scss';
import { FormGalleryList } from "./Components/FormGalleryList";
import CounterDispatch from "../CounterDispatch";

export const FormGallery = function () {
    const [state, dispatch] = useContext(CounterDispatch);

    const [galleryList, setGalleryList] = useState([{
        imgUrl: './img/azul.jpg',
        title: 'Titulo de azul',
        description: 'Descripción de prueba',
    }, {
        imgUrl: './img/persa.jpg',
        title: 'Titulo de persa',
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
            <p>GALERIAAA {state.count}</p>
            <div className="c-form-gallery__form">
                <label htmlFor="imgUrl">Image</label>
                <select className="c-form-gallery__select" name="" id="imgUrl" value={imgUrl}
                        onChange={$event => {setImgUrl($event.target.value)}}>
                    {images.map((image, index) => {
                        return <option  value={image.value}>{image.label}</option>;
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

