import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,webUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br></br>
          <a href={webUrl} target="_blank">Go to Project</a>
        </div>
      </div>
    </Col>
  )
}
