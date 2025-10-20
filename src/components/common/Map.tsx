import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export interface MarkerItem {
  lat: number;
  lng: number;
  title?: string;
  description?: string;
}

interface MapProps {
  markers?: MarkerItem[];
  center?: { lat: number; lng: number };
  zoom?: number;
  height?: string;
  single?: boolean;
  fitBounds?: boolean;
}

const Map: React.FC<MapProps> = ({ markers = [], center, zoom = 13, height = '320px', single = false, fitBounds = true }) => {
  const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number } | undefined>(center);

  useEffect(() => {
    if (!mapCenter) {
      if (markers && markers.length > 0) {
        setMapCenter({ lat: markers[0].lat, lng: markers[0].lng });
      } else {
        setMapCenter({ lat: 9.6333, lng: -83.5167 });
      }
    }
  }, [mapCenter, markers]);

  const bounds = markers.length > 1 && fitBounds ? markers.map(m => [m.lat, m.lng] as [number, number]) : undefined;

  if (!mapCenter) return <div style={{ height }} className="w-full bg-gray-100" />;

  return (
    <div style={{ height, zIndex: 0 }} className="w-full rounded overflow-hidden z-0">
      <MapContainer center={[mapCenter.lat, mapCenter.lng]} zoom={zoom} style={{ height: '100%', width: '100%', zIndex: 0 }} bounds={bounds}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((m, idx) => (
          <Marker key={`${m.lat}-${m.lng}-${idx}`} position={[m.lat, m.lng]}>
            <Popup>
              <div>
                {m.title && <div className="font-semibold">{m.title}</div>}
                {m.description && <div className="text-sm">{m.description}</div>}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
