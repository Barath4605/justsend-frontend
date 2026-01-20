import React from "react";
import Navbar from "../components/homepage-components/Navbar.jsx";
import BookmarkedItem from "../components/bookmarks-components/BookmarkItem.jsx";
import BookmarkItem from "../components/bookmarks-components/BookmarkItem.jsx";

const Bookmark = () => {

    const bookmarks =
        [
            {
                "title": "late night thoughts i didnt say out loud",
                "code": "A7Q9K2"
            },
            {
                "title": "pretending im fine works until it doesnt",
                "code": "M4Z8T1"
            },
            {
                "title": "memories that still hit for no reason",
                "code": "9R2A7C"
            },
            {
                "title": "progress feels slow but its real",
                "code": "Q6N3K8"
            },
            {
                "title": "learning to let go without closure",
                "code": "L8T4M9"
            }
        ]


    return (
        <section className="h-full">
            <Navbar />
            <main className="grid lg:grid-cols-3 grid-cols-1 w-[90%] gap-0 m-auto mt-10">
                {bookmarks.map((item, index) => (
                    <BookmarkItem title={item.title} code={item.code} key={index} />
                ))}
            </main>
        </section>
    );
};

export default Bookmark;
