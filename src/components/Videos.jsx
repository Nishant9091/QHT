import React, { useState } from "react";
import V1 from "../assets/video-thumbnail/1.png";
import V2 from "../assets/video-thumbnail/2.png";
import V3 from "../assets/video-thumbnail/3.png";
import V4 from "../assets/video-thumbnail/4.png";
import V5 from "../assets/video-thumbnail/5.png";
import V6 from "../assets/video-thumbnail/6.png";
import { Modal } from "react-bootstrap";

const videoData = [
  { thumbnail: V1, videoUrl: "https://www.youtube.com/embed/llYfX0Rf_Yk" },
  { thumbnail: V6, videoUrl: "https://www.youtube.com/embed/llYfX0Rf_Yk" },
  { thumbnail: V5, videoUrl: "https://www.youtube.com/embed/llYfX0Rf_Yk" },
  { thumbnail: V2, videoUrl: "https://www.youtube.com/embed/llYfX0Rf_Yk" },
  { thumbnail: V3, videoUrl: "https://www.youtube.com/embed/llYfX0Rf_Yk" },
  { thumbnail: V4, videoUrl: "https://www.youtube.com/embed/llYfX0Rf_Yk" },
];

const Videos = () => {
  const [show, setShow] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  const handleShow = (url) => {
    setSelectedVideo(url);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedVideo("");
  };
  return (
    <>
      {/* Video */}
      <div className="sec-pad">
        <div className="container">
          <div className="row">
            <h2 className="p-head w-md-50 mb-5">
              Watch the incredible journey & transformation.
            </h2>
          </div>
          <div className="row">
            {videoData.map((video, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <img
                  src={video.thumbnail}
                  alt=""
                  className="m-md-3 my-2 my-md-0 w-100"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleShow(video.videoUrl)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bootstrap Modal */}
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
    </>
  );
};

export default Videos;
