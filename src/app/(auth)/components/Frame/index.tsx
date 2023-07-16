import { useStyles } from "./styles";
export const Frame = ({ children }: { children: React.ReactNode }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.frame1}>
      {children}
      <div className={classes.frame2}></div>
    </div>
  );
};
