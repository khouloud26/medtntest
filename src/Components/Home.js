import React from 'react';

const home = () => {
    return(
        <div  className="AppHome" >

            <div class='left'>
            <h1 id='name'> <b>DR ALOULOU Smith</b></h1>
            <h5 id='description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat facilis,
velit, id tenetur optio sunt autem dolorem minima inventore repellat
possimus recusandae suscipit hic quis voluptatibus dolorum, nam
pariatur necessitatibus. Lorem ipsum dolor sit amet consectetur
adisicing elit. Fugiat facilis, velit, id tenetur optio sunt autem dolorem
minima inventore repellat possimus recusandae suscipit hic quis
voluptatibus dolorum, nam pariatur necessitatibus. </h5>
            <button class='btnrdv'><b style={{color:'white'}}> PRENDRE RENDEZ-VOUS </b></button>
            </div>
            <div class='right'><img id='profil' src='/images/Draloulou.jpg'></img></div>
        </div>

    )
}


export default home;
