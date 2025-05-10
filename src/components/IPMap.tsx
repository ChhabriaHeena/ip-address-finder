
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconMarker from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


const IPMap = ({ position, myIpData }: any) => {

  const icon = L.icon({
    iconRetinaUrl: iconRetina,
    iconUrl: iconMarker,
    shadowUrl: iconShadow
  })

  return (

    <div
      style={{
        height: '60vh',
        width: '100%'
      }}
    >

      <MapContainer center={position && position} zoom={13} scrollWheelZoom={true}
        style={{ height: '400px', }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={position}
          icon={icon}
        >
          <Popup>
            You are here. <br />
            City: {myIpData?.city} <br />
            Region: {myIpData?.region} <br />
            Country: {myIpData?.country} <br />
            Postal: {myIpData?.postal} <br />
          </Popup>
        </Marker>

      </MapContainer>
    </div>


  )
}

export default IPMap
