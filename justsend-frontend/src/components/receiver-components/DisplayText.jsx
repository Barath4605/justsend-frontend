import React, { useEffect, useState } from 'react';
import Navbar from "../homepage-components/Navbar.jsx";
import { useLocation, useNavigate, useParams } from "react-router-dom"
import QuickLink from "../QuickLink.jsx";
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import "../../styles/texteditor.scss"
import toast from "react-hot-toast";

const DisplayText = () => {
    const { state } = useLocation()
    const { code } = useParams()
    const nav = useNavigate();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchDataFromCode() {
            if (code && !state) {
                setLoading(true);
                try {
                    const res = await fetch(`http://localhost:8080/${code}`);

                    if (!res.ok) {
                        if (res.status === 404) {
                            toast.error("No such Code Exists!");
                            nav("/");
                            return;
                        }
                        if (res.status === 410) {
                            toast.error("Code Expired!");
                            nav("/");
                            return;
                        }
                        throw new Error("Something went wrong");
                    }

                    const fetchedData = await res.json();
                    setData(fetchedData);
                    toast.success("Data loaded successfully!");
                } catch (err) {
                    toast.error("Server Not Reachable!");
                    nav("/");
                } finally {
                    setLoading(false);
                }
            } else if (state) {
                setData(state);
            }
        }

        fetchDataFromCode();
    }, [code, state, nav]);

    // Create editor with the data
    const editor = useEditor({
        extensions: [StarterKit],
        content: data?.text || '',
        editable: false,
    }, [data])

    if (loading) {
        return (
            <main className="bg-linear-to-br from-black via-zinc-900 to-zinc-700
                                min-h-screen flex flex-col items-center justify-center">
                <div className="text-white text-2xl">Loading...</div>
            </main>
        );
    }

    if (!data) {
        return null;
    }

    return (
        <main className="bg-linear-to-br from-black via-zinc-900 to-zinc-700
                            min-h-screen flex flex-col">
            <Navbar />

            <section className="w-[90%] lg:w-[70%] min-h-150 m-auto text-white">
                <div className="flex">
                    <QuickLink toLink="HOME" onClickFunc={() => nav("/")} />
                </div>
                <div>
                    <h1 className="text-4xl my-2 lg:text-6xl font-bold lg:w-1/2">Text Data</h1>
                </div>

                <div className="tiptap-wrapper my-5">
                    <EditorContent editor={editor} className="tiptap" />
                </div>
            </section>
        </main>
    );
};

export default DisplayText;