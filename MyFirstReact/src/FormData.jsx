import { useEffect, useState } from "react";

export default function () {
  const [status, setStatus] = useState(null);
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log(status);
  }, [status]);
  const handleChanger = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formData, [name]: value });
  };
  const formHandler = (e) => {
    e.preventDefault();
    if (formData.email === "s@gmail.com" && formData.password === "123") {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };
  return (
    <>
      <form onSubmit={formHandler} action="">
        <label htmlFor="email">
          Email : <input onChange={handleChanger} type="email" name="email" />
        </label>{" "}
        <br />
        <label htmlFor="password">
          Password :{" "}
          <input onChange={handleChanger} type="password" name="password" />
        </label>{" "}
        <br />
        <input type="submit" value="Submit" />
      </form>
      {status === null ? null : status ? (
        <h1>Login Sucessfully</h1>
      ) : (
        <p>Login Failed</p>
      )}
    </>
  );
}
