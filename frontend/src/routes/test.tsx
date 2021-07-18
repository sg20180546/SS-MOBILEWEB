import React, { useState, useRef, useEffect } from "react";

// 코드 테스트용. 필요없는 코드입니다
export default function Test(onClick: any) {

  const element = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    console.log(element.current);
    if (element.current) {
      element.current.addEventListener('click', () => {
        console.log('clicked!');
      });
    }


  }, []);
  return element;
};