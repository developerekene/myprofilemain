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


// interface routes {
//     postId: string
// }
const Articles: React.FunctionComponent = () => {
    const postId = useSelector((state: RootState) => state.posts.uuid);
    console.log(postId.uuid)

    useEffect(() => {

    }, [postId])
    const navigate = useNavigate();
    const uidData = uid();
    // console.log(uidData)
    const [search, setSearch] = React.useState<any>("");
    const mapPosts = () => {
        return POSTS.filter((item) => {
            return search.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(search);
        }).map((item, index: number) => {
            return (
                <div className='posts-main' key={index} onClick={() => {
                    store.dispatch(addUuid(item.article_id))
                    navigate(`/library/articles/posts/${item.article_id}`, { state: { post: item } })
                }}>
                    <h2 className='posts-main-title'>{item.title}</h2>
                    <p className='posts-main-desc'>{item.description}</p>
                    <p className='posts-main-a-name'>{item.author.name}</p>
                </div>
            )
        })
    }
    return (
        <div >
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
            {mapPosts()}
        </div>
    )
}

export default Articles