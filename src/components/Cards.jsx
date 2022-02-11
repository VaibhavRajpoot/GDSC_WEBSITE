import styled from 'styled-components'
import React from 'react'
import pic from './assets/pic1.png'
function Cards(){
    return(
        <div>
            <Div>
            <div className="card">
                <div className="card-image"></div>
                <div className="card-text">
                    <span className="date">4 days ago</span>
                    <h2>Post One</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
                </div>
                </div>
            </Div>
        </div>
    );
}
export default Cards;

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background:{pic};
  overflow: hidden;

.card {
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: "image" "text" "stats";

  border-radius: 18px;
  background: white;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
  font-family: roboto;
  text-align: center;
  

  transition: 0.5s ease;
  cursor: pointer;
  margin:30px;
}
.card-image {
  grid-area: image;
  background: {pic};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
}

.card-text {
  grid-area: text;
  margin: 25px;
}
.card-text .date {
  color: rgb(255, 7, 110);
  font-size:13px;
}
.card-text p {
  color: grey;
  font-size:15px;
  font-weight: 300;
}
.card-text h2 {
  margin-top:0px;
  font-size:28px;
}
.
.card:hover {
  transform: scale(1.15);
  box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
}

/*card2*/
.card-image.card2 {
  background:{pic1};
  background-size: cover;
}
.card-text.card2 .date {
  color: rgb(255, 77, 7);
}
/*card3*/
.card-image.card3 {
  background: {pic1};
  background-size: cover;
}
.card-text.card3 .date {
  color: rgb(0, 189, 63);
}

`
