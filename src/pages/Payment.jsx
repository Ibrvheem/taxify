import { Button, Container, TextField, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles(() => {
  return {
    payment: {
      paddingTop: "8rem",
      width: "100%",
    },
    btn: {
      padding: "1rem 2rem",
      color: "white",
      fontSize: "1.5rem",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
    },
  };
});
function Payment() {
  const [phoneno, setPhone] = useState("");
  const [tax_id, setTin] = useState("");
  const [name, setName] = useState("");
  function handlePayment() {
    // let random = letters;
    // let gamelink = `https://binumarcodes.github.io/emojiswap/Emoji%20Swap.html?gameid=${random}`;

    // localStorage.setItem("gameid", gamelink);
    fetch("https://emojiswap.itcentral.ng/sms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tax_id, name, phoneno }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully");
          //   window.location.href = `/Emoji Swap.html`;
          //   console.log("SMS sent successfully!");
          //   localStorage.setItem("Player1", sender);
          //   localStorage.setItem("Player2", person);
          //   localStorage.setItem("gameid", gamelink);
          //   localStorage.setItem("Player1", sender);
        } else {
          throw new Error("SMS send failed.");
        }
      })
      .catch((error) => {
        console.error(`Error sending SMS: ${error}`);
      });
  }
  const classes = useStyles();
  return (
    <div className={classes.payment}>
      <Container>
        <form action="" className={classes.form}>
          <TextField
            variant="outlined"
            type="number"
            label="Phone Number"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            type="number"
            label="Tax Identification Number"
            onChange={(e) => {
              setTin(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            label="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Button variant="contained" color="primary" className={classes.btn}>
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default Payment;
