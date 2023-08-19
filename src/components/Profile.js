import React, { useState } from "react";

const Profile = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div className="bg-light border rounded-3 p-4">
        <h4>Profile</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={imageUploader}
            style={{
              display: "none"
            }}
          />
          <div
            className="border rounded-circle bg-upload"
            style={{
              height: "150px",
              width: "150px",
            }}
            onClick={() => imageUploader.current.click()}
          >
            <img
              className="border rounded-circle"
              ref={uploadedImage}
              alt='..'
              style={{
                width: "150px",
                height: "150px",
                position: "absolute"
              }}
            />
          </div>
        </div>
        <div className="accordion-item p-2 border my-3">
          <div className="accordion-title d-flex justify-content-between" onClick={() => setIsActive(!isActive)}>
            <h6>Primary Details</h6>
            <div>{isActive ? '-' : '+'}</div>
          </div>
          {isActive && <div className="accordion-content pt-2">
            <div class="row">
              <div class="col">
                <label>First name</label>
                <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
              </div>
              <div class="col">
                <label>Last name</label>
                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
              </div>
            </div>
          </div>}
        </div>
        <div className="accordion-item p-2 border">
          <div className="accordion-title d-flex justify-content-between" onClick={() => setIsActive1(!isActive1)}>
            <h6>Address Details</h6>
            <div>{isActive1 ? '-' : '+'}</div>
          </div>
          {isActive1 && <div className="accordion-content">
            content
          </div>}
        </div>
        <div className="mt-3">
          <button to="layout" className='btn btn-primary'>Update</button>
          <button to="layout" className='btn btn-outline-secondary ms-3'>Cancel</button>
        </div>
      </div>
    </>
  );
};

export default Profile;
