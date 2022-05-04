import React from 'react'
import avatar from "./Images/Cashtan.png";
import './App.css';


const DogProfile = () => {
  const dog = {
      id: 1,
      name: "Cashtan",
      breed: "crossbreed",
      imageSrc: avatar,
      age: 4,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
          " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
          " when an unknown printer took a galley of type and scrambled it to make a type specimen book." +
          " It has survived not only five centuries, but also the leap into electronic typesetting," +
          " remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages," +
          " and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    }


  return (
      <div className='App'>
        <div className='dogProfile'>
            <h1>{dog.name} profile</h1>
            <div className='dogInfo'>
                <div className='avatarSection'>
                    <div className='profilePicture'>
                        <img src={dog.imageSrc} alt='dog profile picture' />
                    </div>
                </div>
                <h2>Breed: {dog.breed}</h2>
                <h2>Age: {dog.age}</h2>
            </div>
                <h3 className="dogDescriptionTitle">Description:</h3>
                <div className="dogDescription">
                <span>
                    {dog.description}
                </span>
            </div>
        </div>
    </div>
    )
}

export default DogProfile