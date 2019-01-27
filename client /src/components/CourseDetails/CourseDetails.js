import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function CourseDetails() {
  return (
    <div className={classes.app}>
      <p>Course Details!</p>
    </div>
  );
}

export default withStyles(styles)(CourseDetails);
