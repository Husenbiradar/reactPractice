import React, { useRef } from 'react';

function Required() {
  const formRef = useRef(null);
  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const setError = (element, message) => {
    const inputControl = element.closest('.input-control');
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
  };

  const setSuccess = (element) => {
    const inputControl = element.closest('.input-control');
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
  };

  const isValidEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validation = () => {
    const userNameValue = userNameRef.current.value.trim();
    const emailValue = emailRef.current.value.trim();
    const passwordValue = passwordRef.current.value.trim();
    const confirmPasswordValue = confirmPasswordRef.current.value.trim();

    //...
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validation();
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit} className="space-x-3">
        <div className="flex">
          <label htmlFor="">User Name</label>
          <input
            type="text"
            placeholder="User Name"
            className="ou"
            ref={userNameRef}
          />
        </div>
        <div className="flex">
          <label htmlFor="">Email</label>
          <input
            type="text"
            name=""
            id="Email"
            placeholder="G-Mail"
            className="ou"
            ref={emailRef}
          />
        </div>
        <div className="flex">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name=""
            id="password"
            placeholder="Password"
            className="ou"
            ref={passwordRef}
          />
        </div>
        <div className="flex">
          <label htmlFor="Password">Confirm password</label>
          <input
            type="password"
            name=""
            id="password2"
            placeholder="Confirm Password"
            className="ou"
            ref={confirmPasswordRef}
          />
        </div>
      </form>
    </>
  );
}

export default Requird;