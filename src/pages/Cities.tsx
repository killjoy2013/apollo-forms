import * as React from "react";
import { Formik, useFormikContext } from "formik";
import TextField from "@material-ui/core/TextField";
import {
  Grid,
  Button,
  makeStyles,
  Theme,
  createStyles
} from "@material-ui/core";
import DisplayFormikState from "./DisplayFormikState";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
      width: 250
    },
    input: {
      width: 250
    }
  })
);

type City = {
  name: "";
  country: "";
  population: "";
};

const CityForm = () => {
  const classes = useStyles({});
  const formik = useFormikContext<City>();

  return (
    <form>
      <Grid container direction="column" justify="center" alignItems="center">
        <TextField
          className={classes.input}
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          variant="outlined"
          margin="normal"
        />

        <TextField
          className={classes.input}
          name="country"
          label="Country"
          value={formik.values.country}
          onChange={formik.handleChange}
          variant="outlined"
          margin="normal"
        />

        <TextField
          className={classes.input}
          name="population"
          label="Population"
          value={formik.values.population}
          onChange={formik.handleChange}
          variant="outlined"
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => formik.submitForm()}
        >
          Persist Cities
        </Button>
      </Grid>
      <DisplayFormikState {...formik.values} />
    </form>
  );
};

interface ICities {}

const Cities: React.FunctionComponent<ICities> = (props: ICities) => {
  return (
    <Formik
      initialValues={{
        brand: "",
        model: "",
        year: ""
      }}
      onSubmit={() => alert("Nowhere to persist :-(")}
    >
      <CityForm />
    </Formik>
  );
};

export default Cities;
