import React from "react";
import pic from "../assets/detailRecipe/photo.svg";
import play from "../assets/detailRecipe/play.svg";
import "../components/module/detailrecipe/detailrecipe.css";
import comment from "../assets/detailRecipe/comment.png";
import Navbar from "../components/base/navbar/NavbarProfileTop";
import NavbarAfterLogin from "../components/base/navbarafterlogin/NavbarAfterLogin";
import Footer from "../components/module/footer/Footer";
import Like from "../assets/detailRecipe/ic-likes.svg";
import Bookmark from "../assets/detailRecipe/ic-bookmark.svg";

function Detail() {
  return (
    <>
      <NavbarAfterLogin />
      <div className="small-middle-container">
        <div className="content my-3">
          <h1 className="text-center">Loream Sandwich</h1>
          <div class="gallerypic">
            <img src={pic} height="450" width="600" alt="[Gallery Photo]" className="pic img-fluid" />
            <span class="bookmark">
              <a href="#">
                <img src={Like} alt="bookmark" className="icon" />
              </a>
            </span>
            <span class="like">
              <a href="#">
                <img src={Bookmark} alt="like" className="icon" />
              </a>
            </span>
          </div>
        </div>
        <div className="my-4">
          <h3>Ingredients</h3>
          <ul>
            <li>2 Eggs</li>
            <li>2 Tbsp</li>
            <li>3 Slices Bread</li>
            <li>A Little Butter</li>
            <li>1/3 Carton Of Cress</li>
            <li>2-3 Slices Of Tomato Or A Lettuce Leaf And A Slice Of Ham Or Cheese</li>
            <li>Crisps, To Serve</li>
          </ul>
        </div>
        <div className="my-4">
          <h3>Video Step</h3>
          <div href>
            <button className="btn btn-warning mb-3">
              <img src={play} />
            </button>
          </div>
        </div>
        <div>
          <label for="exampleFormControlTextarea1" class="form-label">
            Comment
          </label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          <div className="d-flex align-items-center justify-content-center my-3">
            <button className="btn btn-warning mb-2">Send</button>
          </div>
          <div>
            <h3>Comment</h3>
            <div className="d-flex flex-row my-4">
              <img src={comment} className="commentPic" />
              <div className="flex-column mx-3">
                <div>
                  <h6>Ayudia</h6>
                </div>
                <div>
                  <p>Nice recipe. simple and delicious, thankyou</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Detail;
