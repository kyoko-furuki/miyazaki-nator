"use client";

import { zemi_members2 } from "@/constant/data2";
import Image from "next/image";
import { useRouter } from "next/navigation";

const page = (props) => {
  const id = props.params.id;
  console.log("id", id);
  const r = useRouter();
  //   const [user, setUser] = useState({
  //     id: 1,
  //     name: '村瀬太陽',
  //     answer: [1, 3, 1],
  //     image: '/people/matubara'
  // })
  const user = zemi_members2.find((item) => item.id == id);

  if (!user) {
    return <div>Not Found</div>;
  }

  // useEffect(() => {
  //   const userData = zemi_members2.find(item => item.id === id);
  //   setUser(userData)
  // })

  return (
    <>
      <img
        src={user.image}
        alt="image"
        className="w-screen h-screen object-cover"
      />
      <button
        onClick={() => r.push("/question0")}
        className="bg-blue-500 fixed bottom-10 right-5 rounded-md text-white font-bold text-2xl p-10"
      >
        戻る
      </button>
    </>
  );
};

export default page;
