import React, { useState } from "react";

import "./RsvpForm.css";
const RsvpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [attendance, setAttendance] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ավելացնել տվյալների մշակման լոգիկա
    console.log({ name, email, phone, attendance });
  };

  return (
    <section className="rsvp">
      <h2>Խնդրում ենք հաստատել ձեր ներկայությունը միջոցառմանը </h2>
      <form onSubmit={handleSubmit} className="rsvp-form">
        <input
          type="text"
          value={name}
          placeholder="Անուն Ազգանուն"
          onChange={(e) => setName(e.target.value)}
          required
        />
        Հեռախոսահամար
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <label>
          Մասնակցություն
          <select
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
            required
          >
            <option value="">Ընտրեք</option>
            <option value="yes">Այո</option>
            <option value="no">Ոչ</option>
          </select>
        </label>
        <button type="submit">Ուղարկել</button>
      </form>
    </section>
  );
};

export default RsvpForm;
