import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pic1 from '../../../assets/1.png'
import pic2 from '../../../assets/2.png'
import pic3 from '../../../assets/3.png'
import { MdOutlineDateRange } from "react-icons/md";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div className="space-y-6">
            <h2 className="text-2xl">All Categories</h2>
            {
                categories.map(category => <Link className="block ml-4 text-xl font-semibold" key={category.id} to={`/category/${category.id}`}>{category.name}</Link>)
            }
        </div>
        <div>
           <div className="mt-6">
             <img src={pic1} alt="" />
             <h2 className="font-semibold text-xl mt-2">Bayern Slams Authorities <br />Over Flight Delay to Club World Cup</h2>
             <div className="flex mt-4 items-center gap-6">
                <p className="text-xl">Sports</p>
                <div className="flex items-center gap-2">
                <MdOutlineDateRange></MdOutlineDateRange>Jan 4, 2022
                </div> 
             </div>
           </div>
           <div className="mt-6">
             <img src={pic2} alt="" />
             <h2 className="font-semibold text-xl mt-2">Bayern Slams Authorities <br />Over Flight Delay to Club World Cup</h2>
             <div className="flex mt-4 items-center gap-6">
                <p className="text-xl">Sports</p>
                <div className="flex items-center gap-2">
                <MdOutlineDateRange></MdOutlineDateRange>Jan 4, 2022
                </div> 
             </div>
           </div>
           <div className="mt-6">
             <img src={pic3} alt="" />
             <h2 className="font-semibold text-xl mt-2">Bayern Slams Authorities <br />Over Flight Delay to Club World Cup</h2>
             <div className="flex mt-4 items-center gap-6">
                <p className="text-xl">Sports</p>
                <div className="flex items-center gap-2">
                <MdOutlineDateRange></MdOutlineDateRange>Jan 4, 2022
                </div> 
             </div>
           </div>
        </div>
        </div>
    );
};

export default LeftSideNav;