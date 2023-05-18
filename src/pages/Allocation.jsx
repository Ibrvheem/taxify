import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  List,
  ListItem,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Card from "@material-ui/core/Card/Card";
import React from "react";
import Pie from "../components/Pie";
import Histogram from "../components/Line";
import { ArrowDownward, ArrowDropDown, TrendingUp } from "@material-ui/icons";
const useStyles = makeStyles((theme) => {
  return {
    allocation: {
      paddingTop: "8rem",
      width: "100%",
    },

    card: {
      width: "95%",
      height: "300px",
      marginBottom: "2rem",
      padding: "2rem",
      //   background: "red",
    },
    list: {
      fontFamily: "Poppins",
      fontSize: "1.1rem",
    },
  };
});

function Allocation() {
  const classes = useStyles();
  const pie = {
    labels: ["Blue", "Red", "Green", "Lavender", "Teal"],
    values: [20, 20, 30, 30],
  };
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    values: [10, 40, 10, 30, 25],
  };

  return (
    <div className={classes.allocation}>
      <Container>
        <Grid container className={classes.cardItemContainer}>
          <Grid item md={6}>
            <Card className={classes.card} elevation={8}>
              <Typography variant="h2" color="primary">
                Allocation Selection
              </Typography>
              <Typography variant="h5" color="primary">
                Select the sector of the economy you want your task to go to
              </Typography>
              <FormControl style={{ height: "200px" }}>
                <FormLabel id="demo-radio-buttons-group-label">
                  Allocation
                </FormLabel>
                <RadioGroup
                  style={{ height: "170px" }}
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Construction"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="construction"
                    control={<Radio />}
                    label="Construction"
                  />
                  <FormControlLabel
                    value="education"
                    control={<Radio />}
                    label="Education"
                  />
                  <FormControlLabel
                    value="agriculture"
                    control={<Radio />}
                    label="Agriculture"
                  />
                  <FormControlLabel
                    value="MiningExtraction"
                    control={<Radio />}
                    label="Mining & Extraction "
                  />
                  <FormControlLabel
                    value="manufacturing"
                    control={<Radio />}
                    label="Manufacturing"
                  />
                  <FormControlLabel
                    value="services"
                    control={<Radio />}
                    label="Banking and Health"
                  />
                  <FormControlLabel
                    value="energyUtilities"
                    control={<Radio />}
                    label="Energy & Utilities "
                  />
                  <FormControlLabel
                    value="financies"
                    control={<Radio />}
                    label="Financial Services"
                  />
                  <FormControlLabel
                    value="infoTech"
                    control={<Radio />}
                    label="Information Technology and Communication"
                  />
                </RadioGroup>
              </FormControl>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card className={classes.card} elevation={8}>
              <Typography variant="h2" color="primary">
                Fund Allocation
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
          </Grid>{" "}
          <Grid item md={6}>
            <Card className={classes.card} elevation={8}>
              <Typography variant="h2" color="primary">
                Construction
              </Typography>
              <Grid container>
                <Grid item md={6}>
                  <Card
                    style={{
                      width: "90%",
                      height: "10rem",
                      padding: ".5rem",
                      display: "flex",
                      //   alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                    elevation={10}
                  >
                    <Typography variant="h4" color="primary">
                      Current Allocation
                    </Typography>
                    <Typography
                      variant="h6"
                      color="primary"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <TrendingUp />
                      10%{" "}
                      <ArrowDropDown
                        style={{ color: "red", fontSize: "2rem" }}
                      />
                    </Typography>
                    <Typography variant="h4" color="primary">
                      NGN 105,000,000
                    </Typography>
                  </Card>
                </Grid>
                <Grid item md={6}>
                  <Card
                    style={{
                      width: "90%",
                      height: "10rem",
                      padding: ".5rem",
                      display: "flex",
                      //   alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                    elevation={10}
                  >
                    <Typography variant="h4" color="primary">
                      Previous Allocation
                    </Typography>
                    <Typography
                      variant="h6"
                      color="primary"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      30 Days
                    </Typography>
                    <Typography variant="h4" color="primary">
                      NGN 400,000,000
                    </Typography>
                  </Card>{" "}
                </Grid>
                <Grid container>
                  <Grid item md={12}>
                    <Typography
                      variant="h5"
                      color="primary"
                      style={{ paddingTop: ".6rem", fontWeight: "bold" }}
                    >
                      Select Sector
                    </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <Typography variant="h5" color="primary">
                        {" "}
                        Residential Construction
                      </Typography>
                      <FormControl variant="outlined" l>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          //   value={age}
                          label="%"
                          //   onChange={handleChange}
                          InputProps={{
                            style: {
                              backgroundColor: "red",
                            },
                          }}
                        >
                          <MenuItem value={10}>10%</MenuItem>
                          <MenuItem value={20}>20%</MenuItem>
                          <MenuItem value={30}>30%</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </Grid>
                  <Grid item md={6}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <Typography variant="h5" color="primary">
                        {" "}
                        Residential Construction
                      </Typography>
                      <FormControl variant="outlined" l>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          //   value={age}
                          label="%"
                          //   onChange={handleChange}
                          InputProps={{
                            style: {
                              backgroundColor: "red",
                            },
                          }}
                        >
                          <MenuItem value={10}>10%</MenuItem>
                          <MenuItem value={20}>20%</MenuItem>
                          <MenuItem value={30}>30%</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </Grid>
                  <Grid item md={6}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <Typography variant="h5" color="primary">
                        {" "}
                        Residential Construction
                      </Typography>
                      <FormControl variant="outlined" l>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          //   value={age}
                          label="%"
                          //   onChange={handleChange}
                          InputProps={{
                            style: {
                              backgroundColor: "red",
                            },
                          }}
                        >
                          <MenuItem value={10}>10%</MenuItem>
                          <MenuItem value={20}>20%</MenuItem>
                          <MenuItem value={30}>30%</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </Grid>
                  <Grid item md={6}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <Typography variant="h5" color="primary">
                        {" "}
                        Residential Construction
                      </Typography>
                      <FormControl variant="outlined" l>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          //   value={age}
                          label="%"
                          //   onChange={handleChange}
                          InputProps={{
                            style: {
                              backgroundColor: "red",
                            },
                          }}
                        >
                          <MenuItem value={10}>10%</MenuItem>
                          <MenuItem value={20}>20%</MenuItem>
                          <MenuItem value={30}>30%</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card className={classes.card} elevation={8}>
              <Typography variant="h2" color="primary">
                Allocation Summary
              </Typography>
              <Grid item md={12}>
                <Histogram data={lineData} />
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Allocation;
