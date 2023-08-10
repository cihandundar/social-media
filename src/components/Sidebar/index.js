import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import User1 from "../../assets/images/user1.jpg";
import User2 from "../../assets/images/user2.jpg";
import User3 from "../../assets/images/user3.jpg";
import User4 from "../../assets/images/user4.jpg";

const Sidebar = () => {
  const initialFriendRequests = [
    { id: 1, name: "Anthony Daugloi", image: User1 },
    { id: 2, name: "John Doe", image: User2 },
    { id: 3, name: "Jessica Biel", image: User3 },
    { id: 4, name: "Arden Cho", image: User4 },
  ];

  const [friendRequests, setFriendRequests] = useState(initialFriendRequests);

  const handleConfirm = (id) => {
    const confirmedRequest = friendRequests.find(
      (request) => request.id === id
    );
    setFriendRequests((prevRequests) =>
      prevRequests.filter((request) => request.id !== id)
    );
    toast.success(
      `You have accepted the friend request from ${confirmedRequest.name}`
    );
  };

  const handleDelete = (id) => {
    setFriendRequests((prevRequests) =>
      prevRequests.filter((request) => request.id !== id)
    );
    toast.error("Friend request deleted.");
  };

  const handleSeeAll = () => {
    setFriendRequests(initialFriendRequests);
  };

  const friendRequestCount = friendRequests.length;

  return (
    <aside className="aside">
      <div className="aside__container">
        <div className="aside__container__title">
          <h3>Friend Request</h3>
          <span style={{ cursor: "pointer" }} onClick={handleSeeAll}>
            See all
          </span>
        </div>
        {friendRequestCount > 0 && (
          <p>{`You have ${friendRequestCount} friend requests.`}</p>
        )}
        <div className="aside__container__user">
          {friendRequests.map((request) => (
            <div className="aside__container__user__card" key={request.id}>
              <div className="aside__container__user__card__title">
                <img src={request.image} alt="" />
                <h4>{request.name}</h4>
              </div>
              <div className="aside__container__user__card__btn">
                <button
                  className="confirm"
                  onClick={() => handleConfirm(request.id)}
                >
                  Confirm
                </button>
                <button
                  className="delete"
                  onClick={() => handleDelete(request.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
