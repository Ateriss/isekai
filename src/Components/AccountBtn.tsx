import { ArrowDown2, ArrowRight2 } from "iconsax-react"
import { useState } from "react"

interface AccountBtnProps {
  title: string;
  children: React.ReactNode;
}

function AccountBtn(props: AccountBtnProps) {
  const [selected, setSelected] = useState(false);
  const [visible, setVisible] = useState(false);
 
  return (
    <div>
      <div
        onClick={() => {setSelected(!selected), setVisible(!visible)}}
        className={`before:transition-all flex justify-between items-center p-2 m-2 relative z-0 before:block before:absolute before:inset-0 before:bg-slate-200  before:-z-10  focus:before:w-4 before:w-0 hover:before:w-full hover:text-black `}
      >
        <h3>{props.title}</h3>
        {selected ? <ArrowDown2 /> : <ArrowRight2 />}
      </div>
      <div className="px-4 pb-2 text-justify ">{visible?props.children:null}</div>
    </div>
  );
}

export { AccountBtn };
