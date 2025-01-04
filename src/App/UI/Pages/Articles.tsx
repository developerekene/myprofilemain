import React, { useEffect } from 'react'
import { LuSearch } from 'react-icons/lu';
import { POSTS } from '../../utils/constants/Data'
import Navbar from '../Components/Navbar';
import "../Styles/Articles.css"
import { uid } from "uid";
import { useNavigate } from 'react-router-dom';
import { RootState, store } from '../../Redux/Store';
import { addUuid } from '../../Redux/Slices/posts';
import { useSelector } from 'react-redux';


const Articles: React.FunctionComponent = () => {
    const navigate = useNavigate();
    const uidData = uid();
    const [search, setSearch] = React.useState<any>("");
    const [switchI, setSwitchI] = React.useState<boolean>(true);

    const mapPosts = () => {
        return POSTS.filter((item) => {
            return search.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(search);
        }).map((item, index: number) => {
            return (

                <div className="library-card-art" key={index} onClick={() => {
                    if (item.status === "published") {
                        navigate(`/library/articles/posts/${item.article_id}`, { state: { post: item } })
                    } else {
                        alert("This article is not yet live")
                    }
                }}>
                    {/* <img src={item.icon} alt={`${item.title} icon`} className="library-icon" /> */}
                    <h3 className="library-title">{item.title}</h3>
                    <p className="library-desc">{item.description}</p>
                    <p className="library-desc">{item.status}</p>
                    <p className="library-desc">{item.author.name}</p>
                </div>
            )
        })
    }

    const addNewPosts = () => (
        <div>

        </div>
    )

    return (
        <div>
            <Navbar />
            <div className="projects_main_search">
                <div className="projects_search">
                    <LuSearch className="projects_search_icon" />
                    <input
                        placeholder="Search Articles"
                        className="projects_search_bar"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
            {switchI && (
                <div className='article-main'>
                    <div className='article-btn'>
                        <button onClick={() => {
                            setSwitchI(false)
                        }}>Submit</button>
                    </div>
                </div>
            )}
            {switchI ? mapPosts() : addNewPosts()}
        </div>
    )
}

export default Articles