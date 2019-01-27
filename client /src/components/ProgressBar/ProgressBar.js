import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function ProgressBar() {
  return (
    <div className={classes.app}>
      <p>Progress Bar!</p>
    </div>
  );
}

export default withStyles(styles)(ProgressBar);
