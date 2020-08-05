import React, { useState } from 'react';
import './FormGalleryList.scss';

export const FormGalleryList = function (props) {

    return (
        <div className="c-form-gallery-list">
            {props.galleryList.map((galleryItem, index) => {
                return <figure key={index}>
                    <img className="c-form-gallery-list__img" src={galleryItem.imgUrl} alt=""/>
                    <figcaption>
                        <h3>{galleryItem.title}</h3>
                        <p>{galleryItem.description}</p>
                    </figcaption>
                </figure>;
            })}
        </div>
    )
};

