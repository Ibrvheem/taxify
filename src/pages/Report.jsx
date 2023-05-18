import {
  Container,
  Grid,
  List,
  ListItem,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import Doughnut from "../components/Doughnut";
import Card from "@material-ui/core/Card/Card";
import Pie from "../components/Pie";
import Histogram from "../components/Histogram";
import Line from "../components/Line";

const useStyles = makeStyles((theme) => {
  return {
    report: {
      paddingTop: "8rem",
      width: "100%",
    },
    list: {
      fontFamily: "Poppins",
      fontSize: "1.4rem",
    },
  };
});
function Report() {
  const classes = useStyles();
  const pie = {
    labels: ["Blue", "Red", "Green", "Lavender", "Teal"],
    values: [20, 20, 30, 30],
  };
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    values: [10, 40, 10, 30, 25],
  };
  const doughnutData = {
    labels: ["Blue", "Red", "Green", "Lavender", "Teal"],
    values: [20, 20, 30, 30],
  };
  return (
    <div className={classes.report}>
      <Container>
        <Grid container>
          <Grid item md={6}>
            <Grid container>
              <Grid item md={6}>
                <Card
                  style={{ width: "90%", height: "5rem", marginBottom: "2rem" }}
                ></Card>
                <Card style={{ width: "90%", height: "20rem" }}></Card>
              </Grid>
              <Grid item md={6}>
                <Card
                  style={{ width: "90%", height: "5rem", marginBottom: "2rem" }}
                ></Card>
                <Card style={{ width: "90%", height: "20rem" }}></Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6}>
            <Typography variant="h3" color="primary">
              Previous Allocation
            </Typography>
            <Grid container>
              <Grid item md={4}>
                <Card
                  style={{
                    height: "10rem",
                    width: "95%",
                    marginBottom: "2rem",
                    padding: "1rem",
                  }}
                >
                  <Typography variant="h4" color="primary">
                    January
                  </Typography>

                  <Typography variant="h4" color="primary">
                    NGN300,000,000
                  </Typography>
                </Card>
              </Grid>
              <Grid item md={4}>
                <Card
                  style={{
                    height: "10rem",
                    width: "95%",
                    marginBottom: "2rem",
                    padding: "1rem",
                  }}
                >
                  <Typography variant="h4" color="primary">
                    February
                  </Typography>

                  <Typography variant="h4" color="primary">
                    NGN250,000,000
                  </Typography>
                </Card>
              </Grid>
              <Grid item md={4}>
                <Card
                  style={{
                    height: "10rem",
                    width: "95%",
                    marginBottom: "2rem",
                    padding: "1rem",
                  }}
                >
                  <Typography variant="h4" color="primary">
                    March
                  </Typography>

                  <Typography variant="h4" color="primary">
                    NGN190,673,000
                  </Typography>
                </Card>
              </Grid>
              <Grid item md={4}>
                <Card
                  style={{
                    height: "10rem",
                    width: "95%",
                    marginBottom: "2rem",
                    padding: "1rem",
                  }}
                >
                  <Typography variant="h4" color="primary">
                    April
                  </Typography>

                  <Typography variant="h4" color="primary">
                    NGN300,000,000
                  </Typography>
                </Card>
              </Grid>
              <Grid item md={4}>
                <Card
                  style={{
                    height: "10rem",
                    width: "95%",
                    marginBottom: "2rem",
                    padding: "1rem",
                  }}
                >
                  <Typography variant="h4" color="primary">
                    May
                  </Typography>

                  <Typography variant="h4" color="primary">
                    NGN124,625,000
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6}>
            <Card
              style={{
                height: "30rem",
                width: "95%",
                marginTop: "2rem",
                padding: "2rem",
              }}
            >
              <Typography variant="h5" color="primary">
                Overall allocation summary (masses)
              </Typography>
              <Grid container>
                <Grid item md={6} style={{ height: "20rem" }}>
                  <Pie data={pie} />
                </Grid>
                <Grid item md={6}>
                  <div>
                    <List className={classes.list}>
                      <ListItem>
                        <span style={{ fontWeight: "bold" }}>20%-</span>{" "}
                        Agriculture
                      </ListItem>
                      <ListItem>
                        <span style={{ fontWeight: "bold" }}>20%-</span> Energy
                      </ListItem>
                      <ListItem>
                        <span style={{ fontWeight: "bold" }}>30%-</span>{" "}
                        Manufacturing
                      </ListItem>
                      <ListItem>
                        <span style={{ fontWeight: "bold" }}>30%-</span>{" "}
                        Construction
                      </ListItem>
                      <ListItem>
                        <span style={{ fontWeight: "bold" }}>30%-</span> Health
                      </ListItem>
                      <ListItem>
                        <span style={{ fontWeight: "bold" }}>30%-</span> Health
                      </ListItem>
                      <ListItem>
                        <span style={{ fontWeight: "bold" }}>30%-</span> Finance
                      </ListItem>
                      <ListItem>
                        <span style={{ fontWeight: "bold" }}>30%-</span>{" "}
                        Information and Tech
                      </ListItem>
                    </List>
                  </div>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card
              style={{
                height: "30rem",
                width: "95%",
                marginTop: "2rem",
                padding: "2rem",
              }}
            >
              <Typography variant="h5" color="primary">
                Government Allocation
              </Typography>
              <Grid container>
                <Grid item md={6} style={{ height: "20rem" }}>
                  <Pie data={pie} />
                </Grid>
                <Grid item md={6}>
                  <div>
                    <List className={classes.list}>
                      <ListItem>
                        <span style={{ fontWeight: "bold" }}>20%-</span>{" "}
                        Agriculture
                      </ListItem>
                      <ListItem>
                        <span style={{ fontWeight: "bold" }}>20%-</span> Energy
                      </ListItem>
                      <ListItem>
                        <span style={{ fontWeight: "bold" }}>30%-</span>{" "}
                        Manufacturing
                      </ListItem>
                      <ListItem>
                        <span style={{ fontWeight: "bold" }}>30%-</span>{" "}
                        Construction
                      </ListItem>
                      <ListItem>
                        <span style={{ fontWeight: "bold" }}>30%-</span> Health
                      </ListItem>
                      <ListItem>
                        <span style={{ fontWeight: "bold" }}>30%-</span> Health
                      </ListItem>
                      <ListItem>
                        <span style={{ fontWeight: "bold" }}>30%-</span> Finance
                      </ListItem>
                      <ListItem>
                        <span style={{ fontWeight: "bold" }}>30%-</span>{" "}
                        Information and Tech
                      </ListItem>
                    </List>
                  </div>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item md={6} style={{ marginTop: "2rem" }}>
            <Card
              className={classes.card}
              elevation={8}
              style={{ width: "95%", padding: "2rem" }}
            >
              <Typography variant="h2" color="primary">
                Allocation Summary
              </Typography>
              <Grid item md={12}>
                <Line data={lineData} />
              </Grid>
            </Card>
          </Grid>
          <Grid item md={6} style={{ marginTop: "2rem" }}>
            <Card
              className={classes.card}
              elevation={8}
              style={{ width: "95%", padding: "2rem" }}
            >
              <Typography variant="h2" color="primary">
                Budget utilization tracker
              </Typography>
              <TextField variant="outlined" fullWidth label="Search Projects" />
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div className={classes.projectTitle}>
                    <Typography variant="h5" color="primary">
                      Center for disease control
                    </Typography>{" "}
                  </div>
                  <div className={classes.projectProcess}>
                    <Typography variant="h5" color="primary">
                      Progress Bar here
                    </Typography>{" "}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div className={classes.projectTitle}>
                    <Typography variant="h5" color="primary">
                      Center for disease control
                    </Typography>{" "}
                  </div>
                  <div className={classes.projectProcess}>
                    <Typography variant="h5" color="primary">
                      Progress Bar here
                    </Typography>{" "}
                  </div>
                </div>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Report;
