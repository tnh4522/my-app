import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../API/API";
function Home() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        API.get('product')
        .then((res) => {
            setProducts(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
    function renderProducts() {
        return products.map((product, index) => {
            return (
                <div className="col-sm-4" key={index}>
                    <div className="product-image-wrapper">
                        <div className="single-products">
                            <div className="productinfo text-center">
                                <img
                                    src={product.image}
                                    alt=""
                                    style={{ width: "200px", height: "200px" }}
                                />
                                <h2>{product.price}</h2>
                                <p>{product.name}</p>
                                <Link
                                    to="#"
                                    className="btn btn-default add-to-cart"
                                >
                                    <i className="fa fa-shopping-cart"></i>
                                    Add to cart
                                </Link>
                            </div>
                            <div className="product-overlay">
                                <div className="overlay-content">
                                    <h2>{product.price}</h2>
                                    <p>{product.name}</p>
                                    <Link
                                        to="#"
                                        className="btn btn-default add-to-cart"
                                    >
                                        <i className="fa fa-shopping-cart"></i>
                                        Add to cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="choose">
                            <ul className="nav nav-pills nav-justified">
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-plus-square"></i>
                                        Add to wishlist
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'product/detail/' + product.id}>
                                        <i className="fa fa-plus-square"></i>
                                        Show detail
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
        });
    }
    return (
        <div className="col-sm-9 padding-right">
            <div className="features_items">
                <h2 className="title text-center">Features Items</h2>
                {renderProducts()}
            </div>
            <div className="category-tab">
                <div className="col-sm-12">
                    <ul className="nav nav-tabs">
                        <li className="active"><Link to="#tshirt" data-toggle="tab">T-Shirt</Link></li>
                        <li><Link to="#blazers" data-toggle="tab">Blazers</Link></li>
                        <li><Link to="#sunglass" data-toggle="tab">Sunglass</Link></li>
                        <li><Link to="#kids" data-toggle="tab">Kids</Link></li>
                        <li><Link to="#poloshirt" data-toggle="tab">Polo shirt</Link></li>
                    </ul>
                </div>
                <div className="tab-content">
                    <div className="tab-pane fade active in" id="tshirt" >
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src={require('./images/gallery1.jpg')} alt="" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src={require('./images/gallery2.jpg')} alt="" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src={require('./images/gallery3.jpg')} alt="" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src={require('./images/gallery4.jpg')} alt="" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="blazers" >
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src={require('./images/gallery4.jpg')} alt="" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src={require('./images/gallery3.jpg')} alt="" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src={require('./images/gallery2.jpg')} alt="" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src={require('./images/gallery1.jpg')} alt="" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="sunglass" >
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src={require('./images/gallery3.jpg')} alt="" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src={require('./images/gallery4.jpg')} alt="" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src={require('./images/gallery1.jpg')} alt="" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src={require('./images/gallery2.jpg')} alt="" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="kids" >
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src={require('./images/gallery1.jpg')} alt="" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src={require('./images/gallery2.jpg')} alt="" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src={require('./images/gallery3.jpg')} alt="" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src={require('./images/gallery4.jpg')} alt="" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="poloshirt" >
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src={require('./images/gallery2.jpg')} alt="" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src={require('./images/gallery4.jpg')} alt="" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src={require('./images/gallery3.jpg')} alt="" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src={require('./images/gallery1.jpg')} alt="" />
                                        <h2>$56</h2>
                                        <p>Easy Polo Black Edition</p>
                                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recommended_items">
                <h2 className="title text-center">recommended items</h2>
                <div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="item active">
                            <div className="col-sm-4">
                                <div className="product-image-wrapper">
                                    <div className="single-products">
                                        <div className="productinfo text-center">
                                            <img src={require('./images/recommend1.jpg')} alt="" />
                                            <h2>$56</h2>
                                            <p>Easy Polo Black Edition</p>
                                            <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="product-image-wrapper">
                                    <div className="single-products">
                                        <div className="productinfo text-center">
                                            <img src={require('./images/recommend2.jpg')} alt="" />
                                            <h2>$56</h2>
                                            <p>Easy Polo Black Edition</p>
                                            <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="product-image-wrapper">
                                    <div className="single-products">
                                        <div className="productinfo text-center">
                                            <img src={require('./images/recommend3.jpg')} alt="" />
                                            <h2>$56</h2>
                                            <p>Easy Polo Black Edition</p>
                                            <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="col-sm-4">
                                <div className="product-image-wrapper">
                                    <div className="single-products">
                                        <div className="productinfo text-center">
                                            <img src={require('./images/recommend1.jpg')} alt="" />
                                            <h2>$56</h2>
                                            <p>Easy Polo Black Edition</p>
                                            <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="product-image-wrapper">
                                    <div className="single-products">
                                        <div className="productinfo text-center">
                                            <img src={require('./images/recommend2.jpg')} alt="" />
                                            <h2>$56</h2>
                                            <p>Easy Polo Black Edition</p>
                                            <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="product-image-wrapper">
                                    <div className="single-products">
                                        <div className="productinfo text-center">
                                            <img src={require('./images/recommend3.jpg')} alt="" />
                                            <h2>$56</h2>
                                            <p>Easy Polo Black Edition</p>
                                            <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
                        <i className="fa fa-angle-left"></i>
                    </a>
                    <a className="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
                        <i className="fa fa-angle-right"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Home;