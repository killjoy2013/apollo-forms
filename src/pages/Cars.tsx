import {
  Button,
  Checkbox,
  createStyles,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Theme
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Formik, useFormikContext } from "formik";
import * as React from "react";
import {
  Car,
  useCarFormQuery,
  usePersistCarFormMutation
} from "../graphql/types";
import DisplayFormikState from "./DisplayFormikState";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
      width: 250
    },
    input: {
      width: 250
    },
    formControl: {
      width: 250
    }
  })
);

interface CarFormProps {}

const CarForm = (props: CarFormProps) => {
  const classes = useStyles(props);
  const formik = useFormikContext<Car>();

  return (
    <form>
      <Grid container direction="column" justify="center" alignItems="center">
        <TextField
          className={classes.input}
          name="brand"
          label="Brand"
          value={formik.values.brand}
          onChange={formik.handleChange}
          variant="outlined"
          margin="normal"
        />

        <TextField
          className={classes.input}
          name="model"
          label="Model"
          value={formik.values.model}
          onChange={formik.handleChange}
          variant="outlined"
          margin="normal"
        />

        <FormControl
          margin="normal"
          variant="outlined"
          className={classes.formControl}
        >
          <InputLabel id="demo-simple-select-outlined-label">Year</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={formik.values.year}
            onChange={e => {
              formik.setFieldValue("year", e.target.value);
            }}
            labelWidth={30}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={2017}>2017</MenuItem>
            <MenuItem value={2018}>2018</MenuItem>
            <MenuItem value={2019}>2019</MenuItem>
          </Select>
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              name="fastEnough"
              checked={formik.values.fastEnough}
              value="fastEnough"
              onChange={e => {
                formik.setFieldValue("fastEnough", e.target.checked);
              }}
            />
          }
          label="Fast Enough"
        ></FormControlLabel>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => formik.submitForm()}
        >
          Persist Cars
        </Button>
      </Grid>
      <DisplayFormikState {...formik.values} />
    </form>
  );
};

interface ICars {}

const Cars: React.FunctionComponent<ICars> = (props: ICars) => {
  const {
    data: {
      carForm: { __typename, ...noTypename }
    }
  } = useCarFormQuery();

  const [persistCarForm] = usePersistCarFormMutation();

  return (
    <Formik
      initialValues={noTypename}
      onSubmit={values => {
        persistCarForm({
          variables: {
            args: values
          }
        });
      }}
    >
      <CarForm />
    </Formik>
  );
};

export default Cars;
