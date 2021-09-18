import React from "react";
import { Skeleton } from "antd";

interface IProps {
  size?: number;
}

const Skeletons = ({ size = 1 }: IProps): JSX.Element => {
  return (
    <>
      {[...Array(size)].map((_i, index) => {
        return <Skeleton key={index} />;
      })}
    </>
  );
};

export default Skeletons;
