import React, { useState, useCallback, useEffect } from "react";
import { GoogleMap, MarkerF, InfoWindowF, useLoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "650px",
};

const center = { lat: 47.5163008, lng: 8.6445932 };

const grayStyles = [
  { featureType: "administrative", elementType: "labels.text.fill", stylers: [{ color: "#686868" }] },
  { featureType: "landscape", elementType: "all", stylers: [{ color: "#f2f2f2" }] },
  { featureType: "poi", elementType: "all", stylers: [{ visibility: "off" }] },
  { featureType: "road", elementType: "all", stylers: [{ saturation: -100 }, { lightness: 45 }] },
  { featureType: "water", elementType: "all", stylers: [{ color: "#b7e4f4" }, { visibility: "on" }] }
];

const MapComponent = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyA0dT_ztojEL06D4NjVJpnz1E-a-pA4a-s",
    libraries: ["places"],
  });

  const [activeMarker, setActiveMarker] = useState(null);
  const [icon, setIcon] = useState(null);
  const [themeColor, setThemeColor] = useState("");
  const [textColor, setTextColor] = useState("");

  const locations = [
    {
      name: "Loewenmut Punkt GmbH",
      lat: 47.5163008,
      lng: 8.6445932,
      address: "Ida-Sträuli-Strasse 95 CH-8404 Winterthur",
      email: "info@loewenmut.ch",
      phone: "+41 52 224 77 88", 
    },
  ];

  const getThemeColor = () => {
    const root = document.documentElement;
    return getComputedStyle(root).getPropertyValue("--bs-themecolor").trim() || "#F3DC01";
  };
  const getTextColor = () => {
    const root = document.documentElement;
    return getComputedStyle(root).getPropertyValue("--bs-themetext").trim() || "#000";
  };

//   const createColoredSVGIcon = (color, textColor) => {
//     const svg = `
//       <svg width="127" height="171" viewBox="0 0 127 171" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M126.173 63.1049C126.173 76.0034 122.231 88.9645 114.194 100.069L63.0862 170.698L11.9782 100.069C-6.18643 74.9671 -3.43237 40.3891 18.4782 18.4785C30.7966 6.16014 46.9423 0 63.0861 0C79.2298 0 95.3755 6.16014 107.694 18.4785C119.911 30.6953 126.173 46.8503 126.173 63.1049Z" fill="${color}"/>
//         <path d="M63.0869 100.12C83.5403 100.12 100.121 83.5396 100.121 63.0862C100.121 42.6328 83.5403 26.052 63.0869 26.052C42.6335 26.052 26.0527 42.6328 26.0527 63.0862C26.0527 83.5396 42.6335 100.12 63.0869 100.12Z" fill="white"/>
//         <path d="M65.2975 76.5611H53.7676V48.7421H58.1373V72.1896H65.2912L65.2975 76.5611Z" fill="${textColor}"/>
//         <path d="M71.661 74.455C71.6647 74.9729 71.4886 75.476 71.1627 75.8785C70.8367 76.281 70.3812 76.558 69.8739 76.6621C69.3666 76.7662 68.8388 76.691 68.3807 76.4494C67.9226 76.2077 67.5626 75.8146 67.362 75.3371C67.1615 74.8596 67.1328 74.3273 67.281 73.8311C67.4291 73.3348 67.7449 72.9053 68.1744 72.6159C68.6039 72.3265 69.1206 72.1951 69.6362 72.2442C70.1517 72.2932 70.6343 72.5197 71.0016 72.8849C71.2129 73.0877 71.3804 73.3316 71.4938 73.6017C71.6072 73.8717 71.6641 74.1621 71.661 74.455Z" fill="${textColor}"/>
//       </svg>
//     `;
//     return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
//   };

  const createColoredSVGIcon = (color, textColor) => {
        // let color = getThemeColor();
        // let textColor = getTextColor();
        const svg = `
    <svg width="127" height="171" viewBox="0 0 127 171" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M126.173 63.1049C126.173 76.0034 122.231 88.9645 114.194 100.069L63.0862 170.698L11.9782 100.069C-6.18643 74.9671 -3.43237 40.3891 18.4782 18.4785C30.7966 6.16014 46.9423 0 63.0861 0C79.2298 0 95.3755 6.16014 107.694 18.4785C119.911 30.6953 126.173 46.8503 126.173 63.1049Z" fill="${color}"/>
      <path d="M126.172 63.1052C126.172 76.0037 122.23 88.9645 114.194 100.069L63.0859 170.697V0.000488281C79.2296 0.000488281 95.3752 6.15974 107.694 18.4781C119.91 30.6957 126.172 46.8505 126.172 63.1052Z" fill="${color}"/>
      <path d="M63.0869 108.355C88.0881 108.355 108.355 88.0873 108.355 63.0862C108.355 38.0851 88.0881 17.8176 63.0869 17.8176C38.0858 17.8176 17.8184 38.0851 17.8184 63.0862C17.8184 88.0873 38.0858 108.355 63.0869 108.355Z" fill="${color}"/>
      <path d="M108.354 63.0868C108.354 88.087 88.0871 108.355 63.0859 108.355V17.8175C88.0871 17.8175 108.354 38.0856 108.354 63.0868Z" fill="${color}"/>
      <path d="M63.0869 100.12C83.5403 100.12 100.121 83.5396 100.121 63.0862C100.121 42.6328 83.5403 26.052 63.0869 26.052C42.6335 26.052 26.0527 42.6328 26.0527 63.0862C26.0527 83.5396 42.6335 100.12 63.0869 100.12Z" fill="white"/>
      <path d="M62.677 90.6832C78.1438 90.6832 90.6821 78.1449 90.6821 62.6781C90.6821 47.2113 78.1438 34.673 62.677 34.673C47.2102 34.673 34.6719 47.2113 34.6719 62.6781C34.6719 78.1449 47.2102 90.6832 62.677 90.6832Z" fill="${color}"/>
      <path d="M65.2975 76.5611H53.7676V48.7421H58.1373V72.1896H65.2912L65.2975 76.5611Z" fill="${textColor}"/>
      <path d="M71.661 74.455C71.6647 74.9729 71.4886 75.476 71.1627 75.8785C70.8367 76.281 70.3812 76.558 69.8739 76.6621C69.3666 76.7662 68.8388 76.691 68.3807 76.4494C67.9226 76.2077 67.5626 75.8146 67.362 75.3371C67.1615 74.8596 67.1328 74.3273 67.281 73.8311C67.4291 73.3348 67.7449 72.9053 68.1744 72.6159C68.6039 72.3265 69.1206 72.1951 69.6362 72.2442C70.1517 72.2932 70.6343 72.5197 71.0016 72.8849C71.2129 73.0877 71.3804 73.3316 71.4938 73.6017C71.6072 73.8717 71.6641 74.1621 71.661 74.455Z" fill="${textColor}"/>
    </svg>
  `;
        return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
    };

  // 🟡 Watch theme changes and update state
  useEffect(() => {
    const updateColors = () => {
      setThemeColor(getThemeColor());
      setTextColor(getTextColor());
    };

    updateColors();

    // Use MutationObserver to watch for CSS variable changes on <html> or <body>
    const observer = new MutationObserver(updateColors);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style", "class"],
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  // 🟢 Update icon whenever themeColor or textColor changes
  useEffect(() => {
    if (isLoaded && window.google && themeColor && textColor) {
      const svgUrl = createColoredSVGIcon(themeColor, textColor);
      setIcon({
        url: svgUrl,
        scaledSize: new window.google.maps.Size(100, 120),
        anchor: new window.google.maps.Point(30, 80),
      });
    }
  }, [isLoaded, themeColor, textColor]);

  const onMapLoad = useCallback((map) => {
    console.log("Map Loaded:", map);
  }, []);

  if (loadError) return <p>Error loading maps</p>;
  if (!isLoaded) return <p>Loading maps...</p>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={17}
      center={center}
      options={{ styles: grayStyles, disableDefaultUI: true }}
      onLoad={onMapLoad}
    >
      {locations.map((location, index) => (
        <MarkerF
          key={index}
          position={{ lat: location.lat, lng: location.lng }}
          icon={icon}
          onClick={() => setActiveMarker(index)}
        >
          {activeMarker === index && (
            <InfoWindowF position={{ lat: location.lat, lng: location.lng }} onCloseClick={() => setActiveMarker(null)}>
              <div>
                <h5><strong>{location.name}</strong></h5>
                <p>{location.address}</p>
                <p><a href={`mailto:${location.email}`}>{location.email}</a></p>
                <p><a href={`tel:${location.phone}`}>{location.phone}</a></p>
              </div>
            </InfoWindowF>
          )}
        </MarkerF>
      ))}
    </GoogleMap>
  );
};

export default MapComponent;
