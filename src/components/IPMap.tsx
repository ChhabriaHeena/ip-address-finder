
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


const IPMap = ({ position, myIpData }: any) => {

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
          position={position}>
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
