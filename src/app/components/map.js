import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default function Map(props) {
    const containerStyle = {
        width: '100%',
        height: '270px',
      };
    //   const center = {
    //     lat: -3.745,
    //     lng: -38.523,
    //   };
      
    return (
        <LoadScript googleMapsApiKey="YOUR_API_KEY">
            <GoogleMap mapContainerStyle={containerStyle} center={props.center} zoom={10}></GoogleMap>
        </LoadScript>
    )
}
