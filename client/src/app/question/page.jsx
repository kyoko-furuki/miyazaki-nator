"use client";

import { zemi_members } from "@/constant/data";
import { useEffect, useState } from "react";
import { Question1 } from "./_components/Question1";
import { useRouter } from "next/navigation";
import { Question2 } from "./_components/Question2";
import { Question3 } from "./_components/Question3";

function page() {
  const [page, setPage] = useState(1);
  console.log(page);
  const [state, setState] = useState({
    q1: 0,
    q2: 0,
    q3: 0,
  });
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  function random1to7() {
    return Math.floor(Math.random() * 7) + 1;
}

  const changeState = (key, value) => {
    setState({
      ...state,
      [key]: value,
    });
    console.log('a', key, value);
  };

  const searchData = () => {
    console.log(state);
    const arr = Object.values(state);
    console.log(arr);
    const answerData = zemi_members.find(
      (item) => JSON.stringify(item.answer) === JSON.stringify(arr)
    );
    console.log(answerData);
    const aId = answerData ? answerData.id : random1to7();
    router.push(`/answer/${aId}`);
  };

  return (
    <div>
      {page === 1 && (
        <>
          <Question1 changeState={changeState} setPage={setPage} />
        </>
      )}
      {page === 2 && (
        <>
          <Question2 changeState={changeState} setPage={setPage} />
        </>
      )}
      {page !== 1 && page !== 2 && (
        <>
          <Question3
            changeState={changeState}
            setPage={setPage}
            open={open}
          />
          {isOpen && (
            <button onClick={searchData} className='bg-blue-500 fixed bottom-10 right-5 rounded-md text-white font-bold text-2xl p-10'>だれだろ</button>
          )}
        </>
      )}
    </div>
  );
}

export default page;
