import { Button, Form, Modal } from "react-bootstrap";
import { updateProduct } from "../utils/productsSlice";
import { useDispatch } from "react-redux";

const ProductAddForm = ({ show, handleClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      id: new Date().getTime(),
      title: e.target["title"].value,
      color: e.target["color"].value,
      mrp: e.target["mrp"].value,
      sp: e.target["sp"].value,
      rating: e.target["rating"].value,
      num_reviews: e.target["num_reviews"].value,
      img: e.target["img"].files[0],
    };

    dispatch(updateProduct(formData));
    handleClose();
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Form onSubmit={handleSubmit}>
          <Modal.Header className="justify-content-center border-0">
            <Modal.Title className="heading-1">Add New Product</Modal.Title>
          </Modal.Header>
          <Modal.Body className="row p-5">
            <Form.Group className="mb-4 col-lg-6" controlId="title">
              <Form.Label>Product Title*</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter product title here"
                required
              />
            </Form.Group>
            <Form.Group className="mb-4 col-lg-6" controlId="color">
              <Form.Label>Color*</Form.Label>
              <Form.Select name="color" required defaultValue="">
                <option value="" disabled>
                  Select Color
                </option>
                <option value="Black">Black</option>
                <option value="Brown">Brown</option>
                <option value="Red">Red</option>
                <option value="Tan">Tan</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-4 col-lg-6" controlId="mrp">
              <Form.Label>MRP*</Form.Label>
              <Form.Control
                type="number"
                name="mrp"
                placeholder="Enter product MRP"
                min={1}
                required
              />
            </Form.Group>
            <Form.Group className="mb-4 col-lg-6" controlId="sp">
              <Form.Label>SP*</Form.Label>
              <Form.Control
                type="number"
                name="sp"
                placeholder="Enter product selling price"
                min={1}
                required
              />
            </Form.Group>
            <Form.Group className="mb-4 col-lg-6" controlId="rating">
              <Form.Label>Rating*</Form.Label>
              <Form.Control
                type="number"
                name="rating"
                placeholder="Enter product rating"
                min={1}
                max={5}
                required
              />
            </Form.Group>
            <Form.Group className="mb-4 col-lg-6" controlId="num_reviews">
              <Form.Label>Reviews No.*</Form.Label>
              <Form.Control
                type="number"
                name="num_reviews"
                placeholder="Enter product number of reviews"
                min={1}
                required
              />
            </Form.Group>
            <Form.Group controlId="img" className="mb-4 col-12">
              <Form.Label>Product Image*</Form.Label>
              <Form.Control
                type="file"
                name="img"
                placeholder="Select Product Image"
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="justify-content-between p-5 pt-0 border-0">
            <Button className="btn secondary-btn" onClick={handleClose}>
              Cancel
            </Button>
            <Button className="btn primary-btn" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default ProductAddForm;
