import React from 'react'
import { Link } from 'react-router-dom'
function ListComment(props) {
    let { dataComment } = props;    
    const quantityComment = () => {
        if (dataComment.length > 0) {
            return dataComment.length;
        }
    }
    function fetchData() {
        if (dataComment.length > 0) {
            return dataComment.map((value, key) => {
                return (
                    <li className="media" key={key}>
                        <Link className="pull-left" to="#">
                            <img className="media-object" src={require('./images/man-two.jpg')} alt="" />
                        </Link>
                        <div className="media-body">
                            <ul className="sinlge-post-meta">
                                <li><i className="fa fa-user"></i>{value.name_user}</li>
                                <li><i className="fa fa-clock-o"></i>{value.created_at}</li>
                                <li><i className="fa fa-calendar"></i>{value.updated_at}</li>
                            </ul>
                            <p>{value.comment}</p>
                            <Link className="btn btn-primary" to=""><i className="fa fa-reply"></i>Replay</Link>
                        </div>
                    </li>
                )
            })
        }
    }
    return (
        <div className="response-area">
            <h2>{quantityComment()} RESPONSES</h2>
            <ul className="media-list">
                {fetchData()}
            </ul>
        </div>
    )
}
export default ListComment;