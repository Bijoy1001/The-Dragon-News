import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrakingNews = () => {
    return (
        <div className="flex border bg-slate-100 mt-4">
            <button className="btn btn-secondary text-white">Barking news</button>
            <Marquee pauseOnHover={true} speed={80}>
                <Link className="mr-12" to='/'>
                    I can be a React component, multiple React components, or just some text....
                </Link>
                <Link className="mr-12" to='/'>
                    I can be a React component, multiple React components, or just some text....
                </Link>
                <Link className="mr-12" to='/'>
                    I can be a React component, multiple React components, or just some text....
                </Link>
                <Link className="mr-12" to='/'>
                    I can be a React component, multiple React components, or just some text....
                </Link>
            </Marquee>
        </div>
    );
};

export default BrakingNews;