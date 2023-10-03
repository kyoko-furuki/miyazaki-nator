"use client";

import { zemi_members2 } from "@/constant/data2";
import { useEffect, useState } from "react";
import { Question4 } from "./_components2/Question4";
import { useRouter } from "next/navigation";
import { Question5 } from "./_components2/Question5";
import { Question6 } from "./_components2/Question6";

function page() {
  const [page, setPage] = useState(1);
  console.log(page);
  const [state, setState] = useState({
    q4: 0,
    q5: 0,
    q6: 0,
  });
  const router = useRouter();

  // isOpen を最初から true に設定
  const [isOpen, setIsOpen] = useState(true);

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
    console.log("a", key, value);
  };

  const searchData = () => {
    console.log(state);
    const arr = Object.values(state);
    console.log(arr);
    const answerData = zemi_members2.find(
      (item) => JSON.stringify(item.answer) === JSON.stringify(arr)
    );
    console.log(answerData);
    const aId = answerData ? answerData.id : random1to7();
    router.push(`/answer2/${aId}`);

    // ボタンをクリックした後に isOpen を false に変更
    setIsOpen(false);
  };

  return (
    <div>
      {page === 1 && (
        <>
          <Question4 changeState={changeState} setPage={setPage} />
        </>
      )}
      {page === 2 && (
        <>
          <Question5 changeState={changeState} setPage={setPage} />
        </>
      )}
      {page !== 1 && page !== 2 && (
        <>
          <Question6 changeState={changeState} setPage={setPage} open={open} />
          {isOpen && (
            <button
              onClick={searchData}
              className="bg-blue-500 fixed bottom-10 right-5 rounded-md text-white font-bold text-2xl p-10"
            >
              だれだろ
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default page;
