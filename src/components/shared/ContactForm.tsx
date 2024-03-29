import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  FormGroup,
  TextField,
} from "@mui/material";
import React from "react";

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export const ContactForm = ({ type, setOpen }: { type: "modal" | "block", setOpen?: React.Dispatch<React.SetStateAction<boolean>> }) => {

  const handleSubmit = (event: { target: any; preventDefault: () => void }) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "contact_formxcvewr23e4",
        "template_cgw89od",
        event.target,
        "wNuFFCZm6_kMdUYKP"
      )
      .then(() => { alert("Thank you! I will be in touch with you soon.") })
      .then(() => { if (setOpen !== undefined) { setOpen(false) } })
      .catch((error) => { alert(JSON.stringify(error)); });
  };
  return (<Box id="contact" sx={type === "modal" ? modalStyle : undefined} component="form" onSubmit={handleSubmit}>
    <FormGroup>
      <TextField
        id="filled-textarea"
        label="Name:"
        name="name"
        placeholder="John Doe"
        multiline
        variant="filled"
        required
      />
      <TextField
        id="filled-textarea"
        label="Email:"
        name="email"
        placeholder="john.doe@test.com"
        multiline
        variant="filled"
        required
      />
      <TextField
        id="filled-textarea"
        label="Company name:"
        name="company_name"
        multiline
        variant="filled"
      />
      <TextField
        id="filled-textarea"
        label="Phone number:"
        name="phone"
        multiline
        variant="filled"
      />
      <TextField
        id="filled-textarea"
        label="Message:"
        name="message"
        rows={4}
        multiline
        variant="filled"
      />
      <Button type="submit">Submit</Button>
    </FormGroup>
  </Box>
  );
}