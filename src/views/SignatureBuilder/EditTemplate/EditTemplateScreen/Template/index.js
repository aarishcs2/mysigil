import React from "react";
import "./index.css";

export default function Template() {
  const arr = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
    },
    {
      id: 12,
    },
    {
      id: 13,
    },
    {
      id: 14,
    },
  ];
  return (
    <div className="d-flex">
      <div className="TempplateMain">
        <div className="flexMethod">
          {arr.map((e, i) => {
            return (
              <>
                <div className="box"></div>
              </>
            );
          })}
        </div>
      </div>
      <div className="mainscreen"></div>
    </div>
  );
}
