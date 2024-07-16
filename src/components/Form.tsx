const Form = () => {
  return (
    <form className="row g-3">
      <div className="col-md-12">
        <label htmlFor="inputEmail4" className="form-label">
          Email:
        </label>
        <input type="email" className="form-control" id="inputEmail4" />
      </div>

      <div className="col-12">
        <label htmlFor="inputname" className="form-label">
          Name:
        </label>
        <input type="text" className="form-control" id="inputname" />
      </div>
      <div className="col-12">
        <label htmlFor="phoneno" className="form-label">
          Phone no:
        </label>
        <input type="text" className="form-control" id="phoneno" />
      </div>

      <div className="col-12 d-flex justify-content-center pb-4">
        <button type="submit" className="btn btn-primary   ">
          Request Quotation
        </button>
      </div>
    </form>
  );
};

export default Form;
