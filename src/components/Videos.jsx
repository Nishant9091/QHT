import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Modal } from "react-bootstrap";

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const location = useLocation();

  const pageSlug = location.pathname.split("/")[1] || "home";

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/videos?page=${pageSlug}`)
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, [pageSlug]);

  const handleShow = (url) => {
    setSelectedVideo(url);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedVideo("");
  };

  return (
    <div className="sec-pad">
      <div className="container">
        <div className="row">
          <h2 className="p-head w-md-50 mb-5">
            Watch the incredible journey & transformation.
          </h2>
        </div>
        <div className="row">
          {videos.map((video, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-100"
                style={{ cursor: "pointer" }}
                onClick={() => handleShow(video.videoUrl)}
              />
            </div>
          ))}
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body className="p-0">
          <div className="ratio ratio-16x9">
            <iframe
              src={selectedVideo}
              title="Video"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Videos;
