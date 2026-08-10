"use client";
import { useFormState, useFormStatus } from "react-dom";
import { sendEmail } from "@/pages/api/action";
import React from "react";
import Form from "next/dist/client/app-dir/form";

const initialState = {
  success: "",
  name: "",
  email: "",
  message: "",
};
function ContactForm() {
  const [state, formAction] = useFormState(sendEmail, initialState);

  return (
    <div className="flex items-center justify-between">
      <form action={formAction} className="">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>

          <div className="">
            <label className="label">Name</label>
          <input type="text" id="name" name="name" className="input" placeholder="Name" />
          {state.errors?.name && (
            <p className="text-error">{state.errors.name}</p>
          )}
          </div>

          <div className="">
            <label className="label">Email</label>
          <input type="email" id="email" name="email" className="input" placeholder="Email" />
          {state.errors?.email && (
            <p className="text-error">{state.errors.email}</p>
          )}
          </div>
          <div className="">
                  <label className="label">Message</label>
          <textarea
            id="message"
            name="message"
            className="textarea"
            placeholder="Type in your message"
          ></textarea>
          {state.errors?.message && (
            <p className="text-error">{state.errors.message}</p>
          )}
          </div>

          
        </fieldset>
        <button className="btn btn-neutral mt-4"><FormStatus /></button>
      </form>
    </div>
  );
}
export default ContactForm;

function FormStatus() {
  const { pending } = useFormStatus();
  return(
    <button className="btn btn-neutral mt-4" disabled={pending}>
      {pending ? "Sending..." : "Send"}
    </button>
  )
}