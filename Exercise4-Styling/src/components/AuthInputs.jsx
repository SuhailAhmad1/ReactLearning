import { useState } from "react";
import Button from "./Button";
export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className="w-full max-w-md mx-auto p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800">
      <div className="flex flex-col gap-2 mb-6">
        <p>
          <label className="block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow bg-stone-300"
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <label className="block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow bg-stone-300"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </div>
      <div className="flex justify-end text-white">
        <Button>
          Create a new account
        </Button>
        <Button onClick={handleLogin}>
          Sign In
        </Button>
      </div>
    </div>
  );
}
