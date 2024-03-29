import { Avatar } from "@mui/material";
import "./Card.css";

export default function Cards({ name, dni, age, gender, email }) {
  return (
    <div className="container-card">
      <>
        <Avatar alt="avatar" src={gender} sx={{ height: 140, width: 140 }} />
        <h3 className="card-name">{name}</h3>
        <div className="card-text">
          Age: {age} <br />
          email:
          <br />
          {email}
        </div>
      </>
    </div>
  );
}
