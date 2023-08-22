import React, { useState, useEffect } from "react";
import Recep from "../../assets/images/recep.jpg";
import Background from "../../assets/images/background.jpg";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const isLoading = useSelector((state) => state?.post?.isLoading);

  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editedTodo, setEditedTodo] = useState({ index: -1, text: "" });

  useEffect(() => {
    const storedTodos = localStorage.getItem("todoList");
    if (storedTodos) {
      setTodoList(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodoList([...todoList, { text: newTodo, isCompleted: false }]);
      setNewTodo("");
    }
  };

  const handleEditTodo = (index) => {
    const todoToEdit = todoList[index];
    setEditedTodo({ index, text: todoToEdit.text });
  };

  const handleSaveEdit = () => {
    if (editedTodo.text.trim() !== "") {
      const updatedTodos = [...todoList];
      updatedTodos[editedTodo.index].text = editedTodo.text;
      setTodoList(updatedTodos);
      setEditedTodo({ index: -1, text: "" });
    }
  };

  const handleRemoveTodo = (index) => {
    const updatedTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedTodoList);
  };

  return (
    <section className="profile">
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="profile__container">
          <div className="profile__background">
            <img src={Background} alt="" />
          </div>
          <div className="profile__background__info">
            <div className="profile__background__info__wrapper">
              <img src={Recep} alt="" />
              <div>
                <div className="profile__background__info__title">
                  <span style={{ color: "white" }}>{user.displayName}</span>
                </div>
                <div className="profile__background__info__title">
                  <p>Güngören, İstanbul</p>
                </div>
              </div>
            </div>
            <div className="profile__background__info__right">
              <button>Update Profile</button>
              <button>Activity Log</button>
            </div>
          </div>
          <div className="profile__content">
            <div className="profile__content__wrapper">
              <div className="profile__content__left">
                <div className="profile__content__left__title">
                  <h3>Contact</h3>
                </div>
                <div className="profile__content__left__info">
                  <p>recep_*!?-ivedik95"@hotmail.com</p>
                </div>
                <div className="profile__content__left__info">
                  <h3>About Us</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta delectus ratione natus maiores sunt ipsam iure, quasi
                    assumenda harum omnis.
                  </p>
                </div>
              </div>
              <div className="profile__content__right">
                <div className="profile__content__right__todo">
                  <div className="profile__content__right__todo__input">
                    <input
                      type="text"
                      placeholder="What's on your mind?"
                      value={newTodo}
                      onChange={handleTodoChange}
                    />
                    <button onClick={handleAddTodo}>Created Post</button>
                  </div>
                  <ul className="profile__content__right__todo__list">
                    {todoList.map((todo, index) => (
                      <li key={index}>
                        <div className="profile__content__right__todo__list__profile">
                          <img
                            style={{ width: "50px", borderRadius: "50%" }}
                            src={Recep}
                            alt=""
                          />
                          <span style={{ color: "white" }}>
                            {user.displayName}
                          </span>
                        </div>
                        {editedTodo.index === index ? (
                          <input
                            type="text"
                            value={editedTodo.text}
                            onChange={(event) =>
                              setEditedTodo({
                                ...editedTodo,
                                text: event.target.value,
                              })
                            }
                          />
                        ) : (
                          <>
                            <span
                              style={{
                                background: "white",
                                width: "100%",
                                height: "37px",
                                border: "none",
                                color: "black",
                                paddingLeft: "10px",
                                paddingTop: "10px",
                                overflow: "scroll",
                                overflowY: "hidden",
                                overflowX: "hidden",
                              }}
                              className={
                                todo.isCompleted ? "completed" : undefined
                              }
                            >
                              <p> {todo.text}</p>
                            </span>
                            <button
                              className="btn edit"
                              style={{ color: "green" }}
                              onClick={() => handleEditTodo(index)}
                            >
                              Edit
                            </button>
                          </>
                        )}
                        {editedTodo.index === index && (
                          <button
                            style={{ color: "green" }}
                            className="btn edit"
                            onClick={handleSaveEdit}
                          >
                            Save
                          </button>
                        )}
                        <button
                          className="btn edit"
                          style={{ color: "red" }}
                          onClick={() => handleRemoveTodo(index)}
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;
