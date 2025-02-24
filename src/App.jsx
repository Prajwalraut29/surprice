import React, { useState, useEffect } from "react";
import { GiPartyPopper } from "react-icons/gi";
import Confetti from "react-confetti";
import matchVideo from "./assets/match.mp4";

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div style={containerStyle}>
      <button onClick={openModal} style={buttonStyle}>
        <GiPartyPopper size={24} style={{ marginRight: "8px" }} />
        Surprice!
      </button>
      {showModal && <FullScreenModal onClose={closeModal} />}
    </div>
  );
}

function FullScreenModal({ onClose }) {
  return (
    <div style={modalOverlayStyle}>
      {/* Confetti effect */}
      <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} numberOfPieces={500} />
      <div style={modalContentStyle}>
        <button onClick={onClose} style={closeButtonStyle}>Close</button>
        <CustomVideoPlayer />
      </div>
    </div>
  );
}

function CustomVideoPlayer() {
  useEffect(() => {
    const videoElement = document.getElementById("custom-video");
    if (videoElement) {
      videoElement.play();
    }
  }, []);

  return (
    <video
      id="custom-video"
      src={matchVideo} // Correct path
      style={videoStyle}
      autoPlay
      playsInline
    />

  );
}

// Styles
const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f0f0f0",
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "18px",
  cursor: "pointer",
  backgroundColor: "#ff4500",
  border: "none",
  borderRadius: "5px",
  color: "#fff",
  display: "flex",
  alignItems: "center",
};

const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalContentStyle = {
  position: "relative",
  width: "100vw",
  height: "100vh",
  backgroundColor: "#000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
};

const closeButtonStyle = {
  position: "absolute",
  top: "20px",
  right: "20px",
  padding: "10px",
  fontSize: "16px",
  backgroundColor: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  zIndex: 1001,
};

const videoStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

export default App;
