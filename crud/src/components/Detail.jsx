import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";

const Detail = () => {
  const { userId } = useParams();
  const isExistUser = useSelector((state) =>
    state.users.users.find((user) => user.id === userId)
  );

  if (!isExistUser) {
    return <div>User not found</div>;
  }

  return (
    <>
      <div className="d-flex align-items-center justfy-content-center flex-column mt-5">
        <h2>User Detail</h2>
        <Card className="w-25 fs-2">
          <Card.Body>
            <Card.Title className="fs-2">
              Datas of
              <span className="text-danger fs-1 ms-3">
                {isExistUser.firstName}
              </span>
            </Card.Title>
            <Card.Text>
              <div>
                <strong>First Name:</strong> {isExistUser.firstName}
              </div>
              <div>
                <strong>Last Name:</strong> {isExistUser.lastName}
              </div>
              <div>
                <strong>Email:</strong> {isExistUser.email}
              </div>
              <div>
                <strong>Age:</strong> {isExistUser.age}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Detail;
