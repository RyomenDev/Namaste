const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        // src={
        //   'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/' +
        //   resData.data.cloudinaryImageId
        // }

        // src={
        //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
        //   cloudinaryImageId
        // }
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="Biryani"
      />
      {/* <h3>{props.resName}</h3>
        <h4>{props.cuisine}</h4> */}
      {/* <h3>{resData.data.name}</h3>
      <h4>{resData.data.cuisines.join(', ')}</h4>
      <h4>{resData.data.avgRating} stars</h4>
      <h4>₹{resData.data.costForTwo / 100} FOR TWO</h4>
      <h4>{resData.data.deliveryTime} minutes</h4> */}
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;

// import React from "react";

// const RestaurantCard = ({ resData }) => {
//   const {
//     name,
//     cuisines,
//     avgRating,
//     deliveryTime,
//     costForTwoString,
//     cloudinaryImageId,
//   } = resData.data;
//   const imageUrl = `https://res.cloudinary.com/demo/image/upload/${cloudinaryImageId}`;
//   //   const imageUrl = `https://png.pngtree.com/png-vector/20230217/ourmid/pngtree-food-logo-design-for-restaurant-and-business-png-image_6604922.png`;

//   return (
//     <div className="restaurant-card">
//       <img src={imageUrl} alt={name} />
//       <div className="restaurant-info">
//         <h3>{name}</h3>
//         <p>{cuisines.join(", ")}</p>
//         <p>Rating: {avgRating}</p>
//         <p>Delivery Time: {deliveryTime} mins</p>
//         <p>{costForTwoString}</p>
//       </div>
//     </div>
//   );
// };

// export default RestaurantCard;
