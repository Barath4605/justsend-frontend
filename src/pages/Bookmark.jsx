import React, {useEffect} from "react";
import Navbar from "../components/homepage-components/Navbar.jsx";
import BookmarkedItem from "../components/bookmarks-components/BookmarkItem.jsx";
import BookmarkItem from "../components/bookmarks-components/BookmarkItem.jsx";
import EmptyBookmark from "../components/bookmarks-components/EmptyBookmark.jsx";

const Bookmark = () => {

    const [bookmarks, setBookmarks] = React.useState([]);

    useEffect(() => {
        const raw = localStorage.getItem("justsend_bookmark");
        const bookmark = raw ? JSON.parse(raw) : [];
        setBookmarks(bookmark);
    }, []);

    const deleteBookmark = (code) => {
        const updated = bookmarks.filter(bookmark => bookmark.code !== code);

        setBookmarks(updated);
        localStorage.setItem("justsend_bookmark", JSON.stringify(updated));
    }

    return (
        <section className="h-full">
            <Navbar />
            {bookmarks.length > 0 ?
                <main className="grid lg:grid-cols-3 grid-cols-1 w-[90%] gap-0 m-auto mt-10">
                    {bookmarks.map((item, index) => (
                        <BookmarkItem title={item.title}
                                      code={item.code}
                                      key={index}
                                      deleteBookmark={() => deleteBookmark(item.code)}  />
                    ))}
                </main>
                :
                <EmptyBookmark />
            }
        </section>
    );
};

export default Bookmark;
