import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {MDbContainer, MDBRating} from 'mdbreact';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
function Rating(props) {
    const [rating, setRating] = useState(0);
    return (
        <div className="rating-area">
            <ul className="ratings">
                <li className="rate-this">Rate this item:</li>
                <li>
                <b-form-rating v-model="value" variant="warning" class="mb-2"></b-form-rating>
                </li>
                <li className="color">(6 votes)</li>
            </ul>
            <ul className="tag">
                <li>TAG:</li>
                <li><Link className="color" to="">Pink <span>/</span></Link></li>
                <li><Link className="color" to="">T-Shirt <span>/</span></Link></li>
                <li><Link className="color" to="">Girls</Link></li>
            </ul>
        </div>
    )
}
export default Rating;
