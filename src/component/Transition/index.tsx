import React from "react";
import { Slide, Grow } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

export const TransitionSlideDown = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export const notiTransition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return (
    <Grow style={{ transformOrigin: "1800px 30px" }} ref={ref} {...props} />
  );
});

export const messTransition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return (
    <Grow style={{ transformOrigin: "1850px 30px" }} ref={ref} {...props} />
  );
});

export const langTransition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return (
    <Grow style={{ transformOrigin: "1820px 30px" }} ref={ref} {...props} />
  );
});

export const megaTransition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return (
    <Grow style={{ transformOrigin: "420px 30px" }} ref={ref} {...props} />
  );
});
export const dashboardTransition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return (
    <Grow style={{ transformOrigin: "550px 30px" }} ref={ref} {...props} />
  );
});

export const profileTransition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return (
    <Grow style={{ transformOrigin: "2000px 30px" }} ref={ref} {...props} />
  );
});
