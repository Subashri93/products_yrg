import React from "react";

interface HeaderProps {
  title: string;
  imageSrc: string;
  count: number;
  increment: () => void;
  decrement: () => void;
  onInfoClick: () => void;
  infoContent: {
    title: string;
    description: string;
  }[];
}

const CardHeader: React.FC<HeaderProps> = ({
  title,
  imageSrc,
  count,
  increment,
  decrement,
  infoContent,
}) => (
  <div className="card border-info shadow mb-4">
    <div className="card-body">
      <div className="row align-items-center p-3">
        <div className="col-sm-3">
          <img
            src={imageSrc}
            className="card-img-top img-responsive"
            style={{ width: "100px", height: "100px" }}
            alt="Product Image"
          />
        </div>
        <div className="col-sm-6">
          <h3 className="card-title text-muted">{title}</h3>
        </div>
        <div className="col-sm-3 d-flex justify-content-end align-items-center">
          <div className="d-flex align-items-center">
            <button onClick={decrement} className="btn btn-outline-primary">
              -
            </button>
            <span className="mx-2">{count}</span>
            <button onClick={increment} className="btn btn-outline-primary">
              +
            </button>
            <button
              type="button"
              className="btn btn-outline-primary ms-2"
              data-bs-toggle="modal"
              data-bs-target={`#${title.replace(/\s+/g, "")}Modal`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-info-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Modal */}
    <div
      className="modal fade"
      id={`${title.replace(/\s+/g, "")}Modal`}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby={`${title.replace(/\s+/g, "")}ModalLabel`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1
              className="modal-title fs-5"
              id={`${title.replace(/\s+/g, "")}ModalLabel`}
            >
              {title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {infoContent.map((info, index) => (
              <div key={index}>
                <h6>{info.title}</h6>
                <p>{info.description}</p>
              </div>
            ))}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CardHeader;
