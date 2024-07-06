import React from "react";

const FooterMiddleList = ({title, ListItem}) => {
  return (
    <div>
      <h3 className="font-titleFont text-white text-base font-semibold mb-3">
        {title}
      </h3>
      <ul className="flex flex-col gap-2 font-bodyFont">
        {
            ListItem.map((item)=>item.ListData.map((data, i)=>(
                <li key={i} className="hover:underline cursor-pointer text-sm font-titleFont tracking-wide hover:text-gray-100 duration-150">{data}</li>
            )))
        }
      </ul>
    </div>
  );
};

export default FooterMiddleList;
