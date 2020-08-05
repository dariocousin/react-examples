import React, { useState } from 'react';
import './FormGallery.scss';
import { FormGalleryList } from "./components/FormGalleryList";

export const FormGallery = function () {
    // const [state, dispatch] = useContext(CounterDispatch);

    const [galleryList, setGalleryList] = useState([{
        imgUrl: './img/azul.jpg',
        title: 'Titulo de azul',
        description: 'Descripción de prueba',
    }, {
        imgUrl: './img/persa.jpg',
        title: 'Titulo de persa',
        description: 'Descripción de prueba',
    }]);

    const [cat, setCat] = useState({ imgUrl: './img/azul.jpg', title: '', description: '' });
    // const [imgUrl, setImgUrl] = useState('./img/azul.jpg');
    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');

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

    const addItem = ($event) => {
        $event.preventDefault();
        // const imgUrl = document.getElementById('imgUrl').value;
        // const title = document.getElementById('title').value;
        // const description = document.getElementById('description').value;

        // const array = [1,2,3]
        // const array1 = [4,5,6]
        //
        // // const array2 = [array];
        // const array2 = [...array, ...array1,7,8,9];
        //
        // console.log('##ABEL## >> FormGallery >>  addItem', array2); // [1,2,3,4,5,6,7,8,9]
        //
        // console.log('##ABEL## >> FormGallery >>  addItem', array2); // [[1,2,3]]
        // console.log('##ABEL## >> FormGallery >>  addItem', array2[0][0]); // 1
        // console.log('##ABEL## >> FormGallery >>  addItem', array2[0][1]); // 2
        setGalleryList([...galleryList, cat]);
        // console.log('##ABEL## >> FormGallery >>  addItem', { imgUrl:imgUrl, title:title, description:description });
    };


    // useEffect(() => {
    //     if (title === 'Kerry Copollon') {
    //         alert('Me ta vasilando?')
    //     }
    // }, [title]);

    return (
        <div className="c-form-gallery">
            {/*<p>GALERIAAA {state.count}</p>*/}
            <form onSubmit={addItem} className="c-form-gallery__form">
                <label htmlFor="imgUrl">Image</label>
                <select className="c-form-gallery__select" name="" id="imgUrl" value={cat.imgUrl}
                        onChange={$event => {setCat({...cat,imgUrl: $event.target.value})}}>
                    {images.map((image, index) => {
                        return <option key={index} value={image.value}>{image.label}</option>;
                    })}
                </select>

                <label htmlFor="title">Title</label>
                <input className="c-form-gallery__input" id="title" type="text" value={cat.title}
                       onChange={$event => {setCat({...cat,title: $event.target.value})}}/>
                <label htmlFor="description">Description</label>
                <textarea className="c-form-gallery__textarea" id="description" cols="30" rows="10" value={cat.description}
                          onChange={$event => {setCat({...cat,description: $event.target.value})}}/>
                <input type="submit" value="Añadir" className="c-form-gallery__button"/>
            </form>
            <FormGalleryList galleryList={galleryList}/>
        </div>
    )
};

