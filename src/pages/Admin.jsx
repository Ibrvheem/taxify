import {
  Container,
  Grid,
  List,
  ListItem,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Card from "@material-ui/core/Card/Card";
import React from "react";
import Histogram from "../components/Histogram";
import Pie from "../components/Pie";

const useStyles = makeStyles((theme) => {
  return {
    admin: {
      paddingTop: "8rem",
      width: "100%",
    },
    list: {
      fontFamily: "Poppins",
      fontSize: "1.4rem",
    },

    card: {
      width: "95%",
      height: "300px",
      marginBottom: "2rem",
      padding: "2rem",
      //   background: "red",
    },
  };
});

function Admin() {
  const classes = useStyles();
  const pie = {
    labels: ["Blue", "Red", "Green", "Lavender", "Teal"],
    values: [20, 20, 30, 30],
  };
  const histogramData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    values: [10, 30, 10, 40, 25, 10, 5, 35],
  };
  return (
    <div className={classes.admin}>
      <Container>
        <Grid container>
          <Grid
            item
            md={6}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <Grid item md={5}>
              <Card elevation={8} style={{ padding: "1rem" }}>
                <Typography variant="h4" color="primary">
                  Funds Allocated
                </Typography>
                <Typography variant="h4" color="primary">
                  NGN 300,000,000
                </Typography>
              </Card>
            </Grid>
            <Grid item md={6}>
              <Card elevation={8} style={{ padding: "1rem" }}>
                <Typography variant="h4" color="primary">
                  Total Allocation Received
                </Typography>

                <Typography variant="h4" color="primary">
                  NGN 250,000,000
                </Typography>
              </Card>
            </Grid>
            <Grid item md={12}>
              <Histogram data={histogramData} />
            </Grid>
          </Grid>
          <Grid item md={6}>
            <Card className={classes.card} elevation={8}>
              <Typography variant="h2" color="primary">
                May
              </Typography>
              <Grid container>
                <Grid
                  item
                  md={6}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    // alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="h5" color="primary">
                    Tax Received
                  </Typography>

                  <List className={classes.list}>
                    <ListItem>
                      <span style={{ fontWeight: "bold" }}>20%-</span>{" "}
                      RESIDENTIAL CONSTRUCTIONS
                    </ListItem>
                    <ListItem>
                      <span style={{ fontWeight: "bold" }}>20%-</span>{" "}
                      RESIDENTIAL CONSTRUCTIONS
                    </ListItem>
                    <ListItem>
                      <span style={{ fontWeight: "bold" }}>30%-</span>{" "}
                      INFRASTRUCTURAL CONSTRUCTIONS
                    </ListItem>
                    <ListItem>
                      <span style={{ fontWeight: "bold" }}>30%-</span>{" "}
                      RESIDENTIAL CONSTRUCTIONS
                    </ListItem>
                  </List>
                </Grid>

                <Grid item md={6} style={{ height: "200px" }}>
                  <Pie data={pie} />
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card style={{ padding: "2rem" }} elevation={8}>
              <Typography variant="h4" color="primary">
                Top Sectors
              </Typography>
              <List className={classes.list}>
                <ListItem>
                  <span style={{ fontWeight: "bold" }}>NGN75,000,000 - </span>{" "}
                  Health Infrastructure Developement
                </ListItem>
                <ListItem>
                  <span style={{ fontWeight: "bold" }}>NGN75,000,000 - </span>{" "}
                  Medical Infrastructure Development
                </ListItem>
                <ListItem>
                  <span style={{ fontWeight: "bold" }}>NGN50,000,000 - </span>{" "}
                  Primary HealthCare Services
                </ListItem>
                <ListItem>
                  <span style={{ fontWeight: "bold" }}>NGN25,000,000 - </span>{" "}
                  Maternal and Child Health Program
                </ListItem>
                <ListItem>
                  <span style={{ fontWeight: "bold" }}>NGN25,000,000 - </span>{" "}
                  Disease and Prevention
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Admin;
