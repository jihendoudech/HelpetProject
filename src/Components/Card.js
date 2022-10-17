import React from "react";

export default function Card(props) {

    const imgSrc = require(`../images/${props.image}`);

    return (
        <div className="card" >
            <div className="card--image">
                <img 
                    src={imgSrc}
                    alt=""
                />
            </div>
            <div className="card--description">
                <p className="pet--name">Name : {props.name}</p>
                <p className="pet--breed">Breed : {props.breed}</p>
                <p className="pet--age">Age : {props.age}</p>
                <p className="pet--sex">Sex : {props.sex}</p>
                <p className="pet--address">Address : {props.address}</p>
                <p className="pet--vaccinated">Vaccinated : {props.vaccinated}</p>
            </div>
        </div>
    )
}