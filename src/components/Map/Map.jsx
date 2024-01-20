// import React, { useState } from "react";
// import L from "leaflet";
// import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import icon from "leaflet/dist/images/marker-icon.png";
// import iconShadow from "leaflet/dist/images/marker-shadow.png";
// import s from "./Map.module.css";

// const Map = ({ positionDetail }) => {
//   const MarkerIcon = L.icon({
//     iconUrl: icon,
//     shadowUrl: iconShadow,
//   });

//   const [mapCenter, setMapCenter] = useState(
//     positionDetail ? positionDetail : [-34.59015799096023, -58.41278447665555] 
//   );

//   return (
//     <div className={s.map_container}>
//       <MapContainer className={s.map} center={mapCenter} zoom={13}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />

//         <Marker position={mapCenter} icon={MarkerIcon}>
//           <Popup position={mapCenter}>
//             <div className={s.navlink}>
//               <a
//                 href="https://www.google.com/maps/place/Gorriti+3710,+Palermo,+Buenos+Aires,+Argentina"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <h3 className={s.title}>
//                   <b>Patch&Me</b>
//                 </h3>
//                 <img className={s.pictureHome} alt="" />
//               </a>
//             </div>
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// };

// export default Map;